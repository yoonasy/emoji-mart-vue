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

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".vue-recycle-scroller{position:relative}.vue-recycle-scroller.direction-vertical:not(.page-mode){overflow-y:auto}.vue-recycle-scroller.direction-horizontal:not(.page-mode){overflow-x:auto}.vue-recycle-scroller.direction-horizontal{display:-ms-flexbox;display:flex}.vue-recycle-scroller__slot{-ms-flex:auto 0 0px;flex:auto 0 0}.vue-recycle-scroller__item-wrapper{-ms-flex:1;flex:1;box-sizing:border-box;overflow:hidden;position:relative}.vue-recycle-scroller.ready .vue-recycle-scroller__item-view{position:absolute;top:0;left:0;will-change:transform}.vue-recycle-scroller.direction-vertical .vue-recycle-scroller__item-wrapper{width:100%}.vue-recycle-scroller.direction-horizontal .vue-recycle-scroller__item-wrapper{height:100%}.vue-recycle-scroller.ready.direction-vertical .vue-recycle-scroller__item-view{width:100%}.vue-recycle-scroller.ready.direction-horizontal .vue-recycle-scroller__item-view{height:100%}.vue3-resize-observer{position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;border:none;background-color:transparent;pointer-events:none;display:block;overflow:hidden;opacity:0}.vue3-resize-observer object{display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1}", "",{"version":3,"sources":["webpack://./node_modules/vue3-virtual-scroller/dist/vue3-virtual-scroller.css"],"names":[],"mappings":"AAAA,sBAAsB,iBAAiB,CAAC,yDAAyD,eAAe,CAAC,2DAA2D,eAAe,CAAC,2CAA2C,mBAAW,CAAX,YAAY,CAAC,4BAA4B,mBAAY,CAAZ,aAAa,CAAC,oCAAoC,UAAM,CAAN,MAAM,CAAC,qBAAqB,CAAC,eAAe,CAAC,iBAAiB,CAAC,6DAA6D,iBAAiB,CAAC,KAAK,CAAC,MAAM,CAAC,qBAAqB,CAAC,6EAA6E,UAAU,CAAC,+EAA+E,WAAW,CAAC,gFAAgF,UAAU,CAAC,kFAAkF,WAAW,CAAC,sBAAsB,iBAAiB,CAAC,KAAK,CAAC,MAAM,CAAC,UAAU,CAAC,UAAU,CAAC,WAAW,CAAC,WAAW,CAAC,4BAA4B,CAAC,mBAAmB,CAAC,aAAa,CAAC,eAAe,CAAC,SAAS,CAAC,6BAA6B,aAAa,CAAC,iBAAiB,CAAC,KAAK,CAAC,MAAM,CAAC,WAAW,CAAC,UAAU,CAAC,eAAe,CAAC,mBAAmB,CAAC,UAAU","sourcesContent":[".vue-recycle-scroller{position:relative}.vue-recycle-scroller.direction-vertical:not(.page-mode){overflow-y:auto}.vue-recycle-scroller.direction-horizontal:not(.page-mode){overflow-x:auto}.vue-recycle-scroller.direction-horizontal{display:flex}.vue-recycle-scroller__slot{flex:auto 0 0}.vue-recycle-scroller__item-wrapper{flex:1;box-sizing:border-box;overflow:hidden;position:relative}.vue-recycle-scroller.ready .vue-recycle-scroller__item-view{position:absolute;top:0;left:0;will-change:transform}.vue-recycle-scroller.direction-vertical .vue-recycle-scroller__item-wrapper{width:100%}.vue-recycle-scroller.direction-horizontal .vue-recycle-scroller__item-wrapper{height:100%}.vue-recycle-scroller.ready.direction-vertical .vue-recycle-scroller__item-view{width:100%}.vue-recycle-scroller.ready.direction-horizontal .vue-recycle-scroller__item-view{height:100%}.vue3-resize-observer{position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;border:none;background-color:transparent;pointer-events:none;display:block;overflow:hidden;opacity:0}.vue3-resize-observer object{display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*!***************************************************!*\
  !*** ./node_modules/scrollparent/scrollparent.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
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

  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
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
      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
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
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
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
/*!**********************************************************!*\
  !*** ./node_modules/vue3-resize/dist/vue3-resize.esm.js ***!
  \**********************************************************/
/*! exports provided: default, ResizeObserver, install */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeObserver", function() { return script; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
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
    const elRef = Object(vue__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
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

    Object(vue__WEBPACK_IMPORTED_MODULE_0__["onMounted"])(() => {
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
    Object(vue__WEBPACK_IMPORTED_MODULE_0__["onBeforeUnmount"])(() => {
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
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])("div", _hoisted_1, null, 512
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicScroller", function() { return script$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicScrollerItem", function() { return DynamicScrollerItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecycleScroller", function() { return script; });
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
var script = Object(vue__WEBPACK_IMPORTED_MODULE_2__["defineComponent"])({
  name: 'RecycleScroller',
  components: {
    ResizeObserver: vue3_resize__WEBPACK_IMPORTED_MODULE_0__["ResizeObserver"]
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
  var _component_ResizeObserver = Object(vue__WEBPACK_IMPORTED_MODULE_2__["resolveComponent"])("ResizeObserver");

  var _directive_observe_visibility = Object(vue__WEBPACK_IMPORTED_MODULE_2__["resolveDirective"])("observe-visibility");

  return Object(vue__WEBPACK_IMPORTED_MODULE_2__["withDirectives"])((Object(vue__WEBPACK_IMPORTED_MODULE_2__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_2__["createBlock"])("div", {
    class: ["vue-recycle-scroller", _defineProperty({
      ready: _ctx.ready,
      'page-mode': _ctx.pageMode
    }, "direction-".concat(_ctx.direction), true)],
    onScrollPassive: _cache[2] || (_cache[2] = function () {
      return _ctx.handleScroll.apply(_ctx, arguments);
    })
  }, [_ctx.$slots.before ? (Object(vue__WEBPACK_IMPORTED_MODULE_2__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_2__["createBlock"])("div", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_2__["renderSlot"])(_ctx.$slots, "before")])) : Object(vue__WEBPACK_IMPORTED_MODULE_2__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_2__["createVNode"])("div", {
    ref: "wrapper",
    style: _defineProperty({}, _ctx.direction === 'vertical' ? 'minHeight' : 'minWidth', _ctx.totalSize + 'px'),
    class: "vue-recycle-scroller__item-wrapper"
  }, [(Object(vue__WEBPACK_IMPORTED_MODULE_2__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_2__["createBlock"])(vue__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_2__["renderList"])(_ctx.pool, function (view) {
    return Object(vue__WEBPACK_IMPORTED_MODULE_2__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_2__["createBlock"])("div", {
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
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_2__["renderSlot"])(_ctx.$slots, "default", {
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
  ), _ctx.$slots.after ? (Object(vue__WEBPACK_IMPORTED_MODULE_2__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_2__["createBlock"])("div", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_2__["renderSlot"])(_ctx.$slots, "after")])) : Object(vue__WEBPACK_IMPORTED_MODULE_2__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_2__["createVNode"])(_component_ResizeObserver, {
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
  var _component_RecycleScroller = Object(vue__WEBPACK_IMPORTED_MODULE_2__["resolveComponent"])("RecycleScroller");

  return Object(vue__WEBPACK_IMPORTED_MODULE_2__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_2__["createBlock"])(_component_RecycleScroller, Object(vue__WEBPACK_IMPORTED_MODULE_2__["mergeProps"])({
    ref: "scroller",
    items: $options.itemsWithSize,
    "min-item-size": $props.minItemSize,
    direction: _ctx.direction,
    "key-field": "id"
  }, _ctx.$attrs, {
    onResize: $options.onScrollerResize,
    onVisible: $options.onScrollerVisible
  }, Object(vue__WEBPACK_IMPORTED_MODULE_2__["toHandlers"])($options.listeners)), {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_2__["withCtx"])(function (_ref) {
      var itemWithSize = _ref.item,
          index = _ref.index,
          active = _ref.active;
      return [Object(vue__WEBPACK_IMPORTED_MODULE_2__["renderSlot"])(_ctx.$slots, "default", {
        item: itemWithSize.item,
        index: index,
        active: active,
        itemWithSize: itemWithSize
      })];
    }),
    before: Object(vue__WEBPACK_IMPORTED_MODULE_2__["withCtx"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_2__["renderSlot"])(_ctx.$slots, "before")];
    }),
    after: Object(vue__WEBPACK_IMPORTED_MODULE_2__["withCtx"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_2__["renderSlot"])(_ctx.$slots, "after")];
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

      Object(vue__WEBPACK_IMPORTED_MODULE_2__["nextTick"])(function () {
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
    return Object(vue__WEBPACK_IMPORTED_MODULE_2__["createVNode"])(this.tag, null, this.$slots.default());
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

/***/ "./src/vendor/raf-polyfill.js":
/*!************************************!*\
  !*** ./src/vendor/raf-polyfill.js ***!
  \************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9FbW9qaU1hcnQvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0Vtb2ppTWFydC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL0Vtb2ppLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9QaWNrZXIudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL1N0YXRpY1BpY2tlci52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvYW5jaG9ycy52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvY2F0ZWdvcnkudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3ByZXZpZXcudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NlYXJjaC52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2tpbnMudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy92dWUzLXZpcnR1YWwtc2Nyb2xsZXIvZGlzdC92dWUzLXZpcnR1YWwtc2Nyb2xsZXIuY3NzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL3Njcm9sbHBhcmVudC9zY3JvbGxwYXJlbnQuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvbGlzdFRvU3R5bGVzLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy92dWUzLXJlc2l6ZS9kaXN0L3Z1ZTMtcmVzaXplLmVzbS5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvdnVlMy12aXJ0dWFsLXNjcm9sbGVyL2Rpc3QvdnVlMy12aXJ0dWFsLXNjcm9sbGVyLmNzcz85ZGM4Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy92dWUzLXZpcnR1YWwtc2Nyb2xsZXIvZGlzdC92dWUzLXZpcnR1YWwtc2Nyb2xsZXIuZXNtLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL0Vtb2ppLnZ1ZT9hZGMwIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL0Vtb2ppLnZ1ZT84Y2MyIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL0Vtb2ppLnZ1ZT85MGFiIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL1BpY2tlci52dWU/MDE4ZCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9QaWNrZXIudnVlPzE5ZDMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvUGlja2VyLnZ1ZT9lMDk0Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL1N0YXRpY1BpY2tlci52dWU/M2IwNyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9TdGF0aWNQaWNrZXIudnVlP2Y2NDMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvU3RhdGljUGlja2VyLnZ1ZT80MjEyIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2FuY2hvcnMudnVlP2FlNmYiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvYW5jaG9ycy52dWU/ZjhmNyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9hbmNob3JzLnZ1ZT9lNmYwIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2NhdGVnb3J5LnZ1ZT9hYjJmIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2NhdGVnb3J5LnZ1ZT9mMzZhIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2NhdGVnb3J5LnZ1ZT80MzNkIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3ByZXZpZXcudnVlPzFiYzIiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvcHJldmlldy52dWU/MjEzMCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9wcmV2aWV3LnZ1ZT9mMmUyIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NlYXJjaC52dWU/MTA4ZiIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9zZWFyY2gudnVlPzJjOTAiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLnZ1ZT9jZmY5Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NraW5zLnZ1ZT81N2IxIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NraW5zLnZ1ZT9iNzE2Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NraW5zLnZ1ZT8xYjU0Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvcG9seWZpbGxzL3N0cmluZ0Zyb21Db2RlUG9pbnQuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3N2Z3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2RhdGEuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2Vtb2ppLWRhdGEuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2ZyZXF1ZW50bHkuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy91dGlscy9zaGFyZWQtcHJvcHMuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL3N0b3JlLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy92ZW5kb3IvcmFmLXBvbHlmaWxsLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC9leHRlcm5hbCB7XCJyb290XCI6XCJWdWVcIixcImNvbW1vbmpzMlwiOlwidnVlXCIsXCJjb21tb25qc1wiOlwidnVlXCIsXCJhbWRcIjpcInZ1ZVwifSJdLCJuYW1lcyI6WyJfU3RyaW5nIiwiU3RyaW5nIiwiZnJvbUNvZGVQb2ludCIsInN0cmluZ0Zyb21Db2RlUG9pbnQiLCJNQVhfU0laRSIsImNvZGVVbml0cyIsImhpZ2hTdXJyb2dhdGUiLCJsb3dTdXJyb2dhdGUiLCJpbmRleCIsImxlbmd0aCIsImFyZ3VtZW50cyIsInJlc3VsdCIsImNvZGVQb2ludCIsIk51bWJlciIsImlzRmluaXRlIiwiTWF0aCIsImZsb29yIiwiUmFuZ2VFcnJvciIsInB1c2giLCJmcm9tQ2hhckNvZGUiLCJhcHBseSIsIlNWR3MiLCJhY3Rpdml0eSIsImN1c3RvbSIsImZsYWdzIiwiZm9vZHMiLCJuYXR1cmUiLCJvYmplY3RzIiwic21pbGV5cyIsInBlb3BsZSIsInBsYWNlcyIsInJlY2VudCIsInN5bWJvbHMiLCJtYXBwaW5nIiwibmFtZSIsInVuaWZpZWQiLCJub25fcXVhbGlmaWVkIiwiaGFzX2ltZ19hcHBsZSIsImhhc19pbWdfZ29vZ2xlIiwiaGFzX2ltZ190d2l0dGVyIiwiaGFzX2ltZ19mYWNlYm9vayIsImtleXdvcmRzIiwic2hlZXQiLCJlbW90aWNvbnMiLCJ0ZXh0Iiwic2hvcnRfbmFtZXMiLCJhZGRlZF9pbiIsImJ1aWxkU2VhcmNoIiwiZW1vamkiLCJzZWFyY2giLCJhZGRUb1NlYXJjaCIsInN0cmluZ3MiLCJzcGxpdCIsIkFycmF5IiwiaXNBcnJheSIsImZvckVhY2giLCJzdHJpbmciLCJzIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwiam9pbiIsImNvbXByZXNzIiwiZmlsdGVyIiwic2hvcnRfbmFtZSIsInNoZWV0X3giLCJzaGVldF95IiwicGFyc2VJbnQiLCJrZXkiLCJ2YWx1ZSIsImRlZXBGcmVlemUiLCJvYmplY3QiLCJwcm9wTmFtZXMiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiZnJlZXplIiwidW5jb21wcmVzcyIsImRhdGEiLCJjb21wcmVzc2VkIiwiaWQiLCJlbW9qaXMiLCJ1bnNoaWZ0IiwidG9GaXhlZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJTSEVFVF9DT0xVTU5TIiwiQ09MT05TX1JFR0VYIiwiU0tJTlMiLCJFbW9qaUluZGV4IiwiZW1vamlzVG9TaG93RmlsdGVyIiwiaW5jbHVkZSIsImV4Y2x1ZGUiLCJyZWNlbnRMZW5ndGgiLCJfZGF0YSIsIl9lbW9qaXNGaWx0ZXIiLCJfaW5jbHVkZSIsIl9leGNsdWRlIiwiX2N1c3RvbSIsIl9yZWNlbnQiLCJmcmVxdWVudGx5IiwiZ2V0IiwiX2Vtb2ppcyIsIl9uYXRpdmVFbW9qaXMiLCJfZW1vdGljb25zIiwiX2NhdGVnb3JpZXMiLCJfcmVjZW50Q2F0ZWdvcnkiLCJfY3VzdG9tQ2F0ZWdvcnkiLCJfc2VhcmNoSW5kZXgiLCJidWlsZEluZGV4IiwiYWxsQ2F0ZWdvcmllcyIsImNhdGVnb3JpZXMiLCJpdGVtIiwiaW5jbHVkZXMiLCJzb3J0IiwiYSIsImIiLCJpbmRleEEiLCJpbmRleEIiLCJjYXRlZ29yeURhdGEiLCJpc0NhdGVnb3J5TmVlZGVkIiwiY2F0ZWdvcnkiLCJlbW9qaUlkIiwiYWRkRW1vamkiLCJjdXN0b21FbW9qaSIsImFkZEN1c3RvbUVtb2ppIiwibWFwIiwiaGFzRW1vamkiLCJza2luIiwibWF0Y2hlcyIsIm1hdGNoIiwiYWxpYXNlcyIsImhhc093blByb3BlcnR5IiwiZW1vamlPYmplY3QiLCJnZXRTa2luIiwiRXJyb3IiLCJrZXlzIiwidW5pY29kZUVtb2ppIiwibWF4UmVzdWx0cyIsInZhbHVlcyIsImFsbFJlc3VsdHMiLCJjdXJyZW50SW5kZXgiLCJjaGFySW5kZXgiLCJjaGFyIiwicmVzdWx0cyIsInNjb3JlcyIsInN1YiIsInN1YnN0ciIsInN1YkluZGV4Iiwic2NvcmUiLCJhU2NvcmUiLCJiU2NvcmUiLCJpbnRlcnNlY3QiLCJzbGljZSIsImVtb2ppRGF0YSIsImFzc2lnbiIsIkVtb2ppRGF0YSIsImlzRW1vamlOZWVkZWQiLCJuYXRpdmUiLCJfc2tpbnMiLCJpZHgiLCJlbW90aWNvbiIsImNhdGVnb3J5X2lkIiwiaXNJbmNsdWRlZCIsImlzRXhjbHVkZWQiLCJza2luX3ZhcmlhdGlvbnMiLCJza2luSWR4Iiwic2tpbktleSIsInZhcmlhdGlvbkRhdGEiLCJza2luRGF0YSIsImsiLCJfc2FuaXRpemVkIiwic2FuaXRpemUiLCJtdWx0aXBseSIsIngiLCJyb3VuZCIsInkiLCJFbW9qaVZpZXciLCJzZXQiLCJmYWxsYmFjayIsImVtb2ppVG9vbHRpcCIsImVtb2ppU2l6ZSIsIl9lbW9qaSIsIl9uYXRpdmUiLCJfc2tpbiIsIl9zZXQiLCJfZmFsbGJhY2siLCJjYW5SZW5kZXIiLCJfY2FuUmVuZGVyIiwiY3NzQ2xhc3MiLCJfY3NzQ2xhc3MiLCJjc3NTdHlsZSIsIl9jc3NTdHlsZSIsImNvbnRlbnQiLCJfY29udGVudCIsInRpdGxlIiwiX2lzQ3VzdG9tIiwiX2lzTmF0aXZlIiwiX2hhc0Vtb2ppIiwiX2Vtb2ppVHlwZSIsImJhY2tncm91bmRJbWFnZSIsImdldEVtb2ppIiwiaW1hZ2VVcmwiLCJiYWNrZ3JvdW5kU2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiZ2V0UG9zaXRpb24iLCJmb250U2l6ZSIsImhhc0ltYWdlIiwidW5kZWZpbmVkIiwic2tpbl90b25lIiwiY29sb25zIiwidW5pZmllZFRvTmF0aXZlIiwiREVGQVVMVFMiLCJpbml0aWFsaXplZCIsImRlZmF1bHRzIiwiaW5pdCIsInN0b3JlIiwiYWRkIiwibWF4TnVtYmVyIiwiZGVmYXVsdExlbmd0aCIsIm1pbiIsImkiLCJxdWFudGl0eSIsImZyZXF1ZW50bHlLZXlzIiwic29ydGVkIiwicmV2ZXJzZSIsInNsaWNlZCIsImxhc3QiLCJwb3AiLCJ1bmljb2RlcyIsImNvZGVQb2ludHMiLCJ1IiwidW5pcSIsImFyciIsInJlZHVjZSIsImFjYyIsInVuaXFBIiwidW5pcUIiLCJkZWVwTWVyZ2UiLCJvIiwib3JpZ2luYWxWYWx1ZSIsIm1lYXN1cmVTY3JvbGxiYXIiLCJkb2N1bWVudCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsIm92ZXJmbG93IiwicG9zaXRpb24iLCJ0b3AiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzY3JvbGxiYXJXaWR0aCIsIm9mZnNldFdpZHRoIiwiY2xpZW50V2lkdGgiLCJyZW1vdmVDaGlsZCIsIkVtb2ppUHJvcHMiLCJ0eXBlIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJ0b29sdGlwIiwiRnVuY3Rpb24iLCJyZXF1aXJlZCIsInNpemUiLCJQaWNrZXJQcm9wcyIsInBlckxpbmUiLCJtYXhTZWFyY2hSZXN1bHRzIiwiY29sb3IiLCJkZWZhdWx0U2tpbiIsImF1dG9Gb2N1cyIsImkxOG4iLCJzaG93UHJldmlldyIsInNob3dTZWFyY2giLCJzaG93Q2F0ZWdvcmllcyIsInNob3dTa2luVG9uZXMiLCJpbmZpbml0ZVNjcm9sbCIsInBpY2tlclN0eWxlcyIsIk5BTUVTUEFDRSIsIl9KU09OIiwiSlNPTiIsImlzTG9jYWxTdG9yYWdlU3VwcG9ydGVkIiwid2luZG93IiwiZ2V0dGVyIiwic2V0dGVyIiwic2V0SGFuZGxlcnMiLCJoYW5kbGVycyIsInNldE5hbWVzcGFjZSIsIm5hbWVzcGFjZSIsInVwZGF0ZSIsInN0YXRlIiwibG9jYWxTdG9yYWdlIiwic3RyaW5naWZ5IiwiZSIsInBhcnNlIiwiaXNXaW5kb3dBdmFpbGFibGUiLCJsYXN0VGltZSIsInZlbmRvcnMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwiZWxlbWVudCIsImN1cnJUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJ0aW1lVG9DYWxsIiwibWF4Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0EsaURBQWlELGdCQUFnQjtBQUNqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQzs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7OztBQ05BO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCOzs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFH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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsd0NBQXdDLFNBQVM7O0FBRWpEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpREFBaUQsZ0JBQWdCO0FBQ2pFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwRkFBMEYsYUFBYTtBQUN2RztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7OztBQUdSO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU8sNkJBQTZCOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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O0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxNQUFNLG9EQUFRO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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QUFRLEdBQUcsSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBQWY7QUFDQSxRQUFJQyxVQUFVLEdBQUdoUyxJQUFJLENBQUNpUyxHQUFMLENBQVMsQ0FBVCxFQUFZLE1BQU1KLFFBQVEsR0FBR04sUUFBakIsQ0FBWixDQUFqQjtBQUNBLFFBQUl4TixFQUFFLEdBQUcwTSxNQUFNLENBQUN5QixVQUFQLENBQWtCLFlBQVc7QUFDcENQLGNBQVEsQ0FBQ0UsUUFBUSxHQUFHRyxVQUFaLENBQVI7QUFDRCxLQUZRLEVBRU5BLFVBRk0sQ0FBVDtBQUlBVCxZQUFRLEdBQUdNLFFBQVEsR0FBR0csVUFBdEI7QUFDQSxXQUFPak8sRUFBUDtBQUNELEdBVEQ7QUFXRixNQUFJLENBQUMwTSxNQUFNLENBQUNpQixvQkFBWixFQUNFakIsTUFBTSxDQUFDaUIsb0JBQVAsR0FBOEIsVUFBUzNOLEVBQVQsRUFBYTtBQUN6Q29PLGdCQUFZLENBQUNwTyxFQUFELENBQVo7QUFDRCxHQUZEO0FBR0gsQ0E1QkQsRUFERixDOzs7Ozs7Ozs7OztBQ1RBLGlEIiwiZmlsZSI6ImVtb2ppLW1hcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJ2dWVcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1widnVlXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkVtb2ppTWFydFwiXSA9IGZhY3RvcnkocmVxdWlyZShcInZ1ZVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiRW1vamlNYXJ0XCJdID0gZmFjdG9yeShyb290W1wiVnVlXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3Z1ZV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgYXJyMltpXSA9IGFycltpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlczsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWRcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7IiwiZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2YyKG9iaik7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mMihTeW1ib2wuaXRlcmF0b3IpID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiPHRlbXBsYXRlPlxuICA8c3BhblxuICAgIHYtaWY9XCJ2aWV3LmNhblJlbmRlclwiXG4gICAgOnRpdGxlPVwidmlldy50aXRsZVwiXG4gICAgOmRhdGEtdGl0bGU9XCJ0aXRsZVwiXG4gICAgY2xhc3M9XCJlbW9qaS1tYXJ0LWVtb2ppXCJcbiAgICBAbW91c2VlbnRlcj1cIm9uTW91c2VFbnRlclwiXG4gICAgQG1vdXNlbGVhdmU9XCJvbk1vdXNlTGVhdmVcIlxuICAgIEBjbGljaz1cIm9uQ2xpY2tcIlxuICA+XG4gICAgPHNwYW4gOmNsYXNzPVwidmlldy5jc3NDbGFzc1wiIDpzdHlsZT1cInZpZXcuY3NzU3R5bGVcIj57e1xuICAgICAgdmlldy5jb250ZW50XG4gICAgfX08L3NwYW4+XG4gIDwvc3Bhbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBFbW9qaVByb3BzIH0gZnJvbSAnLi4vdXRpbHMvc2hhcmVkLXByb3BzJ1xuaW1wb3J0IHsgRW1vamlWaWV3IH0gZnJvbSAnLi4vdXRpbHMvZW1vamktZGF0YSdcbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgY29tcHV0ZWQsIHJlZiB9IGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ0Vtb2ppJyxcblxuICBwcm9wczoge1xuICAgIC4uLkVtb2ppUHJvcHMsXG4gICAgZGF0YToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgfSxcblxuICBlbWl0czogWydtb3VzZWVudGVyJywgJ21vdXNlbGVhdmUnLCAnY2xpY2snXSxcblxuICBzZXR1cChwcm9wcywgeyBlbWl0IH0pIHtcbiAgICBjb25zdCBlbW9qaU9iamVjdCA9IGNvbXB1dGVkKCgpID0+IHR5cGVvZiBwcm9wcy5lbW9qaSA9PSAnc3RyaW5nJ1xuICAgICAgPyBwcm9wcy5kYXRhLmZpbmRFbW9qaShwcm9wcy5lbW9qaSlcbiAgICAgIDogcHJvcHMuZW1vamkpXG5cbiAgICBjb25zdCB2aWV3ID0gY29tcHV0ZWQoKCkgPT4gbmV3IEVtb2ppVmlldyhcbiAgICAgIGVtb2ppT2JqZWN0LnZhbHVlLFxuICAgICAgcHJvcHMuc2tpbixcbiAgICAgIHByb3BzLnNldCxcbiAgICAgIHByb3BzLm5hdGl2ZSxcbiAgICAgIHByb3BzLmZhbGxiYWNrLFxuICAgICAgcHJvcHMudG9vbHRpcCxcbiAgICAgIHByb3BzLnNpemUsXG4gICAgKSlcblxuICAgIGNvbnN0IHNhbml0aXplZERhdGEgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICByZXR1cm4gZW1vamlPYmplY3QudmFsdWUuX3Nhbml0aXplZFxuICAgIH0pXG5cbiAgICBjb25zdCB0aXRsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiBwcm9wcy50b29sdGlwID8gZW1vamlPYmplY3QudmFsdWUuc2hvcnRfbmFtZSA6IG51bGxcbiAgICB9KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHZpZXcsXG4gICAgICB0aXRsZSxcbiAgICAgIG9uQ2xpY2s6ICgpID0+IGVtaXQoJ2NsaWNrJywgZW1vamlPYmplY3QudmFsdWUpLFxuICAgICAgb25Nb3VzZUVudGVyOigpID0+IGVtaXQoJ21vdXNlZW50ZXInLCBlbW9qaU9iamVjdC52YWx1ZSksXG4gICAgICBvbk1vdXNlTGVhdmU6KCkgPT4gZW1pdCgnbW91c2VsZWF2ZScsIGVtb2ppT2JqZWN0LnZhbHVlKSxcbiAgICAgIGVtb2ppT2JqZWN0LCAvLyB1c2UgamVzdCB1bml0XG4gICAgICBzYW5pdGl6ZWREYXRhLCAvLyB1c2UgamVzdCB1bml0XG4gICAgfVxuICB9XG59KVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0XCIgOnN0eWxlPVwiY3VzdG9tU3R5bGVzXCI+XG4gICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtYmFyIGVtb2ppLW1hcnQtYmFyLWFuY2hvcnNcIiB2LWlmPVwic2hvd0NhdGVnb3JpZXNcIj5cbiAgICAgIDxhbmNob3JzXG4gICAgICAgIDppMThuPVwibWVyZ2VkSTE4blwiXG4gICAgICAgIDpjb2xvcj1cImNvbG9yXCJcbiAgICAgICAgOmNhdGVnb3JpZXM9XCJjYXRlZ29yaWVzXCJcbiAgICAgICAgOmFjdGl2ZS1jYXRlZ29yeT1cImFjdGl2ZUNhdGVnb3J5XCJcbiAgICAgICAgQGNoYW5nZT1cIm9uQW5jaG9yQ2xpY2tcIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cblxuICAgIDxzbG90XG4gICAgICBuYW1lPVwic2VhcmNoVGVtcGxhdGVcIlxuICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgIDppMThuPVwiaTE4blwiXG4gICAgICA6YXV0by1mb2N1cz1cImF1dG9Gb2N1c1wiXG4gICAgICA6b24tc2VhcmNoPVwib25TZWFyY2hcIlxuICAgID5cbiAgICAgIDxzZWFyY2hcbiAgICAgICAgdi1pZj1cInNob3dTZWFyY2hcIlxuICAgICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgICA6aTE4bj1cIm1lcmdlZEkxOG5cIlxuICAgICAgICA6YXV0by1mb2N1cz1cImF1dG9Gb2N1c1wiXG4gICAgICAgIDpvbi1zZWFyY2g9XCJvblNlYXJjaFwiXG4gICAgICAgIEBzZWFyY2g9XCJvblNlYXJjaFwiXG4gICAgICAvPlxuICAgIDwvc2xvdD5cblxuICAgIDxjYXRlZ29yeVxuICAgICAgdi1zaG93PVwic2VhcmNoRW1vamlzXCJcbiAgICAgIGNsYXNzPVwiZW1vamktbWFydC1zZWFyY2gtcmVzdWx0c1wiXG4gICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgOmkxOG49XCJtZXJnZWRJMThuXCJcbiAgICAgIGlkPVwic2VhcmNoXCJcbiAgICAgIG5hbWU9XCJTZWFyY2hcIlxuICAgICAgOmVtb2ppcz1cInNlYXJjaEVtb2ppc1wiXG4gICAgICA6ZW1vamktcHJvcHM9XCJlbW9qaVByb3BzXCJcbiAgICAvPlxuICAgIDxEeW5hbWljU2Nyb2xsZXJcbiAgICAgIHYtc2hvdz1cIiFzZWFyY2hFbW9qaXNcIlxuICAgICAgcmVmPVwiZHluU2Nyb2xsZXJSZWZcIlxuICAgICAgOml0ZW1zPVwic2Nyb2xsZXJDYXRlZ29yaWVzXCJcbiAgICAgIDptaW4taXRlbS1zaXplPVwiNjBcIlxuICAgICAgY2xhc3M9XCJzY3JvbGxlclwiXG4gICAgICA6YnVmZmVyPVwiNDAwXCJcbiAgICAgIGtleS1maWVsZD1cImlkXCJcbiAgICAgIDplbWl0LXVwZGF0ZT1cInRydWVcIlxuICAgICAgQHVwZGF0ZT1cIm9uU2Nyb2xsVXBkYXRlXCJcbiAgICA+XG4gICAgICA8dGVtcGxhdGUgI2RlZmF1bHQ9XCJzY29wZVwiPlxuICAgICAgICA9PT09PT09PT09IHt7IHNjb3BlIH19ID09PT09PT09XG48IS0tICAgICAgICA8RHluYW1pY1Njcm9sbGVySXRlbSA6aXRlbT1cIml0ZW1cIiA6YWN0aXZlPVwiYWN0aXZlXCIgOmRhdGEtaW5kZXg9XCJpbmRleFwiPi0tPlxuPCEtLSAgICAgICAgICA8Q2F0ZWdvcnktLT5cbjwhLS0gICAgICAgICAgICB2LXNob3c9XCJ0cnVlXCItLT5cbjwhLS0gICAgICAgICAgICA6aTE4bj1cIml0ZW0ubWVyZ2VkSTE4blwiLS0+XG48IS0tICAgICAgICAgICAgOmlkPVwiaXRlbS5jYXRlZ29yeS5pZFwiLS0+XG48IS0tICAgICAgICAgICAgOm5hbWU9XCJpdGVtLmNhdGVnb3J5Lm5hbWVcIi0tPlxuPCEtLSAgICAgICAgICAgIDplbW9qaXM9XCJpdGVtLmNhdGVnb3J5LmVtb2ppc1wiLS0+XG48IS0tICAgICAgICAgICAgOmVtb2ppLXByb3BzPVwiaXRlbS5lbW9qaVByb3BzXCItLT5cbjwhLS0gICAgICAgICAgLz4tLT5cbjwhLS0gICAgICAgIDwvRHluYW1pY1Njcm9sbGVySXRlbT4tLT5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9EeW5hbWljU2Nyb2xsZXI+XG5cbiAgICA8c2xvdFxuICAgICAgbmFtZT1cInByZXZpZXdUZW1wbGF0ZVwiXG4gICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgOnRpdGxlPVwidGl0bGVcIlxuICAgICAgOmVtb2ppPVwicHJldmlld0Vtb2ppXCJcbiAgICAgIDppZGxlLWVtb2ppPVwiaWRsZUVtb2ppXCJcbiAgICAgIDpzaG93LXNraW4tdG9uZXM9XCJzaG93U2tpblRvbmVzXCJcbiAgICAgIDplbW9qaS1wcm9wcz1cImVtb2ppUHJvcHNcIlxuICAgICAgOnNraW4tcHJvcHM9XCJza2luUHJvcHNcIlxuICAgICAgOm9uLXNraW4tY2hhbmdlPVwib25Ta2luQ2hhbmdlXCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1iYXIgZW1vamktbWFydC1iYXItcHJldmlld1wiIHYtaWY9XCJzaG93UHJldmlld1wiPlxuICAgICAgICA8cHJldmlld1xuICAgICAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICAgICAgOnRpdGxlPVwidGl0bGVcIlxuICAgICAgICAgIDplbW9qaT1cInByZXZpZXdFbW9qaVwiXG4gICAgICAgICAgOmlkbGUtZW1vamk9XCJpZGxlRW1vamlcIlxuICAgICAgICAgIDpzaG93LXNraW4tdG9uZXM9XCJzaG93U2tpblRvbmVzXCJcbiAgICAgICAgICA6ZW1vamktcHJvcHM9XCJlbW9qaVByb3BzXCJcbiAgICAgICAgICA6c2tpbi1wcm9wcz1cInNraW5Qcm9wc1wiXG4gICAgICAgICAgOm9uLXNraW4tY2hhbmdlPVwib25Ta2luQ2hhbmdlXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2xvdD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0ICcuLi92ZW5kb3IvcmFmLXBvbHlmaWxsJ1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3V0aWxzL3N0b3JlJ1xuaW1wb3J0IGZyZXF1ZW50bHkgZnJvbSAnLi4vdXRpbHMvZnJlcXVlbnRseSdcbmltcG9ydCB7IGRlZXBNZXJnZSwgbWVhc3VyZVNjcm9sbGJhciB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgUGlja2VyUHJvcHMgfSBmcm9tICcuLi91dGlscy9zaGFyZWQtcHJvcHMnXG5pbXBvcnQgQW5jaG9ycyBmcm9tICcuL2FuY2hvcnMnXG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSAnLi9jYXRlZ29yeSdcbmltcG9ydCBQcmV2aWV3IGZyb20gJy4vcHJldmlldydcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9zZWFyY2gnXG5cbi8qXG4gKiBOb3RlIGFib3V0IGBidWZmZXJgIHNldHRpbmcgZm9yIER5bmFtaWNTY3JvbGxlcjogdGhpcyBpcyBhXG4gKiBmaXggZm9yICM0OSAtIHdoZW4gY2xpY2tpbmcgb24gdGhlIFwiRmxhZ3NcIiBjYXRlZ29yeSBmb3IgdGhlIGZpcnN0XG4gKiB0aW1lLCB0aGUgY2F0ZWdvcnkgaXMgbm90IHNjcm9sbGVkIHRvIHRoZSB0b3Agb2YgdGhlIGNvbXBvbmVudC5cbiAqIFRoaXMgaXMgYmVjYXVzZSB0aGUgbGFzdCBjYXRlZ29yeSBzaXplIGlzIG5vdCBjYWxjdWxhdGVkIHlldCBhbmRcbiAqIHZpcnR1YWwgc2Nyb2xsZXIgdGFrZXMgJ21pbkl0ZW1TaXplJyBhcyBjYXRlZ29yeSBoZWlnaHQuXG4gKlxuICogVmlydHVhbCBzY3JvbGxlciAoUmVjeWNsZVNjcm9sbGVyIGNvbXBvbmVudCkgdXNlcyBgYnVmZmVyYCB2YWx1ZVxuICogdG8gIGRlY2lkZSBob3cgbWFueSBjb21wb25lbnRzIHRvIHJlbmRlciBpbnRpdGlhbGx5IGRlcGVuZGluZyBvblxuICogdGhlIHNjcm9sbCBhcmVhIHNpemUgKyBidWZmZXIqMiAoYW5kIGFsbCBjYXRlZ29yaWVzIGluaXRpYWxseVxuICogaGF2ZSBtaW4gc2l6ZSwgNjBweCkuXG4gKlxuICogQnkgaW5jcmVhc2luZyBidWZmZXIgdG8gNDAwcHgsIHdlIG1ha2UgdGhlIHNjcm9sbGVyIHRvIHBlcmZvcm1cbiAqIHNpemUgY2FsY3VsYXRpb24gZm9yIGFsbCBjYXRlZ29yaWVzIGFuZCB0aGUgZm9sbG93aW5nXG4gKiBzY3JvbGxUb0l0ZW0oKSBjYWxscyB3b3JrIGNvcnJlY3RseS5cbiAqL1xuXG5pbXBvcnQgeyBEeW5hbWljU2Nyb2xsZXIsIER5bmFtaWNTY3JvbGxlckl0ZW0gfSBmcm9tICd2dWUzLXZpcnR1YWwtc2Nyb2xsZXInXG5pbXBvcnQgJ3Z1ZTMtdmlydHVhbC1zY3JvbGxlci9kaXN0L3Z1ZTMtdmlydHVhbC1zY3JvbGxlci5jc3MnXG5cbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgY29tcHV0ZWQsIHJlZiB9IGZyb20gJ3Z1ZSdcblxuY29uc3QgSTE4TiA9IHtcbiAgc2VhcmNoOiAnU2VhcmNoJyxcbiAgbm90Zm91bmQ6ICdObyBFbW9qaSBGb3VuZCcsXG4gIGNhdGVnb3JpZXM6IHtcbiAgICBzZWFyY2g6ICdTZWFyY2ggUmVzdWx0cycsXG4gICAgcmVjZW50OiAnRnJlcXVlbnRseSBVc2VkJyxcbiAgICBzbWlsZXlzOiAnU21pbGV5cyAmIEVtb3Rpb24nLFxuICAgIHBlb3BsZTogJ1Blb3BsZSAmIEJvZHknLFxuICAgIG5hdHVyZTogJ0FuaW1hbHMgJiBOYXR1cmUnLFxuICAgIGZvb2RzOiAnRm9vZCAmIERyaW5rJyxcbiAgICBhY3Rpdml0eTogJ0FjdGl2aXR5JyxcbiAgICBwbGFjZXM6ICdUcmF2ZWwgJiBQbGFjZXMnLFxuICAgIG9iamVjdHM6ICdPYmplY3RzJyxcbiAgICBzeW1ib2xzOiAnU3ltYm9scycsXG4gICAgZmxhZ3M6ICdGbGFncycsXG4gICAgY3VzdG9tOiAnQ3VzdG9tJyxcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ1BpY2tlcicsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi5QaWNrZXJQcm9wcyxcbiAgICBkYXRhOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICB9LFxuXG4gIGNvbXBvbmVudHM6IHtcbiAgICBBbmNob3JzLFxuICAgIENhdGVnb3J5LFxuICAgIFByZXZpZXcsXG4gICAgU2VhcmNoLFxuICAgIER5bmFtaWNTY3JvbGxlcixcbiAgICBEeW5hbWljU2Nyb2xsZXJJdGVtLFxuICB9LFxuXG4gIGVtaXRzOiBbJ3NlbGVjdCcsICdza2luLWNoYW5nZSddLFxuXG4gIHNldHVwKHByb3BzLCB7IGVtaXQgfSkge1xuICAgIGxldCBza2lwU2Nyb2xsVXBkYXRlID0gZmFsc2VcbiAgICBsZXQgY2F0ZWdvcmllcyA9IFsuLi5wcm9wcy5kYXRhLmNhdGVnb3JpZXMoKV1cblxuICAgIGNvbnN0IHByZXZpZXdFbW9qaSA9IHJlZihudWxsKVxuICAgIGNvbnN0IHNlYXJjaEVtb2ppcyA9IHJlZihudWxsKVxuICAgIGNvbnN0IGR5blNjcm9sbGVyUmVmID0gcmVmKG51bGwpXG5cbiAgICBjYXRlZ29yaWVzID0gY2F0ZWdvcmllcy5maWx0ZXIoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkuZW1vamlzLmxlbmd0aCA+IDApXG4gICAgY2F0ZWdvcmllc1swXS5maXJzdCA9IHRydWVcbiAgICBPYmplY3QuZnJlZXplKGNhdGVnb3JpZXMpXG5cbiAgICBjb25zdCBhY3RpdmVDYXRlZ29yeSA9IHJlZihjYXRlZ29yaWVzWzBdKVxuXG4gICAgY29uc3QgY2FsY3VsYXRlV2lkdGggPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICByZXR1cm4gcHJvcHMucGVyTGluZSAqIChwcm9wcy5lbW9qaVNpemUgKyAxMikgKyAxMiArIDIgKyBtZWFzdXJlU2Nyb2xsYmFyKClcbiAgICB9KVxuXG4gICAgY29uc3QgYWN0aXZlU2tpbiA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnNraW4gfHwgc3RvcmUuZ2V0KCdza2luJykgfHwgcHJvcHMuZGVmYXVsdFNraW4pXG5cbiAgICBjb25zdCBjdXN0b21TdHlsZXMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aDogY2FsY3VsYXRlV2lkdGgudmFsdWUgKyAncHgnLFxuICAgICAgICAuLi5wcm9wcy5waWNrZXJTdHlsZXMsXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGVtb2ppUHJvcHMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYXRpdmU6IHByb3BzLm5hdGl2ZSxcbiAgICAgICAgc2tpbjogYWN0aXZlU2tpbi52YWx1ZSxcbiAgICAgICAgc2V0OiBwcm9wcy5zZXQsXG4gICAgICAgIGVtb2ppVG9vbHRpcDogcHJvcHMuZW1vamlUb29sdGlwLFxuICAgICAgICBlbW9qaVNpemU6IHByb3BzLmVtb2ppU2l6ZSxcbiAgICAgICAgb25FbnRlcjogb25FbW9qaUVudGVyLFxuICAgICAgICBvbkxlYXZlOiBvbkVtb2ppTGVhdmUsXG4gICAgICAgIG9uQ2xpY2s6IG9uRW1vamlDbGljayxcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3Qgc2tpblByb3BzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2tpbjogYWN0aXZlU2tpbi52YWx1ZSxcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgbWVyZ2VkSTE4biA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiBPYmplY3QuZnJlZXplKGRlZXBNZXJnZShJMThOLCBwcm9wcy5pMThuKSlcbiAgICB9KVxuXG4gICAgY29uc3Qgc2Nyb2xsZXJDYXRlZ29yaWVzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgbGV0IGlkID0gMFxuICAgICAgcmV0dXJuIGNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiBpZCsrLFxuICAgICAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeSxcbiAgICAgICAgICBzaG93OlxuICAgICAgICAgICAgIXNlYXJjaEVtb2ppcy52YWx1ZSAmJlxuICAgICAgICAgICAgKHByb3BzLmluZmluaXRlU2Nyb2xsIHx8IGNhdGVnb3J5LmlkID09PSBhY3RpdmVDYXRlZ29yeS52YWx1ZS5pZCksXG4gICAgICAgICAgbWVyZ2VkSTE4bjogbWVyZ2VkSTE4bi52YWx1ZSxcbiAgICAgICAgICBkYXRhOiBwcm9wcy5kYXRhLFxuICAgICAgICAgIGVtb2ppc0xlbmd0aDogY2F0ZWdvcnkuZW1vamlzLmxlbmd0aCxcbiAgICAgICAgICBlbW9qaVByb3BzOiBlbW9qaVByb3BzLnZhbHVlLFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBjb25zdCBpZGxlRW1vamkgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gcHJvcHMuZGF0YS5lbW9qaShwcm9wcy5lbW9qaSlcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAnRGVmYXVsdCBwcmV2aWV3IGVtb2ppIGAnICtcbiAgICAgICAgICBwcm9wcy5lbW9qaSArXG4gICAgICAgICAgJ2AgaXMgbm90IGF2YWlsYWJsZSwgY2hlY2sgdGhlIFBpY2tlciBgZW1vamlgIHByb3BlcnR5JyxcbiAgICAgICAgICBlLFxuICAgICAgICApXG4gICAgICAgIHJldHVybiBwcm9wcy5kYXRhLmZpcnN0RW1vamkoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNvbnN0IG9uU2Nyb2xsVXBkYXRlID0gKHN0YXJ0SW5kZXgsIGVuZEluZGV4KSA9PiB7XG4gICAgICBpZiAoc2tpcFNjcm9sbFVwZGF0ZSkge1xuICAgICAgICBza2lwU2Nyb2xsVXBkYXRlID0gZmFsc2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFRoZSBgZW5kSW5kZXgtMmAgc2VlbXMgdG8gd29yaywgYnV0IHRoaXMgZGVwZW5kcyBvbiB0aGUgaW50ZXJuYWxzXG4gICAgICAgIC8vIG9mIHRoZSB2aXJ0dWFsIHNjcm9sbGVyLCBJIGRpZG4ndCBvYnNlcnZlIGl0IHRvIGJlIGxlc3MgdGhhbiAwLFxuICAgICAgICAvLyBidXQganVzdCBmb3IgdGhlIGNhc2UsIHdlIGFzbG8gaGF2ZSBhIGZhbGxiYWNrIHRvIGAwYCBoZXJlLlxuICAgICAgICBsZXQgYWN0aXZlSW5kZXggPSBlbmRJbmRleCAtIDIgPiAwID8gZW5kSW5kZXggLSAyIDogMFxuICAgICAgICBhY3RpdmVDYXRlZ29yeS52YWx1ZSA9IGNhdGVnb3JpZXNbYWN0aXZlSW5kZXhdXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG9uQW5jaG9yQ2xpY2sgPSAoY2F0ZWdvcnkpID0+IHtcbiAgICAgIGxldCBpID0gY2F0ZWdvcmllcy5maW5kSW5kZXgoZSA9PiBlLmlkID09PSBjYXRlZ29yeS5pZClcbiAgICAgIGlmIChkeW5TY3JvbGxlclJlZi52YWx1ZSkge1xuICAgICAgICBkeW5TY3JvbGxlclJlZi52YWx1ZS5zY3JvbGxUb0l0ZW0oaSlcbiAgICAgIH1cblxuICAgICAgYWN0aXZlQ2F0ZWdvcnkudmFsdWUgPSBjYXRlZ29yaWVzLmZpbmQoZSA9PiBlLmlkID09PSBjYXRlZ29yeS5pZClcbiAgICAgIHNraXBTY3JvbGxVcGRhdGUgPSB0cnVlXG4gICAgfVxuICAgIGNvbnN0IG9uU2VhcmNoID0gKHZhbHVlKSA9PiB7XG4gICAgICBzZWFyY2hFbW9qaXMudmFsdWUgPSBwcm9wcy5kYXRhLnNlYXJjaCh2YWx1ZSwgcHJvcHMubWF4U2VhcmNoUmVzdWx0cylcbiAgICB9XG4gICAgY29uc3Qgb25FbW9qaUVudGVyID0gKGVtb2ppKSA9PiB7XG4gICAgICBwcmV2aWV3RW1vamkudmFsdWUgPSBlbW9qaVxuICAgIH1cbiAgICBjb25zdCBvbkVtb2ppTGVhdmUgPSAoKSA9PiB7XG4gICAgICBwcmV2aWV3RW1vamkudmFsdWUgPSBudWxsXG4gICAgfVxuICAgIGNvbnN0IG9uRW1vamlDbGljayA9IChlbW9qaSkgPT4ge1xuICAgICAgZW1pdCgnc2VsZWN0JywgZW1vamkpXG4gICAgICBmcmVxdWVudGx5LmFkZChlbW9qaSlcbiAgICB9XG4gICAgY29uc3Qgb25Ta2luQ2hhbmdlID0gKHNraW4pID0+IHtcbiAgICAgIGFjdGl2ZVNraW4udmFsdWUgPSBza2luXG4gICAgICBzdG9yZS51cGRhdGUoeyBza2luIH0pXG5cbiAgICAgIGVtaXQoJ3NraW4tY2hhbmdlJywgc2tpbilcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgZHluU2Nyb2xsZXJSZWYsXG4gICAgICBhY3RpdmVDYXRlZ29yeSxcbiAgICAgIHByZXZpZXdFbW9qaSxcbiAgICAgIHNlYXJjaEVtb2ppcyxcbiAgICAgIGNhdGVnb3JpZXMsXG5cbiAgICAgIGN1c3RvbVN0eWxlcyxcbiAgICAgIG1lcmdlZEkxOG4sXG4gICAgICBvbkFuY2hvckNsaWNrLFxuICAgICAgb25TZWFyY2gsXG4gICAgICBlbW9qaVByb3BzLFxuICAgICAgc2Nyb2xsZXJDYXRlZ29yaWVzLFxuICAgICAgb25TY3JvbGxVcGRhdGUsXG4gICAgICBpZGxlRW1vamksXG4gICAgICBza2luUHJvcHMsXG4gICAgICBvblNraW5DaGFuZ2UsXG4gICAgfVxuICB9XG59KVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0IGVtb2ppLW1hcnQtc3RhdGljXCIgOnN0eWxlPVwiY3VzdG9tU3R5bGVzXCI+XG4gICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtYmFyIGVtb2ppLW1hcnQtYmFyLWFuY2hvcnNcIiB2LWlmPVwic2hvd0NhdGVnb3JpZXNcIj5cbiAgICAgIDxhbmNob3JzXG4gICAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICAgIDppMThuPVwibWVyZ2VkSTE4blwiXG4gICAgICAgIDpjb2xvcj1cImNvbG9yXCJcbiAgICAgICAgOmNhdGVnb3JpZXM9XCJjYXRlZ29yaWVzXCJcbiAgICAgICAgOmFjdGl2ZS1jYXRlZ29yeT1cImFjdGl2ZUNhdGVnb3J5XCJcbiAgICAgICAgQGNsaWNrPVwib25BbmNob3JDbGlja1wiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuXG4gICAgPHNsb3RcbiAgICAgIG5hbWU9XCJzZWFyY2hUZW1wbGF0ZVwiXG4gICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgOmkxOG49XCJpMThuXCJcbiAgICAgIDphdXRvLWZvY3VzPVwiYXV0b0ZvY3VzXCJcbiAgICAgIDpvbi1zZWFyY2g9XCJvblNlYXJjaFwiXG4gICAgPlxuICAgICAgPHNlYXJjaFxuICAgICAgICB2LWlmPVwic2hvd1NlYXJjaFwiXG4gICAgICAgIHJlZj1cInNlYXJjaFwiXG4gICAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICAgIDppMThuPVwibWVyZ2VkSTE4blwiXG4gICAgICAgIDphdXRvLWZvY3VzPVwiYXV0b0ZvY3VzXCJcbiAgICAgICAgOm9uLXNlYXJjaD1cIm9uU2VhcmNoXCJcbiAgICAgICAgQHNlYXJjaD1cIm9uU2VhcmNoXCJcbiAgICAgIC8+XG4gICAgPC9zbG90PlxuXG4gICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtc2Nyb2xsXCIgcmVmPVwic2Nyb2xsUmVmXCIgQHNjcm9sbD1cIm9uU2Nyb2xsXCI+XG4gICAgICA8Y2F0ZWdvcnlcbiAgICAgICAgdi1zaG93PVwic2VhcmNoRW1vamlzXCJcbiAgICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgICAgOmkxOG49XCJtZXJnZWRJMThuXCJcbiAgICAgICAgaWQ9XCJzZWFyY2hcIlxuICAgICAgICBuYW1lPVwiU2VhcmNoXCJcbiAgICAgICAgOmVtb2ppcz1cInNlYXJjaEVtb2ppc1wiXG4gICAgICAgIDplbW9qaS1wcm9wcz1cImVtb2ppUHJvcHNcIlxuICAgICAgLz5cbiAgICAgIDxjYXRlZ29yeVxuICAgICAgICB2LWZvcj1cImNhdGVnb3J5IGluIGZpbHRlcmVkQ2F0ZWdvcmllc1wiXG4gICAgICAgIHYtc2hvdz1cIiFzZWFyY2hFbW9qaXMgJiYgKGluZmluaXRlU2Nyb2xsIHx8IGNhdGVnb3J5ID09PSBhY3RpdmVDYXRlZ29yeSlcIlxuICAgICAgICByZWY9XCJjYXRlZ29yaWVzXCJcbiAgICAgICAgOmtleT1cImNhdGVnb3J5LmlkXCJcbiAgICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgICAgOmkxOG49XCJtZXJnZWRJMThuXCJcbiAgICAgICAgOmlkPVwiY2F0ZWdvcnkuaWRcIlxuICAgICAgICA6bmFtZT1cImNhdGVnb3J5Lm5hbWVcIlxuICAgICAgICA6ZW1vamlzPVwiY2F0ZWdvcnkuZW1vamlzXCJcbiAgICAgICAgOmVtb2ppLXByb3BzPVwiZW1vamlQcm9wc1wiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuXG4gICAgPHNsb3RcbiAgICAgIG5hbWU9XCJwcmV2aWV3VGVtcGxhdGVcIlxuICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgIDp0aXRsZT1cInRpdGxlXCJcbiAgICAgIDplbW9qaT1cInByZXZpZXdFbW9qaVwiXG4gICAgICA6aWRsZS1lbW9qaT1cImlkbGVFbW9qaVwiXG4gICAgICA6c2hvdy1za2luLXRvbmVzPVwic2hvd1NraW5Ub25lc1wiXG4gICAgICA6ZW1vamktcHJvcHM9XCJlbW9qaVByb3BzXCJcbiAgICAgIDpza2luLXByb3BzPVwic2tpblByb3BzXCJcbiAgICAgIDpvbi1za2luLWNoYW5nZT1cIm9uU2tpbkNoYW5nZVwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtYmFyIGVtb2ppLW1hcnQtYmFyLXByZXZpZXdcIiB2LWlmPVwic2hvd1ByZXZpZXdcIj5cbiAgICAgICAgPHByZXZpZXdcbiAgICAgICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgICAgIDp0aXRsZT1cInRpdGxlXCJcbiAgICAgICAgICA6ZW1vamk9XCJwcmV2aWV3RW1vamlcIlxuICAgICAgICAgIDppZGxlLWVtb2ppPVwiaWRsZUVtb2ppXCJcbiAgICAgICAgICA6c2hvdy1za2luLXRvbmVzPVwic2hvd1NraW5Ub25lc1wiXG4gICAgICAgICAgOmVtb2ppLXByb3BzPVwiZW1vamlQcm9wc1wiXG4gICAgICAgICAgOnNraW4tcHJvcHM9XCJza2luUHJvcHNcIlxuICAgICAgICAgIDpvbi1za2luLWNoYW5nZT1cIm9uU2tpbkNoYW5nZVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L3Nsb3Q+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCAnLi4vdmVuZG9yL3JhZi1wb2x5ZmlsbCdcbmltcG9ydCBzdG9yZSBmcm9tICcuLi91dGlscy9zdG9yZSdcbmltcG9ydCBmcmVxdWVudGx5IGZyb20gJy4uL3V0aWxzL2ZyZXF1ZW50bHknXG5pbXBvcnQgeyBkZWVwTWVyZ2UsIG1lYXN1cmVTY3JvbGxiYXIgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IFBpY2tlclByb3BzIH0gZnJvbSAnLi4vdXRpbHMvc2hhcmVkLXByb3BzJ1xuaW1wb3J0IEFuY2hvcnMgZnJvbSAnLi9hbmNob3JzLnZ1ZSdcbmltcG9ydCBDYXRlZ29yeSBmcm9tICcuL2NhdGVnb3J5LnZ1ZSdcbmltcG9ydCBQcmV2aWV3IGZyb20gJy4vcHJldmlldy52dWUnXG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vc2VhcmNoLnZ1ZSdcbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmLCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuLypcbiAqIE5vdGUgYWJvdXQgYGJ1ZmZlcmAgc2V0dGluZyBmb3IgRHluYW1pY1Njcm9sbGVyOiB0aGlzIGlzIGFcbiAqIGZpeCBmb3IgIzQ5IC0gd2hlbiBjbGlja2luZyBvbiB0aGUgXCJGbGFnc1wiIGNhdGVnb3J5IGZvciB0aGUgZmlyc3RcbiAqIHRpbWUsIHRoZSBjYXRlZ29yeSBpcyBub3Qgc2Nyb2xsZWQgdG8gdGhlIHRvcCBvZiB0aGUgY29tcG9uZW50LlxuICogVGhpcyBpcyBiZWNhdXNlIHRoZSBsYXN0IGNhdGVnb3J5IHNpemUgaXMgbm90IGNhbGN1bGF0ZWQgeWV0IGFuZFxuICogdmlydHVhbCBzY3JvbGxlciB0YWtlcyAnbWluSXRlbVNpemUnIGFzIGNhdGVnb3J5IGhlaWdodC5cbiAqXG4gKiBWaXJ0dWFsIHNjcm9sbGVyIChSZWN5Y2xlU2Nyb2xsZXIgY29tcG9uZW50KSB1c2VzIGBidWZmZXJgIHZhbHVlXG4gKiB0byAgZGVjaWRlIGhvdyBtYW55IGNvbXBvbmVudHMgdG8gcmVuZGVyIGludGl0aWFsbHkgZGVwZW5kaW5nIG9uXG4gKiB0aGUgc2Nyb2xsIGFyZWEgc2l6ZSArIGJ1ZmZlcioyIChhbmQgYWxsIGNhdGVnb3JpZXMgaW5pdGlhbGx5XG4gKiBoYXZlIG1pbiBzaXplLCA2MHB4KS5cbiAqXG4gKiBCeSBpbmNyZWFzaW5nIGJ1ZmZlciB0byA0MDBweCwgd2UgbWFrZSB0aGUgc2Nyb2xsZXIgdG8gcGVyZm9ybVxuICogc2l6ZSBjYWxjdWxhdGlvbiBmb3IgYWxsIGNhdGVnb3JpZXMgYW5kIHRoZSBmb2xsb3dpbmdcbiAqIHNjcm9sbFRvSXRlbSgpIGNhbGxzIHdvcmsgY29ycmVjdGx5LlxuICovXG5cbmltcG9ydCB7IER5bmFtaWNTY3JvbGxlciwgRHluYW1pY1Njcm9sbGVySXRlbSB9IGZyb20gJ3Z1ZTMtdmlydHVhbC1zY3JvbGxlcidcbmltcG9ydCAndnVlMy12aXJ0dWFsLXNjcm9sbGVyL2Rpc3QvdnVlMy12aXJ0dWFsLXNjcm9sbGVyLmNzcydcblxuY29uc3QgSTE4TiA9IHtcbiAgc2VhcmNoOiAnU2VhcmNoJyxcbiAgbm90Zm91bmQ6ICdObyBFbW9qaSBGb3VuZCcsXG4gIGNhdGVnb3JpZXM6IHtcbiAgICBzZWFyY2g6ICdTZWFyY2ggUmVzdWx0cycsXG4gICAgcmVjZW50OiAnRnJlcXVlbnRseSBVc2VkJyxcbiAgICBzbWlsZXlzOiAnU21pbGV5cyAmIEVtb3Rpb24nLFxuICAgIHBlb3BsZTogJ1Blb3BsZSAmIEJvZHknLFxuICAgIG5hdHVyZTogJ0FuaW1hbHMgJiBOYXR1cmUnLFxuICAgIGZvb2RzOiAnRm9vZCAmIERyaW5rJyxcbiAgICBhY3Rpdml0eTogJ0FjdGl2aXR5JyxcbiAgICBwbGFjZXM6ICdUcmF2ZWwgJiBQbGFjZXMnLFxuICAgIG9iamVjdHM6ICdPYmplY3RzJyxcbiAgICBzeW1ib2xzOiAnU3ltYm9scycsXG4gICAgZmxhZ3M6ICdGbGFncycsXG4gICAgY3VzdG9tOiAnQ3VzdG9tJyxcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ0Vtb2ppU3RhdGljUGlja2VyJyxcblxuICBjb21wb25lbnRzOiB7XG4gICAgQW5jaG9ycyxcbiAgICBDYXRlZ29yeSxcbiAgICBQcmV2aWV3LFxuICAgIFNlYXJjaCxcbiAgICBEeW5hbWljU2Nyb2xsZXIsXG4gICAgRHluYW1pY1Njcm9sbGVySXRlbSxcbiAgfSxcblxuICBwcm9wczoge1xuICAgIC4uLlBpY2tlclByb3BzLFxuICAgIGluY2x1ZGU6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogKCkgPT4gW11cbiAgICB9LFxuICAgIGVtb2ppc1RvU2hvd0ZpbHRlcjoge1xuICAgICAgdHlwZTogRnVuY3Rpb25cbiAgICB9LFxuICAgIGV4Y2x1ZGU6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogKCkgPT4gW11cbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gIH0sXG5cbiAgZW1pdHM6IFsnc2tpbi1jaGFuZ2UnLCAnc2VsZWN0J10sXG5cbiAgc2V0dXAocHJvcHMsIHsgZW1pdCB9KSB7XG4gICAgbGV0IGNhdGVnb3JpZXMgPSBbLi4ucHJvcHMuZGF0YS5jYXRlZ29yaWVzKCldLmZpbHRlcigoY2F0ZWdvcnkpID0+IHtcbiAgICAgIHJldHVybiBjYXRlZ29yeS5lbW9qaXMubGVuZ3RoID4gMFxuICAgIH0pXG5cbiAgICBjYXRlZ29yaWVzWzBdLmZpcnN0ID0gdHJ1ZVxuICAgIE9iamVjdC5mcmVlemUoY2F0ZWdvcmllcylcblxuICAgIGNvbnN0IHNjcm9sbFJlZiA9IHJlZihudWxsKVxuICAgIGNvbnN0IGNhdGVnb3JpZXNSZWYgPSByZWYobnVsbClcbiAgICBjb25zdCBhY3RpdmVTa2luID0gcmVmKHByb3BzLnNraW4gfHwgc3RvcmUuZ2V0KCdza2luJykgfHwgcHJvcHMuZGVmYXVsdFNraW4pXG4gICAgY29uc3QgYWN0aXZlQ2F0ZWdvcnkgPSByZWYoY2F0ZWdvcmllc1swXSlcbiAgICBjb25zdCBwcmV2aWV3RW1vamkgPSByZWYobnVsbClcbiAgICBjb25zdCBzZWFyY2hFbW9qaXMgPSByZWYobnVsbClcblxuICAgIGNvbnN0IGNhbGN1bGF0ZVdpZHRoID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMucGVyTGluZSAqIChwcm9wcy5lbW9qaVNpemUgKyAxMikgKyAxMiArIDIgKyBtZWFzdXJlU2Nyb2xsYmFyKCkpXG5cbiAgICBjb25zdCBlbW9qaVByb3BzID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIG5hdGl2ZTogcHJvcHMubmF0aXZlLFxuICAgICAgc2tpbjogYWN0aXZlU2tpbi52YWx1ZSxcbiAgICAgIHNldDogcHJvcHMuc2V0LFxuICAgICAgZW1vamlUb29sdGlwOiBwcm9wcy5lbW9qaVRvb2x0aXAsXG4gICAgICBlbW9qaVNpemU6IHByb3BzLmVtb2ppU2l6ZSxcbiAgICAgIG9uRW50ZXI6IG9uRW1vamlFbnRlcixcbiAgICAgIG9uTGVhdmU6IG9uRW1vamlMZWF2ZSxcbiAgICAgIG9uQ2xpY2s6IG9uRW1vamlDbGljayxcbiAgICB9KSlcblxuICAgIGNvbnN0IHNraW5Qcm9wcyA9IGNvbXB1dGVkKCgpID0+ICh7IHNraW46IGFjdGl2ZVNraW4udmFsdWUgfSkpXG5cbiAgICBjb25zdCBjdXN0b21TdHlsZXMgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgd2lkdGg6IGNhbGN1bGF0ZVdpZHRoLnZhbHVlICsgJ3B4JyxcbiAgICAgIC4uLnByb3BzLnBpY2tlclN0eWxlcyxcbiAgICB9KSlcblxuICAgIGNvbnN0IGZpbHRlcmVkQ2F0ZWdvcmllcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiBjYXRlZ29yaWVzLmZpbHRlcigoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgbGV0IGlzSW5jbHVkZWQgPVxuICAgICAgICAgIHByb3BzLmluY2x1ZGUgJiYgcHJvcHMuaW5jbHVkZS5sZW5ndGhcbiAgICAgICAgICAgID8gcHJvcHMuaW5jbHVkZS5pbmRleE9mKGNhdGVnb3J5LmlkKSA+IC0xXG4gICAgICAgICAgICA6IHRydWVcbiAgICAgICAgbGV0IGlzRXhjbHVkZWQgPVxuICAgICAgICAgIHByb3BzLmV4Y2x1ZGUgJiYgcHJvcHMuZXhjbHVkZS5sZW5ndGhcbiAgICAgICAgICAgID8gcHJvcHMuZXhjbHVkZS5pbmRleE9mKGNhdGVnb3J5LmlkKSA+IC0xXG4gICAgICAgICAgICA6IGZhbHNlXG4gICAgICAgIGxldCBoYXNFbW9qaXMgPSBjYXRlZ29yeS5lbW9qaXMubGVuZ3RoID4gMFxuICAgICAgICBpZiAocHJvcHMuZW1vamlzVG9TaG93RmlsdGVyKSB7XG4gICAgICAgICAgaGFzRW1vamlzID0gY2F0ZWdvcnkuZW1vamlzLnNvbWUoKGVtb2ppKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcHJvcHMuZW1vamlzVG9TaG93RmlsdGVyKHByb3BzLmRhdGEuZW1vamlzW2Vtb2ppXSB8fCBlbW9qaSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc0luY2x1ZGVkICYmICFpc0V4Y2x1ZGVkICYmIGhhc0Vtb2ppc1xuICAgICAgfSlcbiAgICB9KVxuXG4gICAgY29uc3QgaWRsZUVtb2ppID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHByb3BzLmRhdGEuZW1vamkocHJvcHMuZW1vamkpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgJ0RlZmF1bHQgcHJldmlldyBlbW9qaSBgJyArXG4gICAgICAgICAgcHJvcHMuZW1vamkgK1xuICAgICAgICAgICdgIGlzIG5vdCBhdmFpbGFibGUsIGNoZWNrIHRoZSBQaWNrZXIgYGVtb2ppYCBwcm9wZXJ0eScsXG4gICAgICAgIClcbiAgICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgICByZXR1cm4gcHJvcHMuZGF0YS5maXJzdEVtb2ppKClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgbGV0IHdhaXRpbmdGb3JQYWludCA9IGZhbHNlXG4gICAgY29uc3Qgb25TY3JvbGwgPSAoKSA9PiB7XG4gICAgICBpZiAocHJvcHMuaW5maW5pdGVTY3JvbGwgJiYgIXdhaXRpbmdGb3JQYWludCkge1xuICAgICAgICB3YWl0aW5nRm9yUGFpbnQgPSB0cnVlXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUob25TY3JvbGxQYWludClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBvblNjcm9sbFBhaW50ID0gKCkgPT4ge1xuICAgICAgd2FpdGluZ0ZvclBhaW50ID0gZmFsc2VcbiAgICAgIGxldCBzY3JvbGxUb3AgPSBzY3JvbGxSZWYuc2Nyb2xsVG9wLFxuICAgICAgICBfYWN0aXZlQ2F0ZWdvcnkgPSBmaWx0ZXJlZENhdGVnb3JpZXMudmFsdWVbMF1cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gZmlsdGVyZWRDYXRlZ29yaWVzLnZhbHVlLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY2F0ZWdvcnkgPSBmaWx0ZXJlZENhdGVnb3JpZXMudmFsdWVbaV0sXG4gICAgICAgICAgY29tcG9uZW50ID0gY2F0ZWdvcmllc1JlZi52YWx1ZVtpXVxuICAgICAgICAvLyBUaGUgYC01MGAgb2Zmc2V0IHN3aXRjaGVzIGFjdGl2ZSBjYXRlZ29yeSAoc2VsZWN0ZWQgaW4gdGhlXG4gICAgICAgIC8vIGFuY2hvcnMgYmFyKSBhIGJpdCBlYXJpbGVyLCBiZWZvcmUgaXQgYWN0dWFsbHkgcmVhY2hlcyB0aGUgdG9wLlxuICAgICAgICBpZiAoY29tcG9uZW50ICYmIGNvbXBvbmVudC4kZWwub2Zmc2V0VG9wIC0gNTAgPiBzY3JvbGxUb3ApIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIF9hY3RpdmVDYXRlZ29yeSA9IGNhdGVnb3J5XG4gICAgICB9XG5cbiAgICAgIGFjdGl2ZUNhdGVnb3J5LnZhbHVlID0gX2FjdGl2ZUNhdGVnb3J5XG4gICAgfVxuXG4gICAgY29uc3Qgb25BbmNob3JDbGljayA9IChjYXRlZ29yeSkgPT4ge1xuICAgICAgbGV0IGkgPSBmaWx0ZXJlZENhdGVnb3JpZXMudmFsdWUuaW5kZXhPZihjYXRlZ29yeSksXG4gICAgICAgIGNvbXBvbmVudCA9IGNhdGVnb3JpZXNSZWYudmFsdWVbaV0sXG4gICAgICAgIHNjcm9sbFRvQ29tcG9uZW50ID0gKCkgPT4ge1xuICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgIGxldCB0b3AgPSBjb21wb25lbnQuJGVsLm9mZnNldFRvcFxuICAgICAgICAgICAgaWYgKGNhdGVnb3J5LmZpcnN0KSB7XG4gICAgICAgICAgICAgIHRvcCA9IDBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2Nyb2xsUmVmLnZhbHVlLnNjcm9sbFRvcCA9IHRvcFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuaW5maW5pdGVTY3JvbGwpIHtcbiAgICAgICAgc2Nyb2xsVG9Db21wb25lbnQoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWN0aXZlQ2F0ZWdvcnkudmFsdWUgPSBmaWx0ZXJlZENhdGVnb3JpZXMudmFsdWVbaV1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBvblNlYXJjaCA9ICh2YWx1ZSkgPT4ge1xuICAgICAgc2VhcmNoRW1vamlzLnZhbHVlID0gcHJvcHMuZGF0YS5zZWFyY2godmFsdWUsIHByb3BzLm1heFNlYXJjaFJlc3VsdHMpXG4gICAgfVxuXG4gICAgY29uc3Qgb25FbW9qaUVudGVyID0gKGVtb2ppKSA9PiB7XG4gICAgICBwcmV2aWV3RW1vamkudmFsdWUgPSBlbW9qaVxuICAgIH1cblxuICAgIGNvbnN0IG9uRW1vamlMZWF2ZSA9ICgpID0+IHtcbiAgICAgIHByZXZpZXdFbW9qaS52YWx1ZSA9IG51bGxcbiAgICB9XG5cbiAgICBjb25zdCBvbkVtb2ppQ2xpY2sgPSAoZW1vamkpID0+IHtcbiAgICAgIGVtaXQoJ3NlbGVjdCcsIGVtb2ppKVxuICAgICAgZnJlcXVlbnRseS5hZGQoZW1vamkpXG4gICAgfVxuXG4gICAgY29uc3Qgb25Ta2luQ2hhbmdlID0gKHNraW4pID0+IHtcbiAgICAgIGFjdGl2ZVNraW4udmFsdWUgPSBza2luXG4gICAgICBzdG9yZS51cGRhdGUoeyBza2luIH0pXG5cbiAgICAgIGVtaXQoJ3NraW4tY2hhbmdlJywgc2tpbilcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgYWN0aXZlQ2F0ZWdvcnksXG4gICAgICBwcmV2aWV3RW1vamksXG4gICAgICBzZWFyY2hFbW9qaXMsXG4gICAgICBjdXN0b21TdHlsZXMsXG4gICAgICBmaWx0ZXJlZENhdGVnb3JpZXMsXG4gICAgICBza2luUHJvcHMsXG4gICAgICBtZXJnZWRJMThuOiBjb21wdXRlZCgoKSA9PiBPYmplY3QuZnJlZXplKGRlZXBNZXJnZShJMThOLCBwcm9wcy5pMThuKSkpLFxuICAgICAgaWRsZUVtb2ppLFxuXG4gICAgICBzY3JvbGxSZWYsXG4gICAgICBjYXRlZ29yaWVzLFxuICAgICAgb25BbmNob3JDbGljayxcbiAgICAgIG9uU2VhcmNoLFxuICAgICAgb25TY3JvbGwsXG4gICAgICBlbW9qaVByb3BzLFxuICAgICAgb25Ta2luQ2hhbmdlLFxuICAgIH1cbiAgfVxufSlcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuXG48ZGl2IGNsYXNzPVwiZW1vamktbWFydC1hbmNob3JzXCI+XG4gIDxzcGFuXG4gICAgdi1mb3I9XCJjYXRlZ29yeSBpbiBjYXRlZ29yaWVzXCJcbiAgICA6a2V5PVwiY2F0ZWdvcnkuaWRcIlxuICAgIDpjbGFzcz1cInsgJ2Vtb2ppLW1hcnQtYW5jaG9yJzogdHJ1ZSwgJ2Vtb2ppLW1hcnQtYW5jaG9yLXNlbGVjdGVkJzogY2F0ZWdvcnkuaWQgPT09IGFjdGl2ZUNhdGVnb3J5LmlkIH1cIlxuICAgIDpzdHlsZT1cInsgJ2NvbG9yJzogKGNhdGVnb3J5LmlkID09PSBhY3RpdmVDYXRlZ29yeS5pZCA/IGNvbG9yIDogJycpIH1cIlxuICAgIDpkYXRhLXRpdGxlPVwiaTE4bi5jYXRlZ29yaWVzW2NhdGVnb3J5LmlkXVwiXG4gICAgQGNsaWNrPVwiJGVtaXQoJ2NoYW5nZScsIGNhdGVnb3J5KVwiPlxuICAgIDxkaXYgdi1odG1sPVwic3Znc1tjYXRlZ29yeS5pZF1cIi8+XG4gICAgPHNwYW4gY2xhc3M9XCJlbW9qaS1tYXJ0LWFuY2hvci1iYXJcIiA6c3R5bGU9XCJ7IGJhY2tncm91bmRDb2xvcjogY29sb3IgfVwiPjwvc3Bhbj5cbiAgPC9zcGFuPlxuPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCBzdmdzIGZyb20gJy4uL3N2Z3MnXG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdBbmNob3JzJyxcblxuICBwcm9wczoge1xuICAgIGkxOG46IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nXG4gICAgfSxcbiAgICBjYXRlZ29yaWVzOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBhY3RpdmVDYXRlZ29yeToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgZGVmYXVsdCgpIHtcbiAgICAgICAgcmV0dXJuIHt9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHNldHVwKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdmdzLFxuICAgIH1cbiAgfVxufSlcblxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG5cbjxkaXYgOmNsYXNzPVwieyAnZW1vamktbWFydC1jYXRlZ29yeSc6IHRydWUsICdlbW9qaS1tYXJ0LW5vLXJlc3VsdHMnOiAhaGFzUmVzdWx0cyB9XCIgdi1pZj1cImlzVmlzaWJsZSAmJiAoaXNTZWFyY2ggfHwgaGFzUmVzdWx0cylcIj5cbiAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtY2F0ZWdvcnktbGFiZWxcIj5cbiAgICA8c3Bhbj57eyBpMThuLmNhdGVnb3JpZXNbaWRdIH19PC9zcGFuPlxuICA8L2Rpdj5cblxuICA8dGVtcGxhdGUgdi1mb3I9XCJ7IGVtb2ppT2JqZWN0LCBlbW9qaVZpZXcgfSBpbiBlbW9qaU9iamVjdHNcIj5cbiAgICA8c3BhblxuICAgICAgdi1pZj1cImVtb2ppVmlldy5jYW5SZW5kZXJcIlxuICAgICAgOmRhdGEtdGl0bGU9XCJlbW9qaU9iamVjdC5zaG9ydF9uYW1lXCJcbiAgICAgIDp0aXRsZT1cImVtb2ppVmlldy50aXRsZVwiXG4gICAgICBjbGFzcz1cImVtb2ppLW1hcnQtZW1vamlcIlxuICAgICAgQG1vdXNlZW50ZXI9XCJlbW9qaVByb3BzLm9uRW50ZXIoZW1vamlWaWV3LmdldEVtb2ppKCkpXCJcbiAgICAgIEBtb3VzZWxlYXZlPVwiZW1vamlQcm9wcy5vbkxlYXZlKGVtb2ppVmlldy5nZXRFbW9qaSgpKVwiXG4gICAgICBAY2xpY2s9XCJlbW9qaVByb3BzLm9uQ2xpY2soZW1vamlWaWV3LmdldEVtb2ppKCkpXCI+XG4gICAgICA8c3BhbiAgOmNsYXNzPVwiZW1vamlWaWV3LmNzc0NsYXNzXCIgOnN0eWxlPVwiZW1vamlWaWV3LmNzc1N0eWxlXCI+e3tlbW9qaVZpZXcuY29udGVudH19PC9zcGFuPlxuICAgIDwvc3Bhbj5cbiAgPC90ZW1wbGF0ZT5cblxuICA8ZGl2IHYtaWY9XCIhaGFzUmVzdWx0cyAmJiBkYXRhXCI+XG4gICAgPGVtb2ppXG4gICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgZW1vamk9XCJzbGV1dGhfb3Jfc3B5XCJcbiAgICAgIDpuYXRpdmU9XCJlbW9qaVByb3BzLm5hdGl2ZVwiXG4gICAgICA6c2tpbj1cImVtb2ppUHJvcHMuc2tpblwiXG4gICAgICA6c2V0PVwiZW1vamlQcm9wcy5zZXRcIlxuICAgIC8+XG4gICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtbm8tcmVzdWx0cy1sYWJlbFwiPnt7IGkxOG4ubm90Zm91bmQgfX08L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IEVtb2ppVmlldyB9IGZyb20gJy4uL3V0aWxzL2Vtb2ppLWRhdGEnXG5pbXBvcnQgRW1vamkgZnJvbSAnLi9FbW9qaSdcbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdFbW9qaUNhdGVnb3J5JyxcblxuICBwcm9wczoge1xuICAgIGRhdGE6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIGRlZmF1bHQ6ICgpID0+ICh7fSlcbiAgICB9LFxuICAgIGkxOG46IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBpZDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIG5hbWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBlbW9qaXM6IHtcbiAgICAgIHR5cGU6IEFycmF5XG4gICAgfSxcbiAgICBlbW9qaVByb3BzOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnRzOiB7XG4gICAgRW1vamlcbiAgfSxcblxuICBzZXR1cChwcm9wcykge1xuICAgIGNvbnN0IGlzVmlzaWJsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiAhIXByb3BzLmVtb2ppc1xuICAgIH0pXG4gICAgY29uc3QgaXNTZWFyY2ggPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICByZXR1cm4gcHJvcHMubmFtZSA9PT0gJ1NlYXJjaCdcbiAgICB9KVxuICAgIGNvbnN0IGhhc1Jlc3VsdHMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICByZXR1cm4gcHJvcHMuZW1vamlzLmxlbmd0aCA+IDBcbiAgICB9KVxuICAgIGNvbnN0IGVtb2ppT2JqZWN0cyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiBwcm9wcy5lbW9qaXMubWFwKChlbW9qaSkgPT4ge1xuICAgICAgICBsZXQgZW1vamlPYmplY3QgPSBlbW9qaVxuICAgICAgICBsZXQgZW1vamlWaWV3ID0gbmV3IEVtb2ppVmlldyhcbiAgICAgICAgICBlbW9qaSxcbiAgICAgICAgICBwcm9wcy5lbW9qaVByb3BzLnNraW4sXG4gICAgICAgICAgcHJvcHMuZW1vamlQcm9wcy5zZXQsXG4gICAgICAgICAgcHJvcHMuZW1vamlQcm9wcy5uYXRpdmUsXG4gICAgICAgICAgcHJvcHMuZW1vamlQcm9wcy5mYWxsYmFjayxcbiAgICAgICAgICBwcm9wcy5lbW9qaVByb3BzLmVtb2ppVG9vbHRpcCxcbiAgICAgICAgICBwcm9wcy5lbW9qaVByb3BzLmVtb2ppU2l6ZSxcbiAgICAgICAgKVxuICAgICAgICByZXR1cm4geyBlbW9qaU9iamVjdCwgZW1vamlWaWV3IH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHJldHVybiB7XG4gICAgICBpc1Zpc2libGUsXG4gICAgICBpc1NlYXJjaCxcbiAgICAgIGhhc1Jlc3VsdHMsXG4gICAgICBlbW9qaU9iamVjdHMsXG4gICAgfVxuICB9XG59KVxuXG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cblxuPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlld1wiPlxuICA8dGVtcGxhdGUgdi1pZj1cImVtb2ppXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LWVtb2ppXCI+XG4gICAgICAgIDxlbW9qaVxuICAgICAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICAgICAgOmVtb2ppPVwiZW1vamlcIlxuICAgICAgICAgIDpuYXRpdmU9XCJlbW9qaVByb3BzLm5hdGl2ZVwiXG4gICAgICAgICAgOnNraW49XCJlbW9qaVByb3BzLnNraW5cIlxuICAgICAgICAgIDpzZXQ9XCJlbW9qaVByb3BzLnNldFwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1kYXRhXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctbmFtZVwiPnt7IGVtb2ppLm5hbWUgfX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1zaG9ydG5hbWVzXCI+XG4gICAgICAgICAgPHNwYW4gdi1mb3I9XCJzaG9ydE5hbWUgaW4gZW1vamlTaG9ydE5hbWVzXCIgOmtleT1cInNob3J0TmFtZVwiIGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LXNob3J0bmFtZVwiPjp7eyBzaG9ydE5hbWUgfX06PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1lbW90aWNvbnNcIj5cbiAgICAgICAgICA8c3BhbiB2LWZvcj1cImVtb3RpY29uIGluIGVtb2ppRW1vdGljb25zXCIgOmtleT1cImVtb3RpY29uXCIgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vdGljb25cIj57eyBlbW90aWNvbiB9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgPC90ZW1wbGF0ZT5cblxuICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vamlcIj5cbiAgICAgIDxlbW9qaVxuICAgICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgICA6ZW1vamk9XCJpZGxlRW1vamlcIlxuICAgICAgICA6bmF0aXZlPVwiZW1vamlQcm9wcy5uYXRpdmVcIlxuICAgICAgICA6c2tpbj1cImVtb2ppUHJvcHMuc2tpblwiXG4gICAgICAgIDpzZXQ9XCJlbW9qaVByb3BzLnNldFwiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1kYXRhXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImVtb2ppLW1hcnQtdGl0bGUtbGFiZWxcIj57eyB0aXRsZSB9fTwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgdi1pZj1cInNob3dTa2luVG9uZXNcIiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1za2luc1wiPlxuICAgICAgPHNraW5zIDpza2luPVwic2tpblByb3BzLnNraW5cIiBAY2hhbmdlPVwib25Ta2luQ2hhbmdlKCRldmVudClcIiAvPlxuICAgIDwvZGl2PlxuICA8L3RlbXBsYXRlPlxuPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgRW1vamkgZnJvbSAnLi9FbW9qaSdcbmltcG9ydCBTa2lucyBmcm9tICcuL3NraW5zJ1xuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ0Vtb2ppUHJldmlldycsXG5cbiAgY29tcG9uZW50czoge1xuICAgIEVtb2ppLFxuICAgIFNraW5zXG4gIH0sXG5cbiAgcHJvcHM6IHtcbiAgICBkYXRhOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgZW1vamk6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIE9iamVjdF1cbiAgICB9LFxuICAgIGlkbGVFbW9qaToge1xuICAgICAgdHlwZTogW1N0cmluZywgT2JqZWN0XSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBzaG93U2tpblRvbmVzOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgIH0sXG4gICAgZW1vamlQcm9wczoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHNraW5Qcm9wczoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIG9uU2tpbkNoYW5nZToge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH1cbiAgfSxcblxuICBzZXR1cChwcm9wcykge1xuICAgIGNvbnN0IGVtb2ppRGF0YSA9IGNvbXB1dGVkKCgpID0+IHByb3BzLmVtb2ppID8gcHJvcHMuZW1vamkgOiB7fSlcblxuICAgIHJldHVybiB7XG4gICAgICBlbW9qaURhdGEsXG4gICAgICBlbW9qaVNob3J0TmFtZXM6IGNvbXB1dGVkKCgpID0+IGVtb2ppRGF0YS52YWx1ZS5zaG9ydF9uYW1lcyksXG4gICAgICBlbW9qaUVtb3RpY29uczogY29tcHV0ZWQoKCkgPT4gZW1vamlEYXRhLmVtb3RpY29ucylcbiAgICB9XG4gIH1cbn0pXG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtc2VhcmNoXCI+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgOnBsYWNlaG9sZGVyPVwiaTE4bi5zZWFyY2hcIiB2LW1vZGVsPVwidmFsdWVcIj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCBvbk1vdW50ZWQsIGNvbXB1dGVkLCB3YXRjaCwgcmVmLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIHByb3BzOiB7XG4gICAgZGF0YToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGkxOG46IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBhdXRvRm9jdXM6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgb25TZWFyY2g6IHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XG4gIH0sXG5cbiAgc2V0dXAocHJvcHMsIHsgZW1pdCB9KSB7XG4gICAgY29uc3QgdmFsdWUgPSByZWYoJycpXG5cbiAgICB3YXRjaChcbiAgICAgIHZhbHVlLFxuICAgICAgKCkgPT4gZW1pdCgnc2VhcmNoJywgdmFsdWUudmFsdWUpXG4gICAgKVxuXG4gICAgb25Nb3VudGVkKCgpID0+IHtcbiAgICAgIGlmICghcHJvcHMuYXV0b0ZvY3VzKSByZXR1cm5cblxuICAgICAgbGV0ICRlbCA9IGdldEN1cnJlbnRJbnN0YW5jZSgpICYmIGdldEN1cnJlbnRJbnN0YW5jZSgpLnByb3h5LiRlbCB8fCBudWxsXG4gICAgICBpZiAoISRlbCkgcmV0dXJuXG5cbiAgICAgICRlbC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmZvY3VzKClcbiAgICB9KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlLFxuICAgICAgY2xlYXI6KCkgPT4gKHZhbHVlLnZhbHVlID0gJycpLFxuICAgICAgZW1vamlJbmRleDogY29tcHV0ZWQoKCkgPT4gcHJvcHMuZGF0YSlcbiAgICB9XG4gIH1cbn0pXG5cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuXG48ZGl2IDpjbGFzcz1cInsgJ2Vtb2ppLW1hcnQtc2tpbi1zd2F0Y2hlcyc6IHRydWUsICdlbW9qaS1tYXJ0LXNraW4tc3dhdGNoZXMtb3BlbmVkJzogb3BlbmVkIH1cIj5cbiAgPHNwYW4gdi1mb3I9XCJza2luVG9uZSBpbiA2XCIgOmtleT1cInNraW5Ub25lXCIgOmNsYXNzPVwieyAnZW1vamktbWFydC1za2luLXN3YXRjaCc6IHRydWUsICdlbW9qaS1tYXJ0LXNraW4tc3dhdGNoLXNlbGVjdGVkJzogc2tpbiA9PT0gc2tpblRvbmUgfVwiPlxuICAgIDxzcGFuIDpjbGFzcz1cIidlbW9qaS1tYXJ0LXNraW4gZW1vamktbWFydC1za2luLXRvbmUtJyArIHNraW5Ub25lXCIgQGNsaWNrPVwib25DbGljayhza2luVG9uZSlcIj48L3NwYW4+XG4gIDwvc3Bhbj5cbjwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdFbW9qaVNraW5zJyxcblxuICBwcm9wczoge1xuICAgIHNraW46IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfVxuICB9LFxuXG4gIHNldHVwKHByb3BzLCB7IGVtaXQgfSkge1xuICAgIGNvbnN0IG9wZW5lZCA9IHJlZihmYWxzZSlcblxuICAgIGNvbnN0IG9uQ2xpY2sgPSAoc2tpblRvbmUpID0+IHtcbiAgICAgIGlmIChvcGVuZWQudmFsdWUpIHtcbiAgICAgICAgaWYgKHNraW5Ub25lICE9PSBwcm9wcy5za2luKSB7XG4gICAgICAgICAgZW1pdCgnY2hhbmdlJywgc2tpblRvbmUpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb3BlbmVkLnZhbHVlID0gIW9wZW5lZC52YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBvcGVuZWQsXG4gICAgICBvbkNsaWNrXG4gICAgfVxuICB9XG59KVxuXG48L3NjcmlwdD5cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi52dWUtcmVjeWNsZS1zY3JvbGxlcntwb3NpdGlvbjpyZWxhdGl2ZX0udnVlLXJlY3ljbGUtc2Nyb2xsZXIuZGlyZWN0aW9uLXZlcnRpY2FsOm5vdCgucGFnZS1tb2RlKXtvdmVyZmxvdy15OmF1dG99LnZ1ZS1yZWN5Y2xlLXNjcm9sbGVyLmRpcmVjdGlvbi1ob3Jpem9udGFsOm5vdCgucGFnZS1tb2RlKXtvdmVyZmxvdy14OmF1dG99LnZ1ZS1yZWN5Y2xlLXNjcm9sbGVyLmRpcmVjdGlvbi1ob3Jpem9udGFse2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4fS52dWUtcmVjeWNsZS1zY3JvbGxlcl9fc2xvdHstbXMtZmxleDphdXRvIDAgMHB4O2ZsZXg6YXV0byAwIDB9LnZ1ZS1yZWN5Y2xlLXNjcm9sbGVyX19pdGVtLXdyYXBwZXJ7LW1zLWZsZXg6MTtmbGV4OjE7Ym94LXNpemluZzpib3JkZXItYm94O292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpyZWxhdGl2ZX0udnVlLXJlY3ljbGUtc2Nyb2xsZXIucmVhZHkgLnZ1ZS1yZWN5Y2xlLXNjcm9sbGVyX19pdGVtLXZpZXd7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpbGwtY2hhbmdlOnRyYW5zZm9ybX0udnVlLXJlY3ljbGUtc2Nyb2xsZXIuZGlyZWN0aW9uLXZlcnRpY2FsIC52dWUtcmVjeWNsZS1zY3JvbGxlcl9faXRlbS13cmFwcGVye3dpZHRoOjEwMCV9LnZ1ZS1yZWN5Y2xlLXNjcm9sbGVyLmRpcmVjdGlvbi1ob3Jpem9udGFsIC52dWUtcmVjeWNsZS1zY3JvbGxlcl9faXRlbS13cmFwcGVye2hlaWdodDoxMDAlfS52dWUtcmVjeWNsZS1zY3JvbGxlci5yZWFkeS5kaXJlY3Rpb24tdmVydGljYWwgLnZ1ZS1yZWN5Y2xlLXNjcm9sbGVyX19pdGVtLXZpZXd7d2lkdGg6MTAwJX0udnVlLXJlY3ljbGUtc2Nyb2xsZXIucmVhZHkuZGlyZWN0aW9uLWhvcml6b250YWwgLnZ1ZS1yZWN5Y2xlLXNjcm9sbGVyX19pdGVtLXZpZXd7aGVpZ2h0OjEwMCV9LnZ1ZTMtcmVzaXplLW9ic2VydmVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDt6LWluZGV4Oi0xO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Ym9yZGVyOm5vbmU7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtwb2ludGVyLWV2ZW50czpub25lO2Rpc3BsYXk6YmxvY2s7b3ZlcmZsb3c6aGlkZGVuO29wYWNpdHk6MH0udnVlMy1yZXNpemUtb2JzZXJ2ZXIgb2JqZWN0e2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7b3ZlcmZsb3c6aGlkZGVuO3BvaW50ZXItZXZlbnRzOm5vbmU7ei1pbmRleDotMX1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvdnVlMy12aXJ0dWFsLXNjcm9sbGVyL2Rpc3QvdnVlMy12aXJ0dWFsLXNjcm9sbGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxzQkFBc0IsaUJBQWlCLENBQUMseURBQXlELGVBQWUsQ0FBQywyREFBMkQsZUFBZSxDQUFDLDJDQUEyQyxtQkFBVyxDQUFYLFlBQVksQ0FBQyw0QkFBNEIsbUJBQVksQ0FBWixhQUFhLENBQUMsb0NBQW9DLFVBQU0sQ0FBTixNQUFNLENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLDZEQUE2RCxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLDZFQUE2RSxVQUFVLENBQUMsK0VBQStFLFdBQVcsQ0FBQyxnRkFBZ0YsVUFBVSxDQUFDLGtGQUFrRixXQUFXLENBQUMsc0JBQXNCLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLDRCQUE0QixDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLDZCQUE2QixhQUFhLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi52dWUtcmVjeWNsZS1zY3JvbGxlcntwb3NpdGlvbjpyZWxhdGl2ZX0udnVlLXJlY3ljbGUtc2Nyb2xsZXIuZGlyZWN0aW9uLXZlcnRpY2FsOm5vdCgucGFnZS1tb2RlKXtvdmVyZmxvdy15OmF1dG99LnZ1ZS1yZWN5Y2xlLXNjcm9sbGVyLmRpcmVjdGlvbi1ob3Jpem9udGFsOm5vdCgucGFnZS1tb2RlKXtvdmVyZmxvdy14OmF1dG99LnZ1ZS1yZWN5Y2xlLXNjcm9sbGVyLmRpcmVjdGlvbi1ob3Jpem9udGFse2Rpc3BsYXk6ZmxleH0udnVlLXJlY3ljbGUtc2Nyb2xsZXJfX3Nsb3R7ZmxleDphdXRvIDAgMH0udnVlLXJlY3ljbGUtc2Nyb2xsZXJfX2l0ZW0td3JhcHBlcntmbGV4OjE7Ym94LXNpemluZzpib3JkZXItYm94O292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpyZWxhdGl2ZX0udnVlLXJlY3ljbGUtc2Nyb2xsZXIucmVhZHkgLnZ1ZS1yZWN5Y2xlLXNjcm9sbGVyX19pdGVtLXZpZXd7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpbGwtY2hhbmdlOnRyYW5zZm9ybX0udnVlLXJlY3ljbGUtc2Nyb2xsZXIuZGlyZWN0aW9uLXZlcnRpY2FsIC52dWUtcmVjeWNsZS1zY3JvbGxlcl9faXRlbS13cmFwcGVye3dpZHRoOjEwMCV9LnZ1ZS1yZWN5Y2xlLXNjcm9sbGVyLmRpcmVjdGlvbi1ob3Jpem9udGFsIC52dWUtcmVjeWNsZS1zY3JvbGxlcl9faXRlbS13cmFwcGVye2hlaWdodDoxMDAlfS52dWUtcmVjeWNsZS1zY3JvbGxlci5yZWFkeS5kaXJlY3Rpb24tdmVydGljYWwgLnZ1ZS1yZWN5Y2xlLXNjcm9sbGVyX19pdGVtLXZpZXd7d2lkdGg6MTAwJX0udnVlLXJlY3ljbGUtc2Nyb2xsZXIucmVhZHkuZGlyZWN0aW9uLWhvcml6b250YWwgLnZ1ZS1yZWN5Y2xlLXNjcm9sbGVyX19pdGVtLXZpZXd7aGVpZ2h0OjEwMCV9LnZ1ZTMtcmVzaXplLW9ic2VydmVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDt6LWluZGV4Oi0xO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Ym9yZGVyOm5vbmU7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtwb2ludGVyLWV2ZW50czpub25lO2Rpc3BsYXk6YmxvY2s7b3ZlcmZsb3c6aGlkZGVuO29wYWNpdHk6MH0udnVlMy1yZXNpemUtb2JzZXJ2ZXIgb2JqZWN0e2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7b3ZlcmZsb3c6aGlkZGVuO3BvaW50ZXItZXZlbnRzOm5vbmU7ei1pbmRleDotMX1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59OyIsIihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoW10sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfSBlbHNlIHtcbiAgICByb290LlNjcm9sbHBhcmVudCA9IGZhY3RvcnkoKTtcbiAgfVxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XG4gIHZhciByZWdleCA9IC8oYXV0b3xzY3JvbGwpLztcblxuICB2YXIgcGFyZW50cyA9IGZ1bmN0aW9uIChub2RlLCBwcykge1xuICAgIGlmIChub2RlLnBhcmVudE5vZGUgPT09IG51bGwpIHsgcmV0dXJuIHBzOyB9XG5cbiAgICByZXR1cm4gcGFyZW50cyhub2RlLnBhcmVudE5vZGUsIHBzLmNvbmNhdChbbm9kZV0pKTtcbiAgfTtcblxuICB2YXIgc3R5bGUgPSBmdW5jdGlvbiAobm9kZSwgcHJvcCkge1xuICAgIHJldHVybiBnZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpLmdldFByb3BlcnR5VmFsdWUocHJvcCk7XG4gIH07XG5cbiAgdmFyIG92ZXJmbG93ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICByZXR1cm4gc3R5bGUobm9kZSwgXCJvdmVyZmxvd1wiKSArIHN0eWxlKG5vZGUsIFwib3ZlcmZsb3cteVwiKSArIHN0eWxlKG5vZGUsIFwib3ZlcmZsb3cteFwiKTtcbiAgfTtcblxuICB2YXIgc2Nyb2xsID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgIHJldHVybiByZWdleC50ZXN0KG92ZXJmbG93KG5vZGUpKTtcbiAgfTtcblxuICB2YXIgc2Nyb2xsUGFyZW50ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cblxuICAgIHZhciBwcyA9IHBhcmVudHMobm9kZS5wYXJlbnROb2RlLCBbXSk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoc2Nyb2xsKHBzW2ldKSkge1xuICAgICAgICByZXR1cm4gcHNbaV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9O1xuXG4gIHJldHVybiBzY3JvbGxQYXJlbnQ7XG59KSk7XG4iLCIvKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4gIE1vZGlmaWVkIGJ5IEV2YW4gWW91IEB5eXg5OTA4MDNcbiovXG5cbmltcG9ydCBsaXN0VG9TdHlsZXMgZnJvbSAnLi9saXN0VG9TdHlsZXMnXG5cbnZhciBoYXNEb2N1bWVudCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcblxuaWYgKHR5cGVvZiBERUJVRyAhPT0gJ3VuZGVmaW5lZCcgJiYgREVCVUcpIHtcbiAgaWYgKCFoYXNEb2N1bWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAndnVlLXN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50LiAnICtcbiAgICBcIlVzZSB7IHRhcmdldDogJ25vZGUnIH0gaW4geW91ciBXZWJwYWNrIGNvbmZpZyB0byBpbmRpY2F0ZSBhIHNlcnZlci1yZW5kZXJpbmcgZW52aXJvbm1lbnQuXCJcbiAgKSB9XG59XG5cbi8qXG50eXBlIFN0eWxlT2JqZWN0ID0ge1xuICBpZDogbnVtYmVyO1xuICBwYXJ0czogQXJyYXk8U3R5bGVPYmplY3RQYXJ0PlxufVxuXG50eXBlIFN0eWxlT2JqZWN0UGFydCA9IHtcbiAgY3NzOiBzdHJpbmc7XG4gIG1lZGlhOiBzdHJpbmc7XG4gIHNvdXJjZU1hcDogP3N0cmluZ1xufVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0gey8qXG4gIFtpZDogbnVtYmVyXToge1xuICAgIGlkOiBudW1iZXIsXG4gICAgcmVmczogbnVtYmVyLFxuICAgIHBhcnRzOiBBcnJheTwob2JqPzogU3R5bGVPYmplY3RQYXJ0KSA9PiB2b2lkPlxuICB9XG4qL31cblxudmFyIGhlYWQgPSBoYXNEb2N1bWVudCAmJiAoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdKVxudmFyIHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsXG52YXIgc2luZ2xldG9uQ291bnRlciA9IDBcbnZhciBpc1Byb2R1Y3Rpb24gPSBmYWxzZVxudmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7fVxudmFyIG9wdGlvbnMgPSBudWxsXG52YXIgc3NySWRLZXkgPSAnZGF0YS12dWUtc3NyLWlkJ1xuXG4vLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbi8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbnZhciBpc09sZElFID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgL21zaWUgWzYtOV1cXGIvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRTdHlsZXNDbGllbnQgKHBhcmVudElkLCBsaXN0LCBfaXNQcm9kdWN0aW9uLCBfb3B0aW9ucykge1xuICBpc1Byb2R1Y3Rpb24gPSBfaXNQcm9kdWN0aW9uXG5cbiAgb3B0aW9ucyA9IF9vcHRpb25zIHx8IHt9XG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbGlzdClcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW11cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgICBkb21TdHlsZS5yZWZzLS1cbiAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKVxuICAgIH1cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBuZXdMaXN0KVxuICAgICAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXMgPSBbXVxuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldXG4gICAgICBpZiAoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgZG9tU3R5bGUucGFydHNbal0oKVxuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcyAvKiBBcnJheTxTdHlsZU9iamVjdD4gKi8pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKytcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSlcbiAgICAgIH1cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgaWYgKGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA+IGl0ZW0ucGFydHMubGVuZ3RoKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA9IGl0ZW0ucGFydHMubGVuZ3RoXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0geyBpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50ICgpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgc3R5bGVFbGVtZW50LnR5cGUgPSAndGV4dC9jc3MnXG4gIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KVxuICByZXR1cm4gc3R5bGVFbGVtZW50XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gIHZhciB1cGRhdGUsIHJlbW92ZVxuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3R5bGVbJyArIHNzcklkS2V5ICsgJ349XCInICsgb2JqLmlkICsgJ1wiXScpXG5cbiAgaWYgKHN0eWxlRWxlbWVudCkge1xuICAgIGlmIChpc1Byb2R1Y3Rpb24pIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGFuZCBpbiBwcm9kdWN0aW9uIG1vZGUuXG4gICAgICAvLyBzaW1wbHkgZG8gbm90aGluZy5cbiAgICAgIHJldHVybiBub29wXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGJ1dCBpbiBkZXYgbW9kZS5cbiAgICAgIC8vIGZvciBzb21lIHJlYXNvbiBDaHJvbWUgY2FuJ3QgaGFuZGxlIHNvdXJjZSBtYXAgaW4gc2VydmVyLXJlbmRlcmVkXG4gICAgICAvLyBzdHlsZSB0YWdzIC0gc291cmNlIG1hcHMgaW4gPHN0eWxlPiBvbmx5IHdvcmtzIGlmIHRoZSBzdHlsZSB0YWcgaXNcbiAgICAgIC8vIGNyZWF0ZWQgYW5kIGluc2VydGVkIGR5bmFtaWNhbGx5LiBTbyB3ZSByZW1vdmUgdGhlIHNlcnZlciByZW5kZXJlZFxuICAgICAgLy8gc3R5bGVzIGFuZCBpbmplY3QgbmV3IG9uZXMuXG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgaWYgKGlzT2xkSUUpIHtcbiAgICAvLyB1c2Ugc2luZ2xldG9uIG1vZGUgZm9yIElFOS5cbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrK1xuICAgIHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKSlcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSlcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKVxuICB9IGVsc2Uge1xuICAgIC8vIHVzZSBtdWx0aS1zdHlsZS10YWcgbW9kZSBpbiBhbGwgb3RoZXIgY2FzZXNcbiAgICBzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShvYmopXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcbiAgICAgICAgICBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuICAgICAgICAgIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKVxuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKVxuICAgIH1cbiAgfVxufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgdGV4dFN0b3JlID0gW11cblxuICByZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudFxuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpXG4gIH1cbn0pKClcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzc1xuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKVxuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKVxuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXNcbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSlcbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZUVsZW1lbnQsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzc1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWFcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXBcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKVxuICB9XG4gIGlmIChvcHRpb25zLnNzcklkKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShzc3JJZEtleSwgb2JqLmlkKVxuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZGV2dG9vbHMvZG9jcy9qYXZhc2NyaXB0LWRlYnVnZ2luZ1xuICAgIC8vIHRoaXMgbWFrZXMgc291cmNlIG1hcHMgaW5zaWRlIHN0eWxlIHRhZ3Mgd29yayBwcm9wZXJseSBpbiBDaHJvbWVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VVUkw9JyArIHNvdXJjZU1hcC5zb3VyY2VzWzBdICsgJyAqLydcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArICcgKi8nXG4gIH1cblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzXG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpXG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKVxuICB9XG59XG4iLCIvKipcbiAqIFRyYW5zbGF0ZXMgdGhlIGxpc3QgZm9ybWF0IHByb2R1Y2VkIGJ5IGNzcy1sb2FkZXIgaW50byBzb21ldGhpbmdcbiAqIGVhc2llciB0byBtYW5pcHVsYXRlLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaXN0VG9TdHlsZXMgKHBhcmVudElkLCBsaXN0KSB7XG4gIHZhciBzdHlsZXMgPSBbXVxuICB2YXIgbmV3U3R5bGVzID0ge31cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgdmFyIGlkID0gaXRlbVswXVxuICAgIHZhciBjc3MgPSBpdGVtWzFdXG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXVxuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdXG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBpZDogcGFyZW50SWQgKyAnOicgKyBpLFxuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH1cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7IGlkOiBpZCwgcGFydHM6IFtwYXJ0XSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0eWxlc1xufVxuIiwiaW1wb3J0IHsgcmVmLCBvbk1vdW50ZWQsIG9uQmVmb3JlVW5tb3VudCwgb3BlbkJsb2NrLCBjcmVhdGVCbG9jayB9IGZyb20gJ3Z1ZSc7XG5cbmZ1bmN0aW9uIGdldEludGVybmV0RXhwbG9yZXJWZXJzaW9uKCkge1xuICBjb25zdCB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuICBjb25zdCBtc2llID0gdWEuaW5kZXhPZignTVNJRSAnKTtcblxuICBpZiAobXNpZSA+IDApIHtcbiAgICAvLyBJRSAxMCBvciBvbGRlciA9PiByZXR1cm4gdmVyc2lvbiBudW1iZXJcbiAgICByZXR1cm4gcGFyc2VJbnQodWEuc3Vic3RyaW5nKG1zaWUgKyA1LCB1YS5pbmRleE9mKCcuJywgbXNpZSkpLCAxMCk7XG4gIH1cblxuICBjb25zdCB0cmlkZW50ID0gdWEuaW5kZXhPZignVHJpZGVudC8nKTtcblxuICBpZiAodHJpZGVudCA+IDApIHtcbiAgICAvLyBJRSAxMSA9PiByZXR1cm4gdmVyc2lvbiBudW1iZXJcbiAgICBjb25zdCBydiA9IHVhLmluZGV4T2YoJ3J2OicpO1xuICAgIHJldHVybiBwYXJzZUludCh1YS5zdWJzdHJpbmcocnYgKyAzLCB1YS5pbmRleE9mKCcuJywgcnYpKSwgMTApO1xuICB9XG5cbiAgY29uc3QgZWRnZSA9IHVhLmluZGV4T2YoJ0VkZ2UvJyk7XG5cbiAgaWYgKGVkZ2UgPiAwKSB7XG4gICAgLy8gRWRnZSAoSUUgMTIrKSA9PiByZXR1cm4gdmVyc2lvbiBudW1iZXJcbiAgICByZXR1cm4gcGFyc2VJbnQodWEuc3Vic3RyaW5nKGVkZ2UgKyA1LCB1YS5pbmRleE9mKCcuJywgZWRnZSkpLCAxMCk7XG4gIH0gLy8gb3RoZXIgYnJvd3NlclxuXG5cbiAgcmV0dXJuIC0xO1xufVxuXG5sZXQgaXNJRTtcblxuZnVuY3Rpb24gaW5pdENvbXBhdCgpIHtcbiAgaWYgKCFpbml0Q29tcGF0LmluaXQpIHtcbiAgICBpbml0Q29tcGF0LmluaXQgPSB0cnVlO1xuICAgIGlzSUUgPSBnZXRJbnRlcm5ldEV4cGxvcmVyVmVyc2lvbigpICE9PSAtMTtcbiAgfVxufVxuXG52YXIgc2NyaXB0ID0ge1xuICBuYW1lOiAnUmVzaXplT2JzZXJ2ZXInLFxuICBwcm9wczoge1xuICAgIHNob3dUcmlnZ2VyOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9XG4gIH0sXG4gIGVtaXRzOiBbJ25vdGlmeSddLFxuXG4gIHNldHVwKHByb3BzLCB7XG4gICAgZW1pdFxuICB9KSB7XG4gICAgbGV0IF93ID0gMDtcbiAgICBsZXQgX2ggPSAwO1xuICAgIGNvbnN0IGVsUmVmID0gcmVmKG51bGwpO1xuICAgIGxldCBfcmVzaXplT2JqZWN0ID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbXBhcmVBbmROb3RpZnkgPSAoKSA9PiB7XG4gICAgICBpZiAoX3cgIT09IGVsUmVmLnZhbHVlLm9mZnNldFdpZHRoIHx8IF9oICE9PSBlbFJlZi52YWx1ZS5vZmZzZXRIZWlnaHQpIHtcbiAgICAgICAgX3cgPSBlbFJlZi52YWx1ZS5vZmZzZXRXaWR0aDtcbiAgICAgICAgX2ggPSBlbFJlZi52YWx1ZS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIGVtaXQoJ25vdGlmeScsIHtcbiAgICAgICAgICB3aWR0aDogX3csXG4gICAgICAgICAgaGVpZ2h0OiBfaFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgYWRkUmVzaXplSGFuZGxlcnMgPSAoKSA9PiB7XG4gICAgICBfcmVzaXplT2JqZWN0LmNvbnRlbnREb2N1bWVudC5kZWZhdWx0Vmlldy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBjb21wYXJlQW5kTm90aWZ5KTtcblxuICAgICAgY29tcGFyZUFuZE5vdGlmeSgpO1xuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVSZXNpemVIYW5kbGVycyA9ICgpID0+IHtcbiAgICAgIGlmIChfcmVzaXplT2JqZWN0ICYmIF9yZXNpemVPYmplY3Qub25sb2FkKSB7XG4gICAgICAgIGlmICghaXNJRSAmJiBfcmVzaXplT2JqZWN0LmNvbnRlbnREb2N1bWVudCkge1xuICAgICAgICAgIF9yZXNpemVPYmplY3QuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNvbXBhcmVBbmROb3RpZnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxSZWYudmFsdWUucmVtb3ZlQ2hpbGQoX3Jlc2l6ZU9iamVjdCk7XG4gICAgICAgIF9yZXNpemVPYmplY3Qub25sb2FkID0gbnVsbDtcbiAgICAgICAgX3Jlc2l6ZU9iamVjdCA9IG51bGw7XG4gICAgICB9XG4gICAgfTtcblxuICAgIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgICBpbml0Q29tcGF0KCk7XG4gICAgICBfdyA9IGVsUmVmLnZhbHVlLm9mZnNldFdpZHRoO1xuICAgICAgX2ggPSBlbFJlZi52YWx1ZS5vZmZzZXRIZWlnaHQ7XG4gICAgICBjb25zdCBvYmplY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvYmplY3QnKTtcbiAgICAgIF9yZXNpemVPYmplY3QgPSBvYmplY3Q7XG4gICAgICBvYmplY3Quc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICBvYmplY3Quc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgb2JqZWN0Lm9ubG9hZCA9IGFkZFJlc2l6ZUhhbmRsZXJzO1xuICAgICAgb2JqZWN0LnR5cGUgPSAndGV4dC9odG1sJztcblxuICAgICAgaWYgKGlzSUUpIHtcbiAgICAgICAgZWxSZWYudmFsdWUuYXBwZW5kQ2hpbGQob2JqZWN0KTtcbiAgICAgIH1cblxuICAgICAgb2JqZWN0LmRhdGEgPSAnYWJvdXQ6YmxhbmsnO1xuXG4gICAgICBpZiAoIWlzSUUpIHtcbiAgICAgICAgZWxSZWYudmFsdWUuYXBwZW5kQ2hpbGQob2JqZWN0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLnNob3dUcmlnZ2VyKSB7XG4gICAgICAgIGNvbXBhcmVBbmROb3RpZnkoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgICAgcmVtb3ZlUmVzaXplSGFuZGxlcnMoKTtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgZWxSZWZcbiAgICB9O1xuICB9XG5cbn07XG5cbmNvbnN0IF9ob2lzdGVkXzEgPSB7XG4gIHJlZjogXCJlbFJlZlwiLFxuICBjbGFzczogXCJ2dWUzLXJlc2l6ZS1vYnNlcnZlclwiLFxuICB0YWJpbmRleDogXCItMVwiXG59O1xuZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gb3BlbkJsb2NrKCksIGNyZWF0ZUJsb2NrKFwiZGl2XCIsIF9ob2lzdGVkXzEsIG51bGwsIDUxMlxuICAvKiBORUVEX1BBVENIICovXG4gICk7XG59XG5cbnNjcmlwdC5yZW5kZXIgPSByZW5kZXI7XG5zY3JpcHQuX19maWxlID0gXCJzcmMvcGFja2FnZS9SZXNpemVPYnNlcnZlci9SZXNpemVPYnNlcnZlci52dWVcIjtcblxuc2NyaXB0Lmluc3RhbGwgPSBmdW5jdGlvbiAoYXBwKSB7XG4gIGFwcC5jb21wb25lbnQoc2NyaXB0Lm5hbWUsIHNjcmlwdCk7XG59O1xuXG52YXIgdmVyc2lvbiA9IFwiMC4yLjBcIjtcblxuY29uc3QgaW5zdGFsbCA9IGFwcCA9PiB7XG4gIGFwcC51c2Uoc2NyaXB0KTtcbn07IC8vIFBsdWdpblxuXG5cbmNvbnN0IFZ1ZTNSZXNpemUgPSB7XG4gIHZlcnNpb24sXG4gIGluc3RhbGxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZ1ZTNSZXNpemU7XG5leHBvcnQgeyBzY3JpcHQgYXMgUmVzaXplT2JzZXJ2ZXIsIGluc3RhbGwgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZ1ZTMtcmVzaXplLmVzbS5qcy5tYXBcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdnVlMy12aXJ0dWFsLXNjcm9sbGVyLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjQyN2E3NGFjXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdnVlMy12aXJ0dWFsLXNjcm9sbGVyLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdnVlMy12aXJ0dWFsLXNjcm9sbGVyLmNzc1wiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgUmVzaXplT2JzZXJ2ZXIgYXMgUmVzaXplT2JzZXJ2ZXIkMSB9IGZyb20gJ3Z1ZTMtcmVzaXplJztcbmltcG9ydCBTY3JvbGxQYXJlbnQgZnJvbSAnc2Nyb2xscGFyZW50JztcbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVzb2x2ZUNvbXBvbmVudCwgcmVzb2x2ZURpcmVjdGl2ZSwgd2l0aERpcmVjdGl2ZXMsIG9wZW5CbG9jaywgY3JlYXRlQmxvY2ssIHJlbmRlclNsb3QsIGNyZWF0ZUNvbW1lbnRWTm9kZSwgY3JlYXRlVk5vZGUsIEZyYWdtZW50LCByZW5kZXJMaXN0LCBtZXJnZVByb3BzLCB0b0hhbmRsZXJzLCB3aXRoQ3R4LCBuZXh0VGljayB9IGZyb20gJ3Z1ZSc7XG5cbnZhciBjb25maWcgPSB7XG4gIGl0ZW1zTGltaXQ6IDEwMDBcbn07XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgfSk7XG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG5cbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG4pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICByZXR1cm4gYXJyMjtcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIobykge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCBvW1N5bWJvbC5pdGVyYXRvcl0gPT0gbnVsbCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChvID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSkge1xuICAgICAgdmFyIGkgPSAwO1xuXG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzOiBGLFxuICAgICAgICBuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7XG4gICAgICAgICAgICBkb25lOiB0cnVlXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZTogb1tpKytdXG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9LFxuICAgICAgICBmOiBGXG4gICAgICB9O1xuICAgIH1cblxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbiAgfVxuXG4gIHZhciBpdCxcbiAgICAgIG5vcm1hbENvbXBsZXRpb24gPSB0cnVlLFxuICAgICAgZGlkRXJyID0gZmFsc2UsXG4gICAgICBlcnI7XG4gIHJldHVybiB7XG4gICAgczogZnVuY3Rpb24gKCkge1xuICAgICAgaXQgPSBvW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgICB9LFxuICAgIG46IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzdGVwID0gaXQubmV4dCgpO1xuICAgICAgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTtcbiAgICAgIHJldHVybiBzdGVwO1xuICAgIH0sXG4gICAgZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGRpZEVyciA9IHRydWU7XG4gICAgICBlcnIgPSBlO1xuICAgIH0sXG4gICAgZjogZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0LnJldHVybiAhPSBudWxsKSBpdC5yZXR1cm4oKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChkaWRFcnIpIHRocm93IGVycjtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIF90eXBlb2YkMShvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKFN5bWJvbC5pdGVyYXRvcikgPT09IFwic3ltYm9sXCIpIHtcbiAgICBfdHlwZW9mJDEgPSBmdW5jdGlvbiBfdHlwZW9mJDEob2JqKSB7XG4gICAgICByZXR1cm4gX3R5cGVvZihvYmopO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgX3R5cGVvZiQxID0gZnVuY3Rpb24gX3R5cGVvZiQxKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IF90eXBlb2Yob2JqKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2YkMShvYmopO1xufVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjI7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVyKSA9PT0gXCJbb2JqZWN0IEFyZ3VtZW50c11cIikgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzT3B0aW9ucyh2YWx1ZSkge1xuICB2YXIgb3B0aW9ucztcblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gU2ltcGxlIG9wdGlvbnMgKGNhbGxiYWNrLW9ubHkpXG4gICAgb3B0aW9ucyA9IHtcbiAgICAgIGNhbGxiYWNrOiB2YWx1ZVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgLy8gT3B0aW9ucyBvYmplY3RcbiAgICBvcHRpb25zID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb3B0aW9ucztcbn1cblxuZnVuY3Rpb24gdGhyb3R0bGUoY2FsbGJhY2ssIGRlbGF5KSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgdmFyIHRpbWVvdXQ7XG4gIHZhciBsYXN0U3RhdGU7XG4gIHZhciBjdXJyZW50QXJncztcblxuICB2YXIgdGhyb3R0bGVkID0gZnVuY3Rpb24gdGhyb3R0bGVkKHN0YXRlKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgY3VycmVudEFyZ3MgPSBhcmdzO1xuICAgIGlmICh0aW1lb3V0ICYmIHN0YXRlID09PSBsYXN0U3RhdGUpIHJldHVybjtcbiAgICB2YXIgbGVhZGluZyA9IG9wdGlvbnMubGVhZGluZztcblxuICAgIGlmICh0eXBlb2YgbGVhZGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbGVhZGluZyA9IGxlYWRpbmcoc3RhdGUsIGxhc3RTdGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKCghdGltZW91dCB8fCBzdGF0ZSAhPT0gbGFzdFN0YXRlKSAmJiBsZWFkaW5nKSB7XG4gICAgICBjYWxsYmFjay5hcHBseSh2b2lkIDAsIFtzdGF0ZV0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShjdXJyZW50QXJncykpKTtcbiAgICB9XG5cbiAgICBsYXN0U3RhdGUgPSBzdGF0ZTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2FsbGJhY2suYXBwbHkodm9pZCAwLCBbc3RhdGVdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoY3VycmVudEFyZ3MpKSk7XG4gICAgICB0aW1lb3V0ID0gMDtcbiAgICB9LCBkZWxheSk7XG4gIH07XG5cbiAgdGhyb3R0bGVkLl9jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIHRocm90dGxlZDtcbn1cblxuZnVuY3Rpb24gZGVlcEVxdWFsKHZhbDEsIHZhbDIpIHtcbiAgaWYgKHZhbDEgPT09IHZhbDIpIHJldHVybiB0cnVlO1xuXG4gIGlmIChfdHlwZW9mJDEodmFsMSkgPT09ICdvYmplY3QnKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgZm9yICh2YXIga2V5IGluIHZhbDEpIHtcbiAgICAgIGlmICghZGVlcEVxdWFsKHZhbDFba2V5XSwgdmFsMltrZXldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbnZhciBWaXNpYmlsaXR5U3RhdGUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBWaXNpYmlsaXR5U3RhdGUoZWwsIG9wdGlvbnMsIHZub2RlKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFZpc2liaWxpdHlTdGF0ZSk7XG5cbiAgICB0aGlzLmVsID0gZWw7XG4gICAgdGhpcy5vYnNlcnZlciA9IG51bGw7XG4gICAgdGhpcy5mcm96ZW4gPSBmYWxzZTtcbiAgICB0aGlzLmNyZWF0ZU9ic2VydmVyKG9wdGlvbnMsIHZub2RlKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhWaXNpYmlsaXR5U3RhdGUsIFt7XG4gICAga2V5OiBcImNyZWF0ZU9ic2VydmVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLm9ic2VydmVyKSB7XG4gICAgICAgIHRoaXMuZGVzdHJveU9ic2VydmVyKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmZyb3plbikgcmV0dXJuO1xuICAgICAgdGhpcy5vcHRpb25zID0gcHJvY2Vzc09wdGlvbnMob3B0aW9ucyk7XG5cbiAgICAgIHRoaXMuY2FsbGJhY2sgPSBmdW5jdGlvbiAocmVzdWx0LCBlbnRyeSkge1xuICAgICAgICBfdGhpcy5vcHRpb25zLmNhbGxiYWNrKHJlc3VsdCwgZW50cnkpO1xuXG4gICAgICAgIGlmIChyZXN1bHQgJiYgX3RoaXMub3B0aW9ucy5vbmNlKSB7XG4gICAgICAgICAgX3RoaXMuZnJvemVuID0gdHJ1ZTtcblxuICAgICAgICAgIF90aGlzLmRlc3Ryb3lPYnNlcnZlcigpO1xuICAgICAgICB9XG4gICAgICB9OyAvLyBUaHJvdHRsZVxuXG5cbiAgICAgIGlmICh0aGlzLmNhbGxiYWNrICYmIHRoaXMub3B0aW9ucy50aHJvdHRsZSkge1xuICAgICAgICB2YXIgX3JlZiA9IHRoaXMub3B0aW9ucy50aHJvdHRsZU9wdGlvbnMgfHwge30sXG4gICAgICAgICAgICBfbGVhZGluZyA9IF9yZWYubGVhZGluZztcblxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gdGhyb3R0bGUodGhpcy5jYWxsYmFjaywgdGhpcy5vcHRpb25zLnRocm90dGxlLCB7XG4gICAgICAgICAgbGVhZGluZzogZnVuY3Rpb24gbGVhZGluZyhzdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIF9sZWFkaW5nID09PSAnYm90aCcgfHwgX2xlYWRpbmcgPT09ICd2aXNpYmxlJyAmJiBzdGF0ZSB8fCBfbGVhZGluZyA9PT0gJ2hpZGRlbicgJiYgIXN0YXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMub2xkUmVzdWx0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihmdW5jdGlvbiAoZW50cmllcykge1xuICAgICAgICB2YXIgZW50cnkgPSBlbnRyaWVzWzBdO1xuXG4gICAgICAgIGlmIChlbnRyaWVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICB2YXIgaW50ZXJzZWN0aW5nRW50cnkgPSBlbnRyaWVzLmZpbmQoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlLmlzSW50ZXJzZWN0aW5nO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKGludGVyc2VjdGluZ0VudHJ5KSB7XG4gICAgICAgICAgICBlbnRyeSA9IGludGVyc2VjdGluZ0VudHJ5O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfdGhpcy5jYWxsYmFjaykge1xuICAgICAgICAgIC8vIFVzZSBpc0ludGVyc2VjdGluZyBpZiBwb3NzaWJsZSBiZWNhdXNlIGJyb3dzZXJzIGNhbiByZXBvcnQgaXNJbnRlcnNlY3RpbmcgYXMgdHJ1ZSwgYnV0IGludGVyc2VjdGlvblJhdGlvIGFzIDAsIHdoZW4gc29tZXRoaW5nIHZlcnkgc2xvd2x5IGVudGVycyB0aGUgdmlld3BvcnQuXG4gICAgICAgICAgdmFyIHJlc3VsdCA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nICYmIGVudHJ5LmludGVyc2VjdGlvblJhdGlvID49IF90aGlzLnRocmVzaG9sZDtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSBfdGhpcy5vbGRSZXN1bHQpIHJldHVybjtcbiAgICAgICAgICBfdGhpcy5vbGRSZXN1bHQgPSByZXN1bHQ7XG5cbiAgICAgICAgICBfdGhpcy5jYWxsYmFjayhyZXN1bHQsIGVudHJ5KTtcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcy5vcHRpb25zLmludGVyc2VjdGlvbik7IC8vIFdhaXQgZm9yIHRoZSBlbGVtZW50IHRvIGJlIGluIGRvY3VtZW50XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXMub2JzZXJ2ZXIpIHtcbiAgICAgICAgICBfdGhpcy5vYnNlcnZlci5vYnNlcnZlKF90aGlzLmVsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRlc3Ryb3lPYnNlcnZlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95T2JzZXJ2ZXIoKSB7XG4gICAgICBpZiAodGhpcy5vYnNlcnZlcikge1xuICAgICAgICB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG51bGw7XG4gICAgICB9IC8vIENhbmNlbCB0aHJvdHRsZWQgY2FsbFxuXG5cbiAgICAgIGlmICh0aGlzLmNhbGxiYWNrICYmIHRoaXMuY2FsbGJhY2suX2NsZWFyKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2suX2NsZWFyKCk7XG5cbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRocmVzaG9sZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5pbnRlcnNlY3Rpb24gJiYgdGhpcy5vcHRpb25zLmludGVyc2VjdGlvbi50aHJlc2hvbGQgfHwgMDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVmlzaWJpbGl0eVN0YXRlO1xufSgpO1xuXG5mdW5jdGlvbiBtb3VudGVkKGVsLCBfcmVmMiwgdm5vZGUpIHtcbiAgdmFyIHZhbHVlID0gX3JlZjIudmFsdWU7XG4gIGlmICghdmFsdWUpIHJldHVybjtcblxuICBpZiAodHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyID09PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnNvbGUud2FybignW3Z1ZS1vYnNlcnZlLXZpc2liaWxpdHldIEludGVyc2VjdGlvbk9ic2VydmVyIEFQSSBpcyBub3QgYXZhaWxhYmxlIGluIHlvdXIgYnJvd3Nlci4gUGxlYXNlIGluc3RhbGwgdGhpcyBwb2x5ZmlsbDogaHR0cHM6Ly9naXRodWIuY29tL3czYy9JbnRlcnNlY3Rpb25PYnNlcnZlci90cmVlL21hc3Rlci9wb2x5ZmlsbCcpO1xuICB9IGVsc2Uge1xuICAgIHZhciBzdGF0ZSA9IG5ldyBWaXNpYmlsaXR5U3RhdGUoZWwsIHZhbHVlLCB2bm9kZSk7XG4gICAgZWwuX3Z1ZV92aXNpYmlsaXR5U3RhdGUgPSBzdGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bm1vdW50ZWQoZWwpIHtcbiAgdmFyIHN0YXRlID0gZWwuX3Z1ZV92aXNpYmlsaXR5U3RhdGU7XG5cbiAgaWYgKHN0YXRlKSB7XG4gICAgc3RhdGUuZGVzdHJveU9ic2VydmVyKCk7XG4gICAgZGVsZXRlIGVsLl92dWVfdmlzaWJpbGl0eVN0YXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFVwZGF0ZWQoZWwsIF9yZWYzLCB2bm9kZSkge1xuICB2YXIgdmFsdWUgPSBfcmVmMy52YWx1ZSxcbiAgICAgIG9sZFZhbHVlID0gX3JlZjMub2xkVmFsdWU7XG4gIGlmIChkZWVwRXF1YWwodmFsdWUsIG9sZFZhbHVlKSkgcmV0dXJuO1xuICB2YXIgc3RhdGUgPSBlbC5fdnVlX3Zpc2liaWxpdHlTdGF0ZTtcblxuICBpZiAoIXZhbHVlKSB7XG4gICAgdW5tb3VudGVkKGVsKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoc3RhdGUpIHtcbiAgICBzdGF0ZS5jcmVhdGVPYnNlcnZlcih2YWx1ZSwgdm5vZGUpO1xuICB9IGVsc2Uge1xuICAgIG1vdW50ZWQoZWwsIHtcbiAgICAgIHZhbHVlOiB2YWx1ZVxuICAgIH0sIHZub2RlKTtcbiAgfVxufVxuXG52YXIgT2JzZXJ2ZVZpc2liaWxpdHkgPSB7XG4gIG1vdW50ZWQ6IG1vdW50ZWQsXG4gIGNvbXBvbmVudFVwZGF0ZWQ6IGNvbXBvbmVudFVwZGF0ZWQsXG4gIHVubW91bnRlZDogdW5tb3VudGVkXG59O1xuXG52YXIgcHJvcHMgPSB7XG4gIGl0ZW1zOiB7XG4gICAgdHlwZTogQXJyYXksXG4gICAgcmVxdWlyZWQ6IHRydWVcbiAgfSxcbiAga2V5RmllbGQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJ2lkJ1xuICB9LFxuICBkaXJlY3Rpb246IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJ3ZlcnRpY2FsJyxcbiAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uIHZhbGlkYXRvcih2YWx1ZSkge1xuICAgICAgcmV0dXJuIFsndmVydGljYWwnLCAnaG9yaXpvbnRhbCddLmluY2x1ZGVzKHZhbHVlKTtcbiAgICB9XG4gIH1cbn07XG5mdW5jdGlvbiBzaW1wbGVBcnJheSgpIHtcbiAgcmV0dXJuIHRoaXMuaXRlbXMubGVuZ3RoICYmIF90eXBlb2YodGhpcy5pdGVtc1swXSkgIT09ICdvYmplY3QnO1xufVxuXG52YXIgc3VwcG9ydHNQYXNzaXZlID0gZmFsc2U7XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcblxuICB0cnkge1xuICAgIHZhciBvcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICBzdXBwb3J0c1Bhc3NpdmUgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0JywgbnVsbCwgb3B0cyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59XG5cbnZhciB1aWQgPSAwO1xudmFyIHNjcmlwdCA9IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdSZWN5Y2xlU2Nyb2xsZXInLFxuICBjb21wb25lbnRzOiB7XG4gICAgUmVzaXplT2JzZXJ2ZXI6IFJlc2l6ZU9ic2VydmVyJDFcbiAgfSxcbiAgZGlyZWN0aXZlczoge1xuICAgIE9ic2VydmVWaXNpYmlsaXR5OiBPYnNlcnZlVmlzaWJpbGl0eVxuICB9LFxuICBwcm9wczogX29iamVjdFNwcmVhZDIoe30sIHByb3BzLCB7XG4gICAgaXRlbVNpemU6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICB9LFxuICAgIG1pbkl0ZW1TaXplOiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH0sXG4gICAgc2l6ZUZpZWxkOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnc2l6ZSdcbiAgICB9LFxuICAgIHR5cGVGaWVsZDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3R5cGUnXG4gICAgfSxcbiAgICBidWZmZXI6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDIwMFxuICAgIH0sXG4gICAgcGFnZU1vZGU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgcHJlcmVuZGVyOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAwXG4gICAgfSxcbiAgICBlbWl0VXBkYXRlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9XG4gIH0pLFxuICBlbWl0czogWyd2aXNpYmxlJywgJ2hpZGRlbicsICdyZXNpemUnLCAndXBkYXRlJ10sXG4gIGRhdGE6IGZ1bmN0aW9uIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBvb2w6IFtdLFxuICAgICAgdG90YWxTaXplOiAwLFxuICAgICAgcmVhZHk6IGZhbHNlLFxuICAgICAgaG92ZXJLZXk6IG51bGxcbiAgICB9O1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIHNpemVzOiBmdW5jdGlvbiBzaXplcygpIHtcbiAgICAgIGlmICh0aGlzLml0ZW1TaXplID09PSBudWxsKSB7XG4gICAgICAgIHZhciBzaXplcyA9IHtcbiAgICAgICAgICAnLTEnOiB7XG4gICAgICAgICAgICBhY2N1bXVsYXRvcjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICAgICAgdmFyIGZpZWxkID0gdGhpcy5zaXplRmllbGQ7XG4gICAgICAgIHZhciBtaW5JdGVtU2l6ZSA9IHRoaXMubWluSXRlbVNpemU7XG4gICAgICAgIHZhciBjb21wdXRlZE1pblNpemUgPSAxMDAwMDtcbiAgICAgICAgdmFyIGFjY3VtdWxhdG9yID0gMDtcbiAgICAgICAgdmFyIGN1cnJlbnQ7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBpdGVtcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBjdXJyZW50ID0gaXRlbXNbaV1bZmllbGRdIHx8IG1pbkl0ZW1TaXplO1xuXG4gICAgICAgICAgaWYgKGN1cnJlbnQgPCBjb21wdXRlZE1pblNpemUpIHtcbiAgICAgICAgICAgIGNvbXB1dGVkTWluU2l6ZSA9IGN1cnJlbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYWNjdW11bGF0b3IgKz0gY3VycmVudDtcbiAgICAgICAgICBzaXplc1tpXSA9IHtcbiAgICAgICAgICAgIGFjY3VtdWxhdG9yOiBhY2N1bXVsYXRvcixcbiAgICAgICAgICAgIHNpemU6IGN1cnJlbnRcbiAgICAgICAgICB9O1xuICAgICAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG5cbiAgICAgICAgdGhpcy4kX2NvbXB1dGVkTWluSXRlbVNpemUgPSBjb21wdXRlZE1pblNpemU7XG4gICAgICAgIHJldHVybiBzaXplcztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFtdO1xuICAgIH0sXG4gICAgc2ltcGxlQXJyYXk6IHNpbXBsZUFycmF5XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgaXRlbXM6IGZ1bmN0aW9uIGl0ZW1zKCkge1xuICAgICAgdGhpcy51cGRhdGVWaXNpYmxlSXRlbXModHJ1ZSk7XG4gICAgfSxcbiAgICBwYWdlTW9kZTogZnVuY3Rpb24gcGFnZU1vZGUoKSB7XG4gICAgICB0aGlzLmFwcGx5UGFnZU1vZGUoKTtcbiAgICAgIHRoaXMudXBkYXRlVmlzaWJsZUl0ZW1zKGZhbHNlKTtcbiAgICB9LFxuICAgIHNpemVzOiB7XG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVZpc2libGVJdGVtcyhmYWxzZSk7XG4gICAgICB9LFxuICAgICAgZGVlcDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgY3JlYXRlZDogZnVuY3Rpb24gY3JlYXRlZCgpIHtcbiAgICB0aGlzLiRfc3RhcnRJbmRleCA9IDA7XG4gICAgdGhpcy4kX2VuZEluZGV4ID0gMDtcbiAgICB0aGlzLiRfdmlld3MgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy4kX3VudXNlZFZpZXdzID0gbmV3IE1hcCgpO1xuICAgIHRoaXMuJF9zY3JvbGxEaXJ0eSA9IGZhbHNlO1xuICAgIHRoaXMuJF9sYXN0VXBkYXRlU2Nyb2xsUG9zaXRpb24gPSAwOyAvLyBJbiBTU1IgbW9kZSwgd2UgYWxzbyBwcmVyZW5kZXIgdGhlIHNhbWUgbnVtYmVyIG9mIGl0ZW0gZm9yIHRoZSBmaXJzdCByZW5kZXJcbiAgICAvLyB0byBhdm9pciBtaXNtYXRjaCBiZXR3ZWVuIHNlcnZlciBhbmQgY2xpZW50IHRlbXBsYXRlc1xuXG4gICAgaWYgKHRoaXMucHJlcmVuZGVyKSB7XG4gICAgICB0aGlzLiRfcHJlcmVuZGVyID0gdHJ1ZTtcbiAgICAgIHRoaXMudXBkYXRlVmlzaWJsZUl0ZW1zKGZhbHNlKTtcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uIG1vdW50ZWQoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMuYXBwbHlQYWdlTW9kZSgpO1xuICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEluIFNTUiBtb2RlLCByZW5kZXIgdGhlIHJlYWwgbnVtYmVyIG9mIHZpc2libGUgaXRlbXNcbiAgICAgIF90aGlzLiRfcHJlcmVuZGVyID0gZmFsc2U7XG5cbiAgICAgIF90aGlzLnVwZGF0ZVZpc2libGVJdGVtcyh0cnVlKTtcblxuICAgICAgX3RoaXMucmVhZHkgPSB0cnVlO1xuICAgIH0pO1xuICB9LFxuICBiZWZvcmVVbm1vdW50OiBmdW5jdGlvbiBiZWZvcmVVbm1vdW50KCkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBhZGRWaWV3OiBmdW5jdGlvbiBhZGRWaWV3KHBvb2wsIGluZGV4LCBpdGVtLCBrZXksIHR5cGUpIHtcbiAgICAgIHZhciB2aWV3ID0ge1xuICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICBwb3NpdGlvbjogMFxuICAgICAgfTtcbiAgICAgIHZpZXcubnIgPSB7XG4gICAgICAgIGlkOiB1aWQrKyxcbiAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICB1c2VkOiB0cnVlLFxuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgdHlwZTogdHlwZVxuICAgICAgfTtcbiAgICAgIHBvb2wucHVzaCh2aWV3KTtcbiAgICAgIHJldHVybiB2aWV3O1xuICAgIH0sXG4gICAgdW51c2VWaWV3OiBmdW5jdGlvbiB1bnVzZVZpZXcodmlldykge1xuICAgICAgdmFyIGZha2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuICAgICAgdmFyIHVudXNlZFZpZXdzID0gdGhpcy4kX3VudXNlZFZpZXdzO1xuICAgICAgdmFyIHR5cGUgPSB2aWV3Lm5yLnR5cGU7XG4gICAgICB2YXIgdW51c2VkUG9vbCA9IHVudXNlZFZpZXdzLmdldCh0eXBlKTtcblxuICAgICAgaWYgKCF1bnVzZWRQb29sKSB7XG4gICAgICAgIHVudXNlZFBvb2wgPSBbXTtcbiAgICAgICAgdW51c2VkVmlld3Muc2V0KHR5cGUsIHVudXNlZFBvb2wpO1xuICAgICAgfVxuXG4gICAgICB1bnVzZWRQb29sLnB1c2godmlldyk7XG5cbiAgICAgIGlmICghZmFrZSkge1xuICAgICAgICB2aWV3Lm5yLnVzZWQgPSBmYWxzZTtcbiAgICAgICAgdmlldy5wb3NpdGlvbiA9IC05OTk5O1xuICAgICAgICB0aGlzLiRfdmlld3MuZGVsZXRlKHZpZXcubnIua2V5KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGhhbmRsZVJlc2l6ZTogZnVuY3Rpb24gaGFuZGxlUmVzaXplKCkge1xuICAgICAgdGhpcy4kZW1pdCgncmVzaXplJyk7XG4gICAgICBpZiAodGhpcy5yZWFkeSkgdGhpcy51cGRhdGVWaXNpYmxlSXRlbXMoZmFsc2UpO1xuICAgIH0sXG4gICAgaGFuZGxlU2Nyb2xsOiBmdW5jdGlvbiBoYW5kbGVTY3JvbGwoZXZlbnQpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBpZiAoIXRoaXMuJF9zY3JvbGxEaXJ0eSkge1xuICAgICAgICB0aGlzLiRfc2Nyb2xsRGlydHkgPSB0cnVlO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi4kX3Njcm9sbERpcnR5ID0gZmFsc2U7XG5cbiAgICAgICAgICB2YXIgX3RoaXMyJHVwZGF0ZVZpc2libGVJID0gX3RoaXMyLnVwZGF0ZVZpc2libGVJdGVtcyhmYWxzZSwgdHJ1ZSksXG4gICAgICAgICAgICAgIGNvbnRpbnVvdXMgPSBfdGhpczIkdXBkYXRlVmlzaWJsZUkuY29udGludW91czsgLy8gSXQgc2VlbXMgc29tZXRpbWVzIGNocm9tZSBkb2Vzbid0IGZpcmUgc2Nyb2xsIGV2ZW50IDovXG4gICAgICAgICAgLy8gV2hlbiBub24gY29udGlub3VzIHNjcm9sbGluZyBpcyBlbmRpbmcsIHdlIGZvcmNlIGEgcmVmcmVzaFxuXG5cbiAgICAgICAgICBpZiAoIWNvbnRpbnVvdXMpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChfdGhpczIuJF9yZWZyZXNoVGltb3V0KTtcbiAgICAgICAgICAgIF90aGlzMi4kX3JlZnJlc2hUaW1vdXQgPSBzZXRUaW1lb3V0KF90aGlzMi5oYW5kbGVTY3JvbGwsIDEwMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2U6IGZ1bmN0aW9uIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UoaXNWaXNpYmxlLCBlbnRyeSkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLnJlYWR5KSB7XG4gICAgICAgIGlmIChpc1Zpc2libGUgfHwgZW50cnkuYm91bmRpbmdDbGllbnRSZWN0LndpZHRoICE9PSAwIHx8IGVudHJ5LmJvdW5kaW5nQ2xpZW50UmVjdC5oZWlnaHQgIT09IDApIHtcbiAgICAgICAgICB0aGlzLiRlbWl0KCd2aXNpYmxlJyk7XG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzMy51cGRhdGVWaXNpYmxlSXRlbXMoZmFsc2UpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuJGVtaXQoJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICB1cGRhdGVWaXNpYmxlSXRlbXM6IGZ1bmN0aW9uIHVwZGF0ZVZpc2libGVJdGVtcyhjaGVja0l0ZW0pIHtcbiAgICAgIHZhciBjaGVja1Bvc2l0aW9uRGlmZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gICAgICB2YXIgaXRlbVNpemUgPSB0aGlzLml0ZW1TaXplO1xuICAgICAgdmFyIG1pbkl0ZW1TaXplID0gdGhpcy4kX2NvbXB1dGVkTWluSXRlbVNpemU7XG4gICAgICB2YXIgdHlwZUZpZWxkID0gdGhpcy50eXBlRmllbGQ7XG4gICAgICB2YXIga2V5RmllbGQgPSB0aGlzLnNpbXBsZUFycmF5ID8gbnVsbCA6IHRoaXMua2V5RmllbGQ7XG4gICAgICB2YXIgaXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgICAgdmFyIGNvdW50ID0gaXRlbXMubGVuZ3RoO1xuICAgICAgdmFyIHNpemVzID0gdGhpcy5zaXplcztcbiAgICAgIHZhciB2aWV3cyA9IHRoaXMuJF92aWV3cztcbiAgICAgIHZhciB1bnVzZWRWaWV3cyA9IHRoaXMuJF91bnVzZWRWaWV3cztcbiAgICAgIHZhciBwb29sID0gdGhpcy5wb29sO1xuICAgICAgdmFyIHN0YXJ0SW5kZXgsIGVuZEluZGV4O1xuICAgICAgdmFyIHRvdGFsU2l6ZTtcblxuICAgICAgaWYgKCFjb3VudCkge1xuICAgICAgICBzdGFydEluZGV4ID0gZW5kSW5kZXggPSB0b3RhbFNpemUgPSAwO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLiRfcHJlcmVuZGVyKSB7XG4gICAgICAgIHN0YXJ0SW5kZXggPSAwO1xuICAgICAgICBlbmRJbmRleCA9IHRoaXMucHJlcmVuZGVyO1xuICAgICAgICB0b3RhbFNpemUgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHNjcm9sbCA9IHRoaXMuZ2V0U2Nyb2xsKCk7IC8vIFNraXAgdXBkYXRlIGlmIHVzZSBoYXNuJ3Qgc2Nyb2xsZWQgZW5vdWdoXG5cbiAgICAgICAgaWYgKGNoZWNrUG9zaXRpb25EaWZmKSB7XG4gICAgICAgICAgdmFyIHBvc2l0aW9uRGlmZiA9IHNjcm9sbC5zdGFydCAtIHRoaXMuJF9sYXN0VXBkYXRlU2Nyb2xsUG9zaXRpb247XG4gICAgICAgICAgaWYgKHBvc2l0aW9uRGlmZiA8IDApIHBvc2l0aW9uRGlmZiA9IC1wb3NpdGlvbkRpZmY7XG5cbiAgICAgICAgICBpZiAoaXRlbVNpemUgPT09IG51bGwgJiYgcG9zaXRpb25EaWZmIDwgbWluSXRlbVNpemUgfHwgcG9zaXRpb25EaWZmIDwgaXRlbVNpemUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGNvbnRpbnVvdXM6IHRydWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kX2xhc3RVcGRhdGVTY3JvbGxQb3NpdGlvbiA9IHNjcm9sbC5zdGFydDtcbiAgICAgICAgdmFyIGJ1ZmZlciA9IHRoaXMuYnVmZmVyO1xuICAgICAgICBzY3JvbGwuc3RhcnQgLT0gYnVmZmVyO1xuICAgICAgICBzY3JvbGwuZW5kICs9IGJ1ZmZlcjsgLy8gVmFyaWFibGUgc2l6ZSBtb2RlXG5cbiAgICAgICAgaWYgKGl0ZW1TaXplID09PSBudWxsKSB7XG4gICAgICAgICAgdmFyIGg7XG4gICAgICAgICAgdmFyIGEgPSAwO1xuICAgICAgICAgIHZhciBiID0gY291bnQgLSAxO1xuICAgICAgICAgIHZhciBpID0gfn4oY291bnQgLyAyKTtcbiAgICAgICAgICB2YXIgb2xkSTsgLy8gU2VhcmNoaW5nIGZvciBzdGFydEluZGV4XG5cbiAgICAgICAgICBkbyB7XG4gICAgICAgICAgICBvbGRJID0gaTtcbiAgICAgICAgICAgIGggPSBzaXplc1tpXS5hY2N1bXVsYXRvcjtcblxuICAgICAgICAgICAgaWYgKGggPCBzY3JvbGwuc3RhcnQpIHtcbiAgICAgICAgICAgICAgYSA9IGk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPCBjb3VudCAtIDEgJiYgc2l6ZXNbaSArIDFdLmFjY3VtdWxhdG9yID4gc2Nyb2xsLnN0YXJ0KSB7XG4gICAgICAgICAgICAgIGIgPSBpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpID0gfn4oKGEgKyBiKSAvIDIpO1xuICAgICAgICAgIH0gd2hpbGUgKGkgIT09IG9sZEkpO1xuXG4gICAgICAgICAgaSA8IDAgJiYgKGkgPSAwKTtcbiAgICAgICAgICBzdGFydEluZGV4ID0gaTsgLy8gRm9yIGNvbnRhaW5lciBzdHlsZVxuXG4gICAgICAgICAgdG90YWxTaXplID0gc2l6ZXNbY291bnQgLSAxXS5hY2N1bXVsYXRvcjsgLy8gU2VhcmNoaW5nIGZvciBlbmRJbmRleFxuXG4gICAgICAgICAgZm9yIChlbmRJbmRleCA9IGk7IGVuZEluZGV4IDwgY291bnQgJiYgc2l6ZXNbZW5kSW5kZXhdLmFjY3VtdWxhdG9yIDwgc2Nyb2xsLmVuZDsgZW5kSW5kZXgrKykge1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChlbmRJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIGVuZEluZGV4ID0gaXRlbXMubGVuZ3RoIC0gMTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZW5kSW5kZXgrKzsgLy8gQm91bmRzXG5cbiAgICAgICAgICAgIGVuZEluZGV4ID4gY291bnQgJiYgKGVuZEluZGV4ID0gY291bnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBGaXhlZCBzaXplIG1vZGVcbiAgICAgICAgICBzdGFydEluZGV4ID0gfn4oc2Nyb2xsLnN0YXJ0IC8gaXRlbVNpemUpO1xuICAgICAgICAgIGVuZEluZGV4ID0gTWF0aC5jZWlsKHNjcm9sbC5lbmQgLyBpdGVtU2l6ZSk7IC8vIEJvdW5kc1xuXG4gICAgICAgICAgc3RhcnRJbmRleCA8IDAgJiYgKHN0YXJ0SW5kZXggPSAwKTtcbiAgICAgICAgICBlbmRJbmRleCA+IGNvdW50ICYmIChlbmRJbmRleCA9IGNvdW50KTtcbiAgICAgICAgICB0b3RhbFNpemUgPSBjb3VudCAqIGl0ZW1TaXplO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChlbmRJbmRleCAtIHN0YXJ0SW5kZXggPiBjb25maWcuaXRlbXNMaW1pdCkge1xuICAgICAgICB0aGlzLml0ZW1zTGltaXRFcnJvcigpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnRvdGFsU2l6ZSA9IHRvdGFsU2l6ZTtcbiAgICAgIHZhciB2aWV3O1xuICAgICAgdmFyIGNvbnRpbnVvdXMgPSBzdGFydEluZGV4IDw9IHRoaXMuJF9lbmRJbmRleCAmJiBlbmRJbmRleCA+PSB0aGlzLiRfc3RhcnRJbmRleDtcblxuICAgICAgaWYgKHRoaXMuJF9jb250aW51b3VzICE9PSBjb250aW51b3VzKSB7XG4gICAgICAgIGlmIChjb250aW51b3VzKSB7XG4gICAgICAgICAgdmlld3MuY2xlYXIoKTtcbiAgICAgICAgICB1bnVzZWRWaWV3cy5jbGVhcigpO1xuXG4gICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBsID0gcG9vbC5sZW5ndGg7IF9pIDwgbDsgX2krKykge1xuICAgICAgICAgICAgdmlldyA9IHBvb2xbX2ldO1xuICAgICAgICAgICAgdGhpcy51bnVzZVZpZXcodmlldyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kX2NvbnRpbnVvdXMgPSBjb250aW51b3VzO1xuICAgICAgfSBlbHNlIGlmIChjb250aW51b3VzKSB7XG4gICAgICAgIGZvciAodmFyIF9pMiA9IDAsIF9sID0gcG9vbC5sZW5ndGg7IF9pMiA8IF9sOyBfaTIrKykge1xuICAgICAgICAgIHZpZXcgPSBwb29sW19pMl07XG5cbiAgICAgICAgICBpZiAodmlldy5uci51c2VkKSB7XG4gICAgICAgICAgICAvLyBVcGRhdGUgdmlldyBpdGVtIGluZGV4XG4gICAgICAgICAgICBpZiAoY2hlY2tJdGVtKSB7XG4gICAgICAgICAgICAgIHZpZXcubnIuaW5kZXggPSBpdGVtcy5maW5kSW5kZXgoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5RmllbGQgPyBpdGVtW2tleUZpZWxkXSA9PT0gdmlldy5pdGVtW2tleUZpZWxkXSA6IGl0ZW0gPT09IHZpZXcuaXRlbTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IC8vIENoZWNrIGlmIGluZGV4IGlzIHN0aWxsIGluIHZpc2libGUgcmFuZ2VcblxuXG4gICAgICAgICAgICBpZiAodmlldy5uci5pbmRleCA9PT0gLTEgfHwgdmlldy5uci5pbmRleCA8IHN0YXJ0SW5kZXggfHwgdmlldy5uci5pbmRleCA+PSBlbmRJbmRleCkge1xuICAgICAgICAgICAgICB0aGlzLnVudXNlVmlldyh2aWV3KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHVudXNlZEluZGV4ID0gY29udGludW91cyA/IG51bGwgOiBuZXcgTWFwKCk7XG4gICAgICB2YXIgaXRlbSwgdHlwZSwgdW51c2VkUG9vbDtcbiAgICAgIHZhciB2O1xuXG4gICAgICBmb3IgKHZhciBfaTMgPSBzdGFydEluZGV4OyBfaTMgPCBlbmRJbmRleDsgX2kzKyspIHtcbiAgICAgICAgaXRlbSA9IGl0ZW1zW19pM107XG4gICAgICAgIHZhciBrZXkgPSBrZXlGaWVsZCA/IGl0ZW1ba2V5RmllbGRdIDogaXRlbTtcblxuICAgICAgICBpZiAoa2V5ID09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJLZXkgaXMgXCIuY29uY2F0KGtleSwgXCIgb24gaXRlbSAoa2V5RmllbGQgaXMgJ1wiKS5jb25jYXQoa2V5RmllbGQsIFwiJylcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmlldyA9IHZpZXdzLmdldChrZXkpO1xuXG4gICAgICAgIGlmICghaXRlbVNpemUgJiYgIXNpemVzW19pM10uc2l6ZSkge1xuICAgICAgICAgIGlmICh2aWV3KSB0aGlzLnVudXNlVmlldyh2aWV3KTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSAvLyBObyB2aWV3IGFzc2lnbmVkIHRvIGl0ZW1cblxuXG4gICAgICAgIGlmICghdmlldykge1xuICAgICAgICAgIHR5cGUgPSBpdGVtW3R5cGVGaWVsZF07XG4gICAgICAgICAgdW51c2VkUG9vbCA9IHVudXNlZFZpZXdzLmdldCh0eXBlKTtcblxuICAgICAgICAgIGlmIChjb250aW51b3VzKSB7XG4gICAgICAgICAgICAvLyBSZXVzZSBleGlzdGluZyB2aWV3XG4gICAgICAgICAgICBpZiAodW51c2VkUG9vbCAmJiB1bnVzZWRQb29sLmxlbmd0aCkge1xuICAgICAgICAgICAgICB2aWV3ID0gdW51c2VkUG9vbC5wb3AoKTtcbiAgICAgICAgICAgICAgdmlldy5pdGVtID0gaXRlbTtcbiAgICAgICAgICAgICAgdmlldy5uci51c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdmlldy5uci5pbmRleCA9IF9pMztcbiAgICAgICAgICAgICAgdmlldy5uci5rZXkgPSBrZXk7XG4gICAgICAgICAgICAgIHZpZXcubnIudHlwZSA9IHR5cGU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2aWV3ID0gdGhpcy5hZGRWaWV3KHBvb2wsIF9pMywgaXRlbSwga2V5LCB0eXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gVXNlIGV4aXN0aW5nIHZpZXdcbiAgICAgICAgICAgIC8vIFdlIGRvbid0IGNhcmUgaWYgdGhleSBhcmUgYWxyZWFkeSB1c2VkXG4gICAgICAgICAgICAvLyBiZWNhdXNlIHdlIGFyZSBub3QgaW4gY29udGlub3VzIHNjcm9sbGluZ1xuICAgICAgICAgICAgdiA9IHVudXNlZEluZGV4LmdldCh0eXBlKSB8fCAwO1xuXG4gICAgICAgICAgICBpZiAoIXVudXNlZFBvb2wgfHwgdiA+PSB1bnVzZWRQb29sLmxlbmd0aCkge1xuICAgICAgICAgICAgICB2aWV3ID0gdGhpcy5hZGRWaWV3KHBvb2wsIF9pMywgaXRlbSwga2V5LCB0eXBlKTtcbiAgICAgICAgICAgICAgdGhpcy51bnVzZVZpZXcodmlldywgdHJ1ZSk7XG4gICAgICAgICAgICAgIHVudXNlZFBvb2wgPSB1bnVzZWRWaWV3cy5nZXQodHlwZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZpZXcgPSB1bnVzZWRQb29sW3ZdO1xuICAgICAgICAgICAgdmlldy5pdGVtID0gaXRlbTtcbiAgICAgICAgICAgIHZpZXcubnIudXNlZCA9IHRydWU7XG4gICAgICAgICAgICB2aWV3Lm5yLmluZGV4ID0gX2kzO1xuICAgICAgICAgICAgdmlldy5uci5rZXkgPSBrZXk7XG4gICAgICAgICAgICB2aWV3Lm5yLnR5cGUgPSB0eXBlO1xuICAgICAgICAgICAgdW51c2VkSW5kZXguc2V0KHR5cGUsIHYgKyAxKTtcbiAgICAgICAgICAgIHYrKztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2aWV3cy5zZXQoa2V5LCB2aWV3KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2aWV3Lm5yLnVzZWQgPSB0cnVlO1xuICAgICAgICAgIHZpZXcuaXRlbSA9IGl0ZW07XG4gICAgICAgIH0gLy8gVXBkYXRlIHBvc2l0aW9uXG5cblxuICAgICAgICBpZiAoaXRlbVNpemUgPT09IG51bGwpIHtcbiAgICAgICAgICB2aWV3LnBvc2l0aW9uID0gc2l6ZXNbX2kzIC0gMV0uYWNjdW11bGF0b3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmlldy5wb3NpdGlvbiA9IF9pMyAqIGl0ZW1TaXplO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuJF9zdGFydEluZGV4ID0gc3RhcnRJbmRleDtcbiAgICAgIHRoaXMuJF9lbmRJbmRleCA9IGVuZEluZGV4O1xuICAgICAgaWYgKHRoaXMuZW1pdFVwZGF0ZSkgdGhpcy4kZW1pdCgndXBkYXRlJywgc3RhcnRJbmRleCwgZW5kSW5kZXgpOyAvLyBBZnRlciB0aGUgdXNlciBoYXMgZmluaXNoZWQgc2Nyb2xsaW5nXG4gICAgICAvLyBTb3J0IHZpZXdzIHNvIHRleHQgc2VsZWN0aW9uIGlzIGNvcnJlY3RcblxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuJF9zb3J0VGltZXIpO1xuICAgICAgdGhpcy4kX3NvcnRUaW1lciA9IHNldFRpbWVvdXQodGhpcy5zb3J0Vmlld3MsIDMwMCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb250aW51b3VzOiBjb250aW51b3VzXG4gICAgICB9O1xuICAgIH0sXG4gICAgZ2V0TGlzdGVuZXJUYXJnZXQ6IGZ1bmN0aW9uIGdldExpc3RlbmVyVGFyZ2V0KCkge1xuICAgICAgdmFyIHRhcmdldCA9IFNjcm9sbFBhcmVudCh0aGlzLiRlbCk7IC8vIEZpeCBnbG9iYWwgc2Nyb2xsIHRhcmdldCBmb3IgQ2hyb21lIGFuZCBTYWZhcmlcblxuICAgICAgaWYgKHdpbmRvdy5kb2N1bWVudCAmJiAodGFyZ2V0ID09PSB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IHRhcmdldCA9PT0gd2luZG93LmRvY3VtZW50LmJvZHkpKSB7XG4gICAgICAgIHRhcmdldCA9IHdpbmRvdztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9LFxuICAgIGdldFNjcm9sbDogZnVuY3Rpb24gZ2V0U2Nyb2xsKCkge1xuICAgICAgdmFyIGVsID0gdGhpcy4kZWwsXG4gICAgICAgICAgZGlyZWN0aW9uID0gdGhpcy5kaXJlY3Rpb247XG4gICAgICB2YXIgaXNWZXJ0aWNhbCA9IGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJztcbiAgICAgIHZhciBzY3JvbGxTdGF0ZTtcblxuICAgICAgaWYgKHRoaXMucGFnZU1vZGUpIHtcbiAgICAgICAgdmFyIGJvdW5kcyA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgYm91bmRzU2l6ZSA9IGlzVmVydGljYWwgPyBib3VuZHMuaGVpZ2h0IDogYm91bmRzLndpZHRoO1xuICAgICAgICB2YXIgc3RhcnQgPSAtKGlzVmVydGljYWwgPyBib3VuZHMudG9wIDogYm91bmRzLmxlZnQpO1xuICAgICAgICB2YXIgc2l6ZSA9IGlzVmVydGljYWwgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgICAgICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgICAgICAgc2l6ZSArPSBzdGFydDtcbiAgICAgICAgICBzdGFydCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhcnQgKyBzaXplID4gYm91bmRzU2l6ZSkge1xuICAgICAgICAgIHNpemUgPSBib3VuZHNTaXplIC0gc3RhcnQ7XG4gICAgICAgIH1cblxuICAgICAgICBzY3JvbGxTdGF0ZSA9IHtcbiAgICAgICAgICBzdGFydDogc3RhcnQsXG4gICAgICAgICAgZW5kOiBzdGFydCArIHNpemVcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAoaXNWZXJ0aWNhbCkge1xuICAgICAgICBzY3JvbGxTdGF0ZSA9IHtcbiAgICAgICAgICBzdGFydDogZWwuc2Nyb2xsVG9wLFxuICAgICAgICAgIGVuZDogZWwuc2Nyb2xsVG9wICsgZWwuY2xpZW50SGVpZ2h0XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY3JvbGxTdGF0ZSA9IHtcbiAgICAgICAgICBzdGFydDogZWwuc2Nyb2xsTGVmdCxcbiAgICAgICAgICBlbmQ6IGVsLnNjcm9sbExlZnQgKyBlbC5jbGllbnRXaWR0aFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2Nyb2xsU3RhdGU7XG4gICAgfSxcbiAgICBhcHBseVBhZ2VNb2RlOiBmdW5jdGlvbiBhcHBseVBhZ2VNb2RlKCkge1xuICAgICAgaWYgKHRoaXMucGFnZU1vZGUpIHtcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBhZGRMaXN0ZW5lcnM6IGZ1bmN0aW9uIGFkZExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMubGlzdGVuZXJUYXJnZXQgPSB0aGlzLmdldExpc3RlbmVyVGFyZ2V0KCk7XG4gICAgICB0aGlzLmxpc3RlbmVyVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGFuZGxlU2Nyb2xsLCBzdXBwb3J0c1Bhc3NpdmUgPyB7XG4gICAgICAgIHBhc3NpdmU6IHRydWVcbiAgICAgIH0gOiBmYWxzZSk7XG4gICAgICB0aGlzLmxpc3RlbmVyVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKTtcbiAgICB9LFxuICAgIHJlbW92ZUxpc3RlbmVyczogZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXJzKCkge1xuICAgICAgaWYgKCF0aGlzLmxpc3RlbmVyVGFyZ2V0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5saXN0ZW5lclRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG4gICAgICB0aGlzLmxpc3RlbmVyVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKTtcbiAgICAgIHRoaXMubGlzdGVuZXJUYXJnZXQgPSBudWxsO1xuICAgIH0sXG4gICAgc2Nyb2xsVG9JdGVtOiBmdW5jdGlvbiBzY3JvbGxUb0l0ZW0oaW5kZXgpIHtcbiAgICAgIHZhciBzY3JvbGw7XG5cbiAgICAgIGlmICh0aGlzLml0ZW1TaXplID09PSBudWxsKSB7XG4gICAgICAgIHNjcm9sbCA9IGluZGV4ID4gMCA/IHRoaXMuc2l6ZXNbaW5kZXggLSAxXS5hY2N1bXVsYXRvciA6IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY3JvbGwgPSBpbmRleCAqIHRoaXMuaXRlbVNpemU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2Nyb2xsVG9Qb3NpdGlvbihzY3JvbGwpO1xuICAgIH0sXG4gICAgc2Nyb2xsVG9Qb3NpdGlvbjogZnVuY3Rpb24gc2Nyb2xsVG9Qb3NpdGlvbihwb3NpdGlvbikge1xuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgIHRoaXMuJGVsLnNjcm9sbFRvcCA9IHBvc2l0aW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4kZWwuc2Nyb2xsTGVmdCA9IHBvc2l0aW9uO1xuICAgICAgfVxuICAgIH0sXG4gICAgaXRlbXNMaW1pdEVycm9yOiBmdW5jdGlvbiBpdGVtc0xpbWl0RXJyb3IoKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdJdCBzZWVtcyB0aGUgc2Nyb2xsZXIgZWxlbWVudCBpc25cXCd0IHNjcm9sbGluZywgc28gaXQgdHJpZXMgdG8gcmVuZGVyIGFsbCB0aGUgaXRlbXMgYXQgb25jZS4nLCAnU2Nyb2xsZXI6JywgX3RoaXM0LiRlbCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdNYWtlIHN1cmUgdGhlIHNjcm9sbGVyIGhhcyBhIGZpeGVkIGhlaWdodCAob3Igd2lkdGgpIGFuZCBcXCdvdmVyZmxvdy15XFwnIChvciBcXCdvdmVyZmxvdy14XFwnKSBzZXQgdG8gXFwnYXV0b1xcJyBzbyBpdCBjYW4gc2Nyb2xsIGNvcnJlY3RseSBhbmQgb25seSByZW5kZXIgdGhlIGl0ZW1zIHZpc2libGUgaW4gdGhlIHNjcm9sbCB2aWV3cG9ydC4nKTtcbiAgICAgIH0pO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW5kZXJlZCBpdGVtcyBsaW1pdCByZWFjaGVkJyk7XG4gICAgfSxcbiAgICBzb3J0Vmlld3M6IGZ1bmN0aW9uIHNvcnRWaWV3cygpIHtcbiAgICAgIHRoaXMucG9vbC5zb3J0KGZ1bmN0aW9uICh2aWV3QSwgdmlld0IpIHtcbiAgICAgICAgcmV0dXJuIHZpZXdBLm5yLmluZGV4IC0gdmlld0IubnIuaW5kZXg7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0pO1xuXG52YXIgX2hvaXN0ZWRfMSA9IHtcbiAga2V5OiAwLFxuICBjbGFzczogXCJ2dWUtcmVjeWNsZS1zY3JvbGxlcl9fc2xvdFwiXG59O1xudmFyIF9ob2lzdGVkXzIgPSB7XG4gIGtleTogMSxcbiAgY2xhc3M6IFwidnVlLXJlY3ljbGUtc2Nyb2xsZXJfX3Nsb3RcIlxufTtcbmZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgdmFyIF9jb21wb25lbnRfUmVzaXplT2JzZXJ2ZXIgPSByZXNvbHZlQ29tcG9uZW50KFwiUmVzaXplT2JzZXJ2ZXJcIik7XG5cbiAgdmFyIF9kaXJlY3RpdmVfb2JzZXJ2ZV92aXNpYmlsaXR5ID0gcmVzb2x2ZURpcmVjdGl2ZShcIm9ic2VydmUtdmlzaWJpbGl0eVwiKTtcblxuICByZXR1cm4gd2l0aERpcmVjdGl2ZXMoKG9wZW5CbG9jaygpLCBjcmVhdGVCbG9jayhcImRpdlwiLCB7XG4gICAgY2xhc3M6IFtcInZ1ZS1yZWN5Y2xlLXNjcm9sbGVyXCIsIF9kZWZpbmVQcm9wZXJ0eSh7XG4gICAgICByZWFkeTogX2N0eC5yZWFkeSxcbiAgICAgICdwYWdlLW1vZGUnOiBfY3R4LnBhZ2VNb2RlXG4gICAgfSwgXCJkaXJlY3Rpb24tXCIuY29uY2F0KF9jdHguZGlyZWN0aW9uKSwgdHJ1ZSldLFxuICAgIG9uU2Nyb2xsUGFzc2l2ZTogX2NhY2hlWzJdIHx8IChfY2FjaGVbMl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX2N0eC5oYW5kbGVTY3JvbGwuYXBwbHkoX2N0eCwgYXJndW1lbnRzKTtcbiAgICB9KVxuICB9LCBbX2N0eC4kc2xvdHMuYmVmb3JlID8gKG9wZW5CbG9jaygpLCBjcmVhdGVCbG9jayhcImRpdlwiLCBfaG9pc3RlZF8xLCBbcmVuZGVyU2xvdChfY3R4LiRzbG90cywgXCJiZWZvcmVcIildKSkgOiBjcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpLCBjcmVhdGVWTm9kZShcImRpdlwiLCB7XG4gICAgcmVmOiBcIndyYXBwZXJcIixcbiAgICBzdHlsZTogX2RlZmluZVByb3BlcnR5KHt9LCBfY3R4LmRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJyA/ICdtaW5IZWlnaHQnIDogJ21pbldpZHRoJywgX2N0eC50b3RhbFNpemUgKyAncHgnKSxcbiAgICBjbGFzczogXCJ2dWUtcmVjeWNsZS1zY3JvbGxlcl9faXRlbS13cmFwcGVyXCJcbiAgfSwgWyhvcGVuQmxvY2sodHJ1ZSksIGNyZWF0ZUJsb2NrKEZyYWdtZW50LCBudWxsLCByZW5kZXJMaXN0KF9jdHgucG9vbCwgZnVuY3Rpb24gKHZpZXcpIHtcbiAgICByZXR1cm4gb3BlbkJsb2NrKCksIGNyZWF0ZUJsb2NrKFwiZGl2XCIsIHtcbiAgICAgIGtleTogdmlldy5uci5pZCxcbiAgICAgIHN0eWxlOiBfY3R4LnJlYWR5ID8ge1xuICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlXCIuY29uY2F0KF9jdHguZGlyZWN0aW9uID09PSAndmVydGljYWwnID8gJ1knIDogJ1gnLCBcIihcIikuY29uY2F0KHZpZXcucG9zaXRpb24sIFwicHgpXCIpXG4gICAgICB9IDogbnVsbCxcbiAgICAgIGNsYXNzOiBbXCJ2dWUtcmVjeWNsZS1zY3JvbGxlcl9faXRlbS12aWV3XCIsIHtcbiAgICAgICAgaG92ZXI6IF9jdHguaG92ZXJLZXkgPT09IHZpZXcubnIua2V5XG4gICAgICB9XSxcbiAgICAgIG9uTW91c2VlbnRlcjogZnVuY3Rpb24gb25Nb3VzZWVudGVyKCRldmVudCkge1xuICAgICAgICByZXR1cm4gX2N0eC5ob3ZlcktleSA9IHZpZXcubnIua2V5O1xuICAgICAgfSxcbiAgICAgIG9uTW91c2VsZWF2ZTogX2NhY2hlWzFdIHx8IChfY2FjaGVbMV0gPSBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfY3R4LmhvdmVyS2V5ID0gbnVsbDtcbiAgICAgIH0pXG4gICAgfSwgW3JlbmRlclNsb3QoX2N0eC4kc2xvdHMsIFwiZGVmYXVsdFwiLCB7XG4gICAgICBpdGVtOiB2aWV3Lml0ZW0sXG4gICAgICBpbmRleDogdmlldy5uci5pbmRleCxcbiAgICAgIGFjdGl2ZTogdmlldy5uci51c2VkXG4gICAgfSldLCA0NlxuICAgIC8qIENMQVNTLCBTVFlMRSwgUFJPUFMsIEhZRFJBVEVfRVZFTlRTICovXG4gICAgLCBbXCJvbk1vdXNlZW50ZXJcIl0pO1xuICB9KSwgMTI4XG4gIC8qIEtFWUVEX0ZSQUdNRU5UICovXG4gICkpXSwgNFxuICAvKiBTVFlMRSAqL1xuICApLCBfY3R4LiRzbG90cy5hZnRlciA/IChvcGVuQmxvY2soKSwgY3JlYXRlQmxvY2soXCJkaXZcIiwgX2hvaXN0ZWRfMiwgW3JlbmRlclNsb3QoX2N0eC4kc2xvdHMsIFwiYWZ0ZXJcIildKSkgOiBjcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpLCBjcmVhdGVWTm9kZShfY29tcG9uZW50X1Jlc2l6ZU9ic2VydmVyLCB7XG4gICAgb25Ob3RpZnk6IF9jdHguaGFuZGxlUmVzaXplXG4gIH0sIG51bGwsIDhcbiAgLyogUFJPUFMgKi9cbiAgLCBbXCJvbk5vdGlmeVwiXSldLCAzNFxuICAvKiBDTEFTUywgSFlEUkFURV9FVkVOVFMgKi9cbiAgKSksIFtbX2RpcmVjdGl2ZV9vYnNlcnZlX3Zpc2liaWxpdHksIF9jdHguaGFuZGxlVmlzaWJpbGl0eUNoYW5nZV1dKTtcbn1cblxuc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtcbnNjcmlwdC5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL1JlY3ljbGVTY3JvbGxlci52dWVcIjtcblxudmFyIHNjcmlwdCQxID0ge1xuICBuYW1lOiAnRHluYW1pY1Njcm9sbGVyJyxcbiAgY29tcG9uZW50czoge1xuICAgIFJlY3ljbGVTY3JvbGxlcjogc2NyaXB0XG4gIH0sXG4gIHByb3ZpZGU6IGZ1bmN0aW9uIHByb3ZpZGUoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciB2c2Nyb2xsUmVzaXplT2JzZXJ2ZXIgPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAodHlwZW9mIFJlc2l6ZU9ic2VydmVyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdnNjcm9sbFJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKGZ1bmN0aW9uIChlbnRyaWVzKSB7XG4gICAgICAgIHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihlbnRyaWVzKSxcbiAgICAgICAgICAgIF9zdGVwO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yIChfaXRlcmF0b3IucygpOyAhKF9zdGVwID0gX2l0ZXJhdG9yLm4oKSkuZG9uZTspIHtcbiAgICAgICAgICAgIHZhciBlbnRyeSA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICAgICAgICBpZiAoZW50cnkudGFyZ2V0KSB7XG4gICAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBDdXN0b21FdmVudCgncmVzaXplJywge1xuICAgICAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgICAgY29udGVudFJlY3Q6IGVudHJ5LmNvbnRlbnRSZWN0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgX2l0ZXJhdG9yLmUoZXJyKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBfaXRlcmF0b3IuZigpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdnNjcm9sbERhdGE6IHRoaXMudnNjcm9sbERhdGEsXG4gICAgICB2c2Nyb2xsUGFyZW50OiB0aGlzLFxuICAgICAgdnNjcm9sbFJlc2l6ZU9ic2VydmVyOiB2c2Nyb2xsUmVzaXplT2JzZXJ2ZXIsXG4gICAgICBvblVwZGF0ZVNjcm9sbDogZnVuY3Rpb24gb25VcGRhdGVTY3JvbGwoY2IpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnZTY3JvbGxNYXAucHVzaChjYik7XG4gICAgICB9XG4gICAgfTtcbiAgfSxcbiAgaW5oZXJpdEF0dHJzOiBmYWxzZSxcbiAgcHJvcHM6IF9vYmplY3RTcHJlYWQyKHt9LCBwcm9wcywge1xuICAgIG1pbkl0ZW1TaXplOiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XG4gIH0pLFxuICBlbWl0czogWyd2c2Nyb2xsOnVwZGF0ZScsICdyZXNpemUnLCAndmlzaWJsZSddLFxuICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2c2Nyb2xsRGF0YToge1xuICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgIHNpemVzOiB7fSxcbiAgICAgICAgdmFsaWRTaXplczoge30sXG4gICAgICAgIGtleUZpZWxkOiB0aGlzLmtleUZpZWxkLFxuICAgICAgICBzaW1wbGVBcnJheTogZmFsc2VcbiAgICAgIH0sXG4gICAgICB2U2Nyb2xsTWFwOiBbXVxuICAgIH07XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgc2ltcGxlQXJyYXk6IHNpbXBsZUFycmF5LFxuICAgIGl0ZW1zV2l0aFNpemU6IGZ1bmN0aW9uIGl0ZW1zV2l0aFNpemUoKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICB2YXIgaXRlbXMgPSB0aGlzLml0ZW1zLFxuICAgICAgICAgIGtleUZpZWxkID0gdGhpcy5rZXlGaWVsZCxcbiAgICAgICAgICBzaW1wbGVBcnJheSA9IHRoaXMuc2ltcGxlQXJyYXk7XG4gICAgICB2YXIgc2l6ZXMgPSB0aGlzLnZzY3JvbGxEYXRhLnNpemVzO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBpdGVtID0gaXRlbXNbaV07XG4gICAgICAgIHZhciBpZCA9IHNpbXBsZUFycmF5ID8gaSA6IGl0ZW1ba2V5RmllbGRdO1xuICAgICAgICB2YXIgc2l6ZSA9IHNpemVzW2lkXTtcblxuICAgICAgICBpZiAodHlwZW9mIHNpemUgPT09ICd1bmRlZmluZWQnICYmICF0aGlzLiRfdW5kZWZpbmVkTWFwW2lkXSkge1xuICAgICAgICAgIHNpemUgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIHNpemU6IHNpemVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcbiAgICBsaXN0ZW5lcnM6IGZ1bmN0aW9uIGxpc3RlbmVycygpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMgPSB7fTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuJGF0dHJzKSB7XG4gICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aCgnb24nKSkge1xuICAgICAgICAgIGlmIChrZXkgIT09ICdvblJlc2l6ZScgJiYga2V5ICE9PSAnb25WaXNpYmxlJykge1xuICAgICAgICAgICAgbGlzdGVuZXJzW2tleV0gPSB0aGlzLiRhdHRycztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxpc3RlbmVycztcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgaXRlbXM6IGZ1bmN0aW9uIGl0ZW1zKCkge1xuICAgICAgdGhpcy5mb3JjZVVwZGF0ZShmYWxzZSk7XG4gICAgfSxcbiAgICBzaW1wbGVBcnJheToge1xuICAgICAgaGFuZGxlcjogZnVuY3Rpb24gaGFuZGxlcih2YWx1ZSkge1xuICAgICAgICB0aGlzLnZzY3JvbGxEYXRhLnNpbXBsZUFycmF5ID0gdmFsdWU7XG4gICAgICB9LFxuICAgICAgaW1tZWRpYXRlOiB0cnVlXG4gICAgfSxcbiAgICBkaXJlY3Rpb246IGZ1bmN0aW9uIGRpcmVjdGlvbih2YWx1ZSkge1xuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSh0cnVlKTtcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy4kX3VwZGF0ZXMgPSBbXTtcbiAgICB0aGlzLiRfdW5kZWZpbmVkU2l6ZXMgPSAwO1xuICAgIHRoaXMuJF91bmRlZmluZWRNYXAgPSB7fTtcbiAgfSxcbiAgYWN0aXZhdGVkOiBmdW5jdGlvbiBhY3RpdmF0ZWQoKSB7XG4gICAgdGhpcy52c2Nyb2xsRGF0YS5hY3RpdmUgPSB0cnVlO1xuICB9LFxuICBkZWFjdGl2YXRlZDogZnVuY3Rpb24gZGVhY3RpdmF0ZWQoKSB7XG4gICAgdGhpcy52c2Nyb2xsRGF0YS5hY3RpdmUgPSBmYWxzZTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9uU2Nyb2xsZXJSZXNpemU6IGZ1bmN0aW9uIG9uU2Nyb2xsZXJSZXNpemUoKSB7XG4gICAgICB2YXIgc2Nyb2xsZXIgPSB0aGlzLiRyZWZzLnNjcm9sbGVyO1xuXG4gICAgICBpZiAoc2Nyb2xsZXIpIHtcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLiRlbWl0KCdyZXNpemUnKTtcbiAgICB9LFxuICAgIG9uU2Nyb2xsZXJWaXNpYmxlOiBmdW5jdGlvbiBvblNjcm9sbGVyVmlzaWJsZSgpIHtcbiAgICAgIHRoaXMudlNjcm9sbFVwZGF0ZShmYWxzZSk7XG4gICAgICB0aGlzLiRlbWl0KCd2aXNpYmxlJyk7XG4gICAgfSxcbiAgICB2U2Nyb2xsVXBkYXRlOiBmdW5jdGlvbiB2U2Nyb2xsVXBkYXRlKCkge1xuICAgICAgdmFyIGZvcmNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBmYWxzZTtcbiAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICBmb3JjZTogZm9yY2VcbiAgICAgIH07XG4gICAgICB0aGlzLiRlbWl0KCd2c2Nyb2xsOnVwZGF0ZScsIGRhdGEpO1xuICAgICAgdGhpcy52U2Nyb2xsTWFwLmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhkYXRhKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZm9yY2VVcGRhdGU6IGZ1bmN0aW9uIGZvcmNlVXBkYXRlKCkge1xuICAgICAgdmFyIGNsZWFyID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB0cnVlO1xuXG4gICAgICBpZiAoY2xlYXIgfHwgdGhpcy5zaW1wbGVBcnJheSkge1xuICAgICAgICB0aGlzLnZzY3JvbGxEYXRhLnZhbGlkU2l6ZXMgPSB7fTtcbiAgICAgIH1cblxuICAgICAgdGhpcy52U2Nyb2xsVXBkYXRlKHRydWUpO1xuICAgIH0sXG4gICAgc2Nyb2xsVG9JdGVtOiBmdW5jdGlvbiBzY3JvbGxUb0l0ZW0oaW5kZXgpIHtcbiAgICAgIHZhciBzY3JvbGxlciA9IHRoaXMuJHJlZnMuc2Nyb2xsZXI7XG4gICAgICBpZiAoc2Nyb2xsZXIpIHNjcm9sbGVyLnNjcm9sbFRvSXRlbShpbmRleCk7XG4gICAgfSxcbiAgICBnZXRJdGVtU2l6ZTogZnVuY3Rpb24gZ2V0SXRlbVNpemUoaXRlbSkge1xuICAgICAgdmFyIGluZGV4ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gICAgICB2YXIgaWQgPSB0aGlzLnNpbXBsZUFycmF5ID8gaW5kZXggIT0gbnVsbCA/IGluZGV4IDogdGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pIDogaXRlbVt0aGlzLmtleUZpZWxkXTtcbiAgICAgIHJldHVybiB0aGlzLnZzY3JvbGxEYXRhLnNpemVzW2lkXSB8fCAwO1xuICAgIH0sXG4gICAgc2Nyb2xsVG9Cb3R0b206IGZ1bmN0aW9uIHNjcm9sbFRvQm90dG9tKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLiRfc2Nyb2xsaW5nVG9Cb3R0b20pIHJldHVybjtcbiAgICAgIHRoaXMuJF9zY3JvbGxpbmdUb0JvdHRvbSA9IHRydWU7XG4gICAgICB2YXIgZWwgPSB0aGlzLiRlbDsgLy8gSXRlbSBpcyBpbnNlcnRlZCB0byB0aGUgRE9NXG5cbiAgICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZWwuc2Nyb2xsVG9wID0gZWwuc2Nyb2xsSGVpZ2h0ICsgNTAwMDsgLy8gSXRlbSBzaXplcyBhcmUgY29tcHV0ZWRcblxuICAgICAgICB2YXIgY2IgPSBmdW5jdGlvbiBjYigpIHtcbiAgICAgICAgICBlbC5zY3JvbGxUb3AgPSBlbC5zY3JvbGxIZWlnaHQgKyA1MDAwO1xuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlbC5zY3JvbGxUb3AgPSBlbC5zY3JvbGxIZWlnaHQgKyA1MDAwO1xuXG4gICAgICAgICAgICBpZiAoX3RoaXMyLiRfdW5kZWZpbmVkU2l6ZXMgPT09IDApIHtcbiAgICAgICAgICAgICAgX3RoaXMyLiRfc2Nyb2xsaW5nVG9Cb3R0b20gPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShjYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gcmVuZGVyJDEoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHZhciBfY29tcG9uZW50X1JlY3ljbGVTY3JvbGxlciA9IHJlc29sdmVDb21wb25lbnQoXCJSZWN5Y2xlU2Nyb2xsZXJcIik7XG5cbiAgcmV0dXJuIG9wZW5CbG9jaygpLCBjcmVhdGVCbG9jayhfY29tcG9uZW50X1JlY3ljbGVTY3JvbGxlciwgbWVyZ2VQcm9wcyh7XG4gICAgcmVmOiBcInNjcm9sbGVyXCIsXG4gICAgaXRlbXM6ICRvcHRpb25zLml0ZW1zV2l0aFNpemUsXG4gICAgXCJtaW4taXRlbS1zaXplXCI6ICRwcm9wcy5taW5JdGVtU2l6ZSxcbiAgICBkaXJlY3Rpb246IF9jdHguZGlyZWN0aW9uLFxuICAgIFwia2V5LWZpZWxkXCI6IFwiaWRcIlxuICB9LCBfY3R4LiRhdHRycywge1xuICAgIG9uUmVzaXplOiAkb3B0aW9ucy5vblNjcm9sbGVyUmVzaXplLFxuICAgIG9uVmlzaWJsZTogJG9wdGlvbnMub25TY3JvbGxlclZpc2libGVcbiAgfSwgdG9IYW5kbGVycygkb3B0aW9ucy5saXN0ZW5lcnMpKSwge1xuICAgIGRlZmF1bHQ6IHdpdGhDdHgoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBpdGVtV2l0aFNpemUgPSBfcmVmLml0ZW0sXG4gICAgICAgICAgaW5kZXggPSBfcmVmLmluZGV4LFxuICAgICAgICAgIGFjdGl2ZSA9IF9yZWYuYWN0aXZlO1xuICAgICAgcmV0dXJuIFtyZW5kZXJTbG90KF9jdHguJHNsb3RzLCBcImRlZmF1bHRcIiwge1xuICAgICAgICBpdGVtOiBpdGVtV2l0aFNpemUuaXRlbSxcbiAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICBhY3RpdmU6IGFjdGl2ZSxcbiAgICAgICAgaXRlbVdpdGhTaXplOiBpdGVtV2l0aFNpemVcbiAgICAgIH0pXTtcbiAgICB9KSxcbiAgICBiZWZvcmU6IHdpdGhDdHgoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIFtyZW5kZXJTbG90KF9jdHguJHNsb3RzLCBcImJlZm9yZVwiKV07XG4gICAgfSksXG4gICAgYWZ0ZXI6IHdpdGhDdHgoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIFtyZW5kZXJTbG90KF9jdHguJHNsb3RzLCBcImFmdGVyXCIpXTtcbiAgICB9KSxcbiAgICBfOiAxXG4gIH0sIDE2XG4gIC8qIEZVTExfUFJPUFMgKi9cbiAgLCBbXCJpdGVtc1wiLCBcIm1pbi1pdGVtLXNpemVcIiwgXCJkaXJlY3Rpb25cIiwgXCJvblJlc2l6ZVwiLCBcIm9uVmlzaWJsZVwiXSk7XG59XG5cbnNjcmlwdCQxLnJlbmRlciA9IHJlbmRlciQxO1xuc2NyaXB0JDEuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9EeW5hbWljU2Nyb2xsZXIudnVlXCI7XG5cbnZhciBEeW5hbWljU2Nyb2xsZXJJdGVtID0ge1xuICBuYW1lOiAnRHluYW1pY1Njcm9sbGVySXRlbScsXG4gIGluamVjdDogWyd2c2Nyb2xsRGF0YScsICd2c2Nyb2xsUGFyZW50JywgJ29uVXBkYXRlU2Nyb2xsJywgJ3ZzY3JvbGxSZXNpemVPYnNlcnZlciddLFxuICBwcm9wczoge1xuICAgIGl0ZW06IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICB3YXRjaERhdGE6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgaWYgdGhlIHZpZXcgaXMgYWN0aXZlbHkgdXNlZCB0byBkaXNwbGF5IGFuIGl0ZW0uXG4gICAgICovXG4gICAgYWN0aXZlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGluZGV4OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICB9LFxuICAgIHNpemVEZXBlbmRlbmNpZXM6IHtcbiAgICAgIHR5cGU6IFtBcnJheSwgT2JqZWN0XSxcbiAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICB9LFxuICAgIGVtaXRSZXNpemU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgdGFnOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnZGl2J1xuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBpZDogZnVuY3Rpb24gaWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy52c2Nyb2xsRGF0YS5zaW1wbGVBcnJheSA/IHRoaXMuaW5kZXggOiB0aGlzLml0ZW1bdGhpcy52c2Nyb2xsRGF0YS5rZXlGaWVsZF07XG4gICAgfSxcbiAgICBzaXplOiBmdW5jdGlvbiBzaXplKCkge1xuICAgICAgcmV0dXJuIHRoaXMudnNjcm9sbERhdGEudmFsaWRTaXplc1t0aGlzLmlkXSAmJiB0aGlzLnZzY3JvbGxEYXRhLnNpemVzW3RoaXMuaWRdIHx8IDA7XG4gICAgfSxcbiAgICBmaW5hbEFjdGl2ZTogZnVuY3Rpb24gZmluYWxBY3RpdmUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5hY3RpdmUgJiYgdGhpcy52c2Nyb2xsRGF0YS5hY3RpdmU7XG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIHdhdGNoRGF0YTogJ3VwZGF0ZVdhdGNoRGF0YScsXG4gICAgaWQ6IGZ1bmN0aW9uIGlkKCkge1xuICAgICAgaWYgKCF0aGlzLnNpemUpIHtcbiAgICAgICAgdGhpcy5vbkRhdGFVcGRhdGUoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGZpbmFsQWN0aXZlOiBmdW5jdGlvbiBmaW5hbEFjdGl2ZSh2YWx1ZSkge1xuICAgICAgaWYgKCF0aGlzLnNpemUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLnZzY3JvbGxQYXJlbnQuJF91bmRlZmluZWRNYXBbdGhpcy5pZF0pIHtcbiAgICAgICAgICAgIHRoaXMudnNjcm9sbFBhcmVudC4kX3VuZGVmaW5lZFNpemVzKys7XG4gICAgICAgICAgICB0aGlzLnZzY3JvbGxQYXJlbnQuJF91bmRlZmluZWRNYXBbdGhpcy5pZF0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy52c2Nyb2xsUGFyZW50LiRfdW5kZWZpbmVkTWFwW3RoaXMuaWRdKSB7XG4gICAgICAgICAgICB0aGlzLnZzY3JvbGxQYXJlbnQuJF91bmRlZmluZWRTaXplcy0tO1xuICAgICAgICAgICAgdGhpcy52c2Nyb2xsUGFyZW50LiRfdW5kZWZpbmVkTWFwW3RoaXMuaWRdID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnZzY3JvbGxSZXNpemVPYnNlcnZlcikge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVTaXplKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy51bm9ic2VydmVTaXplKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgJiYgdGhpcy4kX3BlbmRpbmdWU2Nyb2xsVXBkYXRlID09PSB0aGlzLmlkKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgY3JlYXRlZDogZnVuY3Rpb24gY3JlYXRlZCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuJGlzU2VydmVyKSByZXR1cm47XG4gICAgdGhpcy4kX2ZvcmNlTmV4dFZTY3JvbGxVcGRhdGUgPSBudWxsO1xuICAgIHRoaXMudXBkYXRlV2F0Y2hEYXRhKCk7XG5cbiAgICBpZiAoIXRoaXMudnNjcm9sbFJlc2l6ZU9ic2VydmVyKSB7XG4gICAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChrKSB7XG4gICAgICAgIF90aGlzLiR3YXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLnNpemVEZXBlbmRlbmNpZXNba107XG4gICAgICAgIH0sIF90aGlzLm9uRGF0YVVwZGF0ZSk7XG4gICAgICB9O1xuXG4gICAgICBmb3IgKHZhciBrIGluIHRoaXMuc2l6ZURlcGVuZGVuY2llcykge1xuICAgICAgICBfbG9vcChrKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5vblVwZGF0ZVNjcm9sbCgndnNjcm9sbDp1cGRhdGUnLCB0aGlzLm9uVnNjcm9sbFVwZGF0ZSk7XG4gICAgfVxuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgIGlmICh0aGlzLnZzY3JvbGxEYXRhLmFjdGl2ZSkge1xuICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICB0aGlzLm9ic2VydmVTaXplKCk7XG4gICAgfVxuICB9LFxuICBiZWZvcmVVbm1vdW50OiBmdW5jdGlvbiBiZWZvcmVVbm1vdW50KCkge1xuICAgIHRoaXMudW5vYnNlcnZlU2l6ZSgpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgdXBkYXRlU2l6ZTogZnVuY3Rpb24gdXBkYXRlU2l6ZSgpIHtcbiAgICAgIGlmICh0aGlzLmZpbmFsQWN0aXZlKSB7XG4gICAgICAgIGlmICh0aGlzLiRfcGVuZGluZ1NpemVVcGRhdGUgIT09IHRoaXMuaWQpIHtcbiAgICAgICAgICB0aGlzLiRfcGVuZGluZ1NpemVVcGRhdGUgPSB0aGlzLmlkO1xuICAgICAgICAgIHRoaXMuJF9mb3JjZU5leHRWU2Nyb2xsVXBkYXRlID0gbnVsbDtcbiAgICAgICAgICB0aGlzLiRfcGVuZGluZ1ZTY3JvbGxVcGRhdGUgPSBudWxsO1xuICAgICAgICAgIHRoaXMuY29tcHV0ZVNpemUodGhpcy5pZCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuJF9mb3JjZU5leHRWU2Nyb2xsVXBkYXRlID0gdGhpcy5pZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHVwZGF0ZVdhdGNoRGF0YTogZnVuY3Rpb24gdXBkYXRlV2F0Y2hEYXRhKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLndhdGNoRGF0YSkge1xuICAgICAgICB0aGlzLiRfd2F0Y2hEYXRhID0gdGhpcy4kd2F0Y2goJ2RhdGEnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLm9uRGF0YVVwZGF0ZSgpO1xuICAgICAgICB9LCB7XG4gICAgICAgICAgZGVlcDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy4kX3dhdGNoRGF0YSkge1xuICAgICAgICB0aGlzLiRfd2F0Y2hEYXRhKCk7XG4gICAgICAgIHRoaXMuJF93YXRjaERhdGEgPSBudWxsO1xuICAgICAgfVxuICAgIH0sXG4gICAgb25Wc2Nyb2xsVXBkYXRlOiBmdW5jdGlvbiBvblZzY3JvbGxVcGRhdGUoX3JlZikge1xuICAgICAgdmFyIGZvcmNlID0gX3JlZi5mb3JjZTtcblxuICAgICAgLy8gSWYgbm90IGFjdGl2ZSwgc2VjaGVkdWxlIGEgc2l6ZSB1cGRhdGUgd2hlbiBpdCBiZWNvbWVzIGFjdGl2ZVxuICAgICAgaWYgKCF0aGlzLmZpbmFsQWN0aXZlICYmIGZvcmNlKSB7XG4gICAgICAgIHRoaXMuJF9wZW5kaW5nVlNjcm9sbFVwZGF0ZSA9IHRoaXMuaWQ7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLiRfZm9yY2VOZXh0VlNjcm9sbFVwZGF0ZSA9PT0gdGhpcy5pZCB8fCBmb3JjZSB8fCAhdGhpcy5zaXplKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgb25EYXRhVXBkYXRlOiBmdW5jdGlvbiBvbkRhdGFVcGRhdGUoKSB7XG4gICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICB9LFxuICAgIGNvbXB1dGVTaXplOiBmdW5jdGlvbiBjb21wdXRlU2l6ZShpZCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF90aGlzMy5pZCA9PT0gaWQpIHtcbiAgICAgICAgICB2YXIgd2lkdGggPSBfdGhpczMuJGVsLm9mZnNldFdpZHRoO1xuICAgICAgICAgIHZhciBoZWlnaHQgPSBfdGhpczMuJGVsLm9mZnNldEhlaWdodDtcblxuICAgICAgICAgIF90aGlzMy5hcHBseVNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpczMuJF9wZW5kaW5nU2l6ZVVwZGF0ZSA9IG51bGw7XG4gICAgICB9KS50aGVuKCk7XG4gICAgfSxcbiAgICBhcHBseVNpemU6IGZ1bmN0aW9uIGFwcGx5U2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICB2YXIgc2l6ZSA9IE1hdGgucm91bmQodGhpcy52c2Nyb2xsUGFyZW50LmRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJyA/IGhlaWdodCA6IHdpZHRoKTtcblxuICAgICAgaWYgKHNpemUgJiYgdGhpcy5zaXplICE9PSBzaXplKSB7XG4gICAgICAgIGlmICh0aGlzLnZzY3JvbGxQYXJlbnQuJF91bmRlZmluZWRNYXBbdGhpcy5pZF0pIHtcbiAgICAgICAgICB0aGlzLnZzY3JvbGxQYXJlbnQuJF91bmRlZmluZWRTaXplcy0tO1xuICAgICAgICAgIHRoaXMudnNjcm9sbFBhcmVudC4kX3VuZGVmaW5lZE1hcFt0aGlzLmlkXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudnNjcm9sbERhdGEuc2l6ZXNbdGhpcy5pZF0gPSBzaXplO1xuICAgICAgICB0aGlzLnZzY3JvbGxEYXRhLnZhbGlkU2l6ZXNbdGhpcy5pZF0gPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5lbWl0UmVzaXplKSB0aGlzLiRlbWl0KCdyZXNpemUnLCB0aGlzLmlkKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG9ic2VydmVTaXplOiBmdW5jdGlvbiBvYnNlcnZlU2l6ZSgpIHtcbiAgICAgIGlmICghdGhpcy52c2Nyb2xsUmVzaXplT2JzZXJ2ZXIpIHJldHVybjtcbiAgICAgIHRoaXMudnNjcm9sbFJlc2l6ZU9ic2VydmVyLm9ic2VydmUodGhpcy4kZWwucGFyZW50Tm9kZSk7XG4gICAgICB0aGlzLiRlbC5wYXJlbnROb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUpO1xuICAgIH0sXG4gICAgdW5vYnNlcnZlU2l6ZTogZnVuY3Rpb24gdW5vYnNlcnZlU2l6ZSgpIHtcbiAgICAgIGlmICghdGhpcy52c2Nyb2xsUmVzaXplT2JzZXJ2ZXIpIHJldHVybjtcbiAgICAgIHRoaXMudnNjcm9sbFJlc2l6ZU9ic2VydmVyLnVub2JzZXJ2ZSh0aGlzLiRlbC5wYXJlbnROb2RlKTtcbiAgICAgIHRoaXMuJGVsLnBhcmVudE5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZSk7XG4gICAgfSxcbiAgICBvblJlc2l6ZTogZnVuY3Rpb24gb25SZXNpemUoZXZlbnQpIHtcbiAgICAgIHZhciBfZXZlbnQkZGV0YWlsJGNvbnRlbnQgPSBldmVudC5kZXRhaWwuY29udGVudFJlY3QsXG4gICAgICAgICAgd2lkdGggPSBfZXZlbnQkZGV0YWlsJGNvbnRlbnQud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0ID0gX2V2ZW50JGRldGFpbCRjb250ZW50LmhlaWdodDtcbiAgICAgIHRoaXMuYXBwbHlTaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgIH1cbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVZOb2RlKHRoaXMudGFnLCBudWxsLCB0aGlzLiRzbG90cy5kZWZhdWx0KCkpO1xuICB9XG59O1xuXG52YXIgdmVyc2lvbiA9IFwiMC4xLjFcIjtcblxuZnVuY3Rpb24gcmVnaXN0ZXJDb21wb25lbnRzKGFwcCwgcHJlZml4KSB7XG4gIGFwcC5jb21wb25lbnQoXCJcIi5jb25jYXQocHJlZml4LCBcInJlY3ljbGUtc2Nyb2xsZXJcIiksIHNjcmlwdCk7XG4gIGFwcC5jb21wb25lbnQoXCJcIi5jb25jYXQocHJlZml4LCBcIlJlY3ljbGVTY3JvbGxlclwiKSwgc2NyaXB0KTtcbiAgYXBwLmNvbXBvbmVudChcIlwiLmNvbmNhdChwcmVmaXgsIFwiZHluYW1pYy1zY3JvbGxlclwiKSwgc2NyaXB0JDEpO1xuICBhcHAuY29tcG9uZW50KFwiXCIuY29uY2F0KHByZWZpeCwgXCJEeW5hbWljU2Nyb2xsZXJcIiksIHNjcmlwdCQxKTtcbiAgYXBwLmNvbXBvbmVudChcIlwiLmNvbmNhdChwcmVmaXgsIFwiZHluYW1pYy1zY3JvbGxlci1pdGVtXCIpLCBEeW5hbWljU2Nyb2xsZXJJdGVtKTtcbiAgYXBwLmNvbXBvbmVudChcIlwiLmNvbmNhdChwcmVmaXgsIFwiRHluYW1pY1Njcm9sbGVySXRlbVwiKSwgRHluYW1pY1Njcm9sbGVySXRlbSk7XG59XG5cbnZhciBwbHVnaW4gPSB7XG4gIHZlcnNpb246IHZlcnNpb24sXG4gIGluc3RhbGw6IGZ1bmN0aW9uIGluc3RhbGwoYXBwLCBvcHRpb25zKSB7XG4gICAgdmFyIGZpbmFsT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgIGluc3RhbGxDb21wb25lbnRzOiB0cnVlLFxuICAgICAgY29tcG9uZW50c1ByZWZpeDogJydcbiAgICB9LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIGtleSBpbiBmaW5hbE9wdGlvbnMpIHtcbiAgICAgIGlmICh0eXBlb2YgZmluYWxPcHRpb25zW2tleV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbmZpZ1trZXldID0gZmluYWxPcHRpb25zW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZpbmFsT3B0aW9ucy5pbnN0YWxsQ29tcG9uZW50cykge1xuICAgICAgcmVnaXN0ZXJDb21wb25lbnRzKGFwcCwgZmluYWxPcHRpb25zLmNvbXBvbmVudHNQcmVmaXgpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcGx1Z2luO1xuZXhwb3J0IHsgc2NyaXB0JDEgYXMgRHluYW1pY1Njcm9sbGVyLCBEeW5hbWljU2Nyb2xsZXJJdGVtLCBzY3JpcHQgYXMgUmVjeWNsZVNjcm9sbGVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD12dWUzLXZpcnR1YWwtc2Nyb2xsZXIuZXNtLmpzLm1hcFxuIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vRW1vamkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUzNGFkOTQ2XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRW1vamkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Vtb2ppLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5zY3JpcHQucmVuZGVyID0gcmVuZGVyXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBzY3JpcHQuX19obXJJZCA9IFwiNTM0YWQ5NDZcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc1MzRhZDk0NicsIHNjcmlwdCkpIHtcbiAgICBhcGkucmVsb2FkKCc1MzRhZDk0NicsIHNjcmlwdClcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Vtb2ppLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MzRhZDk0NlwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc1MzRhZDk0NicsIHJlbmRlcilcbiAgfSlcblxufVxuXG5zY3JpcHQuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9FbW9qaS52dWVcIlxuXG5leHBvcnQgZGVmYXVsdCBzY3JpcHQiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9yZWYtLTEwLTAhLi9FbW9qaS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9yZWYtLTEwLTAhLi9FbW9qaS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3JlZi0tNSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9yZWYtLTEwLTAhLi9FbW9qaS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTM0YWQ5NDZcIiIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL1BpY2tlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDE2ZTkwODRcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9QaWNrZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1BpY2tlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuc2NyaXB0LnJlbmRlciA9IHJlbmRlclxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgc2NyaXB0Ll9faG1ySWQgPSBcImQxNmU5MDg0XCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnZDE2ZTkwODQnLCBzY3JpcHQpKSB7XG4gICAgYXBpLnJlbG9hZCgnZDE2ZTkwODQnLCBzY3JpcHQpXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9QaWNrZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQxNmU5MDg0XCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJ2QxNmU5MDg0JywgcmVuZGVyKVxuICB9KVxuXG59XG5cbnNjcmlwdC5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL1BpY2tlci52dWVcIlxuXG5leHBvcnQgZGVmYXVsdCBzY3JpcHQiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9yZWYtLTEwLTAhLi9QaWNrZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cmVmLS0xMC0wIS4vUGlja2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cmVmLS01IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3JlZi0tMTAtMCEuL1BpY2tlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDE2ZTkwODRcIiIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL1N0YXRpY1BpY2tlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmIxNmMyNjhcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TdGF0aWNQaWNrZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1N0YXRpY1BpY2tlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuc2NyaXB0LnJlbmRlciA9IHJlbmRlclxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgc2NyaXB0Ll9faG1ySWQgPSBcIjJiMTZjMjY4XCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnMmIxNmMyNjgnLCBzY3JpcHQpKSB7XG4gICAgYXBpLnJlbG9hZCgnMmIxNmMyNjgnLCBzY3JpcHQpXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TdGF0aWNQaWNrZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiMTZjMjY4XCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzJiMTZjMjY4JywgcmVuZGVyKVxuICB9KVxuXG59XG5cbnNjcmlwdC5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL1N0YXRpY1BpY2tlci52dWVcIlxuXG5leHBvcnQgZGVmYXVsdCBzY3JpcHQiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9yZWYtLTEwLTAhLi9TdGF0aWNQaWNrZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cmVmLS0xMC0wIS4vU3RhdGljUGlja2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cmVmLS01IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3JlZi0tMTAtMCEuL1N0YXRpY1BpY2tlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmIxNmMyNjhcIiIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxMTg4MTA0XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vYW5jaG9ycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vYW5jaG9ycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuc2NyaXB0LnJlbmRlciA9IHJlbmRlclxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgc2NyaXB0Ll9faG1ySWQgPSBcIjUxMTg4MTA0XCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNTExODgxMDQnLCBzY3JpcHQpKSB7XG4gICAgYXBpLnJlbG9hZCgnNTExODgxMDQnLCBzY3JpcHQpXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9hbmNob3JzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MTE4ODEwNFwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc1MTE4ODEwNCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5zY3JpcHQuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9hbmNob3JzLnZ1ZVwiXG5cbmV4cG9ydCBkZWZhdWx0IHNjcmlwdCIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3JlZi0tMTAtMCEuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cmVmLS0xMC0wIS4vYW5jaG9ycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3JlZi0tNSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9yZWYtLTEwLTAhLi9hbmNob3JzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MTE4ODEwNFwiIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM3NmNkYTBlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5zY3JpcHQucmVuZGVyID0gcmVuZGVyXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBzY3JpcHQuX19obXJJZCA9IFwiMzc2Y2RhMGVcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCczNzZjZGEwZScsIHNjcmlwdCkpIHtcbiAgICBhcGkucmVsb2FkKCczNzZjZGEwZScsIHNjcmlwdClcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNzZjZGEwZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCczNzZjZGEwZScsIHJlbmRlcilcbiAgfSlcblxufVxuXG5zY3JpcHQuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9jYXRlZ29yeS52dWVcIlxuXG5leHBvcnQgZGVmYXVsdCBzY3JpcHQiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9yZWYtLTEwLTAhLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9yZWYtLTEwLTAhLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3JlZi0tNSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9yZWYtLTEwLTAhLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mzc2Y2RhMGVcIiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQW5jaG9ycyB9IGZyb20gJy4vYW5jaG9ycy52dWUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIENhdGVnb3J5IH0gZnJvbSAnLi9jYXRlZ29yeS52dWUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFByZXZpZXcgfSBmcm9tICcuL3ByZXZpZXcudnVlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWFyY2ggfSBmcm9tICcuL3NlYXJjaC52dWUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNraW5zIH0gZnJvbSAnLi9za2lucy52dWUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEVtb2ppIH0gZnJvbSAnLi9FbW9qaS52dWUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFBpY2tlciB9IGZyb20gJy4vUGlja2VyLnZ1ZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3RhdGljUGlja2VyIH0gZnJvbSAnLi9TdGF0aWNQaWNrZXIudnVlJ1xuIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vcHJldmlldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzUwNTZjMzBcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9wcmV2aWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9wcmV2aWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5zY3JpcHQucmVuZGVyID0gcmVuZGVyXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBzY3JpcHQuX19obXJJZCA9IFwiMzUwNTZjMzBcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCczNTA1NmMzMCcsIHNjcmlwdCkpIHtcbiAgICBhcGkucmVsb2FkKCczNTA1NmMzMCcsIHNjcmlwdClcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM1MDU2YzMwXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzM1MDU2YzMwJywgcmVuZGVyKVxuICB9KVxuXG59XG5cbnNjcmlwdC5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL3ByZXZpZXcudnVlXCJcblxuZXhwb3J0IGRlZmF1bHQgc2NyaXB0IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cmVmLS0xMC0wIS4vcHJldmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9yZWYtLTEwLTAhLi9wcmV2aWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cmVmLS01IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3JlZi0tMTAtMCEuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM1MDU2YzMwXCIiLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRhZDQxYmI4XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc2VhcmNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbnNjcmlwdC5yZW5kZXIgPSByZW5kZXJcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHNjcmlwdC5fX2htcklkID0gXCI0YWQ0MWJiOFwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzRhZDQxYmI4Jywgc2NyaXB0KSkge1xuICAgIGFwaS5yZWxvYWQoJzRhZDQxYmI4Jywgc2NyaXB0KVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vc2VhcmNoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YWQ0MWJiOFwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc0YWQ0MWJiOCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5zY3JpcHQuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9zZWFyY2gudnVlXCJcblxuZXhwb3J0IGRlZmF1bHQgc2NyaXB0IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cmVmLS0xMC0wIS4vc2VhcmNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3JlZi0tMTAtMCEuL3NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3JlZi0tNSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9yZWYtLTEwLTAhLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRhZDQxYmI4XCIiLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9za2lucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWM2MTQ4OTRcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9za2lucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vc2tpbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbnNjcmlwdC5yZW5kZXIgPSByZW5kZXJcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHNjcmlwdC5fX2htcklkID0gXCIxYzYxNDg5NFwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzFjNjE0ODk0Jywgc2NyaXB0KSkge1xuICAgIGFwaS5yZWxvYWQoJzFjNjE0ODk0Jywgc2NyaXB0KVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vc2tpbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFjNjE0ODk0XCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzFjNjE0ODk0JywgcmVuZGVyKVxuICB9KVxuXG59XG5cbnNjcmlwdC5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL3NraW5zLnZ1ZVwiXG5cbmV4cG9ydCBkZWZhdWx0IHNjcmlwdCIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3JlZi0tMTAtMCEuL3NraW5zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3JlZi0tMTAtMCEuL3NraW5zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cmVmLS01IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3JlZi0tMTAtMCEuL3NraW5zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYzYxNDg5NFwiIiwiaW1wb3J0IHN0b3JlIGZyb20gJy4vdXRpbHMvc3RvcmUnXG5pbXBvcnQgeyB1bmNvbXByZXNzIH0gZnJvbSAnLi91dGlscy9kYXRhJ1xuaW1wb3J0IGZyZXF1ZW50bHkgZnJvbSAnLi91dGlscy9mcmVxdWVudGx5J1xuXG5leHBvcnQge1xuICBQaWNrZXIsXG4gIFN0YXRpY1BpY2tlcixcbiAgRW1vamksXG4gIEFuY2hvcnMsXG4gIFByZXZpZXcsXG4gIFNlYXJjaCxcbiAgQ2F0ZWdvcnksXG4gIFNraW5zLFxufSBmcm9tICcuL2NvbXBvbmVudHMnXG5cbmV4cG9ydCB7IEVtb2ppSW5kZXgsIEVtb2ppVmlldywgRW1vamlEYXRhLCBzYW5pdGl6ZSB9IGZyb20gJy4vdXRpbHMvZW1vamktZGF0YSdcbmV4cG9ydCB7IHVuY29tcHJlc3MsIHN0b3JlLCBmcmVxdWVudGx5IH1cbiIsImNvbnN0IF9TdHJpbmcgPSBTdHJpbmdcblxuZXhwb3J0IGRlZmF1bHQgX1N0cmluZy5mcm9tQ29kZVBvaW50IHx8XG4gIGZ1bmN0aW9uIHN0cmluZ0Zyb21Db2RlUG9pbnQoKSB7XG4gICAgdmFyIE1BWF9TSVpFID0gMHg0MDAwXG4gICAgdmFyIGNvZGVVbml0cyA9IFtdXG4gICAgdmFyIGhpZ2hTdXJyb2dhdGVcbiAgICB2YXIgbG93U3Vycm9nYXRlXG4gICAgdmFyIGluZGV4ID0gLTFcbiAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aFxuICAgIGlmICghbGVuZ3RoKSB7XG4gICAgICByZXR1cm4gJydcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9ICcnXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIHZhciBjb2RlUG9pbnQgPSBOdW1iZXIoYXJndW1lbnRzW2luZGV4XSlcbiAgICAgIGlmIChcbiAgICAgICAgIWlzRmluaXRlKGNvZGVQb2ludCkgfHwgLy8gYE5hTmAsIGArSW5maW5pdHlgLCBvciBgLUluZmluaXR5YFxuICAgICAgICBjb2RlUG9pbnQgPCAwIHx8IC8vIG5vdCBhIHZhbGlkIFVuaWNvZGUgY29kZSBwb2ludFxuICAgICAgICBjb2RlUG9pbnQgPiAweDEwZmZmZiB8fCAvLyBub3QgYSB2YWxpZCBVbmljb2RlIGNvZGUgcG9pbnRcbiAgICAgICAgTWF0aC5mbG9vcihjb2RlUG9pbnQpICE9IGNvZGVQb2ludCAvLyBub3QgYW4gaW50ZWdlclxuICAgICAgKSB7XG4gICAgICAgIHRocm93IFJhbmdlRXJyb3IoJ0ludmFsaWQgY29kZSBwb2ludDogJyArIGNvZGVQb2ludClcbiAgICAgIH1cbiAgICAgIGlmIChjb2RlUG9pbnQgPD0gMHhmZmZmKSB7XG4gICAgICAgIC8vIEJNUCBjb2RlIHBvaW50XG4gICAgICAgIGNvZGVVbml0cy5wdXNoKGNvZGVQb2ludClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEFzdHJhbCBjb2RlIHBvaW50OyBzcGxpdCBpbiBzdXJyb2dhdGUgaGFsdmVzXG4gICAgICAgIC8vIGh0dHA6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtZW5jb2Rpbmcjc3Vycm9nYXRlLWZvcm11bGFlXG4gICAgICAgIGNvZGVQb2ludCAtPSAweDEwMDAwXG4gICAgICAgIGhpZ2hTdXJyb2dhdGUgPSAoY29kZVBvaW50ID4+IDEwKSArIDB4ZDgwMFxuICAgICAgICBsb3dTdXJyb2dhdGUgPSAoY29kZVBvaW50ICUgMHg0MDApICsgMHhkYzAwXG4gICAgICAgIGNvZGVVbml0cy5wdXNoKGhpZ2hTdXJyb2dhdGUsIGxvd1N1cnJvZ2F0ZSlcbiAgICAgIH1cbiAgICAgIGlmIChpbmRleCArIDEgPT09IGxlbmd0aCB8fCBjb2RlVW5pdHMubGVuZ3RoID4gTUFYX1NJWkUpIHtcbiAgICAgICAgcmVzdWx0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgY29kZVVuaXRzKVxuICAgICAgICBjb2RlVW5pdHMubGVuZ3RoID0gMFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbiIsImNvbnN0IFNWR3MgPSB7XG4gIGFjdGl2aXR5OiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNMTIgMEM1LjM3MyAwIDAgNS4zNzIgMCAxMmMwIDYuNjI3IDUuMzczIDEyIDEyIDEyIDYuNjI4IDAgMTItNS4zNzMgMTItMTIgMC02LjYyOC01LjM3Mi0xMi0xMi0xMm05Ljk0OSAxMUgxNy4wNWMuMjI0LTIuNTI3IDEuMjMyLTQuNzczIDEuOTY4LTYuMTEzQTkuOTY2IDkuOTY2IDAgMCAxIDIxLjk0OSAxMU0xMyAxMVYyLjA1MWE5Ljk0NSA5Ljk0NSAwIDAgMSA0LjQzMiAxLjU2NGMtLjg1OCAxLjQ5MS0yLjE1NiA0LjIyLTIuMzkyIDcuMzg1SDEzem0tMiAwSDguOTYxYy0uMjM4LTMuMTY1LTEuNTM2LTUuODk0LTIuMzkzLTcuMzg1QTkuOTUgOS45NSAwIDAgMSAxMSAyLjA1MVYxMXptMCAydjguOTQ5YTkuOTM3IDkuOTM3IDAgMCAxLTQuNDMyLTEuNTY0Yy44NTctMS40OTIgMi4xNTUtNC4yMjEgMi4zOTMtNy4zODVIMTF6bTQuMDQgMGMuMjM2IDMuMTY0IDEuNTM0IDUuODkzIDIuMzkyIDcuMzg1QTkuOTIgOS45MiAwIDAgMSAxMyAyMS45NDlWMTNoMi4wNHpNNC45ODIgNC44ODdDNS43MTggNi4yMjcgNi43MjYgOC40NzMgNi45NTEgMTFoLTQuOWE5Ljk3NyA5Ljk3NyAwIDAgMSAyLjkzMS02LjExM00yLjA1MSAxM2g0LjljLS4yMjYgMi41MjctMS4yMzMgNC43NzEtMS45NjkgNi4xMTNBOS45NzIgOS45NzIgMCAwIDEgMi4wNTEgMTNtMTYuOTY3IDYuMTEzYy0uNzM1LTEuMzQyLTEuNzQ0LTMuNTg2LTEuOTY4LTYuMTEzaDQuODk5YTkuOTYxIDkuOTYxIDAgMCAxLTIuOTMxIDYuMTEzXCIvPjwvc3ZnPmAsXG5cbiAgY3VzdG9tOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgyLjAwMDAwMCwgMS4wMDAwMDApXCI+PHJlY3QgaWQ9XCJSZWN0YW5nbGVcIiB4PVwiOFwiIHk9XCIwXCIgd2lkdGg9XCIzXCIgaGVpZ2h0PVwiMjFcIiByeD1cIjEuNVwiPjwvcmVjdD48cmVjdCBpZD1cIlJlY3RhbmdsZVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5Ljg0MywgMTAuNTQ5KSByb3RhdGUoNjApIHRyYW5zbGF0ZSgtOS44NDMsIC0xMC41NDkpIFwiIHg9XCI4LjM0M1wiIHk9XCIwLjA0OVwiIHdpZHRoPVwiM1wiIGhlaWdodD1cIjIxXCIgcng9XCIxLjVcIj48L3JlY3Q+PHJlY3QgaWQ9XCJSZWN0YW5nbGVcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOS44NDMsIDEwLjU0OSkgcm90YXRlKC02MCkgdHJhbnNsYXRlKC05Ljg0MywgLTEwLjU0OSkgXCIgeD1cIjguMzQzXCIgeT1cIjAuMDQ5XCIgd2lkdGg9XCIzXCIgaGVpZ2h0PVwiMjFcIiByeD1cIjEuNVwiPjwvcmVjdD48L2c+PC9zdmc+YCxcblxuICBmbGFnczogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTAgMGw2LjA4NCAyNEg4TDEuOTE2IDB6TTIxIDVoLTRsLTEtNEg0bDMgMTJoM2wxIDRoMTNMMjEgNXpNNi41NjMgM2g3Ljg3NWwyIDhIOC41NjNsLTItOHptOC44MzIgMTBsLTIuODU2IDEuOTA0TDEyLjA2MyAxM2gzLjMzMnpNMTkgMTNsLTEuNS02aDEuOTM4bDIgOEgxNmwzLTJ6XCIvPjwvc3ZnPmAsXG5cbiAgZm9vZHM6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk0xNyA0Ljk3OGMtMS44MzggMC0yLjg3Ni4zOTYtMy42OC45MzQuNTEzLTEuMTcyIDEuNzY4LTIuOTM0IDQuNjgtMi45MzRhMSAxIDAgMCAwIDAtMmMtMi45MjEgMC00LjYyOSAxLjM2NS01LjU0NyAyLjUxMi0uMDY0LjA3OC0uMTE5LjE2Mi0uMTguMjQ0QzExLjczIDEuODM4IDEwLjc5OC4wMjMgOS4yMDcuMDIzIDguNTc5LjAyMiA3Ljg1LjMwNiA3IC45NzggNS4wMjcgMi41NCA1LjMyOSAzLjkwMiA2LjQ5MiA0Ljk5OSAzLjYwOSA1LjIyMiAwIDcuMzUyIDAgMTIuOTY5YzAgNC41ODIgNC45NjEgMTEuMDA5IDkgMTEuMDA5IDEuOTc1IDAgMi4zNzEtLjQ4NiAzLTEgLjYyOS41MTQgMS4wMjUgMSAzIDEgNC4wMzkgMCA5LTYuNDE4IDktMTEgMC01Ljk1My00LjA1NS04LTctOE04LjI0MiAyLjU0NmMuNjQxLS41MDguOTQzLS41MjMuOTY1LS41MjMuNDI2LjE2OS45NzUgMS40MDUgMS4zNTcgMy4wNTUtMS41MjctLjYyOS0yLjc0MS0xLjM1Mi0yLjk4LTEuODQ2LjA1OS0uMTEyLjI0MS0uMzU2LjY1OC0uNjg2TTE1IDIxLjk3OGMtMS4wOCAwLTEuMjEtLjEwOS0xLjU1OS0uNDAybC0uMTc2LS4xNDZjLS4zNjctLjMwMi0uODE2LS40NTItMS4yNjYtLjQ1MnMtLjg5OC4xNS0xLjI2Ni40NTJsLS4xNzYuMTQ2Yy0uMzQ3LjI5Mi0uNDc3LjQwMi0xLjU1Ny40MDItMi44MTMgMC03LTUuMzg5LTctOS4wMDkgMC01LjgyMyA0LjQ4OC01Ljk5MSA1LTUuOTkxIDEuOTM5IDAgMi40ODQuNDcxIDMuMzg3IDEuMjUxbC4zMjMuMjc2YTEuOTk1IDEuOTk1IDAgMCAwIDIuNTggMGwuMzIzLS4yNzZjLjkwMi0uNzggMS40NDctMS4yNTEgMy4zODctMS4yNTEuNTEyIDAgNSAuMTY4IDUgNiAwIDMuNjE3LTQuMTg3IDktNyA5XCIvPjwvc3ZnPmAsXG5cbiAgbmF0dXJlOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNMTUuNSA4YTEuNSAxLjUgMCAxIDAgLjAwMSAzLjAwMUExLjUgMS41IDAgMCAwIDE1LjUgOE04LjUgOGExLjUgMS41IDAgMSAwIC4wMDEgMy4wMDFBMS41IDEuNSAwIDAgMCA4LjUgOFwiLz48cGF0aCBkPVwiTTE4LjkzMyAwaC0uMDI3Yy0uOTcgMC0yLjEzOC43ODctMy4wMTggMS40OTctMS4yNzQtLjM3NC0yLjYxMi0uNTEtMy44ODctLjUxLTEuMjg1IDAtMi42MTYuMTMzLTMuODc0LjUxN0M3LjI0NS43OSA2LjA2OSAwIDUuMDkzIDBoLS4wMjdDMy4zNTIgMCAuMDcgMi42Ny4wMDIgNy4wMjZjLS4wMzkgMi40NzkuMjc2IDQuMjM4IDEuMDQgNS4wMTMuMjU0LjI1OC44ODIuNjc3IDEuMjk1Ljg4Mi4xOTEgMy4xNzcuOTIyIDUuMjM4IDIuNTM2IDYuMzguODk3LjYzNyAyLjE4Ny45NDkgMy4yIDEuMTAyQzguMDQgMjAuNiA4IDIwLjc5NSA4IDIxYzAgMS43NzMgMi4zNSAzIDQgMyAxLjY0OCAwIDQtMS4yMjcgNC0zIDAtLjIwMS0uMDM4LS4zOTMtLjA3Mi0uNTg2IDIuNTczLS4zODUgNS40MzUtMS44NzcgNS45MjUtNy41ODcuMzk2LS4yMi44ODctLjU2OCAxLjEwNC0uNzg4Ljc2My0uNzc0IDEuMDc5LTIuNTM0IDEuMDQtNS4wMTNDMjMuOTI5IDIuNjcgMjAuNjQ2IDAgMTguOTMzIDBNMy4yMjMgOS4xMzVjLS4yMzcuMjgxLS44MzcgMS4xNTUtLjg4NCAxLjIzOC0uMTUtLjQxLS4zNjgtMS4zNDktLjMzNy0zLjI5MS4wNTEtMy4yODEgMi40NzgtNC45NzIgMy4wOTEtNS4wMzEuMjU2LjAxNS43MzEuMjcgMS4yNjUuNjQ2LTEuMTEgMS4xNzEtMi4yNzUgMi45MTUtMi4zNTIgNS4xMjUtLjEzMy41NDYtLjM5OC44NTgtLjc4MyAxLjMxM00xMiAyMmMtLjkwMSAwLTEuOTU0LS42OTMtMi0xIDAtLjY1NC40NzUtMS4yMzYgMS0xLjYwMlYyMGExIDEgMCAxIDAgMiAwdi0uNjAyYy41MjQuMzY1IDEgLjk0NyAxIDEuNjAyLS4wNDYuMzA3LTEuMDk5IDEtMiAxbTMtMy40OHYuMDJhNC43NTIgNC43NTIgMCAwIDAtMS4yNjItMS4wMmMxLjA5Mi0uNTE2IDIuMjM5LTEuMzM0IDIuMjM5LTIuMjE3IDAtMS44NDItMS43ODEtMi4xOTUtMy45NzctMi4xOTUtMi4xOTYgMC0zLjk3OC4zNTQtMy45NzggMi4xOTUgMCAuODgzIDEuMTQ4IDEuNzAxIDIuMjM4IDIuMjE3QTQuOCA0LjggMCAwIDAgOSAxOC41Mzl2LS4wMjVjLTEtLjA3Ni0yLjE4Mi0uMjgxLTIuOTczLS44NDItMS4zMDEtLjkyLTEuODM4LTMuMDQ1LTEuODUzLTYuNDc4bC4wMjMtLjA0MWMuNDk2LS44MjYgMS40OS0xLjQ1IDEuODA0LTMuMTAyIDAtMi4wNDcgMS4zNTctMy42MzEgMi4zNjItNC41MjJDOS4zNyAzLjE3OCAxMC41NTUgMyAxMS45NDggM2MxLjQ0NyAwIDIuNjg1LjE5MiAzLjczMy41NyAxIC45IDIuMzE2IDIuNDY1IDIuMzE2IDQuNDguMzEzIDEuNjUxIDEuMzA3IDIuMjc1IDEuODAzIDMuMTAyLjAzNS4wNTguMDY4LjExNy4xMDIuMTc4LS4wNTkgNS45NjctMS45NDkgNy4wMS00LjkwMiA3LjE5bTYuNjI4LTguMjAyYy0uMDM3LS4wNjUtLjA3NC0uMTMtLjExMy0uMTk1YTcuNTg3IDcuNTg3IDAgMCAwLS43MzktLjk4N2MtLjM4NS0uNDU1LS42NDgtLjc2OC0uNzgyLTEuMzEzLS4wNzYtMi4yMDktMS4yNDEtMy45NTQtMi4zNTMtNS4xMjQuNTMxLS4zNzYgMS4wMDQtLjYzIDEuMjYxLS42NDcuNjM2LjA3MSAzLjA0NCAxLjc2NCAzLjA5NiA1LjAzMS4wMjcgMS44MS0uMzQ3IDMuMjE4LS4zNyAzLjIzNVwiLz48L3N2Zz5gLFxuXG4gIG9iamVjdHM6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk0xMiAwYTkgOSAwIDAgMC01IDE2LjQ4MlYyMXMyLjAzNSAzIDUgMyA1LTMgNS0zdi00LjUxOEE5IDkgMCAwIDAgMTIgMHptMCAyYzMuODYgMCA3IDMuMTQxIDcgN3MtMy4xNCA3LTcgNy03LTMuMTQxLTctNyAzLjE0LTcgNy03ek05IDE3LjQ3N2MuOTQuMzMyIDEuOTQ2LjUyMyAzIC41MjNzMi4wNi0uMTkgMy0uNTIzdi44MzRjLS45MS40MzYtMS45MjUuNjg5LTMgLjY4OWE2LjkyNCA2LjkyNCAwIDAgMS0zLS42OXYtLjgzM3ptLjIzNiAzLjA3QTguODU0IDguODU0IDAgMCAwIDEyIDIxYy45NjUgMCAxLjg4OC0uMTY3IDIuNzU4LS40NTFDMTQuMTU1IDIxLjE3MyAxMy4xNTMgMjIgMTIgMjJjLTEuMTAyIDAtMi4xMTctLjc4OS0yLjc2NC0xLjQ1M3pcIi8+PHBhdGggZD1cIk0xNC43NDUgMTIuNDQ5aC0uMDA0Yy0uODUyLS4wMjQtMS4xODgtLjg1OC0xLjU3Ny0xLjgyNC0uNDIxLTEuMDYxLS43MDMtMS41NjEtMS4xODItMS41NjZoLS4wMDljLS40ODEgMC0uNzgzLjQ5Ny0xLjIzNSAxLjUzNy0uNDM2Ljk4Mi0uODAxIDEuODExLTEuNjM2IDEuNzkxbC0uMjc2LS4wNDNjLS41NjUtLjE3MS0uODUzLS42OTEtMS4yODQtMS43OTQtLjEyNS0uMzEzLS4yMDItLjYzMi0uMjctLjkxMy0uMDUxLS4yMTMtLjEyNy0uNTMtLjE5NS0uNjM0QzcuMDY3IDkuMDA0IDcuMDM5IDkgNi45OSA5QTEgMSAwIDAgMSA3IDdoLjAxYzEuNjYyLjAxNyAyLjAxNSAxLjM3MyAyLjE5OCAyLjEzNC40ODYtLjk4MSAxLjMwNC0yLjA1OCAyLjc5Ny0yLjA3NSAxLjUzMS4wMTggMi4yOCAxLjE1MyAyLjczMSAyLjE0MWwuMDAyLS4wMDhDMTQuOTQ0IDguNDI0IDE1LjMyNyA3IDE2Ljk3OSA3aC4wMzJBMSAxIDAgMSAxIDE3IDloLS4wMTFjLS4xNDkuMDc2LS4yNTYuNDc0LS4zMTkuNzA5YTYuNDg0IDYuNDg0IDAgMCAxLS4zMTEuOTUxYy0uNDI5Ljk3My0uNzkgMS43ODktMS42MTQgMS43ODlcIi8+PC9zdmc+YCxcblxuICBzbWlsZXlzOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNMTIgMEM1LjM3MyAwIDAgNS4zNzMgMCAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMlMxOC42MjcgMCAxMiAwbTAgMjJDNi40ODYgMjIgMiAxNy41MTQgMiAxMlM2LjQ4NiAyIDEyIDJzMTAgNC40ODYgMTAgMTAtNC40ODYgMTAtMTAgMTBcIi8+PHBhdGggZD1cIk04IDdhMiAyIDAgMSAwLS4wMDEgMy45OTlBMiAyIDAgMCAwIDggN00xNiA3YTIgMiAwIDEgMC0uMDAxIDMuOTk5QTIgMiAwIDAgMCAxNiA3TTE1LjIzMiAxNWMtLjY5MyAxLjE5NS0xLjg3IDItMy4zNDkgMi0xLjQ3NyAwLTIuNjU1LS44MDUtMy4zNDctMkgxNW0zLTJINmE2IDYgMCAxIDAgMTIgMFwiLz48L3N2Zz5gLFxuXG4gIHBlb3BsZTogYDxzdmcgeG1sbnM6c3ZnPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBoZWlnaHQ9XCIyNFwiIHdpZHRoPVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+IDxwYXRoIGlkPVwicGF0aDM4MTRcIiBkPVwibSAzLjM1OTEwODksMjEuMTc3MjYgYyAwLjE3MjAzNiwwLjA5Mzg1IDQuMjY1OTk0LDIuMjk4MzcgOC44MTQ0NDUxLDIuMjk4MzcgNC45Mjc3NjcsMCA4LjY3MDg5NCwtMi4yMTE4ODMgOC44Mjc4MiwtMi4zMDYwMTkgMC4xMTMwNzksLTAuMDY3ODUgMC4xODIyNjgsLTAuMTkwMDUxIDAuMTgyMjY3LC0wLjMyMTkyMyAwLC0zLjAzMTE5IC0wLjkyOTQ5NCwtNS44MDQ5MzYgLTIuNjE3MTk2LC03LjgxMDcxMiAtMS4xODA2MDMsLTEuNDAzMTM0IC0yLjY2MTkxOCwtMi4zNTk1MTYgLTQuMjk1Njk5LC0yLjc5OTc5MSA0LjY5OTExOCwtMi4yMzYyNTggMy4xMDIzMDYsLTkuMjg2MTcxNjIgLTIuMDk3MTkxLC05LjI4NjE3MTYyIC01LjE5OTQ5NzgsMCAtNi43OTYzMTAzLDcuMDQ5OTEzNjIgLTIuMDk3MTkyLDkuMjg2MTcxNjIgLTEuNjMzNzgyMSwwLjQ0MDI3NSAtMy4xMTUwOTcxLDEuMzk2Nzk4IC00LjI5NTY5OTEsMi43OTk3OTEgLTEuNjg3NzAzLDIuMDA1Nzc2IC0yLjYxNzE5Niw0Ljc3OTUyMiAtMi42MTcxOTYsNy44MTA3MTIgMS4yZS02LDAuMTM3Mzc4IDAuMDc1MDM5LDAuMjYzNzg1IDAuMTk1NjQxLDAuMzI5NTcyIHogTSA4LjA0MzkzMTksNS44MzA4NzgzIEMgOC4wNDM5MzA5LDIuMTUxNTIxIDEyLjQ5MjEwNywwLjMwOTU1ODExIDE1LjA5MzQ5MSwyLjkxMDk0MTEgMTcuNjk0ODc0LDUuNTEyMzI0MSAxNS44NTI5MTEsOS45NjA1MDA2IDEyLjE3MzU1NCw5Ljk2MDUgOS44OTM4OTkxLDkuOTU3OTEzNSA4LjA0NjUxODYsOC4xMTA1MzMyIDguMDQzOTMxOSw1LjgzMDg3ODMgWiBtIC0xLjY4ODc4Miw3LjY4OTQ5NzcgYyAxLjUyNDUzNSwtMS44MTE0NDkgMy41OTA2NjAxLC0yLjgwOTAzNSA1LjgxODQwNDEsLTIuODA5MDM1IDIuMjI3NzQ0LDAgNC4yOTM4NjksMC45OTc1ODYgNS44MTg0MDQsMi44MDkwMzUgMS41MzM2MzksMS44MjI1NzEgMi4zOTU5MzIsNC4zMzk4NTggMi40MzkxNTIsNy4xMDgzMDEgLTAuODAzMzUyLDAuNDM0ODc3IC00LjE0MTYzNiwyLjA5NjExMiAtOC4yNTc1NTYsMi4wOTYxMTIgLTMuODA2MjkyMSwwIC03LjM5MTA4NjEsLTEuNjcxMDQzIC04LjI1NzM2ODEsLTIuMTA0OTgxIDAuMDQ1MDUsLTIuNzY1MDE3IDAuOTA2OTY4LC01LjI3ODc4NSAyLjQzODk2NCwtNy4wOTk0MzIgelwiIC8+IDxwYXRoIGlkPVwicGF0aDM4MTZcIiBkPVwiTSAxMi4xNzM4MjggMC4zODg2NzE4OCBDIDkuMzE5ODUxMyAwLjM4ODY3MTg3IDcuMzc3MDk4OCAyLjM2NzIyODUgNi44NjUyMzQ0IDQuNjMwODU5NCBDIDYuNDIxODYwOCA2LjU5MTYwMTUgNy4xMTUzNTYyIDguNzY3NjExNyA4Ljk2NDg0MzggMTAuMTI2OTUzIEMgNy42MTQxMjQ5IDEwLjY3NzM3NiA2LjM1NTA1MTEgMTEuNDgwOTQ0IDUuMzQ5NjA5NCAxMi42NzU3ODEgQyAzLjU2MjkzMTcgMTQuNzk5MTg1IDIuNjAxNTYyNSAxNy43MDE0NzUgMi42MDE1NjI1IDIwLjg0NzY1NiBDIDIuNjAxNTY1NCAyMS4xODk4NjEgMi43ODk0Mjc2IDIxLjUwODAwMiAzLjA4OTg0MzggMjEuNjcxODc1IEMgMy4zMDQ0MDY4IDIxLjc4ODkyNSA3LjQ0MzYyMzkgMjQuMDM5MDYyIDEyLjE3MzgyOCAyNC4wMzkwNjIgQyAxNy4yNjk5MTggMjQuMDM5MDYyIDIxLjA4MzU2OCAyMS43NzY3ODYgMjEuMjkxMDE2IDIxLjY1MjM0NCBDIDIxLjU3MjgxIDIxLjQ4MzI2NiAyMS43NDYwOTcgMjEuMTc2MjgyIDIxLjc0NjA5NCAyMC44NDc2NTYgQyAyMS43NDYwOTQgMTcuNzAxNDc1IDIwLjc4Mjc3IDE0Ljc5OTE4NSAxOC45OTYwOTQgMTIuNjc1NzgxIEMgMTcuOTkwNDU1IDExLjQ4MDU5MSAxNi43MzM4MTggMTAuNjc1MzYyIDE1LjM4MjgxMiAxMC4xMjUgQyAxNy4yMzExMzIgOC43NjU1NTUyIDE3LjkyNTY3NSA2LjU5MTA3MDEgMTcuNDgyNDIyIDQuNjMwODU5NCBDIDE2Ljk3MDU1NyAyLjM2NzIyODUgMTUuMDI3ODA1IDAuMzg4NjcxODggMTIuMTczODI4IDAuMzg4NjcxODggeiBNIDEyLjc5Mjk2OSAyLjMwMDc4MTIgQyAxMy40NjYyNTMgMi40MTYxNzkyIDE0LjEyNTExMyAyLjczODM5NDEgMTQuNjk1MzEyIDMuMzA4NTkzOCBDIDE1LjgzNTcxMiA0LjQ0ODk5MzEgMTUuOTg1NjA0IDUuOTQ3MzU0OSAxNS40Njg3NSA3LjE5NTMxMjUgQyAxNC45NTE4OTYgOC40NDMyNzAxIDEzLjc4NjgyOCA5LjM5ODQzNzggMTIuMTczODI4IDkuMzk4NDM3NSBDIDEwLjE5NzcxOSA5LjM5NjE5NTQgOC42MDc3MTEgNy44MDYxODcgOC42MDU0Njg4IDUuODMwMDc4MSBDIDguNjA1NDY4MyA0LjIxNzA3ODUgOS41NjA2MzYyIDMuMDUyMDEwMiAxMC44MDg1OTQgMi41MzUxNTYyIEMgMTEuNDMyNTczIDIuMjc2NzI5MyAxMi4xMTk2ODUgMi4xODUzODMzIDEyLjc5Mjk2OSAyLjMwMDc4MTIgeiBNIDEyLjE3MzgyOCAxMS4yNzM0MzggQyAxNC4yMzM2NDcgMTEuMjczNDM4IDE2LjEzMzY3NCAxMi4xODUwODQgMTcuNTYyNSAxMy44ODI4MTIgQyAxOC45MzA2OSAxNS41MDg3NjUgMTkuNjk4MzQ3IDE3Ljc3Njk2OSAxOS44MDg1OTQgMjAuMjgzMjAzIEMgMTguODA3Mzk1IDIwLjgwMDIzNSAxNS44ODYxNTcgMjIuMTYyMTA5IDEyLjE3MzgyOCAyMi4xNjIxMDkgQyA4Ljc2MTQ2MzIgMjIuMTYyMTA5IDUuNjI0NTc1NCAyMC43ODcwNjkgNC41MzkwNjI1IDIwLjI2NTYyNSBDIDQuNjUyNTg5NiAxNy43NjY3MTcgNS40MjAzMzE1IDE1LjUwNDc5MSA2Ljc4NTE1NjIgMTMuODgyODEyIEMgOC4yMTM5ODI3IDEyLjE4NTA4NCAxMC4xMTQwMSAxMS4yNzM0MzggMTIuMTczODI4IDExLjI3MzQzOCB6IFwiIC8+IDwvc3ZnPmAsXG5cbiAgcGxhY2VzOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNNi41IDEyQzUuMTIyIDEyIDQgMTMuMTIxIDQgMTQuNVM1LjEyMiAxNyA2LjUgMTcgOSAxNS44NzkgOSAxNC41IDcuODc4IDEyIDYuNSAxMm0wIDNjLS4yNzUgMC0uNS0uMjI1LS41LS41cy4yMjUtLjUuNS0uNS41LjIyNS41LjUtLjIyNS41LS41LjVNMTcuNSAxMmMtMS4zNzggMC0yLjUgMS4xMjEtMi41IDIuNXMxLjEyMiAyLjUgMi41IDIuNSAyLjUtMS4xMjEgMi41LTIuNS0xLjEyMi0yLjUtMi41LTIuNW0wIDNjLS4yNzUgMC0uNS0uMjI1LS41LS41cy4yMjUtLjUuNS0uNS41LjIyNS41LjUtLjIyNS41LS41LjVcIi8+PHBhdGggZD1cIk0yMi40ODIgOS40OTRsLTEuMDM5LS4zNDZMMjEuNCA5aC42Yy41NTIgMCAxLS40MzkgMS0uOTkyIDAtLjAwNi0uMDAzLS4wMDgtLjAwMy0uMDA4SDIzYzAtMS0uODg5LTItMS45ODQtMmgtLjY0MmwtLjczMS0xLjcxN0MxOS4yNjIgMy4wMTIgMTguMDkxIDIgMTYuNzY0IDJINy4yMzZDNS45MDkgMiA0LjczOCAzLjAxMiA0LjM1NyA0LjI4M0wzLjYyNiA2aC0uNjQyQzEuODg5IDYgMSA3IDEgOGguMDAzUzEgOC4wMDIgMSA4LjAwOEMxIDguNTYxIDEuNDQ4IDkgMiA5aC42bC0uMDQzLjE0OC0xLjAzOS4zNDZhMi4wMDEgMi4wMDEgMCAwIDAtMS4zNTkgMi4wOTdsLjc1MSA3LjUwOGExIDEgMCAwIDAgLjk5NC45MDFIM3YxYzAgMS4xMDMuODk2IDIgMiAyaDJjMS4xMDQgMCAyLS44OTcgMi0ydi0xaDZ2MWMwIDEuMTAzLjg5NiAyIDIgMmgyYzEuMTA0IDAgMi0uODk3IDItMnYtMWgxLjA5NmEuOTk5Ljk5OSAwIDAgMCAuOTk0LS45MDFsLjc1MS03LjUwOGEyLjAwMSAyLjAwMSAwIDAgMC0xLjM1OS0yLjA5N002LjI3MyA0Ljg1N0M2LjQwMiA0LjQzIDYuNzg4IDQgNy4yMzYgNGg5LjUyN2MuNDQ4IDAgLjgzNC40My45NjMuODU3TDE5LjMxMyA5SDQuNjg4bDEuNTg1LTQuMTQzek03IDIxSDV2LTFoMnYxem0xMiAwaC0ydi0xaDJ2MXptMi4xODktM0gyLjgxMWwtLjY2Mi02LjYwN0wzIDExaDE4bC44NTIuMzkzTDIxLjE4OSAxOHpcIi8+PC9zdmc+YCxcblxuICByZWNlbnQ6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk0xMyA0aC0ybC0uMDAxIDdIOXYyaDJ2Mmgydi0yaDR2LTJoLTR6XCIvPjxwYXRoIGQ9XCJNMTIgMEM1LjM3MyAwIDAgNS4zNzMgMCAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMlMxOC42MjcgMCAxMiAwbTAgMjJDNi40ODYgMjIgMiAxNy41MTQgMiAxMlM2LjQ4NiAyIDEyIDJzMTAgNC40ODYgMTAgMTAtNC40ODYgMTAtMTAgMTBcIi8+PC9zdmc+YCxcblxuICBzeW1ib2xzOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNMCAwaDExdjJIMHpNNCAxMWgzVjZoNFY0SDB2Mmg0ek0xNS41IDE3YzEuMzgxIDAgMi41LTEuMTE2IDIuNS0yLjQ5M3MtMS4xMTktMi40OTMtMi41LTIuNDkzUzEzIDEzLjEzIDEzIDE0LjUwNyAxNC4xMTkgMTcgMTUuNSAxN20wLTIuOTg2Yy4yNzYgMCAuNS4yMjIuNS40OTMgMCAuMjcyLS4yMjQuNDkzLS41LjQ5M3MtLjUtLjIyMS0uNS0uNDkzLjIyNC0uNDkzLjUtLjQ5M00yMS41IDE5LjAxNGMtMS4zODEgMC0yLjUgMS4xMTYtMi41IDIuNDkzUzIwLjExOSAyNCAyMS41IDI0czIuNS0xLjExNiAyLjUtMi40OTMtMS4xMTktMi40OTMtMi41LTIuNDkzbTAgMi45ODZhLjQ5Ny40OTcgMCAwIDEtLjUtLjQ5M2MwLS4yNzEuMjI0LS40OTMuNS0uNDkzcy41LjIyMi41LjQ5M2EuNDk3LjQ5NyAwIDAgMS0uNS40OTNNMjIgMTNsLTkgOSAxLjUxMyAxLjUgOC45OS05LjAwOXpNMTcgMTFjMi4yMDkgMCA0LTEuMTE5IDQtMi41VjJzLjk4NS0uMTYxIDEuNDk4Ljk0OUMyMy4wMSA0LjA1NSAyMyA2IDIzIDZzMS0xLjExOSAxLTMuMTM1QzI0LS4wMiAyMSAwIDIxIDBoLTJ2Ni4zNDdBNS44NTMgNS44NTMgMCAwIDAgMTcgNmMtMi4yMDkgMC00IDEuMTE5LTQgMi41czEuNzkxIDIuNSA0IDIuNU0xMC4yOTcgMjAuNDgybC0xLjQ3NS0xLjU4NWE0Ny41NCA0Ny41NCAwIDAgMS0xLjQ0MiAxLjEyOWMtLjMwNy0uMjg4LS45ODktMS4wMTYtMi4wNDUtMi4xODMuOTAyLS44MzYgMS40NzktMS40NjYgMS43MjktMS44OTJzLjM3Ni0uODcxLjM3Ni0xLjMzNmMwLS41OTItLjI3My0xLjE3OC0uODE4LTEuNzU5LS41NDYtLjU4MS0xLjMyOS0uODcxLTIuMzQ5LS44NzEtMS4wMDggMC0xLjc5LjI5My0yLjM0NC44NzktLjU1Ni41ODctLjgzMiAxLjE4MS0uODMyIDEuNzg0IDAgLjgxMy40MTkgMS43NDggMS4yNTYgMi44MDUtLjg0Ny42MTQtMS40NDQgMS4yMDgtMS43OTQgMS43ODRhMy40NjUgMy40NjUgMCAwIDAtLjUyMyAxLjgzM2MwIC44NTcuMzA4IDEuNTYuOTI0IDIuMTA3LjYxNi41NDkgMS40MjMuODIzIDIuNDIuODIzIDEuMTczIDAgMi40NDQtLjM3OSAzLjgxMy0xLjEzN0w4LjIzNSAyNGgyLjgxOWwtMi4wOS0yLjM4MyAxLjMzMy0xLjEzNXptLTYuNzM2LTYuMzg5YTEuMDIgMS4wMiAwIDAgMSAuNzMtLjI4NmMuMzEgMCAuNTU5LjA4NS43NDcuMjU0YS44NDkuODQ5IDAgMCAxIC4yODMuNjU5YzAgLjUxOC0uNDE5IDEuMTEyLTEuMjU3IDEuNzg0LS41MzYtLjY1MS0uODA1LTEuMjMxLS44MDUtMS43NDJhLjkwMS45MDEgMCAwIDEgLjMwMi0uNjY5TTMuNzQgMjJjLS40MjcgMC0uNzc4LS4xMTYtMS4wNTctLjM0OS0uMjc5LS4yMzItLjQxOC0uNDg3LS40MTgtLjc2NiAwLS41OTQuNTA5LTEuMjg4IDEuNTI3LTIuMDgzLjk2OCAxLjEzNCAxLjcxNyAxLjk0NiAyLjI0OCAyLjQzOC0uOTIxLjUwNy0xLjY4Ni43Ni0yLjMuNzZcIi8+PC9zdmc+YCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgU1ZHc1xuIiwiY29uc3QgbWFwcGluZyA9IHtcbiAgbmFtZTogJ2EnLFxuICB1bmlmaWVkOiAnYicsXG4gIG5vbl9xdWFsaWZpZWQ6ICdjJyxcbiAgaGFzX2ltZ19hcHBsZTogJ2QnLFxuICBoYXNfaW1nX2dvb2dsZTogJ2UnLFxuICBoYXNfaW1nX3R3aXR0ZXI6ICdmJyxcbiAgaGFzX2ltZ19mYWNlYm9vazogJ2gnLFxuICBrZXl3b3JkczogJ2onLFxuICBzaGVldDogJ2snLFxuICBlbW90aWNvbnM6ICdsJyxcbiAgdGV4dDogJ20nLFxuICBzaG9ydF9uYW1lczogJ24nLFxuICBhZGRlZF9pbjogJ28nLFxufVxuXG5jb25zdCBidWlsZFNlYXJjaCA9IChlbW9qaSkgPT4ge1xuICBjb25zdCBzZWFyY2ggPSBbXVxuXG4gIHZhciBhZGRUb1NlYXJjaCA9IChzdHJpbmdzLCBzcGxpdCkgPT4ge1xuICAgIGlmICghc3RyaW5ncykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgOyhBcnJheS5pc0FycmF5KHN0cmluZ3MpID8gc3RyaW5ncyA6IFtzdHJpbmdzXSkuZm9yRWFjaCgoc3RyaW5nKSA9PiB7XG4gICAgICA7KHNwbGl0ID8gc3RyaW5nLnNwbGl0KC9bLXxffFxcc10rLykgOiBbc3RyaW5nXSkuZm9yRWFjaCgocykgPT4ge1xuICAgICAgICBzID0gcy50b0xvd2VyQ2FzZSgpXG5cbiAgICAgICAgaWYgKHNlYXJjaC5pbmRleE9mKHMpID09IC0xKSB7XG4gICAgICAgICAgc2VhcmNoLnB1c2gocylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYWRkVG9TZWFyY2goZW1vamkuc2hvcnRfbmFtZXMsIHRydWUpXG4gIGFkZFRvU2VhcmNoKGVtb2ppLm5hbWUsIHRydWUpXG4gIGFkZFRvU2VhcmNoKGVtb2ppLmtleXdvcmRzLCBmYWxzZSlcbiAgYWRkVG9TZWFyY2goZW1vamkuZW1vdGljb25zLCBmYWxzZSlcblxuICByZXR1cm4gc2VhcmNoLmpvaW4oJywnKVxufVxuXG5jb25zdCBjb21wcmVzcyA9IChlbW9qaSkgPT4ge1xuICBlbW9qaS5zaG9ydF9uYW1lcyA9IGVtb2ppLnNob3J0X25hbWVzLmZpbHRlcigoc2hvcnRfbmFtZSkgPT4ge1xuICAgIHJldHVybiBzaG9ydF9uYW1lICE9PSBlbW9qaS5zaG9ydF9uYW1lXG4gIH0pXG4gIGRlbGV0ZSBlbW9qaS5zaG9ydF9uYW1lXG5cbiAgZW1vamkuc2hlZXQgPSBbZW1vamkuc2hlZXRfeCwgZW1vamkuc2hlZXRfeV1cbiAgZGVsZXRlIGVtb2ppLnNoZWV0X3hcbiAgZGVsZXRlIGVtb2ppLnNoZWV0X3lcblxuICBlbW9qaS5hZGRlZF9pbiA9IHBhcnNlSW50KGVtb2ppLmFkZGVkX2luKVxuICBpZiAoZW1vamkuYWRkZWRfaW4gPT09IDYpIHtcbiAgICBkZWxldGUgZW1vamkuYWRkZWRfaW5cbiAgfVxuXG4gIGZvciAobGV0IGtleSBpbiBtYXBwaW5nKSB7XG4gICAgZW1vamlbbWFwcGluZ1trZXldXSA9IGVtb2ppW2tleV1cbiAgICBkZWxldGUgZW1vamlba2V5XVxuICB9XG5cbiAgZm9yIChsZXQga2V5IGluIGVtb2ppKSB7XG4gICAgbGV0IHZhbHVlID0gZW1vamlba2V5XVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmICF2YWx1ZS5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSBlbW9qaVtrZXldXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICF2YWx1ZS5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSBlbW9qaVtrZXldXG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgZGVsZXRlIGVtb2ppW2tleV1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVlcEZyZWV6ZShvYmplY3QpIHtcbiAgLy8gUmV0cmlldmUgdGhlIHByb3BlcnR5IG5hbWVzIGRlZmluZWQgb24gb2JqZWN0XG4gIHZhciBwcm9wTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmplY3QpXG5cbiAgLy8gRnJlZXplIHByb3BlcnRpZXMgYmVmb3JlIGZyZWV6aW5nIHNlbGZcbiAgZm9yIChsZXQgbmFtZSBvZiBwcm9wTmFtZXMpIHtcbiAgICBsZXQgdmFsdWUgPSBvYmplY3RbbmFtZV1cbiAgICBvYmplY3RbbmFtZV0gPVxuICAgICAgdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/IGRlZXBGcmVlemUodmFsdWUpIDogdmFsdWVcbiAgfVxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZShvYmplY3QpXG59XG5cbmNvbnN0IHVuY29tcHJlc3MgPSAoZGF0YSkgPT4ge1xuICBpZiAoIWRhdGEuY29tcHJlc3NlZCkge1xuICAgIHJldHVybiBkYXRhXG4gIH1cbiAgZGF0YS5jb21wcmVzc2VkID0gZmFsc2VcblxuICBmb3IgKGxldCBpZCBpbiBkYXRhLmVtb2ppcykge1xuICAgIGxldCBlbW9qaSA9IGRhdGEuZW1vamlzW2lkXVxuXG4gICAgZm9yIChsZXQga2V5IGluIG1hcHBpbmcpIHtcbiAgICAgIGVtb2ppW2tleV0gPSBlbW9qaVttYXBwaW5nW2tleV1dXG4gICAgICBkZWxldGUgZW1vamlbbWFwcGluZ1trZXldXVxuICAgIH1cblxuICAgIGlmICghZW1vamkuc2hvcnRfbmFtZXMpIGVtb2ppLnNob3J0X25hbWVzID0gW11cbiAgICBlbW9qaS5zaG9ydF9uYW1lcy51bnNoaWZ0KGlkKVxuXG4gICAgZW1vamkuc2hlZXRfeCA9IGVtb2ppLnNoZWV0WzBdXG4gICAgZW1vamkuc2hlZXRfeSA9IGVtb2ppLnNoZWV0WzFdXG4gICAgZGVsZXRlIGVtb2ppLnNoZWV0XG5cbiAgICBpZiAoIWVtb2ppLnRleHQpIGVtb2ppLnRleHQgPSAnJ1xuXG4gICAgaWYgKCFlbW9qaS5hZGRlZF9pbikgZW1vamkuYWRkZWRfaW4gPSA2XG4gICAgZW1vamkuYWRkZWRfaW4gPSBlbW9qaS5hZGRlZF9pbi50b0ZpeGVkKDEpXG5cbiAgICBlbW9qaS5zZWFyY2ggPSBidWlsZFNlYXJjaChlbW9qaSlcbiAgfVxuICBkYXRhID0gZGVlcEZyZWV6ZShkYXRhKVxuICByZXR1cm4gZGF0YVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgYnVpbGRTZWFyY2gsIGNvbXByZXNzLCB1bmNvbXByZXNzIH1cbiIsImltcG9ydCB7IGludGVyc2VjdCwgdW5pZmllZFRvTmF0aXZlIH0gZnJvbSAnLi9pbmRleCdcbmltcG9ydCB7IHVuY29tcHJlc3MsIGJ1aWxkU2VhcmNoIH0gZnJvbSAnLi9kYXRhJ1xuaW1wb3J0IGZyZXF1ZW50bHkgZnJvbSAnLi9mcmVxdWVudGx5J1xuXG5jb25zdCBTSEVFVF9DT0xVTU5TID0gNTZcbmNvbnN0IENPTE9OU19SRUdFWCA9IC9eKD86XFw6KFteXFw6XSspXFw6KSg/OlxcOnNraW4tdG9uZS0oXFxkKVxcOik/JC9cbi8vIFNraW4gdG9uZXNcbmNvbnN0IFNLSU5TID0gWycxRjNGQScsICcxRjNGQicsICcxRjNGQycsICcxRjNGRCcsICcxRjNGRScsICcxRjNGRiddXG5cbi8qKlxuICogRW1vamkgZGF0YSBzdHJ1Y3R1cmU6XG4gKiB7XG4gKiAgICBcImNvbXByZXNzZWRcIjogZmFsc2UsXG4gKiAgICBcImFsaWFzZXNcIjoge1xuICogICAgICBjb2xsaXNpb246IFwiYm9vbVwiXG4gKiAgICAgIGNvb2tpbmc6IFwiZnJpZWRfZWdnXCJcbiAqICAgICAgZW52ZWxvcGU6IFwiZW1haWxcIlxuICogICAgICBmYWNlX3dpdGhfZmluZ2VyX2NvdmVyaW5nX2Nsb3NlZF9saXBzOiBcInNodXNoaW5nX2ZhY2VcIlxuICogICAgICAuLi5cbiAqICAgIH0sXG4gKiAgICBcImNhdGVnb3JpZXNcIjogWyB7XG4gKiAgICAgIGlkOiBcInBlb3BsZVwiLFxuICogICAgICBuYW1lOiBcIlNtaWxleXMgJiBFbW90aW9uXCIsXG4gKiAgICAgIGVtb2ppczogWyBcImdyaW5uaW5nXCIsIFwiZ3JpblwiLCBcImpveVwiLCAuLi4gXVxuICogICAgfSwge1xuICogICAgICBpZDogXCJuYXR1cmVcIixcbiAqICAgICAgbmFtZTogXCJBbmltYWxzICYgTmF0dXJlXCIsXG4gKiAgICAgIGVtb2ppczogWyBcIm1vbmtleV9mYWNlXCIsIFwibW9uZXlcIiwgXCJnb3JpbGxhXCIsIC4uLiBdXG4gKiAgICB9LFxuICogICAgLi4uXG4gKiAgICBdLFxuICogICAgXCJlbW9qaXNcIjogW1xuICogICAgICBzbWlsZXk6IHtcbiAqICAgICAgICBhZGRlZF9pbjogXCI2LjBcIixcbiAqICAgICAgICBlbW90aWNvbnM6IFtcIj0pXCIsIFwiPS0pXCJdLFxuICogICAgICAgIGhhc19pbWdfYXBwbGU6IHRydWUsXG4gKiAgICAgICAgaGFzX2ltZ19mYWNlYm9vazogdHJ1ZSxcbiAqICAgICAgICBoYXNfaW1nX2dvb2dsZTogdHJ1ZSxcbiAqICAgICAgICBoYXNfaW1nX3R3aXR0ZXI6IHRydWUsXG4gKiAgICAgICAga2V5d29yZHM6IFtcImZhY2VcIiwgXCJoYXBweVwiLCBcImpveVwiLCBcImhhaGFcIiwgXCI6RFwiLCBcIjopXCIsIFwic21pbGVcIiwgXCJmdW5ueVwiXSxcbiAqICAgICAgICBuYW1lOiBcIlNtaWxpbmcgRmFjZSB3aXRoIE9wZW4gTW91dGhcIixcbiAqICAgICAgICBub25fcXVhbGlmaWVkOiB1bmRlZmluZWQsXG4gKiAgICAgICAgc2VhcmNoOiBcInNtaWxleSxzbWlsaW5nLGZhY2Usd2l0aCxvcGVuLG1vdXRoLGhhcHB5LGpveSxoYWhhLDpkLDopLHNtaWxlLGZ1bm55LD0pLD0tKVwiLFxuICogICAgICAgIHNoZWV0X3g6IDMwLFxuICogICAgICAgIHNoZWV0X3k6IDI3LFxuICogICAgICAgIHNob3J0X25hbWVzOiBbXCJzbWlsZXlcIl0sXG4gKiAgICAgICAgdGV4dDogXCI6KVwiLFxuICogICAgICAgIHVuaWZpZWQ6IFwiMUY2MDNcIixcbiAqICAgICAgfSwge1xuICogICAgICArMTogeyAgICAvLyBlbW9qaSB3aXRoIHNraW5fdmFyaWF0aW9uc1xuICogICAgICAgICAgLi4uLCAvLyBhbGwgdGhlIHJlZ3VsYXIgZmllbGRzIGFyZSBwcmVzZW50XG4gKiAgICAgICAgICBuYW1lOiBcIlRodW1icyBVcCBTaWduXCIsXG4gKiAgICAgICAgICBzaG9ydF9uYW1lczogKDIpIFtcIisxXCIsIFwidGh1bWJzdXBcIl0sXG4gKiAgICAgICAgICBza2luX3ZhcmlhdGlvbnM6IHtcbiAqICAgICAgICAgICAgMUYzRkI6ICAgICAgICAgICAgIC8vIGVhY2ggdmFyaWF0aW9uIGhhcyBhZGRpdGlvbmFsIHNldCBvZiBmaWVsZHM6XG4gKiAgICAgICAgICAgICAgYWRkZWRfaW46IFwiOC4wXCIsXG4gKiAgICAgICAgICAgICAgaGFzX2ltZ19hcHBsZTogdHJ1ZSxcbiAqICAgICAgICAgICAgICBoYXNfaW1nX2ZhY2Vib29rOiB0cnVlLFxuICogICAgICAgICAgICAgIGhhc19pbWdfZ29vZ2xlOiB0cnVlLFxuICogICAgICAgICAgICAgIGhhc19pbWdfdHdpdHRlcjogdHJ1ZSxcbiAqICAgICAgICAgICAgICBpbWFnZTogXCIxZjQ0ZC0xZjNmYi5wbmdcIixcbiAqICAgICAgICAgICAgICBub25fcXVhbGlmaWVkOiBudWxsLFxuICogICAgICAgICAgICAgIHNoZWV0X3g6IDE0LFxuICogICAgICAgICAgICAgIHNoZWV0X3k6IDUwLFxuICogICAgICAgICAgICAgIHVuaWZpZWQ6IFwiMUY0NEQtMUYzRkJcIixcbiAqICAgICAgICAgICAgMUYzRkI6IHvigKZ9LFxuICogICAgICAgICAgICAxRjNGQzoge+KApn0sXG4gKiAgICAgICAgICAgIDFGM0ZEOiB74oCmfSxcbiAqICAgICAgICAgICAgMUYzRkU6IHvigKZ9LFxuICogICAgICAgICAgICAxRjNGRjoge+KApn1cbiAqICAgICAgICAgICAgfSxcbiAqICAgICAgICAgIC4uLlxuICogICAgICB9LFxuICogICAgICBhOiB7ICAvLyBlbW9qaSB3aXRoIG5vbl9xdWFsaWZpZWQgZmllbGQgc2V0XG4gKiAgICAgICAgYWRkZWRfaW46IFwiNi4wXCIsXG4gKiAgICAgICAgZW1vdGljb25zOiB1bmRlZmluZWQsXG4gKiAgICAgICAgaGFzX2ltZ19hcHBsZTogdHJ1ZSxcbiAqICAgICAgICAuLi5cbiAqICAgICAgICBub25fcXVhbGlmaWVkOiBcIjFGMTcwXCIsXG4gKiAgICAgICAgdW5pZmllZDogXCIxRjE3MC1GRTBGXCIsXG4gKiAgICAgfSxcbiAqICAgICAuLi5cbiAqICAgXVxuICogfVxuICovXG5cbi8qKlxuICogV3JhcHMgcmF3IGphc29uIGVtb2ppIGRhdGEsIHNlcnZlcyBhcyBkYXRhIHNvdXJjZSBmb3JcbiAqIGVtb2ppIHBpY2tlciBjb21wb25lbnRzLlxuICpcbiAqIFVzYWdlOlxuICpcbiAqICAgaW1wb3J0IGRhdGEgZnJvbSAnLi4vZGF0YS9hbGwuanNvbidcbiAqICAgbGV0IGluZGV4ID0gbmV3IEVtb2ppSW5kZXgoZGF0YSlcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBFbW9qaUluZGV4IHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIFJhdyBqc29uIGRhdGEsIHNlZSB0aGUgc3RydWN0dXJlIGFib3ZlLlxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIGFkZGl0aW9uYWwgb3B0aW9ucywgYXMgYW4gb2JqZWN0OlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBlbW9qaXNUb1Nob3dGaWx0ZXIgLSBvcHRpb25hbCwgZnVuY3Rpb24gdG8gZmlsdGVyIG91dFxuICAgKiAgIHNvbWUgZW1vamlzLCBmdW5jdGlvbihlbW9qaSkgeyByZXR1cm4gdHJ1ZXxmYWxzZSB9XG4gICAqICAgd2hlcmUgYGVtb2ppYCBpcyBhbiByYXcgZW1vamkgb2JqZWN0LCBzZWUgZGF0YS5lbW9qaXMgYWJvdmUuXG4gICAqIEBwYXJhbSB7QXJyYXl9IGluY2x1ZGUgLSBvcHRpb25hbCwgYSBsaXN0IG9mIGNhdGVnb3J5IGlkcyB0byBpbmNsdWRlLlxuICAgKiBAcGFyYW0ge0FycmF5fSBleGNsdWRlIC0gb3B0aW9uYWwsIGEgbGlzdCBvZiBjYXRlZ29yeSBpZHMgdG8gZXhjbHVkZS5cbiAgICogQHBhcmFtIHtBcnJheX0gY3VzdG9tIC0gb3B0aW9uYWwsIGEgbGlzdCBjdXN0b20gZW1vamlzLCBlYWNoIGVtb2ppIGlzXG4gICAqICAgYW4gb2JqZWN0LCBzZWUgZGF0YS5lbW9qaXMgYWJvdmUgZm9yIGV4YW1wbGVzLlxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgZGF0YSxcbiAgICB7XG4gICAgICBlbW9qaXNUb1Nob3dGaWx0ZXIsXG4gICAgICBpbmNsdWRlLFxuICAgICAgZXhjbHVkZSxcbiAgICAgIGN1c3RvbSxcbiAgICAgIHJlY2VudCxcbiAgICAgIHJlY2VudExlbmd0aCA9IDIwLFxuICAgIH0gPSB7fSxcbiAgKSB7XG4gICAgdGhpcy5fZGF0YSA9IHVuY29tcHJlc3MoZGF0YSlcbiAgICAvLyBDYWxsYmFjayB0byBleGNsdWRlIHNwZWNpZmljIGVtb2ppc1xuICAgIHRoaXMuX2Vtb2ppc0ZpbHRlciA9IGVtb2ppc1RvU2hvd0ZpbHRlciB8fCBudWxsXG4gICAgLy8gQ2F0ZWdvcmllcyB0byBpbmNsdWRlIC8gZXhjbHVkZVxuICAgIHRoaXMuX2luY2x1ZGUgPSBpbmNsdWRlIHx8IG51bGxcbiAgICB0aGlzLl9leGNsdWRlID0gZXhjbHVkZSB8fCBudWxsXG4gICAgLy8gQ3VzdG9tIGVtb2ppc1xuICAgIHRoaXMuX2N1c3RvbSA9IGN1c3RvbSB8fCBbXVxuICAgIC8vIFJlY2VudCBlbW9qaXNcbiAgICAvLyBUT0RPOiBtYWtlIHBhcmFtZXRlciBjb25maWd1cmFibGVcbiAgICB0aGlzLl9yZWNlbnQgPSByZWNlbnQgfHwgZnJlcXVlbnRseS5nZXQocmVjZW50TGVuZ3RoKVxuXG4gICAgdGhpcy5fZW1vamlzID0ge31cbiAgICB0aGlzLl9uYXRpdmVFbW9qaXMgPSB7fVxuICAgIHRoaXMuX2Vtb3RpY29ucyA9IHt9XG5cbiAgICB0aGlzLl9jYXRlZ29yaWVzID0gW11cbiAgICB0aGlzLl9yZWNlbnRDYXRlZ29yeSA9IHsgaWQ6ICdyZWNlbnQnLCBuYW1lOiAnUmVjZW50JywgZW1vamlzOiBbXSB9XG4gICAgdGhpcy5fY3VzdG9tQ2F0ZWdvcnkgPSB7IGlkOiAnY3VzdG9tJywgbmFtZTogJ0N1c3RvbScsIGVtb2ppczogW10gfVxuICAgIHRoaXMuX3NlYXJjaEluZGV4ID0ge31cbiAgICB0aGlzLmJ1aWxkSW5kZXgoKVxuICAgIE9iamVjdC5mcmVlemUodGhpcylcbiAgfVxuXG4gIGJ1aWxkSW5kZXgoKSB7XG4gICAgbGV0IGFsbENhdGVnb3JpZXMgPSB0aGlzLl9kYXRhLmNhdGVnb3JpZXNcblxuICAgIGlmICh0aGlzLl9pbmNsdWRlKSB7XG4gICAgICAvLyBSZW1vdmUgY2F0ZWdvcmllcyB0aGF0IGFyZSBub3QgaW4gdGhlIGluY2x1ZGUgbGlzdC5cbiAgICAgIGFsbENhdGVnb3JpZXMgPSBhbGxDYXRlZ29yaWVzLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5jbHVkZS5pbmNsdWRlcyhpdGVtLmlkKVxuICAgICAgfSlcbiAgICAgIC8vIFNvcnQgY2F0ZWdvcmllcyBhY2NvcmRpbmcgdG8gdGhlIGluY2x1ZGUgbGlzdC5cbiAgICAgIGFsbENhdGVnb3JpZXMgPSBhbGxDYXRlZ29yaWVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXhBID0gdGhpcy5faW5jbHVkZS5pbmRleE9mKGEuaWQpXG4gICAgICAgIGNvbnN0IGluZGV4QiA9IHRoaXMuX2luY2x1ZGUuaW5kZXhPZihiLmlkKVxuICAgICAgICBpZiAoaW5kZXhBIDwgaW5kZXhCKSB7XG4gICAgICAgICAgcmV0dXJuIC0xXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4QSA+IGluZGV4Qikge1xuICAgICAgICAgIHJldHVybiAxXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDBcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgYWxsQ2F0ZWdvcmllcy5mb3JFYWNoKChjYXRlZ29yeURhdGEpID0+IHtcbiAgICAgIGlmICghdGhpcy5pc0NhdGVnb3J5TmVlZGVkKGNhdGVnb3J5RGF0YS5pZCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBsZXQgY2F0ZWdvcnkgPSB7XG4gICAgICAgIGlkOiBjYXRlZ29yeURhdGEuaWQsXG4gICAgICAgIG5hbWU6IGNhdGVnb3J5RGF0YS5uYW1lLFxuICAgICAgICBlbW9qaXM6IFtdLFxuICAgICAgfVxuICAgICAgY2F0ZWdvcnlEYXRhLmVtb2ppcy5mb3JFYWNoKChlbW9qaUlkKSA9PiB7XG4gICAgICAgIGxldCBlbW9qaSA9IHRoaXMuYWRkRW1vamkoZW1vamlJZClcbiAgICAgICAgaWYgKGVtb2ppKSB7XG4gICAgICAgICAgY2F0ZWdvcnkuZW1vamlzLnB1c2goZW1vamkpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBpZiAoY2F0ZWdvcnkuZW1vamlzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9jYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnkpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmICh0aGlzLmlzQ2F0ZWdvcnlOZWVkZWQoJ2N1c3RvbScpKSB7XG4gICAgICBpZiAodGhpcy5fY3VzdG9tLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChsZXQgY3VzdG9tRW1vamkgb2YgdGhpcy5fY3VzdG9tKSB7XG4gICAgICAgICAgdGhpcy5hZGRDdXN0b21FbW9qaShjdXN0b21FbW9qaSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2N1c3RvbUNhdGVnb3J5LmVtb2ppcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fY2F0ZWdvcmllcy5wdXNoKHRoaXMuX2N1c3RvbUNhdGVnb3J5KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQ2F0ZWdvcnlOZWVkZWQoJ3JlY2VudCcpKSB7XG4gICAgICBpZiAodGhpcy5fcmVjZW50Lmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9yZWNlbnQubWFwKChpZCkgPT4ge1xuICAgICAgICAgIGZvciAobGV0IGN1c3RvbUVtb2ppIG9mIHRoaXMuX2N1c3RvbUNhdGVnb3J5LmVtb2ppcykge1xuICAgICAgICAgICAgaWYgKGN1c3RvbUVtb2ppLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICB0aGlzLl9yZWNlbnRDYXRlZ29yeS5lbW9qaXMucHVzaChjdXN0b21FbW9qaSlcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLmhhc0Vtb2ppKGlkKSkge1xuICAgICAgICAgICAgdGhpcy5fcmVjZW50Q2F0ZWdvcnkuZW1vamlzLnB1c2godGhpcy5lbW9qaShpZCkpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgLy8gQWRkIHJlY2VudCBjYXRlZ29yeSB0byB0aGUgdG9wXG4gICAgICBpZiAodGhpcy5fcmVjZW50Q2F0ZWdvcnkuZW1vamlzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9jYXRlZ29yaWVzLnVuc2hpZnQodGhpcy5fcmVjZW50Q2F0ZWdvcnkpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgdGhlIGVtb2ppIGZyb20gdGhlIHN0cmluZ1xuICAgKi9cbiAgZmluZEVtb2ppKGVtb2ppLCBza2luKSB7XG4gICAgLy8gMS4gUGFyc2UgYXMgOmVtb2ppX25hbWU6c2tpbi10b25lLXh4OlxuICAgIGxldCBtYXRjaGVzID0gZW1vamkubWF0Y2goQ09MT05TX1JFR0VYKVxuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIGVtb2ppID0gbWF0Y2hlc1sxXVxuICAgICAgaWYgKG1hdGNoZXNbMl0pIHtcbiAgICAgICAgc2tpbiA9IHBhcnNlSW50KG1hdGNoZXNbMl0sIDEwKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDIuIENoZWNrIGlmIHRoZSBzcGVjaWZpZWQgZW1vamkgaXMgYW4gYWxpYXNcbiAgICBpZiAodGhpcy5fZGF0YS5hbGlhc2VzLmhhc093blByb3BlcnR5KGVtb2ppKSkge1xuICAgICAgZW1vamkgPSB0aGlzLl9kYXRhLmFsaWFzZXNbZW1vamldXG4gICAgfVxuXG4gICAgLy8gMy4gQ2hlY2sgaWYgd2UgaGF2ZSB0aGUgc3BlY2lmaWVkIGVtb2ppXG4gICAgaWYgKHRoaXMuX2Vtb2ppcy5oYXNPd25Qcm9wZXJ0eShlbW9qaSkpIHtcbiAgICAgIGxldCBlbW9qaU9iamVjdCA9IHRoaXMuX2Vtb2ppc1tlbW9qaV1cbiAgICAgIGlmIChza2luKSB7XG4gICAgICAgIHJldHVybiBlbW9qaU9iamVjdC5nZXRTa2luKHNraW4pXG4gICAgICB9XG4gICAgICByZXR1cm4gZW1vamlPYmplY3RcbiAgICB9XG5cbiAgICAvLyA0LiBDaGVjayBpZiB3ZSBoYXZlIHRoZSBzcGVjaWZpZWQgbmF0aXZlIGVtb2ppXG4gICAgaWYgKHRoaXMuX25hdGl2ZUVtb2ppcy5oYXNPd25Qcm9wZXJ0eShlbW9qaSkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9uYXRpdmVFbW9qaXNbZW1vamldXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjYXRlZ29yaWVzKCkge1xuICAgIHJldHVybiB0aGlzLl9jYXRlZ29yaWVzXG4gIH1cblxuICBlbW9qaShlbW9qaUlkKSB7XG4gICAgaWYgKHRoaXMuX2RhdGEuYWxpYXNlcy5oYXNPd25Qcm9wZXJ0eShlbW9qaUlkKSkge1xuICAgICAgZW1vamlJZCA9IHRoaXMuX2RhdGEuYWxpYXNlc1tlbW9qaUlkXVxuICAgIH1cbiAgICBsZXQgZW1vamkgPSB0aGlzLl9lbW9qaXNbZW1vamlJZF1cbiAgICBpZiAoIWVtb2ppKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBub3QgZmluZCBlbW9qaSBieSBpZDogJyArIGVtb2ppSWQpXG4gICAgfVxuICAgIHJldHVybiBlbW9qaVxuICB9XG5cbiAgZmlyc3RFbW9qaSgpIHtcbiAgICBsZXQgZW1vamkgPSB0aGlzLl9lbW9qaXNbT2JqZWN0LmtleXModGhpcy5fZW1vamlzKVswXV1cbiAgICBpZiAoIWVtb2ppKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBub3QgZ2V0IGZpcnN0IGVtb2ppJylcbiAgICB9XG4gICAgcmV0dXJuIGVtb2ppXG4gIH1cblxuICBoYXNFbW9qaShlbW9qaUlkKSB7XG4gICAgaWYgKHRoaXMuX2RhdGEuYWxpYXNlcy5oYXNPd25Qcm9wZXJ0eShlbW9qaUlkKSkge1xuICAgICAgZW1vamlJZCA9IHRoaXMuX2RhdGEuYWxpYXNlc1tlbW9qaUlkXVxuICAgIH1cbiAgICBpZiAodGhpcy5fZW1vamlzW2Vtb2ppSWRdKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG5hdGl2ZUVtb2ppKHVuaWNvZGVFbW9qaSkge1xuICAgIGlmICh0aGlzLl9uYXRpdmVFbW9qaXMuaGFzT3duUHJvcGVydHkodW5pY29kZUVtb2ppKSkge1xuICAgICAgcmV0dXJuIHRoaXMuX25hdGl2ZUVtb2ppc1t1bmljb2RlRW1vamldXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBzZWFyY2godmFsdWUsIG1heFJlc3VsdHMpIHtcbiAgICBtYXhSZXN1bHRzIHx8IChtYXhSZXN1bHRzID0gNzUpXG4gICAgaWYgKCF2YWx1ZS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PSAnLScgfHwgdmFsdWUgPT0gJy0xJykge1xuICAgICAgcmV0dXJuIFt0aGlzLmVtb2ppKCctMScpXVxuICAgIH1cblxuICAgIGxldCB2YWx1ZXMgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpLnNwbGl0KC9bXFxzfCx8XFwtfF9dKy8pXG4gICAgbGV0IGFsbFJlc3VsdHMgPSBbXVxuXG4gICAgaWYgKHZhbHVlcy5sZW5ndGggPiAyKSB7XG4gICAgICB2YWx1ZXMgPSBbdmFsdWVzWzBdLCB2YWx1ZXNbMV1dXG4gICAgfVxuXG4gICAgYWxsUmVzdWx0cyA9IHZhbHVlc1xuICAgICAgLm1hcCgodmFsdWUpID0+IHtcbiAgICAgICAgLy8gU3RhcnQgc2VhcmNoaW4gaW4gdGhlIGdsb2JhbCBsaXN0IG9mIGVtb2ppc1xuICAgICAgICBsZXQgZW1vamlzID0gdGhpcy5fZW1vamlzXG4gICAgICAgIGxldCBjdXJyZW50SW5kZXggPSB0aGlzLl9zZWFyY2hJbmRleFxuICAgICAgICBsZXQgbGVuZ3RoID0gMFxuXG4gICAgICAgIGZvciAobGV0IGNoYXJJbmRleCA9IDA7IGNoYXJJbmRleCA8IHZhbHVlLmxlbmd0aDsgY2hhckluZGV4KyspIHtcbiAgICAgICAgICBjb25zdCBjaGFyID0gdmFsdWVbY2hhckluZGV4XVxuICAgICAgICAgIGxlbmd0aCsrXG5cbiAgICAgICAgICBjdXJyZW50SW5kZXhbY2hhcl0gfHwgKGN1cnJlbnRJbmRleFtjaGFyXSA9IHt9KVxuICAgICAgICAgIGN1cnJlbnRJbmRleCA9IGN1cnJlbnRJbmRleFtjaGFyXVxuXG4gICAgICAgICAgaWYgKCFjdXJyZW50SW5kZXgucmVzdWx0cykge1xuICAgICAgICAgICAgbGV0IHNjb3JlcyA9IHt9XG4gICAgICAgICAgICBjdXJyZW50SW5kZXgucmVzdWx0cyA9IFtdXG4gICAgICAgICAgICBjdXJyZW50SW5kZXguZW1vamlzID0ge31cblxuICAgICAgICAgICAgZm9yIChsZXQgZW1vamlJZCBpbiBlbW9qaXMpIHtcbiAgICAgICAgICAgICAgbGV0IGVtb2ppID0gZW1vamlzW2Vtb2ppSWRdXG4gICAgICAgICAgICAgIC8vIHNlYXJjaCBpcyBhIGNvbW1hLXNlcGFyYXRlZCBzdHJpbmcgd2l0aCB3b3JkcywgcmVsYXRlZFxuICAgICAgICAgICAgICAvLyB0byB0aGUgZW1vamksIGZvciBleGFtcGxlOlxuICAgICAgICAgICAgICAvLyBzZWFyY2g6IFwic21pbGV5LHNtaWxpbmcsZmFjZSxqb3ksaGFoYSw6ZCw6KSxzbWlsZSxmdW5ueSw9KSw9LSlcIixcbiAgICAgICAgICAgICAgbGV0IHNlYXJjaCA9IGVtb2ppLl9kYXRhLnNlYXJjaFxuICAgICAgICAgICAgICBsZXQgc3ViID0gdmFsdWUuc3Vic3RyKDAsIGxlbmd0aClcbiAgICAgICAgICAgICAgbGV0IHN1YkluZGV4ID0gc2VhcmNoLmluZGV4T2Yoc3ViKVxuICAgICAgICAgICAgICBpZiAoc3ViSW5kZXggIT0gLTEpIHtcbiAgICAgICAgICAgICAgICBsZXQgc2NvcmUgPSBzdWJJbmRleCArIDFcbiAgICAgICAgICAgICAgICBpZiAoc3ViID09IGVtb2ppSWQpIHNjb3JlID0gMFxuXG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4LnJlc3VsdHMucHVzaChlbW9qaSlcbiAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXguZW1vamlzW2Vtb2ppSWRdID0gZW1vamlcblxuICAgICAgICAgICAgICAgIHNjb3Jlc1tlbW9qaUlkXSA9IHNjb3JlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnRJbmRleC5yZXN1bHRzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgdmFyIGFTY29yZSA9IHNjb3Jlc1thLmlkXSxcbiAgICAgICAgICAgICAgICBiU2NvcmUgPSBzY29yZXNbYi5pZF1cbiAgICAgICAgICAgICAgcmV0dXJuIGFTY29yZSAtIGJTY29yZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBjb250aW51ZSBzZWFyY2ggaW4gdGhlIHJlZHVjZWQgc2V0IG9mIGVtb2ppc1xuICAgICAgICAgIGVtb2ppcyA9IGN1cnJlbnRJbmRleC5lbW9qaXNcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3VycmVudEluZGV4LnJlc3VsdHNcbiAgICAgICAgLy8gVGhlIFwiZmlsdGVyXCIgY2FsbCByZW1vdmVzIHVuZGVmaW5lZCB2YWx1ZXMgZnJvbSBhbGxSZXN1bHRzXG4gICAgICAgIC8vIGFycmF5LCBmb3IgZXhhbXBsZSwgaWYgd2UgaGF2ZSBcInRlc3QgXCIgKHdpdGggdHJhaWxpbmcgc3BhY2UpLFxuICAgICAgICAvLyB3ZSB3aWxsIGdldCBcIltBcnJheSwgdW5kZWZpbmVkXVwiIGZvciBhbGxSZXN1bHRzIGFuZCBhZnRlclxuICAgICAgICAvLyB0aGUgXCJmaWx0ZXJcIiBjYWxsIGl0IHdpbGwgdHVybiBpbnRvIFwiW0FycmF5XVwiXG4gICAgICB9KVxuICAgICAgLmZpbHRlcigoYSkgPT4gYSlcblxuICAgIHZhciByZXN1bHRzID0gbnVsbFxuICAgIGlmIChhbGxSZXN1bHRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHJlc3VsdHMgPSBpbnRlcnNlY3QuYXBwbHkobnVsbCwgYWxsUmVzdWx0cylcbiAgICB9IGVsc2UgaWYgKGFsbFJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICByZXN1bHRzID0gYWxsUmVzdWx0c1swXVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRzID0gW11cbiAgICB9XG4gICAgaWYgKHJlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGggPiBtYXhSZXN1bHRzKSB7XG4gICAgICByZXN1bHRzID0gcmVzdWx0cy5zbGljZSgwLCBtYXhSZXN1bHRzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0c1xuICB9XG5cbiAgYWRkQ3VzdG9tRW1vamkoY3VzdG9tRW1vamkpIHtcbiAgICBsZXQgZW1vamlEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgY3VzdG9tRW1vamksIHtcbiAgICAgIGlkOiBjdXN0b21FbW9qaS5zaG9ydF9uYW1lc1swXSxcbiAgICAgIGN1c3RvbTogdHJ1ZSxcbiAgICB9KVxuICAgIGlmICghZW1vamlEYXRhLnNlYXJjaCkge1xuICAgICAgZW1vamlEYXRhLnNlYXJjaCA9IGJ1aWxkU2VhcmNoKGVtb2ppRGF0YSlcbiAgICB9XG4gICAgbGV0IGVtb2ppID0gbmV3IEVtb2ppRGF0YShlbW9qaURhdGEpXG4gICAgdGhpcy5fZW1vamlzW2Vtb2ppLmlkXSA9IGVtb2ppXG4gICAgdGhpcy5fY3VzdG9tQ2F0ZWdvcnkuZW1vamlzLnB1c2goZW1vamkpXG4gICAgcmV0dXJuIGVtb2ppXG4gIH1cblxuICBhZGRFbW9qaShlbW9qaUlkKSB7XG4gICAgLy8gV2UgZXhwZWN0IHRoZSBjb3JyZWN0IGVtb2ppIGlkIHRoYXQgaXMgcHJlc2VudCBpbiB0aGUgZW1vamlzIGRhdGEuXG4gICAgbGV0IGRhdGEgPSB0aGlzLl9kYXRhLmVtb2ppc1tlbW9qaUlkXVxuXG4gICAgaWYgKCF0aGlzLmlzRW1vamlOZWVkZWQoZGF0YSkpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGxldCBlbW9qaSA9IG5ldyBFbW9qaURhdGEoZGF0YSlcbiAgICB0aGlzLl9lbW9qaXNbZW1vamlJZF0gPSBlbW9qaVxuICAgIGlmIChlbW9qaS5uYXRpdmUpIHtcbiAgICAgIHRoaXMuX25hdGl2ZUVtb2ppc1tlbW9qaS5uYXRpdmVdID0gZW1vamlcbiAgICB9XG4gICAgaWYgKGVtb2ppLl9za2lucykge1xuICAgICAgZm9yIChsZXQgaWR4IGluIGVtb2ppLl9za2lucykge1xuICAgICAgICBsZXQgc2tpbiA9IGVtb2ppLl9za2luc1tpZHhdXG4gICAgICAgIGlmIChza2luLm5hdGl2ZSkge1xuICAgICAgICAgIHRoaXMuX25hdGl2ZUVtb2ppc1tza2luLm5hdGl2ZV0gPSBza2luXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZW1vamkuZW1vdGljb25zKSB7XG4gICAgICBlbW9qaS5lbW90aWNvbnMuZm9yRWFjaCgoZW1vdGljb24pID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2Vtb3RpY29uc1tlbW90aWNvbl0pIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9lbW90aWNvbnNbZW1vdGljb25dID0gZW1vamlJZFxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIGVtb2ppXG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgd2UgbmVlZCB0byBpbmNsdWRlIGdpdmVuIGNhdGVnb3J5LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2F0ZWdvcnlfaWQgLSBUaGUgY2F0ZWdvcnkgaWQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gV2hldGhlciB0byBpbmNsdWRlIHRoZSBlbW9qaS5cbiAgICovXG4gIGlzQ2F0ZWdvcnlOZWVkZWQoY2F0ZWdvcnlfaWQpIHtcbiAgICBsZXQgaXNJbmNsdWRlZCA9XG4gICAgICB0aGlzLl9pbmNsdWRlICYmIHRoaXMuX2luY2x1ZGUubGVuZ3RoXG4gICAgICAgID8gdGhpcy5faW5jbHVkZS5pbmRleE9mKGNhdGVnb3J5X2lkKSA+IC0xXG4gICAgICAgIDogdHJ1ZVxuICAgIGxldCBpc0V4Y2x1ZGVkID1cbiAgICAgIHRoaXMuX2V4Y2x1ZGUgJiYgdGhpcy5fZXhjbHVkZS5sZW5ndGhcbiAgICAgICAgPyB0aGlzLl9leGNsdWRlLmluZGV4T2YoY2F0ZWdvcnlfaWQpID4gLTFcbiAgICAgICAgOiBmYWxzZVxuICAgIGlmICghaXNJbmNsdWRlZCB8fCBpc0V4Y2x1ZGVkKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB3ZSBuZWVkIHRvIGluY2x1ZGUgZ2l2ZW4gZW1vamkuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBlbW9qaSAtIFRoZSByYXcgZW1vamkgb2JqZWN0LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSAtIFdoZXRoZXIgdG8gaW5jbHVkZSB0aGUgZW1vamkuXG4gICAqL1xuICBpc0Vtb2ppTmVlZGVkKGVtb2ppKSB7XG4gICAgaWYgKHRoaXMuX2Vtb2ppc0ZpbHRlcikge1xuICAgICAgcmV0dXJuIHRoaXMuX2Vtb2ppc0ZpbHRlcihlbW9qaSlcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRW1vamlEYXRhIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMuX2RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhKVxuICAgIHRoaXMuX3NraW5zID0gbnVsbFxuICAgIGlmICh0aGlzLl9kYXRhLnNraW5fdmFyaWF0aW9ucykge1xuICAgICAgdGhpcy5fc2tpbnMgPSBbXVxuICAgICAgZm9yICh2YXIgc2tpbklkeCBpbiBTS0lOUykge1xuICAgICAgICBsZXQgc2tpbktleSA9IFNLSU5TW3NraW5JZHhdXG4gICAgICAgIGxldCB2YXJpYXRpb25EYXRhID0gdGhpcy5fZGF0YS5za2luX3ZhcmlhdGlvbnNbc2tpbktleV1cbiAgICAgICAgbGV0IHNraW5EYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSlcbiAgICAgICAgZm9yIChsZXQgayBpbiB2YXJpYXRpb25EYXRhKSB7XG4gICAgICAgICAgc2tpbkRhdGFba10gPSB2YXJpYXRpb25EYXRhW2tdXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHNraW5EYXRhLnNraW5fdmFyaWF0aW9uc1xuICAgICAgICBza2luRGF0YVsnc2tpbl90b25lJ10gPSBwYXJzZUludChza2luSWR4KSArIDFcbiAgICAgICAgdGhpcy5fc2tpbnMucHVzaChuZXcgRW1vamlEYXRhKHNraW5EYXRhKSlcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fc2FuaXRpemVkID0gc2FuaXRpemUodGhpcy5fZGF0YSlcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fc2FuaXRpemVkKSB7XG4gICAgICB0aGlzW2tleV0gPSB0aGlzLl9zYW5pdGl6ZWRba2V5XVxuICAgIH1cbiAgICB0aGlzLnNob3J0X25hbWVzID0gdGhpcy5fZGF0YS5zaG9ydF9uYW1lc1xuICAgIHRoaXMuc2hvcnRfbmFtZSA9IHRoaXMuX2RhdGEuc2hvcnRfbmFtZXNbMF1cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpXG4gIH1cblxuICBnZXRTa2luKHNraW5JZHgpIHtcbiAgICBpZiAoc2tpbklkeCAmJiBza2luSWR4ICE9ICduYXRpdmUnICYmIHRoaXMuX3NraW5zKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2tpbnNbc2tpbklkeCAtIDFdXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICBsZXQgbXVsdGlwbHkgPSAxMDAgLyBTSEVFVF9DT0xVTU5TLFxuICAgICAgeCA9IE1hdGgucm91bmQobXVsdGlwbHkgKiB0aGlzLl9kYXRhLnNoZWV0X3ggKiAxMDApIC8gMTAwLFxuICAgICAgeSA9IE1hdGgucm91bmQobXVsdGlwbHkgKiB0aGlzLl9kYXRhLnNoZWV0X3kgKiAxMDApIC8gMTAwXG4gICAgcmV0dXJuIGAke3h9JSAke3l9JWBcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRW1vamlWaWV3IHtcbiAgLyoqXG4gICAqIGVtb2ppIC0gRW1vamkgdG8gZGlzcGxheVxuICAgKiBzZXQgLSBzdHJpbmcsIGVtb2ppIHNldCBuYW1lXG4gICAqIG5hdGl2ZSAtIGJvb2xlYW4sIHdoZXRoZXIgdG8gcmVuZGVyIG5hdGl2ZSBlbW9qaVxuICAgKiBmYWxsYmFjayAtIGZhbGxiYWNrIGZ1bmN0aW9uIHRvIHJlbmRlciBtaXNzaW5nIGVtb2ppLCBvcHRpb25hbFxuICAgKiBlbW9qaVRvb2x0aXAgLSB3ZXRoZXIgd2UgbmVlZCB0byBzaG93IHRoZSBlbW9qaSB0b29sdGlwLCBvcHRpb25hbFxuICAgKiBlbW9qaVNpemUgLSBlbW9qaSBzaXplIGluIHBpeGVscywgb3B0aW9uYWxcbiAgICovXG4gIGNvbnN0cnVjdG9yKGVtb2ppLCBza2luLCBzZXQsIG5hdGl2ZSwgZmFsbGJhY2ssIGVtb2ppVG9vbHRpcCwgZW1vamlTaXplKSB7XG4gICAgdGhpcy5fZW1vamkgPSBlbW9qaVxuICAgIHRoaXMuX25hdGl2ZSA9IG5hdGl2ZVxuICAgIHRoaXMuX3NraW4gPSBza2luXG4gICAgdGhpcy5fc2V0ID0gc2V0XG4gICAgdGhpcy5fZmFsbGJhY2sgPSBmYWxsYmFja1xuXG4gICAgdGhpcy5jYW5SZW5kZXIgPSB0aGlzLl9jYW5SZW5kZXIoKVxuICAgIHRoaXMuY3NzQ2xhc3MgPSB0aGlzLl9jc3NDbGFzcygpXG4gICAgdGhpcy5jc3NTdHlsZSA9IHRoaXMuX2Nzc1N0eWxlKGVtb2ppU2l6ZSlcbiAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLl9jb250ZW50KClcbiAgICB0aGlzLnRpdGxlID0gZW1vamlUb29sdGlwID09PSB0cnVlID8gZW1vamkuc2hvcnRfbmFtZSA6IG51bGxcblxuICAgIE9iamVjdC5mcmVlemUodGhpcylcbiAgfVxuXG4gIGdldEVtb2ppKCkge1xuICAgIHJldHVybiB0aGlzLl9lbW9qaS5nZXRTa2luKHRoaXMuX3NraW4pXG4gIH1cblxuICBfY2FuUmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLl9pc0N1c3RvbSgpIHx8IHRoaXMuX2lzTmF0aXZlKCkgfHwgdGhpcy5faGFzRW1vamkoKSB8fCB0aGlzLl9mYWxsYmFja1xuICAgIClcbiAgfVxuXG4gIF9jc3NDbGFzcygpIHtcbiAgICByZXR1cm4gWydlbW9qaS1zZXQtJyArIHRoaXMuX3NldCwgJ2Vtb2ppLXR5cGUtJyArIHRoaXMuX2Vtb2ppVHlwZSgpXVxuICB9XG5cbiAgX2Nzc1N0eWxlKGVtb2ppU2l6ZSkge1xuICAgIGxldCBjc3NTdHlsZSA9IHt9XG4gICAgaWYgKHRoaXMuX2lzQ3VzdG9tKCkpIHtcbiAgICAgIGNzc1N0eWxlID0ge1xuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIHRoaXMuZ2V0RW1vamkoKS5fZGF0YS5pbWFnZVVybCArICcpJyxcbiAgICAgICAgYmFja2dyb3VuZFNpemU6ICcxMDAlJyxcbiAgICAgICAgd2lkdGg6IGVtb2ppU2l6ZSArICdweCcsXG4gICAgICAgIGhlaWdodDogZW1vamlTaXplICsgJ3B4JyxcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuX2hhc0Vtb2ppKCkgJiYgIXRoaXMuX2lzTmF0aXZlKCkpIHtcbiAgICAgIGNzc1N0eWxlID0ge1xuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IHRoaXMuZ2V0RW1vamkoKS5nZXRQb3NpdGlvbigpLFxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW1vamlTaXplKSB7XG4gICAgICBpZiAodGhpcy5faXNOYXRpdmUoKSkge1xuICAgICAgICAvLyBTZXQgZm9udC1zaXplIGZvciBuYXRpdmUgZW1vamkuXG4gICAgICAgIGNzc1N0eWxlID0gT2JqZWN0LmFzc2lnbihjc3NTdHlsZSwge1xuICAgICAgICAgIC8vIGZvbnQtc2l6ZSBpcyB1c2VkIGZvciBuYXRpdmUgZW1vamkgd2hpY2ggd2UgbmVlZFxuICAgICAgICAgIC8vIHRvIHNjYWxlIHdpdGggMC44IGZhY3RvciB0byBoYXZlIHRoZW0gbG9vayBhcHByb3hpbWF0ZWx5XG4gICAgICAgICAgLy8gdGhlIHNhbWUgc2l6ZSBhcyBpbWFnZS1iYXNlZCBlbW9qbC5cbiAgICAgICAgICBmb250U2l6ZTogTWF0aC5yb3VuZChlbW9qaVNpemUgKiAwLjggKiAxMCkgLyAxMCArICdweCcsXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTZXQgd2lkdGgvaGVpZ2h0IGZvciBpbWFnZSBlbW9qaS5cbiAgICAgICAgY3NzU3R5bGUgPSBPYmplY3QuYXNzaWduKGNzc1N0eWxlLCB7XG4gICAgICAgICAgd2lkdGg6IGVtb2ppU2l6ZSArICdweCcsXG4gICAgICAgICAgaGVpZ2h0OiBlbW9qaVNpemUgKyAncHgnLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY3NzU3R5bGVcbiAgfVxuXG4gIF9jb250ZW50KCkge1xuICAgIGlmICh0aGlzLl9pc0N1c3RvbSgpKSB7XG4gICAgICByZXR1cm4gJydcbiAgICB9XG4gICAgaWYgKHRoaXMuX2lzTmF0aXZlKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEVtb2ppKCkubmF0aXZlXG4gICAgfVxuICAgIGlmICh0aGlzLl9oYXNFbW9qaSgpKSB7XG4gICAgICByZXR1cm4gJydcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2ZhbGxiYWNrID8gdGhpcy5fZmFsbGJhY2sodGhpcy5nZXRFbW9qaSgpKSA6IG51bGxcbiAgfVxuXG4gIF9pc05hdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmF0aXZlXG4gIH1cblxuICBfaXNDdXN0b20oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RW1vamkoKS5jdXN0b21cbiAgfVxuXG4gIF9oYXNFbW9qaSgpIHtcbiAgICBpZiAoIXRoaXMuZ2V0RW1vamkoKS5fZGF0YSkge1xuICAgICAgLy8gUmV0dXJuIGZhbHNlIGlmIHdlIGhhdmUgbm8gZGF0YS5cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBjb25zdCBoYXNJbWFnZSA9IHRoaXMuZ2V0RW1vamkoKS5fZGF0YVsnaGFzX2ltZ18nICsgdGhpcy5fc2V0XVxuICAgIGlmIChoYXNJbWFnZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBJZiB0aGVyZSBpcyBubyBoYXNfaW1nX3h4eCBpbiB0aGUgZGF0YSwgd2UgYXJlIHdvcmtpbmcgd2l0aFxuICAgICAgLy8gc3BlY2lmaWMgZGF0YSBmaWxlLCBsaWtlIGZhY2Vib29rLmpzb24sIHNvIHdlIGFzc3VtZSBhbGxcbiAgICAgIC8vIGVtb2ppcyBhcmUgYXZhaWxhYmxlICh0aGUgOnNldCBzZXR0aW5nIGZvciBwaWNrZXIgc2hvdWxkXG4gICAgICAvLyBtYXRjaCB0aGUgZGF0YSBmaWxlKS5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIC8vIE90aGVyd2lzZSwgd2UgYXJlIHVzaW5nIGFsbC5qc29uIGFuZCBjYW4gc3dpdGNoIGJldHdlZW4gZGlmZmVyZW50XG4gICAgLy8gc2V0cyAtIGluIHRoaXMgY2FzZSB0aGUgYGhhc19pbWdfe3NldF9uYW1lfWAgaXMgYSBib29sZWFuIHRoYXRcbiAgICAvLyBpbmRpY2F0ZXMgaWYgdGhlcmUgaXMgc3VjaCBpbWFnZSBvciBub3QgZm9yIGEgZ2l2ZW4gc2V0LlxuICAgIHJldHVybiBoYXNJbWFnZVxuICB9XG5cbiAgX2Vtb2ppVHlwZSgpIHtcbiAgICBpZiAodGhpcy5faXNDdXN0b20oKSkge1xuICAgICAgcmV0dXJuICdjdXN0b20nXG4gICAgfVxuICAgIGlmICh0aGlzLl9pc05hdGl2ZSgpKSB7XG4gICAgICByZXR1cm4gJ25hdGl2ZSdcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hhc0Vtb2ppKCkpIHtcbiAgICAgIHJldHVybiAnaW1hZ2UnXG4gICAgfVxuICAgIHJldHVybiAnZmFsbGJhY2snXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplKGVtb2ppKSB7XG4gIHZhciB7XG4gICAgICBuYW1lLFxuICAgICAgc2hvcnRfbmFtZXMsXG4gICAgICBza2luX3RvbmUsXG4gICAgICBza2luX3ZhcmlhdGlvbnMsXG4gICAgICBlbW90aWNvbnMsXG4gICAgICB1bmlmaWVkLFxuICAgICAgY3VzdG9tLFxuICAgICAgaW1hZ2VVcmwsXG4gICAgfSA9IGVtb2ppLFxuICAgIGlkID0gZW1vamkuaWQgfHwgc2hvcnRfbmFtZXNbMF0sXG4gICAgY29sb25zID0gYDoke2lkfTpgXG5cbiAgaWYgKGN1c3RvbSkge1xuICAgIHJldHVybiB7XG4gICAgICBpZCxcbiAgICAgIG5hbWUsXG4gICAgICBjb2xvbnMsXG4gICAgICBlbW90aWNvbnMsXG4gICAgICBjdXN0b20sXG4gICAgICBpbWFnZVVybCxcbiAgICB9XG4gIH1cblxuICBpZiAoc2tpbl90b25lKSB7XG4gICAgY29sb25zICs9IGA6c2tpbi10b25lLSR7c2tpbl90b25lfTpgXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGlkLFxuICAgIG5hbWUsXG4gICAgY29sb25zLFxuICAgIGVtb3RpY29ucyxcbiAgICB1bmlmaWVkOiB1bmlmaWVkLnRvTG93ZXJDYXNlKCksXG4gICAgc2tpbjogc2tpbl90b25lIHx8IChza2luX3ZhcmlhdGlvbnMgPyAxIDogbnVsbCksXG4gICAgbmF0aXZlOiB1bmlmaWVkVG9OYXRpdmUodW5pZmllZCksXG4gIH1cbn1cbiIsImltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJ1xuXG5jb25zdCBERUZBVUxUUyA9IFtcbiAgJysxJyxcbiAgJ2dyaW5uaW5nJyxcbiAgJ2tpc3NpbmdfaGVhcnQnLFxuICAnaGVhcnRfZXllcycsXG4gICdsYXVnaGluZycsXG4gICdzdHVja19vdXRfdG9uZ3VlX3dpbmtpbmdfZXllJyxcbiAgJ3N3ZWF0X3NtaWxlJyxcbiAgJ2pveScsXG4gICdzY3JlYW0nLFxuICAnZGlzYXBwb2ludGVkJyxcbiAgJ3VuYW11c2VkJyxcbiAgJ3dlYXJ5JyxcbiAgJ3NvYicsXG4gICdzdW5nbGFzc2VzJyxcbiAgJ2hlYXJ0JyxcbiAgJ3Bvb3AnLFxuXVxuXG5sZXQgZnJlcXVlbnRseSwgaW5pdGlhbGl6ZWRcbmxldCBkZWZhdWx0cyA9IHt9XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGluaXRpYWxpemVkID0gdHJ1ZVxuICBmcmVxdWVudGx5ID0gc3RvcmUuZ2V0KCdmcmVxdWVudGx5Jylcbn1cblxuZnVuY3Rpb24gYWRkKGVtb2ppKSB7XG4gIGlmICghaW5pdGlhbGl6ZWQpIGluaXQoKVxuICB2YXIgeyBpZCB9ID0gZW1vamlcblxuICBmcmVxdWVudGx5IHx8IChmcmVxdWVudGx5ID0gZGVmYXVsdHMpXG4gIGZyZXF1ZW50bHlbaWRdIHx8IChmcmVxdWVudGx5W2lkXSA9IDApXG4gIGZyZXF1ZW50bHlbaWRdICs9IDFcblxuICBzdG9yZS5zZXQoJ2xhc3QnLCBpZClcbiAgc3RvcmUuc2V0KCdmcmVxdWVudGx5JywgZnJlcXVlbnRseSlcbn1cblxuZnVuY3Rpb24gZ2V0KG1heE51bWJlcikge1xuICBpZiAoIWluaXRpYWxpemVkKSBpbml0KClcbiAgaWYgKCFmcmVxdWVudGx5KSB7XG4gICAgZGVmYXVsdHMgPSB7fVxuXG4gICAgY29uc3QgcmVzdWx0ID0gW11cblxuICAgIGxldCBkZWZhdWx0TGVuZ3RoID0gTWF0aC5taW4obWF4TnVtYmVyLCBERUZBVUxUUy5sZW5ndGgpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWZhdWx0TGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlZmF1bHRzW0RFRkFVTFRTW2ldXSA9IGRlZmF1bHRMZW5ndGggLSBpXG4gICAgICByZXN1bHQucHVzaChERUZBVUxUU1tpXSlcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBjb25zdCBxdWFudGl0eSA9IG1heE51bWJlclxuICBjb25zdCBmcmVxdWVudGx5S2V5cyA9IFtdXG5cbiAgZm9yIChsZXQga2V5IGluIGZyZXF1ZW50bHkpIHtcbiAgICBpZiAoZnJlcXVlbnRseS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBmcmVxdWVudGx5S2V5cy5wdXNoKGtleSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBzb3J0ZWQgPSBmcmVxdWVudGx5S2V5c1xuICAgIC5zb3J0KChhLCBiKSA9PiBmcmVxdWVudGx5W2FdIC0gZnJlcXVlbnRseVtiXSlcbiAgICAucmV2ZXJzZSgpXG4gIGNvbnN0IHNsaWNlZCA9IHNvcnRlZC5zbGljZSgwLCBxdWFudGl0eSlcblxuICBjb25zdCBsYXN0ID0gc3RvcmUuZ2V0KCdsYXN0JylcblxuICBpZiAobGFzdCAmJiBzbGljZWQuaW5kZXhPZihsYXN0KSA9PSAtMSkge1xuICAgIHNsaWNlZC5wb3AoKVxuICAgIHNsaWNlZC5wdXNoKGxhc3QpXG4gIH1cblxuICByZXR1cm4gc2xpY2VkXG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgYWRkLCBnZXQgfVxuIiwiaW1wb3J0IHN0cmluZ0Zyb21Db2RlUG9pbnQgZnJvbSAnLi4vcG9seWZpbGxzL3N0cmluZ0Zyb21Db2RlUG9pbnQnXG5cbmZ1bmN0aW9uIHVuaWZpZWRUb05hdGl2ZSh1bmlmaWVkKSB7XG4gIHZhciB1bmljb2RlcyA9IHVuaWZpZWQuc3BsaXQoJy0nKSxcbiAgICBjb2RlUG9pbnRzID0gdW5pY29kZXMubWFwKCh1KSA9PiBgMHgke3V9YClcblxuICByZXR1cm4gc3RyaW5nRnJvbUNvZGVQb2ludC5hcHBseShudWxsLCBjb2RlUG9pbnRzKVxufVxuXG5mdW5jdGlvbiB1bmlxKGFycikge1xuICByZXR1cm4gYXJyLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiB7XG4gICAgaWYgKGFjYy5pbmRleE9mKGl0ZW0pID09PSAtMSkge1xuICAgICAgYWNjLnB1c2goaXRlbSlcbiAgICB9XG4gICAgcmV0dXJuIGFjY1xuICB9LCBbXSlcbn1cblxuZnVuY3Rpb24gaW50ZXJzZWN0KGEsIGIpIHtcbiAgY29uc3QgdW5pcUEgPSB1bmlxKGEpXG4gIGNvbnN0IHVuaXFCID0gdW5pcShiKVxuXG4gIHJldHVybiB1bmlxQS5maWx0ZXIoKGl0ZW0pID0+IHVuaXFCLmluZGV4T2YoaXRlbSkgPj0gMClcbn1cblxuZnVuY3Rpb24gZGVlcE1lcmdlKGEsIGIpIHtcbiAgdmFyIG8gPSB7fVxuXG4gIGZvciAobGV0IGtleSBpbiBhKSB7XG4gICAgbGV0IG9yaWdpbmFsVmFsdWUgPSBhW2tleV0sXG4gICAgICB2YWx1ZSA9IG9yaWdpbmFsVmFsdWVcblxuICAgIGlmIChiLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHZhbHVlID0gYltrZXldXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhbHVlID0gZGVlcE1lcmdlKG9yaWdpbmFsVmFsdWUsIHZhbHVlKVxuICAgIH1cblxuICAgIG9ba2V5XSA9IHZhbHVlXG4gIH1cblxuICByZXR1cm4gb1xufVxuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vc29uaWNkb2UvbWVhc3VyZS1zY3JvbGxiYXJcbmZ1bmN0aW9uIG1lYXN1cmVTY3JvbGxiYXIoKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT0gJ3VuZGVmaW5lZCcpIHJldHVybiAwXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgZGl2LnN0eWxlLndpZHRoID0gJzEwMHB4J1xuICBkaXYuc3R5bGUuaGVpZ2h0ID0gJzEwMHB4J1xuICBkaXYuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJ1xuICBkaXYuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG4gIGRpdi5zdHlsZS50b3AgPSAnLTk5OTlweCdcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdilcbiAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSBkaXYub2Zmc2V0V2lkdGggLSBkaXYuY2xpZW50V2lkdGhcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkaXYpXG5cbiAgcmV0dXJuIHNjcm9sbGJhcldpZHRoXG59XG5cbmV4cG9ydCB7IHVuaXEsIGludGVyc2VjdCwgZGVlcE1lcmdlLCB1bmlmaWVkVG9OYXRpdmUsIG1lYXN1cmVTY3JvbGxiYXIgfVxuIiwiY29uc3QgRW1vamlQcm9wcyA9IHtcbiAgbmF0aXZlOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgfSxcbiAgdG9vbHRpcDoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gIH0sXG4gIGZhbGxiYWNrOiB7XG4gICAgdHlwZTogRnVuY3Rpb24sXG4gIH0sXG4gIHNraW46IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogMSxcbiAgfSxcbiAgc2V0OiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICdhcHBsZScsXG4gIH0sXG4gIGVtb2ppOiB7XG4gICAgdHlwZTogW1N0cmluZywgT2JqZWN0XSxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgfSxcbiAgc2l6ZToge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiBudWxsLFxuICB9LFxufVxuXG5jb25zdCBQaWNrZXJQcm9wcyA9IHtcbiAgcGVyTGluZToge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiA5LFxuICB9LFxuICBtYXhTZWFyY2hSZXN1bHRzOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDc1LFxuICB9LFxuICBlbW9qaVNpemU6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogMjQsXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICdFbW9qaSBNYXJ04oSiJyxcbiAgfSxcbiAgZW1vamk6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJ2RlcGFydG1lbnRfc3RvcmUnLFxuICB9LFxuICBjb2xvcjoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnI2FlNjVjNScsXG4gIH0sXG4gIHNldDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnYXBwbGUnLFxuICB9LFxuICBza2luOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IG51bGwsXG4gIH0sXG4gIGRlZmF1bHRTa2luOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDEsXG4gIH0sXG4gIG5hdGl2ZToge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gIH0sXG4gIGVtb2ppVG9vbHRpcDoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gIH0sXG4gIGF1dG9Gb2N1czoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gIH0sXG4gIGkxOG46IHtcbiAgICB0eXBlOiBPYmplY3QsXG4gICAgZGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH0sXG4gIH0sXG4gIHNob3dQcmV2aWV3OiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiB0cnVlLFxuICB9LFxuICBzaG93U2VhcmNoOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiB0cnVlLFxuICB9LFxuICBzaG93Q2F0ZWdvcmllczoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogdHJ1ZSxcbiAgfSxcbiAgc2hvd1NraW5Ub25lczoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogdHJ1ZSxcbiAgfSxcbiAgaW5maW5pdGVTY3JvbGw6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IHRydWUsXG4gIH0sXG4gIHBpY2tlclN0eWxlczoge1xuICAgIHR5cGU6IE9iamVjdCxcbiAgICBkZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIHt9XG4gICAgfSxcbiAgfSxcbn1cblxuZXhwb3J0IHsgRW1vamlQcm9wcywgUGlja2VyUHJvcHMgfVxuIiwidmFyIE5BTUVTUEFDRSA9ICdlbW9qaS1tYXJ0J1xuXG5jb25zdCBfSlNPTiA9IEpTT05cblxudmFyIGlzTG9jYWxTdG9yYWdlU3VwcG9ydGVkID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2xvY2FsU3RvcmFnZScgaW4gd2luZG93XG5cbmxldCBnZXR0ZXJcbmxldCBzZXR0ZXJcblxuZnVuY3Rpb24gc2V0SGFuZGxlcnMoaGFuZGxlcnMpIHtcbiAgaGFuZGxlcnMgfHwgKGhhbmRsZXJzID0ge30pXG5cbiAgZ2V0dGVyID0gaGFuZGxlcnMuZ2V0dGVyXG4gIHNldHRlciA9IGhhbmRsZXJzLnNldHRlclxufVxuXG5mdW5jdGlvbiBzZXROYW1lc3BhY2UobmFtZXNwYWNlKSB7XG4gIE5BTUVTUEFDRSA9IG5hbWVzcGFjZVxufVxuXG5mdW5jdGlvbiB1cGRhdGUoc3RhdGUpIHtcbiAgZm9yIChsZXQga2V5IGluIHN0YXRlKSB7XG4gICAgbGV0IHZhbHVlID0gc3RhdGVba2V5XVxuICAgIHNldChrZXksIHZhbHVlKVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG4gIGlmIChzZXR0ZXIpIHtcbiAgICBzZXR0ZXIoa2V5LCB2YWx1ZSlcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWlzTG9jYWxTdG9yYWdlU3VwcG9ydGVkKSByZXR1cm5cbiAgICB0cnkge1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZVtgJHtOQU1FU1BBQ0V9LiR7a2V5fWBdID0gX0pTT04uc3RyaW5naWZ5KHZhbHVlKVxuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0KGtleSkge1xuICBpZiAoZ2V0dGVyKSB7XG4gICAgcmV0dXJuIGdldHRlcihrZXkpXG4gIH0gZWxzZSB7XG4gICAgaWYgKCFpc0xvY2FsU3RvcmFnZVN1cHBvcnRlZCkgcmV0dXJuXG4gICAgdHJ5IHtcbiAgICAgIHZhciB2YWx1ZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2VbYCR7TkFNRVNQQUNFfS4ke2tleX1gXVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UodmFsdWUpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgdXBkYXRlLCBzZXQsIGdldCwgc2V0TmFtZXNwYWNlLCBzZXRIYW5kbGVycyB9XG4iLCIvLyBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuLy8gaHR0cDovL215Lm9wZXJhLmNvbS9lbW9sbGVyL2Jsb2cvMjAxMS8xMi8yMC9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWVyLWFuaW1hdGluZ1xuXG4vLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG5cbi8vIE1JVCBsaWNlbnNlXG5cbnZhciBpc1dpbmRvd0F2YWlsYWJsZSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG5cbmlzV2luZG93QXZhaWxhYmxlICYmXG4gIChmdW5jdGlvbigpIHtcbiAgICB2YXIgbGFzdFRpbWUgPSAwXG4gICAgdmFyIHZlbmRvcnMgPSBbJ21zJywgJ21veicsICd3ZWJraXQnLCAnbyddXG5cbiAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHZlbmRvcnMubGVuZ3RoICYmICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArK3gpIHtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPVxuICAgICAgICB3aW5kb3dbdmVuZG9yc1t4XSArICdSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXVxuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID1cbiAgICAgICAgd2luZG93W3ZlbmRvcnNbeF0gKyAnQ2FuY2VsQW5pbWF0aW9uRnJhbWUnXSB8fFxuICAgICAgICB3aW5kb3dbdmVuZG9yc1t4XSArICdDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXVxuICAgIH1cblxuICAgIGlmICghd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSlcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihjYWxsYmFjaywgZWxlbWVudCkge1xuICAgICAgICB2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgICAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJUaW1lIC0gbGFzdFRpbWUpKVxuICAgICAgICB2YXIgaWQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpXG4gICAgICAgIH0sIHRpbWVUb0NhbGwpXG5cbiAgICAgICAgbGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGxcbiAgICAgICAgcmV0dXJuIGlkXG4gICAgICB9XG5cbiAgICBpZiAoIXdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSlcbiAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChpZClcbiAgICAgIH1cbiAgfSkoKVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3Z1ZV9fOyJdLCJzb3VyY2VSb290IjoiIn0=