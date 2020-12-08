<template>
  <div class="emoji-mart-search">
    <input v-model="value" type="text" :placeholder="i18n.search" />
  </div>
</template>

<script>
import { defineComponent, onMounted, computed, watch, ref, getCurrentInstance } from 'vue'

export default defineComponent({
  props: {
    data: {
      type: Object,
      required: true,
    },
    i18n: {
      type: Object,
      required: true,
    },
    autoFocus: {
      type: Boolean,
      default: false,
    },
    onSearch: {
      type: Function,
      required: true,
    },
  },

  emits: ['search'],

  setup(props, { emit }) {
    const value = ref('')

    watch(value, () => emit('search', value.value))

    onMounted(() => {
      if (!props.autoFocus) return

      let $el = (getCurrentInstance() && getCurrentInstance().proxy.$el) || null
      if (!$el) return

      $el.querySelector('input').focus()
    })

    return {
      value,
      clear: () => (value.value = ''),
      emojiIndex: computed(() => props.data),
    }
  },
})
</script>
