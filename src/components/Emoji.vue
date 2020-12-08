<template>
  <span
    v-if="view.canRender"
    :title="view.title"
    :data-title="title"
    class="emoji-mart-emoji"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @click="onClick"
  >
    <span :class="view.cssClass" :style="view.cssStyle">{{ view.content }}</span>
  </span>
</template>

<script>
import { EmojiProps } from '../utils/shared-props'
import { EmojiView } from '../utils/emoji-data'
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'Emoji',

  props: {
    ...EmojiProps,
    data: {
      type: Object,
      required: true,
    },
  },

  emits: ['mouseenter', 'mouseleave', 'click'],

  setup(props, { emit }) {
    const emojiObject = computed(() =>
      typeof props.emoji == 'string' ? props.data.findEmoji(props.emoji) : props.emoji
    )

    const view = computed(
      () =>
        new EmojiView(
          emojiObject.value,
          props.skin,
          props.set,
          props.native,
          props.fallback,
          props.tooltip,
          props.size
        )
    )

    const sanitizedData = computed(() => {
      return emojiObject.value._sanitized
    })

    const title = computed(() => {
      return props.tooltip ? emojiObject.value.short_name : null
    })

    return {
      view,
      title,
      onClick: () => emit('click', emojiObject.value),
      onMouseEnter: () => emit('mouseenter', emojiObject.value),
      onMouseLeave: () => emit('mouseleave', emojiObject.value),
      emojiObject, // use jest unit
      sanitizedData, // use jest unit
    }
  },
})
</script>
