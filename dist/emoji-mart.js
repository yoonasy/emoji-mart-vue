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
  const _component_Category = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("Category")
  const _component_DynamicScrollerItem = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("DynamicScrollerItem")
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
      default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(({ item, active, index }) => [
        Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_DynamicScrollerItem, {
          item: item,
          active: active,
          "data-index": index
        }, {
          default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [
            Object(vue__WEBPACK_IMPORTED_MODULE_0__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_Category, {
              i18n: item.mergedI18n,
              id: item.category.id,
              name: item.category.name,
              emojis: item.category.emojis,
              "emoji-props": item.emojiProps
            }, null, 8 /* PROPS */, ["i18n", "id", "name", "emojis", "emoji-props"]), [
              [vue__WEBPACK_IMPORTED_MODULE_0__["vShow"], true]
            ])
          ]),
          _: 2 /* DYNAMIC */
        }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["item", "active", "data-index"])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9FbW9qaU1hcnQvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0Vtb2ppTWFydC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL0Vtb2ppLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9QaWNrZXIudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL1N0YXRpY1BpY2tlci52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvYW5jaG9ycy52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvY2F0ZWdvcnkudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3ByZXZpZXcudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NlYXJjaC52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2tpbnMudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy92dWUzLXZpcnR1YWwtc2Nyb2xsZXIvZGlzdC92dWUzLXZpcnR1YWwtc2Nyb2xsZXIuY3NzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL3Njcm9sbHBhcmVudC9zY3JvbGxwYXJlbnQuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvbGlzdFRvU3R5bGVzLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy92dWUzLXJlc2l6ZS9kaXN0L3Z1ZTMtcmVzaXplLmVzbS5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvdnVlMy12aXJ0dWFsLXNjcm9sbGVyL2Rpc3QvdnVlMy12aXJ0dWFsLXNjcm9sbGVyLmNzcz85ZGM4Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy92dWUzLXZpcnR1YWwtc2Nyb2xsZXIvZGlzdC92dWUzLXZpcnR1YWwtc2Nyb2xsZXIuZXNtLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL0Vtb2ppLnZ1ZT9hZGMwIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL0Vtb2ppLnZ1ZT84Y2MyIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL0Vtb2ppLnZ1ZT85MGFiIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL1BpY2tlci52dWU/MDE4ZCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9QaWNrZXIudnVlPzE5ZDMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvUGlja2VyLnZ1ZT9lMDk0Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL1N0YXRpY1BpY2tlci52dWU/M2IwNyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9TdGF0aWNQaWNrZXIudnVlP2Y2NDMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvU3RhdGljUGlja2VyLnZ1ZT80MjEyIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2FuY2hvcnMudnVlP2FlNmYiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvYW5jaG9ycy52dWU/ZjhmNyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9hbmNob3JzLnZ1ZT9lNmYwIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2NhdGVnb3J5LnZ1ZT9hYjJmIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2NhdGVnb3J5LnZ1ZT9mMzZhIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2NhdGVnb3J5LnZ1ZT80MzNkIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3ByZXZpZXcudnVlPzFiYzIiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvcHJldmlldy52dWU/MjEzMCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9wcmV2aWV3LnZ1ZT9mMmUyIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NlYXJjaC52dWU/MTA4ZiIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9zZWFyY2gudnVlPzJjOTAiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLnZ1ZT9jZmY5Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NraW5zLnZ1ZT81N2IxIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NraW5zLnZ1ZT9iNzE2Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NraW5zLnZ1ZT8xYjU0Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvcG9seWZpbGxzL3N0cmluZ0Zyb21Db2RlUG9pbnQuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3N2Z3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2RhdGEuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2Vtb2ppLWRhdGEuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2ZyZXF1ZW50bHkuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy91dGlscy9zaGFyZWQtcHJvcHMuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL3N0b3JlLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy92ZW5kb3IvcmFmLXBvbHlmaWxsLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC9leHRlcm5hbCB7XCJyb290XCI6XCJWdWVcIixcImNvbW1vbmpzMlwiOlwidnVlXCIsXCJjb21tb25qc1wiOlwidnVlXCIsXCJhbWRcIjpcInZ1ZVwifSJdLCJuYW1lcyI6WyJfU3RyaW5nIiwiU3RyaW5nIiwiZnJvbUNvZGVQb2ludCIsInN0cmluZ0Zyb21Db2RlUG9pbnQiLCJNQVhfU0laRSIsImNvZGVVbml0cyIsImhpZ2hTdXJyb2dhdGUiLCJsb3dTdXJyb2dhdGUiLCJpbmRleCIsImxlbmd0aCIsImFyZ3VtZW50cyIsInJlc3VsdCIsImNvZGVQb2ludCIsIk51bWJlciIsImlzRmluaXRlIiwiTWF0aCIsImZsb29yIiwiUmFuZ2VFcnJvciIsInB1c2giLCJmcm9tQ2hhckNvZGUiLCJhcHBseSIsIlNWR3MiLCJhY3Rpdml0eSIsImN1c3RvbSIsImZsYWdzIiwiZm9vZHMiLCJuYXR1cmUiLCJvYmplY3RzIiwic21pbGV5cyIsInBlb3BsZSIsInBsYWNlcyIsInJlY2VudCIsInN5bWJvbHMiLCJtYXBwaW5nIiwibmFtZSIsInVuaWZpZWQiLCJub25fcXVhbGlmaWVkIiwiaGFzX2ltZ19hcHBsZSIsImhhc19pbWdfZ29vZ2xlIiwiaGFzX2ltZ190d2l0dGVyIiwiaGFzX2ltZ19mYWNlYm9vayIsImtleXdvcmRzIiwic2hlZXQiLCJlbW90aWNvbnMiLCJ0ZXh0Iiwic2hvcnRfbmFtZXMiLCJhZGRlZF9pbiIsImJ1aWxkU2VhcmNoIiwiZW1vamkiLCJzZWFyY2giLCJhZGRUb1NlYXJjaCIsInN0cmluZ3MiLCJzcGxpdCIsIkFycmF5IiwiaXNBcnJheSIsImZvckVhY2giLCJzdHJpbmciLCJzIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwiam9pbiIsImNvbXByZXNzIiwiZmlsdGVyIiwic2hvcnRfbmFtZSIsInNoZWV0X3giLCJzaGVldF95IiwicGFyc2VJbnQiLCJrZXkiLCJ2YWx1ZSIsImRlZXBGcmVlemUiLCJvYmplY3QiLCJwcm9wTmFtZXMiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiZnJlZXplIiwidW5jb21wcmVzcyIsImRhdGEiLCJjb21wcmVzc2VkIiwiaWQiLCJlbW9qaXMiLCJ1bnNoaWZ0IiwidG9GaXhlZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJTSEVFVF9DT0xVTU5TIiwiQ09MT05TX1JFR0VYIiwiU0tJTlMiLCJFbW9qaUluZGV4IiwiZW1vamlzVG9TaG93RmlsdGVyIiwiaW5jbHVkZSIsImV4Y2x1ZGUiLCJyZWNlbnRMZW5ndGgiLCJfZGF0YSIsIl9lbW9qaXNGaWx0ZXIiLCJfaW5jbHVkZSIsIl9leGNsdWRlIiwiX2N1c3RvbSIsIl9yZWNlbnQiLCJmcmVxdWVudGx5IiwiZ2V0IiwiX2Vtb2ppcyIsIl9uYXRpdmVFbW9qaXMiLCJfZW1vdGljb25zIiwiX2NhdGVnb3JpZXMiLCJfcmVjZW50Q2F0ZWdvcnkiLCJfY3VzdG9tQ2F0ZWdvcnkiLCJfc2VhcmNoSW5kZXgiLCJidWlsZEluZGV4IiwiYWxsQ2F0ZWdvcmllcyIsImNhdGVnb3JpZXMiLCJpdGVtIiwiaW5jbHVkZXMiLCJzb3J0IiwiYSIsImIiLCJpbmRleEEiLCJpbmRleEIiLCJjYXRlZ29yeURhdGEiLCJpc0NhdGVnb3J5TmVlZGVkIiwiY2F0ZWdvcnkiLCJlbW9qaUlkIiwiYWRkRW1vamkiLCJjdXN0b21FbW9qaSIsImFkZEN1c3RvbUVtb2ppIiwibWFwIiwiaGFzRW1vamkiLCJza2luIiwibWF0Y2hlcyIsIm1hdGNoIiwiYWxpYXNlcyIsImhhc093blByb3BlcnR5IiwiZW1vamlPYmplY3QiLCJnZXRTa2luIiwiRXJyb3IiLCJrZXlzIiwidW5pY29kZUVtb2ppIiwibWF4UmVzdWx0cyIsInZhbHVlcyIsImFsbFJlc3VsdHMiLCJjdXJyZW50SW5kZXgiLCJjaGFySW5kZXgiLCJjaGFyIiwicmVzdWx0cyIsInNjb3JlcyIsInN1YiIsInN1YnN0ciIsInN1YkluZGV4Iiwic2NvcmUiLCJhU2NvcmUiLCJiU2NvcmUiLCJpbnRlcnNlY3QiLCJzbGljZSIsImVtb2ppRGF0YSIsImFzc2lnbiIsIkVtb2ppRGF0YSIsImlzRW1vamlOZWVkZWQiLCJuYXRpdmUiLCJfc2tpbnMiLCJpZHgiLCJlbW90aWNvbiIsImNhdGVnb3J5X2lkIiwiaXNJbmNsdWRlZCIsImlzRXhjbHVkZWQiLCJza2luX3ZhcmlhdGlvbnMiLCJza2luSWR4Iiwic2tpbktleSIsInZhcmlhdGlvbkRhdGEiLCJza2luRGF0YSIsImsiLCJfc2FuaXRpemVkIiwic2FuaXRpemUiLCJtdWx0aXBseSIsIngiLCJyb3VuZCIsInkiLCJFbW9qaVZpZXciLCJzZXQiLCJmYWxsYmFjayIsImVtb2ppVG9vbHRpcCIsImVtb2ppU2l6ZSIsIl9lbW9qaSIsIl9uYXRpdmUiLCJfc2tpbiIsIl9zZXQiLCJfZmFsbGJhY2siLCJjYW5SZW5kZXIiLCJfY2FuUmVuZGVyIiwiY3NzQ2xhc3MiLCJfY3NzQ2xhc3MiLCJjc3NTdHlsZSIsIl9jc3NTdHlsZSIsImNvbnRlbnQiLCJfY29udGVudCIsInRpdGxlIiwiX2lzQ3VzdG9tIiwiX2lzTmF0aXZlIiwiX2hhc0Vtb2ppIiwiX2Vtb2ppVHlwZSIsImJhY2tncm91bmRJbWFnZSIsImdldEVtb2ppIiwiaW1hZ2VVcmwiLCJiYWNrZ3JvdW5kU2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiZ2V0UG9zaXRpb24iLCJmb250U2l6ZSIsImhhc0ltYWdlIiwidW5kZWZpbmVkIiwic2tpbl90b25lIiwiY29sb25zIiwidW5pZmllZFRvTmF0aXZlIiwiREVGQVVMVFMiLCJpbml0aWFsaXplZCIsImRlZmF1bHRzIiwiaW5pdCIsInN0b3JlIiwiYWRkIiwibWF4TnVtYmVyIiwiZGVmYXVsdExlbmd0aCIsIm1pbiIsImkiLCJxdWFudGl0eSIsImZyZXF1ZW50bHlLZXlzIiwic29ydGVkIiwicmV2ZXJzZSIsInNsaWNlZCIsImxhc3QiLCJwb3AiLCJ1bmljb2RlcyIsImNvZGVQb2ludHMiLCJ1IiwidW5pcSIsImFyciIsInJlZHVjZSIsImFjYyIsInVuaXFBIiwidW5pcUIiLCJkZWVwTWVyZ2UiLCJvIiwib3JpZ2luYWxWYWx1ZSIsIm1lYXN1cmVTY3JvbGxiYXIiLCJkb2N1bWVudCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsIm92ZXJmbG93IiwicG9zaXRpb24iLCJ0b3AiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzY3JvbGxiYXJXaWR0aCIsIm9mZnNldFdpZHRoIiwiY2xpZW50V2lkdGgiLCJyZW1vdmVDaGlsZCIsIkVtb2ppUHJvcHMiLCJ0eXBlIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJ0b29sdGlwIiwiRnVuY3Rpb24iLCJyZXF1aXJlZCIsInNpemUiLCJQaWNrZXJQcm9wcyIsInBlckxpbmUiLCJtYXhTZWFyY2hSZXN1bHRzIiwiY29sb3IiLCJkZWZhdWx0U2tpbiIsImF1dG9Gb2N1cyIsImkxOG4iLCJzaG93UHJldmlldyIsInNob3dTZWFyY2giLCJzaG93Q2F0ZWdvcmllcyIsInNob3dTa2luVG9uZXMiLCJpbmZpbml0ZVNjcm9sbCIsInBpY2tlclN0eWxlcyIsIk5BTUVTUEFDRSIsIl9KU09OIiwiSlNPTiIsImlzTG9jYWxTdG9yYWdlU3VwcG9ydGVkIiwid2luZG93IiwiZ2V0dGVyIiwic2V0dGVyIiwic2V0SGFuZGxlcnMiLCJoYW5kbGVycyIsInNldE5hbWVzcGFjZSIsIm5hbWVzcGFjZSIsInVwZGF0ZSIsInN0YXRlIiwibG9jYWxTdG9yYWdlIiwic3RyaW5naWZ5IiwiZSIsInBhcnNlIiwiaXNXaW5kb3dBdmFpbGFibGUiLCJsYXN0VGltZSIsInZlbmRvcnMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwiZWxlbWVudCIsImN1cnJUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJ0aW1lVG9DYWxsIiwibWF4Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0EsaURBQWlELGdCQUFnQjtBQUNqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQzs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7OztBQ05BO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCOzs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTs7QUFFQSxrQzs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7O0FBRUEsb0M7Ozs7Ozs7Ozs7O0FDSkEsd0JBQXdCLG1CQUFPLENBQUMsdUZBQXFCOztBQUVyRCxzQkFBc0IsbUJBQU8sQ0FBQyxtRkFBbUI7O0FBRWpELHdCQUF3QixtQkFBTyxDQUFDLHVGQUFxQjs7QUFFckQ7QUFDQTtBQUNBOztBQUVBLG9DOzs7Ozs7Ozs7OztBQ1ZBLHdCQUF3QiwyRUFBMkUsb0NBQW9DLG1CQUFtQixHQUFHLEVBQUUsT0FBTyxvQ0FBb0MsOEhBQThILEdBQUcsRUFBRSxzQkFBc0I7O0FBRW5XO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0NBO0FBQ0E7QUFDQTtBQUVlLDBIQUFlLENBQUM7QUFDN0IsTUFBSSxFQUFFLE9BRHVCO0FBRzdCLE9BQUssa0NBQ0EsOERBREE7QUFFSCxRQUFJLEVBQUU7QUFDSixVQUFJLEVBQUUsTUFERjtBQUVKLGNBQVEsRUFBRTtBQUZOO0FBRkgsSUFId0I7QUFXN0IsT0FBSyxFQUFFLENBQUMsWUFBRCxFQUFlLFlBQWYsRUFBNkIsT0FBN0IsQ0FYc0I7QUFhN0IsT0FiNkIsaUJBYXZCLEtBYnVCLFFBYU47QUFBQSxRQUFSLElBQVEsUUFBUixJQUFRO0FBQ3JCLFFBQU0sV0FBVSxHQUFJLG9EQUFRLENBQUM7QUFBQSxhQUFNLE9BQU8sS0FBSyxDQUFDLEtBQWIsSUFBc0IsUUFBdEIsR0FDL0IsS0FBSyxDQUFDLElBQU4sQ0FBVyxTQUFYLENBQXFCLEtBQUssQ0FBQyxLQUEzQixDQUQrQixHQUUvQixLQUFLLENBQUMsS0FGbUI7QUFBQSxLQUFELENBQTVCO0FBSUEsUUFBTSxJQUFHLEdBQUksb0RBQVEsQ0FBQztBQUFBLGFBQU0sSUFBSSwyREFBSixDQUMxQixXQUFXLENBQUMsS0FEYyxFQUUxQixLQUFLLENBQUMsSUFGb0IsRUFHMUIsS0FBSyxDQUFDLEdBSG9CLEVBSTFCLEtBQUssQ0FBQyxNQUpvQixFQUsxQixLQUFLLENBQUMsUUFMb0IsRUFNMUIsS0FBSyxDQUFDLE9BTm9CLEVBTzFCLEtBQUssQ0FBQyxJQVBvQixDQUFOO0FBQUEsS0FBRCxDQUFyQjtBQVVBLFFBQU0sYUFBWSxHQUFJLG9EQUFRLENBQUMsWUFBTTtBQUNuQyxhQUFPLFdBQVcsQ0FBQyxLQUFaLENBQWtCLFVBQXpCO0FBQ0QsS0FGNkIsQ0FBOUI7QUFJQSxRQUFNLEtBQUksR0FBSSxvREFBUSxDQUFDLFlBQU07QUFDM0IsYUFBTyxLQUFLLENBQUMsT0FBTixHQUFnQixXQUFXLENBQUMsS0FBWixDQUFrQixVQUFsQyxHQUErQyxJQUF0RDtBQUNELEtBRnFCLENBQXRCO0FBSUEsV0FBTztBQUNMLFVBQUksRUFBSixJQURLO0FBRUwsV0FBSyxFQUFMLEtBRks7QUFHTCxhQUFPLEVBQUU7QUFBQSxlQUFNLElBQUksQ0FBQyxPQUFELEVBQVUsV0FBVyxDQUFDLEtBQXRCLENBQVY7QUFBQSxPQUhKO0FBSUwsa0JBQVksRUFBQztBQUFBLGVBQU0sSUFBSSxDQUFDLFlBQUQsRUFBZSxXQUFXLENBQUMsS0FBM0IsQ0FBVjtBQUFBLE9BSlI7QUFLTCxrQkFBWSxFQUFDO0FBQUEsZUFBTSxJQUFJLENBQUMsWUFBRCxFQUFlLFdBQVcsQ0FBQyxLQUEzQixDQUFWO0FBQUEsT0FMUjtBQU1MLGlCQUFXLEVBQVgsV0FOSztBQU1RO0FBQ2IsbUJBQWEsRUFBYixhQVBLLENBT1U7O0FBUFYsS0FBUDtBQVNGO0FBN0M2QixDQUFELENBQTlCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3VFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFRDtBQUNBO0FBRUE7QUFFQSxJQUFNLElBQUcsR0FBSTtBQUNYLFFBQU0sRUFBRSxRQURHO0FBRVgsVUFBUSxFQUFFLGdCQUZDO0FBR1gsWUFBVSxFQUFFO0FBQ1YsVUFBTSxFQUFFLGdCQURFO0FBRVYsVUFBTSxFQUFFLGlCQUZFO0FBR1YsV0FBTyxFQUFFLG1CQUhDO0FBSVYsVUFBTSxFQUFFLGVBSkU7QUFLVixVQUFNLEVBQUUsa0JBTEU7QUFNVixTQUFLLEVBQUUsY0FORztBQU9WLFlBQVEsRUFBRSxVQVBBO0FBUVYsVUFBTSxFQUFFLGlCQVJFO0FBU1YsV0FBTyxFQUFFLFNBVEM7QUFVVixXQUFPLEVBQUUsU0FWQztBQVdWLFNBQUssRUFBRSxPQVhHO0FBWVYsVUFBTSxFQUFFO0FBWkU7QUFIRCxDQUFiO0FBbUJlLDJIQUFlLENBQUM7QUFDN0IsTUFBSSxFQUFFLFFBRHVCO0FBRzdCLE9BQUssa0NBQ0EsK0RBREE7QUFFSCxRQUFJLEVBQUU7QUFDSixVQUFJLEVBQUUsTUFERjtBQUVKLGNBQVEsRUFBRTtBQUZOO0FBRkgsSUFId0I7QUFXN0IsWUFBVSxFQUFFO0FBQ1YsV0FBTyxFQUFQLGdEQURVO0FBRVYsWUFBUSxFQUFSLGlEQUZVO0FBR1YsV0FBTyxFQUFQLGdEQUhVO0FBSVYsVUFBTSxFQUFOLGdEQUpVO0FBS1YsbUJBQWUsRUFBZixzRUFMVTtBQU1WLHVCQUFtQixFQUFuQiwwRUFBbUI7QUFOVCxHQVhpQjtBQW9CN0IsT0FBSyxFQUFFLENBQUMsUUFBRCxFQUFXLGFBQVgsQ0FwQnNCO0FBc0I3QixPQXRCNkIsaUJBc0J2QixLQXRCdUIsUUFzQk47QUFBQSxRQUFSLElBQVEsUUFBUixJQUFRO0FBQ3JCLFFBQUksZ0JBQWUsR0FBSSxLQUF2Qjs7QUFDQSxRQUFJLFVBQVMsbUZBQVEsS0FBSyxDQUFDLElBQU4sQ0FBVyxVQUFYLEVBQVIsQ0FBYjs7QUFFQSxRQUFNLFlBQVcsR0FBSSxnREFBRyxDQUFDLElBQUQsQ0FBeEI7QUFDQSxRQUFNLFlBQVcsR0FBSSxnREFBRyxDQUFDLElBQUQsQ0FBeEI7QUFDQSxRQUFNLGNBQWEsR0FBSSxnREFBRyxDQUFDLElBQUQsQ0FBMUI7QUFFQSxjQUFTLEdBQUksVUFBVSxDQUFDLE1BQVgsQ0FBa0Isa0JBQU87QUFBQSxhQUFLLFFBQVEsQ0FBQyxNQUFULENBQWdCLE1BQWhCLEdBQXlCLENBQTlCO0FBQUEsS0FBekIsQ0FBYjtBQUNBLGNBQVUsQ0FBQyxDQUFELENBQVYsQ0FBYyxLQUFkLEdBQXNCLElBQXRCO0FBQ0EsVUFBTSxDQUFDLE1BQVAsQ0FBYyxVQUFkO0FBRUEsUUFBTSxjQUFhLEdBQUksZ0RBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBRCxDQUFYLENBQTFCO0FBRUEsUUFBTSxjQUFhLEdBQUkscURBQVEsQ0FBQyxZQUFNO0FBQ3BDLGFBQU8sS0FBSyxDQUFDLE9BQU4sSUFBaUIsS0FBSyxDQUFDLFNBQU4sR0FBa0IsRUFBbkMsSUFBeUMsRUFBekMsR0FBOEMsQ0FBOUMsR0FBa0QsK0RBQWdCLEVBQXpFO0FBQ0QsS0FGOEIsQ0FBL0I7QUFJQSxRQUFNLFVBQVMsR0FBSSxxREFBUSxDQUFDO0FBQUEsYUFBTSxLQUFLLENBQUMsSUFBTixJQUFjLG9EQUFLLENBQUMsR0FBTixDQUFVLE1BQVYsQ0FBZCxJQUFtQyxLQUFLLENBQUMsV0FBL0M7QUFBQSxLQUFELENBQTNCO0FBRUEsUUFBTSxZQUFXLEdBQUkscURBQVEsQ0FBQyxZQUFNO0FBQ2xDO0FBQ0UsYUFBSyxFQUFFLGNBQWMsQ0FBQyxLQUFmLEdBQXVCO0FBRGhDLFNBRUssS0FBSyxDQUFDLFlBRlg7QUFJRCxLQUw0QixDQUE3QjtBQU9BLFFBQU0sVUFBUyxHQUFJLHFEQUFRLENBQUMsWUFBTTtBQUNoQyxhQUFPO0FBQ0wsY0FBTSxFQUFFLEtBQUssQ0FBQyxNQURUO0FBRUwsWUFBSSxFQUFFLFVBQVUsQ0FBQyxLQUZaO0FBR0wsV0FBRyxFQUFFLEtBQUssQ0FBQyxHQUhOO0FBSUwsb0JBQVksRUFBRSxLQUFLLENBQUMsWUFKZjtBQUtMLGlCQUFTLEVBQUUsS0FBSyxDQUFDLFNBTFo7QUFNTCxlQUFPLEVBQUUsWUFOSjtBQU9MLGVBQU8sRUFBRSxZQVBKO0FBUUwsZUFBTyxFQUFFO0FBUkosT0FBUDtBQVVELEtBWDBCLENBQTNCO0FBYUEsUUFBTSxTQUFRLEdBQUkscURBQVEsQ0FBQyxZQUFNO0FBQy9CLGFBQU87QUFDTCxZQUFJLEVBQUUsVUFBVSxDQUFDO0FBRFosT0FBUDtBQUdELEtBSnlCLENBQTFCO0FBTUEsUUFBTSxVQUFTLEdBQUkscURBQVEsQ0FBQyxZQUFNO0FBQ2hDLGFBQU8sTUFBTSxDQUFDLE1BQVAsQ0FBYyx3REFBUyxDQUFDLElBQUQsRUFBTyxLQUFLLENBQUMsSUFBYixDQUF2QixDQUFQO0FBQ0QsS0FGMEIsQ0FBM0I7QUFJQSxRQUFNLGtCQUFpQixHQUFJLHFEQUFRLENBQUMsWUFBTTtBQUN4QyxVQUFJLEVBQUMsR0FBSSxDQUFUO0FBQ0EsYUFBTyxVQUFVLENBQUMsR0FBWCxDQUFlLFVBQUMsUUFBRCxFQUFjO0FBQ2xDLGVBQU87QUFDTCxZQUFFLEVBQUUsRUFBRSxFQUREO0FBRUwsa0JBQVEsRUFBRSxRQUZMO0FBR0wsY0FBSSxFQUNGLENBQUMsWUFBWSxDQUFDLEtBQWQsS0FDQyxLQUFLLENBQUMsY0FBTixJQUF3QixRQUFRLENBQUMsRUFBVCxLQUFnQixjQUFjLENBQUMsS0FBZixDQUFxQixFQUQ5RCxDQUpHO0FBTUwsb0JBQVUsRUFBRSxVQUFVLENBQUMsS0FObEI7QUFPTCxjQUFJLEVBQUUsS0FBSyxDQUFDLElBUFA7QUFRTCxzQkFBWSxFQUFFLFFBQVEsQ0FBQyxNQUFULENBQWdCLE1BUnpCO0FBU0wsb0JBQVUsRUFBRSxVQUFVLENBQUM7QUFUbEIsU0FBUDtBQVdELE9BWk0sQ0FBUDtBQWFELEtBZmtDLENBQW5DO0FBaUJBLFFBQU0sU0FBUSxHQUFJLHFEQUFRLENBQUMsWUFBTTtBQUMvQixVQUFJO0FBQ0YsZUFBTyxLQUFLLENBQUMsSUFBTixDQUFXLEtBQVgsQ0FBaUIsS0FBSyxDQUFDLEtBQXZCLENBQVA7QUFDRixPQUZBLENBRUUsT0FBTyxDQUFQLEVBQVU7QUFDVixlQUFPLENBQUMsS0FBUixDQUNFLDRCQUNBLEtBQUssQ0FBQyxLQUROLEdBRUEsdURBSEYsRUFJRSxDQUpGO0FBTUEsZUFBTyxLQUFLLENBQUMsSUFBTixDQUFXLFVBQVgsRUFBUDtBQUNGO0FBQ0QsS0FaeUIsQ0FBMUIsQ0FuRXFCLENBaUZyQjs7QUFDQSxRQUFNLGNBQWEsR0FBSSxTQUFqQixjQUFpQixDQUFDLFVBQUQsRUFBYSxRQUFiLEVBQTBCO0FBQy9DLFVBQUksZ0JBQUosRUFBc0I7QUFDcEIsd0JBQWUsR0FBSSxLQUFuQjtBQUNGLE9BRkEsTUFFTztBQUNMO0FBQ0E7QUFDQTtBQUNBLFlBQUksV0FBVSxHQUFJLFFBQU8sR0FBSSxDQUFYLEdBQWUsQ0FBZixHQUFtQixRQUFPLEdBQUksQ0FBOUIsR0FBa0MsQ0FBcEQ7QUFDQSxzQkFBYyxDQUFDLEtBQWYsR0FBdUIsVUFBVSxDQUFDLFdBQUQsQ0FBakM7QUFDRjtBQUNGLEtBVkE7O0FBV0EsUUFBTSxhQUFZLEdBQUksU0FBaEIsYUFBZ0IsQ0FBQyxRQUFELEVBQWM7QUFDbEMsVUFBSSxJQUFJLFVBQVUsQ0FBQyxTQUFYLENBQXFCO0FBQUEsZUFBSyxDQUFDLENBQUMsRUFBRixLQUFTLFFBQVEsQ0FBQyxFQUF2QjtBQUFBLE9BQXJCLENBQVI7O0FBQ0EsVUFBSSxjQUFjLENBQUMsS0FBbkIsRUFBMEI7QUFDeEIsc0JBQWMsQ0FBQyxLQUFmLENBQXFCLFlBQXJCLENBQWtDLENBQWxDO0FBQ0Y7O0FBRUEsb0JBQWMsQ0FBQyxLQUFmLEdBQXVCLFVBQVUsQ0FBQyxJQUFYLENBQWdCO0FBQUEsZUFBSyxDQUFDLENBQUMsRUFBRixLQUFTLFFBQVEsQ0FBQyxFQUF2QjtBQUFBLE9BQWhCLENBQXZCO0FBQ0Esc0JBQWUsR0FBSSxJQUFuQjtBQUNGLEtBUkE7O0FBU0EsUUFBTSxRQUFPLEdBQUksU0FBWCxRQUFXLENBQUMsS0FBRCxFQUFXO0FBQzFCLGtCQUFZLENBQUMsS0FBYixHQUFxQixLQUFLLENBQUMsSUFBTixDQUFXLE1BQVgsQ0FBa0IsS0FBbEIsRUFBeUIsS0FBSyxDQUFDLGdCQUEvQixDQUFyQjtBQUNGLEtBRkE7O0FBR0EsUUFBTSxZQUFXLEdBQUksU0FBZixZQUFlLENBQUMsS0FBRCxFQUFXO0FBQzlCLGtCQUFZLENBQUMsS0FBYixHQUFxQixLQUFyQjtBQUNGLEtBRkE7O0FBR0EsUUFBTSxZQUFXLEdBQUksU0FBZixZQUFlLEdBQU07QUFDekIsa0JBQVksQ0FBQyxLQUFiLEdBQXFCLElBQXJCO0FBQ0YsS0FGQTs7QUFHQSxRQUFNLFlBQVcsR0FBSSxTQUFmLFlBQWUsQ0FBQyxLQUFELEVBQVc7QUFDOUIsVUFBSSxDQUFDLFFBQUQsRUFBVyxLQUFYLENBQUo7QUFDQSwrREFBVSxDQUFDLEdBQVgsQ0FBZSxLQUFmO0FBQ0YsS0FIQTs7QUFJQSxRQUFNLFlBQVcsR0FBSSxTQUFmLFlBQWUsQ0FBQyxJQUFELEVBQVU7QUFDN0IsZ0JBQVUsQ0FBQyxLQUFYLEdBQW1CLElBQW5CO0FBQ0EsMERBQUssQ0FBQyxNQUFOLENBQWE7QUFBRSxZQUFHLEVBQUg7QUFBRixPQUFiO0FBRUEsVUFBSSxDQUFDLGFBQUQsRUFBZ0IsSUFBaEIsQ0FBSjtBQUNGLEtBTEE7O0FBT0EsV0FBTztBQUNMLG9CQUFjLEVBQWQsY0FESztBQUVMLG9CQUFjLEVBQWQsY0FGSztBQUdMLGtCQUFZLEVBQVosWUFISztBQUlMLGtCQUFZLEVBQVosWUFKSztBQUtMLGdCQUFVLEVBQVYsVUFMSztBQU9MLGtCQUFZLEVBQVosWUFQSztBQVFMLGdCQUFVLEVBQVYsVUFSSztBQVNMLG1CQUFhLEVBQWIsYUFUSztBQVVMLGNBQVEsRUFBUixRQVZLO0FBV0wsZ0JBQVUsRUFBVixVQVhLO0FBWUwsd0JBQWtCLEVBQWxCLGtCQVpLO0FBYUwsb0JBQWMsRUFBZCxjQWJLO0FBY0wsZUFBUyxFQUFULFNBZEs7QUFlTCxlQUFTLEVBQVQsU0FmSztBQWdCTCxrQkFBWSxFQUFaO0FBaEJLLEtBQVA7QUFrQkY7QUFsSzZCLENBQUQsQ0FBOUIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUQ7QUFDQTtBQUVBLElBQU0sSUFBRyxHQUFJO0FBQ1gsUUFBTSxFQUFFLFFBREc7QUFFWCxVQUFRLEVBQUUsZ0JBRkM7QUFHWCxZQUFVLEVBQUU7QUFDVixVQUFNLEVBQUUsZ0JBREU7QUFFVixVQUFNLEVBQUUsaUJBRkU7QUFHVixXQUFPLEVBQUUsbUJBSEM7QUFJVixVQUFNLEVBQUUsZUFKRTtBQUtWLFVBQU0sRUFBRSxrQkFMRTtBQU1WLFNBQUssRUFBRSxjQU5HO0FBT1YsWUFBUSxFQUFFLFVBUEE7QUFRVixVQUFNLEVBQUUsaUJBUkU7QUFTVixXQUFPLEVBQUUsU0FUQztBQVVWLFdBQU8sRUFBRSxTQVZDO0FBV1YsU0FBSyxFQUFFLE9BWEc7QUFZVixVQUFNLEVBQUU7QUFaRTtBQUhELENBQWI7QUFtQmUsMkhBQWUsQ0FBQztBQUM3QixNQUFJLEVBQUUsbUJBRHVCO0FBRzdCLFlBQVUsRUFBRTtBQUNWLFdBQU8sRUFBUCxvREFEVTtBQUVWLFlBQVEsRUFBUixxREFGVTtBQUdWLFdBQU8sRUFBUCxvREFIVTtBQUlWLFVBQU0sRUFBTixvREFKVTtBQUtWLG1CQUFlLEVBQWYsc0VBTFU7QUFNVix1QkFBbUIsRUFBbkIsMEVBQW1CO0FBTlQsR0FIaUI7QUFZN0IsT0FBSyxrQ0FDQSwrREFEQTtBQUVILFdBQU8sRUFBRTtBQUNQLFVBQUksRUFBRSxLQURDO0FBRVAsYUFBTyxFQUFFO0FBQUEsZUFBTSxFQUFOO0FBQUE7QUFGRixLQUZOO0FBTUgsc0JBQWtCLEVBQUU7QUFDbEIsVUFBSSxFQUFFO0FBRFksS0FOakI7QUFTSCxXQUFPLEVBQUU7QUFDUCxVQUFJLEVBQUUsS0FEQztBQUVQLGFBQU8sRUFBRTtBQUFBLGVBQU0sRUFBTjtBQUFBO0FBRkYsS0FUTjtBQWFILFFBQUksRUFBRTtBQUNKLFVBQUksRUFBRSxNQURGO0FBRUosY0FBUSxFQUFFO0FBRk47QUFiSCxJQVp3QjtBQStCN0IsT0FBSyxFQUFFLENBQUMsYUFBRCxFQUFnQixRQUFoQixDQS9Cc0I7QUFpQzdCLE9BakM2QixpQkFpQ3ZCLEtBakN1QixRQWlDTjtBQUFBLFFBQVIsSUFBUSxRQUFSLElBQVE7O0FBQ3JCLFFBQUksVUFBUyxHQUFJLGdGQUFJLEtBQUssQ0FBQyxJQUFOLENBQVcsVUFBWCxFQUFKLEVBQTZCLE1BQTdCLENBQW9DLFVBQUMsUUFBRCxFQUFjO0FBQ2pFLGFBQU8sUUFBUSxDQUFDLE1BQVQsQ0FBZ0IsTUFBaEIsR0FBeUIsQ0FBaEM7QUFDRCxLQUZnQixDQUFqQjs7QUFJQSxjQUFVLENBQUMsQ0FBRCxDQUFWLENBQWMsS0FBZCxHQUFzQixJQUF0QjtBQUNBLFVBQU0sQ0FBQyxNQUFQLENBQWMsVUFBZDtBQUVBLFFBQU0sU0FBUSxHQUFJLGdEQUFHLENBQUMsSUFBRCxDQUFyQjtBQUNBLFFBQU0sYUFBWSxHQUFJLGdEQUFHLENBQUMsSUFBRCxDQUF6QjtBQUNBLFFBQU0sVUFBUyxHQUFJLGdEQUFHLENBQUMsS0FBSyxDQUFDLElBQU4sSUFBYyxvREFBSyxDQUFDLEdBQU4sQ0FBVSxNQUFWLENBQWQsSUFBbUMsS0FBSyxDQUFDLFdBQTFDLENBQXRCO0FBQ0EsUUFBTSxjQUFhLEdBQUksZ0RBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBRCxDQUFYLENBQTFCO0FBQ0EsUUFBTSxZQUFXLEdBQUksZ0RBQUcsQ0FBQyxJQUFELENBQXhCO0FBQ0EsUUFBTSxZQUFXLEdBQUksZ0RBQUcsQ0FBQyxJQUFELENBQXhCO0FBRUEsUUFBTSxjQUFhLEdBQUkscURBQVEsQ0FBQztBQUFBLGFBQU0sS0FBSyxDQUFDLE9BQU4sSUFBaUIsS0FBSyxDQUFDLFNBQU4sR0FBa0IsRUFBbkMsSUFBeUMsRUFBekMsR0FBOEMsQ0FBOUMsR0FBa0QsK0RBQWdCLEVBQXhFO0FBQUEsS0FBRCxDQUEvQjtBQUVBLFFBQU0sVUFBUyxHQUFJLHFEQUFRLENBQUM7QUFBQSxhQUFPO0FBQ2pDLGNBQU0sRUFBRSxLQUFLLENBQUMsTUFEbUI7QUFFakMsWUFBSSxFQUFFLFVBQVUsQ0FBQyxLQUZnQjtBQUdqQyxXQUFHLEVBQUUsS0FBSyxDQUFDLEdBSHNCO0FBSWpDLG9CQUFZLEVBQUUsS0FBSyxDQUFDLFlBSmE7QUFLakMsaUJBQVMsRUFBRSxLQUFLLENBQUMsU0FMZ0I7QUFNakMsZUFBTyxFQUFFLFlBTndCO0FBT2pDLGVBQU8sRUFBRSxZQVB3QjtBQVFqQyxlQUFPLEVBQUU7QUFSd0IsT0FBUDtBQUFBLEtBQUQsQ0FBM0I7QUFXQSxRQUFNLFNBQVEsR0FBSSxxREFBUSxDQUFDO0FBQUEsYUFBTztBQUFFLFlBQUksRUFBRSxVQUFVLENBQUM7QUFBbkIsT0FBUDtBQUFBLEtBQUQsQ0FBMUI7QUFFQSxRQUFNLFlBQVcsR0FBSSxxREFBUSxDQUFDO0FBQUE7QUFDNUIsYUFBSyxFQUFFLGNBQWMsQ0FBQyxLQUFmLEdBQXVCO0FBREYsU0FFekIsS0FBSyxDQUFDLFlBRm1CO0FBQUEsS0FBRCxDQUE3QjtBQUtBLFFBQU0sa0JBQWlCLEdBQUkscURBQVEsQ0FBQyxZQUFNO0FBQ3hDLGFBQU8sVUFBVSxDQUFDLE1BQVgsQ0FBa0IsVUFBQyxRQUFELEVBQWM7QUFDckMsWUFBSSxVQUFTLEdBQ1gsS0FBSyxDQUFDLE9BQU4sSUFBaUIsS0FBSyxDQUFDLE9BQU4sQ0FBYyxNQUEvQixHQUNJLEtBQUssQ0FBQyxPQUFOLENBQWMsT0FBZCxDQUFzQixRQUFRLENBQUMsRUFBL0IsSUFBcUMsQ0FBQyxDQUQxQyxHQUVJLElBSE47QUFJQSxZQUFJLFVBQVMsR0FDWCxLQUFLLENBQUMsT0FBTixJQUFpQixLQUFLLENBQUMsT0FBTixDQUFjLE1BQS9CLEdBQ0ksS0FBSyxDQUFDLE9BQU4sQ0FBYyxPQUFkLENBQXNCLFFBQVEsQ0FBQyxFQUEvQixJQUFxQyxDQUFDLENBRDFDLEdBRUksS0FITjtBQUlBLFlBQUksU0FBUSxHQUFJLFFBQVEsQ0FBQyxNQUFULENBQWdCLE1BQWhCLEdBQXlCLENBQXpDOztBQUNBLFlBQUksS0FBSyxDQUFDLGtCQUFWLEVBQThCO0FBQzVCLG1CQUFRLEdBQUksUUFBUSxDQUFDLE1BQVQsQ0FBZ0IsSUFBaEIsQ0FBcUIsVUFBQyxLQUFELEVBQVc7QUFDMUMsbUJBQU8sS0FBSyxDQUFDLGtCQUFOLENBQXlCLEtBQUssQ0FBQyxJQUFOLENBQVcsTUFBWCxDQUFrQixLQUFsQixLQUE0QixLQUFyRCxDQUFQO0FBQ0QsV0FGVyxDQUFaO0FBR0Y7O0FBQ0EsZUFBTyxVQUFTLElBQUssQ0FBQyxVQUFmLElBQTZCLFNBQXBDO0FBQ0QsT0FoQk0sQ0FBUDtBQWlCRCxLQWxCa0MsQ0FBbkM7QUFvQkEsUUFBTSxTQUFRLEdBQUkscURBQVEsQ0FBQyxZQUFNO0FBQy9CLFVBQUk7QUFDRixlQUFPLEtBQUssQ0FBQyxJQUFOLENBQVcsS0FBWCxDQUFpQixLQUFLLENBQUMsS0FBdkIsQ0FBUDtBQUNGLE9BRkEsQ0FFRSxPQUFPLENBQVAsRUFBVTtBQUNWLGVBQU8sQ0FBQyxLQUFSLENBQ0UsNEJBQ0EsS0FBSyxDQUFDLEtBRE4sR0FFQSx1REFIRjtBQUtBLGVBQU8sQ0FBQyxLQUFSLENBQWMsQ0FBZDtBQUNBLGVBQU8sS0FBSyxDQUFDLElBQU4sQ0FBVyxVQUFYLEVBQVA7QUFDRjtBQUNELEtBWnlCLENBQTFCLENBdkRxQixDQXFFckI7O0FBQ0EsUUFBSSxlQUFjLEdBQUksS0FBdEI7O0FBQ0EsUUFBTSxRQUFPLEdBQUksU0FBWCxRQUFXLEdBQU07QUFDckIsVUFBSSxLQUFLLENBQUMsY0FBTixJQUF3QixDQUFDLGVBQTdCLEVBQThDO0FBQzVDLHVCQUFjLEdBQUksSUFBbEI7QUFDQSxjQUFNLENBQUMscUJBQVAsQ0FBNkIsYUFBN0I7QUFDRjtBQUNGLEtBTEE7O0FBT0EsUUFBTSxhQUFZLEdBQUksU0FBaEIsYUFBZ0IsR0FBTTtBQUMxQixxQkFBYyxHQUFJLEtBQWxCO0FBQ0EsVUFBSSxTQUFRLEdBQUksU0FBUyxDQUFDLFNBQTFCO0FBQUEsVUFDRSxlQUFjLEdBQUksa0JBQWtCLENBQUMsS0FBbkIsQ0FBeUIsQ0FBekIsQ0FEcEI7O0FBRUEsV0FBSyxJQUFJLElBQUksQ0FBUixFQUFXLElBQUksa0JBQWtCLENBQUMsS0FBbkIsQ0FBeUIsTUFBN0MsRUFBcUQsSUFBSSxDQUF6RCxFQUE0RCxDQUFDLEVBQTdELEVBQWlFO0FBQy9ELFlBQUksUUFBTyxHQUFJLGtCQUFrQixDQUFDLEtBQW5CLENBQXlCLENBQXpCLENBQWY7QUFBQSxZQUNFLFNBQVEsR0FBSSxhQUFhLENBQUMsS0FBZCxDQUFvQixDQUFwQixDQURkLENBRCtELENBRy9EO0FBQ0E7O0FBQ0EsWUFBSSxTQUFRLElBQUssU0FBUyxDQUFDLEdBQVYsQ0FBYyxTQUFkLEdBQTBCLEVBQTFCLEdBQStCLFNBQWhELEVBQTJEO0FBQ3pEO0FBQ0Y7O0FBQ0EsdUJBQWMsR0FBSSxRQUFsQjtBQUNGOztBQUVBLG9CQUFjLENBQUMsS0FBZixHQUF1QixlQUF2QjtBQUNGLEtBaEJBOztBQWtCQSxRQUFNLGFBQVksR0FBSSxTQUFoQixhQUFnQixDQUFDLFFBQUQsRUFBYztBQUNsQyxVQUFJLElBQUksa0JBQWtCLENBQUMsS0FBbkIsQ0FBeUIsT0FBekIsQ0FBaUMsUUFBakMsQ0FBUjtBQUFBLFVBQ0UsU0FBUSxHQUFJLGFBQWEsQ0FBQyxLQUFkLENBQW9CLENBQXBCLENBRGQ7QUFBQSxVQUVFLGlCQUFnQixHQUFJLFNBQXBCLGlCQUFvQixHQUFNO0FBQ3hCLFlBQUksU0FBSixFQUFlO0FBQ2IsY0FBSSxHQUFFLEdBQUksU0FBUyxDQUFDLEdBQVYsQ0FBYyxTQUF4Qjs7QUFDQSxjQUFJLFFBQVEsQ0FBQyxLQUFiLEVBQW9CO0FBQ2xCLGVBQUUsR0FBSSxDQUFOO0FBQ0Y7O0FBRUEsbUJBQVMsQ0FBQyxLQUFWLENBQWdCLFNBQWhCLEdBQTRCLEdBQTVCO0FBQ0Y7QUFDRixPQVhGOztBQWFBLFVBQUksS0FBSyxDQUFDLGNBQVYsRUFBMEI7QUFDeEIseUJBQWlCO0FBQ25CLE9BRkEsTUFFTztBQUNMLHNCQUFjLENBQUMsS0FBZixHQUF1QixrQkFBa0IsQ0FBQyxLQUFuQixDQUF5QixDQUF6QixDQUF2QjtBQUNGO0FBQ0YsS0FuQkE7O0FBcUJBLFFBQU0sUUFBTyxHQUFJLFNBQVgsUUFBVyxDQUFDLEtBQUQsRUFBVztBQUMxQixrQkFBWSxDQUFDLEtBQWIsR0FBcUIsS0FBSyxDQUFDLElBQU4sQ0FBVyxNQUFYLENBQWtCLEtBQWxCLEVBQXlCLEtBQUssQ0FBQyxnQkFBL0IsQ0FBckI7QUFDRixLQUZBOztBQUlBLFFBQU0sWUFBVyxHQUFJLFNBQWYsWUFBZSxDQUFDLEtBQUQsRUFBVztBQUM5QixrQkFBWSxDQUFDLEtBQWIsR0FBcUIsS0FBckI7QUFDRixLQUZBOztBQUlBLFFBQU0sWUFBVyxHQUFJLFNBQWYsWUFBZSxHQUFNO0FBQ3pCLGtCQUFZLENBQUMsS0FBYixHQUFxQixJQUFyQjtBQUNGLEtBRkE7O0FBSUEsUUFBTSxZQUFXLEdBQUksU0FBZixZQUFlLENBQUMsS0FBRCxFQUFXO0FBQzlCLFVBQUksQ0FBQyxRQUFELEVBQVcsS0FBWCxDQUFKO0FBQ0EsK0RBQVUsQ0FBQyxHQUFYLENBQWUsS0FBZjtBQUNGLEtBSEE7O0FBS0EsUUFBTSxZQUFXLEdBQUksU0FBZixZQUFlLENBQUMsSUFBRCxFQUFVO0FBQzdCLGdCQUFVLENBQUMsS0FBWCxHQUFtQixJQUFuQjtBQUNBLDBEQUFLLENBQUMsTUFBTixDQUFhO0FBQUUsWUFBRyxFQUFIO0FBQUYsT0FBYjtBQUVBLFVBQUksQ0FBQyxhQUFELEVBQWdCLElBQWhCLENBQUo7QUFDRixLQUxBOztBQU9BLFdBQU87QUFDTCxvQkFBYyxFQUFkLGNBREs7QUFFTCxrQkFBWSxFQUFaLFlBRks7QUFHTCxrQkFBWSxFQUFaLFlBSEs7QUFJTCxrQkFBWSxFQUFaLFlBSks7QUFLTCx3QkFBa0IsRUFBbEIsa0JBTEs7QUFNTCxlQUFTLEVBQVQsU0FOSztBQU9MLGdCQUFVLEVBQUUscURBQVEsQ0FBQztBQUFBLGVBQU0sTUFBTSxDQUFDLE1BQVAsQ0FBYyx3REFBUyxDQUFDLElBQUQsRUFBTyxLQUFLLENBQUMsSUFBYixDQUF2QixDQUFOO0FBQUEsT0FBRCxDQVBmO0FBUUwsZUFBUyxFQUFULFNBUks7QUFVTCxlQUFTLEVBQVQsU0FWSztBQVdMLGdCQUFVLEVBQVYsVUFYSztBQVlMLG1CQUFhLEVBQWIsYUFaSztBQWFMLGNBQVEsRUFBUixRQWJLO0FBY0wsY0FBUSxFQUFSLFFBZEs7QUFlTCxnQkFBVSxFQUFWLFVBZks7QUFnQkwsa0JBQVksRUFBWjtBQWhCSyxLQUFQO0FBa0JGO0FBaE02QixDQUFELENBQTlCLEU7Ozs7Ozs7Ozs7OztBQ2xIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFZSwwSEFBZSxDQUFDO0FBQzdCLE1BQUksRUFBRSxTQUR1QjtBQUc3QixPQUFLLEVBQUU7QUFDTCxRQUFJLEVBQUU7QUFDSixVQUFJLEVBQUUsTUFERjtBQUVKLGNBQVEsRUFBRTtBQUZOLEtBREQ7QUFLTCxTQUFLLEVBQUU7QUFDTCxVQUFJLEVBQUU7QUFERCxLQUxGO0FBUUwsY0FBVSxFQUFFO0FBQ1YsVUFBSSxFQUFFLEtBREk7QUFFVixjQUFRLEVBQUU7QUFGQSxLQVJQO0FBWUwsa0JBQWMsRUFBRTtBQUNkLFVBQUksRUFBRSxNQURRO0FBRWQsYUFGYyxzQkFFSjtBQUNSLGVBQU8sRUFBUDtBQUNGO0FBSmM7QUFaWCxHQUhzQjtBQXVCN0IsT0F2QjZCLG1CQXVCckI7QUFDTixXQUFPO0FBQ0wsVUFBSSxFQUFKLDZDQUFJO0FBREMsS0FBUDtBQUdGO0FBM0I2QixDQUFELENBQTlCLEU7Ozs7Ozs7Ozs7OztBQ2FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFZSwwSEFBZSxDQUFDO0FBQzdCLE1BQUksRUFBRSxlQUR1QjtBQUc3QixPQUFLLEVBQUU7QUFDTCxRQUFJLEVBQUU7QUFDSixVQUFJLEVBQUUsTUFERjtBQUVKLGFBQU8sRUFBRTtBQUFBLGVBQU8sRUFBUDtBQUFBO0FBRkwsS0FERDtBQUtMLFFBQUksRUFBRTtBQUNKLFVBQUksRUFBRSxNQURGO0FBRUosY0FBUSxFQUFFO0FBRk4sS0FMRDtBQVNMLE1BQUUsRUFBRTtBQUNGLFVBQUksRUFBRSxNQURKO0FBRUYsY0FBUSxFQUFFO0FBRlIsS0FUQztBQWFMLFFBQUksRUFBRTtBQUNKLFVBQUksRUFBRSxNQURGO0FBRUosY0FBUSxFQUFFO0FBRk4sS0FiRDtBQWlCTCxVQUFNLEVBQUU7QUFDTixVQUFJLEVBQUU7QUFEQSxLQWpCSDtBQW9CTCxjQUFVLEVBQUU7QUFDVixVQUFJLEVBQUUsTUFESTtBQUVWLGNBQVEsRUFBRTtBQUZBO0FBcEJQLEdBSHNCO0FBNkI3QixZQUFVLEVBQUU7QUFDVixTQUFJLEVBQUosOENBQUs7QUFESyxHQTdCaUI7QUFpQzdCLE9BakM2QixpQkFpQ3ZCLEtBakN1QixFQWlDaEI7QUFDWCxRQUFNLFNBQVEsR0FBSSxvREFBUSxDQUFDLFlBQU07QUFDL0IsYUFBTyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQWY7QUFDRCxLQUZ5QixDQUExQjtBQUdBLFFBQU0sUUFBTyxHQUFJLG9EQUFRLENBQUMsWUFBTTtBQUM5QixhQUFPLEtBQUssQ0FBQyxJQUFOLEtBQWUsUUFBdEI7QUFDRCxLQUZ3QixDQUF6QjtBQUdBLFFBQU0sVUFBUyxHQUFJLG9EQUFRLENBQUMsWUFBTTtBQUNoQyxhQUFPLEtBQUssQ0FBQyxNQUFOLENBQWEsTUFBYixHQUFzQixDQUE3QjtBQUNELEtBRjBCLENBQTNCO0FBR0EsUUFBTSxZQUFXLEdBQUksb0RBQVEsQ0FBQyxZQUFNO0FBQ2xDLGFBQU8sS0FBSyxDQUFDLE1BQU4sQ0FBYSxHQUFiLENBQWlCLFVBQUMsS0FBRCxFQUFXO0FBQ2pDLFlBQUksV0FBVSxHQUFJLEtBQWxCO0FBQ0EsWUFBSSxTQUFRLEdBQUksSUFBSSwyREFBSixDQUNkLEtBRGMsRUFFZCxLQUFLLENBQUMsVUFBTixDQUFpQixJQUZILEVBR2QsS0FBSyxDQUFDLFVBQU4sQ0FBaUIsR0FISCxFQUlkLEtBQUssQ0FBQyxVQUFOLENBQWlCLE1BSkgsRUFLZCxLQUFLLENBQUMsVUFBTixDQUFpQixRQUxILEVBTWQsS0FBSyxDQUFDLFVBQU4sQ0FBaUIsWUFOSCxFQU9kLEtBQUssQ0FBQyxVQUFOLENBQWlCLFNBUEgsQ0FBaEI7QUFTQSxlQUFPO0FBQUUscUJBQVcsRUFBWCxXQUFGO0FBQWUsbUJBQVEsRUFBUjtBQUFmLFNBQVA7QUFDRCxPQVpNLENBQVA7QUFhRCxLQWQ0QixDQUE3QjtBQWdCQSxXQUFPO0FBQ0wsZUFBUyxFQUFULFNBREs7QUFFTCxjQUFRLEVBQVIsUUFGSztBQUdMLGdCQUFVLEVBQVYsVUFISztBQUlMLGtCQUFZLEVBQVo7QUFKSyxLQUFQO0FBTUY7QUFqRTZCLENBQUQsQ0FBOUIsRTs7Ozs7Ozs7Ozs7O0FDVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVlLDBIQUFlLENBQUM7QUFDN0IsTUFBSSxFQUFFLGNBRHVCO0FBRzdCLFlBQVUsRUFBRTtBQUNWLFNBQUssRUFBTCw4Q0FEVTtBQUVWLFNBQUksRUFBSiw4Q0FBSztBQUZLLEdBSGlCO0FBUTdCLE9BQUssRUFBRTtBQUNMLFFBQUksRUFBRTtBQUNKLFVBQUksRUFBRSxNQURGO0FBRUosY0FBUSxFQUFFO0FBRk4sS0FERDtBQUtMLFNBQUssRUFBRTtBQUNMLFVBQUksRUFBRSxNQUREO0FBRUwsY0FBUSxFQUFFO0FBRkwsS0FMRjtBQVNMLFNBQUssRUFBRTtBQUNMLFVBQUksRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFUO0FBREQsS0FURjtBQVlMLGFBQVMsRUFBRTtBQUNULFVBQUksRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFULENBREc7QUFFVCxjQUFRLEVBQUU7QUFGRCxLQVpOO0FBZ0JMLGlCQUFhLEVBQUU7QUFDYixVQUFJLEVBQUUsT0FETztBQUViLGFBQU8sRUFBRTtBQUZJLEtBaEJWO0FBb0JMLGNBQVUsRUFBRTtBQUNWLFVBQUksRUFBRSxNQURJO0FBRVYsY0FBUSxFQUFFO0FBRkEsS0FwQlA7QUF3QkwsYUFBUyxFQUFFO0FBQ1QsVUFBSSxFQUFFLE1BREc7QUFFVCxjQUFRLEVBQUU7QUFGRCxLQXhCTjtBQTRCTCxnQkFBWSxFQUFFO0FBQ1osVUFBSSxFQUFFLFFBRE07QUFFWixjQUFRLEVBQUU7QUFGRTtBQTVCVCxHQVJzQjtBQTBDN0IsT0ExQzZCLGlCQTBDdkIsS0ExQ3VCLEVBMENoQjtBQUNYLFFBQU0sU0FBUSxHQUFJLG9EQUFRLENBQUM7QUFBQSxhQUFNLEtBQUssQ0FBQyxLQUFOLEdBQWMsS0FBSyxDQUFDLEtBQXBCLEdBQTRCLEVBQWxDO0FBQUEsS0FBRCxDQUExQjtBQUVBLFdBQU87QUFDTCxlQUFTLEVBQVQsU0FESztBQUVMLHFCQUFlLEVBQUUsb0RBQVEsQ0FBQztBQUFBLGVBQU0sU0FBUyxDQUFDLEtBQVYsQ0FBZ0IsV0FBdEI7QUFBQSxPQUFELENBRnBCO0FBR0wsb0JBQWMsRUFBRSxvREFBUSxDQUFDO0FBQUEsZUFBTSxTQUFTLENBQUMsU0FBaEI7QUFBQSxPQUFEO0FBSG5CLEtBQVA7QUFLRjtBQWxENkIsQ0FBRCxDQUE5QixFOzs7Ozs7Ozs7Ozs7QUM5Q0E7QUFBQTtBQUFBO0FBQUE7QUFFZSwwSEFBZSxDQUFDO0FBQzdCLE9BQUssRUFBRTtBQUNMLFFBQUksRUFBRTtBQUNKLFVBQUksRUFBRSxNQURGO0FBRUosY0FBUSxFQUFFO0FBRk4sS0FERDtBQUtMLFFBQUksRUFBRTtBQUNKLFVBQUksRUFBRSxNQURGO0FBRUosY0FBUSxFQUFFO0FBRk4sS0FMRDtBQVNMLGFBQVMsRUFBRTtBQUNULFVBQUksRUFBRSxPQURHO0FBRVQsYUFBTyxFQUFFO0FBRkEsS0FUTjtBQWFMLFlBQVEsRUFBRTtBQUNSLFVBQUksRUFBRSxRQURFO0FBRVIsY0FBUSxFQUFFO0FBRkY7QUFiTCxHQURzQjtBQW9CN0IsT0FwQjZCLGlCQW9CdkIsS0FwQnVCLFFBb0JOO0FBQUEsUUFBUixJQUFRLFFBQVIsSUFBUTtBQUNyQixRQUFNLEtBQUksR0FBSSwrQ0FBRyxDQUFDLEVBQUQsQ0FBakI7QUFFQSxxREFBSyxDQUNILEtBREcsRUFFSDtBQUFBLGFBQU0sSUFBSSxDQUFDLFFBQUQsRUFBVyxLQUFLLENBQUMsS0FBakIsQ0FBVjtBQUFBLEtBRkcsQ0FBTDtBQUtBLHlEQUFTLENBQUMsWUFBTTtBQUNkLFVBQUksQ0FBQyxLQUFLLENBQUMsU0FBWCxFQUFzQjtBQUV0QixVQUFJLEdBQUUsR0FBSSw4REFBa0IsTUFBTSw4REFBa0IsR0FBRyxLQUFyQixDQUEyQixHQUFuRCxJQUEwRCxJQUFwRTtBQUNBLFVBQUksQ0FBQyxHQUFMLEVBQVU7QUFFVixTQUFHLENBQUMsYUFBSixDQUFrQixPQUFsQixFQUEyQixLQUEzQjtBQUNELEtBUFEsQ0FBVDtBQVNBLFdBQU87QUFDTCxXQUFLLEVBQUwsS0FESztBQUVMLFdBQUssRUFBQztBQUFBLGVBQU8sS0FBSyxDQUFDLEtBQU4sR0FBYyxFQUFyQjtBQUFBLE9BRkQ7QUFHTCxnQkFBVSxFQUFFLG9EQUFRLENBQUM7QUFBQSxlQUFNLEtBQUssQ0FBQyxJQUFaO0FBQUEsT0FBRDtBQUhmLEtBQVA7QUFLRjtBQTFDNkIsQ0FBRCxDQUE5QixFOzs7Ozs7Ozs7Ozs7QUNFQTtBQUFBO0FBQUE7QUFBQTtBQUVlLDBIQUFlLENBQUM7QUFDN0IsTUFBSSxFQUFFLFlBRHVCO0FBRzdCLE9BQUssRUFBRTtBQUNMLFFBQUksRUFBRTtBQUNKLFVBQUksRUFBRSxNQURGO0FBRUosY0FBUSxFQUFFO0FBRk47QUFERCxHQUhzQjtBQVU3QixPQVY2QixpQkFVdkIsS0FWdUIsUUFVTjtBQUFBLFFBQVIsSUFBUSxRQUFSLElBQVE7QUFDckIsUUFBTSxNQUFLLEdBQUksK0NBQUcsQ0FBQyxLQUFELENBQWxCOztBQUVBLFFBQU0sT0FBTSxHQUFJLFNBQVYsT0FBVSxDQUFDLFFBQUQsRUFBYztBQUM1QixVQUFJLE1BQU0sQ0FBQyxLQUFYLEVBQWtCO0FBQ2hCLFlBQUksUUFBTyxLQUFNLEtBQUssQ0FBQyxJQUF2QixFQUE2QjtBQUMzQixjQUFJLENBQUMsUUFBRCxFQUFXLFFBQVgsQ0FBSjtBQUNGO0FBQ0Y7O0FBRUEsWUFBTSxDQUFDLEtBQVAsR0FBZSxDQUFDLE1BQU0sQ0FBQyxLQUF2QjtBQUNGLEtBUkE7O0FBVUEsV0FBTztBQUNMLFlBQU0sRUFBTixNQURLO0FBRUwsYUFBTSxFQUFOO0FBRkssS0FBUDtBQUlGO0FBM0I2QixDQUFELENBQTlCLEU7Ozs7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM0RztBQUM3QjtBQUMvRSw4QkFBOEIsc0VBQTJCLENBQUMseUZBQXFDO0FBQy9GO0FBQ0EsOEJBQThCLFFBQVMseUJBQXlCLGtCQUFrQix5REFBeUQsZ0JBQWdCLDJEQUEyRCxnQkFBZ0IsMkNBQTJDLG9CQUFvQixhQUFhLDRCQUE0QixvQkFBb0IsY0FBYyxvQ0FBb0MsV0FBVyxPQUFPLHNCQUFzQixnQkFBZ0Isa0JBQWtCLDZEQUE2RCxrQkFBa0IsTUFBTSxPQUFPLHNCQUFzQiw2RUFBNkUsV0FBVywrRUFBK0UsWUFBWSxnRkFBZ0YsV0FBVyxrRkFBa0YsWUFBWSxzQkFBc0Isa0JBQWtCLE1BQU0sT0FBTyxXQUFXLFdBQVcsWUFBWSxZQUFZLDZCQUE2QixvQkFBb0IsY0FBYyxnQkFBZ0IsVUFBVSw2QkFBNkIsY0FBYyxrQkFBa0IsTUFBTSxPQUFPLFlBQVksV0FBVyxnQkFBZ0Isb0JBQW9CLFdBQVcsT0FBTyxvckJBQW9yQixrQkFBa0IseURBQXlELGdCQUFnQiwyREFBMkQsZ0JBQWdCLDJDQUEyQyxhQUFhLDRCQUE0QixjQUFjLG9DQUFvQyxPQUFPLHNCQUFzQixnQkFBZ0Isa0JBQWtCLDZEQUE2RCxrQkFBa0IsTUFBTSxPQUFPLHNCQUFzQiw2RUFBNkUsV0FBVywrRUFBK0UsWUFBWSxnRkFBZ0YsV0FBVyxrRkFBa0YsWUFBWSxzQkFBc0Isa0JBQWtCLE1BQU0sT0FBTyxXQUFXLFdBQVcsWUFBWSxZQUFZLDZCQUE2QixvQkFBb0IsY0FBYyxnQkFBZ0IsVUFBVSw2QkFBNkIsY0FBYyxrQkFBa0IsTUFBTSxPQUFPLFlBQVksV0FBVyxnQkFBZ0Isb0JBQW9CLFdBQVcsbUJBQW1CO0FBQzNtRztBQUNlLHNGQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixxQkFBcUI7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUNqRWE7O0FBRWIsaUNBQWlDLDJIQUEySDs7QUFFNUosNkJBQTZCLGtLQUFrSzs7QUFFL0wsaURBQWlELGdCQUFnQixnRUFBZ0Usd0RBQXdELDZEQUE2RCxzREFBc0Qsa0hBQWtIOztBQUU5WixzQ0FBc0MsdURBQXVELHVDQUF1QyxTQUFTLE9BQU8sa0JBQWtCLEVBQUUsYUFBYTs7QUFFckwsd0NBQXdDLGdGQUFnRixlQUFlLGVBQWUsZ0JBQWdCLG9CQUFvQixNQUFNLDBDQUEwQywrQkFBK0IsYUFBYSxxQkFBcUIsbUNBQW1DLEVBQUUsRUFBRSxjQUFjLFdBQVcsVUFBVSxFQUFFLFVBQVUsTUFBTSxpREFBaUQsRUFBRSxVQUFVLGtCQUFrQixFQUFFLEVBQUUsYUFBYTs7QUFFdmUsK0JBQStCLG9DQUFvQzs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7OztBQy9CQTtBQUNBLE1BQU0sSUFBMEM7QUFDaEQsSUFBSSxpQ0FBTyxFQUFFLG9DQUFFLE9BQU87QUFBQTtBQUFBO0FBQUEsb0dBQUM7QUFDdkIsR0FBRyxNQUFNLEVBSU47QUFDSCxDQUFDO0FBQ0Q7O0FBRUE7QUFDQSxtQ0FBbUMsV0FBVzs7QUFFOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIsZUFBZTtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VVg1Q1MsU0FBSSxDQUFDLFNBQVM7Z0VBRHRCLHdEQVlPOztRQVZKLEtBQUssRUFBRSxTQUFJLENBQUMsS0FBSztRQUNqQixZQUFVLEVBQUUsVUFBSztRQUNsQixLQUFLLEVBQUMsa0JBQWtCO1FBQ3ZCLFlBQVUsMENBQUUsK0NBQVk7UUFDeEIsWUFBVSwwQ0FBRSwrQ0FBWTtRQUN4QixPQUFLLDBDQUFFLHFDQUFPOztRQUVmLHdEQUVTO1VBRkYsS0FBSyxFQUFFLFNBQUksQ0FBQyxRQUFRO1VBQUcsS0FBSyxFQUFFLFNBQUksQ0FBQyxRQUFRO3VFQUNoRCxTQUFJLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUNUVCxLQUFLLEVBQUMsdUNBQXVDOzs7O0VBeUUzQyxLQUFLLEVBQUMsdUNBQXVDOzs7Ozs7Ozs7Ozs7bUVBMUV0RCx3REF1Rk07SUF2RkQsS0FBSyxFQUFDLFlBQVk7SUFBRSxLQUFLLEVBQUUsaUJBQVk7O0tBQ2UsbUJBQWM7a0VBQXZFLHdEQVFNLE9BUk4sVUFRTTtVQVBKLHdEQU1FO1lBTEMsSUFBSSxFQUFFLGVBQVU7WUFDaEIsS0FBSyxFQUFFLFVBQUs7WUFDWixVQUFVLEVBQUUsZUFBVTtZQUN0QixpQkFBZSxFQUFFLG1CQUFjO1lBQy9CLFFBQU0sRUFBRSxrQkFBYTs7OztJQUkxQix1REFlTztNQWJKLElBQUksRUFBRSxTQUFJO01BQ1YsSUFBSSxFQUFFLFNBQUk7TUFDVixTQUFVLEVBQUUsY0FBUztNQUNyQixRQUFTLEVBQUUsYUFBUTtPQUx0QixDQWVPO09BUEcsZUFBVTtvRUFEbEIsd0RBT0U7O1lBTEMsSUFBSSxFQUFFLFNBQUk7WUFDVixJQUFJLEVBQUUsZUFBVTtZQUNoQixZQUFVLEVBQUUsY0FBUztZQUNyQixXQUFTLEVBQUUsYUFBUTtZQUNuQixRQUFNLEVBQUUsYUFBUTs7OzsrREFJckIsd0RBU0U7TUFQQSxLQUFLLEVBQUMsMkJBQTJCO01BQ2hDLElBQUksRUFBRSxTQUFJO01BQ1YsSUFBSSxFQUFFLGVBQVU7TUFDakIsRUFBRSxFQUFDLFFBQVE7TUFDWCxJQUFJLEVBQUMsUUFBUTtNQUNaLE1BQU0sRUFBRSxpQkFBWTtNQUNwQixhQUFXLEVBQUUsZUFBVTs7a0RBUGhCLGlCQUFZOzsrREFTdEIsd0RBdUJrQjtNQXJCaEIsR0FBRyxFQUFDLGdCQUFnQjtNQUNuQixLQUFLLEVBQUUsdUJBQWtCO01BQ3pCLGVBQWEsRUFBRSxFQUFFO01BQ2xCLEtBQUssRUFBQyxVQUFVO01BQ2YsTUFBTSxFQUFFLEdBQUc7TUFDWixXQUFTLEVBQUMsSUFBSTtNQUNiLGFBQVcsRUFBRSxJQUFJO01BQ2pCLFFBQU0sRUFBRSxtQkFBYzs7bUVBR3JCLENBU3NCLEVBVkosSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLO1FBQ3JDLHdEQVNzQjtVQVRBLElBQUksRUFBRSxJQUFJO1VBQUcsTUFBTSxFQUFFLE1BQU07VUFBRyxZQUFVLEVBQUUsS0FBSzs7dUVBQ25FLENBT0U7dUVBUEYsd0RBT0U7Y0FMQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVU7Y0FDckIsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtjQUNwQixJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJO2NBQ3hCLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07Y0FDNUIsYUFBVyxFQUFFLElBQUksQ0FBQyxVQUFVOzswREFMckIsSUFBSTs7Ozs7Ozs7bURBYlQsaUJBQVk7O0lBd0J2Qix1REF1Qk87TUFyQkosSUFBSSxFQUFFLFNBQUk7TUFDVixLQUFLLEVBQUUsVUFBSztNQUNaLEtBQUssRUFBRSxpQkFBWTtNQUNuQixTQUFVLEVBQUUsY0FBUztNQUNyQixhQUFlLEVBQUUsa0JBQWE7TUFDOUIsVUFBVyxFQUFFLGVBQVU7TUFDdkIsU0FBVSxFQUFFLGNBQVM7TUFDckIsWUFBYyxFQUFFLGlCQUFZO09BVC9CLENBdUJPO09BWm9ELGdCQUFXO29FQUFwRSx3REFXTSxPQVhOLFVBV007WUFWSix3REFTRTtjQVJDLElBQUksRUFBRSxTQUFJO2NBQ1YsS0FBSyxFQUFFLFVBQUs7Y0FDWixLQUFLLEVBQUUsaUJBQVk7Y0FDbkIsWUFBVSxFQUFFLGNBQVM7Y0FDckIsaUJBQWUsRUFBRSxrQkFBYTtjQUM5QixhQUFXLEVBQUUsZUFBVTtjQUN2QixZQUFVLEVBQUUsY0FBUztjQUNyQixnQkFBYyxFQUFFLGlCQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQ2xGOUIsS0FBSyxFQUFDLHVDQUF1Qzs7OztFQWdFM0MsS0FBSyxFQUFDLHVDQUF1Qzs7Ozs7Ozs7O21FQWpFdEQsd0RBOEVNO0lBOUVELEtBQUssRUFBQyw4QkFBOEI7SUFBRSxLQUFLLEVBQUUsaUJBQVk7O0tBQ0gsbUJBQWM7a0VBQXZFLHdEQVNNLE9BVE4sVUFTTTtVQVJKLHdEQU9FO1lBTkMsSUFBSSxFQUFFLFNBQUk7WUFDVixJQUFJLEVBQUUsZUFBVTtZQUNoQixLQUFLLEVBQUUsVUFBSztZQUNaLFVBQVUsRUFBRSxlQUFVO1lBQ3RCLGlCQUFlLEVBQUUsbUJBQWM7WUFDL0IsT0FBSyxFQUFFLGtCQUFhOzs7O0lBSXpCLHVEQWdCTztNQWRKLElBQUksRUFBRSxTQUFJO01BQ1YsSUFBSSxFQUFFLFNBQUk7TUFDVixTQUFVLEVBQUUsY0FBUztNQUNyQixRQUFTLEVBQUUsYUFBUTtPQUx0QixDQWdCTztPQVJHLGVBQVU7b0VBRGxCLHdEQVFFOztZQU5BLEdBQUcsRUFBQyxRQUFRO1lBQ1gsSUFBSSxFQUFFLFNBQUk7WUFDVixJQUFJLEVBQUUsZUFBVTtZQUNoQixZQUFVLEVBQUUsY0FBUztZQUNyQixXQUFTLEVBQUUsYUFBUTtZQUNuQixRQUFNLEVBQUUsYUFBUTs7OztJQUlyQix3REFzQk07TUF0QkQsS0FBSyxFQUFDLG1CQUFtQjtNQUFDLEdBQUcsRUFBQyxXQUFXO01BQUUsUUFBTSwwQ0FBRSx1Q0FBUTs7aUVBQzlELHdEQVFFO1FBTkMsSUFBSSxFQUFFLFNBQUk7UUFDVixJQUFJLEVBQUUsZUFBVTtRQUNqQixFQUFFLEVBQUMsUUFBUTtRQUNYLElBQUksRUFBQyxRQUFRO1FBQ1osTUFBTSxFQUFFLGlCQUFZO1FBQ3BCLGFBQVcsRUFBRSxlQUFVOztvREFOaEIsaUJBQVk7O29FQVF0Qix3REFXRSwyR0FWbUIsdUJBQWtCLEdBQTlCLFFBQVE7b0lBRGpCLHdEQVdFO1VBUkEsR0FBRyxFQUFDLFlBQVk7VUFDZixHQUFHLEVBQUUsUUFBUSxDQUFDLEVBQUU7VUFDaEIsSUFBSSxFQUFFLFNBQUk7VUFDVixJQUFJLEVBQUUsZUFBVTtVQUNoQixFQUFFLEVBQUUsUUFBUSxDQUFDLEVBQUU7VUFDZixJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUk7VUFDbkIsTUFBTSxFQUFFLFFBQVEsQ0FBQyxNQUFNO1VBQ3ZCLGFBQVcsRUFBRSxlQUFVOzt1REFSZixpQkFBWSxLQUFLLG1CQUFjLElBQUksUUFBUSxLQUFLLG1CQUFjOzs7O0lBWTNFLHVEQXVCTztNQXJCSixJQUFJLEVBQUUsU0FBSTtNQUNWLEtBQUssRUFBRSxVQUFLO01BQ1osS0FBSyxFQUFFLGlCQUFZO01BQ25CLFNBQVUsRUFBRSxjQUFTO01BQ3JCLGFBQWUsRUFBRSxrQkFBYTtNQUM5QixVQUFXLEVBQUUsZUFBVTtNQUN2QixTQUFVLEVBQUUsY0FBUztNQUNyQixZQUFjLEVBQUUsaUJBQVk7T0FUL0IsQ0F1Qk87T0Fab0QsZ0JBQVc7b0VBQXBFLHdEQVdNLE9BWE4sVUFXTTtZQVZKLHdEQVNFO2NBUkMsSUFBSSxFQUFFLFNBQUk7Y0FDVixLQUFLLEVBQUUsVUFBSztjQUNaLEtBQUssRUFBRSxpQkFBWTtjQUNuQixZQUFVLEVBQUUsY0FBUztjQUNyQixpQkFBZSxFQUFFLGtCQUFhO2NBQzlCLGFBQVcsRUFBRSxlQUFVO2NBQ3ZCLFlBQVUsRUFBRSxjQUFTO2NBQ3JCLGdCQUFjLEVBQUUsaUJBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkN6RWxDLEtBQUssRUFBQyxvQkFBb0I7OzttRUFBL0Isd0RBV00sT0FYTixVQVdNO2tFQVZKLHdEQVNPLDJHQVJjLGVBQVUsR0FBdEIsUUFBUTt1RUFEakIsd0RBU087UUFQSixHQUFHLEVBQUUsUUFBUSxDQUFDLEVBQUU7UUFDaEIsS0FBSyw2REFBNkQsUUFBUSxDQUFDLEVBQUUsS0FBSyxtQkFBYyxDQUFDLEVBQUU7UUFDbkcsS0FBSyxjQUFjLFFBQVEsQ0FBQyxFQUFFLEtBQUssbUJBQWMsQ0FBQyxFQUFFLEdBQUcsVUFBSztRQUM1RCxZQUFVLEVBQUUsU0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUN2QyxPQUFLLGFBQUUsVUFBSyxXQUFXLFFBQVE7O1FBQ2hDLHdEQUFpQztVQUE1QixTQUEwQixFQUFsQixTQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7O1FBQzdCLHdEQUErRTtVQUF6RSxLQUFLLEVBQUMsdUJBQXVCO1VBQUUsS0FBSyxxQkFBcUIsVUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDUmpFLEtBQUssRUFBQywyQkFBMkI7O3FCQXlCL0IsS0FBSyxFQUFDLDZCQUE2Qjs7Ozs7VUExQjhDLGNBQVMsS0FBSyxhQUFRLElBQUksZUFBVTtnRUFBOUgsd0RBNEJNOztRQTVCQSxLQUFLLDJEQUEyRCxlQUFVOztRQUM5RSx3REFFTSxPQUZOLFVBRU07VUFESix3REFBc0MsMEVBQTdCLFNBQUksQ0FBQyxVQUFVLENBQUMsT0FBRTs7c0VBRzdCLHdEQVdXLDJHQVhvQyxpQkFBWSxLQUF4QyxXQUFXLEVBQUUsU0FBUzs7YUFFL0IsU0FBUyxDQUFDLFNBQVM7MEVBRDNCLHdEQVNPOztrQkFQSixZQUFVLEVBQUUsV0FBVyxDQUFDLFVBQVU7a0JBQ2xDLEtBQUssRUFBRSxTQUFTLENBQUMsS0FBSztrQkFDdkIsS0FBSyxFQUFDLGtCQUFrQjtrQkFDdkIsWUFBVSxhQUFFLGVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVE7a0JBQ2pELFlBQVUsYUFBRSxlQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRO2tCQUNqRCxPQUFLLGFBQUUsZUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUTs7a0JBQzdDLHdEQUEyRjtvQkFBbkYsS0FBSyxFQUFFLFNBQVMsQ0FBQyxRQUFRO29CQUFHLEtBQUssRUFBRSxTQUFTLENBQUMsUUFBUTtpRkFBSSxTQUFTLENBQUMsT0FBTzs7Ozs7VUFJMUUsZUFBVSxJQUFJLFNBQUk7c0VBQTlCLHdEQVNNO2NBUkosd0RBTUU7Z0JBTEMsSUFBSSxFQUFFLFNBQUk7Z0JBQ1gsS0FBSyxFQUFDLGVBQWU7Z0JBQ3BCLE1BQU0sRUFBRSxlQUFVLENBQUMsTUFBTTtnQkFDekIsSUFBSSxFQUFFLGVBQVUsQ0FBQyxJQUFJO2dCQUNyQixHQUFHLEVBQUUsZUFBVSxDQUFDLEdBQUc7O2NBRXRCLHdEQUFrRSxPQUFsRSxVQUFrRSw4REFBdEIsU0FBSSxDQUFDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQzFCeEQsS0FBSyxFQUFDLG9CQUFvQjtxQkFFcEIsS0FBSyxFQUFDLDBCQUEwQjtxQkFVaEMsS0FBSyxFQUFDLHlCQUF5QjtxQkFDN0IsS0FBSyxFQUFDLHlCQUF5QjtxQkFDL0IsS0FBSyxFQUFDLCtCQUErQjtxQkFHckMsS0FBSyxFQUFDLDhCQUE4QjtxQkFPeEMsS0FBSyxFQUFDLDBCQUEwQjtxQkFVaEMsS0FBSyxFQUFDLHlCQUF5QjtxQkFDNUIsS0FBSyxFQUFDLHdCQUF3Qjs7O0VBR1osS0FBSyxFQUFDLDBCQUEwQjs7Ozs7OzttRUF0QzlELHdEQTBDTSxPQTFDTixVQTBDTTtLQXpDWSxVQUFLO2tFQUFyQix3REFvQlc7VUFuQlAsd0RBUU0sT0FSTixVQVFNO1lBUEosd0RBTUU7Y0FMQyxJQUFJLEVBQUUsU0FBSTtjQUNWLEtBQUssRUFBRSxVQUFLO2NBQ1osTUFBTSxFQUFFLGVBQVUsQ0FBQyxNQUFNO2NBQ3pCLElBQUksRUFBRSxlQUFVLENBQUMsSUFBSTtjQUNyQixHQUFHLEVBQUUsZUFBVSxDQUFDLEdBQUc7OztVQUl4Qix3REFRTSxPQVJOLFVBUU07WUFQSix3REFBMkQsT0FBM0QsVUFBMkQsOERBQW5CLFVBQUssQ0FBQyxJQUFJO1lBQ2xELHdEQUVNLE9BRk4sVUFFTTs0RUFESix3REFBeUgsMkdBQS9GLG9CQUFlLEdBQTVCLFNBQVM7aUZBQXRCLHdEQUF5SDtrQkFBN0UsR0FBRyxFQUFFLFNBQVM7a0JBQUUsS0FBSyxFQUFDLDhCQUE4QjttQkFBQyxHQUFDLCtEQUFHLFNBQVMsSUFBRyxHQUFDOzs7WUFFcEgsd0RBRU0sT0FGTixVQUVNOzRFQURKLHdEQUFrSCwyR0FBekYsbUJBQWMsR0FBMUIsUUFBUTtpRkFBckIsd0RBQWtIO2tCQUF4RSxHQUFHLEVBQUUsUUFBUTtrQkFBRSxLQUFLLEVBQUMsNkJBQTZCOytFQUFJLFFBQVE7Ozs7O2tFQUtoSCx3REFrQlc7VUFqQlQsd0RBUU0sT0FSTixVQVFNO1lBUEosd0RBTUU7Y0FMQyxJQUFJLEVBQUUsU0FBSTtjQUNWLEtBQUssRUFBRSxjQUFTO2NBQ2hCLE1BQU0sRUFBRSxlQUFVLENBQUMsTUFBTTtjQUN6QixJQUFJLEVBQUUsZUFBVSxDQUFDLElBQUk7Y0FDckIsR0FBRyxFQUFFLGVBQVUsQ0FBQyxHQUFHOzs7VUFJeEIsd0RBRU0sT0FGTixVQUVNO1lBREosd0RBQXVELFFBQXZELFVBQXVELDhEQUFmLFVBQUs7O1dBR3BDLGtCQUFhO3dFQUF4Qix3REFFTSxPQUZOLFdBRU07Z0JBREosd0RBQStEO2tCQUF2RCxJQUFJLEVBQUUsY0FBUyxDQUFDLElBQUk7a0JBQUcsUUFBTSx1Q0FBRSxpQkFBWSxDQUFDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkN4Q3pELEtBQUssRUFBQyxtQkFBbUI7OzttRUFBOUIsd0RBRU0sT0FGTixVQUVNOytEQURKLHdEQUE4RDtNQUF2RCxJQUFJLEVBQUMsTUFBTTtNQUFFLFdBQVcsRUFBRSxTQUFJLENBQUMsTUFBTTtrRUFBVyxVQUFLOzt1REFBTCxVQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21FQ0FoRSx3REFJTTtJQUpBLEtBQUsseUVBQXlFLFdBQU07OzhEQUN4Rix3REFFTywyR0FGa0IsQ0FBQyxHQUFiLFFBQVE7YUFBckIsd0RBRU87UUFGc0IsR0FBRyxFQUFFLFFBQVE7UUFBRyxLQUFLLHVFQUF1RSxTQUFJLEtBQUssUUFBUTs7UUFDeEksd0RBQW9HO1VBQTdGLEtBQUssNENBQTRDLFFBQVE7VUFBRyxPQUFLLGFBQUUsWUFBTyxDQUFDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FLSjlGO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXlDOztBQUV6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsaUJBQWlCO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjs7QUFFQTs7QUFFQSxlQUFlLDZEQUFZO0FBQzNCOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsbUJBQW1CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsNkRBQVk7QUFDM0I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBLHVCQUF1QiwyQkFBMkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJCQUEyQjtBQUNoRDtBQUNBO0FBQ0EsWUFBWSx1QkFBdUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHFCQUFxQix1QkFBdUI7QUFDNUM7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3TkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0EsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsd0JBQXdCO0FBQzNELEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEU7O0FBRTlFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGtCQUFrQiwrQ0FBRztBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxxREFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJLDJEQUFlO0FBQ25CO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMscURBQVMsSUFBSSx1REFBVztBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUU7OztBQUdGO0FBQ0E7QUFDQTtBQUNBOztBQUVlLHlFQUFVLEVBQUM7QUFDbUI7QUFDN0M7Ozs7Ozs7Ozs7OztBQ3pKQTs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyx1UEFBNkY7QUFDbkgsNENBQTRDLFFBQVM7QUFDckQ7QUFDQTtBQUNBLFVBQVUsbUJBQU8sQ0FBQyw2R0FBZ0Q7QUFDbEUsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7O0FDVmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlFO0FBQ3pCO0FBQ3dMOztBQUVoTztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdDQUF3QyxTQUFTOztBQUVqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaURBQWlELGdCQUFnQjtBQUNqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEZBQTBGLGFBQWE7QUFDdkc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFROzs7QUFHUjtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPLDZCQUE2Qjs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLGFBQWEsMkRBQWU7QUFDNUI7QUFDQTtBQUNBLG9CQUFvQiwwREFBZ0I7QUFDcEMsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUNBQXlDLE9BQU87QUFDaEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNERBQTREO0FBQzVEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBOztBQUVBO0FB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Y0FBYyxzREFBVTtBQUN4QixLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtB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LE9BQU8sQ0FBQzNILENBQUQsQ0FBUCxHQUFhLDZCQUFkLENBRlI7QUFHRDs7QUFFRCxNQUFJLENBQUM0RyxNQUFNLENBQUNnQixxQkFBWixFQUNFaEIsTUFBTSxDQUFDZ0IscUJBQVAsR0FBK0IsVUFBU0UsUUFBVCxFQUFtQkMsT0FBbkIsRUFBNEI7QUFDekQsUUFBSUMsUUFBUSxHQUFHLElBQUlDLElBQUosR0FBV0MsT0FBWCxFQUFmO0FBQ0EsUUFBSUMsVUFBVSxHQUFHaFMsSUFBSSxDQUFDaVMsR0FBTCxDQUFTLENBQVQsRUFBWSxNQUFNSixRQUFRLEdBQUdOLFFBQWpCLENBQVosQ0FBakI7QUFDQSxRQUFJeE4sRUFBRSxHQUFHME0sTUFBTSxDQUFDeUIsVUFBUCxDQUFrQixZQUFXO0FBQ3BDUCxjQUFRLENBQUNFLFFBQVEsR0FBR0csVUFBWixDQUFSO0FBQ0QsS0FGUSxFQUVOQSxVQUZNLENBQVQ7QUFJQVQsWUFBUSxHQUFHTSxRQUFRLEdBQUdHLFVBQXRCO0FBQ0EsV0FBT2pPLEVBQVA7QUFDRCxHQVREO0FBV0YsTUFBSSxDQUFDME0sTUFBTSxDQUFDaUIsb0JBQVosRUFDRWpCLE1BQU0sQ0FBQ2lCLG9CQUFQLEdBQThCLFVBQVMzTixFQUFULEVBQWE7QUFDekNvTyxnQkFBWSxDQUFDcE8sRUFBRCxDQUFaO0FBQ0QsR0FGRDtBQUdILENBNUJELEVBREYsQzs7Ozs7Ozs7Ozs7QUNUQSxpRCIsImZpbGUiOiJlbW9qaS1tYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwidnVlXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInZ1ZVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJFbW9qaU1hcnRcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJ2dWVcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkVtb2ppTWFydFwiXSA9IGZhY3Rvcnkocm9vdFtcIlZ1ZVwiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV92dWVfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVyKSA9PT0gXCJbb2JqZWN0IEFyZ3VtZW50c11cIikgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5OyIsImZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mMihvYmopOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZjIoU3ltYm9sLml0ZXJhdG9yKSA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIjx0ZW1wbGF0ZT5cbiAgPHNwYW5cbiAgICB2LWlmPVwidmlldy5jYW5SZW5kZXJcIlxuICAgIDp0aXRsZT1cInZpZXcudGl0bGVcIlxuICAgIDpkYXRhLXRpdGxlPVwidGl0bGVcIlxuICAgIGNsYXNzPVwiZW1vamktbWFydC1lbW9qaVwiXG4gICAgQG1vdXNlZW50ZXI9XCJvbk1vdXNlRW50ZXJcIlxuICAgIEBtb3VzZWxlYXZlPVwib25Nb3VzZUxlYXZlXCJcbiAgICBAY2xpY2s9XCJvbkNsaWNrXCJcbiAgPlxuICAgIDxzcGFuIDpjbGFzcz1cInZpZXcuY3NzQ2xhc3NcIiA6c3R5bGU9XCJ2aWV3LmNzc1N0eWxlXCI+e3tcbiAgICAgIHZpZXcuY29udGVudFxuICAgIH19PC9zcGFuPlxuICA8L3NwYW4+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgRW1vamlQcm9wcyB9IGZyb20gJy4uL3V0aWxzL3NoYXJlZC1wcm9wcydcbmltcG9ydCB7IEVtb2ppVmlldyB9IGZyb20gJy4uL3V0aWxzL2Vtb2ppLWRhdGEnXG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIGNvbXB1dGVkLCByZWYgfSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdFbW9qaScsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi5FbW9qaVByb3BzLFxuICAgIGRhdGE6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gIH0sXG5cbiAgZW1pdHM6IFsnbW91c2VlbnRlcicsICdtb3VzZWxlYXZlJywgJ2NsaWNrJ10sXG5cbiAgc2V0dXAocHJvcHMsIHsgZW1pdCB9KSB7XG4gICAgY29uc3QgZW1vamlPYmplY3QgPSBjb21wdXRlZCgoKSA9PiB0eXBlb2YgcHJvcHMuZW1vamkgPT0gJ3N0cmluZydcbiAgICAgID8gcHJvcHMuZGF0YS5maW5kRW1vamkocHJvcHMuZW1vamkpXG4gICAgICA6IHByb3BzLmVtb2ppKVxuXG4gICAgY29uc3QgdmlldyA9IGNvbXB1dGVkKCgpID0+IG5ldyBFbW9qaVZpZXcoXG4gICAgICBlbW9qaU9iamVjdC52YWx1ZSxcbiAgICAgIHByb3BzLnNraW4sXG4gICAgICBwcm9wcy5zZXQsXG4gICAgICBwcm9wcy5uYXRpdmUsXG4gICAgICBwcm9wcy5mYWxsYmFjayxcbiAgICAgIHByb3BzLnRvb2x0aXAsXG4gICAgICBwcm9wcy5zaXplLFxuICAgICkpXG5cbiAgICBjb25zdCBzYW5pdGl6ZWREYXRhID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIGVtb2ppT2JqZWN0LnZhbHVlLl9zYW5pdGl6ZWRcbiAgICB9KVxuXG4gICAgY29uc3QgdGl0bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICByZXR1cm4gcHJvcHMudG9vbHRpcCA/IGVtb2ppT2JqZWN0LnZhbHVlLnNob3J0X25hbWUgOiBudWxsXG4gICAgfSlcblxuICAgIHJldHVybiB7XG4gICAgICB2aWV3LFxuICAgICAgdGl0bGUsXG4gICAgICBvbkNsaWNrOiAoKSA9PiBlbWl0KCdjbGljaycsIGVtb2ppT2JqZWN0LnZhbHVlKSxcbiAgICAgIG9uTW91c2VFbnRlcjooKSA9PiBlbWl0KCdtb3VzZWVudGVyJywgZW1vamlPYmplY3QudmFsdWUpLFxuICAgICAgb25Nb3VzZUxlYXZlOigpID0+IGVtaXQoJ21vdXNlbGVhdmUnLCBlbW9qaU9iamVjdC52YWx1ZSksXG4gICAgICBlbW9qaU9iamVjdCwgLy8gdXNlIGplc3QgdW5pdFxuICAgICAgc2FuaXRpemVkRGF0YSwgLy8gdXNlIGplc3QgdW5pdFxuICAgIH1cbiAgfVxufSlcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydFwiIDpzdHlsZT1cImN1c3RvbVN0eWxlc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LWJhciBlbW9qaS1tYXJ0LWJhci1hbmNob3JzXCIgdi1pZj1cInNob3dDYXRlZ29yaWVzXCI+XG4gICAgICA8YW5jaG9yc1xuICAgICAgICA6aTE4bj1cIm1lcmdlZEkxOG5cIlxuICAgICAgICA6Y29sb3I9XCJjb2xvclwiXG4gICAgICAgIDpjYXRlZ29yaWVzPVwiY2F0ZWdvcmllc1wiXG4gICAgICAgIDphY3RpdmUtY2F0ZWdvcnk9XCJhY3RpdmVDYXRlZ29yeVwiXG4gICAgICAgIEBjaGFuZ2U9XCJvbkFuY2hvckNsaWNrXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG5cbiAgICA8c2xvdFxuICAgICAgbmFtZT1cInNlYXJjaFRlbXBsYXRlXCJcbiAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICA6aTE4bj1cImkxOG5cIlxuICAgICAgOmF1dG8tZm9jdXM9XCJhdXRvRm9jdXNcIlxuICAgICAgOm9uLXNlYXJjaD1cIm9uU2VhcmNoXCJcbiAgICA+XG4gICAgICA8c2VhcmNoXG4gICAgICAgIHYtaWY9XCJzaG93U2VhcmNoXCJcbiAgICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgICAgOmkxOG49XCJtZXJnZWRJMThuXCJcbiAgICAgICAgOmF1dG8tZm9jdXM9XCJhdXRvRm9jdXNcIlxuICAgICAgICA6b24tc2VhcmNoPVwib25TZWFyY2hcIlxuICAgICAgICBAc2VhcmNoPVwib25TZWFyY2hcIlxuICAgICAgLz5cbiAgICA8L3Nsb3Q+XG5cbiAgICA8Y2F0ZWdvcnlcbiAgICAgIHYtc2hvdz1cInNlYXJjaEVtb2ppc1wiXG4gICAgICBjbGFzcz1cImVtb2ppLW1hcnQtc2VhcmNoLXJlc3VsdHNcIlxuICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgIDppMThuPVwibWVyZ2VkSTE4blwiXG4gICAgICBpZD1cInNlYXJjaFwiXG4gICAgICBuYW1lPVwiU2VhcmNoXCJcbiAgICAgIDplbW9qaXM9XCJzZWFyY2hFbW9qaXNcIlxuICAgICAgOmVtb2ppLXByb3BzPVwiZW1vamlQcm9wc1wiXG4gICAgLz5cbiAgICA8RHluYW1pY1Njcm9sbGVyXG4gICAgICB2LXNob3c9XCIhc2VhcmNoRW1vamlzXCJcbiAgICAgIHJlZj1cImR5blNjcm9sbGVyUmVmXCJcbiAgICAgIDppdGVtcz1cInNjcm9sbGVyQ2F0ZWdvcmllc1wiXG4gICAgICA6bWluLWl0ZW0tc2l6ZT1cIjYwXCJcbiAgICAgIGNsYXNzPVwic2Nyb2xsZXJcIlxuICAgICAgOmJ1ZmZlcj1cIjQwMFwiXG4gICAgICBrZXktZmllbGQ9XCJpZFwiXG4gICAgICA6ZW1pdC11cGRhdGU9XCJ0cnVlXCJcbiAgICAgIEB1cGRhdGU9XCJvblNjcm9sbFVwZGF0ZVwiXG4gICAgPlxuICAgICAgPHRlbXBsYXRlIHYtc2xvdD1cInsgaXRlbSwgYWN0aXZlLCBpbmRleCB9XCI+XG4gICAgICAgIDxEeW5hbWljU2Nyb2xsZXJJdGVtIDppdGVtPVwiaXRlbVwiIDphY3RpdmU9XCJhY3RpdmVcIiA6ZGF0YS1pbmRleD1cImluZGV4XCI+XG4gICAgICAgICAgPENhdGVnb3J5XG4gICAgICAgICAgICB2LXNob3c9XCJ0cnVlXCJcbiAgICAgICAgICAgIDppMThuPVwiaXRlbS5tZXJnZWRJMThuXCJcbiAgICAgICAgICAgIDppZD1cIml0ZW0uY2F0ZWdvcnkuaWRcIlxuICAgICAgICAgICAgOm5hbWU9XCJpdGVtLmNhdGVnb3J5Lm5hbWVcIlxuICAgICAgICAgICAgOmVtb2ppcz1cIml0ZW0uY2F0ZWdvcnkuZW1vamlzXCJcbiAgICAgICAgICAgIDplbW9qaS1wcm9wcz1cIml0ZW0uZW1vamlQcm9wc1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9EeW5hbWljU2Nyb2xsZXJJdGVtPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L0R5bmFtaWNTY3JvbGxlcj5cblxuICAgIDxzbG90XG4gICAgICBuYW1lPVwicHJldmlld1RlbXBsYXRlXCJcbiAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICA6dGl0bGU9XCJ0aXRsZVwiXG4gICAgICA6ZW1vamk9XCJwcmV2aWV3RW1vamlcIlxuICAgICAgOmlkbGUtZW1vamk9XCJpZGxlRW1vamlcIlxuICAgICAgOnNob3ctc2tpbi10b25lcz1cInNob3dTa2luVG9uZXNcIlxuICAgICAgOmVtb2ppLXByb3BzPVwiZW1vamlQcm9wc1wiXG4gICAgICA6c2tpbi1wcm9wcz1cInNraW5Qcm9wc1wiXG4gICAgICA6b24tc2tpbi1jaGFuZ2U9XCJvblNraW5DaGFuZ2VcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LWJhciBlbW9qaS1tYXJ0LWJhci1wcmV2aWV3XCIgdi1pZj1cInNob3dQcmV2aWV3XCI+XG4gICAgICAgIDxwcmV2aWV3XG4gICAgICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgICAgICA6dGl0bGU9XCJ0aXRsZVwiXG4gICAgICAgICAgOmVtb2ppPVwicHJldmlld0Vtb2ppXCJcbiAgICAgICAgICA6aWRsZS1lbW9qaT1cImlkbGVFbW9qaVwiXG4gICAgICAgICAgOnNob3ctc2tpbi10b25lcz1cInNob3dTa2luVG9uZXNcIlxuICAgICAgICAgIDplbW9qaS1wcm9wcz1cImVtb2ppUHJvcHNcIlxuICAgICAgICAgIDpza2luLXByb3BzPVwic2tpblByb3BzXCJcbiAgICAgICAgICA6b24tc2tpbi1jaGFuZ2U9XCJvblNraW5DaGFuZ2VcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9zbG90PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgJy4uL3ZlbmRvci9yYWYtcG9seWZpbGwnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vdXRpbHMvc3RvcmUnXG5pbXBvcnQgZnJlcXVlbnRseSBmcm9tICcuLi91dGlscy9mcmVxdWVudGx5J1xuaW1wb3J0IHsgZGVlcE1lcmdlLCBtZWFzdXJlU2Nyb2xsYmFyIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBQaWNrZXJQcm9wcyB9IGZyb20gJy4uL3V0aWxzL3NoYXJlZC1wcm9wcydcbmltcG9ydCBBbmNob3JzIGZyb20gJy4vYW5jaG9ycydcbmltcG9ydCBDYXRlZ29yeSBmcm9tICcuL2NhdGVnb3J5J1xuaW1wb3J0IFByZXZpZXcgZnJvbSAnLi9wcmV2aWV3J1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL3NlYXJjaCdcblxuLypcbiAqIE5vdGUgYWJvdXQgYGJ1ZmZlcmAgc2V0dGluZyBmb3IgRHluYW1pY1Njcm9sbGVyOiB0aGlzIGlzIGFcbiAqIGZpeCBmb3IgIzQ5IC0gd2hlbiBjbGlja2luZyBvbiB0aGUgXCJGbGFnc1wiIGNhdGVnb3J5IGZvciB0aGUgZmlyc3RcbiAqIHRpbWUsIHRoZSBjYXRlZ29yeSBpcyBub3Qgc2Nyb2xsZWQgdG8gdGhlIHRvcCBvZiB0aGUgY29tcG9uZW50LlxuICogVGhpcyBpcyBiZWNhdXNlIHRoZSBsYXN0IGNhdGVnb3J5IHNpemUgaXMgbm90IGNhbGN1bGF0ZWQgeWV0IGFuZFxuICogdmlydHVhbCBzY3JvbGxlciB0YWtlcyAnbWluSXRlbVNpemUnIGFzIGNhdGVnb3J5IGhlaWdodC5cbiAqXG4gKiBWaXJ0dWFsIHNjcm9sbGVyIChSZWN5Y2xlU2Nyb2xsZXIgY29tcG9uZW50KSB1c2VzIGBidWZmZXJgIHZhbHVlXG4gKiB0byAgZGVjaWRlIGhvdyBtYW55IGNvbXBvbmVudHMgdG8gcmVuZGVyIGludGl0aWFsbHkgZGVwZW5kaW5nIG9uXG4gKiB0aGUgc2Nyb2xsIGFyZWEgc2l6ZSArIGJ1ZmZlcioyIChhbmQgYWxsIGNhdGVnb3JpZXMgaW5pdGlhbGx5XG4gKiBoYXZlIG1pbiBzaXplLCA2MHB4KS5cbiAqXG4gKiBCeSBpbmNyZWFzaW5nIGJ1ZmZlciB0byA0MDBweCwgd2UgbWFrZSB0aGUgc2Nyb2xsZXIgdG8gcGVyZm9ybVxuICogc2l6ZSBjYWxjdWxhdGlvbiBmb3IgYWxsIGNhdGVnb3JpZXMgYW5kIHRoZSBmb2xsb3dpbmdcbiAqIHNjcm9sbFRvSXRlbSgpIGNhbGxzIHdvcmsgY29ycmVjdGx5LlxuICovXG5cbmltcG9ydCB7IER5bmFtaWNTY3JvbGxlciwgRHluYW1pY1Njcm9sbGVySXRlbSB9IGZyb20gJ3Z1ZTMtdmlydHVhbC1zY3JvbGxlcidcbmltcG9ydCAndnVlMy12aXJ0dWFsLXNjcm9sbGVyL2Rpc3QvdnVlMy12aXJ0dWFsLXNjcm9sbGVyLmNzcydcblxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCBjb21wdXRlZCwgcmVmIH0gZnJvbSAndnVlJ1xuXG5jb25zdCBJMThOID0ge1xuICBzZWFyY2g6ICdTZWFyY2gnLFxuICBub3Rmb3VuZDogJ05vIEVtb2ppIEZvdW5kJyxcbiAgY2F0ZWdvcmllczoge1xuICAgIHNlYXJjaDogJ1NlYXJjaCBSZXN1bHRzJyxcbiAgICByZWNlbnQ6ICdGcmVxdWVudGx5IFVzZWQnLFxuICAgIHNtaWxleXM6ICdTbWlsZXlzICYgRW1vdGlvbicsXG4gICAgcGVvcGxlOiAnUGVvcGxlICYgQm9keScsXG4gICAgbmF0dXJlOiAnQW5pbWFscyAmIE5hdHVyZScsXG4gICAgZm9vZHM6ICdGb29kICYgRHJpbmsnLFxuICAgIGFjdGl2aXR5OiAnQWN0aXZpdHknLFxuICAgIHBsYWNlczogJ1RyYXZlbCAmIFBsYWNlcycsXG4gICAgb2JqZWN0czogJ09iamVjdHMnLFxuICAgIHN5bWJvbHM6ICdTeW1ib2xzJyxcbiAgICBmbGFnczogJ0ZsYWdzJyxcbiAgICBjdXN0b206ICdDdXN0b20nLFxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnUGlja2VyJyxcblxuICBwcm9wczoge1xuICAgIC4uLlBpY2tlclByb3BzLFxuICAgIGRhdGE6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gIH0sXG5cbiAgY29tcG9uZW50czoge1xuICAgIEFuY2hvcnMsXG4gICAgQ2F0ZWdvcnksXG4gICAgUHJldmlldyxcbiAgICBTZWFyY2gsXG4gICAgRHluYW1pY1Njcm9sbGVyLFxuICAgIER5bmFtaWNTY3JvbGxlckl0ZW0sXG4gIH0sXG5cbiAgZW1pdHM6IFsnc2VsZWN0JywgJ3NraW4tY2hhbmdlJ10sXG5cbiAgc2V0dXAocHJvcHMsIHsgZW1pdCB9KSB7XG4gICAgbGV0IHNraXBTY3JvbGxVcGRhdGUgPSBmYWxzZVxuICAgIGxldCBjYXRlZ29yaWVzID0gWy4uLnByb3BzLmRhdGEuY2F0ZWdvcmllcygpXVxuXG4gICAgY29uc3QgcHJldmlld0Vtb2ppID0gcmVmKG51bGwpXG4gICAgY29uc3Qgc2VhcmNoRW1vamlzID0gcmVmKG51bGwpXG4gICAgY29uc3QgZHluU2Nyb2xsZXJSZWYgPSByZWYobnVsbClcblxuICAgIGNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzLmZpbHRlcihjYXRlZ29yeSA9PiBjYXRlZ29yeS5lbW9qaXMubGVuZ3RoID4gMClcbiAgICBjYXRlZ29yaWVzWzBdLmZpcnN0ID0gdHJ1ZVxuICAgIE9iamVjdC5mcmVlemUoY2F0ZWdvcmllcylcblxuICAgIGNvbnN0IGFjdGl2ZUNhdGVnb3J5ID0gcmVmKGNhdGVnb3JpZXNbMF0pXG5cbiAgICBjb25zdCBjYWxjdWxhdGVXaWR0aCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiBwcm9wcy5wZXJMaW5lICogKHByb3BzLmVtb2ppU2l6ZSArIDEyKSArIDEyICsgMiArIG1lYXN1cmVTY3JvbGxiYXIoKVxuICAgIH0pXG5cbiAgICBjb25zdCBhY3RpdmVTa2luID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMuc2tpbiB8fCBzdG9yZS5nZXQoJ3NraW4nKSB8fCBwcm9wcy5kZWZhdWx0U2tpbilcblxuICAgIGNvbnN0IGN1c3RvbVN0eWxlcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiBjYWxjdWxhdGVXaWR0aC52YWx1ZSArICdweCcsXG4gICAgICAgIC4uLnByb3BzLnBpY2tlclN0eWxlcyxcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgZW1vamlQcm9wcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hdGl2ZTogcHJvcHMubmF0aXZlLFxuICAgICAgICBza2luOiBhY3RpdmVTa2luLnZhbHVlLFxuICAgICAgICBzZXQ6IHByb3BzLnNldCxcbiAgICAgICAgZW1vamlUb29sdGlwOiBwcm9wcy5lbW9qaVRvb2x0aXAsXG4gICAgICAgIGVtb2ppU2l6ZTogcHJvcHMuZW1vamlTaXplLFxuICAgICAgICBvbkVudGVyOiBvbkVtb2ppRW50ZXIsXG4gICAgICAgIG9uTGVhdmU6IG9uRW1vamlMZWF2ZSxcbiAgICAgICAgb25DbGljazogb25FbW9qaUNsaWNrLFxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBza2luUHJvcHMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBza2luOiBhY3RpdmVTa2luLnZhbHVlLFxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBtZXJnZWRJMThuID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIE9iamVjdC5mcmVlemUoZGVlcE1lcmdlKEkxOE4sIHByb3BzLmkxOG4pKVxuICAgIH0pXG5cbiAgICBjb25zdCBzY3JvbGxlckNhdGVnb3JpZXMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBsZXQgaWQgPSAwXG4gICAgICByZXR1cm4gY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWQ6IGlkKyssXG4gICAgICAgICAgY2F0ZWdvcnk6IGNhdGVnb3J5LFxuICAgICAgICAgIHNob3c6XG4gICAgICAgICAgICAhc2VhcmNoRW1vamlzLnZhbHVlICYmXG4gICAgICAgICAgICAocHJvcHMuaW5maW5pdGVTY3JvbGwgfHwgY2F0ZWdvcnkuaWQgPT09IGFjdGl2ZUNhdGVnb3J5LnZhbHVlLmlkKSxcbiAgICAgICAgICBtZXJnZWRJMThuOiBtZXJnZWRJMThuLnZhbHVlLFxuICAgICAgICAgIGRhdGE6IHByb3BzLmRhdGEsXG4gICAgICAgICAgZW1vamlzTGVuZ3RoOiBjYXRlZ29yeS5lbW9qaXMubGVuZ3RoLFxuICAgICAgICAgIGVtb2ppUHJvcHM6IGVtb2ppUHJvcHMudmFsdWUsXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIGNvbnN0IGlkbGVFbW9qaSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBwcm9wcy5kYXRhLmVtb2ppKHByb3BzLmVtb2ppKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICdEZWZhdWx0IHByZXZpZXcgZW1vamkgYCcgK1xuICAgICAgICAgIHByb3BzLmVtb2ppICtcbiAgICAgICAgICAnYCBpcyBub3QgYXZhaWxhYmxlLCBjaGVjayB0aGUgUGlja2VyIGBlbW9qaWAgcHJvcGVydHknLFxuICAgICAgICAgIGUsXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIHByb3BzLmRhdGEuZmlyc3RFbW9qaSgpXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgY29uc3Qgb25TY3JvbGxVcGRhdGUgPSAoc3RhcnRJbmRleCwgZW5kSW5kZXgpID0+IHtcbiAgICAgIGlmIChza2lwU2Nyb2xsVXBkYXRlKSB7XG4gICAgICAgIHNraXBTY3JvbGxVcGRhdGUgPSBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVGhlIGBlbmRJbmRleC0yYCBzZWVtcyB0byB3b3JrLCBidXQgdGhpcyBkZXBlbmRzIG9uIHRoZSBpbnRlcm5hbHNcbiAgICAgICAgLy8gb2YgdGhlIHZpcnR1YWwgc2Nyb2xsZXIsIEkgZGlkbid0IG9ic2VydmUgaXQgdG8gYmUgbGVzcyB0aGFuIDAsXG4gICAgICAgIC8vIGJ1dCBqdXN0IGZvciB0aGUgY2FzZSwgd2UgYXNsbyBoYXZlIGEgZmFsbGJhY2sgdG8gYDBgIGhlcmUuXG4gICAgICAgIGxldCBhY3RpdmVJbmRleCA9IGVuZEluZGV4IC0gMiA+IDAgPyBlbmRJbmRleCAtIDIgOiAwXG4gICAgICAgIGFjdGl2ZUNhdGVnb3J5LnZhbHVlID0gY2F0ZWdvcmllc1thY3RpdmVJbmRleF1cbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgb25BbmNob3JDbGljayA9IChjYXRlZ29yeSkgPT4ge1xuICAgICAgbGV0IGkgPSBjYXRlZ29yaWVzLmZpbmRJbmRleChlID0+IGUuaWQgPT09IGNhdGVnb3J5LmlkKVxuICAgICAgaWYgKGR5blNjcm9sbGVyUmVmLnZhbHVlKSB7XG4gICAgICAgIGR5blNjcm9sbGVyUmVmLnZhbHVlLnNjcm9sbFRvSXRlbShpKVxuICAgICAgfVxuXG4gICAgICBhY3RpdmVDYXRlZ29yeS52YWx1ZSA9IGNhdGVnb3JpZXMuZmluZChlID0+IGUuaWQgPT09IGNhdGVnb3J5LmlkKVxuICAgICAgc2tpcFNjcm9sbFVwZGF0ZSA9IHRydWVcbiAgICB9XG4gICAgY29uc3Qgb25TZWFyY2ggPSAodmFsdWUpID0+IHtcbiAgICAgIHNlYXJjaEVtb2ppcy52YWx1ZSA9IHByb3BzLmRhdGEuc2VhcmNoKHZhbHVlLCBwcm9wcy5tYXhTZWFyY2hSZXN1bHRzKVxuICAgIH1cbiAgICBjb25zdCBvbkVtb2ppRW50ZXIgPSAoZW1vamkpID0+IHtcbiAgICAgIHByZXZpZXdFbW9qaS52YWx1ZSA9IGVtb2ppXG4gICAgfVxuICAgIGNvbnN0IG9uRW1vamlMZWF2ZSA9ICgpID0+IHtcbiAgICAgIHByZXZpZXdFbW9qaS52YWx1ZSA9IG51bGxcbiAgICB9XG4gICAgY29uc3Qgb25FbW9qaUNsaWNrID0gKGVtb2ppKSA9PiB7XG4gICAgICBlbWl0KCdzZWxlY3QnLCBlbW9qaSlcbiAgICAgIGZyZXF1ZW50bHkuYWRkKGVtb2ppKVxuICAgIH1cbiAgICBjb25zdCBvblNraW5DaGFuZ2UgPSAoc2tpbikgPT4ge1xuICAgICAgYWN0aXZlU2tpbi52YWx1ZSA9IHNraW5cbiAgICAgIHN0b3JlLnVwZGF0ZSh7IHNraW4gfSlcblxuICAgICAgZW1pdCgnc2tpbi1jaGFuZ2UnLCBza2luKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBkeW5TY3JvbGxlclJlZixcbiAgICAgIGFjdGl2ZUNhdGVnb3J5LFxuICAgICAgcHJldmlld0Vtb2ppLFxuICAgICAgc2VhcmNoRW1vamlzLFxuICAgICAgY2F0ZWdvcmllcyxcblxuICAgICAgY3VzdG9tU3R5bGVzLFxuICAgICAgbWVyZ2VkSTE4bixcbiAgICAgIG9uQW5jaG9yQ2xpY2ssXG4gICAgICBvblNlYXJjaCxcbiAgICAgIGVtb2ppUHJvcHMsXG4gICAgICBzY3JvbGxlckNhdGVnb3JpZXMsXG4gICAgICBvblNjcm9sbFVwZGF0ZSxcbiAgICAgIGlkbGVFbW9qaSxcbiAgICAgIHNraW5Qcm9wcyxcbiAgICAgIG9uU2tpbkNoYW5nZSxcbiAgICB9XG4gIH1cbn0pXG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQgZW1vamktbWFydC1zdGF0aWNcIiA6c3R5bGU9XCJjdXN0b21TdHlsZXNcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1iYXIgZW1vamktbWFydC1iYXItYW5jaG9yc1wiIHYtaWY9XCJzaG93Q2F0ZWdvcmllc1wiPlxuICAgICAgPGFuY2hvcnNcbiAgICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgICAgOmkxOG49XCJtZXJnZWRJMThuXCJcbiAgICAgICAgOmNvbG9yPVwiY29sb3JcIlxuICAgICAgICA6Y2F0ZWdvcmllcz1cImNhdGVnb3JpZXNcIlxuICAgICAgICA6YWN0aXZlLWNhdGVnb3J5PVwiYWN0aXZlQ2F0ZWdvcnlcIlxuICAgICAgICBAY2xpY2s9XCJvbkFuY2hvckNsaWNrXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG5cbiAgICA8c2xvdFxuICAgICAgbmFtZT1cInNlYXJjaFRlbXBsYXRlXCJcbiAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICA6aTE4bj1cImkxOG5cIlxuICAgICAgOmF1dG8tZm9jdXM9XCJhdXRvRm9jdXNcIlxuICAgICAgOm9uLXNlYXJjaD1cIm9uU2VhcmNoXCJcbiAgICA+XG4gICAgICA8c2VhcmNoXG4gICAgICAgIHYtaWY9XCJzaG93U2VhcmNoXCJcbiAgICAgICAgcmVmPVwic2VhcmNoXCJcbiAgICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgICAgOmkxOG49XCJtZXJnZWRJMThuXCJcbiAgICAgICAgOmF1dG8tZm9jdXM9XCJhdXRvRm9jdXNcIlxuICAgICAgICA6b24tc2VhcmNoPVwib25TZWFyY2hcIlxuICAgICAgICBAc2VhcmNoPVwib25TZWFyY2hcIlxuICAgICAgLz5cbiAgICA8L3Nsb3Q+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1zY3JvbGxcIiByZWY9XCJzY3JvbGxSZWZcIiBAc2Nyb2xsPVwib25TY3JvbGxcIj5cbiAgICAgIDxjYXRlZ29yeVxuICAgICAgICB2LXNob3c9XCJzZWFyY2hFbW9qaXNcIlxuICAgICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgICA6aTE4bj1cIm1lcmdlZEkxOG5cIlxuICAgICAgICBpZD1cInNlYXJjaFwiXG4gICAgICAgIG5hbWU9XCJTZWFyY2hcIlxuICAgICAgICA6ZW1vamlzPVwic2VhcmNoRW1vamlzXCJcbiAgICAgICAgOmVtb2ppLXByb3BzPVwiZW1vamlQcm9wc1wiXG4gICAgICAvPlxuICAgICAgPGNhdGVnb3J5XG4gICAgICAgIHYtZm9yPVwiY2F0ZWdvcnkgaW4gZmlsdGVyZWRDYXRlZ29yaWVzXCJcbiAgICAgICAgdi1zaG93PVwiIXNlYXJjaEVtb2ppcyAmJiAoaW5maW5pdGVTY3JvbGwgfHwgY2F0ZWdvcnkgPT09IGFjdGl2ZUNhdGVnb3J5KVwiXG4gICAgICAgIHJlZj1cImNhdGVnb3JpZXNcIlxuICAgICAgICA6a2V5PVwiY2F0ZWdvcnkuaWRcIlxuICAgICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgICA6aTE4bj1cIm1lcmdlZEkxOG5cIlxuICAgICAgICA6aWQ9XCJjYXRlZ29yeS5pZFwiXG4gICAgICAgIDpuYW1lPVwiY2F0ZWdvcnkubmFtZVwiXG4gICAgICAgIDplbW9qaXM9XCJjYXRlZ29yeS5lbW9qaXNcIlxuICAgICAgICA6ZW1vamktcHJvcHM9XCJlbW9qaVByb3BzXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG5cbiAgICA8c2xvdFxuICAgICAgbmFtZT1cInByZXZpZXdUZW1wbGF0ZVwiXG4gICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgOnRpdGxlPVwidGl0bGVcIlxuICAgICAgOmVtb2ppPVwicHJldmlld0Vtb2ppXCJcbiAgICAgIDppZGxlLWVtb2ppPVwiaWRsZUVtb2ppXCJcbiAgICAgIDpzaG93LXNraW4tdG9uZXM9XCJzaG93U2tpblRvbmVzXCJcbiAgICAgIDplbW9qaS1wcm9wcz1cImVtb2ppUHJvcHNcIlxuICAgICAgOnNraW4tcHJvcHM9XCJza2luUHJvcHNcIlxuICAgICAgOm9uLXNraW4tY2hhbmdlPVwib25Ta2luQ2hhbmdlXCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1iYXIgZW1vamktbWFydC1iYXItcHJldmlld1wiIHYtaWY9XCJzaG93UHJldmlld1wiPlxuICAgICAgICA8cHJldmlld1xuICAgICAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICAgICAgOnRpdGxlPVwidGl0bGVcIlxuICAgICAgICAgIDplbW9qaT1cInByZXZpZXdFbW9qaVwiXG4gICAgICAgICAgOmlkbGUtZW1vamk9XCJpZGxlRW1vamlcIlxuICAgICAgICAgIDpzaG93LXNraW4tdG9uZXM9XCJzaG93U2tpblRvbmVzXCJcbiAgICAgICAgICA6ZW1vamktcHJvcHM9XCJlbW9qaVByb3BzXCJcbiAgICAgICAgICA6c2tpbi1wcm9wcz1cInNraW5Qcm9wc1wiXG4gICAgICAgICAgOm9uLXNraW4tY2hhbmdlPVwib25Ta2luQ2hhbmdlXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2xvdD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0ICcuLi92ZW5kb3IvcmFmLXBvbHlmaWxsJ1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3V0aWxzL3N0b3JlJ1xuaW1wb3J0IGZyZXF1ZW50bHkgZnJvbSAnLi4vdXRpbHMvZnJlcXVlbnRseSdcbmltcG9ydCB7IGRlZXBNZXJnZSwgbWVhc3VyZVNjcm9sbGJhciB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgUGlja2VyUHJvcHMgfSBmcm9tICcuLi91dGlscy9zaGFyZWQtcHJvcHMnXG5pbXBvcnQgQW5jaG9ycyBmcm9tICcuL2FuY2hvcnMudnVlJ1xuaW1wb3J0IENhdGVnb3J5IGZyb20gJy4vY2F0ZWdvcnkudnVlJ1xuaW1wb3J0IFByZXZpZXcgZnJvbSAnLi9wcmV2aWV3LnZ1ZSdcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9zZWFyY2gudnVlJ1xuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYsIGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG4vKlxuICogTm90ZSBhYm91dCBgYnVmZmVyYCBzZXR0aW5nIGZvciBEeW5hbWljU2Nyb2xsZXI6IHRoaXMgaXMgYVxuICogZml4IGZvciAjNDkgLSB3aGVuIGNsaWNraW5nIG9uIHRoZSBcIkZsYWdzXCIgY2F0ZWdvcnkgZm9yIHRoZSBmaXJzdFxuICogdGltZSwgdGhlIGNhdGVnb3J5IGlzIG5vdCBzY3JvbGxlZCB0byB0aGUgdG9wIG9mIHRoZSBjb21wb25lbnQuXG4gKiBUaGlzIGlzIGJlY2F1c2UgdGhlIGxhc3QgY2F0ZWdvcnkgc2l6ZSBpcyBub3QgY2FsY3VsYXRlZCB5ZXQgYW5kXG4gKiB2aXJ0dWFsIHNjcm9sbGVyIHRha2VzICdtaW5JdGVtU2l6ZScgYXMgY2F0ZWdvcnkgaGVpZ2h0LlxuICpcbiAqIFZpcnR1YWwgc2Nyb2xsZXIgKFJlY3ljbGVTY3JvbGxlciBjb21wb25lbnQpIHVzZXMgYGJ1ZmZlcmAgdmFsdWVcbiAqIHRvICBkZWNpZGUgaG93IG1hbnkgY29tcG9uZW50cyB0byByZW5kZXIgaW50aXRpYWxseSBkZXBlbmRpbmcgb25cbiAqIHRoZSBzY3JvbGwgYXJlYSBzaXplICsgYnVmZmVyKjIgKGFuZCBhbGwgY2F0ZWdvcmllcyBpbml0aWFsbHlcbiAqIGhhdmUgbWluIHNpemUsIDYwcHgpLlxuICpcbiAqIEJ5IGluY3JlYXNpbmcgYnVmZmVyIHRvIDQwMHB4LCB3ZSBtYWtlIHRoZSBzY3JvbGxlciB0byBwZXJmb3JtXG4gKiBzaXplIGNhbGN1bGF0aW9uIGZvciBhbGwgY2F0ZWdvcmllcyBhbmQgdGhlIGZvbGxvd2luZ1xuICogc2Nyb2xsVG9JdGVtKCkgY2FsbHMgd29yayBjb3JyZWN0bHkuXG4gKi9cblxuaW1wb3J0IHsgRHluYW1pY1Njcm9sbGVyLCBEeW5hbWljU2Nyb2xsZXJJdGVtIH0gZnJvbSAndnVlMy12aXJ0dWFsLXNjcm9sbGVyJ1xuaW1wb3J0ICd2dWUzLXZpcnR1YWwtc2Nyb2xsZXIvZGlzdC92dWUzLXZpcnR1YWwtc2Nyb2xsZXIuY3NzJ1xuXG5jb25zdCBJMThOID0ge1xuICBzZWFyY2g6ICdTZWFyY2gnLFxuICBub3Rmb3VuZDogJ05vIEVtb2ppIEZvdW5kJyxcbiAgY2F0ZWdvcmllczoge1xuICAgIHNlYXJjaDogJ1NlYXJjaCBSZXN1bHRzJyxcbiAgICByZWNlbnQ6ICdGcmVxdWVudGx5IFVzZWQnLFxuICAgIHNtaWxleXM6ICdTbWlsZXlzICYgRW1vdGlvbicsXG4gICAgcGVvcGxlOiAnUGVvcGxlICYgQm9keScsXG4gICAgbmF0dXJlOiAnQW5pbWFscyAmIE5hdHVyZScsXG4gICAgZm9vZHM6ICdGb29kICYgRHJpbmsnLFxuICAgIGFjdGl2aXR5OiAnQWN0aXZpdHknLFxuICAgIHBsYWNlczogJ1RyYXZlbCAmIFBsYWNlcycsXG4gICAgb2JqZWN0czogJ09iamVjdHMnLFxuICAgIHN5bWJvbHM6ICdTeW1ib2xzJyxcbiAgICBmbGFnczogJ0ZsYWdzJyxcbiAgICBjdXN0b206ICdDdXN0b20nLFxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnRW1vamlTdGF0aWNQaWNrZXInLFxuXG4gIGNvbXBvbmVudHM6IHtcbiAgICBBbmNob3JzLFxuICAgIENhdGVnb3J5LFxuICAgIFByZXZpZXcsXG4gICAgU2VhcmNoLFxuICAgIER5bmFtaWNTY3JvbGxlcixcbiAgICBEeW5hbWljU2Nyb2xsZXJJdGVtLFxuICB9LFxuXG4gIHByb3BzOiB7XG4gICAgLi4uUGlja2VyUHJvcHMsXG4gICAgaW5jbHVkZToge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiAoKSA9PiBbXVxuICAgIH0sXG4gICAgZW1vamlzVG9TaG93RmlsdGVyOiB7XG4gICAgICB0eXBlOiBGdW5jdGlvblxuICAgIH0sXG4gICAgZXhjbHVkZToge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiAoKSA9PiBbXVxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgfSxcblxuICBlbWl0czogWydza2luLWNoYW5nZScsICdzZWxlY3QnXSxcblxuICBzZXR1cChwcm9wcywgeyBlbWl0IH0pIHtcbiAgICBsZXQgY2F0ZWdvcmllcyA9IFsuLi5wcm9wcy5kYXRhLmNhdGVnb3JpZXMoKV0uZmlsdGVyKChjYXRlZ29yeSkgPT4ge1xuICAgICAgcmV0dXJuIGNhdGVnb3J5LmVtb2ppcy5sZW5ndGggPiAwXG4gICAgfSlcblxuICAgIGNhdGVnb3JpZXNbMF0uZmlyc3QgPSB0cnVlXG4gICAgT2JqZWN0LmZyZWV6ZShjYXRlZ29yaWVzKVxuXG4gICAgY29uc3Qgc2Nyb2xsUmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgY2F0ZWdvcmllc1JlZiA9IHJlZihudWxsKVxuICAgIGNvbnN0IGFjdGl2ZVNraW4gPSByZWYocHJvcHMuc2tpbiB8fCBzdG9yZS5nZXQoJ3NraW4nKSB8fCBwcm9wcy5kZWZhdWx0U2tpbilcbiAgICBjb25zdCBhY3RpdmVDYXRlZ29yeSA9IHJlZihjYXRlZ29yaWVzWzBdKVxuICAgIGNvbnN0IHByZXZpZXdFbW9qaSA9IHJlZihudWxsKVxuICAgIGNvbnN0IHNlYXJjaEVtb2ppcyA9IHJlZihudWxsKVxuXG4gICAgY29uc3QgY2FsY3VsYXRlV2lkdGggPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5wZXJMaW5lICogKHByb3BzLmVtb2ppU2l6ZSArIDEyKSArIDEyICsgMiArIG1lYXN1cmVTY3JvbGxiYXIoKSlcblxuICAgIGNvbnN0IGVtb2ppUHJvcHMgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgbmF0aXZlOiBwcm9wcy5uYXRpdmUsXG4gICAgICBza2luOiBhY3RpdmVTa2luLnZhbHVlLFxuICAgICAgc2V0OiBwcm9wcy5zZXQsXG4gICAgICBlbW9qaVRvb2x0aXA6IHByb3BzLmVtb2ppVG9vbHRpcCxcbiAgICAgIGVtb2ppU2l6ZTogcHJvcHMuZW1vamlTaXplLFxuICAgICAgb25FbnRlcjogb25FbW9qaUVudGVyLFxuICAgICAgb25MZWF2ZTogb25FbW9qaUxlYXZlLFxuICAgICAgb25DbGljazogb25FbW9qaUNsaWNrLFxuICAgIH0pKVxuXG4gICAgY29uc3Qgc2tpblByb3BzID0gY29tcHV0ZWQoKCkgPT4gKHsgc2tpbjogYWN0aXZlU2tpbi52YWx1ZSB9KSlcblxuICAgIGNvbnN0IGN1c3RvbVN0eWxlcyA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICB3aWR0aDogY2FsY3VsYXRlV2lkdGgudmFsdWUgKyAncHgnLFxuICAgICAgLi4ucHJvcHMucGlja2VyU3R5bGVzLFxuICAgIH0pKVxuXG4gICAgY29uc3QgZmlsdGVyZWRDYXRlZ29yaWVzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIGNhdGVnb3JpZXMuZmlsdGVyKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICBsZXQgaXNJbmNsdWRlZCA9XG4gICAgICAgICAgcHJvcHMuaW5jbHVkZSAmJiBwcm9wcy5pbmNsdWRlLmxlbmd0aFxuICAgICAgICAgICAgPyBwcm9wcy5pbmNsdWRlLmluZGV4T2YoY2F0ZWdvcnkuaWQpID4gLTFcbiAgICAgICAgICAgIDogdHJ1ZVxuICAgICAgICBsZXQgaXNFeGNsdWRlZCA9XG4gICAgICAgICAgcHJvcHMuZXhjbHVkZSAmJiBwcm9wcy5leGNsdWRlLmxlbmd0aFxuICAgICAgICAgICAgPyBwcm9wcy5leGNsdWRlLmluZGV4T2YoY2F0ZWdvcnkuaWQpID4gLTFcbiAgICAgICAgICAgIDogZmFsc2VcbiAgICAgICAgbGV0IGhhc0Vtb2ppcyA9IGNhdGVnb3J5LmVtb2ppcy5sZW5ndGggPiAwXG4gICAgICAgIGlmIChwcm9wcy5lbW9qaXNUb1Nob3dGaWx0ZXIpIHtcbiAgICAgICAgICBoYXNFbW9qaXMgPSBjYXRlZ29yeS5lbW9qaXMuc29tZSgoZW1vamkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBwcm9wcy5lbW9qaXNUb1Nob3dGaWx0ZXIocHJvcHMuZGF0YS5lbW9qaXNbZW1vamldIHx8IGVtb2ppKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzSW5jbHVkZWQgJiYgIWlzRXhjbHVkZWQgJiYgaGFzRW1vamlzXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBjb25zdCBpZGxlRW1vamkgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gcHJvcHMuZGF0YS5lbW9qaShwcm9wcy5lbW9qaSlcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAnRGVmYXVsdCBwcmV2aWV3IGVtb2ppIGAnICtcbiAgICAgICAgICBwcm9wcy5lbW9qaSArXG4gICAgICAgICAgJ2AgaXMgbm90IGF2YWlsYWJsZSwgY2hlY2sgdGhlIFBpY2tlciBgZW1vamlgIHByb3BlcnR5JyxcbiAgICAgICAgKVxuICAgICAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgICAgIHJldHVybiBwcm9wcy5kYXRhLmZpcnN0RW1vamkoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBsZXQgd2FpdGluZ0ZvclBhaW50ID0gZmFsc2VcbiAgICBjb25zdCBvblNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGlmIChwcm9wcy5pbmZpbml0ZVNjcm9sbCAmJiAhd2FpdGluZ0ZvclBhaW50KSB7XG4gICAgICAgIHdhaXRpbmdGb3JQYWludCA9IHRydWVcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShvblNjcm9sbFBhaW50KVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG9uU2Nyb2xsUGFpbnQgPSAoKSA9PiB7XG4gICAgICB3YWl0aW5nRm9yUGFpbnQgPSBmYWxzZVxuICAgICAgbGV0IHNjcm9sbFRvcCA9IHNjcm9sbFJlZi5zY3JvbGxUb3AsXG4gICAgICAgIF9hY3RpdmVDYXRlZ29yeSA9IGZpbHRlcmVkQ2F0ZWdvcmllcy52YWx1ZVswXVxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBmaWx0ZXJlZENhdGVnb3JpZXMudmFsdWUubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjYXRlZ29yeSA9IGZpbHRlcmVkQ2F0ZWdvcmllcy52YWx1ZVtpXSxcbiAgICAgICAgICBjb21wb25lbnQgPSBjYXRlZ29yaWVzUmVmLnZhbHVlW2ldXG4gICAgICAgIC8vIFRoZSBgLTUwYCBvZmZzZXQgc3dpdGNoZXMgYWN0aXZlIGNhdGVnb3J5IChzZWxlY3RlZCBpbiB0aGVcbiAgICAgICAgLy8gYW5jaG9ycyBiYXIpIGEgYml0IGVhcmlsZXIsIGJlZm9yZSBpdCBhY3R1YWxseSByZWFjaGVzIHRoZSB0b3AuXG4gICAgICAgIGlmIChjb21wb25lbnQgJiYgY29tcG9uZW50LiRlbC5vZmZzZXRUb3AgLSA1MCA+IHNjcm9sbFRvcCkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgX2FjdGl2ZUNhdGVnb3J5ID0gY2F0ZWdvcnlcbiAgICAgIH1cblxuICAgICAgYWN0aXZlQ2F0ZWdvcnkudmFsdWUgPSBfYWN0aXZlQ2F0ZWdvcnlcbiAgICB9XG5cbiAgICBjb25zdCBvbkFuY2hvckNsaWNrID0gKGNhdGVnb3J5KSA9PiB7XG4gICAgICBsZXQgaSA9IGZpbHRlcmVkQ2F0ZWdvcmllcy52YWx1ZS5pbmRleE9mKGNhdGVnb3J5KSxcbiAgICAgICAgY29tcG9uZW50ID0gY2F0ZWdvcmllc1JlZi52YWx1ZVtpXSxcbiAgICAgICAgc2Nyb2xsVG9Db21wb25lbnQgPSAoKSA9PiB7XG4gICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgbGV0IHRvcCA9IGNvbXBvbmVudC4kZWwub2Zmc2V0VG9wXG4gICAgICAgICAgICBpZiAoY2F0ZWdvcnkuZmlyc3QpIHtcbiAgICAgICAgICAgICAgdG9wID0gMFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzY3JvbGxSZWYudmFsdWUuc2Nyb2xsVG9wID0gdG9wXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5pbmZpbml0ZVNjcm9sbCkge1xuICAgICAgICBzY3JvbGxUb0NvbXBvbmVudCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY3RpdmVDYXRlZ29yeS52YWx1ZSA9IGZpbHRlcmVkQ2F0ZWdvcmllcy52YWx1ZVtpXVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG9uU2VhcmNoID0gKHZhbHVlKSA9PiB7XG4gICAgICBzZWFyY2hFbW9qaXMudmFsdWUgPSBwcm9wcy5kYXRhLnNlYXJjaCh2YWx1ZSwgcHJvcHMubWF4U2VhcmNoUmVzdWx0cylcbiAgICB9XG5cbiAgICBjb25zdCBvbkVtb2ppRW50ZXIgPSAoZW1vamkpID0+IHtcbiAgICAgIHByZXZpZXdFbW9qaS52YWx1ZSA9IGVtb2ppXG4gICAgfVxuXG4gICAgY29uc3Qgb25FbW9qaUxlYXZlID0gKCkgPT4ge1xuICAgICAgcHJldmlld0Vtb2ppLnZhbHVlID0gbnVsbFxuICAgIH1cblxuICAgIGNvbnN0IG9uRW1vamlDbGljayA9IChlbW9qaSkgPT4ge1xuICAgICAgZW1pdCgnc2VsZWN0JywgZW1vamkpXG4gICAgICBmcmVxdWVudGx5LmFkZChlbW9qaSlcbiAgICB9XG5cbiAgICBjb25zdCBvblNraW5DaGFuZ2UgPSAoc2tpbikgPT4ge1xuICAgICAgYWN0aXZlU2tpbi52YWx1ZSA9IHNraW5cbiAgICAgIHN0b3JlLnVwZGF0ZSh7IHNraW4gfSlcblxuICAgICAgZW1pdCgnc2tpbi1jaGFuZ2UnLCBza2luKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBhY3RpdmVDYXRlZ29yeSxcbiAgICAgIHByZXZpZXdFbW9qaSxcbiAgICAgIHNlYXJjaEVtb2ppcyxcbiAgICAgIGN1c3RvbVN0eWxlcyxcbiAgICAgIGZpbHRlcmVkQ2F0ZWdvcmllcyxcbiAgICAgIHNraW5Qcm9wcyxcbiAgICAgIG1lcmdlZEkxOG46IGNvbXB1dGVkKCgpID0+IE9iamVjdC5mcmVlemUoZGVlcE1lcmdlKEkxOE4sIHByb3BzLmkxOG4pKSksXG4gICAgICBpZGxlRW1vamksXG5cbiAgICAgIHNjcm9sbFJlZixcbiAgICAgIGNhdGVnb3JpZXMsXG4gICAgICBvbkFuY2hvckNsaWNrLFxuICAgICAgb25TZWFyY2gsXG4gICAgICBvblNjcm9sbCxcbiAgICAgIGVtb2ppUHJvcHMsXG4gICAgICBvblNraW5DaGFuZ2UsXG4gICAgfVxuICB9XG59KVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG5cbjxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LWFuY2hvcnNcIj5cbiAgPHNwYW5cbiAgICB2LWZvcj1cImNhdGVnb3J5IGluIGNhdGVnb3JpZXNcIlxuICAgIDprZXk9XCJjYXRlZ29yeS5pZFwiXG4gICAgOmNsYXNzPVwieyAnZW1vamktbWFydC1hbmNob3InOiB0cnVlLCAnZW1vamktbWFydC1hbmNob3Itc2VsZWN0ZWQnOiBjYXRlZ29yeS5pZCA9PT0gYWN0aXZlQ2F0ZWdvcnkuaWQgfVwiXG4gICAgOnN0eWxlPVwieyAnY29sb3InOiAoY2F0ZWdvcnkuaWQgPT09IGFjdGl2ZUNhdGVnb3J5LmlkID8gY29sb3IgOiAnJykgfVwiXG4gICAgOmRhdGEtdGl0bGU9XCJpMThuLmNhdGVnb3JpZXNbY2F0ZWdvcnkuaWRdXCJcbiAgICBAY2xpY2s9XCIkZW1pdCgnY2hhbmdlJywgY2F0ZWdvcnkpXCI+XG4gICAgPGRpdiB2LWh0bWw9XCJzdmdzW2NhdGVnb3J5LmlkXVwiLz5cbiAgICA8c3BhbiBjbGFzcz1cImVtb2ppLW1hcnQtYW5jaG9yLWJhclwiIDpzdHlsZT1cInsgYmFja2dyb3VuZENvbG9yOiBjb2xvciB9XCI+PC9zcGFuPlxuICA8L3NwYW4+XG48L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IHN2Z3MgZnJvbSAnLi4vc3ZncydcbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ0FuY2hvcnMnLFxuXG4gIHByb3BzOiB7XG4gICAgaTE4bjoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmdcbiAgICB9LFxuICAgIGNhdGVnb3JpZXM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGFjdGl2ZUNhdGVnb3J5OiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICBkZWZhdWx0KCkge1xuICAgICAgICByZXR1cm4ge31cbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgc2V0dXAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN2Z3MsXG4gICAgfVxuICB9XG59KVxuXG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cblxuPGRpdiA6Y2xhc3M9XCJ7ICdlbW9qaS1tYXJ0LWNhdGVnb3J5JzogdHJ1ZSwgJ2Vtb2ppLW1hcnQtbm8tcmVzdWx0cyc6ICFoYXNSZXN1bHRzIH1cIiB2LWlmPVwiaXNWaXNpYmxlICYmIChpc1NlYXJjaCB8fCBoYXNSZXN1bHRzKVwiPlxuICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1jYXRlZ29yeS1sYWJlbFwiPlxuICAgIDxzcGFuPnt7IGkxOG4uY2F0ZWdvcmllc1tpZF0gfX08L3NwYW4+XG4gIDwvZGl2PlxuXG4gIDx0ZW1wbGF0ZSB2LWZvcj1cInsgZW1vamlPYmplY3QsIGVtb2ppVmlldyB9IGluIGVtb2ppT2JqZWN0c1wiPlxuICAgIDxzcGFuXG4gICAgICB2LWlmPVwiZW1vamlWaWV3LmNhblJlbmRlclwiXG4gICAgICA6ZGF0YS10aXRsZT1cImVtb2ppT2JqZWN0LnNob3J0X25hbWVcIlxuICAgICAgOnRpdGxlPVwiZW1vamlWaWV3LnRpdGxlXCJcbiAgICAgIGNsYXNzPVwiZW1vamktbWFydC1lbW9qaVwiXG4gICAgICBAbW91c2VlbnRlcj1cImVtb2ppUHJvcHMub25FbnRlcihlbW9qaVZpZXcuZ2V0RW1vamkoKSlcIlxuICAgICAgQG1vdXNlbGVhdmU9XCJlbW9qaVByb3BzLm9uTGVhdmUoZW1vamlWaWV3LmdldEVtb2ppKCkpXCJcbiAgICAgIEBjbGljaz1cImVtb2ppUHJvcHMub25DbGljayhlbW9qaVZpZXcuZ2V0RW1vamkoKSlcIj5cbiAgICAgIDxzcGFuICA6Y2xhc3M9XCJlbW9qaVZpZXcuY3NzQ2xhc3NcIiA6c3R5bGU9XCJlbW9qaVZpZXcuY3NzU3R5bGVcIj57e2Vtb2ppVmlldy5jb250ZW50fX08L3NwYW4+XG4gICAgPC9zcGFuPlxuICA8L3RlbXBsYXRlPlxuXG4gIDxkaXYgdi1pZj1cIiFoYXNSZXN1bHRzICYmIGRhdGFcIj5cbiAgICA8ZW1vamlcbiAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICBlbW9qaT1cInNsZXV0aF9vcl9zcHlcIlxuICAgICAgOm5hdGl2ZT1cImVtb2ppUHJvcHMubmF0aXZlXCJcbiAgICAgIDpza2luPVwiZW1vamlQcm9wcy5za2luXCJcbiAgICAgIDpzZXQ9XCJlbW9qaVByb3BzLnNldFwiXG4gICAgLz5cbiAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1uby1yZXN1bHRzLWxhYmVsXCI+e3sgaTE4bi5ub3Rmb3VuZCB9fTwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgRW1vamlWaWV3IH0gZnJvbSAnLi4vdXRpbHMvZW1vamktZGF0YSdcbmltcG9ydCBFbW9qaSBmcm9tICcuL0Vtb2ppJ1xuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ0Vtb2ppQ2F0ZWdvcnknLFxuXG4gIHByb3BzOiB7XG4gICAgZGF0YToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgZGVmYXVsdDogKCkgPT4gKHt9KVxuICAgIH0sXG4gICAgaTE4bjoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGlkOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgbmFtZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGVtb2ppczoge1xuICAgICAgdHlwZTogQXJyYXlcbiAgICB9LFxuICAgIGVtb2ppUHJvcHM6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudHM6IHtcbiAgICBFbW9qaVxuICB9LFxuXG4gIHNldHVwKHByb3BzKSB7XG4gICAgY29uc3QgaXNWaXNpYmxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuICEhcHJvcHMuZW1vamlzXG4gICAgfSlcbiAgICBjb25zdCBpc1NlYXJjaCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiBwcm9wcy5uYW1lID09PSAnU2VhcmNoJ1xuICAgIH0pXG4gICAgY29uc3QgaGFzUmVzdWx0cyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiBwcm9wcy5lbW9qaXMubGVuZ3RoID4gMFxuICAgIH0pXG4gICAgY29uc3QgZW1vamlPYmplY3RzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIHByb3BzLmVtb2ppcy5tYXAoKGVtb2ppKSA9PiB7XG4gICAgICAgIGxldCBlbW9qaU9iamVjdCA9IGVtb2ppXG4gICAgICAgIGxldCBlbW9qaVZpZXcgPSBuZXcgRW1vamlWaWV3KFxuICAgICAgICAgIGVtb2ppLFxuICAgICAgICAgIHByb3BzLmVtb2ppUHJvcHMuc2tpbixcbiAgICAgICAgICBwcm9wcy5lbW9qaVByb3BzLnNldCxcbiAgICAgICAgICBwcm9wcy5lbW9qaVByb3BzLm5hdGl2ZSxcbiAgICAgICAgICBwcm9wcy5lbW9qaVByb3BzLmZhbGxiYWNrLFxuICAgICAgICAgIHByb3BzLmVtb2ppUHJvcHMuZW1vamlUb29sdGlwLFxuICAgICAgICAgIHByb3BzLmVtb2ppUHJvcHMuZW1vamlTaXplLFxuICAgICAgICApXG4gICAgICAgIHJldHVybiB7IGVtb2ppT2JqZWN0LCBlbW9qaVZpZXcgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlzVmlzaWJsZSxcbiAgICAgIGlzU2VhcmNoLFxuICAgICAgaGFzUmVzdWx0cyxcbiAgICAgIGVtb2ppT2JqZWN0cyxcbiAgICB9XG4gIH1cbn0pXG5cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuXG48ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3XCI+XG4gIDx0ZW1wbGF0ZSB2LWlmPVwiZW1vamlcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vamlcIj5cbiAgICAgICAgPGVtb2ppXG4gICAgICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgICAgICA6ZW1vamk9XCJlbW9qaVwiXG4gICAgICAgICAgOm5hdGl2ZT1cImVtb2ppUHJvcHMubmF0aXZlXCJcbiAgICAgICAgICA6c2tpbj1cImVtb2ppUHJvcHMuc2tpblwiXG4gICAgICAgICAgOnNldD1cImVtb2ppUHJvcHMuc2V0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LWRhdGFcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1uYW1lXCI+e3sgZW1vamkubmFtZSB9fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LXNob3J0bmFtZXNcIj5cbiAgICAgICAgICA8c3BhbiB2LWZvcj1cInNob3J0TmFtZSBpbiBlbW9qaVNob3J0TmFtZXNcIiA6a2V5PVwic2hvcnROYW1lXCIgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctc2hvcnRuYW1lXCI+Ont7IHNob3J0TmFtZSB9fTo8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LWVtb3RpY29uc1wiPlxuICAgICAgICAgIDxzcGFuIHYtZm9yPVwiZW1vdGljb24gaW4gZW1vamlFbW90aWNvbnNcIiA6a2V5PVwiZW1vdGljb25cIiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1lbW90aWNvblwiPnt7IGVtb3RpY29uIH19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICA8L3RlbXBsYXRlPlxuXG4gIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1lbW9qaVwiPlxuICAgICAgPGVtb2ppXG4gICAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICAgIDplbW9qaT1cImlkbGVFbW9qaVwiXG4gICAgICAgIDpuYXRpdmU9XCJlbW9qaVByb3BzLm5hdGl2ZVwiXG4gICAgICAgIDpza2luPVwiZW1vamlQcm9wcy5za2luXCJcbiAgICAgICAgOnNldD1cImVtb2ppUHJvcHMuc2V0XCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LWRhdGFcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZW1vamktbWFydC10aXRsZS1sYWJlbFwiPnt7IHRpdGxlIH19PC9zcGFuPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiB2LWlmPVwic2hvd1NraW5Ub25lc1wiIGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LXNraW5zXCI+XG4gICAgICA8c2tpbnMgOnNraW49XCJza2luUHJvcHMuc2tpblwiIEBjaGFuZ2U9XCJvblNraW5DaGFuZ2UoJGV2ZW50KVwiIC8+XG4gICAgPC9kaXY+XG4gIDwvdGVtcGxhdGU+XG48L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBFbW9qaSBmcm9tICcuL0Vtb2ppJ1xuaW1wb3J0IFNraW5zIGZyb20gJy4vc2tpbnMnXG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnRW1vamlQcmV2aWV3JyxcblxuICBjb21wb25lbnRzOiB7XG4gICAgRW1vamksXG4gICAgU2tpbnNcbiAgfSxcblxuICBwcm9wczoge1xuICAgIGRhdGE6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBlbW9qaToge1xuICAgICAgdHlwZTogW1N0cmluZywgT2JqZWN0XVxuICAgIH0sXG4gICAgaWRsZUVtb2ppOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBPYmplY3RdLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHNob3dTa2luVG9uZXM6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlXG4gICAgfSxcbiAgICBlbW9qaVByb3BzOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgc2tpblByb3BzOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgb25Ta2luQ2hhbmdlOiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfVxuICB9LFxuXG4gIHNldHVwKHByb3BzKSB7XG4gICAgY29uc3QgZW1vamlEYXRhID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMuZW1vamkgPyBwcm9wcy5lbW9qaSA6IHt9KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGVtb2ppRGF0YSxcbiAgICAgIGVtb2ppU2hvcnROYW1lczogY29tcHV0ZWQoKCkgPT4gZW1vamlEYXRhLnZhbHVlLnNob3J0X25hbWVzKSxcbiAgICAgIGVtb2ppRW1vdGljb25zOiBjb21wdXRlZCgoKSA9PiBlbW9qaURhdGEuZW1vdGljb25zKVxuICAgIH1cbiAgfVxufSlcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1zZWFyY2hcIj5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiA6cGxhY2Vob2xkZXI9XCJpMThuLnNlYXJjaFwiIHYtbW9kZWw9XCJ2YWx1ZVwiPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIG9uTW91bnRlZCwgY29tcHV0ZWQsIHdhdGNoLCByZWYsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgcHJvcHM6IHtcbiAgICBkYXRhOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgaTE4bjoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGF1dG9Gb2N1czoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBvblNlYXJjaDoge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH1cbiAgfSxcblxuICBzZXR1cChwcm9wcywgeyBlbWl0IH0pIHtcbiAgICBjb25zdCB2YWx1ZSA9IHJlZignJylcblxuICAgIHdhdGNoKFxuICAgICAgdmFsdWUsXG4gICAgICAoKSA9PiBlbWl0KCdzZWFyY2gnLCB2YWx1ZS52YWx1ZSlcbiAgICApXG5cbiAgICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgICAgaWYgKCFwcm9wcy5hdXRvRm9jdXMpIHJldHVyblxuXG4gICAgICBsZXQgJGVsID0gZ2V0Q3VycmVudEluc3RhbmNlKCkgJiYgZ2V0Q3VycmVudEluc3RhbmNlKCkucHJveHkuJGVsIHx8IG51bGxcbiAgICAgIGlmICghJGVsKSByZXR1cm5cblxuICAgICAgJGVsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuZm9jdXMoKVxuICAgIH0pXG5cbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWUsXG4gICAgICBjbGVhcjooKSA9PiAodmFsdWUudmFsdWUgPSAnJyksXG4gICAgICBlbW9qaUluZGV4OiBjb21wdXRlZCgoKSA9PiBwcm9wcy5kYXRhKVxuICAgIH1cbiAgfVxufSlcblxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG5cbjxkaXYgOmNsYXNzPVwieyAnZW1vamktbWFydC1za2luLXN3YXRjaGVzJzogdHJ1ZSwgJ2Vtb2ppLW1hcnQtc2tpbi1zd2F0Y2hlcy1vcGVuZWQnOiBvcGVuZWQgfVwiPlxuICA8c3BhbiB2LWZvcj1cInNraW5Ub25lIGluIDZcIiA6a2V5PVwic2tpblRvbmVcIiA6Y2xhc3M9XCJ7ICdlbW9qaS1tYXJ0LXNraW4tc3dhdGNoJzogdHJ1ZSwgJ2Vtb2ppLW1hcnQtc2tpbi1zd2F0Y2gtc2VsZWN0ZWQnOiBza2luID09PSBza2luVG9uZSB9XCI+XG4gICAgPHNwYW4gOmNsYXNzPVwiJ2Vtb2ppLW1hcnQtc2tpbiBlbW9qaS1tYXJ0LXNraW4tdG9uZS0nICsgc2tpblRvbmVcIiBAY2xpY2s9XCJvbkNsaWNrKHNraW5Ub25lKVwiPjwvc3Bhbj5cbiAgPC9zcGFuPlxuPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ0Vtb2ppU2tpbnMnLFxuXG4gIHByb3BzOiB7XG4gICAgc2tpbjoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XG4gIH0sXG5cbiAgc2V0dXAocHJvcHMsIHsgZW1pdCB9KSB7XG4gICAgY29uc3Qgb3BlbmVkID0gcmVmKGZhbHNlKVxuXG4gICAgY29uc3Qgb25DbGljayA9IChza2luVG9uZSkgPT4ge1xuICAgICAgaWYgKG9wZW5lZC52YWx1ZSkge1xuICAgICAgICBpZiAoc2tpblRvbmUgIT09IHByb3BzLnNraW4pIHtcbiAgICAgICAgICBlbWl0KCdjaGFuZ2UnLCBza2luVG9uZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBvcGVuZWQudmFsdWUgPSAhb3BlbmVkLnZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG9wZW5lZCxcbiAgICAgIG9uQ2xpY2tcbiAgICB9XG4gIH1cbn0pXG5cbjwvc2NyaXB0PlxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnZ1ZS1yZWN5Y2xlLXNjcm9sbGVye3Bvc2l0aW9uOnJlbGF0aXZlfS52dWUtcmVjeWNsZS1zY3JvbGxlci5kaXJlY3Rpb24tdmVydGljYWw6bm90KC5wYWdlLW1vZGUpe292ZXJmbG93LXk6YXV0b30udnVlLXJlY3ljbGUtc2Nyb2xsZXIuZGlyZWN0aW9uLWhvcml6b250YWw6bm90KC5wYWdlLW1vZGUpe292ZXJmbG93LXg6YXV0b30udnVlLXJlY3ljbGUtc2Nyb2xsZXIuZGlyZWN0aW9uLWhvcml6b250YWx7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXh9LnZ1ZS1yZWN5Y2xlLXNjcm9sbGVyX19zbG90ey1tcy1mbGV4OmF1dG8gMCAwcHg7ZmxleDphdXRvIDAgMH0udnVlLXJlY3ljbGUtc2Nyb2xsZXJfX2l0ZW0td3JhcHBlcnstbXMtZmxleDoxO2ZsZXg6MTtib3gtc2l6aW5nOmJvcmRlci1ib3g7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOnJlbGF0aXZlfS52dWUtcmVjeWNsZS1zY3JvbGxlci5yZWFkeSAudnVlLXJlY3ljbGUtc2Nyb2xsZXJfX2l0ZW0tdmlld3twb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtfS52dWUtcmVjeWNsZS1zY3JvbGxlci5kaXJlY3Rpb24tdmVydGljYWwgLnZ1ZS1yZWN5Y2xlLXNjcm9sbGVyX19pdGVtLXdyYXBwZXJ7d2lkdGg6MTAwJX0udnVlLXJlY3ljbGUtc2Nyb2xsZXIuZGlyZWN0aW9uLWhvcml6b250YWwgLnZ1ZS1yZWN5Y2xlLXNjcm9sbGVyX19pdGVtLXdyYXBwZXJ7aGVpZ2h0OjEwMCV9LnZ1ZS1yZWN5Y2xlLXNjcm9sbGVyLnJlYWR5LmRpcmVjdGlvbi12ZXJ0aWNhbCAudnVlLXJlY3ljbGUtc2Nyb2xsZXJfX2l0ZW0tdmlld3t3aWR0aDoxMDAlfS52dWUtcmVjeWNsZS1zY3JvbGxlci5yZWFkeS5kaXJlY3Rpb24taG9yaXpvbnRhbCAudnVlLXJlY3ljbGUtc2Nyb2xsZXJfX2l0ZW0tdmlld3toZWlnaHQ6MTAwJX0udnVlMy1yZXNpemUtb2JzZXJ2ZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3otaW5kZXg6LTE7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtib3JkZXI6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O3BvaW50ZXItZXZlbnRzOm5vbmU7ZGlzcGxheTpibG9jaztvdmVyZmxvdzpoaWRkZW47b3BhY2l0eTowfS52dWUzLXJlc2l6ZS1vYnNlcnZlciBvYmplY3R7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtvdmVyZmxvdzpoaWRkZW47cG9pbnRlci1ldmVudHM6bm9uZTt6LWluZGV4Oi0xfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy92dWUzLXZpcnR1YWwtc2Nyb2xsZXIvZGlzdC92dWUzLXZpcnR1YWwtc2Nyb2xsZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHNCQUFzQixpQkFBaUIsQ0FBQyx5REFBeUQsZUFBZSxDQUFDLDJEQUEyRCxlQUFlLENBQUMsMkNBQTJDLG1CQUFXLENBQVgsWUFBWSxDQUFDLDRCQUE0QixtQkFBWSxDQUFaLGFBQWEsQ0FBQyxvQ0FBb0MsVUFBTSxDQUFOLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsNkRBQTZELGlCQUFpQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsNkVBQTZFLFVBQVUsQ0FBQywrRUFBK0UsV0FBVyxDQUFDLGdGQUFnRixVQUFVLENBQUMsa0ZBQWtGLFdBQVcsQ0FBQyxzQkFBc0IsaUJBQWlCLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsNEJBQTRCLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsNkJBQTZCLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLFVBQVVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnZ1ZS1yZWN5Y2xlLXNjcm9sbGVye3Bvc2l0aW9uOnJlbGF0aXZlfS52dWUtcmVjeWNsZS1zY3JvbGxlci5kaXJlY3Rpb24tdmVydGljYWw6bm90KC5wYWdlLW1vZGUpe292ZXJmbG93LXk6YXV0b30udnVlLXJlY3ljbGUtc2Nyb2xsZXIuZGlyZWN0aW9uLWhvcml6b250YWw6bm90KC5wYWdlLW1vZGUpe292ZXJmbG93LXg6YXV0b30udnVlLXJlY3ljbGUtc2Nyb2xsZXIuZGlyZWN0aW9uLWhvcml6b250YWx7ZGlzcGxheTpmbGV4fS52dWUtcmVjeWNsZS1zY3JvbGxlcl9fc2xvdHtmbGV4OmF1dG8gMCAwfS52dWUtcmVjeWNsZS1zY3JvbGxlcl9faXRlbS13cmFwcGVye2ZsZXg6MTtib3gtc2l6aW5nOmJvcmRlci1ib3g7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOnJlbGF0aXZlfS52dWUtcmVjeWNsZS1zY3JvbGxlci5yZWFkeSAudnVlLXJlY3ljbGUtc2Nyb2xsZXJfX2l0ZW0tdmlld3twb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtfS52dWUtcmVjeWNsZS1zY3JvbGxlci5kaXJlY3Rpb24tdmVydGljYWwgLnZ1ZS1yZWN5Y2xlLXNjcm9sbGVyX19pdGVtLXdyYXBwZXJ7d2lkdGg6MTAwJX0udnVlLXJlY3ljbGUtc2Nyb2xsZXIuZGlyZWN0aW9uLWhvcml6b250YWwgLnZ1ZS1yZWN5Y2xlLXNjcm9sbGVyX19pdGVtLXdyYXBwZXJ7aGVpZ2h0OjEwMCV9LnZ1ZS1yZWN5Y2xlLXNjcm9sbGVyLnJlYWR5LmRpcmVjdGlvbi12ZXJ0aWNhbCAudnVlLXJlY3ljbGUtc2Nyb2xsZXJfX2l0ZW0tdmlld3t3aWR0aDoxMDAlfS52dWUtcmVjeWNsZS1zY3JvbGxlci5yZWFkeS5kaXJlY3Rpb24taG9yaXpvbnRhbCAudnVlLXJlY3ljbGUtc2Nyb2xsZXJfX2l0ZW0tdmlld3toZWlnaHQ6MTAwJX0udnVlMy1yZXNpemUtb2JzZXJ2ZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3otaW5kZXg6LTE7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtib3JkZXI6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O3BvaW50ZXItZXZlbnRzOm5vbmU7ZGlzcGxheTpibG9jaztvdmVyZmxvdzpoaWRkZW47b3BhY2l0eTowfS52dWUzLXJlc2l6ZS1vYnNlcnZlciBvYmplY3R7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtvdmVyZmxvdzpoaWRkZW47cG9pbnRlci1ldmVudHM6bm9uZTt6LWluZGV4Oi0xfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn07IiwiKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2Uge1xuICAgIHJvb3QuU2Nyb2xscGFyZW50ID0gZmFjdG9yeSgpO1xuICB9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJlZ2V4ID0gLyhhdXRvfHNjcm9sbCkvO1xuXG4gIHZhciBwYXJlbnRzID0gZnVuY3Rpb24gKG5vZGUsIHBzKSB7XG4gICAgaWYgKG5vZGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgeyByZXR1cm4gcHM7IH1cblxuICAgIHJldHVybiBwYXJlbnRzKG5vZGUucGFyZW50Tm9kZSwgcHMuY29uY2F0KFtub2RlXSkpO1xuICB9O1xuXG4gIHZhciBzdHlsZSA9IGZ1bmN0aW9uIChub2RlLCBwcm9wKSB7XG4gICAgcmV0dXJuIGdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShwcm9wKTtcbiAgfTtcblxuICB2YXIgb3ZlcmZsb3cgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgIHJldHVybiBzdHlsZShub2RlLCBcIm92ZXJmbG93XCIpICsgc3R5bGUobm9kZSwgXCJvdmVyZmxvdy15XCIpICsgc3R5bGUobm9kZSwgXCJvdmVyZmxvdy14XCIpO1xuICB9O1xuXG4gIHZhciBzY3JvbGwgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgcmV0dXJuIHJlZ2V4LnRlc3Qob3ZlcmZsb3cobm9kZSkpO1xuICB9O1xuXG4gIHZhciBzY3JvbGxQYXJlbnQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgU1ZHRWxlbWVudCkpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuXG4gICAgdmFyIHBzID0gcGFyZW50cyhub2RlLnBhcmVudE5vZGUsIFtdKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChzY3JvbGwocHNbaV0pKSB7XG4gICAgICAgIHJldHVybiBwc1tpXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIH07XG5cbiAgcmV0dXJuIHNjcm9sbFBhcmVudDtcbn0pKTtcbiIsIi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiAgTW9kaWZpZWQgYnkgRXZhbiBZb3UgQHl5eDk5MDgwM1xuKi9cblxuaW1wb3J0IGxpc3RUb1N0eWxlcyBmcm9tICcuL2xpc3RUb1N0eWxlcydcblxudmFyIGhhc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuXG5pZiAodHlwZW9mIERFQlVHICE9PSAndW5kZWZpbmVkJyAmJiBERUJVRykge1xuICBpZiAoIWhhc0RvY3VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2dWUtc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQuICcgK1xuICAgIFwiVXNlIHsgdGFyZ2V0OiAnbm9kZScgfSBpbiB5b3VyIFdlYnBhY2sgY29uZmlnIHRvIGluZGljYXRlIGEgc2VydmVyLXJlbmRlcmluZyBlbnZpcm9ubWVudC5cIlxuICApIH1cbn1cblxuLypcbnR5cGUgU3R5bGVPYmplY3QgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHBhcnRzOiBBcnJheTxTdHlsZU9iamVjdFBhcnQ+XG59XG5cbnR5cGUgU3R5bGVPYmplY3RQYXJ0ID0ge1xuICBjc3M6IHN0cmluZztcbiAgbWVkaWE6IHN0cmluZztcbiAgc291cmNlTWFwOiA/c3RyaW5nXG59XG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7LypcbiAgW2lkOiBudW1iZXJdOiB7XG4gICAgaWQ6IG51bWJlcixcbiAgICByZWZzOiBudW1iZXIsXG4gICAgcGFydHM6IEFycmF5PChvYmo/OiBTdHlsZU9iamVjdFBhcnQpID0+IHZvaWQ+XG4gIH1cbiovfVxuXG52YXIgaGVhZCA9IGhhc0RvY3VtZW50ICYmIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0pXG52YXIgc2luZ2xldG9uRWxlbWVudCA9IG51bGxcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMFxudmFyIGlzUHJvZHVjdGlvbiA9IGZhbHNlXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9XG52YXIgb3B0aW9ucyA9IG51bGxcbnZhciBzc3JJZEtleSA9ICdkYXRhLXZ1ZS1zc3ItaWQnXG5cbi8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxudmFyIGlzT2xkSUUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvbXNpZSBbNi05XVxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFN0eWxlc0NsaWVudCAocGFyZW50SWQsIGxpc3QsIF9pc1Byb2R1Y3Rpb24sIF9vcHRpb25zKSB7XG4gIGlzUHJvZHVjdGlvbiA9IF9pc1Byb2R1Y3Rpb25cblxuICBvcHRpb25zID0gX29wdGlvbnMgfHwge31cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBsaXN0KVxuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICAgIGRvbVN0eWxlLnJlZnMtLVxuICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpXG4gICAgfVxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIG5ld0xpc3QpXG4gICAgICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlcyA9IFtdXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV1cbiAgICAgIGlmIChkb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXSgpXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzIC8qIEFycmF5PFN0eWxlT2JqZWN0PiAqLykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrK1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKVxuICAgICAgfVxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBpZiAoZG9tU3R5bGUucGFydHMubGVuZ3RoID4gaXRlbS5wYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMubGVuZ3RoID0gaXRlbS5wYXJ0cy5sZW5ndGhcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW11cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7IGlkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKCkge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICBzdHlsZUVsZW1lbnQudHlwZSA9ICd0ZXh0L2NzcydcbiAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpXG4gIHJldHVybiBzdHlsZUVsZW1lbnRcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgdmFyIHVwZGF0ZSwgcmVtb3ZlXG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZVsnICsgc3NySWRLZXkgKyAnfj1cIicgKyBvYmouaWQgKyAnXCJdJylcblxuICBpZiAoc3R5bGVFbGVtZW50KSB7XG4gICAgaWYgKGlzUHJvZHVjdGlvbikge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYW5kIGluIHByb2R1Y3Rpb24gbW9kZS5cbiAgICAgIC8vIHNpbXBseSBkbyBub3RoaW5nLlxuICAgICAgcmV0dXJuIG5vb3BcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYnV0IGluIGRldiBtb2RlLlxuICAgICAgLy8gZm9yIHNvbWUgcmVhc29uIENocm9tZSBjYW4ndCBoYW5kbGUgc291cmNlIG1hcCBpbiBzZXJ2ZXItcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlIHRhZ3MgLSBzb3VyY2UgbWFwcyBpbiA8c3R5bGU+IG9ubHkgd29ya3MgaWYgdGhlIHN0eWxlIHRhZyBpc1xuICAgICAgLy8gY3JlYXRlZCBhbmQgaW5zZXJ0ZWQgZHluYW1pY2FsbHkuIFNvIHdlIHJlbW92ZSB0aGUgc2VydmVyIHJlbmRlcmVkXG4gICAgICAvLyBzdHlsZXMgYW5kIGluamVjdCBuZXcgb25lcy5cbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICBpZiAoaXNPbGRJRSkge1xuICAgIC8vIHVzZSBzaW5nbGV0b24gbW9kZSBmb3IgSUU5LlxuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrXG4gICAgc3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKVxuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpXG4gIH0gZWxzZSB7XG4gICAgLy8gdXNlIG11bHRpLXN0eWxlLXRhZyBtb2RlIGluIGFsbCBvdGhlciBjYXNlc1xuICAgIHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpXG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudClcbiAgICByZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKG9iailcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuICAgICAgICAgIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG4gICAgICAgICAgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpXG4gICAgfVxuICB9XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXVxuXG4gIHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJylcbiAgfVxufSkoKVxuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzXG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpXG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpXG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlc1xuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlRWxlbWVudCwgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzXG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcFxuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpXG4gIH1cbiAgaWYgKG9wdGlvbnMuc3NySWQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKHNzcklkS2V5LCBvYmouaWQpXG4gIH1cblxuICBpZiAoc291cmNlTWFwKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kZXZ0b29scy9kb2NzL2phdmFzY3JpcHQtZGVidWdnaW5nXG4gICAgLy8gdGhpcyBtYWtlcyBzb3VyY2UgbWFwcyBpbnNpZGUgc3R5bGUgdGFncyB3b3JrIHByb3Blcmx5IGluIENocm9tZVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgc291cmNlTWFwLnNvdXJjZXNbMF0gKyAnICovJ1xuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgJyAqLydcbiAgfVxuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3NcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZClcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpXG4gIH1cbn1cbiIsIi8qKlxuICogVHJhbnNsYXRlcyB0aGUgbGlzdCBmb3JtYXQgcHJvZHVjZWQgYnkgY3NzLWxvYWRlciBpbnRvIHNvbWV0aGluZ1xuICogZWFzaWVyIHRvIG1hbmlwdWxhdGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAocGFyZW50SWQsIGxpc3QpIHtcbiAgdmFyIHN0eWxlcyA9IFtdXG4gIHZhciBuZXdTdHlsZXMgPSB7fVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICB2YXIgaWQgPSBpdGVtWzBdXG4gICAgdmFyIGNzcyA9IGl0ZW1bMV1cbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdXG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM11cbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGlkOiBwYXJlbnRJZCArICc6JyArIGksXG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfVxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHsgaWQ6IGlkLCBwYXJ0czogW3BhcnRdIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3R5bGVzXG59XG4iLCJpbXBvcnQgeyByZWYsIG9uTW91bnRlZCwgb25CZWZvcmVVbm1vdW50LCBvcGVuQmxvY2ssIGNyZWF0ZUJsb2NrIH0gZnJvbSAndnVlJztcblxuZnVuY3Rpb24gZ2V0SW50ZXJuZXRFeHBsb3JlclZlcnNpb24oKSB7XG4gIGNvbnN0IHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIGNvbnN0IG1zaWUgPSB1YS5pbmRleE9mKCdNU0lFICcpO1xuXG4gIGlmIChtc2llID4gMCkge1xuICAgIC8vIElFIDEwIG9yIG9sZGVyID0+IHJldHVybiB2ZXJzaW9uIG51bWJlclxuICAgIHJldHVybiBwYXJzZUludCh1YS5zdWJzdHJpbmcobXNpZSArIDUsIHVhLmluZGV4T2YoJy4nLCBtc2llKSksIDEwKTtcbiAgfVxuXG4gIGNvbnN0IHRyaWRlbnQgPSB1YS5pbmRleE9mKCdUcmlkZW50LycpO1xuXG4gIGlmICh0cmlkZW50ID4gMCkge1xuICAgIC8vIElFIDExID0+IHJldHVybiB2ZXJzaW9uIG51bWJlclxuICAgIGNvbnN0IHJ2ID0gdWEuaW5kZXhPZigncnY6Jyk7XG4gICAgcmV0dXJuIHBhcnNlSW50KHVhLnN1YnN0cmluZyhydiArIDMsIHVhLmluZGV4T2YoJy4nLCBydikpLCAxMCk7XG4gIH1cblxuICBjb25zdCBlZGdlID0gdWEuaW5kZXhPZignRWRnZS8nKTtcblxuICBpZiAoZWRnZSA+IDApIHtcbiAgICAvLyBFZGdlIChJRSAxMispID0+IHJldHVybiB2ZXJzaW9uIG51bWJlclxuICAgIHJldHVybiBwYXJzZUludCh1YS5zdWJzdHJpbmcoZWRnZSArIDUsIHVhLmluZGV4T2YoJy4nLCBlZGdlKSksIDEwKTtcbiAgfSAvLyBvdGhlciBicm93c2VyXG5cblxuICByZXR1cm4gLTE7XG59XG5cbmxldCBpc0lFO1xuXG5mdW5jdGlvbiBpbml0Q29tcGF0KCkge1xuICBpZiAoIWluaXRDb21wYXQuaW5pdCkge1xuICAgIGluaXRDb21wYXQuaW5pdCA9IHRydWU7XG4gICAgaXNJRSA9IGdldEludGVybmV0RXhwbG9yZXJWZXJzaW9uKCkgIT09IC0xO1xuICB9XG59XG5cbnZhciBzY3JpcHQgPSB7XG4gIG5hbWU6ICdSZXNpemVPYnNlcnZlcicsXG4gIHByb3BzOiB7XG4gICAgc2hvd1RyaWdnZXI6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgZW1pdHM6IFsnbm90aWZ5J10sXG5cbiAgc2V0dXAocHJvcHMsIHtcbiAgICBlbWl0XG4gIH0pIHtcbiAgICBsZXQgX3cgPSAwO1xuICAgIGxldCBfaCA9IDA7XG4gICAgY29uc3QgZWxSZWYgPSByZWYobnVsbCk7XG4gICAgbGV0IF9yZXNpemVPYmplY3QgPSBudWxsO1xuXG4gICAgY29uc3QgY29tcGFyZUFuZE5vdGlmeSA9ICgpID0+IHtcbiAgICAgIGlmIChfdyAhPT0gZWxSZWYudmFsdWUub2Zmc2V0V2lkdGggfHwgX2ggIT09IGVsUmVmLnZhbHVlLm9mZnNldEhlaWdodCkge1xuICAgICAgICBfdyA9IGVsUmVmLnZhbHVlLm9mZnNldFdpZHRoO1xuICAgICAgICBfaCA9IGVsUmVmLnZhbHVlLm9mZnNldEhlaWdodDtcbiAgICAgICAgZW1pdCgnbm90aWZ5Jywge1xuICAgICAgICAgIHdpZHRoOiBfdyxcbiAgICAgICAgICBoZWlnaHQ6IF9oXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBhZGRSZXNpemVIYW5kbGVycyA9ICgpID0+IHtcbiAgICAgIF9yZXNpemVPYmplY3QuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNvbXBhcmVBbmROb3RpZnkpO1xuXG4gICAgICBjb21wYXJlQW5kTm90aWZ5KCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbW92ZVJlc2l6ZUhhbmRsZXJzID0gKCkgPT4ge1xuICAgICAgaWYgKF9yZXNpemVPYmplY3QgJiYgX3Jlc2l6ZU9iamVjdC5vbmxvYWQpIHtcbiAgICAgICAgaWYgKCFpc0lFICYmIF9yZXNpemVPYmplY3QuY29udGVudERvY3VtZW50KSB7XG4gICAgICAgICAgX3Jlc2l6ZU9iamVjdC5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXcucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgY29tcGFyZUFuZE5vdGlmeSk7XG4gICAgICAgIH1cblxuICAgICAgICBlbFJlZi52YWx1ZS5yZW1vdmVDaGlsZChfcmVzaXplT2JqZWN0KTtcbiAgICAgICAgX3Jlc2l6ZU9iamVjdC5vbmxvYWQgPSBudWxsO1xuICAgICAgICBfcmVzaXplT2JqZWN0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgb25Nb3VudGVkKCgpID0+IHtcbiAgICAgIGluaXRDb21wYXQoKTtcbiAgICAgIF93ID0gZWxSZWYudmFsdWUub2Zmc2V0V2lkdGg7XG4gICAgICBfaCA9IGVsUmVmLnZhbHVlLm9mZnNldEhlaWdodDtcbiAgICAgIGNvbnN0IG9iamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29iamVjdCcpO1xuICAgICAgX3Jlc2l6ZU9iamVjdCA9IG9iamVjdDtcbiAgICAgIG9iamVjdC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgIG9iamVjdC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICBvYmplY3Qub25sb2FkID0gYWRkUmVzaXplSGFuZGxlcnM7XG4gICAgICBvYmplY3QudHlwZSA9ICd0ZXh0L2h0bWwnO1xuXG4gICAgICBpZiAoaXNJRSkge1xuICAgICAgICBlbFJlZi52YWx1ZS5hcHBlbmRDaGlsZChvYmplY3QpO1xuICAgICAgfVxuXG4gICAgICBvYmplY3QuZGF0YSA9ICdhYm91dDpibGFuayc7XG5cbiAgICAgIGlmICghaXNJRSkge1xuICAgICAgICBlbFJlZi52YWx1ZS5hcHBlbmRDaGlsZChvYmplY3QpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuc2hvd1RyaWdnZXIpIHtcbiAgICAgICAgY29tcGFyZUFuZE5vdGlmeSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgICByZW1vdmVSZXNpemVIYW5kbGVycygpO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBlbFJlZlxuICAgIH07XG4gIH1cblxufTtcblxuY29uc3QgX2hvaXN0ZWRfMSA9IHtcbiAgcmVmOiBcImVsUmVmXCIsXG4gIGNsYXNzOiBcInZ1ZTMtcmVzaXplLW9ic2VydmVyXCIsXG4gIHRhYmluZGV4OiBcIi0xXCJcbn07XG5mdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiBvcGVuQmxvY2soKSwgY3JlYXRlQmxvY2soXCJkaXZcIiwgX2hvaXN0ZWRfMSwgbnVsbCwgNTEyXG4gIC8qIE5FRURfUEFUQ0ggKi9cbiAgKTtcbn1cblxuc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtcbnNjcmlwdC5fX2ZpbGUgPSBcInNyYy9wYWNrYWdlL1Jlc2l6ZU9ic2VydmVyL1Jlc2l6ZU9ic2VydmVyLnZ1ZVwiO1xuXG5zY3JpcHQuaW5zdGFsbCA9IGZ1bmN0aW9uIChhcHApIHtcbiAgYXBwLmNvbXBvbmVudChzY3JpcHQubmFtZSwgc2NyaXB0KTtcbn07XG5cbnZhciB2ZXJzaW9uID0gXCIwLjIuMFwiO1xuXG5jb25zdCBpbnN0YWxsID0gYXBwID0+IHtcbiAgYXBwLnVzZShzY3JpcHQpO1xufTsgLy8gUGx1Z2luXG5cblxuY29uc3QgVnVlM1Jlc2l6ZSA9IHtcbiAgdmVyc2lvbixcbiAgaW5zdGFsbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVnVlM1Jlc2l6ZTtcbmV4cG9ydCB7IHNjcmlwdCBhcyBSZXNpemVPYnNlcnZlciwgaW5zdGFsbCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dnVlMy1yZXNpemUuZXNtLmpzLm1hcFxuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi92dWUzLXZpcnR1YWwtc2Nyb2xsZXIuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNDI3YTc0YWNcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi92dWUzLXZpcnR1YWwtc2Nyb2xsZXIuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi92dWUzLXZpcnR1YWwtc2Nyb2xsZXIuY3NzXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgeyBSZXNpemVPYnNlcnZlciBhcyBSZXNpemVPYnNlcnZlciQxIH0gZnJvbSAndnVlMy1yZXNpemUnO1xuaW1wb3J0IFNjcm9sbFBhcmVudCBmcm9tICdzY3JvbGxwYXJlbnQnO1xuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZXNvbHZlQ29tcG9uZW50LCByZXNvbHZlRGlyZWN0aXZlLCB3aXRoRGlyZWN0aXZlcywgb3BlbkJsb2NrLCBjcmVhdGVCbG9jaywgcmVuZGVyU2xvdCwgY3JlYXRlQ29tbWVudFZOb2RlLCBjcmVhdGVWTm9kZSwgRnJhZ21lbnQsIHJlbmRlckxpc3QsIG1lcmdlUHJvcHMsIHRvSGFuZGxlcnMsIHdpdGhDdHgsIG5leHRUaWNrIH0gZnJvbSAndnVlJztcblxudmFyIGNvbmZpZyA9IHtcbiAgaXRlbXNMaW1pdDogMTAwMFxufTtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICB9KTtcbiAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gIH1cblxuICByZXR1cm4ga2V5cztcbn1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG5cbiAgICBpZiAoaSAlIDIpIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obik7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuXG4gIHJldHVybiBhcnIyO1xufVxuXG5mdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihvKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8IG9bU3ltYm9sLml0ZXJhdG9yXSA9PSBudWxsKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKG8gPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpKSB7XG4gICAgICB2YXIgaSA9IDA7XG5cbiAgICAgIHZhciBGID0gZnVuY3Rpb24gKCkge307XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHM6IEYsXG4gICAgICAgIG46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHtcbiAgICAgICAgICAgIGRvbmU6IHRydWVcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlOiBvW2krK11cbiAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH0sXG4gICAgICAgIGY6IEZcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xuICB9XG5cbiAgdmFyIGl0LFxuICAgICAgbm9ybWFsQ29tcGxldGlvbiA9IHRydWUsXG4gICAgICBkaWRFcnIgPSBmYWxzZSxcbiAgICAgIGVycjtcbiAgcmV0dXJuIHtcbiAgICBzOiBmdW5jdGlvbiAoKSB7XG4gICAgICBpdCA9IG9bU3ltYm9sLml0ZXJhdG9yXSgpO1xuICAgIH0sXG4gICAgbjogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHN0ZXAgPSBpdC5uZXh0KCk7XG4gICAgICBub3JtYWxDb21wbGV0aW9uID0gc3RlcC5kb25lO1xuICAgICAgcmV0dXJuIHN0ZXA7XG4gICAgfSxcbiAgICBlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgZGlkRXJyID0gdHJ1ZTtcbiAgICAgIGVyciA9IGU7XG4gICAgfSxcbiAgICBmOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIW5vcm1hbENvbXBsZXRpb24gJiYgaXQucmV0dXJuICE9IG51bGwpIGl0LnJldHVybigpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGRpZEVycikgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gX3R5cGVvZiQxKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YoU3ltYm9sLml0ZXJhdG9yKSA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YkMSA9IGZ1bmN0aW9uIF90eXBlb2YkMShvYmopIHtcbiAgICAgIHJldHVybiBfdHlwZW9mKG9iaik7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBfdHlwZW9mJDEgPSBmdW5jdGlvbiBfdHlwZW9mJDEob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogX3R5cGVvZihvYmopO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZiQxKG9iaik7XG59XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgYXJyMltpXSA9IGFycltpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfVxufVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NPcHRpb25zKHZhbHVlKSB7XG4gIHZhciBvcHRpb25zO1xuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBTaW1wbGUgb3B0aW9ucyAoY2FsbGJhY2stb25seSlcbiAgICBvcHRpb25zID0ge1xuICAgICAgY2FsbGJhY2s6IHZhbHVlXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICAvLyBPcHRpb25zIG9iamVjdFxuICAgIG9wdGlvbnMgPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvcHRpb25zO1xufVxuXG5mdW5jdGlvbiB0aHJvdHRsZShjYWxsYmFjaywgZGVsYXkpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICB2YXIgdGltZW91dDtcbiAgdmFyIGxhc3RTdGF0ZTtcbiAgdmFyIGN1cnJlbnRBcmdzO1xuXG4gIHZhciB0aHJvdHRsZWQgPSBmdW5jdGlvbiB0aHJvdHRsZWQoc3RhdGUpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBjdXJyZW50QXJncyA9IGFyZ3M7XG4gICAgaWYgKHRpbWVvdXQgJiYgc3RhdGUgPT09IGxhc3RTdGF0ZSkgcmV0dXJuO1xuICAgIHZhciBsZWFkaW5nID0gb3B0aW9ucy5sZWFkaW5nO1xuXG4gICAgaWYgKHR5cGVvZiBsZWFkaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBsZWFkaW5nID0gbGVhZGluZyhzdGF0ZSwgbGFzdFN0YXRlKTtcbiAgICB9XG5cbiAgICBpZiAoKCF0aW1lb3V0IHx8IHN0YXRlICE9PSBsYXN0U3RhdGUpICYmIGxlYWRpbmcpIHtcbiAgICAgIGNhbGxiYWNrLmFwcGx5KHZvaWQgMCwgW3N0YXRlXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGN1cnJlbnRBcmdzKSkpO1xuICAgIH1cblxuICAgIGxhc3RTdGF0ZSA9IHN0YXRlO1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYWxsYmFjay5hcHBseSh2b2lkIDAsIFtzdGF0ZV0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShjdXJyZW50QXJncykpKTtcbiAgICAgIHRpbWVvdXQgPSAwO1xuICAgIH0sIGRlbGF5KTtcbiAgfTtcblxuICB0aHJvdHRsZWQuX2NsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB0aW1lb3V0ID0gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gdGhyb3R0bGVkO1xufVxuXG5mdW5jdGlvbiBkZWVwRXF1YWwodmFsMSwgdmFsMikge1xuICBpZiAodmFsMSA9PT0gdmFsMikgcmV0dXJuIHRydWU7XG5cbiAgaWYgKF90eXBlb2YkMSh2YWwxKSA9PT0gJ29iamVjdCcpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICBmb3IgKHZhciBrZXkgaW4gdmFsMSkge1xuICAgICAgaWYgKCFkZWVwRXF1YWwodmFsMVtrZXldLCB2YWwyW2tleV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxudmFyIFZpc2liaWxpdHlTdGF0ZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFZpc2liaWxpdHlTdGF0ZShlbCwgb3B0aW9ucywgdm5vZGUpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVmlzaWJpbGl0eVN0YXRlKTtcblxuICAgIHRoaXMuZWwgPSBlbDtcbiAgICB0aGlzLm9ic2VydmVyID0gbnVsbDtcbiAgICB0aGlzLmZyb3plbiA9IGZhbHNlO1xuICAgIHRoaXMuY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucywgdm5vZGUpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFZpc2liaWxpdHlTdGF0ZSwgW3tcbiAgICBrZXk6IFwiY3JlYXRlT2JzZXJ2ZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucykge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIpIHtcbiAgICAgICAgdGhpcy5kZXN0cm95T2JzZXJ2ZXIoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZnJvemVuKSByZXR1cm47XG4gICAgICB0aGlzLm9wdGlvbnMgPSBwcm9jZXNzT3B0aW9ucyhvcHRpb25zKTtcblxuICAgICAgdGhpcy5jYWxsYmFjayA9IGZ1bmN0aW9uIChyZXN1bHQsIGVudHJ5KSB7XG4gICAgICAgIF90aGlzLm9wdGlvbnMuY2FsbGJhY2socmVzdWx0LCBlbnRyeSk7XG5cbiAgICAgICAgaWYgKHJlc3VsdCAmJiBfdGhpcy5vcHRpb25zLm9uY2UpIHtcbiAgICAgICAgICBfdGhpcy5mcm96ZW4gPSB0cnVlO1xuXG4gICAgICAgICAgX3RoaXMuZGVzdHJveU9ic2VydmVyKCk7XG4gICAgICAgIH1cbiAgICAgIH07IC8vIFRocm90dGxlXG5cblxuICAgICAgaWYgKHRoaXMuY2FsbGJhY2sgJiYgdGhpcy5vcHRpb25zLnRocm90dGxlKSB7XG4gICAgICAgIHZhciBfcmVmID0gdGhpcy5vcHRpb25zLnRocm90dGxlT3B0aW9ucyB8fCB7fSxcbiAgICAgICAgICAgIF9sZWFkaW5nID0gX3JlZi5sZWFkaW5nO1xuXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSB0aHJvdHRsZSh0aGlzLmNhbGxiYWNrLCB0aGlzLm9wdGlvbnMudGhyb3R0bGUsIHtcbiAgICAgICAgICBsZWFkaW5nOiBmdW5jdGlvbiBsZWFkaW5nKHN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gX2xlYWRpbmcgPT09ICdib3RoJyB8fCBfbGVhZGluZyA9PT0gJ3Zpc2libGUnICYmIHN0YXRlIHx8IF9sZWFkaW5nID09PSAnaGlkZGVuJyAmJiAhc3RhdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5vbGRSZXN1bHQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLm9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChlbnRyaWVzKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IGVudHJpZXNbMF07XG5cbiAgICAgICAgaWYgKGVudHJpZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHZhciBpbnRlcnNlY3RpbmdFbnRyeSA9IGVudHJpZXMuZmluZChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGUuaXNJbnRlcnNlY3Rpbmc7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAoaW50ZXJzZWN0aW5nRW50cnkpIHtcbiAgICAgICAgICAgIGVudHJ5ID0gaW50ZXJzZWN0aW5nRW50cnk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF90aGlzLmNhbGxiYWNrKSB7XG4gICAgICAgICAgLy8gVXNlIGlzSW50ZXJzZWN0aW5nIGlmIHBvc3NpYmxlIGJlY2F1c2UgYnJvd3NlcnMgY2FuIHJlcG9ydCBpc0ludGVyc2VjdGluZyBhcyB0cnVlLCBidXQgaW50ZXJzZWN0aW9uUmF0aW8gYXMgMCwgd2hlbiBzb21ldGhpbmcgdmVyeSBzbG93bHkgZW50ZXJzIHRoZSB2aWV3cG9ydC5cbiAgICAgICAgICB2YXIgcmVzdWx0ID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgJiYgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPj0gX3RoaXMudGhyZXNob2xkO1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09IF90aGlzLm9sZFJlc3VsdCkgcmV0dXJuO1xuICAgICAgICAgIF90aGlzLm9sZFJlc3VsdCA9IHJlc3VsdDtcblxuICAgICAgICAgIF90aGlzLmNhbGxiYWNrKHJlc3VsdCwgZW50cnkpO1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzLm9wdGlvbnMuaW50ZXJzZWN0aW9uKTsgLy8gV2FpdCBmb3IgdGhlIGVsZW1lbnQgdG8gYmUgaW4gZG9jdW1lbnRcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfdGhpcy5vYnNlcnZlcikge1xuICAgICAgICAgIF90aGlzLm9ic2VydmVyLm9ic2VydmUoX3RoaXMuZWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGVzdHJveU9ic2VydmVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3lPYnNlcnZlcigpIHtcbiAgICAgIGlmICh0aGlzLm9ic2VydmVyKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICB0aGlzLm9ic2VydmVyID0gbnVsbDtcbiAgICAgIH0gLy8gQ2FuY2VsIHRocm90dGxlZCBjYWxsXG5cblxuICAgICAgaWYgKHRoaXMuY2FsbGJhY2sgJiYgdGhpcy5jYWxsYmFjay5fY2xlYXIpIHtcbiAgICAgICAgdGhpcy5jYWxsYmFjay5fY2xlYXIoKTtcblxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidGhyZXNob2xkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmludGVyc2VjdGlvbiAmJiB0aGlzLm9wdGlvbnMuaW50ZXJzZWN0aW9uLnRocmVzaG9sZCB8fCAwO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBWaXNpYmlsaXR5U3RhdGU7XG59KCk7XG5cbmZ1bmN0aW9uIG1vdW50ZWQoZWwsIF9yZWYyLCB2bm9kZSkge1xuICB2YXIgdmFsdWUgPSBfcmVmMi52YWx1ZTtcbiAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xuXG4gIGlmICh0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc29sZS53YXJuKCdbdnVlLW9ic2VydmUtdmlzaWJpbGl0eV0gSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgQVBJIGlzIG5vdCBhdmFpbGFibGUgaW4geW91ciBicm93c2VyLiBQbGVhc2UgaW5zdGFsbCB0aGlzIHBvbHlmaWxsOiBodHRwczovL2dpdGh1Yi5jb20vdzNjL0ludGVyc2VjdGlvbk9ic2VydmVyL3RyZWUvbWFzdGVyL3BvbHlmaWxsJyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHN0YXRlID0gbmV3IFZpc2liaWxpdHlTdGF0ZShlbCwgdmFsdWUsIHZub2RlKTtcbiAgICBlbC5fdnVlX3Zpc2liaWxpdHlTdGF0ZSA9IHN0YXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVubW91bnRlZChlbCkge1xuICB2YXIgc3RhdGUgPSBlbC5fdnVlX3Zpc2liaWxpdHlTdGF0ZTtcblxuICBpZiAoc3RhdGUpIHtcbiAgICBzdGF0ZS5kZXN0cm95T2JzZXJ2ZXIoKTtcbiAgICBkZWxldGUgZWwuX3Z1ZV92aXNpYmlsaXR5U3RhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29tcG9uZW50VXBkYXRlZChlbCwgX3JlZjMsIHZub2RlKSB7XG4gIHZhciB2YWx1ZSA9IF9yZWYzLnZhbHVlLFxuICAgICAgb2xkVmFsdWUgPSBfcmVmMy5vbGRWYWx1ZTtcbiAgaWYgKGRlZXBFcXVhbCh2YWx1ZSwgb2xkVmFsdWUpKSByZXR1cm47XG4gIHZhciBzdGF0ZSA9IGVsLl92dWVfdmlzaWJpbGl0eVN0YXRlO1xuXG4gIGlmICghdmFsdWUpIHtcbiAgICB1bm1vdW50ZWQoZWwpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChzdGF0ZSkge1xuICAgIHN0YXRlLmNyZWF0ZU9ic2VydmVyKHZhbHVlLCB2bm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgbW91bnRlZChlbCwge1xuICAgICAgdmFsdWU6IHZhbHVlXG4gICAgfSwgdm5vZGUpO1xuICB9XG59XG5cbnZhciBPYnNlcnZlVmlzaWJpbGl0eSA9IHtcbiAgbW91bnRlZDogbW91bnRlZCxcbiAgY29tcG9uZW50VXBkYXRlZDogY29tcG9uZW50VXBkYXRlZCxcbiAgdW5tb3VudGVkOiB1bm1vdW50ZWRcbn07XG5cbnZhciBwcm9wcyA9IHtcbiAgaXRlbXM6IHtcbiAgICB0eXBlOiBBcnJheSxcbiAgICByZXF1aXJlZDogdHJ1ZVxuICB9LFxuICBrZXlGaWVsZDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnaWQnXG4gIH0sXG4gIGRpcmVjdGlvbjoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAndmVydGljYWwnLFxuICAgIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdG9yKHZhbHVlKSB7XG4gICAgICByZXR1cm4gWyd2ZXJ0aWNhbCcsICdob3Jpem9udGFsJ10uaW5jbHVkZXModmFsdWUpO1xuICAgIH1cbiAgfVxufTtcbmZ1bmN0aW9uIHNpbXBsZUFycmF5KCkge1xuICByZXR1cm4gdGhpcy5pdGVtcy5sZW5ndGggJiYgX3R5cGVvZih0aGlzLml0ZW1zWzBdKSAhPT0gJ29iamVjdCc7XG59XG5cbnZhciBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHN1cHBvcnRzUGFzc2l2ZSA9IGZhbHNlO1xuXG4gIHRyeSB7XG4gICAgdmFyIG9wdHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHN1cHBvcnRzUGFzc2l2ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBudWxsLCBvcHRzKTtcbiAgfSBjYXRjaCAoZSkge31cbn1cblxudmFyIHVpZCA9IDA7XG52YXIgc2NyaXB0ID0gZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ1JlY3ljbGVTY3JvbGxlcicsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBSZXNpemVPYnNlcnZlcjogUmVzaXplT2JzZXJ2ZXIkMVxuICB9LFxuICBkaXJlY3RpdmVzOiB7XG4gICAgT2JzZXJ2ZVZpc2liaWxpdHk6IE9ic2VydmVWaXNpYmlsaXR5XG4gIH0sXG4gIHByb3BzOiBfb2JqZWN0U3ByZWFkMih7fSwgcHJvcHMsIHtcbiAgICBpdGVtU2l6ZToge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH0sXG4gICAgbWluSXRlbVNpemU6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiBudWxsXG4gICAgfSxcbiAgICBzaXplRmllbGQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdzaXplJ1xuICAgIH0sXG4gICAgdHlwZUZpZWxkOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAndHlwZSdcbiAgICB9LFxuICAgIGJ1ZmZlcjoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMjAwXG4gICAgfSxcbiAgICBwYWdlTW9kZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBwcmVyZW5kZXI6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDBcbiAgICB9LFxuICAgIGVtaXRVcGRhdGU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH1cbiAgfSksXG4gIGVtaXRzOiBbJ3Zpc2libGUnLCAnaGlkZGVuJywgJ3Jlc2l6ZScsICd1cGRhdGUnXSxcbiAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcG9vbDogW10sXG4gICAgICB0b3RhbFNpemU6IDAsXG4gICAgICByZWFkeTogZmFsc2UsXG4gICAgICBob3ZlcktleTogbnVsbFxuICAgIH07XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgc2l6ZXM6IGZ1bmN0aW9uIHNpemVzKCkge1xuICAgICAgaWYgKHRoaXMuaXRlbVNpemUgPT09IG51bGwpIHtcbiAgICAgICAgdmFyIHNpemVzID0ge1xuICAgICAgICAgICctMSc6IHtcbiAgICAgICAgICAgIGFjY3VtdWxhdG9yOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgICAgICB2YXIgZmllbGQgPSB0aGlzLnNpemVGaWVsZDtcbiAgICAgICAgdmFyIG1pbkl0ZW1TaXplID0gdGhpcy5taW5JdGVtU2l6ZTtcbiAgICAgICAgdmFyIGNvbXB1dGVkTWluU2l6ZSA9IDEwMDAwO1xuICAgICAgICB2YXIgYWNjdW11bGF0b3IgPSAwO1xuICAgICAgICB2YXIgY3VycmVudDtcblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGl0ZW1zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGN1cnJlbnQgPSBpdGVtc1tpXVtmaWVsZF0gfHwgbWluSXRlbVNpemU7XG5cbiAgICAgICAgICBpZiAoY3VycmVudCA8IGNvbXB1dGVkTWluU2l6ZSkge1xuICAgICAgICAgICAgY29tcHV0ZWRNaW5TaXplID0gY3VycmVudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhY2N1bXVsYXRvciArPSBjdXJyZW50O1xuICAgICAgICAgIHNpemVzW2ldID0ge1xuICAgICAgICAgICAgYWNjdW11bGF0b3I6IGFjY3VtdWxhdG9yLFxuICAgICAgICAgICAgc2l6ZTogY3VycmVudFxuICAgICAgICAgIH07XG4gICAgICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cblxuICAgICAgICB0aGlzLiRfY29tcHV0ZWRNaW5JdGVtU2l6ZSA9IGNvbXB1dGVkTWluU2l6ZTtcbiAgICAgICAgcmV0dXJuIHNpemVzO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gW107XG4gICAgfSxcbiAgICBzaW1wbGVBcnJheTogc2ltcGxlQXJyYXlcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBpdGVtczogZnVuY3Rpb24gaXRlbXMoKSB7XG4gICAgICB0aGlzLnVwZGF0ZVZpc2libGVJdGVtcyh0cnVlKTtcbiAgICB9LFxuICAgIHBhZ2VNb2RlOiBmdW5jdGlvbiBwYWdlTW9kZSgpIHtcbiAgICAgIHRoaXMuYXBwbHlQYWdlTW9kZSgpO1xuICAgICAgdGhpcy51cGRhdGVWaXNpYmxlSXRlbXMoZmFsc2UpO1xuICAgIH0sXG4gICAgc2l6ZXM6IHtcbiAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVmlzaWJsZUl0ZW1zKGZhbHNlKTtcbiAgICAgIH0sXG4gICAgICBkZWVwOiB0cnVlXG4gICAgfVxuICB9LFxuICBjcmVhdGVkOiBmdW5jdGlvbiBjcmVhdGVkKCkge1xuICAgIHRoaXMuJF9zdGFydEluZGV4ID0gMDtcbiAgICB0aGlzLiRfZW5kSW5kZXggPSAwO1xuICAgIHRoaXMuJF92aWV3cyA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLiRfdW51c2VkVmlld3MgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy4kX3Njcm9sbERpcnR5ID0gZmFsc2U7XG4gICAgdGhpcy4kX2xhc3RVcGRhdGVTY3JvbGxQb3NpdGlvbiA9IDA7IC8vIEluIFNTUiBtb2RlLCB3ZSBhbHNvIHByZXJlbmRlciB0aGUgc2FtZSBudW1iZXIgb2YgaXRlbSBmb3IgdGhlIGZpcnN0IHJlbmRlclxuICAgIC8vIHRvIGF2b2lyIG1pc21hdGNoIGJldHdlZW4gc2VydmVyIGFuZCBjbGllbnQgdGVtcGxhdGVzXG5cbiAgICBpZiAodGhpcy5wcmVyZW5kZXIpIHtcbiAgICAgIHRoaXMuJF9wcmVyZW5kZXIgPSB0cnVlO1xuICAgICAgdGhpcy51cGRhdGVWaXNpYmxlSXRlbXMoZmFsc2UpO1xuICAgIH1cbiAgfSxcbiAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdGhpcy5hcHBseVBhZ2VNb2RlKCk7XG4gICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgLy8gSW4gU1NSIG1vZGUsIHJlbmRlciB0aGUgcmVhbCBudW1iZXIgb2YgdmlzaWJsZSBpdGVtc1xuICAgICAgX3RoaXMuJF9wcmVyZW5kZXIgPSBmYWxzZTtcblxuICAgICAgX3RoaXMudXBkYXRlVmlzaWJsZUl0ZW1zKHRydWUpO1xuXG4gICAgICBfdGhpcy5yZWFkeSA9IHRydWU7XG4gICAgfSk7XG4gIH0sXG4gIGJlZm9yZVVubW91bnQ6IGZ1bmN0aW9uIGJlZm9yZVVubW91bnQoKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGFkZFZpZXc6IGZ1bmN0aW9uIGFkZFZpZXcocG9vbCwgaW5kZXgsIGl0ZW0sIGtleSwgdHlwZSkge1xuICAgICAgdmFyIHZpZXcgPSB7XG4gICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgIHBvc2l0aW9uOiAwXG4gICAgICB9O1xuICAgICAgdmlldy5uciA9IHtcbiAgICAgICAgaWQ6IHVpZCsrLFxuICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgIHVzZWQ6IHRydWUsXG4gICAgICAgIGtleToga2V5LFxuICAgICAgICB0eXBlOiB0eXBlXG4gICAgICB9O1xuICAgICAgcG9vbC5wdXNoKHZpZXcpO1xuICAgICAgcmV0dXJuIHZpZXc7XG4gICAgfSxcbiAgICB1bnVzZVZpZXc6IGZ1bmN0aW9uIHVudXNlVmlldyh2aWV3KSB7XG4gICAgICB2YXIgZmFrZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gICAgICB2YXIgdW51c2VkVmlld3MgPSB0aGlzLiRfdW51c2VkVmlld3M7XG4gICAgICB2YXIgdHlwZSA9IHZpZXcubnIudHlwZTtcbiAgICAgIHZhciB1bnVzZWRQb29sID0gdW51c2VkVmlld3MuZ2V0KHR5cGUpO1xuXG4gICAgICBpZiAoIXVudXNlZFBvb2wpIHtcbiAgICAgICAgdW51c2VkUG9vbCA9IFtdO1xuICAgICAgICB1bnVzZWRWaWV3cy5zZXQodHlwZSwgdW51c2VkUG9vbCk7XG4gICAgICB9XG5cbiAgICAgIHVudXNlZFBvb2wucHVzaCh2aWV3KTtcblxuICAgICAgaWYgKCFmYWtlKSB7XG4gICAgICAgIHZpZXcubnIudXNlZCA9IGZhbHNlO1xuICAgICAgICB2aWV3LnBvc2l0aW9uID0gLTk5OTk7XG4gICAgICAgIHRoaXMuJF92aWV3cy5kZWxldGUodmlldy5uci5rZXkpO1xuICAgICAgfVxuICAgIH0sXG4gICAgaGFuZGxlUmVzaXplOiBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XG4gICAgICB0aGlzLiRlbWl0KCdyZXNpemUnKTtcbiAgICAgIGlmICh0aGlzLnJlYWR5KSB0aGlzLnVwZGF0ZVZpc2libGVJdGVtcyhmYWxzZSk7XG4gICAgfSxcbiAgICBoYW5kbGVTY3JvbGw6IGZ1bmN0aW9uIGhhbmRsZVNjcm9sbChldmVudCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIGlmICghdGhpcy4kX3Njcm9sbERpcnR5KSB7XG4gICAgICAgIHRoaXMuJF9zY3JvbGxEaXJ0eSA9IHRydWU7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLiRfc2Nyb2xsRGlydHkgPSBmYWxzZTtcblxuICAgICAgICAgIHZhciBfdGhpczIkdXBkYXRlVmlzaWJsZUkgPSBfdGhpczIudXBkYXRlVmlzaWJsZUl0ZW1zKGZhbHNlLCB0cnVlKSxcbiAgICAgICAgICAgICAgY29udGludW91cyA9IF90aGlzMiR1cGRhdGVWaXNpYmxlSS5jb250aW51b3VzOyAvLyBJdCBzZWVtcyBzb21ldGltZXMgY2hyb21lIGRvZXNuJ3QgZmlyZSBzY3JvbGwgZXZlbnQgOi9cbiAgICAgICAgICAvLyBXaGVuIG5vbiBjb250aW5vdXMgc2Nyb2xsaW5nIGlzIGVuZGluZywgd2UgZm9yY2UgYSByZWZyZXNoXG5cblxuICAgICAgICAgIGlmICghY29udGludW91cykge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF90aGlzMi4kX3JlZnJlc2hUaW1vdXQpO1xuICAgICAgICAgICAgX3RoaXMyLiRfcmVmcmVzaFRpbW91dCA9IHNldFRpbWVvdXQoX3RoaXMyLmhhbmRsZVNjcm9sbCwgMTAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgaGFuZGxlVmlzaWJpbGl0eUNoYW5nZTogZnVuY3Rpb24gaGFuZGxlVmlzaWJpbGl0eUNoYW5nZShpc1Zpc2libGUsIGVudHJ5KSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMucmVhZHkpIHtcbiAgICAgICAgaWYgKGlzVmlzaWJsZSB8fCBlbnRyeS5ib3VuZGluZ0NsaWVudFJlY3Qud2lkdGggIT09IDAgfHwgZW50cnkuYm91bmRpbmdDbGllbnRSZWN0LmhlaWdodCAhPT0gMCkge1xuICAgICAgICAgIHRoaXMuJGVtaXQoJ3Zpc2libGUnKTtcbiAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMzLnVwZGF0ZVZpc2libGVJdGVtcyhmYWxzZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy4kZW1pdCgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHVwZGF0ZVZpc2libGVJdGVtczogZnVuY3Rpb24gdXBkYXRlVmlzaWJsZUl0ZW1zKGNoZWNrSXRlbSkge1xuICAgICAgdmFyIGNoZWNrUG9zaXRpb25EaWZmID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcbiAgICAgIHZhciBpdGVtU2l6ZSA9IHRoaXMuaXRlbVNpemU7XG4gICAgICB2YXIgbWluSXRlbVNpemUgPSB0aGlzLiRfY29tcHV0ZWRNaW5JdGVtU2l6ZTtcbiAgICAgIHZhciB0eXBlRmllbGQgPSB0aGlzLnR5cGVGaWVsZDtcbiAgICAgIHZhciBrZXlGaWVsZCA9IHRoaXMuc2ltcGxlQXJyYXkgPyBudWxsIDogdGhpcy5rZXlGaWVsZDtcbiAgICAgIHZhciBpdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgICB2YXIgY291bnQgPSBpdGVtcy5sZW5ndGg7XG4gICAgICB2YXIgc2l6ZXMgPSB0aGlzLnNpemVzO1xuICAgICAgdmFyIHZpZXdzID0gdGhpcy4kX3ZpZXdzO1xuICAgICAgdmFyIHVudXNlZFZpZXdzID0gdGhpcy4kX3VudXNlZFZpZXdzO1xuICAgICAgdmFyIHBvb2wgPSB0aGlzLnBvb2w7XG4gICAgICB2YXIgc3RhcnRJbmRleCwgZW5kSW5kZXg7XG4gICAgICB2YXIgdG90YWxTaXplO1xuXG4gICAgICBpZiAoIWNvdW50KSB7XG4gICAgICAgIHN0YXJ0SW5kZXggPSBlbmRJbmRleCA9IHRvdGFsU2l6ZSA9IDA7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuJF9wcmVyZW5kZXIpIHtcbiAgICAgICAgc3RhcnRJbmRleCA9IDA7XG4gICAgICAgIGVuZEluZGV4ID0gdGhpcy5wcmVyZW5kZXI7XG4gICAgICAgIHRvdGFsU2l6ZSA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgc2Nyb2xsID0gdGhpcy5nZXRTY3JvbGwoKTsgLy8gU2tpcCB1cGRhdGUgaWYgdXNlIGhhc24ndCBzY3JvbGxlZCBlbm91Z2hcblxuICAgICAgICBpZiAoY2hlY2tQb3NpdGlvbkRpZmYpIHtcbiAgICAgICAgICB2YXIgcG9zaXRpb25EaWZmID0gc2Nyb2xsLnN0YXJ0IC0gdGhpcy4kX2xhc3RVcGRhdGVTY3JvbGxQb3NpdGlvbjtcbiAgICAgICAgICBpZiAocG9zaXRpb25EaWZmIDwgMCkgcG9zaXRpb25EaWZmID0gLXBvc2l0aW9uRGlmZjtcblxuICAgICAgICAgIGlmIChpdGVtU2l6ZSA9PT0gbnVsbCAmJiBwb3NpdGlvbkRpZmYgPCBtaW5JdGVtU2l6ZSB8fCBwb3NpdGlvbkRpZmYgPCBpdGVtU2l6ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgY29udGludW91czogdHJ1ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRfbGFzdFVwZGF0ZVNjcm9sbFBvc2l0aW9uID0gc2Nyb2xsLnN0YXJ0O1xuICAgICAgICB2YXIgYnVmZmVyID0gdGhpcy5idWZmZXI7XG4gICAgICAgIHNjcm9sbC5zdGFydCAtPSBidWZmZXI7XG4gICAgICAgIHNjcm9sbC5lbmQgKz0gYnVmZmVyOyAvLyBWYXJpYWJsZSBzaXplIG1vZGVcblxuICAgICAgICBpZiAoaXRlbVNpemUgPT09IG51bGwpIHtcbiAgICAgICAgICB2YXIgaDtcbiAgICAgICAgICB2YXIgYSA9IDA7XG4gICAgICAgICAgdmFyIGIgPSBjb3VudCAtIDE7XG4gICAgICAgICAgdmFyIGkgPSB+fihjb3VudCAvIDIpO1xuICAgICAgICAgIHZhciBvbGRJOyAvLyBTZWFyY2hpbmcgZm9yIHN0YXJ0SW5kZXhcblxuICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgIG9sZEkgPSBpO1xuICAgICAgICAgICAgaCA9IHNpemVzW2ldLmFjY3VtdWxhdG9yO1xuXG4gICAgICAgICAgICBpZiAoaCA8IHNjcm9sbC5zdGFydCkge1xuICAgICAgICAgICAgICBhID0gaTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA8IGNvdW50IC0gMSAmJiBzaXplc1tpICsgMV0uYWNjdW11bGF0b3IgPiBzY3JvbGwuc3RhcnQpIHtcbiAgICAgICAgICAgICAgYiA9IGk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGkgPSB+figoYSArIGIpIC8gMik7XG4gICAgICAgICAgfSB3aGlsZSAoaSAhPT0gb2xkSSk7XG5cbiAgICAgICAgICBpIDwgMCAmJiAoaSA9IDApO1xuICAgICAgICAgIHN0YXJ0SW5kZXggPSBpOyAvLyBGb3IgY29udGFpbmVyIHN0eWxlXG5cbiAgICAgICAgICB0b3RhbFNpemUgPSBzaXplc1tjb3VudCAtIDFdLmFjY3VtdWxhdG9yOyAvLyBTZWFyY2hpbmcgZm9yIGVuZEluZGV4XG5cbiAgICAgICAgICBmb3IgKGVuZEluZGV4ID0gaTsgZW5kSW5kZXggPCBjb3VudCAmJiBzaXplc1tlbmRJbmRleF0uYWNjdW11bGF0b3IgPCBzY3JvbGwuZW5kOyBlbmRJbmRleCsrKSB7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGVuZEluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgZW5kSW5kZXggPSBpdGVtcy5sZW5ndGggLSAxO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbmRJbmRleCsrOyAvLyBCb3VuZHNcblxuICAgICAgICAgICAgZW5kSW5kZXggPiBjb3VudCAmJiAoZW5kSW5kZXggPSBjb3VudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEZpeGVkIHNpemUgbW9kZVxuICAgICAgICAgIHN0YXJ0SW5kZXggPSB+fihzY3JvbGwuc3RhcnQgLyBpdGVtU2l6ZSk7XG4gICAgICAgICAgZW5kSW5kZXggPSBNYXRoLmNlaWwoc2Nyb2xsLmVuZCAvIGl0ZW1TaXplKTsgLy8gQm91bmRzXG5cbiAgICAgICAgICBzdGFydEluZGV4IDwgMCAmJiAoc3RhcnRJbmRleCA9IDApO1xuICAgICAgICAgIGVuZEluZGV4ID4gY291bnQgJiYgKGVuZEluZGV4ID0gY291bnQpO1xuICAgICAgICAgIHRvdGFsU2l6ZSA9IGNvdW50ICogaXRlbVNpemU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGVuZEluZGV4IC0gc3RhcnRJbmRleCA+IGNvbmZpZy5pdGVtc0xpbWl0KSB7XG4gICAgICAgIHRoaXMuaXRlbXNMaW1pdEVycm9yKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudG90YWxTaXplID0gdG90YWxTaXplO1xuICAgICAgdmFyIHZpZXc7XG4gICAgICB2YXIgY29udGludW91cyA9IHN0YXJ0SW5kZXggPD0gdGhpcy4kX2VuZEluZGV4ICYmIGVuZEluZGV4ID49IHRoaXMuJF9zdGFydEluZGV4O1xuXG4gICAgICBpZiAodGhpcy4kX2NvbnRpbnVvdXMgIT09IGNvbnRpbnVvdXMpIHtcbiAgICAgICAgaWYgKGNvbnRpbnVvdXMpIHtcbiAgICAgICAgICB2aWV3cy5jbGVhcigpO1xuICAgICAgICAgIHVudXNlZFZpZXdzLmNsZWFyKCk7XG5cbiAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGwgPSBwb29sLmxlbmd0aDsgX2kgPCBsOyBfaSsrKSB7XG4gICAgICAgICAgICB2aWV3ID0gcG9vbFtfaV07XG4gICAgICAgICAgICB0aGlzLnVudXNlVmlldyh2aWV3KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRfY29udGludW91cyA9IGNvbnRpbnVvdXM7XG4gICAgICB9IGVsc2UgaWYgKGNvbnRpbnVvdXMpIHtcbiAgICAgICAgZm9yICh2YXIgX2kyID0gMCwgX2wgPSBwb29sLmxlbmd0aDsgX2kyIDwgX2w7IF9pMisrKSB7XG4gICAgICAgICAgdmlldyA9IHBvb2xbX2kyXTtcblxuICAgICAgICAgIGlmICh2aWV3Lm5yLnVzZWQpIHtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSB2aWV3IGl0ZW0gaW5kZXhcbiAgICAgICAgICAgIGlmIChjaGVja0l0ZW0pIHtcbiAgICAgICAgICAgICAgdmlldy5uci5pbmRleCA9IGl0ZW1zLmZpbmRJbmRleChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXlGaWVsZCA/IGl0ZW1ba2V5RmllbGRdID09PSB2aWV3Lml0ZW1ba2V5RmllbGRdIDogaXRlbSA9PT0gdmlldy5pdGVtO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gLy8gQ2hlY2sgaWYgaW5kZXggaXMgc3RpbGwgaW4gdmlzaWJsZSByYW5nZVxuXG5cbiAgICAgICAgICAgIGlmICh2aWV3Lm5yLmluZGV4ID09PSAtMSB8fCB2aWV3Lm5yLmluZGV4IDwgc3RhcnRJbmRleCB8fCB2aWV3Lm5yLmluZGV4ID49IGVuZEluZGV4KSB7XG4gICAgICAgICAgICAgIHRoaXMudW51c2VWaWV3KHZpZXcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgdW51c2VkSW5kZXggPSBjb250aW51b3VzID8gbnVsbCA6IG5ldyBNYXAoKTtcbiAgICAgIHZhciBpdGVtLCB0eXBlLCB1bnVzZWRQb29sO1xuICAgICAgdmFyIHY7XG5cbiAgICAgIGZvciAodmFyIF9pMyA9IHN0YXJ0SW5kZXg7IF9pMyA8IGVuZEluZGV4OyBfaTMrKykge1xuICAgICAgICBpdGVtID0gaXRlbXNbX2kzXTtcbiAgICAgICAgdmFyIGtleSA9IGtleUZpZWxkID8gaXRlbVtrZXlGaWVsZF0gOiBpdGVtO1xuXG4gICAgICAgIGlmIChrZXkgPT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIktleSBpcyBcIi5jb25jYXQoa2V5LCBcIiBvbiBpdGVtIChrZXlGaWVsZCBpcyAnXCIpLmNvbmNhdChrZXlGaWVsZCwgXCInKVwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2aWV3ID0gdmlld3MuZ2V0KGtleSk7XG5cbiAgICAgICAgaWYgKCFpdGVtU2l6ZSAmJiAhc2l6ZXNbX2kzXS5zaXplKSB7XG4gICAgICAgICAgaWYgKHZpZXcpIHRoaXMudW51c2VWaWV3KHZpZXcpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9IC8vIE5vIHZpZXcgYXNzaWduZWQgdG8gaXRlbVxuXG5cbiAgICAgICAgaWYgKCF2aWV3KSB7XG4gICAgICAgICAgdHlwZSA9IGl0ZW1bdHlwZUZpZWxkXTtcbiAgICAgICAgICB1bnVzZWRQb29sID0gdW51c2VkVmlld3MuZ2V0KHR5cGUpO1xuXG4gICAgICAgICAgaWYgKGNvbnRpbnVvdXMpIHtcbiAgICAgICAgICAgIC8vIFJldXNlIGV4aXN0aW5nIHZpZXdcbiAgICAgICAgICAgIGlmICh1bnVzZWRQb29sICYmIHVudXNlZFBvb2wubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHZpZXcgPSB1bnVzZWRQb29sLnBvcCgpO1xuICAgICAgICAgICAgICB2aWV3Lml0ZW0gPSBpdGVtO1xuICAgICAgICAgICAgICB2aWV3Lm5yLnVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgICB2aWV3Lm5yLmluZGV4ID0gX2kzO1xuICAgICAgICAgICAgICB2aWV3Lm5yLmtleSA9IGtleTtcbiAgICAgICAgICAgICAgdmlldy5uci50eXBlID0gdHlwZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZpZXcgPSB0aGlzLmFkZFZpZXcocG9vbCwgX2kzLCBpdGVtLCBrZXksIHR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBVc2UgZXhpc3Rpbmcgdmlld1xuICAgICAgICAgICAgLy8gV2UgZG9uJ3QgY2FyZSBpZiB0aGV5IGFyZSBhbHJlYWR5IHVzZWRcbiAgICAgICAgICAgIC8vIGJlY2F1c2Ugd2UgYXJlIG5vdCBpbiBjb250aW5vdXMgc2Nyb2xsaW5nXG4gICAgICAgICAgICB2ID0gdW51c2VkSW5kZXguZ2V0KHR5cGUpIHx8IDA7XG5cbiAgICAgICAgICAgIGlmICghdW51c2VkUG9vbCB8fCB2ID49IHVudXNlZFBvb2wubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHZpZXcgPSB0aGlzLmFkZFZpZXcocG9vbCwgX2kzLCBpdGVtLCBrZXksIHR5cGUpO1xuICAgICAgICAgICAgICB0aGlzLnVudXNlVmlldyh2aWV3LCB0cnVlKTtcbiAgICAgICAgICAgICAgdW51c2VkUG9vbCA9IHVudXNlZFZpZXdzLmdldCh0eXBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmlldyA9IHVudXNlZFBvb2xbdl07XG4gICAgICAgICAgICB2aWV3Lml0ZW0gPSBpdGVtO1xuICAgICAgICAgICAgdmlldy5uci51c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHZpZXcubnIuaW5kZXggPSBfaTM7XG4gICAgICAgICAgICB2aWV3Lm5yLmtleSA9IGtleTtcbiAgICAgICAgICAgIHZpZXcubnIudHlwZSA9IHR5cGU7XG4gICAgICAgICAgICB1bnVzZWRJbmRleC5zZXQodHlwZSwgdiArIDEpO1xuICAgICAgICAgICAgdisrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZpZXdzLnNldChrZXksIHZpZXcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZpZXcubnIudXNlZCA9IHRydWU7XG4gICAgICAgICAgdmlldy5pdGVtID0gaXRlbTtcbiAgICAgICAgfSAvLyBVcGRhdGUgcG9zaXRpb25cblxuXG4gICAgICAgIGlmIChpdGVtU2l6ZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHZpZXcucG9zaXRpb24gPSBzaXplc1tfaTMgLSAxXS5hY2N1bXVsYXRvcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2aWV3LnBvc2l0aW9uID0gX2kzICogaXRlbVNpemU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy4kX3N0YXJ0SW5kZXggPSBzdGFydEluZGV4O1xuICAgICAgdGhpcy4kX2VuZEluZGV4ID0gZW5kSW5kZXg7XG4gICAgICBpZiAodGhpcy5lbWl0VXBkYXRlKSB0aGlzLiRlbWl0KCd1cGRhdGUnLCBzdGFydEluZGV4LCBlbmRJbmRleCk7IC8vIEFmdGVyIHRoZSB1c2VyIGhhcyBmaW5pc2hlZCBzY3JvbGxpbmdcbiAgICAgIC8vIFNvcnQgdmlld3Mgc28gdGV4dCBzZWxlY3Rpb24gaXMgY29ycmVjdFxuXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy4kX3NvcnRUaW1lcik7XG4gICAgICB0aGlzLiRfc29ydFRpbWVyID0gc2V0VGltZW91dCh0aGlzLnNvcnRWaWV3cywgMzAwKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvbnRpbnVvdXM6IGNvbnRpbnVvdXNcbiAgICAgIH07XG4gICAgfSxcbiAgICBnZXRMaXN0ZW5lclRhcmdldDogZnVuY3Rpb24gZ2V0TGlzdGVuZXJUYXJnZXQoKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gU2Nyb2xsUGFyZW50KHRoaXMuJGVsKTsgLy8gRml4IGdsb2JhbCBzY3JvbGwgdGFyZ2V0IGZvciBDaHJvbWUgYW5kIFNhZmFyaVxuXG4gICAgICBpZiAod2luZG93LmRvY3VtZW50ICYmICh0YXJnZXQgPT09IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgdGFyZ2V0ID09PSB3aW5kb3cuZG9jdW1lbnQuYm9keSkpIHtcbiAgICAgICAgdGFyZ2V0ID0gd2luZG93O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH0sXG4gICAgZ2V0U2Nyb2xsOiBmdW5jdGlvbiBnZXRTY3JvbGwoKSB7XG4gICAgICB2YXIgZWwgPSB0aGlzLiRlbCxcbiAgICAgICAgICBkaXJlY3Rpb24gPSB0aGlzLmRpcmVjdGlvbjtcbiAgICAgIHZhciBpc1ZlcnRpY2FsID0gZGlyZWN0aW9uID09PSAndmVydGljYWwnO1xuICAgICAgdmFyIHNjcm9sbFN0YXRlO1xuXG4gICAgICBpZiAodGhpcy5wYWdlTW9kZSkge1xuICAgICAgICB2YXIgYm91bmRzID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciBib3VuZHNTaXplID0gaXNWZXJ0aWNhbCA/IGJvdW5kcy5oZWlnaHQgOiBib3VuZHMud2lkdGg7XG4gICAgICAgIHZhciBzdGFydCA9IC0oaXNWZXJ0aWNhbCA/IGJvdW5kcy50b3AgOiBib3VuZHMubGVmdCk7XG4gICAgICAgIHZhciBzaXplID0gaXNWZXJ0aWNhbCA/IHdpbmRvdy5pbm5lckhlaWdodCA6IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgICAgIGlmIChzdGFydCA8IDApIHtcbiAgICAgICAgICBzaXplICs9IHN0YXJ0O1xuICAgICAgICAgIHN0YXJ0ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGFydCArIHNpemUgPiBib3VuZHNTaXplKSB7XG4gICAgICAgICAgc2l6ZSA9IGJvdW5kc1NpemUgLSBzdGFydDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNjcm9sbFN0YXRlID0ge1xuICAgICAgICAgIHN0YXJ0OiBzdGFydCxcbiAgICAgICAgICBlbmQ6IHN0YXJ0ICsgc2l6ZVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChpc1ZlcnRpY2FsKSB7XG4gICAgICAgIHNjcm9sbFN0YXRlID0ge1xuICAgICAgICAgIHN0YXJ0OiBlbC5zY3JvbGxUb3AsXG4gICAgICAgICAgZW5kOiBlbC5zY3JvbGxUb3AgKyBlbC5jbGllbnRIZWlnaHRcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjcm9sbFN0YXRlID0ge1xuICAgICAgICAgIHN0YXJ0OiBlbC5zY3JvbGxMZWZ0LFxuICAgICAgICAgIGVuZDogZWwuc2Nyb2xsTGVmdCArIGVsLmNsaWVudFdpZHRoXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzY3JvbGxTdGF0ZTtcbiAgICB9LFxuICAgIGFwcGx5UGFnZU1vZGU6IGZ1bmN0aW9uIGFwcGx5UGFnZU1vZGUoKSB7XG4gICAgICBpZiAodGhpcy5wYWdlTW9kZSkge1xuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFkZExpc3RlbmVyczogZnVuY3Rpb24gYWRkTGlzdGVuZXJzKCkge1xuICAgICAgdGhpcy5saXN0ZW5lclRhcmdldCA9IHRoaXMuZ2V0TGlzdGVuZXJUYXJnZXQoKTtcbiAgICAgIHRoaXMubGlzdGVuZXJUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGwsIHN1cHBvcnRzUGFzc2l2ZSA/IHtcbiAgICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgICAgfSA6IGZhbHNlKTtcbiAgICAgIHRoaXMubGlzdGVuZXJUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVSZXNpemUpO1xuICAgIH0sXG4gICAgcmVtb3ZlTGlzdGVuZXJzOiBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgICBpZiAoIXRoaXMubGlzdGVuZXJUYXJnZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmxpc3RlbmVyVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGFuZGxlU2Nyb2xsKTtcbiAgICAgIHRoaXMubGlzdGVuZXJUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVSZXNpemUpO1xuICAgICAgdGhpcy5saXN0ZW5lclRhcmdldCA9IG51bGw7XG4gICAgfSxcbiAgICBzY3JvbGxUb0l0ZW06IGZ1bmN0aW9uIHNjcm9sbFRvSXRlbShpbmRleCkge1xuICAgICAgdmFyIHNjcm9sbDtcblxuICAgICAgaWYgKHRoaXMuaXRlbVNpemUgPT09IG51bGwpIHtcbiAgICAgICAgc2Nyb2xsID0gaW5kZXggPiAwID8gdGhpcy5zaXplc1tpbmRleCAtIDFdLmFjY3VtdWxhdG9yIDogMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjcm9sbCA9IGluZGV4ICogdGhpcy5pdGVtU2l6ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zY3JvbGxUb1Bvc2l0aW9uKHNjcm9sbCk7XG4gICAgfSxcbiAgICBzY3JvbGxUb1Bvc2l0aW9uOiBmdW5jdGlvbiBzY3JvbGxUb1Bvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgdGhpcy4kZWwuc2Nyb2xsVG9wID0gcG9zaXRpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiRlbC5zY3JvbGxMZWZ0ID0gcG9zaXRpb247XG4gICAgICB9XG4gICAgfSxcbiAgICBpdGVtc0xpbWl0RXJyb3I6IGZ1bmN0aW9uIGl0ZW1zTGltaXRFcnJvcigpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0l0IHNlZW1zIHRoZSBzY3JvbGxlciBlbGVtZW50IGlzblxcJ3Qgc2Nyb2xsaW5nLCBzbyBpdCB0cmllcyB0byByZW5kZXIgYWxsIHRoZSBpdGVtcyBhdCBvbmNlLicsICdTY3JvbGxlcjonLCBfdGhpczQuJGVsKTtcbiAgICAgICAgY29uc29sZS5sb2coJ01ha2Ugc3VyZSB0aGUgc2Nyb2xsZXIgaGFzIGEgZml4ZWQgaGVpZ2h0IChvciB3aWR0aCkgYW5kIFxcJ292ZXJmbG93LXlcXCcgKG9yIFxcJ292ZXJmbG93LXhcXCcpIHNldCB0byBcXCdhdXRvXFwnIHNvIGl0IGNhbiBzY3JvbGwgY29ycmVjdGx5IGFuZCBvbmx5IHJlbmRlciB0aGUgaXRlbXMgdmlzaWJsZSBpbiB0aGUgc2Nyb2xsIHZpZXdwb3J0LicpO1xuICAgICAgfSk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlbmRlcmVkIGl0ZW1zIGxpbWl0IHJlYWNoZWQnKTtcbiAgICB9LFxuICAgIHNvcnRWaWV3czogZnVuY3Rpb24gc29ydFZpZXdzKCkge1xuICAgICAgdGhpcy5wb29sLnNvcnQoZnVuY3Rpb24gKHZpZXdBLCB2aWV3Qikge1xuICAgICAgICByZXR1cm4gdmlld0EubnIuaW5kZXggLSB2aWV3Qi5uci5pbmRleDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufSk7XG5cbnZhciBfaG9pc3RlZF8xID0ge1xuICBrZXk6IDAsXG4gIGNsYXNzOiBcInZ1ZS1yZWN5Y2xlLXNjcm9sbGVyX19zbG90XCJcbn07XG52YXIgX2hvaXN0ZWRfMiA9IHtcbiAga2V5OiAxLFxuICBjbGFzczogXCJ2dWUtcmVjeWNsZS1zY3JvbGxlcl9fc2xvdFwiXG59O1xuZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICB2YXIgX2NvbXBvbmVudF9SZXNpemVPYnNlcnZlciA9IHJlc29sdmVDb21wb25lbnQoXCJSZXNpemVPYnNlcnZlclwiKTtcblxuICB2YXIgX2RpcmVjdGl2ZV9vYnNlcnZlX3Zpc2liaWxpdHkgPSByZXNvbHZlRGlyZWN0aXZlKFwib2JzZXJ2ZS12aXNpYmlsaXR5XCIpO1xuXG4gIHJldHVybiB3aXRoRGlyZWN0aXZlcygob3BlbkJsb2NrKCksIGNyZWF0ZUJsb2NrKFwiZGl2XCIsIHtcbiAgICBjbGFzczogW1widnVlLXJlY3ljbGUtc2Nyb2xsZXJcIiwgX2RlZmluZVByb3BlcnR5KHtcbiAgICAgIHJlYWR5OiBfY3R4LnJlYWR5LFxuICAgICAgJ3BhZ2UtbW9kZSc6IF9jdHgucGFnZU1vZGVcbiAgICB9LCBcImRpcmVjdGlvbi1cIi5jb25jYXQoX2N0eC5kaXJlY3Rpb24pLCB0cnVlKV0sXG4gICAgb25TY3JvbGxQYXNzaXZlOiBfY2FjaGVbMl0gfHwgKF9jYWNoZVsyXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfY3R4LmhhbmRsZVNjcm9sbC5hcHBseShfY3R4LCBhcmd1bWVudHMpO1xuICAgIH0pXG4gIH0sIFtfY3R4LiRzbG90cy5iZWZvcmUgPyAob3BlbkJsb2NrKCksIGNyZWF0ZUJsb2NrKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtyZW5kZXJTbG90KF9jdHguJHNsb3RzLCBcImJlZm9yZVwiKV0pKSA6IGNyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSksIGNyZWF0ZVZOb2RlKFwiZGl2XCIsIHtcbiAgICByZWY6IFwid3JhcHBlclwiLFxuICAgIHN0eWxlOiBfZGVmaW5lUHJvcGVydHkoe30sIF9jdHguZGlyZWN0aW9uID09PSAndmVydGljYWwnID8gJ21pbkhlaWdodCcgOiAnbWluV2lkdGgnLCBfY3R4LnRvdGFsU2l6ZSArICdweCcpLFxuICAgIGNsYXNzOiBcInZ1ZS1yZWN5Y2xlLXNjcm9sbGVyX19pdGVtLXdyYXBwZXJcIlxuICB9LCBbKG9wZW5CbG9jayh0cnVlKSwgY3JlYXRlQmxvY2soRnJhZ21lbnQsIG51bGwsIHJlbmRlckxpc3QoX2N0eC5wb29sLCBmdW5jdGlvbiAodmlldykge1xuICAgIHJldHVybiBvcGVuQmxvY2soKSwgY3JlYXRlQmxvY2soXCJkaXZcIiwge1xuICAgICAga2V5OiB2aWV3Lm5yLmlkLFxuICAgICAgc3R5bGU6IF9jdHgucmVhZHkgPyB7XG4gICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVcIi5jb25jYXQoX2N0eC5kaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcgPyAnWScgOiAnWCcsIFwiKFwiKS5jb25jYXQodmlldy5wb3NpdGlvbiwgXCJweClcIilcbiAgICAgIH0gOiBudWxsLFxuICAgICAgY2xhc3M6IFtcInZ1ZS1yZWN5Y2xlLXNjcm9sbGVyX19pdGVtLXZpZXdcIiwge1xuICAgICAgICBob3ZlcjogX2N0eC5ob3ZlcktleSA9PT0gdmlldy5uci5rZXlcbiAgICAgIH1dLFxuICAgICAgb25Nb3VzZWVudGVyOiBmdW5jdGlvbiBvbk1vdXNlZW50ZXIoJGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfY3R4LmhvdmVyS2V5ID0gdmlldy5uci5rZXk7XG4gICAgICB9LFxuICAgICAgb25Nb3VzZWxlYXZlOiBfY2FjaGVbMV0gfHwgKF9jYWNoZVsxXSA9IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIF9jdHguaG92ZXJLZXkgPSBudWxsO1xuICAgICAgfSlcbiAgICB9LCBbcmVuZGVyU2xvdChfY3R4LiRzbG90cywgXCJkZWZhdWx0XCIsIHtcbiAgICAgIGl0ZW06IHZpZXcuaXRlbSxcbiAgICAgIGluZGV4OiB2aWV3Lm5yLmluZGV4LFxuICAgICAgYWN0aXZlOiB2aWV3Lm5yLnVzZWRcbiAgICB9KV0sIDQ2XG4gICAgLyogQ0xBU1MsIFNUWUxFLCBQUk9QUywgSFlEUkFURV9FVkVOVFMgKi9cbiAgICAsIFtcIm9uTW91c2VlbnRlclwiXSk7XG4gIH0pLCAxMjhcbiAgLyogS0VZRURfRlJBR01FTlQgKi9cbiAgKSldLCA0XG4gIC8qIFNUWUxFICovXG4gICksIF9jdHguJHNsb3RzLmFmdGVyID8gKG9wZW5CbG9jaygpLCBjcmVhdGVCbG9jayhcImRpdlwiLCBfaG9pc3RlZF8yLCBbcmVuZGVyU2xvdChfY3R4LiRzbG90cywgXCJhZnRlclwiKV0pKSA6IGNyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSksIGNyZWF0ZVZOb2RlKF9jb21wb25lbnRfUmVzaXplT2JzZXJ2ZXIsIHtcbiAgICBvbk5vdGlmeTogX2N0eC5oYW5kbGVSZXNpemVcbiAgfSwgbnVsbCwgOFxuICAvKiBQUk9QUyAqL1xuICAsIFtcIm9uTm90aWZ5XCJdKV0sIDM0XG4gIC8qIENMQVNTLCBIWURSQVRFX0VWRU5UUyAqL1xuICApKSwgW1tfZGlyZWN0aXZlX29ic2VydmVfdmlzaWJpbGl0eSwgX2N0eC5oYW5kbGVWaXNpYmlsaXR5Q2hhbmdlXV0pO1xufVxuXG5zY3JpcHQucmVuZGVyID0gcmVuZGVyO1xuc2NyaXB0Ll9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvUmVjeWNsZVNjcm9sbGVyLnZ1ZVwiO1xuXG52YXIgc2NyaXB0JDEgPSB7XG4gIG5hbWU6ICdEeW5hbWljU2Nyb2xsZXInLFxuICBjb21wb25lbnRzOiB7XG4gICAgUmVjeWNsZVNjcm9sbGVyOiBzY3JpcHRcbiAgfSxcbiAgcHJvdmlkZTogZnVuY3Rpb24gcHJvdmlkZSgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIHZzY3JvbGxSZXNpemVPYnNlcnZlciA9IHVuZGVmaW5lZDtcblxuICAgIGlmICh0eXBlb2YgUmVzaXplT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2c2Nyb2xsUmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZnVuY3Rpb24gKGVudHJpZXMpIHtcbiAgICAgICAgdmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKGVudHJpZXMpLFxuICAgICAgICAgICAgX3N0ZXA7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKF9pdGVyYXRvci5zKCk7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubigpKS5kb25lOykge1xuICAgICAgICAgICAgdmFyIGVudHJ5ID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChlbnRyeS50YXJnZXQpIHtcbiAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdyZXNpemUnLCB7XG4gICAgICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgICBjb250ZW50UmVjdDogZW50cnkuY29udGVudFJlY3RcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBfaXRlcmF0b3IuZShlcnIpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIF9pdGVyYXRvci5mKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB2c2Nyb2xsRGF0YTogdGhpcy52c2Nyb2xsRGF0YSxcbiAgICAgIHZzY3JvbGxQYXJlbnQ6IHRoaXMsXG4gICAgICB2c2Nyb2xsUmVzaXplT2JzZXJ2ZXI6IHZzY3JvbGxSZXNpemVPYnNlcnZlcixcbiAgICAgIG9uVXBkYXRlU2Nyb2xsOiBmdW5jdGlvbiBvblVwZGF0ZVNjcm9sbChjYikge1xuICAgICAgICByZXR1cm4gX3RoaXMudlNjcm9sbE1hcC5wdXNoKGNiKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LFxuICBpbmhlcml0QXR0cnM6IGZhbHNlLFxuICBwcm9wczogX29iamVjdFNwcmVhZDIoe30sIHByb3BzLCB7XG4gICAgbWluSXRlbVNpemU6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH1cbiAgfSksXG4gIGVtaXRzOiBbJ3ZzY3JvbGw6dXBkYXRlJywgJ3Jlc2l6ZScsICd2aXNpYmxlJ10sXG4gIGRhdGE6IGZ1bmN0aW9uIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZzY3JvbGxEYXRhOiB7XG4gICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgc2l6ZXM6IHt9LFxuICAgICAgICB2YWxpZFNpemVzOiB7fSxcbiAgICAgICAga2V5RmllbGQ6IHRoaXMua2V5RmllbGQsXG4gICAgICAgIHNpbXBsZUFycmF5OiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHZTY3JvbGxNYXA6IFtdXG4gICAgfTtcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBzaW1wbGVBcnJheTogc2ltcGxlQXJyYXksXG4gICAgaXRlbXNXaXRoU2l6ZTogZnVuY3Rpb24gaXRlbXNXaXRoU2l6ZSgpIHtcbiAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgIHZhciBpdGVtcyA9IHRoaXMuaXRlbXMsXG4gICAgICAgICAga2V5RmllbGQgPSB0aGlzLmtleUZpZWxkLFxuICAgICAgICAgIHNpbXBsZUFycmF5ID0gdGhpcy5zaW1wbGVBcnJheTtcbiAgICAgIHZhciBzaXplcyA9IHRoaXMudnNjcm9sbERhdGEuc2l6ZXM7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBpdGVtc1tpXTtcbiAgICAgICAgdmFyIGlkID0gc2ltcGxlQXJyYXkgPyBpIDogaXRlbVtrZXlGaWVsZF07XG4gICAgICAgIHZhciBzaXplID0gc2l6ZXNbaWRdO1xuXG4gICAgICAgIGlmICh0eXBlb2Ygc2l6ZSA9PT0gJ3VuZGVmaW5lZCcgJiYgIXRoaXMuJF91bmRlZmluZWRNYXBbaWRdKSB7XG4gICAgICAgICAgc2l6ZSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgc2l6ZTogc2l6ZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuICAgIGxpc3RlbmVyczogZnVuY3Rpb24gbGlzdGVuZXJzKCkge1xuICAgICAgdmFyIGxpc3RlbmVycyA9IHt9O1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy4kYXR0cnMpIHtcbiAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKCdvbicpKSB7XG4gICAgICAgICAgaWYgKGtleSAhPT0gJ29uUmVzaXplJyAmJiBrZXkgIT09ICdvblZpc2libGUnKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnNba2V5XSA9IHRoaXMuJGF0dHJzO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGlzdGVuZXJzO1xuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBpdGVtczogZnVuY3Rpb24gaXRlbXMoKSB7XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKGZhbHNlKTtcbiAgICB9LFxuICAgIHNpbXBsZUFycmF5OiB7XG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbiBoYW5kbGVyKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudnNjcm9sbERhdGEuc2ltcGxlQXJyYXkgPSB2YWx1ZTtcbiAgICAgIH0sXG4gICAgICBpbW1lZGlhdGU6IHRydWVcbiAgICB9LFxuICAgIGRpcmVjdGlvbjogZnVuY3Rpb24gZGlyZWN0aW9uKHZhbHVlKSB7XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKHRydWUpO1xuICAgIH1cbiAgfSxcbiAgY3JlYXRlZDogZnVuY3Rpb24gY3JlYXRlZCgpIHtcbiAgICB0aGlzLiRfdXBkYXRlcyA9IFtdO1xuICAgIHRoaXMuJF91bmRlZmluZWRTaXplcyA9IDA7XG4gICAgdGhpcy4kX3VuZGVmaW5lZE1hcCA9IHt9O1xuICB9LFxuICBhY3RpdmF0ZWQ6IGZ1bmN0aW9uIGFjdGl2YXRlZCgpIHtcbiAgICB0aGlzLnZzY3JvbGxEYXRhLmFjdGl2ZSA9IHRydWU7XG4gIH0sXG4gIGRlYWN0aXZhdGVkOiBmdW5jdGlvbiBkZWFjdGl2YXRlZCgpIHtcbiAgICB0aGlzLnZzY3JvbGxEYXRhLmFjdGl2ZSA9IGZhbHNlO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25TY3JvbGxlclJlc2l6ZTogZnVuY3Rpb24gb25TY3JvbGxlclJlc2l6ZSgpIHtcbiAgICAgIHZhciBzY3JvbGxlciA9IHRoaXMuJHJlZnMuc2Nyb2xsZXI7XG5cbiAgICAgIGlmIChzY3JvbGxlcikge1xuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuJGVtaXQoJ3Jlc2l6ZScpO1xuICAgIH0sXG4gICAgb25TY3JvbGxlclZpc2libGU6IGZ1bmN0aW9uIG9uU2Nyb2xsZXJWaXNpYmxlKCkge1xuICAgICAgdGhpcy52U2Nyb2xsVXBkYXRlKGZhbHNlKTtcbiAgICAgIHRoaXMuJGVtaXQoJ3Zpc2libGUnKTtcbiAgICB9LFxuICAgIHZTY3JvbGxVcGRhdGU6IGZ1bmN0aW9uIHZTY3JvbGxVcGRhdGUoKSB7XG4gICAgICB2YXIgZm9yY2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGZhbHNlO1xuICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgIGZvcmNlOiBmb3JjZVxuICAgICAgfTtcbiAgICAgIHRoaXMuJGVtaXQoJ3ZzY3JvbGw6dXBkYXRlJywgZGF0YSk7XG4gICAgICB0aGlzLnZTY3JvbGxNYXAuZm9yRWFjaChmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBmb3JjZVVwZGF0ZTogZnVuY3Rpb24gZm9yY2VVcGRhdGUoKSB7XG4gICAgICB2YXIgY2xlYXIgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHRydWU7XG5cbiAgICAgIGlmIChjbGVhciB8fCB0aGlzLnNpbXBsZUFycmF5KSB7XG4gICAgICAgIHRoaXMudnNjcm9sbERhdGEudmFsaWRTaXplcyA9IHt9O1xuICAgICAgfVxuXG4gICAgICB0aGlzLnZTY3JvbGxVcGRhdGUodHJ1ZSk7XG4gICAgfSxcbiAgICBzY3JvbGxUb0l0ZW06IGZ1bmN0aW9uIHNjcm9sbFRvSXRlbShpbmRleCkge1xuICAgICAgdmFyIHNjcm9sbGVyID0gdGhpcy4kcmVmcy5zY3JvbGxlcjtcbiAgICAgIGlmIChzY3JvbGxlcikgc2Nyb2xsZXIuc2Nyb2xsVG9JdGVtKGluZGV4KTtcbiAgICB9LFxuICAgIGdldEl0ZW1TaXplOiBmdW5jdGlvbiBnZXRJdGVtU2l6ZShpdGVtKSB7XG4gICAgICB2YXIgaW5kZXggPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgICAgIHZhciBpZCA9IHRoaXMuc2ltcGxlQXJyYXkgPyBpbmRleCAhPSBudWxsID8gaW5kZXggOiB0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSkgOiBpdGVtW3RoaXMua2V5RmllbGRdO1xuICAgICAgcmV0dXJuIHRoaXMudnNjcm9sbERhdGEuc2l6ZXNbaWRdIHx8IDA7XG4gICAgfSxcbiAgICBzY3JvbGxUb0JvdHRvbTogZnVuY3Rpb24gc2Nyb2xsVG9Cb3R0b20oKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMuJF9zY3JvbGxpbmdUb0JvdHRvbSkgcmV0dXJuO1xuICAgICAgdGhpcy4kX3Njcm9sbGluZ1RvQm90dG9tID0gdHJ1ZTtcbiAgICAgIHZhciBlbCA9IHRoaXMuJGVsOyAvLyBJdGVtIGlzIGluc2VydGVkIHRvIHRoZSBET01cblxuICAgICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBlbC5zY3JvbGxUb3AgPSBlbC5zY3JvbGxIZWlnaHQgKyA1MDAwOyAvLyBJdGVtIHNpemVzIGFyZSBjb21wdXRlZFxuXG4gICAgICAgIHZhciBjYiA9IGZ1bmN0aW9uIGNiKCkge1xuICAgICAgICAgIGVsLnNjcm9sbFRvcCA9IGVsLnNjcm9sbEhlaWdodCArIDUwMDA7XG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGVsLnNjcm9sbFRvcCA9IGVsLnNjcm9sbEhlaWdodCArIDUwMDA7XG5cbiAgICAgICAgICAgIGlmIChfdGhpczIuJF91bmRlZmluZWRTaXplcyA9PT0gMCkge1xuICAgICAgICAgICAgICBfdGhpczIuJF9zY3JvbGxpbmdUb0JvdHRvbSA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2IpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuXG5mdW5jdGlvbiByZW5kZXIkMShfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgdmFyIF9jb21wb25lbnRfUmVjeWNsZVNjcm9sbGVyID0gcmVzb2x2ZUNvbXBvbmVudChcIlJlY3ljbGVTY3JvbGxlclwiKTtcblxuICByZXR1cm4gb3BlbkJsb2NrKCksIGNyZWF0ZUJsb2NrKF9jb21wb25lbnRfUmVjeWNsZVNjcm9sbGVyLCBtZXJnZVByb3BzKHtcbiAgICByZWY6IFwic2Nyb2xsZXJcIixcbiAgICBpdGVtczogJG9wdGlvbnMuaXRlbXNXaXRoU2l6ZSxcbiAgICBcIm1pbi1pdGVtLXNpemVcIjogJHByb3BzLm1pbkl0ZW1TaXplLFxuICAgIGRpcmVjdGlvbjogX2N0eC5kaXJlY3Rpb24sXG4gICAgXCJrZXktZmllbGRcIjogXCJpZFwiXG4gIH0sIF9jdHguJGF0dHJzLCB7XG4gICAgb25SZXNpemU6ICRvcHRpb25zLm9uU2Nyb2xsZXJSZXNpemUsXG4gICAgb25WaXNpYmxlOiAkb3B0aW9ucy5vblNjcm9sbGVyVmlzaWJsZVxuICB9LCB0b0hhbmRsZXJzKCRvcHRpb25zLmxpc3RlbmVycykpLCB7XG4gICAgZGVmYXVsdDogd2l0aEN0eChmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIGl0ZW1XaXRoU2l6ZSA9IF9yZWYuaXRlbSxcbiAgICAgICAgICBpbmRleCA9IF9yZWYuaW5kZXgsXG4gICAgICAgICAgYWN0aXZlID0gX3JlZi5hY3RpdmU7XG4gICAgICByZXR1cm4gW3JlbmRlclNsb3QoX2N0eC4kc2xvdHMsIFwiZGVmYXVsdFwiLCB7XG4gICAgICAgIGl0ZW06IGl0ZW1XaXRoU2l6ZS5pdGVtLFxuICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgIGFjdGl2ZTogYWN0aXZlLFxuICAgICAgICBpdGVtV2l0aFNpemU6IGl0ZW1XaXRoU2l6ZVxuICAgICAgfSldO1xuICAgIH0pLFxuICAgIGJlZm9yZTogd2l0aEN0eChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gW3JlbmRlclNsb3QoX2N0eC4kc2xvdHMsIFwiYmVmb3JlXCIpXTtcbiAgICB9KSxcbiAgICBhZnRlcjogd2l0aEN0eChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gW3JlbmRlclNsb3QoX2N0eC4kc2xvdHMsIFwiYWZ0ZXJcIildO1xuICAgIH0pLFxuICAgIF86IDFcbiAgfSwgMTZcbiAgLyogRlVMTF9QUk9QUyAqL1xuICAsIFtcIml0ZW1zXCIsIFwibWluLWl0ZW0tc2l6ZVwiLCBcImRpcmVjdGlvblwiLCBcIm9uUmVzaXplXCIsIFwib25WaXNpYmxlXCJdKTtcbn1cblxuc2NyaXB0JDEucmVuZGVyID0gcmVuZGVyJDE7XG5zY3JpcHQkMS5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL0R5bmFtaWNTY3JvbGxlci52dWVcIjtcblxudmFyIER5bmFtaWNTY3JvbGxlckl0ZW0gPSB7XG4gIG5hbWU6ICdEeW5hbWljU2Nyb2xsZXJJdGVtJyxcbiAgaW5qZWN0OiBbJ3ZzY3JvbGxEYXRhJywgJ3ZzY3JvbGxQYXJlbnQnLCAnb25VcGRhdGVTY3JvbGwnLCAndnNjcm9sbFJlc2l6ZU9ic2VydmVyJ10sXG4gIHByb3BzOiB7XG4gICAgaXRlbToge1xuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHdhdGNoRGF0YToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyBpZiB0aGUgdmlldyBpcyBhY3RpdmVseSB1c2VkIHRvIGRpc3BsYXkgYW4gaXRlbS5cbiAgICAgKi9cbiAgICBhY3RpdmU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgaW5kZXg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgc2l6ZURlcGVuZGVuY2llczoge1xuICAgICAgdHlwZTogW0FycmF5LCBPYmplY3RdLFxuICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH0sXG4gICAgZW1pdFJlc2l6ZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICB0YWc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdkaXYnXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGlkOiBmdW5jdGlvbiBpZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnZzY3JvbGxEYXRhLnNpbXBsZUFycmF5ID8gdGhpcy5pbmRleCA6IHRoaXMuaXRlbVt0aGlzLnZzY3JvbGxEYXRhLmtleUZpZWxkXTtcbiAgICB9LFxuICAgIHNpemU6IGZ1bmN0aW9uIHNpemUoKSB7XG4gICAgICByZXR1cm4gdGhpcy52c2Nyb2xsRGF0YS52YWxpZFNpemVzW3RoaXMuaWRdICYmIHRoaXMudnNjcm9sbERhdGEuc2l6ZXNbdGhpcy5pZF0gfHwgMDtcbiAgICB9LFxuICAgIGZpbmFsQWN0aXZlOiBmdW5jdGlvbiBmaW5hbEFjdGl2ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmFjdGl2ZSAmJiB0aGlzLnZzY3JvbGxEYXRhLmFjdGl2ZTtcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgd2F0Y2hEYXRhOiAndXBkYXRlV2F0Y2hEYXRhJyxcbiAgICBpZDogZnVuY3Rpb24gaWQoKSB7XG4gICAgICBpZiAoIXRoaXMuc2l6ZSkge1xuICAgICAgICB0aGlzLm9uRGF0YVVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZmluYWxBY3RpdmU6IGZ1bmN0aW9uIGZpbmFsQWN0aXZlKHZhbHVlKSB7XG4gICAgICBpZiAoIXRoaXMuc2l6ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICBpZiAoIXRoaXMudnNjcm9sbFBhcmVudC4kX3VuZGVmaW5lZE1hcFt0aGlzLmlkXSkge1xuICAgICAgICAgICAgdGhpcy52c2Nyb2xsUGFyZW50LiRfdW5kZWZpbmVkU2l6ZXMrKztcbiAgICAgICAgICAgIHRoaXMudnNjcm9sbFBhcmVudC4kX3VuZGVmaW5lZE1hcFt0aGlzLmlkXSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLnZzY3JvbGxQYXJlbnQuJF91bmRlZmluZWRNYXBbdGhpcy5pZF0pIHtcbiAgICAgICAgICAgIHRoaXMudnNjcm9sbFBhcmVudC4kX3VuZGVmaW5lZFNpemVzLS07XG4gICAgICAgICAgICB0aGlzLnZzY3JvbGxQYXJlbnQuJF91bmRlZmluZWRNYXBbdGhpcy5pZF0gPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMudnNjcm9sbFJlc2l6ZU9ic2VydmVyKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgIHRoaXMub2JzZXJ2ZVNpemUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnVub2JzZXJ2ZVNpemUoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSAmJiB0aGlzLiRfcGVuZGluZ1ZTY3JvbGxVcGRhdGUgPT09IHRoaXMuaWQpIHtcbiAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBjcmVhdGVkOiBmdW5jdGlvbiBjcmVhdGVkKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy4kaXNTZXJ2ZXIpIHJldHVybjtcbiAgICB0aGlzLiRfZm9yY2VOZXh0VlNjcm9sbFVwZGF0ZSA9IG51bGw7XG4gICAgdGhpcy51cGRhdGVXYXRjaERhdGEoKTtcblxuICAgIGlmICghdGhpcy52c2Nyb2xsUmVzaXplT2JzZXJ2ZXIpIHtcbiAgICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKGspIHtcbiAgICAgICAgX3RoaXMuJHdhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuc2l6ZURlcGVuZGVuY2llc1trXTtcbiAgICAgICAgfSwgX3RoaXMub25EYXRhVXBkYXRlKTtcbiAgICAgIH07XG5cbiAgICAgIGZvciAodmFyIGsgaW4gdGhpcy5zaXplRGVwZW5kZW5jaWVzKSB7XG4gICAgICAgIF9sb29wKGspO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm9uVXBkYXRlU2Nyb2xsKCd2c2Nyb2xsOnVwZGF0ZScsIHRoaXMub25Wc2Nyb2xsVXBkYXRlKTtcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uIG1vdW50ZWQoKSB7XG4gICAgaWYgKHRoaXMudnNjcm9sbERhdGEuYWN0aXZlKSB7XG4gICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgIHRoaXMub2JzZXJ2ZVNpemUoKTtcbiAgICB9XG4gIH0sXG4gIGJlZm9yZVVubW91bnQ6IGZ1bmN0aW9uIGJlZm9yZVVubW91bnQoKSB7XG4gICAgdGhpcy51bm9ic2VydmVTaXplKCk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICB1cGRhdGVTaXplOiBmdW5jdGlvbiB1cGRhdGVTaXplKCkge1xuICAgICAgaWYgKHRoaXMuZmluYWxBY3RpdmUpIHtcbiAgICAgICAgaWYgKHRoaXMuJF9wZW5kaW5nU2l6ZVVwZGF0ZSAhPT0gdGhpcy5pZCkge1xuICAgICAgICAgIHRoaXMuJF9wZW5kaW5nU2l6ZVVwZGF0ZSA9IHRoaXMuaWQ7XG4gICAgICAgICAgdGhpcy4kX2ZvcmNlTmV4dFZTY3JvbGxVcGRhdGUgPSBudWxsO1xuICAgICAgICAgIHRoaXMuJF9wZW5kaW5nVlNjcm9sbFVwZGF0ZSA9IG51bGw7XG4gICAgICAgICAgdGhpcy5jb21wdXRlU2l6ZSh0aGlzLmlkKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4kX2ZvcmNlTmV4dFZTY3JvbGxVcGRhdGUgPSB0aGlzLmlkO1xuICAgICAgfVxuICAgIH0sXG4gICAgdXBkYXRlV2F0Y2hEYXRhOiBmdW5jdGlvbiB1cGRhdGVXYXRjaERhdGEoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMud2F0Y2hEYXRhKSB7XG4gICAgICAgIHRoaXMuJF93YXRjaERhdGEgPSB0aGlzLiR3YXRjaCgnZGF0YScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczIub25EYXRhVXBkYXRlKCk7XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBkZWVwOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLiRfd2F0Y2hEYXRhKSB7XG4gICAgICAgIHRoaXMuJF93YXRjaERhdGEoKTtcbiAgICAgICAgdGhpcy4kX3dhdGNoRGF0YSA9IG51bGw7XG4gICAgICB9XG4gICAgfSxcbiAgICBvblZzY3JvbGxVcGRhdGU6IGZ1bmN0aW9uIG9uVnNjcm9sbFVwZGF0ZShfcmVmKSB7XG4gICAgICB2YXIgZm9yY2UgPSBfcmVmLmZvcmNlO1xuXG4gICAgICAvLyBJZiBub3QgYWN0aXZlLCBzZWNoZWR1bGUgYSBzaXplIHVwZGF0ZSB3aGVuIGl0IGJlY29tZXMgYWN0aXZlXG4gICAgICBpZiAoIXRoaXMuZmluYWxBY3RpdmUgJiYgZm9yY2UpIHtcbiAgICAgICAgdGhpcy4kX3BlbmRpbmdWU2Nyb2xsVXBkYXRlID0gdGhpcy5pZDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuJF9mb3JjZU5leHRWU2Nyb2xsVXBkYXRlID09PSB0aGlzLmlkIHx8IGZvcmNlIHx8ICF0aGlzLnNpemUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkRhdGFVcGRhdGU6IGZ1bmN0aW9uIG9uRGF0YVVwZGF0ZSgpIHtcbiAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgIH0sXG4gICAgY29tcHV0ZVNpemU6IGZ1bmN0aW9uIGNvbXB1dGVTaXplKGlkKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXMzLmlkID09PSBpZCkge1xuICAgICAgICAgIHZhciB3aWR0aCA9IF90aGlzMy4kZWwub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgdmFyIGhlaWdodCA9IF90aGlzMy4kZWwub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgICAgX3RoaXMzLmFwcGx5U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzMy4kX3BlbmRpbmdTaXplVXBkYXRlID0gbnVsbDtcbiAgICAgIH0pLnRoZW4oKTtcbiAgICB9LFxuICAgIGFwcGx5U2l6ZTogZnVuY3Rpb24gYXBwbHlTaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgIHZhciBzaXplID0gTWF0aC5yb3VuZCh0aGlzLnZzY3JvbGxQYXJlbnQuZGlyZWN0aW9uID09PSAndmVydGljYWwnID8gaGVpZ2h0IDogd2lkdGgpO1xuXG4gICAgICBpZiAoc2l6ZSAmJiB0aGlzLnNpemUgIT09IHNpemUpIHtcbiAgICAgICAgaWYgKHRoaXMudnNjcm9sbFBhcmVudC4kX3VuZGVmaW5lZE1hcFt0aGlzLmlkXSkge1xuICAgICAgICAgIHRoaXMudnNjcm9sbFBhcmVudC4kX3VuZGVmaW5lZFNpemVzLS07XG4gICAgICAgICAgdGhpcy52c2Nyb2xsUGFyZW50LiRfdW5kZWZpbmVkTWFwW3RoaXMuaWRdID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52c2Nyb2xsRGF0YS5zaXplc1t0aGlzLmlkXSA9IHNpemU7XG4gICAgICAgIHRoaXMudnNjcm9sbERhdGEudmFsaWRTaXplc1t0aGlzLmlkXSA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmVtaXRSZXNpemUpIHRoaXMuJGVtaXQoJ3Jlc2l6ZScsIHRoaXMuaWQpO1xuICAgICAgfVxuICAgIH0sXG4gICAgb2JzZXJ2ZVNpemU6IGZ1bmN0aW9uIG9ic2VydmVTaXplKCkge1xuICAgICAgaWYgKCF0aGlzLnZzY3JvbGxSZXNpemVPYnNlcnZlcikgcmV0dXJuO1xuICAgICAgdGhpcy52c2Nyb2xsUmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLiRlbC5wYXJlbnROb2RlKTtcbiAgICAgIHRoaXMuJGVsLnBhcmVudE5vZGUuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZSk7XG4gICAgfSxcbiAgICB1bm9ic2VydmVTaXplOiBmdW5jdGlvbiB1bm9ic2VydmVTaXplKCkge1xuICAgICAgaWYgKCF0aGlzLnZzY3JvbGxSZXNpemVPYnNlcnZlcikgcmV0dXJuO1xuICAgICAgdGhpcy52c2Nyb2xsUmVzaXplT2JzZXJ2ZXIudW5vYnNlcnZlKHRoaXMuJGVsLnBhcmVudE5vZGUpO1xuICAgICAgdGhpcy4kZWwucGFyZW50Tm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplKTtcbiAgICB9LFxuICAgIG9uUmVzaXplOiBmdW5jdGlvbiBvblJlc2l6ZShldmVudCkge1xuICAgICAgdmFyIF9ldmVudCRkZXRhaWwkY29udGVudCA9IGV2ZW50LmRldGFpbC5jb250ZW50UmVjdCxcbiAgICAgICAgICB3aWR0aCA9IF9ldmVudCRkZXRhaWwkY29udGVudC53aWR0aCxcbiAgICAgICAgICBoZWlnaHQgPSBfZXZlbnQkZGV0YWlsJGNvbnRlbnQuaGVpZ2h0O1xuICAgICAgdGhpcy5hcHBseVNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgfVxuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gY3JlYXRlVk5vZGUodGhpcy50YWcsIG51bGwsIHRoaXMuJHNsb3RzLmRlZmF1bHQoKSk7XG4gIH1cbn07XG5cbnZhciB2ZXJzaW9uID0gXCIwLjEuMVwiO1xuXG5mdW5jdGlvbiByZWdpc3RlckNvbXBvbmVudHMoYXBwLCBwcmVmaXgpIHtcbiAgYXBwLmNvbXBvbmVudChcIlwiLmNvbmNhdChwcmVmaXgsIFwicmVjeWNsZS1zY3JvbGxlclwiKSwgc2NyaXB0KTtcbiAgYXBwLmNvbXBvbmVudChcIlwiLmNvbmNhdChwcmVmaXgsIFwiUmVjeWNsZVNjcm9sbGVyXCIpLCBzY3JpcHQpO1xuICBhcHAuY29tcG9uZW50KFwiXCIuY29uY2F0KHByZWZpeCwgXCJkeW5hbWljLXNjcm9sbGVyXCIpLCBzY3JpcHQkMSk7XG4gIGFwcC5jb21wb25lbnQoXCJcIi5jb25jYXQocHJlZml4LCBcIkR5bmFtaWNTY3JvbGxlclwiKSwgc2NyaXB0JDEpO1xuICBhcHAuY29tcG9uZW50KFwiXCIuY29uY2F0KHByZWZpeCwgXCJkeW5hbWljLXNjcm9sbGVyLWl0ZW1cIiksIER5bmFtaWNTY3JvbGxlckl0ZW0pO1xuICBhcHAuY29tcG9uZW50KFwiXCIuY29uY2F0KHByZWZpeCwgXCJEeW5hbWljU2Nyb2xsZXJJdGVtXCIpLCBEeW5hbWljU2Nyb2xsZXJJdGVtKTtcbn1cblxudmFyIHBsdWdpbiA9IHtcbiAgdmVyc2lvbjogdmVyc2lvbixcbiAgaW5zdGFsbDogZnVuY3Rpb24gaW5zdGFsbChhcHAsIG9wdGlvbnMpIHtcbiAgICB2YXIgZmluYWxPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwge1xuICAgICAgaW5zdGFsbENvbXBvbmVudHM6IHRydWUsXG4gICAgICBjb21wb25lbnRzUHJlZml4OiAnJ1xuICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIga2V5IGluIGZpbmFsT3B0aW9ucykge1xuICAgICAgaWYgKHR5cGVvZiBmaW5hbE9wdGlvbnNba2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uZmlnW2tleV0gPSBmaW5hbE9wdGlvbnNba2V5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZmluYWxPcHRpb25zLmluc3RhbGxDb21wb25lbnRzKSB7XG4gICAgICByZWdpc3RlckNvbXBvbmVudHMoYXBwLCBmaW5hbE9wdGlvbnMuY29tcG9uZW50c1ByZWZpeCk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwbHVnaW47XG5leHBvcnQgeyBzY3JpcHQkMSBhcyBEeW5hbWljU2Nyb2xsZXIsIER5bmFtaWNTY3JvbGxlckl0ZW0sIHNjcmlwdCBhcyBSZWN5Y2xlU2Nyb2xsZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZ1ZTMtdmlydHVhbC1zY3JvbGxlci5lc20uanMubWFwXG4iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9FbW9qaS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTM0YWQ5NDZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9FbW9qaS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vRW1vamkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbnNjcmlwdC5yZW5kZXIgPSByZW5kZXJcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHNjcmlwdC5fX2htcklkID0gXCI1MzRhZDk0NlwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzUzNGFkOTQ2Jywgc2NyaXB0KSkge1xuICAgIGFwaS5yZWxvYWQoJzUzNGFkOTQ2Jywgc2NyaXB0KVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRW1vamkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUzNGFkOTQ2XCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzUzNGFkOTQ2JywgcmVuZGVyKVxuICB9KVxuXG59XG5cbnNjcmlwdC5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL0Vtb2ppLnZ1ZVwiXG5cbmV4cG9ydCBkZWZhdWx0IHNjcmlwdCIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3JlZi0tMTAtMCEuL0Vtb2ppLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3JlZi0tMTAtMCEuL0Vtb2ppLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cmVmLS01IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3JlZi0tMTAtMCEuL0Vtb2ppLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MzRhZDk0NlwiIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vUGlja2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kMTZlOTA4NFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1BpY2tlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vUGlja2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5zY3JpcHQucmVuZGVyID0gcmVuZGVyXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBzY3JpcHQuX19obXJJZCA9IFwiZDE2ZTkwODRcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCdkMTZlOTA4NCcsIHNjcmlwdCkpIHtcbiAgICBhcGkucmVsb2FkKCdkMTZlOTA4NCcsIHNjcmlwdClcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1BpY2tlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDE2ZTkwODRcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignZDE2ZTkwODQnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuc2NyaXB0Ll9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvUGlja2VyLnZ1ZVwiXG5cbmV4cG9ydCBkZWZhdWx0IHNjcmlwdCIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3JlZi0tMTAtMCEuL1BpY2tlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9yZWYtLTEwLTAhLi9QaWNrZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9yZWYtLTUhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cmVmLS0xMC0wIS4vUGlja2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kMTZlOTA4NFwiIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vU3RhdGljUGlja2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYjE2YzI2OFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1N0YXRpY1BpY2tlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vU3RhdGljUGlja2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5zY3JpcHQucmVuZGVyID0gcmVuZGVyXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBzY3JpcHQuX19obXJJZCA9IFwiMmIxNmMyNjhcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCcyYjE2YzI2OCcsIHNjcmlwdCkpIHtcbiAgICBhcGkucmVsb2FkKCcyYjE2YzI2OCcsIHNjcmlwdClcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1N0YXRpY1BpY2tlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmIxNmMyNjhcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignMmIxNmMyNjgnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuc2NyaXB0Ll9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvU3RhdGljUGlja2VyLnZ1ZVwiXG5cbmV4cG9ydCBkZWZhdWx0IHNjcmlwdCIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3JlZi0tMTAtMCEuL1N0YXRpY1BpY2tlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9yZWYtLTEwLTAhLi9TdGF0aWNQaWNrZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9yZWYtLTUhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cmVmLS0xMC0wIS4vU3RhdGljUGlja2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYjE2YzI2OFwiIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vYW5jaG9ycy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTExODgxMDRcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9hbmNob3JzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9hbmNob3JzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5zY3JpcHQucmVuZGVyID0gcmVuZGVyXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBzY3JpcHQuX19obXJJZCA9IFwiNTExODgxMDRcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc1MTE4ODEwNCcsIHNjcmlwdCkpIHtcbiAgICBhcGkucmVsb2FkKCc1MTE4ODEwNCcsIHNjcmlwdClcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxMTg4MTA0XCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzUxMTg4MTA0JywgcmVuZGVyKVxuICB9KVxuXG59XG5cbnNjcmlwdC5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL2FuY2hvcnMudnVlXCJcblxuZXhwb3J0IGRlZmF1bHQgc2NyaXB0IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cmVmLS0xMC0wIS4vYW5jaG9ycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9yZWYtLTEwLTAhLi9hbmNob3JzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cmVmLS01IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3JlZi0tMTAtMCEuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxMTg4MTA0XCIiLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mzc2Y2RhMGVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbnNjcmlwdC5yZW5kZXIgPSByZW5kZXJcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHNjcmlwdC5fX2htcklkID0gXCIzNzZjZGEwZVwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzM3NmNkYTBlJywgc2NyaXB0KSkge1xuICAgIGFwaS5yZWxvYWQoJzM3NmNkYTBlJywgc2NyaXB0KVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM3NmNkYTBlXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzM3NmNkYTBlJywgcmVuZGVyKVxuICB9KVxuXG59XG5cbnNjcmlwdC5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL2NhdGVnb3J5LnZ1ZVwiXG5cbmV4cG9ydCBkZWZhdWx0IHNjcmlwdCIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3JlZi0tMTAtMCEuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3JlZi0tMTAtMCEuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cmVmLS01IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3JlZi0tMTAtMCEuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNzZjZGEwZVwiIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBBbmNob3JzIH0gZnJvbSAnLi9hbmNob3JzLnZ1ZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2F0ZWdvcnkgfSBmcm9tICcuL2NhdGVnb3J5LnZ1ZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJldmlldyB9IGZyb20gJy4vcHJldmlldy52dWUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlYXJjaCB9IGZyb20gJy4vc2VhcmNoLnZ1ZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2tpbnMgfSBmcm9tICcuL3NraW5zLnZ1ZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRW1vamkgfSBmcm9tICcuL0Vtb2ppLnZ1ZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGlja2VyIH0gZnJvbSAnLi9QaWNrZXIudnVlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTdGF0aWNQaWNrZXIgfSBmcm9tICcuL1N0YXRpY1BpY2tlci52dWUnXG4iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9wcmV2aWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNTA1NmMzMFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbnNjcmlwdC5yZW5kZXIgPSByZW5kZXJcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHNjcmlwdC5fX2htcklkID0gXCIzNTA1NmMzMFwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzM1MDU2YzMwJywgc2NyaXB0KSkge1xuICAgIGFwaS5yZWxvYWQoJzM1MDU2YzMwJywgc2NyaXB0KVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcHJldmlldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzUwNTZjMzBcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignMzUwNTZjMzAnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuc2NyaXB0Ll9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvcHJldmlldy52dWVcIlxuXG5leHBvcnQgZGVmYXVsdCBzY3JpcHQiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9yZWYtLTEwLTAhLi9wcmV2aWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3JlZi0tMTAtMCEuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9yZWYtLTUhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cmVmLS0xMC0wIS4vcHJldmlldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzUwNTZjMzBcIiIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL3NlYXJjaC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGFkNDFiYjhcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL3NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuc2NyaXB0LnJlbmRlciA9IHJlbmRlclxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgc2NyaXB0Ll9faG1ySWQgPSBcIjRhZDQxYmI4XCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNGFkNDFiYjgnLCBzY3JpcHQpKSB7XG4gICAgYXBpLnJlbG9hZCgnNGFkNDFiYjgnLCBzY3JpcHQpXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRhZDQxYmI4XCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzRhZDQxYmI4JywgcmVuZGVyKVxuICB9KVxuXG59XG5cbnNjcmlwdC5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL3NlYXJjaC52dWVcIlxuXG5leHBvcnQgZGVmYXVsdCBzY3JpcHQiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9yZWYtLTEwLTAhLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cmVmLS0xMC0wIS4vc2VhcmNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cmVmLS01IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3JlZi0tMTAtMCEuL3NlYXJjaC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGFkNDFiYjhcIiIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL3NraW5zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYzYxNDg5NFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NraW5zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9za2lucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuc2NyaXB0LnJlbmRlciA9IHJlbmRlclxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgc2NyaXB0Ll9faG1ySWQgPSBcIjFjNjE0ODk0XCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnMWM2MTQ4OTQnLCBzY3JpcHQpKSB7XG4gICAgYXBpLnJlbG9hZCgnMWM2MTQ4OTQnLCBzY3JpcHQpXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9za2lucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWM2MTQ4OTRcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignMWM2MTQ4OTQnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuc2NyaXB0Ll9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvc2tpbnMudnVlXCJcblxuZXhwb3J0IGRlZmF1bHQgc2NyaXB0IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cmVmLS0xMC0wIS4vc2tpbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cmVmLS0xMC0wIS4vc2tpbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9yZWYtLTUhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cmVmLS0xMC0wIS4vc2tpbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFjNjE0ODk0XCIiLCJpbXBvcnQgc3RvcmUgZnJvbSAnLi91dGlscy9zdG9yZSdcbmltcG9ydCB7IHVuY29tcHJlc3MgfSBmcm9tICcuL3V0aWxzL2RhdGEnXG5pbXBvcnQgZnJlcXVlbnRseSBmcm9tICcuL3V0aWxzL2ZyZXF1ZW50bHknXG5cbmV4cG9ydCB7XG4gIFBpY2tlcixcbiAgU3RhdGljUGlja2VyLFxuICBFbW9qaSxcbiAgQW5jaG9ycyxcbiAgUHJldmlldyxcbiAgU2VhcmNoLFxuICBDYXRlZ29yeSxcbiAgU2tpbnMsXG59IGZyb20gJy4vY29tcG9uZW50cydcblxuZXhwb3J0IHsgRW1vamlJbmRleCwgRW1vamlWaWV3LCBFbW9qaURhdGEsIHNhbml0aXplIH0gZnJvbSAnLi91dGlscy9lbW9qaS1kYXRhJ1xuZXhwb3J0IHsgdW5jb21wcmVzcywgc3RvcmUsIGZyZXF1ZW50bHkgfVxuIiwiY29uc3QgX1N0cmluZyA9IFN0cmluZ1xuXG5leHBvcnQgZGVmYXVsdCBfU3RyaW5nLmZyb21Db2RlUG9pbnQgfHxcbiAgZnVuY3Rpb24gc3RyaW5nRnJvbUNvZGVQb2ludCgpIHtcbiAgICB2YXIgTUFYX1NJWkUgPSAweDQwMDBcbiAgICB2YXIgY29kZVVuaXRzID0gW11cbiAgICB2YXIgaGlnaFN1cnJvZ2F0ZVxuICAgIHZhciBsb3dTdXJyb2dhdGVcbiAgICB2YXIgaW5kZXggPSAtMVxuICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgaWYgKCFsZW5ndGgpIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gJydcbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgdmFyIGNvZGVQb2ludCA9IE51bWJlcihhcmd1bWVudHNbaW5kZXhdKVxuICAgICAgaWYgKFxuICAgICAgICAhaXNGaW5pdGUoY29kZVBvaW50KSB8fCAvLyBgTmFOYCwgYCtJbmZpbml0eWAsIG9yIGAtSW5maW5pdHlgXG4gICAgICAgIGNvZGVQb2ludCA8IDAgfHwgLy8gbm90IGEgdmFsaWQgVW5pY29kZSBjb2RlIHBvaW50XG4gICAgICAgIGNvZGVQb2ludCA+IDB4MTBmZmZmIHx8IC8vIG5vdCBhIHZhbGlkIFVuaWNvZGUgY29kZSBwb2ludFxuICAgICAgICBNYXRoLmZsb29yKGNvZGVQb2ludCkgIT0gY29kZVBvaW50IC8vIG5vdCBhbiBpbnRlZ2VyXG4gICAgICApIHtcbiAgICAgICAgdGhyb3cgUmFuZ2VFcnJvcignSW52YWxpZCBjb2RlIHBvaW50OiAnICsgY29kZVBvaW50KVxuICAgICAgfVxuICAgICAgaWYgKGNvZGVQb2ludCA8PSAweGZmZmYpIHtcbiAgICAgICAgLy8gQk1QIGNvZGUgcG9pbnRcbiAgICAgICAgY29kZVVuaXRzLnB1c2goY29kZVBvaW50KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQXN0cmFsIGNvZGUgcG9pbnQ7IHNwbGl0IGluIHN1cnJvZ2F0ZSBoYWx2ZXNcbiAgICAgICAgLy8gaHR0cDovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvamF2YXNjcmlwdC1lbmNvZGluZyNzdXJyb2dhdGUtZm9ybXVsYWVcbiAgICAgICAgY29kZVBvaW50IC09IDB4MTAwMDBcbiAgICAgICAgaGlnaFN1cnJvZ2F0ZSA9IChjb2RlUG9pbnQgPj4gMTApICsgMHhkODAwXG4gICAgICAgIGxvd1N1cnJvZ2F0ZSA9IChjb2RlUG9pbnQgJSAweDQwMCkgKyAweGRjMDBcbiAgICAgICAgY29kZVVuaXRzLnB1c2goaGlnaFN1cnJvZ2F0ZSwgbG93U3Vycm9nYXRlKVxuICAgICAgfVxuICAgICAgaWYgKGluZGV4ICsgMSA9PT0gbGVuZ3RoIHx8IGNvZGVVbml0cy5sZW5ndGggPiBNQVhfU0laRSkge1xuICAgICAgICByZXN1bHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBjb2RlVW5pdHMpXG4gICAgICAgIGNvZGVVbml0cy5sZW5ndGggPSAwXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuIiwiY29uc3QgU1ZHcyA9IHtcbiAgYWN0aXZpdHk6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk0xMiAwQzUuMzczIDAgMCA1LjM3MiAwIDEyYzAgNi42MjcgNS4zNzMgMTIgMTIgMTIgNi42MjggMCAxMi01LjM3MyAxMi0xMiAwLTYuNjI4LTUuMzcyLTEyLTEyLTEybTkuOTQ5IDExSDE3LjA1Yy4yMjQtMi41MjcgMS4yMzItNC43NzMgMS45NjgtNi4xMTNBOS45NjYgOS45NjYgMCAwIDEgMjEuOTQ5IDExTTEzIDExVjIuMDUxYTkuOTQ1IDkuOTQ1IDAgMCAxIDQuNDMyIDEuNTY0Yy0uODU4IDEuNDkxLTIuMTU2IDQuMjItMi4zOTIgNy4zODVIMTN6bS0yIDBIOC45NjFjLS4yMzgtMy4xNjUtMS41MzYtNS44OTQtMi4zOTMtNy4zODVBOS45NSA5Ljk1IDAgMCAxIDExIDIuMDUxVjExem0wIDJ2OC45NDlhOS45MzcgOS45MzcgMCAwIDEtNC40MzItMS41NjRjLjg1Ny0xLjQ5MiAyLjE1NS00LjIyMSAyLjM5My03LjM4NUgxMXptNC4wNCAwYy4yMzYgMy4xNjQgMS41MzQgNS44OTMgMi4zOTIgNy4zODVBOS45MiA5LjkyIDAgMCAxIDEzIDIxLjk0OVYxM2gyLjA0ek00Ljk4MiA0Ljg4N0M1LjcxOCA2LjIyNyA2LjcyNiA4LjQ3MyA2Ljk1MSAxMWgtNC45YTkuOTc3IDkuOTc3IDAgMCAxIDIuOTMxLTYuMTEzTTIuMDUxIDEzaDQuOWMtLjIyNiAyLjUyNy0xLjIzMyA0Ljc3MS0xLjk2OSA2LjExM0E5Ljk3MiA5Ljk3MiAwIDAgMSAyLjA1MSAxM20xNi45NjcgNi4xMTNjLS43MzUtMS4zNDItMS43NDQtMy41ODYtMS45NjgtNi4xMTNoNC44OTlhOS45NjEgOS45NjEgMCAwIDEtMi45MzEgNi4xMTNcIi8+PC9zdmc+YCxcblxuICBjdXN0b206IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDIuMDAwMDAwLCAxLjAwMDAwMClcIj48cmVjdCBpZD1cIlJlY3RhbmdsZVwiIHg9XCI4XCIgeT1cIjBcIiB3aWR0aD1cIjNcIiBoZWlnaHQ9XCIyMVwiIHJ4PVwiMS41XCI+PC9yZWN0PjxyZWN0IGlkPVwiUmVjdGFuZ2xlXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDkuODQzLCAxMC41NDkpIHJvdGF0ZSg2MCkgdHJhbnNsYXRlKC05Ljg0MywgLTEwLjU0OSkgXCIgeD1cIjguMzQzXCIgeT1cIjAuMDQ5XCIgd2lkdGg9XCIzXCIgaGVpZ2h0PVwiMjFcIiByeD1cIjEuNVwiPjwvcmVjdD48cmVjdCBpZD1cIlJlY3RhbmdsZVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5Ljg0MywgMTAuNTQ5KSByb3RhdGUoLTYwKSB0cmFuc2xhdGUoLTkuODQzLCAtMTAuNTQ5KSBcIiB4PVwiOC4zNDNcIiB5PVwiMC4wNDlcIiB3aWR0aD1cIjNcIiBoZWlnaHQ9XCIyMVwiIHJ4PVwiMS41XCI+PC9yZWN0PjwvZz48L3N2Zz5gLFxuXG4gIGZsYWdzOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNMCAwbDYuMDg0IDI0SDhMMS45MTYgMHpNMjEgNWgtNGwtMS00SDRsMyAxMmgzbDEgNGgxM0wyMSA1ek02LjU2MyAzaDcuODc1bDIgOEg4LjU2M2wtMi04em04LjgzMiAxMGwtMi44NTYgMS45MDRMMTIuMDYzIDEzaDMuMzMyek0xOSAxM2wtMS41LTZoMS45MzhsMiA4SDE2bDMtMnpcIi8+PC9zdmc+YCxcblxuICBmb29kczogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTE3IDQuOTc4Yy0xLjgzOCAwLTIuODc2LjM5Ni0zLjY4LjkzNC41MTMtMS4xNzIgMS43NjgtMi45MzQgNC42OC0yLjkzNGExIDEgMCAwIDAgMC0yYy0yLjkyMSAwLTQuNjI5IDEuMzY1LTUuNTQ3IDIuNTEyLS4wNjQuMDc4LS4xMTkuMTYyLS4xOC4yNDRDMTEuNzMgMS44MzggMTAuNzk4LjAyMyA5LjIwNy4wMjMgOC41NzkuMDIyIDcuODUuMzA2IDcgLjk3OCA1LjAyNyAyLjU0IDUuMzI5IDMuOTAyIDYuNDkyIDQuOTk5IDMuNjA5IDUuMjIyIDAgNy4zNTIgMCAxMi45NjljMCA0LjU4MiA0Ljk2MSAxMS4wMDkgOSAxMS4wMDkgMS45NzUgMCAyLjM3MS0uNDg2IDMtMSAuNjI5LjUxNCAxLjAyNSAxIDMgMSA0LjAzOSAwIDktNi40MTggOS0xMSAwLTUuOTUzLTQuMDU1LTgtNy04TTguMjQyIDIuNTQ2Yy42NDEtLjUwOC45NDMtLjUyMy45NjUtLjUyMy40MjYuMTY5Ljk3NSAxLjQwNSAxLjM1NyAzLjA1NS0xLjUyNy0uNjI5LTIuNzQxLTEuMzUyLTIuOTgtMS44NDYuMDU5LS4xMTIuMjQxLS4zNTYuNjU4LS42ODZNMTUgMjEuOTc4Yy0xLjA4IDAtMS4yMS0uMTA5LTEuNTU5LS40MDJsLS4xNzYtLjE0NmMtLjM2Ny0uMzAyLS44MTYtLjQ1Mi0xLjI2Ni0uNDUycy0uODk4LjE1LTEuMjY2LjQ1MmwtLjE3Ni4xNDZjLS4zNDcuMjkyLS40NzcuNDAyLTEuNTU3LjQwMi0yLjgxMyAwLTctNS4zODktNy05LjAwOSAwLTUuODIzIDQuNDg4LTUuOTkxIDUtNS45OTEgMS45MzkgMCAyLjQ4NC40NzEgMy4zODcgMS4yNTFsLjMyMy4yNzZhMS45OTUgMS45OTUgMCAwIDAgMi41OCAwbC4zMjMtLjI3NmMuOTAyLS43OCAxLjQ0Ny0xLjI1MSAzLjM4Ny0xLjI1MS41MTIgMCA1IC4xNjggNSA2IDAgMy42MTctNC4xODcgOS03IDlcIi8+PC9zdmc+YCxcblxuICBuYXR1cmU6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk0xNS41IDhhMS41IDEuNSAwIDEgMCAuMDAxIDMuMDAxQTEuNSAxLjUgMCAwIDAgMTUuNSA4TTguNSA4YTEuNSAxLjUgMCAxIDAgLjAwMSAzLjAwMUExLjUgMS41IDAgMCAwIDguNSA4XCIvPjxwYXRoIGQ9XCJNMTguOTMzIDBoLS4wMjdjLS45NyAwLTIuMTM4Ljc4Ny0zLjAxOCAxLjQ5Ny0xLjI3NC0uMzc0LTIuNjEyLS41MS0zLjg4Ny0uNTEtMS4yODUgMC0yLjYxNi4xMzMtMy44NzQuNTE3QzcuMjQ1Ljc5IDYuMDY5IDAgNS4wOTMgMGgtLjAyN0MzLjM1MiAwIC4wNyAyLjY3LjAwMiA3LjAyNmMtLjAzOSAyLjQ3OS4yNzYgNC4yMzggMS4wNCA1LjAxMy4yNTQuMjU4Ljg4Mi42NzcgMS4yOTUuODgyLjE5MSAzLjE3Ny45MjIgNS4yMzggMi41MzYgNi4zOC44OTcuNjM3IDIuMTg3Ljk0OSAzLjIgMS4xMDJDOC4wNCAyMC42IDggMjAuNzk1IDggMjFjMCAxLjc3MyAyLjM1IDMgNCAzIDEuNjQ4IDAgNC0xLjIyNyA0LTMgMC0uMjAxLS4wMzgtLjM5My0uMDcyLS41ODYgMi41NzMtLjM4NSA1LjQzNS0xLjg3NyA1LjkyNS03LjU4Ny4zOTYtLjIyLjg4Ny0uNTY4IDEuMTA0LS43ODguNzYzLS43NzQgMS4wNzktMi41MzQgMS4wNC01LjAxM0MyMy45MjkgMi42NyAyMC42NDYgMCAxOC45MzMgME0zLjIyMyA5LjEzNWMtLjIzNy4yODEtLjgzNyAxLjE1NS0uODg0IDEuMjM4LS4xNS0uNDEtLjM2OC0xLjM0OS0uMzM3LTMuMjkxLjA1MS0zLjI4MSAyLjQ3OC00Ljk3MiAzLjA5MS01LjAzMS4yNTYuMDE1LjczMS4yNyAxLjI2NS42NDYtMS4xMSAxLjE3MS0yLjI3NSAyLjkxNS0yLjM1MiA1LjEyNS0uMTMzLjU0Ni0uMzk4Ljg1OC0uNzgzIDEuMzEzTTEyIDIyYy0uOTAxIDAtMS45NTQtLjY5My0yLTEgMC0uNjU0LjQ3NS0xLjIzNiAxLTEuNjAyVjIwYTEgMSAwIDEgMCAyIDB2LS42MDJjLjUyNC4zNjUgMSAuOTQ3IDEgMS42MDItLjA0Ni4zMDctMS4wOTkgMS0yIDFtMy0zLjQ4di4wMmE0Ljc1MiA0Ljc1MiAwIDAgMC0xLjI2Mi0xLjAyYzEuMDkyLS41MTYgMi4yMzktMS4zMzQgMi4yMzktMi4yMTcgMC0xLjg0Mi0xLjc4MS0yLjE5NS0zLjk3Ny0yLjE5NS0yLjE5NiAwLTMuOTc4LjM1NC0zLjk3OCAyLjE5NSAwIC44ODMgMS4xNDggMS43MDEgMi4yMzggMi4yMTdBNC44IDQuOCAwIDAgMCA5IDE4LjUzOXYtLjAyNWMtMS0uMDc2LTIuMTgyLS4yODEtMi45NzMtLjg0Mi0xLjMwMS0uOTItMS44MzgtMy4wNDUtMS44NTMtNi40NzhsLjAyMy0uMDQxYy40OTYtLjgyNiAxLjQ5LTEuNDUgMS44MDQtMy4xMDIgMC0yLjA0NyAxLjM1Ny0zLjYzMSAyLjM2Mi00LjUyMkM5LjM3IDMuMTc4IDEwLjU1NSAzIDExLjk0OCAzYzEuNDQ3IDAgMi42ODUuMTkyIDMuNzMzLjU3IDEgLjkgMi4zMTYgMi40NjUgMi4zMTYgNC40OC4zMTMgMS42NTEgMS4zMDcgMi4yNzUgMS44MDMgMy4xMDIuMDM1LjA1OC4wNjguMTE3LjEwMi4xNzgtLjA1OSA1Ljk2Ny0xLjk0OSA3LjAxLTQuOTAyIDcuMTltNi42MjgtOC4yMDJjLS4wMzctLjA2NS0uMDc0LS4xMy0uMTEzLS4xOTVhNy41ODcgNy41ODcgMCAwIDAtLjczOS0uOTg3Yy0uMzg1LS40NTUtLjY0OC0uNzY4LS43ODItMS4zMTMtLjA3Ni0yLjIwOS0xLjI0MS0zLjk1NC0yLjM1My01LjEyNC41MzEtLjM3NiAxLjAwNC0uNjMgMS4yNjEtLjY0Ny42MzYuMDcxIDMuMDQ0IDEuNzY0IDMuMDk2IDUuMDMxLjAyNyAxLjgxLS4zNDcgMy4yMTgtLjM3IDMuMjM1XCIvPjwvc3ZnPmAsXG5cbiAgb2JqZWN0czogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTEyIDBhOSA5IDAgMCAwLTUgMTYuNDgyVjIxczIuMDM1IDMgNSAzIDUtMyA1LTN2LTQuNTE4QTkgOSAwIDAgMCAxMiAwem0wIDJjMy44NiAwIDcgMy4xNDEgNyA3cy0zLjE0IDctNyA3LTctMy4xNDEtNy03IDMuMTQtNyA3LTd6TTkgMTcuNDc3Yy45NC4zMzIgMS45NDYuNTIzIDMgLjUyM3MyLjA2LS4xOSAzLS41MjN2LjgzNGMtLjkxLjQzNi0xLjkyNS42ODktMyAuNjg5YTYuOTI0IDYuOTI0IDAgMCAxLTMtLjY5di0uODMzem0uMjM2IDMuMDdBOC44NTQgOC44NTQgMCAwIDAgMTIgMjFjLjk2NSAwIDEuODg4LS4xNjcgMi43NTgtLjQ1MUMxNC4xNTUgMjEuMTczIDEzLjE1MyAyMiAxMiAyMmMtMS4xMDIgMC0yLjExNy0uNzg5LTIuNzY0LTEuNDUzelwiLz48cGF0aCBkPVwiTTE0Ljc0NSAxMi40NDloLS4wMDRjLS44NTItLjAyNC0xLjE4OC0uODU4LTEuNTc3LTEuODI0LS40MjEtMS4wNjEtLjcwMy0xLjU2MS0xLjE4Mi0xLjU2NmgtLjAwOWMtLjQ4MSAwLS43ODMuNDk3LTEuMjM1IDEuNTM3LS40MzYuOTgyLS44MDEgMS44MTEtMS42MzYgMS43OTFsLS4yNzYtLjA0M2MtLjU2NS0uMTcxLS44NTMtLjY5MS0xLjI4NC0xLjc5NC0uMTI1LS4zMTMtLjIwMi0uNjMyLS4yNy0uOTEzLS4wNTEtLjIxMy0uMTI3LS41My0uMTk1LS42MzRDNy4wNjcgOS4wMDQgNy4wMzkgOSA2Ljk5IDlBMSAxIDAgMCAxIDcgN2guMDFjMS42NjIuMDE3IDIuMDE1IDEuMzczIDIuMTk4IDIuMTM0LjQ4Ni0uOTgxIDEuMzA0LTIuMDU4IDIuNzk3LTIuMDc1IDEuNTMxLjAxOCAyLjI4IDEuMTUzIDIuNzMxIDIuMTQxbC4wMDItLjAwOEMxNC45NDQgOC40MjQgMTUuMzI3IDcgMTYuOTc5IDdoLjAzMkExIDEgMCAxIDEgMTcgOWgtLjAxMWMtLjE0OS4wNzYtLjI1Ni40NzQtLjMxOS43MDlhNi40ODQgNi40ODQgMCAwIDEtLjMxMS45NTFjLS40MjkuOTczLS43OSAxLjc4OS0xLjYxNCAxLjc4OVwiLz48L3N2Zz5gLFxuXG4gIHNtaWxleXM6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk0xMiAwQzUuMzczIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDBtMCAyMkM2LjQ4NiAyMiAyIDE3LjUxNCAyIDEyUzYuNDg2IDIgMTIgMnMxMCA0LjQ4NiAxMCAxMC00LjQ4NiAxMC0xMCAxMFwiLz48cGF0aCBkPVwiTTggN2EyIDIgMCAxIDAtLjAwMSAzLjk5OUEyIDIgMCAwIDAgOCA3TTE2IDdhMiAyIDAgMSAwLS4wMDEgMy45OTlBMiAyIDAgMCAwIDE2IDdNMTUuMjMyIDE1Yy0uNjkzIDEuMTk1LTEuODcgMi0zLjM0OSAyLTEuNDc3IDAtMi42NTUtLjgwNS0zLjM0Ny0ySDE1bTMtMkg2YTYgNiAwIDEgMCAxMiAwXCIvPjwvc3ZnPmAsXG5cbiAgcGVvcGxlOiBgPHN2ZyB4bWxuczpzdmc9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGhlaWdodD1cIjI0XCIgd2lkdGg9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj4gPHBhdGggaWQ9XCJwYXRoMzgxNFwiIGQ9XCJtIDMuMzU5MTA4OSwyMS4xNzcyNiBjIDAuMTcyMDM2LDAuMDkzODUgNC4yNjU5OTQsMi4yOTgzNyA4LjgxNDQ0NTEsMi4yOTgzNyA0LjkyNzc2NywwIDguNjcwODk0LC0yLjIxMTg4MyA4LjgyNzgyLC0yLjMwNjAxOSAwLjExMzA3OSwtMC4wNjc4NSAwLjE4MjI2OCwtMC4xOTAwNTEgMC4xODIyNjcsLTAuMzIxOTIzIDAsLTMuMDMxMTkgLTAuOTI5NDk0LC01LjgwNDkzNiAtMi42MTcxOTYsLTcuODEwNzEyIC0xLjE4MDYwMywtMS40MDMxMzQgLTIuNjYxOTE4LC0yLjM1OTUxNiAtNC4yOTU2OTksLTIuNzk5NzkxIDQuNjk5MTE4LC0yLjIzNjI1OCAzLjEwMjMwNiwtOS4yODYxNzE2MiAtMi4wOTcxOTEsLTkuMjg2MTcxNjIgLTUuMTk5NDk3OCwwIC02Ljc5NjMxMDMsNy4wNDk5MTM2MiAtMi4wOTcxOTIsOS4yODYxNzE2MiAtMS42MzM3ODIxLDAuNDQwMjc1IC0zLjExNTA5NzEsMS4zOTY3OTggLTQuMjk1Njk5MSwyLjc5OTc5MSAtMS42ODc3MDMsMi4wMDU3NzYgLTIuNjE3MTk2LDQuNzc5NTIyIC0yLjYxNzE5Niw3LjgxMDcxMiAxLjJlLTYsMC4xMzczNzggMC4wNzUwMzksMC4yNjM3ODUgMC4xOTU2NDEsMC4zMjk1NzIgeiBNIDguMDQzOTMxOSw1LjgzMDg3ODMgQyA4LjA0MzkzMDksMi4xNTE1MjEgMTIuNDkyMTA3LDAuMzA5NTU4MTEgMTUuMDkzNDkxLDIuOTEwOTQxMSAxNy42OTQ4NzQsNS41MTIzMjQxIDE1Ljg1MjkxMSw5Ljk2MDUwMDYgMTIuMTczNTU0LDkuOTYwNSA5Ljg5Mzg5OTEsOS45NTc5MTM1IDguMDQ2NTE4Niw4LjExMDUzMzIgOC4wNDM5MzE5LDUuODMwODc4MyBaIG0gLTEuNjg4NzgyLDcuNjg5NDk3NyBjIDEuNTI0NTM1LC0xLjgxMTQ0OSAzLjU5MDY2MDEsLTIuODA5MDM1IDUuODE4NDA0MSwtMi44MDkwMzUgMi4yMjc3NDQsMCA0LjI5Mzg2OSwwLjk5NzU4NiA1LjgxODQwNCwyLjgwOTAzNSAxLjUzMzYzOSwxLjgyMjU3MSAyLjM5NTkzMiw0LjMzOTg1OCAyLjQzOTE1Miw3LjEwODMwMSAtMC44MDMzNTIsMC40MzQ4NzcgLTQuMTQxNjM2LDIuMDk2MTEyIC04LjI1NzU1NiwyLjA5NjExMiAtMy44MDYyOTIxLDAgLTcuMzkxMDg2MSwtMS42NzEwNDMgLTguMjU3MzY4MSwtMi4xMDQ5ODEgMC4wNDUwNSwtMi43NjUwMTcgMC45MDY5NjgsLTUuMjc4Nzg1IDIuNDM4OTY0LC03LjA5OTQzMiB6XCIgLz4gPHBhdGggaWQ9XCJwYXRoMzgxNlwiIGQ9XCJNIDEyLjE3MzgyOCAwLjM4ODY3MTg4IEMgOS4zMTk4NTEzIDAuMzg4NjcxODcgNy4zNzcwOTg4IDIuMzY3MjI4NSA2Ljg2NTIzNDQgNC42MzA4NTk0IEMgNi40MjE4NjA4IDYuNTkxNjAxNSA3LjExNTM1NjIgOC43Njc2MTE3IDguOTY0ODQzOCAxMC4xMjY5NTMgQyA3LjYxNDEyNDkgMTAuNjc3Mzc2IDYuMzU1MDUxMSAxMS40ODA5NDQgNS4zNDk2MDk0IDEyLjY3NTc4MSBDIDMuNTYyOTMxNyAxNC43OTkxODUgMi42MDE1NjI1IDE3LjcwMTQ3NSAyLjYwMTU2MjUgMjAuODQ3NjU2IEMgMi42MDE1NjU0IDIxLjE4OTg2MSAyLjc4OTQyNzYgMjEuNTA4MDAyIDMuMDg5ODQzOCAyMS42NzE4NzUgQyAzLjMwNDQwNjggMjEuNzg4OTI1IDcuNDQzNjIzOSAyNC4wMzkwNjIgMTIuMTczODI4IDI0LjAzOTA2MiBDIDE3LjI2OTkxOCAyNC4wMzkwNjIgMjEuMDgzNTY4IDIxLjc3Njc4NiAyMS4yOTEwMTYgMjEuNjUyMzQ0IEMgMjEuNTcyODEgMjEuNDgzMjY2IDIxLjc0NjA5NyAyMS4xNzYyODIgMjEuNzQ2MDk0IDIwLjg0NzY1NiBDIDIxLjc0NjA5NCAxNy43MDE0NzUgMjAuNzgyNzcgMTQuNzk5MTg1IDE4Ljk5NjA5NCAxMi42NzU3ODEgQyAxNy45OTA0NTUgMTEuNDgwNTkxIDE2LjczMzgxOCAxMC42NzUzNjIgMTUuMzgyODEyIDEwLjEyNSBDIDE3LjIzMTEzMiA4Ljc2NTU1NTIgMTcuOTI1Njc1IDYuNTkxMDcwMSAxNy40ODI0MjIgNC42MzA4NTk0IEMgMTYuOTcwNTU3IDIuMzY3MjI4NSAxNS4wMjc4MDUgMC4zODg2NzE4OCAxMi4xNzM4MjggMC4zODg2NzE4OCB6IE0gMTIuNzkyOTY5IDIuMzAwNzgxMiBDIDEzLjQ2NjI1MyAyLjQxNjE3OTIgMTQuMTI1MTEzIDIuNzM4Mzk0MSAxNC42OTUzMTIgMy4zMDg1OTM4IEMgMTUuODM1NzEyIDQuNDQ4OTkzMSAxNS45ODU2MDQgNS45NDczNTQ5IDE1LjQ2ODc1IDcuMTk1MzEyNSBDIDE0Ljk1MTg5NiA4LjQ0MzI3MDEgMTMuNzg2ODI4IDkuMzk4NDM3OCAxMi4xNzM4MjggOS4zOTg0Mzc1IEMgMTAuMTk3NzE5IDkuMzk2MTk1NCA4LjYwNzcxMSA3LjgwNjE4NyA4LjYwNTQ2ODggNS44MzAwNzgxIEMgOC42MDU0NjgzIDQuMjE3MDc4NSA5LjU2MDYzNjIgMy4wNTIwMTAyIDEwLjgwODU5NCAyLjUzNTE1NjIgQyAxMS40MzI1NzMgMi4yNzY3MjkzIDEyLjExOTY4NSAyLjE4NTM4MzMgMTIuNzkyOTY5IDIuMzAwNzgxMiB6IE0gMTIuMTczODI4IDExLjI3MzQzOCBDIDE0LjIzMzY0NyAxMS4yNzM0MzggMTYuMTMzNjc0IDEyLjE4NTA4NCAxNy41NjI1IDEzLjg4MjgxMiBDIDE4LjkzMDY5IDE1LjUwODc2NSAxOS42OTgzNDcgMTcuNzc2OTY5IDE5LjgwODU5NCAyMC4yODMyMDMgQyAxOC44MDczOTUgMjAuODAwMjM1IDE1Ljg4NjE1NyAyMi4xNjIxMDkgMTIuMTczODI4IDIyLjE2MjEwOSBDIDguNzYxNDYzMiAyMi4xNjIxMDkgNS42MjQ1NzU0IDIwLjc4NzA2OSA0LjUzOTA2MjUgMjAuMjY1NjI1IEMgNC42NTI1ODk2IDE3Ljc2NjcxNyA1LjQyMDMzMTUgMTUuNTA0NzkxIDYuNzg1MTU2MiAxMy44ODI4MTIgQyA4LjIxMzk4MjcgMTIuMTg1MDg0IDEwLjExNDAxIDExLjI3MzQzOCAxMi4xNzM4MjggMTEuMjczNDM4IHogXCIgLz4gPC9zdmc+YCxcblxuICBwbGFjZXM6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk02LjUgMTJDNS4xMjIgMTIgNCAxMy4xMjEgNCAxNC41UzUuMTIyIDE3IDYuNSAxNyA5IDE1Ljg3OSA5IDE0LjUgNy44NzggMTIgNi41IDEybTAgM2MtLjI3NSAwLS41LS4yMjUtLjUtLjVzLjIyNS0uNS41LS41LjUuMjI1LjUuNS0uMjI1LjUtLjUuNU0xNy41IDEyYy0xLjM3OCAwLTIuNSAxLjEyMS0yLjUgMi41czEuMTIyIDIuNSAyLjUgMi41IDIuNS0xLjEyMSAyLjUtMi41LTEuMTIyLTIuNS0yLjUtMi41bTAgM2MtLjI3NSAwLS41LS4yMjUtLjUtLjVzLjIyNS0uNS41LS41LjUuMjI1LjUuNS0uMjI1LjUtLjUuNVwiLz48cGF0aCBkPVwiTTIyLjQ4MiA5LjQ5NGwtMS4wMzktLjM0NkwyMS40IDloLjZjLjU1MiAwIDEtLjQzOSAxLS45OTIgMC0uMDA2LS4wMDMtLjAwOC0uMDAzLS4wMDhIMjNjMC0xLS44ODktMi0xLjk4NC0yaC0uNjQybC0uNzMxLTEuNzE3QzE5LjI2MiAzLjAxMiAxOC4wOTEgMiAxNi43NjQgMkg3LjIzNkM1LjkwOSAyIDQuNzM4IDMuMDEyIDQuMzU3IDQuMjgzTDMuNjI2IDZoLS42NDJDMS44ODkgNiAxIDcgMSA4aC4wMDNTMSA4LjAwMiAxIDguMDA4QzEgOC41NjEgMS40NDggOSAyIDloLjZsLS4wNDMuMTQ4LTEuMDM5LjM0NmEyLjAwMSAyLjAwMSAwIDAgMC0xLjM1OSAyLjA5N2wuNzUxIDcuNTA4YTEgMSAwIDAgMCAuOTk0LjkwMUgzdjFjMCAxLjEwMy44OTYgMiAyIDJoMmMxLjEwNCAwIDItLjg5NyAyLTJ2LTFoNnYxYzAgMS4xMDMuODk2IDIgMiAyaDJjMS4xMDQgMCAyLS44OTcgMi0ydi0xaDEuMDk2YS45OTkuOTk5IDAgMCAwIC45OTQtLjkwMWwuNzUxLTcuNTA4YTIuMDAxIDIuMDAxIDAgMCAwLTEuMzU5LTIuMDk3TTYuMjczIDQuODU3QzYuNDAyIDQuNDMgNi43ODggNCA3LjIzNiA0aDkuNTI3Yy40NDggMCAuODM0LjQzLjk2My44NTdMMTkuMzEzIDlINC42ODhsMS41ODUtNC4xNDN6TTcgMjFINXYtMWgydjF6bTEyIDBoLTJ2LTFoMnYxem0yLjE4OS0zSDIuODExbC0uNjYyLTYuNjA3TDMgMTFoMThsLjg1Mi4zOTNMMjEuMTg5IDE4elwiLz48L3N2Zz5gLFxuXG4gIHJlY2VudDogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTEzIDRoLTJsLS4wMDEgN0g5djJoMnYyaDJ2LTJoNHYtMmgtNHpcIi8+PHBhdGggZD1cIk0xMiAwQzUuMzczIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDBtMCAyMkM2LjQ4NiAyMiAyIDE3LjUxNCAyIDEyUzYuNDg2IDIgMTIgMnMxMCA0LjQ4NiAxMCAxMC00LjQ4NiAxMC0xMCAxMFwiLz48L3N2Zz5gLFxuXG4gIHN5bWJvbHM6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk0wIDBoMTF2Mkgwek00IDExaDNWNmg0VjRIMHYyaDR6TTE1LjUgMTdjMS4zODEgMCAyLjUtMS4xMTYgMi41LTIuNDkzcy0xLjExOS0yLjQ5My0yLjUtMi40OTNTMTMgMTMuMTMgMTMgMTQuNTA3IDE0LjExOSAxNyAxNS41IDE3bTAtMi45ODZjLjI3NiAwIC41LjIyMi41LjQ5MyAwIC4yNzItLjIyNC40OTMtLjUuNDkzcy0uNS0uMjIxLS41LS40OTMuMjI0LS40OTMuNS0uNDkzTTIxLjUgMTkuMDE0Yy0xLjM4MSAwLTIuNSAxLjExNi0yLjUgMi40OTNTMjAuMTE5IDI0IDIxLjUgMjRzMi41LTEuMTE2IDIuNS0yLjQ5My0xLjExOS0yLjQ5My0yLjUtMi40OTNtMCAyLjk4NmEuNDk3LjQ5NyAwIDAgMS0uNS0uNDkzYzAtLjI3MS4yMjQtLjQ5My41LS40OTNzLjUuMjIyLjUuNDkzYS40OTcuNDk3IDAgMCAxLS41LjQ5M00yMiAxM2wtOSA5IDEuNTEzIDEuNSA4Ljk5LTkuMDA5ek0xNyAxMWMyLjIwOSAwIDQtMS4xMTkgNC0yLjVWMnMuOTg1LS4xNjEgMS40OTguOTQ5QzIzLjAxIDQuMDU1IDIzIDYgMjMgNnMxLTEuMTE5IDEtMy4xMzVDMjQtLjAyIDIxIDAgMjEgMGgtMnY2LjM0N0E1Ljg1MyA1Ljg1MyAwIDAgMCAxNyA2Yy0yLjIwOSAwLTQgMS4xMTktNCAyLjVzMS43OTEgMi41IDQgMi41TTEwLjI5NyAyMC40ODJsLTEuNDc1LTEuNTg1YTQ3LjU0IDQ3LjU0IDAgMCAxLTEuNDQyIDEuMTI5Yy0uMzA3LS4yODgtLjk4OS0xLjAxNi0yLjA0NS0yLjE4My45MDItLjgzNiAxLjQ3OS0xLjQ2NiAxLjcyOS0xLjg5MnMuMzc2LS44NzEuMzc2LTEuMzM2YzAtLjU5Mi0uMjczLTEuMTc4LS44MTgtMS43NTktLjU0Ni0uNTgxLTEuMzI5LS44NzEtMi4zNDktLjg3MS0xLjAwOCAwLTEuNzkuMjkzLTIuMzQ0Ljg3OS0uNTU2LjU4Ny0uODMyIDEuMTgxLS44MzIgMS43ODQgMCAuODEzLjQxOSAxLjc0OCAxLjI1NiAyLjgwNS0uODQ3LjYxNC0xLjQ0NCAxLjIwOC0xLjc5NCAxLjc4NGEzLjQ2NSAzLjQ2NSAwIDAgMC0uNTIzIDEuODMzYzAgLjg1Ny4zMDggMS41Ni45MjQgMi4xMDcuNjE2LjU0OSAxLjQyMy44MjMgMi40Mi44MjMgMS4xNzMgMCAyLjQ0NC0uMzc5IDMuODEzLTEuMTM3TDguMjM1IDI0aDIuODE5bC0yLjA5LTIuMzgzIDEuMzMzLTEuMTM1em0tNi43MzYtNi4zODlhMS4wMiAxLjAyIDAgMCAxIC43My0uMjg2Yy4zMSAwIC41NTkuMDg1Ljc0Ny4yNTRhLjg0OS44NDkgMCAwIDEgLjI4My42NTljMCAuNTE4LS40MTkgMS4xMTItMS4yNTcgMS43ODQtLjUzNi0uNjUxLS44MDUtMS4yMzEtLjgwNS0xLjc0MmEuOTAxLjkwMSAwIDAgMSAuMzAyLS42NjlNMy43NCAyMmMtLjQyNyAwLS43NzgtLjExNi0xLjA1Ny0uMzQ5LS4yNzktLjIzMi0uNDE4LS40ODctLjQxOC0uNzY2IDAtLjU5NC41MDktMS4yODggMS41MjctMi4wODMuOTY4IDEuMTM0IDEuNzE3IDEuOTQ2IDIuMjQ4IDIuNDM4LS45MjEuNTA3LTEuNjg2Ljc2LTIuMy43NlwiLz48L3N2Zz5gLFxufVxuXG5leHBvcnQgZGVmYXVsdCBTVkdzXG4iLCJjb25zdCBtYXBwaW5nID0ge1xuICBuYW1lOiAnYScsXG4gIHVuaWZpZWQ6ICdiJyxcbiAgbm9uX3F1YWxpZmllZDogJ2MnLFxuICBoYXNfaW1nX2FwcGxlOiAnZCcsXG4gIGhhc19pbWdfZ29vZ2xlOiAnZScsXG4gIGhhc19pbWdfdHdpdHRlcjogJ2YnLFxuICBoYXNfaW1nX2ZhY2Vib29rOiAnaCcsXG4gIGtleXdvcmRzOiAnaicsXG4gIHNoZWV0OiAnaycsXG4gIGVtb3RpY29uczogJ2wnLFxuICB0ZXh0OiAnbScsXG4gIHNob3J0X25hbWVzOiAnbicsXG4gIGFkZGVkX2luOiAnbycsXG59XG5cbmNvbnN0IGJ1aWxkU2VhcmNoID0gKGVtb2ppKSA9PiB7XG4gIGNvbnN0IHNlYXJjaCA9IFtdXG5cbiAgdmFyIGFkZFRvU2VhcmNoID0gKHN0cmluZ3MsIHNwbGl0KSA9PiB7XG4gICAgaWYgKCFzdHJpbmdzKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICA7KEFycmF5LmlzQXJyYXkoc3RyaW5ncykgPyBzdHJpbmdzIDogW3N0cmluZ3NdKS5mb3JFYWNoKChzdHJpbmcpID0+IHtcbiAgICAgIDsoc3BsaXQgPyBzdHJpbmcuc3BsaXQoL1stfF98XFxzXSsvKSA6IFtzdHJpbmddKS5mb3JFYWNoKChzKSA9PiB7XG4gICAgICAgIHMgPSBzLnRvTG93ZXJDYXNlKClcblxuICAgICAgICBpZiAoc2VhcmNoLmluZGV4T2YocykgPT0gLTEpIHtcbiAgICAgICAgICBzZWFyY2gucHVzaChzKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBhZGRUb1NlYXJjaChlbW9qaS5zaG9ydF9uYW1lcywgdHJ1ZSlcbiAgYWRkVG9TZWFyY2goZW1vamkubmFtZSwgdHJ1ZSlcbiAgYWRkVG9TZWFyY2goZW1vamkua2V5d29yZHMsIGZhbHNlKVxuICBhZGRUb1NlYXJjaChlbW9qaS5lbW90aWNvbnMsIGZhbHNlKVxuXG4gIHJldHVybiBzZWFyY2guam9pbignLCcpXG59XG5cbmNvbnN0IGNvbXByZXNzID0gKGVtb2ppKSA9PiB7XG4gIGVtb2ppLnNob3J0X25hbWVzID0gZW1vamkuc2hvcnRfbmFtZXMuZmlsdGVyKChzaG9ydF9uYW1lKSA9PiB7XG4gICAgcmV0dXJuIHNob3J0X25hbWUgIT09IGVtb2ppLnNob3J0X25hbWVcbiAgfSlcbiAgZGVsZXRlIGVtb2ppLnNob3J0X25hbWVcblxuICBlbW9qaS5zaGVldCA9IFtlbW9qaS5zaGVldF94LCBlbW9qaS5zaGVldF95XVxuICBkZWxldGUgZW1vamkuc2hlZXRfeFxuICBkZWxldGUgZW1vamkuc2hlZXRfeVxuXG4gIGVtb2ppLmFkZGVkX2luID0gcGFyc2VJbnQoZW1vamkuYWRkZWRfaW4pXG4gIGlmIChlbW9qaS5hZGRlZF9pbiA9PT0gNikge1xuICAgIGRlbGV0ZSBlbW9qaS5hZGRlZF9pblxuICB9XG5cbiAgZm9yIChsZXQga2V5IGluIG1hcHBpbmcpIHtcbiAgICBlbW9qaVttYXBwaW5nW2tleV1dID0gZW1vamlba2V5XVxuICAgIGRlbGV0ZSBlbW9qaVtrZXldXG4gIH1cblxuICBmb3IgKGxldCBrZXkgaW4gZW1vamkpIHtcbiAgICBsZXQgdmFsdWUgPSBlbW9qaVtrZXldXG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgIXZhbHVlLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIGVtb2ppW2tleV1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgIXZhbHVlLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIGVtb2ppW2tleV1cbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICBkZWxldGUgZW1vamlba2V5XVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWVwRnJlZXplKG9iamVjdCkge1xuICAvLyBSZXRyaWV2ZSB0aGUgcHJvcGVydHkgbmFtZXMgZGVmaW5lZCBvbiBvYmplY3RcbiAgdmFyIHByb3BOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iamVjdClcblxuICAvLyBGcmVlemUgcHJvcGVydGllcyBiZWZvcmUgZnJlZXppbmcgc2VsZlxuICBmb3IgKGxldCBuYW1lIG9mIHByb3BOYW1lcykge1xuICAgIGxldCB2YWx1ZSA9IG9iamVjdFtuYW1lXVxuICAgIG9iamVjdFtuYW1lXSA9XG4gICAgICB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gZGVlcEZyZWV6ZSh2YWx1ZSkgOiB2YWx1ZVxuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKG9iamVjdClcbn1cblxuY29uc3QgdW5jb21wcmVzcyA9IChkYXRhKSA9PiB7XG4gIGlmICghZGF0YS5jb21wcmVzc2VkKSB7XG4gICAgcmV0dXJuIGRhdGFcbiAgfVxuICBkYXRhLmNvbXByZXNzZWQgPSBmYWxzZVxuXG4gIGZvciAobGV0IGlkIGluIGRhdGEuZW1vamlzKSB7XG4gICAgbGV0IGVtb2ppID0gZGF0YS5lbW9qaXNbaWRdXG5cbiAgICBmb3IgKGxldCBrZXkgaW4gbWFwcGluZykge1xuICAgICAgZW1vamlba2V5XSA9IGVtb2ppW21hcHBpbmdba2V5XV1cbiAgICAgIGRlbGV0ZSBlbW9qaVttYXBwaW5nW2tleV1dXG4gICAgfVxuXG4gICAgaWYgKCFlbW9qaS5zaG9ydF9uYW1lcykgZW1vamkuc2hvcnRfbmFtZXMgPSBbXVxuICAgIGVtb2ppLnNob3J0X25hbWVzLnVuc2hpZnQoaWQpXG5cbiAgICBlbW9qaS5zaGVldF94ID0gZW1vamkuc2hlZXRbMF1cbiAgICBlbW9qaS5zaGVldF95ID0gZW1vamkuc2hlZXRbMV1cbiAgICBkZWxldGUgZW1vamkuc2hlZXRcblxuICAgIGlmICghZW1vamkudGV4dCkgZW1vamkudGV4dCA9ICcnXG5cbiAgICBpZiAoIWVtb2ppLmFkZGVkX2luKSBlbW9qaS5hZGRlZF9pbiA9IDZcbiAgICBlbW9qaS5hZGRlZF9pbiA9IGVtb2ppLmFkZGVkX2luLnRvRml4ZWQoMSlcblxuICAgIGVtb2ppLnNlYXJjaCA9IGJ1aWxkU2VhcmNoKGVtb2ppKVxuICB9XG4gIGRhdGEgPSBkZWVwRnJlZXplKGRhdGEpXG4gIHJldHVybiBkYXRhXG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBidWlsZFNlYXJjaCwgY29tcHJlc3MsIHVuY29tcHJlc3MgfVxuIiwiaW1wb3J0IHsgaW50ZXJzZWN0LCB1bmlmaWVkVG9OYXRpdmUgfSBmcm9tICcuL2luZGV4J1xuaW1wb3J0IHsgdW5jb21wcmVzcywgYnVpbGRTZWFyY2ggfSBmcm9tICcuL2RhdGEnXG5pbXBvcnQgZnJlcXVlbnRseSBmcm9tICcuL2ZyZXF1ZW50bHknXG5cbmNvbnN0IFNIRUVUX0NPTFVNTlMgPSA1NlxuY29uc3QgQ09MT05TX1JFR0VYID0gL14oPzpcXDooW15cXDpdKylcXDopKD86XFw6c2tpbi10b25lLShcXGQpXFw6KT8kL1xuLy8gU2tpbiB0b25lc1xuY29uc3QgU0tJTlMgPSBbJzFGM0ZBJywgJzFGM0ZCJywgJzFGM0ZDJywgJzFGM0ZEJywgJzFGM0ZFJywgJzFGM0ZGJ11cblxuLyoqXG4gKiBFbW9qaSBkYXRhIHN0cnVjdHVyZTpcbiAqIHtcbiAqICAgIFwiY29tcHJlc3NlZFwiOiBmYWxzZSxcbiAqICAgIFwiYWxpYXNlc1wiOiB7XG4gKiAgICAgIGNvbGxpc2lvbjogXCJib29tXCJcbiAqICAgICAgY29va2luZzogXCJmcmllZF9lZ2dcIlxuICogICAgICBlbnZlbG9wZTogXCJlbWFpbFwiXG4gKiAgICAgIGZhY2Vfd2l0aF9maW5nZXJfY292ZXJpbmdfY2xvc2VkX2xpcHM6IFwic2h1c2hpbmdfZmFjZVwiXG4gKiAgICAgIC4uLlxuICogICAgfSxcbiAqICAgIFwiY2F0ZWdvcmllc1wiOiBbIHtcbiAqICAgICAgaWQ6IFwicGVvcGxlXCIsXG4gKiAgICAgIG5hbWU6IFwiU21pbGV5cyAmIEVtb3Rpb25cIixcbiAqICAgICAgZW1vamlzOiBbIFwiZ3Jpbm5pbmdcIiwgXCJncmluXCIsIFwiam95XCIsIC4uLiBdXG4gKiAgICB9LCB7XG4gKiAgICAgIGlkOiBcIm5hdHVyZVwiLFxuICogICAgICBuYW1lOiBcIkFuaW1hbHMgJiBOYXR1cmVcIixcbiAqICAgICAgZW1vamlzOiBbIFwibW9ua2V5X2ZhY2VcIiwgXCJtb25leVwiLCBcImdvcmlsbGFcIiwgLi4uIF1cbiAqICAgIH0sXG4gKiAgICAuLi5cbiAqICAgIF0sXG4gKiAgICBcImVtb2ppc1wiOiBbXG4gKiAgICAgIHNtaWxleToge1xuICogICAgICAgIGFkZGVkX2luOiBcIjYuMFwiLFxuICogICAgICAgIGVtb3RpY29uczogW1wiPSlcIiwgXCI9LSlcIl0sXG4gKiAgICAgICAgaGFzX2ltZ19hcHBsZTogdHJ1ZSxcbiAqICAgICAgICBoYXNfaW1nX2ZhY2Vib29rOiB0cnVlLFxuICogICAgICAgIGhhc19pbWdfZ29vZ2xlOiB0cnVlLFxuICogICAgICAgIGhhc19pbWdfdHdpdHRlcjogdHJ1ZSxcbiAqICAgICAgICBrZXl3b3JkczogW1wiZmFjZVwiLCBcImhhcHB5XCIsIFwiam95XCIsIFwiaGFoYVwiLCBcIjpEXCIsIFwiOilcIiwgXCJzbWlsZVwiLCBcImZ1bm55XCJdLFxuICogICAgICAgIG5hbWU6IFwiU21pbGluZyBGYWNlIHdpdGggT3BlbiBNb3V0aFwiLFxuICogICAgICAgIG5vbl9xdWFsaWZpZWQ6IHVuZGVmaW5lZCxcbiAqICAgICAgICBzZWFyY2g6IFwic21pbGV5LHNtaWxpbmcsZmFjZSx3aXRoLG9wZW4sbW91dGgsaGFwcHksam95LGhhaGEsOmQsOiksc21pbGUsZnVubnksPSksPS0pXCIsXG4gKiAgICAgICAgc2hlZXRfeDogMzAsXG4gKiAgICAgICAgc2hlZXRfeTogMjcsXG4gKiAgICAgICAgc2hvcnRfbmFtZXM6IFtcInNtaWxleVwiXSxcbiAqICAgICAgICB0ZXh0OiBcIjopXCIsXG4gKiAgICAgICAgdW5pZmllZDogXCIxRjYwM1wiLFxuICogICAgICB9LCB7XG4gKiAgICAgICsxOiB7ICAgIC8vIGVtb2ppIHdpdGggc2tpbl92YXJpYXRpb25zXG4gKiAgICAgICAgICAuLi4sIC8vIGFsbCB0aGUgcmVndWxhciBmaWVsZHMgYXJlIHByZXNlbnRcbiAqICAgICAgICAgIG5hbWU6IFwiVGh1bWJzIFVwIFNpZ25cIixcbiAqICAgICAgICAgIHNob3J0X25hbWVzOiAoMikgW1wiKzFcIiwgXCJ0aHVtYnN1cFwiXSxcbiAqICAgICAgICAgIHNraW5fdmFyaWF0aW9uczoge1xuICogICAgICAgICAgICAxRjNGQjogICAgICAgICAgICAgLy8gZWFjaCB2YXJpYXRpb24gaGFzIGFkZGl0aW9uYWwgc2V0IG9mIGZpZWxkczpcbiAqICAgICAgICAgICAgICBhZGRlZF9pbjogXCI4LjBcIixcbiAqICAgICAgICAgICAgICBoYXNfaW1nX2FwcGxlOiB0cnVlLFxuICogICAgICAgICAgICAgIGhhc19pbWdfZmFjZWJvb2s6IHRydWUsXG4gKiAgICAgICAgICAgICAgaGFzX2ltZ19nb29nbGU6IHRydWUsXG4gKiAgICAgICAgICAgICAgaGFzX2ltZ190d2l0dGVyOiB0cnVlLFxuICogICAgICAgICAgICAgIGltYWdlOiBcIjFmNDRkLTFmM2ZiLnBuZ1wiLFxuICogICAgICAgICAgICAgIG5vbl9xdWFsaWZpZWQ6IG51bGwsXG4gKiAgICAgICAgICAgICAgc2hlZXRfeDogMTQsXG4gKiAgICAgICAgICAgICAgc2hlZXRfeTogNTAsXG4gKiAgICAgICAgICAgICAgdW5pZmllZDogXCIxRjQ0RC0xRjNGQlwiLFxuICogICAgICAgICAgICAxRjNGQjoge+KApn0sXG4gKiAgICAgICAgICAgIDFGM0ZDOiB74oCmfSxcbiAqICAgICAgICAgICAgMUYzRkQ6IHvigKZ9LFxuICogICAgICAgICAgICAxRjNGRToge+KApn0sXG4gKiAgICAgICAgICAgIDFGM0ZGOiB74oCmfVxuICogICAgICAgICAgICB9LFxuICogICAgICAgICAgLi4uXG4gKiAgICAgIH0sXG4gKiAgICAgIGE6IHsgIC8vIGVtb2ppIHdpdGggbm9uX3F1YWxpZmllZCBmaWVsZCBzZXRcbiAqICAgICAgICBhZGRlZF9pbjogXCI2LjBcIixcbiAqICAgICAgICBlbW90aWNvbnM6IHVuZGVmaW5lZCxcbiAqICAgICAgICBoYXNfaW1nX2FwcGxlOiB0cnVlLFxuICogICAgICAgIC4uLlxuICogICAgICAgIG5vbl9xdWFsaWZpZWQ6IFwiMUYxNzBcIixcbiAqICAgICAgICB1bmlmaWVkOiBcIjFGMTcwLUZFMEZcIixcbiAqICAgICB9LFxuICogICAgIC4uLlxuICogICBdXG4gKiB9XG4gKi9cblxuLyoqXG4gKiBXcmFwcyByYXcgamFzb24gZW1vamkgZGF0YSwgc2VydmVzIGFzIGRhdGEgc291cmNlIGZvclxuICogZW1vamkgcGlja2VyIGNvbXBvbmVudHMuXG4gKlxuICogVXNhZ2U6XG4gKlxuICogICBpbXBvcnQgZGF0YSBmcm9tICcuLi9kYXRhL2FsbC5qc29uJ1xuICogICBsZXQgaW5kZXggPSBuZXcgRW1vamlJbmRleChkYXRhKVxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIEVtb2ppSW5kZXgge1xuICAvKipcbiAgICogQ29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gUmF3IGpzb24gZGF0YSwgc2VlIHRoZSBzdHJ1Y3R1cmUgYWJvdmUuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gYWRkaXRpb25hbCBvcHRpb25zLCBhcyBhbiBvYmplY3Q6XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGVtb2ppc1RvU2hvd0ZpbHRlciAtIG9wdGlvbmFsLCBmdW5jdGlvbiB0byBmaWx0ZXIgb3V0XG4gICAqICAgc29tZSBlbW9qaXMsIGZ1bmN0aW9uKGVtb2ppKSB7IHJldHVybiB0cnVlfGZhbHNlIH1cbiAgICogICB3aGVyZSBgZW1vamlgIGlzIGFuIHJhdyBlbW9qaSBvYmplY3QsIHNlZSBkYXRhLmVtb2ppcyBhYm92ZS5cbiAgICogQHBhcmFtIHtBcnJheX0gaW5jbHVkZSAtIG9wdGlvbmFsLCBhIGxpc3Qgb2YgY2F0ZWdvcnkgaWRzIHRvIGluY2x1ZGUuXG4gICAqIEBwYXJhbSB7QXJyYXl9IGV4Y2x1ZGUgLSBvcHRpb25hbCwgYSBsaXN0IG9mIGNhdGVnb3J5IGlkcyB0byBleGNsdWRlLlxuICAgKiBAcGFyYW0ge0FycmF5fSBjdXN0b20gLSBvcHRpb25hbCwgYSBsaXN0IGN1c3RvbSBlbW9qaXMsIGVhY2ggZW1vamkgaXNcbiAgICogICBhbiBvYmplY3QsIHNlZSBkYXRhLmVtb2ppcyBhYm92ZSBmb3IgZXhhbXBsZXMuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBkYXRhLFxuICAgIHtcbiAgICAgIGVtb2ppc1RvU2hvd0ZpbHRlcixcbiAgICAgIGluY2x1ZGUsXG4gICAgICBleGNsdWRlLFxuICAgICAgY3VzdG9tLFxuICAgICAgcmVjZW50LFxuICAgICAgcmVjZW50TGVuZ3RoID0gMjAsXG4gICAgfSA9IHt9LFxuICApIHtcbiAgICB0aGlzLl9kYXRhID0gdW5jb21wcmVzcyhkYXRhKVxuICAgIC8vIENhbGxiYWNrIHRvIGV4Y2x1ZGUgc3BlY2lmaWMgZW1vamlzXG4gICAgdGhpcy5fZW1vamlzRmlsdGVyID0gZW1vamlzVG9TaG93RmlsdGVyIHx8IG51bGxcbiAgICAvLyBDYXRlZ29yaWVzIHRvIGluY2x1ZGUgLyBleGNsdWRlXG4gICAgdGhpcy5faW5jbHVkZSA9IGluY2x1ZGUgfHwgbnVsbFxuICAgIHRoaXMuX2V4Y2x1ZGUgPSBleGNsdWRlIHx8IG51bGxcbiAgICAvLyBDdXN0b20gZW1vamlzXG4gICAgdGhpcy5fY3VzdG9tID0gY3VzdG9tIHx8IFtdXG4gICAgLy8gUmVjZW50IGVtb2ppc1xuICAgIC8vIFRPRE86IG1ha2UgcGFyYW1ldGVyIGNvbmZpZ3VyYWJsZVxuICAgIHRoaXMuX3JlY2VudCA9IHJlY2VudCB8fCBmcmVxdWVudGx5LmdldChyZWNlbnRMZW5ndGgpXG5cbiAgICB0aGlzLl9lbW9qaXMgPSB7fVxuICAgIHRoaXMuX25hdGl2ZUVtb2ppcyA9IHt9XG4gICAgdGhpcy5fZW1vdGljb25zID0ge31cblxuICAgIHRoaXMuX2NhdGVnb3JpZXMgPSBbXVxuICAgIHRoaXMuX3JlY2VudENhdGVnb3J5ID0geyBpZDogJ3JlY2VudCcsIG5hbWU6ICdSZWNlbnQnLCBlbW9qaXM6IFtdIH1cbiAgICB0aGlzLl9jdXN0b21DYXRlZ29yeSA9IHsgaWQ6ICdjdXN0b20nLCBuYW1lOiAnQ3VzdG9tJywgZW1vamlzOiBbXSB9XG4gICAgdGhpcy5fc2VhcmNoSW5kZXggPSB7fVxuICAgIHRoaXMuYnVpbGRJbmRleCgpXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKVxuICB9XG5cbiAgYnVpbGRJbmRleCgpIHtcbiAgICBsZXQgYWxsQ2F0ZWdvcmllcyA9IHRoaXMuX2RhdGEuY2F0ZWdvcmllc1xuXG4gICAgaWYgKHRoaXMuX2luY2x1ZGUpIHtcbiAgICAgIC8vIFJlbW92ZSBjYXRlZ29yaWVzIHRoYXQgYXJlIG5vdCBpbiB0aGUgaW5jbHVkZSBsaXN0LlxuICAgICAgYWxsQ2F0ZWdvcmllcyA9IGFsbENhdGVnb3JpZXMuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbmNsdWRlLmluY2x1ZGVzKGl0ZW0uaWQpXG4gICAgICB9KVxuICAgICAgLy8gU29ydCBjYXRlZ29yaWVzIGFjY29yZGluZyB0byB0aGUgaW5jbHVkZSBsaXN0LlxuICAgICAgYWxsQ2F0ZWdvcmllcyA9IGFsbENhdGVnb3JpZXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBjb25zdCBpbmRleEEgPSB0aGlzLl9pbmNsdWRlLmluZGV4T2YoYS5pZClcbiAgICAgICAgY29uc3QgaW5kZXhCID0gdGhpcy5faW5jbHVkZS5pbmRleE9mKGIuaWQpXG4gICAgICAgIGlmIChpbmRleEEgPCBpbmRleEIpIHtcbiAgICAgICAgICByZXR1cm4gLTFcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXhBID4gaW5kZXhCKSB7XG4gICAgICAgICAgcmV0dXJuIDFcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBhbGxDYXRlZ29yaWVzLmZvckVhY2goKGNhdGVnb3J5RGF0YSkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmlzQ2F0ZWdvcnlOZWVkZWQoY2F0ZWdvcnlEYXRhLmlkKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGxldCBjYXRlZ29yeSA9IHtcbiAgICAgICAgaWQ6IGNhdGVnb3J5RGF0YS5pZCxcbiAgICAgICAgbmFtZTogY2F0ZWdvcnlEYXRhLm5hbWUsXG4gICAgICAgIGVtb2ppczogW10sXG4gICAgICB9XG4gICAgICBjYXRlZ29yeURhdGEuZW1vamlzLmZvckVhY2goKGVtb2ppSWQpID0+IHtcbiAgICAgICAgbGV0IGVtb2ppID0gdGhpcy5hZGRFbW9qaShlbW9qaUlkKVxuICAgICAgICBpZiAoZW1vamkpIHtcbiAgICAgICAgICBjYXRlZ29yeS5lbW9qaXMucHVzaChlbW9qaSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGlmIChjYXRlZ29yeS5lbW9qaXMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX2NhdGVnb3JpZXMucHVzaChjYXRlZ29yeSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuaXNDYXRlZ29yeU5lZWRlZCgnY3VzdG9tJykpIHtcbiAgICAgIGlmICh0aGlzLl9jdXN0b20ubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGxldCBjdXN0b21FbW9qaSBvZiB0aGlzLl9jdXN0b20pIHtcbiAgICAgICAgICB0aGlzLmFkZEN1c3RvbUVtb2ppKGN1c3RvbUVtb2ppKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fY3VzdG9tQ2F0ZWdvcnkuZW1vamlzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9jYXRlZ29yaWVzLnB1c2godGhpcy5fY3VzdG9tQ2F0ZWdvcnkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNDYXRlZ29yeU5lZWRlZCgncmVjZW50JykpIHtcbiAgICAgIGlmICh0aGlzLl9yZWNlbnQubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX3JlY2VudC5tYXAoKGlkKSA9PiB7XG4gICAgICAgICAgZm9yIChsZXQgY3VzdG9tRW1vamkgb2YgdGhpcy5fY3VzdG9tQ2F0ZWdvcnkuZW1vamlzKSB7XG4gICAgICAgICAgICBpZiAoY3VzdG9tRW1vamkuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3JlY2VudENhdGVnb3J5LmVtb2ppcy5wdXNoKGN1c3RvbUVtb2ppKVxuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuaGFzRW1vamkoaWQpKSB7XG4gICAgICAgICAgICB0aGlzLl9yZWNlbnRDYXRlZ29yeS5lbW9qaXMucHVzaCh0aGlzLmVtb2ppKGlkKSlcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICAvLyBBZGQgcmVjZW50IGNhdGVnb3J5IHRvIHRoZSB0b3BcbiAgICAgIGlmICh0aGlzLl9yZWNlbnRDYXRlZ29yeS5lbW9qaXMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX2NhdGVnb3JpZXMudW5zaGlmdCh0aGlzLl9yZWNlbnRDYXRlZ29yeSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmluZCB0aGUgZW1vamkgZnJvbSB0aGUgc3RyaW5nXG4gICAqL1xuICBmaW5kRW1vamkoZW1vamksIHNraW4pIHtcbiAgICAvLyAxLiBQYXJzZSBhcyA6ZW1vamlfbmFtZTpza2luLXRvbmUteHg6XG4gICAgbGV0IG1hdGNoZXMgPSBlbW9qaS5tYXRjaChDT0xPTlNfUkVHRVgpXG5cbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgZW1vamkgPSBtYXRjaGVzWzFdXG4gICAgICBpZiAobWF0Y2hlc1syXSkge1xuICAgICAgICBza2luID0gcGFyc2VJbnQobWF0Y2hlc1syXSwgMTApXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gMi4gQ2hlY2sgaWYgdGhlIHNwZWNpZmllZCBlbW9qaSBpcyBhbiBhbGlhc1xuICAgIGlmICh0aGlzLl9kYXRhLmFsaWFzZXMuaGFzT3duUHJvcGVydHkoZW1vamkpKSB7XG4gICAgICBlbW9qaSA9IHRoaXMuX2RhdGEuYWxpYXNlc1tlbW9qaV1cbiAgICB9XG5cbiAgICAvLyAzLiBDaGVjayBpZiB3ZSBoYXZlIHRoZSBzcGVjaWZpZWQgZW1vamlcbiAgICBpZiAodGhpcy5fZW1vamlzLmhhc093blByb3BlcnR5KGVtb2ppKSkge1xuICAgICAgbGV0IGVtb2ppT2JqZWN0ID0gdGhpcy5fZW1vamlzW2Vtb2ppXVxuICAgICAgaWYgKHNraW4pIHtcbiAgICAgICAgcmV0dXJuIGVtb2ppT2JqZWN0LmdldFNraW4oc2tpbilcbiAgICAgIH1cbiAgICAgIHJldHVybiBlbW9qaU9iamVjdFxuICAgIH1cblxuICAgIC8vIDQuIENoZWNrIGlmIHdlIGhhdmUgdGhlIHNwZWNpZmllZCBuYXRpdmUgZW1vamlcbiAgICBpZiAodGhpcy5fbmF0aXZlRW1vamlzLmhhc093blByb3BlcnR5KGVtb2ppKSkge1xuICAgICAgcmV0dXJuIHRoaXMuX25hdGl2ZUVtb2ppc1tlbW9qaV1cbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNhdGVnb3JpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhdGVnb3JpZXNcbiAgfVxuXG4gIGVtb2ppKGVtb2ppSWQpIHtcbiAgICBpZiAodGhpcy5fZGF0YS5hbGlhc2VzLmhhc093blByb3BlcnR5KGVtb2ppSWQpKSB7XG4gICAgICBlbW9qaUlkID0gdGhpcy5fZGF0YS5hbGlhc2VzW2Vtb2ppSWRdXG4gICAgfVxuICAgIGxldCBlbW9qaSA9IHRoaXMuX2Vtb2ppc1tlbW9qaUlkXVxuICAgIGlmICghZW1vamkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG5vdCBmaW5kIGVtb2ppIGJ5IGlkOiAnICsgZW1vamlJZClcbiAgICB9XG4gICAgcmV0dXJuIGVtb2ppXG4gIH1cblxuICBmaXJzdEVtb2ppKCkge1xuICAgIGxldCBlbW9qaSA9IHRoaXMuX2Vtb2ppc1tPYmplY3Qua2V5cyh0aGlzLl9lbW9qaXMpWzBdXVxuICAgIGlmICghZW1vamkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG5vdCBnZXQgZmlyc3QgZW1vamknKVxuICAgIH1cbiAgICByZXR1cm4gZW1vamlcbiAgfVxuXG4gIGhhc0Vtb2ppKGVtb2ppSWQpIHtcbiAgICBpZiAodGhpcy5fZGF0YS5hbGlhc2VzLmhhc093blByb3BlcnR5KGVtb2ppSWQpKSB7XG4gICAgICBlbW9qaUlkID0gdGhpcy5fZGF0YS5hbGlhc2VzW2Vtb2ppSWRdXG4gICAgfVxuICAgIGlmICh0aGlzLl9lbW9qaXNbZW1vamlJZF0pIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbmF0aXZlRW1vamkodW5pY29kZUVtb2ppKSB7XG4gICAgaWYgKHRoaXMuX25hdGl2ZUVtb2ppcy5oYXNPd25Qcm9wZXJ0eSh1bmljb2RlRW1vamkpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbmF0aXZlRW1vamlzW3VuaWNvZGVFbW9qaV1cbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHNlYXJjaCh2YWx1ZSwgbWF4UmVzdWx0cykge1xuICAgIG1heFJlc3VsdHMgfHwgKG1heFJlc3VsdHMgPSA3NSlcbiAgICBpZiAoIXZhbHVlLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgaWYgKHZhbHVlID09ICctJyB8fCB2YWx1ZSA9PSAnLTEnKSB7XG4gICAgICByZXR1cm4gW3RoaXMuZW1vamkoJy0xJyldXG4gICAgfVxuXG4gICAgbGV0IHZhbHVlcyA9IHZhbHVlLnRvTG93ZXJDYXNlKCkuc3BsaXQoL1tcXHN8LHxcXC18X10rLylcbiAgICBsZXQgYWxsUmVzdWx0cyA9IFtdXG5cbiAgICBpZiAodmFsdWVzLmxlbmd0aCA+IDIpIHtcbiAgICAgIHZhbHVlcyA9IFt2YWx1ZXNbMF0sIHZhbHVlc1sxXV1cbiAgICB9XG5cbiAgICBhbGxSZXN1bHRzID0gdmFsdWVzXG4gICAgICAubWFwKCh2YWx1ZSkgPT4ge1xuICAgICAgICAvLyBTdGFydCBzZWFyY2hpbiBpbiB0aGUgZ2xvYmFsIGxpc3Qgb2YgZW1vamlzXG4gICAgICAgIGxldCBlbW9qaXMgPSB0aGlzLl9lbW9qaXNcbiAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IHRoaXMuX3NlYXJjaEluZGV4XG4gICAgICAgIGxldCBsZW5ndGggPSAwXG5cbiAgICAgICAgZm9yIChsZXQgY2hhckluZGV4ID0gMDsgY2hhckluZGV4IDwgdmFsdWUubGVuZ3RoOyBjaGFySW5kZXgrKykge1xuICAgICAgICAgIGNvbnN0IGNoYXIgPSB2YWx1ZVtjaGFySW5kZXhdXG4gICAgICAgICAgbGVuZ3RoKytcblxuICAgICAgICAgIGN1cnJlbnRJbmRleFtjaGFyXSB8fCAoY3VycmVudEluZGV4W2NoYXJdID0ge30pXG4gICAgICAgICAgY3VycmVudEluZGV4ID0gY3VycmVudEluZGV4W2NoYXJdXG5cbiAgICAgICAgICBpZiAoIWN1cnJlbnRJbmRleC5yZXN1bHRzKSB7XG4gICAgICAgICAgICBsZXQgc2NvcmVzID0ge31cbiAgICAgICAgICAgIGN1cnJlbnRJbmRleC5yZXN1bHRzID0gW11cbiAgICAgICAgICAgIGN1cnJlbnRJbmRleC5lbW9qaXMgPSB7fVxuXG4gICAgICAgICAgICBmb3IgKGxldCBlbW9qaUlkIGluIGVtb2ppcykge1xuICAgICAgICAgICAgICBsZXQgZW1vamkgPSBlbW9qaXNbZW1vamlJZF1cbiAgICAgICAgICAgICAgLy8gc2VhcmNoIGlzIGEgY29tbWEtc2VwYXJhdGVkIHN0cmluZyB3aXRoIHdvcmRzLCByZWxhdGVkXG4gICAgICAgICAgICAgIC8vIHRvIHRoZSBlbW9qaSwgZm9yIGV4YW1wbGU6XG4gICAgICAgICAgICAgIC8vIHNlYXJjaDogXCJzbWlsZXksc21pbGluZyxmYWNlLGpveSxoYWhhLDpkLDopLHNtaWxlLGZ1bm55LD0pLD0tKVwiLFxuICAgICAgICAgICAgICBsZXQgc2VhcmNoID0gZW1vamkuX2RhdGEuc2VhcmNoXG4gICAgICAgICAgICAgIGxldCBzdWIgPSB2YWx1ZS5zdWJzdHIoMCwgbGVuZ3RoKVxuICAgICAgICAgICAgICBsZXQgc3ViSW5kZXggPSBzZWFyY2guaW5kZXhPZihzdWIpXG4gICAgICAgICAgICAgIGlmIChzdWJJbmRleCAhPSAtMSkge1xuICAgICAgICAgICAgICAgIGxldCBzY29yZSA9IHN1YkluZGV4ICsgMVxuICAgICAgICAgICAgICAgIGlmIChzdWIgPT0gZW1vamlJZCkgc2NvcmUgPSAwXG5cbiAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXgucmVzdWx0cy5wdXNoKGVtb2ppKVxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleC5lbW9qaXNbZW1vamlJZF0gPSBlbW9qaVxuXG4gICAgICAgICAgICAgICAgc2NvcmVzW2Vtb2ppSWRdID0gc2NvcmVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudEluZGV4LnJlc3VsdHMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICB2YXIgYVNjb3JlID0gc2NvcmVzW2EuaWRdLFxuICAgICAgICAgICAgICAgIGJTY29yZSA9IHNjb3Jlc1tiLmlkXVxuICAgICAgICAgICAgICByZXR1cm4gYVNjb3JlIC0gYlNjb3JlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGNvbnRpbnVlIHNlYXJjaCBpbiB0aGUgcmVkdWNlZCBzZXQgb2YgZW1vamlzXG4gICAgICAgICAgZW1vamlzID0gY3VycmVudEluZGV4LmVtb2ppc1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjdXJyZW50SW5kZXgucmVzdWx0c1xuICAgICAgICAvLyBUaGUgXCJmaWx0ZXJcIiBjYWxsIHJlbW92ZXMgdW5kZWZpbmVkIHZhbHVlcyBmcm9tIGFsbFJlc3VsdHNcbiAgICAgICAgLy8gYXJyYXksIGZvciBleGFtcGxlLCBpZiB3ZSBoYXZlIFwidGVzdCBcIiAod2l0aCB0cmFpbGluZyBzcGFjZSksXG4gICAgICAgIC8vIHdlIHdpbGwgZ2V0IFwiW0FycmF5LCB1bmRlZmluZWRdXCIgZm9yIGFsbFJlc3VsdHMgYW5kIGFmdGVyXG4gICAgICAgIC8vIHRoZSBcImZpbHRlclwiIGNhbGwgaXQgd2lsbCB0dXJuIGludG8gXCJbQXJyYXldXCJcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKChhKSA9PiBhKVxuXG4gICAgdmFyIHJlc3VsdHMgPSBudWxsXG4gICAgaWYgKGFsbFJlc3VsdHMubGVuZ3RoID4gMSkge1xuICAgICAgcmVzdWx0cyA9IGludGVyc2VjdC5hcHBseShudWxsLCBhbGxSZXN1bHRzKVxuICAgIH0gZWxzZSBpZiAoYWxsUmVzdWx0cy5sZW5ndGgpIHtcbiAgICAgIHJlc3VsdHMgPSBhbGxSZXN1bHRzWzBdXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdHMgPSBbXVxuICAgIH1cbiAgICBpZiAocmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCA+IG1heFJlc3VsdHMpIHtcbiAgICAgIHJlc3VsdHMgPSByZXN1bHRzLnNsaWNlKDAsIG1heFJlc3VsdHMpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzXG4gIH1cblxuICBhZGRDdXN0b21FbW9qaShjdXN0b21FbW9qaSkge1xuICAgIGxldCBlbW9qaURhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBjdXN0b21FbW9qaSwge1xuICAgICAgaWQ6IGN1c3RvbUVtb2ppLnNob3J0X25hbWVzWzBdLFxuICAgICAgY3VzdG9tOiB0cnVlLFxuICAgIH0pXG4gICAgaWYgKCFlbW9qaURhdGEuc2VhcmNoKSB7XG4gICAgICBlbW9qaURhdGEuc2VhcmNoID0gYnVpbGRTZWFyY2goZW1vamlEYXRhKVxuICAgIH1cbiAgICBsZXQgZW1vamkgPSBuZXcgRW1vamlEYXRhKGVtb2ppRGF0YSlcbiAgICB0aGlzLl9lbW9qaXNbZW1vamkuaWRdID0gZW1vamlcbiAgICB0aGlzLl9jdXN0b21DYXRlZ29yeS5lbW9qaXMucHVzaChlbW9qaSlcbiAgICByZXR1cm4gZW1vamlcbiAgfVxuXG4gIGFkZEVtb2ppKGVtb2ppSWQpIHtcbiAgICAvLyBXZSBleHBlY3QgdGhlIGNvcnJlY3QgZW1vamkgaWQgdGhhdCBpcyBwcmVzZW50IGluIHRoZSBlbW9qaXMgZGF0YS5cbiAgICBsZXQgZGF0YSA9IHRoaXMuX2RhdGEuZW1vamlzW2Vtb2ppSWRdXG5cbiAgICBpZiAoIXRoaXMuaXNFbW9qaU5lZWRlZChkYXRhKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgbGV0IGVtb2ppID0gbmV3IEVtb2ppRGF0YShkYXRhKVxuICAgIHRoaXMuX2Vtb2ppc1tlbW9qaUlkXSA9IGVtb2ppXG4gICAgaWYgKGVtb2ppLm5hdGl2ZSkge1xuICAgICAgdGhpcy5fbmF0aXZlRW1vamlzW2Vtb2ppLm5hdGl2ZV0gPSBlbW9qaVxuICAgIH1cbiAgICBpZiAoZW1vamkuX3NraW5zKSB7XG4gICAgICBmb3IgKGxldCBpZHggaW4gZW1vamkuX3NraW5zKSB7XG4gICAgICAgIGxldCBza2luID0gZW1vamkuX3NraW5zW2lkeF1cbiAgICAgICAgaWYgKHNraW4ubmF0aXZlKSB7XG4gICAgICAgICAgdGhpcy5fbmF0aXZlRW1vamlzW3NraW4ubmF0aXZlXSA9IHNraW5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChlbW9qaS5lbW90aWNvbnMpIHtcbiAgICAgIGVtb2ppLmVtb3RpY29ucy5mb3JFYWNoKChlbW90aWNvbikgPT4ge1xuICAgICAgICBpZiAodGhpcy5fZW1vdGljb25zW2Vtb3RpY29uXSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2Vtb3RpY29uc1tlbW90aWNvbl0gPSBlbW9qaUlkXG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gZW1vamlcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB3ZSBuZWVkIHRvIGluY2x1ZGUgZ2l2ZW4gY2F0ZWdvcnkuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjYXRlZ29yeV9pZCAtIFRoZSBjYXRlZ29yeSBpZC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gLSBXaGV0aGVyIHRvIGluY2x1ZGUgdGhlIGVtb2ppLlxuICAgKi9cbiAgaXNDYXRlZ29yeU5lZWRlZChjYXRlZ29yeV9pZCkge1xuICAgIGxldCBpc0luY2x1ZGVkID1cbiAgICAgIHRoaXMuX2luY2x1ZGUgJiYgdGhpcy5faW5jbHVkZS5sZW5ndGhcbiAgICAgICAgPyB0aGlzLl9pbmNsdWRlLmluZGV4T2YoY2F0ZWdvcnlfaWQpID4gLTFcbiAgICAgICAgOiB0cnVlXG4gICAgbGV0IGlzRXhjbHVkZWQgPVxuICAgICAgdGhpcy5fZXhjbHVkZSAmJiB0aGlzLl9leGNsdWRlLmxlbmd0aFxuICAgICAgICA/IHRoaXMuX2V4Y2x1ZGUuaW5kZXhPZihjYXRlZ29yeV9pZCkgPiAtMVxuICAgICAgICA6IGZhbHNlXG4gICAgaWYgKCFpc0luY2x1ZGVkIHx8IGlzRXhjbHVkZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHdlIG5lZWQgdG8gaW5jbHVkZSBnaXZlbiBlbW9qaS5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGVtb2ppIC0gVGhlIHJhdyBlbW9qaSBvYmplY3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gV2hldGhlciB0byBpbmNsdWRlIHRoZSBlbW9qaS5cbiAgICovXG4gIGlzRW1vamlOZWVkZWQoZW1vamkpIHtcbiAgICBpZiAodGhpcy5fZW1vamlzRmlsdGVyKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZW1vamlzRmlsdGVyKGVtb2ppKVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFbW9qaURhdGEge1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy5fZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEpXG4gICAgdGhpcy5fc2tpbnMgPSBudWxsXG4gICAgaWYgKHRoaXMuX2RhdGEuc2tpbl92YXJpYXRpb25zKSB7XG4gICAgICB0aGlzLl9za2lucyA9IFtdXG4gICAgICBmb3IgKHZhciBza2luSWR4IGluIFNLSU5TKSB7XG4gICAgICAgIGxldCBza2luS2V5ID0gU0tJTlNbc2tpbklkeF1cbiAgICAgICAgbGV0IHZhcmlhdGlvbkRhdGEgPSB0aGlzLl9kYXRhLnNraW5fdmFyaWF0aW9uc1tza2luS2V5XVxuICAgICAgICBsZXQgc2tpbkRhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhKVxuICAgICAgICBmb3IgKGxldCBrIGluIHZhcmlhdGlvbkRhdGEpIHtcbiAgICAgICAgICBza2luRGF0YVtrXSA9IHZhcmlhdGlvbkRhdGFba11cbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgc2tpbkRhdGEuc2tpbl92YXJpYXRpb25zXG4gICAgICAgIHNraW5EYXRhWydza2luX3RvbmUnXSA9IHBhcnNlSW50KHNraW5JZHgpICsgMVxuICAgICAgICB0aGlzLl9za2lucy5wdXNoKG5ldyBFbW9qaURhdGEoc2tpbkRhdGEpKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9zYW5pdGl6ZWQgPSBzYW5pdGl6ZSh0aGlzLl9kYXRhKVxuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLl9zYW5pdGl6ZWQpIHtcbiAgICAgIHRoaXNba2V5XSA9IHRoaXMuX3Nhbml0aXplZFtrZXldXG4gICAgfVxuICAgIHRoaXMuc2hvcnRfbmFtZXMgPSB0aGlzLl9kYXRhLnNob3J0X25hbWVzXG4gICAgdGhpcy5zaG9ydF9uYW1lID0gdGhpcy5fZGF0YS5zaG9ydF9uYW1lc1swXVxuICAgIE9iamVjdC5mcmVlemUodGhpcylcbiAgfVxuXG4gIGdldFNraW4oc2tpbklkeCkge1xuICAgIGlmIChza2luSWR4ICYmIHNraW5JZHggIT0gJ25hdGl2ZScgJiYgdGhpcy5fc2tpbnMpIHtcbiAgICAgIHJldHVybiB0aGlzLl9za2luc1tza2luSWR4IC0gMV1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIGxldCBtdWx0aXBseSA9IDEwMCAvIFNIRUVUX0NPTFVNTlMsXG4gICAgICB4ID0gTWF0aC5yb3VuZChtdWx0aXBseSAqIHRoaXMuX2RhdGEuc2hlZXRfeCAqIDEwMCkgLyAxMDAsXG4gICAgICB5ID0gTWF0aC5yb3VuZChtdWx0aXBseSAqIHRoaXMuX2RhdGEuc2hlZXRfeSAqIDEwMCkgLyAxMDBcbiAgICByZXR1cm4gYCR7eH0lICR7eX0lYFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFbW9qaVZpZXcge1xuICAvKipcbiAgICogZW1vamkgLSBFbW9qaSB0byBkaXNwbGF5XG4gICAqIHNldCAtIHN0cmluZywgZW1vamkgc2V0IG5hbWVcbiAgICogbmF0aXZlIC0gYm9vbGVhbiwgd2hldGhlciB0byByZW5kZXIgbmF0aXZlIGVtb2ppXG4gICAqIGZhbGxiYWNrIC0gZmFsbGJhY2sgZnVuY3Rpb24gdG8gcmVuZGVyIG1pc3NpbmcgZW1vamksIG9wdGlvbmFsXG4gICAqIGVtb2ppVG9vbHRpcCAtIHdldGhlciB3ZSBuZWVkIHRvIHNob3cgdGhlIGVtb2ppIHRvb2x0aXAsIG9wdGlvbmFsXG4gICAqIGVtb2ppU2l6ZSAtIGVtb2ppIHNpemUgaW4gcGl4ZWxzLCBvcHRpb25hbFxuICAgKi9cbiAgY29uc3RydWN0b3IoZW1vamksIHNraW4sIHNldCwgbmF0aXZlLCBmYWxsYmFjaywgZW1vamlUb29sdGlwLCBlbW9qaVNpemUpIHtcbiAgICB0aGlzLl9lbW9qaSA9IGVtb2ppXG4gICAgdGhpcy5fbmF0aXZlID0gbmF0aXZlXG4gICAgdGhpcy5fc2tpbiA9IHNraW5cbiAgICB0aGlzLl9zZXQgPSBzZXRcbiAgICB0aGlzLl9mYWxsYmFjayA9IGZhbGxiYWNrXG5cbiAgICB0aGlzLmNhblJlbmRlciA9IHRoaXMuX2NhblJlbmRlcigpXG4gICAgdGhpcy5jc3NDbGFzcyA9IHRoaXMuX2Nzc0NsYXNzKClcbiAgICB0aGlzLmNzc1N0eWxlID0gdGhpcy5fY3NzU3R5bGUoZW1vamlTaXplKVxuICAgIHRoaXMuY29udGVudCA9IHRoaXMuX2NvbnRlbnQoKVxuICAgIHRoaXMudGl0bGUgPSBlbW9qaVRvb2x0aXAgPT09IHRydWUgPyBlbW9qaS5zaG9ydF9uYW1lIDogbnVsbFxuXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKVxuICB9XG5cbiAgZ2V0RW1vamkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vtb2ppLmdldFNraW4odGhpcy5fc2tpbilcbiAgfVxuXG4gIF9jYW5SZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuX2lzQ3VzdG9tKCkgfHwgdGhpcy5faXNOYXRpdmUoKSB8fCB0aGlzLl9oYXNFbW9qaSgpIHx8IHRoaXMuX2ZhbGxiYWNrXG4gICAgKVxuICB9XG5cbiAgX2Nzc0NsYXNzKCkge1xuICAgIHJldHVybiBbJ2Vtb2ppLXNldC0nICsgdGhpcy5fc2V0LCAnZW1vamktdHlwZS0nICsgdGhpcy5fZW1vamlUeXBlKCldXG4gIH1cblxuICBfY3NzU3R5bGUoZW1vamlTaXplKSB7XG4gICAgbGV0IGNzc1N0eWxlID0ge31cbiAgICBpZiAodGhpcy5faXNDdXN0b20oKSkge1xuICAgICAgY3NzU3R5bGUgPSB7XG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybCgnICsgdGhpcy5nZXRFbW9qaSgpLl9kYXRhLmltYWdlVXJsICsgJyknLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJzEwMCUnLFxuICAgICAgICB3aWR0aDogZW1vamlTaXplICsgJ3B4JyxcbiAgICAgICAgaGVpZ2h0OiBlbW9qaVNpemUgKyAncHgnLFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5faGFzRW1vamkoKSAmJiAhdGhpcy5faXNOYXRpdmUoKSkge1xuICAgICAgY3NzU3R5bGUgPSB7XG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogdGhpcy5nZXRFbW9qaSgpLmdldFBvc2l0aW9uKCksXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbW9qaVNpemUpIHtcbiAgICAgIGlmICh0aGlzLl9pc05hdGl2ZSgpKSB7XG4gICAgICAgIC8vIFNldCBmb250LXNpemUgZm9yIG5hdGl2ZSBlbW9qaS5cbiAgICAgICAgY3NzU3R5bGUgPSBPYmplY3QuYXNzaWduKGNzc1N0eWxlLCB7XG4gICAgICAgICAgLy8gZm9udC1zaXplIGlzIHVzZWQgZm9yIG5hdGl2ZSBlbW9qaSB3aGljaCB3ZSBuZWVkXG4gICAgICAgICAgLy8gdG8gc2NhbGUgd2l0aCAwLjggZmFjdG9yIHRvIGhhdmUgdGhlbSBsb29rIGFwcHJveGltYXRlbHlcbiAgICAgICAgICAvLyB0aGUgc2FtZSBzaXplIGFzIGltYWdlLWJhc2VkIGVtb2psLlxuICAgICAgICAgIGZvbnRTaXplOiBNYXRoLnJvdW5kKGVtb2ppU2l6ZSAqIDAuOCAqIDEwKSAvIDEwICsgJ3B4JyxcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNldCB3aWR0aC9oZWlnaHQgZm9yIGltYWdlIGVtb2ppLlxuICAgICAgICBjc3NTdHlsZSA9IE9iamVjdC5hc3NpZ24oY3NzU3R5bGUsIHtcbiAgICAgICAgICB3aWR0aDogZW1vamlTaXplICsgJ3B4JyxcbiAgICAgICAgICBoZWlnaHQ6IGVtb2ppU2l6ZSArICdweCcsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjc3NTdHlsZVxuICB9XG5cbiAgX2NvbnRlbnQoKSB7XG4gICAgaWYgKHRoaXMuX2lzQ3VzdG9tKCkpIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgICBpZiAodGhpcy5faXNOYXRpdmUoKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0RW1vamkoKS5uYXRpdmVcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hhc0Vtb2ppKCkpIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZmFsbGJhY2sgPyB0aGlzLl9mYWxsYmFjayh0aGlzLmdldEVtb2ppKCkpIDogbnVsbFxuICB9XG5cbiAgX2lzTmF0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLl9uYXRpdmVcbiAgfVxuXG4gIF9pc0N1c3RvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRFbW9qaSgpLmN1c3RvbVxuICB9XG5cbiAgX2hhc0Vtb2ppKCkge1xuICAgIGlmICghdGhpcy5nZXRFbW9qaSgpLl9kYXRhKSB7XG4gICAgICAvLyBSZXR1cm4gZmFsc2UgaWYgd2UgaGF2ZSBubyBkYXRhLlxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGNvbnN0IGhhc0ltYWdlID0gdGhpcy5nZXRFbW9qaSgpLl9kYXRhWydoYXNfaW1nXycgKyB0aGlzLl9zZXRdXG4gICAgaWYgKGhhc0ltYWdlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIElmIHRoZXJlIGlzIG5vIGhhc19pbWdfeHh4IGluIHRoZSBkYXRhLCB3ZSBhcmUgd29ya2luZyB3aXRoXG4gICAgICAvLyBzcGVjaWZpYyBkYXRhIGZpbGUsIGxpa2UgZmFjZWJvb2suanNvbiwgc28gd2UgYXNzdW1lIGFsbFxuICAgICAgLy8gZW1vamlzIGFyZSBhdmFpbGFibGUgKHRoZSA6c2V0IHNldHRpbmcgZm9yIHBpY2tlciBzaG91bGRcbiAgICAgIC8vIG1hdGNoIHRoZSBkYXRhIGZpbGUpLlxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgLy8gT3RoZXJ3aXNlLCB3ZSBhcmUgdXNpbmcgYWxsLmpzb24gYW5kIGNhbiBzd2l0Y2ggYmV0d2VlbiBkaWZmZXJlbnRcbiAgICAvLyBzZXRzIC0gaW4gdGhpcyBjYXNlIHRoZSBgaGFzX2ltZ197c2V0X25hbWV9YCBpcyBhIGJvb2xlYW4gdGhhdFxuICAgIC8vIGluZGljYXRlcyBpZiB0aGVyZSBpcyBzdWNoIGltYWdlIG9yIG5vdCBmb3IgYSBnaXZlbiBzZXQuXG4gICAgcmV0dXJuIGhhc0ltYWdlXG4gIH1cblxuICBfZW1vamlUeXBlKCkge1xuICAgIGlmICh0aGlzLl9pc0N1c3RvbSgpKSB7XG4gICAgICByZXR1cm4gJ2N1c3RvbSdcbiAgICB9XG4gICAgaWYgKHRoaXMuX2lzTmF0aXZlKCkpIHtcbiAgICAgIHJldHVybiAnbmF0aXZlJ1xuICAgIH1cbiAgICBpZiAodGhpcy5faGFzRW1vamkoKSkge1xuICAgICAgcmV0dXJuICdpbWFnZSdcbiAgICB9XG4gICAgcmV0dXJuICdmYWxsYmFjaydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FuaXRpemUoZW1vamkpIHtcbiAgdmFyIHtcbiAgICAgIG5hbWUsXG4gICAgICBzaG9ydF9uYW1lcyxcbiAgICAgIHNraW5fdG9uZSxcbiAgICAgIHNraW5fdmFyaWF0aW9ucyxcbiAgICAgIGVtb3RpY29ucyxcbiAgICAgIHVuaWZpZWQsXG4gICAgICBjdXN0b20sXG4gICAgICBpbWFnZVVybCxcbiAgICB9ID0gZW1vamksXG4gICAgaWQgPSBlbW9qaS5pZCB8fCBzaG9ydF9uYW1lc1swXSxcbiAgICBjb2xvbnMgPSBgOiR7aWR9OmBcblxuICBpZiAoY3VzdG9tKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkLFxuICAgICAgbmFtZSxcbiAgICAgIGNvbG9ucyxcbiAgICAgIGVtb3RpY29ucyxcbiAgICAgIGN1c3RvbSxcbiAgICAgIGltYWdlVXJsLFxuICAgIH1cbiAgfVxuXG4gIGlmIChza2luX3RvbmUpIHtcbiAgICBjb2xvbnMgKz0gYDpza2luLXRvbmUtJHtza2luX3RvbmV9OmBcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaWQsXG4gICAgbmFtZSxcbiAgICBjb2xvbnMsXG4gICAgZW1vdGljb25zLFxuICAgIHVuaWZpZWQ6IHVuaWZpZWQudG9Mb3dlckNhc2UoKSxcbiAgICBza2luOiBza2luX3RvbmUgfHwgKHNraW5fdmFyaWF0aW9ucyA/IDEgOiBudWxsKSxcbiAgICBuYXRpdmU6IHVuaWZpZWRUb05hdGl2ZSh1bmlmaWVkKSxcbiAgfVxufVxuIiwiaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnXG5cbmNvbnN0IERFRkFVTFRTID0gW1xuICAnKzEnLFxuICAnZ3Jpbm5pbmcnLFxuICAna2lzc2luZ19oZWFydCcsXG4gICdoZWFydF9leWVzJyxcbiAgJ2xhdWdoaW5nJyxcbiAgJ3N0dWNrX291dF90b25ndWVfd2lua2luZ19leWUnLFxuICAnc3dlYXRfc21pbGUnLFxuICAnam95JyxcbiAgJ3NjcmVhbScsXG4gICdkaXNhcHBvaW50ZWQnLFxuICAndW5hbXVzZWQnLFxuICAnd2VhcnknLFxuICAnc29iJyxcbiAgJ3N1bmdsYXNzZXMnLFxuICAnaGVhcnQnLFxuICAncG9vcCcsXG5dXG5cbmxldCBmcmVxdWVudGx5LCBpbml0aWFsaXplZFxubGV0IGRlZmF1bHRzID0ge31cblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgaW5pdGlhbGl6ZWQgPSB0cnVlXG4gIGZyZXF1ZW50bHkgPSBzdG9yZS5nZXQoJ2ZyZXF1ZW50bHknKVxufVxuXG5mdW5jdGlvbiBhZGQoZW1vamkpIHtcbiAgaWYgKCFpbml0aWFsaXplZCkgaW5pdCgpXG4gIHZhciB7IGlkIH0gPSBlbW9qaVxuXG4gIGZyZXF1ZW50bHkgfHwgKGZyZXF1ZW50bHkgPSBkZWZhdWx0cylcbiAgZnJlcXVlbnRseVtpZF0gfHwgKGZyZXF1ZW50bHlbaWRdID0gMClcbiAgZnJlcXVlbnRseVtpZF0gKz0gMVxuXG4gIHN0b3JlLnNldCgnbGFzdCcsIGlkKVxuICBzdG9yZS5zZXQoJ2ZyZXF1ZW50bHknLCBmcmVxdWVudGx5KVxufVxuXG5mdW5jdGlvbiBnZXQobWF4TnVtYmVyKSB7XG4gIGlmICghaW5pdGlhbGl6ZWQpIGluaXQoKVxuICBpZiAoIWZyZXF1ZW50bHkpIHtcbiAgICBkZWZhdWx0cyA9IHt9XG5cbiAgICBjb25zdCByZXN1bHQgPSBbXVxuXG4gICAgbGV0IGRlZmF1bHRMZW5ndGggPSBNYXRoLm1pbihtYXhOdW1iZXIsIERFRkFVTFRTLmxlbmd0aClcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlZmF1bHRMZW5ndGg7IGkrKykge1xuICAgICAgZGVmYXVsdHNbREVGQVVMVFNbaV1dID0gZGVmYXVsdExlbmd0aCAtIGlcbiAgICAgIHJlc3VsdC5wdXNoKERFRkFVTFRTW2ldKVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGNvbnN0IHF1YW50aXR5ID0gbWF4TnVtYmVyXG4gIGNvbnN0IGZyZXF1ZW50bHlLZXlzID0gW11cblxuICBmb3IgKGxldCBrZXkgaW4gZnJlcXVlbnRseSkge1xuICAgIGlmIChmcmVxdWVudGx5Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGZyZXF1ZW50bHlLZXlzLnB1c2goa2V5KVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNvcnRlZCA9IGZyZXF1ZW50bHlLZXlzXG4gICAgLnNvcnQoKGEsIGIpID0+IGZyZXF1ZW50bHlbYV0gLSBmcmVxdWVudGx5W2JdKVxuICAgIC5yZXZlcnNlKClcbiAgY29uc3Qgc2xpY2VkID0gc29ydGVkLnNsaWNlKDAsIHF1YW50aXR5KVxuXG4gIGNvbnN0IGxhc3QgPSBzdG9yZS5nZXQoJ2xhc3QnKVxuXG4gIGlmIChsYXN0ICYmIHNsaWNlZC5pbmRleE9mKGxhc3QpID09IC0xKSB7XG4gICAgc2xpY2VkLnBvcCgpXG4gICAgc2xpY2VkLnB1c2gobGFzdClcbiAgfVxuXG4gIHJldHVybiBzbGljZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgeyBhZGQsIGdldCB9XG4iLCJpbXBvcnQgc3RyaW5nRnJvbUNvZGVQb2ludCBmcm9tICcuLi9wb2x5ZmlsbHMvc3RyaW5nRnJvbUNvZGVQb2ludCdcblxuZnVuY3Rpb24gdW5pZmllZFRvTmF0aXZlKHVuaWZpZWQpIHtcbiAgdmFyIHVuaWNvZGVzID0gdW5pZmllZC5zcGxpdCgnLScpLFxuICAgIGNvZGVQb2ludHMgPSB1bmljb2Rlcy5tYXAoKHUpID0+IGAweCR7dX1gKVxuXG4gIHJldHVybiBzdHJpbmdGcm9tQ29kZVBvaW50LmFwcGx5KG51bGwsIGNvZGVQb2ludHMpXG59XG5cbmZ1bmN0aW9uIHVuaXEoYXJyKSB7XG4gIHJldHVybiBhcnIucmVkdWNlKChhY2MsIGl0ZW0pID0+IHtcbiAgICBpZiAoYWNjLmluZGV4T2YoaXRlbSkgPT09IC0xKSB7XG4gICAgICBhY2MucHVzaChpdGVtKVxuICAgIH1cbiAgICByZXR1cm4gYWNjXG4gIH0sIFtdKVxufVxuXG5mdW5jdGlvbiBpbnRlcnNlY3QoYSwgYikge1xuICBjb25zdCB1bmlxQSA9IHVuaXEoYSlcbiAgY29uc3QgdW5pcUIgPSB1bmlxKGIpXG5cbiAgcmV0dXJuIHVuaXFBLmZpbHRlcigoaXRlbSkgPT4gdW5pcUIuaW5kZXhPZihpdGVtKSA+PSAwKVxufVxuXG5mdW5jdGlvbiBkZWVwTWVyZ2UoYSwgYikge1xuICB2YXIgbyA9IHt9XG5cbiAgZm9yIChsZXQga2V5IGluIGEpIHtcbiAgICBsZXQgb3JpZ2luYWxWYWx1ZSA9IGFba2V5XSxcbiAgICAgIHZhbHVlID0gb3JpZ2luYWxWYWx1ZVxuXG4gICAgaWYgKGIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgdmFsdWUgPSBiW2tleV1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFsdWUgPSBkZWVwTWVyZ2Uob3JpZ2luYWxWYWx1ZSwgdmFsdWUpXG4gICAgfVxuXG4gICAgb1trZXldID0gdmFsdWVcbiAgfVxuXG4gIHJldHVybiBvXG59XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zb25pY2RvZS9tZWFzdXJlLXNjcm9sbGJhclxuZnVuY3Rpb24gbWVhc3VyZVNjcm9sbGJhcigpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PSAndW5kZWZpbmVkJykgcmV0dXJuIDBcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICBkaXYuc3R5bGUud2lkdGggPSAnMTAwcHgnXG4gIGRpdi5zdHlsZS5oZWlnaHQgPSAnMTAwcHgnXG4gIGRpdi5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnXG4gIGRpdi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgZGl2LnN0eWxlLnRvcCA9ICctOTk5OXB4J1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KVxuICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IGRpdi5vZmZzZXRXaWR0aCAtIGRpdi5jbGllbnRXaWR0aFxuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRpdilcblxuICByZXR1cm4gc2Nyb2xsYmFyV2lkdGhcbn1cblxuZXhwb3J0IHsgdW5pcSwgaW50ZXJzZWN0LCBkZWVwTWVyZ2UsIHVuaWZpZWRUb05hdGl2ZSwgbWVhc3VyZVNjcm9sbGJhciB9XG4iLCJjb25zdCBFbW9qaVByb3BzID0ge1xuICBuYXRpdmU6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICB9LFxuICB0b29sdGlwOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgfSxcbiAgZmFsbGJhY2s6IHtcbiAgICB0eXBlOiBGdW5jdGlvbixcbiAgfSxcbiAgc2tpbjoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAxLFxuICB9LFxuICBzZXQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJ2FwcGxlJyxcbiAgfSxcbiAgZW1vamk6IHtcbiAgICB0eXBlOiBbU3RyaW5nLCBPYmplY3RdLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICB9LFxuICBzaXplOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IG51bGwsXG4gIH0sXG59XG5cbmNvbnN0IFBpY2tlclByb3BzID0ge1xuICBwZXJMaW5lOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDksXG4gIH0sXG4gIG1heFNlYXJjaFJlc3VsdHM6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogNzUsXG4gIH0sXG4gIGVtb2ppU2l6ZToge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAyNCxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJ0Vtb2ppIE1hcnTihKInLFxuICB9LFxuICBlbW9qaToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnZGVwYXJ0bWVudF9zdG9yZScsXG4gIH0sXG4gIGNvbG9yOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICcjYWU2NWM1JyxcbiAgfSxcbiAgc2V0OiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICdhcHBsZScsXG4gIH0sXG4gIHNraW46IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogbnVsbCxcbiAgfSxcbiAgZGVmYXVsdFNraW46IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogMSxcbiAgfSxcbiAgbmF0aXZlOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgfSxcbiAgZW1vamlUb29sdGlwOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgfSxcbiAgYXV0b0ZvY3VzOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgfSxcbiAgaTE4bjoge1xuICAgIHR5cGU6IE9iamVjdCxcbiAgICBkZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIHt9XG4gICAgfSxcbiAgfSxcbiAgc2hvd1ByZXZpZXc6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IHRydWUsXG4gIH0sXG4gIHNob3dTZWFyY2g6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IHRydWUsXG4gIH0sXG4gIHNob3dDYXRlZ29yaWVzOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiB0cnVlLFxuICB9LFxuICBzaG93U2tpblRvbmVzOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiB0cnVlLFxuICB9LFxuICBpbmZpbml0ZVNjcm9sbDoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogdHJ1ZSxcbiAgfSxcbiAgcGlja2VyU3R5bGVzOiB7XG4gICAgdHlwZTogT2JqZWN0LFxuICAgIGRlZmF1bHQoKSB7XG4gICAgICByZXR1cm4ge31cbiAgICB9LFxuICB9LFxufVxuXG5leHBvcnQgeyBFbW9qaVByb3BzLCBQaWNrZXJQcm9wcyB9XG4iLCJ2YXIgTkFNRVNQQUNFID0gJ2Vtb2ppLW1hcnQnXG5cbmNvbnN0IF9KU09OID0gSlNPTlxuXG52YXIgaXNMb2NhbFN0b3JhZ2VTdXBwb3J0ZWQgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAnbG9jYWxTdG9yYWdlJyBpbiB3aW5kb3dcblxubGV0IGdldHRlclxubGV0IHNldHRlclxuXG5mdW5jdGlvbiBzZXRIYW5kbGVycyhoYW5kbGVycykge1xuICBoYW5kbGVycyB8fCAoaGFuZGxlcnMgPSB7fSlcblxuICBnZXR0ZXIgPSBoYW5kbGVycy5nZXR0ZXJcbiAgc2V0dGVyID0gaGFuZGxlcnMuc2V0dGVyXG59XG5cbmZ1bmN0aW9uIHNldE5hbWVzcGFjZShuYW1lc3BhY2UpIHtcbiAgTkFNRVNQQUNFID0gbmFtZXNwYWNlXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZShzdGF0ZSkge1xuICBmb3IgKGxldCBrZXkgaW4gc3RhdGUpIHtcbiAgICBsZXQgdmFsdWUgPSBzdGF0ZVtrZXldXG4gICAgc2V0KGtleSwgdmFsdWUpXG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcbiAgaWYgKHNldHRlcikge1xuICAgIHNldHRlcihrZXksIHZhbHVlKVxuICB9IGVsc2Uge1xuICAgIGlmICghaXNMb2NhbFN0b3JhZ2VTdXBwb3J0ZWQpIHJldHVyblxuICAgIHRyeSB7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlW2Ake05BTUVTUEFDRX0uJHtrZXl9YF0gPSBfSlNPTi5zdHJpbmdpZnkodmFsdWUpXG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXQoa2V5KSB7XG4gIGlmIChnZXR0ZXIpIHtcbiAgICByZXR1cm4gZ2V0dGVyKGtleSlcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWlzTG9jYWxTdG9yYWdlU3VwcG9ydGVkKSByZXR1cm5cbiAgICB0cnkge1xuICAgICAgdmFyIHZhbHVlID0gd2luZG93LmxvY2FsU3RvcmFnZVtgJHtOQU1FU1BBQ0V9LiR7a2V5fWBdXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZSh2YWx1ZSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgeyB1cGRhdGUsIHNldCwgZ2V0LCBzZXROYW1lc3BhY2UsIHNldEhhbmRsZXJzIH1cbiIsIi8vIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4vLyBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG5cbi8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcblxuLy8gTUlUIGxpY2Vuc2VcblxudmFyIGlzV2luZG93QXZhaWxhYmxlID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcblxuaXNXaW5kb3dBdmFpbGFibGUgJiZcbiAgKGZ1bmN0aW9uKCkge1xuICAgIHZhciBsYXN0VGltZSA9IDBcbiAgICB2YXIgdmVuZG9ycyA9IFsnbXMnLCAnbW96JywgJ3dlYmtpdCcsICdvJ11cblxuICAgIGZvciAodmFyIHggPSAwOyB4IDwgdmVuZG9ycy5sZW5ndGggJiYgIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ICsreCkge1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9XG4gICAgICAgIHdpbmRvd1t2ZW5kb3JzW3hdICsgJ1JlcXVlc3RBbmltYXRpb25GcmFtZSddXG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPVxuICAgICAgICB3aW5kb3dbdmVuZG9yc1t4XSArICdDYW5jZWxBbmltYXRpb25GcmFtZSddIHx8XG4gICAgICAgIHdpbmRvd1t2ZW5kb3JzW3hdICsgJ0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSddXG4gICAgfVxuXG4gICAgaWYgKCF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKVxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBlbGVtZW50KSB7XG4gICAgICAgIHZhciBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpXG4gICAgICAgIHZhciBpZCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbClcbiAgICAgICAgfSwgdGltZVRvQ2FsbClcblxuICAgICAgICBsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbFxuICAgICAgICByZXR1cm4gaWRcbiAgICAgIH1cblxuICAgIGlmICghd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKVxuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGlkKVxuICAgICAgfVxuICB9KSgpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfdnVlX187Il0sInNvdXJjZVJvb3QiOiIifQ==