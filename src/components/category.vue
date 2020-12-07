<template>

<div :class="{ 'emoji-mart-category': true, 'emoji-mart-no-results': !hasResults }" v-if="isVisible && (isSearch || hasResults)">
  <div class="emoji-mart-category-label">
    <span>{{ i18n.categories[id] }}</span>
  </div>

  <template v-for="{ emojiObject, emojiView } in emojiObjects">
    <span
      v-if="emojiView.canRender"
      :data-title="emojiObject.short_name"
      :title="emojiView.title"
      class="emoji-mart-emoji"
      @mouseenter="emojiProps.onEnter(emojiView.getEmoji())"
      @mouseleave="emojiProps.onLeave(emojiView.getEmoji())"
      @click="emojiProps.onClick(emojiView.getEmoji())">
      <span  :class="emojiView.cssClass" :style="emojiView.cssStyle">{{emojiView.content}}</span>
    </span>
  </template>

  <div v-if="!hasResults && data">
    <emoji
      :data="data"
      emoji="sleuth_or_spy"
      :native="emojiProps.native"
      :skin="emojiProps.skin"
      :set="emojiProps.set"
    />
    <div class="emoji-mart-no-results-label">{{ i18n.notfound }}</div>
  </div>
</div>

</template>

<script>
import { EmojiView } from '../utils/emoji-data'
import Emoji from './Emoji'
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'EmojiCategory',

  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    i18n: {
      type: Object,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    emojis: {
      type: Array
    },
    emojiProps: {
      type: Object,
      required: true
    }
  },

  components: {
    Emoji
  },

  setup(props) {
    const isVisible = computed(() => {
      return !!props.emojis
    })
    const isSearch = computed(() => {
      return props.name === 'Search'
    })
    const hasResults = computed(() => {
      return props.emojis.length > 0
    })
    const emojiObjects = computed(() => {
      return props.emojis.map((emoji) => {
        let emojiObject = emoji
        let emojiView = new EmojiView(
          emoji,
          props.emojiProps.skin,
          props.emojiProps.set,
          props.emojiProps.native,
          props.emojiProps.fallback,
          props.emojiProps.emojiTooltip,
          props.emojiProps.emojiSize,
        )
        return { emojiObject, emojiView }
      })
    })

    return {
      isVisible,
      isSearch,
      hasResults,
      emojiObjects,
    }
  }
})

</script>
