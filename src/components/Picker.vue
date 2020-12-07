<template>
  <div class="emoji-mart" :style="customStyles">
    <div class="emoji-mart-bar emoji-mart-bar-anchors" v-if="showCategories">
      <anchors
        :i18n="mergedI18n"
        :color="color"
        :categories="categories"
        :active-category="activeCategory"
        @active="onAnchorClick"
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

    <category
      v-show="searchEmojis"
      class="emoji-mart-search-results"
      :data="data"
      :i18n="mergedI18n"
      id="search"
      name="Search"
      :emojis="searchEmojis"
      :emoji-props="emojiProps"
    />
    <DynamicScroller
      v-show="!searchEmojis"
      ref="dynScrollerRef"
      :items="scrollerCategories"
      :min-item-size="60"
      class="scroller"
      :buffer="400"
      key-field="id"
      :emit-update="true"
      @update="onScrollUpdate"
    >
      <template v-slot="{ item, active, index }">
        <DynamicScrollerItem :item="item" :active="active" :data-index="index">
          <Category
            v-show="true"
            ref="categories"
            :i18n="item.mergedI18n"
            :id="item.category.id"
            :name="item.category.name"
            :emojis="item.category.emojis"
            :emoji-props="item.emojiProps"
          />
        </DynamicScrollerItem>
      </template>
    </DynamicScroller>

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
import Anchors from './anchors'
import Category from './category'
import Preview from './preview'
import Search from './search'

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

import { defineComponent, computed, ref } from 'vue'

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
  name: 'EmojiPicker',

  props: {
    ...PickerProps,
    data: {
      type: Object,
      required: true,
    },
  },

  components: {
    Anchors,
    Category,
    Preview,
    Search,
    DynamicScroller,
    DynamicScrollerItem,
  },

  emits: ['select', 'skin-change'],

  setup(props, { emit }) {
    let skipScrollUpdate = false
    let categories = [...props.data.categories()]

    const previewEmoji = ref(null)
    const searchEmojis = ref(null)
    const dynScrollerRef = ref(null)

    categories = categories.filter(category => category.emojis.length > 0)
    categories[0].first = true
    Object.freeze(categories)

    const activeCategory = ref(categories[0])

    const calculateWidth = computed(() => {
      return props.perLine * (props.emojiSize + 12) + 12 + 2 + measureScrollbar()
    })

    const activeSkin = computed(() => props.skin || store.get('skin') || props.defaultSkin)

    const customStyles = computed(() => {
      return {
        width: calculateWidth.value + 'px',
        ...props.pickerStyles,
      }
    })

    const emojiProps = computed(() => {
      return {
        native: props.native,
        skin: activeSkin.value,
        set: props.set,
        emojiTooltip: props.emojiTooltip,
        emojiSize: props.emojiSize,
        onEnter: onEmojiEnter,
        onLeave: onEmojiLeave,
        onClick: onEmojiClick,
      }
    })

    const skinProps = computed(() => {
      return {
        skin: activeSkin.value,
      }
    })

    const mergedI18n = computed(() => {
      return Object.freeze(deepMerge(I18N, props.i18n))
    })

    const scrollerCategories = computed(() => {
      let id = 0
      return categories.map((category) => {
        return {
          id: id++,
          category: category,
          show:
            !searchEmojis.value &&
            (props.infiniteScroll || category.id === activeCategory.value.id),
          mergedI18n: mergedI18n.value,
          data: props.data,
          emojisLength: category.emojis.length,
          emojiProps: emojiProps.value,
        }
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
          e,
        )
        return props.data.firstEmoji()
      }
    })

    // =============================
    const onScrollUpdate = (startIndex, endIndex) => {
      if (skipScrollUpdate) {
        skipScrollUpdate = false
      } else {
        // The `endIndex-2` seems to work, but this depends on the internals
        // of the virtual scroller, I didn't observe it to be less than 0,
        // but just for the case, we aslo have a fallback to `0` here.
        let activeIndex = endIndex - 2 > 0 ? endIndex - 2 : 0
        activeCategory.value = categories[activeIndex]
      }
    }
    const onAnchorClick = (category) => {
      let i = categories.indexOf(category)
      if (dynScrollerRef.value) {
        dynScrollerRef.value.scrollToItem(i)
      }

      activeCategory.value = categories[i]
      skipScrollUpdate = true
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
      dynScrollerRef,
      activeCategory,
      previewEmoji,
      searchEmojis,
      categories,

      customStyles,
      mergedI18n,
      onAnchorClick,
      onSearch,
      emojiProps,
      scrollerCategories,
      onScrollUpdate,
      idleEmoji,
      skinProps,
      onSkinChange,
    }
  }
})
</script>
