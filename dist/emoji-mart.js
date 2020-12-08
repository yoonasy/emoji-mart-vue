(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["EmojiMart"] = factory(require("vue"));
	else
		root["EmojiMart"] = factory(root["Vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_vue__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/cssr/project/emoji-mart-vue/node_modules/@babel/runtime/helpers/classCallCheck.js'");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/cssr/project/emoji-mart-vue/node_modules/@babel/runtime/helpers/createClass.js'");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/cssr/project/emoji-mart-vue/node_modules/@babel/runtime/helpers/defineProperty.js'");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/cssr/project/emoji-mart-vue/node_modules/@babel/runtime/helpers/toConsumableArray.js'");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/cssr/project/emoji-mart-vue/node_modules/@babel/runtime/helpers/typeof.js'");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/dist/index.js?!./src/components/Emoji.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/dist??ref--10-0!./src/components/Emoji.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_shared_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/shared-props */ "./src/utils/shared-props.js");
/* harmony import */ var _utils_emoji_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/emoji-data */ "./src/utils/emoji-data.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_3__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




/* harmony default export */ __webpack_exports__["default"] = (Object(vue__WEBPACK_IMPORTED_MODULE_3__["defineComponent"])({
  name: 'Emoji',
  props: _objectSpread(_objectSpread({}, _utils_shared_props__WEBPACK_IMPORTED_MODULE_1__["EmojiProps"]), {}, {
    data: {
      type: Object,
      required: true
    }
  }),
  emits: ['mouseenter', 'mouseleave', 'click'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var emojiObject = Object(vue__WEBPACK_IMPORTED_MODULE_3__["computed"])(function () {
      return typeof props.emoji == 'string' ? props.data.findEmoji(props.emoji) : props.emoji;
    });
    var view = Object(vue__WEBPACK_IMPORTED_MODULE_3__["computed"])(function () {
      return new _utils_emoji_data__WEBPACK_IMPORTED_MODULE_2__["EmojiView"](emojiObject.value, props.skin, props.set, props.native, props.fallback, props.tooltip, props.size);
    });
    var sanitizedData = Object(vue__WEBPACK_IMPORTED_MODULE_3__["computed"])(function () {
      return emojiObject.value._sanitized;
    });
    var title = Object(vue__WEBPACK_IMPORTED_MODULE_3__["computed"])(function () {
      return props.tooltip ? emojiObject.value.short_name : null;
    });
    return {
      view: view,
      title: title,
      onClick: function onClick() {
        return emit('click', emojiObject.value);
      },
      onMouseEnter: function onMouseEnter() {
        return emit('mouseenter', emojiObject.value);
      },
      onMouseLeave: function onMouseLeave() {
        return emit('mouseleave', emojiObject.value);
      },
      emojiObject: emojiObject,
      // use jest unit
      sanitizedData: sanitizedData // use jest unit

    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/dist/index.js?!./src/components/Picker.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/dist??ref--10-0!./src/components/Picker.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _polyfills_animationFrame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../polyfills/animationFrame */ "./src/polyfills/animationFrame.js");
/* harmony import */ var _polyfills_animationFrame__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_polyfills_animationFrame__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/store */ "./src/utils/store.js");
/* harmony import */ var _utils_frequently__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/frequently */ "./src/utils/frequently.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
/* harmony import */ var _utils_shared_props__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/shared-props */ "./src/utils/shared-props.js");
/* harmony import */ var _anchors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./anchors */ "./src/components/anchors.vue");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./category */ "./src/components/category.vue");
/* harmony import */ var _preview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./preview */ "./src/components/preview.vue");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search */ "./src/components/search.vue");
/* harmony import */ var vue3_virtual_scroller__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vue3-virtual-scroller */ "./node_modules/vue3-virtual-scroller/dist/vue3-virtual-scroller.esm.js");
/* harmony import */ var vue3_virtual_scroller_dist_vue3_virtual_scroller_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vue3-virtual-scroller/dist/vue3-virtual-scroller.css */ "./node_modules/vue3-virtual-scroller/dist/vue3-virtual-scroller.css");
/* harmony import */ var vue3_virtual_scroller_dist_vue3_virtual_scroller_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(vue3_virtual_scroller_dist_vue3_virtual_scroller_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_13__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










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




var I18N = {
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
    custom: 'Custom'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Object(vue__WEBPACK_IMPORTED_MODULE_13__["defineComponent"])({
  name: 'Picker',
  props: _objectSpread(_objectSpread({}, _utils_shared_props__WEBPACK_IMPORTED_MODULE_6__["PickerProps"]), {}, {
    data: {
      type: Object,
      required: true
    }
  }),
  components: {
    Anchors: _anchors__WEBPACK_IMPORTED_MODULE_7__["default"],
    Category: _category__WEBPACK_IMPORTED_MODULE_8__["default"],
    Preview: _preview__WEBPACK_IMPORTED_MODULE_9__["default"],
    Search: _search__WEBPACK_IMPORTED_MODULE_10__["default"],
    DynamicScroller: vue3_virtual_scroller__WEBPACK_IMPORTED_MODULE_11__["DynamicScroller"],
    DynamicScrollerItem: vue3_virtual_scroller__WEBPACK_IMPORTED_MODULE_11__["DynamicScrollerItem"]
  },
  emits: ['select', 'skin-change'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var skipScrollUpdate = false;

    var categories = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(props.data.categories());

    var previewEmoji = Object(vue__WEBPACK_IMPORTED_MODULE_13__["ref"])(null);
    var searchEmojis = Object(vue__WEBPACK_IMPORTED_MODULE_13__["ref"])(null);
    var dynScrollerRef = Object(vue__WEBPACK_IMPORTED_MODULE_13__["ref"])(null);
    categories = categories.filter(function (category) {
      return category.emojis.length > 0;
    });
    categories[0].first = true;
    Object.freeze(categories);
    var activeCategory = Object(vue__WEBPACK_IMPORTED_MODULE_13__["ref"])(categories[0]);
    var calculateWidth = Object(vue__WEBPACK_IMPORTED_MODULE_13__["computed"])(function () {
      return props.perLine * (props.emojiSize + 12) + 12 + 2 + Object(_utils__WEBPACK_IMPORTED_MODULE_5__["measureScrollbar"])();
    });
    var activeSkin = Object(vue__WEBPACK_IMPORTED_MODULE_13__["computed"])(function () {
      return props.skin || _utils_store__WEBPACK_IMPORTED_MODULE_3__["default"].get('skin') || props.defaultSkin;
    });
    var customStyles = Object(vue__WEBPACK_IMPORTED_MODULE_13__["computed"])(function () {
      return _objectSpread({
        width: calculateWidth.value + 'px'
      }, props.pickerStyles);
    });
    var emojiProps = Object(vue__WEBPACK_IMPORTED_MODULE_13__["computed"])(function () {
      return {
        native: props.native,
        skin: activeSkin.value,
        set: props.set,
        emojiTooltip: props.emojiTooltip,
        emojiSize: props.emojiSize,
        onEnter: onEmojiEnter,
        onLeave: onEmojiLeave,
        onClick: onEmojiClick
      };
    });
    var skinProps = Object(vue__WEBPACK_IMPORTED_MODULE_13__["computed"])(function () {
      return {
        skin: activeSkin.value
      };
    });
    var mergedI18n = Object(vue__WEBPACK_IMPORTED_MODULE_13__["computed"])(function () {
      return Object.freeze(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["deepMerge"])(I18N, props.i18n));
    });
    var scrollerCategories = Object(vue__WEBPACK_IMPORTED_MODULE_13__["computed"])(function () {
      var id = 0;
      return categories.map(function (category) {
        return {
          id: id++,
          category: category,
          show: !searchEmojis.value && (props.infiniteScroll || category.id === activeCategory.value.id),
          mergedI18n: mergedI18n.value,
          data: props.data,
          emojisLength: category.emojis.length,
          emojiProps: emojiProps.value
        };
      });
    });
    var idleEmoji = Object(vue__WEBPACK_IMPORTED_MODULE_13__["computed"])(function () {
      try {
        return props.data.emoji(props.emoji);
      } catch (e) {
        console.error('Default preview emoji `' + props.emoji + '` is not available, check the Picker `emoji` property', e);
        return props.data.firstEmoji();
      }
    }); // =============================

    var onScrollUpdate = function onScrollUpdate(startIndex, endIndex) {
      if (skipScrollUpdate) {
        skipScrollUpdate = false;
      } else {
        // The `endIndex-2` seems to work, but this depends on the internals
        // of the virtual scroller, I didn't observe it to be less than 0,
        // but just for the case, we aslo have a fallback to `0` here.
        var activeIndex = endIndex - 2 > 0 ? endIndex - 2 : 0;
        activeCategory.value = categories[activeIndex];
      }
    };

    var onAnchorClick = function onAnchorClick(category) {
      var i = categories.findIndex(function (e) {
        return e.id === category.id;
      });

      if (dynScrollerRef.value) {
        dynScrollerRef.value.scrollToItem(i);
      }

      activeCategory.value = categories.find(function (e) {
        return e.id === category.id;
      });
      skipScrollUpdate = true;
    };

    var onSearch = function onSearch(value) {
      searchEmojis.value = props.data.search(value, props.maxSearchResults);
    };

    var onEmojiEnter = function onEmojiEnter(emoji) {
      previewEmoji.value = emoji;
    };

    var onEmojiLeave = function onEmojiLeave() {
      previewEmoji.value = null;
    };

    var onEmojiClick = function onEmojiClick(emoji) {
      emit('select', emoji);
      _utils_frequently__WEBPACK_IMPORTED_MODULE_4__["default"].add(emoji);
    };

    var onSkinChange = function onSkinChange(skin) {
      activeSkin.value = skin;
      _utils_store__WEBPACK_IMPORTED_MODULE_3__["default"].update({
        skin: skin
      });
      emit('skin-change', skin);
    };

    return {
      dynScrollerRef: dynScrollerRef,
      activeCategory: activeCategory,
      previewEmoji: previewEmoji,
      searchEmojis: searchEmojis,
      categories: categories,
      customStyles: customStyles,
      mergedI18n: mergedI18n,
      onAnchorClick: onAnchorClick,
      onSearch: onSearch,
      emojiProps: emojiProps,
      scrollerCategories: scrollerCategories,
      onScrollUpdate: onScrollUpdate,
      idleEmoji: idleEmoji,
      skinProps: skinProps,
      onSkinChange: onSkinChange
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/dist/index.js?!./src/components/StaticPicker.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/dist??ref--10-0!./src/components/StaticPicker.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _polyfills_animationFrame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../polyfills/animationFrame */ "./src/polyfills/animationFrame.js");
/* harmony import */ var _polyfills_animationFrame__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_polyfills_animationFrame__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/store */ "./src/utils/store.js");
/* harmony import */ var _utils_frequently__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/frequently */ "./src/utils/frequently.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
/* harmony import */ var _utils_shared_props__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/shared-props */ "./src/utils/shared-props.js");
/* harmony import */ var _anchors_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./anchors.vue */ "./src/components/anchors.vue");
/* harmony import */ var _category_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./category.vue */ "./src/components/category.vue");
/* harmony import */ var _preview_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./preview.vue */ "./src/components/preview.vue");
/* harmony import */ var _search_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search.vue */ "./src/components/search.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var vue3_virtual_scroller__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vue3-virtual-scroller */ "./node_modules/vue3-virtual-scroller/dist/vue3-virtual-scroller.esm.js");
/* harmony import */ var vue3_virtual_scroller_dist_vue3_virtual_scroller_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vue3-virtual-scroller/dist/vue3-virtual-scroller.css */ "./node_modules/vue3-virtual-scroller/dist/vue3-virtual-scroller.css");
/* harmony import */ var vue3_virtual_scroller_dist_vue3_virtual_scroller_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(vue3_virtual_scroller_dist_vue3_virtual_scroller_css__WEBPACK_IMPORTED_MODULE_13__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











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



var I18N = {
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
    custom: 'Custom'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Object(vue__WEBPACK_IMPORTED_MODULE_11__["defineComponent"])({
  name: 'EmojiStaticPicker',
  components: {
    Anchors: _anchors_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    Category: _category_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    Preview: _preview_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    Search: _search_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    DynamicScroller: vue3_virtual_scroller__WEBPACK_IMPORTED_MODULE_12__["DynamicScroller"],
    DynamicScrollerItem: vue3_virtual_scroller__WEBPACK_IMPORTED_MODULE_12__["DynamicScrollerItem"]
  },
  props: _objectSpread(_objectSpread({}, _utils_shared_props__WEBPACK_IMPORTED_MODULE_6__["PickerProps"]), {}, {
    include: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    emojisToShowFilter: {
      type: Function
    },
    exclude: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    data: {
      type: Object,
      required: true
    }
  }),
  emits: ['skin-change', 'select'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;

    var categories = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(props.data.categories()).filter(function (category) {
      return category.emojis.length > 0;
    });

    categories[0].first = true;
    Object.freeze(categories);
    var scrollRef = Object(vue__WEBPACK_IMPORTED_MODULE_11__["ref"])(null);
    var categoriesRef = Object(vue__WEBPACK_IMPORTED_MODULE_11__["ref"])(null);
    var activeSkin = Object(vue__WEBPACK_IMPORTED_MODULE_11__["ref"])(props.skin || _utils_store__WEBPACK_IMPORTED_MODULE_3__["default"].get('skin') || props.defaultSkin);
    var activeCategory = Object(vue__WEBPACK_IMPORTED_MODULE_11__["ref"])(categories[0]);
    var previewEmoji = Object(vue__WEBPACK_IMPORTED_MODULE_11__["ref"])(null);
    var searchEmojis = Object(vue__WEBPACK_IMPORTED_MODULE_11__["ref"])(null);
    var calculateWidth = Object(vue__WEBPACK_IMPORTED_MODULE_11__["computed"])(function () {
      return props.perLine * (props.emojiSize + 12) + 12 + 2 + Object(_utils__WEBPACK_IMPORTED_MODULE_5__["measureScrollbar"])();
    });
    var emojiProps = Object(vue__WEBPACK_IMPORTED_MODULE_11__["computed"])(function () {
      return {
        native: props.native,
        skin: activeSkin.value,
        set: props.set,
        emojiTooltip: props.emojiTooltip,
        emojiSize: props.emojiSize,
        onEnter: onEmojiEnter,
        onLeave: onEmojiLeave,
        onClick: onEmojiClick
      };
    });
    var skinProps = Object(vue__WEBPACK_IMPORTED_MODULE_11__["computed"])(function () {
      return {
        skin: activeSkin.value
      };
    });
    var customStyles = Object(vue__WEBPACK_IMPORTED_MODULE_11__["computed"])(function () {
      return _objectSpread({
        width: calculateWidth.value + 'px'
      }, props.pickerStyles);
    });
    var filteredCategories = Object(vue__WEBPACK_IMPORTED_MODULE_11__["computed"])(function () {
      return categories.filter(function (category) {
        var isIncluded = props.include && props.include.length ? props.include.indexOf(category.id) > -1 : true;
        var isExcluded = props.exclude && props.exclude.length ? props.exclude.indexOf(category.id) > -1 : false;
        var hasEmojis = category.emojis.length > 0;

        if (props.emojisToShowFilter) {
          hasEmojis = category.emojis.some(function (emoji) {
            return props.emojisToShowFilter(props.data.emojis[emoji] || emoji);
          });
        }

        return isIncluded && !isExcluded && hasEmojis;
      });
    });
    var idleEmoji = Object(vue__WEBPACK_IMPORTED_MODULE_11__["computed"])(function () {
      try {
        return props.data.emoji(props.emoji);
      } catch (e) {
        console.error('Default preview emoji `' + props.emoji + '` is not available, check the Picker `emoji` property');
        console.error(e);
        return props.data.firstEmoji();
      }
    }); // =============================================

    var waitingForPaint = false;

    var onScroll = function onScroll() {
      if (props.infiniteScroll && !waitingForPaint) {
        waitingForPaint = true;
        window.requestAnimationFrame(onScrollPaint);
      }
    };

    var onScrollPaint = function onScrollPaint() {
      waitingForPaint = false;
      var scrollTop = scrollRef.scrollTop,
          _activeCategory = filteredCategories.value[0];

      for (var i = 0, l = filteredCategories.value.length; i < l; i++) {
        var category = filteredCategories.value[i],
            component = categoriesRef.value[i]; // The `-50` offset switches active category (selected in the
        // anchors bar) a bit eariler, before it actually reaches the top.

        if (component && component.$el.offsetTop - 50 > scrollTop) {
          break;
        }

        _activeCategory = category;
      }

      activeCategory.value = _activeCategory;
    };

    var onAnchorClick = function onAnchorClick(category) {
      var i = filteredCategories.value.indexOf(category),
          component = categoriesRef.value[i],
          scrollToComponent = function scrollToComponent() {
        if (component) {
          var top = component.$el.offsetTop;

          if (category.first) {
            top = 0;
          }

          scrollRef.value.scrollTop = top;
        }
      };

      if (props.infiniteScroll) {
        scrollToComponent();
      } else {
        activeCategory.value = filteredCategories.value[i];
      }
    };

    var onSearch = function onSearch(value) {
      searchEmojis.value = props.data.search(value, props.maxSearchResults);
    };

    var onEmojiEnter = function onEmojiEnter(emoji) {
      previewEmoji.value = emoji;
    };

    var onEmojiLeave = function onEmojiLeave() {
      previewEmoji.value = null;
    };

    var onEmojiClick = function onEmojiClick(emoji) {
      emit('select', emoji);
      _utils_frequently__WEBPACK_IMPORTED_MODULE_4__["default"].add(emoji);
    };

    var onSkinChange = function onSkinChange(skin) {
      activeSkin.value = skin;
      _utils_store__WEBPACK_IMPORTED_MODULE_3__["default"].update({
        skin: skin
      });
      emit('skin-change', skin);
    };

    return {
      activeCategory: activeCategory,
      previewEmoji: previewEmoji,
      searchEmojis: searchEmojis,
      customStyles: customStyles,
      filteredCategories: filteredCategories,
      skinProps: skinProps,
      mergedI18n: Object(vue__WEBPACK_IMPORTED_MODULE_11__["computed"])(function () {
        return Object.freeze(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["deepMerge"])(I18N, props.i18n));
      }),
      idleEmoji: idleEmoji,
      scrollRef: scrollRef,
      categories: categories,
      onAnchorClick: onAnchorClick,
      onSearch: onSearch,
      onScroll: onScroll,
      emojiProps: emojiProps,
      onSkinChange: onSkinChange
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/dist/index.js?!./src/components/anchors.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/dist??ref--10-0!./src/components/anchors.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _svgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../svgs */ "./src/svgs/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (Object(vue__WEBPACK_IMPORTED_MODULE_1__["defineComponent"])({
  name: 'Anchors',
  props: {
    i18n: {
      type: Object,
      required: true
    },
    color: {
      type: String
    },
    categories: {
      type: Array,
      required: true
    },
    activeCategory: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  setup: function setup() {
    return {
      svgs: _svgs__WEBPACK_IMPORTED_MODULE_0__["default"]
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/dist/index.js?!./src/components/category.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/dist??ref--10-0!./src/components/category.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_emoji_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/emoji-data */ "./src/utils/emoji-data.js");
/* harmony import */ var _Emoji__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Emoji */ "./src/components/Emoji.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (Object(vue__WEBPACK_IMPORTED_MODULE_2__["defineComponent"])({
  name: 'EmojiCategory',
  props: {
    data: {
      type: Object,
      default: function _default() {
        return {};
      }
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
    Emoji: _Emoji__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  setup: function setup(props) {
    var isVisible = Object(vue__WEBPACK_IMPORTED_MODULE_2__["computed"])(function () {
      return !!props.emojis;
    });
    var isSearch = Object(vue__WEBPACK_IMPORTED_MODULE_2__["computed"])(function () {
      return props.name === 'Search';
    });
    var hasResults = Object(vue__WEBPACK_IMPORTED_MODULE_2__["computed"])(function () {
      return props.emojis.length > 0;
    });
    var emojiObjects = Object(vue__WEBPACK_IMPORTED_MODULE_2__["computed"])(function () {
      return props.emojis.map(function (emoji) {
        var emojiObject = emoji;
        var emojiView = new _utils_emoji_data__WEBPACK_IMPORTED_MODULE_0__["EmojiView"](emoji, props.emojiProps.skin, props.emojiProps.set, props.emojiProps.native, props.emojiProps.fallback, props.emojiProps.emojiTooltip, props.emojiProps.emojiSize);
        return {
          emojiObject: emojiObject,
          emojiView: emojiView
        };
      });
    });
    return {
      isVisible: isVisible,
      isSearch: isSearch,
      hasResults: hasResults,
      emojiObjects: emojiObjects
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/dist/index.js?!./src/components/preview.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/dist??ref--10-0!./src/components/preview.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Emoji__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Emoji */ "./src/components/Emoji.vue");
/* harmony import */ var _skins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skins */ "./src/components/skins.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (Object(vue__WEBPACK_IMPORTED_MODULE_2__["defineComponent"])({
  name: 'EmojiPreview',
  components: {
    Emoji: _Emoji__WEBPACK_IMPORTED_MODULE_0__["default"],
    Skins: _skins__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    data: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    emoji: {
      type: [String, Object]
    },
    idleEmoji: {
      type: [String, Object],
      required: true
    },
    showSkinTones: {
      type: Boolean,
      default: true
    },
    emojiProps: {
      type: Object,
      required: true
    },
    skinProps: {
      type: Object,
      required: true
    },
    onSkinChange: {
      type: Function,
      required: true
    }
  },
  setup: function setup(props) {
    var emojiData = Object(vue__WEBPACK_IMPORTED_MODULE_2__["computed"])(function () {
      return props.emoji ? props.emoji : {};
    });
    return {
      emojiData: emojiData,
      emojiShortNames: Object(vue__WEBPACK_IMPORTED_MODULE_2__["computed"])(function () {
        return emojiData.value.short_names;
      }),
      emojiEmoticons: Object(vue__WEBPACK_IMPORTED_MODULE_2__["computed"])(function () {
        return emojiData.emoticons;
      })
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/dist/index.js?!./src/components/search.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/dist??ref--10-0!./src/components/search.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(vue__WEBPACK_IMPORTED_MODULE_0__["defineComponent"])({
  props: {
    data: {
      type: Object,
      required: true
    },
    i18n: {
      type: Object,
      required: true
    },
    autoFocus: {
      type: Boolean,
      default: false
    },
    onSearch: {
      type: Function,
      required: true
    }
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var value = Object(vue__WEBPACK_IMPORTED_MODULE_0__["ref"])('');
    Object(vue__WEBPACK_IMPORTED_MODULE_0__["watch"])(value, function () {
      return emit('search', value.value);
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_0__["onMounted"])(function () {
      if (!props.autoFocus) return;
      var $el = Object(vue__WEBPACK_IMPORTED_MODULE_0__["getCurrentInstance"])() && Object(vue__WEBPACK_IMPORTED_MODULE_0__["getCurrentInstance"])().proxy.$el || null;
      if (!$el) return;
      $el.querySelector('input').focus();
    });
    return {
      value: value,
      clear: function clear() {
        return value.value = '';
      },
      emojiIndex: Object(vue__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
        return props.data;
      })
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/dist/index.js?!./src/components/skins.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/dist??ref--10-0!./src/components/skins.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(vue__WEBPACK_IMPORTED_MODULE_0__["defineComponent"])({
  name: 'EmojiSkins',
  props: {
    skin: {
      type: Number,
      required: true
    }
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var opened = Object(vue__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);

    var onClick = function onClick(skinTone) {
      if (opened.value) {
        if (skinTone !== props.skin) {
          emit('change', skinTone);
        }
      }

      opened.value = !opened.value;
    };

    return {
      opened: opened,
      onClick: onClick
    };
  }
}));

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue3-virtual-scroller/dist/vue3-virtual-scroller.css":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue3-virtual-scroller/dist/vue3-virtual-scroller.css ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/postcss-loader/dist/cjs.js):\nError: ENOENT: no such file or directory, open '/Users/cssr/project/emoji-mart-vue/node_modules/vue3-virtual-scroller/dist/vue3-virtual-scroller.css'");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/components/Emoji.vue?vue&type=template&id=534ad946":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--10-0!./src/components/Emoji.vue?vue&type=template&id=534ad946 ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_ctx.view.canRender)
    ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])("span", {
        key: 0,
        title: _ctx.view.title,
        "data-title": _ctx.title,
        class: "emoji-mart-emoji",
        onMouseenter: _cache[1] || (_cache[1] = (...args) => (_ctx.onMouseEnter && _ctx.onMouseEnter(...args))),
        onMouseleave: _cache[2] || (_cache[2] = (...args) => (_ctx.onMouseLeave && _ctx.onMouseLeave(...args))),
        onClick: _cache[3] || (_cache[3] = (...args) => (_ctx.onClick && _ctx.onClick(...args)))
      }, [
        Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])("span", {
          class: _ctx.view.cssClass,
          style: _ctx.view.cssStyle
        }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.view.content), 7 /* TEXT, CLASS, STYLE */)
      ], 40 /* PROPS, HYDRATE_EVENTS */, ["title", "data-title"]))
    : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/components/Picker.vue?vue&type=template&id=d16e9084":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--10-0!./src/components/Picker.vue?vue&type=template&id=d16e9084 ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = {
  key: 0,
  class: "emoji-mart-bar emoji-mart-bar-anchors"
}
const _hoisted_2 = {
  key: 0,
  class: "emoji-mart-bar emoji-mart-bar-preview"
}

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_anchors = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("anchors")
  const _component_search = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("search")
  const _component_category = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("category")
  const _component_DynamicScroller = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("DynamicScroller")
  const _component_preview = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("preview")

  return (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])("div", {
    class: "emoji-mart",
    style: _ctx.customStyles
  }, [
    (_ctx.showCategories)
      ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])("div", _hoisted_1, [
          Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_anchors, {
            i18n: _ctx.mergedI18n,
            color: _ctx.color,
            categories: _ctx.categories,
            "active-category": _ctx.activeCategory,
            onChange: _ctx.onAnchorClick
          }, null, 8 /* PROPS */, ["i18n", "color", "categories", "active-category", "onChange"])
        ]))
      : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true),
    Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderSlot"])(_ctx.$slots, "searchTemplate", {
      data: _ctx.data,
      i18n: _ctx.i18n,
      autoFocus: _ctx.autoFocus,
      onSearch: _ctx.onSearch
    }, () => [
      (_ctx.showSearch)
        ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_search, {
            key: 0,
            data: _ctx.data,
            i18n: _ctx.mergedI18n,
            "auto-focus": _ctx.autoFocus,
            "on-search": _ctx.onSearch,
            onSearch: _ctx.onSearch
          }, null, 8 /* PROPS */, ["data", "i18n", "auto-focus", "on-search", "onSearch"]))
        : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)
    ]),
    Object(vue__WEBPACK_IMPORTED_MODULE_0__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_category, {
      class: "emoji-mart-search-results",
      data: _ctx.data,
      i18n: _ctx.mergedI18n,
      id: "search",
      name: "Search",
      emojis: _ctx.searchEmojis,
      "emoji-props": _ctx.emojiProps
    }, null, 8 /* PROPS */, ["data", "i18n", "emojis", "emoji-props"]), [
      [vue__WEBPACK_IMPORTED_MODULE_0__["vShow"], _ctx.searchEmojis]
    ]),
    Object(vue__WEBPACK_IMPORTED_MODULE_0__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_DynamicScroller, {
      ref: "dynScrollerRef",
      items: _ctx.scrollerCategories,
      "min-item-size": 60,
      class: "scroller",
      buffer: 400,
      "key-field": "id",
      "emit-update": true,
      onUpdate: _ctx.onScrollUpdate
    }, {
      default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])((scope) => [
        Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(" ========== " + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(scope) + " ======== ", 1 /* TEXT */),
        Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("        <DynamicScrollerItem :item=\"item\" :active=\"active\" :data-index=\"index\">"),
        Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("          <Category"),
        Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("            v-show=\"true\""),
        Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("            :i18n=\"item.mergedI18n\""),
        Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("            :id=\"item.category.id\""),
        Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("            :name=\"item.category.name\""),
        Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("            :emojis=\"item.category.emojis\""),
        Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("            :emoji-props=\"item.emojiProps\""),
        Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("          />"),
        Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("        </DynamicScrollerItem>")
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["items", "onUpdate"]), [
      [vue__WEBPACK_IMPORTED_MODULE_0__["vShow"], !_ctx.searchEmojis]
    ]),
    Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderSlot"])(_ctx.$slots, "previewTemplate", {
      data: _ctx.data,
      title: _ctx.title,
      emoji: _ctx.previewEmoji,
      idleEmoji: _ctx.idleEmoji,
      showSkinTones: _ctx.showSkinTones,
      emojiProps: _ctx.emojiProps,
      skinProps: _ctx.skinProps,
      onSkinChange: _ctx.onSkinChange
    }, () => [
      (_ctx.showPreview)
        ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])("div", _hoisted_2, [
            Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_preview, {
              data: _ctx.data,
              title: _ctx.title,
              emoji: _ctx.previewEmoji,
              "idle-emoji": _ctx.idleEmoji,
              "show-skin-tones": _ctx.showSkinTones,
              "emoji-props": _ctx.emojiProps,
              "skin-props": _ctx.skinProps,
              "on-skin-change": _ctx.onSkinChange
            }, null, 8 /* PROPS */, ["data", "title", "emoji", "idle-emoji", "show-skin-tones", "emoji-props", "skin-props", "on-skin-change"])
          ]))
        : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)
    ])
  ], 4 /* STYLE */))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/components/StaticPicker.vue?vue&type=template&id=2b16c268":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--10-0!./src/components/StaticPicker.vue?vue&type=template&id=2b16c268 ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = {
  key: 0,
  class: "emoji-mart-bar emoji-mart-bar-anchors"
}
const _hoisted_2 = {
  key: 0,
  class: "emoji-mart-bar emoji-mart-bar-preview"
}

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_anchors = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("anchors")
  const _component_search = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("search")
  const _component_category = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("category")
  const _component_preview = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("preview")

  return (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])("div", {
    class: "emoji-mart emoji-mart-static",
    style: _ctx.customStyles
  }, [
    (_ctx.showCategories)
      ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])("div", _hoisted_1, [
          Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_anchors, {
            data: _ctx.data,
            i18n: _ctx.mergedI18n,
            color: _ctx.color,
            categories: _ctx.categories,
            "active-category": _ctx.activeCategory,
            onClick: _ctx.onAnchorClick
          }, null, 8 /* PROPS */, ["data", "i18n", "color", "categories", "active-category", "onClick"])
        ]))
      : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true),
    Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderSlot"])(_ctx.$slots, "searchTemplate", {
      data: _ctx.data,
      i18n: _ctx.i18n,
      autoFocus: _ctx.autoFocus,
      onSearch: _ctx.onSearch
    }, () => [
      (_ctx.showSearch)
        ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_search, {
            key: 0,
            ref: "search",
            data: _ctx.data,
            i18n: _ctx.mergedI18n,
            "auto-focus": _ctx.autoFocus,
            "on-search": _ctx.onSearch,
            onSearch: _ctx.onSearch
          }, null, 8 /* PROPS */, ["data", "i18n", "auto-focus", "on-search", "onSearch"]))
        : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)
    ]),
    Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])("div", {
      class: "emoji-mart-scroll",
      ref: "scrollRef",
      onScroll: _cache[1] || (_cache[1] = (...args) => (_ctx.onScroll && _ctx.onScroll(...args)))
    }, [
      Object(vue__WEBPACK_IMPORTED_MODULE_0__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_category, {
        data: _ctx.data,
        i18n: _ctx.mergedI18n,
        id: "search",
        name: "Search",
        emojis: _ctx.searchEmojis,
        "emoji-props": _ctx.emojiProps
      }, null, 8 /* PROPS */, ["data", "i18n", "emojis", "emoji-props"]), [
        [vue__WEBPACK_IMPORTED_MODULE_0__["vShow"], _ctx.searchEmojis]
      ]),
      (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])(_ctx.filteredCategories, (category) => {
        return Object(vue__WEBPACK_IMPORTED_MODULE_0__["withDirectives"])((Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_category, {
          ref: "categories",
          key: category.id,
          data: _ctx.data,
          i18n: _ctx.mergedI18n,
          id: category.id,
          name: category.name,
          emojis: category.emojis,
          "emoji-props": _ctx.emojiProps
        }, null, 8 /* PROPS */, ["data", "i18n", "id", "name", "emojis", "emoji-props"])), [
          [vue__WEBPACK_IMPORTED_MODULE_0__["vShow"], !_ctx.searchEmojis && (_ctx.infiniteScroll || category === _ctx.activeCategory)]
        ])
      }), 128 /* KEYED_FRAGMENT */))
    ], 544 /* HYDRATE_EVENTS, NEED_PATCH */),
    Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderSlot"])(_ctx.$slots, "previewTemplate", {
      data: _ctx.data,
      title: _ctx.title,
      emoji: _ctx.previewEmoji,
      idleEmoji: _ctx.idleEmoji,
      showSkinTones: _ctx.showSkinTones,
      emojiProps: _ctx.emojiProps,
      skinProps: _ctx.skinProps,
      onSkinChange: _ctx.onSkinChange
    }, () => [
      (_ctx.showPreview)
        ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])("div", _hoisted_2, [
            Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_preview, {
              data: _ctx.data,
              title: _ctx.title,
              emoji: _ctx.previewEmoji,
              "idle-emoji": _ctx.idleEmoji,
              "show-skin-tones": _ctx.showSkinTones,
              "emoji-props": _ctx.emojiProps,
              "skin-props": _ctx.skinProps,
              "on-skin-change": _ctx.onSkinChange
            }, null, 8 /* PROPS */, ["data", "title", "emoji", "idle-emoji", "show-skin-tones", "emoji-props", "skin-props", "on-skin-change"])
          ]))
        : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)
    ])
  ], 4 /* STYLE */))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/components/anchors.vue?vue&type=template&id=51188104":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--10-0!./src/components/anchors.vue?vue&type=template&id=51188104 ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { class: "emoji-mart-anchors" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])("div", _hoisted_1, [
    (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])(_ctx.categories, (category) => {
      return (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])("span", {
        key: category.id,
        class: { 'emoji-mart-anchor': true, 'emoji-mart-anchor-selected': category.id === _ctx.activeCategory.id },
        style: { 'color': (category.id === _ctx.activeCategory.id ? _ctx.color : '') },
        "data-title": _ctx.i18n.categories[category.id],
        onClick: $event => (_ctx.$emit('change', category))
      }, [
        Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])("div", {
          innerHTML: _ctx.svgs[category.id]
        }, null, 8 /* PROPS */, ["innerHTML"]),
        Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])("span", {
          class: "emoji-mart-anchor-bar",
          style: { backgroundColor: _ctx.color }
        }, null, 4 /* STYLE */)
      ], 14 /* CLASS, STYLE, PROPS */, ["data-title", "onClick"]))
    }), 128 /* KEYED_FRAGMENT */))
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/components/category.vue?vue&type=template&id=376cda0e":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--10-0!./src/components/category.vue?vue&type=template&id=376cda0e ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { class: "emoji-mart-category-label" }
const _hoisted_2 = { key: 0 }
const _hoisted_3 = { class: "emoji-mart-no-results-label" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_emoji = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("emoji")

  return (_ctx.isVisible && (_ctx.isSearch || _ctx.hasResults))
    ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])("div", {
        key: 0,
        class: { 'emoji-mart-category': true, 'emoji-mart-no-results': !_ctx.hasResults }
      }, [
        Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])("div", _hoisted_1, [
          Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.i18n.categories[_ctx.id]), 1 /* TEXT */)
        ]),
        (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])(_ctx.emojiObjects, ({ emojiObject, emojiView }) => {
          return (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, [
            (emojiView.canRender)
              ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])("span", {
                  key: 0,
                  "data-title": emojiObject.short_name,
                  title: emojiView.title,
                  class: "emoji-mart-emoji",
                  onMouseenter: $event => (_ctx.emojiProps.onEnter(emojiView.getEmoji())),
                  onMouseleave: $event => (_ctx.emojiProps.onLeave(emojiView.getEmoji())),
                  onClick: $event => (_ctx.emojiProps.onClick(emojiView.getEmoji()))
                }, [
                  Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])("span", {
                    class: emojiView.cssClass,
                    style: emojiView.cssStyle
                  }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(emojiView.content), 7 /* TEXT, CLASS, STYLE */)
                ], 40 /* PROPS, HYDRATE_EVENTS */, ["data-title", "title", "onMouseenter", "onMouseleave", "onClick"]))
              : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)
          ], 64 /* STABLE_FRAGMENT */))
        }), 256 /* UNKEYED_FRAGMENT */)),
        (!_ctx.hasResults && _ctx.data)
          ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])("div", _hoisted_2, [
              Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_emoji, {
                data: _ctx.data,
                emoji: "sleuth_or_spy",
                native: _ctx.emojiProps.native,
                skin: _ctx.emojiProps.skin,
                set: _ctx.emojiProps.set
              }, null, 8 /* PROPS */, ["data", "native", "skin", "set"]),
              Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])("div", _hoisted_3, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.i18n.notfound), 1 /* TEXT */)
            ]))
          : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)
      ], 2 /* CLASS */))
    : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/components/preview.vue?vue&type=template&id=35056c30":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--10-0!./src/components/preview.vue?vue&type=template&id=35056c30 ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { class: "emoji-mart-preview" }
const _hoisted_2 = { class: "emoji-mart-preview-emoji" }
const _hoisted_3 = { class: "emoji-mart-preview-data" }
const _hoisted_4 = { class: "emoji-mart-preview-name" }
const _hoisted_5 = { class: "emoji-mart-preview-shortnames" }
const _hoisted_6 = { class: "emoji-mart-preview-emoticons" }
const _hoisted_7 = { class: "emoji-mart-preview-emoji" }
const _hoisted_8 = { class: "emoji-mart-preview-data" }
const _hoisted_9 = { class: "emoji-mart-title-label" }
const _hoisted_10 = {
  key: 0,
  class: "emoji-mart-preview-skins"
}

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_emoji = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("emoji")
  const _component_skins = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("skins")

  return (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])("div", _hoisted_1, [
    (_ctx.emoji)
      ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], { key: 0 }, [
          Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])("div", _hoisted_2, [
            Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_emoji, {
              data: _ctx.data,
              emoji: _ctx.emoji,
              native: _ctx.emojiProps.native,
              skin: _ctx.emojiProps.skin,
              set: _ctx.emojiProps.set
            }, null, 8 /* PROPS */, ["data", "emoji", "native", "skin", "set"])
          ]),
          Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])("div", _hoisted_3, [
            Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])("div", _hoisted_4, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.emoji.name), 1 /* TEXT */),
            Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])("div", _hoisted_5, [
              (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])(_ctx.emojiShortNames, (shortName) => {
                return (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])("span", {
                  key: shortName,
                  class: "emoji-mart-preview-shortname"
                }, ":" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(shortName) + ":", 1 /* TEXT */))
              }), 128 /* KEYED_FRAGMENT */))
            ]),
            Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])("div", _hoisted_6, [
              (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])(_ctx.emojiEmoticons, (emoticon) => {
                return (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])("span", {
                  key: emoticon,
                  class: "emoji-mart-preview-emoticon"
                }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(emoticon), 1 /* TEXT */))
              }), 128 /* KEYED_FRAGMENT */))
            ])
          ])
        ], 64 /* STABLE_FRAGMENT */))
      : (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], { key: 1 }, [
          Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])("div", _hoisted_7, [
            Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_emoji, {
              data: _ctx.data,
              emoji: _ctx.idleEmoji,
              native: _ctx.emojiProps.native,
              skin: _ctx.emojiProps.skin,
              set: _ctx.emojiProps.set
            }, null, 8 /* PROPS */, ["data", "emoji", "native", "skin", "set"])
          ]),
          Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])("div", _hoisted_8, [
            Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])("span", _hoisted_9, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.title), 1 /* TEXT */)
          ]),
          (_ctx.showSkinTones)
            ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])("div", _hoisted_10, [
                Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_skins, {
                  skin: _ctx.skinProps.skin,
                  onChange: _cache[1] || (_cache[1] = $event => (_ctx.onSkinChange($event)))
                }, null, 8 /* PROPS */, ["skin"])
              ]))
            : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)
        ], 64 /* STABLE_FRAGMENT */))
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/components/search.vue?vue&type=template&id=4ad41bb8":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--10-0!./src/components/search.vue?vue&type=template&id=4ad41bb8 ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { class: "emoji-mart-search" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])("div", _hoisted_1, [
    Object(vue__WEBPACK_IMPORTED_MODULE_0__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])("input", {
      type: "text",
      placeholder: _ctx.i18n.search,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (_ctx.value = $event))
    }, null, 8 /* PROPS */, ["placeholder"]), [
      [vue__WEBPACK_IMPORTED_MODULE_0__["vModelText"], _ctx.value]
    ])
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/components/skins.vue?vue&type=template&id=1c614894":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--10-0!./src/components/skins.vue?vue&type=template&id=1c614894 ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])("div", {
    class: { 'emoji-mart-skin-swatches': true, 'emoji-mart-skin-swatches-opened': _ctx.opened }
  }, [
    (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])(6, (skinTone) => {
      return Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])("span", {
        key: skinTone,
        class: { 'emoji-mart-skin-swatch': true, 'emoji-mart-skin-swatch-selected': _ctx.skin === skinTone }
      }, [
        Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])("span", {
          class: 'emoji-mart-skin emoji-mart-skin-tone-' + skinTone,
          onClick: $event => (_ctx.onClick(skinTone))
        }, null, 10 /* CLASS, PROPS */, ["onClick"])
      ], 2 /* CLASS */)
    }), 64 /* STABLE_FRAGMENT */))
  ], 2 /* CLASS */))
}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/cssr/project/emoji-mart-vue/node_modules/vue-style-loader/lib/addStylesClient.js'");

/***/ }),

/***/ "./node_modules/vue3-virtual-scroller/dist/vue3-virtual-scroller.css":
/*!***************************************************************************!*\
  !*** ./node_modules/vue3-virtual-scroller/dist/vue3-virtual-scroller.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js!../../postcss-loader/dist/cjs.js!./vue3-virtual-scroller.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue3-virtual-scroller/dist/vue3-virtual-scroller.css");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("427a74ac", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue3-virtual-scroller/dist/vue3-virtual-scroller.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/vue3-virtual-scroller/dist/vue3-virtual-scroller.esm.js ***!
  \******************************************************************************/
/*! exports provided: default, DynamicScroller, DynamicScrollerItem, RecycleScroller */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/cssr/project/emoji-mart-vue/node_modules/vue3-virtual-scroller/dist/vue3-virtual-scroller.esm.js'");

/***/ }),

/***/ "./src/components/Emoji.vue":
/*!**********************************!*\
  !*** ./src/components/Emoji.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Emoji_vue_vue_type_template_id_534ad946__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Emoji.vue?vue&type=template&id=534ad946 */ "./src/components/Emoji.vue?vue&type=template&id=534ad946");
/* harmony import */ var _Emoji_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Emoji.vue?vue&type=script&lang=js */ "./src/components/Emoji.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */


_Emoji_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].render = _Emoji_vue_vue_type_template_id_534ad946__WEBPACK_IMPORTED_MODULE_0__["render"]
/* hot reload */
if (false) {}

_Emoji_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].__file = "src/components/Emoji.vue"

/* harmony default export */ __webpack_exports__["default"] = (_Emoji_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./src/components/Emoji.vue?vue&type=script&lang=js":
/*!**********************************************************!*\
  !*** ./src/components/Emoji.vue?vue&type=script&lang=js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_dist_index_js_ref_10_0_Emoji_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--0!../../node_modules/vue-loader/dist??ref--10-0!./Emoji.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/dist/index.js?!./src/components/Emoji.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_dist_index_js_ref_10_0_Emoji_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/components/Emoji.vue?vue&type=template&id=534ad946":
/*!****************************************************************!*\
  !*** ./src/components/Emoji.vue?vue&type=template&id=534ad946 ***!
  \****************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ref_5_node_modules_vue_loader_dist_index_js_ref_10_0_Emoji_vue_vue_type_template_id_534ad946__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ref--5!../../node_modules/vue-loader/dist??ref--10-0!./Emoji.vue?vue&type=template&id=534ad946 */ "./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/components/Emoji.vue?vue&type=template&id=534ad946");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_dist_templateLoader_js_ref_5_node_modules_vue_loader_dist_index_js_ref_10_0_Emoji_vue_vue_type_template_id_534ad946__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/components/Picker.vue":
/*!***********************************!*\
  !*** ./src/components/Picker.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Picker_vue_vue_type_template_id_d16e9084__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Picker.vue?vue&type=template&id=d16e9084 */ "./src/components/Picker.vue?vue&type=template&id=d16e9084");
/* harmony import */ var _Picker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Picker.vue?vue&type=script&lang=js */ "./src/components/Picker.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */


_Picker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].render = _Picker_vue_vue_type_template_id_d16e9084__WEBPACK_IMPORTED_MODULE_0__["render"]
/* hot reload */
if (false) {}

_Picker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].__file = "src/components/Picker.vue"

/* harmony default export */ __webpack_exports__["default"] = (_Picker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./src/components/Picker.vue?vue&type=script&lang=js":
/*!***********************************************************!*\
  !*** ./src/components/Picker.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_dist_index_js_ref_10_0_Picker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--0!../../node_modules/vue-loader/dist??ref--10-0!./Picker.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/dist/index.js?!./src/components/Picker.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_dist_index_js_ref_10_0_Picker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/components/Picker.vue?vue&type=template&id=d16e9084":
/*!*****************************************************************!*\
  !*** ./src/components/Picker.vue?vue&type=template&id=d16e9084 ***!
  \*****************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ref_5_node_modules_vue_loader_dist_index_js_ref_10_0_Picker_vue_vue_type_template_id_d16e9084__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ref--5!../../node_modules/vue-loader/dist??ref--10-0!./Picker.vue?vue&type=template&id=d16e9084 */ "./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/components/Picker.vue?vue&type=template&id=d16e9084");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_dist_templateLoader_js_ref_5_node_modules_vue_loader_dist_index_js_ref_10_0_Picker_vue_vue_type_template_id_d16e9084__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/components/StaticPicker.vue":
/*!*****************************************!*\
  !*** ./src/components/StaticPicker.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StaticPicker_vue_vue_type_template_id_2b16c268__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StaticPicker.vue?vue&type=template&id=2b16c268 */ "./src/components/StaticPicker.vue?vue&type=template&id=2b16c268");
/* harmony import */ var _StaticPicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StaticPicker.vue?vue&type=script&lang=js */ "./src/components/StaticPicker.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */


_StaticPicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].render = _StaticPicker_vue_vue_type_template_id_2b16c268__WEBPACK_IMPORTED_MODULE_0__["render"]
/* hot reload */
if (false) {}

_StaticPicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].__file = "src/components/StaticPicker.vue"

/* harmony default export */ __webpack_exports__["default"] = (_StaticPicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./src/components/StaticPicker.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./src/components/StaticPicker.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_dist_index_js_ref_10_0_StaticPicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--0!../../node_modules/vue-loader/dist??ref--10-0!./StaticPicker.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/dist/index.js?!./src/components/StaticPicker.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_dist_index_js_ref_10_0_StaticPicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/components/StaticPicker.vue?vue&type=template&id=2b16c268":
/*!***********************************************************************!*\
  !*** ./src/components/StaticPicker.vue?vue&type=template&id=2b16c268 ***!
  \***********************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ref_5_node_modules_vue_loader_dist_index_js_ref_10_0_StaticPicker_vue_vue_type_template_id_2b16c268__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ref--5!../../node_modules/vue-loader/dist??ref--10-0!./StaticPicker.vue?vue&type=template&id=2b16c268 */ "./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/components/StaticPicker.vue?vue&type=template&id=2b16c268");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_dist_templateLoader_js_ref_5_node_modules_vue_loader_dist_index_js_ref_10_0_StaticPicker_vue_vue_type_template_id_2b16c268__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/components/anchors.vue":
/*!************************************!*\
  !*** ./src/components/anchors.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _anchors_vue_vue_type_template_id_51188104__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anchors.vue?vue&type=template&id=51188104 */ "./src/components/anchors.vue?vue&type=template&id=51188104");
/* harmony import */ var _anchors_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./anchors.vue?vue&type=script&lang=js */ "./src/components/anchors.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */


_anchors_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].render = _anchors_vue_vue_type_template_id_51188104__WEBPACK_IMPORTED_MODULE_0__["render"]
/* hot reload */
if (false) {}

_anchors_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].__file = "src/components/anchors.vue"

/* harmony default export */ __webpack_exports__["default"] = (_anchors_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./src/components/anchors.vue?vue&type=script&lang=js":
/*!************************************************************!*\
  !*** ./src/components/anchors.vue?vue&type=script&lang=js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_dist_index_js_ref_10_0_anchors_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--0!../../node_modules/vue-loader/dist??ref--10-0!./anchors.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/dist/index.js?!./src/components/anchors.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_dist_index_js_ref_10_0_anchors_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/components/anchors.vue?vue&type=template&id=51188104":
/*!******************************************************************!*\
  !*** ./src/components/anchors.vue?vue&type=template&id=51188104 ***!
  \******************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ref_5_node_modules_vue_loader_dist_index_js_ref_10_0_anchors_vue_vue_type_template_id_51188104__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ref--5!../../node_modules/vue-loader/dist??ref--10-0!./anchors.vue?vue&type=template&id=51188104 */ "./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/components/anchors.vue?vue&type=template&id=51188104");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_dist_templateLoader_js_ref_5_node_modules_vue_loader_dist_index_js_ref_10_0_anchors_vue_vue_type_template_id_51188104__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/components/category.vue":
/*!*************************************!*\
  !*** ./src/components/category.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _category_vue_vue_type_template_id_376cda0e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.vue?vue&type=template&id=376cda0e */ "./src/components/category.vue?vue&type=template&id=376cda0e");
/* harmony import */ var _category_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.vue?vue&type=script&lang=js */ "./src/components/category.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */


_category_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].render = _category_vue_vue_type_template_id_376cda0e__WEBPACK_IMPORTED_MODULE_0__["render"]
/* hot reload */
if (false) {}

_category_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].__file = "src/components/category.vue"

/* harmony default export */ __webpack_exports__["default"] = (_category_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./src/components/category.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./src/components/category.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_dist_index_js_ref_10_0_category_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--0!../../node_modules/vue-loader/dist??ref--10-0!./category.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/dist/index.js?!./src/components/category.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_dist_index_js_ref_10_0_category_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/components/category.vue?vue&type=template&id=376cda0e":
/*!*******************************************************************!*\
  !*** ./src/components/category.vue?vue&type=template&id=376cda0e ***!
  \*******************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ref_5_node_modules_vue_loader_dist_index_js_ref_10_0_category_vue_vue_type_template_id_376cda0e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ref--5!../../node_modules/vue-loader/dist??ref--10-0!./category.vue?vue&type=template&id=376cda0e */ "./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/components/category.vue?vue&type=template&id=376cda0e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_dist_templateLoader_js_ref_5_node_modules_vue_loader_dist_index_js_ref_10_0_category_vue_vue_type_template_id_376cda0e__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! exports provided: Anchors, Category, Preview, Search, Skins, Emoji, Picker, StaticPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _anchors_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anchors.vue */ "./src/components/anchors.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Anchors", function() { return _anchors_vue__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _category_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.vue */ "./src/components/category.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return _category_vue__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _preview_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preview.vue */ "./src/components/preview.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Preview", function() { return _preview_vue__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _search_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.vue */ "./src/components/search.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return _search_vue__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _skins_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skins.vue */ "./src/components/skins.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Skins", function() { return _skins_vue__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Emoji_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Emoji.vue */ "./src/components/Emoji.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Emoji", function() { return _Emoji_vue__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Picker_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Picker.vue */ "./src/components/Picker.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return _Picker_vue__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _StaticPicker_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./StaticPicker.vue */ "./src/components/StaticPicker.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticPicker", function() { return _StaticPicker_vue__WEBPACK_IMPORTED_MODULE_7__["default"]; });










/***/ }),

/***/ "./src/components/preview.vue":
/*!************************************!*\
  !*** ./src/components/preview.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _preview_vue_vue_type_template_id_35056c30__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preview.vue?vue&type=template&id=35056c30 */ "./src/components/preview.vue?vue&type=template&id=35056c30");
/* harmony import */ var _preview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preview.vue?vue&type=script&lang=js */ "./src/components/preview.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */


_preview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].render = _preview_vue_vue_type_template_id_35056c30__WEBPACK_IMPORTED_MODULE_0__["render"]
/* hot reload */
if (false) {}

_preview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].__file = "src/components/preview.vue"

/* harmony default export */ __webpack_exports__["default"] = (_preview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./src/components/preview.vue?vue&type=script&lang=js":
/*!************************************************************!*\
  !*** ./src/components/preview.vue?vue&type=script&lang=js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_dist_index_js_ref_10_0_preview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--0!../../node_modules/vue-loader/dist??ref--10-0!./preview.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/dist/index.js?!./src/components/preview.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_dist_index_js_ref_10_0_preview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/components/preview.vue?vue&type=template&id=35056c30":
/*!******************************************************************!*\
  !*** ./src/components/preview.vue?vue&type=template&id=35056c30 ***!
  \******************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ref_5_node_modules_vue_loader_dist_index_js_ref_10_0_preview_vue_vue_type_template_id_35056c30__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ref--5!../../node_modules/vue-loader/dist??ref--10-0!./preview.vue?vue&type=template&id=35056c30 */ "./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/components/preview.vue?vue&type=template&id=35056c30");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_dist_templateLoader_js_ref_5_node_modules_vue_loader_dist_index_js_ref_10_0_preview_vue_vue_type_template_id_35056c30__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/components/search.vue":
/*!***********************************!*\
  !*** ./src/components/search.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_vue_vue_type_template_id_4ad41bb8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.vue?vue&type=template&id=4ad41bb8 */ "./src/components/search.vue?vue&type=template&id=4ad41bb8");
/* harmony import */ var _search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.vue?vue&type=script&lang=js */ "./src/components/search.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */


_search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].render = _search_vue_vue_type_template_id_4ad41bb8__WEBPACK_IMPORTED_MODULE_0__["render"]
/* hot reload */
if (false) {}

_search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].__file = "src/components/search.vue"

/* harmony default export */ __webpack_exports__["default"] = (_search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./src/components/search.vue?vue&type=script&lang=js":
/*!***********************************************************!*\
  !*** ./src/components/search.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_dist_index_js_ref_10_0_search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--0!../../node_modules/vue-loader/dist??ref--10-0!./search.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/dist/index.js?!./src/components/search.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_dist_index_js_ref_10_0_search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/components/search.vue?vue&type=template&id=4ad41bb8":
/*!*****************************************************************!*\
  !*** ./src/components/search.vue?vue&type=template&id=4ad41bb8 ***!
  \*****************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ref_5_node_modules_vue_loader_dist_index_js_ref_10_0_search_vue_vue_type_template_id_4ad41bb8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ref--5!../../node_modules/vue-loader/dist??ref--10-0!./search.vue?vue&type=template&id=4ad41bb8 */ "./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/components/search.vue?vue&type=template&id=4ad41bb8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_dist_templateLoader_js_ref_5_node_modules_vue_loader_dist_index_js_ref_10_0_search_vue_vue_type_template_id_4ad41bb8__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/components/skins.vue":
/*!**********************************!*\
  !*** ./src/components/skins.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _skins_vue_vue_type_template_id_1c614894__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skins.vue?vue&type=template&id=1c614894 */ "./src/components/skins.vue?vue&type=template&id=1c614894");
/* harmony import */ var _skins_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skins.vue?vue&type=script&lang=js */ "./src/components/skins.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */


_skins_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].render = _skins_vue_vue_type_template_id_1c614894__WEBPACK_IMPORTED_MODULE_0__["render"]
/* hot reload */
if (false) {}

_skins_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].__file = "src/components/skins.vue"

/* harmony default export */ __webpack_exports__["default"] = (_skins_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./src/components/skins.vue?vue&type=script&lang=js":
/*!**********************************************************!*\
  !*** ./src/components/skins.vue?vue&type=script&lang=js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_dist_index_js_ref_10_0_skins_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--0!../../node_modules/vue-loader/dist??ref--10-0!./skins.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/dist/index.js?!./src/components/skins.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_dist_index_js_ref_10_0_skins_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/components/skins.vue?vue&type=template&id=1c614894":
/*!****************************************************************!*\
  !*** ./src/components/skins.vue?vue&type=template&id=1c614894 ***!
  \****************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ref_5_node_modules_vue_loader_dist_index_js_ref_10_0_skins_vue_vue_type_template_id_1c614894__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ref--5!../../node_modules/vue-loader/dist??ref--10-0!./skins.vue?vue&type=template&id=1c614894 */ "./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/components/skins.vue?vue&type=template&id=1c614894");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_dist_templateLoader_js_ref_5_node_modules_vue_loader_dist_index_js_ref_10_0_skins_vue_vue_type_template_id_1c614894__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Picker, StaticPicker, Emoji, Anchors, Preview, Search, Category, Skins, EmojiIndex, EmojiView, EmojiData, sanitize, uncompress, store, frequently */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/store */ "./src/utils/store.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "store", function() { return _utils_store__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/data */ "./src/utils/data.js");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uncompress", function() { return _utils_data__WEBPACK_IMPORTED_MODULE_1__["uncompress"]; });

/* harmony import */ var _utils_frequently__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/frequently */ "./src/utils/frequently.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "frequently", function() { return _utils_frequently__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/components/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["Picker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticPicker", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["StaticPicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Emoji", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["Emoji"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Anchors", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["Anchors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Preview", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["Preview"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["Search"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["Category"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Skins", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["Skins"]; });

/* harmony import */ var _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/emoji-data */ "./src/utils/emoji-data.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmojiIndex", function() { return _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__["EmojiIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmojiView", function() { return _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__["EmojiView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmojiData", function() { return _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__["EmojiData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sanitize", function() { return _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__["sanitize"]; });








/***/ }),

/***/ "./src/polyfills/animationFrame.js":
/*!*****************************************!*\
  !*** ./src/polyfills/animationFrame.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
// MIT license
var isWindowAvailable = typeof window !== 'undefined';
isWindowAvailable && function () {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];

  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    var id = window.setTimeout(function () {
      callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };
  if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
    clearTimeout(id);
  };
}();

/***/ }),

/***/ "./src/polyfills/stringFromCodePoint.js":
/*!**********************************************!*\
  !*** ./src/polyfills/stringFromCodePoint.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _String = String;
/* harmony default export */ __webpack_exports__["default"] = (_String.fromCodePoint || function stringFromCodePoint() {
  var MAX_SIZE = 0x4000;
  var codeUnits = [];
  var highSurrogate;
  var lowSurrogate;
  var index = -1;
  var length = arguments.length;

  if (!length) {
    return '';
  }

  var result = '';

  while (++index < length) {
    var codePoint = Number(arguments[index]);

    if (!isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
    codePoint < 0 || // not a valid Unicode code point
    codePoint > 0x10ffff || // not a valid Unicode code point
    Math.floor(codePoint) != codePoint // not an integer
    ) {
        throw RangeError('Invalid code point: ' + codePoint);
      }

    if (codePoint <= 0xffff) {
      // BMP code point
      codeUnits.push(codePoint);
    } else {
      // Astral code point; split in surrogate halves
      // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
      codePoint -= 0x10000;
      highSurrogate = (codePoint >> 10) + 0xd800;
      lowSurrogate = codePoint % 0x400 + 0xdc00;
      codeUnits.push(highSurrogate, lowSurrogate);
    }

    if (index + 1 === length || codeUnits.length > MAX_SIZE) {
      result += String.fromCharCode.apply(null, codeUnits);
      codeUnits.length = 0;
    }
  }

  return result;
});

/***/ }),

/***/ "./src/svgs/index.js":
/*!***************************!*\
  !*** ./src/svgs/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var SVGs = {
  activity: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113\"/></svg>",
  custom: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><g transform=\"translate(2.000000, 1.000000)\"><rect id=\"Rectangle\" x=\"8\" y=\"0\" width=\"3\" height=\"21\" rx=\"1.5\"></rect><rect id=\"Rectangle\" transform=\"translate(9.843, 10.549) rotate(60) translate(-9.843, -10.549) \" x=\"8.343\" y=\"0.049\" width=\"3\" height=\"21\" rx=\"1.5\"></rect><rect id=\"Rectangle\" transform=\"translate(9.843, 10.549) rotate(-60) translate(-9.843, -10.549) \" x=\"8.343\" y=\"0.049\" width=\"3\" height=\"21\" rx=\"1.5\"></rect></g></svg>",
  flags: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z\"/></svg>",
  foods: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9\"/></svg>",
  nature: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8\"/><path d=\"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235\"/></svg>",
  objects: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z\"/><path d=\"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789\"/></svg>",
  smileys: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10\"/><path d=\"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0\"/></svg>",
  people: "<svg xmlns:svg=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\" viewBox=\"0 0 24 24\"> <path id=\"path3814\" d=\"m 3.3591089,21.17726 c 0.172036,0.09385 4.265994,2.29837 8.8144451,2.29837 4.927767,0 8.670894,-2.211883 8.82782,-2.306019 0.113079,-0.06785 0.182268,-0.190051 0.182267,-0.321923 0,-3.03119 -0.929494,-5.804936 -2.617196,-7.810712 -1.180603,-1.403134 -2.661918,-2.359516 -4.295699,-2.799791 4.699118,-2.236258 3.102306,-9.28617162 -2.097191,-9.28617162 -5.1994978,0 -6.7963103,7.04991362 -2.097192,9.28617162 -1.6337821,0.440275 -3.1150971,1.396798 -4.2956991,2.799791 -1.687703,2.005776 -2.617196,4.779522 -2.617196,7.810712 1.2e-6,0.137378 0.075039,0.263785 0.195641,0.329572 z M 8.0439319,5.8308783 C 8.0439309,2.151521 12.492107,0.30955811 15.093491,2.9109411 17.694874,5.5123241 15.852911,9.9605006 12.173554,9.9605 9.8938991,9.9579135 8.0465186,8.1105332 8.0439319,5.8308783 Z m -1.688782,7.6894977 c 1.524535,-1.811449 3.5906601,-2.809035 5.8184041,-2.809035 2.227744,0 4.293869,0.997586 5.818404,2.809035 1.533639,1.822571 2.395932,4.339858 2.439152,7.108301 -0.803352,0.434877 -4.141636,2.096112 -8.257556,2.096112 -3.8062921,0 -7.3910861,-1.671043 -8.2573681,-2.104981 0.04505,-2.765017 0.906968,-5.278785 2.438964,-7.099432 z\" /> <path id=\"path3816\" d=\"M 12.173828 0.38867188 C 9.3198513 0.38867187 7.3770988 2.3672285 6.8652344 4.6308594 C 6.4218608 6.5916015 7.1153562 8.7676117 8.9648438 10.126953 C 7.6141249 10.677376 6.3550511 11.480944 5.3496094 12.675781 C 3.5629317 14.799185 2.6015625 17.701475 2.6015625 20.847656 C 2.6015654 21.189861 2.7894276 21.508002 3.0898438 21.671875 C 3.3044068 21.788925 7.4436239 24.039062 12.173828 24.039062 C 17.269918 24.039062 21.083568 21.776786 21.291016 21.652344 C 21.57281 21.483266 21.746097 21.176282 21.746094 20.847656 C 21.746094 17.701475 20.78277 14.799185 18.996094 12.675781 C 17.990455 11.480591 16.733818 10.675362 15.382812 10.125 C 17.231132 8.7655552 17.925675 6.5910701 17.482422 4.6308594 C 16.970557 2.3672285 15.027805 0.38867188 12.173828 0.38867188 z M 12.792969 2.3007812 C 13.466253 2.4161792 14.125113 2.7383941 14.695312 3.3085938 C 15.835712 4.4489931 15.985604 5.9473549 15.46875 7.1953125 C 14.951896 8.4432701 13.786828 9.3984378 12.173828 9.3984375 C 10.197719 9.3961954 8.607711 7.806187 8.6054688 5.8300781 C 8.6054683 4.2170785 9.5606362 3.0520102 10.808594 2.5351562 C 11.432573 2.2767293 12.119685 2.1853833 12.792969 2.3007812 z M 12.173828 11.273438 C 14.233647 11.273438 16.133674 12.185084 17.5625 13.882812 C 18.93069 15.508765 19.698347 17.776969 19.808594 20.283203 C 18.807395 20.800235 15.886157 22.162109 12.173828 22.162109 C 8.7614632 22.162109 5.6245754 20.787069 4.5390625 20.265625 C 4.6525896 17.766717 5.4203315 15.504791 6.7851562 13.882812 C 8.2139827 12.185084 10.11401 11.273438 12.173828 11.273438 z \" /> </svg>",
  places: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5\"/><path d=\"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z\"/></svg>",
  recent: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z\"/><path d=\"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10\"/></svg>",
  symbols: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76\"/></svg>"
};
/* harmony default export */ __webpack_exports__["default"] = (SVGs);

/***/ }),

/***/ "./src/utils/data.js":
/*!***************************!*\
  !*** ./src/utils/data.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var mapping = {
  name: 'a',
  unified: 'b',
  non_qualified: 'c',
  has_img_apple: 'd',
  has_img_google: 'e',
  has_img_twitter: 'f',
  has_img_facebook: 'h',
  keywords: 'j',
  sheet: 'k',
  emoticons: 'l',
  text: 'm',
  short_names: 'n',
  added_in: 'o'
};

var buildSearch = function buildSearch(emoji) {
  var search = [];

  var addToSearch = function addToSearch(strings, split) {
    if (!strings) {
      return;
    }

    ;
    (Array.isArray(strings) ? strings : [strings]).forEach(function (string) {
      ;
      (split ? string.split(/[-|_|\s]+/) : [string]).forEach(function (s) {
        s = s.toLowerCase();

        if (search.indexOf(s) == -1) {
          search.push(s);
        }
      });
    });
  };

  addToSearch(emoji.short_names, true);
  addToSearch(emoji.name, true);
  addToSearch(emoji.keywords, false);
  addToSearch(emoji.emoticons, false);
  return search.join(',');
};

var compress = function compress(emoji) {
  emoji.short_names = emoji.short_names.filter(function (short_name) {
    return short_name !== emoji.short_name;
  });
  delete emoji.short_name;
  emoji.sheet = [emoji.sheet_x, emoji.sheet_y];
  delete emoji.sheet_x;
  delete emoji.sheet_y;
  emoji.added_in = parseInt(emoji.added_in);

  if (emoji.added_in === 6) {
    delete emoji.added_in;
  }

  for (var key in mapping) {
    emoji[mapping[key]] = emoji[key];
    delete emoji[key];
  }

  for (var _key in emoji) {
    var value = emoji[_key];

    if (Array.isArray(value) && !value.length) {
      delete emoji[_key];
    } else if (typeof value === 'string' && !value.length) {
      delete emoji[_key];
    } else if (value === null) {
      delete emoji[_key];
    }
  }
};

function deepFreeze(object) {
  // Retrieve the property names defined on object
  var propNames = Object.getOwnPropertyNames(object); // Freeze properties before freezing self

  var _iterator = _createForOfIteratorHelper(propNames),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var name = _step.value;
      var value = object[name];
      object[name] = value && _typeof(value) === 'object' ? deepFreeze(value) : value;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return Object.freeze(object);
}

var uncompress = function uncompress(data) {
  if (!data.compressed) {
    return data;
  }

  data.compressed = false;

  for (var id in data.emojis) {
    var emoji = data.emojis[id];

    for (var key in mapping) {
      emoji[key] = emoji[mapping[key]];
      delete emoji[mapping[key]];
    }

    if (!emoji.short_names) emoji.short_names = [];
    emoji.short_names.unshift(id);
    emoji.sheet_x = emoji.sheet[0];
    emoji.sheet_y = emoji.sheet[1];
    delete emoji.sheet;
    if (!emoji.text) emoji.text = '';
    if (!emoji.added_in) emoji.added_in = 6;
    emoji.added_in = emoji.added_in.toFixed(1);
    emoji.search = buildSearch(emoji);
  }

  data = deepFreeze(data);
  return data;
};

module.exports = {
  buildSearch: buildSearch,
  compress: compress,
  uncompress: uncompress
};

/***/ }),

/***/ "./src/utils/emoji-data.js":
/*!*********************************!*\
  !*** ./src/utils/emoji-data.js ***!
  \*********************************/
/*! exports provided: EmojiIndex, EmojiData, EmojiView, sanitize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiIndex", function() { return EmojiIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiData", function() { return EmojiData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiView", function() { return EmojiView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitize", function() { return sanitize; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/utils/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./src/utils/data.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _frequently__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./frequently */ "./src/utils/frequently.js");



function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var SHEET_COLUMNS = 56;
var COLONS_REGEX = /^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/; // Skin tones

var SKINS = ['1F3FA', '1F3FB', '1F3FC', '1F3FD', '1F3FE', '1F3FF'];
/**
 * Emoji data structure:
 * {
 *    "compressed": false,
 *    "aliases": {
 *      collision: "boom"
 *      cooking: "fried_egg"
 *      envelope: "email"
 *      face_with_finger_covering_closed_lips: "shushing_face"
 *      ...
 *    },
 *    "categories": [ {
 *      id: "people",
 *      name: "Smileys & Emotion",
 *      emojis: [ "grinning", "grin", "joy", ... ]
 *    }, {
 *      id: "nature",
 *      name: "Animals & Nature",
 *      emojis: [ "monkey_face", "money", "gorilla", ... ]
 *    },
 *    ...
 *    ],
 *    "emojis": [
 *      smiley: {
 *        added_in: "6.0",
 *        emoticons: ["=)", "=-)"],
 *        has_img_apple: true,
 *        has_img_facebook: true,
 *        has_img_google: true,
 *        has_img_twitter: true,
 *        keywords: ["face", "happy", "joy", "haha", ":D", ":)", "smile", "funny"],
 *        name: "Smiling Face with Open Mouth",
 *        non_qualified: undefined,
 *        search: "smiley,smiling,face,with,open,mouth,happy,joy,haha,:d,:),smile,funny,=),=-)",
 *        sheet_x: 30,
 *        sheet_y: 27,
 *        short_names: ["smiley"],
 *        text: ":)",
 *        unified: "1F603",
 *      }, {
 *      +1: {    // emoji with skin_variations
 *          ..., // all the regular fields are present
 *          name: "Thumbs Up Sign",
 *          short_names: (2) ["+1", "thumbsup"],
 *          skin_variations: {
 *            1F3FB:             // each variation has additional set of fields:
 *              added_in: "8.0",
 *              has_img_apple: true,
 *              has_img_facebook: true,
 *              has_img_google: true,
 *              has_img_twitter: true,
 *              image: "1f44d-1f3fb.png",
 *              non_qualified: null,
 *              sheet_x: 14,
 *              sheet_y: 50,
 *              unified: "1F44D-1F3FB",
 *            1F3FB: {…},
 *            1F3FC: {…},
 *            1F3FD: {…},
 *            1F3FE: {…},
 *            1F3FF: {…}
 *            },
 *          ...
 *      },
 *      a: {  // emoji with non_qualified field set
 *        added_in: "6.0",
 *        emoticons: undefined,
 *        has_img_apple: true,
 *        ...
 *        non_qualified: "1F170",
 *        unified: "1F170-FE0F",
 *     },
 *     ...
 *   ]
 * }
 */

/**
 * Wraps raw jason emoji data, serves as data source for
 * emoji picker components.
 *
 * Usage:
 *
 *   import data from '../data/all.json'
 *   let index = new EmojiIndex(data)
 *
 */

var EmojiIndex = /*#__PURE__*/function () {
  /**
   * Constructor.
   *
   * @param {object} data - Raw json data, see the structure above.
   * @param {object} options - additional options, as an object:
   * @param {Function} emojisToShowFilter - optional, function to filter out
   *   some emojis, function(emoji) { return true|false }
   *   where `emoji` is an raw emoji object, see data.emojis above.
   * @param {Array} include - optional, a list of category ids to include.
   * @param {Array} exclude - optional, a list of category ids to exclude.
   * @param {Array} custom - optional, a list custom emojis, each emoji is
   *   an object, see data.emojis above for examples.
   */
  function EmojiIndex(data) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        emojisToShowFilter = _ref.emojisToShowFilter,
        include = _ref.include,
        exclude = _ref.exclude,
        custom = _ref.custom,
        recent = _ref.recent,
        _ref$recentLength = _ref.recentLength,
        recentLength = _ref$recentLength === void 0 ? 20 : _ref$recentLength;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EmojiIndex);

    this._data = Object(_data__WEBPACK_IMPORTED_MODULE_3__["uncompress"])(data); // Callback to exclude specific emojis

    this._emojisFilter = emojisToShowFilter || null; // Categories to include / exclude

    this._include = include || null;
    this._exclude = exclude || null; // Custom emojis

    this._custom = custom || []; // Recent emojis
    // TODO: make parameter configurable

    this._recent = recent || _frequently__WEBPACK_IMPORTED_MODULE_4__["default"].get(recentLength);
    this._emojis = {};
    this._nativeEmojis = {};
    this._emoticons = {};
    this._categories = [];
    this._recentCategory = {
      id: 'recent',
      name: 'Recent',
      emojis: []
    };
    this._customCategory = {
      id: 'custom',
      name: 'Custom',
      emojis: []
    };
    this._searchIndex = {};
    this.buildIndex();
    Object.freeze(this);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EmojiIndex, [{
    key: "buildIndex",
    value: function buildIndex() {
      var _this = this;

      var allCategories = this._data.categories;

      if (this._include) {
        // Remove categories that are not in the include list.
        allCategories = allCategories.filter(function (item) {
          return _this._include.includes(item.id);
        }); // Sort categories according to the include list.

        allCategories = allCategories.sort(function (a, b) {
          var indexA = _this._include.indexOf(a.id);

          var indexB = _this._include.indexOf(b.id);

          if (indexA < indexB) {
            return -1;
          }

          if (indexA > indexB) {
            return 1;
          }

          return 0;
        });
      }

      allCategories.forEach(function (categoryData) {
        if (!_this.isCategoryNeeded(categoryData.id)) {
          return;
        }

        var category = {
          id: categoryData.id,
          name: categoryData.name,
          emojis: []
        };
        categoryData.emojis.forEach(function (emojiId) {
          var emoji = _this.addEmoji(emojiId);

          if (emoji) {
            category.emojis.push(emoji);
          }
        });

        if (category.emojis.length) {
          _this._categories.push(category);
        }
      });

      if (this.isCategoryNeeded('custom')) {
        if (this._custom.length > 0) {
          var _iterator = _createForOfIteratorHelper(this._custom),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var customEmoji = _step.value;
              this.addCustomEmoji(customEmoji);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        if (this._customCategory.emojis.length) {
          this._categories.push(this._customCategory);
        }
      }

      if (this.isCategoryNeeded('recent')) {
        if (this._recent.length) {
          this._recent.map(function (id) {
            var _iterator2 = _createForOfIteratorHelper(_this._customCategory.emojis),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _customEmoji = _step2.value;

                if (_customEmoji.id === id) {
                  _this._recentCategory.emojis.push(_customEmoji);

                  return;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            if (_this.hasEmoji(id)) {
              _this._recentCategory.emojis.push(_this.emoji(id));
            }

            return;
          });
        } // Add recent category to the top


        if (this._recentCategory.emojis.length) {
          this._categories.unshift(this._recentCategory);
        }
      }
    }
    /**
     * Find the emoji from the string
     */

  }, {
    key: "findEmoji",
    value: function findEmoji(emoji, skin) {
      // 1. Parse as :emoji_name:skin-tone-xx:
      var matches = emoji.match(COLONS_REGEX);

      if (matches) {
        emoji = matches[1];

        if (matches[2]) {
          skin = parseInt(matches[2], 10);
        }
      } // 2. Check if the specified emoji is an alias


      if (this._data.aliases.hasOwnProperty(emoji)) {
        emoji = this._data.aliases[emoji];
      } // 3. Check if we have the specified emoji


      if (this._emojis.hasOwnProperty(emoji)) {
        var emojiObject = this._emojis[emoji];

        if (skin) {
          return emojiObject.getSkin(skin);
        }

        return emojiObject;
      } // 4. Check if we have the specified native emoji


      if (this._nativeEmojis.hasOwnProperty(emoji)) {
        return this._nativeEmojis[emoji];
      }

      return null;
    }
  }, {
    key: "categories",
    value: function categories() {
      return this._categories;
    }
  }, {
    key: "emoji",
    value: function emoji(emojiId) {
      if (this._data.aliases.hasOwnProperty(emojiId)) {
        emojiId = this._data.aliases[emojiId];
      }

      var emoji = this._emojis[emojiId];

      if (!emoji) {
        throw new Error('Can not find emoji by id: ' + emojiId);
      }

      return emoji;
    }
  }, {
    key: "firstEmoji",
    value: function firstEmoji() {
      var emoji = this._emojis[Object.keys(this._emojis)[0]];

      if (!emoji) {
        throw new Error('Can not get first emoji');
      }

      return emoji;
    }
  }, {
    key: "hasEmoji",
    value: function hasEmoji(emojiId) {
      if (this._data.aliases.hasOwnProperty(emojiId)) {
        emojiId = this._data.aliases[emojiId];
      }

      if (this._emojis[emojiId]) {
        return true;
      }

      return false;
    }
  }, {
    key: "nativeEmoji",
    value: function nativeEmoji(unicodeEmoji) {
      if (this._nativeEmojis.hasOwnProperty(unicodeEmoji)) {
        return this._nativeEmojis[unicodeEmoji];
      }

      return null;
    }
  }, {
    key: "search",
    value: function search(value, maxResults) {
      var _this2 = this;

      maxResults || (maxResults = 75);

      if (!value.length) {
        return null;
      }

      if (value == '-' || value == '-1') {
        return [this.emoji('-1')];
      }

      var values = value.toLowerCase().split(/[\s|,|\-|_]+/);
      var allResults = [];

      if (values.length > 2) {
        values = [values[0], values[1]];
      }

      allResults = values.map(function (value) {
        // Start searchin in the global list of emojis
        var emojis = _this2._emojis;
        var currentIndex = _this2._searchIndex;
        var length = 0;

        for (var charIndex = 0; charIndex < value.length; charIndex++) {
          var char = value[charIndex];
          length++;
          currentIndex[char] || (currentIndex[char] = {});
          currentIndex = currentIndex[char];

          if (!currentIndex.results) {
            (function () {
              var scores = {};
              currentIndex.results = [];
              currentIndex.emojis = {};

              for (var emojiId in emojis) {
                var emoji = emojis[emojiId]; // search is a comma-separated string with words, related
                // to the emoji, for example:
                // search: "smiley,smiling,face,joy,haha,:d,:),smile,funny,=),=-)",

                var search = emoji._data.search;
                var sub = value.substr(0, length);
                var subIndex = search.indexOf(sub);

                if (subIndex != -1) {
                  var score = subIndex + 1;
                  if (sub == emojiId) score = 0;
                  currentIndex.results.push(emoji);
                  currentIndex.emojis[emojiId] = emoji;
                  scores[emojiId] = score;
                }
              }

              currentIndex.results.sort(function (a, b) {
                var aScore = scores[a.id],
                    bScore = scores[b.id];
                return aScore - bScore;
              });
            })();
          } // continue search in the reduced set of emojis


          emojis = currentIndex.emojis;
        }

        return currentIndex.results; // The "filter" call removes undefined values from allResults
        // array, for example, if we have "test " (with trailing space),
        // we will get "[Array, undefined]" for allResults and after
        // the "filter" call it will turn into "[Array]"
      }).filter(function (a) {
        return a;
      });
      var results = null;

      if (allResults.length > 1) {
        results = _index__WEBPACK_IMPORTED_MODULE_2__["intersect"].apply(null, allResults);
      } else if (allResults.length) {
        results = allResults[0];
      } else {
        results = [];
      }

      if (results && results.length > maxResults) {
        results = results.slice(0, maxResults);
      }

      return results;
    }
  }, {
    key: "addCustomEmoji",
    value: function addCustomEmoji(customEmoji) {
      var emojiData = Object.assign({}, customEmoji, {
        id: customEmoji.short_names[0],
        custom: true
      });

      if (!emojiData.search) {
        emojiData.search = Object(_data__WEBPACK_IMPORTED_MODULE_3__["buildSearch"])(emojiData);
      }

      var emoji = new EmojiData(emojiData);
      this._emojis[emoji.id] = emoji;

      this._customCategory.emojis.push(emoji);

      return emoji;
    }
  }, {
    key: "addEmoji",
    value: function addEmoji(emojiId) {
      var _this3 = this;

      // We expect the correct emoji id that is present in the emojis data.
      var data = this._data.emojis[emojiId];

      if (!this.isEmojiNeeded(data)) {
        return false;
      }

      var emoji = new EmojiData(data);
      this._emojis[emojiId] = emoji;

      if (emoji.native) {
        this._nativeEmojis[emoji.native] = emoji;
      }

      if (emoji._skins) {
        for (var idx in emoji._skins) {
          var skin = emoji._skins[idx];

          if (skin.native) {
            this._nativeEmojis[skin.native] = skin;
          }
        }
      }

      if (emoji.emoticons) {
        emoji.emoticons.forEach(function (emoticon) {
          if (_this3._emoticons[emoticon]) {
            return;
          }

          _this3._emoticons[emoticon] = emojiId;
        });
      }

      return emoji;
    }
    /**
     * Check if we need to include given category.
     *
     * @param {string} category_id - The category id.
     * @return {boolean} - Whether to include the emoji.
     */

  }, {
    key: "isCategoryNeeded",
    value: function isCategoryNeeded(category_id) {
      var isIncluded = this._include && this._include.length ? this._include.indexOf(category_id) > -1 : true;
      var isExcluded = this._exclude && this._exclude.length ? this._exclude.indexOf(category_id) > -1 : false;

      if (!isIncluded || isExcluded) {
        return false;
      }

      return true;
    }
    /**
     * Check if we need to include given emoji.
     *
     * @param {object} emoji - The raw emoji object.
     * @return {boolean} - Whether to include the emoji.
     */

  }, {
    key: "isEmojiNeeded",
    value: function isEmojiNeeded(emoji) {
      if (this._emojisFilter) {
        return this._emojisFilter(emoji);
      }

      return true;
    }
  }]);

  return EmojiIndex;
}();
var EmojiData = /*#__PURE__*/function () {
  function EmojiData(data) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EmojiData);

    this._data = Object.assign({}, data);
    this._skins = null;

    if (this._data.skin_variations) {
      this._skins = [];

      for (var skinIdx in SKINS) {
        var skinKey = SKINS[skinIdx];
        var variationData = this._data.skin_variations[skinKey];
        var skinData = Object.assign({}, data);

        for (var k in variationData) {
          skinData[k] = variationData[k];
        }

        delete skinData.skin_variations;
        skinData['skin_tone'] = parseInt(skinIdx) + 1;

        this._skins.push(new EmojiData(skinData));
      }
    }

    this._sanitized = sanitize(this._data);

    for (var key in this._sanitized) {
      this[key] = this._sanitized[key];
    }

    this.short_names = this._data.short_names;
    this.short_name = this._data.short_names[0];
    Object.freeze(this);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EmojiData, [{
    key: "getSkin",
    value: function getSkin(skinIdx) {
      if (skinIdx && skinIdx != 'native' && this._skins) {
        return this._skins[skinIdx - 1];
      }

      return this;
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      var multiply = 100 / SHEET_COLUMNS,
          x = Math.round(multiply * this._data.sheet_x * 100) / 100,
          y = Math.round(multiply * this._data.sheet_y * 100) / 100;
      return "".concat(x, "% ").concat(y, "%");
    }
  }]);

  return EmojiData;
}();
var EmojiView = /*#__PURE__*/function () {
  /**
   * emoji - Emoji to display
   * set - string, emoji set name
   * native - boolean, whether to render native emoji
   * fallback - fallback function to render missing emoji, optional
   * emojiTooltip - wether we need to show the emoji tooltip, optional
   * emojiSize - emoji size in pixels, optional
   */
  function EmojiView(emoji, skin, set, native, fallback, emojiTooltip, emojiSize) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EmojiView);

    this._emoji = emoji;
    this._native = native;
    this._skin = skin;
    this._set = set;
    this._fallback = fallback;
    this.canRender = this._canRender();
    this.cssClass = this._cssClass();
    this.cssStyle = this._cssStyle(emojiSize);
    this.content = this._content();
    this.title = emojiTooltip === true ? emoji.short_name : null;
    Object.freeze(this);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EmojiView, [{
    key: "getEmoji",
    value: function getEmoji() {
      return this._emoji.getSkin(this._skin);
    }
  }, {
    key: "_canRender",
    value: function _canRender() {
      return this._isCustom() || this._isNative() || this._hasEmoji() || this._fallback;
    }
  }, {
    key: "_cssClass",
    value: function _cssClass() {
      return ['emoji-set-' + this._set, 'emoji-type-' + this._emojiType()];
    }
  }, {
    key: "_cssStyle",
    value: function _cssStyle(emojiSize) {
      var cssStyle = {};

      if (this._isCustom()) {
        cssStyle = {
          backgroundImage: 'url(' + this.getEmoji()._data.imageUrl + ')',
          backgroundSize: '100%',
          width: emojiSize + 'px',
          height: emojiSize + 'px'
        };
      } else if (this._hasEmoji() && !this._isNative()) {
        cssStyle = {
          backgroundPosition: this.getEmoji().getPosition()
        };
      }

      if (emojiSize) {
        if (this._isNative()) {
          // Set font-size for native emoji.
          cssStyle = Object.assign(cssStyle, {
            // font-size is used for native emoji which we need
            // to scale with 0.8 factor to have them look approximately
            // the same size as image-based emojl.
            fontSize: Math.round(emojiSize * 0.8 * 10) / 10 + 'px'
          });
        } else {
          // Set width/height for image emoji.
          cssStyle = Object.assign(cssStyle, {
            width: emojiSize + 'px',
            height: emojiSize + 'px'
          });
        }
      }

      return cssStyle;
    }
  }, {
    key: "_content",
    value: function _content() {
      if (this._isCustom()) {
        return '';
      }

      if (this._isNative()) {
        return this.getEmoji().native;
      }

      if (this._hasEmoji()) {
        return '';
      }

      return this._fallback ? this._fallback(this.getEmoji()) : null;
    }
  }, {
    key: "_isNative",
    value: function _isNative() {
      return this._native;
    }
  }, {
    key: "_isCustom",
    value: function _isCustom() {
      return this.getEmoji().custom;
    }
  }, {
    key: "_hasEmoji",
    value: function _hasEmoji() {
      if (!this.getEmoji()._data) {
        // Return false if we have no data.
        return false;
      }

      var hasImage = this.getEmoji()._data['has_img_' + this._set];

      if (hasImage === undefined) {
        // If there is no has_img_xxx in the data, we are working with
        // specific data file, like facebook.json, so we assume all
        // emojis are available (the :set setting for picker should
        // match the data file).
        return true;
      } // Otherwise, we are using all.json and can switch between different
      // sets - in this case the `has_img_{set_name}` is a boolean that
      // indicates if there is such image or not for a given set.


      return hasImage;
    }
  }, {
    key: "_emojiType",
    value: function _emojiType() {
      if (this._isCustom()) {
        return 'custom';
      }

      if (this._isNative()) {
        return 'native';
      }

      if (this._hasEmoji()) {
        return 'image';
      }

      return 'fallback';
    }
  }]);

  return EmojiView;
}();
function sanitize(emoji) {
  var name = emoji.name,
      short_names = emoji.short_names,
      skin_tone = emoji.skin_tone,
      skin_variations = emoji.skin_variations,
      emoticons = emoji.emoticons,
      unified = emoji.unified,
      custom = emoji.custom,
      imageUrl = emoji.imageUrl,
      id = emoji.id || short_names[0],
      colons = ":".concat(id, ":");

  if (custom) {
    return {
      id: id,
      name: name,
      colons: colons,
      emoticons: emoticons,
      custom: custom,
      imageUrl: imageUrl
    };
  }

  if (skin_tone) {
    colons += ":skin-tone-".concat(skin_tone, ":");
  }

  return {
    id: id,
    name: name,
    colons: colons,
    emoticons: emoticons,
    unified: unified.toLowerCase(),
    skin: skin_tone || (skin_variations ? 1 : null),
    native: Object(_index__WEBPACK_IMPORTED_MODULE_2__["unifiedToNative"])(unified)
  };
}

/***/ }),

/***/ "./src/utils/frequently.js":
/*!*********************************!*\
  !*** ./src/utils/frequently.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/utils/store.js");

var DEFAULTS = ['+1', 'grinning', 'kissing_heart', 'heart_eyes', 'laughing', 'stuck_out_tongue_winking_eye', 'sweat_smile', 'joy', 'scream', 'disappointed', 'unamused', 'weary', 'sob', 'sunglasses', 'heart', 'poop'];
var frequently, initialized;
var defaults = {};

function init() {
  initialized = true;
  frequently = _store__WEBPACK_IMPORTED_MODULE_0__["default"].get('frequently');
}

function add(emoji) {
  if (!initialized) init();
  var id = emoji.id;
  frequently || (frequently = defaults);
  frequently[id] || (frequently[id] = 0);
  frequently[id] += 1;
  _store__WEBPACK_IMPORTED_MODULE_0__["default"].set('last', id);
  _store__WEBPACK_IMPORTED_MODULE_0__["default"].set('frequently', frequently);
}

function get(maxNumber) {
  if (!initialized) init();

  if (!frequently) {
    defaults = {};
    var result = [];
    var defaultLength = Math.min(maxNumber, DEFAULTS.length);

    for (var i = 0; i < defaultLength; i++) {
      defaults[DEFAULTS[i]] = defaultLength - i;
      result.push(DEFAULTS[i]);
    }

    return result;
  }

  var quantity = maxNumber;
  var frequentlyKeys = [];

  for (var key in frequently) {
    if (frequently.hasOwnProperty(key)) {
      frequentlyKeys.push(key);
    }
  }

  var sorted = frequentlyKeys.sort(function (a, b) {
    return frequently[a] - frequently[b];
  }).reverse();
  var sliced = sorted.slice(0, quantity);
  var last = _store__WEBPACK_IMPORTED_MODULE_0__["default"].get('last');

  if (last && sliced.indexOf(last) == -1) {
    sliced.pop();
    sliced.push(last);
  }

  return sliced;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  add: add,
  get: get
});

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: uniq, intersect, deepMerge, unifiedToNative, measureScrollbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniq", function() { return uniq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersect", function() { return intersect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepMerge", function() { return deepMerge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unifiedToNative", function() { return unifiedToNative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "measureScrollbar", function() { return measureScrollbar; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _polyfills_stringFromCodePoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../polyfills/stringFromCodePoint */ "./src/polyfills/stringFromCodePoint.js");



function unifiedToNative(unified) {
  var unicodes = unified.split('-'),
      codePoints = unicodes.map(function (u) {
    return "0x".concat(u);
  });
  return _polyfills_stringFromCodePoint__WEBPACK_IMPORTED_MODULE_1__["default"].apply(null, codePoints);
}

function uniq(arr) {
  return arr.reduce(function (acc, item) {
    if (acc.indexOf(item) === -1) {
      acc.push(item);
    }

    return acc;
  }, []);
}

function intersect(a, b) {
  var uniqA = uniq(a);
  var uniqB = uniq(b);
  return uniqA.filter(function (item) {
    return uniqB.indexOf(item) >= 0;
  });
}

function deepMerge(a, b) {
  var o = {};

  for (var key in a) {
    var originalValue = a[key],
        value = originalValue;

    if (b.hasOwnProperty(key)) {
      value = b[key];
    }

    if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value) === 'object') {
      value = deepMerge(originalValue, value);
    }

    o[key] = value;
  }

  return o;
} // https://github.com/sonicdoe/measure-scrollbar


function measureScrollbar() {
  if (typeof document == 'undefined') return 0;
  var div = document.createElement('div');
  div.style.width = '100px';
  div.style.height = '100px';
  div.style.overflow = 'scroll';
  div.style.position = 'absolute';
  div.style.top = '-9999px';
  document.body.appendChild(div);
  var scrollbarWidth = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);
  return scrollbarWidth;
}



/***/ }),

/***/ "./src/utils/shared-props.js":
/*!***********************************!*\
  !*** ./src/utils/shared-props.js ***!
  \***********************************/
/*! exports provided: EmojiProps, PickerProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiProps", function() { return EmojiProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickerProps", function() { return PickerProps; });
var EmojiProps = {
  native: {
    type: Boolean,
    default: false
  },
  tooltip: {
    type: Boolean,
    default: false
  },
  fallback: {
    type: Function
  },
  skin: {
    type: Number,
    default: 1
  },
  set: {
    type: String,
    default: 'apple'
  },
  emoji: {
    type: [String, Object],
    required: true
  },
  size: {
    type: Number,
    default: null
  }
};
var PickerProps = {
  perLine: {
    type: Number,
    default: 9
  },
  maxSearchResults: {
    type: Number,
    default: 75
  },
  emojiSize: {
    type: Number,
    default: 24
  },
  title: {
    type: String,
    default: 'Emoji Mart™'
  },
  emoji: {
    type: String,
    default: 'department_store'
  },
  color: {
    type: String,
    default: '#ae65c5'
  },
  set: {
    type: String,
    default: 'apple'
  },
  skin: {
    type: Number,
    default: null
  },
  defaultSkin: {
    type: Number,
    default: 1
  },
  native: {
    type: Boolean,
    default: false
  },
  emojiTooltip: {
    type: Boolean,
    default: false
  },
  autoFocus: {
    type: Boolean,
    default: false
  },
  i18n: {
    type: Object,
    default: function _default() {
      return {};
    }
  },
  showPreview: {
    type: Boolean,
    default: true
  },
  showSearch: {
    type: Boolean,
    default: true
  },
  showCategories: {
    type: Boolean,
    default: true
  },
  showSkinTones: {
    type: Boolean,
    default: true
  },
  infiniteScroll: {
    type: Boolean,
    default: true
  },
  pickerStyles: {
    type: Object,
    default: function _default() {
      return {};
    }
  }
};


/***/ }),

/***/ "./src/utils/store.js":
/*!****************************!*\
  !*** ./src/utils/store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var NAMESPACE = 'emoji-mart';
var _JSON = JSON;
var isLocalStorageSupported = typeof window !== 'undefined' && 'localStorage' in window;
var getter;
var setter;

function setHandlers(handlers) {
  handlers || (handlers = {});
  getter = handlers.getter;
  setter = handlers.setter;
}

function setNamespace(namespace) {
  NAMESPACE = namespace;
}

function update(state) {
  for (var key in state) {
    var value = state[key];
    set(key, value);
  }
}

function set(key, value) {
  if (setter) {
    setter(key, value);
  } else {
    if (!isLocalStorageSupported) return;

    try {
      window.localStorage["".concat(NAMESPACE, ".").concat(key)] = _JSON.stringify(value);
    } catch (e) {}
  }
}

function get(key) {
  if (getter) {
    return getter(key);
  } else {
    if (!isLocalStorageSupported) return;

    try {
      var value = window.localStorage["".concat(NAMESPACE, ".").concat(key)];
    } catch (e) {
      return;
    }

    if (value) {
      return JSON.parse(value);
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  update: update,
  set: set,
  get: get,
  setNamespace: setNamespace,
  setHandlers: setHandlers
});

/***/ }),

/***/ "vue":
/*!******************************************************************************!*\
  !*** external {"root":"Vue","commonjs2":"vue","commonjs":"vue","amd":"vue"} ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_vue__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9FbW9qaU1hcnQvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0Vtb2ppTWFydC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9FbW9qaS52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvUGlja2VyLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9TdGF0aWNQaWNrZXIudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2FuY2hvcnMudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2NhdGVnb3J5LnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9wcmV2aWV3LnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9zZWFyY2gudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NraW5zLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvdnVlMy12aXJ0dWFsLXNjcm9sbGVyL2Rpc3QvdnVlMy12aXJ0dWFsLXNjcm9sbGVyLmNzcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9FbW9qaS52dWU/YWRjMCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9FbW9qaS52dWU/OGNjMiIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9FbW9qaS52dWU/OTBhYiIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9QaWNrZXIudnVlPzAxOGQiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvUGlja2VyLnZ1ZT8xOWQzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL1BpY2tlci52dWU/ZTA5NCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9TdGF0aWNQaWNrZXIudnVlPzNiMDciLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvU3RhdGljUGlja2VyLnZ1ZT9mNjQzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL1N0YXRpY1BpY2tlci52dWU/NDIxMiIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9hbmNob3JzLnZ1ZT9hZTZmIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2FuY2hvcnMudnVlP2Y4ZjciLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvYW5jaG9ycy52dWU/ZTZmMCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9jYXRlZ29yeS52dWU/YWIyZiIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9jYXRlZ29yeS52dWU/ZjM2YSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9jYXRlZ29yeS52dWU/NDMzZCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9wcmV2aWV3LnZ1ZT8xYmMyIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3ByZXZpZXcudnVlPzIxMzAiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvcHJldmlldy52dWU/ZjJlMiIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9zZWFyY2gudnVlPzEwOGYiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLnZ1ZT8yYzkwIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NlYXJjaC52dWU/Y2ZmOSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9za2lucy52dWU/NTdiMSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9za2lucy52dWU/YjcxNiIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9za2lucy52dWU/MWI1NCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3BvbHlmaWxscy9hbmltYXRpb25GcmFtZS5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvcG9seWZpbGxzL3N0cmluZ0Zyb21Db2RlUG9pbnQuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3N2Z3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2RhdGEuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2Vtb2ppLWRhdGEuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2ZyZXF1ZW50bHkuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy91dGlscy9zaGFyZWQtcHJvcHMuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL3N0b3JlLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC9leHRlcm5hbCB7XCJyb290XCI6XCJWdWVcIixcImNvbW1vbmpzMlwiOlwidnVlXCIsXCJjb21tb25qc1wiOlwidnVlXCIsXCJhbWRcIjpcInZ1ZVwifSJdLCJuYW1lcyI6WyJpc1dpbmRvd0F2YWlsYWJsZSIsIndpbmRvdyIsImxhc3RUaW1lIiwidmVuZG9ycyIsIngiLCJsZW5ndGgiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwiZWxlbWVudCIsImN1cnJUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJ0aW1lVG9DYWxsIiwiTWF0aCIsIm1heCIsImlkIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIl9TdHJpbmciLCJTdHJpbmciLCJmcm9tQ29kZVBvaW50Iiwic3RyaW5nRnJvbUNvZGVQb2ludCIsIk1BWF9TSVpFIiwiY29kZVVuaXRzIiwiaGlnaFN1cnJvZ2F0ZSIsImxvd1N1cnJvZ2F0ZSIsImluZGV4IiwiYXJndW1lbnRzIiwicmVzdWx0IiwiY29kZVBvaW50IiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJmbG9vciIsIlJhbmdlRXJyb3IiLCJwdXNoIiwiZnJvbUNoYXJDb2RlIiwiYXBwbHkiLCJTVkdzIiwiYWN0aXZpdHkiLCJjdXN0b20iLCJmbGFncyIsImZvb2RzIiwibmF0dXJlIiwib2JqZWN0cyIsInNtaWxleXMiLCJwZW9wbGUiLCJwbGFjZXMiLCJyZWNlbnQiLCJzeW1ib2xzIiwibWFwcGluZyIsIm5hbWUiLCJ1bmlmaWVkIiwibm9uX3F1YWxpZmllZCIsImhhc19pbWdfYXBwbGUiLCJoYXNfaW1nX2dvb2dsZSIsImhhc19pbWdfdHdpdHRlciIsImhhc19pbWdfZmFjZWJvb2siLCJrZXl3b3JkcyIsInNoZWV0IiwiZW1vdGljb25zIiwidGV4dCIsInNob3J0X25hbWVzIiwiYWRkZWRfaW4iLCJidWlsZFNlYXJjaCIsImVtb2ppIiwic2VhcmNoIiwiYWRkVG9TZWFyY2giLCJzdHJpbmdzIiwic3BsaXQiLCJBcnJheSIsImlzQXJyYXkiLCJmb3JFYWNoIiwic3RyaW5nIiwicyIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsImpvaW4iLCJjb21wcmVzcyIsImZpbHRlciIsInNob3J0X25hbWUiLCJzaGVldF94Iiwic2hlZXRfeSIsInBhcnNlSW50Iiwia2V5IiwidmFsdWUiLCJkZWVwRnJlZXplIiwib2JqZWN0IiwicHJvcE5hbWVzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImZyZWV6ZSIsInVuY29tcHJlc3MiLCJkYXRhIiwiY29tcHJlc3NlZCIsImVtb2ppcyIsInVuc2hpZnQiLCJ0b0ZpeGVkIiwibW9kdWxlIiwiZXhwb3J0cyIsIlNIRUVUX0NPTFVNTlMiLCJDT0xPTlNfUkVHRVgiLCJTS0lOUyIsIkVtb2ppSW5kZXgiLCJlbW9qaXNUb1Nob3dGaWx0ZXIiLCJpbmNsdWRlIiwiZXhjbHVkZSIsInJlY2VudExlbmd0aCIsIl9kYXRhIiwiX2Vtb2ppc0ZpbHRlciIsIl9pbmNsdWRlIiwiX2V4Y2x1ZGUiLCJfY3VzdG9tIiwiX3JlY2VudCIsImZyZXF1ZW50bHkiLCJnZXQiLCJfZW1vamlzIiwiX25hdGl2ZUVtb2ppcyIsIl9lbW90aWNvbnMiLCJfY2F0ZWdvcmllcyIsIl9yZWNlbnRDYXRlZ29yeSIsIl9jdXN0b21DYXRlZ29yeSIsIl9zZWFyY2hJbmRleCIsImJ1aWxkSW5kZXgiLCJhbGxDYXRlZ29yaWVzIiwiY2F0ZWdvcmllcyIsIml0ZW0iLCJpbmNsdWRlcyIsInNvcnQiLCJhIiwiYiIsImluZGV4QSIsImluZGV4QiIsImNhdGVnb3J5RGF0YSIsImlzQ2F0ZWdvcnlOZWVkZWQiLCJjYXRlZ29yeSIsImVtb2ppSWQiLCJhZGRFbW9qaSIsImN1c3RvbUVtb2ppIiwiYWRkQ3VzdG9tRW1vamkiLCJtYXAiLCJoYXNFbW9qaSIsInNraW4iLCJtYXRjaGVzIiwibWF0Y2giLCJhbGlhc2VzIiwiaGFzT3duUHJvcGVydHkiLCJlbW9qaU9iamVjdCIsImdldFNraW4iLCJFcnJvciIsImtleXMiLCJ1bmljb2RlRW1vamkiLCJtYXhSZXN1bHRzIiwidmFsdWVzIiwiYWxsUmVzdWx0cyIsImN1cnJlbnRJbmRleCIsImNoYXJJbmRleCIsImNoYXIiLCJyZXN1bHRzIiwic2NvcmVzIiwic3ViIiwic3Vic3RyIiwic3ViSW5kZXgiLCJzY29yZSIsImFTY29yZSIsImJTY29yZSIsImludGVyc2VjdCIsInNsaWNlIiwiZW1vamlEYXRhIiwiYXNzaWduIiwiRW1vamlEYXRhIiwiaXNFbW9qaU5lZWRlZCIsIm5hdGl2ZSIsIl9za2lucyIsImlkeCIsImVtb3RpY29uIiwiY2F0ZWdvcnlfaWQiLCJpc0luY2x1ZGVkIiwiaXNFeGNsdWRlZCIsInNraW5fdmFyaWF0aW9ucyIsInNraW5JZHgiLCJza2luS2V5IiwidmFyaWF0aW9uRGF0YSIsInNraW5EYXRhIiwiayIsIl9zYW5pdGl6ZWQiLCJzYW5pdGl6ZSIsIm11bHRpcGx5Iiwicm91bmQiLCJ5IiwiRW1vamlWaWV3Iiwic2V0IiwiZmFsbGJhY2siLCJlbW9qaVRvb2x0aXAiLCJlbW9qaVNpemUiLCJfZW1vamkiLCJfbmF0aXZlIiwiX3NraW4iLCJfc2V0IiwiX2ZhbGxiYWNrIiwiY2FuUmVuZGVyIiwiX2NhblJlbmRlciIsImNzc0NsYXNzIiwiX2Nzc0NsYXNzIiwiY3NzU3R5bGUiLCJfY3NzU3R5bGUiLCJjb250ZW50IiwiX2NvbnRlbnQiLCJ0aXRsZSIsIl9pc0N1c3RvbSIsIl9pc05hdGl2ZSIsIl9oYXNFbW9qaSIsIl9lbW9qaVR5cGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJnZXRFbW9qaSIsImltYWdlVXJsIiwiYmFja2dyb3VuZFNpemUiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRQb3NpdGlvbiIsImdldFBvc2l0aW9uIiwiZm9udFNpemUiLCJoYXNJbWFnZSIsInVuZGVmaW5lZCIsInNraW5fdG9uZSIsImNvbG9ucyIsInVuaWZpZWRUb05hdGl2ZSIsIkRFRkFVTFRTIiwiaW5pdGlhbGl6ZWQiLCJkZWZhdWx0cyIsImluaXQiLCJzdG9yZSIsImFkZCIsIm1heE51bWJlciIsImRlZmF1bHRMZW5ndGgiLCJtaW4iLCJpIiwicXVhbnRpdHkiLCJmcmVxdWVudGx5S2V5cyIsInNvcnRlZCIsInJldmVyc2UiLCJzbGljZWQiLCJsYXN0IiwicG9wIiwidW5pY29kZXMiLCJjb2RlUG9pbnRzIiwidSIsInVuaXEiLCJhcnIiLCJyZWR1Y2UiLCJhY2MiLCJ1bmlxQSIsInVuaXFCIiwiZGVlcE1lcmdlIiwibyIsIm9yaWdpbmFsVmFsdWUiLCJtZWFzdXJlU2Nyb2xsYmFyIiwiZG9jdW1lbnQiLCJkaXYiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJvdmVyZmxvdyIsInBvc2l0aW9uIiwidG9wIiwiYm9keSIsImFwcGVuZENoaWxkIiwic2Nyb2xsYmFyV2lkdGgiLCJvZmZzZXRXaWR0aCIsImNsaWVudFdpZHRoIiwicmVtb3ZlQ2hpbGQiLCJFbW9qaVByb3BzIiwidHlwZSIsIkJvb2xlYW4iLCJkZWZhdWx0IiwidG9vbHRpcCIsIkZ1bmN0aW9uIiwicmVxdWlyZWQiLCJzaXplIiwiUGlja2VyUHJvcHMiLCJwZXJMaW5lIiwibWF4U2VhcmNoUmVzdWx0cyIsImNvbG9yIiwiZGVmYXVsdFNraW4iLCJhdXRvRm9jdXMiLCJpMThuIiwic2hvd1ByZXZpZXciLCJzaG93U2VhcmNoIiwic2hvd0NhdGVnb3JpZXMiLCJzaG93U2tpblRvbmVzIiwiaW5maW5pdGVTY3JvbGwiLCJwaWNrZXJTdHlsZXMiLCJOQU1FU1BBQ0UiLCJfSlNPTiIsIkpTT04iLCJpc0xvY2FsU3RvcmFnZVN1cHBvcnRlZCIsImdldHRlciIsInNldHRlciIsInNldEhhbmRsZXJzIiwiaGFuZGxlcnMiLCJzZXROYW1lc3BhY2UiLCJuYW1lc3BhY2UiLCJ1cGRhdGUiLCJzdGF0ZSIsImxvY2FsU3RvcmFnZSIsInN0cmluZ2lmeSIsImUiLCJwYXJzZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFF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LEtBRkQsQ0FFRSxPQUFPNk4sQ0FBUCxFQUFVO0FBQ1Y7QUFDRDs7QUFFRCxRQUFJNU4sS0FBSixFQUFXO0FBQ1QsYUFBT2dOLElBQUksQ0FBQ2EsS0FBTCxDQUFXN04sS0FBWCxDQUFQO0FBQ0Q7QUFDRjtBQUNGOztBQUVjO0FBQUV3TixRQUFNLEVBQU5BLE1BQUY7QUFBVTlHLEtBQUcsRUFBSEEsR0FBVjtBQUFlNUUsS0FBRyxFQUFIQSxHQUFmO0FBQW9Cd0wsY0FBWSxFQUFaQSxZQUFwQjtBQUFrQ0YsYUFBVyxFQUFYQTtBQUFsQyxDQUFmLEU7Ozs7Ozs7Ozs7O0FDeERBLGlEIiwiZmlsZSI6ImVtb2ppLW1hcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJ2dWVcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1widnVlXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkVtb2ppTWFydFwiXSA9IGZhY3RvcnkocmVxdWlyZShcInZ1ZVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiRW1vamlNYXJ0XCJdID0gZmFjdG9yeShyb290W1wiVnVlXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3Z1ZV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCI8dGVtcGxhdGU+XG4gIDxzcGFuXG4gICAgdi1pZj1cInZpZXcuY2FuUmVuZGVyXCJcbiAgICA6dGl0bGU9XCJ2aWV3LnRpdGxlXCJcbiAgICA6ZGF0YS10aXRsZT1cInRpdGxlXCJcbiAgICBjbGFzcz1cImVtb2ppLW1hcnQtZW1vamlcIlxuICAgIEBtb3VzZWVudGVyPVwib25Nb3VzZUVudGVyXCJcbiAgICBAbW91c2VsZWF2ZT1cIm9uTW91c2VMZWF2ZVwiXG4gICAgQGNsaWNrPVwib25DbGlja1wiXG4gID5cbiAgICA8c3BhbiA6Y2xhc3M9XCJ2aWV3LmNzc0NsYXNzXCIgOnN0eWxlPVwidmlldy5jc3NTdHlsZVwiPnt7XG4gICAgICB2aWV3LmNvbnRlbnRcbiAgICB9fTwvc3Bhbj5cbiAgPC9zcGFuPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IEVtb2ppUHJvcHMgfSBmcm9tICcuLi91dGlscy9zaGFyZWQtcHJvcHMnXG5pbXBvcnQgeyBFbW9qaVZpZXcgfSBmcm9tICcuLi91dGlscy9lbW9qaS1kYXRhJ1xuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCBjb21wdXRlZCwgcmVmIH0gZnJvbSAndnVlJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnRW1vamknLFxuXG4gIHByb3BzOiB7XG4gICAgLi4uRW1vamlQcm9wcyxcbiAgICBkYXRhOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICB9LFxuXG4gIGVtaXRzOiBbJ21vdXNlZW50ZXInLCAnbW91c2VsZWF2ZScsICdjbGljayddLFxuXG4gIHNldHVwKHByb3BzLCB7IGVtaXQgfSkge1xuICAgIGNvbnN0IGVtb2ppT2JqZWN0ID0gY29tcHV0ZWQoKCkgPT4gdHlwZW9mIHByb3BzLmVtb2ppID09ICdzdHJpbmcnXG4gICAgICA/IHByb3BzLmRhdGEuZmluZEVtb2ppKHByb3BzLmVtb2ppKVxuICAgICAgOiBwcm9wcy5lbW9qaSlcblxuICAgIGNvbnN0IHZpZXcgPSBjb21wdXRlZCgoKSA9PiBuZXcgRW1vamlWaWV3KFxuICAgICAgZW1vamlPYmplY3QudmFsdWUsXG4gICAgICBwcm9wcy5za2luLFxuICAgICAgcHJvcHMuc2V0LFxuICAgICAgcHJvcHMubmF0aXZlLFxuICAgICAgcHJvcHMuZmFsbGJhY2ssXG4gICAgICBwcm9wcy50b29sdGlwLFxuICAgICAgcHJvcHMuc2l6ZSxcbiAgICApKVxuXG4gICAgY29uc3Qgc2FuaXRpemVkRGF0YSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiBlbW9qaU9iamVjdC52YWx1ZS5fc2FuaXRpemVkXG4gICAgfSlcblxuICAgIGNvbnN0IHRpdGxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIHByb3BzLnRvb2x0aXAgPyBlbW9qaU9iamVjdC52YWx1ZS5zaG9ydF9uYW1lIDogbnVsbFxuICAgIH0pXG5cbiAgICByZXR1cm4ge1xuICAgICAgdmlldyxcbiAgICAgIHRpdGxlLFxuICAgICAgb25DbGljazogKCkgPT4gZW1pdCgnY2xpY2snLCBlbW9qaU9iamVjdC52YWx1ZSksXG4gICAgICBvbk1vdXNlRW50ZXI6KCkgPT4gZW1pdCgnbW91c2VlbnRlcicsIGVtb2ppT2JqZWN0LnZhbHVlKSxcbiAgICAgIG9uTW91c2VMZWF2ZTooKSA9PiBlbWl0KCdtb3VzZWxlYXZlJywgZW1vamlPYmplY3QudmFsdWUpLFxuICAgICAgZW1vamlPYmplY3QsIC8vIHVzZSBqZXN0IHVuaXRcbiAgICAgIHNhbml0aXplZERhdGEsIC8vIHVzZSBqZXN0IHVuaXRcbiAgICB9XG4gIH1cbn0pXG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnRcIiA6c3R5bGU9XCJjdXN0b21TdHlsZXNcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1iYXIgZW1vamktbWFydC1iYXItYW5jaG9yc1wiIHYtaWY9XCJzaG93Q2F0ZWdvcmllc1wiPlxuICAgICAgPGFuY2hvcnNcbiAgICAgICAgOmkxOG49XCJtZXJnZWRJMThuXCJcbiAgICAgICAgOmNvbG9yPVwiY29sb3JcIlxuICAgICAgICA6Y2F0ZWdvcmllcz1cImNhdGVnb3JpZXNcIlxuICAgICAgICA6YWN0aXZlLWNhdGVnb3J5PVwiYWN0aXZlQ2F0ZWdvcnlcIlxuICAgICAgICBAY2hhbmdlPVwib25BbmNob3JDbGlja1wiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuXG4gICAgPHNsb3RcbiAgICAgIG5hbWU9XCJzZWFyY2hUZW1wbGF0ZVwiXG4gICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgOmkxOG49XCJpMThuXCJcbiAgICAgIDphdXRvLWZvY3VzPVwiYXV0b0ZvY3VzXCJcbiAgICAgIDpvbi1zZWFyY2g9XCJvblNlYXJjaFwiXG4gICAgPlxuICAgICAgPHNlYXJjaFxuICAgICAgICB2LWlmPVwic2hvd1NlYXJjaFwiXG4gICAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICAgIDppMThuPVwibWVyZ2VkSTE4blwiXG4gICAgICAgIDphdXRvLWZvY3VzPVwiYXV0b0ZvY3VzXCJcbiAgICAgICAgOm9uLXNlYXJjaD1cIm9uU2VhcmNoXCJcbiAgICAgICAgQHNlYXJjaD1cIm9uU2VhcmNoXCJcbiAgICAgIC8+XG4gICAgPC9zbG90PlxuXG4gICAgPGNhdGVnb3J5XG4gICAgICB2LXNob3c9XCJzZWFyY2hFbW9qaXNcIlxuICAgICAgY2xhc3M9XCJlbW9qaS1tYXJ0LXNlYXJjaC1yZXN1bHRzXCJcbiAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICA6aTE4bj1cIm1lcmdlZEkxOG5cIlxuICAgICAgaWQ9XCJzZWFyY2hcIlxuICAgICAgbmFtZT1cIlNlYXJjaFwiXG4gICAgICA6ZW1vamlzPVwic2VhcmNoRW1vamlzXCJcbiAgICAgIDplbW9qaS1wcm9wcz1cImVtb2ppUHJvcHNcIlxuICAgIC8+XG4gICAgPER5bmFtaWNTY3JvbGxlclxuICAgICAgdi1zaG93PVwiIXNlYXJjaEVtb2ppc1wiXG4gICAgICByZWY9XCJkeW5TY3JvbGxlclJlZlwiXG4gICAgICA6aXRlbXM9XCJzY3JvbGxlckNhdGVnb3JpZXNcIlxuICAgICAgOm1pbi1pdGVtLXNpemU9XCI2MFwiXG4gICAgICBjbGFzcz1cInNjcm9sbGVyXCJcbiAgICAgIDpidWZmZXI9XCI0MDBcIlxuICAgICAga2V5LWZpZWxkPVwiaWRcIlxuICAgICAgOmVtaXQtdXBkYXRlPVwidHJ1ZVwiXG4gICAgICBAdXBkYXRlPVwib25TY3JvbGxVcGRhdGVcIlxuICAgID5cbiAgICAgIDx0ZW1wbGF0ZSAjZGVmYXVsdD1cInNjb3BlXCI+XG4gICAgICAgID09PT09PT09PT0ge3sgc2NvcGUgfX0gPT09PT09PT1cbjwhLS0gICAgICAgIDxEeW5hbWljU2Nyb2xsZXJJdGVtIDppdGVtPVwiaXRlbVwiIDphY3RpdmU9XCJhY3RpdmVcIiA6ZGF0YS1pbmRleD1cImluZGV4XCI+LS0+XG48IS0tICAgICAgICAgIDxDYXRlZ29yeS0tPlxuPCEtLSAgICAgICAgICAgIHYtc2hvdz1cInRydWVcIi0tPlxuPCEtLSAgICAgICAgICAgIDppMThuPVwiaXRlbS5tZXJnZWRJMThuXCItLT5cbjwhLS0gICAgICAgICAgICA6aWQ9XCJpdGVtLmNhdGVnb3J5LmlkXCItLT5cbjwhLS0gICAgICAgICAgICA6bmFtZT1cIml0ZW0uY2F0ZWdvcnkubmFtZVwiLS0+XG48IS0tICAgICAgICAgICAgOmVtb2ppcz1cIml0ZW0uY2F0ZWdvcnkuZW1vamlzXCItLT5cbjwhLS0gICAgICAgICAgICA6ZW1vamktcHJvcHM9XCJpdGVtLmVtb2ppUHJvcHNcIi0tPlxuPCEtLSAgICAgICAgICAvPi0tPlxuPCEtLSAgICAgICAgPC9EeW5hbWljU2Nyb2xsZXJJdGVtPi0tPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L0R5bmFtaWNTY3JvbGxlcj5cblxuICAgIDxzbG90XG4gICAgICBuYW1lPVwicHJldmlld1RlbXBsYXRlXCJcbiAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICA6dGl0bGU9XCJ0aXRsZVwiXG4gICAgICA6ZW1vamk9XCJwcmV2aWV3RW1vamlcIlxuICAgICAgOmlkbGUtZW1vamk9XCJpZGxlRW1vamlcIlxuICAgICAgOnNob3ctc2tpbi10b25lcz1cInNob3dTa2luVG9uZXNcIlxuICAgICAgOmVtb2ppLXByb3BzPVwiZW1vamlQcm9wc1wiXG4gICAgICA6c2tpbi1wcm9wcz1cInNraW5Qcm9wc1wiXG4gICAgICA6b24tc2tpbi1jaGFuZ2U9XCJvblNraW5DaGFuZ2VcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LWJhciBlbW9qaS1tYXJ0LWJhci1wcmV2aWV3XCIgdi1pZj1cInNob3dQcmV2aWV3XCI+XG4gICAgICAgIDxwcmV2aWV3XG4gICAgICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgICAgICA6dGl0bGU9XCJ0aXRsZVwiXG4gICAgICAgICAgOmVtb2ppPVwicHJldmlld0Vtb2ppXCJcbiAgICAgICAgICA6aWRsZS1lbW9qaT1cImlkbGVFbW9qaVwiXG4gICAgICAgICAgOnNob3ctc2tpbi10b25lcz1cInNob3dTa2luVG9uZXNcIlxuICAgICAgICAgIDplbW9qaS1wcm9wcz1cImVtb2ppUHJvcHNcIlxuICAgICAgICAgIDpza2luLXByb3BzPVwic2tpblByb3BzXCJcbiAgICAgICAgICA6b24tc2tpbi1jaGFuZ2U9XCJvblNraW5DaGFuZ2VcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9zbG90PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgJy4uL3BvbHlmaWxscy9hbmltYXRpb25GcmFtZSdcbmltcG9ydCBzdG9yZSBmcm9tICcuLi91dGlscy9zdG9yZSdcbmltcG9ydCBmcmVxdWVudGx5IGZyb20gJy4uL3V0aWxzL2ZyZXF1ZW50bHknXG5pbXBvcnQgeyBkZWVwTWVyZ2UsIG1lYXN1cmVTY3JvbGxiYXIgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IFBpY2tlclByb3BzIH0gZnJvbSAnLi4vdXRpbHMvc2hhcmVkLXByb3BzJ1xuaW1wb3J0IEFuY2hvcnMgZnJvbSAnLi9hbmNob3JzJ1xuaW1wb3J0IENhdGVnb3J5IGZyb20gJy4vY2F0ZWdvcnknXG5pbXBvcnQgUHJldmlldyBmcm9tICcuL3ByZXZpZXcnXG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vc2VhcmNoJ1xuXG4vKlxuICogTm90ZSBhYm91dCBgYnVmZmVyYCBzZXR0aW5nIGZvciBEeW5hbWljU2Nyb2xsZXI6IHRoaXMgaXMgYVxuICogZml4IGZvciAjNDkgLSB3aGVuIGNsaWNraW5nIG9uIHRoZSBcIkZsYWdzXCIgY2F0ZWdvcnkgZm9yIHRoZSBmaXJzdFxuICogdGltZSwgdGhlIGNhdGVnb3J5IGlzIG5vdCBzY3JvbGxlZCB0byB0aGUgdG9wIG9mIHRoZSBjb21wb25lbnQuXG4gKiBUaGlzIGlzIGJlY2F1c2UgdGhlIGxhc3QgY2F0ZWdvcnkgc2l6ZSBpcyBub3QgY2FsY3VsYXRlZCB5ZXQgYW5kXG4gKiB2aXJ0dWFsIHNjcm9sbGVyIHRha2VzICdtaW5JdGVtU2l6ZScgYXMgY2F0ZWdvcnkgaGVpZ2h0LlxuICpcbiAqIFZpcnR1YWwgc2Nyb2xsZXIgKFJlY3ljbGVTY3JvbGxlciBjb21wb25lbnQpIHVzZXMgYGJ1ZmZlcmAgdmFsdWVcbiAqIHRvICBkZWNpZGUgaG93IG1hbnkgY29tcG9uZW50cyB0byByZW5kZXIgaW50aXRpYWxseSBkZXBlbmRpbmcgb25cbiAqIHRoZSBzY3JvbGwgYXJlYSBzaXplICsgYnVmZmVyKjIgKGFuZCBhbGwgY2F0ZWdvcmllcyBpbml0aWFsbHlcbiAqIGhhdmUgbWluIHNpemUsIDYwcHgpLlxuICpcbiAqIEJ5IGluY3JlYXNpbmcgYnVmZmVyIHRvIDQwMHB4LCB3ZSBtYWtlIHRoZSBzY3JvbGxlciB0byBwZXJmb3JtXG4gKiBzaXplIGNhbGN1bGF0aW9uIGZvciBhbGwgY2F0ZWdvcmllcyBhbmQgdGhlIGZvbGxvd2luZ1xuICogc2Nyb2xsVG9JdGVtKCkgY2FsbHMgd29yayBjb3JyZWN0bHkuXG4gKi9cblxuaW1wb3J0IHsgRHluYW1pY1Njcm9sbGVyLCBEeW5hbWljU2Nyb2xsZXJJdGVtIH0gZnJvbSAndnVlMy12aXJ0dWFsLXNjcm9sbGVyJ1xuaW1wb3J0ICd2dWUzLXZpcnR1YWwtc2Nyb2xsZXIvZGlzdC92dWUzLXZpcnR1YWwtc2Nyb2xsZXIuY3NzJ1xuXG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIGNvbXB1dGVkLCByZWYgfSBmcm9tICd2dWUnXG5cbmNvbnN0IEkxOE4gPSB7XG4gIHNlYXJjaDogJ1NlYXJjaCcsXG4gIG5vdGZvdW5kOiAnTm8gRW1vamkgRm91bmQnLFxuICBjYXRlZ29yaWVzOiB7XG4gICAgc2VhcmNoOiAnU2VhcmNoIFJlc3VsdHMnLFxuICAgIHJlY2VudDogJ0ZyZXF1ZW50bHkgVXNlZCcsXG4gICAgc21pbGV5czogJ1NtaWxleXMgJiBFbW90aW9uJyxcbiAgICBwZW9wbGU6ICdQZW9wbGUgJiBCb2R5JyxcbiAgICBuYXR1cmU6ICdBbmltYWxzICYgTmF0dXJlJyxcbiAgICBmb29kczogJ0Zvb2QgJiBEcmluaycsXG4gICAgYWN0aXZpdHk6ICdBY3Rpdml0eScsXG4gICAgcGxhY2VzOiAnVHJhdmVsICYgUGxhY2VzJyxcbiAgICBvYmplY3RzOiAnT2JqZWN0cycsXG4gICAgc3ltYm9sczogJ1N5bWJvbHMnLFxuICAgIGZsYWdzOiAnRmxhZ3MnLFxuICAgIGN1c3RvbTogJ0N1c3RvbScsXG4gIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdQaWNrZXInLFxuXG4gIHByb3BzOiB7XG4gICAgLi4uUGlja2VyUHJvcHMsXG4gICAgZGF0YToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgfSxcblxuICBjb21wb25lbnRzOiB7XG4gICAgQW5jaG9ycyxcbiAgICBDYXRlZ29yeSxcbiAgICBQcmV2aWV3LFxuICAgIFNlYXJjaCxcbiAgICBEeW5hbWljU2Nyb2xsZXIsXG4gICAgRHluYW1pY1Njcm9sbGVySXRlbSxcbiAgfSxcblxuICBlbWl0czogWydzZWxlY3QnLCAnc2tpbi1jaGFuZ2UnXSxcblxuICBzZXR1cChwcm9wcywgeyBlbWl0IH0pIHtcbiAgICBsZXQgc2tpcFNjcm9sbFVwZGF0ZSA9IGZhbHNlXG4gICAgbGV0IGNhdGVnb3JpZXMgPSBbLi4ucHJvcHMuZGF0YS5jYXRlZ29yaWVzKCldXG5cbiAgICBjb25zdCBwcmV2aWV3RW1vamkgPSByZWYobnVsbClcbiAgICBjb25zdCBzZWFyY2hFbW9qaXMgPSByZWYobnVsbClcbiAgICBjb25zdCBkeW5TY3JvbGxlclJlZiA9IHJlZihudWxsKVxuXG4gICAgY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXMuZmlsdGVyKGNhdGVnb3J5ID0+IGNhdGVnb3J5LmVtb2ppcy5sZW5ndGggPiAwKVxuICAgIGNhdGVnb3JpZXNbMF0uZmlyc3QgPSB0cnVlXG4gICAgT2JqZWN0LmZyZWV6ZShjYXRlZ29yaWVzKVxuXG4gICAgY29uc3QgYWN0aXZlQ2F0ZWdvcnkgPSByZWYoY2F0ZWdvcmllc1swXSlcblxuICAgIGNvbnN0IGNhbGN1bGF0ZVdpZHRoID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIHByb3BzLnBlckxpbmUgKiAocHJvcHMuZW1vamlTaXplICsgMTIpICsgMTIgKyAyICsgbWVhc3VyZVNjcm9sbGJhcigpXG4gICAgfSlcblxuICAgIGNvbnN0IGFjdGl2ZVNraW4gPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5za2luIHx8IHN0b3JlLmdldCgnc2tpbicpIHx8IHByb3BzLmRlZmF1bHRTa2luKVxuXG4gICAgY29uc3QgY3VzdG9tU3R5bGVzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IGNhbGN1bGF0ZVdpZHRoLnZhbHVlICsgJ3B4JyxcbiAgICAgICAgLi4ucHJvcHMucGlja2VyU3R5bGVzLFxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBlbW9qaVByb3BzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmF0aXZlOiBwcm9wcy5uYXRpdmUsXG4gICAgICAgIHNraW46IGFjdGl2ZVNraW4udmFsdWUsXG4gICAgICAgIHNldDogcHJvcHMuc2V0LFxuICAgICAgICBlbW9qaVRvb2x0aXA6IHByb3BzLmVtb2ppVG9vbHRpcCxcbiAgICAgICAgZW1vamlTaXplOiBwcm9wcy5lbW9qaVNpemUsXG4gICAgICAgIG9uRW50ZXI6IG9uRW1vamlFbnRlcixcbiAgICAgICAgb25MZWF2ZTogb25FbW9qaUxlYXZlLFxuICAgICAgICBvbkNsaWNrOiBvbkVtb2ppQ2xpY2ssXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IHNraW5Qcm9wcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNraW46IGFjdGl2ZVNraW4udmFsdWUsXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IG1lcmdlZEkxOG4gPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZShkZWVwTWVyZ2UoSTE4TiwgcHJvcHMuaTE4bikpXG4gICAgfSlcblxuICAgIGNvbnN0IHNjcm9sbGVyQ2F0ZWdvcmllcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGxldCBpZCA9IDBcbiAgICAgIHJldHVybiBjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpZDogaWQrKyxcbiAgICAgICAgICBjYXRlZ29yeTogY2F0ZWdvcnksXG4gICAgICAgICAgc2hvdzpcbiAgICAgICAgICAgICFzZWFyY2hFbW9qaXMudmFsdWUgJiZcbiAgICAgICAgICAgIChwcm9wcy5pbmZpbml0ZVNjcm9sbCB8fCBjYXRlZ29yeS5pZCA9PT0gYWN0aXZlQ2F0ZWdvcnkudmFsdWUuaWQpLFxuICAgICAgICAgIG1lcmdlZEkxOG46IG1lcmdlZEkxOG4udmFsdWUsXG4gICAgICAgICAgZGF0YTogcHJvcHMuZGF0YSxcbiAgICAgICAgICBlbW9qaXNMZW5ndGg6IGNhdGVnb3J5LmVtb2ppcy5sZW5ndGgsXG4gICAgICAgICAgZW1vamlQcm9wczogZW1vamlQcm9wcy52YWx1ZSxcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgY29uc3QgaWRsZUVtb2ppID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHByb3BzLmRhdGEuZW1vamkocHJvcHMuZW1vamkpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgJ0RlZmF1bHQgcHJldmlldyBlbW9qaSBgJyArXG4gICAgICAgICAgcHJvcHMuZW1vamkgK1xuICAgICAgICAgICdgIGlzIG5vdCBhdmFpbGFibGUsIGNoZWNrIHRoZSBQaWNrZXIgYGVtb2ppYCBwcm9wZXJ0eScsXG4gICAgICAgICAgZSxcbiAgICAgICAgKVxuICAgICAgICByZXR1cm4gcHJvcHMuZGF0YS5maXJzdEVtb2ppKClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjb25zdCBvblNjcm9sbFVwZGF0ZSA9IChzdGFydEluZGV4LCBlbmRJbmRleCkgPT4ge1xuICAgICAgaWYgKHNraXBTY3JvbGxVcGRhdGUpIHtcbiAgICAgICAgc2tpcFNjcm9sbFVwZGF0ZSA9IGZhbHNlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUaGUgYGVuZEluZGV4LTJgIHNlZW1zIHRvIHdvcmssIGJ1dCB0aGlzIGRlcGVuZHMgb24gdGhlIGludGVybmFsc1xuICAgICAgICAvLyBvZiB0aGUgdmlydHVhbCBzY3JvbGxlciwgSSBkaWRuJ3Qgb2JzZXJ2ZSBpdCB0byBiZSBsZXNzIHRoYW4gMCxcbiAgICAgICAgLy8gYnV0IGp1c3QgZm9yIHRoZSBjYXNlLCB3ZSBhc2xvIGhhdmUgYSBmYWxsYmFjayB0byBgMGAgaGVyZS5cbiAgICAgICAgbGV0IGFjdGl2ZUluZGV4ID0gZW5kSW5kZXggLSAyID4gMCA/IGVuZEluZGV4IC0gMiA6IDBcbiAgICAgICAgYWN0aXZlQ2F0ZWdvcnkudmFsdWUgPSBjYXRlZ29yaWVzW2FjdGl2ZUluZGV4XVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBvbkFuY2hvckNsaWNrID0gKGNhdGVnb3J5KSA9PiB7XG4gICAgICBsZXQgaSA9IGNhdGVnb3JpZXMuZmluZEluZGV4KGUgPT4gZS5pZCA9PT0gY2F0ZWdvcnkuaWQpXG4gICAgICBpZiAoZHluU2Nyb2xsZXJSZWYudmFsdWUpIHtcbiAgICAgICAgZHluU2Nyb2xsZXJSZWYudmFsdWUuc2Nyb2xsVG9JdGVtKGkpXG4gICAgICB9XG5cbiAgICAgIGFjdGl2ZUNhdGVnb3J5LnZhbHVlID0gY2F0ZWdvcmllcy5maW5kKGUgPT4gZS5pZCA9PT0gY2F0ZWdvcnkuaWQpXG4gICAgICBza2lwU2Nyb2xsVXBkYXRlID0gdHJ1ZVxuICAgIH1cbiAgICBjb25zdCBvblNlYXJjaCA9ICh2YWx1ZSkgPT4ge1xuICAgICAgc2VhcmNoRW1vamlzLnZhbHVlID0gcHJvcHMuZGF0YS5zZWFyY2godmFsdWUsIHByb3BzLm1heFNlYXJjaFJlc3VsdHMpXG4gICAgfVxuICAgIGNvbnN0IG9uRW1vamlFbnRlciA9IChlbW9qaSkgPT4ge1xuICAgICAgcHJldmlld0Vtb2ppLnZhbHVlID0gZW1vamlcbiAgICB9XG4gICAgY29uc3Qgb25FbW9qaUxlYXZlID0gKCkgPT4ge1xuICAgICAgcHJldmlld0Vtb2ppLnZhbHVlID0gbnVsbFxuICAgIH1cbiAgICBjb25zdCBvbkVtb2ppQ2xpY2sgPSAoZW1vamkpID0+IHtcbiAgICAgIGVtaXQoJ3NlbGVjdCcsIGVtb2ppKVxuICAgICAgZnJlcXVlbnRseS5hZGQoZW1vamkpXG4gICAgfVxuICAgIGNvbnN0IG9uU2tpbkNoYW5nZSA9IChza2luKSA9PiB7XG4gICAgICBhY3RpdmVTa2luLnZhbHVlID0gc2tpblxuICAgICAgc3RvcmUudXBkYXRlKHsgc2tpbiB9KVxuXG4gICAgICBlbWl0KCdza2luLWNoYW5nZScsIHNraW4pXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGR5blNjcm9sbGVyUmVmLFxuICAgICAgYWN0aXZlQ2F0ZWdvcnksXG4gICAgICBwcmV2aWV3RW1vamksXG4gICAgICBzZWFyY2hFbW9qaXMsXG4gICAgICBjYXRlZ29yaWVzLFxuXG4gICAgICBjdXN0b21TdHlsZXMsXG4gICAgICBtZXJnZWRJMThuLFxuICAgICAgb25BbmNob3JDbGljayxcbiAgICAgIG9uU2VhcmNoLFxuICAgICAgZW1vamlQcm9wcyxcbiAgICAgIHNjcm9sbGVyQ2F0ZWdvcmllcyxcbiAgICAgIG9uU2Nyb2xsVXBkYXRlLFxuICAgICAgaWRsZUVtb2ppLFxuICAgICAgc2tpblByb3BzLFxuICAgICAgb25Ta2luQ2hhbmdlLFxuICAgIH1cbiAgfVxufSlcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydCBlbW9qaS1tYXJ0LXN0YXRpY1wiIDpzdHlsZT1cImN1c3RvbVN0eWxlc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LWJhciBlbW9qaS1tYXJ0LWJhci1hbmNob3JzXCIgdi1pZj1cInNob3dDYXRlZ29yaWVzXCI+XG4gICAgICA8YW5jaG9yc1xuICAgICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgICA6aTE4bj1cIm1lcmdlZEkxOG5cIlxuICAgICAgICA6Y29sb3I9XCJjb2xvclwiXG4gICAgICAgIDpjYXRlZ29yaWVzPVwiY2F0ZWdvcmllc1wiXG4gICAgICAgIDphY3RpdmUtY2F0ZWdvcnk9XCJhY3RpdmVDYXRlZ29yeVwiXG4gICAgICAgIEBjbGljaz1cIm9uQW5jaG9yQ2xpY2tcIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cblxuICAgIDxzbG90XG4gICAgICBuYW1lPVwic2VhcmNoVGVtcGxhdGVcIlxuICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgIDppMThuPVwiaTE4blwiXG4gICAgICA6YXV0by1mb2N1cz1cImF1dG9Gb2N1c1wiXG4gICAgICA6b24tc2VhcmNoPVwib25TZWFyY2hcIlxuICAgID5cbiAgICAgIDxzZWFyY2hcbiAgICAgICAgdi1pZj1cInNob3dTZWFyY2hcIlxuICAgICAgICByZWY9XCJzZWFyY2hcIlxuICAgICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgICA6aTE4bj1cIm1lcmdlZEkxOG5cIlxuICAgICAgICA6YXV0by1mb2N1cz1cImF1dG9Gb2N1c1wiXG4gICAgICAgIDpvbi1zZWFyY2g9XCJvblNlYXJjaFwiXG4gICAgICAgIEBzZWFyY2g9XCJvblNlYXJjaFwiXG4gICAgICAvPlxuICAgIDwvc2xvdD5cblxuICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXNjcm9sbFwiIHJlZj1cInNjcm9sbFJlZlwiIEBzY3JvbGw9XCJvblNjcm9sbFwiPlxuICAgICAgPGNhdGVnb3J5XG4gICAgICAgIHYtc2hvdz1cInNlYXJjaEVtb2ppc1wiXG4gICAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICAgIDppMThuPVwibWVyZ2VkSTE4blwiXG4gICAgICAgIGlkPVwic2VhcmNoXCJcbiAgICAgICAgbmFtZT1cIlNlYXJjaFwiXG4gICAgICAgIDplbW9qaXM9XCJzZWFyY2hFbW9qaXNcIlxuICAgICAgICA6ZW1vamktcHJvcHM9XCJlbW9qaVByb3BzXCJcbiAgICAgIC8+XG4gICAgICA8Y2F0ZWdvcnlcbiAgICAgICAgdi1mb3I9XCJjYXRlZ29yeSBpbiBmaWx0ZXJlZENhdGVnb3JpZXNcIlxuICAgICAgICB2LXNob3c9XCIhc2VhcmNoRW1vamlzICYmIChpbmZpbml0ZVNjcm9sbCB8fCBjYXRlZ29yeSA9PT0gYWN0aXZlQ2F0ZWdvcnkpXCJcbiAgICAgICAgcmVmPVwiY2F0ZWdvcmllc1wiXG4gICAgICAgIDprZXk9XCJjYXRlZ29yeS5pZFwiXG4gICAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICAgIDppMThuPVwibWVyZ2VkSTE4blwiXG4gICAgICAgIDppZD1cImNhdGVnb3J5LmlkXCJcbiAgICAgICAgOm5hbWU9XCJjYXRlZ29yeS5uYW1lXCJcbiAgICAgICAgOmVtb2ppcz1cImNhdGVnb3J5LmVtb2ppc1wiXG4gICAgICAgIDplbW9qaS1wcm9wcz1cImVtb2ppUHJvcHNcIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cblxuICAgIDxzbG90XG4gICAgICBuYW1lPVwicHJldmlld1RlbXBsYXRlXCJcbiAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICA6dGl0bGU9XCJ0aXRsZVwiXG4gICAgICA6ZW1vamk9XCJwcmV2aWV3RW1vamlcIlxuICAgICAgOmlkbGUtZW1vamk9XCJpZGxlRW1vamlcIlxuICAgICAgOnNob3ctc2tpbi10b25lcz1cInNob3dTa2luVG9uZXNcIlxuICAgICAgOmVtb2ppLXByb3BzPVwiZW1vamlQcm9wc1wiXG4gICAgICA6c2tpbi1wcm9wcz1cInNraW5Qcm9wc1wiXG4gICAgICA6b24tc2tpbi1jaGFuZ2U9XCJvblNraW5DaGFuZ2VcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LWJhciBlbW9qaS1tYXJ0LWJhci1wcmV2aWV3XCIgdi1pZj1cInNob3dQcmV2aWV3XCI+XG4gICAgICAgIDxwcmV2aWV3XG4gICAgICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgICAgICA6dGl0bGU9XCJ0aXRsZVwiXG4gICAgICAgICAgOmVtb2ppPVwicHJldmlld0Vtb2ppXCJcbiAgICAgICAgICA6aWRsZS1lbW9qaT1cImlkbGVFbW9qaVwiXG4gICAgICAgICAgOnNob3ctc2tpbi10b25lcz1cInNob3dTa2luVG9uZXNcIlxuICAgICAgICAgIDplbW9qaS1wcm9wcz1cImVtb2ppUHJvcHNcIlxuICAgICAgICAgIDpza2luLXByb3BzPVwic2tpblByb3BzXCJcbiAgICAgICAgICA6b24tc2tpbi1jaGFuZ2U9XCJvblNraW5DaGFuZ2VcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9zbG90PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgJy4uL3BvbHlmaWxscy9hbmltYXRpb25GcmFtZSdcbmltcG9ydCBzdG9yZSBmcm9tICcuLi91dGlscy9zdG9yZSdcbmltcG9ydCBmcmVxdWVudGx5IGZyb20gJy4uL3V0aWxzL2ZyZXF1ZW50bHknXG5pbXBvcnQgeyBkZWVwTWVyZ2UsIG1lYXN1cmVTY3JvbGxiYXIgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IFBpY2tlclByb3BzIH0gZnJvbSAnLi4vdXRpbHMvc2hhcmVkLXByb3BzJ1xuaW1wb3J0IEFuY2hvcnMgZnJvbSAnLi9hbmNob3JzLnZ1ZSdcbmltcG9ydCBDYXRlZ29yeSBmcm9tICcuL2NhdGVnb3J5LnZ1ZSdcbmltcG9ydCBQcmV2aWV3IGZyb20gJy4vcHJldmlldy52dWUnXG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vc2VhcmNoLnZ1ZSdcbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmLCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuLypcbiAqIE5vdGUgYWJvdXQgYGJ1ZmZlcmAgc2V0dGluZyBmb3IgRHluYW1pY1Njcm9sbGVyOiB0aGlzIGlzIGFcbiAqIGZpeCBmb3IgIzQ5IC0gd2hlbiBjbGlja2luZyBvbiB0aGUgXCJGbGFnc1wiIGNhdGVnb3J5IGZvciB0aGUgZmlyc3RcbiAqIHRpbWUsIHRoZSBjYXRlZ29yeSBpcyBub3Qgc2Nyb2xsZWQgdG8gdGhlIHRvcCBvZiB0aGUgY29tcG9uZW50LlxuICogVGhpcyBpcyBiZWNhdXNlIHRoZSBsYXN0IGNhdGVnb3J5IHNpemUgaXMgbm90IGNhbGN1bGF0ZWQgeWV0IGFuZFxuICogdmlydHVhbCBzY3JvbGxlciB0YWtlcyAnbWluSXRlbVNpemUnIGFzIGNhdGVnb3J5IGhlaWdodC5cbiAqXG4gKiBWaXJ0dWFsIHNjcm9sbGVyIChSZWN5Y2xlU2Nyb2xsZXIgY29tcG9uZW50KSB1c2VzIGBidWZmZXJgIHZhbHVlXG4gKiB0byAgZGVjaWRlIGhvdyBtYW55IGNvbXBvbmVudHMgdG8gcmVuZGVyIGludGl0aWFsbHkgZGVwZW5kaW5nIG9uXG4gKiB0aGUgc2Nyb2xsIGFyZWEgc2l6ZSArIGJ1ZmZlcioyIChhbmQgYWxsIGNhdGVnb3JpZXMgaW5pdGlhbGx5XG4gKiBoYXZlIG1pbiBzaXplLCA2MHB4KS5cbiAqXG4gKiBCeSBpbmNyZWFzaW5nIGJ1ZmZlciB0byA0MDBweCwgd2UgbWFrZSB0aGUgc2Nyb2xsZXIgdG8gcGVyZm9ybVxuICogc2l6ZSBjYWxjdWxhdGlvbiBmb3IgYWxsIGNhdGVnb3JpZXMgYW5kIHRoZSBmb2xsb3dpbmdcbiAqIHNjcm9sbFRvSXRlbSgpIGNhbGxzIHdvcmsgY29ycmVjdGx5LlxuICovXG5cbmltcG9ydCB7IER5bmFtaWNTY3JvbGxlciwgRHluYW1pY1Njcm9sbGVySXRlbSB9IGZyb20gJ3Z1ZTMtdmlydHVhbC1zY3JvbGxlcidcbmltcG9ydCAndnVlMy12aXJ0dWFsLXNjcm9sbGVyL2Rpc3QvdnVlMy12aXJ0dWFsLXNjcm9sbGVyLmNzcydcblxuY29uc3QgSTE4TiA9IHtcbiAgc2VhcmNoOiAnU2VhcmNoJyxcbiAgbm90Zm91bmQ6ICdObyBFbW9qaSBGb3VuZCcsXG4gIGNhdGVnb3JpZXM6IHtcbiAgICBzZWFyY2g6ICdTZWFyY2ggUmVzdWx0cycsXG4gICAgcmVjZW50OiAnRnJlcXVlbnRseSBVc2VkJyxcbiAgICBzbWlsZXlzOiAnU21pbGV5cyAmIEVtb3Rpb24nLFxuICAgIHBlb3BsZTogJ1Blb3BsZSAmIEJvZHknLFxuICAgIG5hdHVyZTogJ0FuaW1hbHMgJiBOYXR1cmUnLFxuICAgIGZvb2RzOiAnRm9vZCAmIERyaW5rJyxcbiAgICBhY3Rpdml0eTogJ0FjdGl2aXR5JyxcbiAgICBwbGFjZXM6ICdUcmF2ZWwgJiBQbGFjZXMnLFxuICAgIG9iamVjdHM6ICdPYmplY3RzJyxcbiAgICBzeW1ib2xzOiAnU3ltYm9scycsXG4gICAgZmxhZ3M6ICdGbGFncycsXG4gICAgY3VzdG9tOiAnQ3VzdG9tJyxcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ0Vtb2ppU3RhdGljUGlja2VyJyxcblxuICBjb21wb25lbnRzOiB7XG4gICAgQW5jaG9ycyxcbiAgICBDYXRlZ29yeSxcbiAgICBQcmV2aWV3LFxuICAgIFNlYXJjaCxcbiAgICBEeW5hbWljU2Nyb2xsZXIsXG4gICAgRHluYW1pY1Njcm9sbGVySXRlbSxcbiAgfSxcblxuICBwcm9wczoge1xuICAgIC4uLlBpY2tlclByb3BzLFxuICAgIGluY2x1ZGU6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogKCkgPT4gW11cbiAgICB9LFxuICAgIGVtb2ppc1RvU2hvd0ZpbHRlcjoge1xuICAgICAgdHlwZTogRnVuY3Rpb25cbiAgICB9LFxuICAgIGV4Y2x1ZGU6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogKCkgPT4gW11cbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gIH0sXG5cbiAgZW1pdHM6IFsnc2tpbi1jaGFuZ2UnLCAnc2VsZWN0J10sXG5cbiAgc2V0dXAocHJvcHMsIHsgZW1pdCB9KSB7XG4gICAgbGV0IGNhdGVnb3JpZXMgPSBbLi4ucHJvcHMuZGF0YS5jYXRlZ29yaWVzKCldLmZpbHRlcigoY2F0ZWdvcnkpID0+IHtcbiAgICAgIHJldHVybiBjYXRlZ29yeS5lbW9qaXMubGVuZ3RoID4gMFxuICAgIH0pXG5cbiAgICBjYXRlZ29yaWVzWzBdLmZpcnN0ID0gdHJ1ZVxuICAgIE9iamVjdC5mcmVlemUoY2F0ZWdvcmllcylcblxuICAgIGNvbnN0IHNjcm9sbFJlZiA9IHJlZihudWxsKVxuICAgIGNvbnN0IGNhdGVnb3JpZXNSZWYgPSByZWYobnVsbClcbiAgICBjb25zdCBhY3RpdmVTa2luID0gcmVmKHByb3BzLnNraW4gfHwgc3RvcmUuZ2V0KCdza2luJykgfHwgcHJvcHMuZGVmYXVsdFNraW4pXG4gICAgY29uc3QgYWN0aXZlQ2F0ZWdvcnkgPSByZWYoY2F0ZWdvcmllc1swXSlcbiAgICBjb25zdCBwcmV2aWV3RW1vamkgPSByZWYobnVsbClcbiAgICBjb25zdCBzZWFyY2hFbW9qaXMgPSByZWYobnVsbClcblxuICAgIGNvbnN0IGNhbGN1bGF0ZVdpZHRoID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMucGVyTGluZSAqIChwcm9wcy5lbW9qaVNpemUgKyAxMikgKyAxMiArIDIgKyBtZWFzdXJlU2Nyb2xsYmFyKCkpXG5cbiAgICBjb25zdCBlbW9qaVByb3BzID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIG5hdGl2ZTogcHJvcHMubmF0aXZlLFxuICAgICAgc2tpbjogYWN0aXZlU2tpbi52YWx1ZSxcbiAgICAgIHNldDogcHJvcHMuc2V0LFxuICAgICAgZW1vamlUb29sdGlwOiBwcm9wcy5lbW9qaVRvb2x0aXAsXG4gICAgICBlbW9qaVNpemU6IHByb3BzLmVtb2ppU2l6ZSxcbiAgICAgIG9uRW50ZXI6IG9uRW1vamlFbnRlcixcbiAgICAgIG9uTGVhdmU6IG9uRW1vamlMZWF2ZSxcbiAgICAgIG9uQ2xpY2s6IG9uRW1vamlDbGljayxcbiAgICB9KSlcblxuICAgIGNvbnN0IHNraW5Qcm9wcyA9IGNvbXB1dGVkKCgpID0+ICh7IHNraW46IGFjdGl2ZVNraW4udmFsdWUgfSkpXG5cbiAgICBjb25zdCBjdXN0b21TdHlsZXMgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgd2lkdGg6IGNhbGN1bGF0ZVdpZHRoLnZhbHVlICsgJ3B4JyxcbiAgICAgIC4uLnByb3BzLnBpY2tlclN0eWxlcyxcbiAgICB9KSlcblxuICAgIGNvbnN0IGZpbHRlcmVkQ2F0ZWdvcmllcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiBjYXRlZ29yaWVzLmZpbHRlcigoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgbGV0IGlzSW5jbHVkZWQgPVxuICAgICAgICAgIHByb3BzLmluY2x1ZGUgJiYgcHJvcHMuaW5jbHVkZS5sZW5ndGhcbiAgICAgICAgICAgID8gcHJvcHMuaW5jbHVkZS5pbmRleE9mKGNhdGVnb3J5LmlkKSA+IC0xXG4gICAgICAgICAgICA6IHRydWVcbiAgICAgICAgbGV0IGlzRXhjbHVkZWQgPVxuICAgICAgICAgIHByb3BzLmV4Y2x1ZGUgJiYgcHJvcHMuZXhjbHVkZS5sZW5ndGhcbiAgICAgICAgICAgID8gcHJvcHMuZXhjbHVkZS5pbmRleE9mKGNhdGVnb3J5LmlkKSA+IC0xXG4gICAgICAgICAgICA6IGZhbHNlXG4gICAgICAgIGxldCBoYXNFbW9qaXMgPSBjYXRlZ29yeS5lbW9qaXMubGVuZ3RoID4gMFxuICAgICAgICBpZiAocHJvcHMuZW1vamlzVG9TaG93RmlsdGVyKSB7XG4gICAgICAgICAgaGFzRW1vamlzID0gY2F0ZWdvcnkuZW1vamlzLnNvbWUoKGVtb2ppKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcHJvcHMuZW1vamlzVG9TaG93RmlsdGVyKHByb3BzLmRhdGEuZW1vamlzW2Vtb2ppXSB8fCBlbW9qaSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc0luY2x1ZGVkICYmICFpc0V4Y2x1ZGVkICYmIGhhc0Vtb2ppc1xuICAgICAgfSlcbiAgICB9KVxuXG4gICAgY29uc3QgaWRsZUVtb2ppID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHByb3BzLmRhdGEuZW1vamkocHJvcHMuZW1vamkpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgJ0RlZmF1bHQgcHJldmlldyBlbW9qaSBgJyArXG4gICAgICAgICAgcHJvcHMuZW1vamkgK1xuICAgICAgICAgICdgIGlzIG5vdCBhdmFpbGFibGUsIGNoZWNrIHRoZSBQaWNrZXIgYGVtb2ppYCBwcm9wZXJ0eScsXG4gICAgICAgIClcbiAgICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgICByZXR1cm4gcHJvcHMuZGF0YS5maXJzdEVtb2ppKClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgbGV0IHdhaXRpbmdGb3JQYWludCA9IGZhbHNlXG4gICAgY29uc3Qgb25TY3JvbGwgPSAoKSA9PiB7XG4gICAgICBpZiAocHJvcHMuaW5maW5pdGVTY3JvbGwgJiYgIXdhaXRpbmdGb3JQYWludCkge1xuICAgICAgICB3YWl0aW5nRm9yUGFpbnQgPSB0cnVlXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUob25TY3JvbGxQYWludClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBvblNjcm9sbFBhaW50ID0gKCkgPT4ge1xuICAgICAgd2FpdGluZ0ZvclBhaW50ID0gZmFsc2VcbiAgICAgIGxldCBzY3JvbGxUb3AgPSBzY3JvbGxSZWYuc2Nyb2xsVG9wLFxuICAgICAgICBfYWN0aXZlQ2F0ZWdvcnkgPSBmaWx0ZXJlZENhdGVnb3JpZXMudmFsdWVbMF1cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gZmlsdGVyZWRDYXRlZ29yaWVzLnZhbHVlLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY2F0ZWdvcnkgPSBmaWx0ZXJlZENhdGVnb3JpZXMudmFsdWVbaV0sXG4gICAgICAgICAgY29tcG9uZW50ID0gY2F0ZWdvcmllc1JlZi52YWx1ZVtpXVxuICAgICAgICAvLyBUaGUgYC01MGAgb2Zmc2V0IHN3aXRjaGVzIGFjdGl2ZSBjYXRlZ29yeSAoc2VsZWN0ZWQgaW4gdGhlXG4gICAgICAgIC8vIGFuY2hvcnMgYmFyKSBhIGJpdCBlYXJpbGVyLCBiZWZvcmUgaXQgYWN0dWFsbHkgcmVhY2hlcyB0aGUgdG9wLlxuICAgICAgICBpZiAoY29tcG9uZW50ICYmIGNvbXBvbmVudC4kZWwub2Zmc2V0VG9wIC0gNTAgPiBzY3JvbGxUb3ApIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIF9hY3RpdmVDYXRlZ29yeSA9IGNhdGVnb3J5XG4gICAgICB9XG5cbiAgICAgIGFjdGl2ZUNhdGVnb3J5LnZhbHVlID0gX2FjdGl2ZUNhdGVnb3J5XG4gICAgfVxuXG4gICAgY29uc3Qgb25BbmNob3JDbGljayA9IChjYXRlZ29yeSkgPT4ge1xuICAgICAgbGV0IGkgPSBmaWx0ZXJlZENhdGVnb3JpZXMudmFsdWUuaW5kZXhPZihjYXRlZ29yeSksXG4gICAgICAgIGNvbXBvbmVudCA9IGNhdGVnb3JpZXNSZWYudmFsdWVbaV0sXG4gICAgICAgIHNjcm9sbFRvQ29tcG9uZW50ID0gKCkgPT4ge1xuICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgIGxldCB0b3AgPSBjb21wb25lbnQuJGVsLm9mZnNldFRvcFxuICAgICAgICAgICAgaWYgKGNhdGVnb3J5LmZpcnN0KSB7XG4gICAgICAgICAgICAgIHRvcCA9IDBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2Nyb2xsUmVmLnZhbHVlLnNjcm9sbFRvcCA9IHRvcFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuaW5maW5pdGVTY3JvbGwpIHtcbiAgICAgICAgc2Nyb2xsVG9Db21wb25lbnQoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWN0aXZlQ2F0ZWdvcnkudmFsdWUgPSBmaWx0ZXJlZENhdGVnb3JpZXMudmFsdWVbaV1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBvblNlYXJjaCA9ICh2YWx1ZSkgPT4ge1xuICAgICAgc2VhcmNoRW1vamlzLnZhbHVlID0gcHJvcHMuZGF0YS5zZWFyY2godmFsdWUsIHByb3BzLm1heFNlYXJjaFJlc3VsdHMpXG4gICAgfVxuXG4gICAgY29uc3Qgb25FbW9qaUVudGVyID0gKGVtb2ppKSA9PiB7XG4gICAgICBwcmV2aWV3RW1vamkudmFsdWUgPSBlbW9qaVxuICAgIH1cblxuICAgIGNvbnN0IG9uRW1vamlMZWF2ZSA9ICgpID0+IHtcbiAgICAgIHByZXZpZXdFbW9qaS52YWx1ZSA9IG51bGxcbiAgICB9XG5cbiAgICBjb25zdCBvbkVtb2ppQ2xpY2sgPSAoZW1vamkpID0+IHtcbiAgICAgIGVtaXQoJ3NlbGVjdCcsIGVtb2ppKVxuICAgICAgZnJlcXVlbnRseS5hZGQoZW1vamkpXG4gICAgfVxuXG4gICAgY29uc3Qgb25Ta2luQ2hhbmdlID0gKHNraW4pID0+IHtcbiAgICAgIGFjdGl2ZVNraW4udmFsdWUgPSBza2luXG4gICAgICBzdG9yZS51cGRhdGUoeyBza2luIH0pXG5cbiAgICAgIGVtaXQoJ3NraW4tY2hhbmdlJywgc2tpbilcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgYWN0aXZlQ2F0ZWdvcnksXG4gICAgICBwcmV2aWV3RW1vamksXG4gICAgICBzZWFyY2hFbW9qaXMsXG4gICAgICBjdXN0b21TdHlsZXMsXG4gICAgICBmaWx0ZXJlZENhdGVnb3JpZXMsXG4gICAgICBza2luUHJvcHMsXG4gICAgICBtZXJnZWRJMThuOiBjb21wdXRlZCgoKSA9PiBPYmplY3QuZnJlZXplKGRlZXBNZXJnZShJMThOLCBwcm9wcy5pMThuKSkpLFxuICAgICAgaWRsZUVtb2ppLFxuXG4gICAgICBzY3JvbGxSZWYsXG4gICAgICBjYXRlZ29yaWVzLFxuICAgICAgb25BbmNob3JDbGljayxcbiAgICAgIG9uU2VhcmNoLFxuICAgICAgb25TY3JvbGwsXG4gICAgICBlbW9qaVByb3BzLFxuICAgICAgb25Ta2luQ2hhbmdlLFxuICAgIH1cbiAgfVxufSlcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuXG48ZGl2IGNsYXNzPVwiZW1vamktbWFydC1hbmNob3JzXCI+XG4gIDxzcGFuXG4gICAgdi1mb3I9XCJjYXRlZ29yeSBpbiBjYXRlZ29yaWVzXCJcbiAgICA6a2V5PVwiY2F0ZWdvcnkuaWRcIlxuICAgIDpjbGFzcz1cInsgJ2Vtb2ppLW1hcnQtYW5jaG9yJzogdHJ1ZSwgJ2Vtb2ppLW1hcnQtYW5jaG9yLXNlbGVjdGVkJzogY2F0ZWdvcnkuaWQgPT09IGFjdGl2ZUNhdGVnb3J5LmlkIH1cIlxuICAgIDpzdHlsZT1cInsgJ2NvbG9yJzogKGNhdGVnb3J5LmlkID09PSBhY3RpdmVDYXRlZ29yeS5pZCA/IGNvbG9yIDogJycpIH1cIlxuICAgIDpkYXRhLXRpdGxlPVwiaTE4bi5jYXRlZ29yaWVzW2NhdGVnb3J5LmlkXVwiXG4gICAgQGNsaWNrPVwiJGVtaXQoJ2NoYW5nZScsIGNhdGVnb3J5KVwiPlxuICAgIDxkaXYgdi1odG1sPVwic3Znc1tjYXRlZ29yeS5pZF1cIi8+XG4gICAgPHNwYW4gY2xhc3M9XCJlbW9qaS1tYXJ0LWFuY2hvci1iYXJcIiA6c3R5bGU9XCJ7IGJhY2tncm91bmRDb2xvcjogY29sb3IgfVwiPjwvc3Bhbj5cbiAgPC9zcGFuPlxuPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCBzdmdzIGZyb20gJy4uL3N2Z3MnXG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdBbmNob3JzJyxcblxuICBwcm9wczoge1xuICAgIGkxOG46IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nXG4gICAgfSxcbiAgICBjYXRlZ29yaWVzOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBhY3RpdmVDYXRlZ29yeToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgZGVmYXVsdCgpIHtcbiAgICAgICAgcmV0dXJuIHt9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHNldHVwKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdmdzLFxuICAgIH1cbiAgfVxufSlcblxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG5cbjxkaXYgOmNsYXNzPVwieyAnZW1vamktbWFydC1jYXRlZ29yeSc6IHRydWUsICdlbW9qaS1tYXJ0LW5vLXJlc3VsdHMnOiAhaGFzUmVzdWx0cyB9XCIgdi1pZj1cImlzVmlzaWJsZSAmJiAoaXNTZWFyY2ggfHwgaGFzUmVzdWx0cylcIj5cbiAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtY2F0ZWdvcnktbGFiZWxcIj5cbiAgICA8c3Bhbj57eyBpMThuLmNhdGVnb3JpZXNbaWRdIH19PC9zcGFuPlxuICA8L2Rpdj5cblxuICA8dGVtcGxhdGUgdi1mb3I9XCJ7IGVtb2ppT2JqZWN0LCBlbW9qaVZpZXcgfSBpbiBlbW9qaU9iamVjdHNcIj5cbiAgICA8c3BhblxuICAgICAgdi1pZj1cImVtb2ppVmlldy5jYW5SZW5kZXJcIlxuICAgICAgOmRhdGEtdGl0bGU9XCJlbW9qaU9iamVjdC5zaG9ydF9uYW1lXCJcbiAgICAgIDp0aXRsZT1cImVtb2ppVmlldy50aXRsZVwiXG4gICAgICBjbGFzcz1cImVtb2ppLW1hcnQtZW1vamlcIlxuICAgICAgQG1vdXNlZW50ZXI9XCJlbW9qaVByb3BzLm9uRW50ZXIoZW1vamlWaWV3LmdldEVtb2ppKCkpXCJcbiAgICAgIEBtb3VzZWxlYXZlPVwiZW1vamlQcm9wcy5vbkxlYXZlKGVtb2ppVmlldy5nZXRFbW9qaSgpKVwiXG4gICAgICBAY2xpY2s9XCJlbW9qaVByb3BzLm9uQ2xpY2soZW1vamlWaWV3LmdldEVtb2ppKCkpXCI+XG4gICAgICA8c3BhbiAgOmNsYXNzPVwiZW1vamlWaWV3LmNzc0NsYXNzXCIgOnN0eWxlPVwiZW1vamlWaWV3LmNzc1N0eWxlXCI+e3tlbW9qaVZpZXcuY29udGVudH19PC9zcGFuPlxuICAgIDwvc3Bhbj5cbiAgPC90ZW1wbGF0ZT5cblxuICA8ZGl2IHYtaWY9XCIhaGFzUmVzdWx0cyAmJiBkYXRhXCI+XG4gICAgPGVtb2ppXG4gICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgZW1vamk9XCJzbGV1dGhfb3Jfc3B5XCJcbiAgICAgIDpuYXRpdmU9XCJlbW9qaVByb3BzLm5hdGl2ZVwiXG4gICAgICA6c2tpbj1cImVtb2ppUHJvcHMuc2tpblwiXG4gICAgICA6c2V0PVwiZW1vamlQcm9wcy5zZXRcIlxuICAgIC8+XG4gICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtbm8tcmVzdWx0cy1sYWJlbFwiPnt7IGkxOG4ubm90Zm91bmQgfX08L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IEVtb2ppVmlldyB9IGZyb20gJy4uL3V0aWxzL2Vtb2ppLWRhdGEnXG5pbXBvcnQgRW1vamkgZnJvbSAnLi9FbW9qaSdcbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdFbW9qaUNhdGVnb3J5JyxcblxuICBwcm9wczoge1xuICAgIGRhdGE6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIGRlZmF1bHQ6ICgpID0+ICh7fSlcbiAgICB9LFxuICAgIGkxOG46IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBpZDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIG5hbWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBlbW9qaXM6IHtcbiAgICAgIHR5cGU6IEFycmF5XG4gICAgfSxcbiAgICBlbW9qaVByb3BzOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnRzOiB7XG4gICAgRW1vamlcbiAgfSxcblxuICBzZXR1cChwcm9wcykge1xuICAgIGNvbnN0IGlzVmlzaWJsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiAhIXByb3BzLmVtb2ppc1xuICAgIH0pXG4gICAgY29uc3QgaXNTZWFyY2ggPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICByZXR1cm4gcHJvcHMubmFtZSA9PT0gJ1NlYXJjaCdcbiAgICB9KVxuICAgIGNvbnN0IGhhc1Jlc3VsdHMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICByZXR1cm4gcHJvcHMuZW1vamlzLmxlbmd0aCA+IDBcbiAgICB9KVxuICAgIGNvbnN0IGVtb2ppT2JqZWN0cyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiBwcm9wcy5lbW9qaXMubWFwKChlbW9qaSkgPT4ge1xuICAgICAgICBsZXQgZW1vamlPYmplY3QgPSBlbW9qaVxuICAgICAgICBsZXQgZW1vamlWaWV3ID0gbmV3IEVtb2ppVmlldyhcbiAgICAgICAgICBlbW9qaSxcbiAgICAgICAgICBwcm9wcy5lbW9qaVByb3BzLnNraW4sXG4gICAgICAgICAgcHJvcHMuZW1vamlQcm9wcy5zZXQsXG4gICAgICAgICAgcHJvcHMuZW1vamlQcm9wcy5uYXRpdmUsXG4gICAgICAgICAgcHJvcHMuZW1vamlQcm9wcy5mYWxsYmFjayxcbiAgICAgICAgICBwcm9wcy5lbW9qaVByb3BzLmVtb2ppVG9vbHRpcCxcbiAgICAgICAgICBwcm9wcy5lbW9qaVByb3BzLmVtb2ppU2l6ZSxcbiAgICAgICAgKVxuICAgICAgICByZXR1cm4geyBlbW9qaU9iamVjdCwgZW1vamlWaWV3IH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHJldHVybiB7XG4gICAgICBpc1Zpc2libGUsXG4gICAgICBpc1NlYXJjaCxcbiAgICAgIGhhc1Jlc3VsdHMsXG4gICAgICBlbW9qaU9iamVjdHMsXG4gICAgfVxuICB9XG59KVxuXG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cblxuPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlld1wiPlxuICA8dGVtcGxhdGUgdi1pZj1cImVtb2ppXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LWVtb2ppXCI+XG4gICAgICAgIDxlbW9qaVxuICAgICAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICAgICAgOmVtb2ppPVwiZW1vamlcIlxuICAgICAgICAgIDpuYXRpdmU9XCJlbW9qaVByb3BzLm5hdGl2ZVwiXG4gICAgICAgICAgOnNraW49XCJlbW9qaVByb3BzLnNraW5cIlxuICAgICAgICAgIDpzZXQ9XCJlbW9qaVByb3BzLnNldFwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1kYXRhXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctbmFtZVwiPnt7IGVtb2ppLm5hbWUgfX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1zaG9ydG5hbWVzXCI+XG4gICAgICAgICAgPHNwYW4gdi1mb3I9XCJzaG9ydE5hbWUgaW4gZW1vamlTaG9ydE5hbWVzXCIgOmtleT1cInNob3J0TmFtZVwiIGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LXNob3J0bmFtZVwiPjp7eyBzaG9ydE5hbWUgfX06PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1lbW90aWNvbnNcIj5cbiAgICAgICAgICA8c3BhbiB2LWZvcj1cImVtb3RpY29uIGluIGVtb2ppRW1vdGljb25zXCIgOmtleT1cImVtb3RpY29uXCIgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vdGljb25cIj57eyBlbW90aWNvbiB9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgPC90ZW1wbGF0ZT5cblxuICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vamlcIj5cbiAgICAgIDxlbW9qaVxuICAgICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgICA6ZW1vamk9XCJpZGxlRW1vamlcIlxuICAgICAgICA6bmF0aXZlPVwiZW1vamlQcm9wcy5uYXRpdmVcIlxuICAgICAgICA6c2tpbj1cImVtb2ppUHJvcHMuc2tpblwiXG4gICAgICAgIDpzZXQ9XCJlbW9qaVByb3BzLnNldFwiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1kYXRhXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImVtb2ppLW1hcnQtdGl0bGUtbGFiZWxcIj57eyB0aXRsZSB9fTwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgdi1pZj1cInNob3dTa2luVG9uZXNcIiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1za2luc1wiPlxuICAgICAgPHNraW5zIDpza2luPVwic2tpblByb3BzLnNraW5cIiBAY2hhbmdlPVwib25Ta2luQ2hhbmdlKCRldmVudClcIiAvPlxuICAgIDwvZGl2PlxuICA8L3RlbXBsYXRlPlxuPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgRW1vamkgZnJvbSAnLi9FbW9qaSdcbmltcG9ydCBTa2lucyBmcm9tICcuL3NraW5zJ1xuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ0Vtb2ppUHJldmlldycsXG5cbiAgY29tcG9uZW50czoge1xuICAgIEVtb2ppLFxuICAgIFNraW5zXG4gIH0sXG5cbiAgcHJvcHM6IHtcbiAgICBkYXRhOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgZW1vamk6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIE9iamVjdF1cbiAgICB9LFxuICAgIGlkbGVFbW9qaToge1xuICAgICAgdHlwZTogW1N0cmluZywgT2JqZWN0XSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBzaG93U2tpblRvbmVzOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgIH0sXG4gICAgZW1vamlQcm9wczoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHNraW5Qcm9wczoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIG9uU2tpbkNoYW5nZToge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH1cbiAgfSxcblxuICBzZXR1cChwcm9wcykge1xuICAgIGNvbnN0IGVtb2ppRGF0YSA9IGNvbXB1dGVkKCgpID0+IHByb3BzLmVtb2ppID8gcHJvcHMuZW1vamkgOiB7fSlcblxuICAgIHJldHVybiB7XG4gICAgICBlbW9qaURhdGEsXG4gICAgICBlbW9qaVNob3J0TmFtZXM6IGNvbXB1dGVkKCgpID0+IGVtb2ppRGF0YS52YWx1ZS5zaG9ydF9uYW1lcyksXG4gICAgICBlbW9qaUVtb3RpY29uczogY29tcHV0ZWQoKCkgPT4gZW1vamlEYXRhLmVtb3RpY29ucylcbiAgICB9XG4gIH1cbn0pXG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtc2VhcmNoXCI+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgOnBsYWNlaG9sZGVyPVwiaTE4bi5zZWFyY2hcIiB2LW1vZGVsPVwidmFsdWVcIj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCBvbk1vdW50ZWQsIGNvbXB1dGVkLCB3YXRjaCwgcmVmLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIHByb3BzOiB7XG4gICAgZGF0YToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGkxOG46IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBhdXRvRm9jdXM6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgb25TZWFyY2g6IHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XG4gIH0sXG5cbiAgc2V0dXAocHJvcHMsIHsgZW1pdCB9KSB7XG4gICAgY29uc3QgdmFsdWUgPSByZWYoJycpXG5cbiAgICB3YXRjaChcbiAgICAgIHZhbHVlLFxuICAgICAgKCkgPT4gZW1pdCgnc2VhcmNoJywgdmFsdWUudmFsdWUpXG4gICAgKVxuXG4gICAgb25Nb3VudGVkKCgpID0+IHtcbiAgICAgIGlmICghcHJvcHMuYXV0b0ZvY3VzKSByZXR1cm5cblxuICAgICAgbGV0ICRlbCA9IGdldEN1cnJlbnRJbnN0YW5jZSgpICYmIGdldEN1cnJlbnRJbnN0YW5jZSgpLnByb3h5LiRlbCB8fCBudWxsXG4gICAgICBpZiAoISRlbCkgcmV0dXJuXG5cbiAgICAgICRlbC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmZvY3VzKClcbiAgICB9KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlLFxuICAgICAgY2xlYXI6KCkgPT4gKHZhbHVlLnZhbHVlID0gJycpLFxuICAgICAgZW1vamlJbmRleDogY29tcHV0ZWQoKCkgPT4gcHJvcHMuZGF0YSlcbiAgICB9XG4gIH1cbn0pXG5cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuXG48ZGl2IDpjbGFzcz1cInsgJ2Vtb2ppLW1hcnQtc2tpbi1zd2F0Y2hlcyc6IHRydWUsICdlbW9qaS1tYXJ0LXNraW4tc3dhdGNoZXMtb3BlbmVkJzogb3BlbmVkIH1cIj5cbiAgPHNwYW4gdi1mb3I9XCJza2luVG9uZSBpbiA2XCIgOmtleT1cInNraW5Ub25lXCIgOmNsYXNzPVwieyAnZW1vamktbWFydC1za2luLXN3YXRjaCc6IHRydWUsICdlbW9qaS1tYXJ0LXNraW4tc3dhdGNoLXNlbGVjdGVkJzogc2tpbiA9PT0gc2tpblRvbmUgfVwiPlxuICAgIDxzcGFuIDpjbGFzcz1cIidlbW9qaS1tYXJ0LXNraW4gZW1vamktbWFydC1za2luLXRvbmUtJyArIHNraW5Ub25lXCIgQGNsaWNrPVwib25DbGljayhza2luVG9uZSlcIj48L3NwYW4+XG4gIDwvc3Bhbj5cbjwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdFbW9qaVNraW5zJyxcblxuICBwcm9wczoge1xuICAgIHNraW46IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfVxuICB9LFxuXG4gIHNldHVwKHByb3BzLCB7IGVtaXQgfSkge1xuICAgIGNvbnN0IG9wZW5lZCA9IHJlZihmYWxzZSlcblxuICAgIGNvbnN0IG9uQ2xpY2sgPSAoc2tpblRvbmUpID0+IHtcbiAgICAgIGlmIChvcGVuZWQudmFsdWUpIHtcbiAgICAgICAgaWYgKHNraW5Ub25lICE9PSBwcm9wcy5za2luKSB7XG4gICAgICAgICAgZW1pdCgnY2hhbmdlJywgc2tpblRvbmUpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb3BlbmVkLnZhbHVlID0gIW9wZW5lZC52YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBvcGVuZWQsXG4gICAgICBvbkNsaWNrXG4gICAgfVxuICB9XG59KVxuXG48L3NjcmlwdD5cbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdnVlMy12aXJ0dWFsLXNjcm9sbGVyLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjQyN2E3NGFjXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdnVlMy12aXJ0dWFsLXNjcm9sbGVyLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdnVlMy12aXJ0dWFsLXNjcm9sbGVyLmNzc1wiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vRW1vamkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUzNGFkOTQ2XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRW1vamkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Vtb2ppLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5zY3JpcHQucmVuZGVyID0gcmVuZGVyXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBzY3JpcHQuX19obXJJZCA9IFwiNTM0YWQ5NDZcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc1MzRhZDk0NicsIHNjcmlwdCkpIHtcbiAgICBhcGkucmVsb2FkKCc1MzRhZDk0NicsIHNjcmlwdClcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Vtb2ppLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MzRhZDk0NlwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc1MzRhZDk0NicsIHJlbmRlcilcbiAgfSlcblxufVxuXG5zY3JpcHQuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9FbW9qaS52dWVcIlxuXG5leHBvcnQgZGVmYXVsdCBzY3JpcHQiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9yZWYtLTEwLTAhLi9FbW9qaS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9yZWYtLTEwLTAhLi9FbW9qaS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3JlZi0tNSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9yZWYtLTEwLTAhLi9FbW9qaS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTM0YWQ5NDZcIiIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL1BpY2tlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDE2ZTkwODRcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9QaWNrZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1BpY2tlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuc2NyaXB0LnJlbmRlciA9IHJlbmRlclxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgc2NyaXB0Ll9faG1ySWQgPSBcImQxNmU5MDg0XCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnZDE2ZTkwODQnLCBzY3JpcHQpKSB7XG4gICAgYXBpLnJlbG9hZCgnZDE2ZTkwODQnLCBzY3JpcHQpXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9QaWNrZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQxNmU5MDg0XCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJ2QxNmU5MDg0JywgcmVuZGVyKVxuICB9KVxuXG59XG5cbnNjcmlwdC5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL1BpY2tlci52dWVcIlxuXG5leHBvcnQgZGVmYXVsdCBzY3JpcHQiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9yZWYtLTEwLTAhLi9QaWNrZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cmVmLS0xMC0wIS4vUGlja2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cmVmLS01IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3JlZi0tMTAtMCEuL1BpY2tlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDE2ZTkwODRcIiIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL1N0YXRpY1BpY2tlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmIxNmMyNjhcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TdGF0aWNQaWNrZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1N0YXRpY1BpY2tlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuc2NyaXB0LnJlbmRlciA9IHJlbmRlclxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgc2NyaXB0Ll9faG1ySWQgPSBcIjJiMTZjMjY4XCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnMmIxNmMyNjgnLCBzY3JpcHQpKSB7XG4gICAgYXBpLnJlbG9hZCgnMmIxNmMyNjgnLCBzY3JpcHQpXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TdGF0aWNQaWNrZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiMTZjMjY4XCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzJiMTZjMjY4JywgcmVuZGVyKVxuICB9KVxuXG59XG5cbnNjcmlwdC5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL1N0YXRpY1BpY2tlci52dWVcIlxuXG5leHBvcnQgZGVmYXVsdCBzY3JpcHQiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9yZWYtLTEwLTAhLi9TdGF0aWNQaWNrZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cmVmLS0xMC0wIS4vU3RhdGljUGlja2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cmVmLS01IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3JlZi0tMTAtMCEuL1N0YXRpY1BpY2tlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmIxNmMyNjhcIiIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxMTg4MTA0XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vYW5jaG9ycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vYW5jaG9ycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuc2NyaXB0LnJlbmRlciA9IHJlbmRlclxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgc2NyaXB0Ll9faG1ySWQgPSBcIjUxMTg4MTA0XCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNTExODgxMDQnLCBzY3JpcHQpKSB7XG4gICAgYXBpLnJlbG9hZCgnNTExODgxMDQnLCBzY3JpcHQpXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9hbmNob3JzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MTE4ODEwNFwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc1MTE4ODEwNCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5zY3JpcHQuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9hbmNob3JzLnZ1ZVwiXG5cbmV4cG9ydCBkZWZhdWx0IHNjcmlwdCIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3JlZi0tMTAtMCEuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cmVmLS0xMC0wIS4vYW5jaG9ycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3JlZi0tNSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9yZWYtLTEwLTAhLi9hbmNob3JzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MTE4ODEwNFwiIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM3NmNkYTBlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5zY3JpcHQucmVuZGVyID0gcmVuZGVyXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBzY3JpcHQuX19obXJJZCA9IFwiMzc2Y2RhMGVcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCczNzZjZGEwZScsIHNjcmlwdCkpIHtcbiAgICBhcGkucmVsb2FkKCczNzZjZGEwZScsIHNjcmlwdClcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNzZjZGEwZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCczNzZjZGEwZScsIHJlbmRlcilcbiAgfSlcblxufVxuXG5zY3JpcHQuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9jYXRlZ29yeS52dWVcIlxuXG5leHBvcnQgZGVmYXVsdCBzY3JpcHQiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9yZWYtLTEwLTAhLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9yZWYtLTEwLTAhLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3JlZi0tNSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9yZWYtLTEwLTAhLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mzc2Y2RhMGVcIiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQW5jaG9ycyB9IGZyb20gJy4vYW5jaG9ycy52dWUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIENhdGVnb3J5IH0gZnJvbSAnLi9jYXRlZ29yeS52dWUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFByZXZpZXcgfSBmcm9tICcuL3ByZXZpZXcudnVlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWFyY2ggfSBmcm9tICcuL3NlYXJjaC52dWUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNraW5zIH0gZnJvbSAnLi9za2lucy52dWUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEVtb2ppIH0gZnJvbSAnLi9FbW9qaS52dWUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFBpY2tlciB9IGZyb20gJy4vUGlja2VyLnZ1ZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3RhdGljUGlja2VyIH0gZnJvbSAnLi9TdGF0aWNQaWNrZXIudnVlJ1xuIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vcHJldmlldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzUwNTZjMzBcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9wcmV2aWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9wcmV2aWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5zY3JpcHQucmVuZGVyID0gcmVuZGVyXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBzY3JpcHQuX19obXJJZCA9IFwiMzUwNTZjMzBcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCczNTA1NmMzMCcsIHNjcmlwdCkpIHtcbiAgICBhcGkucmVsb2FkKCczNTA1NmMzMCcsIHNjcmlwdClcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM1MDU2YzMwXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzM1MDU2YzMwJywgcmVuZGVyKVxuICB9KVxuXG59XG5cbnNjcmlwdC5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL3ByZXZpZXcudnVlXCJcblxuZXhwb3J0IGRlZmF1bHQgc2NyaXB0IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cmVmLS0xMC0wIS4vcHJldmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9yZWYtLTEwLTAhLi9wcmV2aWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cmVmLS01IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3JlZi0tMTAtMCEuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM1MDU2YzMwXCIiLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRhZDQxYmI4XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc2VhcmNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbnNjcmlwdC5yZW5kZXIgPSByZW5kZXJcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHNjcmlwdC5fX2htcklkID0gXCI0YWQ0MWJiOFwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzRhZDQxYmI4Jywgc2NyaXB0KSkge1xuICAgIGFwaS5yZWxvYWQoJzRhZDQxYmI4Jywgc2NyaXB0KVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vc2VhcmNoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YWQ0MWJiOFwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc0YWQ0MWJiOCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5zY3JpcHQuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9zZWFyY2gudnVlXCJcblxuZXhwb3J0IGRlZmF1bHQgc2NyaXB0IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cmVmLS0xMC0wIS4vc2VhcmNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3JlZi0tMTAtMCEuL3NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3JlZi0tNSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9yZWYtLTEwLTAhLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRhZDQxYmI4XCIiLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9za2lucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWM2MTQ4OTRcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9za2lucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vc2tpbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbnNjcmlwdC5yZW5kZXIgPSByZW5kZXJcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHNjcmlwdC5fX2htcklkID0gXCIxYzYxNDg5NFwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzFjNjE0ODk0Jywgc2NyaXB0KSkge1xuICAgIGFwaS5yZWxvYWQoJzFjNjE0ODk0Jywgc2NyaXB0KVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vc2tpbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFjNjE0ODk0XCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzFjNjE0ODk0JywgcmVuZGVyKVxuICB9KVxuXG59XG5cbnNjcmlwdC5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL3NraW5zLnZ1ZVwiXG5cbmV4cG9ydCBkZWZhdWx0IHNjcmlwdCIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3JlZi0tMTAtMCEuL3NraW5zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3JlZi0tMTAtMCEuL3NraW5zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cmVmLS01IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3JlZi0tMTAtMCEuL3NraW5zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYzYxNDg5NFwiIiwiaW1wb3J0IHN0b3JlIGZyb20gJy4vdXRpbHMvc3RvcmUnXG5pbXBvcnQgeyB1bmNvbXByZXNzIH0gZnJvbSAnLi91dGlscy9kYXRhJ1xuaW1wb3J0IGZyZXF1ZW50bHkgZnJvbSAnLi91dGlscy9mcmVxdWVudGx5J1xuXG5leHBvcnQge1xuICBQaWNrZXIsXG4gIFN0YXRpY1BpY2tlcixcbiAgRW1vamksXG4gIEFuY2hvcnMsXG4gIFByZXZpZXcsXG4gIFNlYXJjaCxcbiAgQ2F0ZWdvcnksXG4gIFNraW5zLFxufSBmcm9tICcuL2NvbXBvbmVudHMnXG5cbmV4cG9ydCB7IEVtb2ppSW5kZXgsIEVtb2ppVmlldywgRW1vamlEYXRhLCBzYW5pdGl6ZSB9IGZyb20gJy4vdXRpbHMvZW1vamktZGF0YSdcbmV4cG9ydCB7IHVuY29tcHJlc3MsIHN0b3JlLCBmcmVxdWVudGx5IH1cbiIsIi8vIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4vLyBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG5cbi8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcblxuLy8gTUlUIGxpY2Vuc2VcblxudmFyIGlzV2luZG93QXZhaWxhYmxlID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcblxuaXNXaW5kb3dBdmFpbGFibGUgJiZcbiAgKGZ1bmN0aW9uKCkge1xuICAgIHZhciBsYXN0VGltZSA9IDBcbiAgICB2YXIgdmVuZG9ycyA9IFsnbXMnLCAnbW96JywgJ3dlYmtpdCcsICdvJ11cblxuICAgIGZvciAodmFyIHggPSAwOyB4IDwgdmVuZG9ycy5sZW5ndGggJiYgIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ICsreCkge1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9XG4gICAgICAgIHdpbmRvd1t2ZW5kb3JzW3hdICsgJ1JlcXVlc3RBbmltYXRpb25GcmFtZSddXG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPVxuICAgICAgICB3aW5kb3dbdmVuZG9yc1t4XSArICdDYW5jZWxBbmltYXRpb25GcmFtZSddIHx8XG4gICAgICAgIHdpbmRvd1t2ZW5kb3JzW3hdICsgJ0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSddXG4gICAgfVxuXG4gICAgaWYgKCF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKVxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBlbGVtZW50KSB7XG4gICAgICAgIHZhciBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpXG4gICAgICAgIHZhciBpZCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbClcbiAgICAgICAgfSwgdGltZVRvQ2FsbClcblxuICAgICAgICBsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbFxuICAgICAgICByZXR1cm4gaWRcbiAgICAgIH1cblxuICAgIGlmICghd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKVxuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGlkKVxuICAgICAgfVxuICB9KSgpXG4iLCJjb25zdCBfU3RyaW5nID0gU3RyaW5nXG5cbmV4cG9ydCBkZWZhdWx0IF9TdHJpbmcuZnJvbUNvZGVQb2ludCB8fFxuICBmdW5jdGlvbiBzdHJpbmdGcm9tQ29kZVBvaW50KCkge1xuICAgIHZhciBNQVhfU0laRSA9IDB4NDAwMFxuICAgIHZhciBjb2RlVW5pdHMgPSBbXVxuICAgIHZhciBoaWdoU3Vycm9nYXRlXG4gICAgdmFyIGxvd1N1cnJvZ2F0ZVxuICAgIHZhciBpbmRleCA9IC0xXG4gICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICBpZiAoIWxlbmd0aCkge1xuICAgICAgcmV0dXJuICcnXG4gICAgfVxuICAgIHZhciByZXN1bHQgPSAnJ1xuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICB2YXIgY29kZVBvaW50ID0gTnVtYmVyKGFyZ3VtZW50c1tpbmRleF0pXG4gICAgICBpZiAoXG4gICAgICAgICFpc0Zpbml0ZShjb2RlUG9pbnQpIHx8IC8vIGBOYU5gLCBgK0luZmluaXR5YCwgb3IgYC1JbmZpbml0eWBcbiAgICAgICAgY29kZVBvaW50IDwgMCB8fCAvLyBub3QgYSB2YWxpZCBVbmljb2RlIGNvZGUgcG9pbnRcbiAgICAgICAgY29kZVBvaW50ID4gMHgxMGZmZmYgfHwgLy8gbm90IGEgdmFsaWQgVW5pY29kZSBjb2RlIHBvaW50XG4gICAgICAgIE1hdGguZmxvb3IoY29kZVBvaW50KSAhPSBjb2RlUG9pbnQgLy8gbm90IGFuIGludGVnZXJcbiAgICAgICkge1xuICAgICAgICB0aHJvdyBSYW5nZUVycm9yKCdJbnZhbGlkIGNvZGUgcG9pbnQ6ICcgKyBjb2RlUG9pbnQpXG4gICAgICB9XG4gICAgICBpZiAoY29kZVBvaW50IDw9IDB4ZmZmZikge1xuICAgICAgICAvLyBCTVAgY29kZSBwb2ludFxuICAgICAgICBjb2RlVW5pdHMucHVzaChjb2RlUG9pbnQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBBc3RyYWwgY29kZSBwb2ludDsgc3BsaXQgaW4gc3Vycm9nYXRlIGhhbHZlc1xuICAgICAgICAvLyBodHRwOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LWVuY29kaW5nI3N1cnJvZ2F0ZS1mb3JtdWxhZVxuICAgICAgICBjb2RlUG9pbnQgLT0gMHgxMDAwMFxuICAgICAgICBoaWdoU3Vycm9nYXRlID0gKGNvZGVQb2ludCA+PiAxMCkgKyAweGQ4MDBcbiAgICAgICAgbG93U3Vycm9nYXRlID0gKGNvZGVQb2ludCAlIDB4NDAwKSArIDB4ZGMwMFxuICAgICAgICBjb2RlVW5pdHMucHVzaChoaWdoU3Vycm9nYXRlLCBsb3dTdXJyb2dhdGUpXG4gICAgICB9XG4gICAgICBpZiAoaW5kZXggKyAxID09PSBsZW5ndGggfHwgY29kZVVuaXRzLmxlbmd0aCA+IE1BWF9TSVpFKSB7XG4gICAgICAgIHJlc3VsdCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIGNvZGVVbml0cylcbiAgICAgICAgY29kZVVuaXRzLmxlbmd0aCA9IDBcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG4iLCJjb25zdCBTVkdzID0ge1xuICBhY3Rpdml0eTogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTEyIDBDNS4zNzMgMCAwIDUuMzcyIDAgMTJjMCA2LjYyNyA1LjM3MyAxMiAxMiAxMiA2LjYyOCAwIDEyLTUuMzczIDEyLTEyIDAtNi42MjgtNS4zNzItMTItMTItMTJtOS45NDkgMTFIMTcuMDVjLjIyNC0yLjUyNyAxLjIzMi00Ljc3MyAxLjk2OC02LjExM0E5Ljk2NiA5Ljk2NiAwIDAgMSAyMS45NDkgMTFNMTMgMTFWMi4wNTFhOS45NDUgOS45NDUgMCAwIDEgNC40MzIgMS41NjRjLS44NTggMS40OTEtMi4xNTYgNC4yMi0yLjM5MiA3LjM4NUgxM3ptLTIgMEg4Ljk2MWMtLjIzOC0zLjE2NS0xLjUzNi01Ljg5NC0yLjM5My03LjM4NUE5Ljk1IDkuOTUgMCAwIDEgMTEgMi4wNTFWMTF6bTAgMnY4Ljk0OWE5LjkzNyA5LjkzNyAwIDAgMS00LjQzMi0xLjU2NGMuODU3LTEuNDkyIDIuMTU1LTQuMjIxIDIuMzkzLTcuMzg1SDExem00LjA0IDBjLjIzNiAzLjE2NCAxLjUzNCA1Ljg5MyAyLjM5MiA3LjM4NUE5LjkyIDkuOTIgMCAwIDEgMTMgMjEuOTQ5VjEzaDIuMDR6TTQuOTgyIDQuODg3QzUuNzE4IDYuMjI3IDYuNzI2IDguNDczIDYuOTUxIDExaC00LjlhOS45NzcgOS45NzcgMCAwIDEgMi45MzEtNi4xMTNNMi4wNTEgMTNoNC45Yy0uMjI2IDIuNTI3LTEuMjMzIDQuNzcxLTEuOTY5IDYuMTEzQTkuOTcyIDkuOTcyIDAgMCAxIDIuMDUxIDEzbTE2Ljk2NyA2LjExM2MtLjczNS0xLjM0Mi0xLjc0NC0zLjU4Ni0xLjk2OC02LjExM2g0Ljg5OWE5Ljk2MSA5Ljk2MSAwIDAgMS0yLjkzMSA2LjExM1wiLz48L3N2Zz5gLFxuXG4gIGN1c3RvbTogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMi4wMDAwMDAsIDEuMDAwMDAwKVwiPjxyZWN0IGlkPVwiUmVjdGFuZ2xlXCIgeD1cIjhcIiB5PVwiMFwiIHdpZHRoPVwiM1wiIGhlaWdodD1cIjIxXCIgcng9XCIxLjVcIj48L3JlY3Q+PHJlY3QgaWQ9XCJSZWN0YW5nbGVcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOS44NDMsIDEwLjU0OSkgcm90YXRlKDYwKSB0cmFuc2xhdGUoLTkuODQzLCAtMTAuNTQ5KSBcIiB4PVwiOC4zNDNcIiB5PVwiMC4wNDlcIiB3aWR0aD1cIjNcIiBoZWlnaHQ9XCIyMVwiIHJ4PVwiMS41XCI+PC9yZWN0PjxyZWN0IGlkPVwiUmVjdGFuZ2xlXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDkuODQzLCAxMC41NDkpIHJvdGF0ZSgtNjApIHRyYW5zbGF0ZSgtOS44NDMsIC0xMC41NDkpIFwiIHg9XCI4LjM0M1wiIHk9XCIwLjA0OVwiIHdpZHRoPVwiM1wiIGhlaWdodD1cIjIxXCIgcng9XCIxLjVcIj48L3JlY3Q+PC9nPjwvc3ZnPmAsXG5cbiAgZmxhZ3M6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk0wIDBsNi4wODQgMjRIOEwxLjkxNiAwek0yMSA1aC00bC0xLTRINGwzIDEyaDNsMSA0aDEzTDIxIDV6TTYuNTYzIDNoNy44NzVsMiA4SDguNTYzbC0yLTh6bTguODMyIDEwbC0yLjg1NiAxLjkwNEwxMi4wNjMgMTNoMy4zMzJ6TTE5IDEzbC0xLjUtNmgxLjkzOGwyIDhIMTZsMy0yelwiLz48L3N2Zz5gLFxuXG4gIGZvb2RzOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNMTcgNC45NzhjLTEuODM4IDAtMi44NzYuMzk2LTMuNjguOTM0LjUxMy0xLjE3MiAxLjc2OC0yLjkzNCA0LjY4LTIuOTM0YTEgMSAwIDAgMCAwLTJjLTIuOTIxIDAtNC42MjkgMS4zNjUtNS41NDcgMi41MTItLjA2NC4wNzgtLjExOS4xNjItLjE4LjI0NEMxMS43MyAxLjgzOCAxMC43OTguMDIzIDkuMjA3LjAyMyA4LjU3OS4wMjIgNy44NS4zMDYgNyAuOTc4IDUuMDI3IDIuNTQgNS4zMjkgMy45MDIgNi40OTIgNC45OTkgMy42MDkgNS4yMjIgMCA3LjM1MiAwIDEyLjk2OWMwIDQuNTgyIDQuOTYxIDExLjAwOSA5IDExLjAwOSAxLjk3NSAwIDIuMzcxLS40ODYgMy0xIC42MjkuNTE0IDEuMDI1IDEgMyAxIDQuMDM5IDAgOS02LjQxOCA5LTExIDAtNS45NTMtNC4wNTUtOC03LThNOC4yNDIgMi41NDZjLjY0MS0uNTA4Ljk0My0uNTIzLjk2NS0uNTIzLjQyNi4xNjkuOTc1IDEuNDA1IDEuMzU3IDMuMDU1LTEuNTI3LS42MjktMi43NDEtMS4zNTItMi45OC0xLjg0Ni4wNTktLjExMi4yNDEtLjM1Ni42NTgtLjY4Nk0xNSAyMS45NzhjLTEuMDggMC0xLjIxLS4xMDktMS41NTktLjQwMmwtLjE3Ni0uMTQ2Yy0uMzY3LS4zMDItLjgxNi0uNDUyLTEuMjY2LS40NTJzLS44OTguMTUtMS4yNjYuNDUybC0uMTc2LjE0NmMtLjM0Ny4yOTItLjQ3Ny40MDItMS41NTcuNDAyLTIuODEzIDAtNy01LjM4OS03LTkuMDA5IDAtNS44MjMgNC40ODgtNS45OTEgNS01Ljk5MSAxLjkzOSAwIDIuNDg0LjQ3MSAzLjM4NyAxLjI1MWwuMzIzLjI3NmExLjk5NSAxLjk5NSAwIDAgMCAyLjU4IDBsLjMyMy0uMjc2Yy45MDItLjc4IDEuNDQ3LTEuMjUxIDMuMzg3LTEuMjUxLjUxMiAwIDUgLjE2OCA1IDYgMCAzLjYxNy00LjE4NyA5LTcgOVwiLz48L3N2Zz5gLFxuXG4gIG5hdHVyZTogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTE1LjUgOGExLjUgMS41IDAgMSAwIC4wMDEgMy4wMDFBMS41IDEuNSAwIDAgMCAxNS41IDhNOC41IDhhMS41IDEuNSAwIDEgMCAuMDAxIDMuMDAxQTEuNSAxLjUgMCAwIDAgOC41IDhcIi8+PHBhdGggZD1cIk0xOC45MzMgMGgtLjAyN2MtLjk3IDAtMi4xMzguNzg3LTMuMDE4IDEuNDk3LTEuMjc0LS4zNzQtMi42MTItLjUxLTMuODg3LS41MS0xLjI4NSAwLTIuNjE2LjEzMy0zLjg3NC41MTdDNy4yNDUuNzkgNi4wNjkgMCA1LjA5MyAwaC0uMDI3QzMuMzUyIDAgLjA3IDIuNjcuMDAyIDcuMDI2Yy0uMDM5IDIuNDc5LjI3NiA0LjIzOCAxLjA0IDUuMDEzLjI1NC4yNTguODgyLjY3NyAxLjI5NS44ODIuMTkxIDMuMTc3LjkyMiA1LjIzOCAyLjUzNiA2LjM4Ljg5Ny42MzcgMi4xODcuOTQ5IDMuMiAxLjEwMkM4LjA0IDIwLjYgOCAyMC43OTUgOCAyMWMwIDEuNzczIDIuMzUgMyA0IDMgMS42NDggMCA0LTEuMjI3IDQtMyAwLS4yMDEtLjAzOC0uMzkzLS4wNzItLjU4NiAyLjU3My0uMzg1IDUuNDM1LTEuODc3IDUuOTI1LTcuNTg3LjM5Ni0uMjIuODg3LS41NjggMS4xMDQtLjc4OC43NjMtLjc3NCAxLjA3OS0yLjUzNCAxLjA0LTUuMDEzQzIzLjkyOSAyLjY3IDIwLjY0NiAwIDE4LjkzMyAwTTMuMjIzIDkuMTM1Yy0uMjM3LjI4MS0uODM3IDEuMTU1LS44ODQgMS4yMzgtLjE1LS40MS0uMzY4LTEuMzQ5LS4zMzctMy4yOTEuMDUxLTMuMjgxIDIuNDc4LTQuOTcyIDMuMDkxLTUuMDMxLjI1Ni4wMTUuNzMxLjI3IDEuMjY1LjY0Ni0xLjExIDEuMTcxLTIuMjc1IDIuOTE1LTIuMzUyIDUuMTI1LS4xMzMuNTQ2LS4zOTguODU4LS43ODMgMS4zMTNNMTIgMjJjLS45MDEgMC0xLjk1NC0uNjkzLTItMSAwLS42NTQuNDc1LTEuMjM2IDEtMS42MDJWMjBhMSAxIDAgMSAwIDIgMHYtLjYwMmMuNTI0LjM2NSAxIC45NDcgMSAxLjYwMi0uMDQ2LjMwNy0xLjA5OSAxLTIgMW0zLTMuNDh2LjAyYTQuNzUyIDQuNzUyIDAgMCAwLTEuMjYyLTEuMDJjMS4wOTItLjUxNiAyLjIzOS0xLjMzNCAyLjIzOS0yLjIxNyAwLTEuODQyLTEuNzgxLTIuMTk1LTMuOTc3LTIuMTk1LTIuMTk2IDAtMy45NzguMzU0LTMuOTc4IDIuMTk1IDAgLjg4MyAxLjE0OCAxLjcwMSAyLjIzOCAyLjIxN0E0LjggNC44IDAgMCAwIDkgMTguNTM5di0uMDI1Yy0xLS4wNzYtMi4xODItLjI4MS0yLjk3My0uODQyLTEuMzAxLS45Mi0xLjgzOC0zLjA0NS0xLjg1My02LjQ3OGwuMDIzLS4wNDFjLjQ5Ni0uODI2IDEuNDktMS40NSAxLjgwNC0zLjEwMiAwLTIuMDQ3IDEuMzU3LTMuNjMxIDIuMzYyLTQuNTIyQzkuMzcgMy4xNzggMTAuNTU1IDMgMTEuOTQ4IDNjMS40NDcgMCAyLjY4NS4xOTIgMy43MzMuNTcgMSAuOSAyLjMxNiAyLjQ2NSAyLjMxNiA0LjQ4LjMxMyAxLjY1MSAxLjMwNyAyLjI3NSAxLjgwMyAzLjEwMi4wMzUuMDU4LjA2OC4xMTcuMTAyLjE3OC0uMDU5IDUuOTY3LTEuOTQ5IDcuMDEtNC45MDIgNy4xOW02LjYyOC04LjIwMmMtLjAzNy0uMDY1LS4wNzQtLjEzLS4xMTMtLjE5NWE3LjU4NyA3LjU4NyAwIDAgMC0uNzM5LS45ODdjLS4zODUtLjQ1NS0uNjQ4LS43NjgtLjc4Mi0xLjMxMy0uMDc2LTIuMjA5LTEuMjQxLTMuOTU0LTIuMzUzLTUuMTI0LjUzMS0uMzc2IDEuMDA0LS42MyAxLjI2MS0uNjQ3LjYzNi4wNzEgMy4wNDQgMS43NjQgMy4wOTYgNS4wMzEuMDI3IDEuODEtLjM0NyAzLjIxOC0uMzcgMy4yMzVcIi8+PC9zdmc+YCxcblxuICBvYmplY3RzOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNMTIgMGE5IDkgMCAwIDAtNSAxNi40ODJWMjFzMi4wMzUgMyA1IDMgNS0zIDUtM3YtNC41MThBOSA5IDAgMCAwIDEyIDB6bTAgMmMzLjg2IDAgNyAzLjE0MSA3IDdzLTMuMTQgNy03IDctNy0zLjE0MS03LTcgMy4xNC03IDctN3pNOSAxNy40NzdjLjk0LjMzMiAxLjk0Ni41MjMgMyAuNTIzczIuMDYtLjE5IDMtLjUyM3YuODM0Yy0uOTEuNDM2LTEuOTI1LjY4OS0zIC42ODlhNi45MjQgNi45MjQgMCAwIDEtMy0uNjl2LS44MzN6bS4yMzYgMy4wN0E4Ljg1NCA4Ljg1NCAwIDAgMCAxMiAyMWMuOTY1IDAgMS44ODgtLjE2NyAyLjc1OC0uNDUxQzE0LjE1NSAyMS4xNzMgMTMuMTUzIDIyIDEyIDIyYy0xLjEwMiAwLTIuMTE3LS43ODktMi43NjQtMS40NTN6XCIvPjxwYXRoIGQ9XCJNMTQuNzQ1IDEyLjQ0OWgtLjAwNGMtLjg1Mi0uMDI0LTEuMTg4LS44NTgtMS41NzctMS44MjQtLjQyMS0xLjA2MS0uNzAzLTEuNTYxLTEuMTgyLTEuNTY2aC0uMDA5Yy0uNDgxIDAtLjc4My40OTctMS4yMzUgMS41MzctLjQzNi45ODItLjgwMSAxLjgxMS0xLjYzNiAxLjc5MWwtLjI3Ni0uMDQzYy0uNTY1LS4xNzEtLjg1My0uNjkxLTEuMjg0LTEuNzk0LS4xMjUtLjMxMy0uMjAyLS42MzItLjI3LS45MTMtLjA1MS0uMjEzLS4xMjctLjUzLS4xOTUtLjYzNEM3LjA2NyA5LjAwNCA3LjAzOSA5IDYuOTkgOUExIDEgMCAwIDEgNyA3aC4wMWMxLjY2Mi4wMTcgMi4wMTUgMS4zNzMgMi4xOTggMi4xMzQuNDg2LS45ODEgMS4zMDQtMi4wNTggMi43OTctMi4wNzUgMS41MzEuMDE4IDIuMjggMS4xNTMgMi43MzEgMi4xNDFsLjAwMi0uMDA4QzE0Ljk0NCA4LjQyNCAxNS4zMjcgNyAxNi45NzkgN2guMDMyQTEgMSAwIDEgMSAxNyA5aC0uMDExYy0uMTQ5LjA3Ni0uMjU2LjQ3NC0uMzE5LjcwOWE2LjQ4NCA2LjQ4NCAwIDAgMS0uMzExLjk1MWMtLjQyOS45NzMtLjc5IDEuNzg5LTEuNjE0IDEuNzg5XCIvPjwvc3ZnPmAsXG5cbiAgc21pbGV5czogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTEyIDBDNS4zNzMgMCAwIDUuMzczIDAgMTJzNS4zNzMgMTIgMTIgMTIgMTItNS4zNzMgMTItMTJTMTguNjI3IDAgMTIgMG0wIDIyQzYuNDg2IDIyIDIgMTcuNTE0IDIgMTJTNi40ODYgMiAxMiAyczEwIDQuNDg2IDEwIDEwLTQuNDg2IDEwLTEwIDEwXCIvPjxwYXRoIGQ9XCJNOCA3YTIgMiAwIDEgMC0uMDAxIDMuOTk5QTIgMiAwIDAgMCA4IDdNMTYgN2EyIDIgMCAxIDAtLjAwMSAzLjk5OUEyIDIgMCAwIDAgMTYgN00xNS4yMzIgMTVjLS42OTMgMS4xOTUtMS44NyAyLTMuMzQ5IDItMS40NzcgMC0yLjY1NS0uODA1LTMuMzQ3LTJIMTVtMy0ySDZhNiA2IDAgMSAwIDEyIDBcIi8+PC9zdmc+YCxcblxuICBwZW9wbGU6IGA8c3ZnIHhtbG5zOnN2Zz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaGVpZ2h0PVwiMjRcIiB3aWR0aD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPiA8cGF0aCBpZD1cInBhdGgzODE0XCIgZD1cIm0gMy4zNTkxMDg5LDIxLjE3NzI2IGMgMC4xNzIwMzYsMC4wOTM4NSA0LjI2NTk5NCwyLjI5ODM3IDguODE0NDQ1MSwyLjI5ODM3IDQuOTI3NzY3LDAgOC42NzA4OTQsLTIuMjExODgzIDguODI3ODIsLTIuMzA2MDE5IDAuMTEzMDc5LC0wLjA2Nzg1IDAuMTgyMjY4LC0wLjE5MDA1MSAwLjE4MjI2NywtMC4zMjE5MjMgMCwtMy4wMzExOSAtMC45Mjk0OTQsLTUuODA0OTM2IC0yLjYxNzE5NiwtNy44MTA3MTIgLTEuMTgwNjAzLC0xLjQwMzEzNCAtMi42NjE5MTgsLTIuMzU5NTE2IC00LjI5NTY5OSwtMi43OTk3OTEgNC42OTkxMTgsLTIuMjM2MjU4IDMuMTAyMzA2LC05LjI4NjE3MTYyIC0yLjA5NzE5MSwtOS4yODYxNzE2MiAtNS4xOTk0OTc4LDAgLTYuNzk2MzEwMyw3LjA0OTkxMzYyIC0yLjA5NzE5Miw5LjI4NjE3MTYyIC0xLjYzMzc4MjEsMC40NDAyNzUgLTMuMTE1MDk3MSwxLjM5Njc5OCAtNC4yOTU2OTkxLDIuNzk5NzkxIC0xLjY4NzcwMywyLjAwNTc3NiAtMi42MTcxOTYsNC43Nzk1MjIgLTIuNjE3MTk2LDcuODEwNzEyIDEuMmUtNiwwLjEzNzM3OCAwLjA3NTAzOSwwLjI2Mzc4NSAwLjE5NTY0MSwwLjMyOTU3MiB6IE0gOC4wNDM5MzE5LDUuODMwODc4MyBDIDguMDQzOTMwOSwyLjE1MTUyMSAxMi40OTIxMDcsMC4zMDk1NTgxMSAxNS4wOTM0OTEsMi45MTA5NDExIDE3LjY5NDg3NCw1LjUxMjMyNDEgMTUuODUyOTExLDkuOTYwNTAwNiAxMi4xNzM1NTQsOS45NjA1IDkuODkzODk5MSw5Ljk1NzkxMzUgOC4wNDY1MTg2LDguMTEwNTMzMiA4LjA0MzkzMTksNS44MzA4NzgzIFogbSAtMS42ODg3ODIsNy42ODk0OTc3IGMgMS41MjQ1MzUsLTEuODExNDQ5IDMuNTkwNjYwMSwtMi44MDkwMzUgNS44MTg0MDQxLC0yLjgwOTAzNSAyLjIyNzc0NCwwIDQuMjkzODY5LDAuOTk3NTg2IDUuODE4NDA0LDIuODA5MDM1IDEuNTMzNjM5LDEuODIyNTcxIDIuMzk1OTMyLDQuMzM5ODU4IDIuNDM5MTUyLDcuMTA4MzAxIC0wLjgwMzM1MiwwLjQzNDg3NyAtNC4xNDE2MzYsMi4wOTYxMTIgLTguMjU3NTU2LDIuMDk2MTEyIC0zLjgwNjI5MjEsMCAtNy4zOTEwODYxLC0xLjY3MTA0MyAtOC4yNTczNjgxLC0yLjEwNDk4MSAwLjA0NTA1LC0yLjc2NTAxNyAwLjkwNjk2OCwtNS4yNzg3ODUgMi40Mzg5NjQsLTcuMDk5NDMyIHpcIiAvPiA8cGF0aCBpZD1cInBhdGgzODE2XCIgZD1cIk0gMTIuMTczODI4IDAuMzg4NjcxODggQyA5LjMxOTg1MTMgMC4zODg2NzE4NyA3LjM3NzA5ODggMi4zNjcyMjg1IDYuODY1MjM0NCA0LjYzMDg1OTQgQyA2LjQyMTg2MDggNi41OTE2MDE1IDcuMTE1MzU2MiA4Ljc2NzYxMTcgOC45NjQ4NDM4IDEwLjEyNjk1MyBDIDcuNjE0MTI0OSAxMC42NzczNzYgNi4zNTUwNTExIDExLjQ4MDk0NCA1LjM0OTYwOTQgMTIuNjc1NzgxIEMgMy41NjI5MzE3IDE0Ljc5OTE4NSAyLjYwMTU2MjUgMTcuNzAxNDc1IDIuNjAxNTYyNSAyMC44NDc2NTYgQyAyLjYwMTU2NTQgMjEuMTg5ODYxIDIuNzg5NDI3NiAyMS41MDgwMDIgMy4wODk4NDM4IDIxLjY3MTg3NSBDIDMuMzA0NDA2OCAyMS43ODg5MjUgNy40NDM2MjM5IDI0LjAzOTA2MiAxMi4xNzM4MjggMjQuMDM5MDYyIEMgMTcuMjY5OTE4IDI0LjAzOTA2MiAyMS4wODM1NjggMjEuNzc2Nzg2IDIxLjI5MTAxNiAyMS42NTIzNDQgQyAyMS41NzI4MSAyMS40ODMyNjYgMjEuNzQ2MDk3IDIxLjE3NjI4MiAyMS43NDYwOTQgMjAuODQ3NjU2IEMgMjEuNzQ2MDk0IDE3LjcwMTQ3NSAyMC43ODI3NyAxNC43OTkxODUgMTguOTk2MDk0IDEyLjY3NTc4MSBDIDE3Ljk5MDQ1NSAxMS40ODA1OTEgMTYuNzMzODE4IDEwLjY3NTM2MiAxNS4zODI4MTIgMTAuMTI1IEMgMTcuMjMxMTMyIDguNzY1NTU1MiAxNy45MjU2NzUgNi41OTEwNzAxIDE3LjQ4MjQyMiA0LjYzMDg1OTQgQyAxNi45NzA1NTcgMi4zNjcyMjg1IDE1LjAyNzgwNSAwLjM4ODY3MTg4IDEyLjE3MzgyOCAwLjM4ODY3MTg4IHogTSAxMi43OTI5NjkgMi4zMDA3ODEyIEMgMTMuNDY2MjUzIDIuNDE2MTc5MiAxNC4xMjUxMTMgMi43MzgzOTQxIDE0LjY5NTMxMiAzLjMwODU5MzggQyAxNS44MzU3MTIgNC40NDg5OTMxIDE1Ljk4NTYwNCA1Ljk0NzM1NDkgMTUuNDY4NzUgNy4xOTUzMTI1IEMgMTQuOTUxODk2IDguNDQzMjcwMSAxMy43ODY4MjggOS4zOTg0Mzc4IDEyLjE3MzgyOCA5LjM5ODQzNzUgQyAxMC4xOTc3MTkgOS4zOTYxOTU0IDguNjA3NzExIDcuODA2MTg3IDguNjA1NDY4OCA1LjgzMDA3ODEgQyA4LjYwNTQ2ODMgNC4yMTcwNzg1IDkuNTYwNjM2MiAzLjA1MjAxMDIgMTAuODA4NTk0IDIuNTM1MTU2MiBDIDExLjQzMjU3MyAyLjI3NjcyOTMgMTIuMTE5Njg1IDIuMTg1MzgzMyAxMi43OTI5NjkgMi4zMDA3ODEyIHogTSAxMi4xNzM4MjggMTEuMjczNDM4IEMgMTQuMjMzNjQ3IDExLjI3MzQzOCAxNi4xMzM2NzQgMTIuMTg1MDg0IDE3LjU2MjUgMTMuODgyODEyIEMgMTguOTMwNjkgMTUuNTA4NzY1IDE5LjY5ODM0NyAxNy43NzY5NjkgMTkuODA4NTk0IDIwLjI4MzIwMyBDIDE4LjgwNzM5NSAyMC44MDAyMzUgMTUuODg2MTU3IDIyLjE2MjEwOSAxMi4xNzM4MjggMjIuMTYyMTA5IEMgOC43NjE0NjMyIDIyLjE2MjEwOSA1LjYyNDU3NTQgMjAuNzg3MDY5IDQuNTM5MDYyNSAyMC4yNjU2MjUgQyA0LjY1MjU4OTYgMTcuNzY2NzE3IDUuNDIwMzMxNSAxNS41MDQ3OTEgNi43ODUxNTYyIDEzLjg4MjgxMiBDIDguMjEzOTgyNyAxMi4xODUwODQgMTAuMTE0MDEgMTEuMjczNDM4IDEyLjE3MzgyOCAxMS4yNzM0MzggeiBcIiAvPiA8L3N2Zz5gLFxuXG4gIHBsYWNlczogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTYuNSAxMkM1LjEyMiAxMiA0IDEzLjEyMSA0IDE0LjVTNS4xMjIgMTcgNi41IDE3IDkgMTUuODc5IDkgMTQuNSA3Ljg3OCAxMiA2LjUgMTJtMCAzYy0uMjc1IDAtLjUtLjIyNS0uNS0uNXMuMjI1LS41LjUtLjUuNS4yMjUuNS41LS4yMjUuNS0uNS41TTE3LjUgMTJjLTEuMzc4IDAtMi41IDEuMTIxLTIuNSAyLjVzMS4xMjIgMi41IDIuNSAyLjUgMi41LTEuMTIxIDIuNS0yLjUtMS4xMjItMi41LTIuNS0yLjVtMCAzYy0uMjc1IDAtLjUtLjIyNS0uNS0uNXMuMjI1LS41LjUtLjUuNS4yMjUuNS41LS4yMjUuNS0uNS41XCIvPjxwYXRoIGQ9XCJNMjIuNDgyIDkuNDk0bC0xLjAzOS0uMzQ2TDIxLjQgOWguNmMuNTUyIDAgMS0uNDM5IDEtLjk5MiAwLS4wMDYtLjAwMy0uMDA4LS4wMDMtLjAwOEgyM2MwLTEtLjg4OS0yLTEuOTg0LTJoLS42NDJsLS43MzEtMS43MTdDMTkuMjYyIDMuMDEyIDE4LjA5MSAyIDE2Ljc2NCAySDcuMjM2QzUuOTA5IDIgNC43MzggMy4wMTIgNC4zNTcgNC4yODNMMy42MjYgNmgtLjY0MkMxLjg4OSA2IDEgNyAxIDhoLjAwM1MxIDguMDAyIDEgOC4wMDhDMSA4LjU2MSAxLjQ0OCA5IDIgOWguNmwtLjA0My4xNDgtMS4wMzkuMzQ2YTIuMDAxIDIuMDAxIDAgMCAwLTEuMzU5IDIuMDk3bC43NTEgNy41MDhhMSAxIDAgMCAwIC45OTQuOTAxSDN2MWMwIDEuMTAzLjg5NiAyIDIgMmgyYzEuMTA0IDAgMi0uODk3IDItMnYtMWg2djFjMCAxLjEwMy44OTYgMiAyIDJoMmMxLjEwNCAwIDItLjg5NyAyLTJ2LTFoMS4wOTZhLjk5OS45OTkgMCAwIDAgLjk5NC0uOTAxbC43NTEtNy41MDhhMi4wMDEgMi4wMDEgMCAwIDAtMS4zNTktMi4wOTdNNi4yNzMgNC44NTdDNi40MDIgNC40MyA2Ljc4OCA0IDcuMjM2IDRoOS41MjdjLjQ0OCAwIC44MzQuNDMuOTYzLjg1N0wxOS4zMTMgOUg0LjY4OGwxLjU4NS00LjE0M3pNNyAyMUg1di0xaDJ2MXptMTIgMGgtMnYtMWgydjF6bTIuMTg5LTNIMi44MTFsLS42NjItNi42MDdMMyAxMWgxOGwuODUyLjM5M0wyMS4xODkgMTh6XCIvPjwvc3ZnPmAsXG5cbiAgcmVjZW50OiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNMTMgNGgtMmwtLjAwMSA3SDl2MmgydjJoMnYtMmg0di0yaC00elwiLz48cGF0aCBkPVwiTTEyIDBDNS4zNzMgMCAwIDUuMzczIDAgMTJzNS4zNzMgMTIgMTIgMTIgMTItNS4zNzMgMTItMTJTMTguNjI3IDAgMTIgMG0wIDIyQzYuNDg2IDIyIDIgMTcuNTE0IDIgMTJTNi40ODYgMiAxMiAyczEwIDQuNDg2IDEwIDEwLTQuNDg2IDEwLTEwIDEwXCIvPjwvc3ZnPmAsXG5cbiAgc3ltYm9sczogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTAgMGgxMXYySDB6TTQgMTFoM1Y2aDRWNEgwdjJoNHpNMTUuNSAxN2MxLjM4MSAwIDIuNS0xLjExNiAyLjUtMi40OTNzLTEuMTE5LTIuNDkzLTIuNS0yLjQ5M1MxMyAxMy4xMyAxMyAxNC41MDcgMTQuMTE5IDE3IDE1LjUgMTdtMC0yLjk4NmMuMjc2IDAgLjUuMjIyLjUuNDkzIDAgLjI3Mi0uMjI0LjQ5My0uNS40OTNzLS41LS4yMjEtLjUtLjQ5My4yMjQtLjQ5My41LS40OTNNMjEuNSAxOS4wMTRjLTEuMzgxIDAtMi41IDEuMTE2LTIuNSAyLjQ5M1MyMC4xMTkgMjQgMjEuNSAyNHMyLjUtMS4xMTYgMi41LTIuNDkzLTEuMTE5LTIuNDkzLTIuNS0yLjQ5M20wIDIuOTg2YS40OTcuNDk3IDAgMCAxLS41LS40OTNjMC0uMjcxLjIyNC0uNDkzLjUtLjQ5M3MuNS4yMjIuNS40OTNhLjQ5Ny40OTcgMCAwIDEtLjUuNDkzTTIyIDEzbC05IDkgMS41MTMgMS41IDguOTktOS4wMDl6TTE3IDExYzIuMjA5IDAgNC0xLjExOSA0LTIuNVYycy45ODUtLjE2MSAxLjQ5OC45NDlDMjMuMDEgNC4wNTUgMjMgNiAyMyA2czEtMS4xMTkgMS0zLjEzNUMyNC0uMDIgMjEgMCAyMSAwaC0ydjYuMzQ3QTUuODUzIDUuODUzIDAgMCAwIDE3IDZjLTIuMjA5IDAtNCAxLjExOS00IDIuNXMxLjc5MSAyLjUgNCAyLjVNMTAuMjk3IDIwLjQ4MmwtMS40NzUtMS41ODVhNDcuNTQgNDcuNTQgMCAwIDEtMS40NDIgMS4xMjljLS4zMDctLjI4OC0uOTg5LTEuMDE2LTIuMDQ1LTIuMTgzLjkwMi0uODM2IDEuNDc5LTEuNDY2IDEuNzI5LTEuODkycy4zNzYtLjg3MS4zNzYtMS4zMzZjMC0uNTkyLS4yNzMtMS4xNzgtLjgxOC0xLjc1OS0uNTQ2LS41ODEtMS4zMjktLjg3MS0yLjM0OS0uODcxLTEuMDA4IDAtMS43OS4yOTMtMi4zNDQuODc5LS41NTYuNTg3LS44MzIgMS4xODEtLjgzMiAxLjc4NCAwIC44MTMuNDE5IDEuNzQ4IDEuMjU2IDIuODA1LS44NDcuNjE0LTEuNDQ0IDEuMjA4LTEuNzk0IDEuNzg0YTMuNDY1IDMuNDY1IDAgMCAwLS41MjMgMS44MzNjMCAuODU3LjMwOCAxLjU2LjkyNCAyLjEwNy42MTYuNTQ5IDEuNDIzLjgyMyAyLjQyLjgyMyAxLjE3MyAwIDIuNDQ0LS4zNzkgMy44MTMtMS4xMzdMOC4yMzUgMjRoMi44MTlsLTIuMDktMi4zODMgMS4zMzMtMS4xMzV6bS02LjczNi02LjM4OWExLjAyIDEuMDIgMCAwIDEgLjczLS4yODZjLjMxIDAgLjU1OS4wODUuNzQ3LjI1NGEuODQ5Ljg0OSAwIDAgMSAuMjgzLjY1OWMwIC41MTgtLjQxOSAxLjExMi0xLjI1NyAxLjc4NC0uNTM2LS42NTEtLjgwNS0xLjIzMS0uODA1LTEuNzQyYS45MDEuOTAxIDAgMCAxIC4zMDItLjY2OU0zLjc0IDIyYy0uNDI3IDAtLjc3OC0uMTE2LTEuMDU3LS4zNDktLjI3OS0uMjMyLS40MTgtLjQ4Ny0uNDE4LS43NjYgMC0uNTk0LjUwOS0xLjI4OCAxLjUyNy0yLjA4My45NjggMS4xMzQgMS43MTcgMS45NDYgMi4yNDggMi40MzgtLjkyMS41MDctMS42ODYuNzYtMi4zLjc2XCIvPjwvc3ZnPmAsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNWR3NcbiIsImNvbnN0IG1hcHBpbmcgPSB7XG4gIG5hbWU6ICdhJyxcbiAgdW5pZmllZDogJ2InLFxuICBub25fcXVhbGlmaWVkOiAnYycsXG4gIGhhc19pbWdfYXBwbGU6ICdkJyxcbiAgaGFzX2ltZ19nb29nbGU6ICdlJyxcbiAgaGFzX2ltZ190d2l0dGVyOiAnZicsXG4gIGhhc19pbWdfZmFjZWJvb2s6ICdoJyxcbiAga2V5d29yZHM6ICdqJyxcbiAgc2hlZXQ6ICdrJyxcbiAgZW1vdGljb25zOiAnbCcsXG4gIHRleHQ6ICdtJyxcbiAgc2hvcnRfbmFtZXM6ICduJyxcbiAgYWRkZWRfaW46ICdvJyxcbn1cblxuY29uc3QgYnVpbGRTZWFyY2ggPSAoZW1vamkpID0+IHtcbiAgY29uc3Qgc2VhcmNoID0gW11cblxuICB2YXIgYWRkVG9TZWFyY2ggPSAoc3RyaW5ncywgc3BsaXQpID0+IHtcbiAgICBpZiAoIXN0cmluZ3MpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIDsoQXJyYXkuaXNBcnJheShzdHJpbmdzKSA/IHN0cmluZ3MgOiBbc3RyaW5nc10pLmZvckVhY2goKHN0cmluZykgPT4ge1xuICAgICAgOyhzcGxpdCA/IHN0cmluZy5zcGxpdCgvWy18X3xcXHNdKy8pIDogW3N0cmluZ10pLmZvckVhY2goKHMpID0+IHtcbiAgICAgICAgcyA9IHMudG9Mb3dlckNhc2UoKVxuXG4gICAgICAgIGlmIChzZWFyY2guaW5kZXhPZihzKSA9PSAtMSkge1xuICAgICAgICAgIHNlYXJjaC5wdXNoKHMpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGFkZFRvU2VhcmNoKGVtb2ppLnNob3J0X25hbWVzLCB0cnVlKVxuICBhZGRUb1NlYXJjaChlbW9qaS5uYW1lLCB0cnVlKVxuICBhZGRUb1NlYXJjaChlbW9qaS5rZXl3b3JkcywgZmFsc2UpXG4gIGFkZFRvU2VhcmNoKGVtb2ppLmVtb3RpY29ucywgZmFsc2UpXG5cbiAgcmV0dXJuIHNlYXJjaC5qb2luKCcsJylcbn1cblxuY29uc3QgY29tcHJlc3MgPSAoZW1vamkpID0+IHtcbiAgZW1vamkuc2hvcnRfbmFtZXMgPSBlbW9qaS5zaG9ydF9uYW1lcy5maWx0ZXIoKHNob3J0X25hbWUpID0+IHtcbiAgICByZXR1cm4gc2hvcnRfbmFtZSAhPT0gZW1vamkuc2hvcnRfbmFtZVxuICB9KVxuICBkZWxldGUgZW1vamkuc2hvcnRfbmFtZVxuXG4gIGVtb2ppLnNoZWV0ID0gW2Vtb2ppLnNoZWV0X3gsIGVtb2ppLnNoZWV0X3ldXG4gIGRlbGV0ZSBlbW9qaS5zaGVldF94XG4gIGRlbGV0ZSBlbW9qaS5zaGVldF95XG5cbiAgZW1vamkuYWRkZWRfaW4gPSBwYXJzZUludChlbW9qaS5hZGRlZF9pbilcbiAgaWYgKGVtb2ppLmFkZGVkX2luID09PSA2KSB7XG4gICAgZGVsZXRlIGVtb2ppLmFkZGVkX2luXG4gIH1cblxuICBmb3IgKGxldCBrZXkgaW4gbWFwcGluZykge1xuICAgIGVtb2ppW21hcHBpbmdba2V5XV0gPSBlbW9qaVtrZXldXG4gICAgZGVsZXRlIGVtb2ppW2tleV1cbiAgfVxuXG4gIGZvciAobGV0IGtleSBpbiBlbW9qaSkge1xuICAgIGxldCB2YWx1ZSA9IGVtb2ppW2tleV1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiAhdmFsdWUubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgZW1vamlba2V5XVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAhdmFsdWUubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgZW1vamlba2V5XVxuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgIGRlbGV0ZSBlbW9qaVtrZXldXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlZXBGcmVlemUob2JqZWN0KSB7XG4gIC8vIFJldHJpZXZlIHRoZSBwcm9wZXJ0eSBuYW1lcyBkZWZpbmVkIG9uIG9iamVjdFxuICB2YXIgcHJvcE5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqZWN0KVxuXG4gIC8vIEZyZWV6ZSBwcm9wZXJ0aWVzIGJlZm9yZSBmcmVlemluZyBzZWxmXG4gIGZvciAobGV0IG5hbWUgb2YgcHJvcE5hbWVzKSB7XG4gICAgbGV0IHZhbHVlID0gb2JqZWN0W25hbWVdXG4gICAgb2JqZWN0W25hbWVdID1cbiAgICAgIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyBkZWVwRnJlZXplKHZhbHVlKSA6IHZhbHVlXG4gIH1cbiAgcmV0dXJuIE9iamVjdC5mcmVlemUob2JqZWN0KVxufVxuXG5jb25zdCB1bmNvbXByZXNzID0gKGRhdGEpID0+IHtcbiAgaWYgKCFkYXRhLmNvbXByZXNzZWQpIHtcbiAgICByZXR1cm4gZGF0YVxuICB9XG4gIGRhdGEuY29tcHJlc3NlZCA9IGZhbHNlXG5cbiAgZm9yIChsZXQgaWQgaW4gZGF0YS5lbW9qaXMpIHtcbiAgICBsZXQgZW1vamkgPSBkYXRhLmVtb2ppc1tpZF1cblxuICAgIGZvciAobGV0IGtleSBpbiBtYXBwaW5nKSB7XG4gICAgICBlbW9qaVtrZXldID0gZW1vamlbbWFwcGluZ1trZXldXVxuICAgICAgZGVsZXRlIGVtb2ppW21hcHBpbmdba2V5XV1cbiAgICB9XG5cbiAgICBpZiAoIWVtb2ppLnNob3J0X25hbWVzKSBlbW9qaS5zaG9ydF9uYW1lcyA9IFtdXG4gICAgZW1vamkuc2hvcnRfbmFtZXMudW5zaGlmdChpZClcblxuICAgIGVtb2ppLnNoZWV0X3ggPSBlbW9qaS5zaGVldFswXVxuICAgIGVtb2ppLnNoZWV0X3kgPSBlbW9qaS5zaGVldFsxXVxuICAgIGRlbGV0ZSBlbW9qaS5zaGVldFxuXG4gICAgaWYgKCFlbW9qaS50ZXh0KSBlbW9qaS50ZXh0ID0gJydcblxuICAgIGlmICghZW1vamkuYWRkZWRfaW4pIGVtb2ppLmFkZGVkX2luID0gNlxuICAgIGVtb2ppLmFkZGVkX2luID0gZW1vamkuYWRkZWRfaW4udG9GaXhlZCgxKVxuXG4gICAgZW1vamkuc2VhcmNoID0gYnVpbGRTZWFyY2goZW1vamkpXG4gIH1cbiAgZGF0YSA9IGRlZXBGcmVlemUoZGF0YSlcbiAgcmV0dXJuIGRhdGFcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IGJ1aWxkU2VhcmNoLCBjb21wcmVzcywgdW5jb21wcmVzcyB9XG4iLCJpbXBvcnQgeyBpbnRlcnNlY3QsIHVuaWZpZWRUb05hdGl2ZSB9IGZyb20gJy4vaW5kZXgnXG5pbXBvcnQgeyB1bmNvbXByZXNzLCBidWlsZFNlYXJjaCB9IGZyb20gJy4vZGF0YSdcbmltcG9ydCBmcmVxdWVudGx5IGZyb20gJy4vZnJlcXVlbnRseSdcblxuY29uc3QgU0hFRVRfQ09MVU1OUyA9IDU2XG5jb25zdCBDT0xPTlNfUkVHRVggPSAvXig/OlxcOihbXlxcOl0rKVxcOikoPzpcXDpza2luLXRvbmUtKFxcZClcXDopPyQvXG4vLyBTa2luIHRvbmVzXG5jb25zdCBTS0lOUyA9IFsnMUYzRkEnLCAnMUYzRkInLCAnMUYzRkMnLCAnMUYzRkQnLCAnMUYzRkUnLCAnMUYzRkYnXVxuXG4vKipcbiAqIEVtb2ppIGRhdGEgc3RydWN0dXJlOlxuICoge1xuICogICAgXCJjb21wcmVzc2VkXCI6IGZhbHNlLFxuICogICAgXCJhbGlhc2VzXCI6IHtcbiAqICAgICAgY29sbGlzaW9uOiBcImJvb21cIlxuICogICAgICBjb29raW5nOiBcImZyaWVkX2VnZ1wiXG4gKiAgICAgIGVudmVsb3BlOiBcImVtYWlsXCJcbiAqICAgICAgZmFjZV93aXRoX2Zpbmdlcl9jb3ZlcmluZ19jbG9zZWRfbGlwczogXCJzaHVzaGluZ19mYWNlXCJcbiAqICAgICAgLi4uXG4gKiAgICB9LFxuICogICAgXCJjYXRlZ29yaWVzXCI6IFsge1xuICogICAgICBpZDogXCJwZW9wbGVcIixcbiAqICAgICAgbmFtZTogXCJTbWlsZXlzICYgRW1vdGlvblwiLFxuICogICAgICBlbW9qaXM6IFsgXCJncmlubmluZ1wiLCBcImdyaW5cIiwgXCJqb3lcIiwgLi4uIF1cbiAqICAgIH0sIHtcbiAqICAgICAgaWQ6IFwibmF0dXJlXCIsXG4gKiAgICAgIG5hbWU6IFwiQW5pbWFscyAmIE5hdHVyZVwiLFxuICogICAgICBlbW9qaXM6IFsgXCJtb25rZXlfZmFjZVwiLCBcIm1vbmV5XCIsIFwiZ29yaWxsYVwiLCAuLi4gXVxuICogICAgfSxcbiAqICAgIC4uLlxuICogICAgXSxcbiAqICAgIFwiZW1vamlzXCI6IFtcbiAqICAgICAgc21pbGV5OiB7XG4gKiAgICAgICAgYWRkZWRfaW46IFwiNi4wXCIsXG4gKiAgICAgICAgZW1vdGljb25zOiBbXCI9KVwiLCBcIj0tKVwiXSxcbiAqICAgICAgICBoYXNfaW1nX2FwcGxlOiB0cnVlLFxuICogICAgICAgIGhhc19pbWdfZmFjZWJvb2s6IHRydWUsXG4gKiAgICAgICAgaGFzX2ltZ19nb29nbGU6IHRydWUsXG4gKiAgICAgICAgaGFzX2ltZ190d2l0dGVyOiB0cnVlLFxuICogICAgICAgIGtleXdvcmRzOiBbXCJmYWNlXCIsIFwiaGFwcHlcIiwgXCJqb3lcIiwgXCJoYWhhXCIsIFwiOkRcIiwgXCI6KVwiLCBcInNtaWxlXCIsIFwiZnVubnlcIl0sXG4gKiAgICAgICAgbmFtZTogXCJTbWlsaW5nIEZhY2Ugd2l0aCBPcGVuIE1vdXRoXCIsXG4gKiAgICAgICAgbm9uX3F1YWxpZmllZDogdW5kZWZpbmVkLFxuICogICAgICAgIHNlYXJjaDogXCJzbWlsZXksc21pbGluZyxmYWNlLHdpdGgsb3Blbixtb3V0aCxoYXBweSxqb3ksaGFoYSw6ZCw6KSxzbWlsZSxmdW5ueSw9KSw9LSlcIixcbiAqICAgICAgICBzaGVldF94OiAzMCxcbiAqICAgICAgICBzaGVldF95OiAyNyxcbiAqICAgICAgICBzaG9ydF9uYW1lczogW1wic21pbGV5XCJdLFxuICogICAgICAgIHRleHQ6IFwiOilcIixcbiAqICAgICAgICB1bmlmaWVkOiBcIjFGNjAzXCIsXG4gKiAgICAgIH0sIHtcbiAqICAgICAgKzE6IHsgICAgLy8gZW1vamkgd2l0aCBza2luX3ZhcmlhdGlvbnNcbiAqICAgICAgICAgIC4uLiwgLy8gYWxsIHRoZSByZWd1bGFyIGZpZWxkcyBhcmUgcHJlc2VudFxuICogICAgICAgICAgbmFtZTogXCJUaHVtYnMgVXAgU2lnblwiLFxuICogICAgICAgICAgc2hvcnRfbmFtZXM6ICgyKSBbXCIrMVwiLCBcInRodW1ic3VwXCJdLFxuICogICAgICAgICAgc2tpbl92YXJpYXRpb25zOiB7XG4gKiAgICAgICAgICAgIDFGM0ZCOiAgICAgICAgICAgICAvLyBlYWNoIHZhcmlhdGlvbiBoYXMgYWRkaXRpb25hbCBzZXQgb2YgZmllbGRzOlxuICogICAgICAgICAgICAgIGFkZGVkX2luOiBcIjguMFwiLFxuICogICAgICAgICAgICAgIGhhc19pbWdfYXBwbGU6IHRydWUsXG4gKiAgICAgICAgICAgICAgaGFzX2ltZ19mYWNlYm9vazogdHJ1ZSxcbiAqICAgICAgICAgICAgICBoYXNfaW1nX2dvb2dsZTogdHJ1ZSxcbiAqICAgICAgICAgICAgICBoYXNfaW1nX3R3aXR0ZXI6IHRydWUsXG4gKiAgICAgICAgICAgICAgaW1hZ2U6IFwiMWY0NGQtMWYzZmIucG5nXCIsXG4gKiAgICAgICAgICAgICAgbm9uX3F1YWxpZmllZDogbnVsbCxcbiAqICAgICAgICAgICAgICBzaGVldF94OiAxNCxcbiAqICAgICAgICAgICAgICBzaGVldF95OiA1MCxcbiAqICAgICAgICAgICAgICB1bmlmaWVkOiBcIjFGNDRELTFGM0ZCXCIsXG4gKiAgICAgICAgICAgIDFGM0ZCOiB74oCmfSxcbiAqICAgICAgICAgICAgMUYzRkM6IHvigKZ9LFxuICogICAgICAgICAgICAxRjNGRDoge+KApn0sXG4gKiAgICAgICAgICAgIDFGM0ZFOiB74oCmfSxcbiAqICAgICAgICAgICAgMUYzRkY6IHvigKZ9XG4gKiAgICAgICAgICAgIH0sXG4gKiAgICAgICAgICAuLi5cbiAqICAgICAgfSxcbiAqICAgICAgYTogeyAgLy8gZW1vamkgd2l0aCBub25fcXVhbGlmaWVkIGZpZWxkIHNldFxuICogICAgICAgIGFkZGVkX2luOiBcIjYuMFwiLFxuICogICAgICAgIGVtb3RpY29uczogdW5kZWZpbmVkLFxuICogICAgICAgIGhhc19pbWdfYXBwbGU6IHRydWUsXG4gKiAgICAgICAgLi4uXG4gKiAgICAgICAgbm9uX3F1YWxpZmllZDogXCIxRjE3MFwiLFxuICogICAgICAgIHVuaWZpZWQ6IFwiMUYxNzAtRkUwRlwiLFxuICogICAgIH0sXG4gKiAgICAgLi4uXG4gKiAgIF1cbiAqIH1cbiAqL1xuXG4vKipcbiAqIFdyYXBzIHJhdyBqYXNvbiBlbW9qaSBkYXRhLCBzZXJ2ZXMgYXMgZGF0YSBzb3VyY2UgZm9yXG4gKiBlbW9qaSBwaWNrZXIgY29tcG9uZW50cy5cbiAqXG4gKiBVc2FnZTpcbiAqXG4gKiAgIGltcG9ydCBkYXRhIGZyb20gJy4uL2RhdGEvYWxsLmpzb24nXG4gKiAgIGxldCBpbmRleCA9IG5ldyBFbW9qaUluZGV4KGRhdGEpXG4gKlxuICovXG5leHBvcnQgY2xhc3MgRW1vamlJbmRleCB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBSYXcganNvbiBkYXRhLCBzZWUgdGhlIHN0cnVjdHVyZSBhYm92ZS5cbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBhZGRpdGlvbmFsIG9wdGlvbnMsIGFzIGFuIG9iamVjdDpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZW1vamlzVG9TaG93RmlsdGVyIC0gb3B0aW9uYWwsIGZ1bmN0aW9uIHRvIGZpbHRlciBvdXRcbiAgICogICBzb21lIGVtb2ppcywgZnVuY3Rpb24oZW1vamkpIHsgcmV0dXJuIHRydWV8ZmFsc2UgfVxuICAgKiAgIHdoZXJlIGBlbW9qaWAgaXMgYW4gcmF3IGVtb2ppIG9iamVjdCwgc2VlIGRhdGEuZW1vamlzIGFib3ZlLlxuICAgKiBAcGFyYW0ge0FycmF5fSBpbmNsdWRlIC0gb3B0aW9uYWwsIGEgbGlzdCBvZiBjYXRlZ29yeSBpZHMgdG8gaW5jbHVkZS5cbiAgICogQHBhcmFtIHtBcnJheX0gZXhjbHVkZSAtIG9wdGlvbmFsLCBhIGxpc3Qgb2YgY2F0ZWdvcnkgaWRzIHRvIGV4Y2x1ZGUuXG4gICAqIEBwYXJhbSB7QXJyYXl9IGN1c3RvbSAtIG9wdGlvbmFsLCBhIGxpc3QgY3VzdG9tIGVtb2ppcywgZWFjaCBlbW9qaSBpc1xuICAgKiAgIGFuIG9iamVjdCwgc2VlIGRhdGEuZW1vamlzIGFib3ZlIGZvciBleGFtcGxlcy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIGRhdGEsXG4gICAge1xuICAgICAgZW1vamlzVG9TaG93RmlsdGVyLFxuICAgICAgaW5jbHVkZSxcbiAgICAgIGV4Y2x1ZGUsXG4gICAgICBjdXN0b20sXG4gICAgICByZWNlbnQsXG4gICAgICByZWNlbnRMZW5ndGggPSAyMCxcbiAgICB9ID0ge30sXG4gICkge1xuICAgIHRoaXMuX2RhdGEgPSB1bmNvbXByZXNzKGRhdGEpXG4gICAgLy8gQ2FsbGJhY2sgdG8gZXhjbHVkZSBzcGVjaWZpYyBlbW9qaXNcbiAgICB0aGlzLl9lbW9qaXNGaWx0ZXIgPSBlbW9qaXNUb1Nob3dGaWx0ZXIgfHwgbnVsbFxuICAgIC8vIENhdGVnb3JpZXMgdG8gaW5jbHVkZSAvIGV4Y2x1ZGVcbiAgICB0aGlzLl9pbmNsdWRlID0gaW5jbHVkZSB8fCBudWxsXG4gICAgdGhpcy5fZXhjbHVkZSA9IGV4Y2x1ZGUgfHwgbnVsbFxuICAgIC8vIEN1c3RvbSBlbW9qaXNcbiAgICB0aGlzLl9jdXN0b20gPSBjdXN0b20gfHwgW11cbiAgICAvLyBSZWNlbnQgZW1vamlzXG4gICAgLy8gVE9ETzogbWFrZSBwYXJhbWV0ZXIgY29uZmlndXJhYmxlXG4gICAgdGhpcy5fcmVjZW50ID0gcmVjZW50IHx8IGZyZXF1ZW50bHkuZ2V0KHJlY2VudExlbmd0aClcblxuICAgIHRoaXMuX2Vtb2ppcyA9IHt9XG4gICAgdGhpcy5fbmF0aXZlRW1vamlzID0ge31cbiAgICB0aGlzLl9lbW90aWNvbnMgPSB7fVxuXG4gICAgdGhpcy5fY2F0ZWdvcmllcyA9IFtdXG4gICAgdGhpcy5fcmVjZW50Q2F0ZWdvcnkgPSB7IGlkOiAncmVjZW50JywgbmFtZTogJ1JlY2VudCcsIGVtb2ppczogW10gfVxuICAgIHRoaXMuX2N1c3RvbUNhdGVnb3J5ID0geyBpZDogJ2N1c3RvbScsIG5hbWU6ICdDdXN0b20nLCBlbW9qaXM6IFtdIH1cbiAgICB0aGlzLl9zZWFyY2hJbmRleCA9IHt9XG4gICAgdGhpcy5idWlsZEluZGV4KClcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpXG4gIH1cblxuICBidWlsZEluZGV4KCkge1xuICAgIGxldCBhbGxDYXRlZ29yaWVzID0gdGhpcy5fZGF0YS5jYXRlZ29yaWVzXG5cbiAgICBpZiAodGhpcy5faW5jbHVkZSkge1xuICAgICAgLy8gUmVtb3ZlIGNhdGVnb3JpZXMgdGhhdCBhcmUgbm90IGluIHRoZSBpbmNsdWRlIGxpc3QuXG4gICAgICBhbGxDYXRlZ29yaWVzID0gYWxsQ2F0ZWdvcmllcy5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luY2x1ZGUuaW5jbHVkZXMoaXRlbS5pZClcbiAgICAgIH0pXG4gICAgICAvLyBTb3J0IGNhdGVnb3JpZXMgYWNjb3JkaW5nIHRvIHRoZSBpbmNsdWRlIGxpc3QuXG4gICAgICBhbGxDYXRlZ29yaWVzID0gYWxsQ2F0ZWdvcmllcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4QSA9IHRoaXMuX2luY2x1ZGUuaW5kZXhPZihhLmlkKVxuICAgICAgICBjb25zdCBpbmRleEIgPSB0aGlzLl9pbmNsdWRlLmluZGV4T2YoYi5pZClcbiAgICAgICAgaWYgKGluZGV4QSA8IGluZGV4Qikge1xuICAgICAgICAgIHJldHVybiAtMVxuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleEEgPiBpbmRleEIpIHtcbiAgICAgICAgICByZXR1cm4gMVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwXG4gICAgICB9KVxuICAgIH1cblxuICAgIGFsbENhdGVnb3JpZXMuZm9yRWFjaCgoY2F0ZWdvcnlEYXRhKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNDYXRlZ29yeU5lZWRlZChjYXRlZ29yeURhdGEuaWQpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgbGV0IGNhdGVnb3J5ID0ge1xuICAgICAgICBpZDogY2F0ZWdvcnlEYXRhLmlkLFxuICAgICAgICBuYW1lOiBjYXRlZ29yeURhdGEubmFtZSxcbiAgICAgICAgZW1vamlzOiBbXSxcbiAgICAgIH1cbiAgICAgIGNhdGVnb3J5RGF0YS5lbW9qaXMuZm9yRWFjaCgoZW1vamlJZCkgPT4ge1xuICAgICAgICBsZXQgZW1vamkgPSB0aGlzLmFkZEVtb2ppKGVtb2ppSWQpXG4gICAgICAgIGlmIChlbW9qaSkge1xuICAgICAgICAgIGNhdGVnb3J5LmVtb2ppcy5wdXNoKGVtb2ppKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaWYgKGNhdGVnb3J5LmVtb2ppcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pc0NhdGVnb3J5TmVlZGVkKCdjdXN0b20nKSkge1xuICAgICAgaWYgKHRoaXMuX2N1c3RvbS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAobGV0IGN1c3RvbUVtb2ppIG9mIHRoaXMuX2N1c3RvbSkge1xuICAgICAgICAgIHRoaXMuYWRkQ3VzdG9tRW1vamkoY3VzdG9tRW1vamkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9jdXN0b21DYXRlZ29yeS5lbW9qaXMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX2NhdGVnb3JpZXMucHVzaCh0aGlzLl9jdXN0b21DYXRlZ29yeSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0NhdGVnb3J5TmVlZGVkKCdyZWNlbnQnKSkge1xuICAgICAgaWYgKHRoaXMuX3JlY2VudC5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fcmVjZW50Lm1hcCgoaWQpID0+IHtcbiAgICAgICAgICBmb3IgKGxldCBjdXN0b21FbW9qaSBvZiB0aGlzLl9jdXN0b21DYXRlZ29yeS5lbW9qaXMpIHtcbiAgICAgICAgICAgIGlmIChjdXN0b21FbW9qaS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5fcmVjZW50Q2F0ZWdvcnkuZW1vamlzLnB1c2goY3VzdG9tRW1vamkpXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5oYXNFbW9qaShpZCkpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlY2VudENhdGVnb3J5LmVtb2ppcy5wdXNoKHRoaXMuZW1vamkoaWQpKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIC8vIEFkZCByZWNlbnQgY2F0ZWdvcnkgdG8gdGhlIHRvcFxuICAgICAgaWYgKHRoaXMuX3JlY2VudENhdGVnb3J5LmVtb2ppcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fY2F0ZWdvcmllcy51bnNoaWZ0KHRoaXMuX3JlY2VudENhdGVnb3J5KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIHRoZSBlbW9qaSBmcm9tIHRoZSBzdHJpbmdcbiAgICovXG4gIGZpbmRFbW9qaShlbW9qaSwgc2tpbikge1xuICAgIC8vIDEuIFBhcnNlIGFzIDplbW9qaV9uYW1lOnNraW4tdG9uZS14eDpcbiAgICBsZXQgbWF0Y2hlcyA9IGVtb2ppLm1hdGNoKENPTE9OU19SRUdFWClcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICBlbW9qaSA9IG1hdGNoZXNbMV1cbiAgICAgIGlmIChtYXRjaGVzWzJdKSB7XG4gICAgICAgIHNraW4gPSBwYXJzZUludChtYXRjaGVzWzJdLCAxMClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAyLiBDaGVjayBpZiB0aGUgc3BlY2lmaWVkIGVtb2ppIGlzIGFuIGFsaWFzXG4gICAgaWYgKHRoaXMuX2RhdGEuYWxpYXNlcy5oYXNPd25Qcm9wZXJ0eShlbW9qaSkpIHtcbiAgICAgIGVtb2ppID0gdGhpcy5fZGF0YS5hbGlhc2VzW2Vtb2ppXVxuICAgIH1cblxuICAgIC8vIDMuIENoZWNrIGlmIHdlIGhhdmUgdGhlIHNwZWNpZmllZCBlbW9qaVxuICAgIGlmICh0aGlzLl9lbW9qaXMuaGFzT3duUHJvcGVydHkoZW1vamkpKSB7XG4gICAgICBsZXQgZW1vamlPYmplY3QgPSB0aGlzLl9lbW9qaXNbZW1vamldXG4gICAgICBpZiAoc2tpbikge1xuICAgICAgICByZXR1cm4gZW1vamlPYmplY3QuZ2V0U2tpbihza2luKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVtb2ppT2JqZWN0XG4gICAgfVxuXG4gICAgLy8gNC4gQ2hlY2sgaWYgd2UgaGF2ZSB0aGUgc3BlY2lmaWVkIG5hdGl2ZSBlbW9qaVxuICAgIGlmICh0aGlzLl9uYXRpdmVFbW9qaXMuaGFzT3duUHJvcGVydHkoZW1vamkpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbmF0aXZlRW1vamlzW2Vtb2ppXVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY2F0ZWdvcmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2F0ZWdvcmllc1xuICB9XG5cbiAgZW1vamkoZW1vamlJZCkge1xuICAgIGlmICh0aGlzLl9kYXRhLmFsaWFzZXMuaGFzT3duUHJvcGVydHkoZW1vamlJZCkpIHtcbiAgICAgIGVtb2ppSWQgPSB0aGlzLl9kYXRhLmFsaWFzZXNbZW1vamlJZF1cbiAgICB9XG4gICAgbGV0IGVtb2ppID0gdGhpcy5fZW1vamlzW2Vtb2ppSWRdXG4gICAgaWYgKCFlbW9qaSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gbm90IGZpbmQgZW1vamkgYnkgaWQ6ICcgKyBlbW9qaUlkKVxuICAgIH1cbiAgICByZXR1cm4gZW1vamlcbiAgfVxuXG4gIGZpcnN0RW1vamkoKSB7XG4gICAgbGV0IGVtb2ppID0gdGhpcy5fZW1vamlzW09iamVjdC5rZXlzKHRoaXMuX2Vtb2ppcylbMF1dXG4gICAgaWYgKCFlbW9qaSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gbm90IGdldCBmaXJzdCBlbW9qaScpXG4gICAgfVxuICAgIHJldHVybiBlbW9qaVxuICB9XG5cbiAgaGFzRW1vamkoZW1vamlJZCkge1xuICAgIGlmICh0aGlzLl9kYXRhLmFsaWFzZXMuaGFzT3duUHJvcGVydHkoZW1vamlJZCkpIHtcbiAgICAgIGVtb2ppSWQgPSB0aGlzLl9kYXRhLmFsaWFzZXNbZW1vamlJZF1cbiAgICB9XG4gICAgaWYgKHRoaXMuX2Vtb2ppc1tlbW9qaUlkXSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBuYXRpdmVFbW9qaSh1bmljb2RlRW1vamkpIHtcbiAgICBpZiAodGhpcy5fbmF0aXZlRW1vamlzLmhhc093blByb3BlcnR5KHVuaWNvZGVFbW9qaSkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9uYXRpdmVFbW9qaXNbdW5pY29kZUVtb2ppXVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgc2VhcmNoKHZhbHVlLCBtYXhSZXN1bHRzKSB7XG4gICAgbWF4UmVzdWx0cyB8fCAobWF4UmVzdWx0cyA9IDc1KVxuICAgIGlmICghdmFsdWUubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBpZiAodmFsdWUgPT0gJy0nIHx8IHZhbHVlID09ICctMScpIHtcbiAgICAgIHJldHVybiBbdGhpcy5lbW9qaSgnLTEnKV1cbiAgICB9XG5cbiAgICBsZXQgdmFsdWVzID0gdmFsdWUudG9Mb3dlckNhc2UoKS5zcGxpdCgvW1xcc3wsfFxcLXxfXSsvKVxuICAgIGxldCBhbGxSZXN1bHRzID0gW11cblxuICAgIGlmICh2YWx1ZXMubGVuZ3RoID4gMikge1xuICAgICAgdmFsdWVzID0gW3ZhbHVlc1swXSwgdmFsdWVzWzFdXVxuICAgIH1cblxuICAgIGFsbFJlc3VsdHMgPSB2YWx1ZXNcbiAgICAgIC5tYXAoKHZhbHVlKSA9PiB7XG4gICAgICAgIC8vIFN0YXJ0IHNlYXJjaGluIGluIHRoZSBnbG9iYWwgbGlzdCBvZiBlbW9qaXNcbiAgICAgICAgbGV0IGVtb2ppcyA9IHRoaXMuX2Vtb2ppc1xuICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gdGhpcy5fc2VhcmNoSW5kZXhcbiAgICAgICAgbGV0IGxlbmd0aCA9IDBcblxuICAgICAgICBmb3IgKGxldCBjaGFySW5kZXggPSAwOyBjaGFySW5kZXggPCB2YWx1ZS5sZW5ndGg7IGNoYXJJbmRleCsrKSB7XG4gICAgICAgICAgY29uc3QgY2hhciA9IHZhbHVlW2NoYXJJbmRleF1cbiAgICAgICAgICBsZW5ndGgrK1xuXG4gICAgICAgICAgY3VycmVudEluZGV4W2NoYXJdIHx8IChjdXJyZW50SW5kZXhbY2hhcl0gPSB7fSlcbiAgICAgICAgICBjdXJyZW50SW5kZXggPSBjdXJyZW50SW5kZXhbY2hhcl1cblxuICAgICAgICAgIGlmICghY3VycmVudEluZGV4LnJlc3VsdHMpIHtcbiAgICAgICAgICAgIGxldCBzY29yZXMgPSB7fVxuICAgICAgICAgICAgY3VycmVudEluZGV4LnJlc3VsdHMgPSBbXVxuICAgICAgICAgICAgY3VycmVudEluZGV4LmVtb2ppcyA9IHt9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGVtb2ppSWQgaW4gZW1vamlzKSB7XG4gICAgICAgICAgICAgIGxldCBlbW9qaSA9IGVtb2ppc1tlbW9qaUlkXVxuICAgICAgICAgICAgICAvLyBzZWFyY2ggaXMgYSBjb21tYS1zZXBhcmF0ZWQgc3RyaW5nIHdpdGggd29yZHMsIHJlbGF0ZWRcbiAgICAgICAgICAgICAgLy8gdG8gdGhlIGVtb2ppLCBmb3IgZXhhbXBsZTpcbiAgICAgICAgICAgICAgLy8gc2VhcmNoOiBcInNtaWxleSxzbWlsaW5nLGZhY2Usam95LGhhaGEsOmQsOiksc21pbGUsZnVubnksPSksPS0pXCIsXG4gICAgICAgICAgICAgIGxldCBzZWFyY2ggPSBlbW9qaS5fZGF0YS5zZWFyY2hcbiAgICAgICAgICAgICAgbGV0IHN1YiA9IHZhbHVlLnN1YnN0cigwLCBsZW5ndGgpXG4gICAgICAgICAgICAgIGxldCBzdWJJbmRleCA9IHNlYXJjaC5pbmRleE9mKHN1YilcbiAgICAgICAgICAgICAgaWYgKHN1YkluZGV4ICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNjb3JlID0gc3ViSW5kZXggKyAxXG4gICAgICAgICAgICAgICAgaWYgKHN1YiA9PSBlbW9qaUlkKSBzY29yZSA9IDBcblxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleC5yZXN1bHRzLnB1c2goZW1vamkpXG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4LmVtb2ppc1tlbW9qaUlkXSA9IGVtb2ppXG5cbiAgICAgICAgICAgICAgICBzY29yZXNbZW1vamlJZF0gPSBzY29yZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50SW5kZXgucmVzdWx0cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgIHZhciBhU2NvcmUgPSBzY29yZXNbYS5pZF0sXG4gICAgICAgICAgICAgICAgYlNjb3JlID0gc2NvcmVzW2IuaWRdXG4gICAgICAgICAgICAgIHJldHVybiBhU2NvcmUgLSBiU2NvcmVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gY29udGludWUgc2VhcmNoIGluIHRoZSByZWR1Y2VkIHNldCBvZiBlbW9qaXNcbiAgICAgICAgICBlbW9qaXMgPSBjdXJyZW50SW5kZXguZW1vamlzXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGN1cnJlbnRJbmRleC5yZXN1bHRzXG4gICAgICAgIC8vIFRoZSBcImZpbHRlclwiIGNhbGwgcmVtb3ZlcyB1bmRlZmluZWQgdmFsdWVzIGZyb20gYWxsUmVzdWx0c1xuICAgICAgICAvLyBhcnJheSwgZm9yIGV4YW1wbGUsIGlmIHdlIGhhdmUgXCJ0ZXN0IFwiICh3aXRoIHRyYWlsaW5nIHNwYWNlKSxcbiAgICAgICAgLy8gd2Ugd2lsbCBnZXQgXCJbQXJyYXksIHVuZGVmaW5lZF1cIiBmb3IgYWxsUmVzdWx0cyBhbmQgYWZ0ZXJcbiAgICAgICAgLy8gdGhlIFwiZmlsdGVyXCIgY2FsbCBpdCB3aWxsIHR1cm4gaW50byBcIltBcnJheV1cIlxuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoKGEpID0+IGEpXG5cbiAgICB2YXIgcmVzdWx0cyA9IG51bGxcbiAgICBpZiAoYWxsUmVzdWx0cy5sZW5ndGggPiAxKSB7XG4gICAgICByZXN1bHRzID0gaW50ZXJzZWN0LmFwcGx5KG51bGwsIGFsbFJlc3VsdHMpXG4gICAgfSBlbHNlIGlmIChhbGxSZXN1bHRzLmxlbmd0aCkge1xuICAgICAgcmVzdWx0cyA9IGFsbFJlc3VsdHNbMF1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0cyA9IFtdXG4gICAgfVxuICAgIGlmIChyZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoID4gbWF4UmVzdWx0cykge1xuICAgICAgcmVzdWx0cyA9IHJlc3VsdHMuc2xpY2UoMCwgbWF4UmVzdWx0cylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHNcbiAgfVxuXG4gIGFkZEN1c3RvbUVtb2ppKGN1c3RvbUVtb2ppKSB7XG4gICAgbGV0IGVtb2ppRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGN1c3RvbUVtb2ppLCB7XG4gICAgICBpZDogY3VzdG9tRW1vamkuc2hvcnRfbmFtZXNbMF0sXG4gICAgICBjdXN0b206IHRydWUsXG4gICAgfSlcbiAgICBpZiAoIWVtb2ppRGF0YS5zZWFyY2gpIHtcbiAgICAgIGVtb2ppRGF0YS5zZWFyY2ggPSBidWlsZFNlYXJjaChlbW9qaURhdGEpXG4gICAgfVxuICAgIGxldCBlbW9qaSA9IG5ldyBFbW9qaURhdGEoZW1vamlEYXRhKVxuICAgIHRoaXMuX2Vtb2ppc1tlbW9qaS5pZF0gPSBlbW9qaVxuICAgIHRoaXMuX2N1c3RvbUNhdGVnb3J5LmVtb2ppcy5wdXNoKGVtb2ppKVxuICAgIHJldHVybiBlbW9qaVxuICB9XG5cbiAgYWRkRW1vamkoZW1vamlJZCkge1xuICAgIC8vIFdlIGV4cGVjdCB0aGUgY29ycmVjdCBlbW9qaSBpZCB0aGF0IGlzIHByZXNlbnQgaW4gdGhlIGVtb2ppcyBkYXRhLlxuICAgIGxldCBkYXRhID0gdGhpcy5fZGF0YS5lbW9qaXNbZW1vamlJZF1cblxuICAgIGlmICghdGhpcy5pc0Vtb2ppTmVlZGVkKGRhdGEpKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBsZXQgZW1vamkgPSBuZXcgRW1vamlEYXRhKGRhdGEpXG4gICAgdGhpcy5fZW1vamlzW2Vtb2ppSWRdID0gZW1vamlcbiAgICBpZiAoZW1vamkubmF0aXZlKSB7XG4gICAgICB0aGlzLl9uYXRpdmVFbW9qaXNbZW1vamkubmF0aXZlXSA9IGVtb2ppXG4gICAgfVxuICAgIGlmIChlbW9qaS5fc2tpbnMpIHtcbiAgICAgIGZvciAobGV0IGlkeCBpbiBlbW9qaS5fc2tpbnMpIHtcbiAgICAgICAgbGV0IHNraW4gPSBlbW9qaS5fc2tpbnNbaWR4XVxuICAgICAgICBpZiAoc2tpbi5uYXRpdmUpIHtcbiAgICAgICAgICB0aGlzLl9uYXRpdmVFbW9qaXNbc2tpbi5uYXRpdmVdID0gc2tpblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGVtb2ppLmVtb3RpY29ucykge1xuICAgICAgZW1vamkuZW1vdGljb25zLmZvckVhY2goKGVtb3RpY29uKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9lbW90aWNvbnNbZW1vdGljb25dKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZW1vdGljb25zW2Vtb3RpY29uXSA9IGVtb2ppSWRcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBlbW9qaVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHdlIG5lZWQgdG8gaW5jbHVkZSBnaXZlbiBjYXRlZ29yeS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNhdGVnb3J5X2lkIC0gVGhlIGNhdGVnb3J5IGlkLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSAtIFdoZXRoZXIgdG8gaW5jbHVkZSB0aGUgZW1vamkuXG4gICAqL1xuICBpc0NhdGVnb3J5TmVlZGVkKGNhdGVnb3J5X2lkKSB7XG4gICAgbGV0IGlzSW5jbHVkZWQgPVxuICAgICAgdGhpcy5faW5jbHVkZSAmJiB0aGlzLl9pbmNsdWRlLmxlbmd0aFxuICAgICAgICA/IHRoaXMuX2luY2x1ZGUuaW5kZXhPZihjYXRlZ29yeV9pZCkgPiAtMVxuICAgICAgICA6IHRydWVcbiAgICBsZXQgaXNFeGNsdWRlZCA9XG4gICAgICB0aGlzLl9leGNsdWRlICYmIHRoaXMuX2V4Y2x1ZGUubGVuZ3RoXG4gICAgICAgID8gdGhpcy5fZXhjbHVkZS5pbmRleE9mKGNhdGVnb3J5X2lkKSA+IC0xXG4gICAgICAgIDogZmFsc2VcbiAgICBpZiAoIWlzSW5jbHVkZWQgfHwgaXNFeGNsdWRlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgd2UgbmVlZCB0byBpbmNsdWRlIGdpdmVuIGVtb2ppLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZW1vamkgLSBUaGUgcmF3IGVtb2ppIG9iamVjdC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gLSBXaGV0aGVyIHRvIGluY2x1ZGUgdGhlIGVtb2ppLlxuICAgKi9cbiAgaXNFbW9qaU5lZWRlZChlbW9qaSkge1xuICAgIGlmICh0aGlzLl9lbW9qaXNGaWx0ZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLl9lbW9qaXNGaWx0ZXIoZW1vamkpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVtb2ppRGF0YSB7XG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLl9kYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSlcbiAgICB0aGlzLl9za2lucyA9IG51bGxcbiAgICBpZiAodGhpcy5fZGF0YS5za2luX3ZhcmlhdGlvbnMpIHtcbiAgICAgIHRoaXMuX3NraW5zID0gW11cbiAgICAgIGZvciAodmFyIHNraW5JZHggaW4gU0tJTlMpIHtcbiAgICAgICAgbGV0IHNraW5LZXkgPSBTS0lOU1tza2luSWR4XVxuICAgICAgICBsZXQgdmFyaWF0aW9uRGF0YSA9IHRoaXMuX2RhdGEuc2tpbl92YXJpYXRpb25zW3NraW5LZXldXG4gICAgICAgIGxldCBza2luRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEpXG4gICAgICAgIGZvciAobGV0IGsgaW4gdmFyaWF0aW9uRGF0YSkge1xuICAgICAgICAgIHNraW5EYXRhW2tdID0gdmFyaWF0aW9uRGF0YVtrXVxuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBza2luRGF0YS5za2luX3ZhcmlhdGlvbnNcbiAgICAgICAgc2tpbkRhdGFbJ3NraW5fdG9uZSddID0gcGFyc2VJbnQoc2tpbklkeCkgKyAxXG4gICAgICAgIHRoaXMuX3NraW5zLnB1c2gobmV3IEVtb2ppRGF0YShza2luRGF0YSkpXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3Nhbml0aXplZCA9IHNhbml0aXplKHRoaXMuX2RhdGEpXG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuX3Nhbml0aXplZCkge1xuICAgICAgdGhpc1trZXldID0gdGhpcy5fc2FuaXRpemVkW2tleV1cbiAgICB9XG4gICAgdGhpcy5zaG9ydF9uYW1lcyA9IHRoaXMuX2RhdGEuc2hvcnRfbmFtZXNcbiAgICB0aGlzLnNob3J0X25hbWUgPSB0aGlzLl9kYXRhLnNob3J0X25hbWVzWzBdXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKVxuICB9XG5cbiAgZ2V0U2tpbihza2luSWR4KSB7XG4gICAgaWYgKHNraW5JZHggJiYgc2tpbklkeCAhPSAnbmF0aXZlJyAmJiB0aGlzLl9za2lucykge1xuICAgICAgcmV0dXJuIHRoaXMuX3NraW5zW3NraW5JZHggLSAxXVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgbGV0IG11bHRpcGx5ID0gMTAwIC8gU0hFRVRfQ09MVU1OUyxcbiAgICAgIHggPSBNYXRoLnJvdW5kKG11bHRpcGx5ICogdGhpcy5fZGF0YS5zaGVldF94ICogMTAwKSAvIDEwMCxcbiAgICAgIHkgPSBNYXRoLnJvdW5kKG11bHRpcGx5ICogdGhpcy5fZGF0YS5zaGVldF95ICogMTAwKSAvIDEwMFxuICAgIHJldHVybiBgJHt4fSUgJHt5fSVgXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVtb2ppVmlldyB7XG4gIC8qKlxuICAgKiBlbW9qaSAtIEVtb2ppIHRvIGRpc3BsYXlcbiAgICogc2V0IC0gc3RyaW5nLCBlbW9qaSBzZXQgbmFtZVxuICAgKiBuYXRpdmUgLSBib29sZWFuLCB3aGV0aGVyIHRvIHJlbmRlciBuYXRpdmUgZW1vamlcbiAgICogZmFsbGJhY2sgLSBmYWxsYmFjayBmdW5jdGlvbiB0byByZW5kZXIgbWlzc2luZyBlbW9qaSwgb3B0aW9uYWxcbiAgICogZW1vamlUb29sdGlwIC0gd2V0aGVyIHdlIG5lZWQgdG8gc2hvdyB0aGUgZW1vamkgdG9vbHRpcCwgb3B0aW9uYWxcbiAgICogZW1vamlTaXplIC0gZW1vamkgc2l6ZSBpbiBwaXhlbHMsIG9wdGlvbmFsXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbW9qaSwgc2tpbiwgc2V0LCBuYXRpdmUsIGZhbGxiYWNrLCBlbW9qaVRvb2x0aXAsIGVtb2ppU2l6ZSkge1xuICAgIHRoaXMuX2Vtb2ppID0gZW1vamlcbiAgICB0aGlzLl9uYXRpdmUgPSBuYXRpdmVcbiAgICB0aGlzLl9za2luID0gc2tpblxuICAgIHRoaXMuX3NldCA9IHNldFxuICAgIHRoaXMuX2ZhbGxiYWNrID0gZmFsbGJhY2tcblxuICAgIHRoaXMuY2FuUmVuZGVyID0gdGhpcy5fY2FuUmVuZGVyKClcbiAgICB0aGlzLmNzc0NsYXNzID0gdGhpcy5fY3NzQ2xhc3MoKVxuICAgIHRoaXMuY3NzU3R5bGUgPSB0aGlzLl9jc3NTdHlsZShlbW9qaVNpemUpXG4gICAgdGhpcy5jb250ZW50ID0gdGhpcy5fY29udGVudCgpXG4gICAgdGhpcy50aXRsZSA9IGVtb2ppVG9vbHRpcCA9PT0gdHJ1ZSA/IGVtb2ppLnNob3J0X25hbWUgOiBudWxsXG5cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpXG4gIH1cblxuICBnZXRFbW9qaSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW1vamkuZ2V0U2tpbih0aGlzLl9za2luKVxuICB9XG5cbiAgX2NhblJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5faXNDdXN0b20oKSB8fCB0aGlzLl9pc05hdGl2ZSgpIHx8IHRoaXMuX2hhc0Vtb2ppKCkgfHwgdGhpcy5fZmFsbGJhY2tcbiAgICApXG4gIH1cblxuICBfY3NzQ2xhc3MoKSB7XG4gICAgcmV0dXJuIFsnZW1vamktc2V0LScgKyB0aGlzLl9zZXQsICdlbW9qaS10eXBlLScgKyB0aGlzLl9lbW9qaVR5cGUoKV1cbiAgfVxuXG4gIF9jc3NTdHlsZShlbW9qaVNpemUpIHtcbiAgICBsZXQgY3NzU3R5bGUgPSB7fVxuICAgIGlmICh0aGlzLl9pc0N1c3RvbSgpKSB7XG4gICAgICBjc3NTdHlsZSA9IHtcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyB0aGlzLmdldEVtb2ppKCkuX2RhdGEuaW1hZ2VVcmwgKyAnKScsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiAnMTAwJScsXG4gICAgICAgIHdpZHRoOiBlbW9qaVNpemUgKyAncHgnLFxuICAgICAgICBoZWlnaHQ6IGVtb2ppU2l6ZSArICdweCcsXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLl9oYXNFbW9qaSgpICYmICF0aGlzLl9pc05hdGl2ZSgpKSB7XG4gICAgICBjc3NTdHlsZSA9IHtcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiB0aGlzLmdldEVtb2ppKCkuZ2V0UG9zaXRpb24oKSxcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVtb2ppU2l6ZSkge1xuICAgICAgaWYgKHRoaXMuX2lzTmF0aXZlKCkpIHtcbiAgICAgICAgLy8gU2V0IGZvbnQtc2l6ZSBmb3IgbmF0aXZlIGVtb2ppLlxuICAgICAgICBjc3NTdHlsZSA9IE9iamVjdC5hc3NpZ24oY3NzU3R5bGUsIHtcbiAgICAgICAgICAvLyBmb250LXNpemUgaXMgdXNlZCBmb3IgbmF0aXZlIGVtb2ppIHdoaWNoIHdlIG5lZWRcbiAgICAgICAgICAvLyB0byBzY2FsZSB3aXRoIDAuOCBmYWN0b3IgdG8gaGF2ZSB0aGVtIGxvb2sgYXBwcm94aW1hdGVseVxuICAgICAgICAgIC8vIHRoZSBzYW1lIHNpemUgYXMgaW1hZ2UtYmFzZWQgZW1vamwuXG4gICAgICAgICAgZm9udFNpemU6IE1hdGgucm91bmQoZW1vamlTaXplICogMC44ICogMTApIC8gMTAgKyAncHgnLFxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU2V0IHdpZHRoL2hlaWdodCBmb3IgaW1hZ2UgZW1vamkuXG4gICAgICAgIGNzc1N0eWxlID0gT2JqZWN0LmFzc2lnbihjc3NTdHlsZSwge1xuICAgICAgICAgIHdpZHRoOiBlbW9qaVNpemUgKyAncHgnLFxuICAgICAgICAgIGhlaWdodDogZW1vamlTaXplICsgJ3B4JyxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNzc1N0eWxlXG4gIH1cblxuICBfY29udGVudCgpIHtcbiAgICBpZiAodGhpcy5faXNDdXN0b20oKSkge1xuICAgICAgcmV0dXJuICcnXG4gICAgfVxuICAgIGlmICh0aGlzLl9pc05hdGl2ZSgpKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRFbW9qaSgpLm5hdGl2ZVxuICAgIH1cbiAgICBpZiAodGhpcy5faGFzRW1vamkoKSkge1xuICAgICAgcmV0dXJuICcnXG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9mYWxsYmFjayA/IHRoaXMuX2ZhbGxiYWNrKHRoaXMuZ2V0RW1vamkoKSkgOiBudWxsXG4gIH1cblxuICBfaXNOYXRpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hdGl2ZVxuICB9XG5cbiAgX2lzQ3VzdG9tKCkge1xuICAgIHJldHVybiB0aGlzLmdldEVtb2ppKCkuY3VzdG9tXG4gIH1cblxuICBfaGFzRW1vamkoKSB7XG4gICAgaWYgKCF0aGlzLmdldEVtb2ppKCkuX2RhdGEpIHtcbiAgICAgIC8vIFJldHVybiBmYWxzZSBpZiB3ZSBoYXZlIG5vIGRhdGEuXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgY29uc3QgaGFzSW1hZ2UgPSB0aGlzLmdldEVtb2ppKCkuX2RhdGFbJ2hhc19pbWdfJyArIHRoaXMuX3NldF1cbiAgICBpZiAoaGFzSW1hZ2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gaGFzX2ltZ194eHggaW4gdGhlIGRhdGEsIHdlIGFyZSB3b3JraW5nIHdpdGhcbiAgICAgIC8vIHNwZWNpZmljIGRhdGEgZmlsZSwgbGlrZSBmYWNlYm9vay5qc29uLCBzbyB3ZSBhc3N1bWUgYWxsXG4gICAgICAvLyBlbW9qaXMgYXJlIGF2YWlsYWJsZSAodGhlIDpzZXQgc2V0dGluZyBmb3IgcGlja2VyIHNob3VsZFxuICAgICAgLy8gbWF0Y2ggdGhlIGRhdGEgZmlsZSkuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICAvLyBPdGhlcndpc2UsIHdlIGFyZSB1c2luZyBhbGwuanNvbiBhbmQgY2FuIHN3aXRjaCBiZXR3ZWVuIGRpZmZlcmVudFxuICAgIC8vIHNldHMgLSBpbiB0aGlzIGNhc2UgdGhlIGBoYXNfaW1nX3tzZXRfbmFtZX1gIGlzIGEgYm9vbGVhbiB0aGF0XG4gICAgLy8gaW5kaWNhdGVzIGlmIHRoZXJlIGlzIHN1Y2ggaW1hZ2Ugb3Igbm90IGZvciBhIGdpdmVuIHNldC5cbiAgICByZXR1cm4gaGFzSW1hZ2VcbiAgfVxuXG4gIF9lbW9qaVR5cGUoKSB7XG4gICAgaWYgKHRoaXMuX2lzQ3VzdG9tKCkpIHtcbiAgICAgIHJldHVybiAnY3VzdG9tJ1xuICAgIH1cbiAgICBpZiAodGhpcy5faXNOYXRpdmUoKSkge1xuICAgICAgcmV0dXJuICduYXRpdmUnXG4gICAgfVxuICAgIGlmICh0aGlzLl9oYXNFbW9qaSgpKSB7XG4gICAgICByZXR1cm4gJ2ltYWdlJ1xuICAgIH1cbiAgICByZXR1cm4gJ2ZhbGxiYWNrJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYW5pdGl6ZShlbW9qaSkge1xuICB2YXIge1xuICAgICAgbmFtZSxcbiAgICAgIHNob3J0X25hbWVzLFxuICAgICAgc2tpbl90b25lLFxuICAgICAgc2tpbl92YXJpYXRpb25zLFxuICAgICAgZW1vdGljb25zLFxuICAgICAgdW5pZmllZCxcbiAgICAgIGN1c3RvbSxcbiAgICAgIGltYWdlVXJsLFxuICAgIH0gPSBlbW9qaSxcbiAgICBpZCA9IGVtb2ppLmlkIHx8IHNob3J0X25hbWVzWzBdLFxuICAgIGNvbG9ucyA9IGA6JHtpZH06YFxuXG4gIGlmIChjdXN0b20pIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQsXG4gICAgICBuYW1lLFxuICAgICAgY29sb25zLFxuICAgICAgZW1vdGljb25zLFxuICAgICAgY3VzdG9tLFxuICAgICAgaW1hZ2VVcmwsXG4gICAgfVxuICB9XG5cbiAgaWYgKHNraW5fdG9uZSkge1xuICAgIGNvbG9ucyArPSBgOnNraW4tdG9uZS0ke3NraW5fdG9uZX06YFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpZCxcbiAgICBuYW1lLFxuICAgIGNvbG9ucyxcbiAgICBlbW90aWNvbnMsXG4gICAgdW5pZmllZDogdW5pZmllZC50b0xvd2VyQ2FzZSgpLFxuICAgIHNraW46IHNraW5fdG9uZSB8fCAoc2tpbl92YXJpYXRpb25zID8gMSA6IG51bGwpLFxuICAgIG5hdGl2ZTogdW5pZmllZFRvTmF0aXZlKHVuaWZpZWQpLFxuICB9XG59XG4iLCJpbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSdcblxuY29uc3QgREVGQVVMVFMgPSBbXG4gICcrMScsXG4gICdncmlubmluZycsXG4gICdraXNzaW5nX2hlYXJ0JyxcbiAgJ2hlYXJ0X2V5ZXMnLFxuICAnbGF1Z2hpbmcnLFxuICAnc3R1Y2tfb3V0X3Rvbmd1ZV93aW5raW5nX2V5ZScsXG4gICdzd2VhdF9zbWlsZScsXG4gICdqb3knLFxuICAnc2NyZWFtJyxcbiAgJ2Rpc2FwcG9pbnRlZCcsXG4gICd1bmFtdXNlZCcsXG4gICd3ZWFyeScsXG4gICdzb2InLFxuICAnc3VuZ2xhc3NlcycsXG4gICdoZWFydCcsXG4gICdwb29wJyxcbl1cblxubGV0IGZyZXF1ZW50bHksIGluaXRpYWxpemVkXG5sZXQgZGVmYXVsdHMgPSB7fVxuXG5mdW5jdGlvbiBpbml0KCkge1xuICBpbml0aWFsaXplZCA9IHRydWVcbiAgZnJlcXVlbnRseSA9IHN0b3JlLmdldCgnZnJlcXVlbnRseScpXG59XG5cbmZ1bmN0aW9uIGFkZChlbW9qaSkge1xuICBpZiAoIWluaXRpYWxpemVkKSBpbml0KClcbiAgdmFyIHsgaWQgfSA9IGVtb2ppXG5cbiAgZnJlcXVlbnRseSB8fCAoZnJlcXVlbnRseSA9IGRlZmF1bHRzKVxuICBmcmVxdWVudGx5W2lkXSB8fCAoZnJlcXVlbnRseVtpZF0gPSAwKVxuICBmcmVxdWVudGx5W2lkXSArPSAxXG5cbiAgc3RvcmUuc2V0KCdsYXN0JywgaWQpXG4gIHN0b3JlLnNldCgnZnJlcXVlbnRseScsIGZyZXF1ZW50bHkpXG59XG5cbmZ1bmN0aW9uIGdldChtYXhOdW1iZXIpIHtcbiAgaWYgKCFpbml0aWFsaXplZCkgaW5pdCgpXG4gIGlmICghZnJlcXVlbnRseSkge1xuICAgIGRlZmF1bHRzID0ge31cblxuICAgIGNvbnN0IHJlc3VsdCA9IFtdXG5cbiAgICBsZXQgZGVmYXVsdExlbmd0aCA9IE1hdGgubWluKG1heE51bWJlciwgREVGQVVMVFMubGVuZ3RoKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVmYXVsdExlbmd0aDsgaSsrKSB7XG4gICAgICBkZWZhdWx0c1tERUZBVUxUU1tpXV0gPSBkZWZhdWx0TGVuZ3RoIC0gaVxuICAgICAgcmVzdWx0LnB1c2goREVGQVVMVFNbaV0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgY29uc3QgcXVhbnRpdHkgPSBtYXhOdW1iZXJcbiAgY29uc3QgZnJlcXVlbnRseUtleXMgPSBbXVxuXG4gIGZvciAobGV0IGtleSBpbiBmcmVxdWVudGx5KSB7XG4gICAgaWYgKGZyZXF1ZW50bHkuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgZnJlcXVlbnRseUtleXMucHVzaChrZXkpXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc29ydGVkID0gZnJlcXVlbnRseUtleXNcbiAgICAuc29ydCgoYSwgYikgPT4gZnJlcXVlbnRseVthXSAtIGZyZXF1ZW50bHlbYl0pXG4gICAgLnJldmVyc2UoKVxuICBjb25zdCBzbGljZWQgPSBzb3J0ZWQuc2xpY2UoMCwgcXVhbnRpdHkpXG5cbiAgY29uc3QgbGFzdCA9IHN0b3JlLmdldCgnbGFzdCcpXG5cbiAgaWYgKGxhc3QgJiYgc2xpY2VkLmluZGV4T2YobGFzdCkgPT0gLTEpIHtcbiAgICBzbGljZWQucG9wKClcbiAgICBzbGljZWQucHVzaChsYXN0KVxuICB9XG5cbiAgcmV0dXJuIHNsaWNlZFxufVxuXG5leHBvcnQgZGVmYXVsdCB7IGFkZCwgZ2V0IH1cbiIsImltcG9ydCBzdHJpbmdGcm9tQ29kZVBvaW50IGZyb20gJy4uL3BvbHlmaWxscy9zdHJpbmdGcm9tQ29kZVBvaW50J1xuXG5mdW5jdGlvbiB1bmlmaWVkVG9OYXRpdmUodW5pZmllZCkge1xuICB2YXIgdW5pY29kZXMgPSB1bmlmaWVkLnNwbGl0KCctJyksXG4gICAgY29kZVBvaW50cyA9IHVuaWNvZGVzLm1hcCgodSkgPT4gYDB4JHt1fWApXG5cbiAgcmV0dXJuIHN0cmluZ0Zyb21Db2RlUG9pbnQuYXBwbHkobnVsbCwgY29kZVBvaW50cylcbn1cblxuZnVuY3Rpb24gdW5pcShhcnIpIHtcbiAgcmV0dXJuIGFyci5yZWR1Y2UoKGFjYywgaXRlbSkgPT4ge1xuICAgIGlmIChhY2MuaW5kZXhPZihpdGVtKSA9PT0gLTEpIHtcbiAgICAgIGFjYy5wdXNoKGl0ZW0pXG4gICAgfVxuICAgIHJldHVybiBhY2NcbiAgfSwgW10pXG59XG5cbmZ1bmN0aW9uIGludGVyc2VjdChhLCBiKSB7XG4gIGNvbnN0IHVuaXFBID0gdW5pcShhKVxuICBjb25zdCB1bmlxQiA9IHVuaXEoYilcblxuICByZXR1cm4gdW5pcUEuZmlsdGVyKChpdGVtKSA9PiB1bmlxQi5pbmRleE9mKGl0ZW0pID49IDApXG59XG5cbmZ1bmN0aW9uIGRlZXBNZXJnZShhLCBiKSB7XG4gIHZhciBvID0ge31cblxuICBmb3IgKGxldCBrZXkgaW4gYSkge1xuICAgIGxldCBvcmlnaW5hbFZhbHVlID0gYVtrZXldLFxuICAgICAgdmFsdWUgPSBvcmlnaW5hbFZhbHVlXG5cbiAgICBpZiAoYi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICB2YWx1ZSA9IGJba2V5XVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICB2YWx1ZSA9IGRlZXBNZXJnZShvcmlnaW5hbFZhbHVlLCB2YWx1ZSlcbiAgICB9XG5cbiAgICBvW2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgcmV0dXJuIG9cbn1cblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3NvbmljZG9lL21lYXN1cmUtc2Nyb2xsYmFyXG5mdW5jdGlvbiBtZWFzdXJlU2Nyb2xsYmFyKCkge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09ICd1bmRlZmluZWQnKSByZXR1cm4gMFxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gIGRpdi5zdHlsZS53aWR0aCA9ICcxMDBweCdcbiAgZGl2LnN0eWxlLmhlaWdodCA9ICcxMDBweCdcbiAgZGl2LnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCdcbiAgZGl2LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuICBkaXYuc3R5bGUudG9wID0gJy05OTk5cHgnXG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpXG4gIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gZGl2Lm9mZnNldFdpZHRoIC0gZGl2LmNsaWVudFdpZHRoXG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZGl2KVxuXG4gIHJldHVybiBzY3JvbGxiYXJXaWR0aFxufVxuXG5leHBvcnQgeyB1bmlxLCBpbnRlcnNlY3QsIGRlZXBNZXJnZSwgdW5pZmllZFRvTmF0aXZlLCBtZWFzdXJlU2Nyb2xsYmFyIH1cbiIsImNvbnN0IEVtb2ppUHJvcHMgPSB7XG4gIG5hdGl2ZToge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gIH0sXG4gIHRvb2x0aXA6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICB9LFxuICBmYWxsYmFjazoge1xuICAgIHR5cGU6IEZ1bmN0aW9uLFxuICB9LFxuICBza2luOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDEsXG4gIH0sXG4gIHNldDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnYXBwbGUnLFxuICB9LFxuICBlbW9qaToge1xuICAgIHR5cGU6IFtTdHJpbmcsIE9iamVjdF0sXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH0sXG4gIHNpemU6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogbnVsbCxcbiAgfSxcbn1cblxuY29uc3QgUGlja2VyUHJvcHMgPSB7XG4gIHBlckxpbmU6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogOSxcbiAgfSxcbiAgbWF4U2VhcmNoUmVzdWx0czoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiA3NSxcbiAgfSxcbiAgZW1vamlTaXplOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDI0LFxuICB9LFxuICB0aXRsZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnRW1vamkgTWFydOKEoicsXG4gIH0sXG4gIGVtb2ppOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICdkZXBhcnRtZW50X3N0b3JlJyxcbiAgfSxcbiAgY29sb3I6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJyNhZTY1YzUnLFxuICB9LFxuICBzZXQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJ2FwcGxlJyxcbiAgfSxcbiAgc2tpbjoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiBudWxsLFxuICB9LFxuICBkZWZhdWx0U2tpbjoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAxLFxuICB9LFxuICBuYXRpdmU6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICB9LFxuICBlbW9qaVRvb2x0aXA6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICB9LFxuICBhdXRvRm9jdXM6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICB9LFxuICBpMThuOiB7XG4gICAgdHlwZTogT2JqZWN0LFxuICAgIGRlZmF1bHQoKSB7XG4gICAgICByZXR1cm4ge31cbiAgICB9LFxuICB9LFxuICBzaG93UHJldmlldzoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogdHJ1ZSxcbiAgfSxcbiAgc2hvd1NlYXJjaDoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogdHJ1ZSxcbiAgfSxcbiAgc2hvd0NhdGVnb3JpZXM6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IHRydWUsXG4gIH0sXG4gIHNob3dTa2luVG9uZXM6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IHRydWUsXG4gIH0sXG4gIGluZmluaXRlU2Nyb2xsOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiB0cnVlLFxuICB9LFxuICBwaWNrZXJTdHlsZXM6IHtcbiAgICB0eXBlOiBPYmplY3QsXG4gICAgZGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH0sXG4gIH0sXG59XG5cbmV4cG9ydCB7IEVtb2ppUHJvcHMsIFBpY2tlclByb3BzIH1cbiIsInZhciBOQU1FU1BBQ0UgPSAnZW1vamktbWFydCdcblxuY29uc3QgX0pTT04gPSBKU09OXG5cbnZhciBpc0xvY2FsU3RvcmFnZVN1cHBvcnRlZCA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdsb2NhbFN0b3JhZ2UnIGluIHdpbmRvd1xuXG5sZXQgZ2V0dGVyXG5sZXQgc2V0dGVyXG5cbmZ1bmN0aW9uIHNldEhhbmRsZXJzKGhhbmRsZXJzKSB7XG4gIGhhbmRsZXJzIHx8IChoYW5kbGVycyA9IHt9KVxuXG4gIGdldHRlciA9IGhhbmRsZXJzLmdldHRlclxuICBzZXR0ZXIgPSBoYW5kbGVycy5zZXR0ZXJcbn1cblxuZnVuY3Rpb24gc2V0TmFtZXNwYWNlKG5hbWVzcGFjZSkge1xuICBOQU1FU1BBQ0UgPSBuYW1lc3BhY2Vcbn1cblxuZnVuY3Rpb24gdXBkYXRlKHN0YXRlKSB7XG4gIGZvciAobGV0IGtleSBpbiBzdGF0ZSkge1xuICAgIGxldCB2YWx1ZSA9IHN0YXRlW2tleV1cbiAgICBzZXQoa2V5LCB2YWx1ZSlcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuICBpZiAoc2V0dGVyKSB7XG4gICAgc2V0dGVyKGtleSwgdmFsdWUpXG4gIH0gZWxzZSB7XG4gICAgaWYgKCFpc0xvY2FsU3RvcmFnZVN1cHBvcnRlZCkgcmV0dXJuXG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2VbYCR7TkFNRVNQQUNFfS4ke2tleX1gXSA9IF9KU09OLnN0cmluZ2lmeSh2YWx1ZSlcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldChrZXkpIHtcbiAgaWYgKGdldHRlcikge1xuICAgIHJldHVybiBnZXR0ZXIoa2V5KVxuICB9IGVsc2Uge1xuICAgIGlmICghaXNMb2NhbFN0b3JhZ2VTdXBwb3J0ZWQpIHJldHVyblxuICAgIHRyeSB7XG4gICAgICB2YXIgdmFsdWUgPSB3aW5kb3cubG9jYWxTdG9yYWdlW2Ake05BTUVTUEFDRX0uJHtrZXl9YF1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHZhbHVlKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7IHVwZGF0ZSwgc2V0LCBnZXQsIHNldE5hbWVzcGFjZSwgc2V0SGFuZGxlcnMgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3Z1ZV9fOyJdLCJzb3VyY2VSb290IjoiIn0=