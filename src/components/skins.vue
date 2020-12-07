<template>

<div :class="{ 'emoji-mart-skin-swatches': true, 'emoji-mart-skin-swatches-opened': opened }">
  <span v-for="skinTone in 6" :key="skinTone" :class="{ 'emoji-mart-skin-swatch': true, 'emoji-mart-skin-swatch-selected': skin === skinTone }">
    <span :class="'emoji-mart-skin emoji-mart-skin-tone-' + skinTone" @click="onClick(skinTone)"></span>
  </span>
</div>

</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'EmojiSkins',

  props: {
    skin: {
      type: Number,
      required: true
    }
  },

  setup(props, { emit }) {
    const opened = ref(false)

    const onClick = (skinTone) => {
      if (opened.value) {
        if (skinTone !== props.skin) {
          emit('change', skinTone)
        }
      }

      opened.value = !opened.value
    }

    return {
      opened,
      onClick
    }
  }
})

</script>
