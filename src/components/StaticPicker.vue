<template>
  <div class="emoji-mart emoji-mart-static" :style="customStyles">
    <div class="emoji-mart-bar emoji-mart-bar-anchors" v-if="showCategories">
      <anchors
        :data="data"
        :i18n="mergedI18n"
        :color="color"
        :categories="categories"
        :active-category="activeCategory"
        @click="onAnchorClick"
      />
    </div>

    <slot
      name="searchTemplate"
      :data="data"
      :i18n="i18n"
      :auto-focus="autoFocus"
      :on-search="onSearch"
    >
      <search
        v-if="showSearch"
        ref="search"
        :data="data"
        :i18n="mergedI18n"
        :auto-focus="autoFocus"
        :on-search="onSearch"
        @search="onSearch"
      />
    </slot>

    <div class="emoji-mart-scroll" ref="scrollRef" @scroll="onScroll">
      <category
        v-show="searchEmojis"
        :data="data"
        :i18n="mergedI18n"
        id="search"
        name="Search"
        :emojis="searchEmojis"
        :emoji-props="emojiProps"
      />
      <category
        v-for="category in filteredCategories"
        v-show="!searchEmojis && (infiniteScroll || category === activeCategory)"
        ref="categories"
        :key="category.id"
        :data="data"
        :i18n="mergedI18n"
        :id="category.id"
        :name="category.name"
        :emojis="category.emojis"
        :emoji-props="emojiProps"
      />
    </div>

    <slot
      name="previewTemplate"
      :data="data"
      :title="title"
      :emoji="previewEmoji"
      :idle-emoji="idleEmoji"
      :show-skin-tones="showSkinTones"
      :emoji-props="emojiProps"
      :skin-props="skinProps"
      :on-skin-change="onSkinChange"
    >
      <div class="emoji-mart-bar emoji-mart-bar-preview" v-if="showPreview">
        <preview
          :data="data"
          :title="title"
          :emoji="previewEmoji"
          :idle-emoji="idleEmoji"
          :show-skin-tones="showSkinTones"
          :emoji-props="emojiProps"
          :skin-props="skinProps"
          :on-skin-change="onSkinChange"
        />
      </div>
    </slot>
  </div>
</template>

<script>
import '../vendor/raf-polyfill'
import store from '../utils/store'
import frequently from '../utils/frequently'
import { deepMerge, measureScrollbar } from '../utils'
import { PickerProps } from '../utils/shared-props'
import Anchors from './anchors.vue'
import Category from './category.vue'
import Preview from './preview.vue'
import Search from './search.vue'
import { defineComponent, ref, computed } from 'vue'

/*
 * Note about `buffer` setting for DynamicScroller: this is a
 * fix for #49 - when clicking on the "Flags" category for the first
 * time, the category is not scrolled to the top of the component.
 * This is because the last category size is not calculated yet and
 * virtual scroller takes 'minItemSize' as category height.
 *
 * Virtual scroller (RecycleScroller component) uses `buffer` value
 * to  decide how many components to render intitially depending on
 * the scroll area size + buffer*2 (and all categories initially
 * have min size, 60px).
 *
 * By increasing buffer to 400px, we make the scroller to perform
 * size calculation for all categories and the following
 * scrollToItem() calls work correctly.
 */

import { DynamicScroller, DynamicScrollerItem } from 'vue3-virtual-scroller'
import 'vue3-virtual-scroller/dist/vue3-virtual-scroller.css'

const I18N = {
  search: 'Search',
  notfound: 'No Emoji Found',
  categories: {
    search: 'Search Results',
    recent: 'Frequently Used',
    smileys: 'Smileys & Emotion',
    people: 'People & Body',
    nature: 'Animals & Nature',
    foods: 'Food & Drink',
    activity: 'Activity',
    places: 'Travel & Places',
    objects: 'Objects',
    symbols: 'Symbols',
    flags: 'Flags',
    custom: 'Custom',
  },
}

export default defineComponent({
  name: 'EmojiStaticPicker',

  components: {
    Anchors,
    Category,
    Preview,
    Search,
    DynamicScroller,
    DynamicScrollerItem,
  },

  props: {
    ...PickerProps,
    include: {
      type: Array,
      default: () => []
    },
    emojisToShowFilter: {
      type: Function
    },
    exclude: {
      type: Array,
      default: () => []
    },
    data: {
      type: Object,
      required: true,
    },
  },

  emits: ['skin-change', 'select'],

  setup(props, { emit }) {
    let categories = [...props.data.categories()].filter((category) => {
      return category.emojis.length > 0
    })

    categories[0].first = true
    Object.freeze(categories)

    const scrollRef = ref(null)
    const categoriesRef = ref(null)
    const activeSkin = ref(props.skin || store.get('skin') || props.defaultSkin)
    const activeCategory = ref(categories[0])
    const previewEmoji = ref(null)
    const searchEmojis = ref(null)

    const calculateWidth = computed(() => props.perLine * (props.emojiSize + 12) + 12 + 2 + measureScrollbar())

    const emojiProps = computed(() => ({
      native: props.native,
      skin: activeSkin.value,
      set: props.set,
      emojiTooltip: props.emojiTooltip,
      emojiSize: props.emojiSize,
      onEnter: onEmojiEnter,
      onLeave: onEmojiLeave,
      onClick: onEmojiClick,
    }))

    const skinProps = computed(() => ({ skin: activeSkin.value }))

    const customStyles = computed(() => ({
      width: calculateWidth.value + 'px',
      ...props.pickerStyles,
    }))

    const filteredCategories = computed(() => {
      return categories.filter((category) => {
        let isIncluded =
          props.include && props.include.length
            ? props.include.indexOf(category.id) > -1
            : true
        let isExcluded =
          props.exclude && props.exclude.length
            ? props.exclude.indexOf(category.id) > -1
            : false
        let hasEmojis = category.emojis.length > 0
        if (props.emojisToShowFilter) {
          hasEmojis = category.emojis.some((emoji) => {
            return props.emojisToShowFilter(props.data.emojis[emoji] || emoji)
          })
        }
        return isIncluded && !isExcluded && hasEmojis
      })
    })

    const idleEmoji = computed(() => {
      try {
        return props.data.emoji(props.emoji)
      } catch (e) {
        console.error(
          'Default preview emoji `' +
          props.emoji +
          '` is not available, check the Picker `emoji` property',
        )
        console.error(e)
        return props.data.firstEmoji()
      }
    })

    // =============================================
    let waitingForPaint = false
    const onScroll = () => {
      if (props.infiniteScroll && !waitingForPaint) {
        waitingForPaint = true
        window.requestAnimationFrame(onScrollPaint)
      }
    }

    const onScrollPaint = () => {
      waitingForPaint = false
      let scrollTop = scrollRef.scrollTop,
        _activeCategory = filteredCategories.value[0]
      for (let i = 0, l = filteredCategories.value.length; i < l; i++) {
        let category = filteredCategories.value[i],
          component = categoriesRef.value[i]
        // The `-50` offset switches active category (selected in the
        // anchors bar) a bit eariler, before it actually reaches the top.
        if (component && component.$el.offsetTop - 50 > scrollTop) {
          break
        }
        _activeCategory = category
      }

      activeCategory.value = _activeCategory
    }

    const onAnchorClick = (category) => {
      let i = filteredCategories.value.indexOf(category),
        component = categoriesRef.value[i],
        scrollToComponent = () => {
          if (component) {
            let top = component.$el.offsetTop
            if (category.first) {
              top = 0
            }

            scrollRef.value.scrollTop = top
          }
        }

      if (props.infiniteScroll) {
        scrollToComponent()
      } else {
        activeCategory.value = filteredCategories.value[i]
      }
    }

    const onSearch = (value) => {
      searchEmojis.value = props.data.search(value, props.maxSearchResults)
    }

    const onEmojiEnter = (emoji) => {
      previewEmoji.value = emoji
    }

    const onEmojiLeave = () => {
      previewEmoji.value = null
    }

    const onEmojiClick = (emoji) => {
      emit('select', emoji)
      frequently.add(emoji)
    }

    const onSkinChange = (skin) => {
      activeSkin.value = skin
      store.update({ skin })

      emit('skin-change', skin)
    }

    return {
      activeCategory,
      previewEmoji,
      searchEmojis,
      customStyles,
      filteredCategories,
      skinProps,
      mergedI18n: computed(() => Object.freeze(deepMerge(I18N, props.i18n))),
      idleEmoji,

      scrollRef,
      categories,
      onAnchorClick,
      onSearch,
      onScroll,
      emojiProps,
      onSkinChange,
    }
  }
})
</script>
