<template>
  <div class="app">
    <div class="row">
      <h1>Emoji Mart Vue 🏬</h1>
    </div>
    <div class="row">
      <emoji :data="index" emoji=":santa::skin-tone-3:" :size="32" />
      <emoji :data="index" emoji="santa" set="twitter" :size="32" />
      <emoji :data="index" :emoji="santaEmojiObject" :size="32" />
    </div>

    <div class="row">
      <button @click="toggleVisible">Show / hide the picker</button>
      <button @click="toggleVisible" v-html="smile"></button>
    </div>

    <div class="row">
      <template
        v-for="set in ['native', 'apple', 'google', 'twitter', 'facebook']"
        :key="set"
      >
        <button
          @click="activeSet = set"
          :disabled="activeSet === set"
        >
          {{ set }}
        </button>
      </template>
    </div>

    <div v-if="isVisible" class="row">
      <picker
        :data="index"
        :set="activeSet"
        :native="native"
        :emoji="emoji"
        :emojiTooltip="true"
        :title="title"
        :emojiSize="30"
        @select="showEmoji"
      />
    </div>

    <div class="row">{{ emojisOutput }}</div>

    <div class="row-small">
      <iframe
        src="https://ghbtns.com/github-btn.html?user=serebrov&repo=emoji-mart-vue&type=star&count=true"
        frameBorder="0"
        scrolling="0"
        width="90px"
        height="20px"
      ></iframe>
    </div>

    <div class="row"></div>
    <h2>QDialog Example</h2>
    <div class="row">
<!--      <q-btn label="Open QDialog" @click="emojiPickerDialog = true" />-->
    </div>

<!--    <q-dialog v-model="emojiPickerDialog">-->
<!--      <template v-slot:body style="height:450px">-->
<!--        <picker :data="index" :emojiSize="24" :native="true"></picker>-->
<!--      </template>-->
<!--    </q-dialog>-->

    <div class="row"></div>
    <h2>Custom Dialog Example</h2>
    <div class="row">
      <button @click="emojiPickerCustomDialog = true">
        Open Cuttom Dialog
      </button>
    </div>

    <div class="popup" v-if="emojiPickerCustomDialog">
      <div class="popup-box" @click="emojiPickerCustomDialog = false">
        <div class="popup-content" @click="$event.stopPropagation()">
          <div class="popup-close">
            <a @click="emojiPickerCustomDialog = false">X</a>
          </div>
          <h2>
            Emoji Selector
          </h2>
          <picker :data="index" :emojiSize="24" :native="true"></picker>
        </div>
      </div>
    </div>

    <div class="row"></div>
    <h2>Custom Search And Preview Templates Example</h2>
    <div class="row">
      Also here we use "StaticPicker" which does not use virtual scroller (it is
      slower, but easier to customize with css)
    </div>
    <div class="row">
      <StaticPicker :data="index" :native="true">
        <template v-slot:searchTemplate="slotProps" >
          <input
            type="text"
            :placeholder="slotProps.i18n.search"
            v-on:input="slotProps.onSearch($event.target.value)"
          />
        </template>
        <template v-slot:previewTemplate="slotProps" >
          <div class="emoji-mart-preview">
            <div class="emoji-mart-preview-emoji">
              <Emoji
                :data="slotProps.data"
                :emoji="slotProps.emoji ? slotProps.emoji : 'point_up'"
                :native="slotProps.emojiProps.native"
                :skin="slotProps.emojiProps.skin"
                :set="slotProps.emojiProps.set"
              />
            </div>
            <div class="emoji-mart-preview-data">
              <div class="emoji-mart-preview-name">
                {{
                  slotProps.emoji
                    ? '~' + slotProps.emoji.name + '~'
                    : 'Choose...'
                }}
              </div>
              <div class="emoji-mart-preview-shortnames">
                {{ slotProps.emoji ? slotProps.emoji.colons : '' }}
              </div>
            </div>
          </div>
        </template>
      </StaticPicker>
    </div>

    <div class="row"></div>
    <h2>Filtered picker example</h2>
    <div class="row" v-show="flagsVisible">
      <Picker
        :native="true"
        emoji="flag-tf"
        :emojiSize="18"
        :data="indexFiltered"
        ref="flagsRef"
      />
    </div>
    <div class="row">
      <button @click="toggleFlagsVisible">
        Show / hide the flags picker (with v-show)
      </button>
    </div>

    <div class="row"></div>
    <h2>I18n picker example</h2>
    <div class="row">
      <Picker emoji="department_store" :data="indexI18n" :i18n="i18n" />
    </div>

    <div class="row"></div>
    <h2>Custom order example</h2>
    <div class="row">
      <Picker :data="indexInclude" />
    </div>
  </div>
</template>

<script>
import data from '../../data/all.json'
import {
  Picker, StaticPicker, Emoji, EmojiIndex,
} from '../../src'
import '../../css/emoji-mart.css'
import { defineComponent, computed, ref } from 'vue'

// import { QBtn, QDialog } from 'quasar-framework/dist/quasar.mat.esm'

const CUSTOM_EMOJIS = [
  {
    name: 'Party Parrot',
    short_names: ['parrot'],
    keywords: ['party'],
    imageUrl: './images/parrot.gif',
  },
  {
    name: 'Octocat',
    short_names: ['octocat'],
    keywords: ['github'],
    imageUrl: 'https://github.githubassets.com/images/icons/emoji/octocat.png',
  },
  {
    name: 'Squirrel',
    short_names: ['shipit', 'squirrel'],
    keywords: ['github'],
    imageUrl: 'https://github.githubassets.com/images/icons/emoji/shipit.png',
  },
]

const index = new EmojiIndex(data, {
  custom: CUSTOM_EMOJIS,
})

const indexFiltered = new EmojiIndex(data, {
  custom: CUSTOM_EMOJIS,
  emojisToShowFilter: (emoji) => emoji.short_names[0].match(/^flag.*/) !== null,
})

const i18n = {
  categories: {
    search: '搜索结果',
    recent: '经常使用',
    smileys: '心情',
    people: '人物',
    nature: '动物 & 大自然',
    foods: '食物 & 饮料',
    activity: '活动',
    places: '旅行 & 地标',
    objects: '物体',
    symbols: '符号',
    flags: '国旗',
    custom: '自定义',
  },
}

const indexI18n = new EmojiIndex(data, {
  exclude: [
    'flags',
    'symbols',
    'objects',
    'activity',
    'foods',
    'people',
    'places',
  ],
})

const indexInclude = new EmojiIndex(data, {
  include: ['nature', 'smileys', 'recent'],
})

export default defineComponent({
  name: 'app',

  setup() {
    const flagsRef = ref(null)
    const isVisible = ref(true)
    const flagsVisible = ref(true)
    const emojisOutput = ref('')
    const activeSet = ref('native')

    const native = computed(() => activeSet.value === 'native')
    const smile = computed(() => {
      // Static emoji example
      const emoji = index.findEmoji(':smile:')
      // Note, that position in the emoji sheet is calculated by
      // `emoji` object
      const style = `background-position: ${emoji.getPosition()}; background-image: url(https://unpkg.com/emoji-datasource-twitter@5.0.1/img/twitter/sheets-256/64.png); width: 24px; height: 24px; display: inline-block; background-size: 5700%`
      return `<div class='emoji' style="${style}"></div>`
    })
    const santaEmojiObject = computed(() => index.findEmoji(':santa:'))

    const toggleVisible = () => {
      isVisible.value = !isVisible.value
    }
    const toggleFlagsVisible = () => {
      flagsVisible.value = !flagsVisible.value
      if (!flagsVisible.value) {
        flagsRef.value.onAnchorClick(flagsRef.value.categories[0])
      }
    }
    const showEmoji = (emoji) => {
      emojisOutput.value += emoji.native
    }

    return {
      flagsRef,
      index,
      indexFiltered,
      indexInclude,
      indexI18n,
      i18n,
      activeSet,
      emoji: 'point_up',
      title: 'Pick your emoji…',
      isVisible,
      emojiPickerDialog: false,
      emojiPickerCustomDialog: false,
      emojisOutput,
      flagsVisible,
      native,
      smile,
      santaEmojiObject,
      toggleVisible,
      toggleFlagsVisible,
      showEmoji,
    }
  },

  components: {
    Picker,
    StaticPicker,
    Emoji,
  },
})
</script>

<style scoped>
button + button {
  margin-left: 0.5em;
}
button {
  padding: 0.4em 0.6em;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff;
  outline: 0;
  cursor: pointer;
}

button[disabled] {
  border-color: #ae65c5;
  cursor: default;
}

.modal {
  color: red;
}

/**
 * See https://vue-loader.vuejs.org/guide/scoped-css.html#deep-selectors
 * the `>>>` allows to apply scoped css to child element that is generated
 * dynamically
**/
.modal ::v-deep(.modal-scroll) {
  color: red;
  max-height: none;
}
.modal .modal-body {
  max-height: none;
}

h1 {
  font-family: Courier;
  font-size: 2rem;
}

h2 {
  font-family: Courier;
  font-size: 1.25rem;
  margin-top: 2rem;
}

.app .row {
  display: block;
}

.row + .row {
  margin-top: 2em;
}

.row-small {
  margin-top: 1em;
}

.emoji-mart {
  margin: 0 auto;
  text-align: left;
}

.emoji-mart-title-label {
  font-size: 21px;
}

.popup {
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 200;
  background: rebeccapurple;
  opacity: 95%;
}
.popup-box {
  height: 100%;
  overflow: auto;
  display: block;
  padding-top: 120px;
  padding-bottom: 80px;
}
.popup-content {
  background: white;
  box-shadow: 0px 24px 54px rgba(20, 28, 49, 0.14);
  border-radius: 18px;
  padding: 6px 6px 9px 6px;
  position: relative;
  width: 100%;
  max-width: 462px;
  margin: 0 auto;
}
.popup-close {
  position: absolute;
  top: 20px;
  right: 30px;
  cursor: pointer;
}
</style>
