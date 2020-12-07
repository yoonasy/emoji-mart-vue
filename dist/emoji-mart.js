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
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/***/ (function(module) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/***/ (function(module) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/***/ (function(module) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ (function(module) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/***/ (function(module) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/***/ (function(module) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread.js":
/*!*************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ (function(module) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/Emoji.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/Emoji.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_shared_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/shared-props */ "./src/utils/shared-props.js");
/* harmony import */ var _utils_emoji_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/emoji-data */ "./src/utils/emoji-data.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = ((0,vue__WEBPACK_IMPORTED_MODULE_3__.defineComponent)({
  name: 'Emoji',
  props: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, _utils_shared_props__WEBPACK_IMPORTED_MODULE_1__.EmojiProps, {
    data: {
      type: Object,
      required: true
    }
  }),
  emits: ['mouseenter', 'mouseleave', 'click'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var emojiObject = (0,vue__WEBPACK_IMPORTED_MODULE_3__.computed)(function () {
      return typeof props.emoji == 'string' ? props.data.findEmoji(props.emoji) : props.emoji;
    });
    var view = (0,vue__WEBPACK_IMPORTED_MODULE_3__.computed)(function () {
      return new _utils_emoji_data__WEBPACK_IMPORTED_MODULE_2__.EmojiView(emojiObject.value, props.skin, props.set, props.native, props.fallback, props.tooltip, props.size);
    });
    var sanitizedData = (0,vue__WEBPACK_IMPORTED_MODULE_3__.computed)(function () {
      return emojiObject.value._sanitized;
    });
    var title = (0,vue__WEBPACK_IMPORTED_MODULE_3__.computed)(function () {
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/Picker.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/Picker.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vendor_raf_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vendor/raf-polyfill */ "./src/vendor/raf-polyfill.js");
/* harmony import */ var _vendor_raf_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vendor_raf_polyfill__WEBPACK_IMPORTED_MODULE_2__);
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
/* harmony default export */ __webpack_exports__["default"] = ((0,vue__WEBPACK_IMPORTED_MODULE_13__.defineComponent)({
  name: 'EmojiPicker',
  props: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, _utils_shared_props__WEBPACK_IMPORTED_MODULE_6__.PickerProps, {
    data: {
      type: Object,
      required: true
    }
  }),
  components: {
    Anchors: _anchors__WEBPACK_IMPORTED_MODULE_7__.default,
    Category: _category__WEBPACK_IMPORTED_MODULE_8__.default,
    Preview: _preview__WEBPACK_IMPORTED_MODULE_9__.default,
    Search: _search__WEBPACK_IMPORTED_MODULE_10__.default,
    DynamicScroller: vue3_virtual_scroller__WEBPACK_IMPORTED_MODULE_11__.DynamicScroller,
    DynamicScrollerItem: vue3_virtual_scroller__WEBPACK_IMPORTED_MODULE_11__.DynamicScrollerItem
  },
  emits: ['select', 'skin-change'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var skipScrollUpdate = false;

    var categories = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(props.data.categories());

    var previewEmoji = (0,vue__WEBPACK_IMPORTED_MODULE_13__.ref)(null);
    var searchEmojis = (0,vue__WEBPACK_IMPORTED_MODULE_13__.ref)(null);
    var dynScrollerRef = (0,vue__WEBPACK_IMPORTED_MODULE_13__.ref)(null);
    categories = categories.filter(function (category) {
      return category.emojis.length > 0;
    });
    categories[0].first = true;
    Object.freeze(categories);
    var activeCategory = (0,vue__WEBPACK_IMPORTED_MODULE_13__.ref)(categories[0]);
    var calculateWidth = (0,vue__WEBPACK_IMPORTED_MODULE_13__.computed)(function () {
      return props.perLine * (props.emojiSize + 12) + 12 + 2 + (0,_utils__WEBPACK_IMPORTED_MODULE_5__.measureScrollbar)();
    });
    var activeSkin = (0,vue__WEBPACK_IMPORTED_MODULE_13__.computed)(function () {
      return props.skin || _utils_store__WEBPACK_IMPORTED_MODULE_3__.default.get('skin') || props.defaultSkin;
    });
    var customStyles = (0,vue__WEBPACK_IMPORTED_MODULE_13__.computed)(function () {
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({
        width: calculateWidth.value + 'px'
      }, props.pickerStyles);
    });
    var emojiProps = (0,vue__WEBPACK_IMPORTED_MODULE_13__.computed)(function () {
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
    var skinProps = (0,vue__WEBPACK_IMPORTED_MODULE_13__.computed)(function () {
      return {
        skin: activeSkin.value
      };
    });
    var mergedI18n = (0,vue__WEBPACK_IMPORTED_MODULE_13__.computed)(function () {
      return Object.freeze((0,_utils__WEBPACK_IMPORTED_MODULE_5__.deepMerge)(I18N, props.i18n));
    });
    var scrollerCategories = (0,vue__WEBPACK_IMPORTED_MODULE_13__.computed)(function () {
      var id = 0;
      return categories.map(function (category) {
        return {
          id: id++,
          category: category,
          show: !searchEmojis.value && (props.infiniteScroll || String(category) === String(activeCategory.value)),
          mergedI18n: mergedI18n.value,
          data: props.data,
          emojisLength: category.emojis.length,
          emojiProps: emojiProps.value
        };
      });
    });
    var idleEmoji = (0,vue__WEBPACK_IMPORTED_MODULE_13__.computed)(function () {
      return props.data.emoji(props.emoji); // try {
      //   return props.data.emoji(props.emoji)
      // } catch (e) {
      //   console.error(
      //     'Default preview emoji `' +
      //     props.emoji +
      //     '` is not available, check the Picker `emoji` property',
      //   )
      //   return props.data.firstEmoji()
      // }
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
      var i = categories.indexOf(category);

      if (dynScrollerRef.value) {
        dynScrollerRef.value.scrollToItem(i);
      }

      activeCategory.value = categories[i];
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
      _utils_frequently__WEBPACK_IMPORTED_MODULE_4__.default.add(emoji);
    };

    var onSkinChange = function onSkinChange(skin) {
      activeSkin.value = skin;
      _utils_store__WEBPACK_IMPORTED_MODULE_3__.default.update({
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/StaticPicker.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/StaticPicker.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vendor_raf_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vendor/raf-polyfill */ "./src/vendor/raf-polyfill.js");
/* harmony import */ var _vendor_raf_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vendor_raf_polyfill__WEBPACK_IMPORTED_MODULE_2__);
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
/* harmony default export */ __webpack_exports__["default"] = ((0,vue__WEBPACK_IMPORTED_MODULE_11__.defineComponent)({
  name: 'EmojiStaticPicker',
  components: {
    Anchors: _anchors_vue__WEBPACK_IMPORTED_MODULE_7__.default,
    Category: _category_vue__WEBPACK_IMPORTED_MODULE_8__.default,
    Preview: _preview_vue__WEBPACK_IMPORTED_MODULE_9__.default,
    Search: _search_vue__WEBPACK_IMPORTED_MODULE_10__.default,
    DynamicScroller: vue3_virtual_scroller__WEBPACK_IMPORTED_MODULE_12__.DynamicScroller,
    DynamicScrollerItem: vue3_virtual_scroller__WEBPACK_IMPORTED_MODULE_12__.DynamicScrollerItem
  },
  props: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, _utils_shared_props__WEBPACK_IMPORTED_MODULE_6__.PickerProps, {
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
    Object.freeze(this.categories);
    var scrollRef = (0,vue__WEBPACK_IMPORTED_MODULE_11__.ref)(null);
    var categoriesRef = (0,vue__WEBPACK_IMPORTED_MODULE_11__.ref)(null);
    var activeSkin = (0,vue__WEBPACK_IMPORTED_MODULE_11__.ref)(props.skin || _utils_store__WEBPACK_IMPORTED_MODULE_3__.default.get('skin') || props.defaultSkin);
    var activeCategory = (0,vue__WEBPACK_IMPORTED_MODULE_11__.ref)(categories[0]);
    var previewEmoji = (0,vue__WEBPACK_IMPORTED_MODULE_11__.ref)(null);
    var searchEmojis = (0,vue__WEBPACK_IMPORTED_MODULE_11__.ref)(null);
    var calculateWidth = (0,vue__WEBPACK_IMPORTED_MODULE_11__.computed)(function () {
      return props.perLine * (props.emojiSize + 12) + 12 + 2 + (0,_utils__WEBPACK_IMPORTED_MODULE_5__.measureScrollbar)();
    });
    var emojiProps = (0,vue__WEBPACK_IMPORTED_MODULE_11__.computed)(function () {
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
    var skinProps = (0,vue__WEBPACK_IMPORTED_MODULE_11__.computed)(function () {
      return {
        skin: activeSkin.value
      };
    });
    var customStyles = (0,vue__WEBPACK_IMPORTED_MODULE_11__.computed)(function () {
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({
        width: calculateWidth.value + 'px'
      }, props.pickerStyles);
    });
    var filteredCategories = (0,vue__WEBPACK_IMPORTED_MODULE_11__.computed)(function () {
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
    var idleEmoji = (0,vue__WEBPACK_IMPORTED_MODULE_11__.computed)(function () {
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
      _utils_frequently__WEBPACK_IMPORTED_MODULE_4__.default.add(emoji);
    };

    var onSkinChange = function onSkinChange(skin) {
      activeSkin.value = skin;
      _utils_store__WEBPACK_IMPORTED_MODULE_3__.default.update({
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
      mergedI18n: function mergedI18n() {
        return Object.freeze((0,_utils__WEBPACK_IMPORTED_MODULE_5__.deepMerge)(I18N, props.i18n));
      },
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/anchors.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/anchors.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _svgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../svgs */ "./src/svgs/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ((0,vue__WEBPACK_IMPORTED_MODULE_1__.defineComponent)({
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
      svgs: _svgs__WEBPACK_IMPORTED_MODULE_0__.default
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/category.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************!*
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/category.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_emoji_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/emoji-data */ "./src/utils/emoji-data.js");
/* harmony import */ var _Emoji__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Emoji */ "./src/components/Emoji.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = ((0,vue__WEBPACK_IMPORTED_MODULE_2__.defineComponent)({
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
    Emoji: _Emoji__WEBPACK_IMPORTED_MODULE_1__.default
  },
  setup: function setup(props) {
    var isVisible = (0,vue__WEBPACK_IMPORTED_MODULE_2__.computed)(function () {
      return !!props.emojis;
    });
    var isSearch = (0,vue__WEBPACK_IMPORTED_MODULE_2__.computed)(function () {
      return props.name === 'Search';
    });
    var hasResults = (0,vue__WEBPACK_IMPORTED_MODULE_2__.computed)(function () {
      return props.emojis.length > 0;
    });
    var emojiObjects = (0,vue__WEBPACK_IMPORTED_MODULE_2__.computed)(function () {
      return props.emojis.map(function (emoji) {
        var emojiObject = emoji;
        var emojiView = new _utils_emoji_data__WEBPACK_IMPORTED_MODULE_0__.EmojiView(emoji, props.emojiProps.skin, props.emojiProps.set, props.emojiProps.native, props.emojiProps.fallback, props.emojiProps.emojiTooltip, props.emojiProps.emojiSize);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/preview.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/preview.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Emoji__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Emoji */ "./src/components/Emoji.vue");
/* harmony import */ var _skins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skins */ "./src/components/skins.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = ((0,vue__WEBPACK_IMPORTED_MODULE_2__.defineComponent)({
  name: 'EmojiPreview',
  components: {
    Emoji: _Emoji__WEBPACK_IMPORTED_MODULE_0__.default,
    Skins: _skins__WEBPACK_IMPORTED_MODULE_1__.default
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
    var emojiData = (0,vue__WEBPACK_IMPORTED_MODULE_2__.computed)(function () {
      return props.emoji ? props.emoji : {};
    });
    return {
      emojiData: emojiData,
      emojiShortNames: (0,vue__WEBPACK_IMPORTED_MODULE_2__.computed)(function () {
        return emojiData.value.short_names;
      }),
      emojiEmoticons: (0,vue__WEBPACK_IMPORTED_MODULE_2__.computed)(function () {
        return emojiData.emoticons;
      })
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/search.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/search.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
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
    var value = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(value, function () {
      return emit('search', value.value);
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      if (!props.autoFocus) return;
      var $el = (0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)() && (0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)().proxy.$el || null;
      if (!$el) return;
      $el.querySelector('input').focus();
    });
    return {
      value: value,
      clear: function clear() {
        return value.value = '';
      },
      emojiIndex: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
        return props.data;
      })
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/skins.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/skins.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'EmojiSkins',
  props: {
    skin: {
      type: Number,
      required: true
    }
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var opened = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/Emoji.vue?vue&type=template&id=534ad946":
/*!************************************************************************************************************************************************************************************************************************************************************************!*
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/Emoji.vue?vue&type=template&id=534ad946 ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.view.canRender ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", {
    key: 0,
    title: _ctx.view.title,
    "data-title": _ctx.title,
    class: "emoji-mart-emoji",
    onMouseenter: _cache[1] || (_cache[1] = function () {
      return _ctx.onMouseEnter && _ctx.onMouseEnter.apply(_ctx, arguments);
    }),
    onMouseleave: _cache[2] || (_cache[2] = function () {
      return _ctx.onMouseLeave && _ctx.onMouseLeave.apply(_ctx, arguments);
    }),
    onClick: _cache[3] || (_cache[3] = function () {
      return _ctx.onClick && _ctx.onClick.apply(_ctx, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
    class: _ctx.view.cssClass,
    style: _ctx.view.cssStyle
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.view.content), 7
  /* TEXT, CLASS, STYLE */
  )], 40
  /* PROPS, HYDRATE_EVENTS */
  , ["title", "data-title"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/Picker.vue?vue&type=template&id=d16e9084":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/Picker.vue?vue&type=template&id=d16e9084 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  key: 0,
  class: "emoji-mart-bar emoji-mart-bar-anchors"
};
var _hoisted_2 = {
  key: 0,
  class: "emoji-mart-bar emoji-mart-bar-preview"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_anchors = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("anchors");

  var _component_search = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("search");

  var _component_category = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("category");

  var _component_Category = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Category");

  var _component_DynamicScrollerItem = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DynamicScrollerItem");

  var _component_DynamicScroller = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DynamicScroller");

  var _component_preview = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("preview");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
    class: "emoji-mart",
    style: _ctx.customStyles
  }, [_ctx.showCategories ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_anchors, {
    data: _ctx.data,
    i18n: _ctx.mergedI18n,
    color: _ctx.color,
    categories: _ctx.categories,
    "active-category": _ctx.activeCategory,
    onClick: _ctx.onAnchorClick
  }, null, 8
  /* PROPS */
  , ["data", "i18n", "color", "categories", "active-category", "onClick"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "searchTemplate", {
    data: _ctx.data,
    i18n: _ctx.i18n,
    autoFocus: _ctx.autoFocus,
    onSearch: _ctx.onSearch
  }, function () {
    return [_ctx.showSearch ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_search, {
      key: 0,
      ref: "search",
      data: _ctx.data,
      i18n: _ctx.mergedI18n,
      "auto-focus": _ctx.autoFocus,
      "on-search": _ctx.onSearch,
      onSearch: _ctx.onSearch
    }, null, 8
    /* PROPS */
    , ["data", "i18n", "auto-focus", "on-search", "onSearch"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_category, {
    class: "emoji-mart-search-results",
    data: _ctx.data,
    i18n: _ctx.mergedI18n,
    id: "search",
    name: "Search",
    emojis: _ctx.searchEmojis,
    "emoji-props": _ctx.emojiProps
  }, null, 8
  /* PROPS */
  , ["data", "i18n", "emojis", "emoji-props"]), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, _ctx.searchEmojis]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DynamicScroller, {
    ref: "dynScrollerRef",
    items: _ctx.scrollerCategories,
    "min-item-size": 60,
    class: "scroller",
    buffer: 400,
    "key-field": "id",
    "emit-update": true,
    onUpdate: _ctx.onScrollUpdate
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
      var item = _ref.item,
          active = _ref.active,
          index = _ref.index;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DynamicScrollerItem, {
        item: item,
        active: active,
        "data-index": index
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Category, {
            ref: "categories",
            i18n: item.mergedI18n,
            id: item.category.id,
            name: item.category.name,
            emojis: item.category.emojis,
            "emoji-props": item.emojiProps
          }, null, 8
          /* PROPS */
          , ["i18n", "id", "name", "emojis", "emoji-props"]), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, true]])];
        }),
        _: 2
        /* DYNAMIC */

      }, 1032
      /* PROPS, DYNAMIC_SLOTS */
      , ["item", "active", "data-index"])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["items", "onUpdate"]), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !_ctx.searchEmojis]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "previewTemplate", {
    data: _ctx.data,
    title: _ctx.title,
    emoji: _ctx.previewEmoji,
    idleEmoji: _ctx.idleEmoji,
    showSkinTones: _ctx.showSkinTones,
    emojiProps: _ctx.emojiProps,
    skinProps: _ctx.skinProps,
    onSkinChange: _ctx.onSkinChange
  }, function () {
    return [_ctx.showPreview ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_preview, {
      data: _ctx.data,
      title: _ctx.title,
      emoji: _ctx.previewEmoji,
      "idle-emoji": _ctx.idleEmoji,
      "show-skin-tones": _ctx.showSkinTones,
      "emoji-props": _ctx.emojiProps,
      "skin-props": _ctx.skinProps,
      "on-skin-change": _ctx.onSkinChange
    }, null, 8
    /* PROPS */
    , ["data", "title", "emoji", "idle-emoji", "show-skin-tones", "emoji-props", "skin-props", "on-skin-change"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
  })], 4
  /* STYLE */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/StaticPicker.vue?vue&type=template&id=2b16c268":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/StaticPicker.vue?vue&type=template&id=2b16c268 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  key: 0,
  class: "emoji-mart-bar emoji-mart-bar-anchors"
};
var _hoisted_2 = {
  key: 0,
  class: "emoji-mart-bar emoji-mart-bar-preview"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_anchors = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("anchors");

  var _component_search = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("search");

  var _component_category = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("category");

  var _component_preview = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("preview");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
    class: "emoji-mart emoji-mart-static",
    style: _ctx.customStyles
  }, [_ctx.showCategories ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_anchors, {
    data: _ctx.data,
    i18n: _ctx.mergedI18n,
    color: _ctx.color,
    categories: _ctx.categories,
    "active-category": _ctx.activeCategory,
    onClick: _ctx.onAnchorClick
  }, null, 8
  /* PROPS */
  , ["data", "i18n", "color", "categories", "active-category", "onClick"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "searchTemplate", {
    data: _ctx.data,
    i18n: _ctx.i18n,
    autoFocus: _ctx.autoFocus,
    onSearch: _ctx.onSearch
  }, function () {
    return [_ctx.showSearch ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_search, {
      key: 0,
      ref: "search",
      data: _ctx.data,
      i18n: _ctx.mergedI18n,
      "auto-focus": _ctx.autoFocus,
      "on-search": _ctx.onSearch,
      onSearch: _ctx.onSearch
    }, null, 8
    /* PROPS */
    , ["data", "i18n", "auto-focus", "on-search", "onSearch"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    class: "emoji-mart-scroll",
    ref: "scrollRef",
    onScroll: _cache[1] || (_cache[1] = function () {
      return _ctx.onScroll && _ctx.onScroll.apply(_ctx, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_category, {
    data: _ctx.data,
    i18n: _ctx.mergedI18n,
    id: "search",
    name: "Search",
    emojis: _ctx.searchEmojis,
    "emoji-props": _ctx.emojiProps
  }, null, 8
  /* PROPS */
  , ["data", "i18n", "emojis", "emoji-props"]), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, _ctx.searchEmojis]]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.filteredCategories, function (category) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_category, {
      ref: "categories",
      key: category.id,
      data: _ctx.data,
      i18n: _ctx.mergedI18n,
      id: category.id,
      name: category.name,
      emojis: category.emojis,
      "emoji-props": _ctx.emojiProps
    }, null, 8
    /* PROPS */
    , ["data", "i18n", "id", "name", "emojis", "emoji-props"])), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !_ctx.searchEmojis && (_ctx.infiniteScroll || category === _ctx.activeCategory)]]);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "previewTemplate", {
    data: _ctx.data,
    title: _ctx.title,
    emoji: _ctx.previewEmoji,
    idleEmoji: _ctx.idleEmoji,
    showSkinTones: _ctx.showSkinTones,
    emojiProps: _ctx.emojiProps,
    skinProps: _ctx.skinProps,
    onSkinChange: _ctx.onSkinChange
  }, function () {
    return [_ctx.showPreview ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_preview, {
      data: _ctx.data,
      title: _ctx.title,
      emoji: _ctx.previewEmoji,
      "idle-emoji": _ctx.idleEmoji,
      "show-skin-tones": _ctx.showSkinTones,
      "emoji-props": _ctx.emojiProps,
      "skin-props": _ctx.skinProps,
      "on-skin-change": _ctx.onSkinChange
    }, null, 8
    /* PROPS */
    , ["data", "title", "emoji", "idle-emoji", "show-skin-tones", "emoji-props", "skin-props", "on-skin-change"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
  })], 4
  /* STYLE */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/anchors.vue?vue&type=template&id=51188104":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/anchors.vue?vue&type=template&id=51188104 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  class: "emoji-mart-anchors"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.categories, function (category) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", {
      key: category.id,
      class: {
        'emoji-mart-anchor': true,
        'emoji-mart-anchor-selected': category.id === _ctx.activeCategory.id
      },
      style: {
        'color': category.id === _ctx.activeCategory.id ? _ctx.color : ''
      },
      "data-title": _ctx.i18n.categories[category.id],
      onClick: function onClick($event) {
        return _ctx.$emit('click', category);
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
      innerHTML: _ctx.svgs[category.id]
    }, null, 8
    /* PROPS */
    , ["innerHTML"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
      class: "emoji-mart-anchor-bar",
      style: {
        backgroundColor: _ctx.color
      }
    }, null, 4
    /* STYLE */
    )], 14
    /* CLASS, STYLE, PROPS */
    , ["data-title", "onClick"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/category.vue?vue&type=template&id=376cda0e":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/category.vue?vue&type=template&id=376cda0e ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  class: "emoji-mart-category-label"
};
var _hoisted_2 = {
  key: 0
};
var _hoisted_3 = {
  class: "emoji-mart-no-results-label"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_emoji = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("emoji");

  return _ctx.isVisible && (_ctx.isSearch || _ctx.hasResults) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
    key: 0,
    class: {
      'emoji-mart-category': true,
      'emoji-mart-no-results': !_ctx.hasResults
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.i18n.categories[_ctx.id]), 1
  /* TEXT */
  )]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.emojiObjects, function (_ref) {
    var emojiObject = _ref.emojiObject,
        emojiView = _ref.emojiView;
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [emojiView.canRender ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", {
      key: 0,
      "data-title": emojiObject.short_name,
      title: emojiView.title,
      class: "emoji-mart-emoji",
      onMouseenter: function onMouseenter($event) {
        return _ctx.emojiProps.onEnter(emojiView.getEmoji());
      },
      onMouseleave: function onMouseleave($event) {
        return _ctx.emojiProps.onLeave(emojiView.getEmoji());
      },
      onClick: function onClick($event) {
        return _ctx.emojiProps.onClick(emojiView.getEmoji());
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
      class: emojiView.cssClass,
      style: emojiView.cssStyle
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(emojiView.content), 7
    /* TEXT, CLASS, STYLE */
    )], 40
    /* PROPS, HYDRATE_EVENTS */
    , ["data-title", "title", "onMouseenter", "onMouseleave", "onClick"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
    /* STABLE_FRAGMENT */
    );
  }), 256
  /* UNKEYED_FRAGMENT */
  )), !_ctx.hasResults && _ctx.data ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_emoji, {
    data: _ctx.data,
    emoji: "sleuth_or_spy",
    native: _ctx.emojiProps.native,
    skin: _ctx.emojiProps.skin,
    set: _ctx.emojiProps.set
  }, null, 8
  /* PROPS */
  , ["data", "native", "skin", "set"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.i18n.notfound), 1
  /* TEXT */
  )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/preview.vue?vue&type=template&id=35056c30":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/preview.vue?vue&type=template&id=35056c30 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  class: "emoji-mart-preview"
};
var _hoisted_2 = {
  class: "emoji-mart-preview-emoji"
};
var _hoisted_3 = {
  class: "emoji-mart-preview-data"
};
var _hoisted_4 = {
  class: "emoji-mart-preview-name"
};
var _hoisted_5 = {
  class: "emoji-mart-preview-shortnames"
};
var _hoisted_6 = {
  class: "emoji-mart-preview-emoticons"
};
var _hoisted_7 = {
  class: "emoji-mart-preview-emoji"
};
var _hoisted_8 = {
  class: "emoji-mart-preview-data"
};
var _hoisted_9 = {
  class: "emoji-mart-title-label"
};
var _hoisted_10 = {
  key: 0,
  class: "emoji-mart-preview-skins"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_emoji = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("emoji");

  var _component_skins = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("skins");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [_ctx.emoji ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_emoji, {
    data: _ctx.data,
    emoji: _ctx.emoji,
    native: _ctx.emojiProps.native,
    skin: _ctx.emojiProps.skin,
    set: _ctx.emojiProps.set
  }, null, 8
  /* PROPS */
  , ["data", "emoji", "native", "skin", "set"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.emoji.name), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.emojiShortNames, function (shortName) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", {
      key: shortName,
      class: "emoji-mart-preview-shortname"
    }, ":" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(shortName) + ":", 1
    /* TEXT */
    );
  }), 128
  /* KEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.emojiEmoticons, function (emoticon) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", {
      key: emoticon,
      class: "emoji-mart-preview-emoticon"
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(emoticon), 1
    /* TEXT */
    );
  }), 128
  /* KEYED_FRAGMENT */
  ))])])], 64
  /* STABLE_FRAGMENT */
  )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_emoji, {
    data: _ctx.data,
    emoji: _ctx.idleEmoji,
    native: _ctx.emojiProps.native,
    skin: _ctx.emojiProps.skin,
    set: _ctx.emojiProps.set
  }, null, 8
  /* PROPS */
  , ["data", "emoji", "native", "skin", "set"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.title), 1
  /* TEXT */
  )]), _ctx.showSkinTones ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_skins, {
    skin: _ctx.skinProps.skin,
    onChange: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.onSkinChange($event);
    })
  }, null, 8
  /* PROPS */
  , ["skin"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
  /* STABLE_FRAGMENT */
  ))]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/search.vue?vue&type=template&id=4ad41bb8":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/search.vue?vue&type=template&id=4ad41bb8 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  class: "emoji-mart-search"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "text",
    placeholder: _ctx.i18n.search,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return _ctx.value = $event;
    })
  }, null, 8
  /* PROPS */
  , ["placeholder"]), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.value]])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/skins.vue?vue&type=template&id=1c614894":
/*!************************************************************************************************************************************************************************************************************************************************************************!*
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/skins.vue?vue&type=template&id=1c614894 ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
    class: {
      'emoji-mart-skin-swatches': true,
      'emoji-mart-skin-swatches-opened': _ctx.opened
    }
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(6, function (skinTone) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
      key: skinTone,
      class: {
        'emoji-mart-skin-swatch': true,
        'emoji-mart-skin-swatch-selected': _ctx.skin === skinTone
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
      class: 'emoji-mart-skin emoji-mart-skin-tone-' + skinTone,
      onClick: function onClick($event) {
        return _ctx.onClick(skinTone);
      }
    }, null, 10
    /* CLASS, PROPS */
    , ["onClick"])], 2
    /* CLASS */
    );
  }), 64
  /* STABLE_FRAGMENT */
  ))], 2
  /* CLASS */
  );
}

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Anchors": function() { return /* reexport safe */ _anchors_vue__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "Category": function() { return /* reexport safe */ _category_vue__WEBPACK_IMPORTED_MODULE_1__.default; },
/* harmony export */   "Preview": function() { return /* reexport safe */ _preview_vue__WEBPACK_IMPORTED_MODULE_2__.default; },
/* harmony export */   "Search": function() { return /* reexport safe */ _search_vue__WEBPACK_IMPORTED_MODULE_3__.default; },
/* harmony export */   "Skins": function() { return /* reexport safe */ _skins_vue__WEBPACK_IMPORTED_MODULE_4__.default; },
/* harmony export */   "Emoji": function() { return /* reexport safe */ _Emoji_vue__WEBPACK_IMPORTED_MODULE_5__.default; },
/* harmony export */   "Picker": function() { return /* reexport safe */ _Picker_vue__WEBPACK_IMPORTED_MODULE_6__.default; },
/* harmony export */   "StaticPicker": function() { return /* reexport safe */ _StaticPicker_vue__WEBPACK_IMPORTED_MODULE_7__.default; }
/* harmony export */ });
/* harmony import */ var _anchors_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anchors.vue */ "./src/components/anchors.vue");
/* harmony import */ var _category_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.vue */ "./src/components/category.vue");
/* harmony import */ var _preview_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preview.vue */ "./src/components/preview.vue");
/* harmony import */ var _search_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.vue */ "./src/components/search.vue");
/* harmony import */ var _skins_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skins.vue */ "./src/components/skins.vue");
/* harmony import */ var _Emoji_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Emoji.vue */ "./src/components/Emoji.vue");
/* harmony import */ var _Picker_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Picker.vue */ "./src/components/Picker.vue");
/* harmony import */ var _StaticPicker_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./StaticPicker.vue */ "./src/components/StaticPicker.vue");









/***/ }),

/***/ "./src/index.js":
/*!**********************!*
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Picker": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.Picker; },
/* harmony export */   "StaticPicker": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.StaticPicker; },
/* harmony export */   "Emoji": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.Emoji; },
/* harmony export */   "Anchors": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.Anchors; },
/* harmony export */   "Preview": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.Preview; },
/* harmony export */   "Search": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.Search; },
/* harmony export */   "Category": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.Category; },
/* harmony export */   "Skins": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.Skins; },
/* harmony export */   "EmojiIndex": function() { return /* reexport safe */ _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__.EmojiIndex; },
/* harmony export */   "EmojiView": function() { return /* reexport safe */ _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__.EmojiView; },
/* harmony export */   "EmojiData": function() { return /* reexport safe */ _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__.EmojiData; },
/* harmony export */   "sanitize": function() { return /* reexport safe */ _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__.sanitize; },
/* harmony export */   "uncompress": function() { return /* reexport safe */ _utils_data__WEBPACK_IMPORTED_MODULE_1__.uncompress; },
/* harmony export */   "store": function() { return /* reexport safe */ _utils_store__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "frequently": function() { return /* reexport safe */ _utils_frequently__WEBPACK_IMPORTED_MODULE_2__.default; }
/* harmony export */ });
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/store */ "./src/utils/store.js");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/data */ "./src/utils/data.js");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_frequently__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/frequently */ "./src/utils/frequently.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/components/index.js");
/* harmony import */ var _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/emoji-data */ "./src/utils/emoji-data.js");







/***/ }),

/***/ "./src/polyfills/stringFromCodePoint.js":
/*!**********************************************!*
  !*** ./src/polyfills/stringFromCodePoint.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/*!***************************!*
  !*** ./src/svgs/index.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/*!***************************!*
  !*** ./src/utils/data.js ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

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

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = propNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var name = _step.value;
      var value = object[name];
      object[name] = value && _typeof(value) === 'object' ? deepFreeze(value) : value;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
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
/*!*********************************!*
  !*** ./src/utils/emoji-data.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmojiIndex": function() { return /* binding */ EmojiIndex; },
/* harmony export */   "EmojiData": function() { return /* binding */ EmojiData; },
/* harmony export */   "EmojiView": function() { return /* binding */ EmojiView; },
/* harmony export */   "sanitize": function() { return /* binding */ sanitize; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/utils/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./src/utils/data.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _frequently__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./frequently */ "./src/utils/frequently.js");





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

var EmojiIndex =
/*#__PURE__*/
function () {
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

    this._data = (0,_data__WEBPACK_IMPORTED_MODULE_3__.uncompress)(data); // Callback to exclude specific emojis

    this._emojisFilter = emojisToShowFilter || null; // Categories to include / exclude

    this._include = include || null;
    this._exclude = exclude || null; // Custom emojis

    this._custom = custom || []; // Recent emojis
    // TODO: make parameter configurable

    this._recent = recent || _frequently__WEBPACK_IMPORTED_MODULE_4__.default.get(recentLength);
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
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this._custom[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var customEmoji = _step.value;
              this.addCustomEmoji(customEmoji);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }

        if (this._customCategory.emojis.length) {
          this._categories.push(this._customCategory);
        }
      }

      if (this.isCategoryNeeded('recent')) {
        if (this._recent.length) {
          this._recent.map(function (id) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = _this._customCategory.emojis[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var _customEmoji = _step2.value;

                if (_customEmoji.id === id) {
                  _this._recentCategory.emojis.push(_customEmoji);

                  return;
                }
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
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
        results = _index__WEBPACK_IMPORTED_MODULE_2__.intersect.apply(null, allResults);
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
        emojiData.search = (0,_data__WEBPACK_IMPORTED_MODULE_3__.buildSearch)(emojiData);
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
var EmojiData =
/*#__PURE__*/
function () {
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
var EmojiView =
/*#__PURE__*/
function () {
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
    native: (0,_index__WEBPACK_IMPORTED_MODULE_2__.unifiedToNative)(unified)
  };
}

/***/ }),

/***/ "./src/utils/frequently.js":
/*!*********************************!*
  !*** ./src/utils/frequently.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/utils/store.js");

var DEFAULTS = ['+1', 'grinning', 'kissing_heart', 'heart_eyes', 'laughing', 'stuck_out_tongue_winking_eye', 'sweat_smile', 'joy', 'scream', 'disappointed', 'unamused', 'weary', 'sob', 'sunglasses', 'heart', 'poop'];
var frequently, initialized;
var defaults = {};

function init() {
  initialized = true;
  frequently = _store__WEBPACK_IMPORTED_MODULE_0__.default.get('frequently');
}

function add(emoji) {
  if (!initialized) init();
  var id = emoji.id;
  frequently || (frequently = defaults);
  frequently[id] || (frequently[id] = 0);
  frequently[id] += 1;
  _store__WEBPACK_IMPORTED_MODULE_0__.default.set('last', id);
  _store__WEBPACK_IMPORTED_MODULE_0__.default.set('frequently', frequently);
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
  var last = _store__WEBPACK_IMPORTED_MODULE_0__.default.get('last');

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
/*!****************************!*
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uniq": function() { return /* binding */ uniq; },
/* harmony export */   "intersect": function() { return /* binding */ intersect; },
/* harmony export */   "deepMerge": function() { return /* binding */ deepMerge; },
/* harmony export */   "unifiedToNative": function() { return /* binding */ unifiedToNative; },
/* harmony export */   "measureScrollbar": function() { return /* binding */ measureScrollbar; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _polyfills_stringFromCodePoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../polyfills/stringFromCodePoint */ "./src/polyfills/stringFromCodePoint.js");



function unifiedToNative(unified) {
  var unicodes = unified.split('-'),
      codePoints = unicodes.map(function (u) {
    return "0x".concat(u);
  });
  return _polyfills_stringFromCodePoint__WEBPACK_IMPORTED_MODULE_1__.default.apply(null, codePoints);
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
/*!***********************************!*
  !*** ./src/utils/shared-props.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmojiProps": function() { return /* binding */ EmojiProps; },
/* harmony export */   "PickerProps": function() { return /* binding */ PickerProps; }
/* harmony export */ });
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
/*!****************************!*
  !*** ./src/utils/store.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ "./src/vendor/raf-polyfill.js":
/*!************************************!*
  !*** ./src/vendor/raf-polyfill.js ***!
  \************************************/
/***/ (function() {

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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue3-virtual-scroller/dist/vue3-virtual-scroller.css":
/*!***********************************************************************************************************************************************************!*
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue3-virtual-scroller/dist/vue3-virtual-scroller.css ***!
  \***********************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".vue-recycle-scroller{position:relative}.vue-recycle-scroller.direction-vertical:not(.page-mode){overflow-y:auto}.vue-recycle-scroller.direction-horizontal:not(.page-mode){overflow-x:auto}.vue-recycle-scroller.direction-horizontal{display:-ms-flexbox;display:flex}.vue-recycle-scroller__slot{-ms-flex:auto 0 0px;flex:auto 0 0}.vue-recycle-scroller__item-wrapper{-ms-flex:1;flex:1;box-sizing:border-box;overflow:hidden;position:relative}.vue-recycle-scroller.ready .vue-recycle-scroller__item-view{position:absolute;top:0;left:0;will-change:transform}.vue-recycle-scroller.direction-vertical .vue-recycle-scroller__item-wrapper{width:100%}.vue-recycle-scroller.direction-horizontal .vue-recycle-scroller__item-wrapper{height:100%}.vue-recycle-scroller.ready.direction-vertical .vue-recycle-scroller__item-view{width:100%}.vue-recycle-scroller.ready.direction-horizontal .vue-recycle-scroller__item-view{height:100%}.vue3-resize-observer{position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;border:none;background-color:transparent;pointer-events:none;display:block;overflow:hidden;opacity:0}.vue3-resize-observer object{display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1}", "",{"version":3,"sources":["webpack://./node_modules/vue3-virtual-scroller/dist/vue3-virtual-scroller.css"],"names":[],"mappings":"AAAA,sBAAsB,iBAAiB,CAAC,yDAAyD,eAAe,CAAC,2DAA2D,eAAe,CAAC,2CAA2C,mBAAW,CAAX,YAAY,CAAC,4BAA4B,mBAAY,CAAZ,aAAa,CAAC,oCAAoC,UAAM,CAAN,MAAM,CAAC,qBAAqB,CAAC,eAAe,CAAC,iBAAiB,CAAC,6DAA6D,iBAAiB,CAAC,KAAK,CAAC,MAAM,CAAC,qBAAqB,CAAC,6EAA6E,UAAU,CAAC,+EAA+E,WAAW,CAAC,gFAAgF,UAAU,CAAC,kFAAkF,WAAW,CAAC,sBAAsB,iBAAiB,CAAC,KAAK,CAAC,MAAM,CAAC,UAAU,CAAC,UAAU,CAAC,WAAW,CAAC,WAAW,CAAC,4BAA4B,CAAC,mBAAmB,CAAC,aAAa,CAAC,eAAe,CAAC,SAAS,CAAC,6BAA6B,aAAa,CAAC,iBAAiB,CAAC,KAAK,CAAC,MAAM,CAAC,WAAW,CAAC,UAAU,CAAC,eAAe,CAAC,mBAAmB,CAAC,UAAU","sourcesContent":[".vue-recycle-scroller{position:relative}.vue-recycle-scroller.direction-vertical:not(.page-mode){overflow-y:auto}.vue-recycle-scroller.direction-horizontal:not(.page-mode){overflow-x:auto}.vue-recycle-scroller.direction-horizontal{display:flex}.vue-recycle-scroller__slot{flex:auto 0 0}.vue-recycle-scroller__item-wrapper{flex:1;box-sizing:border-box;overflow:hidden;position:relative}.vue-recycle-scroller.ready .vue-recycle-scroller__item-view{position:absolute;top:0;left:0;will-change:transform}.vue-recycle-scroller.direction-vertical .vue-recycle-scroller__item-wrapper{width:100%}.vue-recycle-scroller.direction-horizontal .vue-recycle-scroller__item-wrapper{height:100%}.vue-recycle-scroller.ready.direction-vertical .vue-recycle-scroller__item-view{width:100%}.vue-recycle-scroller.ready.direction-horizontal .vue-recycle-scroller__item-view{height:100%}.vue3-resize-observer{position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;border:none;background-color:transparent;pointer-events:none;display:block;overflow:hidden;opacity:0}.vue3-resize-observer object{display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ (function(module) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/scrollparent/scrollparent.js":
/*!***************************************************!*
  !*** ./node_modules/scrollparent/scrollparent.js ***!
  \***************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function () {
  var regex = /(auto|scroll)/;

  var parents = function (node, ps) {
    if (node.parentNode === null) { return ps; }

    return parents(node.parentNode, ps.concat([node]));
  };

  var style = function (node, prop) {
    return getComputedStyle(node, null).getPropertyValue(prop);
  };

  var overflow = function (node) {
    return style(node, "overflow") + style(node, "overflow-y") + style(node, "overflow-x");
  };

  var scroll = function (node) {
   return regex.test(overflow(node));
  };

  var scrollParent = function (node) {
    if (!(node instanceof HTMLElement || node instanceof SVGElement)) {
      return ;
    }

    var ps = parents(node.parentNode, []);

    for (var i = 0; i < ps.length; i += 1) {
      if (scroll(ps[i])) {
        return ps[i];
      }
    }

    return document.scrollingElement || document.documentElement;
  };

  return scrollParent;
}));


/***/ }),

/***/ "./src/components/Emoji.vue":
/*!**********************************!*
  !*** ./src/components/Emoji.vue ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Emoji_vue_vue_type_template_id_534ad946__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Emoji.vue?vue&type=template&id=534ad946 */ "./src/components/Emoji.vue?vue&type=template&id=534ad946");
/* harmony import */ var _Emoji_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Emoji.vue?vue&type=script&lang=js */ "./src/components/Emoji.vue?vue&type=script&lang=js");



_Emoji_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Emoji_vue_vue_type_template_id_534ad946__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Emoji_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "src/components/Emoji.vue"

/* harmony default export */ __webpack_exports__["default"] = (_Emoji_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./src/components/Picker.vue":
/*!***********************************!*
  !*** ./src/components/Picker.vue ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Picker_vue_vue_type_template_id_d16e9084__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Picker.vue?vue&type=template&id=d16e9084 */ "./src/components/Picker.vue?vue&type=template&id=d16e9084");
/* harmony import */ var _Picker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Picker.vue?vue&type=script&lang=js */ "./src/components/Picker.vue?vue&type=script&lang=js");



_Picker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Picker_vue_vue_type_template_id_d16e9084__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Picker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "src/components/Picker.vue"

/* harmony default export */ __webpack_exports__["default"] = (_Picker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./src/components/StaticPicker.vue":
/*!*****************************************!*
  !*** ./src/components/StaticPicker.vue ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StaticPicker_vue_vue_type_template_id_2b16c268__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StaticPicker.vue?vue&type=template&id=2b16c268 */ "./src/components/StaticPicker.vue?vue&type=template&id=2b16c268");
/* harmony import */ var _StaticPicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StaticPicker.vue?vue&type=script&lang=js */ "./src/components/StaticPicker.vue?vue&type=script&lang=js");



_StaticPicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _StaticPicker_vue_vue_type_template_id_2b16c268__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_StaticPicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "src/components/StaticPicker.vue"

/* harmony default export */ __webpack_exports__["default"] = (_StaticPicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./src/components/anchors.vue":
/*!************************************!*
  !*** ./src/components/anchors.vue ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _anchors_vue_vue_type_template_id_51188104__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anchors.vue?vue&type=template&id=51188104 */ "./src/components/anchors.vue?vue&type=template&id=51188104");
/* harmony import */ var _anchors_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./anchors.vue?vue&type=script&lang=js */ "./src/components/anchors.vue?vue&type=script&lang=js");



_anchors_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _anchors_vue_vue_type_template_id_51188104__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_anchors_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "src/components/anchors.vue"

/* harmony default export */ __webpack_exports__["default"] = (_anchors_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./src/components/category.vue":
/*!*************************************!*
  !*** ./src/components/category.vue ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _category_vue_vue_type_template_id_376cda0e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.vue?vue&type=template&id=376cda0e */ "./src/components/category.vue?vue&type=template&id=376cda0e");
/* harmony import */ var _category_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.vue?vue&type=script&lang=js */ "./src/components/category.vue?vue&type=script&lang=js");



_category_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _category_vue_vue_type_template_id_376cda0e__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_category_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "src/components/category.vue"

/* harmony default export */ __webpack_exports__["default"] = (_category_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./src/components/preview.vue":
/*!************************************!*
  !*** ./src/components/preview.vue ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _preview_vue_vue_type_template_id_35056c30__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preview.vue?vue&type=template&id=35056c30 */ "./src/components/preview.vue?vue&type=template&id=35056c30");
/* harmony import */ var _preview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preview.vue?vue&type=script&lang=js */ "./src/components/preview.vue?vue&type=script&lang=js");



_preview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _preview_vue_vue_type_template_id_35056c30__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_preview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "src/components/preview.vue"

/* harmony default export */ __webpack_exports__["default"] = (_preview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./src/components/search.vue":
/*!***********************************!*
  !*** ./src/components/search.vue ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_vue_vue_type_template_id_4ad41bb8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.vue?vue&type=template&id=4ad41bb8 */ "./src/components/search.vue?vue&type=template&id=4ad41bb8");
/* harmony import */ var _search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.vue?vue&type=script&lang=js */ "./src/components/search.vue?vue&type=script&lang=js");



_search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _search_vue_vue_type_template_id_4ad41bb8__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "src/components/search.vue"

/* harmony default export */ __webpack_exports__["default"] = (_search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./src/components/skins.vue":
/*!**********************************!*
  !*** ./src/components/skins.vue ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _skins_vue_vue_type_template_id_1c614894__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skins.vue?vue&type=template&id=1c614894 */ "./src/components/skins.vue?vue&type=template&id=1c614894");
/* harmony import */ var _skins_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skins.vue?vue&type=script&lang=js */ "./src/components/skins.vue?vue&type=script&lang=js");



_skins_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _skins_vue_vue_type_template_id_1c614894__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_skins_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "src/components/skins.vue"

/* harmony default export */ __webpack_exports__["default"] = (_skins_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./src/components/Emoji.vue?vue&type=script&lang=js":
/*!**********************************************************!*
  !*** ./src/components/Emoji.vue?vue&type=script&lang=js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Emoji_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Emoji_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Emoji.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/Emoji.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/components/Picker.vue?vue&type=script&lang=js":
/*!***********************************************************!*
  !*** ./src/components/Picker.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Picker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Picker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Picker.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/Picker.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/components/StaticPicker.vue?vue&type=script&lang=js":
/*!*****************************************************************!*
  !*** ./src/components/StaticPicker.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_StaticPicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_StaticPicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./StaticPicker.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/StaticPicker.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/components/anchors.vue?vue&type=script&lang=js":
/*!************************************************************!*
  !*** ./src/components/anchors.vue?vue&type=script&lang=js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_anchors_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_anchors_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./anchors.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/anchors.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/components/category.vue?vue&type=script&lang=js":
/*!*************************************************************!*
  !*** ./src/components/category.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_category_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_category_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./category.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/category.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/components/preview.vue?vue&type=script&lang=js":
/*!************************************************************!*
  !*** ./src/components/preview.vue?vue&type=script&lang=js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_preview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_preview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./preview.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/preview.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/components/search.vue?vue&type=script&lang=js":
/*!***********************************************************!*
  !*** ./src/components/search.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./search.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/search.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/components/skins.vue?vue&type=script&lang=js":
/*!**********************************************************!*
  !*** ./src/components/skins.vue?vue&type=script&lang=js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_skins_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_skins_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./skins.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/skins.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/components/Emoji.vue?vue&type=template&id=534ad946":
/*!****************************************************************!*
  !*** ./src/components/Emoji.vue?vue&type=template&id=534ad946 ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Emoji_vue_vue_type_template_id_534ad946__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Emoji_vue_vue_type_template_id_534ad946__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Emoji.vue?vue&type=template&id=534ad946 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/Emoji.vue?vue&type=template&id=534ad946");


/***/ }),

/***/ "./src/components/Picker.vue?vue&type=template&id=d16e9084":
/*!*****************************************************************!*
  !*** ./src/components/Picker.vue?vue&type=template&id=d16e9084 ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Picker_vue_vue_type_template_id_d16e9084__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Picker_vue_vue_type_template_id_d16e9084__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Picker.vue?vue&type=template&id=d16e9084 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/Picker.vue?vue&type=template&id=d16e9084");


/***/ }),

/***/ "./src/components/StaticPicker.vue?vue&type=template&id=2b16c268":
/*!***********************************************************************!*
  !*** ./src/components/StaticPicker.vue?vue&type=template&id=2b16c268 ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_StaticPicker_vue_vue_type_template_id_2b16c268__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_StaticPicker_vue_vue_type_template_id_2b16c268__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./StaticPicker.vue?vue&type=template&id=2b16c268 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/StaticPicker.vue?vue&type=template&id=2b16c268");


/***/ }),

/***/ "./src/components/anchors.vue?vue&type=template&id=51188104":
/*!******************************************************************!*
  !*** ./src/components/anchors.vue?vue&type=template&id=51188104 ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_anchors_vue_vue_type_template_id_51188104__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_anchors_vue_vue_type_template_id_51188104__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./anchors.vue?vue&type=template&id=51188104 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/anchors.vue?vue&type=template&id=51188104");


/***/ }),

/***/ "./src/components/category.vue?vue&type=template&id=376cda0e":
/*!*******************************************************************!*
  !*** ./src/components/category.vue?vue&type=template&id=376cda0e ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_category_vue_vue_type_template_id_376cda0e__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_category_vue_vue_type_template_id_376cda0e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./category.vue?vue&type=template&id=376cda0e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/category.vue?vue&type=template&id=376cda0e");


/***/ }),

/***/ "./src/components/preview.vue?vue&type=template&id=35056c30":
/*!******************************************************************!*
  !*** ./src/components/preview.vue?vue&type=template&id=35056c30 ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_preview_vue_vue_type_template_id_35056c30__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_preview_vue_vue_type_template_id_35056c30__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./preview.vue?vue&type=template&id=35056c30 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/preview.vue?vue&type=template&id=35056c30");


/***/ }),

/***/ "./src/components/search.vue?vue&type=template&id=4ad41bb8":
/*!*****************************************************************!*
  !*** ./src/components/search.vue?vue&type=template&id=4ad41bb8 ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_search_vue_vue_type_template_id_4ad41bb8__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_search_vue_vue_type_template_id_4ad41bb8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./search.vue?vue&type=template&id=4ad41bb8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/search.vue?vue&type=template&id=4ad41bb8");


/***/ }),

/***/ "./src/components/skins.vue?vue&type=template&id=1c614894":
/*!****************************************************************!*
  !*** ./src/components/skins.vue?vue&type=template&id=1c614894 ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_skins_vue_vue_type_template_id_1c614894__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_skins_vue_vue_type_template_id_1c614894__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./skins.vue?vue&type=template&id=1c614894 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/skins.vue?vue&type=template&id=1c614894");


/***/ }),

/***/ "./node_modules/vue3-virtual-scroller/dist/vue3-virtual-scroller.css":
/*!***************************************************************************!*
  !*** ./node_modules/vue3-virtual-scroller/dist/vue3-virtual-scroller.css ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../css-loader/dist/cjs.js!../../postcss-loader/dist/cjs.js!./vue3-virtual-scroller.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue3-virtual-scroller/dist/vue3-virtual-scroller.css");
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("427a74ac", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addStylesClient; }
/* harmony export */ });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "./node_modules/vue-style-loader/lib/listToStyles.js");
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = (0,_listToStyles__WEBPACK_IMPORTED_MODULE_0__.default)(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = (0,_listToStyles__WEBPACK_IMPORTED_MODULE_0__.default)(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ listToStyles; }
/* harmony export */ });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "./node_modules/vue3-resize/dist/vue3-resize.esm.js":
/*!**********************************************************!*
  !*** ./node_modules/vue3-resize/dist/vue3-resize.esm.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResizeObserver": function() { return /* binding */ script; },
/* harmony export */   "install": function() { return /* binding */ install; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


function getInternetExplorerVersion() {
  const ua = window.navigator.userAgent;
  const msie = ua.indexOf('MSIE ');

  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  const trident = ua.indexOf('Trident/');

  if (trident > 0) {
    // IE 11 => return version number
    const rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  const edge = ua.indexOf('Edge/');

  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  } // other browser


  return -1;
}

let isIE;

function initCompat() {
  if (!initCompat.init) {
    initCompat.init = true;
    isIE = getInternetExplorerVersion() !== -1;
  }
}

var script = {
  name: 'ResizeObserver',
  props: {
    showTrigger: {
      type: Boolean,
      default: false
    }
  },
  emits: ['notify'],

  setup(props, {
    emit
  }) {
    let _w = 0;
    let _h = 0;
    const elRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    let _resizeObject = null;

    const compareAndNotify = () => {
      if (_w !== elRef.value.offsetWidth || _h !== elRef.value.offsetHeight) {
        _w = elRef.value.offsetWidth;
        _h = elRef.value.offsetHeight;
        emit('notify', {
          width: _w,
          height: _h
        });
      }
    };

    const addResizeHandlers = () => {
      _resizeObject.contentDocument.defaultView.addEventListener('resize', compareAndNotify);

      compareAndNotify();
    };

    const removeResizeHandlers = () => {
      if (_resizeObject && _resizeObject.onload) {
        if (!isIE && _resizeObject.contentDocument) {
          _resizeObject.contentDocument.defaultView.removeEventListener('resize', compareAndNotify);
        }

        elRef.value.removeChild(_resizeObject);
        _resizeObject.onload = null;
        _resizeObject = null;
      }
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
      initCompat();
      _w = elRef.value.offsetWidth;
      _h = elRef.value.offsetHeight;
      const object = document.createElement('object');
      _resizeObject = object;
      object.setAttribute('aria-hidden', 'true');
      object.setAttribute('tabindex', '-1');
      object.onload = addResizeHandlers;
      object.type = 'text/html';

      if (isIE) {
        elRef.value.appendChild(object);
      }

      object.data = 'about:blank';

      if (!isIE) {
        elRef.value.appendChild(object);
      }

      if (props.showTrigger) {
        compareAndNotify();
      }
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount)(() => {
      removeResizeHandlers();
    });
    return {
      elRef
    };
  }

};

const _hoisted_1 = {
  ref: "elRef",
  class: "vue3-resize-observer",
  tabindex: "-1"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, null, 512
  /* NEED_PATCH */
  );
}

script.render = render;
script.__file = "src/package/ResizeObserver/ResizeObserver.vue";

script.install = function (app) {
  app.component(script.name, script);
};

var version = "0.2.0";

const install = app => {
  app.use(script);
}; // Plugin


const Vue3Resize = {
  version,
  install
};

/* harmony default export */ __webpack_exports__["default"] = (Vue3Resize);

//# sourceMappingURL=vue3-resize.esm.js.map


/***/ }),

/***/ "./node_modules/vue3-virtual-scroller/dist/vue3-virtual-scroller.esm.js":
/*!******************************************************************************!*
  !*** ./node_modules/vue3-virtual-scroller/dist/vue3-virtual-scroller.esm.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicScroller": function() { return /* binding */ script$1; },
/* harmony export */   "DynamicScrollerItem": function() { return /* binding */ DynamicScrollerItem; },
/* harmony export */   "RecycleScroller": function() { return /* binding */ script; }
/* harmony export */ });
/* harmony import */ var vue3_resize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue3-resize */ "./node_modules/vue3-resize/dist/vue3-resize.esm.js");
/* harmony import */ var scrollparent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! scrollparent */ "./node_modules/scrollparent/scrollparent.js");
/* harmony import */ var scrollparent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(scrollparent__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_2__);




var config = {
  itemsLimit: 1000
};

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelper(o) {
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var it,
      normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _typeof$1(obj) {
  if (typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol") {
    _typeof$1 = function _typeof$1(obj) {
      return _typeof(obj);
    };
  } else {
    _typeof$1 = function _typeof$1(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof(obj);
    };
  }

  return _typeof$1(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function processOptions(value) {
  var options;

  if (typeof value === 'function') {
    // Simple options (callback-only)
    options = {
      callback: value
    };
  } else {
    // Options object
    options = value;
  }

  return options;
}

function throttle(callback, delay) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var timeout;
  var lastState;
  var currentArgs;

  var throttled = function throttled(state) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    currentArgs = args;
    if (timeout && state === lastState) return;
    var leading = options.leading;

    if (typeof leading === 'function') {
      leading = leading(state, lastState);
    }

    if ((!timeout || state !== lastState) && leading) {
      callback.apply(void 0, [state].concat(_toConsumableArray(currentArgs)));
    }

    lastState = state;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      callback.apply(void 0, [state].concat(_toConsumableArray(currentArgs)));
      timeout = 0;
    }, delay);
  };

  throttled._clear = function () {
    clearTimeout(timeout);
    timeout = null;
  };

  return throttled;
}

function deepEqual(val1, val2) {
  if (val1 === val2) return true;

  if (_typeof$1(val1) === 'object') {
    // eslint-disable-next-line no-restricted-syntax
    for (var key in val1) {
      if (!deepEqual(val1[key], val2[key])) {
        return false;
      }
    }

    return true;
  }

  return false;
}

var VisibilityState = /*#__PURE__*/function () {
  function VisibilityState(el, options, vnode) {
    _classCallCheck(this, VisibilityState);

    this.el = el;
    this.observer = null;
    this.frozen = false;
    this.createObserver(options, vnode);
  }

  _createClass(VisibilityState, [{
    key: "createObserver",
    value: function createObserver(options) {
      var _this = this;

      if (this.observer) {
        this.destroyObserver();
      }

      if (this.frozen) return;
      this.options = processOptions(options);

      this.callback = function (result, entry) {
        _this.options.callback(result, entry);

        if (result && _this.options.once) {
          _this.frozen = true;

          _this.destroyObserver();
        }
      }; // Throttle


      if (this.callback && this.options.throttle) {
        var _ref = this.options.throttleOptions || {},
            _leading = _ref.leading;

        this.callback = throttle(this.callback, this.options.throttle, {
          leading: function leading(state) {
            return _leading === 'both' || _leading === 'visible' && state || _leading === 'hidden' && !state;
          }
        });
      }

      this.oldResult = undefined;
      this.observer = new IntersectionObserver(function (entries) {
        var entry = entries[0];

        if (entries.length > 1) {
          var intersectingEntry = entries.find(function (e) {
            return e.isIntersecting;
          });

          if (intersectingEntry) {
            entry = intersectingEntry;
          }
        }

        if (_this.callback) {
          // Use isIntersecting if possible because browsers can report isIntersecting as true, but intersectionRatio as 0, when something very slowly enters the viewport.
          var result = entry.isIntersecting && entry.intersectionRatio >= _this.threshold;
          if (result === _this.oldResult) return;
          _this.oldResult = result;

          _this.callback(result, entry);
        }
      }, this.options.intersection); // Wait for the element to be in document

      setTimeout(function () {
        if (_this.observer) {
          _this.observer.observe(_this.el);
        }
      });
    }
  }, {
    key: "destroyObserver",
    value: function destroyObserver() {
      if (this.observer) {
        this.observer.disconnect();
        this.observer = null;
      } // Cancel throttled call


      if (this.callback && this.callback._clear) {
        this.callback._clear();

        this.callback = null;
      }
    }
  }, {
    key: "threshold",
    get: function get() {
      return this.options.intersection && this.options.intersection.threshold || 0;
    }
  }]);

  return VisibilityState;
}();

function mounted(el, _ref2, vnode) {
  var value = _ref2.value;
  if (!value) return;

  if (typeof IntersectionObserver === 'undefined') {
    console.warn('[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill');
  } else {
    var state = new VisibilityState(el, value, vnode);
    el._vue_visibilityState = state;
  }
}

function unmounted(el) {
  var state = el._vue_visibilityState;

  if (state) {
    state.destroyObserver();
    delete el._vue_visibilityState;
  }
}

function componentUpdated(el, _ref3, vnode) {
  var value = _ref3.value,
      oldValue = _ref3.oldValue;
  if (deepEqual(value, oldValue)) return;
  var state = el._vue_visibilityState;

  if (!value) {
    unmounted(el);
    return;
  }

  if (state) {
    state.createObserver(value, vnode);
  } else {
    mounted(el, {
      value: value
    }, vnode);
  }
}

var ObserveVisibility = {
  mounted: mounted,
  componentUpdated: componentUpdated,
  unmounted: unmounted
};

var props = {
  items: {
    type: Array,
    required: true
  },
  keyField: {
    type: String,
    default: 'id'
  },
  direction: {
    type: String,
    default: 'vertical',
    validator: function validator(value) {
      return ['vertical', 'horizontal'].includes(value);
    }
  }
};
function simpleArray() {
  return this.items.length && _typeof(this.items[0]) !== 'object';
}

var supportsPassive = false;

if (typeof window !== 'undefined') {
  supportsPassive = false;

  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function get() {
        supportsPassive = true;
      }
    });
    window.addEventListener('test', null, opts);
  } catch (e) {}
}

var uid = 0;
var script = (0,vue__WEBPACK_IMPORTED_MODULE_2__.defineComponent)({
  name: 'RecycleScroller',
  components: {
    ResizeObserver: vue3_resize__WEBPACK_IMPORTED_MODULE_0__.ResizeObserver
  },
  directives: {
    ObserveVisibility: ObserveVisibility
  },
  props: _objectSpread2({}, props, {
    itemSize: {
      type: Number,
      default: null
    },
    minItemSize: {
      type: [Number, String],
      default: null
    },
    sizeField: {
      type: String,
      default: 'size'
    },
    typeField: {
      type: String,
      default: 'type'
    },
    buffer: {
      type: Number,
      default: 200
    },
    pageMode: {
      type: Boolean,
      default: false
    },
    prerender: {
      type: Number,
      default: 0
    },
    emitUpdate: {
      type: Boolean,
      default: false
    }
  }),
  emits: ['visible', 'hidden', 'resize', 'update'],
  data: function data() {
    return {
      pool: [],
      totalSize: 0,
      ready: false,
      hoverKey: null
    };
  },
  computed: {
    sizes: function sizes() {
      if (this.itemSize === null) {
        var sizes = {
          '-1': {
            accumulator: 0
          }
        };
        var items = this.items;
        var field = this.sizeField;
        var minItemSize = this.minItemSize;
        var computedMinSize = 10000;
        var accumulator = 0;
        var current;

        for (var i = 0, l = items.length; i < l; i++) {
          current = items[i][field] || minItemSize;

          if (current < computedMinSize) {
            computedMinSize = current;
          }

          accumulator += current;
          sizes[i] = {
            accumulator: accumulator,
            size: current
          };
        } // eslint-disable-next-line


        this.$_computedMinItemSize = computedMinSize;
        return sizes;
      }

      return [];
    },
    simpleArray: simpleArray
  },
  watch: {
    items: function items() {
      this.updateVisibleItems(true);
    },
    pageMode: function pageMode() {
      this.applyPageMode();
      this.updateVisibleItems(false);
    },
    sizes: {
      handler: function handler() {
        this.updateVisibleItems(false);
      },
      deep: true
    }
  },
  created: function created() {
    this.$_startIndex = 0;
    this.$_endIndex = 0;
    this.$_views = new Map();
    this.$_unusedViews = new Map();
    this.$_scrollDirty = false;
    this.$_lastUpdateScrollPosition = 0; // In SSR mode, we also prerender the same number of item for the first render
    // to avoir mismatch between server and client templates

    if (this.prerender) {
      this.$_prerender = true;
      this.updateVisibleItems(false);
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.applyPageMode();
    this.$nextTick(function () {
      // In SSR mode, render the real number of visible items
      _this.$_prerender = false;

      _this.updateVisibleItems(true);

      _this.ready = true;
    });
  },
  beforeUnmount: function beforeUnmount() {
    this.removeListeners();
  },
  methods: {
    addView: function addView(pool, index, item, key, type) {
      var view = {
        item: item,
        position: 0
      };
      view.nr = {
        id: uid++,
        index: index,
        used: true,
        key: key,
        type: type
      };
      pool.push(view);
      return view;
    },
    unuseView: function unuseView(view) {
      var fake = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var unusedViews = this.$_unusedViews;
      var type = view.nr.type;
      var unusedPool = unusedViews.get(type);

      if (!unusedPool) {
        unusedPool = [];
        unusedViews.set(type, unusedPool);
      }

      unusedPool.push(view);

      if (!fake) {
        view.nr.used = false;
        view.position = -9999;
        this.$_views.delete(view.nr.key);
      }
    },
    handleResize: function handleResize() {
      this.$emit('resize');
      if (this.ready) this.updateVisibleItems(false);
    },
    handleScroll: function handleScroll(event) {
      var _this2 = this;

      if (!this.$_scrollDirty) {
        this.$_scrollDirty = true;
        requestAnimationFrame(function () {
          _this2.$_scrollDirty = false;

          var _this2$updateVisibleI = _this2.updateVisibleItems(false, true),
              continuous = _this2$updateVisibleI.continuous; // It seems sometimes chrome doesn't fire scroll event :/
          // When non continous scrolling is ending, we force a refresh


          if (!continuous) {
            clearTimeout(_this2.$_refreshTimout);
            _this2.$_refreshTimout = setTimeout(_this2.handleScroll, 100);
          }
        });
      }
    },
    handleVisibilityChange: function handleVisibilityChange(isVisible, entry) {
      var _this3 = this;

      if (this.ready) {
        if (isVisible || entry.boundingClientRect.width !== 0 || entry.boundingClientRect.height !== 0) {
          this.$emit('visible');
          requestAnimationFrame(function () {
            _this3.updateVisibleItems(false);
          });
        } else {
          this.$emit('hidden');
        }
      }
    },
    updateVisibleItems: function updateVisibleItems(checkItem) {
      var checkPositionDiff = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var itemSize = this.itemSize;
      var minItemSize = this.$_computedMinItemSize;
      var typeField = this.typeField;
      var keyField = this.simpleArray ? null : this.keyField;
      var items = this.items;
      var count = items.length;
      var sizes = this.sizes;
      var views = this.$_views;
      var unusedViews = this.$_unusedViews;
      var pool = this.pool;
      var startIndex, endIndex;
      var totalSize;

      if (!count) {
        startIndex = endIndex = totalSize = 0;
      } else if (this.$_prerender) {
        startIndex = 0;
        endIndex = this.prerender;
        totalSize = null;
      } else {
        var scroll = this.getScroll(); // Skip update if use hasn't scrolled enough

        if (checkPositionDiff) {
          var positionDiff = scroll.start - this.$_lastUpdateScrollPosition;
          if (positionDiff < 0) positionDiff = -positionDiff;

          if (itemSize === null && positionDiff < minItemSize || positionDiff < itemSize) {
            return {
              continuous: true
            };
          }
        }

        this.$_lastUpdateScrollPosition = scroll.start;
        var buffer = this.buffer;
        scroll.start -= buffer;
        scroll.end += buffer; // Variable size mode

        if (itemSize === null) {
          var h;
          var a = 0;
          var b = count - 1;
          var i = ~~(count / 2);
          var oldI; // Searching for startIndex

          do {
            oldI = i;
            h = sizes[i].accumulator;

            if (h < scroll.start) {
              a = i;
            } else if (i < count - 1 && sizes[i + 1].accumulator > scroll.start) {
              b = i;
            }

            i = ~~((a + b) / 2);
          } while (i !== oldI);

          i < 0 && (i = 0);
          startIndex = i; // For container style

          totalSize = sizes[count - 1].accumulator; // Searching for endIndex

          for (endIndex = i; endIndex < count && sizes[endIndex].accumulator < scroll.end; endIndex++) {
          }

          if (endIndex === -1) {
            endIndex = items.length - 1;
          } else {
            endIndex++; // Bounds

            endIndex > count && (endIndex = count);
          }
        } else {
          // Fixed size mode
          startIndex = ~~(scroll.start / itemSize);
          endIndex = Math.ceil(scroll.end / itemSize); // Bounds

          startIndex < 0 && (startIndex = 0);
          endIndex > count && (endIndex = count);
          totalSize = count * itemSize;
        }
      }

      if (endIndex - startIndex > config.itemsLimit) {
        this.itemsLimitError();
      }

      this.totalSize = totalSize;
      var view;
      var continuous = startIndex <= this.$_endIndex && endIndex >= this.$_startIndex;

      if (this.$_continuous !== continuous) {
        if (continuous) {
          views.clear();
          unusedViews.clear();

          for (var _i = 0, l = pool.length; _i < l; _i++) {
            view = pool[_i];
            this.unuseView(view);
          }
        }

        this.$_continuous = continuous;
      } else if (continuous) {
        for (var _i2 = 0, _l = pool.length; _i2 < _l; _i2++) {
          view = pool[_i2];

          if (view.nr.used) {
            // Update view item index
            if (checkItem) {
              view.nr.index = items.findIndex(function (item) {
                return keyField ? item[keyField] === view.item[keyField] : item === view.item;
              });
            } // Check if index is still in visible range


            if (view.nr.index === -1 || view.nr.index < startIndex || view.nr.index >= endIndex) {
              this.unuseView(view);
            }
          }
        }
      }

      var unusedIndex = continuous ? null : new Map();
      var item, type, unusedPool;
      var v;

      for (var _i3 = startIndex; _i3 < endIndex; _i3++) {
        item = items[_i3];
        var key = keyField ? item[keyField] : item;

        if (key == null) {
          throw new Error("Key is ".concat(key, " on item (keyField is '").concat(keyField, "')"));
        }

        view = views.get(key);

        if (!itemSize && !sizes[_i3].size) {
          if (view) this.unuseView(view);
          continue;
        } // No view assigned to item


        if (!view) {
          type = item[typeField];
          unusedPool = unusedViews.get(type);

          if (continuous) {
            // Reuse existing view
            if (unusedPool && unusedPool.length) {
              view = unusedPool.pop();
              view.item = item;
              view.nr.used = true;
              view.nr.index = _i3;
              view.nr.key = key;
              view.nr.type = type;
            } else {
              view = this.addView(pool, _i3, item, key, type);
            }
          } else {
            // Use existing view
            // We don't care if they are already used
            // because we are not in continous scrolling
            v = unusedIndex.get(type) || 0;

            if (!unusedPool || v >= unusedPool.length) {
              view = this.addView(pool, _i3, item, key, type);
              this.unuseView(view, true);
              unusedPool = unusedViews.get(type);
            }

            view = unusedPool[v];
            view.item = item;
            view.nr.used = true;
            view.nr.index = _i3;
            view.nr.key = key;
            view.nr.type = type;
            unusedIndex.set(type, v + 1);
            v++;
          }

          views.set(key, view);
        } else {
          view.nr.used = true;
          view.item = item;
        } // Update position


        if (itemSize === null) {
          view.position = sizes[_i3 - 1].accumulator;
        } else {
          view.position = _i3 * itemSize;
        }
      }

      this.$_startIndex = startIndex;
      this.$_endIndex = endIndex;
      if (this.emitUpdate) this.$emit('update', startIndex, endIndex); // After the user has finished scrolling
      // Sort views so text selection is correct

      clearTimeout(this.$_sortTimer);
      this.$_sortTimer = setTimeout(this.sortViews, 300);
      return {
        continuous: continuous
      };
    },
    getListenerTarget: function getListenerTarget() {
      var target = scrollparent__WEBPACK_IMPORTED_MODULE_1___default()(this.$el); // Fix global scroll target for Chrome and Safari

      if (window.document && (target === window.document.documentElement || target === window.document.body)) {
        target = window;
      }

      return target;
    },
    getScroll: function getScroll() {
      var el = this.$el,
          direction = this.direction;
      var isVertical = direction === 'vertical';
      var scrollState;

      if (this.pageMode) {
        var bounds = el.getBoundingClientRect();
        var boundsSize = isVertical ? bounds.height : bounds.width;
        var start = -(isVertical ? bounds.top : bounds.left);
        var size = isVertical ? window.innerHeight : window.innerWidth;

        if (start < 0) {
          size += start;
          start = 0;
        }

        if (start + size > boundsSize) {
          size = boundsSize - start;
        }

        scrollState = {
          start: start,
          end: start + size
        };
      } else if (isVertical) {
        scrollState = {
          start: el.scrollTop,
          end: el.scrollTop + el.clientHeight
        };
      } else {
        scrollState = {
          start: el.scrollLeft,
          end: el.scrollLeft + el.clientWidth
        };
      }

      return scrollState;
    },
    applyPageMode: function applyPageMode() {
      if (this.pageMode) {
        this.addListeners();
      } else {
        this.removeListeners();
      }
    },
    addListeners: function addListeners() {
      this.listenerTarget = this.getListenerTarget();
      this.listenerTarget.addEventListener('scroll', this.handleScroll, supportsPassive ? {
        passive: true
      } : false);
      this.listenerTarget.addEventListener('resize', this.handleResize);
    },
    removeListeners: function removeListeners() {
      if (!this.listenerTarget) {
        return;
      }

      this.listenerTarget.removeEventListener('scroll', this.handleScroll);
      this.listenerTarget.removeEventListener('resize', this.handleResize);
      this.listenerTarget = null;
    },
    scrollToItem: function scrollToItem(index) {
      var scroll;

      if (this.itemSize === null) {
        scroll = index > 0 ? this.sizes[index - 1].accumulator : 0;
      } else {
        scroll = index * this.itemSize;
      }

      this.scrollToPosition(scroll);
    },
    scrollToPosition: function scrollToPosition(position) {
      if (this.direction === 'vertical') {
        this.$el.scrollTop = position;
      } else {
        this.$el.scrollLeft = position;
      }
    },
    itemsLimitError: function itemsLimitError() {
      var _this4 = this;

      setTimeout(function () {
        console.log('It seems the scroller element isn\'t scrolling, so it tries to render all the items at once.', 'Scroller:', _this4.$el);
        console.log('Make sure the scroller has a fixed height (or width) and \'overflow-y\' (or \'overflow-x\') set to \'auto\' so it can scroll correctly and only render the items visible in the scroll viewport.');
      });
      throw new Error('Rendered items limit reached');
    },
    sortViews: function sortViews() {
      this.pool.sort(function (viewA, viewB) {
        return viewA.nr.index - viewB.nr.index;
      });
    }
  }
});

var _hoisted_1 = {
  key: 0,
  class: "vue-recycle-scroller__slot"
};
var _hoisted_2 = {
  key: 1,
  class: "vue-recycle-scroller__slot"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ResizeObserver = (0,vue__WEBPACK_IMPORTED_MODULE_2__.resolveComponent)("ResizeObserver");

  var _directive_observe_visibility = (0,vue__WEBPACK_IMPORTED_MODULE_2__.resolveDirective)("observe-visibility");

  return (0,vue__WEBPACK_IMPORTED_MODULE_2__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createBlock)("div", {
    class: ["vue-recycle-scroller", _defineProperty({
      ready: _ctx.ready,
      'page-mode': _ctx.pageMode
    }, "direction-".concat(_ctx.direction), true)],
    onScrollPassive: _cache[2] || (_cache[2] = function () {
      return _ctx.handleScroll.apply(_ctx, arguments);
    })
  }, [_ctx.$slots.before ? ((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.renderSlot)(_ctx.$slots, "before")])) : (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createVNode)("div", {
    ref: "wrapper",
    style: _defineProperty({}, _ctx.direction === 'vertical' ? 'minHeight' : 'minWidth', _ctx.totalSize + 'px'),
    class: "vue-recycle-scroller__item-wrapper"
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_2__.renderList)(_ctx.pool, function (view) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createBlock)("div", {
      key: view.nr.id,
      style: _ctx.ready ? {
        transform: "translate".concat(_ctx.direction === 'vertical' ? 'Y' : 'X', "(").concat(view.position, "px)")
      } : null,
      class: ["vue-recycle-scroller__item-view", {
        hover: _ctx.hoverKey === view.nr.key
      }],
      onMouseenter: function onMouseenter($event) {
        return _ctx.hoverKey = view.nr.key;
      },
      onMouseleave: _cache[1] || (_cache[1] = function ($event) {
        return _ctx.hoverKey = null;
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.renderSlot)(_ctx.$slots, "default", {
      item: view.item,
      index: view.nr.index,
      active: view.nr.used
    })], 46
    /* CLASS, STYLE, PROPS, HYDRATE_EVENTS */
    , ["onMouseenter"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 4
  /* STYLE */
  ), _ctx.$slots.after ? ((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.renderSlot)(_ctx.$slots, "after")])) : (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createVNode)(_component_ResizeObserver, {
    onNotify: _ctx.handleResize
  }, null, 8
  /* PROPS */
  , ["onNotify"])], 34
  /* CLASS, HYDRATE_EVENTS */
  )), [[_directive_observe_visibility, _ctx.handleVisibilityChange]]);
}

script.render = render;
script.__file = "src/components/RecycleScroller.vue";

var script$1 = {
  name: 'DynamicScroller',
  components: {
    RecycleScroller: script
  },
  provide: function provide() {
    var _this = this;

    var vscrollResizeObserver = undefined;

    if (typeof ResizeObserver !== 'undefined') {
      vscrollResizeObserver = new ResizeObserver(function (entries) {
        var _iterator = _createForOfIteratorHelper(entries),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var entry = _step.value;

            if (entry.target) {
              var event = new CustomEvent('resize', {
                detail: {
                  contentRect: entry.contentRect
                }
              });
              entry.target.dispatchEvent(event);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
    }

    return {
      vscrollData: this.vscrollData,
      vscrollParent: this,
      vscrollResizeObserver: vscrollResizeObserver,
      onUpdateScroll: function onUpdateScroll(cb) {
        return _this.vScrollMap.push(cb);
      }
    };
  },
  inheritAttrs: false,
  props: _objectSpread2({}, props, {
    minItemSize: {
      type: [Number, String],
      required: true
    }
  }),
  emits: ['vscroll:update', 'resize', 'visible'],
  data: function data() {
    return {
      vscrollData: {
        active: true,
        sizes: {},
        validSizes: {},
        keyField: this.keyField,
        simpleArray: false
      },
      vScrollMap: []
    };
  },
  computed: {
    simpleArray: simpleArray,
    itemsWithSize: function itemsWithSize() {
      var result = [];
      var items = this.items,
          keyField = this.keyField,
          simpleArray = this.simpleArray;
      var sizes = this.vscrollData.sizes;

      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var id = simpleArray ? i : item[keyField];
        var size = sizes[id];

        if (typeof size === 'undefined' && !this.$_undefinedMap[id]) {
          size = 0;
        }

        result.push({
          item: item,
          id: id,
          size: size
        });
      }

      return result;
    },
    listeners: function listeners() {
      var listeners = {};

      for (var key in this.$attrs) {
        if (key.startsWith('on')) {
          if (key !== 'onResize' && key !== 'onVisible') {
            listeners[key] = this.$attrs;
          }
        }
      }

      return listeners;
    }
  },
  watch: {
    items: function items() {
      this.forceUpdate(false);
    },
    simpleArray: {
      handler: function handler(value) {
        this.vscrollData.simpleArray = value;
      },
      immediate: true
    },
    direction: function direction(value) {
      this.forceUpdate(true);
    }
  },
  created: function created() {
    this.$_updates = [];
    this.$_undefinedSizes = 0;
    this.$_undefinedMap = {};
  },
  activated: function activated() {
    this.vscrollData.active = true;
  },
  deactivated: function deactivated() {
    this.vscrollData.active = false;
  },
  methods: {
    onScrollerResize: function onScrollerResize() {
      var scroller = this.$refs.scroller;

      if (scroller) {
        this.forceUpdate();
      }

      this.$emit('resize');
    },
    onScrollerVisible: function onScrollerVisible() {
      this.vScrollUpdate(false);
      this.$emit('visible');
    },
    vScrollUpdate: function vScrollUpdate() {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var data = {
        force: force
      };
      this.$emit('vscroll:update', data);
      this.vScrollMap.forEach(function (callback) {
        return callback(data);
      });
    },
    forceUpdate: function forceUpdate() {
      var clear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (clear || this.simpleArray) {
        this.vscrollData.validSizes = {};
      }

      this.vScrollUpdate(true);
    },
    scrollToItem: function scrollToItem(index) {
      var scroller = this.$refs.scroller;
      if (scroller) scroller.scrollToItem(index);
    },
    getItemSize: function getItemSize(item) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var id = this.simpleArray ? index != null ? index : this.items.indexOf(item) : item[this.keyField];
      return this.vscrollData.sizes[id] || 0;
    },
    scrollToBottom: function scrollToBottom() {
      var _this2 = this;

      if (this.$_scrollingToBottom) return;
      this.$_scrollingToBottom = true;
      var el = this.$el; // Item is inserted to the DOM

      this.$nextTick(function () {
        el.scrollTop = el.scrollHeight + 5000; // Item sizes are computed

        var cb = function cb() {
          el.scrollTop = el.scrollHeight + 5000;
          requestAnimationFrame(function () {
            el.scrollTop = el.scrollHeight + 5000;

            if (_this2.$_undefinedSizes === 0) {
              _this2.$_scrollingToBottom = false;
            } else {
              requestAnimationFrame(cb);
            }
          });
        };

        requestAnimationFrame(cb);
      });
    }
  }
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_RecycleScroller = (0,vue__WEBPACK_IMPORTED_MODULE_2__.resolveComponent)("RecycleScroller");

  return (0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createBlock)(_component_RecycleScroller, (0,vue__WEBPACK_IMPORTED_MODULE_2__.mergeProps)({
    ref: "scroller",
    items: $options.itemsWithSize,
    "min-item-size": $props.minItemSize,
    direction: _ctx.direction,
    "key-field": "id"
  }, _ctx.$attrs, {
    onResize: $options.onScrollerResize,
    onVisible: $options.onScrollerVisible
  }, (0,vue__WEBPACK_IMPORTED_MODULE_2__.toHandlers)($options.listeners)), {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_2__.withCtx)(function (_ref) {
      var itemWithSize = _ref.item,
          index = _ref.index,
          active = _ref.active;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_2__.renderSlot)(_ctx.$slots, "default", {
        item: itemWithSize.item,
        index: index,
        active: active,
        itemWithSize: itemWithSize
      })];
    }),
    before: (0,vue__WEBPACK_IMPORTED_MODULE_2__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_2__.renderSlot)(_ctx.$slots, "before")];
    }),
    after: (0,vue__WEBPACK_IMPORTED_MODULE_2__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_2__.renderSlot)(_ctx.$slots, "after")];
    }),
    _: 1
  }, 16
  /* FULL_PROPS */
  , ["items", "min-item-size", "direction", "onResize", "onVisible"]);
}

script$1.render = render$1;
script$1.__file = "src/components/DynamicScroller.vue";

var DynamicScrollerItem = {
  name: 'DynamicScrollerItem',
  inject: ['vscrollData', 'vscrollParent', 'onUpdateScroll', 'vscrollResizeObserver'],
  props: {
    item: {
      required: true
    },
    watchData: {
      type: Boolean,
      default: false
    },

    /**
     * Indicates if the view is actively used to display an item.
     */
    active: {
      type: Boolean,
      required: true
    },
    index: {
      type: Number,
      default: undefined
    },
    sizeDependencies: {
      type: [Array, Object],
      default: null
    },
    emitResize: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    id: function id() {
      return this.vscrollData.simpleArray ? this.index : this.item[this.vscrollData.keyField];
    },
    size: function size() {
      return this.vscrollData.validSizes[this.id] && this.vscrollData.sizes[this.id] || 0;
    },
    finalActive: function finalActive() {
      return this.active && this.vscrollData.active;
    }
  },
  watch: {
    watchData: 'updateWatchData',
    id: function id() {
      if (!this.size) {
        this.onDataUpdate();
      }
    },
    finalActive: function finalActive(value) {
      if (!this.size) {
        if (value) {
          if (!this.vscrollParent.$_undefinedMap[this.id]) {
            this.vscrollParent.$_undefinedSizes++;
            this.vscrollParent.$_undefinedMap[this.id] = true;
          }
        } else {
          if (this.vscrollParent.$_undefinedMap[this.id]) {
            this.vscrollParent.$_undefinedSizes--;
            this.vscrollParent.$_undefinedMap[this.id] = false;
          }
        }
      }

      if (this.vscrollResizeObserver) {
        if (value) {
          this.observeSize();
        } else {
          this.unobserveSize();
        }
      } else if (value && this.$_pendingVScrollUpdate === this.id) {
        this.updateSize();
      }
    }
  },
  created: function created() {
    var _this = this;

    if (this.$isServer) return;
    this.$_forceNextVScrollUpdate = null;
    this.updateWatchData();

    if (!this.vscrollResizeObserver) {
      var _loop = function _loop(k) {
        _this.$watch(function () {
          return _this.sizeDependencies[k];
        }, _this.onDataUpdate);
      };

      for (var k in this.sizeDependencies) {
        _loop(k);
      }

      this.onUpdateScroll('vscroll:update', this.onVscrollUpdate);
    }
  },
  mounted: function mounted() {
    if (this.vscrollData.active) {
      this.updateSize();
      this.observeSize();
    }
  },
  beforeUnmount: function beforeUnmount() {
    this.unobserveSize();
  },
  methods: {
    updateSize: function updateSize() {
      if (this.finalActive) {
        if (this.$_pendingSizeUpdate !== this.id) {
          this.$_pendingSizeUpdate = this.id;
          this.$_forceNextVScrollUpdate = null;
          this.$_pendingVScrollUpdate = null;
          this.computeSize(this.id);
        }
      } else {
        this.$_forceNextVScrollUpdate = this.id;
      }
    },
    updateWatchData: function updateWatchData() {
      var _this2 = this;

      if (this.watchData) {
        this.$_watchData = this.$watch('data', function () {
          _this2.onDataUpdate();
        }, {
          deep: true
        });
      } else if (this.$_watchData) {
        this.$_watchData();
        this.$_watchData = null;
      }
    },
    onVscrollUpdate: function onVscrollUpdate(_ref) {
      var force = _ref.force;

      // If not active, sechedule a size update when it becomes active
      if (!this.finalActive && force) {
        this.$_pendingVScrollUpdate = this.id;
      }

      if (this.$_forceNextVScrollUpdate === this.id || force || !this.size) {
        this.updateSize();
      }
    },
    onDataUpdate: function onDataUpdate() {
      this.updateSize();
    },
    computeSize: function computeSize(id) {
      var _this3 = this;

      (0,vue__WEBPACK_IMPORTED_MODULE_2__.nextTick)(function () {
        if (_this3.id === id) {
          var width = _this3.$el.offsetWidth;
          var height = _this3.$el.offsetHeight;

          _this3.applySize(width, height);
        }

        _this3.$_pendingSizeUpdate = null;
      }).then();
    },
    applySize: function applySize(width, height) {
      var size = Math.round(this.vscrollParent.direction === 'vertical' ? height : width);

      if (size && this.size !== size) {
        if (this.vscrollParent.$_undefinedMap[this.id]) {
          this.vscrollParent.$_undefinedSizes--;
          this.vscrollParent.$_undefinedMap[this.id] = undefined;
        }

        this.vscrollData.sizes[this.id] = size;
        this.vscrollData.validSizes[this.id] = true;
        if (this.emitResize) this.$emit('resize', this.id);
      }
    },
    observeSize: function observeSize() {
      if (!this.vscrollResizeObserver) return;
      this.vscrollResizeObserver.observe(this.$el.parentNode);
      this.$el.parentNode.addEventListener('resize', this.onResize);
    },
    unobserveSize: function unobserveSize() {
      if (!this.vscrollResizeObserver) return;
      this.vscrollResizeObserver.unobserve(this.$el.parentNode);
      this.$el.parentNode.removeEventListener('resize', this.onResize);
    },
    onResize: function onResize(event) {
      var _event$detail$content = event.detail.contentRect,
          width = _event$detail$content.width,
          height = _event$detail$content.height;
      this.applySize(width, height);
    }
  },
  render: function render() {
    return (0,vue__WEBPACK_IMPORTED_MODULE_2__.createVNode)(this.tag, null, this.$slots.default());
  }
};

var version = "0.1.1";

function registerComponents(app, prefix) {
  app.component("".concat(prefix, "recycle-scroller"), script);
  app.component("".concat(prefix, "RecycleScroller"), script);
  app.component("".concat(prefix, "dynamic-scroller"), script$1);
  app.component("".concat(prefix, "DynamicScroller"), script$1);
  app.component("".concat(prefix, "dynamic-scroller-item"), DynamicScrollerItem);
  app.component("".concat(prefix, "DynamicScrollerItem"), DynamicScrollerItem);
}

var plugin = {
  version: version,
  install: function install(app, options) {
    var finalOptions = Object.assign({}, {
      installComponents: true,
      componentsPrefix: ''
    }, options);

    for (var key in finalOptions) {
      if (typeof finalOptions[key] !== 'undefined') {
        config[key] = finalOptions[key];
      }
    }

    if (finalOptions.installComponents) {
      registerComponents(app, finalOptions.componentsPrefix);
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (plugin);

//# sourceMappingURL=vue3-virtual-scroller.esm.js.map


/***/ }),

/***/ "vue":
/*!******************************************************************************!*
  !*** external {"root":"Vue","commonjs2":"vue","commonjs":"vue","amd":"vue"} ***!
  \******************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_vue__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.js");
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9FbW9qaU1hcnQvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL0Vtb2ppLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9QaWNrZXIudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL1N0YXRpY1BpY2tlci52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvYW5jaG9ycy52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvY2F0ZWdvcnkudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3ByZXZpZXcudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NlYXJjaC52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2tpbnMudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvcG9seWZpbGxzL3N0cmluZ0Zyb21Db2RlUG9pbnQuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3N2Z3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2RhdGEuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2Vtb2ppLWRhdGEuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2ZyZXF1ZW50bHkuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy91dGlscy9zaGFyZWQtcHJvcHMuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL3N0b3JlLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy92ZW5kb3IvcmFmLXBvbHlmaWxsLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy92dWUzLXZpcnR1YWwtc2Nyb2xsZXIvZGlzdC92dWUzLXZpcnR1YWwtc2Nyb2xsZXIuY3NzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL3Njcm9sbHBhcmVudC9zY3JvbGxwYXJlbnQuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvRW1vamkudnVlP2Y3OWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvUGlja2VyLnZ1ZT9lN2E1Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL1N0YXRpY1BpY2tlci52dWU/NzE1MCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9hbmNob3JzLnZ1ZT83ODViIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2NhdGVnb3J5LnZ1ZT81OTBjIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3ByZXZpZXcudnVlPzVmYWEiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLnZ1ZT84MWM4Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NraW5zLnZ1ZT9mY2I0Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL0Vtb2ppLnZ1ZT9iOGU3Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL1BpY2tlci52dWU/ZmJlMiIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9TdGF0aWNQaWNrZXIudnVlPzQxNzYiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvYW5jaG9ycy52dWU/NTZhYyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9jYXRlZ29yeS52dWU/YjM4NSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9wcmV2aWV3LnZ1ZT9kYWE4Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NlYXJjaC52dWU/ZGY2MSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9za2lucy52dWU/OGQyYyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvdnVlMy12aXJ0dWFsLXNjcm9sbGVyL2Rpc3QvdnVlMy12aXJ0dWFsLXNjcm9sbGVyLmNzcz84YzgyIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvdnVlMy1yZXNpemUvZGlzdC92dWUzLXJlc2l6ZS5lc20uanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL3Z1ZTMtdmlydHVhbC1zY3JvbGxlci9kaXN0L3Z1ZTMtdmlydHVhbC1zY3JvbGxlci5lc20uanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0L2V4dGVybmFsIHtcInJvb3RcIjpcIlZ1ZVwiLFwiY29tbW9uanMyXCI6XCJ2dWVcIixcImNvbW1vbmpzXCI6XCJ2dWVcIixcImFtZFwiOlwidnVlXCJ9Iiwid2VicGFjazovL0Vtb2ppTWFydC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIl9TdHJpbmciLCJTdHJpbmciLCJmcm9tQ29kZVBvaW50Iiwic3RyaW5nRnJvbUNvZGVQb2ludCIsIk1BWF9TSVpFIiwiY29kZVVuaXRzIiwiaGlnaFN1cnJvZ2F0ZSIsImxvd1N1cnJvZ2F0ZSIsImluZGV4IiwibGVuZ3RoIiwiYXJndW1lbnRzIiwicmVzdWx0IiwiY29kZVBvaW50IiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJNYXRoIiwiZmxvb3IiLCJSYW5nZUVycm9yIiwicHVzaCIsImZyb21DaGFyQ29kZSIsImFwcGx5IiwiU1ZHcyIsImFjdGl2aXR5IiwiY3VzdG9tIiwiZmxhZ3MiLCJmb29kcyIsIm5hdHVyZSIsIm9iamVjdHMiLCJzbWlsZXlzIiwicGVvcGxlIiwicGxhY2VzIiwicmVjZW50Iiwic3ltYm9scyIsIm1hcHBpbmciLCJuYW1lIiwidW5pZmllZCIsIm5vbl9xdWFsaWZpZWQiLCJoYXNfaW1nX2FwcGxlIiwiaGFzX2ltZ19nb29nbGUiLCJoYXNfaW1nX3R3aXR0ZXIiLCJoYXNfaW1nX2ZhY2Vib29rIiwia2V5d29yZHMiLCJzaGVldCIsImVtb3RpY29ucyIsInRleHQiLCJzaG9ydF9uYW1lcyIsImFkZGVkX2luIiwiYnVpbGRTZWFyY2giLCJlbW9qaSIsInNlYXJjaCIsImFkZFRvU2VhcmNoIiwic3RyaW5ncyIsInNwbGl0IiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsInN0cmluZyIsInMiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJqb2luIiwiY29tcHJlc3MiLCJmaWx0ZXIiLCJzaG9ydF9uYW1lIiwic2hlZXRfeCIsInNoZWV0X3kiLCJwYXJzZUludCIsImtleSIsInZhbHVlIiwiZGVlcEZyZWV6ZSIsIm9iamVjdCIsInByb3BOYW1lcyIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJmcmVlemUiLCJ1bmNvbXByZXNzIiwiZGF0YSIsImNvbXByZXNzZWQiLCJpZCIsImVtb2ppcyIsInVuc2hpZnQiLCJ0b0ZpeGVkIiwibW9kdWxlIiwiZXhwb3J0cyIsIlNIRUVUX0NPTFVNTlMiLCJDT0xPTlNfUkVHRVgiLCJTS0lOUyIsIkVtb2ppSW5kZXgiLCJlbW9qaXNUb1Nob3dGaWx0ZXIiLCJpbmNsdWRlIiwiZXhjbHVkZSIsInJlY2VudExlbmd0aCIsIl9kYXRhIiwiX2Vtb2ppc0ZpbHRlciIsIl9pbmNsdWRlIiwiX2V4Y2x1ZGUiLCJfY3VzdG9tIiwiX3JlY2VudCIsImZyZXF1ZW50bHkiLCJfZW1vamlzIiwiX25hdGl2ZUVtb2ppcyIsIl9lbW90aWNvbnMiLCJfY2F0ZWdvcmllcyIsIl9yZWNlbnRDYXRlZ29yeSIsIl9jdXN0b21DYXRlZ29yeSIsIl9zZWFyY2hJbmRleCIsImJ1aWxkSW5kZXgiLCJhbGxDYXRlZ29yaWVzIiwiY2F0ZWdvcmllcyIsIml0ZW0iLCJpbmNsdWRlcyIsInNvcnQiLCJhIiwiYiIsImluZGV4QSIsImluZGV4QiIsImNhdGVnb3J5RGF0YSIsImlzQ2F0ZWdvcnlOZWVkZWQiLCJjYXRlZ29yeSIsImVtb2ppSWQiLCJhZGRFbW9qaSIsImN1c3RvbUVtb2ppIiwiYWRkQ3VzdG9tRW1vamkiLCJtYXAiLCJoYXNFbW9qaSIsInNraW4iLCJtYXRjaGVzIiwibWF0Y2giLCJhbGlhc2VzIiwiaGFzT3duUHJvcGVydHkiLCJlbW9qaU9iamVjdCIsImdldFNraW4iLCJFcnJvciIsImtleXMiLCJ1bmljb2RlRW1vamkiLCJtYXhSZXN1bHRzIiwidmFsdWVzIiwiYWxsUmVzdWx0cyIsImN1cnJlbnRJbmRleCIsImNoYXJJbmRleCIsImNoYXIiLCJyZXN1bHRzIiwic2NvcmVzIiwic3ViIiwic3Vic3RyIiwic3ViSW5kZXgiLCJzY29yZSIsImFTY29yZSIsImJTY29yZSIsImludGVyc2VjdCIsInNsaWNlIiwiZW1vamlEYXRhIiwiYXNzaWduIiwiRW1vamlEYXRhIiwiaXNFbW9qaU5lZWRlZCIsIm5hdGl2ZSIsIl9za2lucyIsImlkeCIsImVtb3RpY29uIiwiY2F0ZWdvcnlfaWQiLCJpc0luY2x1ZGVkIiwiaXNFeGNsdWRlZCIsInNraW5fdmFyaWF0aW9ucyIsInNraW5JZHgiLCJza2luS2V5IiwidmFyaWF0aW9uRGF0YSIsInNraW5EYXRhIiwiayIsIl9zYW5pdGl6ZWQiLCJzYW5pdGl6ZSIsIm11bHRpcGx5IiwieCIsInJvdW5kIiwieSIsIkVtb2ppVmlldyIsInNldCIsImZhbGxiYWNrIiwiZW1vamlUb29sdGlwIiwiZW1vamlTaXplIiwiX2Vtb2ppIiwiX25hdGl2ZSIsIl9za2luIiwiX3NldCIsIl9mYWxsYmFjayIsImNhblJlbmRlciIsIl9jYW5SZW5kZXIiLCJjc3NDbGFzcyIsIl9jc3NDbGFzcyIsImNzc1N0eWxlIiwiX2Nzc1N0eWxlIiwiY29udGVudCIsIl9jb250ZW50IiwidGl0bGUiLCJfaXNDdXN0b20iLCJfaXNOYXRpdmUiLCJfaGFzRW1vamkiLCJfZW1vamlUeXBlIiwiYmFja2dyb3VuZEltYWdlIiwiZ2V0RW1vamkiLCJpbWFnZVVybCIsImJhY2tncm91bmRTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsImZvbnRTaXplIiwiaGFzSW1hZ2UiLCJ1bmRlZmluZWQiLCJza2luX3RvbmUiLCJjb2xvbnMiLCJ1bmlmaWVkVG9OYXRpdmUiLCJERUZBVUxUUyIsImluaXRpYWxpemVkIiwiZGVmYXVsdHMiLCJpbml0Iiwic3RvcmUiLCJhZGQiLCJnZXQiLCJtYXhOdW1iZXIiLCJkZWZhdWx0TGVuZ3RoIiwibWluIiwiaSIsInF1YW50aXR5IiwiZnJlcXVlbnRseUtleXMiLCJzb3J0ZWQiLCJyZXZlcnNlIiwic2xpY2VkIiwibGFzdCIsInBvcCIsInVuaWNvZGVzIiwiY29kZVBvaW50cyIsInUiLCJ1bmlxIiwiYXJyIiwicmVkdWNlIiwiYWNjIiwidW5pcUEiLCJ1bmlxQiIsImRlZXBNZXJnZSIsIm8iLCJvcmlnaW5hbFZhbHVlIiwibWVhc3VyZVNjcm9sbGJhciIsImRvY3VtZW50IiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwib3ZlcmZsb3ciLCJwb3NpdGlvbiIsInRvcCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNjcm9sbGJhcldpZHRoIiwib2Zmc2V0V2lkdGgiLCJjbGllbnRXaWR0aCIsInJlbW92ZUNoaWxkIiwiRW1vamlQcm9wcyIsInR5cGUiLCJCb29sZWFuIiwiZGVmYXVsdCIsInRvb2x0aXAiLCJGdW5jdGlvbiIsInJlcXVpcmVkIiwic2l6ZSIsIlBpY2tlclByb3BzIiwicGVyTGluZSIsIm1heFNlYXJjaFJlc3VsdHMiLCJjb2xvciIsImRlZmF1bHRTa2luIiwiYXV0b0ZvY3VzIiwiaTE4biIsInNob3dQcmV2aWV3Iiwic2hvd1NlYXJjaCIsInNob3dDYXRlZ29yaWVzIiwic2hvd1NraW5Ub25lcyIsImluZmluaXRlU2Nyb2xsIiwicGlja2VyU3R5bGVzIiwiTkFNRVNQQUNFIiwiX0pTT04iLCJKU09OIiwiaXNMb2NhbFN0b3JhZ2VTdXBwb3J0ZWQiLCJ3aW5kb3ciLCJnZXR0ZXIiLCJzZXR0ZXIiLCJzZXRIYW5kbGVycyIsImhhbmRsZXJzIiwic2V0TmFtZXNwYWNlIiwibmFtZXNwYWNlIiwidXBkYXRlIiwic3RhdGUiLCJsb2NhbFN0b3JhZ2UiLCJzdHJpbmdpZnkiLCJlIiwicGFyc2UiLCJpc1dpbmRvd0F2YWlsYWJsZSIsImxhc3RUaW1lIiwidmVuZG9ycyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiY2FsbGJhY2siLCJlbGVtZW50IiwiY3VyclRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsInRpbWVUb0NhbGwiLCJtYXgiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7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QUNILDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlDQUF5QyxPQUFPO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNB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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLE1BQU0sNkNBQVE7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLFdBQVcsZ0RBQVc7QUFDdEI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0RBQWUsTUFBTSxFQUFDO0FBQ2lFO0FBQ3ZGOzs7Ozs7Ozs7Ozs7QUMvK0NBLGlEOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0EsY0FBYywwQkFBMEIsRUFBRTtXQUMxQyxjQUFjLGVBQWU7V0FDN0IsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSw2Q0FBNkMsd0RBQXdELEU7Ozs7O1dDQXJHO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiZW1vamktbWFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInZ1ZVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJ2dWVcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiRW1vamlNYXJ0XCJdID0gZmFjdG9yeShyZXF1aXJlKFwidnVlXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJFbW9qaU1hcnRcIl0gPSBmYWN0b3J5KHJvb3RbXCJWdWVcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfdnVlX18pIHtcbnJldHVybiAiLCJmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgYXJyMltpXSA9IGFycltpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlczsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDsiLCJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi9kZWZpbmVQcm9wZXJ0eVwiKTtcblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcbiAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG5cbiAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RTcHJlYWQ7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5OyIsImZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mMihvYmopOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZjIoU3ltYm9sLml0ZXJhdG9yKSA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIjx0ZW1wbGF0ZT5cbiAgPHNwYW5cbiAgICB2LWlmPVwidmlldy5jYW5SZW5kZXJcIlxuICAgIDp0aXRsZT1cInZpZXcudGl0bGVcIlxuICAgIDpkYXRhLXRpdGxlPVwidGl0bGVcIlxuICAgIGNsYXNzPVwiZW1vamktbWFydC1lbW9qaVwiXG4gICAgQG1vdXNlZW50ZXI9XCJvbk1vdXNlRW50ZXJcIlxuICAgIEBtb3VzZWxlYXZlPVwib25Nb3VzZUxlYXZlXCJcbiAgICBAY2xpY2s9XCJvbkNsaWNrXCJcbiAgPlxuICAgIDxzcGFuIDpjbGFzcz1cInZpZXcuY3NzQ2xhc3NcIiA6c3R5bGU9XCJ2aWV3LmNzc1N0eWxlXCI+e3tcbiAgICAgIHZpZXcuY29udGVudFxuICAgIH19PC9zcGFuPlxuICA8L3NwYW4+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgRW1vamlQcm9wcyB9IGZyb20gJy4uL3V0aWxzL3NoYXJlZC1wcm9wcydcbmltcG9ydCB7IEVtb2ppVmlldyB9IGZyb20gJy4uL3V0aWxzL2Vtb2ppLWRhdGEnXG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIGNvbXB1dGVkLCByZWYgfSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdFbW9qaScsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi5FbW9qaVByb3BzLFxuICAgIGRhdGE6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gIH0sXG5cbiAgZW1pdHM6IFsnbW91c2VlbnRlcicsICdtb3VzZWxlYXZlJywgJ2NsaWNrJ10sXG5cbiAgc2V0dXAocHJvcHMsIHsgZW1pdCB9KSB7XG4gICAgY29uc3QgZW1vamlPYmplY3QgPSBjb21wdXRlZCgoKSA9PiB0eXBlb2YgcHJvcHMuZW1vamkgPT0gJ3N0cmluZydcbiAgICAgID8gcHJvcHMuZGF0YS5maW5kRW1vamkocHJvcHMuZW1vamkpXG4gICAgICA6IHByb3BzLmVtb2ppKVxuXG4gICAgY29uc3QgdmlldyA9IGNvbXB1dGVkKCgpID0+IG5ldyBFbW9qaVZpZXcoXG4gICAgICBlbW9qaU9iamVjdC52YWx1ZSxcbiAgICAgIHByb3BzLnNraW4sXG4gICAgICBwcm9wcy5zZXQsXG4gICAgICBwcm9wcy5uYXRpdmUsXG4gICAgICBwcm9wcy5mYWxsYmFjayxcbiAgICAgIHByb3BzLnRvb2x0aXAsXG4gICAgICBwcm9wcy5zaXplLFxuICAgICkpXG5cbiAgICBjb25zdCBzYW5pdGl6ZWREYXRhID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIGVtb2ppT2JqZWN0LnZhbHVlLl9zYW5pdGl6ZWRcbiAgICB9KVxuXG4gICAgY29uc3QgdGl0bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICByZXR1cm4gcHJvcHMudG9vbHRpcCA/IGVtb2ppT2JqZWN0LnZhbHVlLnNob3J0X25hbWUgOiBudWxsXG4gICAgfSlcblxuICAgIHJldHVybiB7XG4gICAgICB2aWV3LFxuICAgICAgdGl0bGUsXG4gICAgICBvbkNsaWNrOiAoKSA9PiBlbWl0KCdjbGljaycsIGVtb2ppT2JqZWN0LnZhbHVlKSxcbiAgICAgIG9uTW91c2VFbnRlcjooKSA9PiBlbWl0KCdtb3VzZWVudGVyJywgZW1vamlPYmplY3QudmFsdWUpLFxuICAgICAgb25Nb3VzZUxlYXZlOigpID0+IGVtaXQoJ21vdXNlbGVhdmUnLCBlbW9qaU9iamVjdC52YWx1ZSksXG4gICAgICBlbW9qaU9iamVjdCwgLy8gdXNlIGplc3QgdW5pdFxuICAgICAgc2FuaXRpemVkRGF0YSwgLy8gdXNlIGplc3QgdW5pdFxuICAgIH1cbiAgfVxufSlcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydFwiIDpzdHlsZT1cImN1c3RvbVN0eWxlc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LWJhciBlbW9qaS1tYXJ0LWJhci1hbmNob3JzXCIgdi1pZj1cInNob3dDYXRlZ29yaWVzXCI+XG4gICAgICA8YW5jaG9yc1xuICAgICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgICA6aTE4bj1cIm1lcmdlZEkxOG5cIlxuICAgICAgICA6Y29sb3I9XCJjb2xvclwiXG4gICAgICAgIDpjYXRlZ29yaWVzPVwiY2F0ZWdvcmllc1wiXG4gICAgICAgIDphY3RpdmUtY2F0ZWdvcnk9XCJhY3RpdmVDYXRlZ29yeVwiXG4gICAgICAgIEBjbGljaz1cIm9uQW5jaG9yQ2xpY2tcIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cblxuICAgIDxzbG90XG4gICAgICBuYW1lPVwic2VhcmNoVGVtcGxhdGVcIlxuICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgIDppMThuPVwiaTE4blwiXG4gICAgICA6YXV0by1mb2N1cz1cImF1dG9Gb2N1c1wiXG4gICAgICA6b24tc2VhcmNoPVwib25TZWFyY2hcIlxuICAgID5cbiAgICAgIDxzZWFyY2hcbiAgICAgICAgdi1pZj1cInNob3dTZWFyY2hcIlxuICAgICAgICByZWY9XCJzZWFyY2hcIlxuICAgICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgICA6aTE4bj1cIm1lcmdlZEkxOG5cIlxuICAgICAgICA6YXV0by1mb2N1cz1cImF1dG9Gb2N1c1wiXG4gICAgICAgIDpvbi1zZWFyY2g9XCJvblNlYXJjaFwiXG4gICAgICAgIEBzZWFyY2g9XCJvblNlYXJjaFwiXG4gICAgICAvPlxuICAgIDwvc2xvdD5cblxuICAgIDxjYXRlZ29yeVxuICAgICAgdi1zaG93PVwic2VhcmNoRW1vamlzXCJcbiAgICAgIGNsYXNzPVwiZW1vamktbWFydC1zZWFyY2gtcmVzdWx0c1wiXG4gICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgOmkxOG49XCJtZXJnZWRJMThuXCJcbiAgICAgIGlkPVwic2VhcmNoXCJcbiAgICAgIG5hbWU9XCJTZWFyY2hcIlxuICAgICAgOmVtb2ppcz1cInNlYXJjaEVtb2ppc1wiXG4gICAgICA6ZW1vamktcHJvcHM9XCJlbW9qaVByb3BzXCJcbiAgICAvPlxuICAgIDxEeW5hbWljU2Nyb2xsZXJcbiAgICAgIHYtc2hvdz1cIiFzZWFyY2hFbW9qaXNcIlxuICAgICAgcmVmPVwiZHluU2Nyb2xsZXJSZWZcIlxuICAgICAgOml0ZW1zPVwic2Nyb2xsZXJDYXRlZ29yaWVzXCJcbiAgICAgIDptaW4taXRlbS1zaXplPVwiNjBcIlxuICAgICAgY2xhc3M9XCJzY3JvbGxlclwiXG4gICAgICA6YnVmZmVyPVwiNDAwXCJcbiAgICAgIGtleS1maWVsZD1cImlkXCJcbiAgICAgIDplbWl0LXVwZGF0ZT1cInRydWVcIlxuICAgICAgQHVwZGF0ZT1cIm9uU2Nyb2xsVXBkYXRlXCJcbiAgICA+XG4gICAgICA8dGVtcGxhdGUgdi1zbG90PVwieyBpdGVtLCBhY3RpdmUsIGluZGV4IH1cIj5cbiAgICAgICAgPER5bmFtaWNTY3JvbGxlckl0ZW0gOml0ZW09XCJpdGVtXCIgOmFjdGl2ZT1cImFjdGl2ZVwiIDpkYXRhLWluZGV4PVwiaW5kZXhcIj5cbiAgICAgICAgICA8Q2F0ZWdvcnlcbiAgICAgICAgICAgIHYtc2hvdz1cInRydWVcIlxuICAgICAgICAgICAgcmVmPVwiY2F0ZWdvcmllc1wiXG4gICAgICAgICAgICA6aTE4bj1cIml0ZW0ubWVyZ2VkSTE4blwiXG4gICAgICAgICAgICA6aWQ9XCJpdGVtLmNhdGVnb3J5LmlkXCJcbiAgICAgICAgICAgIDpuYW1lPVwiaXRlbS5jYXRlZ29yeS5uYW1lXCJcbiAgICAgICAgICAgIDplbW9qaXM9XCJpdGVtLmNhdGVnb3J5LmVtb2ppc1wiXG4gICAgICAgICAgICA6ZW1vamktcHJvcHM9XCJpdGVtLmVtb2ppUHJvcHNcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRHluYW1pY1Njcm9sbGVySXRlbT5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9EeW5hbWljU2Nyb2xsZXI+XG5cbiAgICA8c2xvdFxuICAgICAgbmFtZT1cInByZXZpZXdUZW1wbGF0ZVwiXG4gICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgOnRpdGxlPVwidGl0bGVcIlxuICAgICAgOmVtb2ppPVwicHJldmlld0Vtb2ppXCJcbiAgICAgIDppZGxlLWVtb2ppPVwiaWRsZUVtb2ppXCJcbiAgICAgIDpzaG93LXNraW4tdG9uZXM9XCJzaG93U2tpblRvbmVzXCJcbiAgICAgIDplbW9qaS1wcm9wcz1cImVtb2ppUHJvcHNcIlxuICAgICAgOnNraW4tcHJvcHM9XCJza2luUHJvcHNcIlxuICAgICAgOm9uLXNraW4tY2hhbmdlPVwib25Ta2luQ2hhbmdlXCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1iYXIgZW1vamktbWFydC1iYXItcHJldmlld1wiIHYtaWY9XCJzaG93UHJldmlld1wiPlxuICAgICAgICA8cHJldmlld1xuICAgICAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICAgICAgOnRpdGxlPVwidGl0bGVcIlxuICAgICAgICAgIDplbW9qaT1cInByZXZpZXdFbW9qaVwiXG4gICAgICAgICAgOmlkbGUtZW1vamk9XCJpZGxlRW1vamlcIlxuICAgICAgICAgIDpzaG93LXNraW4tdG9uZXM9XCJzaG93U2tpblRvbmVzXCJcbiAgICAgICAgICA6ZW1vamktcHJvcHM9XCJlbW9qaVByb3BzXCJcbiAgICAgICAgICA6c2tpbi1wcm9wcz1cInNraW5Qcm9wc1wiXG4gICAgICAgICAgOm9uLXNraW4tY2hhbmdlPVwib25Ta2luQ2hhbmdlXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2xvdD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0ICcuLi92ZW5kb3IvcmFmLXBvbHlmaWxsJ1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3V0aWxzL3N0b3JlJ1xuaW1wb3J0IGZyZXF1ZW50bHkgZnJvbSAnLi4vdXRpbHMvZnJlcXVlbnRseSdcbmltcG9ydCB7IGRlZXBNZXJnZSwgbWVhc3VyZVNjcm9sbGJhciB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgUGlja2VyUHJvcHMgfSBmcm9tICcuLi91dGlscy9zaGFyZWQtcHJvcHMnXG5pbXBvcnQgQW5jaG9ycyBmcm9tICcuL2FuY2hvcnMnXG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSAnLi9jYXRlZ29yeSdcbmltcG9ydCBQcmV2aWV3IGZyb20gJy4vcHJldmlldydcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9zZWFyY2gnXG5cbi8qXG4gKiBOb3RlIGFib3V0IGBidWZmZXJgIHNldHRpbmcgZm9yIER5bmFtaWNTY3JvbGxlcjogdGhpcyBpcyBhXG4gKiBmaXggZm9yICM0OSAtIHdoZW4gY2xpY2tpbmcgb24gdGhlIFwiRmxhZ3NcIiBjYXRlZ29yeSBmb3IgdGhlIGZpcnN0XG4gKiB0aW1lLCB0aGUgY2F0ZWdvcnkgaXMgbm90IHNjcm9sbGVkIHRvIHRoZSB0b3Agb2YgdGhlIGNvbXBvbmVudC5cbiAqIFRoaXMgaXMgYmVjYXVzZSB0aGUgbGFzdCBjYXRlZ29yeSBzaXplIGlzIG5vdCBjYWxjdWxhdGVkIHlldCBhbmRcbiAqIHZpcnR1YWwgc2Nyb2xsZXIgdGFrZXMgJ21pbkl0ZW1TaXplJyBhcyBjYXRlZ29yeSBoZWlnaHQuXG4gKlxuICogVmlydHVhbCBzY3JvbGxlciAoUmVjeWNsZVNjcm9sbGVyIGNvbXBvbmVudCkgdXNlcyBgYnVmZmVyYCB2YWx1ZVxuICogdG8gIGRlY2lkZSBob3cgbWFueSBjb21wb25lbnRzIHRvIHJlbmRlciBpbnRpdGlhbGx5IGRlcGVuZGluZyBvblxuICogdGhlIHNjcm9sbCBhcmVhIHNpemUgKyBidWZmZXIqMiAoYW5kIGFsbCBjYXRlZ29yaWVzIGluaXRpYWxseVxuICogaGF2ZSBtaW4gc2l6ZSwgNjBweCkuXG4gKlxuICogQnkgaW5jcmVhc2luZyBidWZmZXIgdG8gNDAwcHgsIHdlIG1ha2UgdGhlIHNjcm9sbGVyIHRvIHBlcmZvcm1cbiAqIHNpemUgY2FsY3VsYXRpb24gZm9yIGFsbCBjYXRlZ29yaWVzIGFuZCB0aGUgZm9sbG93aW5nXG4gKiBzY3JvbGxUb0l0ZW0oKSBjYWxscyB3b3JrIGNvcnJlY3RseS5cbiAqL1xuXG5pbXBvcnQgeyBEeW5hbWljU2Nyb2xsZXIsIER5bmFtaWNTY3JvbGxlckl0ZW0gfSBmcm9tICd2dWUzLXZpcnR1YWwtc2Nyb2xsZXInXG5pbXBvcnQgJ3Z1ZTMtdmlydHVhbC1zY3JvbGxlci9kaXN0L3Z1ZTMtdmlydHVhbC1zY3JvbGxlci5jc3MnXG5cbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgY29tcHV0ZWQsIHJlZiB9IGZyb20gJ3Z1ZSdcblxuY29uc3QgSTE4TiA9IHtcbiAgc2VhcmNoOiAnU2VhcmNoJyxcbiAgbm90Zm91bmQ6ICdObyBFbW9qaSBGb3VuZCcsXG4gIGNhdGVnb3JpZXM6IHtcbiAgICBzZWFyY2g6ICdTZWFyY2ggUmVzdWx0cycsXG4gICAgcmVjZW50OiAnRnJlcXVlbnRseSBVc2VkJyxcbiAgICBzbWlsZXlzOiAnU21pbGV5cyAmIEVtb3Rpb24nLFxuICAgIHBlb3BsZTogJ1Blb3BsZSAmIEJvZHknLFxuICAgIG5hdHVyZTogJ0FuaW1hbHMgJiBOYXR1cmUnLFxuICAgIGZvb2RzOiAnRm9vZCAmIERyaW5rJyxcbiAgICBhY3Rpdml0eTogJ0FjdGl2aXR5JyxcbiAgICBwbGFjZXM6ICdUcmF2ZWwgJiBQbGFjZXMnLFxuICAgIG9iamVjdHM6ICdPYmplY3RzJyxcbiAgICBzeW1ib2xzOiAnU3ltYm9scycsXG4gICAgZmxhZ3M6ICdGbGFncycsXG4gICAgY3VzdG9tOiAnQ3VzdG9tJyxcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ0Vtb2ppUGlja2VyJyxcblxuICBwcm9wczoge1xuICAgIC4uLlBpY2tlclByb3BzLFxuICAgIGRhdGE6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gIH0sXG5cbiAgY29tcG9uZW50czoge1xuICAgIEFuY2hvcnMsXG4gICAgQ2F0ZWdvcnksXG4gICAgUHJldmlldyxcbiAgICBTZWFyY2gsXG4gICAgRHluYW1pY1Njcm9sbGVyLFxuICAgIER5bmFtaWNTY3JvbGxlckl0ZW0sXG4gIH0sXG5cbiAgZW1pdHM6IFsnc2VsZWN0JywgJ3NraW4tY2hhbmdlJ10sXG5cbiAgc2V0dXAocHJvcHMsIHsgZW1pdCB9KSB7XG4gICAgbGV0IHNraXBTY3JvbGxVcGRhdGUgPSBmYWxzZVxuICAgIGxldCBjYXRlZ29yaWVzID0gWy4uLnByb3BzLmRhdGEuY2F0ZWdvcmllcygpXVxuXG4gICAgY29uc3QgcHJldmlld0Vtb2ppID0gcmVmKG51bGwpXG4gICAgY29uc3Qgc2VhcmNoRW1vamlzID0gcmVmKG51bGwpXG4gICAgY29uc3QgZHluU2Nyb2xsZXJSZWYgPSByZWYobnVsbClcblxuICAgIGNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzLmZpbHRlcihjYXRlZ29yeSA9PiBjYXRlZ29yeS5lbW9qaXMubGVuZ3RoID4gMClcbiAgICBjYXRlZ29yaWVzWzBdLmZpcnN0ID0gdHJ1ZVxuICAgIE9iamVjdC5mcmVlemUoY2F0ZWdvcmllcylcblxuICAgIGNvbnN0IGFjdGl2ZUNhdGVnb3J5ID0gcmVmKGNhdGVnb3JpZXNbMF0pXG5cbiAgICBjb25zdCBjYWxjdWxhdGVXaWR0aCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiBwcm9wcy5wZXJMaW5lICogKHByb3BzLmVtb2ppU2l6ZSArIDEyKSArIDEyICsgMiArIG1lYXN1cmVTY3JvbGxiYXIoKVxuICAgIH0pXG5cbiAgICBjb25zdCBhY3RpdmVTa2luID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMuc2tpbiB8fCBzdG9yZS5nZXQoJ3NraW4nKSB8fCBwcm9wcy5kZWZhdWx0U2tpbilcblxuICAgIGNvbnN0IGN1c3RvbVN0eWxlcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiBjYWxjdWxhdGVXaWR0aC52YWx1ZSArICdweCcsXG4gICAgICAgIC4uLnByb3BzLnBpY2tlclN0eWxlcyxcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgZW1vamlQcm9wcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hdGl2ZTogcHJvcHMubmF0aXZlLFxuICAgICAgICBza2luOiBhY3RpdmVTa2luLnZhbHVlLFxuICAgICAgICBzZXQ6IHByb3BzLnNldCxcbiAgICAgICAgZW1vamlUb29sdGlwOiBwcm9wcy5lbW9qaVRvb2x0aXAsXG4gICAgICAgIGVtb2ppU2l6ZTogcHJvcHMuZW1vamlTaXplLFxuICAgICAgICBvbkVudGVyOiBvbkVtb2ppRW50ZXIsXG4gICAgICAgIG9uTGVhdmU6IG9uRW1vamlMZWF2ZSxcbiAgICAgICAgb25DbGljazogb25FbW9qaUNsaWNrLFxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBza2luUHJvcHMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBza2luOiBhY3RpdmVTa2luLnZhbHVlLFxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBtZXJnZWRJMThuID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIE9iamVjdC5mcmVlemUoZGVlcE1lcmdlKEkxOE4sIHByb3BzLmkxOG4pKVxuICAgIH0pXG5cbiAgICBjb25zdCBzY3JvbGxlckNhdGVnb3JpZXMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBsZXQgaWQgPSAwXG4gICAgICByZXR1cm4gY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWQ6IGlkKyssXG4gICAgICAgICAgY2F0ZWdvcnk6IGNhdGVnb3J5LFxuICAgICAgICAgIHNob3c6XG4gICAgICAgICAgICAhc2VhcmNoRW1vamlzLnZhbHVlICYmXG4gICAgICAgICAgICAocHJvcHMuaW5maW5pdGVTY3JvbGwgfHwgU3RyaW5nKGNhdGVnb3J5KSA9PT0gU3RyaW5nKGFjdGl2ZUNhdGVnb3J5LnZhbHVlKSksXG4gICAgICAgICAgbWVyZ2VkSTE4bjogbWVyZ2VkSTE4bi52YWx1ZSxcbiAgICAgICAgICBkYXRhOiBwcm9wcy5kYXRhLFxuICAgICAgICAgIGVtb2ppc0xlbmd0aDogY2F0ZWdvcnkuZW1vamlzLmxlbmd0aCxcbiAgICAgICAgICBlbW9qaVByb3BzOiBlbW9qaVByb3BzLnZhbHVlLFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBjb25zdCBpZGxlRW1vamkgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICByZXR1cm4gcHJvcHMuZGF0YS5lbW9qaShwcm9wcy5lbW9qaSlcbiAgICAgIC8vIHRyeSB7XG4gICAgICAvLyAgIHJldHVybiBwcm9wcy5kYXRhLmVtb2ppKHByb3BzLmVtb2ppKVxuICAgICAgLy8gfSBjYXRjaCAoZSkge1xuICAgICAgLy8gICBjb25zb2xlLmVycm9yKFxuICAgICAgLy8gICAgICdEZWZhdWx0IHByZXZpZXcgZW1vamkgYCcgK1xuICAgICAgLy8gICAgIHByb3BzLmVtb2ppICtcbiAgICAgIC8vICAgICAnYCBpcyBub3QgYXZhaWxhYmxlLCBjaGVjayB0aGUgUGlja2VyIGBlbW9qaWAgcHJvcGVydHknLFxuICAgICAgLy8gICApXG4gICAgICAvLyAgIHJldHVybiBwcm9wcy5kYXRhLmZpcnN0RW1vamkoKVxuICAgICAgLy8gfVxuICAgIH0pXG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNvbnN0IG9uU2Nyb2xsVXBkYXRlID0gKHN0YXJ0SW5kZXgsIGVuZEluZGV4KSA9PiB7XG4gICAgICBpZiAoc2tpcFNjcm9sbFVwZGF0ZSkge1xuICAgICAgICBza2lwU2Nyb2xsVXBkYXRlID0gZmFsc2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFRoZSBgZW5kSW5kZXgtMmAgc2VlbXMgdG8gd29yaywgYnV0IHRoaXMgZGVwZW5kcyBvbiB0aGUgaW50ZXJuYWxzXG4gICAgICAgIC8vIG9mIHRoZSB2aXJ0dWFsIHNjcm9sbGVyLCBJIGRpZG4ndCBvYnNlcnZlIGl0IHRvIGJlIGxlc3MgdGhhbiAwLFxuICAgICAgICAvLyBidXQganVzdCBmb3IgdGhlIGNhc2UsIHdlIGFzbG8gaGF2ZSBhIGZhbGxiYWNrIHRvIGAwYCBoZXJlLlxuICAgICAgICBsZXQgYWN0aXZlSW5kZXggPSBlbmRJbmRleCAtIDIgPiAwID8gZW5kSW5kZXggLSAyIDogMFxuICAgICAgICBhY3RpdmVDYXRlZ29yeS52YWx1ZSA9IGNhdGVnb3JpZXNbYWN0aXZlSW5kZXhdXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG9uQW5jaG9yQ2xpY2sgPSAoY2F0ZWdvcnkpID0+IHtcbiAgICAgIGxldCBpID0gY2F0ZWdvcmllcy5pbmRleE9mKGNhdGVnb3J5KVxuICAgICAgaWYgKGR5blNjcm9sbGVyUmVmLnZhbHVlKSB7XG4gICAgICAgIGR5blNjcm9sbGVyUmVmLnZhbHVlLnNjcm9sbFRvSXRlbShpKVxuICAgICAgfVxuXG4gICAgICBhY3RpdmVDYXRlZ29yeS52YWx1ZSA9IGNhdGVnb3JpZXNbaV1cbiAgICAgIHNraXBTY3JvbGxVcGRhdGUgPSB0cnVlXG4gICAgfVxuICAgIGNvbnN0IG9uU2VhcmNoID0gKHZhbHVlKSA9PiB7XG4gICAgICBzZWFyY2hFbW9qaXMudmFsdWUgPSBwcm9wcy5kYXRhLnNlYXJjaCh2YWx1ZSwgcHJvcHMubWF4U2VhcmNoUmVzdWx0cylcbiAgICB9XG4gICAgY29uc3Qgb25FbW9qaUVudGVyID0gKGVtb2ppKSA9PiB7XG4gICAgICBwcmV2aWV3RW1vamkudmFsdWUgPSBlbW9qaVxuICAgIH1cbiAgICBjb25zdCBvbkVtb2ppTGVhdmUgPSAoKSA9PiB7XG4gICAgICBwcmV2aWV3RW1vamkudmFsdWUgPSBudWxsXG4gICAgfVxuICAgIGNvbnN0IG9uRW1vamlDbGljayA9IChlbW9qaSkgPT4ge1xuICAgICAgZW1pdCgnc2VsZWN0JywgZW1vamkpXG4gICAgICBmcmVxdWVudGx5LmFkZChlbW9qaSlcbiAgICB9XG4gICAgY29uc3Qgb25Ta2luQ2hhbmdlID0gKHNraW4pID0+IHtcbiAgICAgIGFjdGl2ZVNraW4udmFsdWUgPSBza2luXG4gICAgICBzdG9yZS51cGRhdGUoeyBza2luIH0pXG5cbiAgICAgIGVtaXQoJ3NraW4tY2hhbmdlJywgc2tpbilcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgZHluU2Nyb2xsZXJSZWYsXG4gICAgICBhY3RpdmVDYXRlZ29yeSxcbiAgICAgIHByZXZpZXdFbW9qaSxcbiAgICAgIHNlYXJjaEVtb2ppcyxcbiAgICAgIGNhdGVnb3JpZXMsXG5cbiAgICAgIGN1c3RvbVN0eWxlcyxcbiAgICAgIG1lcmdlZEkxOG4sXG4gICAgICBvbkFuY2hvckNsaWNrLFxuICAgICAgb25TZWFyY2gsXG4gICAgICBlbW9qaVByb3BzLFxuICAgICAgc2Nyb2xsZXJDYXRlZ29yaWVzLFxuICAgICAgb25TY3JvbGxVcGRhdGUsXG4gICAgICBpZGxlRW1vamksXG4gICAgICBza2luUHJvcHMsXG4gICAgICBvblNraW5DaGFuZ2UsXG4gICAgfVxuICB9XG59KVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0IGVtb2ppLW1hcnQtc3RhdGljXCIgOnN0eWxlPVwiY3VzdG9tU3R5bGVzXCI+XG4gICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtYmFyIGVtb2ppLW1hcnQtYmFyLWFuY2hvcnNcIiB2LWlmPVwic2hvd0NhdGVnb3JpZXNcIj5cbiAgICAgIDxhbmNob3JzXG4gICAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICAgIDppMThuPVwibWVyZ2VkSTE4blwiXG4gICAgICAgIDpjb2xvcj1cImNvbG9yXCJcbiAgICAgICAgOmNhdGVnb3JpZXM9XCJjYXRlZ29yaWVzXCJcbiAgICAgICAgOmFjdGl2ZS1jYXRlZ29yeT1cImFjdGl2ZUNhdGVnb3J5XCJcbiAgICAgICAgQGNsaWNrPVwib25BbmNob3JDbGlja1wiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuXG4gICAgPHNsb3RcbiAgICAgIG5hbWU9XCJzZWFyY2hUZW1wbGF0ZVwiXG4gICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgOmkxOG49XCJpMThuXCJcbiAgICAgIDphdXRvLWZvY3VzPVwiYXV0b0ZvY3VzXCJcbiAgICAgIDpvbi1zZWFyY2g9XCJvblNlYXJjaFwiXG4gICAgPlxuICAgICAgPHNlYXJjaFxuICAgICAgICB2LWlmPVwic2hvd1NlYXJjaFwiXG4gICAgICAgIHJlZj1cInNlYXJjaFwiXG4gICAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICAgIDppMThuPVwibWVyZ2VkSTE4blwiXG4gICAgICAgIDphdXRvLWZvY3VzPVwiYXV0b0ZvY3VzXCJcbiAgICAgICAgOm9uLXNlYXJjaD1cIm9uU2VhcmNoXCJcbiAgICAgICAgQHNlYXJjaD1cIm9uU2VhcmNoXCJcbiAgICAgIC8+XG4gICAgPC9zbG90PlxuXG4gICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtc2Nyb2xsXCIgcmVmPVwic2Nyb2xsUmVmXCIgQHNjcm9sbD1cIm9uU2Nyb2xsXCI+XG4gICAgICA8Y2F0ZWdvcnlcbiAgICAgICAgdi1zaG93PVwic2VhcmNoRW1vamlzXCJcbiAgICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgICAgOmkxOG49XCJtZXJnZWRJMThuXCJcbiAgICAgICAgaWQ9XCJzZWFyY2hcIlxuICAgICAgICBuYW1lPVwiU2VhcmNoXCJcbiAgICAgICAgOmVtb2ppcz1cInNlYXJjaEVtb2ppc1wiXG4gICAgICAgIDplbW9qaS1wcm9wcz1cImVtb2ppUHJvcHNcIlxuICAgICAgLz5cbiAgICAgIDxjYXRlZ29yeVxuICAgICAgICB2LWZvcj1cImNhdGVnb3J5IGluIGZpbHRlcmVkQ2F0ZWdvcmllc1wiXG4gICAgICAgIHYtc2hvdz1cIiFzZWFyY2hFbW9qaXMgJiYgKGluZmluaXRlU2Nyb2xsIHx8IGNhdGVnb3J5ID09PSBhY3RpdmVDYXRlZ29yeSlcIlxuICAgICAgICByZWY9XCJjYXRlZ29yaWVzXCJcbiAgICAgICAgOmtleT1cImNhdGVnb3J5LmlkXCJcbiAgICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgICAgOmkxOG49XCJtZXJnZWRJMThuXCJcbiAgICAgICAgOmlkPVwiY2F0ZWdvcnkuaWRcIlxuICAgICAgICA6bmFtZT1cImNhdGVnb3J5Lm5hbWVcIlxuICAgICAgICA6ZW1vamlzPVwiY2F0ZWdvcnkuZW1vamlzXCJcbiAgICAgICAgOmVtb2ppLXByb3BzPVwiZW1vamlQcm9wc1wiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuXG4gICAgPHNsb3RcbiAgICAgIG5hbWU9XCJwcmV2aWV3VGVtcGxhdGVcIlxuICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgIDp0aXRsZT1cInRpdGxlXCJcbiAgICAgIDplbW9qaT1cInByZXZpZXdFbW9qaVwiXG4gICAgICA6aWRsZS1lbW9qaT1cImlkbGVFbW9qaVwiXG4gICAgICA6c2hvdy1za2luLXRvbmVzPVwic2hvd1NraW5Ub25lc1wiXG4gICAgICA6ZW1vamktcHJvcHM9XCJlbW9qaVByb3BzXCJcbiAgICAgIDpza2luLXByb3BzPVwic2tpblByb3BzXCJcbiAgICAgIDpvbi1za2luLWNoYW5nZT1cIm9uU2tpbkNoYW5nZVwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtYmFyIGVtb2ppLW1hcnQtYmFyLXByZXZpZXdcIiB2LWlmPVwic2hvd1ByZXZpZXdcIj5cbiAgICAgICAgPHByZXZpZXdcbiAgICAgICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgICAgIDp0aXRsZT1cInRpdGxlXCJcbiAgICAgICAgICA6ZW1vamk9XCJwcmV2aWV3RW1vamlcIlxuICAgICAgICAgIDppZGxlLWVtb2ppPVwiaWRsZUVtb2ppXCJcbiAgICAgICAgICA6c2hvdy1za2luLXRvbmVzPVwic2hvd1NraW5Ub25lc1wiXG4gICAgICAgICAgOmVtb2ppLXByb3BzPVwiZW1vamlQcm9wc1wiXG4gICAgICAgICAgOnNraW4tcHJvcHM9XCJza2luUHJvcHNcIlxuICAgICAgICAgIDpvbi1za2luLWNoYW5nZT1cIm9uU2tpbkNoYW5nZVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L3Nsb3Q+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCAnLi4vdmVuZG9yL3JhZi1wb2x5ZmlsbCdcbmltcG9ydCBzdG9yZSBmcm9tICcuLi91dGlscy9zdG9yZSdcbmltcG9ydCBmcmVxdWVudGx5IGZyb20gJy4uL3V0aWxzL2ZyZXF1ZW50bHknXG5pbXBvcnQgeyBkZWVwTWVyZ2UsIG1lYXN1cmVTY3JvbGxiYXIgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IFBpY2tlclByb3BzIH0gZnJvbSAnLi4vdXRpbHMvc2hhcmVkLXByb3BzJ1xuaW1wb3J0IEFuY2hvcnMgZnJvbSAnLi9hbmNob3JzLnZ1ZSdcbmltcG9ydCBDYXRlZ29yeSBmcm9tICcuL2NhdGVnb3J5LnZ1ZSdcbmltcG9ydCBQcmV2aWV3IGZyb20gJy4vcHJldmlldy52dWUnXG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vc2VhcmNoLnZ1ZSdcbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmLCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuLypcbiAqIE5vdGUgYWJvdXQgYGJ1ZmZlcmAgc2V0dGluZyBmb3IgRHluYW1pY1Njcm9sbGVyOiB0aGlzIGlzIGFcbiAqIGZpeCBmb3IgIzQ5IC0gd2hlbiBjbGlja2luZyBvbiB0aGUgXCJGbGFnc1wiIGNhdGVnb3J5IGZvciB0aGUgZmlyc3RcbiAqIHRpbWUsIHRoZSBjYXRlZ29yeSBpcyBub3Qgc2Nyb2xsZWQgdG8gdGhlIHRvcCBvZiB0aGUgY29tcG9uZW50LlxuICogVGhpcyBpcyBiZWNhdXNlIHRoZSBsYXN0IGNhdGVnb3J5IHNpemUgaXMgbm90IGNhbGN1bGF0ZWQgeWV0IGFuZFxuICogdmlydHVhbCBzY3JvbGxlciB0YWtlcyAnbWluSXRlbVNpemUnIGFzIGNhdGVnb3J5IGhlaWdodC5cbiAqXG4gKiBWaXJ0dWFsIHNjcm9sbGVyIChSZWN5Y2xlU2Nyb2xsZXIgY29tcG9uZW50KSB1c2VzIGBidWZmZXJgIHZhbHVlXG4gKiB0byAgZGVjaWRlIGhvdyBtYW55IGNvbXBvbmVudHMgdG8gcmVuZGVyIGludGl0aWFsbHkgZGVwZW5kaW5nIG9uXG4gKiB0aGUgc2Nyb2xsIGFyZWEgc2l6ZSArIGJ1ZmZlcioyIChhbmQgYWxsIGNhdGVnb3JpZXMgaW5pdGlhbGx5XG4gKiBoYXZlIG1pbiBzaXplLCA2MHB4KS5cbiAqXG4gKiBCeSBpbmNyZWFzaW5nIGJ1ZmZlciB0byA0MDBweCwgd2UgbWFrZSB0aGUgc2Nyb2xsZXIgdG8gcGVyZm9ybVxuICogc2l6ZSBjYWxjdWxhdGlvbiBmb3IgYWxsIGNhdGVnb3JpZXMgYW5kIHRoZSBmb2xsb3dpbmdcbiAqIHNjcm9sbFRvSXRlbSgpIGNhbGxzIHdvcmsgY29ycmVjdGx5LlxuICovXG5cbmltcG9ydCB7IER5bmFtaWNTY3JvbGxlciwgRHluYW1pY1Njcm9sbGVySXRlbSB9IGZyb20gJ3Z1ZTMtdmlydHVhbC1zY3JvbGxlcidcbmltcG9ydCAndnVlMy12aXJ0dWFsLXNjcm9sbGVyL2Rpc3QvdnVlMy12aXJ0dWFsLXNjcm9sbGVyLmNzcydcblxuY29uc3QgSTE4TiA9IHtcbiAgc2VhcmNoOiAnU2VhcmNoJyxcbiAgbm90Zm91bmQ6ICdObyBFbW9qaSBGb3VuZCcsXG4gIGNhdGVnb3JpZXM6IHtcbiAgICBzZWFyY2g6ICdTZWFyY2ggUmVzdWx0cycsXG4gICAgcmVjZW50OiAnRnJlcXVlbnRseSBVc2VkJyxcbiAgICBzbWlsZXlzOiAnU21pbGV5cyAmIEVtb3Rpb24nLFxuICAgIHBlb3BsZTogJ1Blb3BsZSAmIEJvZHknLFxuICAgIG5hdHVyZTogJ0FuaW1hbHMgJiBOYXR1cmUnLFxuICAgIGZvb2RzOiAnRm9vZCAmIERyaW5rJyxcbiAgICBhY3Rpdml0eTogJ0FjdGl2aXR5JyxcbiAgICBwbGFjZXM6ICdUcmF2ZWwgJiBQbGFjZXMnLFxuICAgIG9iamVjdHM6ICdPYmplY3RzJyxcbiAgICBzeW1ib2xzOiAnU3ltYm9scycsXG4gICAgZmxhZ3M6ICdGbGFncycsXG4gICAgY3VzdG9tOiAnQ3VzdG9tJyxcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ0Vtb2ppU3RhdGljUGlja2VyJyxcblxuICBjb21wb25lbnRzOiB7XG4gICAgQW5jaG9ycyxcbiAgICBDYXRlZ29yeSxcbiAgICBQcmV2aWV3LFxuICAgIFNlYXJjaCxcbiAgICBEeW5hbWljU2Nyb2xsZXIsXG4gICAgRHluYW1pY1Njcm9sbGVySXRlbSxcbiAgfSxcblxuICBwcm9wczoge1xuICAgIC4uLlBpY2tlclByb3BzLFxuICAgIGluY2x1ZGU6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogKCkgPT4gW11cbiAgICB9LFxuICAgIGVtb2ppc1RvU2hvd0ZpbHRlcjoge1xuICAgICAgdHlwZTogRnVuY3Rpb25cbiAgICB9LFxuICAgIGV4Y2x1ZGU6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogKCkgPT4gW11cbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gIH0sXG5cbiAgZW1pdHM6IFsnc2tpbi1jaGFuZ2UnLCAnc2VsZWN0J10sXG5cbiAgc2V0dXAocHJvcHMsIHsgZW1pdCB9KSB7XG4gICAgbGV0IGNhdGVnb3JpZXMgPSBbLi4ucHJvcHMuZGF0YS5jYXRlZ29yaWVzKCldLmZpbHRlcigoY2F0ZWdvcnkpID0+IHtcbiAgICAgIHJldHVybiBjYXRlZ29yeS5lbW9qaXMubGVuZ3RoID4gMFxuICAgIH0pXG5cbiAgICBjYXRlZ29yaWVzWzBdLmZpcnN0ID0gdHJ1ZVxuICAgIE9iamVjdC5mcmVlemUodGhpcy5jYXRlZ29yaWVzKVxuXG4gICAgY29uc3Qgc2Nyb2xsUmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgY2F0ZWdvcmllc1JlZiA9IHJlZihudWxsKVxuICAgIGNvbnN0IGFjdGl2ZVNraW4gPSByZWYocHJvcHMuc2tpbiB8fCBzdG9yZS5nZXQoJ3NraW4nKSB8fCBwcm9wcy5kZWZhdWx0U2tpbilcbiAgICBjb25zdCBhY3RpdmVDYXRlZ29yeSA9IHJlZihjYXRlZ29yaWVzWzBdKVxuICAgIGNvbnN0IHByZXZpZXdFbW9qaSA9IHJlZihudWxsKVxuICAgIGNvbnN0IHNlYXJjaEVtb2ppcyA9IHJlZihudWxsKVxuXG4gICAgY29uc3QgY2FsY3VsYXRlV2lkdGggPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5wZXJMaW5lICogKHByb3BzLmVtb2ppU2l6ZSArIDEyKSArIDEyICsgMiArIG1lYXN1cmVTY3JvbGxiYXIoKSlcblxuICAgIGNvbnN0IGVtb2ppUHJvcHMgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgbmF0aXZlOiBwcm9wcy5uYXRpdmUsXG4gICAgICBza2luOiBhY3RpdmVTa2luLnZhbHVlLFxuICAgICAgc2V0OiBwcm9wcy5zZXQsXG4gICAgICBlbW9qaVRvb2x0aXA6IHByb3BzLmVtb2ppVG9vbHRpcCxcbiAgICAgIGVtb2ppU2l6ZTogcHJvcHMuZW1vamlTaXplLFxuICAgICAgb25FbnRlcjogb25FbW9qaUVudGVyLFxuICAgICAgb25MZWF2ZTogb25FbW9qaUxlYXZlLFxuICAgICAgb25DbGljazogb25FbW9qaUNsaWNrLFxuICAgIH0pKVxuXG4gICAgY29uc3Qgc2tpblByb3BzID0gY29tcHV0ZWQoKCkgPT4gKHsgc2tpbjogYWN0aXZlU2tpbi52YWx1ZSB9KSlcblxuICAgIGNvbnN0IGN1c3RvbVN0eWxlcyA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICB3aWR0aDogY2FsY3VsYXRlV2lkdGgudmFsdWUgKyAncHgnLFxuICAgICAgLi4ucHJvcHMucGlja2VyU3R5bGVzLFxuICAgIH0pKVxuXG4gICAgY29uc3QgZmlsdGVyZWRDYXRlZ29yaWVzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIGNhdGVnb3JpZXMuZmlsdGVyKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICBsZXQgaXNJbmNsdWRlZCA9XG4gICAgICAgICAgcHJvcHMuaW5jbHVkZSAmJiBwcm9wcy5pbmNsdWRlLmxlbmd0aFxuICAgICAgICAgICAgPyBwcm9wcy5pbmNsdWRlLmluZGV4T2YoY2F0ZWdvcnkuaWQpID4gLTFcbiAgICAgICAgICAgIDogdHJ1ZVxuICAgICAgICBsZXQgaXNFeGNsdWRlZCA9XG4gICAgICAgICAgcHJvcHMuZXhjbHVkZSAmJiBwcm9wcy5leGNsdWRlLmxlbmd0aFxuICAgICAgICAgICAgPyBwcm9wcy5leGNsdWRlLmluZGV4T2YoY2F0ZWdvcnkuaWQpID4gLTFcbiAgICAgICAgICAgIDogZmFsc2VcbiAgICAgICAgbGV0IGhhc0Vtb2ppcyA9IGNhdGVnb3J5LmVtb2ppcy5sZW5ndGggPiAwXG4gICAgICAgIGlmIChwcm9wcy5lbW9qaXNUb1Nob3dGaWx0ZXIpIHtcbiAgICAgICAgICBoYXNFbW9qaXMgPSBjYXRlZ29yeS5lbW9qaXMuc29tZSgoZW1vamkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBwcm9wcy5lbW9qaXNUb1Nob3dGaWx0ZXIocHJvcHMuZGF0YS5lbW9qaXNbZW1vamldIHx8IGVtb2ppKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzSW5jbHVkZWQgJiYgIWlzRXhjbHVkZWQgJiYgaGFzRW1vamlzXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBjb25zdCBpZGxlRW1vamkgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gcHJvcHMuZGF0YS5lbW9qaShwcm9wcy5lbW9qaSlcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAnRGVmYXVsdCBwcmV2aWV3IGVtb2ppIGAnICtcbiAgICAgICAgICBwcm9wcy5lbW9qaSArXG4gICAgICAgICAgJ2AgaXMgbm90IGF2YWlsYWJsZSwgY2hlY2sgdGhlIFBpY2tlciBgZW1vamlgIHByb3BlcnR5JyxcbiAgICAgICAgKVxuICAgICAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgICAgIHJldHVybiBwcm9wcy5kYXRhLmZpcnN0RW1vamkoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBsZXQgd2FpdGluZ0ZvclBhaW50ID0gZmFsc2VcbiAgICBjb25zdCBvblNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGlmIChwcm9wcy5pbmZpbml0ZVNjcm9sbCAmJiAhd2FpdGluZ0ZvclBhaW50KSB7XG4gICAgICAgIHdhaXRpbmdGb3JQYWludCA9IHRydWVcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShvblNjcm9sbFBhaW50KVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG9uU2Nyb2xsUGFpbnQgPSAoKSA9PiB7XG4gICAgICB3YWl0aW5nRm9yUGFpbnQgPSBmYWxzZVxuICAgICAgbGV0IHNjcm9sbFRvcCA9IHNjcm9sbFJlZi5zY3JvbGxUb3AsXG4gICAgICAgIF9hY3RpdmVDYXRlZ29yeSA9IGZpbHRlcmVkQ2F0ZWdvcmllcy52YWx1ZVswXVxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBmaWx0ZXJlZENhdGVnb3JpZXMudmFsdWUubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjYXRlZ29yeSA9IGZpbHRlcmVkQ2F0ZWdvcmllcy52YWx1ZVtpXSxcbiAgICAgICAgICBjb21wb25lbnQgPSBjYXRlZ29yaWVzUmVmLnZhbHVlW2ldXG4gICAgICAgIC8vIFRoZSBgLTUwYCBvZmZzZXQgc3dpdGNoZXMgYWN0aXZlIGNhdGVnb3J5IChzZWxlY3RlZCBpbiB0aGVcbiAgICAgICAgLy8gYW5jaG9ycyBiYXIpIGEgYml0IGVhcmlsZXIsIGJlZm9yZSBpdCBhY3R1YWxseSByZWFjaGVzIHRoZSB0b3AuXG4gICAgICAgIGlmIChjb21wb25lbnQgJiYgY29tcG9uZW50LiRlbC5vZmZzZXRUb3AgLSA1MCA+IHNjcm9sbFRvcCkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgX2FjdGl2ZUNhdGVnb3J5ID0gY2F0ZWdvcnlcbiAgICAgIH1cblxuICAgICAgYWN0aXZlQ2F0ZWdvcnkudmFsdWUgPSBfYWN0aXZlQ2F0ZWdvcnlcbiAgICB9XG5cbiAgICBjb25zdCBvbkFuY2hvckNsaWNrID0gKGNhdGVnb3J5KSA9PiB7XG4gICAgICBsZXQgaSA9IGZpbHRlcmVkQ2F0ZWdvcmllcy52YWx1ZS5pbmRleE9mKGNhdGVnb3J5KSxcbiAgICAgICAgY29tcG9uZW50ID0gY2F0ZWdvcmllc1JlZi52YWx1ZVtpXSxcbiAgICAgICAgc2Nyb2xsVG9Db21wb25lbnQgPSAoKSA9PiB7XG4gICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgbGV0IHRvcCA9IGNvbXBvbmVudC4kZWwub2Zmc2V0VG9wXG4gICAgICAgICAgICBpZiAoY2F0ZWdvcnkuZmlyc3QpIHtcbiAgICAgICAgICAgICAgdG9wID0gMFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzY3JvbGxSZWYudmFsdWUuc2Nyb2xsVG9wID0gdG9wXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5pbmZpbml0ZVNjcm9sbCkge1xuICAgICAgICBzY3JvbGxUb0NvbXBvbmVudCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY3RpdmVDYXRlZ29yeS52YWx1ZSA9IGZpbHRlcmVkQ2F0ZWdvcmllcy52YWx1ZVtpXVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG9uU2VhcmNoID0gKHZhbHVlKSA9PiB7XG4gICAgICBzZWFyY2hFbW9qaXMudmFsdWUgPSBwcm9wcy5kYXRhLnNlYXJjaCh2YWx1ZSwgcHJvcHMubWF4U2VhcmNoUmVzdWx0cylcbiAgICB9XG5cbiAgICBjb25zdCBvbkVtb2ppRW50ZXIgPSAoZW1vamkpID0+IHtcbiAgICAgIHByZXZpZXdFbW9qaS52YWx1ZSA9IGVtb2ppXG4gICAgfVxuXG4gICAgY29uc3Qgb25FbW9qaUxlYXZlID0gKCkgPT4ge1xuICAgICAgcHJldmlld0Vtb2ppLnZhbHVlID0gbnVsbFxuICAgIH1cblxuICAgIGNvbnN0IG9uRW1vamlDbGljayA9IChlbW9qaSkgPT4ge1xuICAgICAgZW1pdCgnc2VsZWN0JywgZW1vamkpXG4gICAgICBmcmVxdWVudGx5LmFkZChlbW9qaSlcbiAgICB9XG5cbiAgICBjb25zdCBvblNraW5DaGFuZ2UgPSAoc2tpbikgPT4ge1xuICAgICAgYWN0aXZlU2tpbi52YWx1ZSA9IHNraW5cbiAgICAgIHN0b3JlLnVwZGF0ZSh7IHNraW4gfSlcblxuICAgICAgZW1pdCgnc2tpbi1jaGFuZ2UnLCBza2luKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBhY3RpdmVDYXRlZ29yeSxcbiAgICAgIHByZXZpZXdFbW9qaSxcbiAgICAgIHNlYXJjaEVtb2ppcyxcbiAgICAgIGN1c3RvbVN0eWxlcyxcbiAgICAgIGZpbHRlcmVkQ2F0ZWdvcmllcyxcbiAgICAgIHNraW5Qcm9wcyxcbiAgICAgIG1lcmdlZEkxOG46ICgpID0+IE9iamVjdC5mcmVlemUoZGVlcE1lcmdlKEkxOE4sIHByb3BzLmkxOG4pKSxcbiAgICAgIGlkbGVFbW9qaSxcblxuICAgICAgc2Nyb2xsUmVmLFxuICAgICAgY2F0ZWdvcmllcyxcbiAgICAgIG9uQW5jaG9yQ2xpY2ssXG4gICAgICBvblNlYXJjaCxcbiAgICAgIG9uU2Nyb2xsLFxuICAgICAgZW1vamlQcm9wcyxcbiAgICAgIG9uU2tpbkNoYW5nZSxcbiAgICB9XG4gIH1cbn0pXG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cblxuPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtYW5jaG9yc1wiPlxuICA8c3BhblxuICAgIHYtZm9yPVwiY2F0ZWdvcnkgaW4gY2F0ZWdvcmllc1wiXG4gICAgOmtleT1cImNhdGVnb3J5LmlkXCJcbiAgICA6Y2xhc3M9XCJ7ICdlbW9qaS1tYXJ0LWFuY2hvcic6IHRydWUsICdlbW9qaS1tYXJ0LWFuY2hvci1zZWxlY3RlZCc6IGNhdGVnb3J5LmlkID09PSBhY3RpdmVDYXRlZ29yeS5pZCB9XCJcbiAgICA6c3R5bGU9XCJ7ICdjb2xvcic6IChjYXRlZ29yeS5pZCA9PT0gYWN0aXZlQ2F0ZWdvcnkuaWQgPyBjb2xvciA6ICcnKSB9XCJcbiAgICA6ZGF0YS10aXRsZT1cImkxOG4uY2F0ZWdvcmllc1tjYXRlZ29yeS5pZF1cIlxuICAgIEBjbGljaz1cIiRlbWl0KCdjbGljaycsIGNhdGVnb3J5KVwiPlxuICAgIDxkaXYgdi1odG1sPVwic3Znc1tjYXRlZ29yeS5pZF1cIi8+XG4gICAgPHNwYW4gY2xhc3M9XCJlbW9qaS1tYXJ0LWFuY2hvci1iYXJcIiA6c3R5bGU9XCJ7IGJhY2tncm91bmRDb2xvcjogY29sb3IgfVwiPjwvc3Bhbj5cbiAgPC9zcGFuPlxuPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCBzdmdzIGZyb20gJy4uL3N2Z3MnXG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdBbmNob3JzJyxcblxuICBwcm9wczoge1xuICAgIGkxOG46IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nXG4gICAgfSxcbiAgICBjYXRlZ29yaWVzOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBhY3RpdmVDYXRlZ29yeToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgZGVmYXVsdCgpIHtcbiAgICAgICAgcmV0dXJuIHt9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHNldHVwKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdmdzXG4gICAgfVxuICB9XG59KVxuXG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cblxuPGRpdiA6Y2xhc3M9XCJ7ICdlbW9qaS1tYXJ0LWNhdGVnb3J5JzogdHJ1ZSwgJ2Vtb2ppLW1hcnQtbm8tcmVzdWx0cyc6ICFoYXNSZXN1bHRzIH1cIiB2LWlmPVwiaXNWaXNpYmxlICYmIChpc1NlYXJjaCB8fCBoYXNSZXN1bHRzKVwiPlxuICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1jYXRlZ29yeS1sYWJlbFwiPlxuICAgIDxzcGFuPnt7IGkxOG4uY2F0ZWdvcmllc1tpZF0gfX08L3NwYW4+XG4gIDwvZGl2PlxuXG4gIDx0ZW1wbGF0ZSB2LWZvcj1cInsgZW1vamlPYmplY3QsIGVtb2ppVmlld30gaW4gZW1vamlPYmplY3RzXCI+XG4gICAgPHNwYW5cbiAgICAgIHYtaWY9XCJlbW9qaVZpZXcuY2FuUmVuZGVyXCJcbiAgICAgIDpkYXRhLXRpdGxlPVwiZW1vamlPYmplY3Quc2hvcnRfbmFtZVwiXG4gICAgICA6dGl0bGU9XCJlbW9qaVZpZXcudGl0bGVcIlxuICAgICAgY2xhc3M9XCJlbW9qaS1tYXJ0LWVtb2ppXCJcbiAgICAgIEBtb3VzZWVudGVyPVwiZW1vamlQcm9wcy5vbkVudGVyKGVtb2ppVmlldy5nZXRFbW9qaSgpKVwiXG4gICAgICBAbW91c2VsZWF2ZT1cImVtb2ppUHJvcHMub25MZWF2ZShlbW9qaVZpZXcuZ2V0RW1vamkoKSlcIlxuICAgICAgQGNsaWNrPVwiZW1vamlQcm9wcy5vbkNsaWNrKGVtb2ppVmlldy5nZXRFbW9qaSgpKVwiPlxuICAgICAgPHNwYW4gIDpjbGFzcz1cImVtb2ppVmlldy5jc3NDbGFzc1wiIDpzdHlsZT1cImVtb2ppVmlldy5jc3NTdHlsZVwiPnt7ZW1vamlWaWV3LmNvbnRlbnR9fTwvc3Bhbj5cbiAgICA8L3NwYW4+XG4gIDwvdGVtcGxhdGU+XG5cbiAgPGRpdiB2LWlmPVwiIWhhc1Jlc3VsdHMgJiYgZGF0YVwiPlxuICAgIDxlbW9qaVxuICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgIGVtb2ppPVwic2xldXRoX29yX3NweVwiXG4gICAgICA6bmF0aXZlPVwiZW1vamlQcm9wcy5uYXRpdmVcIlxuICAgICAgOnNraW49XCJlbW9qaVByb3BzLnNraW5cIlxuICAgICAgOnNldD1cImVtb2ppUHJvcHMuc2V0XCJcbiAgICAvPlxuICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LW5vLXJlc3VsdHMtbGFiZWxcIj57eyBpMThuLm5vdGZvdW5kIH19PC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBFbW9qaVZpZXcgfSBmcm9tICcuLi91dGlscy9lbW9qaS1kYXRhJ1xuaW1wb3J0IEVtb2ppIGZyb20gJy4vRW1vamknXG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnRW1vamlDYXRlZ29yeScsXG5cbiAgcHJvcHM6IHtcbiAgICBkYXRhOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICBkZWZhdWx0OiAoKSA9PiAoe30pXG4gICAgfSxcbiAgICBpMThuOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgaWQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBuYW1lOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgZW1vamlzOiB7XG4gICAgICB0eXBlOiBBcnJheVxuICAgIH0sXG4gICAgZW1vamlQcm9wczoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50czoge1xuICAgIEVtb2ppXG4gIH0sXG5cbiAgc2V0dXAocHJvcHMpIHtcbiAgICBjb25zdCBpc1Zpc2libGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICByZXR1cm4gISFwcm9wcy5lbW9qaXNcbiAgICB9KVxuICAgIGNvbnN0IGlzU2VhcmNoID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIHByb3BzLm5hbWUgPT09ICdTZWFyY2gnXG4gICAgfSlcbiAgICBjb25zdCBoYXNSZXN1bHRzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIHByb3BzLmVtb2ppcy5sZW5ndGggPiAwXG4gICAgfSlcbiAgICBjb25zdCBlbW9qaU9iamVjdHMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICByZXR1cm4gcHJvcHMuZW1vamlzLm1hcCgoZW1vamkpID0+IHtcbiAgICAgICAgbGV0IGVtb2ppT2JqZWN0ID0gZW1vamlcbiAgICAgICAgbGV0IGVtb2ppVmlldyA9IG5ldyBFbW9qaVZpZXcoXG4gICAgICAgICAgZW1vamksXG4gICAgICAgICAgcHJvcHMuZW1vamlQcm9wcy5za2luLFxuICAgICAgICAgIHByb3BzLmVtb2ppUHJvcHMuc2V0LFxuICAgICAgICAgIHByb3BzLmVtb2ppUHJvcHMubmF0aXZlLFxuICAgICAgICAgIHByb3BzLmVtb2ppUHJvcHMuZmFsbGJhY2ssXG4gICAgICAgICAgcHJvcHMuZW1vamlQcm9wcy5lbW9qaVRvb2x0aXAsXG4gICAgICAgICAgcHJvcHMuZW1vamlQcm9wcy5lbW9qaVNpemUsXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIHsgZW1vamlPYmplY3QsIGVtb2ppVmlldyB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICByZXR1cm4ge1xuICAgICAgaXNWaXNpYmxlLFxuICAgICAgaXNTZWFyY2gsXG4gICAgICBoYXNSZXN1bHRzLFxuICAgICAgZW1vamlPYmplY3RzLFxuICAgIH1cbiAgfVxufSlcblxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG5cbjxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXdcIj5cbiAgPHRlbXBsYXRlIHYtaWY9XCJlbW9qaVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1lbW9qaVwiPlxuICAgICAgICA8ZW1vamlcbiAgICAgICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgICAgIDplbW9qaT1cImVtb2ppXCJcbiAgICAgICAgICA6bmF0aXZlPVwiZW1vamlQcm9wcy5uYXRpdmVcIlxuICAgICAgICAgIDpza2luPVwiZW1vamlQcm9wcy5za2luXCJcbiAgICAgICAgICA6c2V0PVwiZW1vamlQcm9wcy5zZXRcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctZGF0YVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LW5hbWVcIj57eyBlbW9qaS5uYW1lIH19PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctc2hvcnRuYW1lc1wiPlxuICAgICAgICAgIDxzcGFuIHYtZm9yPVwic2hvcnROYW1lIGluIGVtb2ppU2hvcnROYW1lc1wiIDprZXk9XCJzaG9ydE5hbWVcIiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1zaG9ydG5hbWVcIj46e3sgc2hvcnROYW1lIH19Ojwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vdGljb25zXCI+XG4gICAgICAgICAgPHNwYW4gdi1mb3I9XCJlbW90aWNvbiBpbiBlbW9qaUVtb3RpY29uc1wiIDprZXk9XCJlbW90aWNvblwiIGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LWVtb3RpY29uXCI+e3sgZW1vdGljb24gfX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gIDwvdGVtcGxhdGU+XG5cbiAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LWVtb2ppXCI+XG4gICAgICA8ZW1vamlcbiAgICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgICAgOmVtb2ppPVwiaWRsZUVtb2ppXCJcbiAgICAgICAgOm5hdGl2ZT1cImVtb2ppUHJvcHMubmF0aXZlXCJcbiAgICAgICAgOnNraW49XCJlbW9qaVByb3BzLnNraW5cIlxuICAgICAgICA6c2V0PVwiZW1vamlQcm9wcy5zZXRcIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctZGF0YVwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJlbW9qaS1tYXJ0LXRpdGxlLWxhYmVsXCI+e3sgdGl0bGUgfX08L3NwYW4+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IHYtaWY9XCJzaG93U2tpblRvbmVzXCIgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctc2tpbnNcIj5cbiAgICAgIDxza2lucyA6c2tpbj1cInNraW5Qcm9wcy5za2luXCIgQGNoYW5nZT1cIm9uU2tpbkNoYW5nZSgkZXZlbnQpXCIgLz5cbiAgICA8L2Rpdj5cbiAgPC90ZW1wbGF0ZT5cbjwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEVtb2ppIGZyb20gJy4vRW1vamknXG5pbXBvcnQgU2tpbnMgZnJvbSAnLi9za2lucydcbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdFbW9qaVByZXZpZXcnLFxuXG4gIGNvbXBvbmVudHM6IHtcbiAgICBFbW9qaSxcbiAgICBTa2luc1xuICB9LFxuXG4gIHByb3BzOiB7XG4gICAgZGF0YToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGVtb2ppOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBPYmplY3RdXG4gICAgfSxcbiAgICBpZGxlRW1vamk6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIE9iamVjdF0sXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgc2hvd1NraW5Ub25lczoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9LFxuICAgIGVtb2ppUHJvcHM6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBza2luUHJvcHM6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBvblNraW5DaGFuZ2U6IHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XG4gIH0sXG5cbiAgc2V0dXAocHJvcHMpIHtcbiAgICBjb25zdCBlbW9qaURhdGEgPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5lbW9qaSA/IHByb3BzLmVtb2ppIDoge30pXG5cbiAgICByZXR1cm4ge1xuICAgICAgZW1vamlEYXRhLFxuICAgICAgZW1vamlTaG9ydE5hbWVzOiBjb21wdXRlZCgoKSA9PiBlbW9qaURhdGEudmFsdWUuc2hvcnRfbmFtZXMpLFxuICAgICAgZW1vamlFbW90aWNvbnM6IGNvbXB1dGVkKCgpID0+IGVtb2ppRGF0YS5lbW90aWNvbnMpXG4gICAgfVxuICB9XG59KVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXNlYXJjaFwiPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIDpwbGFjZWhvbGRlcj1cImkxOG4uc2VhcmNoXCIgdi1tb2RlbD1cInZhbHVlXCI+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgb25Nb3VudGVkLCBjb21wdXRlZCwgd2F0Y2gsIHJlZiwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBwcm9wczoge1xuICAgIGRhdGE6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBpMThuOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgYXV0b0ZvY3VzOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIG9uU2VhcmNoOiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfVxuICB9LFxuXG4gIHNldHVwKHByb3BzLCB7IGVtaXQgfSkge1xuICAgIGNvbnN0IHZhbHVlID0gcmVmKCcnKVxuXG4gICAgd2F0Y2goXG4gICAgICB2YWx1ZSxcbiAgICAgICgpID0+IGVtaXQoJ3NlYXJjaCcsIHZhbHVlLnZhbHVlKVxuICAgIClcblxuICAgIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgICBpZiAoIXByb3BzLmF1dG9Gb2N1cykgcmV0dXJuXG5cbiAgICAgIGxldCAkZWwgPSBnZXRDdXJyZW50SW5zdGFuY2UoKSAmJiBnZXRDdXJyZW50SW5zdGFuY2UoKS5wcm94eS4kZWwgfHwgbnVsbFxuICAgICAgaWYgKCEkZWwpIHJldHVyblxuXG4gICAgICAkZWwucXVlcnlTZWxlY3RvcignaW5wdXQnKS5mb2N1cygpXG4gICAgfSlcblxuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZSxcbiAgICAgIGNsZWFyOigpID0+ICh2YWx1ZS52YWx1ZSA9ICcnKSxcbiAgICAgIGVtb2ppSW5kZXg6IGNvbXB1dGVkKCgpID0+IHByb3BzLmRhdGEpXG4gICAgfVxuICB9XG59KVxuXG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cblxuPGRpdiA6Y2xhc3M9XCJ7ICdlbW9qaS1tYXJ0LXNraW4tc3dhdGNoZXMnOiB0cnVlLCAnZW1vamktbWFydC1za2luLXN3YXRjaGVzLW9wZW5lZCc6IG9wZW5lZCB9XCI+XG4gIDxzcGFuIHYtZm9yPVwic2tpblRvbmUgaW4gNlwiIDprZXk9XCJza2luVG9uZVwiIDpjbGFzcz1cInsgJ2Vtb2ppLW1hcnQtc2tpbi1zd2F0Y2gnOiB0cnVlLCAnZW1vamktbWFydC1za2luLXN3YXRjaC1zZWxlY3RlZCc6IHNraW4gPT09IHNraW5Ub25lIH1cIj5cbiAgICA8c3BhbiA6Y2xhc3M9XCInZW1vamktbWFydC1za2luIGVtb2ppLW1hcnQtc2tpbi10b25lLScgKyBza2luVG9uZVwiIEBjbGljaz1cIm9uQ2xpY2soc2tpblRvbmUpXCI+PC9zcGFuPlxuICA8L3NwYW4+XG48L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnRW1vamlTa2lucycsXG5cbiAgcHJvcHM6IHtcbiAgICBza2luOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH1cbiAgfSxcblxuICBzZXR1cChwcm9wcywgeyBlbWl0IH0pIHtcbiAgICBjb25zdCBvcGVuZWQgPSByZWYoZmFsc2UpXG5cbiAgICBjb25zdCBvbkNsaWNrID0gKHNraW5Ub25lKSA9PiB7XG4gICAgICBpZiAob3BlbmVkLnZhbHVlKSB7XG4gICAgICAgIGlmIChza2luVG9uZSAhPT0gcHJvcHMuc2tpbikge1xuICAgICAgICAgIGVtaXQoJ2NoYW5nZScsIHNraW5Ub25lKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG9wZW5lZC52YWx1ZSA9ICFvcGVuZWQudmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgb3BlbmVkLFxuICAgICAgb25DbGlja1xuICAgIH1cbiAgfVxufSlcblxuPC9zY3JpcHQ+XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEFuY2hvcnMgfSBmcm9tICcuL2FuY2hvcnMudnVlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXRlZ29yeSB9IGZyb20gJy4vY2F0ZWdvcnkudnVlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcmV2aWV3IH0gZnJvbSAnLi9wcmV2aWV3LnZ1ZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VhcmNoIH0gZnJvbSAnLi9zZWFyY2gudnVlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTa2lucyB9IGZyb20gJy4vc2tpbnMudnVlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFbW9qaSB9IGZyb20gJy4vRW1vamkudnVlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQaWNrZXIgfSBmcm9tICcuL1BpY2tlci52dWUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFN0YXRpY1BpY2tlciB9IGZyb20gJy4vU3RhdGljUGlja2VyLnZ1ZSdcbiIsImltcG9ydCBzdG9yZSBmcm9tICcuL3V0aWxzL3N0b3JlJ1xuaW1wb3J0IHsgdW5jb21wcmVzcyB9IGZyb20gJy4vdXRpbHMvZGF0YSdcbmltcG9ydCBmcmVxdWVudGx5IGZyb20gJy4vdXRpbHMvZnJlcXVlbnRseSdcblxuZXhwb3J0IHtcbiAgUGlja2VyLFxuICBTdGF0aWNQaWNrZXIsXG4gIEVtb2ppLFxuICBBbmNob3JzLFxuICBQcmV2aWV3LFxuICBTZWFyY2gsXG4gIENhdGVnb3J5LFxuICBTa2lucyxcbn0gZnJvbSAnLi9jb21wb25lbnRzJ1xuXG5leHBvcnQgeyBFbW9qaUluZGV4LCBFbW9qaVZpZXcsIEVtb2ppRGF0YSwgc2FuaXRpemUgfSBmcm9tICcuL3V0aWxzL2Vtb2ppLWRhdGEnXG5leHBvcnQgeyB1bmNvbXByZXNzLCBzdG9yZSwgZnJlcXVlbnRseSB9XG4iLCJjb25zdCBfU3RyaW5nID0gU3RyaW5nXG5cbmV4cG9ydCBkZWZhdWx0IF9TdHJpbmcuZnJvbUNvZGVQb2ludCB8fFxuICBmdW5jdGlvbiBzdHJpbmdGcm9tQ29kZVBvaW50KCkge1xuICAgIHZhciBNQVhfU0laRSA9IDB4NDAwMFxuICAgIHZhciBjb2RlVW5pdHMgPSBbXVxuICAgIHZhciBoaWdoU3Vycm9nYXRlXG4gICAgdmFyIGxvd1N1cnJvZ2F0ZVxuICAgIHZhciBpbmRleCA9IC0xXG4gICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICBpZiAoIWxlbmd0aCkge1xuICAgICAgcmV0dXJuICcnXG4gICAgfVxuICAgIHZhciByZXN1bHQgPSAnJ1xuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICB2YXIgY29kZVBvaW50ID0gTnVtYmVyKGFyZ3VtZW50c1tpbmRleF0pXG4gICAgICBpZiAoXG4gICAgICAgICFpc0Zpbml0ZShjb2RlUG9pbnQpIHx8IC8vIGBOYU5gLCBgK0luZmluaXR5YCwgb3IgYC1JbmZpbml0eWBcbiAgICAgICAgY29kZVBvaW50IDwgMCB8fCAvLyBub3QgYSB2YWxpZCBVbmljb2RlIGNvZGUgcG9pbnRcbiAgICAgICAgY29kZVBvaW50ID4gMHgxMGZmZmYgfHwgLy8gbm90IGEgdmFsaWQgVW5pY29kZSBjb2RlIHBvaW50XG4gICAgICAgIE1hdGguZmxvb3IoY29kZVBvaW50KSAhPSBjb2RlUG9pbnQgLy8gbm90IGFuIGludGVnZXJcbiAgICAgICkge1xuICAgICAgICB0aHJvdyBSYW5nZUVycm9yKCdJbnZhbGlkIGNvZGUgcG9pbnQ6ICcgKyBjb2RlUG9pbnQpXG4gICAgICB9XG4gICAgICBpZiAoY29kZVBvaW50IDw9IDB4ZmZmZikge1xuICAgICAgICAvLyBCTVAgY29kZSBwb2ludFxuICAgICAgICBjb2RlVW5pdHMucHVzaChjb2RlUG9pbnQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBBc3RyYWwgY29kZSBwb2ludDsgc3BsaXQgaW4gc3Vycm9nYXRlIGhhbHZlc1xuICAgICAgICAvLyBodHRwOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LWVuY29kaW5nI3N1cnJvZ2F0ZS1mb3JtdWxhZVxuICAgICAgICBjb2RlUG9pbnQgLT0gMHgxMDAwMFxuICAgICAgICBoaWdoU3Vycm9nYXRlID0gKGNvZGVQb2ludCA+PiAxMCkgKyAweGQ4MDBcbiAgICAgICAgbG93U3Vycm9nYXRlID0gKGNvZGVQb2ludCAlIDB4NDAwKSArIDB4ZGMwMFxuICAgICAgICBjb2RlVW5pdHMucHVzaChoaWdoU3Vycm9nYXRlLCBsb3dTdXJyb2dhdGUpXG4gICAgICB9XG4gICAgICBpZiAoaW5kZXggKyAxID09PSBsZW5ndGggfHwgY29kZVVuaXRzLmxlbmd0aCA+IE1BWF9TSVpFKSB7XG4gICAgICAgIHJlc3VsdCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIGNvZGVVbml0cylcbiAgICAgICAgY29kZVVuaXRzLmxlbmd0aCA9IDBcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG4iLCJjb25zdCBTVkdzID0ge1xuICBhY3Rpdml0eTogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTEyIDBDNS4zNzMgMCAwIDUuMzcyIDAgMTJjMCA2LjYyNyA1LjM3MyAxMiAxMiAxMiA2LjYyOCAwIDEyLTUuMzczIDEyLTEyIDAtNi42MjgtNS4zNzItMTItMTItMTJtOS45NDkgMTFIMTcuMDVjLjIyNC0yLjUyNyAxLjIzMi00Ljc3MyAxLjk2OC02LjExM0E5Ljk2NiA5Ljk2NiAwIDAgMSAyMS45NDkgMTFNMTMgMTFWMi4wNTFhOS45NDUgOS45NDUgMCAwIDEgNC40MzIgMS41NjRjLS44NTggMS40OTEtMi4xNTYgNC4yMi0yLjM5MiA3LjM4NUgxM3ptLTIgMEg4Ljk2MWMtLjIzOC0zLjE2NS0xLjUzNi01Ljg5NC0yLjM5My03LjM4NUE5Ljk1IDkuOTUgMCAwIDEgMTEgMi4wNTFWMTF6bTAgMnY4Ljk0OWE5LjkzNyA5LjkzNyAwIDAgMS00LjQzMi0xLjU2NGMuODU3LTEuNDkyIDIuMTU1LTQuMjIxIDIuMzkzLTcuMzg1SDExem00LjA0IDBjLjIzNiAzLjE2NCAxLjUzNCA1Ljg5MyAyLjM5MiA3LjM4NUE5LjkyIDkuOTIgMCAwIDEgMTMgMjEuOTQ5VjEzaDIuMDR6TTQuOTgyIDQuODg3QzUuNzE4IDYuMjI3IDYuNzI2IDguNDczIDYuOTUxIDExaC00LjlhOS45NzcgOS45NzcgMCAwIDEgMi45MzEtNi4xMTNNMi4wNTEgMTNoNC45Yy0uMjI2IDIuNTI3LTEuMjMzIDQuNzcxLTEuOTY5IDYuMTEzQTkuOTcyIDkuOTcyIDAgMCAxIDIuMDUxIDEzbTE2Ljk2NyA2LjExM2MtLjczNS0xLjM0Mi0xLjc0NC0zLjU4Ni0xLjk2OC02LjExM2g0Ljg5OWE5Ljk2MSA5Ljk2MSAwIDAgMS0yLjkzMSA2LjExM1wiLz48L3N2Zz5gLFxuXG4gIGN1c3RvbTogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMi4wMDAwMDAsIDEuMDAwMDAwKVwiPjxyZWN0IGlkPVwiUmVjdGFuZ2xlXCIgeD1cIjhcIiB5PVwiMFwiIHdpZHRoPVwiM1wiIGhlaWdodD1cIjIxXCIgcng9XCIxLjVcIj48L3JlY3Q+PHJlY3QgaWQ9XCJSZWN0YW5nbGVcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOS44NDMsIDEwLjU0OSkgcm90YXRlKDYwKSB0cmFuc2xhdGUoLTkuODQzLCAtMTAuNTQ5KSBcIiB4PVwiOC4zNDNcIiB5PVwiMC4wNDlcIiB3aWR0aD1cIjNcIiBoZWlnaHQ9XCIyMVwiIHJ4PVwiMS41XCI+PC9yZWN0PjxyZWN0IGlkPVwiUmVjdGFuZ2xlXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDkuODQzLCAxMC41NDkpIHJvdGF0ZSgtNjApIHRyYW5zbGF0ZSgtOS44NDMsIC0xMC41NDkpIFwiIHg9XCI4LjM0M1wiIHk9XCIwLjA0OVwiIHdpZHRoPVwiM1wiIGhlaWdodD1cIjIxXCIgcng9XCIxLjVcIj48L3JlY3Q+PC9nPjwvc3ZnPmAsXG5cbiAgZmxhZ3M6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk0wIDBsNi4wODQgMjRIOEwxLjkxNiAwek0yMSA1aC00bC0xLTRINGwzIDEyaDNsMSA0aDEzTDIxIDV6TTYuNTYzIDNoNy44NzVsMiA4SDguNTYzbC0yLTh6bTguODMyIDEwbC0yLjg1NiAxLjkwNEwxMi4wNjMgMTNoMy4zMzJ6TTE5IDEzbC0xLjUtNmgxLjkzOGwyIDhIMTZsMy0yelwiLz48L3N2Zz5gLFxuXG4gIGZvb2RzOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNMTcgNC45NzhjLTEuODM4IDAtMi44NzYuMzk2LTMuNjguOTM0LjUxMy0xLjE3MiAxLjc2OC0yLjkzNCA0LjY4LTIuOTM0YTEgMSAwIDAgMCAwLTJjLTIuOTIxIDAtNC42MjkgMS4zNjUtNS41NDcgMi41MTItLjA2NC4wNzgtLjExOS4xNjItLjE4LjI0NEMxMS43MyAxLjgzOCAxMC43OTguMDIzIDkuMjA3LjAyMyA4LjU3OS4wMjIgNy44NS4zMDYgNyAuOTc4IDUuMDI3IDIuNTQgNS4zMjkgMy45MDIgNi40OTIgNC45OTkgMy42MDkgNS4yMjIgMCA3LjM1MiAwIDEyLjk2OWMwIDQuNTgyIDQuOTYxIDExLjAwOSA5IDExLjAwOSAxLjk3NSAwIDIuMzcxLS40ODYgMy0xIC42MjkuNTE0IDEuMDI1IDEgMyAxIDQuMDM5IDAgOS02LjQxOCA5LTExIDAtNS45NTMtNC4wNTUtOC03LThNOC4yNDIgMi41NDZjLjY0MS0uNTA4Ljk0My0uNTIzLjk2NS0uNTIzLjQyNi4xNjkuOTc1IDEuNDA1IDEuMzU3IDMuMDU1LTEuNTI3LS42MjktMi43NDEtMS4zNTItMi45OC0xLjg0Ni4wNTktLjExMi4yNDEtLjM1Ni42NTgtLjY4Nk0xNSAyMS45NzhjLTEuMDggMC0xLjIxLS4xMDktMS41NTktLjQwMmwtLjE3Ni0uMTQ2Yy0uMzY3LS4zMDItLjgxNi0uNDUyLTEuMjY2LS40NTJzLS44OTguMTUtMS4yNjYuNDUybC0uMTc2LjE0NmMtLjM0Ny4yOTItLjQ3Ny40MDItMS41NTcuNDAyLTIuODEzIDAtNy01LjM4OS03LTkuMDA5IDAtNS44MjMgNC40ODgtNS45OTEgNS01Ljk5MSAxLjkzOSAwIDIuNDg0LjQ3MSAzLjM4NyAxLjI1MWwuMzIzLjI3NmExLjk5NSAxLjk5NSAwIDAgMCAyLjU4IDBsLjMyMy0uMjc2Yy45MDItLjc4IDEuNDQ3LTEuMjUxIDMuMzg3LTEuMjUxLjUxMiAwIDUgLjE2OCA1IDYgMCAzLjYxNy00LjE4NyA5LTcgOVwiLz48L3N2Zz5gLFxuXG4gIG5hdHVyZTogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTE1LjUgOGExLjUgMS41IDAgMSAwIC4wMDEgMy4wMDFBMS41IDEuNSAwIDAgMCAxNS41IDhNOC41IDhhMS41IDEuNSAwIDEgMCAuMDAxIDMuMDAxQTEuNSAxLjUgMCAwIDAgOC41IDhcIi8+PHBhdGggZD1cIk0xOC45MzMgMGgtLjAyN2MtLjk3IDAtMi4xMzguNzg3LTMuMDE4IDEuNDk3LTEuMjc0LS4zNzQtMi42MTItLjUxLTMuODg3LS41MS0xLjI4NSAwLTIuNjE2LjEzMy0zLjg3NC41MTdDNy4yNDUuNzkgNi4wNjkgMCA1LjA5MyAwaC0uMDI3QzMuMzUyIDAgLjA3IDIuNjcuMDAyIDcuMDI2Yy0uMDM5IDIuNDc5LjI3NiA0LjIzOCAxLjA0IDUuMDEzLjI1NC4yNTguODgyLjY3NyAxLjI5NS44ODIuMTkxIDMuMTc3LjkyMiA1LjIzOCAyLjUzNiA2LjM4Ljg5Ny42MzcgMi4xODcuOTQ5IDMuMiAxLjEwMkM4LjA0IDIwLjYgOCAyMC43OTUgOCAyMWMwIDEuNzczIDIuMzUgMyA0IDMgMS42NDggMCA0LTEuMjI3IDQtMyAwLS4yMDEtLjAzOC0uMzkzLS4wNzItLjU4NiAyLjU3My0uMzg1IDUuNDM1LTEuODc3IDUuOTI1LTcuNTg3LjM5Ni0uMjIuODg3LS41NjggMS4xMDQtLjc4OC43NjMtLjc3NCAxLjA3OS0yLjUzNCAxLjA0LTUuMDEzQzIzLjkyOSAyLjY3IDIwLjY0NiAwIDE4LjkzMyAwTTMuMjIzIDkuMTM1Yy0uMjM3LjI4MS0uODM3IDEuMTU1LS44ODQgMS4yMzgtLjE1LS40MS0uMzY4LTEuMzQ5LS4zMzctMy4yOTEuMDUxLTMuMjgxIDIuNDc4LTQuOTcyIDMuMDkxLTUuMDMxLjI1Ni4wMTUuNzMxLjI3IDEuMjY1LjY0Ni0xLjExIDEuMTcxLTIuMjc1IDIuOTE1LTIuMzUyIDUuMTI1LS4xMzMuNTQ2LS4zOTguODU4LS43ODMgMS4zMTNNMTIgMjJjLS45MDEgMC0xLjk1NC0uNjkzLTItMSAwLS42NTQuNDc1LTEuMjM2IDEtMS42MDJWMjBhMSAxIDAgMSAwIDIgMHYtLjYwMmMuNTI0LjM2NSAxIC45NDcgMSAxLjYwMi0uMDQ2LjMwNy0xLjA5OSAxLTIgMW0zLTMuNDh2LjAyYTQuNzUyIDQuNzUyIDAgMCAwLTEuMjYyLTEuMDJjMS4wOTItLjUxNiAyLjIzOS0xLjMzNCAyLjIzOS0yLjIxNyAwLTEuODQyLTEuNzgxLTIuMTk1LTMuOTc3LTIuMTk1LTIuMTk2IDAtMy45NzguMzU0LTMuOTc4IDIuMTk1IDAgLjg4MyAxLjE0OCAxLjcwMSAyLjIzOCAyLjIxN0E0LjggNC44IDAgMCAwIDkgMTguNTM5di0uMDI1Yy0xLS4wNzYtMi4xODItLjI4MS0yLjk3My0uODQyLTEuMzAxLS45Mi0xLjgzOC0zLjA0NS0xLjg1My02LjQ3OGwuMDIzLS4wNDFjLjQ5Ni0uODI2IDEuNDktMS40NSAxLjgwNC0zLjEwMiAwLTIuMDQ3IDEuMzU3LTMuNjMxIDIuMzYyLTQuNTIyQzkuMzcgMy4xNzggMTAuNTU1IDMgMTEuOTQ4IDNjMS40NDcgMCAyLjY4NS4xOTIgMy43MzMuNTcgMSAuOSAyLjMxNiAyLjQ2NSAyLjMxNiA0LjQ4LjMxMyAxLjY1MSAxLjMwNyAyLjI3NSAxLjgwMyAzLjEwMi4wMzUuMDU4LjA2OC4xMTcuMTAyLjE3OC0uMDU5IDUuOTY3LTEuOTQ5IDcuMDEtNC45MDIgNy4xOW02LjYyOC04LjIwMmMtLjAzNy0uMDY1LS4wNzQtLjEzLS4xMTMtLjE5NWE3LjU4NyA3LjU4NyAwIDAgMC0uNzM5LS45ODdjLS4zODUtLjQ1NS0uNjQ4LS43NjgtLjc4Mi0xLjMxMy0uMDc2LTIuMjA5LTEuMjQxLTMuOTU0LTIuMzUzLTUuMTI0LjUzMS0uMzc2IDEuMDA0LS42MyAxLjI2MS0uNjQ3LjYzNi4wNzEgMy4wNDQgMS43NjQgMy4wOTYgNS4wMzEuMDI3IDEuODEtLjM0NyAzLjIxOC0uMzcgMy4yMzVcIi8+PC9zdmc+YCxcblxuICBvYmplY3RzOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNMTIgMGE5IDkgMCAwIDAtNSAxNi40ODJWMjFzMi4wMzUgMyA1IDMgNS0zIDUtM3YtNC41MThBOSA5IDAgMCAwIDEyIDB6bTAgMmMzLjg2IDAgNyAzLjE0MSA3IDdzLTMuMTQgNy03IDctNy0zLjE0MS03LTcgMy4xNC03IDctN3pNOSAxNy40NzdjLjk0LjMzMiAxLjk0Ni41MjMgMyAuNTIzczIuMDYtLjE5IDMtLjUyM3YuODM0Yy0uOTEuNDM2LTEuOTI1LjY4OS0zIC42ODlhNi45MjQgNi45MjQgMCAwIDEtMy0uNjl2LS44MzN6bS4yMzYgMy4wN0E4Ljg1NCA4Ljg1NCAwIDAgMCAxMiAyMWMuOTY1IDAgMS44ODgtLjE2NyAyLjc1OC0uNDUxQzE0LjE1NSAyMS4xNzMgMTMuMTUzIDIyIDEyIDIyYy0xLjEwMiAwLTIuMTE3LS43ODktMi43NjQtMS40NTN6XCIvPjxwYXRoIGQ9XCJNMTQuNzQ1IDEyLjQ0OWgtLjAwNGMtLjg1Mi0uMDI0LTEuMTg4LS44NTgtMS41NzctMS44MjQtLjQyMS0xLjA2MS0uNzAzLTEuNTYxLTEuMTgyLTEuNTY2aC0uMDA5Yy0uNDgxIDAtLjc4My40OTctMS4yMzUgMS41MzctLjQzNi45ODItLjgwMSAxLjgxMS0xLjYzNiAxLjc5MWwtLjI3Ni0uMDQzYy0uNTY1LS4xNzEtLjg1My0uNjkxLTEuMjg0LTEuNzk0LS4xMjUtLjMxMy0uMjAyLS42MzItLjI3LS45MTMtLjA1MS0uMjEzLS4xMjctLjUzLS4xOTUtLjYzNEM3LjA2NyA5LjAwNCA3LjAzOSA5IDYuOTkgOUExIDEgMCAwIDEgNyA3aC4wMWMxLjY2Mi4wMTcgMi4wMTUgMS4zNzMgMi4xOTggMi4xMzQuNDg2LS45ODEgMS4zMDQtMi4wNTggMi43OTctMi4wNzUgMS41MzEuMDE4IDIuMjggMS4xNTMgMi43MzEgMi4xNDFsLjAwMi0uMDA4QzE0Ljk0NCA4LjQyNCAxNS4zMjcgNyAxNi45NzkgN2guMDMyQTEgMSAwIDEgMSAxNyA5aC0uMDExYy0uMTQ5LjA3Ni0uMjU2LjQ3NC0uMzE5LjcwOWE2LjQ4NCA2LjQ4NCAwIDAgMS0uMzExLjk1MWMtLjQyOS45NzMtLjc5IDEuNzg5LTEuNjE0IDEuNzg5XCIvPjwvc3ZnPmAsXG5cbiAgc21pbGV5czogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTEyIDBDNS4zNzMgMCAwIDUuMzczIDAgMTJzNS4zNzMgMTIgMTIgMTIgMTItNS4zNzMgMTItMTJTMTguNjI3IDAgMTIgMG0wIDIyQzYuNDg2IDIyIDIgMTcuNTE0IDIgMTJTNi40ODYgMiAxMiAyczEwIDQuNDg2IDEwIDEwLTQuNDg2IDEwLTEwIDEwXCIvPjxwYXRoIGQ9XCJNOCA3YTIgMiAwIDEgMC0uMDAxIDMuOTk5QTIgMiAwIDAgMCA4IDdNMTYgN2EyIDIgMCAxIDAtLjAwMSAzLjk5OUEyIDIgMCAwIDAgMTYgN00xNS4yMzIgMTVjLS42OTMgMS4xOTUtMS44NyAyLTMuMzQ5IDItMS40NzcgMC0yLjY1NS0uODA1LTMuMzQ3LTJIMTVtMy0ySDZhNiA2IDAgMSAwIDEyIDBcIi8+PC9zdmc+YCxcblxuICBwZW9wbGU6IGA8c3ZnIHhtbG5zOnN2Zz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaGVpZ2h0PVwiMjRcIiB3aWR0aD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPiA8cGF0aCBpZD1cInBhdGgzODE0XCIgZD1cIm0gMy4zNTkxMDg5LDIxLjE3NzI2IGMgMC4xNzIwMzYsMC4wOTM4NSA0LjI2NTk5NCwyLjI5ODM3IDguODE0NDQ1MSwyLjI5ODM3IDQuOTI3NzY3LDAgOC42NzA4OTQsLTIuMjExODgzIDguODI3ODIsLTIuMzA2MDE5IDAuMTEzMDc5LC0wLjA2Nzg1IDAuMTgyMjY4LC0wLjE5MDA1MSAwLjE4MjI2NywtMC4zMjE5MjMgMCwtMy4wMzExOSAtMC45Mjk0OTQsLTUuODA0OTM2IC0yLjYxNzE5NiwtNy44MTA3MTIgLTEuMTgwNjAzLC0xLjQwMzEzNCAtMi42NjE5MTgsLTIuMzU5NTE2IC00LjI5NTY5OSwtMi43OTk3OTEgNC42OTkxMTgsLTIuMjM2MjU4IDMuMTAyMzA2LC05LjI4NjE3MTYyIC0yLjA5NzE5MSwtOS4yODYxNzE2MiAtNS4xOTk0OTc4LDAgLTYuNzk2MzEwMyw3LjA0OTkxMzYyIC0yLjA5NzE5Miw5LjI4NjE3MTYyIC0xLjYzMzc4MjEsMC40NDAyNzUgLTMuMTE1MDk3MSwxLjM5Njc5OCAtNC4yOTU2OTkxLDIuNzk5NzkxIC0xLjY4NzcwMywyLjAwNTc3NiAtMi42MTcxOTYsNC43Nzk1MjIgLTIuNjE3MTk2LDcuODEwNzEyIDEuMmUtNiwwLjEzNzM3OCAwLjA3NTAzOSwwLjI2Mzc4NSAwLjE5NTY0MSwwLjMyOTU3MiB6IE0gOC4wNDM5MzE5LDUuODMwODc4MyBDIDguMDQzOTMwOSwyLjE1MTUyMSAxMi40OTIxMDcsMC4zMDk1NTgxMSAxNS4wOTM0OTEsMi45MTA5NDExIDE3LjY5NDg3NCw1LjUxMjMyNDEgMTUuODUyOTExLDkuOTYwNTAwNiAxMi4xNzM1NTQsOS45NjA1IDkuODkzODk5MSw5Ljk1NzkxMzUgOC4wNDY1MTg2LDguMTEwNTMzMiA4LjA0MzkzMTksNS44MzA4NzgzIFogbSAtMS42ODg3ODIsNy42ODk0OTc3IGMgMS41MjQ1MzUsLTEuODExNDQ5IDMuNTkwNjYwMSwtMi44MDkwMzUgNS44MTg0MDQxLC0yLjgwOTAzNSAyLjIyNzc0NCwwIDQuMjkzODY5LDAuOTk3NTg2IDUuODE4NDA0LDIuODA5MDM1IDEuNTMzNjM5LDEuODIyNTcxIDIuMzk1OTMyLDQuMzM5ODU4IDIuNDM5MTUyLDcuMTA4MzAxIC0wLjgwMzM1MiwwLjQzNDg3NyAtNC4xNDE2MzYsMi4wOTYxMTIgLTguMjU3NTU2LDIuMDk2MTEyIC0zLjgwNjI5MjEsMCAtNy4zOTEwODYxLC0xLjY3MTA0MyAtOC4yNTczNjgxLC0yLjEwNDk4MSAwLjA0NTA1LC0yLjc2NTAxNyAwLjkwNjk2OCwtNS4yNzg3ODUgMi40Mzg5NjQsLTcuMDk5NDMyIHpcIiAvPiA8cGF0aCBpZD1cInBhdGgzODE2XCIgZD1cIk0gMTIuMTczODI4IDAuMzg4NjcxODggQyA5LjMxOTg1MTMgMC4zODg2NzE4NyA3LjM3NzA5ODggMi4zNjcyMjg1IDYuODY1MjM0NCA0LjYzMDg1OTQgQyA2LjQyMTg2MDggNi41OTE2MDE1IDcuMTE1MzU2MiA4Ljc2NzYxMTcgOC45NjQ4NDM4IDEwLjEyNjk1MyBDIDcuNjE0MTI0OSAxMC42NzczNzYgNi4zNTUwNTExIDExLjQ4MDk0NCA1LjM0OTYwOTQgMTIuNjc1NzgxIEMgMy41NjI5MzE3IDE0Ljc5OTE4NSAyLjYwMTU2MjUgMTcuNzAxNDc1IDIuNjAxNTYyNSAyMC44NDc2NTYgQyAyLjYwMTU2NTQgMjEuMTg5ODYxIDIuNzg5NDI3NiAyMS41MDgwMDIgMy4wODk4NDM4IDIxLjY3MTg3NSBDIDMuMzA0NDA2OCAyMS43ODg5MjUgNy40NDM2MjM5IDI0LjAzOTA2MiAxMi4xNzM4MjggMjQuMDM5MDYyIEMgMTcuMjY5OTE4IDI0LjAzOTA2MiAyMS4wODM1NjggMjEuNzc2Nzg2IDIxLjI5MTAxNiAyMS42NTIzNDQgQyAyMS41NzI4MSAyMS40ODMyNjYgMjEuNzQ2MDk3IDIxLjE3NjI4MiAyMS43NDYwOTQgMjAuODQ3NjU2IEMgMjEuNzQ2MDk0IDE3LjcwMTQ3NSAyMC43ODI3NyAxNC43OTkxODUgMTguOTk2MDk0IDEyLjY3NTc4MSBDIDE3Ljk5MDQ1NSAxMS40ODA1OTEgMTYuNzMzODE4IDEwLjY3NTM2MiAxNS4zODI4MTIgMTAuMTI1IEMgMTcuMjMxMTMyIDguNzY1NTU1MiAxNy45MjU2NzUgNi41OTEwNzAxIDE3LjQ4MjQyMiA0LjYzMDg1OTQgQyAxNi45NzA1NTcgMi4zNjcyMjg1IDE1LjAyNzgwNSAwLjM4ODY3MTg4IDEyLjE3MzgyOCAwLjM4ODY3MTg4IHogTSAxMi43OTI5NjkgMi4zMDA3ODEyIEMgMTMuNDY2MjUzIDIuNDE2MTc5MiAxNC4xMjUxMTMgMi43MzgzOTQxIDE0LjY5NTMxMiAzLjMwODU5MzggQyAxNS44MzU3MTIgNC40NDg5OTMxIDE1Ljk4NTYwNCA1Ljk0NzM1NDkgMTUuNDY4NzUgNy4xOTUzMTI1IEMgMTQuOTUxODk2IDguNDQzMjcwMSAxMy43ODY4MjggOS4zOTg0Mzc4IDEyLjE3MzgyOCA5LjM5ODQzNzUgQyAxMC4xOTc3MTkgOS4zOTYxOTU0IDguNjA3NzExIDcuODA2MTg3IDguNjA1NDY4OCA1LjgzMDA3ODEgQyA4LjYwNTQ2ODMgNC4yMTcwNzg1IDkuNTYwNjM2MiAzLjA1MjAxMDIgMTAuODA4NTk0IDIuNTM1MTU2MiBDIDExLjQzMjU3MyAyLjI3NjcyOTMgMTIuMTE5Njg1IDIuMTg1MzgzMyAxMi43OTI5NjkgMi4zMDA3ODEyIHogTSAxMi4xNzM4MjggMTEuMjczNDM4IEMgMTQuMjMzNjQ3IDExLjI3MzQzOCAxNi4xMzM2NzQgMTIuMTg1MDg0IDE3LjU2MjUgMTMuODgyODEyIEMgMTguOTMwNjkgMTUuNTA4NzY1IDE5LjY5ODM0NyAxNy43NzY5NjkgMTkuODA4NTk0IDIwLjI4MzIwMyBDIDE4LjgwNzM5NSAyMC44MDAyMzUgMTUuODg2MTU3IDIyLjE2MjEwOSAxMi4xNzM4MjggMjIuMTYyMTA5IEMgOC43NjE0NjMyIDIyLjE2MjEwOSA1LjYyNDU3NTQgMjAuNzg3MDY5IDQuNTM5MDYyNSAyMC4yNjU2MjUgQyA0LjY1MjU4OTYgMTcuNzY2NzE3IDUuNDIwMzMxNSAxNS41MDQ3OTEgNi43ODUxNTYyIDEzLjg4MjgxMiBDIDguMjEzOTgyNyAxMi4xODUwODQgMTAuMTE0MDEgMTEuMjczNDM4IDEyLjE3MzgyOCAxMS4yNzM0MzggeiBcIiAvPiA8L3N2Zz5gLFxuXG4gIHBsYWNlczogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTYuNSAxMkM1LjEyMiAxMiA0IDEzLjEyMSA0IDE0LjVTNS4xMjIgMTcgNi41IDE3IDkgMTUuODc5IDkgMTQuNSA3Ljg3OCAxMiA2LjUgMTJtMCAzYy0uMjc1IDAtLjUtLjIyNS0uNS0uNXMuMjI1LS41LjUtLjUuNS4yMjUuNS41LS4yMjUuNS0uNS41TTE3LjUgMTJjLTEuMzc4IDAtMi41IDEuMTIxLTIuNSAyLjVzMS4xMjIgMi41IDIuNSAyLjUgMi41LTEuMTIxIDIuNS0yLjUtMS4xMjItMi41LTIuNS0yLjVtMCAzYy0uMjc1IDAtLjUtLjIyNS0uNS0uNXMuMjI1LS41LjUtLjUuNS4yMjUuNS41LS4yMjUuNS0uNS41XCIvPjxwYXRoIGQ9XCJNMjIuNDgyIDkuNDk0bC0xLjAzOS0uMzQ2TDIxLjQgOWguNmMuNTUyIDAgMS0uNDM5IDEtLjk5MiAwLS4wMDYtLjAwMy0uMDA4LS4wMDMtLjAwOEgyM2MwLTEtLjg4OS0yLTEuOTg0LTJoLS42NDJsLS43MzEtMS43MTdDMTkuMjYyIDMuMDEyIDE4LjA5MSAyIDE2Ljc2NCAySDcuMjM2QzUuOTA5IDIgNC43MzggMy4wMTIgNC4zNTcgNC4yODNMMy42MjYgNmgtLjY0MkMxLjg4OSA2IDEgNyAxIDhoLjAwM1MxIDguMDAyIDEgOC4wMDhDMSA4LjU2MSAxLjQ0OCA5IDIgOWguNmwtLjA0My4xNDgtMS4wMzkuMzQ2YTIuMDAxIDIuMDAxIDAgMCAwLTEuMzU5IDIuMDk3bC43NTEgNy41MDhhMSAxIDAgMCAwIC45OTQuOTAxSDN2MWMwIDEuMTAzLjg5NiAyIDIgMmgyYzEuMTA0IDAgMi0uODk3IDItMnYtMWg2djFjMCAxLjEwMy44OTYgMiAyIDJoMmMxLjEwNCAwIDItLjg5NyAyLTJ2LTFoMS4wOTZhLjk5OS45OTkgMCAwIDAgLjk5NC0uOTAxbC43NTEtNy41MDhhMi4wMDEgMi4wMDEgMCAwIDAtMS4zNTktMi4wOTdNNi4yNzMgNC44NTdDNi40MDIgNC40MyA2Ljc4OCA0IDcuMjM2IDRoOS41MjdjLjQ0OCAwIC44MzQuNDMuOTYzLjg1N0wxOS4zMTMgOUg0LjY4OGwxLjU4NS00LjE0M3pNNyAyMUg1di0xaDJ2MXptMTIgMGgtMnYtMWgydjF6bTIuMTg5LTNIMi44MTFsLS42NjItNi42MDdMMyAxMWgxOGwuODUyLjM5M0wyMS4xODkgMTh6XCIvPjwvc3ZnPmAsXG5cbiAgcmVjZW50OiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNMTMgNGgtMmwtLjAwMSA3SDl2MmgydjJoMnYtMmg0di0yaC00elwiLz48cGF0aCBkPVwiTTEyIDBDNS4zNzMgMCAwIDUuMzczIDAgMTJzNS4zNzMgMTIgMTIgMTIgMTItNS4zNzMgMTItMTJTMTguNjI3IDAgMTIgMG0wIDIyQzYuNDg2IDIyIDIgMTcuNTE0IDIgMTJTNi40ODYgMiAxMiAyczEwIDQuNDg2IDEwIDEwLTQuNDg2IDEwLTEwIDEwXCIvPjwvc3ZnPmAsXG5cbiAgc3ltYm9sczogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTAgMGgxMXYySDB6TTQgMTFoM1Y2aDRWNEgwdjJoNHpNMTUuNSAxN2MxLjM4MSAwIDIuNS0xLjExNiAyLjUtMi40OTNzLTEuMTE5LTIuNDkzLTIuNS0yLjQ5M1MxMyAxMy4xMyAxMyAxNC41MDcgMTQuMTE5IDE3IDE1LjUgMTdtMC0yLjk4NmMuMjc2IDAgLjUuMjIyLjUuNDkzIDAgLjI3Mi0uMjI0LjQ5My0uNS40OTNzLS41LS4yMjEtLjUtLjQ5My4yMjQtLjQ5My41LS40OTNNMjEuNSAxOS4wMTRjLTEuMzgxIDAtMi41IDEuMTE2LTIuNSAyLjQ5M1MyMC4xMTkgMjQgMjEuNSAyNHMyLjUtMS4xMTYgMi41LTIuNDkzLTEuMTE5LTIuNDkzLTIuNS0yLjQ5M20wIDIuOTg2YS40OTcuNDk3IDAgMCAxLS41LS40OTNjMC0uMjcxLjIyNC0uNDkzLjUtLjQ5M3MuNS4yMjIuNS40OTNhLjQ5Ny40OTcgMCAwIDEtLjUuNDkzTTIyIDEzbC05IDkgMS41MTMgMS41IDguOTktOS4wMDl6TTE3IDExYzIuMjA5IDAgNC0xLjExOSA0LTIuNVYycy45ODUtLjE2MSAxLjQ5OC45NDlDMjMuMDEgNC4wNTUgMjMgNiAyMyA2czEtMS4xMTkgMS0zLjEzNUMyNC0uMDIgMjEgMCAyMSAwaC0ydjYuMzQ3QTUuODUzIDUuODUzIDAgMCAwIDE3IDZjLTIuMjA5IDAtNCAxLjExOS00IDIuNXMxLjc5MSAyLjUgNCAyLjVNMTAuMjk3IDIwLjQ4MmwtMS40NzUtMS41ODVhNDcuNTQgNDcuNTQgMCAwIDEtMS40NDIgMS4xMjljLS4zMDctLjI4OC0uOTg5LTEuMDE2LTIuMDQ1LTIuMTgzLjkwMi0uODM2IDEuNDc5LTEuNDY2IDEuNzI5LTEuODkycy4zNzYtLjg3MS4zNzYtMS4zMzZjMC0uNTkyLS4yNzMtMS4xNzgtLjgxOC0xLjc1OS0uNTQ2LS41ODEtMS4zMjktLjg3MS0yLjM0OS0uODcxLTEuMDA4IDAtMS43OS4yOTMtMi4zNDQuODc5LS41NTYuNTg3LS44MzIgMS4xODEtLjgzMiAxLjc4NCAwIC44MTMuNDE5IDEuNzQ4IDEuMjU2IDIuODA1LS44NDcuNjE0LTEuNDQ0IDEuMjA4LTEuNzk0IDEuNzg0YTMuNDY1IDMuNDY1IDAgMCAwLS41MjMgMS44MzNjMCAuODU3LjMwOCAxLjU2LjkyNCAyLjEwNy42MTYuNTQ5IDEuNDIzLjgyMyAyLjQyLjgyMyAxLjE3MyAwIDIuNDQ0LS4zNzkgMy44MTMtMS4xMzdMOC4yMzUgMjRoMi44MTlsLTIuMDktMi4zODMgMS4zMzMtMS4xMzV6bS02LjczNi02LjM4OWExLjAyIDEuMDIgMCAwIDEgLjczLS4yODZjLjMxIDAgLjU1OS4wODUuNzQ3LjI1NGEuODQ5Ljg0OSAwIDAgMSAuMjgzLjY1OWMwIC41MTgtLjQxOSAxLjExMi0xLjI1NyAxLjc4NC0uNTM2LS42NTEtLjgwNS0xLjIzMS0uODA1LTEuNzQyYS45MDEuOTAxIDAgMCAxIC4zMDItLjY2OU0zLjc0IDIyYy0uNDI3IDAtLjc3OC0uMTE2LTEuMDU3LS4zNDktLjI3OS0uMjMyLS40MTgtLjQ4Ny0uNDE4LS43NjYgMC0uNTk0LjUwOS0xLjI4OCAxLjUyNy0yLjA4My45NjggMS4xMzQgMS43MTcgMS45NDYgMi4yNDggMi40MzgtLjkyMS41MDctMS42ODYuNzYtMi4zLjc2XCIvPjwvc3ZnPmAsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNWR3NcbiIsImNvbnN0IG1hcHBpbmcgPSB7XG4gIG5hbWU6ICdhJyxcbiAgdW5pZmllZDogJ2InLFxuICBub25fcXVhbGlmaWVkOiAnYycsXG4gIGhhc19pbWdfYXBwbGU6ICdkJyxcbiAgaGFzX2ltZ19nb29nbGU6ICdlJyxcbiAgaGFzX2ltZ190d2l0dGVyOiAnZicsXG4gIGhhc19pbWdfZmFjZWJvb2s6ICdoJyxcbiAga2V5d29yZHM6ICdqJyxcbiAgc2hlZXQ6ICdrJyxcbiAgZW1vdGljb25zOiAnbCcsXG4gIHRleHQ6ICdtJyxcbiAgc2hvcnRfbmFtZXM6ICduJyxcbiAgYWRkZWRfaW46ICdvJyxcbn1cblxuY29uc3QgYnVpbGRTZWFyY2ggPSAoZW1vamkpID0+IHtcbiAgY29uc3Qgc2VhcmNoID0gW11cblxuICB2YXIgYWRkVG9TZWFyY2ggPSAoc3RyaW5ncywgc3BsaXQpID0+IHtcbiAgICBpZiAoIXN0cmluZ3MpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIDsoQXJyYXkuaXNBcnJheShzdHJpbmdzKSA/IHN0cmluZ3MgOiBbc3RyaW5nc10pLmZvckVhY2goKHN0cmluZykgPT4ge1xuICAgICAgOyhzcGxpdCA/IHN0cmluZy5zcGxpdCgvWy18X3xcXHNdKy8pIDogW3N0cmluZ10pLmZvckVhY2goKHMpID0+IHtcbiAgICAgICAgcyA9IHMudG9Mb3dlckNhc2UoKVxuXG4gICAgICAgIGlmIChzZWFyY2guaW5kZXhPZihzKSA9PSAtMSkge1xuICAgICAgICAgIHNlYXJjaC5wdXNoKHMpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGFkZFRvU2VhcmNoKGVtb2ppLnNob3J0X25hbWVzLCB0cnVlKVxuICBhZGRUb1NlYXJjaChlbW9qaS5uYW1lLCB0cnVlKVxuICBhZGRUb1NlYXJjaChlbW9qaS5rZXl3b3JkcywgZmFsc2UpXG4gIGFkZFRvU2VhcmNoKGVtb2ppLmVtb3RpY29ucywgZmFsc2UpXG5cbiAgcmV0dXJuIHNlYXJjaC5qb2luKCcsJylcbn1cblxuY29uc3QgY29tcHJlc3MgPSAoZW1vamkpID0+IHtcbiAgZW1vamkuc2hvcnRfbmFtZXMgPSBlbW9qaS5zaG9ydF9uYW1lcy5maWx0ZXIoKHNob3J0X25hbWUpID0+IHtcbiAgICByZXR1cm4gc2hvcnRfbmFtZSAhPT0gZW1vamkuc2hvcnRfbmFtZVxuICB9KVxuICBkZWxldGUgZW1vamkuc2hvcnRfbmFtZVxuXG4gIGVtb2ppLnNoZWV0ID0gW2Vtb2ppLnNoZWV0X3gsIGVtb2ppLnNoZWV0X3ldXG4gIGRlbGV0ZSBlbW9qaS5zaGVldF94XG4gIGRlbGV0ZSBlbW9qaS5zaGVldF95XG5cbiAgZW1vamkuYWRkZWRfaW4gPSBwYXJzZUludChlbW9qaS5hZGRlZF9pbilcbiAgaWYgKGVtb2ppLmFkZGVkX2luID09PSA2KSB7XG4gICAgZGVsZXRlIGVtb2ppLmFkZGVkX2luXG4gIH1cblxuICBmb3IgKGxldCBrZXkgaW4gbWFwcGluZykge1xuICAgIGVtb2ppW21hcHBpbmdba2V5XV0gPSBlbW9qaVtrZXldXG4gICAgZGVsZXRlIGVtb2ppW2tleV1cbiAgfVxuXG4gIGZvciAobGV0IGtleSBpbiBlbW9qaSkge1xuICAgIGxldCB2YWx1ZSA9IGVtb2ppW2tleV1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiAhdmFsdWUubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgZW1vamlba2V5XVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAhdmFsdWUubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgZW1vamlba2V5XVxuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgIGRlbGV0ZSBlbW9qaVtrZXldXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlZXBGcmVlemUob2JqZWN0KSB7XG4gIC8vIFJldHJpZXZlIHRoZSBwcm9wZXJ0eSBuYW1lcyBkZWZpbmVkIG9uIG9iamVjdFxuICB2YXIgcHJvcE5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqZWN0KVxuXG4gIC8vIEZyZWV6ZSBwcm9wZXJ0aWVzIGJlZm9yZSBmcmVlemluZyBzZWxmXG4gIGZvciAobGV0IG5hbWUgb2YgcHJvcE5hbWVzKSB7XG4gICAgbGV0IHZhbHVlID0gb2JqZWN0W25hbWVdXG4gICAgb2JqZWN0W25hbWVdID1cbiAgICAgIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyBkZWVwRnJlZXplKHZhbHVlKSA6IHZhbHVlXG4gIH1cbiAgcmV0dXJuIE9iamVjdC5mcmVlemUob2JqZWN0KVxufVxuXG5jb25zdCB1bmNvbXByZXNzID0gKGRhdGEpID0+IHtcbiAgaWYgKCFkYXRhLmNvbXByZXNzZWQpIHtcbiAgICByZXR1cm4gZGF0YVxuICB9XG4gIGRhdGEuY29tcHJlc3NlZCA9IGZhbHNlXG5cbiAgZm9yIChsZXQgaWQgaW4gZGF0YS5lbW9qaXMpIHtcbiAgICBsZXQgZW1vamkgPSBkYXRhLmVtb2ppc1tpZF1cblxuICAgIGZvciAobGV0IGtleSBpbiBtYXBwaW5nKSB7XG4gICAgICBlbW9qaVtrZXldID0gZW1vamlbbWFwcGluZ1trZXldXVxuICAgICAgZGVsZXRlIGVtb2ppW21hcHBpbmdba2V5XV1cbiAgICB9XG5cbiAgICBpZiAoIWVtb2ppLnNob3J0X25hbWVzKSBlbW9qaS5zaG9ydF9uYW1lcyA9IFtdXG4gICAgZW1vamkuc2hvcnRfbmFtZXMudW5zaGlmdChpZClcblxuICAgIGVtb2ppLnNoZWV0X3ggPSBlbW9qaS5zaGVldFswXVxuICAgIGVtb2ppLnNoZWV0X3kgPSBlbW9qaS5zaGVldFsxXVxuICAgIGRlbGV0ZSBlbW9qaS5zaGVldFxuXG4gICAgaWYgKCFlbW9qaS50ZXh0KSBlbW9qaS50ZXh0ID0gJydcblxuICAgIGlmICghZW1vamkuYWRkZWRfaW4pIGVtb2ppLmFkZGVkX2luID0gNlxuICAgIGVtb2ppLmFkZGVkX2luID0gZW1vamkuYWRkZWRfaW4udG9GaXhlZCgxKVxuXG4gICAgZW1vamkuc2VhcmNoID0gYnVpbGRTZWFyY2goZW1vamkpXG4gIH1cbiAgZGF0YSA9IGRlZXBGcmVlemUoZGF0YSlcbiAgcmV0dXJuIGRhdGFcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IGJ1aWxkU2VhcmNoLCBjb21wcmVzcywgdW5jb21wcmVzcyB9XG4iLCJpbXBvcnQgeyBpbnRlcnNlY3QsIHVuaWZpZWRUb05hdGl2ZSB9IGZyb20gJy4vaW5kZXgnXG5pbXBvcnQgeyB1bmNvbXByZXNzLCBidWlsZFNlYXJjaCB9IGZyb20gJy4vZGF0YSdcbmltcG9ydCBmcmVxdWVudGx5IGZyb20gJy4vZnJlcXVlbnRseSdcblxuY29uc3QgU0hFRVRfQ09MVU1OUyA9IDU2XG5jb25zdCBDT0xPTlNfUkVHRVggPSAvXig/OlxcOihbXlxcOl0rKVxcOikoPzpcXDpza2luLXRvbmUtKFxcZClcXDopPyQvXG4vLyBTa2luIHRvbmVzXG5jb25zdCBTS0lOUyA9IFsnMUYzRkEnLCAnMUYzRkInLCAnMUYzRkMnLCAnMUYzRkQnLCAnMUYzRkUnLCAnMUYzRkYnXVxuXG4vKipcbiAqIEVtb2ppIGRhdGEgc3RydWN0dXJlOlxuICoge1xuICogICAgXCJjb21wcmVzc2VkXCI6IGZhbHNlLFxuICogICAgXCJhbGlhc2VzXCI6IHtcbiAqICAgICAgY29sbGlzaW9uOiBcImJvb21cIlxuICogICAgICBjb29raW5nOiBcImZyaWVkX2VnZ1wiXG4gKiAgICAgIGVudmVsb3BlOiBcImVtYWlsXCJcbiAqICAgICAgZmFjZV93aXRoX2Zpbmdlcl9jb3ZlcmluZ19jbG9zZWRfbGlwczogXCJzaHVzaGluZ19mYWNlXCJcbiAqICAgICAgLi4uXG4gKiAgICB9LFxuICogICAgXCJjYXRlZ29yaWVzXCI6IFsge1xuICogICAgICBpZDogXCJwZW9wbGVcIixcbiAqICAgICAgbmFtZTogXCJTbWlsZXlzICYgRW1vdGlvblwiLFxuICogICAgICBlbW9qaXM6IFsgXCJncmlubmluZ1wiLCBcImdyaW5cIiwgXCJqb3lcIiwgLi4uIF1cbiAqICAgIH0sIHtcbiAqICAgICAgaWQ6IFwibmF0dXJlXCIsXG4gKiAgICAgIG5hbWU6IFwiQW5pbWFscyAmIE5hdHVyZVwiLFxuICogICAgICBlbW9qaXM6IFsgXCJtb25rZXlfZmFjZVwiLCBcIm1vbmV5XCIsIFwiZ29yaWxsYVwiLCAuLi4gXVxuICogICAgfSxcbiAqICAgIC4uLlxuICogICAgXSxcbiAqICAgIFwiZW1vamlzXCI6IFtcbiAqICAgICAgc21pbGV5OiB7XG4gKiAgICAgICAgYWRkZWRfaW46IFwiNi4wXCIsXG4gKiAgICAgICAgZW1vdGljb25zOiBbXCI9KVwiLCBcIj0tKVwiXSxcbiAqICAgICAgICBoYXNfaW1nX2FwcGxlOiB0cnVlLFxuICogICAgICAgIGhhc19pbWdfZmFjZWJvb2s6IHRydWUsXG4gKiAgICAgICAgaGFzX2ltZ19nb29nbGU6IHRydWUsXG4gKiAgICAgICAgaGFzX2ltZ190d2l0dGVyOiB0cnVlLFxuICogICAgICAgIGtleXdvcmRzOiBbXCJmYWNlXCIsIFwiaGFwcHlcIiwgXCJqb3lcIiwgXCJoYWhhXCIsIFwiOkRcIiwgXCI6KVwiLCBcInNtaWxlXCIsIFwiZnVubnlcIl0sXG4gKiAgICAgICAgbmFtZTogXCJTbWlsaW5nIEZhY2Ugd2l0aCBPcGVuIE1vdXRoXCIsXG4gKiAgICAgICAgbm9uX3F1YWxpZmllZDogdW5kZWZpbmVkLFxuICogICAgICAgIHNlYXJjaDogXCJzbWlsZXksc21pbGluZyxmYWNlLHdpdGgsb3Blbixtb3V0aCxoYXBweSxqb3ksaGFoYSw6ZCw6KSxzbWlsZSxmdW5ueSw9KSw9LSlcIixcbiAqICAgICAgICBzaGVldF94OiAzMCxcbiAqICAgICAgICBzaGVldF95OiAyNyxcbiAqICAgICAgICBzaG9ydF9uYW1lczogW1wic21pbGV5XCJdLFxuICogICAgICAgIHRleHQ6IFwiOilcIixcbiAqICAgICAgICB1bmlmaWVkOiBcIjFGNjAzXCIsXG4gKiAgICAgIH0sIHtcbiAqICAgICAgKzE6IHsgICAgLy8gZW1vamkgd2l0aCBza2luX3ZhcmlhdGlvbnNcbiAqICAgICAgICAgIC4uLiwgLy8gYWxsIHRoZSByZWd1bGFyIGZpZWxkcyBhcmUgcHJlc2VudFxuICogICAgICAgICAgbmFtZTogXCJUaHVtYnMgVXAgU2lnblwiLFxuICogICAgICAgICAgc2hvcnRfbmFtZXM6ICgyKSBbXCIrMVwiLCBcInRodW1ic3VwXCJdLFxuICogICAgICAgICAgc2tpbl92YXJpYXRpb25zOiB7XG4gKiAgICAgICAgICAgIDFGM0ZCOiAgICAgICAgICAgICAvLyBlYWNoIHZhcmlhdGlvbiBoYXMgYWRkaXRpb25hbCBzZXQgb2YgZmllbGRzOlxuICogICAgICAgICAgICAgIGFkZGVkX2luOiBcIjguMFwiLFxuICogICAgICAgICAgICAgIGhhc19pbWdfYXBwbGU6IHRydWUsXG4gKiAgICAgICAgICAgICAgaGFzX2ltZ19mYWNlYm9vazogdHJ1ZSxcbiAqICAgICAgICAgICAgICBoYXNfaW1nX2dvb2dsZTogdHJ1ZSxcbiAqICAgICAgICAgICAgICBoYXNfaW1nX3R3aXR0ZXI6IHRydWUsXG4gKiAgICAgICAgICAgICAgaW1hZ2U6IFwiMWY0NGQtMWYzZmIucG5nXCIsXG4gKiAgICAgICAgICAgICAgbm9uX3F1YWxpZmllZDogbnVsbCxcbiAqICAgICAgICAgICAgICBzaGVldF94OiAxNCxcbiAqICAgICAgICAgICAgICBzaGVldF95OiA1MCxcbiAqICAgICAgICAgICAgICB1bmlmaWVkOiBcIjFGNDRELTFGM0ZCXCIsXG4gKiAgICAgICAgICAgIDFGM0ZCOiB74oCmfSxcbiAqICAgICAgICAgICAgMUYzRkM6IHvigKZ9LFxuICogICAgICAgICAgICAxRjNGRDoge+KApn0sXG4gKiAgICAgICAgICAgIDFGM0ZFOiB74oCmfSxcbiAqICAgICAgICAgICAgMUYzRkY6IHvigKZ9XG4gKiAgICAgICAgICAgIH0sXG4gKiAgICAgICAgICAuLi5cbiAqICAgICAgfSxcbiAqICAgICAgYTogeyAgLy8gZW1vamkgd2l0aCBub25fcXVhbGlmaWVkIGZpZWxkIHNldFxuICogICAgICAgIGFkZGVkX2luOiBcIjYuMFwiLFxuICogICAgICAgIGVtb3RpY29uczogdW5kZWZpbmVkLFxuICogICAgICAgIGhhc19pbWdfYXBwbGU6IHRydWUsXG4gKiAgICAgICAgLi4uXG4gKiAgICAgICAgbm9uX3F1YWxpZmllZDogXCIxRjE3MFwiLFxuICogICAgICAgIHVuaWZpZWQ6IFwiMUYxNzAtRkUwRlwiLFxuICogICAgIH0sXG4gKiAgICAgLi4uXG4gKiAgIF1cbiAqIH1cbiAqL1xuXG4vKipcbiAqIFdyYXBzIHJhdyBqYXNvbiBlbW9qaSBkYXRhLCBzZXJ2ZXMgYXMgZGF0YSBzb3VyY2UgZm9yXG4gKiBlbW9qaSBwaWNrZXIgY29tcG9uZW50cy5cbiAqXG4gKiBVc2FnZTpcbiAqXG4gKiAgIGltcG9ydCBkYXRhIGZyb20gJy4uL2RhdGEvYWxsLmpzb24nXG4gKiAgIGxldCBpbmRleCA9IG5ldyBFbW9qaUluZGV4KGRhdGEpXG4gKlxuICovXG5leHBvcnQgY2xhc3MgRW1vamlJbmRleCB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBSYXcganNvbiBkYXRhLCBzZWUgdGhlIHN0cnVjdHVyZSBhYm92ZS5cbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBhZGRpdGlvbmFsIG9wdGlvbnMsIGFzIGFuIG9iamVjdDpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZW1vamlzVG9TaG93RmlsdGVyIC0gb3B0aW9uYWwsIGZ1bmN0aW9uIHRvIGZpbHRlciBvdXRcbiAgICogICBzb21lIGVtb2ppcywgZnVuY3Rpb24oZW1vamkpIHsgcmV0dXJuIHRydWV8ZmFsc2UgfVxuICAgKiAgIHdoZXJlIGBlbW9qaWAgaXMgYW4gcmF3IGVtb2ppIG9iamVjdCwgc2VlIGRhdGEuZW1vamlzIGFib3ZlLlxuICAgKiBAcGFyYW0ge0FycmF5fSBpbmNsdWRlIC0gb3B0aW9uYWwsIGEgbGlzdCBvZiBjYXRlZ29yeSBpZHMgdG8gaW5jbHVkZS5cbiAgICogQHBhcmFtIHtBcnJheX0gZXhjbHVkZSAtIG9wdGlvbmFsLCBhIGxpc3Qgb2YgY2F0ZWdvcnkgaWRzIHRvIGV4Y2x1ZGUuXG4gICAqIEBwYXJhbSB7QXJyYXl9IGN1c3RvbSAtIG9wdGlvbmFsLCBhIGxpc3QgY3VzdG9tIGVtb2ppcywgZWFjaCBlbW9qaSBpc1xuICAgKiAgIGFuIG9iamVjdCwgc2VlIGRhdGEuZW1vamlzIGFib3ZlIGZvciBleGFtcGxlcy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIGRhdGEsXG4gICAge1xuICAgICAgZW1vamlzVG9TaG93RmlsdGVyLFxuICAgICAgaW5jbHVkZSxcbiAgICAgIGV4Y2x1ZGUsXG4gICAgICBjdXN0b20sXG4gICAgICByZWNlbnQsXG4gICAgICByZWNlbnRMZW5ndGggPSAyMCxcbiAgICB9ID0ge30sXG4gICkge1xuICAgIHRoaXMuX2RhdGEgPSB1bmNvbXByZXNzKGRhdGEpXG4gICAgLy8gQ2FsbGJhY2sgdG8gZXhjbHVkZSBzcGVjaWZpYyBlbW9qaXNcbiAgICB0aGlzLl9lbW9qaXNGaWx0ZXIgPSBlbW9qaXNUb1Nob3dGaWx0ZXIgfHwgbnVsbFxuICAgIC8vIENhdGVnb3JpZXMgdG8gaW5jbHVkZSAvIGV4Y2x1ZGVcbiAgICB0aGlzLl9pbmNsdWRlID0gaW5jbHVkZSB8fCBudWxsXG4gICAgdGhpcy5fZXhjbHVkZSA9IGV4Y2x1ZGUgfHwgbnVsbFxuICAgIC8vIEN1c3RvbSBlbW9qaXNcbiAgICB0aGlzLl9jdXN0b20gPSBjdXN0b20gfHwgW11cbiAgICAvLyBSZWNlbnQgZW1vamlzXG4gICAgLy8gVE9ETzogbWFrZSBwYXJhbWV0ZXIgY29uZmlndXJhYmxlXG4gICAgdGhpcy5fcmVjZW50ID0gcmVjZW50IHx8IGZyZXF1ZW50bHkuZ2V0KHJlY2VudExlbmd0aClcblxuICAgIHRoaXMuX2Vtb2ppcyA9IHt9XG4gICAgdGhpcy5fbmF0aXZlRW1vamlzID0ge31cbiAgICB0aGlzLl9lbW90aWNvbnMgPSB7fVxuXG4gICAgdGhpcy5fY2F0ZWdvcmllcyA9IFtdXG4gICAgdGhpcy5fcmVjZW50Q2F0ZWdvcnkgPSB7IGlkOiAncmVjZW50JywgbmFtZTogJ1JlY2VudCcsIGVtb2ppczogW10gfVxuICAgIHRoaXMuX2N1c3RvbUNhdGVnb3J5ID0geyBpZDogJ2N1c3RvbScsIG5hbWU6ICdDdXN0b20nLCBlbW9qaXM6IFtdIH1cbiAgICB0aGlzLl9zZWFyY2hJbmRleCA9IHt9XG4gICAgdGhpcy5idWlsZEluZGV4KClcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpXG4gIH1cblxuICBidWlsZEluZGV4KCkge1xuICAgIGxldCBhbGxDYXRlZ29yaWVzID0gdGhpcy5fZGF0YS5jYXRlZ29yaWVzXG5cbiAgICBpZiAodGhpcy5faW5jbHVkZSkge1xuICAgICAgLy8gUmVtb3ZlIGNhdGVnb3JpZXMgdGhhdCBhcmUgbm90IGluIHRoZSBpbmNsdWRlIGxpc3QuXG4gICAgICBhbGxDYXRlZ29yaWVzID0gYWxsQ2F0ZWdvcmllcy5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luY2x1ZGUuaW5jbHVkZXMoaXRlbS5pZClcbiAgICAgIH0pXG4gICAgICAvLyBTb3J0IGNhdGVnb3JpZXMgYWNjb3JkaW5nIHRvIHRoZSBpbmNsdWRlIGxpc3QuXG4gICAgICBhbGxDYXRlZ29yaWVzID0gYWxsQ2F0ZWdvcmllcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4QSA9IHRoaXMuX2luY2x1ZGUuaW5kZXhPZihhLmlkKVxuICAgICAgICBjb25zdCBpbmRleEIgPSB0aGlzLl9pbmNsdWRlLmluZGV4T2YoYi5pZClcbiAgICAgICAgaWYgKGluZGV4QSA8IGluZGV4Qikge1xuICAgICAgICAgIHJldHVybiAtMVxuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleEEgPiBpbmRleEIpIHtcbiAgICAgICAgICByZXR1cm4gMVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwXG4gICAgICB9KVxuICAgIH1cblxuICAgIGFsbENhdGVnb3JpZXMuZm9yRWFjaCgoY2F0ZWdvcnlEYXRhKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNDYXRlZ29yeU5lZWRlZChjYXRlZ29yeURhdGEuaWQpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgbGV0IGNhdGVnb3J5ID0ge1xuICAgICAgICBpZDogY2F0ZWdvcnlEYXRhLmlkLFxuICAgICAgICBuYW1lOiBjYXRlZ29yeURhdGEubmFtZSxcbiAgICAgICAgZW1vamlzOiBbXSxcbiAgICAgIH1cbiAgICAgIGNhdGVnb3J5RGF0YS5lbW9qaXMuZm9yRWFjaCgoZW1vamlJZCkgPT4ge1xuICAgICAgICBsZXQgZW1vamkgPSB0aGlzLmFkZEVtb2ppKGVtb2ppSWQpXG4gICAgICAgIGlmIChlbW9qaSkge1xuICAgICAgICAgIGNhdGVnb3J5LmVtb2ppcy5wdXNoKGVtb2ppKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaWYgKGNhdGVnb3J5LmVtb2ppcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pc0NhdGVnb3J5TmVlZGVkKCdjdXN0b20nKSkge1xuICAgICAgaWYgKHRoaXMuX2N1c3RvbS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAobGV0IGN1c3RvbUVtb2ppIG9mIHRoaXMuX2N1c3RvbSkge1xuICAgICAgICAgIHRoaXMuYWRkQ3VzdG9tRW1vamkoY3VzdG9tRW1vamkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9jdXN0b21DYXRlZ29yeS5lbW9qaXMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX2NhdGVnb3JpZXMucHVzaCh0aGlzLl9jdXN0b21DYXRlZ29yeSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0NhdGVnb3J5TmVlZGVkKCdyZWNlbnQnKSkge1xuICAgICAgaWYgKHRoaXMuX3JlY2VudC5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fcmVjZW50Lm1hcCgoaWQpID0+IHtcbiAgICAgICAgICBmb3IgKGxldCBjdXN0b21FbW9qaSBvZiB0aGlzLl9jdXN0b21DYXRlZ29yeS5lbW9qaXMpIHtcbiAgICAgICAgICAgIGlmIChjdXN0b21FbW9qaS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5fcmVjZW50Q2F0ZWdvcnkuZW1vamlzLnB1c2goY3VzdG9tRW1vamkpXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5oYXNFbW9qaShpZCkpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlY2VudENhdGVnb3J5LmVtb2ppcy5wdXNoKHRoaXMuZW1vamkoaWQpKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIC8vIEFkZCByZWNlbnQgY2F0ZWdvcnkgdG8gdGhlIHRvcFxuICAgICAgaWYgKHRoaXMuX3JlY2VudENhdGVnb3J5LmVtb2ppcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fY2F0ZWdvcmllcy51bnNoaWZ0KHRoaXMuX3JlY2VudENhdGVnb3J5KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIHRoZSBlbW9qaSBmcm9tIHRoZSBzdHJpbmdcbiAgICovXG4gIGZpbmRFbW9qaShlbW9qaSwgc2tpbikge1xuICAgIC8vIDEuIFBhcnNlIGFzIDplbW9qaV9uYW1lOnNraW4tdG9uZS14eDpcbiAgICBsZXQgbWF0Y2hlcyA9IGVtb2ppLm1hdGNoKENPTE9OU19SRUdFWClcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICBlbW9qaSA9IG1hdGNoZXNbMV1cbiAgICAgIGlmIChtYXRjaGVzWzJdKSB7XG4gICAgICAgIHNraW4gPSBwYXJzZUludChtYXRjaGVzWzJdLCAxMClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAyLiBDaGVjayBpZiB0aGUgc3BlY2lmaWVkIGVtb2ppIGlzIGFuIGFsaWFzXG4gICAgaWYgKHRoaXMuX2RhdGEuYWxpYXNlcy5oYXNPd25Qcm9wZXJ0eShlbW9qaSkpIHtcbiAgICAgIGVtb2ppID0gdGhpcy5fZGF0YS5hbGlhc2VzW2Vtb2ppXVxuICAgIH1cblxuICAgIC8vIDMuIENoZWNrIGlmIHdlIGhhdmUgdGhlIHNwZWNpZmllZCBlbW9qaVxuICAgIGlmICh0aGlzLl9lbW9qaXMuaGFzT3duUHJvcGVydHkoZW1vamkpKSB7XG4gICAgICBsZXQgZW1vamlPYmplY3QgPSB0aGlzLl9lbW9qaXNbZW1vamldXG4gICAgICBpZiAoc2tpbikge1xuICAgICAgICByZXR1cm4gZW1vamlPYmplY3QuZ2V0U2tpbihza2luKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVtb2ppT2JqZWN0XG4gICAgfVxuXG4gICAgLy8gNC4gQ2hlY2sgaWYgd2UgaGF2ZSB0aGUgc3BlY2lmaWVkIG5hdGl2ZSBlbW9qaVxuICAgIGlmICh0aGlzLl9uYXRpdmVFbW9qaXMuaGFzT3duUHJvcGVydHkoZW1vamkpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbmF0aXZlRW1vamlzW2Vtb2ppXVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY2F0ZWdvcmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2F0ZWdvcmllc1xuICB9XG5cbiAgZW1vamkoZW1vamlJZCkge1xuICAgIGlmICh0aGlzLl9kYXRhLmFsaWFzZXMuaGFzT3duUHJvcGVydHkoZW1vamlJZCkpIHtcbiAgICAgIGVtb2ppSWQgPSB0aGlzLl9kYXRhLmFsaWFzZXNbZW1vamlJZF1cbiAgICB9XG4gICAgbGV0IGVtb2ppID0gdGhpcy5fZW1vamlzW2Vtb2ppSWRdXG4gICAgaWYgKCFlbW9qaSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gbm90IGZpbmQgZW1vamkgYnkgaWQ6ICcgKyBlbW9qaUlkKVxuICAgIH1cbiAgICByZXR1cm4gZW1vamlcbiAgfVxuXG4gIGZpcnN0RW1vamkoKSB7XG4gICAgbGV0IGVtb2ppID0gdGhpcy5fZW1vamlzW09iamVjdC5rZXlzKHRoaXMuX2Vtb2ppcylbMF1dXG4gICAgaWYgKCFlbW9qaSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gbm90IGdldCBmaXJzdCBlbW9qaScpXG4gICAgfVxuICAgIHJldHVybiBlbW9qaVxuICB9XG5cbiAgaGFzRW1vamkoZW1vamlJZCkge1xuICAgIGlmICh0aGlzLl9kYXRhLmFsaWFzZXMuaGFzT3duUHJvcGVydHkoZW1vamlJZCkpIHtcbiAgICAgIGVtb2ppSWQgPSB0aGlzLl9kYXRhLmFsaWFzZXNbZW1vamlJZF1cbiAgICB9XG4gICAgaWYgKHRoaXMuX2Vtb2ppc1tlbW9qaUlkXSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBuYXRpdmVFbW9qaSh1bmljb2RlRW1vamkpIHtcbiAgICBpZiAodGhpcy5fbmF0aXZlRW1vamlzLmhhc093blByb3BlcnR5KHVuaWNvZGVFbW9qaSkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9uYXRpdmVFbW9qaXNbdW5pY29kZUVtb2ppXVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgc2VhcmNoKHZhbHVlLCBtYXhSZXN1bHRzKSB7XG4gICAgbWF4UmVzdWx0cyB8fCAobWF4UmVzdWx0cyA9IDc1KVxuICAgIGlmICghdmFsdWUubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBpZiAodmFsdWUgPT0gJy0nIHx8IHZhbHVlID09ICctMScpIHtcbiAgICAgIHJldHVybiBbdGhpcy5lbW9qaSgnLTEnKV1cbiAgICB9XG5cbiAgICBsZXQgdmFsdWVzID0gdmFsdWUudG9Mb3dlckNhc2UoKS5zcGxpdCgvW1xcc3wsfFxcLXxfXSsvKVxuICAgIGxldCBhbGxSZXN1bHRzID0gW11cblxuICAgIGlmICh2YWx1ZXMubGVuZ3RoID4gMikge1xuICAgICAgdmFsdWVzID0gW3ZhbHVlc1swXSwgdmFsdWVzWzFdXVxuICAgIH1cblxuICAgIGFsbFJlc3VsdHMgPSB2YWx1ZXNcbiAgICAgIC5tYXAoKHZhbHVlKSA9PiB7XG4gICAgICAgIC8vIFN0YXJ0IHNlYXJjaGluIGluIHRoZSBnbG9iYWwgbGlzdCBvZiBlbW9qaXNcbiAgICAgICAgbGV0IGVtb2ppcyA9IHRoaXMuX2Vtb2ppc1xuICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gdGhpcy5fc2VhcmNoSW5kZXhcbiAgICAgICAgbGV0IGxlbmd0aCA9IDBcblxuICAgICAgICBmb3IgKGxldCBjaGFySW5kZXggPSAwOyBjaGFySW5kZXggPCB2YWx1ZS5sZW5ndGg7IGNoYXJJbmRleCsrKSB7XG4gICAgICAgICAgY29uc3QgY2hhciA9IHZhbHVlW2NoYXJJbmRleF1cbiAgICAgICAgICBsZW5ndGgrK1xuXG4gICAgICAgICAgY3VycmVudEluZGV4W2NoYXJdIHx8IChjdXJyZW50SW5kZXhbY2hhcl0gPSB7fSlcbiAgICAgICAgICBjdXJyZW50SW5kZXggPSBjdXJyZW50SW5kZXhbY2hhcl1cblxuICAgICAgICAgIGlmICghY3VycmVudEluZGV4LnJlc3VsdHMpIHtcbiAgICAgICAgICAgIGxldCBzY29yZXMgPSB7fVxuICAgICAgICAgICAgY3VycmVudEluZGV4LnJlc3VsdHMgPSBbXVxuICAgICAgICAgICAgY3VycmVudEluZGV4LmVtb2ppcyA9IHt9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGVtb2ppSWQgaW4gZW1vamlzKSB7XG4gICAgICAgICAgICAgIGxldCBlbW9qaSA9IGVtb2ppc1tlbW9qaUlkXVxuICAgICAgICAgICAgICAvLyBzZWFyY2ggaXMgYSBjb21tYS1zZXBhcmF0ZWQgc3RyaW5nIHdpdGggd29yZHMsIHJlbGF0ZWRcbiAgICAgICAgICAgICAgLy8gdG8gdGhlIGVtb2ppLCBmb3IgZXhhbXBsZTpcbiAgICAgICAgICAgICAgLy8gc2VhcmNoOiBcInNtaWxleSxzbWlsaW5nLGZhY2Usam95LGhhaGEsOmQsOiksc21pbGUsZnVubnksPSksPS0pXCIsXG4gICAgICAgICAgICAgIGxldCBzZWFyY2ggPSBlbW9qaS5fZGF0YS5zZWFyY2hcbiAgICAgICAgICAgICAgbGV0IHN1YiA9IHZhbHVlLnN1YnN0cigwLCBsZW5ndGgpXG4gICAgICAgICAgICAgIGxldCBzdWJJbmRleCA9IHNlYXJjaC5pbmRleE9mKHN1YilcbiAgICAgICAgICAgICAgaWYgKHN1YkluZGV4ICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNjb3JlID0gc3ViSW5kZXggKyAxXG4gICAgICAgICAgICAgICAgaWYgKHN1YiA9PSBlbW9qaUlkKSBzY29yZSA9IDBcblxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleC5yZXN1bHRzLnB1c2goZW1vamkpXG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4LmVtb2ppc1tlbW9qaUlkXSA9IGVtb2ppXG5cbiAgICAgICAgICAgICAgICBzY29yZXNbZW1vamlJZF0gPSBzY29yZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50SW5kZXgucmVzdWx0cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgIHZhciBhU2NvcmUgPSBzY29yZXNbYS5pZF0sXG4gICAgICAgICAgICAgICAgYlNjb3JlID0gc2NvcmVzW2IuaWRdXG4gICAgICAgICAgICAgIHJldHVybiBhU2NvcmUgLSBiU2NvcmVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gY29udGludWUgc2VhcmNoIGluIHRoZSByZWR1Y2VkIHNldCBvZiBlbW9qaXNcbiAgICAgICAgICBlbW9qaXMgPSBjdXJyZW50SW5kZXguZW1vamlzXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGN1cnJlbnRJbmRleC5yZXN1bHRzXG4gICAgICAgIC8vIFRoZSBcImZpbHRlclwiIGNhbGwgcmVtb3ZlcyB1bmRlZmluZWQgdmFsdWVzIGZyb20gYWxsUmVzdWx0c1xuICAgICAgICAvLyBhcnJheSwgZm9yIGV4YW1wbGUsIGlmIHdlIGhhdmUgXCJ0ZXN0IFwiICh3aXRoIHRyYWlsaW5nIHNwYWNlKSxcbiAgICAgICAgLy8gd2Ugd2lsbCBnZXQgXCJbQXJyYXksIHVuZGVmaW5lZF1cIiBmb3IgYWxsUmVzdWx0cyBhbmQgYWZ0ZXJcbiAgICAgICAgLy8gdGhlIFwiZmlsdGVyXCIgY2FsbCBpdCB3aWxsIHR1cm4gaW50byBcIltBcnJheV1cIlxuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoKGEpID0+IGEpXG5cbiAgICB2YXIgcmVzdWx0cyA9IG51bGxcbiAgICBpZiAoYWxsUmVzdWx0cy5sZW5ndGggPiAxKSB7XG4gICAgICByZXN1bHRzID0gaW50ZXJzZWN0LmFwcGx5KG51bGwsIGFsbFJlc3VsdHMpXG4gICAgfSBlbHNlIGlmIChhbGxSZXN1bHRzLmxlbmd0aCkge1xuICAgICAgcmVzdWx0cyA9IGFsbFJlc3VsdHNbMF1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0cyA9IFtdXG4gICAgfVxuICAgIGlmIChyZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoID4gbWF4UmVzdWx0cykge1xuICAgICAgcmVzdWx0cyA9IHJlc3VsdHMuc2xpY2UoMCwgbWF4UmVzdWx0cylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHNcbiAgfVxuXG4gIGFkZEN1c3RvbUVtb2ppKGN1c3RvbUVtb2ppKSB7XG4gICAgbGV0IGVtb2ppRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGN1c3RvbUVtb2ppLCB7XG4gICAgICBpZDogY3VzdG9tRW1vamkuc2hvcnRfbmFtZXNbMF0sXG4gICAgICBjdXN0b206IHRydWUsXG4gICAgfSlcbiAgICBpZiAoIWVtb2ppRGF0YS5zZWFyY2gpIHtcbiAgICAgIGVtb2ppRGF0YS5zZWFyY2ggPSBidWlsZFNlYXJjaChlbW9qaURhdGEpXG4gICAgfVxuICAgIGxldCBlbW9qaSA9IG5ldyBFbW9qaURhdGEoZW1vamlEYXRhKVxuICAgIHRoaXMuX2Vtb2ppc1tlbW9qaS5pZF0gPSBlbW9qaVxuICAgIHRoaXMuX2N1c3RvbUNhdGVnb3J5LmVtb2ppcy5wdXNoKGVtb2ppKVxuICAgIHJldHVybiBlbW9qaVxuICB9XG5cbiAgYWRkRW1vamkoZW1vamlJZCkge1xuICAgIC8vIFdlIGV4cGVjdCB0aGUgY29ycmVjdCBlbW9qaSBpZCB0aGF0IGlzIHByZXNlbnQgaW4gdGhlIGVtb2ppcyBkYXRhLlxuICAgIGxldCBkYXRhID0gdGhpcy5fZGF0YS5lbW9qaXNbZW1vamlJZF1cblxuICAgIGlmICghdGhpcy5pc0Vtb2ppTmVlZGVkKGRhdGEpKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBsZXQgZW1vamkgPSBuZXcgRW1vamlEYXRhKGRhdGEpXG4gICAgdGhpcy5fZW1vamlzW2Vtb2ppSWRdID0gZW1vamlcbiAgICBpZiAoZW1vamkubmF0aXZlKSB7XG4gICAgICB0aGlzLl9uYXRpdmVFbW9qaXNbZW1vamkubmF0aXZlXSA9IGVtb2ppXG4gICAgfVxuICAgIGlmIChlbW9qaS5fc2tpbnMpIHtcbiAgICAgIGZvciAobGV0IGlkeCBpbiBlbW9qaS5fc2tpbnMpIHtcbiAgICAgICAgbGV0IHNraW4gPSBlbW9qaS5fc2tpbnNbaWR4XVxuICAgICAgICBpZiAoc2tpbi5uYXRpdmUpIHtcbiAgICAgICAgICB0aGlzLl9uYXRpdmVFbW9qaXNbc2tpbi5uYXRpdmVdID0gc2tpblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGVtb2ppLmVtb3RpY29ucykge1xuICAgICAgZW1vamkuZW1vdGljb25zLmZvckVhY2goKGVtb3RpY29uKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9lbW90aWNvbnNbZW1vdGljb25dKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZW1vdGljb25zW2Vtb3RpY29uXSA9IGVtb2ppSWRcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBlbW9qaVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHdlIG5lZWQgdG8gaW5jbHVkZSBnaXZlbiBjYXRlZ29yeS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNhdGVnb3J5X2lkIC0gVGhlIGNhdGVnb3J5IGlkLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSAtIFdoZXRoZXIgdG8gaW5jbHVkZSB0aGUgZW1vamkuXG4gICAqL1xuICBpc0NhdGVnb3J5TmVlZGVkKGNhdGVnb3J5X2lkKSB7XG4gICAgbGV0IGlzSW5jbHVkZWQgPVxuICAgICAgdGhpcy5faW5jbHVkZSAmJiB0aGlzLl9pbmNsdWRlLmxlbmd0aFxuICAgICAgICA/IHRoaXMuX2luY2x1ZGUuaW5kZXhPZihjYXRlZ29yeV9pZCkgPiAtMVxuICAgICAgICA6IHRydWVcbiAgICBsZXQgaXNFeGNsdWRlZCA9XG4gICAgICB0aGlzLl9leGNsdWRlICYmIHRoaXMuX2V4Y2x1ZGUubGVuZ3RoXG4gICAgICAgID8gdGhpcy5fZXhjbHVkZS5pbmRleE9mKGNhdGVnb3J5X2lkKSA+IC0xXG4gICAgICAgIDogZmFsc2VcbiAgICBpZiAoIWlzSW5jbHVkZWQgfHwgaXNFeGNsdWRlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgd2UgbmVlZCB0byBpbmNsdWRlIGdpdmVuIGVtb2ppLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZW1vamkgLSBUaGUgcmF3IGVtb2ppIG9iamVjdC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gLSBXaGV0aGVyIHRvIGluY2x1ZGUgdGhlIGVtb2ppLlxuICAgKi9cbiAgaXNFbW9qaU5lZWRlZChlbW9qaSkge1xuICAgIGlmICh0aGlzLl9lbW9qaXNGaWx0ZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLl9lbW9qaXNGaWx0ZXIoZW1vamkpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVtb2ppRGF0YSB7XG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLl9kYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSlcbiAgICB0aGlzLl9za2lucyA9IG51bGxcbiAgICBpZiAodGhpcy5fZGF0YS5za2luX3ZhcmlhdGlvbnMpIHtcbiAgICAgIHRoaXMuX3NraW5zID0gW11cbiAgICAgIGZvciAodmFyIHNraW5JZHggaW4gU0tJTlMpIHtcbiAgICAgICAgbGV0IHNraW5LZXkgPSBTS0lOU1tza2luSWR4XVxuICAgICAgICBsZXQgdmFyaWF0aW9uRGF0YSA9IHRoaXMuX2RhdGEuc2tpbl92YXJpYXRpb25zW3NraW5LZXldXG4gICAgICAgIGxldCBza2luRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEpXG4gICAgICAgIGZvciAobGV0IGsgaW4gdmFyaWF0aW9uRGF0YSkge1xuICAgICAgICAgIHNraW5EYXRhW2tdID0gdmFyaWF0aW9uRGF0YVtrXVxuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBza2luRGF0YS5za2luX3ZhcmlhdGlvbnNcbiAgICAgICAgc2tpbkRhdGFbJ3NraW5fdG9uZSddID0gcGFyc2VJbnQoc2tpbklkeCkgKyAxXG4gICAgICAgIHRoaXMuX3NraW5zLnB1c2gobmV3IEVtb2ppRGF0YShza2luRGF0YSkpXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3Nhbml0aXplZCA9IHNhbml0aXplKHRoaXMuX2RhdGEpXG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuX3Nhbml0aXplZCkge1xuICAgICAgdGhpc1trZXldID0gdGhpcy5fc2FuaXRpemVkW2tleV1cbiAgICB9XG4gICAgdGhpcy5zaG9ydF9uYW1lcyA9IHRoaXMuX2RhdGEuc2hvcnRfbmFtZXNcbiAgICB0aGlzLnNob3J0X25hbWUgPSB0aGlzLl9kYXRhLnNob3J0X25hbWVzWzBdXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKVxuICB9XG5cbiAgZ2V0U2tpbihza2luSWR4KSB7XG4gICAgaWYgKHNraW5JZHggJiYgc2tpbklkeCAhPSAnbmF0aXZlJyAmJiB0aGlzLl9za2lucykge1xuICAgICAgcmV0dXJuIHRoaXMuX3NraW5zW3NraW5JZHggLSAxXVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgbGV0IG11bHRpcGx5ID0gMTAwIC8gU0hFRVRfQ09MVU1OUyxcbiAgICAgIHggPSBNYXRoLnJvdW5kKG11bHRpcGx5ICogdGhpcy5fZGF0YS5zaGVldF94ICogMTAwKSAvIDEwMCxcbiAgICAgIHkgPSBNYXRoLnJvdW5kKG11bHRpcGx5ICogdGhpcy5fZGF0YS5zaGVldF95ICogMTAwKSAvIDEwMFxuICAgIHJldHVybiBgJHt4fSUgJHt5fSVgXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVtb2ppVmlldyB7XG4gIC8qKlxuICAgKiBlbW9qaSAtIEVtb2ppIHRvIGRpc3BsYXlcbiAgICogc2V0IC0gc3RyaW5nLCBlbW9qaSBzZXQgbmFtZVxuICAgKiBuYXRpdmUgLSBib29sZWFuLCB3aGV0aGVyIHRvIHJlbmRlciBuYXRpdmUgZW1vamlcbiAgICogZmFsbGJhY2sgLSBmYWxsYmFjayBmdW5jdGlvbiB0byByZW5kZXIgbWlzc2luZyBlbW9qaSwgb3B0aW9uYWxcbiAgICogZW1vamlUb29sdGlwIC0gd2V0aGVyIHdlIG5lZWQgdG8gc2hvdyB0aGUgZW1vamkgdG9vbHRpcCwgb3B0aW9uYWxcbiAgICogZW1vamlTaXplIC0gZW1vamkgc2l6ZSBpbiBwaXhlbHMsIG9wdGlvbmFsXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbW9qaSwgc2tpbiwgc2V0LCBuYXRpdmUsIGZhbGxiYWNrLCBlbW9qaVRvb2x0aXAsIGVtb2ppU2l6ZSkge1xuICAgIHRoaXMuX2Vtb2ppID0gZW1vamlcbiAgICB0aGlzLl9uYXRpdmUgPSBuYXRpdmVcbiAgICB0aGlzLl9za2luID0gc2tpblxuICAgIHRoaXMuX3NldCA9IHNldFxuICAgIHRoaXMuX2ZhbGxiYWNrID0gZmFsbGJhY2tcblxuICAgIHRoaXMuY2FuUmVuZGVyID0gdGhpcy5fY2FuUmVuZGVyKClcbiAgICB0aGlzLmNzc0NsYXNzID0gdGhpcy5fY3NzQ2xhc3MoKVxuICAgIHRoaXMuY3NzU3R5bGUgPSB0aGlzLl9jc3NTdHlsZShlbW9qaVNpemUpXG4gICAgdGhpcy5jb250ZW50ID0gdGhpcy5fY29udGVudCgpXG4gICAgdGhpcy50aXRsZSA9IGVtb2ppVG9vbHRpcCA9PT0gdHJ1ZSA/IGVtb2ppLnNob3J0X25hbWUgOiBudWxsXG5cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpXG4gIH1cblxuICBnZXRFbW9qaSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW1vamkuZ2V0U2tpbih0aGlzLl9za2luKVxuICB9XG5cbiAgX2NhblJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5faXNDdXN0b20oKSB8fCB0aGlzLl9pc05hdGl2ZSgpIHx8IHRoaXMuX2hhc0Vtb2ppKCkgfHwgdGhpcy5fZmFsbGJhY2tcbiAgICApXG4gIH1cblxuICBfY3NzQ2xhc3MoKSB7XG4gICAgcmV0dXJuIFsnZW1vamktc2V0LScgKyB0aGlzLl9zZXQsICdlbW9qaS10eXBlLScgKyB0aGlzLl9lbW9qaVR5cGUoKV1cbiAgfVxuXG4gIF9jc3NTdHlsZShlbW9qaVNpemUpIHtcbiAgICBsZXQgY3NzU3R5bGUgPSB7fVxuICAgIGlmICh0aGlzLl9pc0N1c3RvbSgpKSB7XG4gICAgICBjc3NTdHlsZSA9IHtcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyB0aGlzLmdldEVtb2ppKCkuX2RhdGEuaW1hZ2VVcmwgKyAnKScsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiAnMTAwJScsXG4gICAgICAgIHdpZHRoOiBlbW9qaVNpemUgKyAncHgnLFxuICAgICAgICBoZWlnaHQ6IGVtb2ppU2l6ZSArICdweCcsXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLl9oYXNFbW9qaSgpICYmICF0aGlzLl9pc05hdGl2ZSgpKSB7XG4gICAgICBjc3NTdHlsZSA9IHtcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiB0aGlzLmdldEVtb2ppKCkuZ2V0UG9zaXRpb24oKSxcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVtb2ppU2l6ZSkge1xuICAgICAgaWYgKHRoaXMuX2lzTmF0aXZlKCkpIHtcbiAgICAgICAgLy8gU2V0IGZvbnQtc2l6ZSBmb3IgbmF0aXZlIGVtb2ppLlxuICAgICAgICBjc3NTdHlsZSA9IE9iamVjdC5hc3NpZ24oY3NzU3R5bGUsIHtcbiAgICAgICAgICAvLyBmb250LXNpemUgaXMgdXNlZCBmb3IgbmF0aXZlIGVtb2ppIHdoaWNoIHdlIG5lZWRcbiAgICAgICAgICAvLyB0byBzY2FsZSB3aXRoIDAuOCBmYWN0b3IgdG8gaGF2ZSB0aGVtIGxvb2sgYXBwcm94aW1hdGVseVxuICAgICAgICAgIC8vIHRoZSBzYW1lIHNpemUgYXMgaW1hZ2UtYmFzZWQgZW1vamwuXG4gICAgICAgICAgZm9udFNpemU6IE1hdGgucm91bmQoZW1vamlTaXplICogMC44ICogMTApIC8gMTAgKyAncHgnLFxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU2V0IHdpZHRoL2hlaWdodCBmb3IgaW1hZ2UgZW1vamkuXG4gICAgICAgIGNzc1N0eWxlID0gT2JqZWN0LmFzc2lnbihjc3NTdHlsZSwge1xuICAgICAgICAgIHdpZHRoOiBlbW9qaVNpemUgKyAncHgnLFxuICAgICAgICAgIGhlaWdodDogZW1vamlTaXplICsgJ3B4JyxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNzc1N0eWxlXG4gIH1cblxuICBfY29udGVudCgpIHtcbiAgICBpZiAodGhpcy5faXNDdXN0b20oKSkge1xuICAgICAgcmV0dXJuICcnXG4gICAgfVxuICAgIGlmICh0aGlzLl9pc05hdGl2ZSgpKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRFbW9qaSgpLm5hdGl2ZVxuICAgIH1cbiAgICBpZiAodGhpcy5faGFzRW1vamkoKSkge1xuICAgICAgcmV0dXJuICcnXG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9mYWxsYmFjayA/IHRoaXMuX2ZhbGxiYWNrKHRoaXMuZ2V0RW1vamkoKSkgOiBudWxsXG4gIH1cblxuICBfaXNOYXRpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hdGl2ZVxuICB9XG5cbiAgX2lzQ3VzdG9tKCkge1xuICAgIHJldHVybiB0aGlzLmdldEVtb2ppKCkuY3VzdG9tXG4gIH1cblxuICBfaGFzRW1vamkoKSB7XG4gICAgaWYgKCF0aGlzLmdldEVtb2ppKCkuX2RhdGEpIHtcbiAgICAgIC8vIFJldHVybiBmYWxzZSBpZiB3ZSBoYXZlIG5vIGRhdGEuXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgY29uc3QgaGFzSW1hZ2UgPSB0aGlzLmdldEVtb2ppKCkuX2RhdGFbJ2hhc19pbWdfJyArIHRoaXMuX3NldF1cbiAgICBpZiAoaGFzSW1hZ2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gaGFzX2ltZ194eHggaW4gdGhlIGRhdGEsIHdlIGFyZSB3b3JraW5nIHdpdGhcbiAgICAgIC8vIHNwZWNpZmljIGRhdGEgZmlsZSwgbGlrZSBmYWNlYm9vay5qc29uLCBzbyB3ZSBhc3N1bWUgYWxsXG4gICAgICAvLyBlbW9qaXMgYXJlIGF2YWlsYWJsZSAodGhlIDpzZXQgc2V0dGluZyBmb3IgcGlja2VyIHNob3VsZFxuICAgICAgLy8gbWF0Y2ggdGhlIGRhdGEgZmlsZSkuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICAvLyBPdGhlcndpc2UsIHdlIGFyZSB1c2luZyBhbGwuanNvbiBhbmQgY2FuIHN3aXRjaCBiZXR3ZWVuIGRpZmZlcmVudFxuICAgIC8vIHNldHMgLSBpbiB0aGlzIGNhc2UgdGhlIGBoYXNfaW1nX3tzZXRfbmFtZX1gIGlzIGEgYm9vbGVhbiB0aGF0XG4gICAgLy8gaW5kaWNhdGVzIGlmIHRoZXJlIGlzIHN1Y2ggaW1hZ2Ugb3Igbm90IGZvciBhIGdpdmVuIHNldC5cbiAgICByZXR1cm4gaGFzSW1hZ2VcbiAgfVxuXG4gIF9lbW9qaVR5cGUoKSB7XG4gICAgaWYgKHRoaXMuX2lzQ3VzdG9tKCkpIHtcbiAgICAgIHJldHVybiAnY3VzdG9tJ1xuICAgIH1cbiAgICBpZiAodGhpcy5faXNOYXRpdmUoKSkge1xuICAgICAgcmV0dXJuICduYXRpdmUnXG4gICAgfVxuICAgIGlmICh0aGlzLl9oYXNFbW9qaSgpKSB7XG4gICAgICByZXR1cm4gJ2ltYWdlJ1xuICAgIH1cbiAgICByZXR1cm4gJ2ZhbGxiYWNrJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYW5pdGl6ZShlbW9qaSkge1xuICB2YXIge1xuICAgICAgbmFtZSxcbiAgICAgIHNob3J0X25hbWVzLFxuICAgICAgc2tpbl90b25lLFxuICAgICAgc2tpbl92YXJpYXRpb25zLFxuICAgICAgZW1vdGljb25zLFxuICAgICAgdW5pZmllZCxcbiAgICAgIGN1c3RvbSxcbiAgICAgIGltYWdlVXJsLFxuICAgIH0gPSBlbW9qaSxcbiAgICBpZCA9IGVtb2ppLmlkIHx8IHNob3J0X25hbWVzWzBdLFxuICAgIGNvbG9ucyA9IGA6JHtpZH06YFxuXG4gIGlmIChjdXN0b20pIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQsXG4gICAgICBuYW1lLFxuICAgICAgY29sb25zLFxuICAgICAgZW1vdGljb25zLFxuICAgICAgY3VzdG9tLFxuICAgICAgaW1hZ2VVcmwsXG4gICAgfVxuICB9XG5cbiAgaWYgKHNraW5fdG9uZSkge1xuICAgIGNvbG9ucyArPSBgOnNraW4tdG9uZS0ke3NraW5fdG9uZX06YFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpZCxcbiAgICBuYW1lLFxuICAgIGNvbG9ucyxcbiAgICBlbW90aWNvbnMsXG4gICAgdW5pZmllZDogdW5pZmllZC50b0xvd2VyQ2FzZSgpLFxuICAgIHNraW46IHNraW5fdG9uZSB8fCAoc2tpbl92YXJpYXRpb25zID8gMSA6IG51bGwpLFxuICAgIG5hdGl2ZTogdW5pZmllZFRvTmF0aXZlKHVuaWZpZWQpLFxuICB9XG59XG4iLCJpbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSdcblxuY29uc3QgREVGQVVMVFMgPSBbXG4gICcrMScsXG4gICdncmlubmluZycsXG4gICdraXNzaW5nX2hlYXJ0JyxcbiAgJ2hlYXJ0X2V5ZXMnLFxuICAnbGF1Z2hpbmcnLFxuICAnc3R1Y2tfb3V0X3Rvbmd1ZV93aW5raW5nX2V5ZScsXG4gICdzd2VhdF9zbWlsZScsXG4gICdqb3knLFxuICAnc2NyZWFtJyxcbiAgJ2Rpc2FwcG9pbnRlZCcsXG4gICd1bmFtdXNlZCcsXG4gICd3ZWFyeScsXG4gICdzb2InLFxuICAnc3VuZ2xhc3NlcycsXG4gICdoZWFydCcsXG4gICdwb29wJyxcbl1cblxubGV0IGZyZXF1ZW50bHksIGluaXRpYWxpemVkXG5sZXQgZGVmYXVsdHMgPSB7fVxuXG5mdW5jdGlvbiBpbml0KCkge1xuICBpbml0aWFsaXplZCA9IHRydWVcbiAgZnJlcXVlbnRseSA9IHN0b3JlLmdldCgnZnJlcXVlbnRseScpXG59XG5cbmZ1bmN0aW9uIGFkZChlbW9qaSkge1xuICBpZiAoIWluaXRpYWxpemVkKSBpbml0KClcbiAgdmFyIHsgaWQgfSA9IGVtb2ppXG5cbiAgZnJlcXVlbnRseSB8fCAoZnJlcXVlbnRseSA9IGRlZmF1bHRzKVxuICBmcmVxdWVudGx5W2lkXSB8fCAoZnJlcXVlbnRseVtpZF0gPSAwKVxuICBmcmVxdWVudGx5W2lkXSArPSAxXG5cbiAgc3RvcmUuc2V0KCdsYXN0JywgaWQpXG4gIHN0b3JlLnNldCgnZnJlcXVlbnRseScsIGZyZXF1ZW50bHkpXG59XG5cbmZ1bmN0aW9uIGdldChtYXhOdW1iZXIpIHtcbiAgaWYgKCFpbml0aWFsaXplZCkgaW5pdCgpXG4gIGlmICghZnJlcXVlbnRseSkge1xuICAgIGRlZmF1bHRzID0ge31cblxuICAgIGNvbnN0IHJlc3VsdCA9IFtdXG5cbiAgICBsZXQgZGVmYXVsdExlbmd0aCA9IE1hdGgubWluKG1heE51bWJlciwgREVGQVVMVFMubGVuZ3RoKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVmYXVsdExlbmd0aDsgaSsrKSB7XG4gICAgICBkZWZhdWx0c1tERUZBVUxUU1tpXV0gPSBkZWZhdWx0TGVuZ3RoIC0gaVxuICAgICAgcmVzdWx0LnB1c2goREVGQVVMVFNbaV0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgY29uc3QgcXVhbnRpdHkgPSBtYXhOdW1iZXJcbiAgY29uc3QgZnJlcXVlbnRseUtleXMgPSBbXVxuXG4gIGZvciAobGV0IGtleSBpbiBmcmVxdWVudGx5KSB7XG4gICAgaWYgKGZyZXF1ZW50bHkuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgZnJlcXVlbnRseUtleXMucHVzaChrZXkpXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc29ydGVkID0gZnJlcXVlbnRseUtleXNcbiAgICAuc29ydCgoYSwgYikgPT4gZnJlcXVlbnRseVthXSAtIGZyZXF1ZW50bHlbYl0pXG4gICAgLnJldmVyc2UoKVxuICBjb25zdCBzbGljZWQgPSBzb3J0ZWQuc2xpY2UoMCwgcXVhbnRpdHkpXG5cbiAgY29uc3QgbGFzdCA9IHN0b3JlLmdldCgnbGFzdCcpXG5cbiAgaWYgKGxhc3QgJiYgc2xpY2VkLmluZGV4T2YobGFzdCkgPT0gLTEpIHtcbiAgICBzbGljZWQucG9wKClcbiAgICBzbGljZWQucHVzaChsYXN0KVxuICB9XG5cbiAgcmV0dXJuIHNsaWNlZFxufVxuXG5leHBvcnQgZGVmYXVsdCB7IGFkZCwgZ2V0IH1cbiIsImltcG9ydCBzdHJpbmdGcm9tQ29kZVBvaW50IGZyb20gJy4uL3BvbHlmaWxscy9zdHJpbmdGcm9tQ29kZVBvaW50J1xuXG5mdW5jdGlvbiB1bmlmaWVkVG9OYXRpdmUodW5pZmllZCkge1xuICB2YXIgdW5pY29kZXMgPSB1bmlmaWVkLnNwbGl0KCctJyksXG4gICAgY29kZVBvaW50cyA9IHVuaWNvZGVzLm1hcCgodSkgPT4gYDB4JHt1fWApXG5cbiAgcmV0dXJuIHN0cmluZ0Zyb21Db2RlUG9pbnQuYXBwbHkobnVsbCwgY29kZVBvaW50cylcbn1cblxuZnVuY3Rpb24gdW5pcShhcnIpIHtcbiAgcmV0dXJuIGFyci5yZWR1Y2UoKGFjYywgaXRlbSkgPT4ge1xuICAgIGlmIChhY2MuaW5kZXhPZihpdGVtKSA9PT0gLTEpIHtcbiAgICAgIGFjYy5wdXNoKGl0ZW0pXG4gICAgfVxuICAgIHJldHVybiBhY2NcbiAgfSwgW10pXG59XG5cbmZ1bmN0aW9uIGludGVyc2VjdChhLCBiKSB7XG4gIGNvbnN0IHVuaXFBID0gdW5pcShhKVxuICBjb25zdCB1bmlxQiA9IHVuaXEoYilcblxuICByZXR1cm4gdW5pcUEuZmlsdGVyKChpdGVtKSA9PiB1bmlxQi5pbmRleE9mKGl0ZW0pID49IDApXG59XG5cbmZ1bmN0aW9uIGRlZXBNZXJnZShhLCBiKSB7XG4gIHZhciBvID0ge31cblxuICBmb3IgKGxldCBrZXkgaW4gYSkge1xuICAgIGxldCBvcmlnaW5hbFZhbHVlID0gYVtrZXldLFxuICAgICAgdmFsdWUgPSBvcmlnaW5hbFZhbHVlXG5cbiAgICBpZiAoYi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICB2YWx1ZSA9IGJba2V5XVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICB2YWx1ZSA9IGRlZXBNZXJnZShvcmlnaW5hbFZhbHVlLCB2YWx1ZSlcbiAgICB9XG5cbiAgICBvW2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgcmV0dXJuIG9cbn1cblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3NvbmljZG9lL21lYXN1cmUtc2Nyb2xsYmFyXG5mdW5jdGlvbiBtZWFzdXJlU2Nyb2xsYmFyKCkge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09ICd1bmRlZmluZWQnKSByZXR1cm4gMFxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gIGRpdi5zdHlsZS53aWR0aCA9ICcxMDBweCdcbiAgZGl2LnN0eWxlLmhlaWdodCA9ICcxMDBweCdcbiAgZGl2LnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCdcbiAgZGl2LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuICBkaXYuc3R5bGUudG9wID0gJy05OTk5cHgnXG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpXG4gIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gZGl2Lm9mZnNldFdpZHRoIC0gZGl2LmNsaWVudFdpZHRoXG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZGl2KVxuXG4gIHJldHVybiBzY3JvbGxiYXJXaWR0aFxufVxuXG5leHBvcnQgeyB1bmlxLCBpbnRlcnNlY3QsIGRlZXBNZXJnZSwgdW5pZmllZFRvTmF0aXZlLCBtZWFzdXJlU2Nyb2xsYmFyIH1cbiIsImNvbnN0IEVtb2ppUHJvcHMgPSB7XG4gIG5hdGl2ZToge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gIH0sXG4gIHRvb2x0aXA6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICB9LFxuICBmYWxsYmFjazoge1xuICAgIHR5cGU6IEZ1bmN0aW9uLFxuICB9LFxuICBza2luOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDEsXG4gIH0sXG4gIHNldDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnYXBwbGUnLFxuICB9LFxuICBlbW9qaToge1xuICAgIHR5cGU6IFtTdHJpbmcsIE9iamVjdF0sXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH0sXG4gIHNpemU6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogbnVsbCxcbiAgfSxcbn1cblxuY29uc3QgUGlja2VyUHJvcHMgPSB7XG4gIHBlckxpbmU6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogOSxcbiAgfSxcbiAgbWF4U2VhcmNoUmVzdWx0czoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiA3NSxcbiAgfSxcbiAgZW1vamlTaXplOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDI0LFxuICB9LFxuICB0aXRsZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnRW1vamkgTWFydOKEoicsXG4gIH0sXG4gIGVtb2ppOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICdkZXBhcnRtZW50X3N0b3JlJyxcbiAgfSxcbiAgY29sb3I6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJyNhZTY1YzUnLFxuICB9LFxuICBzZXQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJ2FwcGxlJyxcbiAgfSxcbiAgc2tpbjoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiBudWxsLFxuICB9LFxuICBkZWZhdWx0U2tpbjoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAxLFxuICB9LFxuICBuYXRpdmU6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICB9LFxuICBlbW9qaVRvb2x0aXA6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICB9LFxuICBhdXRvRm9jdXM6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICB9LFxuICBpMThuOiB7XG4gICAgdHlwZTogT2JqZWN0LFxuICAgIGRlZmF1bHQoKSB7XG4gICAgICByZXR1cm4ge31cbiAgICB9LFxuICB9LFxuICBzaG93UHJldmlldzoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogdHJ1ZSxcbiAgfSxcbiAgc2hvd1NlYXJjaDoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogdHJ1ZSxcbiAgfSxcbiAgc2hvd0NhdGVnb3JpZXM6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IHRydWUsXG4gIH0sXG4gIHNob3dTa2luVG9uZXM6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IHRydWUsXG4gIH0sXG4gIGluZmluaXRlU2Nyb2xsOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiB0cnVlLFxuICB9LFxuICBwaWNrZXJTdHlsZXM6IHtcbiAgICB0eXBlOiBPYmplY3QsXG4gICAgZGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH0sXG4gIH0sXG59XG5cbmV4cG9ydCB7IEVtb2ppUHJvcHMsIFBpY2tlclByb3BzIH1cbiIsInZhciBOQU1FU1BBQ0UgPSAnZW1vamktbWFydCdcblxuY29uc3QgX0pTT04gPSBKU09OXG5cbnZhciBpc0xvY2FsU3RvcmFnZVN1cHBvcnRlZCA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdsb2NhbFN0b3JhZ2UnIGluIHdpbmRvd1xuXG5sZXQgZ2V0dGVyXG5sZXQgc2V0dGVyXG5cbmZ1bmN0aW9uIHNldEhhbmRsZXJzKGhhbmRsZXJzKSB7XG4gIGhhbmRsZXJzIHx8IChoYW5kbGVycyA9IHt9KVxuXG4gIGdldHRlciA9IGhhbmRsZXJzLmdldHRlclxuICBzZXR0ZXIgPSBoYW5kbGVycy5zZXR0ZXJcbn1cblxuZnVuY3Rpb24gc2V0TmFtZXNwYWNlKG5hbWVzcGFjZSkge1xuICBOQU1FU1BBQ0UgPSBuYW1lc3BhY2Vcbn1cblxuZnVuY3Rpb24gdXBkYXRlKHN0YXRlKSB7XG4gIGZvciAobGV0IGtleSBpbiBzdGF0ZSkge1xuICAgIGxldCB2YWx1ZSA9IHN0YXRlW2tleV1cbiAgICBzZXQoa2V5LCB2YWx1ZSlcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuICBpZiAoc2V0dGVyKSB7XG4gICAgc2V0dGVyKGtleSwgdmFsdWUpXG4gIH0gZWxzZSB7XG4gICAgaWYgKCFpc0xvY2FsU3RvcmFnZVN1cHBvcnRlZCkgcmV0dXJuXG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2VbYCR7TkFNRVNQQUNFfS4ke2tleX1gXSA9IF9KU09OLnN0cmluZ2lmeSh2YWx1ZSlcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldChrZXkpIHtcbiAgaWYgKGdldHRlcikge1xuICAgIHJldHVybiBnZXR0ZXIoa2V5KVxuICB9IGVsc2Uge1xuICAgIGlmICghaXNMb2NhbFN0b3JhZ2VTdXBwb3J0ZWQpIHJldHVyblxuICAgIHRyeSB7XG4gICAgICB2YXIgdmFsdWUgPSB3aW5kb3cubG9jYWxTdG9yYWdlW2Ake05BTUVTUEFDRX0uJHtrZXl9YF1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHZhbHVlKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7IHVwZGF0ZSwgc2V0LCBnZXQsIHNldE5hbWVzcGFjZSwgc2V0SGFuZGxlcnMgfVxuIiwiLy8gaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbi8vIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcblxuLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsIGJ5IEVyaWsgTcO2bGxlci4gZml4ZXMgZnJvbSBQYXVsIElyaXNoIGFuZCBUaW5vIFppamRlbFxuXG4vLyBNSVQgbGljZW5zZVxuXG52YXIgaXNXaW5kb3dBdmFpbGFibGUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuXG5pc1dpbmRvd0F2YWlsYWJsZSAmJlxuICAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxhc3RUaW1lID0gMFxuICAgIHZhciB2ZW5kb3JzID0gWydtcycsICdtb3onLCAnd2Via2l0JywgJ28nXVxuXG4gICAgZm9yICh2YXIgeCA9IDA7IHggPCB2ZW5kb3JzLmxlbmd0aCAmJiAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTsgKyt4KSB7XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID1cbiAgICAgICAgd2luZG93W3ZlbmRvcnNbeF0gKyAnUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ11cbiAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9XG4gICAgICAgIHdpbmRvd1t2ZW5kb3JzW3hdICsgJ0NhbmNlbEFuaW1hdGlvbkZyYW1lJ10gfHxcbiAgICAgICAgd2luZG93W3ZlbmRvcnNbeF0gKyAnQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ11cbiAgICB9XG5cbiAgICBpZiAoIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oY2FsbGJhY2ssIGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICAgICAgdmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSlcbiAgICAgICAgdmFyIGlkID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY2FsbGJhY2soY3VyclRpbWUgKyB0aW1lVG9DYWxsKVxuICAgICAgICB9LCB0aW1lVG9DYWxsKVxuXG4gICAgICAgIGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsXG4gICAgICAgIHJldHVybiBpZFxuICAgICAgfVxuXG4gICAgaWYgKCF3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUpXG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihpZCkge1xuICAgICAgICBjbGVhclRpbWVvdXQoaWQpXG4gICAgICB9XG4gIH0pKClcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi52dWUtcmVjeWNsZS1zY3JvbGxlcntwb3NpdGlvbjpyZWxhdGl2ZX0udnVlLXJlY3ljbGUtc2Nyb2xsZXIuZGlyZWN0aW9uLXZlcnRpY2FsOm5vdCgucGFnZS1tb2RlKXtvdmVyZmxvdy15OmF1dG99LnZ1ZS1yZWN5Y2xlLXNjcm9sbGVyLmRpcmVjdGlvbi1ob3Jpem9udGFsOm5vdCgucGFnZS1tb2RlKXtvdmVyZmxvdy14OmF1dG99LnZ1ZS1yZWN5Y2xlLXNjcm9sbGVyLmRpcmVjdGlvbi1ob3Jpem9udGFse2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4fS52dWUtcmVjeWNsZS1zY3JvbGxlcl9fc2xvdHstbXMtZmxleDphdXRvIDAgMHB4O2ZsZXg6YXV0byAwIDB9LnZ1ZS1yZWN5Y2xlLXNjcm9sbGVyX19pdGVtLXdyYXBwZXJ7LW1zLWZsZXg6MTtmbGV4OjE7Ym94LXNpemluZzpib3JkZXItYm94O292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpyZWxhdGl2ZX0udnVlLXJlY3ljbGUtc2Nyb2xsZXIucmVhZHkgLnZ1ZS1yZWN5Y2xlLXNjcm9sbGVyX19pdGVtLXZpZXd7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpbGwtY2hhbmdlOnRyYW5zZm9ybX0udnVlLXJlY3ljbGUtc2Nyb2xsZXIuZGlyZWN0aW9uLXZlcnRpY2FsIC52dWUtcmVjeWNsZS1zY3JvbGxlcl9faXRlbS13cmFwcGVye3dpZHRoOjEwMCV9LnZ1ZS1yZWN5Y2xlLXNjcm9sbGVyLmRpcmVjdGlvbi1ob3Jpem9udGFsIC52dWUtcmVjeWNsZS1zY3JvbGxlcl9faXRlbS13cmFwcGVye2hlaWdodDoxMDAlfS52dWUtcmVjeWNsZS1zY3JvbGxlci5yZWFkeS5kaXJlY3Rpb24tdmVydGljYWwgLnZ1ZS1yZWN5Y2xlLXNjcm9sbGVyX19pdGVtLXZpZXd7d2lkdGg6MTAwJX0udnVlLXJlY3ljbGUtc2Nyb2xsZXIucmVhZHkuZGlyZWN0aW9uLWhvcml6b250YWwgLnZ1ZS1yZWN5Y2xlLXNjcm9sbGVyX19pdGVtLXZpZXd7aGVpZ2h0OjEwMCV9LnZ1ZTMtcmVzaXplLW9ic2VydmVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDt6LWluZGV4Oi0xO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Ym9yZGVyOm5vbmU7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtwb2ludGVyLWV2ZW50czpub25lO2Rpc3BsYXk6YmxvY2s7b3ZlcmZsb3c6aGlkZGVuO29wYWNpdHk6MH0udnVlMy1yZXNpemUtb2JzZXJ2ZXIgb2JqZWN0e2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7b3ZlcmZsb3c6aGlkZGVuO3BvaW50ZXItZXZlbnRzOm5vbmU7ei1pbmRleDotMX1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvdnVlMy12aXJ0dWFsLXNjcm9sbGVyL2Rpc3QvdnVlMy12aXJ0dWFsLXNjcm9sbGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxzQkFBc0IsaUJBQWlCLENBQUMseURBQXlELGVBQWUsQ0FBQywyREFBMkQsZUFBZSxDQUFDLDJDQUEyQyxtQkFBVyxDQUFYLFlBQVksQ0FBQyw0QkFBNEIsbUJBQVksQ0FBWixhQUFhLENBQUMsb0NBQW9DLFVBQU0sQ0FBTixNQUFNLENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLDZEQUE2RCxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLDZFQUE2RSxVQUFVLENBQUMsK0VBQStFLFdBQVcsQ0FBQyxnRkFBZ0YsVUFBVSxDQUFDLGtGQUFrRixXQUFXLENBQUMsc0JBQXNCLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLDRCQUE0QixDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLDZCQUE2QixhQUFhLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi52dWUtcmVjeWNsZS1zY3JvbGxlcntwb3NpdGlvbjpyZWxhdGl2ZX0udnVlLXJlY3ljbGUtc2Nyb2xsZXIuZGlyZWN0aW9uLXZlcnRpY2FsOm5vdCgucGFnZS1tb2RlKXtvdmVyZmxvdy15OmF1dG99LnZ1ZS1yZWN5Y2xlLXNjcm9sbGVyLmRpcmVjdGlvbi1ob3Jpem9udGFsOm5vdCgucGFnZS1tb2RlKXtvdmVyZmxvdy14OmF1dG99LnZ1ZS1yZWN5Y2xlLXNjcm9sbGVyLmRpcmVjdGlvbi1ob3Jpem9udGFse2Rpc3BsYXk6ZmxleH0udnVlLXJlY3ljbGUtc2Nyb2xsZXJfX3Nsb3R7ZmxleDphdXRvIDAgMH0udnVlLXJlY3ljbGUtc2Nyb2xsZXJfX2l0ZW0td3JhcHBlcntmbGV4OjE7Ym94LXNpemluZzpib3JkZXItYm94O292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpyZWxhdGl2ZX0udnVlLXJlY3ljbGUtc2Nyb2xsZXIucmVhZHkgLnZ1ZS1yZWN5Y2xlLXNjcm9sbGVyX19pdGVtLXZpZXd7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpbGwtY2hhbmdlOnRyYW5zZm9ybX0udnVlLXJlY3ljbGUtc2Nyb2xsZXIuZGlyZWN0aW9uLXZlcnRpY2FsIC52dWUtcmVjeWNsZS1zY3JvbGxlcl9faXRlbS13cmFwcGVye3dpZHRoOjEwMCV9LnZ1ZS1yZWN5Y2xlLXNjcm9sbGVyLmRpcmVjdGlvbi1ob3Jpem9udGFsIC52dWUtcmVjeWNsZS1zY3JvbGxlcl9faXRlbS13cmFwcGVye2hlaWdodDoxMDAlfS52dWUtcmVjeWNsZS1zY3JvbGxlci5yZWFkeS5kaXJlY3Rpb24tdmVydGljYWwgLnZ1ZS1yZWN5Y2xlLXNjcm9sbGVyX19pdGVtLXZpZXd7d2lkdGg6MTAwJX0udnVlLXJlY3ljbGUtc2Nyb2xsZXIucmVhZHkuZGlyZWN0aW9uLWhvcml6b250YWwgLnZ1ZS1yZWN5Y2xlLXNjcm9sbGVyX19pdGVtLXZpZXd7aGVpZ2h0OjEwMCV9LnZ1ZTMtcmVzaXplLW9ic2VydmVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDt6LWluZGV4Oi0xO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Ym9yZGVyOm5vbmU7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtwb2ludGVyLWV2ZW50czpub25lO2Rpc3BsYXk6YmxvY2s7b3ZlcmZsb3c6aGlkZGVuO29wYWNpdHk6MH0udnVlMy1yZXNpemUtb2JzZXJ2ZXIgb2JqZWN0e2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7b3ZlcmZsb3c6aGlkZGVuO3BvaW50ZXItZXZlbnRzOm5vbmU7ei1pbmRleDotMX1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59OyIsIihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoW10sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfSBlbHNlIHtcbiAgICByb290LlNjcm9sbHBhcmVudCA9IGZhY3RvcnkoKTtcbiAgfVxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XG4gIHZhciByZWdleCA9IC8oYXV0b3xzY3JvbGwpLztcblxuICB2YXIgcGFyZW50cyA9IGZ1bmN0aW9uIChub2RlLCBwcykge1xuICAgIGlmIChub2RlLnBhcmVudE5vZGUgPT09IG51bGwpIHsgcmV0dXJuIHBzOyB9XG5cbiAgICByZXR1cm4gcGFyZW50cyhub2RlLnBhcmVudE5vZGUsIHBzLmNvbmNhdChbbm9kZV0pKTtcbiAgfTtcblxuICB2YXIgc3R5bGUgPSBmdW5jdGlvbiAobm9kZSwgcHJvcCkge1xuICAgIHJldHVybiBnZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpLmdldFByb3BlcnR5VmFsdWUocHJvcCk7XG4gIH07XG5cbiAgdmFyIG92ZXJmbG93ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICByZXR1cm4gc3R5bGUobm9kZSwgXCJvdmVyZmxvd1wiKSArIHN0eWxlKG5vZGUsIFwib3ZlcmZsb3cteVwiKSArIHN0eWxlKG5vZGUsIFwib3ZlcmZsb3cteFwiKTtcbiAgfTtcblxuICB2YXIgc2Nyb2xsID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgIHJldHVybiByZWdleC50ZXN0KG92ZXJmbG93KG5vZGUpKTtcbiAgfTtcblxuICB2YXIgc2Nyb2xsUGFyZW50ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cblxuICAgIHZhciBwcyA9IHBhcmVudHMobm9kZS5wYXJlbnROb2RlLCBbXSk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoc2Nyb2xsKHBzW2ldKSkge1xuICAgICAgICByZXR1cm4gcHNbaV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9O1xuXG4gIHJldHVybiBzY3JvbGxQYXJlbnQ7XG59KSk7XG4iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9FbW9qaS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTM0YWQ5NDZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9FbW9qaS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vRW1vamkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbnNjcmlwdC5yZW5kZXIgPSByZW5kZXJcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHNjcmlwdC5fX2htcklkID0gXCI1MzRhZDk0NlwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzUzNGFkOTQ2Jywgc2NyaXB0KSkge1xuICAgIGFwaS5yZWxvYWQoJzUzNGFkOTQ2Jywgc2NyaXB0KVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRW1vamkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUzNGFkOTQ2XCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzUzNGFkOTQ2JywgcmVuZGVyKVxuICB9KVxuXG59XG5cbnNjcmlwdC5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL0Vtb2ppLnZ1ZVwiXG5cbmV4cG9ydCBkZWZhdWx0IHNjcmlwdCIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL1BpY2tlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDE2ZTkwODRcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9QaWNrZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1BpY2tlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuc2NyaXB0LnJlbmRlciA9IHJlbmRlclxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgc2NyaXB0Ll9faG1ySWQgPSBcImQxNmU5MDg0XCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnZDE2ZTkwODQnLCBzY3JpcHQpKSB7XG4gICAgYXBpLnJlbG9hZCgnZDE2ZTkwODQnLCBzY3JpcHQpXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9QaWNrZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQxNmU5MDg0XCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJ2QxNmU5MDg0JywgcmVuZGVyKVxuICB9KVxuXG59XG5cbnNjcmlwdC5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL1BpY2tlci52dWVcIlxuXG5leHBvcnQgZGVmYXVsdCBzY3JpcHQiLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9TdGF0aWNQaWNrZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiMTZjMjY4XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU3RhdGljUGlja2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9TdGF0aWNQaWNrZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbnNjcmlwdC5yZW5kZXIgPSByZW5kZXJcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHNjcmlwdC5fX2htcklkID0gXCIyYjE2YzI2OFwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzJiMTZjMjY4Jywgc2NyaXB0KSkge1xuICAgIGFwaS5yZWxvYWQoJzJiMTZjMjY4Jywgc2NyaXB0KVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU3RhdGljUGlja2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYjE2YzI2OFwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCcyYjE2YzI2OCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5zY3JpcHQuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9TdGF0aWNQaWNrZXIudnVlXCJcblxuZXhwb3J0IGRlZmF1bHQgc2NyaXB0IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vYW5jaG9ycy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTExODgxMDRcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9hbmNob3JzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9hbmNob3JzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5zY3JpcHQucmVuZGVyID0gcmVuZGVyXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBzY3JpcHQuX19obXJJZCA9IFwiNTExODgxMDRcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc1MTE4ODEwNCcsIHNjcmlwdCkpIHtcbiAgICBhcGkucmVsb2FkKCc1MTE4ODEwNCcsIHNjcmlwdClcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxMTg4MTA0XCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzUxMTg4MTA0JywgcmVuZGVyKVxuICB9KVxuXG59XG5cbnNjcmlwdC5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL2FuY2hvcnMudnVlXCJcblxuZXhwb3J0IGRlZmF1bHQgc2NyaXB0IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM3NmNkYTBlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5zY3JpcHQucmVuZGVyID0gcmVuZGVyXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBzY3JpcHQuX19obXJJZCA9IFwiMzc2Y2RhMGVcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCczNzZjZGEwZScsIHNjcmlwdCkpIHtcbiAgICBhcGkucmVsb2FkKCczNzZjZGEwZScsIHNjcmlwdClcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNzZjZGEwZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCczNzZjZGEwZScsIHJlbmRlcilcbiAgfSlcblxufVxuXG5zY3JpcHQuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9jYXRlZ29yeS52dWVcIlxuXG5leHBvcnQgZGVmYXVsdCBzY3JpcHQiLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9wcmV2aWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNTA1NmMzMFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbnNjcmlwdC5yZW5kZXIgPSByZW5kZXJcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHNjcmlwdC5fX2htcklkID0gXCIzNTA1NmMzMFwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzM1MDU2YzMwJywgc2NyaXB0KSkge1xuICAgIGFwaS5yZWxvYWQoJzM1MDU2YzMwJywgc2NyaXB0KVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcHJldmlldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzUwNTZjMzBcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignMzUwNTZjMzAnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuc2NyaXB0Ll9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvcHJldmlldy52dWVcIlxuXG5leHBvcnQgZGVmYXVsdCBzY3JpcHQiLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRhZDQxYmI4XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc2VhcmNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbnNjcmlwdC5yZW5kZXIgPSByZW5kZXJcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHNjcmlwdC5fX2htcklkID0gXCI0YWQ0MWJiOFwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzRhZDQxYmI4Jywgc2NyaXB0KSkge1xuICAgIGFwaS5yZWxvYWQoJzRhZDQxYmI4Jywgc2NyaXB0KVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vc2VhcmNoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YWQ0MWJiOFwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc0YWQ0MWJiOCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5zY3JpcHQuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9zZWFyY2gudnVlXCJcblxuZXhwb3J0IGRlZmF1bHQgc2NyaXB0IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vc2tpbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFjNjE0ODk0XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc2tpbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL3NraW5zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5zY3JpcHQucmVuZGVyID0gcmVuZGVyXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBzY3JpcHQuX19obXJJZCA9IFwiMWM2MTQ4OTRcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCcxYzYxNDg5NCcsIHNjcmlwdCkpIHtcbiAgICBhcGkucmVsb2FkKCcxYzYxNDg5NCcsIHNjcmlwdClcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3NraW5zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYzYxNDg5NFwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCcxYzYxNDg5NCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5zY3JpcHQuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9za2lucy52dWVcIlxuXG5leHBvcnQgZGVmYXVsdCBzY3JpcHQiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2UhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS51c2VbMF0hLi9FbW9qaS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2UhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS51c2VbMF0hLi9FbW9qaS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLnVzZVswXSEuL1BpY2tlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2UhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS51c2VbMF0hLi9QaWNrZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2UhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS51c2VbMF0hLi9TdGF0aWNQaWNrZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbN10udXNlWzBdIS4vU3RhdGljUGlja2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbN10udXNlWzBdIS4vYW5jaG9ycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2UhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS51c2VbMF0hLi9hbmNob3JzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbN10udXNlWzBdIS4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbN10udXNlWzBdIS4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2UhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS51c2VbMF0hLi9wcmV2aWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLnVzZVswXSEuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2UhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS51c2VbMF0hLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbN10udXNlWzBdIS4vc2VhcmNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbN10udXNlWzBdIS4vc2tpbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbN10udXNlWzBdIS4vc2tpbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Z1ZTMtdmlydHVhbC1zY3JvbGxlci5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI0MjdhNzRhY1wiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Z1ZTMtdmlydHVhbC1zY3JvbGxlci5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Z1ZTMtdmlydHVhbC1zY3JvbGxlci5jc3NcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiAgTW9kaWZpZWQgYnkgRXZhbiBZb3UgQHl5eDk5MDgwM1xuKi9cblxuaW1wb3J0IGxpc3RUb1N0eWxlcyBmcm9tICcuL2xpc3RUb1N0eWxlcydcblxudmFyIGhhc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuXG5pZiAodHlwZW9mIERFQlVHICE9PSAndW5kZWZpbmVkJyAmJiBERUJVRykge1xuICBpZiAoIWhhc0RvY3VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2dWUtc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQuICcgK1xuICAgIFwiVXNlIHsgdGFyZ2V0OiAnbm9kZScgfSBpbiB5b3VyIFdlYnBhY2sgY29uZmlnIHRvIGluZGljYXRlIGEgc2VydmVyLXJlbmRlcmluZyBlbnZpcm9ubWVudC5cIlxuICApIH1cbn1cblxuLypcbnR5cGUgU3R5bGVPYmplY3QgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHBhcnRzOiBBcnJheTxTdHlsZU9iamVjdFBhcnQ+XG59XG5cbnR5cGUgU3R5bGVPYmplY3RQYXJ0ID0ge1xuICBjc3M6IHN0cmluZztcbiAgbWVkaWE6IHN0cmluZztcbiAgc291cmNlTWFwOiA/c3RyaW5nXG59XG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7LypcbiAgW2lkOiBudW1iZXJdOiB7XG4gICAgaWQ6IG51bWJlcixcbiAgICByZWZzOiBudW1iZXIsXG4gICAgcGFydHM6IEFycmF5PChvYmo/OiBTdHlsZU9iamVjdFBhcnQpID0+IHZvaWQ+XG4gIH1cbiovfVxuXG52YXIgaGVhZCA9IGhhc0RvY3VtZW50ICYmIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0pXG52YXIgc2luZ2xldG9uRWxlbWVudCA9IG51bGxcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMFxudmFyIGlzUHJvZHVjdGlvbiA9IGZhbHNlXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9XG52YXIgb3B0aW9ucyA9IG51bGxcbnZhciBzc3JJZEtleSA9ICdkYXRhLXZ1ZS1zc3ItaWQnXG5cbi8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxudmFyIGlzT2xkSUUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvbXNpZSBbNi05XVxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFN0eWxlc0NsaWVudCAocGFyZW50SWQsIGxpc3QsIF9pc1Byb2R1Y3Rpb24sIF9vcHRpb25zKSB7XG4gIGlzUHJvZHVjdGlvbiA9IF9pc1Byb2R1Y3Rpb25cblxuICBvcHRpb25zID0gX29wdGlvbnMgfHwge31cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBsaXN0KVxuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICAgIGRvbVN0eWxlLnJlZnMtLVxuICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpXG4gICAgfVxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIG5ld0xpc3QpXG4gICAgICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlcyA9IFtdXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV1cbiAgICAgIGlmIChkb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXSgpXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzIC8qIEFycmF5PFN0eWxlT2JqZWN0PiAqLykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrK1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKVxuICAgICAgfVxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBpZiAoZG9tU3R5bGUucGFydHMubGVuZ3RoID4gaXRlbS5wYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMubGVuZ3RoID0gaXRlbS5wYXJ0cy5sZW5ndGhcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW11cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7IGlkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKCkge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICBzdHlsZUVsZW1lbnQudHlwZSA9ICd0ZXh0L2NzcydcbiAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpXG4gIHJldHVybiBzdHlsZUVsZW1lbnRcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgdmFyIHVwZGF0ZSwgcmVtb3ZlXG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZVsnICsgc3NySWRLZXkgKyAnfj1cIicgKyBvYmouaWQgKyAnXCJdJylcblxuICBpZiAoc3R5bGVFbGVtZW50KSB7XG4gICAgaWYgKGlzUHJvZHVjdGlvbikge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYW5kIGluIHByb2R1Y3Rpb24gbW9kZS5cbiAgICAgIC8vIHNpbXBseSBkbyBub3RoaW5nLlxuICAgICAgcmV0dXJuIG5vb3BcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYnV0IGluIGRldiBtb2RlLlxuICAgICAgLy8gZm9yIHNvbWUgcmVhc29uIENocm9tZSBjYW4ndCBoYW5kbGUgc291cmNlIG1hcCBpbiBzZXJ2ZXItcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlIHRhZ3MgLSBzb3VyY2UgbWFwcyBpbiA8c3R5bGU+IG9ubHkgd29ya3MgaWYgdGhlIHN0eWxlIHRhZyBpc1xuICAgICAgLy8gY3JlYXRlZCBhbmQgaW5zZXJ0ZWQgZHluYW1pY2FsbHkuIFNvIHdlIHJlbW92ZSB0aGUgc2VydmVyIHJlbmRlcmVkXG4gICAgICAvLyBzdHlsZXMgYW5kIGluamVjdCBuZXcgb25lcy5cbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICBpZiAoaXNPbGRJRSkge1xuICAgIC8vIHVzZSBzaW5nbGV0b24gbW9kZSBmb3IgSUU5LlxuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrXG4gICAgc3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKVxuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpXG4gIH0gZWxzZSB7XG4gICAgLy8gdXNlIG11bHRpLXN0eWxlLXRhZyBtb2RlIGluIGFsbCBvdGhlciBjYXNlc1xuICAgIHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpXG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudClcbiAgICByZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKG9iailcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuICAgICAgICAgIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG4gICAgICAgICAgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpXG4gICAgfVxuICB9XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXVxuXG4gIHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJylcbiAgfVxufSkoKVxuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzXG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpXG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpXG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlc1xuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlRWxlbWVudCwgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzXG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcFxuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpXG4gIH1cbiAgaWYgKG9wdGlvbnMuc3NySWQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKHNzcklkS2V5LCBvYmouaWQpXG4gIH1cblxuICBpZiAoc291cmNlTWFwKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kZXZ0b29scy9kb2NzL2phdmFzY3JpcHQtZGVidWdnaW5nXG4gICAgLy8gdGhpcyBtYWtlcyBzb3VyY2UgbWFwcyBpbnNpZGUgc3R5bGUgdGFncyB3b3JrIHByb3Blcmx5IGluIENocm9tZVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgc291cmNlTWFwLnNvdXJjZXNbMF0gKyAnICovJ1xuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgJyAqLydcbiAgfVxuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3NcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZClcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpXG4gIH1cbn1cbiIsIi8qKlxuICogVHJhbnNsYXRlcyB0aGUgbGlzdCBmb3JtYXQgcHJvZHVjZWQgYnkgY3NzLWxvYWRlciBpbnRvIHNvbWV0aGluZ1xuICogZWFzaWVyIHRvIG1hbmlwdWxhdGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAocGFyZW50SWQsIGxpc3QpIHtcbiAgdmFyIHN0eWxlcyA9IFtdXG4gIHZhciBuZXdTdHlsZXMgPSB7fVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICB2YXIgaWQgPSBpdGVtWzBdXG4gICAgdmFyIGNzcyA9IGl0ZW1bMV1cbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdXG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM11cbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGlkOiBwYXJlbnRJZCArICc6JyArIGksXG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfVxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHsgaWQ6IGlkLCBwYXJ0czogW3BhcnRdIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3R5bGVzXG59XG4iLCJpbXBvcnQgeyByZWYsIG9uTW91bnRlZCwgb25CZWZvcmVVbm1vdW50LCBvcGVuQmxvY2ssIGNyZWF0ZUJsb2NrIH0gZnJvbSAndnVlJztcblxuZnVuY3Rpb24gZ2V0SW50ZXJuZXRFeHBsb3JlclZlcnNpb24oKSB7XG4gIGNvbnN0IHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIGNvbnN0IG1zaWUgPSB1YS5pbmRleE9mKCdNU0lFICcpO1xuXG4gIGlmIChtc2llID4gMCkge1xuICAgIC8vIElFIDEwIG9yIG9sZGVyID0+IHJldHVybiB2ZXJzaW9uIG51bWJlclxuICAgIHJldHVybiBwYXJzZUludCh1YS5zdWJzdHJpbmcobXNpZSArIDUsIHVhLmluZGV4T2YoJy4nLCBtc2llKSksIDEwKTtcbiAgfVxuXG4gIGNvbnN0IHRyaWRlbnQgPSB1YS5pbmRleE9mKCdUcmlkZW50LycpO1xuXG4gIGlmICh0cmlkZW50ID4gMCkge1xuICAgIC8vIElFIDExID0+IHJldHVybiB2ZXJzaW9uIG51bWJlclxuICAgIGNvbnN0IHJ2ID0gdWEuaW5kZXhPZigncnY6Jyk7XG4gICAgcmV0dXJuIHBhcnNlSW50KHVhLnN1YnN0cmluZyhydiArIDMsIHVhLmluZGV4T2YoJy4nLCBydikpLCAxMCk7XG4gIH1cblxuICBjb25zdCBlZGdlID0gdWEuaW5kZXhPZignRWRnZS8nKTtcblxuICBpZiAoZWRnZSA+IDApIHtcbiAgICAvLyBFZGdlIChJRSAxMispID0+IHJldHVybiB2ZXJzaW9uIG51bWJlclxuICAgIHJldHVybiBwYXJzZUludCh1YS5zdWJzdHJpbmcoZWRnZSArIDUsIHVhLmluZGV4T2YoJy4nLCBlZGdlKSksIDEwKTtcbiAgfSAvLyBvdGhlciBicm93c2VyXG5cblxuICByZXR1cm4gLTE7XG59XG5cbmxldCBpc0lFO1xuXG5mdW5jdGlvbiBpbml0Q29tcGF0KCkge1xuICBpZiAoIWluaXRDb21wYXQuaW5pdCkge1xuICAgIGluaXRDb21wYXQuaW5pdCA9IHRydWU7XG4gICAgaXNJRSA9IGdldEludGVybmV0RXhwbG9yZXJWZXJzaW9uKCkgIT09IC0xO1xuICB9XG59XG5cbnZhciBzY3JpcHQgPSB7XG4gIG5hbWU6ICdSZXNpemVPYnNlcnZlcicsXG4gIHByb3BzOiB7XG4gICAgc2hvd1RyaWdnZXI6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgZW1pdHM6IFsnbm90aWZ5J10sXG5cbiAgc2V0dXAocHJvcHMsIHtcbiAgICBlbWl0XG4gIH0pIHtcbiAgICBsZXQgX3cgPSAwO1xuICAgIGxldCBfaCA9IDA7XG4gICAgY29uc3QgZWxSZWYgPSByZWYobnVsbCk7XG4gICAgbGV0IF9yZXNpemVPYmplY3QgPSBudWxsO1xuXG4gICAgY29uc3QgY29tcGFyZUFuZE5vdGlmeSA9ICgpID0+IHtcbiAgICAgIGlmIChfdyAhPT0gZWxSZWYudmFsdWUub2Zmc2V0V2lkdGggfHwgX2ggIT09IGVsUmVmLnZhbHVlLm9mZnNldEhlaWdodCkge1xuICAgICAgICBfdyA9IGVsUmVmLnZhbHVlLm9mZnNldFdpZHRoO1xuICAgICAgICBfaCA9IGVsUmVmLnZhbHVlLm9mZnNldEhlaWdodDtcbiAgICAgICAgZW1pdCgnbm90aWZ5Jywge1xuICAgICAgICAgIHdpZHRoOiBfdyxcbiAgICAgICAgICBoZWlnaHQ6IF9oXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBhZGRSZXNpemVIYW5kbGVycyA9ICgpID0+IHtcbiAgICAgIF9yZXNpemVPYmplY3QuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNvbXBhcmVBbmROb3RpZnkpO1xuXG4gICAgICBjb21wYXJlQW5kTm90aWZ5KCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbW92ZVJlc2l6ZUhhbmRsZXJzID0gKCkgPT4ge1xuICAgICAgaWYgKF9yZXNpemVPYmplY3QgJiYgX3Jlc2l6ZU9iamVjdC5vbmxvYWQpIHtcbiAgICAgICAgaWYgKCFpc0lFICYmIF9yZXNpemVPYmplY3QuY29udGVudERvY3VtZW50KSB7XG4gICAgICAgICAgX3Jlc2l6ZU9iamVjdC5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXcucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgY29tcGFyZUFuZE5vdGlmeSk7XG4gICAgICAgIH1cblxuICAgICAgICBlbFJlZi52YWx1ZS5yZW1vdmVDaGlsZChfcmVzaXplT2JqZWN0KTtcbiAgICAgICAgX3Jlc2l6ZU9iamVjdC5vbmxvYWQgPSBudWxsO1xuICAgICAgICBfcmVzaXplT2JqZWN0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgb25Nb3VudGVkKCgpID0+IHtcbiAgICAgIGluaXRDb21wYXQoKTtcbiAgICAgIF93ID0gZWxSZWYudmFsdWUub2Zmc2V0V2lkdGg7XG4gICAgICBfaCA9IGVsUmVmLnZhbHVlLm9mZnNldEhlaWdodDtcbiAgICAgIGNvbnN0IG9iamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29iamVjdCcpO1xuICAgICAgX3Jlc2l6ZU9iamVjdCA9IG9iamVjdDtcbiAgICAgIG9iamVjdC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgIG9iamVjdC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICBvYmplY3Qub25sb2FkID0gYWRkUmVzaXplSGFuZGxlcnM7XG4gICAgICBvYmplY3QudHlwZSA9ICd0ZXh0L2h0bWwnO1xuXG4gICAgICBpZiAoaXNJRSkge1xuICAgICAgICBlbFJlZi52YWx1ZS5hcHBlbmRDaGlsZChvYmplY3QpO1xuICAgICAgfVxuXG4gICAgICBvYmplY3QuZGF0YSA9ICdhYm91dDpibGFuayc7XG5cbiAgICAgIGlmICghaXNJRSkge1xuICAgICAgICBlbFJlZi52YWx1ZS5hcHBlbmRDaGlsZChvYmplY3QpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuc2hvd1RyaWdnZXIpIHtcbiAgICAgICAgY29tcGFyZUFuZE5vdGlmeSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgICByZW1vdmVSZXNpemVIYW5kbGVycygpO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBlbFJlZlxuICAgIH07XG4gIH1cblxufTtcblxuY29uc3QgX2hvaXN0ZWRfMSA9IHtcbiAgcmVmOiBcImVsUmVmXCIsXG4gIGNsYXNzOiBcInZ1ZTMtcmVzaXplLW9ic2VydmVyXCIsXG4gIHRhYmluZGV4OiBcIi0xXCJcbn07XG5mdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiBvcGVuQmxvY2soKSwgY3JlYXRlQmxvY2soXCJkaXZcIiwgX2hvaXN0ZWRfMSwgbnVsbCwgNTEyXG4gIC8qIE5FRURfUEFUQ0ggKi9cbiAgKTtcbn1cblxuc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtcbnNjcmlwdC5fX2ZpbGUgPSBcInNyYy9wYWNrYWdlL1Jlc2l6ZU9ic2VydmVyL1Jlc2l6ZU9ic2VydmVyLnZ1ZVwiO1xuXG5zY3JpcHQuaW5zdGFsbCA9IGZ1bmN0aW9uIChhcHApIHtcbiAgYXBwLmNvbXBvbmVudChzY3JpcHQubmFtZSwgc2NyaXB0KTtcbn07XG5cbnZhciB2ZXJzaW9uID0gXCIwLjIuMFwiO1xuXG5jb25zdCBpbnN0YWxsID0gYXBwID0+IHtcbiAgYXBwLnVzZShzY3JpcHQpO1xufTsgLy8gUGx1Z2luXG5cblxuY29uc3QgVnVlM1Jlc2l6ZSA9IHtcbiAgdmVyc2lvbixcbiAgaW5zdGFsbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVnVlM1Jlc2l6ZTtcbmV4cG9ydCB7IHNjcmlwdCBhcyBSZXNpemVPYnNlcnZlciwgaW5zdGFsbCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dnVlMy1yZXNpemUuZXNtLmpzLm1hcFxuIiwiaW1wb3J0IHsgUmVzaXplT2JzZXJ2ZXIgYXMgUmVzaXplT2JzZXJ2ZXIkMSB9IGZyb20gJ3Z1ZTMtcmVzaXplJztcbmltcG9ydCBTY3JvbGxQYXJlbnQgZnJvbSAnc2Nyb2xscGFyZW50JztcbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVzb2x2ZUNvbXBvbmVudCwgcmVzb2x2ZURpcmVjdGl2ZSwgd2l0aERpcmVjdGl2ZXMsIG9wZW5CbG9jaywgY3JlYXRlQmxvY2ssIHJlbmRlclNsb3QsIGNyZWF0ZUNvbW1lbnRWTm9kZSwgY3JlYXRlVk5vZGUsIEZyYWdtZW50LCByZW5kZXJMaXN0LCBtZXJnZVByb3BzLCB0b0hhbmRsZXJzLCB3aXRoQ3R4LCBuZXh0VGljayB9IGZyb20gJ3Z1ZSc7XG5cbnZhciBjb25maWcgPSB7XG4gIGl0ZW1zTGltaXQ6IDEwMDBcbn07XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgfSk7XG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG5cbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG4pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICByZXR1cm4gYXJyMjtcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIobykge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCBvW1N5bWJvbC5pdGVyYXRvcl0gPT0gbnVsbCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChvID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSkge1xuICAgICAgdmFyIGkgPSAwO1xuXG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzOiBGLFxuICAgICAgICBuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7XG4gICAgICAgICAgICBkb25lOiB0cnVlXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZTogb1tpKytdXG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9LFxuICAgICAgICBmOiBGXG4gICAgICB9O1xuICAgIH1cblxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbiAgfVxuXG4gIHZhciBpdCxcbiAgICAgIG5vcm1hbENvbXBsZXRpb24gPSB0cnVlLFxuICAgICAgZGlkRXJyID0gZmFsc2UsXG4gICAgICBlcnI7XG4gIHJldHVybiB7XG4gICAgczogZnVuY3Rpb24gKCkge1xuICAgICAgaXQgPSBvW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgICB9LFxuICAgIG46IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzdGVwID0gaXQubmV4dCgpO1xuICAgICAgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTtcbiAgICAgIHJldHVybiBzdGVwO1xuICAgIH0sXG4gICAgZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGRpZEVyciA9IHRydWU7XG4gICAgICBlcnIgPSBlO1xuICAgIH0sXG4gICAgZjogZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0LnJldHVybiAhPSBudWxsKSBpdC5yZXR1cm4oKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChkaWRFcnIpIHRocm93IGVycjtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIF90eXBlb2YkMShvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKFN5bWJvbC5pdGVyYXRvcikgPT09IFwic3ltYm9sXCIpIHtcbiAgICBfdHlwZW9mJDEgPSBmdW5jdGlvbiBfdHlwZW9mJDEob2JqKSB7XG4gICAgICByZXR1cm4gX3R5cGVvZihvYmopO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgX3R5cGVvZiQxID0gZnVuY3Rpb24gX3R5cGVvZiQxKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IF90eXBlb2Yob2JqKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2YkMShvYmopO1xufVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjI7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVyKSA9PT0gXCJbb2JqZWN0IEFyZ3VtZW50c11cIikgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzT3B0aW9ucyh2YWx1ZSkge1xuICB2YXIgb3B0aW9ucztcblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gU2ltcGxlIG9wdGlvbnMgKGNhbGxiYWNrLW9ubHkpXG4gICAgb3B0aW9ucyA9IHtcbiAgICAgIGNhbGxiYWNrOiB2YWx1ZVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgLy8gT3B0aW9ucyBvYmplY3RcbiAgICBvcHRpb25zID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb3B0aW9ucztcbn1cblxuZnVuY3Rpb24gdGhyb3R0bGUoY2FsbGJhY2ssIGRlbGF5KSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgdmFyIHRpbWVvdXQ7XG4gIHZhciBsYXN0U3RhdGU7XG4gIHZhciBjdXJyZW50QXJncztcblxuICB2YXIgdGhyb3R0bGVkID0gZnVuY3Rpb24gdGhyb3R0bGVkKHN0YXRlKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgY3VycmVudEFyZ3MgPSBhcmdzO1xuICAgIGlmICh0aW1lb3V0ICYmIHN0YXRlID09PSBsYXN0U3RhdGUpIHJldHVybjtcbiAgICB2YXIgbGVhZGluZyA9IG9wdGlvbnMubGVhZGluZztcblxuICAgIGlmICh0eXBlb2YgbGVhZGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbGVhZGluZyA9IGxlYWRpbmcoc3RhdGUsIGxhc3RTdGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKCghdGltZW91dCB8fCBzdGF0ZSAhPT0gbGFzdFN0YXRlKSAmJiBsZWFkaW5nKSB7XG4gICAgICBjYWxsYmFjay5hcHBseSh2b2lkIDAsIFtzdGF0ZV0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShjdXJyZW50QXJncykpKTtcbiAgICB9XG5cbiAgICBsYXN0U3RhdGUgPSBzdGF0ZTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2FsbGJhY2suYXBwbHkodm9pZCAwLCBbc3RhdGVdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoY3VycmVudEFyZ3MpKSk7XG4gICAgICB0aW1lb3V0ID0gMDtcbiAgICB9LCBkZWxheSk7XG4gIH07XG5cbiAgdGhyb3R0bGVkLl9jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIHRocm90dGxlZDtcbn1cblxuZnVuY3Rpb24gZGVlcEVxdWFsKHZhbDEsIHZhbDIpIHtcbiAgaWYgKHZhbDEgPT09IHZhbDIpIHJldHVybiB0cnVlO1xuXG4gIGlmIChfdHlwZW9mJDEodmFsMSkgPT09ICdvYmplY3QnKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgZm9yICh2YXIga2V5IGluIHZhbDEpIHtcbiAgICAgIGlmICghZGVlcEVxdWFsKHZhbDFba2V5XSwgdmFsMltrZXldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbnZhciBWaXNpYmlsaXR5U3RhdGUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBWaXNpYmlsaXR5U3RhdGUoZWwsIG9wdGlvbnMsIHZub2RlKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFZpc2liaWxpdHlTdGF0ZSk7XG5cbiAgICB0aGlzLmVsID0gZWw7XG4gICAgdGhpcy5vYnNlcnZlciA9IG51bGw7XG4gICAgdGhpcy5mcm96ZW4gPSBmYWxzZTtcbiAgICB0aGlzLmNyZWF0ZU9ic2VydmVyKG9wdGlvbnMsIHZub2RlKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhWaXNpYmlsaXR5U3RhdGUsIFt7XG4gICAga2V5OiBcImNyZWF0ZU9ic2VydmVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLm9ic2VydmVyKSB7XG4gICAgICAgIHRoaXMuZGVzdHJveU9ic2VydmVyKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmZyb3plbikgcmV0dXJuO1xuICAgICAgdGhpcy5vcHRpb25zID0gcHJvY2Vzc09wdGlvbnMob3B0aW9ucyk7XG5cbiAgICAgIHRoaXMuY2FsbGJhY2sgPSBmdW5jdGlvbiAocmVzdWx0LCBlbnRyeSkge1xuICAgICAgICBfdGhpcy5vcHRpb25zLmNhbGxiYWNrKHJlc3VsdCwgZW50cnkpO1xuXG4gICAgICAgIGlmIChyZXN1bHQgJiYgX3RoaXMub3B0aW9ucy5vbmNlKSB7XG4gICAgICAgICAgX3RoaXMuZnJvemVuID0gdHJ1ZTtcblxuICAgICAgICAgIF90aGlzLmRlc3Ryb3lPYnNlcnZlcigpO1xuICAgICAgICB9XG4gICAgICB9OyAvLyBUaHJvdHRsZVxuXG5cbiAgICAgIGlmICh0aGlzLmNhbGxiYWNrICYmIHRoaXMub3B0aW9ucy50aHJvdHRsZSkge1xuICAgICAgICB2YXIgX3JlZiA9IHRoaXMub3B0aW9ucy50aHJvdHRsZU9wdGlvbnMgfHwge30sXG4gICAgICAgICAgICBfbGVhZGluZyA9IF9yZWYubGVhZGluZztcblxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gdGhyb3R0bGUodGhpcy5jYWxsYmFjaywgdGhpcy5vcHRpb25zLnRocm90dGxlLCB7XG4gICAgICAgICAgbGVhZGluZzogZnVuY3Rpb24gbGVhZGluZyhzdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIF9sZWFkaW5nID09PSAnYm90aCcgfHwgX2xlYWRpbmcgPT09ICd2aXNpYmxlJyAmJiBzdGF0ZSB8fCBfbGVhZGluZyA9PT0gJ2hpZGRlbicgJiYgIXN0YXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMub2xkUmVzdWx0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihmdW5jdGlvbiAoZW50cmllcykge1xuICAgICAgICB2YXIgZW50cnkgPSBlbnRyaWVzWzBdO1xuXG4gICAgICAgIGlmIChlbnRyaWVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICB2YXIgaW50ZXJzZWN0aW5nRW50cnkgPSBlbnRyaWVzLmZpbmQoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlLmlzSW50ZXJzZWN0aW5nO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKGludGVyc2VjdGluZ0VudHJ5KSB7XG4gICAgICAgICAgICBlbnRyeSA9IGludGVyc2VjdGluZ0VudHJ5O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfdGhpcy5jYWxsYmFjaykge1xuICAgICAgICAgIC8vIFVzZSBpc0ludGVyc2VjdGluZyBpZiBwb3NzaWJsZSBiZWNhdXNlIGJyb3dzZXJzIGNhbiByZXBvcnQgaXNJbnRlcnNlY3RpbmcgYXMgdHJ1ZSwgYnV0IGludGVyc2VjdGlvblJhdGlvIGFzIDAsIHdoZW4gc29tZXRoaW5nIHZlcnkgc2xvd2x5IGVudGVycyB0aGUgdmlld3BvcnQuXG4gICAgICAgICAgdmFyIHJlc3VsdCA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nICYmIGVudHJ5LmludGVyc2VjdGlvblJhdGlvID49IF90aGlzLnRocmVzaG9sZDtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSBfdGhpcy5vbGRSZXN1bHQpIHJldHVybjtcbiAgICAgICAgICBfdGhpcy5vbGRSZXN1bHQgPSByZXN1bHQ7XG5cbiAgICAgICAgICBfdGhpcy5jYWxsYmFjayhyZXN1bHQsIGVudHJ5KTtcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcy5vcHRpb25zLmludGVyc2VjdGlvbik7IC8vIFdhaXQgZm9yIHRoZSBlbGVtZW50IHRvIGJlIGluIGRvY3VtZW50XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXMub2JzZXJ2ZXIpIHtcbiAgICAgICAgICBfdGhpcy5vYnNlcnZlci5vYnNlcnZlKF90aGlzLmVsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRlc3Ryb3lPYnNlcnZlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95T2JzZXJ2ZXIoKSB7XG4gICAgICBpZiAodGhpcy5vYnNlcnZlcikge1xuICAgICAgICB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG51bGw7XG4gICAgICB9IC8vIENhbmNlbCB0aHJvdHRsZWQgY2FsbFxuXG5cbiAgICAgIGlmICh0aGlzLmNhbGxiYWNrICYmIHRoaXMuY2FsbGJhY2suX2NsZWFyKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2suX2NsZWFyKCk7XG5cbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRocmVzaG9sZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5pbnRlcnNlY3Rpb24gJiYgdGhpcy5vcHRpb25zLmludGVyc2VjdGlvbi50aHJlc2hvbGQgfHwgMDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVmlzaWJpbGl0eVN0YXRlO1xufSgpO1xuXG5mdW5jdGlvbiBtb3VudGVkKGVsLCBfcmVmMiwgdm5vZGUpIHtcbiAgdmFyIHZhbHVlID0gX3JlZjIudmFsdWU7XG4gIGlmICghdmFsdWUpIHJldHVybjtcblxuICBpZiAodHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyID09PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnNvbGUud2FybignW3Z1ZS1vYnNlcnZlLXZpc2liaWxpdHldIEludGVyc2VjdGlvbk9ic2VydmVyIEFQSSBpcyBub3QgYXZhaWxhYmxlIGluIHlvdXIgYnJvd3Nlci4gUGxlYXNlIGluc3RhbGwgdGhpcyBwb2x5ZmlsbDogaHR0cHM6Ly9naXRodWIuY29tL3czYy9JbnRlcnNlY3Rpb25PYnNlcnZlci90cmVlL21hc3Rlci9wb2x5ZmlsbCcpO1xuICB9IGVsc2Uge1xuICAgIHZhciBzdGF0ZSA9IG5ldyBWaXNpYmlsaXR5U3RhdGUoZWwsIHZhbHVlLCB2bm9kZSk7XG4gICAgZWwuX3Z1ZV92aXNpYmlsaXR5U3RhdGUgPSBzdGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bm1vdW50ZWQoZWwpIHtcbiAgdmFyIHN0YXRlID0gZWwuX3Z1ZV92aXNpYmlsaXR5U3RhdGU7XG5cbiAgaWYgKHN0YXRlKSB7XG4gICAgc3RhdGUuZGVzdHJveU9ic2VydmVyKCk7XG4gICAgZGVsZXRlIGVsLl92dWVfdmlzaWJpbGl0eVN0YXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFVwZGF0ZWQoZWwsIF9yZWYzLCB2bm9kZSkge1xuICB2YXIgdmFsdWUgPSBfcmVmMy52YWx1ZSxcbiAgICAgIG9sZFZhbHVlID0gX3JlZjMub2xkVmFsdWU7XG4gIGlmIChkZWVwRXF1YWwodmFsdWUsIG9sZFZhbHVlKSkgcmV0dXJuO1xuICB2YXIgc3RhdGUgPSBlbC5fdnVlX3Zpc2liaWxpdHlTdGF0ZTtcblxuICBpZiAoIXZhbHVlKSB7XG4gICAgdW5tb3VudGVkKGVsKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoc3RhdGUpIHtcbiAgICBzdGF0ZS5jcmVhdGVPYnNlcnZlcih2YWx1ZSwgdm5vZGUpO1xuICB9IGVsc2Uge1xuICAgIG1vdW50ZWQoZWwsIHtcbiAgICAgIHZhbHVlOiB2YWx1ZVxuICAgIH0sIHZub2RlKTtcbiAgfVxufVxuXG52YXIgT2JzZXJ2ZVZpc2liaWxpdHkgPSB7XG4gIG1vdW50ZWQ6IG1vdW50ZWQsXG4gIGNvbXBvbmVudFVwZGF0ZWQ6IGNvbXBvbmVudFVwZGF0ZWQsXG4gIHVubW91bnRlZDogdW5tb3VudGVkXG59O1xuXG52YXIgcHJvcHMgPSB7XG4gIGl0ZW1zOiB7XG4gICAgdHlwZTogQXJyYXksXG4gICAgcmVxdWlyZWQ6IHRydWVcbiAgfSxcbiAga2V5RmllbGQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJ2lkJ1xuICB9LFxuICBkaXJlY3Rpb246IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJ3ZlcnRpY2FsJyxcbiAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uIHZhbGlkYXRvcih2YWx1ZSkge1xuICAgICAgcmV0dXJuIFsndmVydGljYWwnLCAnaG9yaXpvbnRhbCddLmluY2x1ZGVzKHZhbHVlKTtcbiAgICB9XG4gIH1cbn07XG5mdW5jdGlvbiBzaW1wbGVBcnJheSgpIHtcbiAgcmV0dXJuIHRoaXMuaXRlbXMubGVuZ3RoICYmIF90eXBlb2YodGhpcy5pdGVtc1swXSkgIT09ICdvYmplY3QnO1xufVxuXG52YXIgc3VwcG9ydHNQYXNzaXZlID0gZmFsc2U7XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcblxuICB0cnkge1xuICAgIHZhciBvcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICBzdXBwb3J0c1Bhc3NpdmUgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0JywgbnVsbCwgb3B0cyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59XG5cbnZhciB1aWQgPSAwO1xudmFyIHNjcmlwdCA9IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdSZWN5Y2xlU2Nyb2xsZXInLFxuICBjb21wb25lbnRzOiB7XG4gICAgUmVzaXplT2JzZXJ2ZXI6IFJlc2l6ZU9ic2VydmVyJDFcbiAgfSxcbiAgZGlyZWN0aXZlczoge1xuICAgIE9ic2VydmVWaXNpYmlsaXR5OiBPYnNlcnZlVmlzaWJpbGl0eVxuICB9LFxuICBwcm9wczogX29iamVjdFNwcmVhZDIoe30sIHByb3BzLCB7XG4gICAgaXRlbVNpemU6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICB9LFxuICAgIG1pbkl0ZW1TaXplOiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH0sXG4gICAgc2l6ZUZpZWxkOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnc2l6ZSdcbiAgICB9LFxuICAgIHR5cGVGaWVsZDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3R5cGUnXG4gICAgfSxcbiAgICBidWZmZXI6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDIwMFxuICAgIH0sXG4gICAgcGFnZU1vZGU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgcHJlcmVuZGVyOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAwXG4gICAgfSxcbiAgICBlbWl0VXBkYXRlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9XG4gIH0pLFxuICBlbWl0czogWyd2aXNpYmxlJywgJ2hpZGRlbicsICdyZXNpemUnLCAndXBkYXRlJ10sXG4gIGRhdGE6IGZ1bmN0aW9uIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBvb2w6IFtdLFxuICAgICAgdG90YWxTaXplOiAwLFxuICAgICAgcmVhZHk6IGZhbHNlLFxuICAgICAgaG92ZXJLZXk6IG51bGxcbiAgICB9O1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIHNpemVzOiBmdW5jdGlvbiBzaXplcygpIHtcbiAgICAgIGlmICh0aGlzLml0ZW1TaXplID09PSBudWxsKSB7XG4gICAgICAgIHZhciBzaXplcyA9IHtcbiAgICAgICAgICAnLTEnOiB7XG4gICAgICAgICAgICBhY2N1bXVsYXRvcjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICAgICAgdmFyIGZpZWxkID0gdGhpcy5zaXplRmllbGQ7XG4gICAgICAgIHZhciBtaW5JdGVtU2l6ZSA9IHRoaXMubWluSXRlbVNpemU7XG4gICAgICAgIHZhciBjb21wdXRlZE1pblNpemUgPSAxMDAwMDtcbiAgICAgICAgdmFyIGFjY3VtdWxhdG9yID0gMDtcbiAgICAgICAgdmFyIGN1cnJlbnQ7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBpdGVtcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBjdXJyZW50ID0gaXRlbXNbaV1bZmllbGRdIHx8IG1pbkl0ZW1TaXplO1xuXG4gICAgICAgICAgaWYgKGN1cnJlbnQgPCBjb21wdXRlZE1pblNpemUpIHtcbiAgICAgICAgICAgIGNvbXB1dGVkTWluU2l6ZSA9IGN1cnJlbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYWNjdW11bGF0b3IgKz0gY3VycmVudDtcbiAgICAgICAgICBzaXplc1tpXSA9IHtcbiAgICAgICAgICAgIGFjY3VtdWxhdG9yOiBhY2N1bXVsYXRvcixcbiAgICAgICAgICAgIHNpemU6IGN1cnJlbnRcbiAgICAgICAgICB9O1xuICAgICAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG5cbiAgICAgICAgdGhpcy4kX2NvbXB1dGVkTWluSXRlbVNpemUgPSBjb21wdXRlZE1pblNpemU7XG4gICAgICAgIHJldHVybiBzaXplcztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFtdO1xuICAgIH0sXG4gICAgc2ltcGxlQXJyYXk6IHNpbXBsZUFycmF5XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgaXRlbXM6IGZ1bmN0aW9uIGl0ZW1zKCkge1xuICAgICAgdGhpcy51cGRhdGVWaXNpYmxlSXRlbXModHJ1ZSk7XG4gICAgfSxcbiAgICBwYWdlTW9kZTogZnVuY3Rpb24gcGFnZU1vZGUoKSB7XG4gICAgICB0aGlzLmFwcGx5UGFnZU1vZGUoKTtcbiAgICAgIHRoaXMudXBkYXRlVmlzaWJsZUl0ZW1zKGZhbHNlKTtcbiAgICB9LFxuICAgIHNpemVzOiB7XG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVZpc2libGVJdGVtcyhmYWxzZSk7XG4gICAgICB9LFxuICAgICAgZGVlcDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgY3JlYXRlZDogZnVuY3Rpb24gY3JlYXRlZCgpIHtcbiAgICB0aGlzLiRfc3RhcnRJbmRleCA9IDA7XG4gICAgdGhpcy4kX2VuZEluZGV4ID0gMDtcbiAgICB0aGlzLiRfdmlld3MgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy4kX3VudXNlZFZpZXdzID0gbmV3IE1hcCgpO1xuICAgIHRoaXMuJF9zY3JvbGxEaXJ0eSA9IGZhbHNlO1xuICAgIHRoaXMuJF9sYXN0VXBkYXRlU2Nyb2xsUG9zaXRpb24gPSAwOyAvLyBJbiBTU1IgbW9kZSwgd2UgYWxzbyBwcmVyZW5kZXIgdGhlIHNhbWUgbnVtYmVyIG9mIGl0ZW0gZm9yIHRoZSBmaXJzdCByZW5kZXJcbiAgICAvLyB0byBhdm9pciBtaXNtYXRjaCBiZXR3ZWVuIHNlcnZlciBhbmQgY2xpZW50IHRlbXBsYXRlc1xuXG4gICAgaWYgKHRoaXMucHJlcmVuZGVyKSB7XG4gICAgICB0aGlzLiRfcHJlcmVuZGVyID0gdHJ1ZTtcbiAgICAgIHRoaXMudXBkYXRlVmlzaWJsZUl0ZW1zKGZhbHNlKTtcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uIG1vdW50ZWQoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMuYXBwbHlQYWdlTW9kZSgpO1xuICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEluIFNTUiBtb2RlLCByZW5kZXIgdGhlIHJlYWwgbnVtYmVyIG9mIHZpc2libGUgaXRlbXNcbiAgICAgIF90aGlzLiRfcHJlcmVuZGVyID0gZmFsc2U7XG5cbiAgICAgIF90aGlzLnVwZGF0ZVZpc2libGVJdGVtcyh0cnVlKTtcblxuICAgICAgX3RoaXMucmVhZHkgPSB0cnVlO1xuICAgIH0pO1xuICB9LFxuICBiZWZvcmVVbm1vdW50OiBmdW5jdGlvbiBiZWZvcmVVbm1vdW50KCkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBhZGRWaWV3OiBmdW5jdGlvbiBhZGRWaWV3KHBvb2wsIGluZGV4LCBpdGVtLCBrZXksIHR5cGUpIHtcbiAgICAgIHZhciB2aWV3ID0ge1xuICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICBwb3NpdGlvbjogMFxuICAgICAgfTtcbiAgICAgIHZpZXcubnIgPSB7XG4gICAgICAgIGlkOiB1aWQrKyxcbiAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICB1c2VkOiB0cnVlLFxuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgdHlwZTogdHlwZVxuICAgICAgfTtcbiAgICAgIHBvb2wucHVzaCh2aWV3KTtcbiAgICAgIHJldHVybiB2aWV3O1xuICAgIH0sXG4gICAgdW51c2VWaWV3OiBmdW5jdGlvbiB1bnVzZVZpZXcodmlldykge1xuICAgICAgdmFyIGZha2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuICAgICAgdmFyIHVudXNlZFZpZXdzID0gdGhpcy4kX3VudXNlZFZpZXdzO1xuICAgICAgdmFyIHR5cGUgPSB2aWV3Lm5yLnR5cGU7XG4gICAgICB2YXIgdW51c2VkUG9vbCA9IHVudXNlZFZpZXdzLmdldCh0eXBlKTtcblxuICAgICAgaWYgKCF1bnVzZWRQb29sKSB7XG4gICAgICAgIHVudXNlZFBvb2wgPSBbXTtcbiAgICAgICAgdW51c2VkVmlld3Muc2V0KHR5cGUsIHVudXNlZFBvb2wpO1xuICAgICAgfVxuXG4gICAgICB1bnVzZWRQb29sLnB1c2godmlldyk7XG5cbiAgICAgIGlmICghZmFrZSkge1xuICAgICAgICB2aWV3Lm5yLnVzZWQgPSBmYWxzZTtcbiAgICAgICAgdmlldy5wb3NpdGlvbiA9IC05OTk5O1xuICAgICAgICB0aGlzLiRfdmlld3MuZGVsZXRlKHZpZXcubnIua2V5KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGhhbmRsZVJlc2l6ZTogZnVuY3Rpb24gaGFuZGxlUmVzaXplKCkge1xuICAgICAgdGhpcy4kZW1pdCgncmVzaXplJyk7XG4gICAgICBpZiAodGhpcy5yZWFkeSkgdGhpcy51cGRhdGVWaXNpYmxlSXRlbXMoZmFsc2UpO1xuICAgIH0sXG4gICAgaGFuZGxlU2Nyb2xsOiBmdW5jdGlvbiBoYW5kbGVTY3JvbGwoZXZlbnQpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBpZiAoIXRoaXMuJF9zY3JvbGxEaXJ0eSkge1xuICAgICAgICB0aGlzLiRfc2Nyb2xsRGlydHkgPSB0cnVlO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi4kX3Njcm9sbERpcnR5ID0gZmFsc2U7XG5cbiAgICAgICAgICB2YXIgX3RoaXMyJHVwZGF0ZVZpc2libGVJID0gX3RoaXMyLnVwZGF0ZVZpc2libGVJdGVtcyhmYWxzZSwgdHJ1ZSksXG4gICAgICAgICAgICAgIGNvbnRpbnVvdXMgPSBfdGhpczIkdXBkYXRlVmlzaWJsZUkuY29udGludW91czsgLy8gSXQgc2VlbXMgc29tZXRpbWVzIGNocm9tZSBkb2Vzbid0IGZpcmUgc2Nyb2xsIGV2ZW50IDovXG4gICAgICAgICAgLy8gV2hlbiBub24gY29udGlub3VzIHNjcm9sbGluZyBpcyBlbmRpbmcsIHdlIGZvcmNlIGEgcmVmcmVzaFxuXG5cbiAgICAgICAgICBpZiAoIWNvbnRpbnVvdXMpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChfdGhpczIuJF9yZWZyZXNoVGltb3V0KTtcbiAgICAgICAgICAgIF90aGlzMi4kX3JlZnJlc2hUaW1vdXQgPSBzZXRUaW1lb3V0KF90aGlzMi5oYW5kbGVTY3JvbGwsIDEwMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2U6IGZ1bmN0aW9uIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UoaXNWaXNpYmxlLCBlbnRyeSkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLnJlYWR5KSB7XG4gICAgICAgIGlmIChpc1Zpc2libGUgfHwgZW50cnkuYm91bmRpbmdDbGllbnRSZWN0LndpZHRoICE9PSAwIHx8IGVudHJ5LmJvdW5kaW5nQ2xpZW50UmVjdC5oZWlnaHQgIT09IDApIHtcbiAgICAgICAgICB0aGlzLiRlbWl0KCd2aXNpYmxlJyk7XG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzMy51cGRhdGVWaXNpYmxlSXRlbXMoZmFsc2UpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuJGVtaXQoJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICB1cGRhdGVWaXNpYmxlSXRlbXM6IGZ1bmN0aW9uIHVwZGF0ZVZpc2libGVJdGVtcyhjaGVja0l0ZW0pIHtcbiAgICAgIHZhciBjaGVja1Bvc2l0aW9uRGlmZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gICAgICB2YXIgaXRlbVNpemUgPSB0aGlzLml0ZW1TaXplO1xuICAgICAgdmFyIG1pbkl0ZW1TaXplID0gdGhpcy4kX2NvbXB1dGVkTWluSXRlbVNpemU7XG4gICAgICB2YXIgdHlwZUZpZWxkID0gdGhpcy50eXBlRmllbGQ7XG4gICAgICB2YXIga2V5RmllbGQgPSB0aGlzLnNpbXBsZUFycmF5ID8gbnVsbCA6IHRoaXMua2V5RmllbGQ7XG4gICAgICB2YXIgaXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgICAgdmFyIGNvdW50ID0gaXRlbXMubGVuZ3RoO1xuICAgICAgdmFyIHNpemVzID0gdGhpcy5zaXplcztcbiAgICAgIHZhciB2aWV3cyA9IHRoaXMuJF92aWV3cztcbiAgICAgIHZhciB1bnVzZWRWaWV3cyA9IHRoaXMuJF91bnVzZWRWaWV3cztcbiAgICAgIHZhciBwb29sID0gdGhpcy5wb29sO1xuICAgICAgdmFyIHN0YXJ0SW5kZXgsIGVuZEluZGV4O1xuICAgICAgdmFyIHRvdGFsU2l6ZTtcblxuICAgICAgaWYgKCFjb3VudCkge1xuICAgICAgICBzdGFydEluZGV4ID0gZW5kSW5kZXggPSB0b3RhbFNpemUgPSAwO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLiRfcHJlcmVuZGVyKSB7XG4gICAgICAgIHN0YXJ0SW5kZXggPSAwO1xuICAgICAgICBlbmRJbmRleCA9IHRoaXMucHJlcmVuZGVyO1xuICAgICAgICB0b3RhbFNpemUgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHNjcm9sbCA9IHRoaXMuZ2V0U2Nyb2xsKCk7IC8vIFNraXAgdXBkYXRlIGlmIHVzZSBoYXNuJ3Qgc2Nyb2xsZWQgZW5vdWdoXG5cbiAgICAgICAgaWYgKGNoZWNrUG9zaXRpb25EaWZmKSB7XG4gICAgICAgICAgdmFyIHBvc2l0aW9uRGlmZiA9IHNjcm9sbC5zdGFydCAtIHRoaXMuJF9sYXN0VXBkYXRlU2Nyb2xsUG9zaXRpb247XG4gICAgICAgICAgaWYgKHBvc2l0aW9uRGlmZiA8IDApIHBvc2l0aW9uRGlmZiA9IC1wb3NpdGlvbkRpZmY7XG5cbiAgICAgICAgICBpZiAoaXRlbVNpemUgPT09IG51bGwgJiYgcG9zaXRpb25EaWZmIDwgbWluSXRlbVNpemUgfHwgcG9zaXRpb25EaWZmIDwgaXRlbVNpemUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGNvbnRpbnVvdXM6IHRydWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kX2xhc3RVcGRhdGVTY3JvbGxQb3NpdGlvbiA9IHNjcm9sbC5zdGFydDtcbiAgICAgICAgdmFyIGJ1ZmZlciA9IHRoaXMuYnVmZmVyO1xuICAgICAgICBzY3JvbGwuc3RhcnQgLT0gYnVmZmVyO1xuICAgICAgICBzY3JvbGwuZW5kICs9IGJ1ZmZlcjsgLy8gVmFyaWFibGUgc2l6ZSBtb2RlXG5cbiAgICAgICAgaWYgKGl0ZW1TaXplID09PSBudWxsKSB7XG4gICAgICAgICAgdmFyIGg7XG4gICAgICAgICAgdmFyIGEgPSAwO1xuICAgICAgICAgIHZhciBiID0gY291bnQgLSAxO1xuICAgICAgICAgIHZhciBpID0gfn4oY291bnQgLyAyKTtcbiAgICAgICAgICB2YXIgb2xkSTsgLy8gU2VhcmNoaW5nIGZvciBzdGFydEluZGV4XG5cbiAgICAgICAgICBkbyB7XG4gICAgICAgICAgICBvbGRJID0gaTtcbiAgICAgICAgICAgIGggPSBzaXplc1tpXS5hY2N1bXVsYXRvcjtcblxuICAgICAgICAgICAgaWYgKGggPCBzY3JvbGwuc3RhcnQpIHtcbiAgICAgICAgICAgICAgYSA9IGk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPCBjb3VudCAtIDEgJiYgc2l6ZXNbaSArIDFdLmFjY3VtdWxhdG9yID4gc2Nyb2xsLnN0YXJ0KSB7XG4gICAgICAgICAgICAgIGIgPSBpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpID0gfn4oKGEgKyBiKSAvIDIpO1xuICAgICAgICAgIH0gd2hpbGUgKGkgIT09IG9sZEkpO1xuXG4gICAgICAgICAgaSA8IDAgJiYgKGkgPSAwKTtcbiAgICAgICAgICBzdGFydEluZGV4ID0gaTsgLy8gRm9yIGNvbnRhaW5lciBzdHlsZVxuXG4gICAgICAgICAgdG90YWxTaXplID0gc2l6ZXNbY291bnQgLSAxXS5hY2N1bXVsYXRvcjsgLy8gU2VhcmNoaW5nIGZvciBlbmRJbmRleFxuXG4gICAgICAgICAgZm9yIChlbmRJbmRleCA9IGk7IGVuZEluZGV4IDwgY291bnQgJiYgc2l6ZXNbZW5kSW5kZXhdLmFjY3VtdWxhdG9yIDwgc2Nyb2xsLmVuZDsgZW5kSW5kZXgrKykge1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChlbmRJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIGVuZEluZGV4ID0gaXRlbXMubGVuZ3RoIC0gMTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZW5kSW5kZXgrKzsgLy8gQm91bmRzXG5cbiAgICAgICAgICAgIGVuZEluZGV4ID4gY291bnQgJiYgKGVuZEluZGV4ID0gY291bnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBGaXhlZCBzaXplIG1vZGVcbiAgICAgICAgICBzdGFydEluZGV4ID0gfn4oc2Nyb2xsLnN0YXJ0IC8gaXRlbVNpemUpO1xuICAgICAgICAgIGVuZEluZGV4ID0gTWF0aC5jZWlsKHNjcm9sbC5lbmQgLyBpdGVtU2l6ZSk7IC8vIEJvdW5kc1xuXG4gICAgICAgICAgc3RhcnRJbmRleCA8IDAgJiYgKHN0YXJ0SW5kZXggPSAwKTtcbiAgICAgICAgICBlbmRJbmRleCA+IGNvdW50ICYmIChlbmRJbmRleCA9IGNvdW50KTtcbiAgICAgICAgICB0b3RhbFNpemUgPSBjb3VudCAqIGl0ZW1TaXplO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChlbmRJbmRleCAtIHN0YXJ0SW5kZXggPiBjb25maWcuaXRlbXNMaW1pdCkge1xuICAgICAgICB0aGlzLml0ZW1zTGltaXRFcnJvcigpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnRvdGFsU2l6ZSA9IHRvdGFsU2l6ZTtcbiAgICAgIHZhciB2aWV3O1xuICAgICAgdmFyIGNvbnRpbnVvdXMgPSBzdGFydEluZGV4IDw9IHRoaXMuJF9lbmRJbmRleCAmJiBlbmRJbmRleCA+PSB0aGlzLiRfc3RhcnRJbmRleDtcblxuICAgICAgaWYgKHRoaXMuJF9jb250aW51b3VzICE9PSBjb250aW51b3VzKSB7XG4gICAgICAgIGlmIChjb250aW51b3VzKSB7XG4gICAgICAgICAgdmlld3MuY2xlYXIoKTtcbiAgICAgICAgICB1bnVzZWRWaWV3cy5jbGVhcigpO1xuXG4gICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBsID0gcG9vbC5sZW5ndGg7IF9pIDwgbDsgX2krKykge1xuICAgICAgICAgICAgdmlldyA9IHBvb2xbX2ldO1xuICAgICAgICAgICAgdGhpcy51bnVzZVZpZXcodmlldyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kX2NvbnRpbnVvdXMgPSBjb250aW51b3VzO1xuICAgICAgfSBlbHNlIGlmIChjb250aW51b3VzKSB7XG4gICAgICAgIGZvciAodmFyIF9pMiA9IDAsIF9sID0gcG9vbC5sZW5ndGg7IF9pMiA8IF9sOyBfaTIrKykge1xuICAgICAgICAgIHZpZXcgPSBwb29sW19pMl07XG5cbiAgICAgICAgICBpZiAodmlldy5uci51c2VkKSB7XG4gICAgICAgICAgICAvLyBVcGRhdGUgdmlldyBpdGVtIGluZGV4XG4gICAgICAgICAgICBpZiAoY2hlY2tJdGVtKSB7XG4gICAgICAgICAgICAgIHZpZXcubnIuaW5kZXggPSBpdGVtcy5maW5kSW5kZXgoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5RmllbGQgPyBpdGVtW2tleUZpZWxkXSA9PT0gdmlldy5pdGVtW2tleUZpZWxkXSA6IGl0ZW0gPT09IHZpZXcuaXRlbTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IC8vIENoZWNrIGlmIGluZGV4IGlzIHN0aWxsIGluIHZpc2libGUgcmFuZ2VcblxuXG4gICAgICAgICAgICBpZiAodmlldy5uci5pbmRleCA9PT0gLTEgfHwgdmlldy5uci5pbmRleCA8IHN0YXJ0SW5kZXggfHwgdmlldy5uci5pbmRleCA+PSBlbmRJbmRleCkge1xuICAgICAgICAgICAgICB0aGlzLnVudXNlVmlldyh2aWV3KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHVudXNlZEluZGV4ID0gY29udGludW91cyA/IG51bGwgOiBuZXcgTWFwKCk7XG4gICAgICB2YXIgaXRlbSwgdHlwZSwgdW51c2VkUG9vbDtcbiAgICAgIHZhciB2O1xuXG4gICAgICBmb3IgKHZhciBfaTMgPSBzdGFydEluZGV4OyBfaTMgPCBlbmRJbmRleDsgX2kzKyspIHtcbiAgICAgICAgaXRlbSA9IGl0ZW1zW19pM107XG4gICAgICAgIHZhciBrZXkgPSBrZXlGaWVsZCA/IGl0ZW1ba2V5RmllbGRdIDogaXRlbTtcblxuICAgICAgICBpZiAoa2V5ID09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJLZXkgaXMgXCIuY29uY2F0KGtleSwgXCIgb24gaXRlbSAoa2V5RmllbGQgaXMgJ1wiKS5jb25jYXQoa2V5RmllbGQsIFwiJylcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmlldyA9IHZpZXdzLmdldChrZXkpO1xuXG4gICAgICAgIGlmICghaXRlbVNpemUgJiYgIXNpemVzW19pM10uc2l6ZSkge1xuICAgICAgICAgIGlmICh2aWV3KSB0aGlzLnVudXNlVmlldyh2aWV3KTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSAvLyBObyB2aWV3IGFzc2lnbmVkIHRvIGl0ZW1cblxuXG4gICAgICAgIGlmICghdmlldykge1xuICAgICAgICAgIHR5cGUgPSBpdGVtW3R5cGVGaWVsZF07XG4gICAgICAgICAgdW51c2VkUG9vbCA9IHVudXNlZFZpZXdzLmdldCh0eXBlKTtcblxuICAgICAgICAgIGlmIChjb250aW51b3VzKSB7XG4gICAgICAgICAgICAvLyBSZXVzZSBleGlzdGluZyB2aWV3XG4gICAgICAgICAgICBpZiAodW51c2VkUG9vbCAmJiB1bnVzZWRQb29sLmxlbmd0aCkge1xuICAgICAgICAgICAgICB2aWV3ID0gdW51c2VkUG9vbC5wb3AoKTtcbiAgICAgICAgICAgICAgdmlldy5pdGVtID0gaXRlbTtcbiAgICAgICAgICAgICAgdmlldy5uci51c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdmlldy5uci5pbmRleCA9IF9pMztcbiAgICAgICAgICAgICAgdmlldy5uci5rZXkgPSBrZXk7XG4gICAgICAgICAgICAgIHZpZXcubnIudHlwZSA9IHR5cGU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2aWV3ID0gdGhpcy5hZGRWaWV3KHBvb2wsIF9pMywgaXRlbSwga2V5LCB0eXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gVXNlIGV4aXN0aW5nIHZpZXdcbiAgICAgICAgICAgIC8vIFdlIGRvbid0IGNhcmUgaWYgdGhleSBhcmUgYWxyZWFkeSB1c2VkXG4gICAgICAgICAgICAvLyBiZWNhdXNlIHdlIGFyZSBub3QgaW4gY29udGlub3VzIHNjcm9sbGluZ1xuICAgICAgICAgICAgdiA9IHVudXNlZEluZGV4LmdldCh0eXBlKSB8fCAwO1xuXG4gICAgICAgICAgICBpZiAoIXVudXNlZFBvb2wgfHwgdiA+PSB1bnVzZWRQb29sLmxlbmd0aCkge1xuICAgICAgICAgICAgICB2aWV3ID0gdGhpcy5hZGRWaWV3KHBvb2wsIF9pMywgaXRlbSwga2V5LCB0eXBlKTtcbiAgICAgICAgICAgICAgdGhpcy51bnVzZVZpZXcodmlldywgdHJ1ZSk7XG4gICAgICAgICAgICAgIHVudXNlZFBvb2wgPSB1bnVzZWRWaWV3cy5nZXQodHlwZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZpZXcgPSB1bnVzZWRQb29sW3ZdO1xuICAgICAgICAgICAgdmlldy5pdGVtID0gaXRlbTtcbiAgICAgICAgICAgIHZpZXcubnIudXNlZCA9IHRydWU7XG4gICAgICAgICAgICB2aWV3Lm5yLmluZGV4ID0gX2kzO1xuICAgICAgICAgICAgdmlldy5uci5rZXkgPSBrZXk7XG4gICAgICAgICAgICB2aWV3Lm5yLnR5cGUgPSB0eXBlO1xuICAgICAgICAgICAgdW51c2VkSW5kZXguc2V0KHR5cGUsIHYgKyAxKTtcbiAgICAgICAgICAgIHYrKztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2aWV3cy5zZXQoa2V5LCB2aWV3KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2aWV3Lm5yLnVzZWQgPSB0cnVlO1xuICAgICAgICAgIHZpZXcuaXRlbSA9IGl0ZW07XG4gICAgICAgIH0gLy8gVXBkYXRlIHBvc2l0aW9uXG5cblxuICAgICAgICBpZiAoaXRlbVNpemUgPT09IG51bGwpIHtcbiAgICAgICAgICB2aWV3LnBvc2l0aW9uID0gc2l6ZXNbX2kzIC0gMV0uYWNjdW11bGF0b3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmlldy5wb3NpdGlvbiA9IF9pMyAqIGl0ZW1TaXplO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuJF9zdGFydEluZGV4ID0gc3RhcnRJbmRleDtcbiAgICAgIHRoaXMuJF9lbmRJbmRleCA9IGVuZEluZGV4O1xuICAgICAgaWYgKHRoaXMuZW1pdFVwZGF0ZSkgdGhpcy4kZW1pdCgndXBkYXRlJywgc3RhcnRJbmRleCwgZW5kSW5kZXgpOyAvLyBBZnRlciB0aGUgdXNlciBoYXMgZmluaXNoZWQgc2Nyb2xsaW5nXG4gICAgICAvLyBTb3J0IHZpZXdzIHNvIHRleHQgc2VsZWN0aW9uIGlzIGNvcnJlY3RcblxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuJF9zb3J0VGltZXIpO1xuICAgICAgdGhpcy4kX3NvcnRUaW1lciA9IHNldFRpbWVvdXQodGhpcy5zb3J0Vmlld3MsIDMwMCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb250aW51b3VzOiBjb250aW51b3VzXG4gICAgICB9O1xuICAgIH0sXG4gICAgZ2V0TGlzdGVuZXJUYXJnZXQ6IGZ1bmN0aW9uIGdldExpc3RlbmVyVGFyZ2V0KCkge1xuICAgICAgdmFyIHRhcmdldCA9IFNjcm9sbFBhcmVudCh0aGlzLiRlbCk7IC8vIEZpeCBnbG9iYWwgc2Nyb2xsIHRhcmdldCBmb3IgQ2hyb21lIGFuZCBTYWZhcmlcblxuICAgICAgaWYgKHdpbmRvdy5kb2N1bWVudCAmJiAodGFyZ2V0ID09PSB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IHRhcmdldCA9PT0gd2luZG93LmRvY3VtZW50LmJvZHkpKSB7XG4gICAgICAgIHRhcmdldCA9IHdpbmRvdztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9LFxuICAgIGdldFNjcm9sbDogZnVuY3Rpb24gZ2V0U2Nyb2xsKCkge1xuICAgICAgdmFyIGVsID0gdGhpcy4kZWwsXG4gICAgICAgICAgZGlyZWN0aW9uID0gdGhpcy5kaXJlY3Rpb247XG4gICAgICB2YXIgaXNWZXJ0aWNhbCA9IGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJztcbiAgICAgIHZhciBzY3JvbGxTdGF0ZTtcblxuICAgICAgaWYgKHRoaXMucGFnZU1vZGUpIHtcbiAgICAgICAgdmFyIGJvdW5kcyA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgYm91bmRzU2l6ZSA9IGlzVmVydGljYWwgPyBib3VuZHMuaGVpZ2h0IDogYm91bmRzLndpZHRoO1xuICAgICAgICB2YXIgc3RhcnQgPSAtKGlzVmVydGljYWwgPyBib3VuZHMudG9wIDogYm91bmRzLmxlZnQpO1xuICAgICAgICB2YXIgc2l6ZSA9IGlzVmVydGljYWwgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgICAgICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgICAgICAgc2l6ZSArPSBzdGFydDtcbiAgICAgICAgICBzdGFydCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhcnQgKyBzaXplID4gYm91bmRzU2l6ZSkge1xuICAgICAgICAgIHNpemUgPSBib3VuZHNTaXplIC0gc3RhcnQ7XG4gICAgICAgIH1cblxuICAgICAgICBzY3JvbGxTdGF0ZSA9IHtcbiAgICAgICAgICBzdGFydDogc3RhcnQsXG4gICAgICAgICAgZW5kOiBzdGFydCArIHNpemVcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAoaXNWZXJ0aWNhbCkge1xuICAgICAgICBzY3JvbGxTdGF0ZSA9IHtcbiAgICAgICAgICBzdGFydDogZWwuc2Nyb2xsVG9wLFxuICAgICAgICAgIGVuZDogZWwuc2Nyb2xsVG9wICsgZWwuY2xpZW50SGVpZ2h0XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY3JvbGxTdGF0ZSA9IHtcbiAgICAgICAgICBzdGFydDogZWwuc2Nyb2xsTGVmdCxcbiAgICAgICAgICBlbmQ6IGVsLnNjcm9sbExlZnQgKyBlbC5jbGllbnRXaWR0aFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2Nyb2xsU3RhdGU7XG4gICAgfSxcbiAgICBhcHBseVBhZ2VNb2RlOiBmdW5jdGlvbiBhcHBseVBhZ2VNb2RlKCkge1xuICAgICAgaWYgKHRoaXMucGFnZU1vZGUpIHtcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBhZGRMaXN0ZW5lcnM6IGZ1bmN0aW9uIGFkZExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMubGlzdGVuZXJUYXJnZXQgPSB0aGlzLmdldExpc3RlbmVyVGFyZ2V0KCk7XG4gICAgICB0aGlzLmxpc3RlbmVyVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGFuZGxlU2Nyb2xsLCBzdXBwb3J0c1Bhc3NpdmUgPyB7XG4gICAgICAgIHBhc3NpdmU6IHRydWVcbiAgICAgIH0gOiBmYWxzZSk7XG4gICAgICB0aGlzLmxpc3RlbmVyVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKTtcbiAgICB9LFxuICAgIHJlbW92ZUxpc3RlbmVyczogZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXJzKCkge1xuICAgICAgaWYgKCF0aGlzLmxpc3RlbmVyVGFyZ2V0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5saXN0ZW5lclRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG4gICAgICB0aGlzLmxpc3RlbmVyVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKTtcbiAgICAgIHRoaXMubGlzdGVuZXJUYXJnZXQgPSBudWxsO1xuICAgIH0sXG4gICAgc2Nyb2xsVG9JdGVtOiBmdW5jdGlvbiBzY3JvbGxUb0l0ZW0oaW5kZXgpIHtcbiAgICAgIHZhciBzY3JvbGw7XG5cbiAgICAgIGlmICh0aGlzLml0ZW1TaXplID09PSBudWxsKSB7XG4gICAgICAgIHNjcm9sbCA9IGluZGV4ID4gMCA/IHRoaXMuc2l6ZXNbaW5kZXggLSAxXS5hY2N1bXVsYXRvciA6IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY3JvbGwgPSBpbmRleCAqIHRoaXMuaXRlbVNpemU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2Nyb2xsVG9Qb3NpdGlvbihzY3JvbGwpO1xuICAgIH0sXG4gICAgc2Nyb2xsVG9Qb3NpdGlvbjogZnVuY3Rpb24gc2Nyb2xsVG9Qb3NpdGlvbihwb3NpdGlvbikge1xuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgIHRoaXMuJGVsLnNjcm9sbFRvcCA9IHBvc2l0aW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4kZWwuc2Nyb2xsTGVmdCA9IHBvc2l0aW9uO1xuICAgICAgfVxuICAgIH0sXG4gICAgaXRlbXNMaW1pdEVycm9yOiBmdW5jdGlvbiBpdGVtc0xpbWl0RXJyb3IoKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdJdCBzZWVtcyB0aGUgc2Nyb2xsZXIgZWxlbWVudCBpc25cXCd0IHNjcm9sbGluZywgc28gaXQgdHJpZXMgdG8gcmVuZGVyIGFsbCB0aGUgaXRlbXMgYXQgb25jZS4nLCAnU2Nyb2xsZXI6JywgX3RoaXM0LiRlbCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdNYWtlIHN1cmUgdGhlIHNjcm9sbGVyIGhhcyBhIGZpeGVkIGhlaWdodCAob3Igd2lkdGgpIGFuZCBcXCdvdmVyZmxvdy15XFwnIChvciBcXCdvdmVyZmxvdy14XFwnKSBzZXQgdG8gXFwnYXV0b1xcJyBzbyBpdCBjYW4gc2Nyb2xsIGNvcnJlY3RseSBhbmQgb25seSByZW5kZXIgdGhlIGl0ZW1zIHZpc2libGUgaW4gdGhlIHNjcm9sbCB2aWV3cG9ydC4nKTtcbiAgICAgIH0pO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW5kZXJlZCBpdGVtcyBsaW1pdCByZWFjaGVkJyk7XG4gICAgfSxcbiAgICBzb3J0Vmlld3M6IGZ1bmN0aW9uIHNvcnRWaWV3cygpIHtcbiAgICAgIHRoaXMucG9vbC5zb3J0KGZ1bmN0aW9uICh2aWV3QSwgdmlld0IpIHtcbiAgICAgICAgcmV0dXJuIHZpZXdBLm5yLmluZGV4IC0gdmlld0IubnIuaW5kZXg7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0pO1xuXG52YXIgX2hvaXN0ZWRfMSA9IHtcbiAga2V5OiAwLFxuICBjbGFzczogXCJ2dWUtcmVjeWNsZS1zY3JvbGxlcl9fc2xvdFwiXG59O1xudmFyIF9ob2lzdGVkXzIgPSB7XG4gIGtleTogMSxcbiAgY2xhc3M6IFwidnVlLXJlY3ljbGUtc2Nyb2xsZXJfX3Nsb3RcIlxufTtcbmZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgdmFyIF9jb21wb25lbnRfUmVzaXplT2JzZXJ2ZXIgPSByZXNvbHZlQ29tcG9uZW50KFwiUmVzaXplT2JzZXJ2ZXJcIik7XG5cbiAgdmFyIF9kaXJlY3RpdmVfb2JzZXJ2ZV92aXNpYmlsaXR5ID0gcmVzb2x2ZURpcmVjdGl2ZShcIm9ic2VydmUtdmlzaWJpbGl0eVwiKTtcblxuICByZXR1cm4gd2l0aERpcmVjdGl2ZXMoKG9wZW5CbG9jaygpLCBjcmVhdGVCbG9jayhcImRpdlwiLCB7XG4gICAgY2xhc3M6IFtcInZ1ZS1yZWN5Y2xlLXNjcm9sbGVyXCIsIF9kZWZpbmVQcm9wZXJ0eSh7XG4gICAgICByZWFkeTogX2N0eC5yZWFkeSxcbiAgICAgICdwYWdlLW1vZGUnOiBfY3R4LnBhZ2VNb2RlXG4gICAgfSwgXCJkaXJlY3Rpb24tXCIuY29uY2F0KF9jdHguZGlyZWN0aW9uKSwgdHJ1ZSldLFxuICAgIG9uU2Nyb2xsUGFzc2l2ZTogX2NhY2hlWzJdIHx8IChfY2FjaGVbMl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX2N0eC5oYW5kbGVTY3JvbGwuYXBwbHkoX2N0eCwgYXJndW1lbnRzKTtcbiAgICB9KVxuICB9LCBbX2N0eC4kc2xvdHMuYmVmb3JlID8gKG9wZW5CbG9jaygpLCBjcmVhdGVCbG9jayhcImRpdlwiLCBfaG9pc3RlZF8xLCBbcmVuZGVyU2xvdChfY3R4LiRzbG90cywgXCJiZWZvcmVcIildKSkgOiBjcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpLCBjcmVhdGVWTm9kZShcImRpdlwiLCB7XG4gICAgcmVmOiBcIndyYXBwZXJcIixcbiAgICBzdHlsZTogX2RlZmluZVByb3BlcnR5KHt9LCBfY3R4LmRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJyA/ICdtaW5IZWlnaHQnIDogJ21pbldpZHRoJywgX2N0eC50b3RhbFNpemUgKyAncHgnKSxcbiAgICBjbGFzczogXCJ2dWUtcmVjeWNsZS1zY3JvbGxlcl9faXRlbS13cmFwcGVyXCJcbiAgfSwgWyhvcGVuQmxvY2sodHJ1ZSksIGNyZWF0ZUJsb2NrKEZyYWdtZW50LCBudWxsLCByZW5kZXJMaXN0KF9jdHgucG9vbCwgZnVuY3Rpb24gKHZpZXcpIHtcbiAgICByZXR1cm4gb3BlbkJsb2NrKCksIGNyZWF0ZUJsb2NrKFwiZGl2XCIsIHtcbiAgICAgIGtleTogdmlldy5uci5pZCxcbiAgICAgIHN0eWxlOiBfY3R4LnJlYWR5ID8ge1xuICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlXCIuY29uY2F0KF9jdHguZGlyZWN0aW9uID09PSAndmVydGljYWwnID8gJ1knIDogJ1gnLCBcIihcIikuY29uY2F0KHZpZXcucG9zaXRpb24sIFwicHgpXCIpXG4gICAgICB9IDogbnVsbCxcbiAgICAgIGNsYXNzOiBbXCJ2dWUtcmVjeWNsZS1zY3JvbGxlcl9faXRlbS12aWV3XCIsIHtcbiAgICAgICAgaG92ZXI6IF9jdHguaG92ZXJLZXkgPT09IHZpZXcubnIua2V5XG4gICAgICB9XSxcbiAgICAgIG9uTW91c2VlbnRlcjogZnVuY3Rpb24gb25Nb3VzZWVudGVyKCRldmVudCkge1xuICAgICAgICByZXR1cm4gX2N0eC5ob3ZlcktleSA9IHZpZXcubnIua2V5O1xuICAgICAgfSxcbiAgICAgIG9uTW91c2VsZWF2ZTogX2NhY2hlWzFdIHx8IChfY2FjaGVbMV0gPSBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfY3R4LmhvdmVyS2V5ID0gbnVsbDtcbiAgICAgIH0pXG4gICAgfSwgW3JlbmRlclNsb3QoX2N0eC4kc2xvdHMsIFwiZGVmYXVsdFwiLCB7XG4gICAgICBpdGVtOiB2aWV3Lml0ZW0sXG4gICAgICBpbmRleDogdmlldy5uci5pbmRleCxcbiAgICAgIGFjdGl2ZTogdmlldy5uci51c2VkXG4gICAgfSldLCA0NlxuICAgIC8qIENMQVNTLCBTVFlMRSwgUFJPUFMsIEhZRFJBVEVfRVZFTlRTICovXG4gICAgLCBbXCJvbk1vdXNlZW50ZXJcIl0pO1xuICB9KSwgMTI4XG4gIC8qIEtFWUVEX0ZSQUdNRU5UICovXG4gICkpXSwgNFxuICAvKiBTVFlMRSAqL1xuICApLCBfY3R4LiRzbG90cy5hZnRlciA/IChvcGVuQmxvY2soKSwgY3JlYXRlQmxvY2soXCJkaXZcIiwgX2hvaXN0ZWRfMiwgW3JlbmRlclNsb3QoX2N0eC4kc2xvdHMsIFwiYWZ0ZXJcIildKSkgOiBjcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpLCBjcmVhdGVWTm9kZShfY29tcG9uZW50X1Jlc2l6ZU9ic2VydmVyLCB7XG4gICAgb25Ob3RpZnk6IF9jdHguaGFuZGxlUmVzaXplXG4gIH0sIG51bGwsIDhcbiAgLyogUFJPUFMgKi9cbiAgLCBbXCJvbk5vdGlmeVwiXSldLCAzNFxuICAvKiBDTEFTUywgSFlEUkFURV9FVkVOVFMgKi9cbiAgKSksIFtbX2RpcmVjdGl2ZV9vYnNlcnZlX3Zpc2liaWxpdHksIF9jdHguaGFuZGxlVmlzaWJpbGl0eUNoYW5nZV1dKTtcbn1cblxuc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtcbnNjcmlwdC5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL1JlY3ljbGVTY3JvbGxlci52dWVcIjtcblxudmFyIHNjcmlwdCQxID0ge1xuICBuYW1lOiAnRHluYW1pY1Njcm9sbGVyJyxcbiAgY29tcG9uZW50czoge1xuICAgIFJlY3ljbGVTY3JvbGxlcjogc2NyaXB0XG4gIH0sXG4gIHByb3ZpZGU6IGZ1bmN0aW9uIHByb3ZpZGUoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciB2c2Nyb2xsUmVzaXplT2JzZXJ2ZXIgPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAodHlwZW9mIFJlc2l6ZU9ic2VydmVyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdnNjcm9sbFJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKGZ1bmN0aW9uIChlbnRyaWVzKSB7XG4gICAgICAgIHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihlbnRyaWVzKSxcbiAgICAgICAgICAgIF9zdGVwO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yIChfaXRlcmF0b3IucygpOyAhKF9zdGVwID0gX2l0ZXJhdG9yLm4oKSkuZG9uZTspIHtcbiAgICAgICAgICAgIHZhciBlbnRyeSA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICAgICAgICBpZiAoZW50cnkudGFyZ2V0KSB7XG4gICAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBDdXN0b21FdmVudCgncmVzaXplJywge1xuICAgICAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgICAgY29udGVudFJlY3Q6IGVudHJ5LmNvbnRlbnRSZWN0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgX2l0ZXJhdG9yLmUoZXJyKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBfaXRlcmF0b3IuZigpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdnNjcm9sbERhdGE6IHRoaXMudnNjcm9sbERhdGEsXG4gICAgICB2c2Nyb2xsUGFyZW50OiB0aGlzLFxuICAgICAgdnNjcm9sbFJlc2l6ZU9ic2VydmVyOiB2c2Nyb2xsUmVzaXplT2JzZXJ2ZXIsXG4gICAgICBvblVwZGF0ZVNjcm9sbDogZnVuY3Rpb24gb25VcGRhdGVTY3JvbGwoY2IpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnZTY3JvbGxNYXAucHVzaChjYik7XG4gICAgICB9XG4gICAgfTtcbiAgfSxcbiAgaW5oZXJpdEF0dHJzOiBmYWxzZSxcbiAgcHJvcHM6IF9vYmplY3RTcHJlYWQyKHt9LCBwcm9wcywge1xuICAgIG1pbkl0ZW1TaXplOiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XG4gIH0pLFxuICBlbWl0czogWyd2c2Nyb2xsOnVwZGF0ZScsICdyZXNpemUnLCAndmlzaWJsZSddLFxuICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2c2Nyb2xsRGF0YToge1xuICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgIHNpemVzOiB7fSxcbiAgICAgICAgdmFsaWRTaXplczoge30sXG4gICAgICAgIGtleUZpZWxkOiB0aGlzLmtleUZpZWxkLFxuICAgICAgICBzaW1wbGVBcnJheTogZmFsc2VcbiAgICAgIH0sXG4gICAgICB2U2Nyb2xsTWFwOiBbXVxuICAgIH07XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgc2ltcGxlQXJyYXk6IHNpbXBsZUFycmF5LFxuICAgIGl0ZW1zV2l0aFNpemU6IGZ1bmN0aW9uIGl0ZW1zV2l0aFNpemUoKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICB2YXIgaXRlbXMgPSB0aGlzLml0ZW1zLFxuICAgICAgICAgIGtleUZpZWxkID0gdGhpcy5rZXlGaWVsZCxcbiAgICAgICAgICBzaW1wbGVBcnJheSA9IHRoaXMuc2ltcGxlQXJyYXk7XG4gICAgICB2YXIgc2l6ZXMgPSB0aGlzLnZzY3JvbGxEYXRhLnNpemVzO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBpdGVtID0gaXRlbXNbaV07XG4gICAgICAgIHZhciBpZCA9IHNpbXBsZUFycmF5ID8gaSA6IGl0ZW1ba2V5RmllbGRdO1xuICAgICAgICB2YXIgc2l6ZSA9IHNpemVzW2lkXTtcblxuICAgICAgICBpZiAodHlwZW9mIHNpemUgPT09ICd1bmRlZmluZWQnICYmICF0aGlzLiRfdW5kZWZpbmVkTWFwW2lkXSkge1xuICAgICAgICAgIHNpemUgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIHNpemU6IHNpemVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcbiAgICBsaXN0ZW5lcnM6IGZ1bmN0aW9uIGxpc3RlbmVycygpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMgPSB7fTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuJGF0dHJzKSB7XG4gICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aCgnb24nKSkge1xuICAgICAgICAgIGlmIChrZXkgIT09ICdvblJlc2l6ZScgJiYga2V5ICE9PSAnb25WaXNpYmxlJykge1xuICAgICAgICAgICAgbGlzdGVuZXJzW2tleV0gPSB0aGlzLiRhdHRycztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxpc3RlbmVycztcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgaXRlbXM6IGZ1bmN0aW9uIGl0ZW1zKCkge1xuICAgICAgdGhpcy5mb3JjZVVwZGF0ZShmYWxzZSk7XG4gICAgfSxcbiAgICBzaW1wbGVBcnJheToge1xuICAgICAgaGFuZGxlcjogZnVuY3Rpb24gaGFuZGxlcih2YWx1ZSkge1xuICAgICAgICB0aGlzLnZzY3JvbGxEYXRhLnNpbXBsZUFycmF5ID0gdmFsdWU7XG4gICAgICB9LFxuICAgICAgaW1tZWRpYXRlOiB0cnVlXG4gICAgfSxcbiAgICBkaXJlY3Rpb246IGZ1bmN0aW9uIGRpcmVjdGlvbih2YWx1ZSkge1xuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSh0cnVlKTtcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy4kX3VwZGF0ZXMgPSBbXTtcbiAgICB0aGlzLiRfdW5kZWZpbmVkU2l6ZXMgPSAwO1xuICAgIHRoaXMuJF91bmRlZmluZWRNYXAgPSB7fTtcbiAgfSxcbiAgYWN0aXZhdGVkOiBmdW5jdGlvbiBhY3RpdmF0ZWQoKSB7XG4gICAgdGhpcy52c2Nyb2xsRGF0YS5hY3RpdmUgPSB0cnVlO1xuICB9LFxuICBkZWFjdGl2YXRlZDogZnVuY3Rpb24gZGVhY3RpdmF0ZWQoKSB7XG4gICAgdGhpcy52c2Nyb2xsRGF0YS5hY3RpdmUgPSBmYWxzZTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9uU2Nyb2xsZXJSZXNpemU6IGZ1bmN0aW9uIG9uU2Nyb2xsZXJSZXNpemUoKSB7XG4gICAgICB2YXIgc2Nyb2xsZXIgPSB0aGlzLiRyZWZzLnNjcm9sbGVyO1xuXG4gICAgICBpZiAoc2Nyb2xsZXIpIHtcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLiRlbWl0KCdyZXNpemUnKTtcbiAgICB9LFxuICAgIG9uU2Nyb2xsZXJWaXNpYmxlOiBmdW5jdGlvbiBvblNjcm9sbGVyVmlzaWJsZSgpIHtcbiAgICAgIHRoaXMudlNjcm9sbFVwZGF0ZShmYWxzZSk7XG4gICAgICB0aGlzLiRlbWl0KCd2aXNpYmxlJyk7XG4gICAgfSxcbiAgICB2U2Nyb2xsVXBkYXRlOiBmdW5jdGlvbiB2U2Nyb2xsVXBkYXRlKCkge1xuICAgICAgdmFyIGZvcmNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBmYWxzZTtcbiAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICBmb3JjZTogZm9yY2VcbiAgICAgIH07XG4gICAgICB0aGlzLiRlbWl0KCd2c2Nyb2xsOnVwZGF0ZScsIGRhdGEpO1xuICAgICAgdGhpcy52U2Nyb2xsTWFwLmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhkYXRhKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZm9yY2VVcGRhdGU6IGZ1bmN0aW9uIGZvcmNlVXBkYXRlKCkge1xuICAgICAgdmFyIGNsZWFyID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB0cnVlO1xuXG4gICAgICBpZiAoY2xlYXIgfHwgdGhpcy5zaW1wbGVBcnJheSkge1xuICAgICAgICB0aGlzLnZzY3JvbGxEYXRhLnZhbGlkU2l6ZXMgPSB7fTtcbiAgICAgIH1cblxuICAgICAgdGhpcy52U2Nyb2xsVXBkYXRlKHRydWUpO1xuICAgIH0sXG4gICAgc2Nyb2xsVG9JdGVtOiBmdW5jdGlvbiBzY3JvbGxUb0l0ZW0oaW5kZXgpIHtcbiAgICAgIHZhciBzY3JvbGxlciA9IHRoaXMuJHJlZnMuc2Nyb2xsZXI7XG4gICAgICBpZiAoc2Nyb2xsZXIpIHNjcm9sbGVyLnNjcm9sbFRvSXRlbShpbmRleCk7XG4gICAgfSxcbiAgICBnZXRJdGVtU2l6ZTogZnVuY3Rpb24gZ2V0SXRlbVNpemUoaXRlbSkge1xuICAgICAgdmFyIGluZGV4ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gICAgICB2YXIgaWQgPSB0aGlzLnNpbXBsZUFycmF5ID8gaW5kZXggIT0gbnVsbCA/IGluZGV4IDogdGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pIDogaXRlbVt0aGlzLmtleUZpZWxkXTtcbiAgICAgIHJldHVybiB0aGlzLnZzY3JvbGxEYXRhLnNpemVzW2lkXSB8fCAwO1xuICAgIH0sXG4gICAgc2Nyb2xsVG9Cb3R0b206IGZ1bmN0aW9uIHNjcm9sbFRvQm90dG9tKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLiRfc2Nyb2xsaW5nVG9Cb3R0b20pIHJldHVybjtcbiAgICAgIHRoaXMuJF9zY3JvbGxpbmdUb0JvdHRvbSA9IHRydWU7XG4gICAgICB2YXIgZWwgPSB0aGlzLiRlbDsgLy8gSXRlbSBpcyBpbnNlcnRlZCB0byB0aGUgRE9NXG5cbiAgICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZWwuc2Nyb2xsVG9wID0gZWwuc2Nyb2xsSGVpZ2h0ICsgNTAwMDsgLy8gSXRlbSBzaXplcyBhcmUgY29tcHV0ZWRcblxuICAgICAgICB2YXIgY2IgPSBmdW5jdGlvbiBjYigpIHtcbiAgICAgICAgICBlbC5zY3JvbGxUb3AgPSBlbC5zY3JvbGxIZWlnaHQgKyA1MDAwO1xuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlbC5zY3JvbGxUb3AgPSBlbC5zY3JvbGxIZWlnaHQgKyA1MDAwO1xuXG4gICAgICAgICAgICBpZiAoX3RoaXMyLiRfdW5kZWZpbmVkU2l6ZXMgPT09IDApIHtcbiAgICAgICAgICAgICAgX3RoaXMyLiRfc2Nyb2xsaW5nVG9Cb3R0b20gPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShjYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gcmVuZGVyJDEoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHZhciBfY29tcG9uZW50X1JlY3ljbGVTY3JvbGxlciA9IHJlc29sdmVDb21wb25lbnQoXCJSZWN5Y2xlU2Nyb2xsZXJcIik7XG5cbiAgcmV0dXJuIG9wZW5CbG9jaygpLCBjcmVhdGVCbG9jayhfY29tcG9uZW50X1JlY3ljbGVTY3JvbGxlciwgbWVyZ2VQcm9wcyh7XG4gICAgcmVmOiBcInNjcm9sbGVyXCIsXG4gICAgaXRlbXM6ICRvcHRpb25zLml0ZW1zV2l0aFNpemUsXG4gICAgXCJtaW4taXRlbS1zaXplXCI6ICRwcm9wcy5taW5JdGVtU2l6ZSxcbiAgICBkaXJlY3Rpb246IF9jdHguZGlyZWN0aW9uLFxuICAgIFwia2V5LWZpZWxkXCI6IFwiaWRcIlxuICB9LCBfY3R4LiRhdHRycywge1xuICAgIG9uUmVzaXplOiAkb3B0aW9ucy5vblNjcm9sbGVyUmVzaXplLFxuICAgIG9uVmlzaWJsZTogJG9wdGlvbnMub25TY3JvbGxlclZpc2libGVcbiAgfSwgdG9IYW5kbGVycygkb3B0aW9ucy5saXN0ZW5lcnMpKSwge1xuICAgIGRlZmF1bHQ6IHdpdGhDdHgoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBpdGVtV2l0aFNpemUgPSBfcmVmLml0ZW0sXG4gICAgICAgICAgaW5kZXggPSBfcmVmLmluZGV4LFxuICAgICAgICAgIGFjdGl2ZSA9IF9yZWYuYWN0aXZlO1xuICAgICAgcmV0dXJuIFtyZW5kZXJTbG90KF9jdHguJHNsb3RzLCBcImRlZmF1bHRcIiwge1xuICAgICAgICBpdGVtOiBpdGVtV2l0aFNpemUuaXRlbSxcbiAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICBhY3RpdmU6IGFjdGl2ZSxcbiAgICAgICAgaXRlbVdpdGhTaXplOiBpdGVtV2l0aFNpemVcbiAgICAgIH0pXTtcbiAgICB9KSxcbiAgICBiZWZvcmU6IHdpdGhDdHgoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIFtyZW5kZXJTbG90KF9jdHguJHNsb3RzLCBcImJlZm9yZVwiKV07XG4gICAgfSksXG4gICAgYWZ0ZXI6IHdpdGhDdHgoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIFtyZW5kZXJTbG90KF9jdHguJHNsb3RzLCBcImFmdGVyXCIpXTtcbiAgICB9KSxcbiAgICBfOiAxXG4gIH0sIDE2XG4gIC8qIEZVTExfUFJPUFMgKi9cbiAgLCBbXCJpdGVtc1wiLCBcIm1pbi1pdGVtLXNpemVcIiwgXCJkaXJlY3Rpb25cIiwgXCJvblJlc2l6ZVwiLCBcIm9uVmlzaWJsZVwiXSk7XG59XG5cbnNjcmlwdCQxLnJlbmRlciA9IHJlbmRlciQxO1xuc2NyaXB0JDEuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9EeW5hbWljU2Nyb2xsZXIudnVlXCI7XG5cbnZhciBEeW5hbWljU2Nyb2xsZXJJdGVtID0ge1xuICBuYW1lOiAnRHluYW1pY1Njcm9sbGVySXRlbScsXG4gIGluamVjdDogWyd2c2Nyb2xsRGF0YScsICd2c2Nyb2xsUGFyZW50JywgJ29uVXBkYXRlU2Nyb2xsJywgJ3ZzY3JvbGxSZXNpemVPYnNlcnZlciddLFxuICBwcm9wczoge1xuICAgIGl0ZW06IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICB3YXRjaERhdGE6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgaWYgdGhlIHZpZXcgaXMgYWN0aXZlbHkgdXNlZCB0byBkaXNwbGF5IGFuIGl0ZW0uXG4gICAgICovXG4gICAgYWN0aXZlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGluZGV4OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICB9LFxuICAgIHNpemVEZXBlbmRlbmNpZXM6IHtcbiAgICAgIHR5cGU6IFtBcnJheSwgT2JqZWN0XSxcbiAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICB9LFxuICAgIGVtaXRSZXNpemU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgdGFnOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnZGl2J1xuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBpZDogZnVuY3Rpb24gaWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy52c2Nyb2xsRGF0YS5zaW1wbGVBcnJheSA/IHRoaXMuaW5kZXggOiB0aGlzLml0ZW1bdGhpcy52c2Nyb2xsRGF0YS5rZXlGaWVsZF07XG4gICAgfSxcbiAgICBzaXplOiBmdW5jdGlvbiBzaXplKCkge1xuICAgICAgcmV0dXJuIHRoaXMudnNjcm9sbERhdGEudmFsaWRTaXplc1t0aGlzLmlkXSAmJiB0aGlzLnZzY3JvbGxEYXRhLnNpemVzW3RoaXMuaWRdIHx8IDA7XG4gICAgfSxcbiAgICBmaW5hbEFjdGl2ZTogZnVuY3Rpb24gZmluYWxBY3RpdmUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5hY3RpdmUgJiYgdGhpcy52c2Nyb2xsRGF0YS5hY3RpdmU7XG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIHdhdGNoRGF0YTogJ3VwZGF0ZVdhdGNoRGF0YScsXG4gICAgaWQ6IGZ1bmN0aW9uIGlkKCkge1xuICAgICAgaWYgKCF0aGlzLnNpemUpIHtcbiAgICAgICAgdGhpcy5vbkRhdGFVcGRhdGUoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGZpbmFsQWN0aXZlOiBmdW5jdGlvbiBmaW5hbEFjdGl2ZSh2YWx1ZSkge1xuICAgICAgaWYgKCF0aGlzLnNpemUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLnZzY3JvbGxQYXJlbnQuJF91bmRlZmluZWRNYXBbdGhpcy5pZF0pIHtcbiAgICAgICAgICAgIHRoaXMudnNjcm9sbFBhcmVudC4kX3VuZGVmaW5lZFNpemVzKys7XG4gICAgICAgICAgICB0aGlzLnZzY3JvbGxQYXJlbnQuJF91bmRlZmluZWRNYXBbdGhpcy5pZF0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy52c2Nyb2xsUGFyZW50LiRfdW5kZWZpbmVkTWFwW3RoaXMuaWRdKSB7XG4gICAgICAgICAgICB0aGlzLnZzY3JvbGxQYXJlbnQuJF91bmRlZmluZWRTaXplcy0tO1xuICAgICAgICAgICAgdGhpcy52c2Nyb2xsUGFyZW50LiRfdW5kZWZpbmVkTWFwW3RoaXMuaWRdID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnZzY3JvbGxSZXNpemVPYnNlcnZlcikge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVTaXplKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy51bm9ic2VydmVTaXplKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgJiYgdGhpcy4kX3BlbmRpbmdWU2Nyb2xsVXBkYXRlID09PSB0aGlzLmlkKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgY3JlYXRlZDogZnVuY3Rpb24gY3JlYXRlZCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuJGlzU2VydmVyKSByZXR1cm47XG4gICAgdGhpcy4kX2ZvcmNlTmV4dFZTY3JvbGxVcGRhdGUgPSBudWxsO1xuICAgIHRoaXMudXBkYXRlV2F0Y2hEYXRhKCk7XG5cbiAgICBpZiAoIXRoaXMudnNjcm9sbFJlc2l6ZU9ic2VydmVyKSB7XG4gICAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChrKSB7XG4gICAgICAgIF90aGlzLiR3YXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLnNpemVEZXBlbmRlbmNpZXNba107XG4gICAgICAgIH0sIF90aGlzLm9uRGF0YVVwZGF0ZSk7XG4gICAgICB9O1xuXG4gICAgICBmb3IgKHZhciBrIGluIHRoaXMuc2l6ZURlcGVuZGVuY2llcykge1xuICAgICAgICBfbG9vcChrKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5vblVwZGF0ZVNjcm9sbCgndnNjcm9sbDp1cGRhdGUnLCB0aGlzLm9uVnNjcm9sbFVwZGF0ZSk7XG4gICAgfVxuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgIGlmICh0aGlzLnZzY3JvbGxEYXRhLmFjdGl2ZSkge1xuICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICB0aGlzLm9ic2VydmVTaXplKCk7XG4gICAgfVxuICB9LFxuICBiZWZvcmVVbm1vdW50OiBmdW5jdGlvbiBiZWZvcmVVbm1vdW50KCkge1xuICAgIHRoaXMudW5vYnNlcnZlU2l6ZSgpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgdXBkYXRlU2l6ZTogZnVuY3Rpb24gdXBkYXRlU2l6ZSgpIHtcbiAgICAgIGlmICh0aGlzLmZpbmFsQWN0aXZlKSB7XG4gICAgICAgIGlmICh0aGlzLiRfcGVuZGluZ1NpemVVcGRhdGUgIT09IHRoaXMuaWQpIHtcbiAgICAgICAgICB0aGlzLiRfcGVuZGluZ1NpemVVcGRhdGUgPSB0aGlzLmlkO1xuICAgICAgICAgIHRoaXMuJF9mb3JjZU5leHRWU2Nyb2xsVXBkYXRlID0gbnVsbDtcbiAgICAgICAgICB0aGlzLiRfcGVuZGluZ1ZTY3JvbGxVcGRhdGUgPSBudWxsO1xuICAgICAgICAgIHRoaXMuY29tcHV0ZVNpemUodGhpcy5pZCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuJF9mb3JjZU5leHRWU2Nyb2xsVXBkYXRlID0gdGhpcy5pZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHVwZGF0ZVdhdGNoRGF0YTogZnVuY3Rpb24gdXBkYXRlV2F0Y2hEYXRhKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLndhdGNoRGF0YSkge1xuICAgICAgICB0aGlzLiRfd2F0Y2hEYXRhID0gdGhpcy4kd2F0Y2goJ2RhdGEnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLm9uRGF0YVVwZGF0ZSgpO1xuICAgICAgICB9LCB7XG4gICAgICAgICAgZGVlcDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy4kX3dhdGNoRGF0YSkge1xuICAgICAgICB0aGlzLiRfd2F0Y2hEYXRhKCk7XG4gICAgICAgIHRoaXMuJF93YXRjaERhdGEgPSBudWxsO1xuICAgICAgfVxuICAgIH0sXG4gICAgb25Wc2Nyb2xsVXBkYXRlOiBmdW5jdGlvbiBvblZzY3JvbGxVcGRhdGUoX3JlZikge1xuICAgICAgdmFyIGZvcmNlID0gX3JlZi5mb3JjZTtcblxuICAgICAgLy8gSWYgbm90IGFjdGl2ZSwgc2VjaGVkdWxlIGEgc2l6ZSB1cGRhdGUgd2hlbiBpdCBiZWNvbWVzIGFjdGl2ZVxuICAgICAgaWYgKCF0aGlzLmZpbmFsQWN0aXZlICYmIGZvcmNlKSB7XG4gICAgICAgIHRoaXMuJF9wZW5kaW5nVlNjcm9sbFVwZGF0ZSA9IHRoaXMuaWQ7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLiRfZm9yY2VOZXh0VlNjcm9sbFVwZGF0ZSA9PT0gdGhpcy5pZCB8fCBmb3JjZSB8fCAhdGhpcy5zaXplKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgb25EYXRhVXBkYXRlOiBmdW5jdGlvbiBvbkRhdGFVcGRhdGUoKSB7XG4gICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICB9LFxuICAgIGNvbXB1dGVTaXplOiBmdW5jdGlvbiBjb21wdXRlU2l6ZShpZCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF90aGlzMy5pZCA9PT0gaWQpIHtcbiAgICAgICAgICB2YXIgd2lkdGggPSBfdGhpczMuJGVsLm9mZnNldFdpZHRoO1xuICAgICAgICAgIHZhciBoZWlnaHQgPSBfdGhpczMuJGVsLm9mZnNldEhlaWdodDtcblxuICAgICAgICAgIF90aGlzMy5hcHBseVNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpczMuJF9wZW5kaW5nU2l6ZVVwZGF0ZSA9IG51bGw7XG4gICAgICB9KS50aGVuKCk7XG4gICAgfSxcbiAgICBhcHBseVNpemU6IGZ1bmN0aW9uIGFwcGx5U2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICB2YXIgc2l6ZSA9IE1hdGgucm91bmQodGhpcy52c2Nyb2xsUGFyZW50LmRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJyA/IGhlaWdodCA6IHdpZHRoKTtcblxuICAgICAgaWYgKHNpemUgJiYgdGhpcy5zaXplICE9PSBzaXplKSB7XG4gICAgICAgIGlmICh0aGlzLnZzY3JvbGxQYXJlbnQuJF91bmRlZmluZWRNYXBbdGhpcy5pZF0pIHtcbiAgICAgICAgICB0aGlzLnZzY3JvbGxQYXJlbnQuJF91bmRlZmluZWRTaXplcy0tO1xuICAgICAgICAgIHRoaXMudnNjcm9sbFBhcmVudC4kX3VuZGVmaW5lZE1hcFt0aGlzLmlkXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudnNjcm9sbERhdGEuc2l6ZXNbdGhpcy5pZF0gPSBzaXplO1xuICAgICAgICB0aGlzLnZzY3JvbGxEYXRhLnZhbGlkU2l6ZXNbdGhpcy5pZF0gPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5lbWl0UmVzaXplKSB0aGlzLiRlbWl0KCdyZXNpemUnLCB0aGlzLmlkKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG9ic2VydmVTaXplOiBmdW5jdGlvbiBvYnNlcnZlU2l6ZSgpIHtcbiAgICAgIGlmICghdGhpcy52c2Nyb2xsUmVzaXplT2JzZXJ2ZXIpIHJldHVybjtcbiAgICAgIHRoaXMudnNjcm9sbFJlc2l6ZU9ic2VydmVyLm9ic2VydmUodGhpcy4kZWwucGFyZW50Tm9kZSk7XG4gICAgICB0aGlzLiRlbC5wYXJlbnROb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUpO1xuICAgIH0sXG4gICAgdW5vYnNlcnZlU2l6ZTogZnVuY3Rpb24gdW5vYnNlcnZlU2l6ZSgpIHtcbiAgICAgIGlmICghdGhpcy52c2Nyb2xsUmVzaXplT2JzZXJ2ZXIpIHJldHVybjtcbiAgICAgIHRoaXMudnNjcm9sbFJlc2l6ZU9ic2VydmVyLnVub2JzZXJ2ZSh0aGlzLiRlbC5wYXJlbnROb2RlKTtcbiAgICAgIHRoaXMuJGVsLnBhcmVudE5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZSk7XG4gICAgfSxcbiAgICBvblJlc2l6ZTogZnVuY3Rpb24gb25SZXNpemUoZXZlbnQpIHtcbiAgICAgIHZhciBfZXZlbnQkZGV0YWlsJGNvbnRlbnQgPSBldmVudC5kZXRhaWwuY29udGVudFJlY3QsXG4gICAgICAgICAgd2lkdGggPSBfZXZlbnQkZGV0YWlsJGNvbnRlbnQud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0ID0gX2V2ZW50JGRldGFpbCRjb250ZW50LmhlaWdodDtcbiAgICAgIHRoaXMuYXBwbHlTaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgIH1cbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVZOb2RlKHRoaXMudGFnLCBudWxsLCB0aGlzLiRzbG90cy5kZWZhdWx0KCkpO1xuICB9XG59O1xuXG52YXIgdmVyc2lvbiA9IFwiMC4xLjFcIjtcblxuZnVuY3Rpb24gcmVnaXN0ZXJDb21wb25lbnRzKGFwcCwgcHJlZml4KSB7XG4gIGFwcC5jb21wb25lbnQoXCJcIi5jb25jYXQocHJlZml4LCBcInJlY3ljbGUtc2Nyb2xsZXJcIiksIHNjcmlwdCk7XG4gIGFwcC5jb21wb25lbnQoXCJcIi5jb25jYXQocHJlZml4LCBcIlJlY3ljbGVTY3JvbGxlclwiKSwgc2NyaXB0KTtcbiAgYXBwLmNvbXBvbmVudChcIlwiLmNvbmNhdChwcmVmaXgsIFwiZHluYW1pYy1zY3JvbGxlclwiKSwgc2NyaXB0JDEpO1xuICBhcHAuY29tcG9uZW50KFwiXCIuY29uY2F0KHByZWZpeCwgXCJEeW5hbWljU2Nyb2xsZXJcIiksIHNjcmlwdCQxKTtcbiAgYXBwLmNvbXBvbmVudChcIlwiLmNvbmNhdChwcmVmaXgsIFwiZHluYW1pYy1zY3JvbGxlci1pdGVtXCIpLCBEeW5hbWljU2Nyb2xsZXJJdGVtKTtcbiAgYXBwLmNvbXBvbmVudChcIlwiLmNvbmNhdChwcmVmaXgsIFwiRHluYW1pY1Njcm9sbGVySXRlbVwiKSwgRHluYW1pY1Njcm9sbGVySXRlbSk7XG59XG5cbnZhciBwbHVnaW4gPSB7XG4gIHZlcnNpb246IHZlcnNpb24sXG4gIGluc3RhbGw6IGZ1bmN0aW9uIGluc3RhbGwoYXBwLCBvcHRpb25zKSB7XG4gICAgdmFyIGZpbmFsT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgIGluc3RhbGxDb21wb25lbnRzOiB0cnVlLFxuICAgICAgY29tcG9uZW50c1ByZWZpeDogJydcbiAgICB9LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIGtleSBpbiBmaW5hbE9wdGlvbnMpIHtcbiAgICAgIGlmICh0eXBlb2YgZmluYWxPcHRpb25zW2tleV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbmZpZ1trZXldID0gZmluYWxPcHRpb25zW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZpbmFsT3B0aW9ucy5pbnN0YWxsQ29tcG9uZW50cykge1xuICAgICAgcmVnaXN0ZXJDb21wb25lbnRzKGFwcCwgZmluYWxPcHRpb25zLmNvbXBvbmVudHNQcmVmaXgpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcGx1Z2luO1xuZXhwb3J0IHsgc2NyaXB0JDEgYXMgRHluYW1pY1Njcm9sbGVyLCBEeW5hbWljU2Nyb2xsZXJJdGVtLCBzY3JpcHQgYXMgUmVjeWNsZVNjcm9sbGVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD12dWUzLXZpcnR1YWwtc2Nyb2xsZXIuZXNtLmpzLm1hcFxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3Z1ZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbW9kdWxlIGV4cG9ydHMgbXVzdCBiZSByZXR1cm5lZCBmcm9tIHJ1bnRpbWUgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xucmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=