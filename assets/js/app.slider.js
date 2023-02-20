/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/js/app.js":
/*!******************************!*\
  !*** ./assets/src/js/app.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_services_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/services-slider */ "./assets/src/js/modules/services-slider.js");

















































$(document).ready(function () {
  Object(_modules_services_slider__WEBPACK_IMPORTED_MODULE_2__["default"])();

});

/***/ }),

/***/ "./assets/src/js/modules/handle-use-case-explorer.js":
/*!***********************************************************!*\
  !*** ./assets/src/js/modules/handle-use-case-explorer.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _handle_filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handle-filters */ "./assets/src/js/modules/handle-filters.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var section = document.querySelector('.use-case-explorer');
  if (!section) return;
  var VERSION = 'v1';
  var LINK = 'UseCase';
  var DATA = 'htmlUseCases';
  var PARAMS = ['topic', 'industry', 'func'];
  var URL = window.location.href;
  var list = section.querySelector('.use-case-explorer__list');
  if (URL.includes('/?idPost=')) {
    var ID = URL.split('/?idPost=')[1];
    var card = document.getElementById(ID);
    var scrollDiv = card.offsetTop;
    var body = $('html, body');
    body.animate({
      scrollTop: scrollDiv
    }, 1000);
    card.scrollIntoView();
    $('#' + ID + ' .dropdown-card__bottom-holder').slideDown();
    card.querySelector('.dropdown-card__bottom').classList.add('active');
  }
  Object(_handle_filters__WEBPACK_IMPORTED_MODULE_0__["default"])(VERSION, LINK, section, list, PARAMS, DATA);
});

/***/ }),

/***/ "./assets/src/js/modules/header-tabs.js":
/*!**********************************************!*\
  !*** ./assets/src/js/modules/header-tabs.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  $(".js-nav-tabs-holder .js-nav-tab").click(function () {
    $(".js-nav-tabs-holder .js-nav-tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".js-tab-item").hide().eq($(this).index()).fadeIn();
  }).eq(0).addClass("active");
  $('.js-tab-item').each(function () {
    if ($(this).find('.current-menu-item').length > 0) {
      $(".js-tab-item").hide().eq($(this).index()).fadeIn();
      $(".js-nav-tabs-holder .js-nav-tab").removeClass("active").eq($(this).index()).addClass("active");
    }
  });
});

/***/ }),

/***/ "./assets/src/js/modules/industry-lp-graphic-slider.js":
/*!*************************************************************!*\
  !*** ./assets/src/js/modules/industry-lp-graphic-slider.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_swiper_bundle_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/swiper-bundle.min */ "./node_modules/swiper/swiper-bundle.min.js");
/* harmony import */ var swiper_swiper_bundle_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_bundle_min__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var sliders = document.querySelectorAll('.industry-lp-graphic-slider__swiper');
  if (!sliders.length) return;
  sliders.forEach(function (slider) {
    var sliderPrev = slider.querySelector('.swiper-prev');
    var sliderNext = slider.querySelector('.swiper-next');
    var pagination = slider.querySelector('.swiper-pagination');
    var desktopSlider = false;
    var mobileSlider = false;
    var swiper = false;
    var media = 768;
    var initDesktopSlider = function initDesktopSlider() {
      if (!desktopSlider) {
        desktopSlider = true;
        mobileSlider = false;
        if (swiper) swiper.destroy();
        swiper = new swiper_swiper_bundle_min__WEBPACK_IMPORTED_MODULE_0___default.a(slider, {
          autoHeight: true,
          slidesPerView: 'auto',
          speed: 700,
          centeredSlides: true,
          navigation: {
            nextEl: sliderNext,
            prevEl: sliderPrev
          },
          observer: true,
          observeParents: true,
          pagination: {
            el: pagination,
            type: 'bullets',
            clickable: true
          }
        });
      }
    };
    var initMobileSlider = function initMobileSlider() {
      if (!mobileSlider) {
        mobileSlider = true;
        desktopSlider = false;
        if (swiper) swiper.destroy();
        swiper = new swiper_swiper_bundle_min__WEBPACK_IMPORTED_MODULE_0___default.a(slider, {
          autoHeight: true,
          slidesPerView: 'auto',
          speed: 700,
          loop: true,
          spaceBetween: 20,
          navigation: {
            nextEl: sliderNext,
            prevEl: sliderPrev
          },
          pagination: {
            el: pagination,
            type: 'bullets',
            clickable: true
          }
        });
      }
    };
    var handleSlider = function handleSlider() {
      if (window.innerWidth >= media) {
        initDesktopSlider();
      } else {
        initMobileSlider();
      }
    };
    handleSlider();
    window.addEventListener('resize', handleSlider);
  });
});

/***/ }),

/***/ "./assets/src/js/modules/industry-lp-industry-slider.js":
/*!**************************************************************!*\
  !*** ./assets/src/js/modules/industry-lp-industry-slider.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_swiper_bundle_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/swiper-bundle.min */ "./node_modules/swiper/swiper-bundle.min.js");
/* harmony import */ var swiper_swiper_bundle_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_bundle_min__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var servicesSection = document.querySelector('.industry-lp-industry-slider');
  console.log(servicesSection);
  if (!servicesSection) return;
  var slider = servicesSection.querySelector('.swiper');
  var pagination = servicesSection.querySelector('.swiper-pagination');
  var paginationArray;
  var titles = servicesSection.querySelector('.industry-lp-industry-slider__titles');
  var titlesArray = _toConsumableArray(titles.children);
  var event = new Event("click", {
    bubbles: true
  });
  titlesArray[0].classList.add('active');
  var handleActiveTitle = function handleActiveTitle(elem) {
    var activeTitle = titles.querySelector('.active');
    activeTitle.classList.remove('active');
    elem.classList.add('active');
  };
  var desktopSlider = false;
  var mobileSlider = false;
  var swiper = false;
  var media = 768;
  var initDesktopSlider = function initDesktopSlider() {
    if (!desktopSlider) {
      desktopSlider = true;
      mobileSlider = false;
      if (swiper) swiper.destroy();
      swiper = new swiper_swiper_bundle_min__WEBPACK_IMPORTED_MODULE_0___default.a(slider, {
        slidesPerView: 'auto',
        speed: 700,
        autoHeight: true,
        centeredSlides: true,
        effect: "fade",
        pagination: {
          el: pagination,
          type: 'bullets',
          clickable: true
        },
        on: {
          init: function init() {
            paginationArray = _toConsumableArray(pagination.children);
          }
        }
      });
      swiper.on('slideChange', function () {
        var title = titlesArray[this.realIndex];
        handleActiveTitle(title);
      });
    }
  };
  var initMobileSlider = function initMobileSlider() {
    if (!mobileSlider) {
      mobileSlider = true;
      desktopSlider = false;
      if (swiper) swiper.destroy();
      swiper = new swiper_swiper_bundle_min__WEBPACK_IMPORTED_MODULE_0___default.a(slider, {
        slidesPerView: 'auto',
        speed: 700,
        loop: true,
        autoHeight: true,
        spaceBetween: 20,
        effect: "fade",
        pagination: {
          el: pagination,
          type: 'bullets',
          clickable: true
        },
        on: {
          init: function init() {
            paginationArray = _toConsumableArray(pagination.children);
          }
        }
      });
    }
  };
  var addActiveTitleByClick = function addActiveTitleByClick() {
    titles.addEventListener('click', function (e) {
      if (e.target.className === 'industry-lp-industry-slider__titles-item') {
        var index = titlesArray.indexOf(e.target);
        var activePagination = paginationArray[index];
        handleActiveTitle(e.target);
        activePagination.dispatchEvent(event);
      }
    });
  };
  addActiveTitleByClick();
  var handleSlider = function handleSlider() {
    if (window.innerWidth >= media) {
      initDesktopSlider();
    } else {
      initMobileSlider();
    }
  };
  handleSlider();
  window.addEventListener('resize', handleSlider);
});

/***/ }),

/***/ "./assets/src/js/modules/industry-lp-quote-slider.js":
/*!***********************************************************!*\
  !*** ./assets/src/js/modules/industry-lp-quote-slider.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_swiper_bundle_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/swiper-bundle.min */ "./node_modules/swiper/swiper-bundle.min.js");
/* harmony import */ var swiper_swiper_bundle_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_bundle_min__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var sliders = document.querySelectorAll('.industry-lp-quote-slider__swiper');
  if (!sliders.length) return;
  sliders.forEach(function (slider) {
    var sliderPrev = slider.querySelector('.swiper-prev');
    var sliderNext = slider.querySelector('.swiper-next');
    var pagination = slider.querySelector('.swiper-pagination');
    var desktopSlider = false;
    var mobileSlider = false;
    var swiper = false;
    var media = 768;
    var initDesktopSlider = function initDesktopSlider() {
      if (!desktopSlider) {
        desktopSlider = true;
        mobileSlider = false;
        if (swiper) swiper.destroy();
        swiper = new swiper_swiper_bundle_min__WEBPACK_IMPORTED_MODULE_0___default.a(slider, {
          autoHeight: true,
          slidesPerView: 'auto',
          speed: 700,
          centeredSlides: true,
          navigation: {
            nextEl: sliderNext,
            prevEl: sliderPrev
          },
          pagination: {
            el: pagination,
            type: 'bullets',
            clickable: true
          },
          observer: true,
          observeParents: true
        });
      }
    };
    var initMobileSlider = function initMobileSlider() {
      if (!mobileSlider) {
        mobileSlider = true;
        desktopSlider = false;
        if (swiper) swiper.destroy();
        swiper = new swiper_swiper_bundle_min__WEBPACK_IMPORTED_MODULE_0___default.a(slider, {
          autoHeight: 'auto',
          slidesPerView: 1,
          speed: 700,
          loop: true,
          centeredSlides: true,
          spaceBetween: 0,
          pagination: {
            el: pagination,
            type: 'bullets',
            clickable: true
          }
        });
      }
    };
    var handleSlider = function handleSlider() {
      if (window.innerWidth >= media) {
        initDesktopSlider();
      } else {
        initMobileSlider();
      }
    };
    handleSlider();
    window.addEventListener('resize', handleSlider);
  });
});

/***/ }),

/***/ "./assets/src/js/modules/input-number.js":
/*!***********************************************!*\
  !*** ./assets/src/js/modules/input-number.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  if (jQuery('.input-number').length) {
    jQuery('.input-number').each(function () {
      var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.plus'),
        btnDown = spinner.find('.minus'),
        min = input.attr('min'),
        max = input.attr('max');
      btnUp.click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        if (spinner.hasClass("disabled")) {} else {
          var oldValue = parseFloat(input.val());
          if (oldValue >= max) {
            var newVal = oldValue;
          } else {
            var newVal = oldValue + 1;
          }
          spinner.find("input").val(newVal);
          spinner.find("input").trigger("change");
        }
      });
      btnDown.click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });
    });
  }
});

/***/ }),

/***/ "./assets/src/js/modules/intro-links.js":
/*!**********************************************!*\
  !*** ./assets/src/js/modules/intro-links.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var linksNavigation = $('.intro-links__navigation');
  if (!linksNavigation.length) return;
  var navigationBtn = $('.intro-links__navigation-btn');
  var navigationLinks = $('.intro-links__navigation-content');
  var deactivateLinksNavigation = function deactivateLinksNavigation() {
    navigationBtn.removeClass('active');
    navigationLinks.slideUp();
    $(window).off('click', handleWindowClick);
  };
  var handleWindowClick = function handleWindowClick(e) {
    if (!$(linksNavigation).is(e.target) && $(linksNavigation).has(e.target).length === 0) {
      deactivateLinksNavigation();
    }
  };
  navigationBtn.on('click', function () {
    $(this).toggleClass('active');
    $(this).next().slideToggle();
    if ($(this).hasClass('active')) {
      $(window).on('click', handleWindowClick);
    }
  });
  var handleIntroButton = function handleIntroButton() {
    var media = 1024;
    if (window.innerWidth < media) {
      navigationBtn.addClass('mobile');
    } else {
      navigationBtn.removeClass('mobile active');
      navigationLinks.removeAttr('style');
    }
  };
  handleIntroButton();
  window.addEventListener('resize', handleIntroButton);
});

/***/ }),

/***/ "./assets/src/js/modules/logos.js":
/*!****************************************!*\
  !*** ./assets/src/js/modules/logos.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_swiper_bundle_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/swiper-bundle.min */ "./node_modules/swiper/swiper-bundle.min.js");
/* harmony import */ var swiper_swiper_bundle_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_bundle_min__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var logos = document.querySelectorAll('.logos');
  if (!logos.length) return;
  logos.forEach(function (slider) {
    var swiper = null;
    var media = 768;
    var sliderContainer = slider.querySelector('.swiper');
    var pagination = slider.querySelector('.swiper-pagination');
    var text = slider.querySelector('.logos__text');
    var footer = slider.querySelector('.logos__footer');
    var container = slider.querySelector('.logos__container');
    var title = slider.querySelector('.logos__title');
    var initSlider = function initSlider() {
      if (!swiper) {
        swiper = new swiper_swiper_bundle_min__WEBPACK_IMPORTED_MODULE_0___default.a(sliderContainer, {
          slidesPerView: 4,
          slidesPerGroup: 4,
          grid: {
            rows: 4
          },
          speed: 700,
          pagination: {
            el: pagination,
            type: 'bullets',
            bulletElement: 'button',
            clickable: true
          }
        });
      }
    };
    var destroySlider = function destroySlider() {
      if (swiper) {
        swiper.destroy();
        swiper = null;
      }
    };
    var addTextToHeader = function addTextToHeader() {
      if (!footer.contains(text)) return;
      container.insertBefore(text, title.nextSibling);
    };
    var addTextToFooter = function addTextToFooter() {
      if (footer.contains(text)) return;
      footer.append(text);
    };
    var handleSection = function handleSection() {
      if (window.innerWidth >= media) {
        addTextToFooter();
        destroySlider();
      } else {
        addTextToHeader();
        initSlider();
      }
    };
    handleSection();
    window.addEventListener('resize', handleSection);
  });
});

/***/ }),

/***/ "./assets/src/js/modules/memberships.js":
/*!**********************************************!*\
  !*** ./assets/src/js/modules/memberships.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_swiper_bundle_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/swiper-bundle.min */ "./node_modules/swiper/swiper-bundle.min.js");
/* harmony import */ var swiper_swiper_bundle_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_bundle_min__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var sliders = document.querySelectorAll('.memberships');
  if (!sliders.length) return;
  sliders.forEach(function (slider) {
    var swiper = null;
    var media = 768;
    var sliderContainer = slider.querySelector('.swiper');
    var pagination = slider.querySelector('.swiper-pagination');
    var initSlider = function initSlider() {
      if (!swiper) {
        swiper = new swiper_swiper_bundle_min__WEBPACK_IMPORTED_MODULE_0___default.a(sliderContainer, {
          slidesPerView: 1,
          speed: 700,
          spaceBetween: 20,
          loop: true,
          pagination: {
            el: pagination,
            type: 'bullets',
            bulletElement: 'button',
            clickable: true
          },
          breakpoints: {
            640: {
              slidesPerView: 'auto'
            }
          }
        });
      }
    };
    var destroySlider = function destroySlider() {
      if (swiper) {
        swiper.destroy();
        swiper = null;
      }
    };
    var handleSection = function handleSection() {
      if (window.innerWidth >= media) {
        destroySlider();
      } else {
        initSlider();
      }
    };
    handleSection();
    window.addEventListener('resize', handleSection);
  });
});

/***/ }),

/***/ "./assets/src/js/modules/mission-sequenz.js":
/*!**************************************************!*\
  !*** ./assets/src/js/modules/mission-sequenz.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var scrollmagic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scrollmagic */ "./node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js");
/* harmony import */ var scrollmagic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(scrollmagic__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var mission = document.getElementById("we-create");
  if (!mission) return;
  var media = 1024;
  var controller = new scrollmagic__WEBPACK_IMPORTED_MODULE_0___default.a.Controller();
  var missionOffset = mission.offsetTop;
  var windowHeight = window.screen.height;
  var windowWidth = window.screen.width;
  var missionUrl = mission.dataset.url;
  var missionHeight = mission.dataset.height;
  var missionSpeed = mission.dataset.speed;
  var html = document.documentElement;
  var preloader = document.querySelector('.preloader');
  var img = new Image();
  var canvas = document.getElementById("frame-holder");
  var context = canvas.getContext("2d");
  var initScrolling = function initScrolling() {
    $.getJSON(missionUrl, function (data) {
      if (data.assets) {
        preloader.classList.remove('active');
        setTimeout(function () {
          animation();
        }, 1000);
        var preloadImages = function preloadImages() {
          for (var i = 1; i < data.assets.length; i++) {
            var _img = new Image();
            _img.src = data.assets[i]['p'];
            _img.id = data.assets[i]['id'];
          }
          img.src = data.assets[0]['p'];
          img.id = data.assets[0]['id'];
          img.onload = function () {
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            context.drawImage(img, 0, 0);
          };
        };
        preloadImages();
        var handleWindowScroll = function handleWindowScroll() {
          var frameCount = data.assets.length;
          var currentFrame = function currentFrame(index) {
            return data.assets[index]['p'];
          };
          var updateImage = function updateImage(index) {
            img.src = currentFrame(index);
            context.drawImage(img, 0, 0);
          };
          var scrollTop = (html.scrollTop - missionOffset) * missionSpeed;
          var maxScrollTop = html.scrollHeight - window.innerHeight;
          var scrollFraction = scrollTop / maxScrollTop;
          var frameIndex = Math.min(frameCount - 1, Math.ceil(scrollFraction * frameCount));
          requestAnimationFrame(function () {
            return updateImage(frameIndex + 1);
          });
        };
        var animatedMissionSequenz = function animatedMissionSequenz(position) {
          if (position) {
            window.addEventListener('scroll', handleWindowScroll);
          } else {
            window.removeEventListener('scroll', handleWindowScroll);
            return false;
          }
        };
        new scrollmagic__WEBPACK_IMPORTED_MODULE_0___default.a.Scene({
          duration: missionHeight,
          // the scene should last for a scroll distance of 100px
          offset: missionOffset // start this scene after scrolling for 50px
        }).setPin('#we-create') // pins the element for the the scene's duration
        .addTo(controller).on('enter', function () {
          animatedMissionSequenz(true);
          console.log('enter');
        }).on('leave', function () {
          animatedMissionSequenz(false);
          console.log('leave');
        });
      }
    });
  };
  var handleAnimation = function handleAnimation() {
    if (window.screen.width > media) {
      initScrolling();
    } else {
      preloader.classList.remove('active');
      setTimeout(function () {
        animation();
      }, 300);
    }
  };
  function animation() {
    var title1 = new TimelineMax();
    title1.staggerFromTo("#mission-visual .title span", 1, {
      ease: Back.easeOut.config(1.7),
      opacity: 0,
      bottom: -280
    }, {
      ease: Back.easeOut.config(1.7),
      opacity: 1,
      bottom: 0
    }, 0.05);
  }
  handleAnimation();
});

/***/ }),

/***/ "./assets/src/js/modules/mission.js":
/*!******************************************!*\
  !*** ./assets/src/js/modules/mission.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  if ($('#we-create').length > 0) {
    missionAnim();
  }
  function missionAnim() {
    function isVisible(tag) {
      var t = $(tag);
      var w = $(window);
      var wt = w.scrollTop();
      var tt = t.offset().top;
      var tb = tt + t.height();
      return tb <= wt + w.height() && tt >= wt;
    }
    $(function () {
      $(window).scroll(function () {
        var b = $("#we-create");
        if (!b.prop("shown") && isVisible(b)) {
          b.prop("shown", true);
          $("#we-create").addClass('anim');
        }
      });
    });
  }
  $('.anchor-mouse').click(function (e) {
    e.preventDefault();
    var item = $(this).attr('href');
    setTimeout(function () {
      $('html, body').animate({
        scrollTop: $(item).offset().top
      }, 300);
    }, 1);
  });

  // $("#mission-visual .title").lettering();
});

/***/ }),

/***/ "./assets/src/js/modules/mouse.js":
/*!****************************************!*\
  !*** ./assets/src/js/modules/mouse.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/* harmony default export */ __webpack_exports__["default"] = (function () {
  if ($('#lottie')) {
    typeof navigator !== "undefined" && function (root, factory) {
      if (typeof define === "function" && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
        define(function () {
          return factory(root);
        });
      } else if (( false ? undefined : _typeof(module)) === "object" && module.exports) {
        module.exports = factory(root);
      } else {
        root.lottie = factory(root);
        root.bodymovin = root.lottie;
      }
    }(window || {}, function (window) {
      "use strict";

      var svgNS = "http://www.w3.org/2000/svg",
        locationHref = "",
        initialDefaultFrame = -999999,
        subframeEnabled = !0,
        expressionsPlugin,
        isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
        cachedColors = {},
        bm_rounder = Math.round,
        bm_rnd,
        bm_pow = Math.pow,
        bm_sqrt = Math.sqrt,
        bm_abs = Math.abs,
        bm_floor = Math.floor,
        bm_max = Math.max,
        bm_min = Math.min,
        blitter = 10,
        BMMath = {};
      function ProjectInterface() {
        return {};
      }
      !function () {
        var t,
          e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
          i = e.length;
        for (t = 0; t < i; t += 1) {
          BMMath[e[t]] = Math[e[t]];
        }
      }(), BMMath.random = Math.random, BMMath.abs = function (t) {
        if ("object" === _typeof(t) && t.length) {
          var e,
            i = createSizedArray(t.length),
            r = t.length;
          for (e = 0; e < r; e += 1) {
            i[e] = Math.abs(t[e]);
          }
          return i;
        }
        return Math.abs(t);
      };
      var defaultCurveSegments = 150,
        degToRads = Math.PI / 180,
        roundCorner = .5519;
      function roundValues(t) {
        bm_rnd = t ? Math.round : function (t) {
          return t;
        };
      }
      function styleDiv(t) {
        t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = t.style.webkitTransformStyle = t.style.mozTransformStyle = "preserve-3d";
      }
      function BMEnterFrameEvent(t, e, i, r) {
        this.type = t, this.currentTime = e, this.totalTime = i, this.direction = r < 0 ? -1 : 1;
      }
      function BMCompleteEvent(t, e) {
        this.type = t, this.direction = e < 0 ? -1 : 1;
      }
      function BMCompleteLoopEvent(t, e, i, r) {
        this.type = t, this.currentLoop = i, this.totalLoops = e, this.direction = r < 0 ? -1 : 1;
      }
      function BMSegmentStartEvent(t, e, i) {
        this.type = t, this.firstFrame = e, this.totalFrames = i;
      }
      function BMDestroyEvent(t, e) {
        this.type = t, this.target = e;
      }
      function BMRenderFrameErrorEvent(t, e) {
        this.type = "renderFrameError", this.nativeError = t, this.currentTime = e;
      }
      function BMConfigErrorEvent(t) {
        this.type = "configError", this.nativeError = t;
      }
      function BMAnimationConfigErrorEvent(t, e) {
        this.type = t, this.nativeError = e, this.currentTime = currentTime;
      }
      roundValues(!1);
      var createElementID = (G = 0, function () {
          return "__lottie_element_" + ++G;
        }),
        G;
      function HSVtoRGB(t, e, i) {
        var r, s, a, n, o, h, l, p;
        switch (h = i * (1 - e), l = i * (1 - (o = 6 * t - (n = Math.floor(6 * t))) * e), p = i * (1 - (1 - o) * e), n % 6) {
          case 0:
            r = i, s = p, a = h;
            break;
          case 1:
            r = l, s = i, a = h;
            break;
          case 2:
            r = h, s = i, a = p;
            break;
          case 3:
            r = h, s = l, a = i;
            break;
          case 4:
            r = p, s = h, a = i;
            break;
          case 5:
            r = i, s = h, a = l;
        }
        return [r, s, a];
      }
      function RGBtoHSV(t, e, i) {
        var r,
          s = Math.max(t, e, i),
          a = Math.min(t, e, i),
          n = s - a,
          o = 0 === s ? 0 : n / s,
          h = s / 255;
        switch (s) {
          case a:
            r = 0;
            break;
          case t:
            r = e - i + n * (e < i ? 6 : 0), r /= 6 * n;
            break;
          case e:
            r = i - t + 2 * n, r /= 6 * n;
            break;
          case i:
            r = t - e + 4 * n, r /= 6 * n;
        }
        return [r, o, h];
      }
      function addSaturationToRGB(t, e) {
        var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
        return i[1] += e, 1 < i[1] ? i[1] = 1 : i[1] <= 0 && (i[1] = 0), HSVtoRGB(i[0], i[1], i[2]);
      }
      function addBrightnessToRGB(t, e) {
        var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
        return i[2] += e, 1 < i[2] ? i[2] = 1 : i[2] < 0 && (i[2] = 0), HSVtoRGB(i[0], i[1], i[2]);
      }
      function addHueToRGB(t, e) {
        var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
        return i[0] += e / 360, 1 < i[0] ? i[0] -= 1 : i[0] < 0 && (i[0] += 1), HSVtoRGB(i[0], i[1], i[2]);
      }
      var rgbToHex = function () {
        var t,
          e,
          r = [];
        for (t = 0; t < 256; t += 1) {
          e = t.toString(16), r[t] = 1 == e.length ? "0" + e : e;
        }
        return function (t, e, i) {
          return t < 0 && (t = 0), e < 0 && (e = 0), i < 0 && (i = 0), "#" + r[t] + r[e] + r[i];
        };
      }();
      function BaseEvent() {}
      BaseEvent.prototype = {
        triggerEvent: function triggerEvent(t, e) {
          if (this._cbs[t]) for (var i = this._cbs[t].length, r = 0; r < i; r++) {
            this._cbs[t][r](e);
          }
        },
        addEventListener: function addEventListener(t, e) {
          return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e), function () {
            this.removeEventListener(t, e);
          }.bind(this);
        },
        removeEventListener: function removeEventListener(t, e) {
          if (e) {
            if (this._cbs[t]) {
              for (var i = 0, r = this._cbs[t].length; i < r;) {
                this._cbs[t][i] === e && (this._cbs[t].splice(i, 1), i -= 1, r -= 1), i += 1;
              }
              this._cbs[t].length || (this._cbs[t] = null);
            }
          } else this._cbs[t] = null;
        }
      };
      var createTypedArray = "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function (t, e) {
        return "float32" === t ? new Float32Array(e) : "int16" === t ? new Int16Array(e) : "uint8c" === t ? new Uint8ClampedArray(e) : void 0;
      } : function (t, e) {
        var i,
          r = 0,
          s = [];
        switch (t) {
          case "int16":
          case "uint8c":
            i = 1;
            break;
          default:
            i = 1.1;
        }
        for (r = 0; r < e; r += 1) {
          s.push(i);
        }
        return s;
      };
      function createSizedArray(t) {
        return Array.apply(null, {
          length: t
        });
      }
      function createNS(t) {
        return document.createElementNS(svgNS, t);
      }
      function createTag(t) {
        return document.createElement(t);
      }
      function DynamicPropertyContainer() {}
      DynamicPropertyContainer.prototype = {
        addDynamicProperty: function addDynamicProperty(t) {
          -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0);
        },
        iterateDynamicProperties: function iterateDynamicProperties() {
          this._mdf = !1;
          var t,
            e = this.dynamicProperties.length;
          for (t = 0; t < e; t += 1) {
            this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0);
          }
        },
        initDynamicPropertyContainer: function initDynamicPropertyContainer(t) {
          this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1;
        }
      };
      var getBlendMode = (Pa = {
          0: "source-over",
          1: "multiply",
          2: "screen",
          3: "overlay",
          4: "darken",
          5: "lighten",
          6: "color-dodge",
          7: "color-burn",
          8: "hard-light",
          9: "soft-light",
          10: "difference",
          11: "exclusion",
          12: "hue",
          13: "saturation",
          14: "color",
          15: "luminosity"
        }, function (t) {
          return Pa[t] || "";
        }),
        Pa,
        Matrix = function () {
          var s = Math.cos,
            a = Math.sin,
            n = Math.tan,
            r = Math.round;
          function t() {
            return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this;
          }
          function e(t) {
            if (0 === t) return this;
            var e = s(t),
              i = a(t);
            return this._t(e, -i, 0, 0, i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
          }
          function i(t) {
            if (0 === t) return this;
            var e = s(t),
              i = a(t);
            return this._t(1, 0, 0, 0, 0, e, -i, 0, 0, i, e, 0, 0, 0, 0, 1);
          }
          function o(t) {
            if (0 === t) return this;
            var e = s(t),
              i = a(t);
            return this._t(e, 0, i, 0, 0, 1, 0, 0, -i, 0, e, 0, 0, 0, 0, 1);
          }
          function h(t) {
            if (0 === t) return this;
            var e = s(t),
              i = a(t);
            return this._t(e, -i, 0, 0, i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
          }
          function l(t, e) {
            return this._t(1, e, t, 1, 0, 0);
          }
          function p(t, e) {
            return this.shear(n(t), n(e));
          }
          function m(t, e) {
            var i = s(e),
              r = a(e);
            return this._t(i, r, 0, 0, -r, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, n(t), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(i, -r, 0, 0, r, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
          }
          function f(t, e, i) {
            return i || 0 === i || (i = 1), 1 === t && 1 === e && 1 === i ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1);
          }
          function c(t, e, i, r, s, a, n, o, h, l, p, m, f, c, d, u) {
            return this.props[0] = t, this.props[1] = e, this.props[2] = i, this.props[3] = r, this.props[4] = s, this.props[5] = a, this.props[6] = n, this.props[7] = o, this.props[8] = h, this.props[9] = l, this.props[10] = p, this.props[11] = m, this.props[12] = f, this.props[13] = c, this.props[14] = d, this.props[15] = u, this;
          }
          function d(t, e, i) {
            return i = i || 0, 0 !== t || 0 !== e || 0 !== i ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1) : this;
          }
          function u(t, e, i, r, s, a, n, o, h, l, p, m, f, c, d, u) {
            var y = this.props;
            if (1 === t && 0 === e && 0 === i && 0 === r && 0 === s && 1 === a && 0 === n && 0 === o && 0 === h && 0 === l && 1 === p && 0 === m) return y[12] = y[12] * t + y[15] * f, y[13] = y[13] * a + y[15] * c, y[14] = y[14] * p + y[15] * d, y[15] = y[15] * u, this._identityCalculated = !1, this;
            var g = y[0],
              v = y[1],
              b = y[2],
              E = y[3],
              x = y[4],
              P = y[5],
              S = y[6],
              _ = y[7],
              A = y[8],
              C = y[9],
              T = y[10],
              k = y[11],
              M = y[12],
              D = y[13],
              F = y[14],
              w = y[15];
            return y[0] = g * t + v * s + b * h + E * f, y[1] = g * e + v * a + b * l + E * c, y[2] = g * i + v * n + b * p + E * d, y[3] = g * r + v * o + b * m + E * u, y[4] = x * t + P * s + S * h + _ * f, y[5] = x * e + P * a + S * l + _ * c, y[6] = x * i + P * n + S * p + _ * d, y[7] = x * r + P * o + S * m + _ * u, y[8] = A * t + C * s + T * h + k * f, y[9] = A * e + C * a + T * l + k * c, y[10] = A * i + C * n + T * p + k * d, y[11] = A * r + C * o + T * m + k * u, y[12] = M * t + D * s + F * h + w * f, y[13] = M * e + D * a + F * l + w * c, y[14] = M * i + D * n + F * p + w * d, y[15] = M * r + D * o + F * m + w * u, this._identityCalculated = !1, this;
          }
          function y() {
            return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity;
          }
          function g(t) {
            for (var e = 0; e < 16;) {
              if (t.props[e] !== this.props[e]) return !1;
              e += 1;
            }
            return !0;
          }
          function v(t) {
            var e;
            for (e = 0; e < 16; e += 1) {
              t.props[e] = this.props[e];
            }
            return t;
          }
          function b(t) {
            var e;
            for (e = 0; e < 16; e += 1) {
              this.props[e] = t[e];
            }
          }
          function E(t, e, i) {
            return {
              x: t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12],
              y: t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13],
              z: t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
            };
          }
          function x(t, e, i) {
            return t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12];
          }
          function P(t, e, i) {
            return t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13];
          }
          function S(t, e, i) {
            return t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14];
          }
          function _() {
            var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
              e = this.props[5] / t,
              i = -this.props[1] / t,
              r = -this.props[4] / t,
              s = this.props[0] / t,
              a = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
              n = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t,
              o = new Matrix();
            return o.props[0] = e, o.props[1] = i, o.props[4] = r, o.props[5] = s, o.props[12] = a, o.props[13] = n, o;
          }
          function A(t) {
            return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0);
          }
          function C(t) {
            var e,
              i = t.length,
              r = [];
            for (e = 0; e < i; e += 1) {
              r[e] = A(t[e]);
            }
            return r;
          }
          function T(t, e, i) {
            var r = createTypedArray("float32", 6);
            if (this.isIdentity()) r[0] = t[0], r[1] = t[1], r[2] = e[0], r[3] = e[1], r[4] = i[0], r[5] = i[1];else {
              var s = this.props[0],
                a = this.props[1],
                n = this.props[4],
                o = this.props[5],
                h = this.props[12],
                l = this.props[13];
              r[0] = t[0] * s + t[1] * n + h, r[1] = t[0] * a + t[1] * o + l, r[2] = e[0] * s + e[1] * n + h, r[3] = e[0] * a + e[1] * o + l, r[4] = i[0] * s + i[1] * n + h, r[5] = i[0] * a + i[1] * o + l;
            }
            return r;
          }
          function k(t, e, i) {
            return this.isIdentity() ? [t, e, i] : [t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]];
          }
          function M(t, e) {
            if (this.isIdentity()) return t + "," + e;
            var i = this.props;
            return Math.round(100 * (t * i[0] + e * i[4] + i[12])) / 100 + "," + Math.round(100 * (t * i[1] + e * i[5] + i[13])) / 100;
          }
          function D() {
            for (var t = 0, e = this.props, i = "matrix3d("; t < 16;) {
              i += r(1e4 * e[t]) / 1e4, i += 15 === t ? ")" : ",", t += 1;
            }
            return i;
          }
          function F(t) {
            return t < 1e-6 && 0 < t || -1e-6 < t && t < 0 ? r(1e4 * t) / 1e4 : t;
          }
          function w() {
            var t = this.props;
            return "matrix(" + F(t[0]) + "," + F(t[1]) + "," + F(t[4]) + "," + F(t[5]) + "," + F(t[12]) + "," + F(t[13]) + ")";
          }
          return function () {
            this.reset = t, this.rotate = e, this.rotateX = i, this.rotateY = o, this.rotateZ = h, this.skew = p, this.skewFromAxis = m, this.shear = l, this.scale = f, this.setTransform = c, this.translate = d, this.transform = u, this.applyToPoint = E, this.applyToX = x, this.applyToY = P, this.applyToZ = S, this.applyToPointArray = k, this.applyToTriplePoints = T, this.applyToPointStringified = M, this.toCSS = D, this.to2dCSS = w, this.clone = v, this.cloneFromProps = b, this.equals = g, this.inversePoints = C, this.inversePoint = A, this.getInverseMatrix = _, this._t = this.transform, this.isIdentity = y, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset();
          };
        }();
      !function (o, h) {
        var l,
          p = this,
          m = 256,
          f = 6,
          c = "random",
          d = h.pow(m, f),
          u = h.pow(2, 52),
          y = 2 * u,
          g = m - 1;
        function v(t) {
          var e,
            i = t.length,
            n = this,
            r = 0,
            s = n.i = n.j = 0,
            a = n.S = [];
          for (i || (t = [i++]); r < m;) {
            a[r] = r++;
          }
          for (r = 0; r < m; r++) {
            a[r] = a[s = g & s + t[r % i] + (e = a[r])], a[s] = e;
          }
          n.g = function (t) {
            for (var e, i = 0, r = n.i, s = n.j, a = n.S; t--;) {
              e = a[r = g & r + 1], i = i * m + a[g & (a[r] = a[s = g & s + e]) + (a[s] = e)];
            }
            return n.i = r, n.j = s, i;
          };
        }
        function b(t, e) {
          return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e;
        }
        function E(t, e) {
          for (var i, r = t + "", s = 0; s < r.length;) {
            e[g & s] = g & (i ^= 19 * e[g & s]) + r.charCodeAt(s++);
          }
          return x(e);
        }
        function x(t) {
          return String.fromCharCode.apply(0, t);
        }
        h["seed" + c] = function (t, e, i) {
          var r = [],
            s = E(function t(e, i) {
              var r,
                s = [],
                a = _typeof(e);
              if (i && "object" == a) for (r in e) {
                try {
                  s.push(t(e[r], i - 1));
                } catch (t) {}
              }
              return s.length ? s : "string" == a ? e : e + "\0";
            }((e = !0 === e ? {
              entropy: !0
            } : e || {}).entropy ? [t, x(o)] : null === t ? function () {
              try {
                if (l) return x(l.randomBytes(m));
                var t = new Uint8Array(m);
                return (p.crypto || p.msCrypto).getRandomValues(t), x(t);
              } catch (t) {
                var e = p.navigator,
                  i = e && e.plugins;
                return [+new Date(), p, i, p.screen, x(o)];
              }
            }() : t, 3), r),
            a = new v(r),
            n = function n() {
              for (var t = a.g(f), e = d, i = 0; t < u;) {
                t = (t + i) * m, e *= m, i = a.g(1);
              }
              for (; y <= t;) {
                t /= 2, e /= 2, i >>>= 1;
              }
              return (t + i) / e;
            };
          return n.int32 = function () {
            return 0 | a.g(4);
          }, n.quick = function () {
            return a.g(4) / 4294967296;
          }, n["double"] = n, E(x(a.S), o), (e.pass || i || function (t, e, i, r) {
            return r && (r.S && b(r, a), t.state = function () {
              return b(a, {});
            }), i ? (h[c] = t, e) : t;
          })(n, s, "global" in e ? e.global : this == h, e.state);
        }, E(h.random(), o);
      }([], BMMath);
      var BezierFactory = function () {
        var t = {
            getBezierEasing: function getBezierEasing(t, e, i, r, s) {
              var a = s || ("bez_" + t + "_" + e + "_" + i + "_" + r).replace(/\./g, "p");
              if (o[a]) return o[a];
              var n = new h([t, e, i, r]);
              return o[a] = n;
            }
          },
          o = {};
        var l = 11,
          p = 1 / (l - 1),
          e = "function" == typeof Float32Array;
        function r(t, e) {
          return 1 - 3 * e + 3 * t;
        }
        function s(t, e) {
          return 3 * e - 6 * t;
        }
        function a(t) {
          return 3 * t;
        }
        function m(t, e, i) {
          return ((r(e, i) * t + s(e, i)) * t + a(e)) * t;
        }
        function f(t, e, i) {
          return 3 * r(e, i) * t * t + 2 * s(e, i) * t + a(e);
        }
        function h(t) {
          this._p = t, this._mSampleValues = e ? new Float32Array(l) : new Array(l), this._precomputed = !1, this.get = this.get.bind(this);
        }
        return h.prototype = {
          get: function get(t) {
            var e = this._p[0],
              i = this._p[1],
              r = this._p[2],
              s = this._p[3];
            return this._precomputed || this._precompute(), e === i && r === s ? t : 0 === t ? 0 : 1 === t ? 1 : m(this._getTForX(t), i, s);
          },
          _precompute: function _precompute() {
            var t = this._p[0],
              e = this._p[1],
              i = this._p[2],
              r = this._p[3];
            this._precomputed = !0, t === e && i === r || this._calcSampleValues();
          },
          _calcSampleValues: function _calcSampleValues() {
            for (var t = this._p[0], e = this._p[2], i = 0; i < l; ++i) {
              this._mSampleValues[i] = m(i * p, t, e);
            }
          },
          _getTForX: function _getTForX(t) {
            for (var e = this._p[0], i = this._p[2], r = this._mSampleValues, s = 0, a = 1, n = l - 1; a !== n && r[a] <= t; ++a) {
              s += p;
            }
            var o = s + (t - r[--a]) / (r[a + 1] - r[a]) * p,
              h = f(o, e, i);
            return .001 <= h ? function (t, e, i, r) {
              for (var s = 0; s < 4; ++s) {
                var a = f(e, i, r);
                if (0 === a) return e;
                e -= (m(e, i, r) - t) / a;
              }
              return e;
            }(t, o, e, i) : 0 === h ? o : function (t, e, i, r, s) {
              for (var a, n, o = 0; 0 < (a = m(n = e + (i - e) / 2, r, s) - t) ? i = n : e = n, 1e-7 < Math.abs(a) && ++o < 10;) {
                ;
              }
              return n;
            }(t, s, s + p, e, i);
          }
        }, t;
      }();
      function extendPrototype(t, e) {
        var i,
          r,
          s = t.length;
        for (i = 0; i < s; i += 1) {
          for (var a in r = t[i].prototype) {
            r.hasOwnProperty(a) && (e.prototype[a] = r[a]);
          }
        }
      }
      function getDescriptor(t, e) {
        return Object.getOwnPropertyDescriptor(t, e);
      }
      function createProxyFunction(t) {
        function e() {}
        return e.prototype = t, e;
      }
      function bezFunction() {
        Math;
        function y(t, e, i, r, s, a) {
          var n = t * r + e * s + i * a - s * r - a * t - i * e;
          return -.001 < n && n < .001;
        }
        var p = function p(t, e, i, r) {
          var s,
            a,
            n,
            o,
            h,
            l,
            p = defaultCurveSegments,
            m = 0,
            f = [],
            c = [],
            d = bezier_length_pool.newElement();
          for (n = i.length, s = 0; s < p; s += 1) {
            for (h = s / (p - 1), a = l = 0; a < n; a += 1) {
              o = bm_pow(1 - h, 3) * t[a] + 3 * bm_pow(1 - h, 2) * h * i[a] + 3 * (1 - h) * bm_pow(h, 2) * r[a] + bm_pow(h, 3) * e[a], f[a] = o, null !== c[a] && (l += bm_pow(f[a] - c[a], 2)), c[a] = f[a];
            }
            l && (m += l = bm_sqrt(l)), d.percents[s] = h, d.lengths[s] = m;
          }
          return d.addedLength = m, d;
        };
        function g(t) {
          this.segmentLength = 0, this.points = new Array(t);
        }
        function v(t, e) {
          this.partialLength = t, this.point = e;
        }
        var b,
          t = (b = {}, function (t, e, i, r) {
            var s = (t[0] + "_" + t[1] + "_" + e[0] + "_" + e[1] + "_" + i[0] + "_" + i[1] + "_" + r[0] + "_" + r[1]).replace(/\./g, "p");
            if (!b[s]) {
              var a,
                n,
                o,
                h,
                l,
                p,
                m,
                f = defaultCurveSegments,
                c = 0,
                d = null;
              2 === t.length && (t[0] != e[0] || t[1] != e[1]) && y(t[0], t[1], e[0], e[1], t[0] + i[0], t[1] + i[1]) && y(t[0], t[1], e[0], e[1], e[0] + r[0], e[1] + r[1]) && (f = 2);
              var u = new g(f);
              for (o = i.length, a = 0; a < f; a += 1) {
                for (m = createSizedArray(o), l = a / (f - 1), n = p = 0; n < o; n += 1) {
                  h = bm_pow(1 - l, 3) * t[n] + 3 * bm_pow(1 - l, 2) * l * (t[n] + i[n]) + 3 * (1 - l) * bm_pow(l, 2) * (e[n] + r[n]) + bm_pow(l, 3) * e[n], m[n] = h, null !== d && (p += bm_pow(m[n] - d[n], 2));
                }
                c += p = bm_sqrt(p), u.points[a] = new v(p, m), d = m;
              }
              u.segmentLength = c, b[s] = u;
            }
            return b[s];
          });
        function M(t, e) {
          var i = e.percents,
            r = e.lengths,
            s = i.length,
            a = bm_floor((s - 1) * t),
            n = t * e.addedLength,
            o = 0;
          if (a === s - 1 || 0 === a || n === r[a]) return i[a];
          for (var h = r[a] > n ? -1 : 1, l = !0; l;) {
            if (r[a] <= n && r[a + 1] > n ? (o = (n - r[a]) / (r[a + 1] - r[a]), l = !1) : a += h, a < 0 || s - 1 <= a) {
              if (a === s - 1) return i[a];
              l = !1;
            }
          }
          return i[a] + (i[a + 1] - i[a]) * o;
        }
        var D = createTypedArray("float32", 8);
        return {
          getSegmentsLength: function getSegmentsLength(t) {
            var e,
              i = segments_length_pool.newElement(),
              r = t.c,
              s = t.v,
              a = t.o,
              n = t.i,
              o = t._length,
              h = i.lengths,
              l = 0;
            for (e = 0; e < o - 1; e += 1) {
              h[e] = p(s[e], s[e + 1], a[e], n[e + 1]), l += h[e].addedLength;
            }
            return r && o && (h[e] = p(s[e], s[0], a[e], n[0]), l += h[e].addedLength), i.totalLength = l, i;
          },
          getNewSegment: function getNewSegment(t, e, i, r, s, a, n) {
            var o,
              h = M(s = s < 0 ? 0 : 1 < s ? 1 : s, n),
              l = M(a = 1 < a ? 1 : a, n),
              p = t.length,
              m = 1 - h,
              f = 1 - l,
              c = m * m * m,
              d = h * m * m * 3,
              u = h * h * m * 3,
              y = h * h * h,
              g = m * m * f,
              v = h * m * f + m * h * f + m * m * l,
              b = h * h * f + m * h * l + h * m * l,
              E = h * h * l,
              x = m * f * f,
              P = h * f * f + m * l * f + m * f * l,
              S = h * l * f + m * l * l + h * f * l,
              _ = h * l * l,
              A = f * f * f,
              C = l * f * f + f * l * f + f * f * l,
              T = l * l * f + f * l * l + l * f * l,
              k = l * l * l;
            for (o = 0; o < p; o += 1) {
              D[4 * o] = Math.round(1e3 * (c * t[o] + d * i[o] + u * r[o] + y * e[o])) / 1e3, D[4 * o + 1] = Math.round(1e3 * (g * t[o] + v * i[o] + b * r[o] + E * e[o])) / 1e3, D[4 * o + 2] = Math.round(1e3 * (x * t[o] + P * i[o] + S * r[o] + _ * e[o])) / 1e3, D[4 * o + 3] = Math.round(1e3 * (A * t[o] + C * i[o] + T * r[o] + k * e[o])) / 1e3;
            }
            return D;
          },
          getPointInSegment: function getPointInSegment(t, e, i, r, s, a) {
            var n = M(s, a),
              o = 1 - n;
            return [Math.round(1e3 * (o * o * o * t[0] + (n * o * o + o * n * o + o * o * n) * i[0] + (n * n * o + o * n * n + n * o * n) * r[0] + n * n * n * e[0])) / 1e3, Math.round(1e3 * (o * o * o * t[1] + (n * o * o + o * n * o + o * o * n) * i[1] + (n * n * o + o * n * n + n * o * n) * r[1] + n * n * n * e[1])) / 1e3];
          },
          buildBezierData: t,
          pointOnLine2D: y,
          pointOnLine3D: function pointOnLine3D(t, e, i, r, s, a, n, o, h) {
            if (0 === i && 0 === a && 0 === h) return y(t, e, r, s, n, o);
            var l,
              p = Math.sqrt(Math.pow(r - t, 2) + Math.pow(s - e, 2) + Math.pow(a - i, 2)),
              m = Math.sqrt(Math.pow(n - t, 2) + Math.pow(o - e, 2) + Math.pow(h - i, 2)),
              f = Math.sqrt(Math.pow(n - r, 2) + Math.pow(o - s, 2) + Math.pow(h - a, 2));
            return -1e-4 < (l = m < p ? f < p ? p - m - f : f - m - p : m < f ? f - m - p : m - p - f) && l < 1e-4;
          }
        };
      }
      !function () {
        for (var a = 0, t = ["ms", "moz", "webkit", "o"], e = 0; e < t.length && !window.requestAnimationFrame; ++e) {
          window.requestAnimationFrame = window[t[e] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[e] + "CancelAnimationFrame"] || window[t[e] + "CancelRequestAnimationFrame"];
        }
        window.requestAnimationFrame || (window.requestAnimationFrame = function (t, e) {
          var i = new Date().getTime(),
            r = Math.max(0, 16 - (i - a)),
            s = setTimeout(function () {
              t(i + r);
            }, r);
          return a = i + r, s;
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (t) {
          clearTimeout(t);
        });
      }();
      var bez = bezFunction();
      function dataFunctionManager() {
        function m(t, e, i) {
          var r,
            s,
            a,
            n,
            o,
            h,
            l = t.length;
          for (s = 0; s < l; s += 1) {
            if ("ks" in (r = t[s]) && !r.completed) {
              if (r.completed = !0, r.tt && (t[s - 1].td = r.tt), [], -1, r.hasMask) {
                var p = r.masksProperties;
                for (n = p.length, a = 0; a < n; a += 1) {
                  if (p[a].pt.k.i) d(p[a].pt.k);else for (h = p[a].pt.k.length, o = 0; o < h; o += 1) {
                    p[a].pt.k[o].s && d(p[a].pt.k[o].s[0]), p[a].pt.k[o].e && d(p[a].pt.k[o].e[0]);
                  }
                }
              }
              0 === r.ty ? (r.layers = f(r.refId, e), m(r.layers, e, i)) : 4 === r.ty ? c(r.shapes) : 5 == r.ty && u(r, i);
            }
          }
        }
        function f(t, e) {
          for (var i = 0, r = e.length; i < r;) {
            if (e[i].id === t) return e[i].layers.__used ? JSON.parse(JSON.stringify(e[i].layers)) : (e[i].layers.__used = !0, e[i].layers);
            i += 1;
          }
        }
        function c(t) {
          var e, i, r;
          for (e = t.length - 1; 0 <= e; e -= 1) {
            if ("sh" == t[e].ty) {
              if (t[e].ks.k.i) d(t[e].ks.k);else for (r = t[e].ks.k.length, i = 0; i < r; i += 1) {
                t[e].ks.k[i].s && d(t[e].ks.k[i].s[0]), t[e].ks.k[i].e && d(t[e].ks.k[i].e[0]);
              }
              !0;
            } else "gr" == t[e].ty && c(t[e].it);
          }
        }
        function d(t) {
          var e,
            i = t.i.length;
          for (e = 0; e < i; e += 1) {
            t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1];
          }
        }
        function o(t, e) {
          var i = e ? e.split(".") : [100, 100, 100];
          return t[0] > i[0] || !(i[0] > t[0]) && (t[1] > i[1] || !(i[1] > t[1]) && (t[2] > i[2] || !(i[2] > t[2]) && void 0));
        }
        var h,
          i = function () {
            var r = [4, 4, 14];
            function s(t) {
              var e,
                i,
                r,
                s = t.length;
              for (e = 0; e < s; e += 1) {
                5 === t[e].ty && (i = t[e], void 0, r = i.t.d, i.t.d = {
                  k: [{
                    s: r,
                    t: 0
                  }]
                });
              }
            }
            return function (t) {
              if (o(r, t.v) && (s(t.layers), t.assets)) {
                var e,
                  i = t.assets.length;
                for (e = 0; e < i; e += 1) {
                  t.assets[e].layers && s(t.assets[e].layers);
                }
              }
            };
          }(),
          r = (h = [4, 7, 99], function (t) {
            if (t.chars && !o(h, t.v)) {
              var e,
                i,
                r,
                s,
                a,
                n = t.chars.length;
              for (e = 0; e < n; e += 1) {
                if (t.chars[e].data && t.chars[e].data.shapes) for (r = (a = t.chars[e].data.shapes[0].it).length, i = 0; i < r; i += 1) {
                  (s = a[i].ks.k).__converted || (d(a[i].ks.k), s.__converted = !0);
                }
              }
            }
          }),
          s = function () {
            var r = [4, 1, 9];
            function a(t) {
              var e,
                i,
                r,
                s = t.length;
              for (e = 0; e < s; e += 1) {
                if ("gr" === t[e].ty) a(t[e].it);else if ("fl" === t[e].ty || "st" === t[e].ty) if (t[e].c.k && t[e].c.k[0].i) for (r = t[e].c.k.length, i = 0; i < r; i += 1) {
                  t[e].c.k[i].s && (t[e].c.k[i].s[0] /= 255, t[e].c.k[i].s[1] /= 255, t[e].c.k[i].s[2] /= 255, t[e].c.k[i].s[3] /= 255), t[e].c.k[i].e && (t[e].c.k[i].e[0] /= 255, t[e].c.k[i].e[1] /= 255, t[e].c.k[i].e[2] /= 255, t[e].c.k[i].e[3] /= 255);
                } else t[e].c.k[0] /= 255, t[e].c.k[1] /= 255, t[e].c.k[2] /= 255, t[e].c.k[3] /= 255;
              }
            }
            function s(t) {
              var e,
                i = t.length;
              for (e = 0; e < i; e += 1) {
                4 === t[e].ty && a(t[e].shapes);
              }
            }
            return function (t) {
              if (o(r, t.v) && (s(t.layers), t.assets)) {
                var e,
                  i = t.assets.length;
                for (e = 0; e < i; e += 1) {
                  t.assets[e].layers && s(t.assets[e].layers);
                }
              }
            };
          }(),
          a = function () {
            var r = [4, 4, 18];
            function l(t) {
              var e, i, r;
              for (e = t.length - 1; 0 <= e; e -= 1) {
                if ("sh" == t[e].ty) {
                  if (t[e].ks.k.i) t[e].ks.k.c = t[e].closed;else for (r = t[e].ks.k.length, i = 0; i < r; i += 1) {
                    t[e].ks.k[i].s && (t[e].ks.k[i].s[0].c = t[e].closed), t[e].ks.k[i].e && (t[e].ks.k[i].e[0].c = t[e].closed);
                  }
                  !0;
                } else "gr" == t[e].ty && l(t[e].it);
              }
            }
            function s(t) {
              var e,
                i,
                r,
                s,
                a,
                n,
                o = t.length;
              for (i = 0; i < o; i += 1) {
                if ((e = t[i]).hasMask) {
                  var h = e.masksProperties;
                  for (s = h.length, r = 0; r < s; r += 1) {
                    if (h[r].pt.k.i) h[r].pt.k.c = h[r].cl;else for (n = h[r].pt.k.length, a = 0; a < n; a += 1) {
                      h[r].pt.k[a].s && (h[r].pt.k[a].s[0].c = h[r].cl), h[r].pt.k[a].e && (h[r].pt.k[a].e[0].c = h[r].cl);
                    }
                  }
                }
                4 === e.ty && l(e.shapes);
              }
            }
            return function (t) {
              if (o(r, t.v) && (s(t.layers), t.assets)) {
                var e,
                  i = t.assets.length;
                for (e = 0; e < i; e += 1) {
                  t.assets[e].layers && s(t.assets[e].layers);
                }
              }
            };
          }();
        function u(t, e) {
          0 !== t.t.a.length || "m" in t.t.p || (t.singleShape = !0);
        }
        var t = {
          completeData: function completeData(t, e) {
            t.__complete || (s(t), i(t), r(t), a(t), m(t.layers, t.assets, e), t.__complete = !0);
          }
        };
        return t.checkColors = s, t.checkChars = r, t.checkShapes = a, t.completeLayers = m, t;
      }
      var dataManager = dataFunctionManager(),
        FontManager = function () {
          var a = {
              w: 0,
              size: 0,
              shapes: []
            },
            t = [];
          function u(t, e) {
            var i = createTag("span");
            i.style.fontFamily = e;
            var r = createTag("span");
            r.innerText = "giItT1WQy@!-/#", i.style.position = "absolute", i.style.left = "-10000px", i.style.top = "-10000px", i.style.fontSize = "300px", i.style.fontVariant = "normal", i.style.fontStyle = "normal", i.style.fontWeight = "normal", i.style.letterSpacing = "0", i.appendChild(r), document.body.appendChild(i);
            var s = r.offsetWidth;
            return r.style.fontFamily = function (t) {
              var e,
                i = t.split(","),
                r = i.length,
                s = [];
              for (e = 0; e < r; e += 1) {
                "sans-serif" !== i[e] && "monospace" !== i[e] && s.push(i[e]);
              }
              return s.join(",");
            }(t) + ", " + e, {
              node: r,
              w: s,
              parent: i
            };
          }
          t = t.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
          var e = function e() {
            this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
          };
          return e.getCombinedCharacterCodes = function () {
            return t;
          }, e.prototype = {
            addChars: function addChars(t) {
              if (t) {
                this.chars || (this.chars = []);
                var e,
                  i,
                  r,
                  s = t.length,
                  a = this.chars.length;
                for (e = 0; e < s; e += 1) {
                  for (i = 0, r = !1; i < a;) {
                    this.chars[i].style === t[e].style && this.chars[i].fFamily === t[e].fFamily && this.chars[i].ch === t[e].ch && (r = !0), i += 1;
                  }
                  r || (this.chars.push(t[e]), a += 1);
                }
              }
            },
            addFonts: function addFonts(t, e) {
              if (t) {
                if (this.chars) return this.isLoaded = !0, void (this.fonts = t.list);
                var i,
                  r,
                  s,
                  a,
                  n = t.list,
                  o = n.length,
                  h = o;
                for (i = 0; i < o; i += 1) {
                  var l,
                    p,
                    m = !0;
                  if (n[i].loaded = !1, n[i].monoCase = u(n[i].fFamily, "monospace"), n[i].sansCase = u(n[i].fFamily, "sans-serif"), n[i].fPath) {
                    if ("p" === n[i].fOrigin || 3 === n[i].origin) {
                      if (0 < (l = document.querySelectorAll('style[f-forigin="p"][f-family="' + n[i].fFamily + '"], style[f-origin="3"][f-family="' + n[i].fFamily + '"]')).length && (m = !1), m) {
                        var f = createTag("style");
                        f.setAttribute("f-forigin", n[i].fOrigin), f.setAttribute("f-origin", n[i].origin), f.setAttribute("f-family", n[i].fFamily), f.type = "text/css", f.innerText = "@font-face {font-family: " + n[i].fFamily + "; font-style: normal; src: url('" + n[i].fPath + "');}", e.appendChild(f);
                      }
                    } else if ("g" === n[i].fOrigin || 1 === n[i].origin) {
                      for (l = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), p = 0; p < l.length; p++) {
                        -1 !== l[p].href.indexOf(n[i].fPath) && (m = !1);
                      }
                      if (m) {
                        var c = createTag("link");
                        c.setAttribute("f-forigin", n[i].fOrigin), c.setAttribute("f-origin", n[i].origin), c.type = "text/css", c.rel = "stylesheet", c.href = n[i].fPath, document.body.appendChild(c);
                      }
                    } else if ("t" === n[i].fOrigin || 2 === n[i].origin) {
                      for (l = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), p = 0; p < l.length; p++) {
                        n[i].fPath === l[p].src && (m = !1);
                      }
                      if (m) {
                        var d = createTag("link");
                        d.setAttribute("f-forigin", n[i].fOrigin), d.setAttribute("f-origin", n[i].origin), d.setAttribute("rel", "stylesheet"), d.setAttribute("href", n[i].fPath), e.appendChild(d);
                      }
                    }
                  } else n[i].loaded = !0, h -= 1;
                  n[i].helper = (r = e, s = n[i], a = void 0, (a = createNS("text")).style.fontSize = "100px", a.setAttribute("font-family", s.fFamily), a.setAttribute("font-style", s.fStyle), a.setAttribute("font-weight", s.fWeight), a.textContent = "1", s.fClass ? (a.style.fontFamily = "inherit", a.setAttribute("class", s.fClass)) : a.style.fontFamily = s.fFamily, r.appendChild(a), createTag("canvas").getContext("2d").font = s.fWeight + " " + s.fStyle + " 100px " + s.fFamily, a), n[i].cache = {}, this.fonts.push(n[i]);
                }
                0 === h ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100);
              } else this.isLoaded = !0;
            },
            getCharData: function getCharData(t, e, i) {
              for (var r = 0, s = this.chars.length; r < s;) {
                if (this.chars[r].ch === t && this.chars[r].style === e && this.chars[r].fFamily === i) return this.chars[r];
                r += 1;
              }
              return ("string" == typeof t && 13 !== t.charCodeAt(0) || !t) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", t, e, i)), a;
            },
            getFontByName: function getFontByName(t) {
              for (var e = 0, i = this.fonts.length; e < i;) {
                if (this.fonts[e].fName === t) return this.fonts[e];
                e += 1;
              }
              return this.fonts[0];
            },
            measureText: function measureText(t, e, i) {
              var r = this.getFontByName(e),
                s = t.charCodeAt(0);
              if (!r.cache[s + 1]) {
                var a = r.helper;
                if (" " === t) {
                  a.textContent = "|" + t + "|";
                  var n = a.getComputedTextLength();
                  a.textContent = "||";
                  var o = a.getComputedTextLength();
                  r.cache[s + 1] = (n - o) / 100;
                } else a.textContent = t, r.cache[s + 1] = a.getComputedTextLength() / 100;
              }
              return r.cache[s + 1] * i;
            },
            checkLoadedFonts: function checkLoadedFonts() {
              var t,
                e,
                i,
                r = this.fonts.length,
                s = r;
              for (t = 0; t < r; t += 1) {
                this.fonts[t].loaded ? s -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (e = this.fonts[t].monoCase.node, i = this.fonts[t].monoCase.w, e.offsetWidth !== i ? (s -= 1, this.fonts[t].loaded = !0) : (e = this.fonts[t].sansCase.node, i = this.fonts[t].sansCase.w, e.offsetWidth !== i && (s -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
              }
              0 !== s && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10);
            },
            setIsLoaded: function setIsLoaded() {
              this.isLoaded = !0;
            }
          }, e;
        }(),
        PropertyFactory = function () {
          var m = initialDefaultFrame,
            s = Math.abs;
          function f(t, e) {
            var i,
              r = this.offsetTime;
            "multidimensional" === this.propType && (i = createTypedArray("float32", this.pv.length));
            for (var s, a, n, o, h, l, p, m, f = e.lastIndex, c = f, d = this.keyframes.length - 1, u = !0; u;) {
              if (s = this.keyframes[c], a = this.keyframes[c + 1], c === d - 1 && t >= a.t - r) {
                s.h && (s = a), f = 0;
                break;
              }
              if (a.t - r > t) {
                f = c;
                break;
              }
              c < d - 1 ? c += 1 : (f = 0, u = !1);
            }
            var y,
              g,
              v,
              b,
              E,
              x,
              P,
              S,
              _,
              A,
              C = a.t - r,
              T = s.t - r;
            if (s.to) {
              s.bezierData || (s.bezierData = bez.buildBezierData(s.s, a.s || s.e, s.to, s.ti));
              var k = s.bezierData;
              if (C <= t || t < T) {
                var M = C <= t ? k.points.length - 1 : 0;
                for (o = k.points[M].point.length, n = 0; n < o; n += 1) {
                  i[n] = k.points[M].point[n];
                }
              } else {
                s.__fnct ? m = s.__fnct : (m = BezierFactory.getBezierEasing(s.o.x, s.o.y, s.i.x, s.i.y, s.n).get, s.__fnct = m), h = m((t - T) / (C - T));
                var D,
                  F = k.segmentLength * h,
                  w = e.lastFrame < t && e._lastKeyframeIndex === c ? e._lastAddedLength : 0;
                for (p = e.lastFrame < t && e._lastKeyframeIndex === c ? e._lastPoint : 0, u = !0, l = k.points.length; u;) {
                  if (w += k.points[p].partialLength, 0 === F || 0 === h || p === k.points.length - 1) {
                    for (o = k.points[p].point.length, n = 0; n < o; n += 1) {
                      i[n] = k.points[p].point[n];
                    }
                    break;
                  }
                  if (w <= F && F < w + k.points[p + 1].partialLength) {
                    for (D = (F - w) / k.points[p + 1].partialLength, o = k.points[p].point.length, n = 0; n < o; n += 1) {
                      i[n] = k.points[p].point[n] + (k.points[p + 1].point[n] - k.points[p].point[n]) * D;
                    }
                    break;
                  }
                  p < l - 1 ? p += 1 : u = !1;
                }
                e._lastPoint = p, e._lastAddedLength = w - k.points[p].partialLength, e._lastKeyframeIndex = c;
              }
            } else {
              var I, V, B, R, L;
              if (d = s.s.length, y = a.s || s.e, this.sh && 1 !== s.h) {
                if (C <= t) i[0] = y[0], i[1] = y[1], i[2] = y[2];else if (t <= T) i[0] = s.s[0], i[1] = s.s[1], i[2] = s.s[2];else {
                  var G = N(s.s),
                    z = N(y);
                  g = i, v = function (t, e, i) {
                    var r,
                      s,
                      a,
                      n,
                      o,
                      h = [],
                      l = t[0],
                      p = t[1],
                      m = t[2],
                      f = t[3],
                      c = e[0],
                      d = e[1],
                      u = e[2],
                      y = e[3];
                    (s = l * c + p * d + m * u + f * y) < 0 && (s = -s, c = -c, d = -d, u = -u, y = -y);
                    o = 1e-6 < 1 - s ? (r = Math.acos(s), a = Math.sin(r), n = Math.sin((1 - i) * r) / a, Math.sin(i * r) / a) : (n = 1 - i, i);
                    return h[0] = n * l + o * c, h[1] = n * p + o * d, h[2] = n * m + o * u, h[3] = n * f + o * y, h;
                  }(G, z, (t - T) / (C - T)), b = v[0], E = v[1], x = v[2], P = v[3], S = Math.atan2(2 * E * P - 2 * b * x, 1 - 2 * E * E - 2 * x * x), _ = Math.asin(2 * b * E + 2 * x * P), A = Math.atan2(2 * b * P - 2 * E * x, 1 - 2 * b * b - 2 * x * x), g[0] = S / degToRads, g[1] = _ / degToRads, g[2] = A / degToRads;
                }
              } else for (c = 0; c < d; c += 1) {
                1 !== s.h && (h = C <= t ? 1 : t < T ? 0 : (s.o.x.constructor === Array ? (s.__fnct || (s.__fnct = []), s.__fnct[c] ? m = s.__fnct[c] : (I = void 0 === s.o.x[c] ? s.o.x[0] : s.o.x[c], V = void 0 === s.o.y[c] ? s.o.y[0] : s.o.y[c], B = void 0 === s.i.x[c] ? s.i.x[0] : s.i.x[c], R = void 0 === s.i.y[c] ? s.i.y[0] : s.i.y[c], m = BezierFactory.getBezierEasing(I, V, B, R).get, s.__fnct[c] = m)) : s.__fnct ? m = s.__fnct : (I = s.o.x, V = s.o.y, B = s.i.x, R = s.i.y, m = BezierFactory.getBezierEasing(I, V, B, R).get, s.__fnct = m), m((t - T) / (C - T)))), y = a.s || s.e, L = 1 === s.h ? s.s[c] : s.s[c] + (y[c] - s.s[c]) * h, "multidimensional" === this.propType ? i[c] = L : i = L;
              }
            }
            return e.lastIndex = f, i;
          }
          function N(t) {
            var e = t[0] * degToRads,
              i = t[1] * degToRads,
              r = t[2] * degToRads,
              s = Math.cos(e / 2),
              a = Math.cos(i / 2),
              n = Math.cos(r / 2),
              o = Math.sin(e / 2),
              h = Math.sin(i / 2),
              l = Math.sin(r / 2);
            return [o * h * n + s * a * l, o * a * n + s * h * l, s * h * n - o * a * l, s * a * n - o * h * l];
          }
          function c() {
            var t = this.comp.renderedFrame - this.offsetTime,
              e = this.keyframes[0].t - this.offsetTime,
              i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
            if (!(t === this._caching.lastFrame || this._caching.lastFrame !== m && (this._caching.lastFrame >= i && i <= t || this._caching.lastFrame < e && t < e))) {
              this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
              var r = this.interpolateValue(t, this._caching);
              this.pv = r;
            }
            return this._caching.lastFrame = t, this.pv;
          }
          function d(t) {
            var e;
            if ("unidimensional" === this.propType) e = t * this.mult, 1e-5 < s(this.v - e) && (this.v = e, this._mdf = !0);else for (var i = 0, r = this.v.length; i < r;) {
              e = t[i] * this.mult, 1e-5 < s(this.v[i] - e) && (this.v[i] = e, this._mdf = !0), i += 1;
            }
          }
          function u() {
            if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length) if (this.lock) this.setVValue(this.pv);else {
              this.lock = !0, this._mdf = this._isFirstFrame;
              var t,
                e = this.effectsSequence.length,
                i = this.kf ? this.pv : this.data.k;
              for (t = 0; t < e; t += 1) {
                i = this.effectsSequence[t](i);
              }
              this.setVValue(i), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId;
            }
          }
          function y(t) {
            this.effectsSequence.push(t), this.container.addDynamicProperty(this);
          }
          function n(t, e, i, r) {
            this.propType = "unidimensional", this.mult = i || 1, this.data = e, this.v = i ? e.k * i : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = r, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = u, this.setVValue = d, this.addEffect = y;
          }
          function o(t, e, i, r) {
            this.propType = "multidimensional", this.mult = i || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = r, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
            var s,
              a = e.k.length;
            this.v = createTypedArray("float32", a), this.pv = createTypedArray("float32", a);
            createTypedArray("float32", a);
            for (this.vel = createTypedArray("float32", a), s = 0; s < a; s += 1) {
              this.v[s] = e.k[s] * this.mult, this.pv[s] = e.k[s];
            }
            this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = u, this.setVValue = d, this.addEffect = y;
          }
          function h(t, e, i, r) {
            this.propType = "unidimensional", this.keyframes = e.k, this.offsetTime = t.data.st, this.frameId = -1, this._caching = {
              lastFrame: m,
              lastIndex: 0,
              value: 0,
              _lastKeyframeIndex: -1
            }, this.k = !0, this.kf = !0, this.data = e, this.mult = i || 1, this.elem = t, this.container = r, this.comp = t.comp, this.v = m, this.pv = m, this._isFirstFrame = !0, this.getValue = u, this.setVValue = d, this.interpolateValue = f, this.effectsSequence = [c.bind(this)], this.addEffect = y;
          }
          function l(t, e, i, r) {
            this.propType = "multidimensional";
            var s,
              a,
              n,
              o,
              h,
              l = e.k.length;
            for (s = 0; s < l - 1; s += 1) {
              e.k[s].to && e.k[s].s && e.k[s + 1] && e.k[s + 1].s && (a = e.k[s].s, n = e.k[s + 1].s, o = e.k[s].to, h = e.k[s].ti, (2 === a.length && (a[0] !== n[0] || a[1] !== n[1]) && bez.pointOnLine2D(a[0], a[1], n[0], n[1], a[0] + o[0], a[1] + o[1]) && bez.pointOnLine2D(a[0], a[1], n[0], n[1], n[0] + h[0], n[1] + h[1]) || 3 === a.length && (a[0] !== n[0] || a[1] !== n[1] || a[2] !== n[2]) && bez.pointOnLine3D(a[0], a[1], a[2], n[0], n[1], n[2], a[0] + o[0], a[1] + o[1], a[2] + o[2]) && bez.pointOnLine3D(a[0], a[1], a[2], n[0], n[1], n[2], n[0] + h[0], n[1] + h[1], n[2] + h[2])) && (e.k[s].to = null, e.k[s].ti = null), a[0] === n[0] && a[1] === n[1] && 0 === o[0] && 0 === o[1] && 0 === h[0] && 0 === h[1] && (2 === a.length || a[2] === n[2] && 0 === o[2] && 0 === h[2]) && (e.k[s].to = null, e.k[s].ti = null));
            }
            this.effectsSequence = [c.bind(this)], this.data = e, this.keyframes = e.k, this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = i || 1, this.elem = t, this.container = r, this.comp = t.comp, this.getValue = u, this.setVValue = d, this.interpolateValue = f, this.frameId = -1;
            var p = e.k[0].s.length;
            for (this.v = createTypedArray("float32", p), this.pv = createTypedArray("float32", p), s = 0; s < p; s += 1) {
              this.v[s] = m, this.pv[s] = m;
            }
            this._caching = {
              lastFrame: m,
              lastIndex: 0,
              value: createTypedArray("float32", p)
            }, this.addEffect = y;
          }
          return {
            getProp: function getProp(t, e, i, r, s) {
              var a;
              if (e.k.length) {
                if ("number" == typeof e.k[0]) a = new o(t, e, r, s);else switch (i) {
                  case 0:
                    a = new h(t, e, r, s);
                    break;
                  case 1:
                    a = new l(t, e, r, s);
                }
              } else a = new n(t, e, r, s);
              return a.effectsSequence.length && s.addDynamicProperty(a), a;
            }
          };
        }(),
        TransformPropertyFactory = function () {
          var n = [0, 0];
          function r(t, e, i) {
            if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new Matrix(), this.pre = new Matrix(), this.appliedTransformations = 0, this.initDynamicPropertyContainer(i || t), e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || {
              k: [0, 0, 0]
            }, 1, 0, this), e.rx) {
              if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this), e.or.k[0].ti) {
                var r,
                  s = e.or.k.length;
                for (r = 0; r < s; r += 1) {
                  e.or.k[r].to = e.or.k[r].ti = null;
                }
              }
              this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this), this.or.sh = !0;
            } else this.r = PropertyFactory.getProp(t, e.r || {
              k: 0
            }, 0, degToRads, this);
            e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(t, e.a || {
              k: [0, 0, 0]
            }, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s || {
              k: [100, 100, 100]
            }, 1, .01, this), e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, .01, t) : this.o = {
              _mdf: !1,
              v: 1
            }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0);
          }
          return r.prototype = {
            applyToMatrix: function applyToMatrix(t) {
              var e = this._mdf;
              this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
            },
            getValue: function getValue(t) {
              if (this.elem.globalData.frameId !== this.frameId) {
                if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || t) {
                  if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                    var e,
                      i,
                      r = this.elem.globalData.frameRate;
                    if (this.p && this.p.keyframes && this.p.getValueAtTime) i = this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (e = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / r, 0), this.p.getValueAtTime(this.p.keyframes[0].t / r, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (e = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / r, 0), this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / r, 0)) : (e = this.p.pv, this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / r, this.p.offsetTime));else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                      e = [], i = [];
                      var s = this.px,
                        a = this.py;
                      s._caching.lastFrame + s.offsetTime <= s.keyframes[0].t ? (e[0] = s.getValueAtTime((s.keyframes[0].t + .01) / r, 0), e[1] = a.getValueAtTime((a.keyframes[0].t + .01) / r, 0), i[0] = s.getValueAtTime(s.keyframes[0].t / r, 0), i[1] = a.getValueAtTime(a.keyframes[0].t / r, 0)) : s._caching.lastFrame + s.offsetTime >= s.keyframes[s.keyframes.length - 1].t ? (e[0] = s.getValueAtTime(s.keyframes[s.keyframes.length - 1].t / r, 0), e[1] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / r, 0), i[0] = s.getValueAtTime((s.keyframes[s.keyframes.length - 1].t - .01) / r, 0), i[1] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / r, 0)) : (e = [s.pv, a.pv], i[0] = s.getValueAtTime((s._caching.lastFrame + s.offsetTime - .01) / r, s.offsetTime), i[1] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / r, a.offsetTime));
                    } else e = i = n;
                    this.v.rotate(-Math.atan2(e[1] - i[1], e[0] - i[0]));
                  }
                  this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
                }
                this.frameId = this.elem.globalData.frameId;
              }
            },
            precalculateMatrix: function precalculateMatrix() {
              if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                  if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                  this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3;
                }
                if (this.r) {
                  if (this.r.effectsSequence.length) return;
                  this.pre.rotate(-this.r.v), this.appliedTransformations = 4;
                } else this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4);
              }
            },
            autoOrient: function autoOrient() {}
          }, extendPrototype([DynamicPropertyContainer], r), r.prototype.addDynamicProperty = function (t) {
            this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0;
          }, r.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
            getTransformProperty: function getTransformProperty(t, e, i) {
              return new r(t, e, i);
            }
          };
        }();
      function ShapePath() {
        this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength);
      }
      ShapePath.prototype.setPathData = function (t, e) {
        this.c = t, this.setLength(e);
        for (var i = 0; i < e;) {
          this.v[i] = point_pool.newElement(), this.o[i] = point_pool.newElement(), this.i[i] = point_pool.newElement(), i += 1;
        }
      }, ShapePath.prototype.setLength = function (t) {
        for (; this._maxLength < t;) {
          this.doubleArrayLength();
        }
        this._length = t;
      }, ShapePath.prototype.doubleArrayLength = function () {
        this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2;
      }, ShapePath.prototype.setXYAt = function (t, e, i, r, s) {
        var a;
        switch (this._length = Math.max(this._length, r + 1), this._length >= this._maxLength && this.doubleArrayLength(), i) {
          case "v":
            a = this.v;
            break;
          case "i":
            a = this.i;
            break;
          case "o":
            a = this.o;
        }
        (!a[r] || a[r] && !s) && (a[r] = point_pool.newElement()), a[r][0] = t, a[r][1] = e;
      }, ShapePath.prototype.setTripleAt = function (t, e, i, r, s, a, n, o) {
        this.setXYAt(t, e, "v", n, o), this.setXYAt(i, r, "o", n, o), this.setXYAt(s, a, "i", n, o);
      }, ShapePath.prototype.reverse = function () {
        var t = new ShapePath();
        t.setPathData(this.c, this._length);
        var e = this.v,
          i = this.o,
          r = this.i,
          s = 0;
        this.c && (t.setTripleAt(e[0][0], e[0][1], r[0][0], r[0][1], i[0][0], i[0][1], 0, !1), s = 1);
        var a,
          n = this._length - 1,
          o = this._length;
        for (a = s; a < o; a += 1) {
          t.setTripleAt(e[n][0], e[n][1], r[n][0], r[n][1], i[n][0], i[n][1], a, !1), n -= 1;
        }
        return t;
      };
      var ShapePropertyFactory = function () {
          var s = -999999;
          function t(t, e, i) {
            var r,
              s,
              a,
              n,
              o,
              h,
              l,
              p,
              m,
              f = i.lastIndex,
              c = this.keyframes;
            if (t < c[0].t - this.offsetTime) r = c[0].s[0], a = !0, f = 0;else if (t >= c[c.length - 1].t - this.offsetTime) r = c[c.length - 1].s ? c[c.length - 1].s[0] : c[c.length - 2].e[0], a = !0;else {
              for (var d, u, y = f, g = c.length - 1, v = !0; v && (d = c[y], !((u = c[y + 1]).t - this.offsetTime > t));) {
                y < g - 1 ? y += 1 : v = !1;
              }
              if (f = y, !(a = 1 === d.h)) {
                if (t >= u.t - this.offsetTime) p = 1;else if (t < d.t - this.offsetTime) p = 0;else {
                  var b;
                  d.__fnct ? b = d.__fnct : (b = BezierFactory.getBezierEasing(d.o.x, d.o.y, d.i.x, d.i.y).get, d.__fnct = b), p = b((t - (d.t - this.offsetTime)) / (u.t - this.offsetTime - (d.t - this.offsetTime)));
                }
                s = u.s ? u.s[0] : d.e[0];
              }
              r = d.s[0];
            }
            for (h = e._length, l = r.i[0].length, i.lastIndex = f, n = 0; n < h; n += 1) {
              for (o = 0; o < l; o += 1) {
                m = a ? r.i[n][o] : r.i[n][o] + (s.i[n][o] - r.i[n][o]) * p, e.i[n][o] = m, m = a ? r.o[n][o] : r.o[n][o] + (s.o[n][o] - r.o[n][o]) * p, e.o[n][o] = m, m = a ? r.v[n][o] : r.v[n][o] + (s.v[n][o] - r.v[n][o]) * p, e.v[n][o] = m;
              }
            }
          }
          function a() {
            this.paths = this.localShapeCollection;
          }
          function e(t) {
            (function (t, e) {
              if (t._length !== e._length || t.c !== e.c) return !1;
              var i,
                r = t._length;
              for (i = 0; i < r; i += 1) {
                if (t.v[i][0] !== e.v[i][0] || t.v[i][1] !== e.v[i][1] || t.o[i][0] !== e.o[i][0] || t.o[i][1] !== e.o[i][1] || t.i[i][0] !== e.i[i][0] || t.i[i][1] !== e.i[i][1]) return !1;
              }
              return !0;
            })(this.v, t) || (this.v = shape_pool.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection);
          }
          function i() {
            if (this.elem.globalData.frameId !== this.frameId) if (this.effectsSequence.length) {
              if (this.lock) this.setVValue(this.pv);else {
                this.lock = !0, this._mdf = !1;
                var t,
                  e = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k,
                  i = this.effectsSequence.length;
                for (t = 0; t < i; t += 1) {
                  e = this.effectsSequence[t](e);
                }
                this.setVValue(e), this.lock = !1, this.frameId = this.elem.globalData.frameId;
              }
            } else this._mdf = !1;
          }
          function n(t, e, i) {
            this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1;
            var r = 3 === i ? e.pt.k : e.ks.k;
            this.v = shape_pool.clone(r), this.pv = shape_pool.clone(this.v), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = a, this.effectsSequence = [];
          }
          function r(t) {
            this.effectsSequence.push(t), this.container.addDynamicProperty(this);
          }
          function o(t, e, i) {
            this.propType = "shape", this.comp = t.comp, this.elem = t, this.container = t, this.offsetTime = t.data.st, this.keyframes = 3 === i ? e.pt.k : e.ks.k, this.k = !0, this.kf = !0;
            var r = this.keyframes[0].s[0].i.length;
            this.keyframes[0].s[0].i[0].length;
            this.v = shape_pool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, r), this.pv = shape_pool.clone(this.v), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = s, this.reset = a, this._caching = {
              lastFrame: s,
              lastIndex: 0
            }, this.effectsSequence = [function () {
              var t = this.comp.renderedFrame - this.offsetTime,
                e = this.keyframes[0].t - this.offsetTime,
                i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                r = this._caching.lastFrame;
              return r !== s && (r < e && t < e || i < r && i < t) || (this._caching.lastIndex = r < t ? this._caching.lastIndex : 0, this.interpolateShape(t, this.pv, this._caching)), this._caching.lastFrame = t, this.pv;
            }.bind(this)];
          }
          n.prototype.interpolateShape = t, n.prototype.getValue = i, n.prototype.setVValue = e, n.prototype.addEffect = r, o.prototype.getValue = i, o.prototype.interpolateShape = t, o.prototype.setVValue = e, o.prototype.addEffect = r;
          var h = function () {
              var n = roundCorner;
              function t(t, e) {
                this.v = shape_pool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath());
              }
              return t.prototype = {
                reset: a,
                getValue: function getValue() {
                  this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());
                },
                convertEllToPath: function convertEllToPath() {
                  var t = this.p.v[0],
                    e = this.p.v[1],
                    i = this.s.v[0] / 2,
                    r = this.s.v[1] / 2,
                    s = 3 !== this.d,
                    a = this.v;
                  a.v[0][0] = t, a.v[0][1] = e - r, a.v[1][0] = s ? t + i : t - i, a.v[1][1] = e, a.v[2][0] = t, a.v[2][1] = e + r, a.v[3][0] = s ? t - i : t + i, a.v[3][1] = e, a.i[0][0] = s ? t - i * n : t + i * n, a.i[0][1] = e - r, a.i[1][0] = s ? t + i : t - i, a.i[1][1] = e - r * n, a.i[2][0] = s ? t + i * n : t - i * n, a.i[2][1] = e + r, a.i[3][0] = s ? t - i : t + i, a.i[3][1] = e + r * n, a.o[0][0] = s ? t + i * n : t - i * n, a.o[0][1] = e - r, a.o[1][0] = s ? t + i : t - i, a.o[1][1] = e + r * n, a.o[2][0] = s ? t - i * n : t + i * n, a.o[2][1] = e + r, a.o[3][0] = s ? t - i : t + i, a.o[3][1] = e - r * n;
                }
              }, extendPrototype([DynamicPropertyContainer], t), t;
            }(),
            l = function () {
              function t(t, e) {
                this.v = shape_pool.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this), this.is = PropertyFactory.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t, e.or, 0, 0, this), this.os = PropertyFactory.getProp(t, e.os, 0, .01, this), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath());
              }
              return t.prototype = {
                reset: a,
                getValue: function getValue() {
                  this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath());
                },
                convertStarToPath: function convertStarToPath() {
                  var t,
                    e,
                    i,
                    r,
                    s = 2 * Math.floor(this.pt.v),
                    a = 2 * Math.PI / s,
                    n = !0,
                    o = this.or.v,
                    h = this.ir.v,
                    l = this.os.v,
                    p = this.is.v,
                    m = 2 * Math.PI * o / (2 * s),
                    f = 2 * Math.PI * h / (2 * s),
                    c = -Math.PI / 2;
                  c += this.r.v;
                  var d = 3 === this.data.d ? -1 : 1;
                  for (t = this.v._length = 0; t < s; t += 1) {
                    i = n ? l : p, r = n ? m : f;
                    var u = (e = n ? o : h) * Math.cos(c),
                      y = e * Math.sin(c),
                      g = 0 === u && 0 === y ? 0 : y / Math.sqrt(u * u + y * y),
                      v = 0 === u && 0 === y ? 0 : -u / Math.sqrt(u * u + y * y);
                    u += +this.p.v[0], y += +this.p.v[1], this.v.setTripleAt(u, y, u - g * r * i * d, y - v * r * i * d, u + g * r * i * d, y + v * r * i * d, t, !0), n = !n, c += a * d;
                  }
                },
                convertPolygonToPath: function convertPolygonToPath() {
                  var t,
                    e = Math.floor(this.pt.v),
                    i = 2 * Math.PI / e,
                    r = this.or.v,
                    s = this.os.v,
                    a = 2 * Math.PI * r / (4 * e),
                    n = -Math.PI / 2,
                    o = 3 === this.data.d ? -1 : 1;
                  for (n += this.r.v, t = this.v._length = 0; t < e; t += 1) {
                    var h = r * Math.cos(n),
                      l = r * Math.sin(n),
                      p = 0 === h && 0 === l ? 0 : l / Math.sqrt(h * h + l * l),
                      m = 0 === h && 0 === l ? 0 : -h / Math.sqrt(h * h + l * l);
                    h += +this.p.v[0], l += +this.p.v[1], this.v.setTripleAt(h, l, h - p * a * s * o, l - m * a * s * o, h + p * a * s * o, l + m * a * s * o, t, !0), n += i * o;
                  }
                  this.paths.length = 0, this.paths[0] = this.v;
                }
              }, extendPrototype([DynamicPropertyContainer], t), t;
            }(),
            p = function () {
              function t(t, e) {
                this.v = shape_pool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath());
              }
              return t.prototype = {
                convertRectToPath: function convertRectToPath() {
                  var t = this.p.v[0],
                    e = this.p.v[1],
                    i = this.s.v[0] / 2,
                    r = this.s.v[1] / 2,
                    s = bm_min(i, r, this.r.v),
                    a = s * (1 - roundCorner);
                  this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + i, e - r + s, t + i, e - r + s, t + i, e - r + a, 0, !0), this.v.setTripleAt(t + i, e + r - s, t + i, e + r - a, t + i, e + r - s, 1, !0), 0 !== s ? (this.v.setTripleAt(t + i - s, e + r, t + i - s, e + r, t + i - a, e + r, 2, !0), this.v.setTripleAt(t - i + s, e + r, t - i + a, e + r, t - i + s, e + r, 3, !0), this.v.setTripleAt(t - i, e + r - s, t - i, e + r - s, t - i, e + r - a, 4, !0), this.v.setTripleAt(t - i, e - r + s, t - i, e - r + a, t - i, e - r + s, 5, !0), this.v.setTripleAt(t - i + s, e - r, t - i + s, e - r, t - i + a, e - r, 6, !0), this.v.setTripleAt(t + i - s, e - r, t + i - a, e - r, t + i - s, e - r, 7, !0)) : (this.v.setTripleAt(t - i, e + r, t - i + a, e + r, t - i, e + r, 2), this.v.setTripleAt(t - i, e - r, t - i, e - r + a, t - i, e - r, 3))) : (this.v.setTripleAt(t + i, e - r + s, t + i, e - r + a, t + i, e - r + s, 0, !0), 0 !== s ? (this.v.setTripleAt(t + i - s, e - r, t + i - s, e - r, t + i - a, e - r, 1, !0), this.v.setTripleAt(t - i + s, e - r, t - i + a, e - r, t - i + s, e - r, 2, !0), this.v.setTripleAt(t - i, e - r + s, t - i, e - r + s, t - i, e - r + a, 3, !0), this.v.setTripleAt(t - i, e + r - s, t - i, e + r - a, t - i, e + r - s, 4, !0), this.v.setTripleAt(t - i + s, e + r, t - i + s, e + r, t - i + a, e + r, 5, !0), this.v.setTripleAt(t + i - s, e + r, t + i - a, e + r, t + i - s, e + r, 6, !0), this.v.setTripleAt(t + i, e + r - s, t + i, e + r - s, t + i, e + r - a, 7, !0)) : (this.v.setTripleAt(t - i, e - r, t - i + a, e - r, t - i, e - r, 1, !0), this.v.setTripleAt(t - i, e + r, t - i, e + r - a, t - i, e + r, 2, !0), this.v.setTripleAt(t + i, e + r, t + i - a, e + r, t + i, e + r, 3, !0)));
                },
                getValue: function getValue(t) {
                  this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());
                },
                reset: a
              }, extendPrototype([DynamicPropertyContainer], t), t;
            }();
          var m = {
            getShapeProp: function getShapeProp(t, e, i) {
              var r;
              return 3 === i || 4 === i ? r = (3 === i ? e.pt : e.ks).k.length ? new o(t, e, i) : new n(t, e, i) : 5 === i ? r = new p(t, e) : 6 === i ? r = new h(t, e) : 7 === i && (r = new l(t, e)), r.k && t.addDynamicProperty(r), r;
            },
            getConstructorFunction: function getConstructorFunction() {
              return n;
            },
            getKeyframedConstructorFunction: function getKeyframedConstructorFunction() {
              return o;
            }
          };
          return m;
        }(),
        ShapeModifiers = (fs = {}, gs = {}, fs.registerModifier = function (t, e) {
          gs[t] || (gs[t] = e);
        }, fs.getModifier = function (t, e, i) {
          return new gs[t](e, i);
        }, fs),
        fs,
        gs;
      function ShapeModifier() {}
      function TrimModifier() {}
      function RoundCornersModifier() {}
      function PuckerAndBloatModifier() {}
      function RepeaterModifier() {}
      function ShapeCollection() {
        this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength);
      }
      function DashProperty(t, e, i, r) {
        this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = i, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(r);
        var s,
          a,
          n = e.length || 0;
        for (s = 0; s < n; s += 1) {
          a = PropertyFactory.getProp(t, e[s].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[s] = {
            n: e[s].n,
            p: a
          };
        }
        this.k || this.getValue(!0), this._isAnimated = this.k;
      }
      function GradientProperty(t, e, i) {
        this.data = e, this.c = createTypedArray("uint8c", 4 * e.p);
        var r = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
        this.o = createTypedArray("float32", r), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = r, this.initDynamicPropertyContainer(i), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0);
      }
      ShapeModifier.prototype.initModifierProperties = function () {}, ShapeModifier.prototype.addShapeToModifier = function () {}, ShapeModifier.prototype.addShape = function (t) {
        if (!this.closed) {
          t.sh.container.addDynamicProperty(t.sh);
          var e = {
            shape: t.sh,
            data: t,
            localShapeCollection: shapeCollection_pool.newShapeCollection()
          };
          this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated();
        }
      }, ShapeModifier.prototype.init = function (t, e) {
        this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
      }, ShapeModifier.prototype.processKeys = function () {
        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties());
      }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function (t, e) {
        this.s = PropertyFactory.getProp(t, e.s, 0, .01, this), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
      }, TrimModifier.prototype.addShapeToModifier = function (t) {
        t.pathsData = [];
      }, TrimModifier.prototype.calculateShapeEdges = function (t, e, i, r, s) {
        var a = [];
        e <= 1 ? a.push({
          s: t,
          e: e
        }) : 1 <= t ? a.push({
          s: t - 1,
          e: e - 1
        }) : (a.push({
          s: t,
          e: 1
        }), a.push({
          s: 0,
          e: e - 1
        }));
        var n,
          o,
          h = [],
          l = a.length;
        for (n = 0; n < l; n += 1) {
          var p, m;
          if ((o = a[n]).e * s < r || o.s * s > r + i) ;else p = o.s * s <= r ? 0 : (o.s * s - r) / i, m = o.e * s >= r + i ? 1 : (o.e * s - r) / i, h.push([p, m]);
        }
        return h.length || h.push([0, 0]), h;
      }, TrimModifier.prototype.releasePathsData = function (t) {
        var e,
          i = t.length;
        for (e = 0; e < i; e += 1) {
          segments_length_pool.release(t[e]);
        }
        return t.length = 0, t;
      }, TrimModifier.prototype.processShapes = function (t) {
        var e, i, r;
        if (this._mdf || t) {
          var s = this.o.v % 360 / 360;
          if (s < 0 && (s += 1), e = (1 < this.s.v ? 1 : this.s.v < 0 ? 0 : this.s.v) + s, (i = (1 < this.e.v ? 1 : this.e.v < 0 ? 0 : this.e.v) + s) < e) {
            var a = e;
            e = i, i = a;
          }
          e = 1e-4 * Math.round(1e4 * e), i = 1e-4 * Math.round(1e4 * i), this.sValue = e, this.eValue = i;
        } else e = this.sValue, i = this.eValue;
        var n,
          o,
          h,
          l,
          p,
          m,
          f = this.shapes.length,
          c = 0;
        if (i === e) for (n = 0; n < f; n += 1) {
          this.shapes[n].localShapeCollection.releaseShapes(), this.shapes[n].shape._mdf = !0, this.shapes[n].shape.paths = this.shapes[n].localShapeCollection, this._mdf && (this.shapes[n].pathsData.length = 0);
        } else if (1 === i && 0 === e || 0 === i && 1 === e) {
          if (this._mdf) for (n = 0; n < f; n += 1) {
            this.shapes[n].pathsData.length = 0, this.shapes[n].shape._mdf = !0;
          }
        } else {
          var d,
            u,
            y = [];
          for (n = 0; n < f; n += 1) {
            if ((d = this.shapes[n]).shape._mdf || this._mdf || t || 2 === this.m) {
              if (h = (r = d.shape.paths)._length, m = 0, !d.shape._mdf && d.pathsData.length) m = d.totalShapeLength;else {
                for (l = this.releasePathsData(d.pathsData), o = 0; o < h; o += 1) {
                  p = bez.getSegmentsLength(r.shapes[o]), l.push(p), m += p.totalLength;
                }
                d.totalShapeLength = m, d.pathsData = l;
              }
              c += m, d.shape._mdf = !0;
            } else d.shape.paths = d.localShapeCollection;
          }
          var g,
            v = e,
            b = i,
            E = 0;
          for (n = f - 1; 0 <= n; n -= 1) {
            if ((d = this.shapes[n]).shape._mdf) {
              for ((u = d.localShapeCollection).releaseShapes(), 2 === this.m && 1 < f ? (g = this.calculateShapeEdges(e, i, d.totalShapeLength, E, c), E += d.totalShapeLength) : g = [[v, b]], h = g.length, o = 0; o < h; o += 1) {
                v = g[o][0], b = g[o][1], y.length = 0, b <= 1 ? y.push({
                  s: d.totalShapeLength * v,
                  e: d.totalShapeLength * b
                }) : 1 <= v ? y.push({
                  s: d.totalShapeLength * (v - 1),
                  e: d.totalShapeLength * (b - 1)
                }) : (y.push({
                  s: d.totalShapeLength * v,
                  e: d.totalShapeLength
                }), y.push({
                  s: 0,
                  e: d.totalShapeLength * (b - 1)
                }));
                var x = this.addShapes(d, y[0]);
                if (y[0].s !== y[0].e) {
                  if (1 < y.length) if (d.shape.paths.shapes[d.shape.paths._length - 1].c) {
                    var P = x.pop();
                    this.addPaths(x, u), x = this.addShapes(d, y[1], P);
                  } else this.addPaths(x, u), x = this.addShapes(d, y[1]);
                  this.addPaths(x, u);
                }
              }
              d.shape.paths = u;
            }
          }
        }
      }, TrimModifier.prototype.addPaths = function (t, e) {
        var i,
          r = t.length;
        for (i = 0; i < r; i += 1) {
          e.addShape(t[i]);
        }
      }, TrimModifier.prototype.addSegment = function (t, e, i, r, s, a, n) {
        s.setXYAt(e[0], e[1], "o", a), s.setXYAt(i[0], i[1], "i", a + 1), n && s.setXYAt(t[0], t[1], "v", a), s.setXYAt(r[0], r[1], "v", a + 1);
      }, TrimModifier.prototype.addSegmentFromArray = function (t, e, i, r) {
        e.setXYAt(t[1], t[5], "o", i), e.setXYAt(t[2], t[6], "i", i + 1), r && e.setXYAt(t[0], t[4], "v", i), e.setXYAt(t[3], t[7], "v", i + 1);
      }, TrimModifier.prototype.addShapes = function (t, e, i) {
        var r,
          s,
          a,
          n,
          o,
          h,
          l,
          p,
          m = t.pathsData,
          f = t.shape.paths.shapes,
          c = t.shape.paths._length,
          d = 0,
          u = [],
          y = !0;
        for (p = i ? (o = i._length, i._length) : (i = shape_pool.newElement(), o = 0), u.push(i), r = 0; r < c; r += 1) {
          for (h = m[r].lengths, i.c = f[r].c, a = f[r].c ? h.length : h.length + 1, s = 1; s < a; s += 1) {
            if (d + (n = h[s - 1]).addedLength < e.s) d += n.addedLength, i.c = !1;else {
              if (d > e.e) {
                i.c = !1;
                break;
              }
              e.s <= d && e.e >= d + n.addedLength ? (this.addSegment(f[r].v[s - 1], f[r].o[s - 1], f[r].i[s], f[r].v[s], i, o, y), y = !1) : (l = bez.getNewSegment(f[r].v[s - 1], f[r].v[s], f[r].o[s - 1], f[r].i[s], (e.s - d) / n.addedLength, (e.e - d) / n.addedLength, h[s - 1]), this.addSegmentFromArray(l, i, o, y), y = !1, i.c = !1), d += n.addedLength, o += 1;
            }
          }
          if (f[r].c && h.length) {
            if (n = h[s - 1], d <= e.e) {
              var g = h[s - 1].addedLength;
              e.s <= d && e.e >= d + g ? (this.addSegment(f[r].v[s - 1], f[r].o[s - 1], f[r].i[0], f[r].v[0], i, o, y), y = !1) : (l = bez.getNewSegment(f[r].v[s - 1], f[r].v[0], f[r].o[s - 1], f[r].i[0], (e.s - d) / g, (e.e - d) / g, h[s - 1]), this.addSegmentFromArray(l, i, o, y), y = !1, i.c = !1);
            } else i.c = !1;
            d += n.addedLength, o += 1;
          }
          if (i._length && (i.setXYAt(i.v[p][0], i.v[p][1], "i", p), i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1)), d > e.e) break;
          r < c - 1 && (i = shape_pool.newElement(), y = !0, u.push(i), o = 0);
        }
        return u;
      }, ShapeModifiers.registerModifier("tm", TrimModifier), extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function (t, e) {
        this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length;
      }, RoundCornersModifier.prototype.processPath = function (t, e) {
        var i = shape_pool.newElement();
        i.c = t.c;
        var r,
          s,
          a,
          n,
          o,
          h,
          l,
          p,
          m,
          f,
          c,
          d,
          u,
          y = t._length,
          g = 0;
        for (r = 0; r < y; r += 1) {
          s = t.v[r], n = t.o[r], a = t.i[r], s[0] === n[0] && s[1] === n[1] && s[0] === a[0] && s[1] === a[1] ? 0 !== r && r !== y - 1 || t.c ? (o = 0 === r ? t.v[y - 1] : t.v[r - 1], l = (h = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = d = s[0] + (o[0] - s[0]) * l, m = u = s[1] - (s[1] - o[1]) * l, f = p - (p - s[0]) * roundCorner, c = m - (m - s[1]) * roundCorner, i.setTripleAt(p, m, f, c, d, u, g), g += 1, o = r === y - 1 ? t.v[0] : t.v[r + 1], l = (h = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = f = s[0] + (o[0] - s[0]) * l, m = c = s[1] + (o[1] - s[1]) * l, d = p - (p - s[0]) * roundCorner, u = m - (m - s[1]) * roundCorner, i.setTripleAt(p, m, f, c, d, u, g)) : i.setTripleAt(s[0], s[1], n[0], n[1], a[0], a[1], g) : i.setTripleAt(t.v[r][0], t.v[r][1], t.o[r][0], t.o[r][1], t.i[r][0], t.i[r][1], g), g += 1;
        }
        return i;
      }, RoundCornersModifier.prototype.processShapes = function (t) {
        var e,
          i,
          r,
          s,
          a,
          n,
          o = this.shapes.length,
          h = this.rd.v;
        if (0 !== h) for (i = 0; i < o; i += 1) {
          if ((a = this.shapes[i]).shape.paths, n = a.localShapeCollection, a.shape._mdf || this._mdf || t) for (n.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, s = a.shape.paths._length, r = 0; r < s; r += 1) {
            n.addShape(this.processPath(e[r], h));
          }
          a.shape.paths = a.localShapeCollection;
        }
        this.dynamicProperties.length || (this._mdf = !1);
      }, ShapeModifiers.registerModifier("rd", RoundCornersModifier), extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function (t, e) {
        this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length;
      }, PuckerAndBloatModifier.prototype.processPath = function (t, e) {
        var i = e / 100,
          r = [0, 0],
          s = t._length,
          a = 0;
        for (a = 0; a < s; a += 1) {
          r[0] += t.v[a][0], r[1] += t.v[a][1];
        }
        r[0] /= s, r[1] /= s;
        var n,
          o,
          h,
          l,
          p,
          m,
          f = shape_pool.newElement();
        for (f.c = t.c, a = 0; a < s; a += 1) {
          n = t.v[a][0] + (r[0] - t.v[a][0]) * i, o = t.v[a][1] + (r[1] - t.v[a][1]) * i, h = t.o[a][0] + (r[0] - t.o[a][0]) * -i, l = t.o[a][1] + (r[1] - t.o[a][1]) * -i, p = t.i[a][0] + (r[0] - t.i[a][0]) * -i, m = t.i[a][1] + (r[1] - t.i[a][1]) * -i, f.setTripleAt(n, o, h, l, p, m, a);
        }
        return f;
      }, PuckerAndBloatModifier.prototype.processShapes = function (t) {
        var e,
          i,
          r,
          s,
          a,
          n,
          o = this.shapes.length,
          h = this.amount.v;
        if (0 !== h) for (i = 0; i < o; i += 1) {
          if ((a = this.shapes[i]).shape.paths, n = a.localShapeCollection, a.shape._mdf || this._mdf || t) for (n.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, s = a.shape.paths._length, r = 0; r < s; r += 1) {
            n.addShape(this.processPath(e[r], h));
          }
          a.shape.paths = a.localShapeCollection;
        }
        this.dynamicProperties.length || (this._mdf = !1);
      }, ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function (t, e) {
        this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix(), this.rMatrix = new Matrix(), this.sMatrix = new Matrix(), this.tMatrix = new Matrix(), this.matrix = new Matrix();
      }, RepeaterModifier.prototype.applyTransforms = function (t, e, i, r, s, a) {
        var n = a ? -1 : 1,
          o = r.s.v[0] + (1 - r.s.v[0]) * (1 - s),
          h = r.s.v[1] + (1 - r.s.v[1]) * (1 - s);
        t.translate(r.p.v[0] * n * s, r.p.v[1] * n * s, r.p.v[2]), e.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), e.rotate(-r.r.v * n * s), e.translate(r.a.v[0], r.a.v[1], r.a.v[2]), i.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), i.scale(a ? 1 / o : o, a ? 1 / h : h), i.translate(r.a.v[0], r.a.v[1], r.a.v[2]);
      }, RepeaterModifier.prototype.init = function (t, e, i, r) {
        this.elem = t, this.arr = e, this.pos = i, this.elemsData = r, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[i]);
        for (; 0 < i;) {
          i -= 1, this._elements.unshift(e[i]), 1;
        }
        this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
      }, RepeaterModifier.prototype.resetElements = function (t) {
        var e,
          i = t.length;
        for (e = 0; e < i; e += 1) {
          t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it);
        }
      }, RepeaterModifier.prototype.cloneElements = function (t) {
        t.length;
        var e = JSON.parse(JSON.stringify(t));
        return this.resetElements(e), e;
      }, RepeaterModifier.prototype.changeGroupRender = function (t, e) {
        var i,
          r = t.length;
        for (i = 0; i < r; i += 1) {
          t[i]._render = e, "gr" === t[i].ty && this.changeGroupRender(t[i].it, e);
        }
      }, RepeaterModifier.prototype.processShapes = function (t) {
        var e, i, r, s, a;
        if (this._mdf || t) {
          var n,
            o = Math.ceil(this.c.v);
          if (this._groups.length < o) {
            for (; this._groups.length < o;) {
              var h = {
                it: this.cloneElements(this._elements),
                ty: "gr"
              };
              h.it.push({
                a: {
                  a: 0,
                  ix: 1,
                  k: [0, 0]
                },
                nm: "Transform",
                o: {
                  a: 0,
                  ix: 7,
                  k: 100
                },
                p: {
                  a: 0,
                  ix: 2,
                  k: [0, 0]
                },
                r: {
                  a: 1,
                  ix: 6,
                  k: [{
                    s: 0,
                    e: 0,
                    t: 0
                  }, {
                    s: 0,
                    e: 0,
                    t: 1
                  }]
                },
                s: {
                  a: 0,
                  ix: 3,
                  k: [100, 100]
                },
                sa: {
                  a: 0,
                  ix: 5,
                  k: 0
                },
                sk: {
                  a: 0,
                  ix: 4,
                  k: 0
                },
                ty: "tr"
              }), this.arr.splice(0, 0, h), this._groups.splice(0, 0, h), this._currentCopies += 1;
            }
            this.elem.reloadShapes();
          }
          for (r = a = 0; r <= this._groups.length - 1; r += 1) {
            n = a < o, this._groups[r]._render = n, this.changeGroupRender(this._groups[r].it, n), a += 1;
          }
          this._currentCopies = o;
          var l = this.o.v,
            p = l % 1,
            m = 0 < l ? Math.floor(l) : Math.ceil(l),
            f = (this.tr.v.props, this.pMatrix.props),
            c = this.rMatrix.props,
            d = this.sMatrix.props;
          this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
          var u,
            y,
            g = 0;
          if (0 < l) {
            for (; g < m;) {
              this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), g += 1;
            }
            p && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, p, !1), g += p);
          } else if (l < 0) {
            for (; m < g;) {
              this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), g -= 1;
            }
            p && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -p, !0), g -= p);
          }
          for (r = 1 === this.data.m ? 0 : this._currentCopies - 1, s = 1 === this.data.m ? 1 : -1, a = this._currentCopies; a;) {
            if (y = (i = (e = this.elemsData[r].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = this.so.v + (this.eo.v - this.so.v) * (r / (this._currentCopies - 1)), 0 !== g) {
              for ((0 !== r && 1 === s || r !== this._currentCopies - 1 && -1 === s) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], c[8], c[9], c[10], c[11], c[12], c[13], c[14], c[15]), this.matrix.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]), this.matrix.transform(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10], f[11], f[12], f[13], f[14], f[15]), u = 0; u < y; u += 1) {
                i[u] = this.matrix.props[u];
              }
              this.matrix.reset();
            } else for (this.matrix.reset(), u = 0; u < y; u += 1) {
              i[u] = this.matrix.props[u];
            }
            g += 1, a -= 1, r += s;
          }
        } else for (a = this._currentCopies, r = 0, s = 1; a;) {
          i = (e = this.elemsData[r].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, a -= 1, r += s;
        }
      }, RepeaterModifier.prototype.addShape = function () {}, ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeCollection.prototype.addShape = function (t) {
        this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1;
      }, ShapeCollection.prototype.releaseShapes = function () {
        var t;
        for (t = 0; t < this._length; t += 1) {
          shape_pool.release(this.shapes[t]);
        }
        this._length = 0;
      }, DashProperty.prototype.getValue = function (t) {
        if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
          var e = 0,
            i = this.dataProps.length;
          for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < i; e += 1) {
            "o" != this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v;
          }
        }
      }, extendPrototype([DynamicPropertyContainer], DashProperty), GradientProperty.prototype.comparePoints = function (t, e) {
        for (var i = 0, r = this.o.length / 2; i < r;) {
          if (.01 < Math.abs(t[4 * i] - t[4 * e + 2 * i])) return !1;
          i += 1;
        }
        return !0;
      }, GradientProperty.prototype.checkCollapsable = function () {
        if (this.o.length / 2 != this.c.length / 4) return !1;
        if (this.data.k.k[0].s) for (var t = 0, e = this.data.k.k.length; t < e;) {
          if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
          t += 1;
        } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
        return !0;
      }, GradientProperty.prototype.getValue = function (t) {
        if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
          var e,
            i,
            r,
            s = 4 * this.data.p;
          for (e = 0; e < s; e += 1) {
            i = e % 4 == 0 ? 100 : 255, r = Math.round(this.prop.v[e] * i), this.c[e] !== r && (this.c[e] = r, this._cmdf = !t);
          }
          if (this.o.length) for (s = this.prop.v.length, e = 4 * this.data.p; e < s; e += 1) {
            i = e % 2 == 0 ? 100 : 1, r = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== r && (this.o[e - 4 * this.data.p] = r, this._omdf = !t);
          }
          this._mdf = !t;
        }
      }, extendPrototype([DynamicPropertyContainer], GradientProperty);
      var buildShapeString = function buildShapeString(t, e, i, r) {
          if (0 === e) return "";
          var s,
            a = t.o,
            n = t.i,
            o = t.v,
            h = " M" + r.applyToPointStringified(o[0][0], o[0][1]);
          for (s = 1; s < e; s += 1) {
            h += " C" + r.applyToPointStringified(a[s - 1][0], a[s - 1][1]) + " " + r.applyToPointStringified(n[s][0], n[s][1]) + " " + r.applyToPointStringified(o[s][0], o[s][1]);
          }
          return i && e && (h += " C" + r.applyToPointStringified(a[s - 1][0], a[s - 1][1]) + " " + r.applyToPointStringified(n[0][0], n[0][1]) + " " + r.applyToPointStringified(o[0][0], o[0][1]), h += "z"), h;
        },
        audioControllerFactory = function () {
          function t(t) {
            this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1;
          }
          return t.prototype = {
            addAudio: function addAudio(t) {
              this.audios.push(t);
            },
            pause: function pause() {
              var t,
                e = this.audios.length;
              for (t = 0; t < e; t += 1) {
                this.audios[t].pause();
              }
            },
            resume: function resume() {
              var t,
                e = this.audios.length;
              for (t = 0; t < e; t += 1) {
                this.audios[t].resume();
              }
            },
            setRate: function setRate(t) {
              var e,
                i = this.audios.length;
              for (e = 0; e < i; e += 1) {
                this.audios[e].setRate(t);
              }
            },
            createAudio: function createAudio(t) {
              return this.audioFactory ? this.audioFactory(t) : Howl ? new Howl({
                src: [t]
              }) : {
                isPlaying: !1,
                play: function play() {
                  this.isPlaying = !0;
                },
                seek: function seek() {
                  this.isPlaying = !1;
                },
                playing: function playing() {},
                rate: function rate() {},
                setVolume: function setVolume() {}
              };
            },
            setAudioFactory: function setAudioFactory(t) {
              this.audioFactory = t;
            },
            setVolume: function setVolume(t) {
              this._volume = t, this._updateVolume();
            },
            mute: function mute() {
              this._isMuted = !0, this._updateVolume();
            },
            unmute: function unmute() {
              this._isMuted = !1, this._updateVolume();
            },
            getVolume: function getVolume(t) {
              return this._volume;
            },
            _updateVolume: function _updateVolume() {
              var t,
                e = this.audios.length;
              for (t = 0; t < e; t += 1) {
                this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1));
              }
            }
          }, function () {
            return new t();
          };
        }(),
        ImagePreloader = function () {
          var s = function () {
            var t = createTag("canvas");
            t.width = 1, t.height = 1;
            var e = t.getContext("2d");
            return e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t;
          }();
          function e() {
            this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.imagesLoadedCb && this.imagesLoadedCb(null);
          }
          function a(t, e, i) {
            var r = "";
            if (t.e) r = t.p;else if (e) {
              var s = t.p;
              -1 !== s.indexOf("images/") && (s = s.split("/")[1]), r = e + s;
            } else r = i, r += t.u ? t.u : "", r += t.p;
            return r;
          }
          function t(t) {
            this._imageLoaded = e.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.loadedAssets = 0, this.imagesLoadedCb = null, this.images = [];
          }
          return t.prototype = {
            loadAssets: function loadAssets(t, e) {
              this.imagesLoadedCb = e;
              var i,
                r = t.length;
              for (i = 0; i < r; i += 1) {
                t[i].layers || (this.totalImages += 1, this.images.push(this._createImageData(t[i])));
              }
            },
            setAssetsPath: function setAssetsPath(t) {
              this.assetsPath = t || "";
            },
            setPath: function setPath(t) {
              this.path = t || "";
            },
            loaded: function loaded() {
              return this.totalImages === this.loadedAssets;
            },
            destroy: function destroy() {
              this.imagesLoadedCb = null, this.images.length = 0;
            },
            getImage: function getImage(t) {
              for (var e = 0, i = this.images.length; e < i;) {
                if (this.images[e].assetData === t) return this.images[e].img;
                e += 1;
              }
            },
            createImgData: function createImgData(t) {
              var e = a(t, this.assetsPath, this.path),
                i = createTag("img");
              i.crossOrigin = "anonymous", i.addEventListener("load", this._imageLoaded, !1), i.addEventListener("error", function () {
                r.img = s, this._imageLoaded();
              }.bind(this), !1), i.src = e;
              var r = {
                img: i,
                assetData: t
              };
              return r;
            },
            createImageData: function createImageData(t) {
              var e = a(t, this.assetsPath, this.path),
                i = createNS("image");
              i.addEventListener("load", this._imageLoaded, !1), i.addEventListener("error", function () {
                r.img = s, this._imageLoaded();
              }.bind(this), !1), i.setAttributeNS("http://www.w3.org/1999/xlink", "href", e);
              var r = {
                img: i,
                assetData: t
              };
              return r;
            },
            imageLoaded: e,
            setCacheType: function setCacheType(t) {
              this._createImageData = "svg" === t ? this.createImageData.bind(this) : this.createImgData.bind(this);
            }
          }, t;
        }(),
        featureSupport = (ux = {
          maskType: !0
        }, (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (ux.maskType = !1), ux),
        ux,
        filtersFactory = (vx = {}, vx.createFilter = function (t) {
          var e = createNS("filter");
          return e.setAttribute("id", t), e.setAttribute("filterUnits", "objectBoundingBox"), e.setAttribute("x", "0%"), e.setAttribute("y", "0%"), e.setAttribute("width", "100%"), e.setAttribute("height", "100%"), e;
        }, vx.createAlphaToLuminanceFilter = function () {
          var t = createNS("feColorMatrix");
          return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t;
        }, vx),
        vx,
        assetLoader = function () {
          function a(t) {
            return t.response && "object" == _typeof(t.response) ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : void 0;
          }
          return {
            load: function load(t, e, i) {
              var r,
                s = new XMLHttpRequest();
              s.open("GET", t, !0);
              try {
                s.responseType = "json";
              } catch (t) {}
              s.send(), s.onreadystatechange = function () {
                if (4 == s.readyState) if (200 == s.status) r = a(s), e(r);else try {
                  r = a(s), e(r);
                } catch (t) {
                  i && i(t);
                }
              };
            }
          };
        }();
      function TextAnimatorProperty(t, e, i) {
        this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = i, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
          alignment: {}
        }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(i);
      }
      function TextAnimatorDataProperty(t, e, i) {
        var r = {
            propType: !1
          },
          s = PropertyFactory.getProp,
          a = e.a;
        this.a = {
          r: a.r ? s(t, a.r, 0, degToRads, i) : r,
          rx: a.rx ? s(t, a.rx, 0, degToRads, i) : r,
          ry: a.ry ? s(t, a.ry, 0, degToRads, i) : r,
          sk: a.sk ? s(t, a.sk, 0, degToRads, i) : r,
          sa: a.sa ? s(t, a.sa, 0, degToRads, i) : r,
          s: a.s ? s(t, a.s, 1, .01, i) : r,
          a: a.a ? s(t, a.a, 1, 0, i) : r,
          o: a.o ? s(t, a.o, 0, .01, i) : r,
          p: a.p ? s(t, a.p, 1, 0, i) : r,
          sw: a.sw ? s(t, a.sw, 0, 0, i) : r,
          sc: a.sc ? s(t, a.sc, 1, 0, i) : r,
          fc: a.fc ? s(t, a.fc, 1, 0, i) : r,
          fh: a.fh ? s(t, a.fh, 0, 0, i) : r,
          fs: a.fs ? s(t, a.fs, 0, .01, i) : r,
          fb: a.fb ? s(t, a.fb, 0, .01, i) : r,
          t: a.t ? s(t, a.t, 0, 0, i) : r
        }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, i), this.s.t = e.s.t;
      }
      function LetterProps(t, e, i, r, s, a) {
        this.o = t, this.sw = e, this.sc = i, this.fc = r, this.m = s, this.p = a, this._mdf = {
          o: !0,
          sw: !!e,
          sc: !!i,
          fc: !!r,
          m: !0,
          p: !0
        };
      }
      function TextProperty(t, e) {
        this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
          ascent: 0,
          boxWidth: this.defaultBoxWidth,
          f: "",
          fStyle: "",
          fWeight: "",
          fc: "",
          j: "",
          justifyOffset: "",
          l: [],
          lh: 0,
          lineWidths: [],
          ls: "",
          of: "",
          s: "",
          sc: "",
          sw: 0,
          t: 0,
          tr: 0,
          sz: 0,
          ps: null,
          fillColorAnim: !1,
          strokeColorAnim: !1,
          strokeWidthAnim: !1,
          yOffset: 0,
          finalSize: 0,
          finalText: [],
          finalLineHeight: 0,
          __complete: !1
        }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData);
      }
      TextAnimatorProperty.prototype.searchProperties = function () {
        var t,
          e,
          i = this._textData.a.length,
          r = PropertyFactory.getProp;
        for (t = 0; t < i; t += 1) {
          e = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this);
        }
        this._textData.p && "m" in this._textData.p ? (this._pathData = {
          f: r(this._elem, this._textData.p.f, 0, 0, this),
          l: r(this._elem, this._textData.p.l, 0, 0, this),
          r: this._textData.p.r,
          m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
        }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = r(this._elem, this._textData.m.a, 1, 0, this);
      }, TextAnimatorProperty.prototype.getMeasures = function (t, e) {
        if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
          this._isFirstFrame = !1;
          var i,
            r,
            s,
            a,
            n,
            o,
            h,
            l,
            p,
            m,
            f,
            c,
            d,
            u,
            y,
            g,
            v,
            b,
            E,
            x = this._moreOptions.alignment.v,
            P = this._animatorsData,
            S = this._textData,
            _ = this.mHelper,
            A = this._renderType,
            C = this.renderedLetters.length,
            T = (this.data, t.l);
          if (this._hasMaskedPath) {
            if (E = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
              var k,
                M = E.v;
              for (this._pathData.r && (M = M.reverse()), n = {
                tLength: 0,
                segments: []
              }, a = M._length - 1, s = g = 0; s < a; s += 1) {
                k = bez.buildBezierData(M.v[s], M.v[s + 1], [M.o[s][0] - M.v[s][0], M.o[s][1] - M.v[s][1]], [M.i[s + 1][0] - M.v[s + 1][0], M.i[s + 1][1] - M.v[s + 1][1]]), n.tLength += k.segmentLength, n.segments.push(k), g += k.segmentLength;
              }
              s = a, E.v.c && (k = bez.buildBezierData(M.v[s], M.v[0], [M.o[s][0] - M.v[s][0], M.o[s][1] - M.v[s][1]], [M.i[0][0] - M.v[0][0], M.i[0][1] - M.v[0][1]]), n.tLength += k.segmentLength, n.segments.push(k), g += k.segmentLength), this._pathData.pi = n;
            }
            if (n = this._pathData.pi, o = this._pathData.f.v, m = 1, p = !(l = f = 0), u = n.segments, o < 0 && E.v.c) for (n.tLength < Math.abs(o) && (o = -Math.abs(o) % n.tLength), m = (d = u[f = u.length - 1].points).length - 1; o < 0;) {
              o += d[m].partialLength, (m -= 1) < 0 && (m = (d = u[f -= 1].points).length - 1);
            }
            c = (d = u[f].points)[m - 1], y = (h = d[m]).partialLength;
          }
          a = T.length, r = i = 0;
          var D,
            F,
            w,
            I,
            V = 1.2 * t.finalSize * .714,
            B = !0;
          w = P.length;
          var R,
            L,
            G,
            z,
            N,
            O,
            H,
            j,
            q,
            W,
            Y,
            X,
            K,
            $ = -1,
            Z = o,
            J = f,
            U = m,
            Q = -1,
            tt = "",
            et = this.defaultPropsArray;
          if (2 === t.j || 1 === t.j) {
            var it = 0,
              rt = 0,
              st = 2 === t.j ? -.5 : -1,
              at = 0,
              nt = !0;
            for (s = 0; s < a; s += 1) {
              if (T[s].n) {
                for (it && (it += rt); at < s;) {
                  T[at].animatorJustifyOffset = it, at += 1;
                }
                nt = !(it = 0);
              } else {
                for (F = 0; F < w; F += 1) {
                  (D = P[F].a).t.propType && (nt && 2 === t.j && (rt += D.t.v * st), (R = P[F].s.getMult(T[s].anIndexes[F], S.a[F].s.totalChars)).length ? it += D.t.v * R[0] * st : it += D.t.v * R * st);
                }
                nt = !1;
              }
            }
            for (it && (it += rt); at < s;) {
              T[at].animatorJustifyOffset = it, at += 1;
            }
          }
          for (s = 0; s < a; s += 1) {
            if (_.reset(), N = 1, T[s].n) i = 0, r += t.yOffset, r += B ? 1 : 0, o = Z, B = !1, 0, this._hasMaskedPath && (m = U, c = (d = u[f = J].points)[m - 1], y = (h = d[m]).partialLength, l = 0), K = W = X = tt = "", et = this.defaultPropsArray;else {
              if (this._hasMaskedPath) {
                if (Q !== T[s].line) {
                  switch (t.j) {
                    case 1:
                      o += g - t.lineWidths[T[s].line];
                      break;
                    case 2:
                      o += (g - t.lineWidths[T[s].line]) / 2;
                  }
                  Q = T[s].line;
                }
                $ !== T[s].ind && (T[$] && (o += T[$].extra), o += T[s].an / 2, $ = T[s].ind), o += x[0] * T[s].an / 200;
                var ot = 0;
                for (F = 0; F < w; F += 1) {
                  (D = P[F].a).p.propType && ((R = P[F].s.getMult(T[s].anIndexes[F], S.a[F].s.totalChars)).length ? ot += D.p.v[0] * R[0] : ot += D.p.v[0] * R), D.a.propType && ((R = P[F].s.getMult(T[s].anIndexes[F], S.a[F].s.totalChars)).length ? ot += D.a.v[0] * R[0] : ot += D.a.v[0] * R);
                }
                for (p = !0; p;) {
                  o + ot <= l + y || !d ? (v = (o + ot - l) / h.partialLength, G = c.point[0] + (h.point[0] - c.point[0]) * v, z = c.point[1] + (h.point[1] - c.point[1]) * v, _.translate(-x[0] * T[s].an / 200, -x[1] * V / 100), p = !1) : d && (l += h.partialLength, (m += 1) >= d.length && (m = 0, d = u[f += 1] ? u[f].points : E.v.c ? u[f = m = 0].points : (l -= h.partialLength, null)), d && (c = h, y = (h = d[m]).partialLength));
                }
                L = T[s].an / 2 - T[s].add, _.translate(-L, 0, 0);
              } else L = T[s].an / 2 - T[s].add, _.translate(-L, 0, 0), _.translate(-x[0] * T[s].an / 200, -x[1] * V / 100, 0);
              for (T[s].l / 2, F = 0; F < w; F += 1) {
                (D = P[F].a).t.propType && (R = P[F].s.getMult(T[s].anIndexes[F], S.a[F].s.totalChars), 0 === i && 0 === t.j || (this._hasMaskedPath ? R.length ? o += D.t.v * R[0] : o += D.t.v * R : R.length ? i += D.t.v * R[0] : i += D.t.v * R));
              }
              for (T[s].l / 2, t.strokeWidthAnim && (H = t.sw || 0), t.strokeColorAnim && (O = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (j = [t.fc[0], t.fc[1], t.fc[2]]), F = 0; F < w; F += 1) {
                (D = P[F].a).a.propType && ((R = P[F].s.getMult(T[s].anIndexes[F], S.a[F].s.totalChars)).length ? _.translate(-D.a.v[0] * R[0], -D.a.v[1] * R[1], D.a.v[2] * R[2]) : _.translate(-D.a.v[0] * R, -D.a.v[1] * R, D.a.v[2] * R));
              }
              for (F = 0; F < w; F += 1) {
                (D = P[F].a).s.propType && ((R = P[F].s.getMult(T[s].anIndexes[F], S.a[F].s.totalChars)).length ? _.scale(1 + (D.s.v[0] - 1) * R[0], 1 + (D.s.v[1] - 1) * R[1], 1) : _.scale(1 + (D.s.v[0] - 1) * R, 1 + (D.s.v[1] - 1) * R, 1));
              }
              for (F = 0; F < w; F += 1) {
                if (D = P[F].a, R = P[F].s.getMult(T[s].anIndexes[F], S.a[F].s.totalChars), D.sk.propType && (R.length ? _.skewFromAxis(-D.sk.v * R[0], D.sa.v * R[1]) : _.skewFromAxis(-D.sk.v * R, D.sa.v * R)), D.r.propType && (R.length ? _.rotateZ(-D.r.v * R[2]) : _.rotateZ(-D.r.v * R)), D.ry.propType && (R.length ? _.rotateY(D.ry.v * R[1]) : _.rotateY(D.ry.v * R)), D.rx.propType && (R.length ? _.rotateX(D.rx.v * R[0]) : _.rotateX(D.rx.v * R)), D.o.propType && (R.length ? N += (D.o.v * R[0] - N) * R[0] : N += (D.o.v * R - N) * R), t.strokeWidthAnim && D.sw.propType && (R.length ? H += D.sw.v * R[0] : H += D.sw.v * R), t.strokeColorAnim && D.sc.propType) for (q = 0; q < 3; q += 1) {
                  R.length ? O[q] = O[q] + (D.sc.v[q] - O[q]) * R[0] : O[q] = O[q] + (D.sc.v[q] - O[q]) * R;
                }
                if (t.fillColorAnim && t.fc) {
                  if (D.fc.propType) for (q = 0; q < 3; q += 1) {
                    R.length ? j[q] = j[q] + (D.fc.v[q] - j[q]) * R[0] : j[q] = j[q] + (D.fc.v[q] - j[q]) * R;
                  }
                  D.fh.propType && (j = R.length ? addHueToRGB(j, D.fh.v * R[0]) : addHueToRGB(j, D.fh.v * R)), D.fs.propType && (j = R.length ? addSaturationToRGB(j, D.fs.v * R[0]) : addSaturationToRGB(j, D.fs.v * R)), D.fb.propType && (j = R.length ? addBrightnessToRGB(j, D.fb.v * R[0]) : addBrightnessToRGB(j, D.fb.v * R));
                }
              }
              for (F = 0; F < w; F += 1) {
                (D = P[F].a).p.propType && (R = P[F].s.getMult(T[s].anIndexes[F], S.a[F].s.totalChars), this._hasMaskedPath ? R.length ? _.translate(0, D.p.v[1] * R[0], -D.p.v[2] * R[1]) : _.translate(0, D.p.v[1] * R, -D.p.v[2] * R) : R.length ? _.translate(D.p.v[0] * R[0], D.p.v[1] * R[1], -D.p.v[2] * R[2]) : _.translate(D.p.v[0] * R, D.p.v[1] * R, -D.p.v[2] * R));
              }
              if (t.strokeWidthAnim && (W = H < 0 ? 0 : H), t.strokeColorAnim && (Y = "rgb(" + Math.round(255 * O[0]) + "," + Math.round(255 * O[1]) + "," + Math.round(255 * O[2]) + ")"), t.fillColorAnim && t.fc && (X = "rgb(" + Math.round(255 * j[0]) + "," + Math.round(255 * j[1]) + "," + Math.round(255 * j[2]) + ")"), this._hasMaskedPath) {
                if (_.translate(0, -t.ls), _.translate(0, x[1] * V / 100 + r, 0), S.p.p) {
                  b = (h.point[1] - c.point[1]) / (h.point[0] - c.point[0]);
                  var ht = 180 * Math.atan(b) / Math.PI;
                  h.point[0] < c.point[0] && (ht += 180), _.rotate(-ht * Math.PI / 180);
                }
                _.translate(G, z, 0), o -= x[0] * T[s].an / 200, T[s + 1] && $ !== T[s + 1].ind && (o += T[s].an / 2, o += t.tr / 1e3 * t.finalSize);
              } else {
                switch (_.translate(i, r, 0), t.ps && _.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                  case 1:
                    _.translate(T[s].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[T[s].line]), 0, 0);
                    break;
                  case 2:
                    _.translate(T[s].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[T[s].line]) / 2, 0, 0);
                }
                _.translate(0, -t.ls), _.translate(L, 0, 0), _.translate(x[0] * T[s].an / 200, x[1] * V / 100, 0), i += T[s].l + t.tr / 1e3 * t.finalSize;
              }
              "html" === A ? tt = _.toCSS() : "svg" === A ? tt = _.to2dCSS() : et = [_.props[0], _.props[1], _.props[2], _.props[3], _.props[4], _.props[5], _.props[6], _.props[7], _.props[8], _.props[9], _.props[10], _.props[11], _.props[12], _.props[13], _.props[14], _.props[15]], K = N;
            }
            this.lettersChangedFlag = C <= s ? (I = new LetterProps(K, W, Y, X, tt, et), this.renderedLetters.push(I), C += 1, !0) : (I = this.renderedLetters[s]).update(K, W, Y, X, tt, et) || this.lettersChangedFlag;
          }
        }
      }, TextAnimatorProperty.prototype.getValue = function () {
        this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties());
      }, TextAnimatorProperty.prototype.mHelper = new Matrix(), TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), LetterProps.prototype.update = function (t, e, i, r, s, a) {
        this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1;
        var n = this._mdf.p = !1;
        return this.o !== t && (this.o = t, n = this._mdf.o = !0), this.sw !== e && (this.sw = e, n = this._mdf.sw = !0), this.sc !== i && (this.sc = i, n = this._mdf.sc = !0), this.fc !== r && (this.fc = r, n = this._mdf.fc = !0), this.m !== s && (this.m = s, n = this._mdf.m = !0), !a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a, n = this._mdf.p = !0), n;
      }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function (t, e) {
        for (var i in e) {
          e.hasOwnProperty(i) && (t[i] = e[i]);
        }
        return t;
      }, TextProperty.prototype.setCurrentData = function (t) {
        t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0;
      }, TextProperty.prototype.searchProperty = function () {
        return this.searchKeyframes();
      }, TextProperty.prototype.searchKeyframes = function () {
        return this.kf = 1 < this.data.d.k.length, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf;
      }, TextProperty.prototype.addEffect = function (t) {
        this.effectsSequence.push(t), this.elem.addDynamicProperty(this);
      }, TextProperty.prototype.getValue = function (t) {
        if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
          this.currentData.t = this.data.d.k[this.keysIndex].s.t;
          var e = this.currentData,
            i = this.keysIndex;
          if (this.lock) this.setCurrentData(this.currentData);else {
            this.lock = !0, this._mdf = !1;
            var r,
              s = this.effectsSequence.length,
              a = t || this.data.d.k[this.keysIndex].s;
            for (r = 0; r < s; r += 1) {
              a = i !== this.keysIndex ? this.effectsSequence[r](a, a.t) : this.effectsSequence[r](this.currentData, a.t);
            }
            e !== a && this.setCurrentData(a), this.pv = this.v = this.currentData, this.lock = !1, this.frameId = this.elem.globalData.frameId;
          }
        }
      }, TextProperty.prototype.getKeyframeValue = function () {
        for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, i = 0, r = t.length; i <= r - 1 && (t[i].s, !(i === r - 1 || t[i + 1].t > e));) {
          i += 1;
        }
        return this.keysIndex !== i && (this.keysIndex = i), this.data.d.k[this.keysIndex].s;
      }, TextProperty.prototype.buildFinalText = function (t) {
        for (var e, i = FontManager.getCombinedCharacterCodes(), r = [], s = 0, a = t.length; s < a;) {
          e = t.charCodeAt(s), -1 !== i.indexOf(e) ? r[r.length - 1] += t.charAt(s) : 55296 <= e && e <= 56319 && 56320 <= (e = t.charCodeAt(s + 1)) && e <= 57343 ? (r.push(t.substr(s, 2)), ++s) : r.push(t.charAt(s)), s += 1;
        }
        return r;
      }, TextProperty.prototype.completeTextData = function (t) {
        t.__complete = !0;
        var e,
          i,
          r,
          s,
          a,
          n,
          o,
          h = this.elem.globalData.fontManager,
          l = this.data,
          p = [],
          m = 0,
          f = l.m.g,
          c = 0,
          d = 0,
          u = 0,
          y = [],
          g = 0,
          v = 0,
          b = h.getFontByName(t.f),
          E = 0,
          x = b.fStyle ? b.fStyle.split(" ") : [],
          P = "normal",
          S = "normal";
        for (i = x.length, e = 0; e < i; e += 1) {
          switch (x[e].toLowerCase()) {
            case "italic":
              S = "italic";
              break;
            case "bold":
              P = "700";
              break;
            case "black":
              P = "900";
              break;
            case "medium":
              P = "500";
              break;
            case "regular":
            case "normal":
              P = "400";
              break;
            case "light":
            case "thin":
              P = "200";
          }
        }
        t.fWeight = b.fWeight || P, t.fStyle = S, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), i = t.finalText.length, t.finalLineHeight = t.lh;
        var _,
          A = t.tr / 1e3 * t.finalSize;
        if (t.sz) for (var C, T, k = !0, M = t.sz[0], D = t.sz[1]; k;) {
          g = C = 0, i = (T = this.buildFinalText(t.t)).length, A = t.tr / 1e3 * t.finalSize;
          var F = -1;
          for (e = 0; e < i; e += 1) {
            _ = T[e].charCodeAt(0), r = !1, " " === T[e] ? F = e : 13 !== _ && 3 !== _ || (r = !(g = 0), C += t.finalLineHeight || 1.2 * t.finalSize), M < g + (E = h.chars ? (o = h.getCharData(T[e], b.fStyle, b.fFamily), r ? 0 : o.w * t.finalSize / 100) : h.measureText(T[e], t.f, t.finalSize)) && " " !== T[e] ? (-1 === F ? i += 1 : e = F, C += t.finalLineHeight || 1.2 * t.finalSize, T.splice(e, F === e ? 1 : 0, "\r"), F = -1, g = 0) : (g += E, g += A);
          }
          C += b.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && D < C ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = T, i = t.finalText.length, k = !1);
        }
        g = -A;
        var w,
          I = E = 0;
        for (e = 0; e < i; e += 1) {
          if (r = !1, 13 === (_ = (w = t.finalText[e]).charCodeAt(0)) || 3 === _ ? (I = 0, y.push(g), v = v < g ? g : v, g = -2 * A, r = !(s = ""), u += 1) : s = w, E = h.chars ? (o = h.getCharData(w, b.fStyle, h.getFontByName(t.f).fFamily), r ? 0 : o.w * t.finalSize / 100) : h.measureText(s, t.f, t.finalSize), " " === w ? I += E + A : (g += E + A + I, I = 0), p.push({
            l: E,
            an: E,
            add: c,
            n: r,
            anIndexes: [],
            val: s,
            line: u,
            animatorJustifyOffset: 0
          }), 2 == f) {
            if (c += E, "" === s || " " === s || e === i - 1) {
              for ("" !== s && " " !== s || (c -= E); d <= e;) {
                p[d].an = c, p[d].ind = m, p[d].extra = E, d += 1;
              }
              m += 1, c = 0;
            }
          } else if (3 == f) {
            if (c += E, "" === s || e === i - 1) {
              for ("" === s && (c -= E); d <= e;) {
                p[d].an = c, p[d].ind = m, p[d].extra = E, d += 1;
              }
              c = 0, m += 1;
            }
          } else p[m].ind = m, p[m].extra = 0, m += 1;
        }
        if (t.l = p, v = v < g ? g : v, y.push(g), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;else switch (t.boxWidth = v, t.j) {
          case 1:
            t.justifyOffset = -t.boxWidth;
            break;
          case 2:
            t.justifyOffset = -t.boxWidth / 2;
            break;
          default:
            t.justifyOffset = 0;
        }
        t.lineWidths = y;
        var V,
          B,
          R = l.a;
        n = R.length;
        var L,
          G,
          z = [];
        for (a = 0; a < n; a += 1) {
          for ((V = R[a]).a.sc && (t.strokeColorAnim = !0), V.a.sw && (t.strokeWidthAnim = !0), (V.a.fc || V.a.fh || V.a.fs || V.a.fb) && (t.fillColorAnim = !0), G = 0, L = V.s.b, e = 0; e < i; e += 1) {
            (B = p[e]).anIndexes[a] = G, (1 == L && "" !== B.val || 2 == L && "" !== B.val && " " !== B.val || 3 == L && (B.n || " " == B.val || e == i - 1) || 4 == L && (B.n || e == i - 1)) && (1 === V.s.rn && z.push(G), G += 1);
          }
          l.a[a].s.totalChars = G;
          var N,
            O = -1;
          if (1 === V.s.rn) for (e = 0; e < i; e += 1) {
            O != (B = p[e]).anIndexes[a] && (O = B.anIndexes[a], N = z.splice(Math.floor(Math.random() * z.length), 1)[0]), B.anIndexes[a] = N;
          }
        }
        t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = b.ascent * t.finalSize / 100;
      }, TextProperty.prototype.updateDocumentData = function (t, e) {
        e = void 0 === e ? this.keysIndex : e;
        var i = this.copyData({}, this.data.d.k[e].s);
        i = this.copyData(i, t), this.data.d.k[e].s = i, this.recalculate(e), this.elem.addDynamicProperty(this);
      }, TextProperty.prototype.recalculate = function (t) {
        var e = this.data.d.k[t].s;
        e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e);
      }, TextProperty.prototype.canResizeFont = function (t) {
        this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
      }, TextProperty.prototype.setMinimumFontSize = function (t) {
        this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
      };
      var TextSelectorProp = function () {
          var c = Math.max,
            d = Math.min,
            u = Math.floor;
          function r(t, e) {
            this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = PropertyFactory.getProp(t, e.s || {
              k: 0
            }, 0, 0, this), this.e = "e" in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : {
              v: 100
            }, this.o = PropertyFactory.getProp(t, e.o || {
              k: 0
            }, 0, 0, this), this.xe = PropertyFactory.getProp(t, e.xe || {
              k: 0
            }, 0, 0, this), this.ne = PropertyFactory.getProp(t, e.ne || {
              k: 0
            }, 0, 0, this), this.a = PropertyFactory.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue();
          }
          return r.prototype = {
            getMult: function getMult(t) {
              this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
              var e = 0,
                i = 0,
                r = 1,
                s = 1;
              0 < this.ne.v ? e = this.ne.v / 100 : i = -this.ne.v / 100, 0 < this.xe.v ? r = 1 - this.xe.v / 100 : s = 1 + this.xe.v / 100;
              var a = BezierFactory.getBezierEasing(e, i, r, s).get,
                n = 0,
                o = this.finalS,
                h = this.finalE,
                l = this.data.sh;
              if (2 === l) n = a(n = h === o ? h <= t ? 1 : 0 : c(0, d(.5 / (h - o) + (t - o) / (h - o), 1)));else if (3 === l) n = a(n = h === o ? h <= t ? 0 : 1 : 1 - c(0, d(.5 / (h - o) + (t - o) / (h - o), 1)));else if (4 === l) h === o ? n = 0 : (n = c(0, d(.5 / (h - o) + (t - o) / (h - o), 1))) < .5 ? n *= 2 : n = 1 - 2 * (n - .5), n = a(n);else if (5 === l) {
                if (h === o) n = 0;else {
                  var p = h - o,
                    m = -p / 2 + (t = d(c(0, t + .5 - o), h - o)),
                    f = p / 2;
                  n = Math.sqrt(1 - m * m / (f * f));
                }
                n = a(n);
              } else n = 6 === l ? a(n = h === o ? 0 : (t = d(c(0, t + .5 - o), h - o), (1 + Math.cos(Math.PI + 2 * Math.PI * t / (h - o))) / 2)) : (t >= u(o) && (n = c(0, d(t - o < 0 ? d(h, 1) - (o - t) : h - t, 1))), a(n));
              return n * this.a.v;
            },
            getValue: function getValue(t) {
              this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);
              var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                i = this.o.v / e,
                r = this.s.v / e + i,
                s = this.e.v / e + i;
              if (s < r) {
                var a = r;
                r = s, s = a;
              }
              this.finalS = r, this.finalE = s;
            }
          }, extendPrototype([DynamicPropertyContainer], r), {
            getTextSelectorProp: function getTextSelectorProp(t, e, i) {
              return new r(t, e, i);
            }
          };
        }(),
        pool_factory = function pool_factory(t, e, i, r) {
          var s = 0,
            a = t,
            n = createSizedArray(a);
          function o() {
            return s ? n[s -= 1] : e();
          }
          return {
            newElement: o,
            release: function release(t) {
              s === a && (n = pooling["double"](n), a *= 2), i && i(t), n[s] = t, s += 1;
            }
          };
        },
        pooling = {
          "double": function double(t) {
            return t.concat(createSizedArray(t.length));
          }
        },
        point_pool = pool_factory(8, function () {
          return createTypedArray("float32", 2);
        }),
        shape_pool = (MB = pool_factory(4, function () {
          return new ShapePath();
        }, function (t) {
          var e,
            i = t._length;
          for (e = 0; e < i; e += 1) {
            point_pool.release(t.v[e]), point_pool.release(t.i[e]), point_pool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
          }
          t._length = 0, t.c = !1;
        }), MB.clone = function (t) {
          var e,
            i = MB.newElement(),
            r = void 0 === t._length ? t.v.length : t._length;
          for (i.setLength(r), i.c = t.c, e = 0; e < r; e += 1) {
            i.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
          }
          return i;
        }, MB),
        MB,
        shapeCollection_pool = (VB = {
          newShapeCollection: function newShapeCollection() {
            var t;
            t = WB ? YB[WB -= 1] : new ShapeCollection();
            return t;
          },
          release: function release(t) {
            var e,
              i = t._length;
            for (e = 0; e < i; e += 1) {
              shape_pool.release(t.shapes[e]);
            }
            t._length = 0, WB === XB && (YB = pooling["double"](YB), XB *= 2);
            YB[WB] = t, WB += 1;
          }
        }, WB = 0, XB = 4, YB = createSizedArray(XB), VB),
        VB,
        WB,
        XB,
        YB,
        segments_length_pool = pool_factory(8, function () {
          return {
            lengths: [],
            totalLength: 0
          };
        }, function (t) {
          var e,
            i = t.lengths.length;
          for (e = 0; e < i; e += 1) {
            bezier_length_pool.release(t.lengths[e]);
          }
          t.lengths.length = 0;
        }),
        bezier_length_pool = pool_factory(8, function () {
          return {
            addedLength: 0,
            percents: createTypedArray("float32", defaultCurveSegments),
            lengths: createTypedArray("float32", defaultCurveSegments)
          };
        });
      function BaseRenderer() {}
      function SVGRenderer(t, e) {
        this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
        var i = "";
        if (e && e.title) {
          var r = createNS("title"),
            s = createElementID();
          r.setAttribute("id", s), r.textContent = e.title, this.svgElement.appendChild(r), i += s;
        }
        if (e && e.description) {
          var a = createNS("desc"),
            n = createElementID();
          a.setAttribute("id", n), a.textContent = e.description, this.svgElement.appendChild(a), i += " " + n;
        }
        i && this.svgElement.setAttribute("aria-labelledby", i);
        var o = createNS("defs");
        this.svgElement.appendChild(o);
        var h = createNS("g");
        this.svgElement.appendChild(h), this.layerElement = h, this.renderConfig = {
          preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
          imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
          progressiveLoad: e && e.progressiveLoad || !1,
          hideOnTransparent: !e || !1 !== e.hideOnTransparent,
          viewBoxOnly: e && e.viewBoxOnly || !1,
          viewBoxSize: e && e.viewBoxSize || !1,
          className: e && e.className || "",
          id: e && e.id || "",
          focusable: e && e.focusable,
          filterSize: {
            width: e && e.filterSize && e.filterSize.width || "100%",
            height: e && e.filterSize && e.filterSize.height || "100%",
            x: e && e.filterSize && e.filterSize.x || "0%",
            y: e && e.filterSize && e.filterSize.y || "0%"
          }
        }, this.globalData = {
          _mdf: !1,
          frameNum: -1,
          defs: o,
          renderConfig: this.renderConfig
        }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg";
      }
      function CanvasRenderer(t, e) {
        this.animationItem = t, this.renderConfig = {
          clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
          context: e && e.context || null,
          progressiveLoad: e && e.progressiveLoad || !1,
          preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
          imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
          className: e && e.className || "",
          id: e && e.id || ""
        }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
          frameNum: -1,
          _mdf: !1,
          renderConfig: this.renderConfig,
          currentGlobalAlpha: -1
        }, this.contextData = new CVContextData(), this.elements = [], this.pendingElements = [], this.transformMat = new Matrix(), this.completeLayers = !1, this.rendererType = "canvas";
      }
      function HybridRenderer(t, e) {
        this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
          className: e && e.className || "",
          imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
          hideOnTransparent: !e || !1 !== e.hideOnTransparent,
          filterSize: {
            width: e && e.filterSize && e.filterSize.width || "400%",
            height: e && e.filterSize && e.filterSize.height || "400%",
            x: e && e.filterSize && e.filterSize.x || "-100%",
            y: e && e.filterSize && e.filterSize.y || "-100%"
          }
        }, this.globalData = {
          _mdf: !1,
          frameNum: -1,
          renderConfig: this.renderConfig
        }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html";
      }
      function MaskElement(t, e, i) {
        this.data = t, this.element = e, this.globalData = i, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
        var r,
          s = this.globalData.defs,
          a = this.masksProperties ? this.masksProperties.length : 0;
        this.viewData = createSizedArray(a), this.solidPath = "";
        var n,
          o,
          h,
          l,
          p,
          m,
          f,
          c = this.masksProperties,
          d = 0,
          u = [],
          y = createElementID(),
          g = "clipPath",
          v = "clip-path";
        for (r = 0; r < a; r++) {
          if (("a" !== c[r].mode && "n" !== c[r].mode || c[r].inv || 100 !== c[r].o.k || c[r].o.x) && (v = g = "mask"), "s" != c[r].mode && "i" != c[r].mode || 0 !== d ? l = null : ((l = createNS("rect")).setAttribute("fill", "#ffffff"), l.setAttribute("width", this.element.comp.data.w || 0), l.setAttribute("height", this.element.comp.data.h || 0), u.push(l)), n = createNS("path"), "n" != c[r].mode) {
            var b;
            if (d += 1, n.setAttribute("fill", "s" === c[r].mode ? "#000000" : "#ffffff"), n.setAttribute("clip-rule", "nonzero"), 0 !== c[r].x.k ? (v = g = "mask", f = PropertyFactory.getProp(this.element, c[r].x, 0, null, this.element), b = createElementID(), (p = createNS("filter")).setAttribute("id", b), (m = createNS("feMorphology")).setAttribute("operator", "erode"), m.setAttribute("in", "SourceGraphic"), m.setAttribute("radius", "0"), p.appendChild(m), s.appendChild(p), n.setAttribute("stroke", "s" === c[r].mode ? "#000000" : "#ffffff")) : f = m = null, this.storedData[r] = {
              elem: n,
              x: f,
              expan: m,
              lastPath: "",
              lastOperator: "",
              filterId: b,
              lastRadius: 0
            }, "i" == c[r].mode) {
              h = u.length;
              var E = createNS("g");
              for (o = 0; o < h; o += 1) {
                E.appendChild(u[o]);
              }
              var x = createNS("mask");
              x.setAttribute("mask-type", "alpha"), x.setAttribute("id", y + "_" + d), x.appendChild(n), s.appendChild(x), E.setAttribute("mask", "url(" + locationHref + "#" + y + "_" + d + ")"), u.length = 0, u.push(E);
            } else u.push(n);
            c[r].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[r] = {
              elem: n,
              lastPath: "",
              op: PropertyFactory.getProp(this.element, c[r].o, 0, .01, this.element),
              prop: ShapePropertyFactory.getShapeProp(this.element, c[r], 3),
              invRect: l
            }, this.viewData[r].prop.k || this.drawPath(c[r], this.viewData[r].prop.v, this.viewData[r]);
          } else this.viewData[r] = {
            op: PropertyFactory.getProp(this.element, c[r].o, 0, .01, this.element),
            prop: ShapePropertyFactory.getShapeProp(this.element, c[r], 3),
            elem: n,
            lastPath: ""
          }, s.appendChild(n);
        }
        for (this.maskElement = createNS(g), a = u.length, r = 0; r < a; r += 1) {
          this.maskElement.appendChild(u[r]);
        }
        0 < d && (this.maskElement.setAttribute("id", y), this.element.maskedElement.setAttribute(v, "url(" + locationHref + "#" + y + ")"), s.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this);
      }
      function HierarchyElement() {}
      function FrameElement() {}
      function TransformElement() {}
      function RenderableElement() {}
      function RenderableDOMElement() {}
      function ProcessedElement(t, e) {
        this.elem = t, this.pos = e;
      }
      function SVGStyleData(t, e) {
        this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = createNS("path"), this.msElem = null;
      }
      function SVGShapeData(t, e, i) {
        this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = i, this.lvl = e, this._isAnimated = !!i.k;
        for (var r = 0, s = t.length; r < s;) {
          if (t[r].mProps.dynamicProperties.length) {
            this._isAnimated = !0;
            break;
          }
          r += 1;
        }
      }
      function SVGTransformData(t, e, i) {
        this.transform = {
          mProps: t,
          op: e,
          container: i
        }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
      }
      function SVGStrokeStyleData(t, e, i) {
        this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = i, this._isAnimated = !!this._isAnimated;
      }
      function SVGFillStyleData(t, e, i) {
        this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = i;
      }
      function SVGGradientFillStyleData(t, e, i) {
        this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, i);
      }
      function SVGGradientStrokeStyleData(t, e, i) {
        this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, i), this._isAnimated = !!this._isAnimated;
      }
      function ShapeGroupData() {
        this.it = [], this.prevViewData = [], this.gr = createNS("g");
      }
      BaseRenderer.prototype.checkLayers = function (t) {
        var e,
          i,
          r = this.layers.length;
        for (this.completeLayers = !0, e = r - 1; 0 <= e; e--) {
          this.elements[e] || (i = this.layers[e]).ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
        }
        this.checkPendingElements();
      }, BaseRenderer.prototype.createItem = function (t) {
        switch (t.ty) {
          case 2:
            return this.createImage(t);
          case 0:
            return this.createComp(t);
          case 1:
            return this.createSolid(t);
          case 3:
            return this.createNull(t);
          case 4:
            return this.createShape(t);
          case 5:
            return this.createText(t);
          case 6:
            return this.createAudio(t);
          case 13:
            return this.createCamera(t);
        }
        return this.createNull(t);
      }, BaseRenderer.prototype.createCamera = function () {
        throw new Error("You're using a 3d camera. Try the html renderer.");
      }, BaseRenderer.prototype.createAudio = function (t) {
        return new AudioElement(t, this.globalData, this);
      }, BaseRenderer.prototype.buildAllItems = function () {
        var t,
          e = this.layers.length;
        for (t = 0; t < e; t += 1) {
          this.buildItem(t);
        }
        this.checkPendingElements();
      }, BaseRenderer.prototype.includeLayers = function (t) {
        this.completeLayers = !1;
        var e,
          i,
          r = t.length,
          s = this.layers.length;
        for (e = 0; e < r; e += 1) {
          for (i = 0; i < s;) {
            if (this.layers[i].id == t[e].id) {
              this.layers[i] = t[e];
              break;
            }
            i += 1;
          }
        }
      }, BaseRenderer.prototype.setProjectInterface = function (t) {
        this.globalData.projectInterface = t;
      }, BaseRenderer.prototype.initItems = function () {
        this.globalData.progressiveLoad || this.buildAllItems();
      }, BaseRenderer.prototype.buildElementParenting = function (t, e, i) {
        for (var r = this.elements, s = this.layers, a = 0, n = s.length; a < n;) {
          s[a].ind == e && (r[a] && !0 !== r[a] ? (i.push(r[a]), r[a].setAsParent(), void 0 !== s[a].parent ? this.buildElementParenting(t, s[a].parent, i) : t.setHierarchy(i)) : (this.buildItem(a), this.addPendingElement(t))), a += 1;
        }
      }, BaseRenderer.prototype.addPendingElement = function (t) {
        this.pendingElements.push(t);
      }, BaseRenderer.prototype.searchExtraCompositions = function (t) {
        var e,
          i = t.length;
        for (e = 0; e < i; e += 1) {
          if (t[e].xt) {
            var r = this.createComp(t[e]);
            r.initExpressions(), this.globalData.projectInterface.registerComposition(r);
          }
        }
      }, BaseRenderer.prototype.setupGlobalData = function (t, e) {
        this.globalData.fontManager = new FontManager(), this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
          w: t.w,
          h: t.h
        };
      }, extendPrototype([BaseRenderer], SVGRenderer), SVGRenderer.prototype.createNull = function (t) {
        return new NullElement(t, this.globalData, this);
      }, SVGRenderer.prototype.createShape = function (t) {
        return new SVGShapeElement(t, this.globalData, this);
      }, SVGRenderer.prototype.createText = function (t) {
        return new SVGTextElement(t, this.globalData, this);
      }, SVGRenderer.prototype.createImage = function (t) {
        return new IImageElement(t, this.globalData, this);
      }, SVGRenderer.prototype.createComp = function (t) {
        return new SVGCompElement(t, this.globalData, this);
      }, SVGRenderer.prototype.createSolid = function (t) {
        return new ISolidElement(t, this.globalData, this);
      }, SVGRenderer.prototype.configAnimation = function (t) {
        this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)"), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
        var e = this.globalData.defs;
        this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
        var i = createNS("clipPath"),
          r = createNS("rect");
        r.setAttribute("width", t.w), r.setAttribute("height", t.h), r.setAttribute("x", 0), r.setAttribute("y", 0);
        var s = createElementID();
        i.setAttribute("id", s), i.appendChild(r), this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + s + ")"), e.appendChild(i), this.layers = t.layers, this.elements = createSizedArray(t.layers.length);
      }, SVGRenderer.prototype.destroy = function () {
        this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
        var t,
          e = this.layers ? this.layers.length : 0;
        for (t = 0; t < e; t++) {
          this.elements[t] && this.elements[t].destroy();
        }
        this.elements.length = 0, this.destroyed = !0, this.animationItem = null;
      }, SVGRenderer.prototype.updateContainerSize = function () {}, SVGRenderer.prototype.buildItem = function (t) {
        var e = this.elements;
        if (!e[t] && 99 != this.layers[t].ty) {
          e[t] = !0;
          var i = this.createItem(this.layers[t]);
          e[t] = i, expressionsPlugin && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(i), i.initExpressions()), this.appendElementInPos(i, t), this.layers[t].tt && (this.elements[t - 1] && !0 !== this.elements[t - 1] ? i.setMatte(e[t - 1].layerId) : (this.buildItem(t - 1), this.addPendingElement(i)));
        }
      }, SVGRenderer.prototype.checkPendingElements = function () {
        for (; this.pendingElements.length;) {
          var t = this.pendingElements.pop();
          if (t.checkParenting(), t.data.tt) for (var e = 0, i = this.elements.length; e < i;) {
            if (this.elements[e] === t) {
              t.setMatte(this.elements[e - 1].layerId);
              break;
            }
            e += 1;
          }
        }
      }, SVGRenderer.prototype.renderFrame = function (t) {
        if (this.renderedFrame !== t && !this.destroyed) {
          null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
          var e,
            i = this.layers.length;
          for (this.completeLayers || this.checkLayers(t), e = i - 1; 0 <= e; e--) {
            (this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
          }
          if (this.globalData._mdf) for (e = 0; e < i; e += 1) {
            (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
          }
        }
      }, SVGRenderer.prototype.appendElementInPos = function (t, e) {
        var i = t.getBaseElement();
        if (i) {
          for (var r, s = 0; s < e;) {
            this.elements[s] && !0 !== this.elements[s] && this.elements[s].getBaseElement() && (r = this.elements[s].getBaseElement()), s += 1;
          }
          r ? this.layerElement.insertBefore(i, r) : this.layerElement.appendChild(i);
        }
      }, SVGRenderer.prototype.hide = function () {
        this.layerElement.style.display = "none";
      }, SVGRenderer.prototype.show = function () {
        this.layerElement.style.display = "block";
      }, extendPrototype([BaseRenderer], CanvasRenderer), CanvasRenderer.prototype.createShape = function (t) {
        return new CVShapeElement(t, this.globalData, this);
      }, CanvasRenderer.prototype.createText = function (t) {
        return new CVTextElement(t, this.globalData, this);
      }, CanvasRenderer.prototype.createImage = function (t) {
        return new CVImageElement(t, this.globalData, this);
      }, CanvasRenderer.prototype.createComp = function (t) {
        return new CVCompElement(t, this.globalData, this);
      }, CanvasRenderer.prototype.createSolid = function (t) {
        return new CVSolidElement(t, this.globalData, this);
      }, CanvasRenderer.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRenderer.prototype.ctxTransform = function (t) {
        if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13]) if (this.renderConfig.clearCanvas) {
          this.transformMat.cloneFromProps(t);
          var e = this.contextData.cTr.props;
          this.transformMat.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]), this.contextData.cTr.cloneFromProps(this.transformMat.props);
          var i = this.contextData.cTr.props;
          this.canvasContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13]);
        } else this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13]);
      }, CanvasRenderer.prototype.ctxOpacity = function (t) {
        if (!this.renderConfig.clearCanvas) return this.canvasContext.globalAlpha *= t < 0 ? 0 : t, void (this.globalData.currentGlobalAlpha = this.contextData.cO);
        this.contextData.cO *= t < 0 ? 0 : t, this.globalData.currentGlobalAlpha !== this.contextData.cO && (this.canvasContext.globalAlpha = this.contextData.cO, this.globalData.currentGlobalAlpha = this.contextData.cO);
      }, CanvasRenderer.prototype.reset = function () {
        this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore();
      }, CanvasRenderer.prototype.save = function (t) {
        if (this.renderConfig.clearCanvas) {
          t && this.canvasContext.save();
          var e = this.contextData.cTr.props;
          this.contextData._length <= this.contextData.cArrPos && this.contextData.duplicate();
          var i,
            r = this.contextData.saved[this.contextData.cArrPos];
          for (i = 0; i < 16; i += 1) {
            r[i] = e[i];
          }
          this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO, this.contextData.cArrPos += 1;
        } else this.canvasContext.save();
      }, CanvasRenderer.prototype.restore = function (t) {
        if (this.renderConfig.clearCanvas) {
          t && (this.canvasContext.restore(), this.globalData.blendMode = "source-over"), this.contextData.cArrPos -= 1;
          var e,
            i = this.contextData.saved[this.contextData.cArrPos],
            r = this.contextData.cTr.props;
          for (e = 0; e < 16; e += 1) {
            r[e] = i[e];
          }
          this.canvasContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13]), i = this.contextData.savedOp[this.contextData.cArrPos], this.contextData.cO = i, this.globalData.currentGlobalAlpha !== i && (this.canvasContext.globalAlpha = i, this.globalData.currentGlobalAlpha = i);
        } else this.canvasContext.restore();
      }, CanvasRenderer.prototype.configAnimation = function (t) {
        this.animationItem.wrapper ? (this.animationItem.container = createTag("canvas"), this.animationItem.container.style.width = "100%", this.animationItem.container.style.height = "100%", this.animationItem.container.style.transformOrigin = this.animationItem.container.style.mozTransformOrigin = this.animationItem.container.style.webkitTransformOrigin = this.animationItem.container.style["-webkit-transform"] = "0px 0px 0px", this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)) : this.canvasContext = this.renderConfig.context, this.data = t, this.layers = t.layers, this.transformCanvas = {
          w: t.w,
          h: t.h,
          sx: 0,
          sy: 0,
          tx: 0,
          ty: 0
        }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, (this.globalData.renderer = this).globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize();
      }, CanvasRenderer.prototype.updateContainerSize = function () {
        var t, e, i, r;
        if (this.reset(), this.animationItem.wrapper && this.animationItem.container ? (t = this.animationItem.wrapper.offsetWidth, e = this.animationItem.wrapper.offsetHeight, this.animationItem.container.setAttribute("width", t * this.renderConfig.dpr), this.animationItem.container.setAttribute("height", e * this.renderConfig.dpr)) : (t = this.canvasContext.canvas.width * this.renderConfig.dpr, e = this.canvasContext.canvas.height * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
          var s = this.renderConfig.preserveAspectRatio.split(" "),
            a = s[1] || "meet",
            n = s[0] || "xMidYMid",
            o = n.substr(0, 4),
            h = n.substr(4);
          i = t / e, r = this.transformCanvas.w / this.transformCanvas.h, this.transformCanvas.sy = i < r && "meet" === a || r < i && "slice" === a ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), t / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = e / (this.transformCanvas.h / this.renderConfig.dpr), e / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === o && (r < i && "meet" === a || i < r && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === o && (r < i && "meet" === a || i < r && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === h && (i < r && "meet" === a || r < i && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === h && (i < r && "meet" === a || r < i && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) * this.renderConfig.dpr : 0;
        } else "none" == this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0;
        this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0);
      }, CanvasRenderer.prototype.destroy = function () {
        var t;
        for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), t = (this.layers ? this.layers.length : 0) - 1; 0 <= t; t -= 1) {
          this.elements[t] && this.elements[t].destroy();
        }
        this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0;
      }, CanvasRenderer.prototype.renderFrame = function (t, e) {
        if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
          this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
          var i,
            r = this.layers.length;
          for (this.completeLayers || this.checkLayers(t), i = 0; i < r; i++) {
            (this.completeLayers || this.elements[i]) && this.elements[i].prepareFrame(t - this.layers[i].st);
          }
          if (this.globalData._mdf) {
            for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), i = r - 1; 0 <= i; i -= 1) {
              (this.completeLayers || this.elements[i]) && this.elements[i].renderFrame();
            }
            !0 !== this.renderConfig.clearCanvas && this.restore();
          }
        }
      }, CanvasRenderer.prototype.buildItem = function (t) {
        var e = this.elements;
        if (!e[t] && 99 != this.layers[t].ty) {
          var i = this.createItem(this.layers[t], this, this.globalData);
          (e[t] = i).initExpressions();
        }
      }, CanvasRenderer.prototype.checkPendingElements = function () {
        for (; this.pendingElements.length;) {
          this.pendingElements.pop().checkParenting();
        }
      }, CanvasRenderer.prototype.hide = function () {
        this.animationItem.container.style.display = "none";
      }, CanvasRenderer.prototype.show = function () {
        this.animationItem.container.style.display = "block";
      }, extendPrototype([BaseRenderer], HybridRenderer), HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRenderer.prototype.checkPendingElements = function () {
        for (; this.pendingElements.length;) {
          this.pendingElements.pop().checkParenting();
        }
      }, HybridRenderer.prototype.appendElementInPos = function (t, e) {
        var i = t.getBaseElement();
        if (i) {
          var r = this.layers[e];
          if (r.ddd && this.supports3d) this.addTo3dContainer(i, e);else if (this.threeDElements) this.addTo3dContainer(i, e);else {
            for (var s, a, n = 0; n < e;) {
              this.elements[n] && !0 !== this.elements[n] && this.elements[n].getBaseElement && (a = this.elements[n], s = (this.layers[n].ddd ? this.getThreeDContainerByPos(n) : a.getBaseElement()) || s), n += 1;
            }
            s ? r.ddd && this.supports3d || this.layerElement.insertBefore(i, s) : r.ddd && this.supports3d || this.layerElement.appendChild(i);
          }
        }
      }, HybridRenderer.prototype.createShape = function (t) {
        return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this);
      }, HybridRenderer.prototype.createText = function (t) {
        return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextElement(t, this.globalData, this);
      }, HybridRenderer.prototype.createCamera = function (t) {
        return this.camera = new HCameraElement(t, this.globalData, this), this.camera;
      }, HybridRenderer.prototype.createImage = function (t) {
        return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this);
      }, HybridRenderer.prototype.createComp = function (t) {
        return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this);
      }, HybridRenderer.prototype.createSolid = function (t) {
        return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this);
      }, HybridRenderer.prototype.createNull = SVGRenderer.prototype.createNull, HybridRenderer.prototype.getThreeDContainerByPos = function (t) {
        for (var e = 0, i = this.threeDElements.length; e < i;) {
          if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
          e += 1;
        }
      }, HybridRenderer.prototype.createThreeDContainer = function (t, e) {
        var i = createTag("div");
        styleDiv(i);
        var r = createTag("div");
        styleDiv(r), "3d" === e && (i.style.width = this.globalData.compSize.w + "px", i.style.height = this.globalData.compSize.h + "px", i.style.transformOrigin = i.style.mozTransformOrigin = i.style.webkitTransformOrigin = "50% 50%", r.style.transform = r.style.webkitTransform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)"), i.appendChild(r);
        var s = {
          container: r,
          perspectiveElem: i,
          startPos: t,
          endPos: t,
          type: e
        };
        return this.threeDElements.push(s), s;
      }, HybridRenderer.prototype.build3dContainers = function () {
        var t,
          e,
          i = this.layers.length,
          r = "";
        for (t = 0; t < i; t += 1) {
          this.layers[t].ddd && 3 !== this.layers[t].ty ? "3d" !== r && (r = "3d", e = this.createThreeDContainer(t, "3d")) : "2d" !== r && (r = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t);
        }
        for (t = (i = this.threeDElements.length) - 1; 0 <= t; t--) {
          this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem);
        }
      }, HybridRenderer.prototype.addTo3dContainer = function (t, e) {
        for (var i = 0, r = this.threeDElements.length; i < r;) {
          if (e <= this.threeDElements[i].endPos) {
            for (var s, a = this.threeDElements[i].startPos; a < e;) {
              this.elements[a] && this.elements[a].getBaseElement && (s = this.elements[a].getBaseElement()), a += 1;
            }
            s ? this.threeDElements[i].container.insertBefore(t, s) : this.threeDElements[i].container.appendChild(t);
            break;
          }
          i += 1;
        }
      }, HybridRenderer.prototype.configAnimation = function (t) {
        var e = createTag("div"),
          i = this.animationItem.wrapper;
        e.style.width = t.w + "px", e.style.height = t.h + "px", styleDiv(this.resizerElem = e), e.style.transformStyle = e.style.webkitTransformStyle = e.style.mozTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), i.appendChild(e), e.style.overflow = "hidden";
        var r = createNS("svg");
        r.setAttribute("width", "1"), r.setAttribute("height", "1"), styleDiv(r), this.resizerElem.appendChild(r);
        var s = createNS("defs");
        r.appendChild(s), this.data = t, this.setupGlobalData(t, r), this.globalData.defs = s, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize();
      }, HybridRenderer.prototype.destroy = function () {
        this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
        var t,
          e = this.layers ? this.layers.length : 0;
        for (t = 0; t < e; t++) {
          this.elements[t].destroy();
        }
        this.elements.length = 0, this.destroyed = !0, this.animationItem = null;
      }, HybridRenderer.prototype.updateContainerSize = function () {
        var t,
          e,
          i,
          r,
          s = this.animationItem.wrapper.offsetWidth,
          a = this.animationItem.wrapper.offsetHeight;
        r = s / a < this.globalData.compSize.w / this.globalData.compSize.h ? (t = s / this.globalData.compSize.w, e = s / this.globalData.compSize.w, i = 0, (a - this.globalData.compSize.h * (s / this.globalData.compSize.w)) / 2) : (t = a / this.globalData.compSize.h, e = a / this.globalData.compSize.h, i = (s - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2, 0), this.resizerElem.style.transform = this.resizerElem.style.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + i + "," + r + ",0,1)";
      }, HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRenderer.prototype.hide = function () {
        this.resizerElem.style.display = "none";
      }, HybridRenderer.prototype.show = function () {
        this.resizerElem.style.display = "block";
      }, HybridRenderer.prototype.initItems = function () {
        if (this.buildAllItems(), this.camera) this.camera.setup();else {
          var t,
            e = this.globalData.compSize.w,
            i = this.globalData.compSize.h,
            r = this.threeDElements.length;
          for (t = 0; t < r; t += 1) {
            this.threeDElements[t].perspectiveElem.style.perspective = this.threeDElements[t].perspectiveElem.style.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2)) + "px";
          }
        }
      }, HybridRenderer.prototype.searchExtraCompositions = function (t) {
        var e,
          i = t.length,
          r = createTag("div");
        for (e = 0; e < i; e += 1) {
          if (t[e].xt) {
            var s = this.createComp(t[e], r, this.globalData.comp, null);
            s.initExpressions(), this.globalData.projectInterface.registerComposition(s);
          }
        }
      }, MaskElement.prototype.getMaskProperty = function (t) {
        return this.viewData[t].prop;
      }, MaskElement.prototype.renderFrame = function (t) {
        var e,
          i = this.element.finalTransform.mat,
          r = this.masksProperties.length;
        for (e = 0; e < r; e++) {
          if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", i.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
            var s = this.storedData[e].expan;
            this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + locationHref + "#" + this.storedData[e].filterId + ")")), s.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v));
          }
        }
      }, MaskElement.prototype.getMaskelement = function () {
        return this.maskElement;
      }, MaskElement.prototype.createLayerSolidPath = function () {
        var t = "M0,0 ";
        return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " ";
      }, MaskElement.prototype.drawPath = function (t, e, i) {
        var r,
          s,
          a = " M" + e.v[0][0] + "," + e.v[0][1];
        for (s = e._length, r = 1; r < s; r += 1) {
          a += " C" + e.o[r - 1][0] + "," + e.o[r - 1][1] + " " + e.i[r][0] + "," + e.i[r][1] + " " + e.v[r][0] + "," + e.v[r][1];
        }
        if (e.c && 1 < s && (a += " C" + e.o[r - 1][0] + "," + e.o[r - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), i.lastPath !== a) {
          var n = "";
          i.elem && (e.c && (n = t.inv ? this.solidPath + a : a), i.elem.setAttribute("d", n)), i.lastPath = a;
        }
      }, MaskElement.prototype.destroy = function () {
        this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null;
      }, HierarchyElement.prototype = {
        initHierarchy: function initHierarchy() {
          this.hierarchy = [], this._isParent = !1, this.checkParenting();
        },
        setHierarchy: function setHierarchy(t) {
          this.hierarchy = t;
        },
        setAsParent: function setAsParent() {
          this._isParent = !0;
        },
        checkParenting: function checkParenting() {
          void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, []);
        }
      }, FrameElement.prototype = {
        initFrame: function initFrame() {
          this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1;
        },
        prepareProperties: function prepareProperties(t, e) {
          var i,
            r = this.dynamicProperties.length;
          for (i = 0; i < r; i += 1) {
            (e || this._isParent && "transform" === this.dynamicProperties[i].propType) && (this.dynamicProperties[i].getValue(), this.dynamicProperties[i]._mdf && (this.globalData._mdf = !0, this._mdf = !0));
          }
        },
        addDynamicProperty: function addDynamicProperty(t) {
          -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t);
        }
      }, TransformElement.prototype = {
        initTransform: function initTransform() {
          this.finalTransform = {
            mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
              o: 0
            },
            _matMdf: !1,
            _opMdf: !1,
            mat: new Matrix()
          }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty;
        },
        renderTransform: function renderTransform() {
          if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
            var t,
              e = this.finalTransform.mat,
              i = 0,
              r = this.hierarchy.length;
            if (!this.finalTransform._matMdf) for (; i < r;) {
              if (this.hierarchy[i].finalTransform.mProp._mdf) {
                this.finalTransform._matMdf = !0;
                break;
              }
              i += 1;
            }
            if (this.finalTransform._matMdf) for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), i = 0; i < r; i += 1) {
              t = this.hierarchy[i].finalTransform.mProp.v.props, e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15]);
            }
          }
        },
        globalToLocal: function globalToLocal(t) {
          var e = [];
          e.push(this.finalTransform);
          for (var i = !0, r = this.comp; i;) {
            r.finalTransform ? (r.data.hasMask && e.splice(0, 0, r.finalTransform), r = r.comp) : i = !1;
          }
          var s,
            a,
            n = e.length;
          for (s = 0; s < n; s += 1) {
            a = e[s].mat.applyToPointArray(0, 0, 0), t = [t[0] - a[0], t[1] - a[1], 0];
          }
          return t;
        },
        mHelper: new Matrix()
      }, RenderableElement.prototype = {
        initRenderable: function initRenderable() {
          this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = [];
        },
        addRenderableComponent: function addRenderableComponent(t) {
          -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t);
        },
        removeRenderableComponent: function removeRenderableComponent(t) {
          -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1);
        },
        prepareRenderableFrame: function prepareRenderableFrame(t) {
          this.checkLayerLimits(t);
        },
        checkTransparency: function checkTransparency() {
          this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show());
        },
        checkLayerLimits: function checkLayerLimits(t) {
          this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide());
        },
        renderRenderable: function renderRenderable() {
          var t,
            e = this.renderableComponents.length;
          for (t = 0; t < e; t += 1) {
            this.renderableComponents[t].renderFrame(this._isFirstFrame);
          }
        },
        sourceRectAtTime: function sourceRectAtTime() {
          return {
            top: 0,
            left: 0,
            width: 100,
            height: 100
          };
        },
        getLayerSize: function getLayerSize() {
          return 5 === this.data.ty ? {
            w: this.data.textData.width,
            h: this.data.textData.height
          } : {
            w: this.data.width,
            h: this.data.height
          };
        }
      }, extendPrototype([RenderableElement, createProxyFunction({
        initElement: function initElement(t, e, i) {
          this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide();
        },
        hide: function hide() {
          this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0);
        },
        show: function show() {
          this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0);
        },
        renderFrame: function renderFrame() {
          this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1));
        },
        renderInnerContent: function renderInnerContent() {},
        prepareFrame: function prepareFrame(t) {
          this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency();
        },
        destroy: function destroy() {
          this.innerElem = null, this.destroyBaseElement();
        }
      })], RenderableDOMElement), SVGStyleData.prototype.reset = function () {
        this.d = "", this._mdf = !1;
      }, SVGShapeData.prototype.setAsAnimated = function () {
        this._isAnimated = !0;
      }, extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), SVGGradientFillStyleData.prototype.initGradientData = function (t, e, i) {
        this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || {
          k: 0
        }, 0, .01, this), this.a = PropertyFactory.getProp(t, e.a || {
          k: 0
        }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = i, this.stops = [], this.setGradientData(i.pElem, e), this.setGradientOpacity(e, i), this._isAnimated = !!this._isAnimated;
      }, SVGGradientFillStyleData.prototype.setGradientData = function (t, e) {
        var i = createElementID(),
          r = createNS(1 === e.t ? "linearGradient" : "radialGradient");
        r.setAttribute("id", i), r.setAttribute("spreadMethod", "pad"), r.setAttribute("gradientUnits", "userSpaceOnUse");
        var s,
          a,
          n,
          o = [];
        for (n = 4 * e.g.p, a = 0; a < n; a += 4) {
          s = createNS("stop"), r.appendChild(s), o.push(s);
        }
        t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + locationHref + "#" + i + ")"), this.gf = r, this.cst = o;
      }, SVGGradientFillStyleData.prototype.setGradientOpacity = function (t, e) {
        if (this.g._hasOpacity && !this.g._collapsable) {
          var i,
            r,
            s,
            a = createNS("mask"),
            n = createNS("path");
          a.appendChild(n);
          var o = createElementID(),
            h = createElementID();
          a.setAttribute("id", h);
          var l = createNS(1 === t.t ? "linearGradient" : "radialGradient");
          l.setAttribute("id", o), l.setAttribute("spreadMethod", "pad"), l.setAttribute("gradientUnits", "userSpaceOnUse"), s = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
          var p = this.stops;
          for (r = 4 * t.g.p; r < s; r += 2) {
            (i = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), l.appendChild(i), p.push(i);
          }
          n.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + locationHref + "#" + o + ")"), this.of = l, this.ms = a, this.ost = p, this.maskId = h, e.msElem = n;
        }
      }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
      var SVGElementsRenderer = function () {
        var y = new Matrix(),
          g = new Matrix();
        function e(t, e, i) {
          (i || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (i || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS());
        }
        function i(t, e, i) {
          var r,
            s,
            a,
            n,
            o,
            h,
            l,
            p,
            m,
            f,
            c,
            d = e.styles.length,
            u = e.lvl;
          for (h = 0; h < d; h += 1) {
            if (n = e.sh._mdf || i, e.styles[h].lvl < u) {
              for (p = g.reset(), f = u - e.styles[h].lvl, c = e.transformers.length - 1; !n && 0 < f;) {
                n = e.transformers[c].mProps._mdf || n, f--, c--;
              }
              if (n) for (f = u - e.styles[h].lvl, c = e.transformers.length - 1; 0 < f;) {
                m = e.transformers[c].mProps.v.props, p.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), f--, c--;
              }
            } else p = y;
            if (s = (l = e.sh.paths)._length, n) {
              for (a = "", r = 0; r < s; r += 1) {
                (o = l.shapes[r]) && o._length && (a += buildShapeString(o, o._length, o.c, p));
              }
              e.caches[h] = a;
            } else a = e.caches[h];
            e.styles[h].d += !0 === t.hd ? "" : a, e.styles[h]._mdf = n || e.styles[h]._mdf;
          }
        }
        function r(t, e, i) {
          var r = e.style;
          (e.c._mdf || i) && r.pElem.setAttribute("fill", "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o._mdf || i) && r.pElem.setAttribute("fill-opacity", e.o.v);
        }
        function s(t, e, i) {
          a(t, e, i), n(t, e, i);
        }
        function a(t, e, i) {
          var r,
            s,
            a,
            n,
            o,
            h = e.gf,
            l = e.g._hasOpacity,
            p = e.s.v,
            m = e.e.v;
          if (e.o._mdf || i) {
            var f = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
            e.style.pElem.setAttribute(f, e.o.v);
          }
          if (e.s._mdf || i) {
            var c = 1 === t.t ? "x1" : "cx",
              d = "x1" === c ? "y1" : "cy";
            h.setAttribute(c, p[0]), h.setAttribute(d, p[1]), l && !e.g._collapsable && (e.of.setAttribute(c, p[0]), e.of.setAttribute(d, p[1]));
          }
          if (e.g._cmdf || i) {
            r = e.cst;
            var u = e.g.c;
            for (a = r.length, s = 0; s < a; s += 1) {
              (n = r[s]).setAttribute("offset", u[4 * s] + "%"), n.setAttribute("stop-color", "rgb(" + u[4 * s + 1] + "," + u[4 * s + 2] + "," + u[4 * s + 3] + ")");
            }
          }
          if (l && (e.g._omdf || i)) {
            var y = e.g.o;
            for (a = (r = e.g._collapsable ? e.cst : e.ost).length, s = 0; s < a; s += 1) {
              n = r[s], e.g._collapsable || n.setAttribute("offset", y[2 * s] + "%"), n.setAttribute("stop-opacity", y[2 * s + 1]);
            }
          }
          if (1 === t.t) (e.e._mdf || i) && (h.setAttribute("x2", m[0]), h.setAttribute("y2", m[1]), l && !e.g._collapsable && (e.of.setAttribute("x2", m[0]), e.of.setAttribute("y2", m[1])));else if ((e.s._mdf || e.e._mdf || i) && (o = Math.sqrt(Math.pow(p[0] - m[0], 2) + Math.pow(p[1] - m[1], 2)), h.setAttribute("r", o), l && !e.g._collapsable && e.of.setAttribute("r", o)), e.e._mdf || e.h._mdf || e.a._mdf || i) {
            o || (o = Math.sqrt(Math.pow(p[0] - m[0], 2) + Math.pow(p[1] - m[1], 2)));
            var g = Math.atan2(m[1] - p[1], m[0] - p[0]),
              v = o * (1 <= e.h.v ? .99 : e.h.v <= -1 ? -.99 : e.h.v),
              b = Math.cos(g + e.a.v) * v + p[0],
              E = Math.sin(g + e.a.v) * v + p[1];
            h.setAttribute("fx", b), h.setAttribute("fy", E), l && !e.g._collapsable && (e.of.setAttribute("fx", b), e.of.setAttribute("fy", E));
          }
        }
        function n(t, e, i) {
          var r = e.style,
            s = e.d;
          s && (s._mdf || i) && s.dashStr && (r.pElem.setAttribute("stroke-dasharray", s.dashStr), r.pElem.setAttribute("stroke-dashoffset", s.dashoffset[0])), e.c && (e.c._mdf || i) && r.pElem.setAttribute("stroke", "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o._mdf || i) && r.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || i) && (r.pElem.setAttribute("stroke-width", e.w.v), r.msElem && r.msElem.setAttribute("stroke-width", e.w.v));
        }
        return {
          createRenderFunction: function createRenderFunction(t) {
            t.ty;
            switch (t.ty) {
              case "fl":
                return r;
              case "gf":
                return a;
              case "gs":
                return s;
              case "st":
                return n;
              case "sh":
              case "el":
              case "rc":
              case "sr":
                return i;
              case "tr":
                return e;
            }
          }
        };
      }();
      function ShapeTransformManager() {
        this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0;
      }
      function CVShapeData(t, e, i, r) {
        this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
        var s = 4;
        "rc" == e.ty ? s = 5 : "el" == e.ty ? s = 6 : "sr" == e.ty && (s = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, s, t);
        var a,
          n,
          o = i.length;
        for (a = 0; a < o; a += 1) {
          i[a].closed || (n = {
            transforms: r.addTransformSequence(i[a].transforms),
            trNodes: []
          }, this.styledShapes.push(n), i[a].elements.push(n));
        }
      }
      function BaseElement() {}
      function NullElement(t, e, i) {
        this.initFrame(), this.initBaseData(t, e, i), this.initFrame(), this.initTransform(t, e, i), this.initHierarchy();
      }
      function SVGBaseElement() {}
      function IShapeElement() {}
      function ITextElement() {}
      function ICompElement() {}
      function IImageElement(t, e, i) {
        this.assetData = e.getAssetData(t.refId), this.initElement(t, e, i), this.sourceRect = {
          top: 0,
          left: 0,
          width: this.assetData.w,
          height: this.assetData.h
        };
      }
      function ISolidElement(t, e, i) {
        this.initElement(t, e, i);
      }
      function AudioElement(t, e, i) {
        this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, i), this._isPlaying = !1, this._canPlay = !1;
        var r = this.globalData.getAssetsPath(this.assetData);
        this.audio = this.globalData.audioController.createAudio(r), this._currentTime = 0, this.globalData.audioController.addAudio(this), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
          _placeholder: !0
        };
      }
      function SVGCompElement(t, e, i) {
        this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
          _placeholder: !0
        };
      }
      function SVGTextElement(t, e, i) {
        this.textSpans = [], this.renderType = "svg", this.initElement(t, e, i);
      }
      function SVGShapeElement(t, e, i) {
        this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, i), this.prevViewData = [];
      }
      function SVGTintFilter(t, e) {
        this.filterManager = e;
        var i = createNS("feColorMatrix");
        if (i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "linearRGB"), i.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), i.setAttribute("result", "f1"), t.appendChild(i), (i = createNS("feColorMatrix")).setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), i.setAttribute("result", "f2"), t.appendChild(i), this.matrixFilter = i, 100 !== e.effectElements[2].p.v || e.effectElements[2].p.k) {
          var r,
            s = createNS("feMerge");
          t.appendChild(s), (r = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), s.appendChild(r), (r = createNS("feMergeNode")).setAttribute("in", "f2"), s.appendChild(r);
        }
      }
      function SVGFillFilter(t, e) {
        this.filterManager = e;
        var i = createNS("feColorMatrix");
        i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), t.appendChild(i), this.matrixFilter = i;
      }
      function SVGGaussianBlurEffect(t, e) {
        t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
        var i = createNS("feGaussianBlur");
        t.appendChild(i), this.feGaussianBlur = i;
      }
      function SVGStrokeEffect(t, e) {
        this.initialized = !1, this.filterManager = e, this.elem = t, this.paths = [];
      }
      function SVGTritoneFilter(t, e) {
        this.filterManager = e;
        var i = createNS("feColorMatrix");
        i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "linearRGB"), i.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), i.setAttribute("result", "f1"), t.appendChild(i);
        var r = createNS("feComponentTransfer");
        r.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(r), this.matrixFilter = r;
        var s = createNS("feFuncR");
        s.setAttribute("type", "table"), r.appendChild(s), this.feFuncR = s;
        var a = createNS("feFuncG");
        a.setAttribute("type", "table"), r.appendChild(a), this.feFuncG = a;
        var n = createNS("feFuncB");
        n.setAttribute("type", "table"), r.appendChild(n), this.feFuncB = n;
      }
      function SVGProLevelsFilter(t, e) {
        this.filterManager = e;
        var i = this.filterManager.effectElements,
          r = createNS("feComponentTransfer");
        (i[10].p.k || 0 !== i[10].p.v || i[11].p.k || 1 !== i[11].p.v || i[12].p.k || 1 !== i[12].p.v || i[13].p.k || 0 !== i[13].p.v || i[14].p.k || 1 !== i[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", r)), (i[17].p.k || 0 !== i[17].p.v || i[18].p.k || 1 !== i[18].p.v || i[19].p.k || 1 !== i[19].p.v || i[20].p.k || 0 !== i[20].p.v || i[21].p.k || 1 !== i[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", r)), (i[24].p.k || 0 !== i[24].p.v || i[25].p.k || 1 !== i[25].p.v || i[26].p.k || 1 !== i[26].p.v || i[27].p.k || 0 !== i[27].p.v || i[28].p.k || 1 !== i[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", r)), (i[31].p.k || 0 !== i[31].p.v || i[32].p.k || 1 !== i[32].p.v || i[33].p.k || 1 !== i[33].p.v || i[34].p.k || 0 !== i[34].p.v || i[35].p.k || 1 !== i[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", r)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (r.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(r), r = createNS("feComponentTransfer")), (i[3].p.k || 0 !== i[3].p.v || i[4].p.k || 1 !== i[4].p.v || i[5].p.k || 1 !== i[5].p.v || i[6].p.k || 0 !== i[6].p.v || i[7].p.k || 1 !== i[7].p.v) && (r.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(r), this.feFuncRComposed = this.createFeFunc("feFuncR", r), this.feFuncGComposed = this.createFeFunc("feFuncG", r), this.feFuncBComposed = this.createFeFunc("feFuncB", r));
      }
      function SVGDropShadowEffect(t, e) {
        var i = e.container.globalData.renderConfig.filterSize;
        t.setAttribute("x", i.x), t.setAttribute("y", i.y), t.setAttribute("width", i.width), t.setAttribute("height", i.height), this.filterManager = e;
        var r = createNS("feGaussianBlur");
        r.setAttribute("in", "SourceAlpha"), r.setAttribute("result", "drop_shadow_1"), r.setAttribute("stdDeviation", "0"), this.feGaussianBlur = r, t.appendChild(r);
        var s = createNS("feOffset");
        s.setAttribute("dx", "25"), s.setAttribute("dy", "0"), s.setAttribute("in", "drop_shadow_1"), s.setAttribute("result", "drop_shadow_2"), this.feOffset = s, t.appendChild(s);
        var a = createNS("feFlood");
        a.setAttribute("flood-color", "#00ff00"), a.setAttribute("flood-opacity", "1"), a.setAttribute("result", "drop_shadow_3"), this.feFlood = a, t.appendChild(a);
        var n = createNS("feComposite");
        n.setAttribute("in", "drop_shadow_3"), n.setAttribute("in2", "drop_shadow_2"), n.setAttribute("operator", "in"), n.setAttribute("result", "drop_shadow_4"), t.appendChild(n);
        var o,
          h = createNS("feMerge");
        t.appendChild(h), o = createNS("feMergeNode"), h.appendChild(o), (o = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), this.feMergeNode = o, this.feMerge = h, this.originalNodeAdded = !1, h.appendChild(o);
      }
      ShapeTransformManager.prototype = {
        addTransformSequence: function addTransformSequence(t) {
          var e,
            i = t.length,
            r = "_";
          for (e = 0; e < i; e += 1) {
            r += t[e].transform.key + "_";
          }
          var s = this.sequences[r];
          return s || (s = {
            transforms: [].concat(t),
            finalTransform: new Matrix(),
            _mdf: !1
          }, this.sequences[r] = s, this.sequenceList.push(s)), s;
        },
        processSequence: function processSequence(t, e) {
          for (var i, r = 0, s = t.transforms.length, a = e; r < s && !e;) {
            if (t.transforms[r].transform.mProps._mdf) {
              a = !0;
              break;
            }
            r += 1;
          }
          if (a) for (t.finalTransform.reset(), r = s - 1; 0 <= r; r -= 1) {
            i = t.transforms[r].transform.mProps.v.props, t.finalTransform.transform(i[0], i[1], i[2], i[3], i[4], i[5], i[6], i[7], i[8], i[9], i[10], i[11], i[12], i[13], i[14], i[15]);
          }
          t._mdf = a;
        },
        processSequences: function processSequences(t) {
          var e,
            i = this.sequenceList.length;
          for (e = 0; e < i; e += 1) {
            this.processSequence(this.sequenceList[e], t);
          }
        },
        getNewKey: function getNewKey() {
          return "_" + this.transform_key_count++;
        }
      }, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, BaseElement.prototype = {
        checkMasks: function checkMasks() {
          if (!this.data.hasMask) return !1;
          for (var t = 0, e = this.data.masksProperties.length; t < e;) {
            if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
            t += 1;
          }
          return !1;
        },
        initExpressions: function initExpressions() {
          this.layerInterface = LayerExpressionInterface(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
          var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
          this.layerInterface.registerEffectsInterface(t), 0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this), this.layerInterface.text = this.layerInterface.textInterface);
        },
        setBlendMode: function setBlendMode() {
          var t = getBlendMode(this.data.bm);
          (this.baseElement || this.layerElement).style["mix-blend-mode"] = t;
        },
        initBaseData: function initBaseData(t, e, i) {
          this.globalData = e, this.comp = i, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties);
        },
        getType: function getType() {
          return this.type;
        },
        sourceRectAtTime: function sourceRectAtTime() {}
      }, NullElement.prototype.prepareFrame = function (t) {
        this.prepareProperties(t, !0);
      }, NullElement.prototype.renderFrame = function () {}, NullElement.prototype.getBaseElement = function () {
        return null;
      }, NullElement.prototype.destroy = function () {}, NullElement.prototype.sourceRectAtTime = function () {}, NullElement.prototype.hide = function () {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), SVGBaseElement.prototype = {
        initRendererElement: function initRendererElement() {
          this.layerElement = createNS("g");
        },
        createContainerElements: function createContainerElements() {
          this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
          var t,
            e,
            i,
            r = null;
          if (this.data.td) {
            if (3 == this.data.td || 1 == this.data.td) {
              var s = createNS("mask");
              s.setAttribute("id", this.layerId), s.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"), s.appendChild(this.layerElement), r = s, this.globalData.defs.appendChild(s), featureSupport.maskType || 1 != this.data.td || (s.setAttribute("mask-type", "luminance"), t = createElementID(), e = filtersFactory.createFilter(t), this.globalData.defs.appendChild(e), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (i = createNS("g")).appendChild(this.layerElement), r = i, s.appendChild(i), i.setAttribute("filter", "url(" + locationHref + "#" + t + ")"));
            } else if (2 == this.data.td) {
              var a = createNS("mask");
              a.setAttribute("id", this.layerId), a.setAttribute("mask-type", "alpha");
              var n = createNS("g");
              a.appendChild(n), t = createElementID(), e = filtersFactory.createFilter(t);
              var o = createNS("feComponentTransfer");
              o.setAttribute("in", "SourceGraphic"), e.appendChild(o);
              var h = createNS("feFuncA");
              h.setAttribute("type", "table"), h.setAttribute("tableValues", "1.0 0.0"), o.appendChild(h), this.globalData.defs.appendChild(e);
              var l = createNS("rect");
              l.setAttribute("width", this.comp.data.w), l.setAttribute("height", this.comp.data.h), l.setAttribute("x", "0"), l.setAttribute("y", "0"), l.setAttribute("fill", "#ffffff"), l.setAttribute("opacity", "0"), n.setAttribute("filter", "url(" + locationHref + "#" + t + ")"), n.appendChild(l), n.appendChild(this.layerElement), r = n, featureSupport.maskType || (a.setAttribute("mask-type", "luminance"), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), i = createNS("g"), n.appendChild(l), i.appendChild(this.layerElement), r = i, n.appendChild(i)), this.globalData.defs.appendChild(a);
            }
          } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), r = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
          if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
            var p = createNS("clipPath"),
              m = createNS("path");
            m.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
            var f = createElementID();
            if (p.setAttribute("id", f), p.appendChild(m), this.globalData.defs.appendChild(p), this.checkMasks()) {
              var c = createNS("g");
              c.setAttribute("clip-path", "url(" + locationHref + "#" + f + ")"), c.appendChild(this.layerElement), this.transformedElement = c, r ? r.appendChild(this.transformedElement) : this.baseElement = this.transformedElement;
            } else this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + f + ")");
          }
          0 !== this.data.bm && this.setBlendMode();
        },
        renderElement: function renderElement() {
          this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v);
        },
        destroyBaseElement: function destroyBaseElement() {
          this.layerElement = null, this.matteElement = null, this.maskManager.destroy();
        },
        getBaseElement: function getBaseElement() {
          return this.data.hd ? null : this.baseElement;
        },
        createRenderableComponents: function createRenderableComponents() {
          this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this);
        },
        setMatte: function setMatte(t) {
          this.matteElement && this.matteElement.setAttribute("mask", "url(" + locationHref + "#" + t + ")");
        }
      }, IShapeElement.prototype = {
        addShapeToModifiers: function addShapeToModifiers(t) {
          var e,
            i = this.shapeModifiers.length;
          for (e = 0; e < i; e += 1) {
            this.shapeModifiers[e].addShape(t);
          }
        },
        isShapeInAnimatedModifiers: function isShapeInAnimatedModifiers(t) {
          for (var e = this.shapeModifiers.length; 0 < e;) {
            if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
          }
          return !1;
        },
        renderModifiers: function renderModifiers() {
          if (this.shapeModifiers.length) {
            var t,
              e = this.shapes.length;
            for (t = 0; t < e; t += 1) {
              this.shapes[t].sh.reset();
            }
            for (t = (e = this.shapeModifiers.length) - 1; 0 <= t; t -= 1) {
              this.shapeModifiers[t].processShapes(this._isFirstFrame);
            }
          }
        },
        lcEnum: {
          1: "butt",
          2: "round",
          3: "square"
        },
        ljEnum: {
          1: "miter",
          2: "round",
          3: "bevel"
        },
        searchProcessedElement: function searchProcessedElement(t) {
          for (var e = this.processedElements, i = 0, r = e.length; i < r;) {
            if (e[i].elem === t) return e[i].pos;
            i += 1;
          }
          return 0;
        },
        addProcessedElement: function addProcessedElement(t, e) {
          for (var i = this.processedElements, r = i.length; r;) {
            if (i[r -= 1].elem === t) return void (i[r].pos = e);
          }
          i.push(new ProcessedElement(t, e));
        },
        prepareFrame: function prepareFrame(t) {
          this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange);
        }
      }, ITextElement.prototype.initElement = function (t, e, i) {
        this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, i), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties);
      }, ITextElement.prototype.prepareFrame = function (t) {
        this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1);
      }, ITextElement.prototype.createPathShape = function (t, e) {
        var i,
          r,
          s = e.length,
          a = "";
        for (i = 0; i < s; i += 1) {
          r = e[i].ks.k, a += buildShapeString(r, r.i.length, !0, t);
        }
        return a;
      }, ITextElement.prototype.updateDocumentData = function (t, e) {
        this.textProperty.updateDocumentData(t, e);
      }, ITextElement.prototype.canResizeFont = function (t) {
        this.textProperty.canResizeFont(t);
      }, ITextElement.prototype.setMinimumFontSize = function (t) {
        this.textProperty.setMinimumFontSize(t);
      }, ITextElement.prototype.applyTextPropertiesToMatrix = function (t, e, i, r, s) {
        switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
          case 1:
            e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0);
            break;
          case 2:
            e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0);
        }
        e.translate(r, s, 0);
      }, ITextElement.prototype.buildColor = function (t) {
        return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")";
      }, ITextElement.prototype.emptyProp = new LetterProps(), ITextElement.prototype.destroy = function () {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function (t, e, i) {
        this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide();
      }, ICompElement.prototype.prepareFrame = function (t) {
        if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
          if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;else {
            var e = this.tm.v;
            e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e;
          }
          var i,
            r = this.elements.length;
          for (this.completeLayers || this.checkLayers(this.renderedFrame), i = r - 1; 0 <= i; i -= 1) {
            (this.completeLayers || this.elements[i]) && (this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st), this.elements[i]._mdf && (this._mdf = !0));
          }
        }
      }, ICompElement.prototype.renderInnerContent = function () {
        var t,
          e = this.layers.length;
        for (t = 0; t < e; t += 1) {
          (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
        }
      }, ICompElement.prototype.setElements = function (t) {
        this.elements = t;
      }, ICompElement.prototype.getElements = function () {
        return this.elements;
      }, ICompElement.prototype.destroyElements = function () {
        var t,
          e = this.layers.length;
        for (t = 0; t < e; t += 1) {
          this.elements[t] && this.elements[t].destroy();
        }
      }, ICompElement.prototype.destroy = function () {
        this.destroyElements(), this.destroyBaseElement();
      }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function () {
        var t = this.globalData.getAssetsPath(this.assetData);
        this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem);
      }, IImageElement.prototype.sourceRectAtTime = function () {
        return this.sourceRect;
      }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function () {
        var t = createNS("rect");
        t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t);
      }, AudioElement.prototype.prepareFrame = function (t) {
        if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr;else {
          var e = this.tm.v;
          this._currentTime = e;
        }
      }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function () {
        this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || .1 < Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek())) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0));
      }, AudioElement.prototype.show = function () {}, AudioElement.prototype.hide = function () {
        this.audio.pause(), this._isPlaying = !1;
      }, AudioElement.prototype.pause = function () {
        this.audio.pause(), this._isPlaying = !1, this._canPlay = !1;
      }, AudioElement.prototype.resume = function () {
        this._canPlay = !0;
      }, AudioElement.prototype.setRate = function (t) {
        this.audio.rate(t);
      }, AudioElement.prototype.volume = function (t) {
        this.audio.volume(t);
      }, AudioElement.prototype.getBaseElement = function () {
        return null;
      }, AudioElement.prototype.destroy = function () {}, AudioElement.prototype.sourceRectAtTime = function () {}, AudioElement.prototype.initExpressions = function () {}, extendPrototype([SVGRenderer, ICompElement, SVGBaseElement], SVGCompElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextElement), SVGTextElement.prototype.createContent = function () {
        this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"));
      }, SVGTextElement.prototype.buildTextContents = function (t) {
        for (var e = 0, i = t.length, r = [], s = ""; e < i;) {
          t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (r.push(s), s = "") : s += t[e], e += 1;
        }
        return r.push(s), r;
      }, SVGTextElement.prototype.buildNewText = function () {
        var t,
          e,
          i = this.textProperty.currentData;
        this.renderedLetters = createSizedArray(i ? i.l.length : 0), i.fc ? this.layerElement.setAttribute("fill", this.buildColor(i.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), i.sc && (this.layerElement.setAttribute("stroke", this.buildColor(i.sc)), this.layerElement.setAttribute("stroke-width", i.sw)), this.layerElement.setAttribute("font-size", i.finalSize);
        var r = this.globalData.fontManager.getFontByName(i.f);
        if (r.fClass) this.layerElement.setAttribute("class", r.fClass);else {
          this.layerElement.setAttribute("font-family", r.fFamily);
          var s = i.fWeight,
            a = i.fStyle;
          this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", s);
        }
        this.layerElement.setAttribute("aria-label", i.t);
        var n,
          o = i.l || [],
          h = !!this.globalData.fontManager.chars;
        e = o.length;
        var l,
          p = this.mHelper,
          m = "",
          f = this.data.singleShape,
          c = 0,
          d = 0,
          u = !0,
          y = i.tr / 1e3 * i.finalSize;
        if (!f || h || i.sz) {
          var g,
            v,
            b = this.textSpans.length;
          for (t = 0; t < e; t += 1) {
            h && f && 0 !== t || (n = t < b ? this.textSpans[t] : createNS(h ? "path" : "text"), b <= t && (n.setAttribute("stroke-linecap", "butt"), n.setAttribute("stroke-linejoin", "round"), n.setAttribute("stroke-miterlimit", "4"), this.textSpans[t] = n, this.layerElement.appendChild(n)), n.style.display = "inherit"), p.reset(), p.scale(i.finalSize / 100, i.finalSize / 100), f && (o[t].n && (c = -y, d += i.yOffset, d += u ? 1 : 0, u = !1), this.applyTextPropertiesToMatrix(i, p, o[t].line, c, d), c += o[t].l || 0, c += y), h ? (l = (g = (v = this.globalData.fontManager.getCharData(i.finalText[t], r.fStyle, this.globalData.fontManager.getFontByName(i.f).fFamily)) && v.data || {}).shapes ? g.shapes[0].it : [], f ? m += this.createPathShape(p, l) : n.setAttribute("d", this.createPathShape(p, l))) : (f && n.setAttribute("transform", "translate(" + p.props[12] + "," + p.props[13] + ")"), n.textContent = o[t].val, n.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"));
          }
          f && n && n.setAttribute("d", m);
        } else {
          var E = this.textContainer,
            x = "start";
          switch (i.j) {
            case 1:
              x = "end";
              break;
            case 2:
              x = "middle";
          }
          E.setAttribute("text-anchor", x), E.setAttribute("letter-spacing", y);
          var P = this.buildTextContents(i.finalText);
          for (e = P.length, d = i.ps ? i.ps[1] + i.ascent : 0, t = 0; t < e; t += 1) {
            (n = this.textSpans[t] || createNS("tspan")).textContent = P[t], n.setAttribute("x", 0), n.setAttribute("y", d), n.style.display = "inherit", E.appendChild(n), this.textSpans[t] = n, d += i.finalLineHeight;
          }
          this.layerElement.appendChild(E);
        }
        for (; t < this.textSpans.length;) {
          this.textSpans[t].style.display = "none", t += 1;
        }
        this._sizeChanged = !0;
      }, SVGTextElement.prototype.sourceRectAtTime = function (t) {
        if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
          this._sizeChanged = !1;
          var e = this.layerElement.getBBox();
          this.bbox = {
            top: e.y,
            left: e.x,
            width: e.width,
            height: e.height
          };
        }
        return this.bbox;
      }, SVGTextElement.prototype.renderInnerContent = function () {
        if (!this.data.singleShape && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
          var t, e;
          this._sizeChanged = !0;
          var i,
            r,
            s = this.textAnimator.renderedLetters,
            a = this.textProperty.currentData.l;
          for (e = a.length, t = 0; t < e; t += 1) {
            a[t].n || (i = s[t], r = this.textSpans[t], i._mdf.m && r.setAttribute("transform", i.m), i._mdf.o && r.setAttribute("opacity", i.o), i._mdf.sw && r.setAttribute("stroke-width", i.sw), i._mdf.sc && r.setAttribute("stroke", i.sc), i._mdf.fc && r.setAttribute("fill", i.fc));
          }
        }
      }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function () {}, SVGShapeElement.prototype.identityMatrix = new Matrix(), SVGShapeElement.prototype.buildExpressionInterface = function () {}, SVGShapeElement.prototype.createContent = function () {
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes();
      }, SVGShapeElement.prototype.filterUniqueShapes = function () {
        var t,
          e,
          i,
          r,
          s = this.shapes.length,
          a = this.stylesList.length,
          n = [],
          o = !1;
        for (i = 0; i < a; i += 1) {
          for (r = this.stylesList[i], o = !1, t = n.length = 0; t < s; t += 1) {
            -1 !== (e = this.shapes[t]).styles.indexOf(r) && (n.push(e), o = e._isAnimated || o);
          }
          1 < n.length && o && this.setShapesAsAnimated(n);
        }
      }, SVGShapeElement.prototype.setShapesAsAnimated = function (t) {
        var e,
          i = t.length;
        for (e = 0; e < i; e += 1) {
          t[e].setAsAnimated();
        }
      }, SVGShapeElement.prototype.createStyleElement = function (t, e) {
        var i,
          r = new SVGStyleData(t, e),
          s = r.pElem;
        if ("st" === t.ty) i = new SVGStrokeStyleData(this, t, r);else if ("fl" === t.ty) i = new SVGFillStyleData(this, t, r);else if ("gf" === t.ty || "gs" === t.ty) {
          i = new ("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, r), this.globalData.defs.appendChild(i.gf), i.maskId && (this.globalData.defs.appendChild(i.ms), this.globalData.defs.appendChild(i.of), s.setAttribute("mask", "url(" + locationHref + "#" + i.maskId + ")"));
        }
        return "st" !== t.ty && "gs" !== t.ty || (s.setAttribute("stroke-linecap", this.lcEnum[t.lc] || "round"), s.setAttribute("stroke-linejoin", this.ljEnum[t.lj] || "round"), s.setAttribute("fill-opacity", "0"), 1 === t.lj && s.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && s.setAttribute("fill-rule", "evenodd"), t.ln && s.setAttribute("id", t.ln), t.cl && s.setAttribute("class", t.cl), t.bm && (s.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(r), this.addToAnimatedContents(t, i), i;
      }, SVGShapeElement.prototype.createGroupElement = function (t) {
        var e = new ShapeGroupData();
        return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e;
      }, SVGShapeElement.prototype.createTransformElement = function (t, e) {
        var i = TransformPropertyFactory.getTransformProperty(this, t, this),
          r = new SVGTransformData(i, i.o, e);
        return this.addToAnimatedContents(t, r), r;
      }, SVGShapeElement.prototype.createShapeElement = function (t, e, i) {
        var r = 4;
        "rc" === t.ty ? r = 5 : "el" === t.ty ? r = 6 : "sr" === t.ty && (r = 7);
        var s = new SVGShapeData(e, i, ShapePropertyFactory.getShapeProp(this, t, r, this));
        return this.shapes.push(s), this.addShapeToModifiers(s), this.addToAnimatedContents(t, s), s;
      }, SVGShapeElement.prototype.addToAnimatedContents = function (t, e) {
        for (var i = 0, r = this.animatedContents.length; i < r;) {
          if (this.animatedContents[i].element === e) return;
          i += 1;
        }
        this.animatedContents.push({
          fn: SVGElementsRenderer.createRenderFunction(t),
          element: e,
          data: t
        });
      }, SVGShapeElement.prototype.setElementStyles = function (t) {
        var e,
          i = t.styles,
          r = this.stylesList.length;
        for (e = 0; e < r; e += 1) {
          this.stylesList[e].closed || i.push(this.stylesList[e]);
        }
      }, SVGShapeElement.prototype.reloadShapes = function () {
        this._isFirstFrame = !0;
        var t,
          e = this.itemsData.length;
        for (t = 0; t < e; t += 1) {
          this.prevViewData[t] = this.itemsData[t];
        }
        for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) {
          this.dynamicProperties[t].getValue();
        }
        this.renderModifiers();
      }, SVGShapeElement.prototype.searchShapes = function (t, e, i, r, s, a, n) {
        var o,
          h,
          l,
          p,
          m,
          f,
          c = [].concat(a),
          d = t.length - 1,
          u = [],
          y = [];
        for (o = d; 0 <= o; o -= 1) {
          if ((f = this.searchProcessedElement(t[o])) ? e[o] = i[f - 1] : t[o]._render = n, "fl" == t[o].ty || "st" == t[o].ty || "gf" == t[o].ty || "gs" == t[o].ty) f ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], s), t[o]._render && r.appendChild(e[o].style.pElem), u.push(e[o].style);else if ("gr" == t[o].ty) {
            if (f) for (l = e[o].it.length, h = 0; h < l; h += 1) {
              e[o].prevViewData[h] = e[o].it[h];
            } else e[o] = this.createGroupElement(t[o]);
            this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, s + 1, c, n), t[o]._render && r.appendChild(e[o].gr);
          } else "tr" == t[o].ty ? (f || (e[o] = this.createTransformElement(t[o], r)), p = e[o].transform, c.push(p)) : "sh" == t[o].ty || "rc" == t[o].ty || "el" == t[o].ty || "sr" == t[o].ty ? (f || (e[o] = this.createShapeElement(t[o], c, s)), this.setElementStyles(e[o])) : "tm" == t[o].ty || "rd" == t[o].ty || "ms" == t[o].ty || "pb" == t[o].ty ? (f ? (m = e[o]).closed = !1 : ((m = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]), e[o] = m, this.shapeModifiers.push(m)), y.push(m)) : "rp" == t[o].ty && (f ? (m = e[o]).closed = !0 : (m = ShapeModifiers.getModifier(t[o].ty), (e[o] = m).init(this, t, o, e), this.shapeModifiers.push(m), n = !1), y.push(m));
          this.addProcessedElement(t[o], o + 1);
        }
        for (d = u.length, o = 0; o < d; o += 1) {
          u[o].closed = !0;
        }
        for (d = y.length, o = 0; o < d; o += 1) {
          y[o].closed = !0;
        }
      }, SVGShapeElement.prototype.renderInnerContent = function () {
        this.renderModifiers();
        var t,
          e = this.stylesList.length;
        for (t = 0; t < e; t += 1) {
          this.stylesList[t].reset();
        }
        for (this.renderShape(), t = 0; t < e; t += 1) {
          (this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"));
        }
      }, SVGShapeElement.prototype.renderShape = function () {
        var t,
          e,
          i = this.animatedContents.length;
        for (t = 0; t < i; t += 1) {
          e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame);
        }
      }, SVGShapeElement.prototype.destroy = function () {
        this.destroyBaseElement(), this.shapesData = null, this.itemsData = null;
      }, SVGTintFilter.prototype.renderFrame = function (t) {
        if (t || this.filterManager._mdf) {
          var e = this.filterManager.effectElements[0].p.v,
            i = this.filterManager.effectElements[1].p.v,
            r = this.filterManager.effectElements[2].p.v / 100;
          this.matrixFilter.setAttribute("values", i[0] - e[0] + " 0 0 0 " + e[0] + " " + (i[1] - e[1]) + " 0 0 0 " + e[1] + " " + (i[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 " + r + " 0");
        }
      }, SVGFillFilter.prototype.renderFrame = function (t) {
        if (t || this.filterManager._mdf) {
          var e = this.filterManager.effectElements[2].p.v,
            i = this.filterManager.effectElements[6].p.v;
          this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + i + " 0");
        }
      }, SVGGaussianBlurEffect.prototype.renderFrame = function (t) {
        if (t || this.filterManager._mdf) {
          var e = .3 * this.filterManager.effectElements[0].p.v,
            i = this.filterManager.effectElements[1].p.v,
            r = 3 == i ? 0 : e,
            s = 2 == i ? 0 : e;
          this.feGaussianBlur.setAttribute("stdDeviation", r + " " + s);
          var a = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
          this.feGaussianBlur.setAttribute("edgeMode", a);
        }
      }, SVGStrokeEffect.prototype.initialize = function () {
        var t,
          e,
          i,
          r,
          s = this.elem.layerElement.children || this.elem.layerElement.childNodes;
        for (1 === this.filterManager.effectElements[1].p.v ? (r = this.elem.maskManager.masksProperties.length, i = 0) : r = (i = this.filterManager.effectElements[0].p.v - 1) + 1, (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); i < r; i += 1) {
          t = createNS("path"), e.appendChild(t), this.paths.push({
            p: t,
            m: i
          });
        }
        if (3 === this.filterManager.effectElements[10].p.v) {
          var a = createNS("mask"),
            n = createElementID();
          a.setAttribute("id", n), a.setAttribute("mask-type", "alpha"), a.appendChild(e), this.elem.globalData.defs.appendChild(a);
          var o = createNS("g");
          for (o.setAttribute("mask", "url(" + locationHref + "#" + n + ")"); s[0];) {
            o.appendChild(s[0]);
          }
          this.elem.layerElement.appendChild(o), this.masker = a, e.setAttribute("stroke", "#fff");
        } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
          if (2 === this.filterManager.effectElements[10].p.v) for (s = this.elem.layerElement.children || this.elem.layerElement.childNodes; s.length;) {
            this.elem.layerElement.removeChild(s[0]);
          }
          this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff");
        }
        this.initialized = !0, this.pathMasker = e;
      }, SVGStrokeEffect.prototype.renderFrame = function (t) {
        this.initialized || this.initialize();
        var e,
          i,
          r,
          s = this.paths.length;
        for (e = 0; e < s; e += 1) {
          if (-1 !== this.paths[e].m && (i = this.elem.maskManager.viewData[this.paths[e].m], r = this.paths[e].p, (t || this.filterManager._mdf || i.prop._mdf) && r.setAttribute("d", i.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || i.prop._mdf)) {
            var a;
            if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
              var n = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100,
                o = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100,
                h = r.getTotalLength();
              a = "0 0 0 " + h * n + " ";
              var l,
                p = h * (o - n),
                m = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100,
                f = Math.floor(p / m);
              for (l = 0; l < f; l += 1) {
                a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100 + " ";
              }
              a += "0 " + 10 * h + " 0 0";
            } else a = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100;
            r.setAttribute("stroke-dasharray", a);
          }
        }
        if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
          var c = this.filterManager.effectElements[3].p.v;
          this.pathMasker.setAttribute("stroke", "rgb(" + bm_floor(255 * c[0]) + "," + bm_floor(255 * c[1]) + "," + bm_floor(255 * c[2]) + ")");
        }
      }, SVGTritoneFilter.prototype.renderFrame = function (t) {
        if (t || this.filterManager._mdf) {
          var e = this.filterManager.effectElements[0].p.v,
            i = this.filterManager.effectElements[1].p.v,
            r = this.filterManager.effectElements[2].p.v,
            s = r[0] + " " + i[0] + " " + e[0],
            a = r[1] + " " + i[1] + " " + e[1],
            n = r[2] + " " + i[2] + " " + e[2];
          this.feFuncR.setAttribute("tableValues", s), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", n);
        }
      }, SVGProLevelsFilter.prototype.createFeFunc = function (t, e) {
        var i = createNS(t);
        return i.setAttribute("type", "table"), e.appendChild(i), i;
      }, SVGProLevelsFilter.prototype.getTableValue = function (t, e, i, r, s) {
        for (var a, n, o = 0, h = Math.min(t, e), l = Math.max(t, e), p = Array.call(null, {
            length: 256
          }), m = 0, f = s - r, c = e - t; o <= 256;) {
          n = (a = o / 256) <= h ? c < 0 ? s : r : l <= a ? c < 0 ? r : s : r + f * Math.pow((a - t) / c, 1 / i), p[m++] = n, o += 256 / 255;
        }
        return p.join(" ");
      }, SVGProLevelsFilter.prototype.renderFrame = function (t) {
        if (t || this.filterManager._mdf) {
          var e,
            i = this.filterManager.effectElements;
          this.feFuncRComposed && (t || i[3].p._mdf || i[4].p._mdf || i[5].p._mdf || i[6].p._mdf || i[7].p._mdf) && (e = this.getTableValue(i[3].p.v, i[4].p.v, i[5].p.v, i[6].p.v, i[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || i[10].p._mdf || i[11].p._mdf || i[12].p._mdf || i[13].p._mdf || i[14].p._mdf) && (e = this.getTableValue(i[10].p.v, i[11].p.v, i[12].p.v, i[13].p.v, i[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || i[17].p._mdf || i[18].p._mdf || i[19].p._mdf || i[20].p._mdf || i[21].p._mdf) && (e = this.getTableValue(i[17].p.v, i[18].p.v, i[19].p.v, i[20].p.v, i[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || i[24].p._mdf || i[25].p._mdf || i[26].p._mdf || i[27].p._mdf || i[28].p._mdf) && (e = this.getTableValue(i[24].p.v, i[25].p.v, i[26].p.v, i[27].p.v, i[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || i[31].p._mdf || i[32].p._mdf || i[33].p._mdf || i[34].p._mdf || i[35].p._mdf) && (e = this.getTableValue(i[31].p.v, i[32].p.v, i[33].p.v, i[34].p.v, i[35].p.v), this.feFuncA.setAttribute("tableValues", e));
        }
      }, SVGDropShadowEffect.prototype.renderFrame = function (t) {
        if (t || this.filterManager._mdf) {
          if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
            var e = this.filterManager.effectElements[0].p.v;
            this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])));
          }
          if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
            var i = this.filterManager.effectElements[3].p.v,
              r = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
              s = i * Math.cos(r),
              a = i * Math.sin(r);
            this.feOffset.setAttribute("dx", s), this.feOffset.setAttribute("dy", a);
          }
        }
      };
      var _svgMatteSymbols = [];
      function SVGMatte3Effect(t, e, i) {
        this.initialized = !1, this.filterManager = e, this.filterElem = t, (this.elem = i).matteElement = createNS("g"), i.matteElement.appendChild(i.layerElement), i.matteElement.appendChild(i.transformedElement), i.baseElement = i.matteElement;
      }
      function SVGEffects(t) {
        var e,
          i,
          r = t.data.ef ? t.data.ef.length : 0,
          s = createElementID(),
          a = filtersFactory.createFilter(s),
          n = 0;
        for (this.filters = [], e = 0; e < r; e += 1) {
          i = null, 20 === t.data.ef[e].ty ? (n += 1, i = new SVGTintFilter(a, t.effectsManager.effectElements[e])) : 21 === t.data.ef[e].ty ? (n += 1, i = new SVGFillFilter(a, t.effectsManager.effectElements[e])) : 22 === t.data.ef[e].ty ? i = new SVGStrokeEffect(t, t.effectsManager.effectElements[e]) : 23 === t.data.ef[e].ty ? (n += 1, i = new SVGTritoneFilter(a, t.effectsManager.effectElements[e])) : 24 === t.data.ef[e].ty ? (n += 1, i = new SVGProLevelsFilter(a, t.effectsManager.effectElements[e])) : 25 === t.data.ef[e].ty ? (n += 1, i = new SVGDropShadowEffect(a, t.effectsManager.effectElements[e])) : 28 === t.data.ef[e].ty ? i = new SVGMatte3Effect(a, t.effectsManager.effectElements[e], t) : 29 === t.data.ef[e].ty && (n += 1, i = new SVGGaussianBlurEffect(a, t.effectsManager.effectElements[e])), i && this.filters.push(i);
        }
        n && (t.globalData.defs.appendChild(a), t.layerElement.setAttribute("filter", "url(" + locationHref + "#" + s + ")")), this.filters.length && t.addRenderableComponent(this);
      }
      function CVContextData() {
        this.saved = [], this.cArrPos = 0, this.cTr = new Matrix(), this.cO = 1;
        var t;
        for (this.savedOp = createTypedArray("float32", 15), t = 0; t < 15; t += 1) {
          this.saved[t] = createTypedArray("float32", 16);
        }
        this._length = 15;
      }
      function CVBaseElement() {}
      function CVImageElement(t, e, i) {
        this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getImage(this.assetData), this.initElement(t, e, i);
      }
      function CVCompElement(t, e, i) {
        this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
          _placeholder: !0
        };
      }
      function CVMaskElement(t, e) {
        this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
        var i,
          r = this.masksProperties.length,
          s = !1;
        for (i = 0; i < r; i++) {
          "n" !== this.masksProperties[i].mode && (s = !0), this.viewData[i] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[i], 3);
        }
        (this.hasMasks = s) && this.element.addRenderableComponent(this);
      }
      function CVShapeElement(t, e, i) {
        this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager(), this.initElement(t, e, i);
      }
      function CVSolidElement(t, e, i) {
        this.initElement(t, e, i);
      }
      function CVTextElement(t, e, i) {
        this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
          fill: "rgba(0,0,0,0)",
          stroke: "rgba(0,0,0,0)",
          sWidth: 0,
          fValue: ""
        }, this.initElement(t, e, i);
      }
      function CVEffects() {}
      function HBaseElement(t, e, i) {}
      function HSolidElement(t, e, i) {
        this.initElement(t, e, i);
      }
      function HCompElement(t, e, i) {
        this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
          _placeholder: !0
        };
      }
      function HShapeElement(t, e, i) {
        this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, i), this.prevViewData = [], this.currentBBox = {
          x: 999999,
          y: -999999,
          h: 0,
          w: 0
        };
      }
      function HTextElement(t, e, i) {
        this.textSpans = [], this.textPaths = [], this.currentBBox = {
          x: 999999,
          y: -999999,
          h: 0,
          w: 0
        }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, i);
      }
      function HImageElement(t, e, i) {
        this.assetData = e.getAssetData(t.refId), this.initElement(t, e, i);
      }
      function HCameraElement(t, e, i) {
        this.initFrame(), this.initBaseData(t, e, i), this.initHierarchy();
        var r = PropertyFactory.getProp;
        if (this.pe = r(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = r(this, t.ks.p.x, 1, 0, this), this.py = r(this, t.ks.p.y, 1, 0, this), this.pz = r(this, t.ks.p.z, 1, 0, this)) : this.p = r(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = r(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
          var s,
            a = t.ks.or.k.length;
          for (s = 0; s < a; s += 1) {
            t.ks.or.k[s].to = null, t.ks.or.k[s].ti = null;
          }
        }
        this.or = r(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = r(this, t.ks.rx, 0, degToRads, this), this.ry = r(this, t.ks.ry, 0, degToRads, this), this.rz = r(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix(), this._prevMat = new Matrix(), this._isFirstFrame = !0, this.finalTransform = {
          mProp: this
        };
      }
      function HEffects() {}
      SVGMatte3Effect.prototype.findSymbol = function (t) {
        for (var e = 0, i = _svgMatteSymbols.length; e < i;) {
          if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
          e += 1;
        }
        return null;
      }, SVGMatte3Effect.prototype.replaceInParent = function (t, e) {
        var i = t.layerElement.parentNode;
        if (i) {
          for (var r, s = i.children, a = 0, n = s.length; a < n && s[a] !== t.layerElement;) {
            a += 1;
          }
          a <= n - 2 && (r = s[a + 1]);
          var o = createNS("use");
          o.setAttribute("href", "#" + e), r ? i.insertBefore(o, r) : i.appendChild(o);
        }
      }, SVGMatte3Effect.prototype.setElementAsMask = function (t, e) {
        if (!this.findSymbol(e)) {
          var i = createElementID(),
            r = createNS("mask");
          r.setAttribute("id", e.layerId), r.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
          var s = t.globalData.defs;
          s.appendChild(r);
          var a = createNS("symbol");
          a.setAttribute("id", i), this.replaceInParent(e, i), a.appendChild(e.layerElement), s.appendChild(a);
          var n = createNS("use");
          n.setAttribute("href", "#" + i), r.appendChild(n), e.data.hd = !1, e.show();
        }
        t.setMatte(e.layerId);
      }, SVGMatte3Effect.prototype.initialize = function () {
        for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, i = 0, r = e.length; i < r;) {
          e[i] && e[i].data.ind === t && this.setElementAsMask(this.elem, e[i]), i += 1;
        }
        this.initialized = !0;
      }, SVGMatte3Effect.prototype.renderFrame = function () {
        this.initialized || this.initialize();
      }, SVGEffects.prototype.renderFrame = function (t) {
        var e,
          i = this.filters.length;
        for (e = 0; e < i; e += 1) {
          this.filters[e].renderFrame(t);
        }
      }, CVContextData.prototype.duplicate = function () {
        var t = 2 * this._length,
          e = this.savedOp;
        this.savedOp = createTypedArray("float32", t), this.savedOp.set(e);
        var i = 0;
        for (i = this._length; i < t; i += 1) {
          this.saved[i] = createTypedArray("float32", 16);
        }
        this._length = t;
      }, CVContextData.prototype.reset = function () {
        this.cArrPos = 0, this.cTr.reset(), this.cO = 1;
      }, CVBaseElement.prototype = {
        createElements: function createElements() {},
        initRendererElement: function initRendererElement() {},
        createContainerElements: function createContainerElements() {
          this.canvasContext = this.globalData.canvasContext, this.renderableEffectsManager = new CVEffects(this);
        },
        createContent: function createContent() {},
        setBlendMode: function setBlendMode() {
          var t = this.globalData;
          if (t.blendMode !== this.data.bm) {
            t.blendMode = this.data.bm;
            var e = getBlendMode(this.data.bm);
            t.canvasContext.globalCompositeOperation = e;
          }
        },
        createRenderableComponents: function createRenderableComponents() {
          this.maskManager = new CVMaskElement(this.data, this);
        },
        hideElement: function hideElement() {
          this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0);
        },
        showElement: function showElement() {
          this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0);
        },
        renderFrame: function renderFrame() {
          if (!this.hidden && !this.data.hd) {
            this.renderTransform(), this.renderRenderable(), this.setBlendMode();
            var t = 0 === this.data.ty;
            this.globalData.renderer.save(t), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(t), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1);
          }
        },
        destroy: function destroy() {
          this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy();
        },
        mHelper: new Matrix()
      }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function () {
        if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
          var t = createTag("canvas");
          t.width = this.assetData.w, t.height = this.assetData.h;
          var e,
            i,
            r = t.getContext("2d"),
            s = this.img.width,
            a = this.img.height,
            n = s / a,
            o = this.assetData.w / this.assetData.h,
            h = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
          o < n && "xMidYMid slice" === h || n < o && "xMidYMid slice" !== h ? e = (i = a) * o : i = (e = s) / o, r.drawImage(this.img, (s - e) / 2, (a - i) / 2, e, i, 0, 0, this.assetData.w, this.assetData.h), this.img = t;
        }
      }, CVImageElement.prototype.renderInnerContent = function (t) {
        this.canvasContext.drawImage(this.img, 0, 0);
      }, CVImageElement.prototype.destroy = function () {
        this.img = null;
      }, extendPrototype([CanvasRenderer, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function () {
        var t,
          e = this.canvasContext;
        for (e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip(), t = this.layers.length - 1; 0 <= t; t -= 1) {
          (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
        }
      }, CVCompElement.prototype.destroy = function () {
        var t;
        for (t = this.layers.length - 1; 0 <= t; t -= 1) {
          this.elements[t] && this.elements[t].destroy();
        }
        this.layers = null, this.elements = null;
      }, CVMaskElement.prototype.renderFrame = function () {
        if (this.hasMasks) {
          var t,
            e,
            i,
            r,
            s = this.element.finalTransform.mat,
            a = this.element.canvasContext,
            n = this.masksProperties.length;
          for (a.beginPath(), t = 0; t < n; t++) {
            if ("n" !== this.masksProperties[t].mode) {
              this.masksProperties[t].inv && (a.moveTo(0, 0), a.lineTo(this.element.globalData.compSize.w, 0), a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), a.lineTo(0, this.element.globalData.compSize.h), a.lineTo(0, 0)), r = this.viewData[t].v, e = s.applyToPointArray(r.v[0][0], r.v[0][1], 0), a.moveTo(e[0], e[1]);
              var o,
                h = r._length;
              for (o = 1; o < h; o++) {
                i = s.applyToTriplePoints(r.o[o - 1], r.i[o], r.v[o]), a.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
              }
              i = s.applyToTriplePoints(r.o[o - 1], r.i[0], r.v[0]), a.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
            }
          }
          this.element.globalData.renderer.save(!0), a.clip();
        }
      }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function () {
        this.element = null;
      }, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
        opacity: 1,
        _opMdf: !1
      }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function () {
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []);
      }, CVShapeElement.prototype.createStyleElement = function (t, e) {
        var i = {
            data: t,
            type: t.ty,
            preTransforms: this.transformsManager.addTransformSequence(e),
            transforms: [],
            elements: [],
            closed: !0 === t.hd
          },
          r = {};
        if ("fl" == t.ty || "st" == t.ty ? (r.c = PropertyFactory.getProp(this, t.c, 1, 255, this), r.c.k || (i.co = "rgb(" + bm_floor(r.c.v[0]) + "," + bm_floor(r.c.v[1]) + "," + bm_floor(r.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (r.s = PropertyFactory.getProp(this, t.s, 1, null, this), r.e = PropertyFactory.getProp(this, t.e, 1, null, this), r.h = PropertyFactory.getProp(this, t.h || {
          k: 0
        }, 0, .01, this), r.a = PropertyFactory.getProp(this, t.a || {
          k: 0
        }, 0, degToRads, this), r.g = new GradientProperty(this, t.g, this)), r.o = PropertyFactory.getProp(this, t.o, 0, .01, this), "st" == t.ty || "gs" == t.ty) {
          if (i.lc = this.lcEnum[t.lc] || "round", i.lj = this.ljEnum[t.lj] || "round", 1 == t.lj && (i.ml = t.ml), r.w = PropertyFactory.getProp(this, t.w, 0, null, this), r.w.k || (i.wi = r.w.v), t.d) {
            var s = new DashProperty(this, t.d, "canvas", this);
            r.d = s, r.d.k || (i.da = r.d.dashArray, i["do"] = r.d.dashoffset[0]);
          }
        } else i.r = 2 === t.r ? "evenodd" : "nonzero";
        return this.stylesList.push(i), r.style = i, r;
      }, CVShapeElement.prototype.createGroupElement = function (t) {
        return {
          it: [],
          prevViewData: []
        };
      }, CVShapeElement.prototype.createTransformElement = function (t) {
        return {
          transform: {
            opacity: 1,
            _opMdf: !1,
            key: this.transformsManager.getNewKey(),
            op: PropertyFactory.getProp(this, t.o, 0, .01, this),
            mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
          }
        };
      }, CVShapeElement.prototype.createShapeElement = function (t) {
        var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
        return this.shapes.push(e), this.addShapeToModifiers(e), e;
      }, CVShapeElement.prototype.reloadShapes = function () {
        this._isFirstFrame = !0;
        var t,
          e = this.itemsData.length;
        for (t = 0; t < e; t += 1) {
          this.prevViewData[t] = this.itemsData[t];
        }
        for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1) {
          this.dynamicProperties[t].getValue();
        }
        this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame);
      }, CVShapeElement.prototype.addTransformToStyleList = function (t) {
        var e,
          i = this.stylesList.length;
        for (e = 0; e < i; e += 1) {
          this.stylesList[e].closed || this.stylesList[e].transforms.push(t);
        }
      }, CVShapeElement.prototype.removeTransformFromStyleList = function () {
        var t,
          e = this.stylesList.length;
        for (t = 0; t < e; t += 1) {
          this.stylesList[t].closed || this.stylesList[t].transforms.pop();
        }
      }, CVShapeElement.prototype.closeStyles = function (t) {
        var e,
          i = t.length;
        for (e = 0; e < i; e += 1) {
          t[e].closed = !0;
        }
      }, CVShapeElement.prototype.searchShapes = function (t, e, i, r, s) {
        var a,
          n,
          o,
          h,
          l,
          p,
          m = t.length - 1,
          f = [],
          c = [],
          d = [].concat(s);
        for (a = m; 0 <= a; a -= 1) {
          if ((h = this.searchProcessedElement(t[a])) ? e[a] = i[h - 1] : t[a]._shouldRender = r, "fl" == t[a].ty || "st" == t[a].ty || "gf" == t[a].ty || "gs" == t[a].ty) h ? e[a].style.closed = !1 : e[a] = this.createStyleElement(t[a], d), f.push(e[a].style);else if ("gr" == t[a].ty) {
            if (h) for (o = e[a].it.length, n = 0; n < o; n += 1) {
              e[a].prevViewData[n] = e[a].it[n];
            } else e[a] = this.createGroupElement(t[a]);
            this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, r, d);
          } else "tr" == t[a].ty ? (h || (p = this.createTransformElement(t[a]), e[a] = p), d.push(e[a]), this.addTransformToStyleList(e[a])) : "sh" == t[a].ty || "rc" == t[a].ty || "el" == t[a].ty || "sr" == t[a].ty ? h || (e[a] = this.createShapeElement(t[a])) : "tm" == t[a].ty || "rd" == t[a].ty || "pb" == t[a].ty ? (h ? (l = e[a]).closed = !1 : ((l = ShapeModifiers.getModifier(t[a].ty)).init(this, t[a]), e[a] = l, this.shapeModifiers.push(l)), c.push(l)) : "rp" == t[a].ty && (h ? (l = e[a]).closed = !0 : (l = ShapeModifiers.getModifier(t[a].ty), (e[a] = l).init(this, t, a, e), this.shapeModifiers.push(l), r = !1), c.push(l));
          this.addProcessedElement(t[a], a + 1);
        }
        for (this.removeTransformFromStyleList(), this.closeStyles(f), m = c.length, a = 0; a < m; a += 1) {
          c[a].closed = !0;
        }
      }, CVShapeElement.prototype.renderInnerContent = function () {
        this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0);
      }, CVShapeElement.prototype.renderShapeTransform = function (t, e) {
        (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0);
      }, CVShapeElement.prototype.drawLayer = function () {
        var t,
          e,
          i,
          r,
          s,
          a,
          n,
          o,
          h,
          l = this.stylesList.length,
          p = this.globalData.renderer,
          m = this.globalData.canvasContext;
        for (t = 0; t < l; t += 1) {
          if (("st" !== (o = (h = this.stylesList[t]).type) && "gs" !== o || 0 !== h.wi) && h.data._shouldRender && 0 !== h.coOp && 0 !== this.globalData.currentGlobalAlpha) {
            for (p.save(), a = h.elements, "st" === o || "gs" === o ? (m.strokeStyle = "st" === o ? h.co : h.grd, m.lineWidth = h.wi, m.lineCap = h.lc, m.lineJoin = h.lj, m.miterLimit = h.ml || 0) : m.fillStyle = "fl" === o ? h.co : h.grd, p.ctxOpacity(h.coOp), "st" !== o && "gs" !== o && m.beginPath(), p.ctxTransform(h.preTransforms.finalTransform.props), i = a.length, e = 0; e < i; e += 1) {
              for ("st" !== o && "gs" !== o || (m.beginPath(), h.da && (m.setLineDash(h.da), m.lineDashOffset = h["do"])), s = (n = a[e].trNodes).length, r = 0; r < s; r += 1) {
                "m" == n[r].t ? m.moveTo(n[r].p[0], n[r].p[1]) : "c" == n[r].t ? m.bezierCurveTo(n[r].pts[0], n[r].pts[1], n[r].pts[2], n[r].pts[3], n[r].pts[4], n[r].pts[5]) : m.closePath();
              }
              "st" !== o && "gs" !== o || (m.stroke(), h.da && m.setLineDash(this.dashResetter));
            }
            "st" !== o && "gs" !== o && m.fill(h.r), p.restore();
          }
        }
      }, CVShapeElement.prototype.renderShape = function (t, e, i, r) {
        var s, a;
        for (a = t, s = e.length - 1; 0 <= s; s -= 1) {
          "tr" == e[s].ty ? (a = i[s].transform, this.renderShapeTransform(t, a)) : "sh" == e[s].ty || "el" == e[s].ty || "rc" == e[s].ty || "sr" == e[s].ty ? this.renderPath(e[s], i[s]) : "fl" == e[s].ty ? this.renderFill(e[s], i[s], a) : "st" == e[s].ty ? this.renderStroke(e[s], i[s], a) : "gf" == e[s].ty || "gs" == e[s].ty ? this.renderGradientFill(e[s], i[s], a) : "gr" == e[s].ty ? this.renderShape(a, e[s].it, i[s].it) : e[s].ty;
        }
        r && this.drawLayer();
      }, CVShapeElement.prototype.renderStyledShape = function (t, e) {
        if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
          var i,
            r,
            s,
            a = t.trNodes,
            n = e.paths,
            o = n._length;
          a.length = 0;
          var h = t.transforms.finalTransform;
          for (s = 0; s < o; s += 1) {
            var l = n.shapes[s];
            if (l && l.v) {
              for (r = l._length, i = 1; i < r; i += 1) {
                1 === i && a.push({
                  t: "m",
                  p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                }), a.push({
                  t: "c",
                  pts: h.applyToTriplePoints(l.o[i - 1], l.i[i], l.v[i])
                });
              }
              1 === r && a.push({
                t: "m",
                p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
              }), l.c && r && (a.push({
                t: "c",
                pts: h.applyToTriplePoints(l.o[i - 1], l.i[0], l.v[0])
              }), a.push({
                t: "z"
              }));
            }
          }
          t.trNodes = a;
        }
      }, CVShapeElement.prototype.renderPath = function (t, e) {
        if (!0 !== t.hd && t._shouldRender) {
          var i,
            r = e.styledShapes.length;
          for (i = 0; i < r; i += 1) {
            this.renderStyledShape(e.styledShapes[i], e.sh);
          }
        }
      }, CVShapeElement.prototype.renderFill = function (t, e, i) {
        var r = e.style;
        (e.c._mdf || this._isFirstFrame) && (r.co = "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o._mdf || i._opMdf || this._isFirstFrame) && (r.coOp = e.o.v * i.opacity);
      }, CVShapeElement.prototype.renderGradientFill = function (t, e, i) {
        var r = e.style;
        if (!r.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
          var s = this.globalData.canvasContext,
            a = e.s.v,
            n = e.e.v;
          if (1 === t.t) f = s.createLinearGradient(a[0], a[1], n[0], n[1]);else var o = Math.sqrt(Math.pow(a[0] - n[0], 2) + Math.pow(a[1] - n[1], 2)),
            h = Math.atan2(n[1] - a[1], n[0] - a[0]),
            l = o * (1 <= e.h.v ? .99 : e.h.v <= -1 ? -.99 : e.h.v),
            p = Math.cos(h + e.a.v) * l + a[0],
            m = Math.sin(h + e.a.v) * l + a[1],
            f = s.createRadialGradient(p, m, 0, a[0], a[1], o);
          var c,
            d = t.g.p,
            u = e.g.c,
            y = 1;
          for (c = 0; c < d; c += 1) {
            e.g._hasOpacity && e.g._collapsable && (y = e.g.o[2 * c + 1]), f.addColorStop(u[4 * c] / 100, "rgba(" + u[4 * c + 1] + "," + u[4 * c + 2] + "," + u[4 * c + 3] + "," + y + ")");
          }
          r.grd = f;
        }
        r.coOp = e.o.v * i.opacity;
      }, CVShapeElement.prototype.renderStroke = function (t, e, i) {
        var r = e.style,
          s = e.d;
        s && (s._mdf || this._isFirstFrame) && (r.da = s.dashArray, r["do"] = s.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (r.co = "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o._mdf || i._opMdf || this._isFirstFrame) && (r.coOp = e.o.v * i.opacity), (e.w._mdf || this._isFirstFrame) && (r.wi = e.w.v);
      }, CVShapeElement.prototype.destroy = function () {
        this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0;
      }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function () {
        var t = this.canvasContext;
        t.fillStyle = this.data.sc, t.fillRect(0, 0, this.data.sw, this.data.sh);
      }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function () {
        var t = this.textProperty.currentData;
        this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
        var e = !1;
        t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
        var i = !1;
        t.sc && (i = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
        var r,
          s,
          a = this.globalData.fontManager.getFontByName(t.f),
          n = t.l,
          o = this.mHelper;
        this.stroke = i, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, s = t.finalText.length;
        var h,
          l,
          p,
          m,
          f,
          c,
          d,
          u,
          y,
          g,
          v = this.data.singleShape,
          b = t.tr / 1e3 * t.finalSize,
          E = 0,
          x = 0,
          P = !0,
          S = 0;
        for (r = 0; r < s; r += 1) {
          for (l = (h = this.globalData.fontManager.getCharData(t.finalText[r], a.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && h.data || {}, o.reset(), v && n[r].n && (E = -b, x += t.yOffset, x += P ? 1 : 0, P = !1), d = (f = l.shapes ? l.shapes[0].it : []).length, o.scale(t.finalSize / 100, t.finalSize / 100), v && this.applyTextPropertiesToMatrix(t, o, n[r].line, E, x), y = createSizedArray(d), c = 0; c < d; c += 1) {
            for (m = f[c].ks.k.i.length, u = f[c].ks.k, g = [], p = 1; p < m; p += 1) {
              1 == p && g.push(o.applyToX(u.v[0][0], u.v[0][1], 0), o.applyToY(u.v[0][0], u.v[0][1], 0)), g.push(o.applyToX(u.o[p - 1][0], u.o[p - 1][1], 0), o.applyToY(u.o[p - 1][0], u.o[p - 1][1], 0), o.applyToX(u.i[p][0], u.i[p][1], 0), o.applyToY(u.i[p][0], u.i[p][1], 0), o.applyToX(u.v[p][0], u.v[p][1], 0), o.applyToY(u.v[p][0], u.v[p][1], 0));
            }
            g.push(o.applyToX(u.o[p - 1][0], u.o[p - 1][1], 0), o.applyToY(u.o[p - 1][0], u.o[p - 1][1], 0), o.applyToX(u.i[0][0], u.i[0][1], 0), o.applyToY(u.i[0][0], u.i[0][1], 0), o.applyToX(u.v[0][0], u.v[0][1], 0), o.applyToY(u.v[0][0], u.v[0][1], 0)), y[c] = g;
          }
          v && (E += n[r].l, E += b), this.textSpans[S] ? this.textSpans[S].elem = y : this.textSpans[S] = {
            elem: y
          }, S += 1;
        }
      }, CVTextElement.prototype.renderInnerContent = function () {
        var t,
          e,
          i,
          r,
          s,
          a,
          n = this.canvasContext;
        this.finalTransform.mat.props;
        n.font = this.values.fValue, n.lineCap = "butt", n.lineJoin = "miter", n.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
        var o,
          h = this.textAnimator.renderedLetters,
          l = this.textProperty.currentData.l;
        e = l.length;
        var p,
          m,
          f = null,
          c = null,
          d = null;
        for (t = 0; t < e; t += 1) {
          if (!l[t].n) {
            if ((o = h[t]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(o.p), this.globalData.renderer.ctxOpacity(o.o)), this.fill) {
              for (o && o.fc ? f !== o.fc && (f = o.fc, n.fillStyle = o.fc) : f !== this.values.fill && (f = this.values.fill, n.fillStyle = this.values.fill), r = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), i = 0; i < r; i += 1) {
                for (a = (m = p[i]).length, this.globalData.canvasContext.moveTo(m[0], m[1]), s = 2; s < a; s += 6) {
                  this.globalData.canvasContext.bezierCurveTo(m[s], m[s + 1], m[s + 2], m[s + 3], m[s + 4], m[s + 5]);
                }
              }
              this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill();
            }
            if (this.stroke) {
              for (o && o.sw ? d !== o.sw && (d = o.sw, n.lineWidth = o.sw) : d !== this.values.sWidth && (d = this.values.sWidth, n.lineWidth = this.values.sWidth), o && o.sc ? c !== o.sc && (c = o.sc, n.strokeStyle = o.sc) : c !== this.values.stroke && (c = this.values.stroke, n.strokeStyle = this.values.stroke), r = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), i = 0; i < r; i += 1) {
                for (a = (m = p[i]).length, this.globalData.canvasContext.moveTo(m[0], m[1]), s = 2; s < a; s += 6) {
                  this.globalData.canvasContext.bezierCurveTo(m[s], m[s + 1], m[s + 2], m[s + 3], m[s + 4], m[s + 5]);
                }
              }
              this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke();
            }
            o && this.globalData.renderer.restore();
          }
        }
      }, CVEffects.prototype.renderFrame = function () {}, HBaseElement.prototype = {
        checkBlendMode: function checkBlendMode() {},
        initRendererElement: function initRendererElement() {
          this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement);
        },
        createContainerElements: function createContainerElements() {
          this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode();
        },
        renderElement: function renderElement() {
          this.finalTransform._matMdf && (this.transformedElement.style.transform = this.transformedElement.style.webkitTransform = this.finalTransform.mat.toCSS()), this.finalTransform._opMdf && (this.transformedElement.style.opacity = this.finalTransform.mProp.o.v);
        },
        renderFrame: function renderFrame() {
          this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1));
        },
        destroy: function destroy() {
          this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null);
        },
        createRenderableComponents: function createRenderableComponents() {
          this.maskManager = new MaskElement(this.data, this, this.globalData);
        },
        addEffects: function addEffects() {},
        setMatte: function setMatte() {}
      }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function () {
        var t;
        this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t);
      }, extendPrototype([HybridRenderer, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function () {
        this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement;
      }, HCompElement.prototype.addTo3dContainer = function (t, e) {
        for (var i, r = 0; r < e;) {
          this.elements[r] && this.elements[r].getBaseElement && (i = this.elements[r].getBaseElement()), r += 1;
        }
        i ? this.layerElement.insertBefore(t, i) : this.layerElement.appendChild(t);
      }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function () {
        var t;
        if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;else {
          t = createNS("svg");
          var e = this.comp.data ? this.comp.data : this.globalData.compSize;
          t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t);
        }
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t;
      }, HShapeElement.prototype.getTransformedPoint = function (t, e) {
        var i,
          r = t.length;
        for (i = 0; i < r; i += 1) {
          e = t[i].mProps.v.applyToPointArray(e[0], e[1], 0);
        }
        return e;
      }, HShapeElement.prototype.calculateShapeBoundingBox = function (t, e) {
        var i,
          r,
          s,
          a,
          n,
          o = t.sh.v,
          h = t.transformers,
          l = o._length;
        if (!(l <= 1)) {
          for (i = 0; i < l - 1; i += 1) {
            r = this.getTransformedPoint(h, o.v[i]), s = this.getTransformedPoint(h, o.o[i]), a = this.getTransformedPoint(h, o.i[i + 1]), n = this.getTransformedPoint(h, o.v[i + 1]), this.checkBounds(r, s, a, n, e);
          }
          o.c && (r = this.getTransformedPoint(h, o.v[i]), s = this.getTransformedPoint(h, o.o[i]), a = this.getTransformedPoint(h, o.i[0]), n = this.getTransformedPoint(h, o.v[0]), this.checkBounds(r, s, a, n, e));
        }
      }, HShapeElement.prototype.checkBounds = function (t, e, i, r, s) {
        this.getBoundsOfCurve(t, e, i, r);
        var a = this.shapeBoundingBox;
        s.x = bm_min(a.left, s.x), s.xMax = bm_max(a.right, s.xMax), s.y = bm_min(a.top, s.y), s.yMax = bm_max(a.bottom, s.yMax);
      }, HShapeElement.prototype.shapeBoundingBox = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }, HShapeElement.prototype.tempBoundingBox = {
        x: 0,
        xMax: 0,
        y: 0,
        yMax: 0,
        width: 0,
        height: 0
      }, HShapeElement.prototype.getBoundsOfCurve = function (t, e, i, r) {
        for (var s, a, n, o, h, l, p, m = [[t[0], r[0]], [t[1], r[1]]], f = 0; f < 2; ++f) {
          if (a = 6 * t[f] - 12 * e[f] + 6 * i[f], s = -3 * t[f] + 9 * e[f] - 9 * i[f] + 3 * r[f], n = 3 * e[f] - 3 * t[f], a |= 0, n |= 0, 0 !== (s |= 0)) (h = a * a - 4 * n * s) < 0 || (0 < (l = (-a + bm_sqrt(h)) / (2 * s)) && l < 1 && m[f].push(this.calculateF(l, t, e, i, r, f)), 0 < (p = (-a - bm_sqrt(h)) / (2 * s)) && p < 1 && m[f].push(this.calculateF(p, t, e, i, r, f)));else {
            if (0 === a) continue;
            0 < (o = -n / a) && o < 1 && m[f].push(this.calculateF(o, t, e, i, r, f));
          }
        }
        this.shapeBoundingBox.left = bm_min.apply(null, m[0]), this.shapeBoundingBox.top = bm_min.apply(null, m[1]), this.shapeBoundingBox.right = bm_max.apply(null, m[0]), this.shapeBoundingBox.bottom = bm_max.apply(null, m[1]);
      }, HShapeElement.prototype.calculateF = function (t, e, i, r, s, a) {
        return bm_pow(1 - t, 3) * e[a] + 3 * bm_pow(1 - t, 2) * t * i[a] + 3 * (1 - t) * bm_pow(t, 2) * r[a] + bm_pow(t, 3) * s[a];
      }, HShapeElement.prototype.calculateBoundingBox = function (t, e) {
        var i,
          r = t.length;
        for (i = 0; i < r; i += 1) {
          t[i] && t[i].sh ? this.calculateShapeBoundingBox(t[i], e) : t[i] && t[i].it && this.calculateBoundingBox(t[i].it, e);
        }
      }, HShapeElement.prototype.currentBoxContains = function (t) {
        return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height;
      }, HShapeElement.prototype.renderInnerContent = function () {
        if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
          var t = this.tempBoundingBox,
            e = 999999;
          if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t)) return;
          var i = !1;
          this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), i = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), i = !0), (i || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) && (this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), this.shapeCont.style.transform = this.shapeCont.style.webkitTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)");
        }
      }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function () {
        if (this.isMasked = this.checkMasks(), this.isMasked) {
          this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
          var t = createNS("g");
          this.maskedElement.appendChild(t), this.innerElem = t;
        } else this.renderType = "html", this.innerElem = this.layerElement;
        this.checkParenting();
      }, HTextElement.prototype.buildNewText = function () {
        var t = this.textProperty.currentData;
        this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
        var e = this.innerElem.style;
        e.color = e.fill = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)", t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
        var i,
          r,
          s = this.globalData.fontManager.getFontByName(t.f);
        if (!this.globalData.fontManager.chars) if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", s.fClass) this.innerElem.className = s.fClass;else {
          e.fontFamily = s.fFamily;
          var a = t.fWeight,
            n = t.fStyle;
          e.fontStyle = n, e.fontWeight = a;
        }
        var o,
          h,
          l,
          p = t.l;
        r = p.length;
        var m,
          f = this.mHelper,
          c = "",
          d = 0;
        for (i = 0; i < r; i += 1) {
          if (this.globalData.fontManager.chars ? (this.textPaths[d] ? o = this.textPaths[d] : ((o = createNS("path")).setAttribute("stroke-linecap", "butt"), o.setAttribute("stroke-linejoin", "round"), o.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[d] ? l = (h = this.textSpans[d]).children[0] : ((h = createTag("div")).style.lineHeight = 0, (l = createNS("svg")).appendChild(o), styleDiv(h)))) : this.isMasked ? o = this.textPaths[d] ? this.textPaths[d] : createNS("text") : this.textSpans[d] ? (h = this.textSpans[d], o = this.textPaths[d]) : (styleDiv(h = createTag("span")), styleDiv(o = createTag("span")), h.appendChild(o)), this.globalData.fontManager.chars) {
            var u,
              y = this.globalData.fontManager.getCharData(t.finalText[i], s.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
            if (u = y ? y.data : null, f.reset(), u && u.shapes && (m = u.shapes[0].it, f.scale(t.finalSize / 100, t.finalSize / 100), c = this.createPathShape(f, m), o.setAttribute("d", c)), this.isMasked) this.innerElem.appendChild(o);else {
              if (this.innerElem.appendChild(h), u && u.shapes) {
                document.body.appendChild(l);
                var g = l.getBBox();
                l.setAttribute("width", g.width + 2), l.setAttribute("height", g.height + 2), l.setAttribute("viewBox", g.x - 1 + " " + (g.y - 1) + " " + (g.width + 2) + " " + (g.height + 2)), l.style.transform = l.style.webkitTransform = "translate(" + (g.x - 1) + "px," + (g.y - 1) + "px)", p[i].yOffset = g.y - 1;
              } else l.setAttribute("width", 1), l.setAttribute("height", 1);
              h.appendChild(l);
            }
          } else o.textContent = p[i].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked ? this.innerElem.appendChild(o) : (this.innerElem.appendChild(h), o.style.transform = o.style.webkitTransform = "translate3d(0," + -t.finalSize / 1.2 + "px,0)");
          this.isMasked ? this.textSpans[d] = o : this.textSpans[d] = h, this.textSpans[d].style.display = "block", this.textPaths[d] = o, d += 1;
        }
        for (; d < this.textSpans.length;) {
          this.textSpans[d].style.display = "none", d += 1;
        }
      }, HTextElement.prototype.renderInnerContent = function () {
        if (this.data.singleShape) {
          if (!this._isFirstFrame && !this.lettersChangedFlag) return;
          this.isMasked && this.finalTransform._matMdf && (this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), this.svgElement.style.transform = this.svgElement.style.webkitTransform = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)");
        }
        if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
          var t,
            e,
            i,
            r,
            s,
            a = 0,
            n = this.textAnimator.renderedLetters,
            o = this.textProperty.currentData.l;
          for (e = o.length, t = 0; t < e; t += 1) {
            o[t].n ? a += 1 : (r = this.textSpans[t], s = this.textPaths[t], i = n[a], a += 1, i._mdf.m && (this.isMasked ? r.setAttribute("transform", i.m) : r.style.transform = r.style.webkitTransform = i.m), r.style.opacity = i.o, i.sw && i._mdf.sw && s.setAttribute("stroke-width", i.sw), i.sc && i._mdf.sc && s.setAttribute("stroke", i.sc), i.fc && i._mdf.fc && (s.setAttribute("fill", i.fc), s.style.color = i.fc));
          }
          if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
            var h = this.innerElem.getBBox();
            this.currentBBox.w !== h.width && (this.currentBBox.w = h.width, this.svgElement.setAttribute("width", h.width)), this.currentBBox.h !== h.height && (this.currentBBox.h = h.height, this.svgElement.setAttribute("height", h.height));
            this.currentBBox.w === h.width + 2 && this.currentBBox.h === h.height + 2 && this.currentBBox.x === h.x - 1 && this.currentBBox.y === h.y - 1 || (this.currentBBox.w = h.width + 2, this.currentBBox.h = h.height + 2, this.currentBBox.x = h.x - 1, this.currentBBox.y = h.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), this.svgElement.style.transform = this.svgElement.style.webkitTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)");
          }
        }
      }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function () {
        var t = this.globalData.getAssetsPath(this.assetData),
          e = new Image();
        this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln);
      }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function () {
        var t,
          e,
          i = this.comp.threeDElements.length;
        for (t = 0; t < i; t += 1) {
          "3d" === (e = this.comp.threeDElements[t]).type && (e.perspectiveElem.style.perspective = e.perspectiveElem.style.webkitPerspective = this.pe.v + "px", e.container.style.transformOrigin = e.container.style.mozTransformOrigin = e.container.style.webkitTransformOrigin = "0px 0px 0px", e.perspectiveElem.style.transform = e.perspectiveElem.style.webkitTransform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)");
        }
      }, HCameraElement.prototype.createElements = function () {}, HCameraElement.prototype.hide = function () {}, HCameraElement.prototype.renderFrame = function () {
        var t,
          e,
          i = this._isFirstFrame;
        if (this.hierarchy) for (e = this.hierarchy.length, t = 0; t < e; t += 1) {
          i = this.hierarchy[t].finalTransform.mProp._mdf || i;
        }
        if (i || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
          if (this.mat.reset(), this.hierarchy) for (t = e = this.hierarchy.length - 1; 0 <= t; t -= 1) {
            var r = this.hierarchy[t].finalTransform.mProp;
            this.mat.translate(-r.p.v[0], -r.p.v[1], r.p.v[2]), this.mat.rotateX(-r.or.v[0]).rotateY(-r.or.v[1]).rotateZ(r.or.v[2]), this.mat.rotateX(-r.rx.v).rotateY(-r.ry.v).rotateZ(r.rz.v), this.mat.scale(1 / r.s.v[0], 1 / r.s.v[1], 1 / r.s.v[2]), this.mat.translate(r.a.v[0], r.a.v[1], r.a.v[2]);
          }
          if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
            var s;
            s = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
            var a = Math.sqrt(Math.pow(s[0], 2) + Math.pow(s[1], 2) + Math.pow(s[2], 2)),
              n = [s[0] / a, s[1] / a, s[2] / a],
              o = Math.sqrt(n[2] * n[2] + n[0] * n[0]),
              h = Math.atan2(n[1], o),
              l = Math.atan2(n[0], -n[2]);
            this.mat.rotateY(l).rotateX(-h);
          }
          this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
          var p = !this._prevMat.equals(this.mat);
          if ((p || this.pe._mdf) && this.comp.threeDElements) {
            var m;
            for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1) {
              "3d" === (m = this.comp.threeDElements[t]).type && (p && (m.container.style.transform = m.container.style.webkitTransform = this.mat.toCSS()), this.pe._mdf && (m.perspectiveElem.style.perspective = m.perspectiveElem.style.webkitPerspective = this.pe.v + "px"));
            }
            this.mat.clone(this._prevMat);
          }
        }
        this._isFirstFrame = !1;
      }, HCameraElement.prototype.prepareFrame = function (t) {
        this.prepareProperties(t, !0);
      }, HCameraElement.prototype.destroy = function () {}, HCameraElement.prototype.getBaseElement = function () {
        return null;
      }, HEffects.prototype.renderFrame = function () {};
      var animationManager = function () {
          var t = {},
            s = [],
            r = 0,
            a = 0,
            n = 0,
            o = !0,
            h = !1;
          function i(t) {
            for (var e = 0, i = t.target; e < a;) {
              s[e].animation === i && (s.splice(e, 1), e -= 1, a -= 1, i.isPaused || m()), e += 1;
            }
          }
          function l(t, e) {
            if (!t) return null;
            for (var i = 0; i < a;) {
              if (s[i].elem == t && null !== s[i].elem) return s[i].animation;
              i += 1;
            }
            var r = new AnimationItem();
            return f(r, t), r.setData(t, e), r;
          }
          function p() {
            n += 1, d();
          }
          function m() {
            n -= 1;
          }
          function f(t, e) {
            t.addEventListener("destroy", i), t.addEventListener("_active", p), t.addEventListener("_idle", m), s.push({
              elem: e,
              animation: t
            }), a += 1;
          }
          function c(t) {
            var e,
              i = t - r;
            for (e = 0; e < a; e += 1) {
              s[e].animation.advanceTime(i);
            }
            r = t, n && !h ? window.requestAnimationFrame(c) : o = !0;
          }
          function e(t) {
            r = t, window.requestAnimationFrame(c);
          }
          function d() {
            !h && n && o && (window.requestAnimationFrame(e), o = !1);
          }
          return t.registerAnimation = l, t.loadAnimation = function (t) {
            var e = new AnimationItem();
            return f(e, null), e.setParams(t), e;
          }, t.setSpeed = function (t, e) {
            var i;
            for (i = 0; i < a; i += 1) {
              s[i].animation.setSpeed(t, e);
            }
          }, t.setDirection = function (t, e) {
            var i;
            for (i = 0; i < a; i += 1) {
              s[i].animation.setDirection(t, e);
            }
          }, t.play = function (t) {
            var e;
            for (e = 0; e < a; e += 1) {
              s[e].animation.play(t);
            }
          }, t.pause = function (t) {
            var e;
            for (e = 0; e < a; e += 1) {
              s[e].animation.pause(t);
            }
          }, t.stop = function (t) {
            var e;
            for (e = 0; e < a; e += 1) {
              s[e].animation.stop(t);
            }
          }, t.togglePause = function (t) {
            var e;
            for (e = 0; e < a; e += 1) {
              s[e].animation.togglePause(t);
            }
          }, t.searchAnimations = function (t, e, i) {
            var r,
              s = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
              a = s.length;
            for (r = 0; r < a; r += 1) {
              i && s[r].setAttribute("data-bm-type", i), l(s[r], t);
            }
            if (e && 0 === a) {
              i || (i = "svg");
              var n = document.getElementsByTagName("body")[0];
              n.innerText = "";
              var o = createTag("div");
              o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", i), n.appendChild(o), l(o, t);
            }
          }, t.resize = function () {
            var t;
            for (t = 0; t < a; t += 1) {
              s[t].animation.resize();
            }
          }, t.goToAndStop = function (t, e, i) {
            var r;
            for (r = 0; r < a; r += 1) {
              s[r].animation.goToAndStop(t, e, i);
            }
          }, t.destroy = function (t) {
            var e;
            for (e = a - 1; 0 <= e; e -= 1) {
              s[e].animation.destroy(t);
            }
          }, t.freeze = function () {
            h = !0;
          }, t.unfreeze = function () {
            h = !1, d();
          }, t.setVolume = function (t, e) {
            var i;
            for (i = 0; i < a; i += 1) {
              s[i].animation.setVolume(t, e);
            }
          }, t.mute = function (t) {
            var e;
            for (e = 0; e < a; e += 1) {
              s[e].animation.mute(t);
            }
          }, t.unmute = function (t) {
            var e;
            for (e = 0; e < a; e += 1) {
              s[e].animation.unmute(t);
            }
          }, t.getRegisteredAnimations = function () {
            var t,
              e = s.length,
              i = [];
            for (t = 0; t < e; t += 1) {
              i.push(s[t].animation);
            }
            return i;
          }, t;
        }(),
        AnimationItem = function AnimationItem() {
          this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = subframeEnabled, this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader(), this.audioController = audioControllerFactory();
        };
      extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function (t) {
        (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
        var e = t.animType ? t.animType : t.renderer ? t.renderer : "svg";
        switch (e) {
          case "canvas":
            this.renderer = new CanvasRenderer(this, t.rendererSettings);
            break;
          case "svg":
            this.renderer = new SVGRenderer(this, t.rendererSettings);
            break;
          default:
            this.renderer = new HybridRenderer(this, t.rendererSettings);
        }
        this.imagePreloader.setCacheType(e), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !t.hasOwnProperty("autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.configAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), assetLoader.load(t.path, this.configAnimation.bind(this), function () {
          this.trigger("data_failed");
        }.bind(this)));
      }, AnimationItem.prototype.setData = function (t, e) {
        var i = {
            wrapper: t,
            animationData: e ? "object" == _typeof(e) ? e : JSON.parse(e) : null
          },
          r = t.attributes;
        i.path = r.getNamedItem("data-animation-path") ? r.getNamedItem("data-animation-path").value : r.getNamedItem("data-bm-path") ? r.getNamedItem("data-bm-path").value : r.getNamedItem("bm-path") ? r.getNamedItem("bm-path").value : "", i.animType = r.getNamedItem("data-anim-type") ? r.getNamedItem("data-anim-type").value : r.getNamedItem("data-bm-type") ? r.getNamedItem("data-bm-type").value : r.getNamedItem("bm-type") ? r.getNamedItem("bm-type").value : r.getNamedItem("data-bm-renderer") ? r.getNamedItem("data-bm-renderer").value : r.getNamedItem("bm-renderer") ? r.getNamedItem("bm-renderer").value : "canvas";
        var s = r.getNamedItem("data-anim-loop") ? r.getNamedItem("data-anim-loop").value : r.getNamedItem("data-bm-loop") ? r.getNamedItem("data-bm-loop").value : r.getNamedItem("bm-loop") ? r.getNamedItem("bm-loop").value : "";
        "" === s || (i.loop = "false" !== s && ("true" === s || parseInt(s)));
        var a = r.getNamedItem("data-anim-autoplay") ? r.getNamedItem("data-anim-autoplay").value : r.getNamedItem("data-bm-autoplay") ? r.getNamedItem("data-bm-autoplay").value : !r.getNamedItem("bm-autoplay") || r.getNamedItem("bm-autoplay").value;
        i.autoplay = "false" !== a, i.name = r.getNamedItem("data-name") ? r.getNamedItem("data-name").value : r.getNamedItem("data-bm-name") ? r.getNamedItem("data-bm-name").value : r.getNamedItem("bm-name") ? r.getNamedItem("bm-name").value : "", "false" === (r.getNamedItem("data-anim-prerender") ? r.getNamedItem("data-anim-prerender").value : r.getNamedItem("data-bm-prerender") ? r.getNamedItem("data-bm-prerender").value : r.getNamedItem("bm-prerender") ? r.getNamedItem("bm-prerender").value : "") && (i.prerender = !1), this.setParams(i);
      }, AnimationItem.prototype.includeLayers = function (t) {
        t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
        var e,
          i,
          r = this.animationData.layers,
          s = r.length,
          a = t.layers,
          n = a.length;
        for (i = 0; i < n; i += 1) {
          for (e = 0; e < s;) {
            if (r[e].id == a[i].id) {
              r[e] = a[i];
              break;
            }
            e += 1;
          }
        }
        if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets) for (s = t.assets.length, e = 0; e < s; e += 1) {
          this.animationData.assets.push(t.assets[e]);
        }
        this.animationData.__complete = !1, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.renderer.includeLayers(t.layers), expressionsPlugin && expressionsPlugin.initExpressions(this), this.loadNextSegment();
      }, AnimationItem.prototype.loadNextSegment = function () {
        var t = this.animationData.segments;
        if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void (this.timeCompleted = this.totalFrames);
        var e = t.shift();
        this.timeCompleted = e.time * this.frameRate;
        var i = this.path + this.fileName + "_" + this.segmentPos + ".json";
        this.segmentPos += 1, assetLoader.load(i, this.includeLayers.bind(this), function () {
          this.trigger("data_failed");
        }.bind(this));
      }, AnimationItem.prototype.loadSegments = function () {
        this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment();
      }, AnimationItem.prototype.imagesLoaded = function () {
        this.trigger("loaded_images"), this.checkLoaded();
      }, AnimationItem.prototype.preloadImages = function () {
        this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
      }, AnimationItem.prototype.configAnimation = function (t) {
        if (this.renderer) try {
          this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause();
        } catch (t) {
          this.triggerConfigError(t);
        }
      }, AnimationItem.prototype.waitForFontsLoaded = function () {
        this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20));
      }, AnimationItem.prototype.checkLoaded = function () {
        this.isLoaded || !this.renderer.globalData.fontManager.isLoaded || !this.imagePreloader.loaded() && "canvas" === this.renderer.rendererType || (this.isLoaded = !0, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), expressionsPlugin && expressionsPlugin.initExpressions(this), this.renderer.initItems(), setTimeout(function () {
          this.trigger("DOMLoaded");
        }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play());
      }, AnimationItem.prototype.resize = function () {
        this.renderer.updateContainerSize();
      }, AnimationItem.prototype.setSubframe = function (t) {
        this.isSubframeEnabled = !!t;
      }, AnimationItem.prototype.gotoFrame = function () {
        this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame();
      }, AnimationItem.prototype.renderFrame = function () {
        if (!1 !== this.isLoaded) try {
          this.renderer.renderFrame(this.currentFrame + this.firstFrame);
        } catch (t) {
          this.triggerRenderFrameError(t);
        }
      }, AnimationItem.prototype.play = function (t) {
        t && this.name != t || !0 === this.isPaused && (this.isPaused = !1, this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")));
      }, AnimationItem.prototype.pause = function (t) {
        t && this.name != t || !1 === this.isPaused && (this.isPaused = !0, this._idle = !0, this.trigger("_idle"), this.audioController.pause());
      }, AnimationItem.prototype.togglePause = function (t) {
        t && this.name != t || (!0 === this.isPaused ? this.play() : this.pause());
      }, AnimationItem.prototype.stop = function (t) {
        t && this.name != t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0));
      }, AnimationItem.prototype.goToAndStop = function (t, e, i) {
        i && this.name != i || (e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier), this.pause());
      }, AnimationItem.prototype.goToAndPlay = function (t, e, i) {
        this.goToAndStop(t, e, i), this.play();
      }, AnimationItem.prototype.advanceTime = function (t) {
        if (!0 !== this.isPaused && !1 !== this.isLoaded) {
          var e = this.currentRawFrame + t * this.frameModifier,
            i = !1;
          e >= this.totalFrames - 1 && 0 < this.frameModifier ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (i = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (i = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), i && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"));
        }
      }, AnimationItem.prototype.adjustSegment = function (t, e) {
        this.playCount = 0, t[1] < t[0] ? (0 < this.frameModifier && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.timeCompleted = this.totalFrames = t[0] - t[1], this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.timeCompleted = this.totalFrames = t[1] - t[0], this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart");
      }, AnimationItem.prototype.setSegment = function (t, e) {
        var i = -1;
        this.isPaused && (this.currentRawFrame + this.firstFrame < t ? i = t : this.currentRawFrame + this.firstFrame > e && (i = e - t)), this.firstFrame = t, this.timeCompleted = this.totalFrames = e - t, -1 !== i && this.goToAndStop(i, !0);
      }, AnimationItem.prototype.playSegments = function (t, e) {
        if (e && (this.segments.length = 0), "object" == _typeof(t[0])) {
          var i,
            r = t.length;
          for (i = 0; i < r; i += 1) {
            this.segments.push(t[i]);
          }
        } else this.segments.push(t);
        this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play();
      }, AnimationItem.prototype.resetSegments = function (t) {
        this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0);
      }, AnimationItem.prototype.checkSegments = function (t) {
        return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0);
      }, AnimationItem.prototype.destroy = function (t) {
        t && this.name != t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = this.onLoopComplete = this.onComplete = this.onSegmentStart = this.onDestroy = null, this.renderer = null);
      }, AnimationItem.prototype.setCurrentRawFrameValue = function (t) {
        this.currentRawFrame = t, this.gotoFrame();
      }, AnimationItem.prototype.setSpeed = function (t) {
        this.playSpeed = t, this.updaFrameModifier();
      }, AnimationItem.prototype.setDirection = function (t) {
        this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier();
      }, AnimationItem.prototype.setVolume = function (t, e) {
        e && this.name !== e || this.audioController.setVolume(t);
      }, AnimationItem.prototype.getVolume = function () {
        return this.audioController.getVolume();
      }, AnimationItem.prototype.mute = function (t) {
        t && this.name !== t || this.audioController.mute();
      }, AnimationItem.prototype.unmute = function (t) {
        t && this.name !== t || this.audioController.unmute();
      }, AnimationItem.prototype.updaFrameModifier = function () {
        this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection);
      }, AnimationItem.prototype.getPath = function () {
        return this.path;
      }, AnimationItem.prototype.getAssetsPath = function (t) {
        var e = "";
        if (t.e) e = t.p;else if (this.assetsPath) {
          var i = t.p;
          -1 !== i.indexOf("images/") && (i = i.split("/")[1]), e = this.assetsPath + i;
        } else e = this.path, e += t.u ? t.u : "", e += t.p;
        return e;
      }, AnimationItem.prototype.getAssetData = function (t) {
        for (var e = 0, i = this.assets.length; e < i;) {
          if (t == this.assets[e].id) return this.assets[e];
          e += 1;
        }
      }, AnimationItem.prototype.hide = function () {
        this.renderer.hide();
      }, AnimationItem.prototype.show = function () {
        this.renderer.show();
      }, AnimationItem.prototype.getDuration = function (t) {
        return t ? this.totalFrames : this.totalFrames / this.frameRate;
      }, AnimationItem.prototype.trigger = function (t) {
        if (this._cbs && this._cbs[t]) switch (t) {
          case "enterFrame":
            this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
            break;
          case "loopComplete":
            this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
            break;
          case "complete":
            this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
            break;
          case "segmentStart":
            this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
            break;
          case "destroy":
            this.triggerEvent(t, new BMDestroyEvent(t, this));
            break;
          default:
            this.triggerEvent(t);
        }
        "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this));
      }, AnimationItem.prototype.triggerRenderFrameError = function (t) {
        var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
        this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
      }, AnimationItem.prototype.triggerConfigError = function (t) {
        var e = new BMConfigErrorEvent(t, this.currentFrame);
        this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
      };
      var Expressions = (fY = {}, fY.initExpressions = function (t) {
          var e = 0,
            i = [];
          function r() {
            var t,
              e = i.length;
            for (t = 0; t < e; t += 1) {
              i[t].release();
            }
            i.length = 0;
          }
          t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function () {
            e += 1;
          }, t.renderer.globalData.popExpression = function () {
            0 == (e -= 1) && r();
          }, t.renderer.globalData.registerExpressionProperty = function (t) {
            -1 === i.indexOf(t) && i.push(t);
          };
        }, fY),
        fY;
      expressionsPlugin = Expressions;
      var ExpressionManager = function () {
          var ob = {},
            Math = BMMath,
            window = null,
            document = null;
          function $bm_isInstanceOfArray(t) {
            return t.constructor === Array || t.constructor === Float32Array;
          }
          function isNumerable(t, e) {
            return "number" === t || "boolean" === t || "string" === t || e instanceof Number;
          }
          function $bm_neg(t) {
            var e = _typeof(t);
            if ("number" === e || "boolean" === e || t instanceof Number) return -t;
            if ($bm_isInstanceOfArray(t)) {
              var i,
                r = t.length,
                s = [];
              for (i = 0; i < r; i += 1) {
                s[i] = -t[i];
              }
              return s;
            }
            return t.propType ? t.v : void 0;
          }
          var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
            easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
            easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;
          function sum(t, e) {
            var i = _typeof(t),
              r = _typeof(e);
            if ("string" === i || "string" === r) return t + e;
            if (isNumerable(i, t) && isNumerable(r, e)) return t + e;
            if ($bm_isInstanceOfArray(t) && isNumerable(r, e)) return (t = t.slice(0))[0] = t[0] + e, t;
            if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t + e[0], e;
            if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
              for (var s = 0, a = t.length, n = e.length, o = []; s < a || s < n;) {
                ("number" == typeof t[s] || t[s] instanceof Number) && ("number" == typeof e[s] || e[s] instanceof Number) ? o[s] = t[s] + e[s] : o[s] = void 0 === e[s] ? t[s] : t[s] || e[s], s += 1;
              }
              return o;
            }
            return 0;
          }
          var add = sum;
          function sub(t, e) {
            var i = _typeof(t),
              r = _typeof(e);
            if (isNumerable(i, t) && isNumerable(r, e)) return "string" === i && (t = parseInt(t)), "string" === r && (e = parseInt(e)), t - e;
            if ($bm_isInstanceOfArray(t) && isNumerable(r, e)) return (t = t.slice(0))[0] = t[0] - e, t;
            if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t - e[0], e;
            if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
              for (var s = 0, a = t.length, n = e.length, o = []; s < a || s < n;) {
                ("number" == typeof t[s] || t[s] instanceof Number) && ("number" == typeof e[s] || e[s] instanceof Number) ? o[s] = t[s] - e[s] : o[s] = void 0 === e[s] ? t[s] : t[s] || e[s], s += 1;
              }
              return o;
            }
            return 0;
          }
          function mul(t, e) {
            var i,
              r,
              s,
              a = _typeof(t),
              n = _typeof(e);
            if (isNumerable(a, t) && isNumerable(n, e)) return t * e;
            if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
              for (s = t.length, i = createTypedArray("float32", s), r = 0; r < s; r += 1) {
                i[r] = t[r] * e;
              }
              return i;
            }
            if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
              for (s = e.length, i = createTypedArray("float32", s), r = 0; r < s; r += 1) {
                i[r] = t * e[r];
              }
              return i;
            }
            return 0;
          }
          function div(t, e) {
            var i,
              r,
              s,
              a = _typeof(t),
              n = _typeof(e);
            if (isNumerable(a, t) && isNumerable(n, e)) return t / e;
            if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
              for (s = t.length, i = createTypedArray("float32", s), r = 0; r < s; r += 1) {
                i[r] = t[r] / e;
              }
              return i;
            }
            if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
              for (s = e.length, i = createTypedArray("float32", s), r = 0; r < s; r += 1) {
                i[r] = t / e[r];
              }
              return i;
            }
            return 0;
          }
          function mod(t, e) {
            return "string" == typeof t && (t = parseInt(t)), "string" == typeof e && (e = parseInt(e)), t % e;
          }
          var $bm_sum = sum,
            $bm_sub = sub,
            $bm_mul = mul,
            $bm_div = div,
            $bm_mod = mod;
          function clamp(t, e, i) {
            if (i < e) {
              var r = i;
              i = e, e = r;
            }
            return Math.min(Math.max(t, e), i);
          }
          function radiansToDegrees(t) {
            return t / degToRads;
          }
          var radians_to_degrees = radiansToDegrees;
          function degreesToRadians(t) {
            return t * degToRads;
          }
          var degrees_to_radians = radiansToDegrees,
            helperLengthArray = [0, 0, 0, 0, 0, 0];
          function length(t, e) {
            if ("number" == typeof t || t instanceof Number) return e = e || 0, Math.abs(t - e);
            e || (e = helperLengthArray);
            var i,
              r = Math.min(t.length, e.length),
              s = 0;
            for (i = 0; i < r; i += 1) {
              s += Math.pow(e[i] - t[i], 2);
            }
            return Math.sqrt(s);
          }
          function normalize(t) {
            return div(t, length(t));
          }
          function rgbToHsl(t) {
            var e,
              i,
              r = t[0],
              s = t[1],
              a = t[2],
              n = Math.max(r, s, a),
              o = Math.min(r, s, a),
              h = (n + o) / 2;
            if (n == o) e = i = 0;else {
              var l = n - o;
              switch (i = .5 < h ? l / (2 - n - o) : l / (n + o), n) {
                case r:
                  e = (s - a) / l + (s < a ? 6 : 0);
                  break;
                case s:
                  e = (a - r) / l + 2;
                  break;
                case a:
                  e = (r - s) / l + 4;
              }
              e /= 6;
            }
            return [e, i, h, t[3]];
          }
          function hue2rgb(t, e, i) {
            return i < 0 && (i += 1), 1 < i && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t;
          }
          function hslToRgb(t) {
            var e,
              i,
              r,
              s = t[0],
              a = t[1],
              n = t[2];
            if (0 === a) e = i = r = n;else {
              var o = n < .5 ? n * (1 + a) : n + a - n * a,
                h = 2 * n - o;
              e = hue2rgb(h, o, s + 1 / 3), i = hue2rgb(h, o, s), r = hue2rgb(h, o, s - 1 / 3);
            }
            return [e, i, r, t[3]];
          }
          function linear(t, e, i, r, s) {
            if (void 0 !== r && void 0 !== s || (r = e, s = i, e = 0, i = 1), i < e) {
              var a = i;
              i = e, e = a;
            }
            if (t <= e) return r;
            if (i <= t) return s;
            var n = i === e ? 0 : (t - e) / (i - e);
            if (!r.length) return r + (s - r) * n;
            var o,
              h = r.length,
              l = createTypedArray("float32", h);
            for (o = 0; o < h; o += 1) {
              l[o] = r[o] + (s[o] - r[o]) * n;
            }
            return l;
          }
          function random(t, e) {
            if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
              var i,
                r = e.length;
              t || (t = createTypedArray("float32", r));
              var s = createTypedArray("float32", r),
                a = BMMath.random();
              for (i = 0; i < r; i += 1) {
                s[i] = t[i] + a * (e[i] - t[i]);
              }
              return s;
            }
            return void 0 === t && (t = 0), t + BMMath.random() * (e - t);
          }
          function createPath(t, e, i, r) {
            var s,
              a = t.length,
              n = shape_pool.newElement();
            n.setPathData(!!r, a);
            var o,
              h,
              l = [0, 0];
            for (s = 0; s < a; s += 1) {
              o = e && e[s] ? e[s] : l, h = i && i[s] ? i[s] : l, n.setTripleAt(t[s][0], t[s][1], h[0] + t[s][0], h[1] + t[s][1], o[0] + t[s][0], o[1] + t[s][1], s, !0);
            }
            return n;
          }
          function initiateExpression(elem, data, property) {
            var val = data.x,
              needsVelocity = /velocity(?![\w\d])/.test(val),
              _needsRandom = -1 !== val.indexOf("random"),
              elemType = elem.data.ty,
              transform,
              $bm_transform,
              content,
              effect,
              thisProperty = property;
            thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
              get: function get() {
                return thisProperty.v;
              }
            }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
            var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
              outPoint = elem.data.op / elem.comp.globalData.frameRate,
              width = elem.data.sw ? elem.data.sw : 0,
              height = elem.data.sh ? elem.data.sh : 0,
              name = elem.data.nm,
              loopIn,
              loop_in,
              loopOut,
              loop_out,
              smooth,
              toWorld,
              fromWorld,
              fromComp,
              toComp,
              fromCompToSurface,
              position,
              rotation,
              anchorPoint,
              scale,
              thisLayer,
              thisComp,
              mask,
              valueAtTime,
              velocityAtTime,
              __expression_functions = [],
              scoped_bm_rt;
            if (data.xf) {
              var i,
                len = data.xf.length;
              for (i = 0; i < len; i += 1) {
                __expression_functions[i] = eval("(function(){ return " + data.xf[i] + "}())");
              }
            }
            var expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
              numKeys = property.kf ? data.k.length : 0,
              active = !this.data || !0 !== this.data.hd,
              wiggle = function (t, e) {
                var i,
                  r,
                  s = this.pv.length ? this.pv.length : 1,
                  a = createTypedArray("float32", s);
                var n = Math.floor(5 * time);
                for (r = i = 0; i < n;) {
                  for (r = 0; r < s; r += 1) {
                    a[r] += -e + 2 * e * BMMath.random();
                  }
                  i += 1;
                }
                var o = 5 * time,
                  h = o - Math.floor(o),
                  l = createTypedArray("float32", s);
                if (1 < s) {
                  for (r = 0; r < s; r += 1) {
                    l[r] = this.pv[r] + a[r] + (-e + 2 * e * BMMath.random()) * h;
                  }
                  return l;
                }
                return this.pv + a[0] + (-e + 2 * e * BMMath.random()) * h;
              }.bind(this);
            function loopInDuration(t, e) {
              return loopIn(t, e, !0);
            }
            function loopOutDuration(t, e) {
              return loopOut(t, e, !0);
            }
            thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
            var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
              time,
              velocity,
              value,
              text,
              textIndex,
              textTotal,
              selectorValue;
            function lookAt(t, e) {
              var i = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                r = Math.atan2(i[0], Math.sqrt(i[1] * i[1] + i[2] * i[2])) / degToRads;
              return [-Math.atan2(i[1], i[2]) / degToRads, r, 0];
            }
            function easeOut(t, e, i, r, s) {
              return applyEase(easeOutBez, t, e, i, r, s);
            }
            function easeIn(t, e, i, r, s) {
              return applyEase(easeInBez, t, e, i, r, s);
            }
            function ease(t, e, i, r, s) {
              return applyEase(easeInOutBez, t, e, i, r, s);
            }
            function applyEase(t, e, i, r, s, a) {
              void 0 === s ? (s = i, a = r) : e = (e - i) / (r - i);
              var n = t(e = 1 < e ? 1 : e < 0 ? 0 : e);
              if ($bm_isInstanceOfArray(s)) {
                var o,
                  h = s.length,
                  l = createTypedArray("float32", h);
                for (o = 0; o < h; o += 1) {
                  l[o] = (a[o] - s[o]) * n + s[o];
                }
                return l;
              }
              return (a - s) * n + s;
            }
            function nearestKey(t) {
              var e,
                i,
                r,
                s = data.k.length;
              if (data.k.length && "number" != typeof data.k[0]) {
                if (i = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) i = 1, r = data.k[0].t;else {
                  for (e = 0; e < s - 1; e += 1) {
                    if (t === data.k[e].t) {
                      i = e + 1, r = data.k[e].t;
                      break;
                    }
                    if (t > data.k[e].t && t < data.k[e + 1].t) {
                      r = t - data.k[e].t > data.k[e + 1].t - t ? (i = e + 2, data.k[e + 1].t) : (i = e + 1, data.k[e].t);
                      break;
                    }
                  }
                  -1 === i && (i = e + 1, r = data.k[e].t);
                }
              } else r = i = 0;
              var a = {};
              return a.index = i, a.time = r / elem.comp.globalData.frameRate, a;
            }
            function key(t) {
              var e, i, r;
              if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + t);
              t -= 1, e = {
                time: data.k[t].t / elem.comp.globalData.frameRate,
                value: []
              };
              var s = data.k[t].hasOwnProperty("s") ? data.k[t].s : data.k[t - 1].e;
              for (r = s.length, i = 0; i < r; i += 1) {
                e[i] = s[i], e.value[i] = s[i];
              }
              return e;
            }
            function framesToTime(t, e) {
              return e || (e = elem.comp.globalData.frameRate), t / e;
            }
            function timeToFrames(t, e) {
              return t || 0 === t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e;
            }
            function seedRandom(t) {
              BMMath.seedrandom(randSeed + t);
            }
            function sourceRectAtTime() {
              return elem.sourceRectAtTime();
            }
            function substring(t, e) {
              return "string" == typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : "";
            }
            function substr(t, e) {
              return "string" == typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : "";
            }
            function posterizeTime(t) {
              time = 0 === t ? 0 : Math.floor(time * t) / t, value = valueAtTime(time);
            }
            var index = elem.data.ind,
              hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
              parent,
              randSeed = Math.floor(1e6 * Math.random()),
              globalData = elem.globalData;
            function executeExpression(t) {
              return value = t, _needsRandom && seedRandom(randSeed), this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), ($bm_transform = transform) && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, "shape" === scoped_bm_rt.propType && (scoped_bm_rt = scoped_bm_rt.v), scoped_bm_rt);
            }
            return executeExpression;
          }
          return ob.initiateExpression = initiateExpression, ob;
        }(),
        expressionHelpers = {
          searchExpressions: function searchExpressions(t, e, i) {
            e.x && (i.k = !0, i.x = !0, i.initiateExpression = ExpressionManager.initiateExpression, i.effectsSequence.push(i.initiateExpression(t, e, i).bind(i)));
          },
          getSpeedAtTime: function getSpeedAtTime(t) {
            var e = this.getValueAtTime(t),
              i = this.getValueAtTime(t + -.01),
              r = 0;
            if (e.length) {
              var s;
              for (s = 0; s < e.length; s += 1) {
                r += Math.pow(i[s] - e[s], 2);
              }
              r = 100 * Math.sqrt(r);
            } else r = 0;
            return r;
          },
          getVelocityAtTime: function getVelocityAtTime(t) {
            if (void 0 !== this.vel) return this.vel;
            var e,
              i,
              r = this.getValueAtTime(t),
              s = this.getValueAtTime(t + -.001);
            if (r.length) for (e = createTypedArray("float32", r.length), i = 0; i < r.length; i += 1) {
              e[i] = (s[i] - r[i]) / -.001;
            } else e = (s - r) / -.001;
            return e;
          },
          getValueAtTime: function getValueAtTime(t) {
            return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value;
          },
          getStaticValueAtTime: function getStaticValueAtTime() {
            return this.pv;
          },
          setGroupProperty: function setGroupProperty(t) {
            this.propertyGroup = t;
          }
        };
      !function () {
        function o(t, e, i) {
          if (!this.k || !this.keyframes) return this.pv;
          t = t ? t.toLowerCase() : "";
          var r,
            s,
            a,
            n,
            o,
            h = this.comp.renderedFrame,
            l = this.keyframes,
            p = l[l.length - 1].t;
          if (h <= p) return this.pv;
          if (i ? s = p - (r = e ? Math.abs(p - elem.comp.globalData.frameRate * e) : Math.max(0, p - this.elem.data.ip)) : ((!e || e > l.length - 1) && (e = l.length - 1), r = p - (s = l[l.length - 1 - e].t)), "pingpong" === t) {
            if (Math.floor((h - s) / r) % 2 != 0) return this.getValueAtTime((r - (h - s) % r + s) / this.comp.globalData.frameRate, 0);
          } else {
            if ("offset" === t) {
              var m = this.getValueAtTime(s / this.comp.globalData.frameRate, 0),
                f = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                c = this.getValueAtTime(((h - s) % r + s) / this.comp.globalData.frameRate, 0),
                d = Math.floor((h - s) / r);
              if (this.pv.length) {
                for (n = (o = new Array(m.length)).length, a = 0; a < n; a += 1) {
                  o[a] = (f[a] - m[a]) * d + c[a];
                }
                return o;
              }
              return (f - m) * d + c;
            }
            if ("continue" === t) {
              var u = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                y = this.getValueAtTime((p - .001) / this.comp.globalData.frameRate, 0);
              if (this.pv.length) {
                for (n = (o = new Array(u.length)).length, a = 0; a < n; a += 1) {
                  o[a] = u[a] + (u[a] - y[a]) * ((h - p) / this.comp.globalData.frameRate) / 5e-4;
                }
                return o;
              }
              return u + (h - p) / .001 * (u - y);
            }
          }
          return this.getValueAtTime(((h - s) % r + s) / this.comp.globalData.frameRate, 0);
        }
        function h(t, e, i) {
          if (!this.k) return this.pv;
          t = t ? t.toLowerCase() : "";
          var r,
            s,
            a,
            n,
            o,
            h = this.comp.renderedFrame,
            l = this.keyframes,
            p = l[0].t;
          if (p <= h) return this.pv;
          if (i ? s = p + (r = e ? Math.abs(elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - p)) : ((!e || e > l.length - 1) && (e = l.length - 1), r = (s = l[e].t) - p), "pingpong" === t) {
            if (Math.floor((p - h) / r) % 2 == 0) return this.getValueAtTime(((p - h) % r + p) / this.comp.globalData.frameRate, 0);
          } else {
            if ("offset" === t) {
              var m = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                f = this.getValueAtTime(s / this.comp.globalData.frameRate, 0),
                c = this.getValueAtTime((r - (p - h) % r + p) / this.comp.globalData.frameRate, 0),
                d = Math.floor((p - h) / r) + 1;
              if (this.pv.length) {
                for (n = (o = new Array(m.length)).length, a = 0; a < n; a += 1) {
                  o[a] = c[a] - (f[a] - m[a]) * d;
                }
                return o;
              }
              return c - (f - m) * d;
            }
            if ("continue" === t) {
              var u = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                y = this.getValueAtTime((p + .001) / this.comp.globalData.frameRate, 0);
              if (this.pv.length) {
                for (n = (o = new Array(u.length)).length, a = 0; a < n; a += 1) {
                  o[a] = u[a] + (u[a] - y[a]) * (p - h) / .001;
                }
                return o;
              }
              return u + (u - y) * (p - h) / .001;
            }
          }
          return this.getValueAtTime((r - (p - h) % r + p) / this.comp.globalData.frameRate, 0);
        }
        function l(t, e) {
          if (!this.k) return this.pv;
          if (t = .5 * (t || .4), (e = Math.floor(e || 5)) <= 1) return this.pv;
          var i,
            r,
            s = this.comp.renderedFrame / this.comp.globalData.frameRate,
            a = s - t,
            n = 1 < e ? (s + t - a) / (e - 1) : 1,
            o = 0,
            h = 0;
          for (i = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < e;) {
            if (r = this.getValueAtTime(a + o * n), this.pv.length) for (h = 0; h < this.pv.length; h += 1) {
              i[h] += r[h];
            } else i += r;
            o += 1;
          }
          if (this.pv.length) for (h = 0; h < this.pv.length; h += 1) {
            i[h] /= e;
          } else i /= e;
          return i;
        }
        var s = TransformPropertyFactory.getTransformProperty;
        TransformPropertyFactory.getTransformProperty = function (t, e, i) {
          var r = s(t, e, i);
          return r.dynamicProperties.length ? r.getValueAtTime = function (t) {
            this._transformCachingAtTime || (this._transformCachingAtTime = {
              v: new Matrix()
            });
            var e = this._transformCachingAtTime.v;
            if (e.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
              var i = this.a.getValueAtTime(t);
              e.translate(-i[0] * this.a.mult, -i[1] * this.a.mult, i[2] * this.a.mult);
            }
            if (this.appliedTransformations < 2) {
              var r = this.s.getValueAtTime(t);
              e.scale(r[0] * this.s.mult, r[1] * this.s.mult, r[2] * this.s.mult);
            }
            if (this.sk && this.appliedTransformations < 3) {
              var s = this.sk.getValueAtTime(t),
                a = this.sa.getValueAtTime(t);
              e.skewFromAxis(-s * this.sk.mult, a * this.sa.mult);
            }
            if (this.r && this.appliedTransformations < 4) {
              var n = this.r.getValueAtTime(t);
              e.rotate(-n * this.r.mult);
            } else if (!this.r && this.appliedTransformations < 4) {
              var o = this.rz.getValueAtTime(t),
                h = this.ry.getValueAtTime(t),
                l = this.rx.getValueAtTime(t),
                p = this.or.getValueAtTime(t);
              e.rotateZ(-o * this.rz.mult).rotateY(h * this.ry.mult).rotateX(l * this.rx.mult).rotateZ(-p[2] * this.or.mult).rotateY(p[1] * this.or.mult).rotateX(p[0] * this.or.mult);
            }
            if (this.data.p && this.data.p.s) {
              var m = this.px.getValueAtTime(t),
                f = this.py.getValueAtTime(t);
              if (this.data.p.z) {
                var c = this.pz.getValueAtTime(t);
                e.translate(m * this.px.mult, f * this.py.mult, -c * this.pz.mult);
              } else e.translate(m * this.px.mult, f * this.py.mult, 0);
            } else {
              var d = this.p.getValueAtTime(t);
              e.translate(d[0] * this.p.mult, d[1] * this.p.mult, -d[2] * this.p.mult);
            }
            return e;
          }.bind(r) : r.getValueAtTime = function (t) {
            return this.v.clone(new Matrix());
          }.bind(r), r.setGroupProperty = expressionHelpers.setGroupProperty, r;
        };
        var p = PropertyFactory.getProp;
        PropertyFactory.getProp = function (t, e, i, r, s) {
          var a = p(t, e, i, r, s);
          a.kf ? a.getValueAtTime = expressionHelpers.getValueAtTime.bind(a) : a.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(a), a.setGroupProperty = expressionHelpers.setGroupProperty, a.loopOut = o, a.loopIn = h, a.smooth = l, a.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(a), a.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(a), a.numKeys = 1 === e.a ? e.k.length : 0, a.propertyIndex = e.ix;
          var n = 0;
          return 0 !== i && (n = createTypedArray("float32", 1 === e.a ? e.k[0].s.length : e.k.length)), a._cachingAtTime = {
            lastFrame: initialDefaultFrame,
            lastIndex: 0,
            value: n
          }, expressionHelpers.searchExpressions(t, e, a), a.k && s.addDynamicProperty(a), a;
        };
        var t = ShapePropertyFactory.getConstructorFunction(),
          e = ShapePropertyFactory.getKeyframedConstructorFunction();
        function i() {}
        i.prototype = {
          vertices: function vertices(t, e) {
            this.k && this.getValue();
            var i = this.v;
            void 0 !== e && (i = this.getValueAtTime(e, 0));
            var r,
              s = i._length,
              a = i[t],
              n = i.v,
              o = createSizedArray(s);
            for (r = 0; r < s; r += 1) {
              o[r] = "i" === t || "o" === t ? [a[r][0] - n[r][0], a[r][1] - n[r][1]] : [a[r][0], a[r][1]];
            }
            return o;
          },
          points: function points(t) {
            return this.vertices("v", t);
          },
          inTangents: function inTangents(t) {
            return this.vertices("i", t);
          },
          outTangents: function outTangents(t) {
            return this.vertices("o", t);
          },
          isClosed: function isClosed() {
            return this.v.c;
          },
          pointOnPath: function pointOnPath(t, e) {
            var i = this.v;
            void 0 !== e && (i = this.getValueAtTime(e, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(i));
            for (var r, s = this._segmentsLength, a = s.lengths, n = s.totalLength * t, o = 0, h = a.length, l = 0; o < h;) {
              if (l + a[o].addedLength > n) {
                var p = o,
                  m = i.c && o === h - 1 ? 0 : o + 1,
                  f = (n - l) / a[o].addedLength;
                r = bez.getPointInSegment(i.v[p], i.v[m], i.o[p], i.i[m], f, a[o]);
                break;
              }
              l += a[o].addedLength, o += 1;
            }
            return r || (r = i.c ? [i.v[0][0], i.v[0][1]] : [i.v[i._length - 1][0], i.v[i._length - 1][1]]), r;
          },
          vectorOnPath: function vectorOnPath(t, e, i) {
            t = 1 == t ? this.v.c ? 0 : .999 : t;
            var r = this.pointOnPath(t, e),
              s = this.pointOnPath(t + .001, e),
              a = s[0] - r[0],
              n = s[1] - r[1],
              o = Math.sqrt(Math.pow(a, 2) + Math.pow(n, 2));
            return 0 === o ? [0, 0] : "tangent" === i ? [a / o, n / o] : [-n / o, a / o];
          },
          tangentOnPath: function tangentOnPath(t, e) {
            return this.vectorOnPath(t, e, "tangent");
          },
          normalOnPath: function normalOnPath(t, e) {
            return this.vectorOnPath(t, e, "normal");
          },
          setGroupProperty: expressionHelpers.setGroupProperty,
          getValueAtTime: expressionHelpers.getStaticValueAtTime
        }, extendPrototype([i], t), extendPrototype([i], e), e.prototype.getValueAtTime = function (t) {
          return this._cachingAtTime || (this._cachingAtTime = {
            shapeValue: shape_pool.clone(this.pv),
            lastIndex: 0,
            lastTime: initialDefaultFrame
          }), t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t, this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue;
        }, e.prototype.initiateExpression = ExpressionManager.initiateExpression;
        var n = ShapePropertyFactory.getShapeProp;
        ShapePropertyFactory.getShapeProp = function (t, e, i, r, s) {
          var a = n(t, e, i, r, s);
          return a.propertyIndex = e.ix, a.lock = !1, 3 === i ? expressionHelpers.searchExpressions(t, e.pt, a) : 4 === i && expressionHelpers.searchExpressions(t, e.ks, a), a.k && t.addDynamicProperty(a), a;
        };
      }(), TextProperty.prototype.getExpressionValue = function (t, e) {
        var i = this.calculateExpression(e);
        if (t.t === i) return t;
        var r = {};
        return this.copyData(r, t), r.t = i.toString(), r.__complete = !1, r;
      }, TextProperty.prototype.searchProperty = function () {
        var t = this.searchKeyframes(),
          e = this.searchExpressions();
        return this.kf = t || e, this.kf;
      }, TextProperty.prototype.searchExpressions = function () {
        if (this.data.d.x) return this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0;
      };
      var ShapePathInterface = function ShapePathInterface(t, e, i) {
          var r = e.sh;
          function s(t) {
            if ("Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t) return s.path;
          }
          var a = propertyGroupFactory(s, i);
          return r.setGroupProperty(PropertyInterface("Path", a)), Object.defineProperties(s, {
            path: {
              get: function get() {
                return r.k && r.getValue(), r;
              }
            },
            shape: {
              get: function get() {
                return r.k && r.getValue(), r;
              }
            },
            _name: {
              value: t.nm
            },
            ix: {
              value: t.ix
            },
            propertyIndex: {
              value: t.ix
            },
            mn: {
              value: t.mn
            },
            propertyGroup: {
              value: i
            }
          }), s;
        },
        propertyGroupFactory = function propertyGroupFactory(e, i) {
          return function (t) {
            return (t = void 0 === t ? 1 : t) <= 0 ? e : i(t - 1);
          };
        },
        PropertyInterface = function PropertyInterface(t, e) {
          var i = {
            _name: t
          };
          return function (t) {
            return (t = void 0 === t ? 1 : t) <= 0 ? i : e(--t);
          };
        },
        ShapeExpressionInterface = function () {
          function n(t, e, i) {
            var r,
              s = [],
              a = t ? t.length : 0;
            for (r = 0; r < a; r += 1) {
              "gr" == t[r].ty ? s.push(o(t[r], e[r], i)) : "fl" == t[r].ty ? s.push(h(t[r], e[r], i)) : "st" == t[r].ty ? s.push(l(t[r], e[r], i)) : "tm" == t[r].ty ? s.push(p(t[r], e[r], i)) : "tr" == t[r].ty || ("el" == t[r].ty ? s.push(f(t[r], e[r], i)) : "sr" == t[r].ty ? s.push(c(t[r], e[r], i)) : "sh" == t[r].ty ? s.push(ShapePathInterface(t[r], e[r], i)) : "rc" == t[r].ty ? s.push(d(t[r], e[r], i)) : "rd" == t[r].ty ? s.push(u(t[r], e[r], i)) : "rp" == t[r].ty && s.push(y(t[r], e[r], i)));
            }
            return s;
          }
          function o(t, e, i) {
            var r = function r(t) {
              switch (t) {
                case "ADBE Vectors Group":
                case "Contents":
                case 2:
                  return r.content;
                default:
                  return r.transform;
              }
            };
            r.propertyGroup = propertyGroupFactory(r, i);
            var s = function (t, e, i) {
                var r,
                  s = function s(t) {
                    for (var e = 0, i = r.length; e < i;) {
                      if (r[e]._name === t || r[e].mn === t || r[e].propertyIndex === t || r[e].ix === t || r[e].ind === t) return r[e];
                      e += 1;
                    }
                    if ("number" == typeof t) return r[t - 1];
                  };
                s.propertyGroup = propertyGroupFactory(s, i), r = n(t.it, e.it, s.propertyGroup), s.numProperties = r.length;
                var a = m(t.it[t.it.length - 1], e.it[e.it.length - 1], s.propertyGroup);
                return s.transform = a, s.propertyIndex = t.cix, s._name = t.nm, s;
              }(t, e, r.propertyGroup),
              a = m(t.it[t.it.length - 1], e.it[e.it.length - 1], r.propertyGroup);
            return r.content = s, r.transform = a, Object.defineProperty(r, "_name", {
              get: function get() {
                return t.nm;
              }
            }), r.numProperties = t.np, r.propertyIndex = t.ix, r.nm = t.nm, r.mn = t.mn, r;
          }
          function h(t, e, i) {
            function r(t) {
              return "Color" === t || "color" === t ? r.color : "Opacity" === t || "opacity" === t ? r.opacity : void 0;
            }
            return Object.defineProperties(r, {
              color: {
                get: ExpressionPropertyInterface(e.c)
              },
              opacity: {
                get: ExpressionPropertyInterface(e.o)
              },
              _name: {
                value: t.nm
              },
              mn: {
                value: t.mn
              }
            }), e.c.setGroupProperty(PropertyInterface("Color", i)), e.o.setGroupProperty(PropertyInterface("Opacity", i)), r;
          }
          function l(t, e, i) {
            var r = propertyGroupFactory(l, i),
              s = propertyGroupFactory(h, r);
            var a,
              n,
              o = t.d ? t.d.length : 0,
              h = {};
            for (a = 0; a < o; a += 1) {
              n = a, Object.defineProperty(h, t.d[n].nm, {
                get: ExpressionPropertyInterface(e.d.dataProps[n].p)
              }), e.d.dataProps[a].p.setGroupProperty(s);
            }
            function l(t) {
              return "Color" === t || "color" === t ? l.color : "Opacity" === t || "opacity" === t ? l.opacity : "Stroke Width" === t || "stroke width" === t ? l.strokeWidth : void 0;
            }
            return Object.defineProperties(l, {
              color: {
                get: ExpressionPropertyInterface(e.c)
              },
              opacity: {
                get: ExpressionPropertyInterface(e.o)
              },
              strokeWidth: {
                get: ExpressionPropertyInterface(e.w)
              },
              dash: {
                get: function get() {
                  return h;
                }
              },
              _name: {
                value: t.nm
              },
              mn: {
                value: t.mn
              }
            }), e.c.setGroupProperty(PropertyInterface("Color", r)), e.o.setGroupProperty(PropertyInterface("Opacity", r)), e.w.setGroupProperty(PropertyInterface("Stroke Width", r)), l;
          }
          function p(e, t, i) {
            function r(t) {
              return t === e.e.ix || "End" === t || "end" === t ? r.end : t === e.s.ix ? r.start : t === e.o.ix ? r.offset : void 0;
            }
            var s = propertyGroupFactory(r, i);
            return r.propertyIndex = e.ix, t.s.setGroupProperty(PropertyInterface("Start", s)), t.e.setGroupProperty(PropertyInterface("End", s)), t.o.setGroupProperty(PropertyInterface("Offset", s)), r.propertyIndex = e.ix, r.propertyGroup = i, Object.defineProperties(r, {
              start: {
                get: ExpressionPropertyInterface(t.s)
              },
              end: {
                get: ExpressionPropertyInterface(t.e)
              },
              offset: {
                get: ExpressionPropertyInterface(t.o)
              },
              _name: {
                value: e.nm
              }
            }), r.mn = e.mn, r;
          }
          function m(e, t, i) {
            function r(t) {
              return e.a.ix === t || "Anchor Point" === t ? r.anchorPoint : e.o.ix === t || "Opacity" === t ? r.opacity : e.p.ix === t || "Position" === t ? r.position : e.r.ix === t || "Rotation" === t || "ADBE Vector Rotation" === t ? r.rotation : e.s.ix === t || "Scale" === t ? r.scale : e.sk && e.sk.ix === t || "Skew" === t ? r.skew : e.sa && e.sa.ix === t || "Skew Axis" === t ? r.skewAxis : void 0;
            }
            var s = propertyGroupFactory(r, i);
            return t.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", s)), t.transform.mProps.p.setGroupProperty(PropertyInterface("Position", s)), t.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", s)), t.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", s)), t.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", s)), t.transform.mProps.sk && (t.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", s)), t.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", s))), t.transform.op.setGroupProperty(PropertyInterface("Opacity", s)), Object.defineProperties(r, {
              opacity: {
                get: ExpressionPropertyInterface(t.transform.mProps.o)
              },
              position: {
                get: ExpressionPropertyInterface(t.transform.mProps.p)
              },
              anchorPoint: {
                get: ExpressionPropertyInterface(t.transform.mProps.a)
              },
              scale: {
                get: ExpressionPropertyInterface(t.transform.mProps.s)
              },
              rotation: {
                get: ExpressionPropertyInterface(t.transform.mProps.r)
              },
              skew: {
                get: ExpressionPropertyInterface(t.transform.mProps.sk)
              },
              skewAxis: {
                get: ExpressionPropertyInterface(t.transform.mProps.sa)
              },
              _name: {
                value: e.nm
              }
            }), r.ty = "tr", r.mn = e.mn, r.propertyGroup = i, r;
          }
          function f(e, t, i) {
            function r(t) {
              return e.p.ix === t ? r.position : e.s.ix === t ? r.size : void 0;
            }
            var s = propertyGroupFactory(r, i);
            r.propertyIndex = e.ix;
            var a = "tm" === t.sh.ty ? t.sh.prop : t.sh;
            return a.s.setGroupProperty(PropertyInterface("Size", s)), a.p.setGroupProperty(PropertyInterface("Position", s)), Object.defineProperties(r, {
              size: {
                get: ExpressionPropertyInterface(a.s)
              },
              position: {
                get: ExpressionPropertyInterface(a.p)
              },
              _name: {
                value: e.nm
              }
            }), r.mn = e.mn, r;
          }
          function c(e, t, i) {
            function r(t) {
              return e.p.ix === t ? r.position : e.r.ix === t ? r.rotation : e.pt.ix === t ? r.points : e.or.ix === t || "ADBE Vector Star Outer Radius" === t ? r.outerRadius : e.os.ix === t ? r.outerRoundness : !e.ir || e.ir.ix !== t && "ADBE Vector Star Inner Radius" !== t ? e.is && e.is.ix === t ? r.innerRoundness : void 0 : r.innerRadius;
            }
            var s = propertyGroupFactory(r, i),
              a = "tm" === t.sh.ty ? t.sh.prop : t.sh;
            return r.propertyIndex = e.ix, a.or.setGroupProperty(PropertyInterface("Outer Radius", s)), a.os.setGroupProperty(PropertyInterface("Outer Roundness", s)), a.pt.setGroupProperty(PropertyInterface("Points", s)), a.p.setGroupProperty(PropertyInterface("Position", s)), a.r.setGroupProperty(PropertyInterface("Rotation", s)), e.ir && (a.ir.setGroupProperty(PropertyInterface("Inner Radius", s)), a.is.setGroupProperty(PropertyInterface("Inner Roundness", s))), Object.defineProperties(r, {
              position: {
                get: ExpressionPropertyInterface(a.p)
              },
              rotation: {
                get: ExpressionPropertyInterface(a.r)
              },
              points: {
                get: ExpressionPropertyInterface(a.pt)
              },
              outerRadius: {
                get: ExpressionPropertyInterface(a.or)
              },
              outerRoundness: {
                get: ExpressionPropertyInterface(a.os)
              },
              innerRadius: {
                get: ExpressionPropertyInterface(a.ir)
              },
              innerRoundness: {
                get: ExpressionPropertyInterface(a.is)
              },
              _name: {
                value: e.nm
              }
            }), r.mn = e.mn, r;
          }
          function d(e, t, i) {
            function r(t) {
              return e.p.ix === t ? r.position : e.r.ix === t ? r.roundness : e.s.ix === t || "Size" === t || "ADBE Vector Rect Size" === t ? r.size : void 0;
            }
            var s = propertyGroupFactory(r, i),
              a = "tm" === t.sh.ty ? t.sh.prop : t.sh;
            return r.propertyIndex = e.ix, a.p.setGroupProperty(PropertyInterface("Position", s)), a.s.setGroupProperty(PropertyInterface("Size", s)), a.r.setGroupProperty(PropertyInterface("Rotation", s)), Object.defineProperties(r, {
              position: {
                get: ExpressionPropertyInterface(a.p)
              },
              roundness: {
                get: ExpressionPropertyInterface(a.r)
              },
              size: {
                get: ExpressionPropertyInterface(a.s)
              },
              _name: {
                value: e.nm
              }
            }), r.mn = e.mn, r;
          }
          function u(e, t, i) {
            function r(t) {
              if (e.r.ix === t || "Round Corners 1" === t) return r.radius;
            }
            var s = propertyGroupFactory(r, i),
              a = t;
            return r.propertyIndex = e.ix, a.rd.setGroupProperty(PropertyInterface("Radius", s)), Object.defineProperties(r, {
              radius: {
                get: ExpressionPropertyInterface(a.rd)
              },
              _name: {
                value: e.nm
              }
            }), r.mn = e.mn, r;
          }
          function y(e, t, i) {
            function r(t) {
              return e.c.ix === t || "Copies" === t ? r.copies : e.o.ix === t || "Offset" === t ? r.offset : void 0;
            }
            var s = propertyGroupFactory(r, i),
              a = t;
            return r.propertyIndex = e.ix, a.c.setGroupProperty(PropertyInterface("Copies", s)), a.o.setGroupProperty(PropertyInterface("Offset", s)), Object.defineProperties(r, {
              copies: {
                get: ExpressionPropertyInterface(a.c)
              },
              offset: {
                get: ExpressionPropertyInterface(a.o)
              },
              _name: {
                value: e.nm
              }
            }), r.mn = e.mn, r;
          }
          return function (t, e, r) {
            var s;
            function i(t) {
              if ("number" == typeof t) return 0 === (t = void 0 === t ? 1 : t) ? r : s[t - 1];
              for (var e = 0, i = s.length; e < i;) {
                if (s[e]._name === t) return s[e];
                e += 1;
              }
            }
            return i.propertyGroup = propertyGroupFactory(i, function () {
              return r;
            }), s = n(t, e, i.propertyGroup), i.numProperties = s.length, i._name = "Contents", i;
          };
        }(),
        TextExpressionInterface = function TextExpressionInterface(e) {
          var i;
          function r(t) {
            switch (t) {
              case "ADBE Text Document":
                return r.sourceText;
            }
          }
          return Object.defineProperty(r, "sourceText", {
            get: function get() {
              e.textProperty.getValue();
              var t = e.textProperty.currentData.t;
              return void 0 !== t && (e.textProperty.currentData.t = void 0, (i = new String(t)).value = t || new String(t)), i;
            }
          }), r;
        },
        LayerExpressionInterface = function () {
          function s(t) {
            var e = new Matrix();
            void 0 !== t ? this._elem.finalTransform.mProp.getValueAtTime(t).clone(e) : this._elem.finalTransform.mProp.applyToMatrix(e);
            return e;
          }
          function a(t, e) {
            var i = this.getMatrix(e);
            return i.props[12] = i.props[13] = i.props[14] = 0, this.applyPoint(i, t);
          }
          function n(t, e) {
            var i = this.getMatrix(e);
            return this.applyPoint(i, t);
          }
          function o(t, e) {
            var i = this.getMatrix(e);
            return i.props[12] = i.props[13] = i.props[14] = 0, this.invertPoint(i, t);
          }
          function h(t, e) {
            var i = this.getMatrix(e);
            return this.invertPoint(i, t);
          }
          function l(t, e) {
            if (this._elem.hierarchy && this._elem.hierarchy.length) {
              var i,
                r = this._elem.hierarchy.length;
              for (i = 0; i < r; i += 1) {
                this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(t);
              }
            }
            return t.applyToPointArray(e[0], e[1], e[2] || 0);
          }
          function p(t, e) {
            if (this._elem.hierarchy && this._elem.hierarchy.length) {
              var i,
                r = this._elem.hierarchy.length;
              for (i = 0; i < r; i += 1) {
                this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(t);
              }
            }
            return t.inversePoint(e);
          }
          function m(t) {
            var e = new Matrix();
            if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
              var i,
                r = this._elem.hierarchy.length;
              for (i = 0; i < r; i += 1) {
                this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(e);
              }
              return e.inversePoint(t);
            }
            return e.inversePoint(t);
          }
          function f() {
            return [1, 1, 1, 1];
          }
          return function (e) {
            var i;
            function r(t) {
              switch (t) {
                case "ADBE Root Vectors Group":
                case "Contents":
                case 2:
                  return r.shapeInterface;
                case 1:
                case 6:
                case "Transform":
                case "transform":
                case "ADBE Transform Group":
                  return i;
                case 4:
                case "ADBE Effect Parade":
                case "effects":
                case "Effects":
                  return r.effect;
                case "ADBE Text Properties":
                  return r.textInterface;
              }
            }
            r.getMatrix = s, r.invertPoint = p, r.applyPoint = l, r.toWorld = n, r.toWorldVec = a, r.fromWorld = h, r.fromWorldVec = o, r.toComp = n, r.fromComp = m, r.sampleImage = f, r.sourceRectAtTime = e.sourceRectAtTime.bind(e);
            var t = getDescriptor(i = TransformExpressionInterface((r._elem = e).finalTransform.mProp), "anchorPoint");
            return Object.defineProperties(r, {
              hasParent: {
                get: function get() {
                  return e.hierarchy.length;
                }
              },
              parent: {
                get: function get() {
                  return e.hierarchy[0].layerInterface;
                }
              },
              rotation: getDescriptor(i, "rotation"),
              scale: getDescriptor(i, "scale"),
              position: getDescriptor(i, "position"),
              opacity: getDescriptor(i, "opacity"),
              anchorPoint: t,
              anchor_point: t,
              transform: {
                get: function get() {
                  return i;
                }
              },
              active: {
                get: function get() {
                  return e.isInRange;
                }
              }
            }), r.startTime = e.data.st, r.index = e.data.ind, r.source = e.data.refId, r.height = 0 === e.data.ty ? e.data.h : 100, r.width = 0 === e.data.ty ? e.data.w : 100, r.inPoint = e.data.ip / e.comp.globalData.frameRate, r.outPoint = e.data.op / e.comp.globalData.frameRate, r._name = e.data.nm, r.registerMaskInterface = function (t) {
              r.mask = new MaskManagerInterface(t, e);
            }, r.registerEffectsInterface = function (t) {
              r.effect = t;
            }, r;
          };
        }(),
        CompExpressionInterface = function CompExpressionInterface(r) {
          function t(t) {
            for (var e = 0, i = r.layers.length; e < i;) {
              if (r.layers[e].nm === t || r.layers[e].ind === t) return r.elements[e].layerInterface;
              e += 1;
            }
            return null;
          }
          return Object.defineProperty(t, "_name", {
            value: r.data.nm
          }), (t.layer = t).pixelAspect = 1, t.height = r.data.h || r.globalData.compSize.h, t.width = r.data.w || r.globalData.compSize.w, t.pixelAspect = 1, t.frameDuration = 1 / r.globalData.frameRate, t.displayStartTime = 0, t.numLayers = r.layers.length, t;
        },
        TransformExpressionInterface = function TransformExpressionInterface(t) {
          function e(t) {
            switch (t) {
              case "scale":
              case "Scale":
              case "ADBE Scale":
              case 6:
                return e.scale;
              case "rotation":
              case "Rotation":
              case "ADBE Rotation":
              case "ADBE Rotate Z":
              case 10:
                return e.rotation;
              case "ADBE Rotate X":
                return e.xRotation;
              case "ADBE Rotate Y":
                return e.yRotation;
              case "position":
              case "Position":
              case "ADBE Position":
              case 2:
                return e.position;
              case "ADBE Position_0":
                return e.xPosition;
              case "ADBE Position_1":
                return e.yPosition;
              case "ADBE Position_2":
                return e.zPosition;
              case "anchorPoint":
              case "AnchorPoint":
              case "Anchor Point":
              case "ADBE AnchorPoint":
              case 1:
                return e.anchorPoint;
              case "opacity":
              case "Opacity":
              case 11:
                return e.opacity;
            }
          }
          if (Object.defineProperty(e, "rotation", {
            get: ExpressionPropertyInterface(t.r || t.rz)
          }), Object.defineProperty(e, "zRotation", {
            get: ExpressionPropertyInterface(t.rz || t.r)
          }), Object.defineProperty(e, "xRotation", {
            get: ExpressionPropertyInterface(t.rx)
          }), Object.defineProperty(e, "yRotation", {
            get: ExpressionPropertyInterface(t.ry)
          }), Object.defineProperty(e, "scale", {
            get: ExpressionPropertyInterface(t.s)
          }), t.p) var i = ExpressionPropertyInterface(t.p);else {
            var r,
              s = ExpressionPropertyInterface(t.px),
              a = ExpressionPropertyInterface(t.py);
            t.pz && (r = ExpressionPropertyInterface(t.pz));
          }
          return Object.defineProperty(e, "position", {
            get: function get() {
              return t.p ? i() : [s(), a(), r ? r() : 0];
            }
          }), Object.defineProperty(e, "xPosition", {
            get: ExpressionPropertyInterface(t.px)
          }), Object.defineProperty(e, "yPosition", {
            get: ExpressionPropertyInterface(t.py)
          }), Object.defineProperty(e, "zPosition", {
            get: ExpressionPropertyInterface(t.pz)
          }), Object.defineProperty(e, "anchorPoint", {
            get: ExpressionPropertyInterface(t.a)
          }), Object.defineProperty(e, "opacity", {
            get: ExpressionPropertyInterface(t.o)
          }), Object.defineProperty(e, "skew", {
            get: ExpressionPropertyInterface(t.sk)
          }), Object.defineProperty(e, "skewAxis", {
            get: ExpressionPropertyInterface(t.sa)
          }), Object.defineProperty(e, "orientation", {
            get: ExpressionPropertyInterface(t.or)
          }), e;
        },
        ProjectInterface = function () {
          function e(t) {
            this.compositions.push(t);
          }
          return function () {
            function t(t) {
              for (var e = 0, i = this.compositions.length; e < i;) {
                if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
                e += 1;
              }
            }
            return t.compositions = [], t.currentFrame = 0, t.registerComposition = e, t;
          };
        }(),
        EffectsExpressionInterface = function () {
          function l(s, t, e, i) {
            function r(t) {
              for (var e = s.ef, i = 0, r = e.length; i < r;) {
                if (t === e[i].nm || t === e[i].mn || t === e[i].ix) return 5 === e[i].ty ? o[i] : o[i]();
                i += 1;
              }
              throw new Error();
            }
            var a,
              n = propertyGroupFactory(r, e),
              o = [],
              h = s.ef.length;
            for (a = 0; a < h; a += 1) {
              5 === s.ef[a].ty ? o.push(l(s.ef[a], t.effectElements[a], t.effectElements[a].propertyGroup, i)) : o.push(p(t.effectElements[a], s.ef[a].ty, i, n));
            }
            return "ADBE Color Control" === s.mn && Object.defineProperty(r, "color", {
              get: function get() {
                return o[0]();
              }
            }), Object.defineProperties(r, {
              numProperties: {
                get: function get() {
                  return s.np;
                }
              },
              _name: {
                value: s.nm
              },
              propertyGroup: {
                value: n
              }
            }), r.active = r.enabled = 0 !== s.en, r;
          }
          function p(t, e, i, r) {
            var s = ExpressionPropertyInterface(t.p);
            return t.p.setGroupProperty && t.p.setGroupProperty(PropertyInterface("", r)), function () {
              return 10 === e ? i.comp.compInterface(t.p.v) : s();
            };
          }
          return {
            createEffectsInterface: function createEffectsInterface(t, e) {
              if (t.effectsManager) {
                var i,
                  r = [],
                  s = t.data.ef,
                  a = t.effectsManager.effectElements.length;
                for (i = 0; i < a; i += 1) {
                  r.push(l(s[i], t.effectsManager.effectElements[i], e, t));
                }
                var n = t.data.ef || [],
                  o = function o(t) {
                    for (i = 0, a = n.length; i < a;) {
                      if (t === n[i].nm || t === n[i].mn || t === n[i].ix) return r[i];
                      i += 1;
                    }
                  };
                return Object.defineProperty(o, "numProperties", {
                  get: function get() {
                    return n.length;
                  }
                }), o;
              }
            }
          };
        }(),
        MaskManagerInterface = function () {
          function a(t, e) {
            this._mask = t, this._data = e;
          }
          Object.defineProperty(a.prototype, "maskPath", {
            get: function get() {
              return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop;
            }
          }), Object.defineProperty(a.prototype, "maskOpacity", {
            get: function get() {
              return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v;
            }
          });
          return function (e, t) {
            var i,
              r = createSizedArray(e.viewData.length),
              s = e.viewData.length;
            for (i = 0; i < s; i += 1) {
              r[i] = new a(e.viewData[i], e.masksProperties[i]);
            }
            return function (t) {
              for (i = 0; i < s;) {
                if (e.masksProperties[i].nm === t) return r[i];
                i += 1;
              }
            };
          };
        }(),
        ExpressionPropertyInterface = function () {
          var s = {
              pv: 0,
              v: 0,
              mult: 1
            },
            n = {
              pv: [0, 0, 0],
              v: [0, 0, 0],
              mult: 1
            };
          function o(r, s, a) {
            Object.defineProperty(r, "velocity", {
              get: function get() {
                return s.getVelocityAtTime(s.comp.currentFrame);
              }
            }), r.numKeys = s.keyframes ? s.keyframes.length : 0, r.key = function (t) {
              if (r.numKeys) {
                var e = "";
                e = "s" in s.keyframes[t - 1] ? s.keyframes[t - 1].s : "e" in s.keyframes[t - 2] ? s.keyframes[t - 2].e : s.keyframes[t - 2].s;
                var i = "unidimensional" === a ? new Number(e) : Object.assign({}, e);
                return i.time = s.keyframes[t - 1].t / s.elem.comp.globalData.frameRate, i.value = "unidimensional" === a ? e[0] : e, i;
              }
              return 0;
            }, r.valueAtTime = s.getValueAtTime, r.speedAtTime = s.getSpeedAtTime, r.velocityAtTime = s.getVelocityAtTime, r.propertyGroup = s.propertyGroup;
          }
          function e() {
            return s;
          }
          return function (t) {
            return t ? "unidimensional" === t.propType ? function (t) {
              t && "pv" in t || (t = s);
              var e = 1 / t.mult,
                i = t.pv * e,
                r = new Number(i);
              return r.value = i, o(r, t, "unidimensional"), function () {
                return t.k && t.getValue(), i = t.v * e, r.value !== i && ((r = new Number(i)).value = i, o(r, t, "unidimensional")), r;
              };
            }(t) : function (e) {
              e && "pv" in e || (e = n);
              var i = 1 / e.mult,
                r = e.data && e.data.l || e.pv.length,
                s = createTypedArray("float32", r),
                a = createTypedArray("float32", r);
              return s.value = a, o(s, e, "multidimensional"), function () {
                e.k && e.getValue();
                for (var t = 0; t < r; t += 1) {
                  s[t] = a[t] = e.v[t] * i;
                }
                return s;
              };
            }(t) : e;
          };
        }(),
        t7,
        u7;
      function SliderEffect(t, e, i) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
      }
      function AngleEffect(t, e, i) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
      }
      function ColorEffect(t, e, i) {
        this.p = PropertyFactory.getProp(e, t.v, 1, 0, i);
      }
      function PointEffect(t, e, i) {
        this.p = PropertyFactory.getProp(e, t.v, 1, 0, i);
      }
      function LayerIndexEffect(t, e, i) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
      }
      function MaskIndexEffect(t, e, i) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
      }
      function CheckboxEffect(t, e, i) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
      }
      function NoValueEffect() {
        this.p = {};
      }
      function EffectsManager(t, e) {
        var i = t.ef || [];
        this.effectElements = [];
        var r,
          s,
          a = i.length;
        for (r = 0; r < a; r++) {
          s = new GroupEffect(i[r], e), this.effectElements.push(s);
        }
      }
      function GroupEffect(t, e) {
        this.init(t, e);
      }
      t7 = function () {
        function i(t, e) {
          return this.textIndex = t + 1, this.textTotal = e, this.v = this.getValue() * this.mult, this.v;
        }
        return function (t, e) {
          this.pv = 1, this.comp = t.comp, this.elem = t, this.mult = .01, this.propType = "textSelector", this.textTotal = e.totalChars, this.selectorValue = 100, this.lastValue = [1, 1, 1], this.k = !0, this.x = !0, this.getValue = ExpressionManager.initiateExpression.bind(this)(t, e, this), this.getMult = i, this.getVelocityAtTime = expressionHelpers.getVelocityAtTime, this.kf ? this.getValueAtTime = expressionHelpers.getValueAtTime.bind(this) : this.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(this), this.setGroupProperty = expressionHelpers.setGroupProperty;
        };
      }(), u7 = TextSelectorProp.getTextSelectorProp, TextSelectorProp.getTextSelectorProp = function (t, e, i) {
        return 1 === e.t ? new t7(t, e, i) : u7(t, e, i);
      }, extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function (t, e) {
        this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
        var i,
          r,
          s = this.data.ef.length,
          a = this.data.ef;
        for (i = 0; i < s; i += 1) {
          switch (r = null, a[i].ty) {
            case 0:
              r = new SliderEffect(a[i], e, this);
              break;
            case 1:
              r = new AngleEffect(a[i], e, this);
              break;
            case 2:
              r = new ColorEffect(a[i], e, this);
              break;
            case 3:
              r = new PointEffect(a[i], e, this);
              break;
            case 4:
            case 7:
              r = new CheckboxEffect(a[i], e, this);
              break;
            case 10:
              r = new LayerIndexEffect(a[i], e, this);
              break;
            case 11:
              r = new MaskIndexEffect(a[i], e, this);
              break;
            case 5:
              r = new EffectsManager(a[i], e, this);
              break;
            default:
              r = new NoValueEffect(a[i], e, this);
          }
          r && this.effectElements.push(r);
        }
      };
      var lottie = {},
        _isFrozen = !1;
      function setLocationHref(t) {
        locationHref = t;
      }
      function searchAnimations() {
        !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations();
      }
      function setSubframeRendering(t) {
        subframeEnabled = t;
      }
      function loadAnimation(t) {
        return !0 === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t);
      }
      function setQuality(t) {
        if ("string" == typeof t) switch (t) {
          case "high":
            defaultCurveSegments = 200;
            break;
          case "medium":
            defaultCurveSegments = 50;
            break;
          case "low":
            defaultCurveSegments = 10;
        } else !isNaN(t) && 1 < t && (defaultCurveSegments = t);
        roundValues(!(50 <= defaultCurveSegments));
      }
      function inBrowser() {
        return "undefined" != typeof navigator;
      }
      function installPlugin(t, e) {
        "expressions" === t && (expressionsPlugin = e);
      }
      function getFactory(t) {
        switch (t) {
          case "propertyFactory":
            return PropertyFactory;
          case "shapePropertyFactory":
            return ShapePropertyFactory;
          case "matrix":
            return Matrix;
        }
      }
      function checkReady() {
        "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations());
      }
      function getQueryVariable(t) {
        for (var e = queryString.split("&"), i = 0; i < e.length; i++) {
          var r = e[i].split("=");
          if (decodeURIComponent(r[0]) == t) return decodeURIComponent(r[1]);
        }
      }
      lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocationHref, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.__getFactory = getFactory, lottie.version = "5.7.4";
      var standalone = "__[STANDALONE]__",
        animationData = "__[ANIMATIONDATA]__",
        renderer = "";
      if (standalone) {
        var scripts = document.getElementsByTagName("script"),
          index = scripts.length - 1,
          myScript = scripts[index] || {
            src: ""
          },
          queryString = myScript.src.replace(/^[^\?]+\??/, "");
        renderer = getQueryVariable("renderer");
      }
      var readyStateCheckInterval = setInterval(checkReady, 100);
      return lottie;
    });
    var animationData = {
      "v": "5.7.4",
      "fr": 23.9759979248047,
      "ip": 0,
      "op": 95.9999916909097,
      "w": 55,
      "h": 80,
      "nm": "Komp 1",
      "ddd": 0,
      "assets": [],
      "layers": [{
        "ddd": 0,
        "ind": 1,
        "ty": 4,
        "nm": "Ebene 2",
        "sr": 1,
        "ks": {
          "o": {
            "a": 1,
            "k": [{
              "i": {
                "x": [0.833],
                "y": [0.833]
              },
              "o": {
                "x": [0.167],
                "y": [0.167]
              },
              "t": 12,
              "s": [100]
            }, {
              "i": {
                "x": [0.833],
                "y": [0.833]
              },
              "o": {
                "x": [0.167],
                "y": [0.167]
              },
              "t": 18,
              "s": [0]
            }, {
              "i": {
                "x": [0.833],
                "y": [0.833]
              },
              "o": {
                "x": [0.167],
                "y": [0.167]
              },
              "t": 21,
              "s": [0]
            }, {
              "i": {
                "x": [0.833],
                "y": [0.833]
              },
              "o": {
                "x": [0.167],
                "y": [0.167]
              },
              "t": 24,
              "s": [100]
            }, {
              "i": {
                "x": [0.833],
                "y": [0.833]
              },
              "o": {
                "x": [0.167],
                "y": [0.167]
              },
              "t": 36,
              "s": [100]
            }, {
              "i": {
                "x": [0.833],
                "y": [0.833]
              },
              "o": {
                "x": [0.167],
                "y": [0.167]
              },
              "t": 42,
              "s": [0]
            }, {
              "i": {
                "x": [0.833],
                "y": [0.833]
              },
              "o": {
                "x": [0.167],
                "y": [0.167]
              },
              "t": 45,
              "s": [0]
            }, {
              "i": {
                "x": [0.833],
                "y": [0.833]
              },
              "o": {
                "x": [0.167],
                "y": [0.167]
              },
              "t": 48,
              "s": [100]
            }, {
              "i": {
                "x": [0.833],
                "y": [0.833]
              },
              "o": {
                "x": [0.167],
                "y": [0.167]
              },
              "t": 60,
              "s": [100]
            }, {
              "i": {
                "x": [0.833],
                "y": [0.833]
              },
              "o": {
                "x": [0.167],
                "y": [0.167]
              },
              "t": 66,
              "s": [0]
            }, {
              "i": {
                "x": [0.833],
                "y": [0.833]
              },
              "o": {
                "x": [0.167],
                "y": [0.167]
              },
              "t": 69,
              "s": [0]
            }, {
              "i": {
                "x": [0.833],
                "y": [0.833]
              },
              "o": {
                "x": [0.167],
                "y": [0.167]
              },
              "t": 72,
              "s": [100]
            }, {
              "i": {
                "x": [0.833],
                "y": [0.833]
              },
              "o": {
                "x": [0.167],
                "y": [0.167]
              },
              "t": 84,
              "s": [100]
            }, {
              "i": {
                "x": [0.833],
                "y": [0.833]
              },
              "o": {
                "x": [0.167],
                "y": [0.167]
              },
              "t": 90,
              "s": [0]
            }, {
              "i": {
                "x": [0.833],
                "y": [0.833]
              },
              "o": {
                "x": [0.167],
                "y": [0.167]
              },
              "t": 93,
              "s": [0]
            }, {
              "t": 95.9999916909097,
              "s": [100]
            }],
            "ix": 11
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 10
          },
          "p": {
            "a": 1,
            "k": [{
              "i": {
                "x": 0.833,
                "y": 0.833
              },
              "o": {
                "x": 0.167,
                "y": 0.167
              },
              "t": 0,
              "s": [27.5, 40, 0],
              "to": [0, 1.5, 0],
              "ti": [0, 0, 0]
            }, {
              "i": {
                "x": 0.833,
                "y": 0.833
              },
              "o": {
                "x": 0.167,
                "y": 0.167
              },
              "t": 18,
              "s": [27.5, 49, 0],
              "to": [0, 0, 0],
              "ti": [0, 0, 0]
            }, {
              "i": {
                "x": 0.833,
                "y": 0.833
              },
              "o": {
                "x": 0.167,
                "y": 0.167
              },
              "t": 24,
              "s": [27.5, 40, 0],
              "to": [0, 0, 0],
              "ti": [0, 0, 0]
            }, {
              "i": {
                "x": 0.833,
                "y": 0.833
              },
              "o": {
                "x": 0.167,
                "y": 0.167
              },
              "t": 42,
              "s": [27.5, 49, 0],
              "to": [0, 0, 0],
              "ti": [0, 0, 0]
            }, {
              "i": {
                "x": 0.833,
                "y": 0.833
              },
              "o": {
                "x": 0.167,
                "y": 0.167
              },
              "t": 48,
              "s": [27.5, 40, 0],
              "to": [0, 0, 0],
              "ti": [0, 0, 0]
            }, {
              "i": {
                "x": 0.833,
                "y": 0.833
              },
              "o": {
                "x": 0.167,
                "y": 0.167
              },
              "t": 66,
              "s": [27.5, 49, 0],
              "to": [0, 0, 0],
              "ti": [0, 0, 0]
            }, {
              "i": {
                "x": 0.833,
                "y": 0.833
              },
              "o": {
                "x": 0.167,
                "y": 0.167
              },
              "t": 72,
              "s": [27.5, 40, 0],
              "to": [0, 0, 0],
              "ti": [0, 0, 0]
            }, {
              "i": {
                "x": 0.833,
                "y": 0.833
              },
              "o": {
                "x": 0.167,
                "y": 0.167
              },
              "t": 90,
              "s": [27.5, 49, 0],
              "to": [0, 0, 0],
              "ti": [0, 1.5, 0]
            }, {
              "t": 95.9999916909097,
              "s": [27.5, 40, 0]
            }],
            "ix": 2,
            "l": 2
          },
          "a": {
            "a": 0,
            "k": [0, 0, 0],
            "ix": 1,
            "l": 2
          },
          "s": {
            "a": 0,
            "k": [140, 128.367, 100],
            "ix": 6,
            "l": 2
          }
        },
        "ao": 0,
        "shapes": [{
          "ty": "gr",
          "it": [{
            "ind": 0,
            "ty": "sh",
            "ix": 1,
            "ks": {
              "a": 0,
              "k": {
                "i": [[0, 0], [0, 0]],
                "o": [[0, 0], [0, 0]],
                "v": [[0, -18.713], [0, -8.616]],
                "c": false
              },
              "ix": 2
            },
            "nm": "Pfad 1",
            "mn": "ADBE Vector Shape - Group",
            "hd": false
          }, {
            "ty": "tm",
            "s": {
              "a": 0,
              "k": 0,
              "ix": 1
            },
            "e": {
              "a": 0,
              "k": 100,
              "ix": 2
            },
            "o": {
              "a": 0,
              "k": 0,
              "ix": 3
            },
            "m": 1,
            "ix": 2,
            "nm": "Pfade trimmen 1",
            "mn": "ADBE Vector Filter - Trim",
            "hd": false
          }, {
            "ty": "st",
            "c": {
              "a": 0,
              "k": [1, 1, 1, 1],
              "ix": 3
            },
            "o": {
              "a": 0,
              "k": 100,
              "ix": 4
            },
            "w": {
              "a": 0,
              "k": 3.271,
              "ix": 5
            },
            "lc": 2,
            "lj": 2,
            "bm": 0,
            "nm": "Kontur 1",
            "mn": "ADBE Vector Graphic - Stroke",
            "hd": false
          }, {
            "ty": "tr",
            "p": {
              "a": 0,
              "k": [0, 0],
              "ix": 2
            },
            "a": {
              "a": 0,
              "k": [0, 0],
              "ix": 1
            },
            "s": {
              "a": 0,
              "k": [100, 100],
              "ix": 3
            },
            "r": {
              "a": 0,
              "k": 0,
              "ix": 6
            },
            "o": {
              "a": 0,
              "k": 100,
              "ix": 7
            },
            "sk": {
              "a": 0,
              "k": 0,
              "ix": 4
            },
            "sa": {
              "a": 0,
              "k": 0,
              "ix": 5
            },
            "nm": "Transformieren"
          }],
          "nm": "Gruppe 1",
          "np": 3,
          "cix": 2,
          "bm": 0,
          "ix": 1,
          "mn": "ADBE Vector Group",
          "hd": false
        }],
        "ip": 0,
        "op": 95.9999916909097,
        "st": 0,
        "bm": 0
      }, {
        "ddd": 0,
        "ind": 2,
        "ty": 4,
        "nm": "Ebene 1",
        "sr": 1,
        "ks": {
          "o": {
            "a": 0,
            "k": 100,
            "ix": 11
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 10
          },
          "p": {
            "a": 0,
            "k": [27.5, 40, 0],
            "ix": 2,
            "l": 2
          },
          "a": {
            "a": 0,
            "k": [0, 0, 0],
            "ix": 1,
            "l": 2
          },
          "s": {
            "a": 0,
            "k": [115, 111.444, 100],
            "ix": 6,
            "l": 2
          }
        },
        "ao": 0,
        "shapes": [{
          "ty": "gr",
          "it": [{
            "ind": 0,
            "ty": "sh",
            "ix": 1,
            "ks": {
              "a": 0,
              "k": {
                "i": [[11.046, 0], [0, 0], [0, 11.046], [0, 0], [-11.046, 0], [0, 0], [0, -11.046], [0, 0]],
                "o": [[0, 0], [-11.046, 0], [0, 0], [0, -11.046], [0, 0], [11.046, 0], [0, 0], [0, 11.046]],
                "v": [[0, 32.5], [0, 32.5], [-20, 12.5], [-20, -12.5], [0, -32.5], [0, -32.5], [20, -12.5], [20, 12.5]],
                "c": true
              },
              "ix": 2
            },
            "nm": "Pfad 1",
            "mn": "ADBE Vector Shape - Group",
            "hd": false
          }, {
            "ty": "st",
            "c": {
              "a": 0,
              "k": [1, 1, 1, 1],
              "ix": 3
            },
            "o": {
              "a": 0,
              "k": 100,
              "ix": 4
            },
            "w": {
              "a": 0,
              "k": 3.271,
              "ix": 5
            },
            "lc": 1,
            "lj": 1,
            "ml": 10,
            "bm": 0,
            "nm": "Kontur 1",
            "mn": "ADBE Vector Graphic - Stroke",
            "hd": false
          }, {
            "ty": "tr",
            "p": {
              "a": 0,
              "k": [0, 0],
              "ix": 2
            },
            "a": {
              "a": 0,
              "k": [0, 0],
              "ix": 1
            },
            "s": {
              "a": 0,
              "k": [100, 100],
              "ix": 3
            },
            "r": {
              "a": 0,
              "k": 0,
              "ix": 6
            },
            "o": {
              "a": 0,
              "k": 100,
              "ix": 7
            },
            "sk": {
              "a": 0,
              "k": 0,
              "ix": 4
            },
            "sa": {
              "a": 0,
              "k": 0,
              "ix": 5
            },
            "nm": "Transformieren"
          }],
          "nm": "Gruppe 1",
          "np": 2,
          "cix": 2,
          "bm": 0,
          "ix": 1,
          "mn": "ADBE Vector Group",
          "hd": false
        }],
        "ip": 0,
        "op": 95.9999916909097,
        "st": 0,
        "bm": 0
      }],
      "markers": []
    };
    var params = {
      container: document.getElementById('lottie'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData
    };
    var anim;
    anim = lottie.loadAnimation(params);
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./assets/src/js/modules/moving-contact-title.js":
/*!*******************************************************!*\
  !*** ./assets/src/js/modules/moving-contact-title.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var holders = document.querySelectorAll('.contact-item');
  var media = 768;
  holders.forEach(function (holder) {
    var title = holder.querySelector('.contact-item__title');
    var header = holder.querySelector('.contact-item__header');
    var content = holder.querySelector('.contact-item__content');
    var contentAddress = holder.querySelector('.contact-item__address');
    var addTextToHeader = function addTextToHeader() {
      if (!title) return;
      header.append(title);
    };
    var addTextToContent = function addTextToContent() {
      if (!title) return;
      content.prepend(title);
    };
    var handleSection = function handleSection() {
      if (window.innerWidth >= media) {
        addTextToContent();
      } else {
        addTextToHeader();
      }
    };
    handleSection();
    window.addEventListener('resize', handleSection);
  });
});

/***/ }),

/***/ "./assets/src/js/modules/nav-opener.js":
/*!*********************************************!*\
  !*** ./assets/src/js/modules/nav-opener.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  $('.js-nav-opener').on('click', function (e) {
    e.preventDefault();
    if ($('.nav').hasClass('active')) {
      $('.nav').removeClass('active');
      $('.js-nav-opener').removeClass('active');
      $('.lang-switch').removeClass('active');
    } else {
      $('.nav').addClass('active');
      $('.js-nav-opener').addClass('active');
      $('.lang-switch').addClass('active');
    }
  });
});

/***/ }),

/***/ "./assets/src/js/modules/open-close.js":
/*!*********************************************!*\
  !*** ./assets/src/js/modules/open-close.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/* harmony default export */ __webpack_exports__["default"] = (function () {
  jQuery(function () {
    initOpenClose();
  });
  function initOpenClose() {
    jQuery('.custom-select').openClose({
      activeClass: 'active',
      opener: '.custom-select__opener',
      slider: '.custom-select__slide',
      animSpeed: 400,
      hideOnClickOutside: true,
      effect: 'slide'
    });

    /*jQuery('.form-open-close').openClose({
        activeClass: 'active',
        opener: '.form-open-close__opener',
        slider: '.form-open-close__slide',
        animSpeed: 400,
        effect: 'slide'
    });*/
  }

  /*
   * jQuery Open/Close plugin
   */
  ;
  (function ($) {
    function OpenClose(options) {
      this.options = $.extend({
        addClassBeforeAnimation: true,
        hideOnClickOutside: false,
        activeClass: 'active',
        opener: '.opener',
        slider: '.slide',
        animSpeed: 400,
        effect: 'fade',
        event: 'click'
      }, options);
      this.init();
    }
    OpenClose.prototype = {
      init: function init() {
        if (this.options.holder) {
          this.findElements();
          this.attachEvents();
          this.makeCallback('onInit', this);
        }
      },
      findElements: function findElements() {
        this.holder = $(this.options.holder);
        this.opener = this.holder.find(this.options.opener);
        this.slider = this.holder.find(this.options.slider);
      },
      attachEvents: function attachEvents() {
        // add handler
        var self = this;
        this.eventHandler = function (e) {
          e.preventDefault();
          if (self.slider.hasClass(slideHiddenClass)) {
            self.showSlide();
          } else {
            self.hideSlide();
          }
        };
        self.opener.on(self.options.event, this.eventHandler);

        // hover mode handler
        if (self.options.event === 'hover') {
          self.opener.on('mouseenter', function () {
            if (!self.holder.hasClass(self.options.activeClass)) {
              self.showSlide();
            }
          });
          self.holder.on('mouseleave', function () {
            self.hideSlide();
          });
        }

        // outside click handler
        self.outsideClickHandler = function (e) {
          if (self.options.hideOnClickOutside) {
            var target = $(e.target);
            if (!target.is(self.holder) && !target.closest(self.holder).length) {
              self.hideSlide();
            }
          }
        };

        // set initial styles
        if (this.holder.hasClass(this.options.activeClass)) {
          $(document).on('click touchstart', self.outsideClickHandler);
        } else {
          this.slider.addClass(slideHiddenClass);
        }
      },
      showSlide: function showSlide() {
        var self = this;
        if (self.options.addClassBeforeAnimation) {
          self.holder.addClass(self.options.activeClass);
        }
        self.slider.removeClass(slideHiddenClass);
        $(document).on('click touchstart', self.outsideClickHandler);
        self.makeCallback('animStart', true);
        toggleEffects[self.options.effect].show({
          box: self.slider,
          speed: self.options.animSpeed,
          complete: function complete() {
            if (!self.options.addClassBeforeAnimation) {
              self.holder.addClass(self.options.activeClass);
            }
            self.makeCallback('animEnd', true);
          }
        });
      },
      hideSlide: function hideSlide() {
        var self = this;
        if (self.options.addClassBeforeAnimation) {
          self.holder.removeClass(self.options.activeClass);
        }
        $(document).off('click touchstart', self.outsideClickHandler);
        self.makeCallback('animStart', false);
        toggleEffects[self.options.effect].hide({
          box: self.slider,
          speed: self.options.animSpeed,
          complete: function complete() {
            if (!self.options.addClassBeforeAnimation) {
              self.holder.removeClass(self.options.activeClass);
            }
            self.slider.addClass(slideHiddenClass);
            self.makeCallback('animEnd', false);
          }
        });
      },
      destroy: function destroy() {
        this.slider.removeClass(slideHiddenClass).css({
          display: ''
        });
        this.opener.off(this.options.event, this.eventHandler);
        this.holder.removeClass(this.options.activeClass).removeData('OpenClose');
        $(document).off('click touchstart', this.outsideClickHandler);
      },
      makeCallback: function makeCallback(name) {
        if (typeof this.options[name] === 'function') {
          var args = Array.prototype.slice.call(arguments);
          args.shift();
          this.options[name].apply(this, args);
        }
      }
    };

    // add stylesheet for slide on DOMReady
    var slideHiddenClass = 'js-slide-hidden';
    (function () {
      var tabStyleSheet = $('<style type="text/css">')[0];
      var tabStyleRule = '.' + slideHiddenClass;
      tabStyleRule += '{z-index:-1!important;position:absolute!important;display:block!important;visibility:hidden!important;}';
      if (tabStyleSheet.styleSheet) {
        tabStyleSheet.styleSheet.cssText = tabStyleRule;
      } else {
        tabStyleSheet.appendChild(document.createTextNode(tabStyleRule));
      }
      $('head').append(tabStyleSheet);
    })();

    // animation effects
    var toggleEffects = {
      slide: {
        show: function show(o) {
          o.box.stop(true).hide().slideDown(o.speed, o.complete);
        },
        hide: function hide(o) {
          o.box.stop(true).slideUp(o.speed, o.complete);
        }
      },
      fade: {
        show: function show(o) {
          o.box.stop(true).hide().fadeIn(o.speed, o.complete);
        },
        hide: function hide(o) {
          o.box.stop(true).fadeOut(o.speed, o.complete);
        }
      },
      none: {
        show: function show(o) {
          o.box.hide().show(0, o.complete);
        },
        hide: function hide(o) {
          o.box.hide(0, o.complete);
        }
      }
    };

    // jQuery plugin interface
    $.fn.openClose = function (opt) {
      var args = Array.prototype.slice.call(arguments);
      var method = args[0];
      return this.each(function () {
        var $holder = jQuery(this);
        var instance = $holder.data('OpenClose');
        if (_typeof(opt) === 'object' || typeof opt === 'undefined') {
          $holder.data('OpenClose', new OpenClose($.extend({
            holder: this
          }, opt)));
        } else if (typeof method === 'string' && instance) {
          if (typeof instance[method] === 'function') {
            args.shift();
            instance[method].apply(instance, args);
          }
        }
      });
    };
    $(document).click(function (e) {
      var $target = $(e.target);
      var $item = $('.tribe-filter-bar-c-pill__pill.custom-select__opener');
      $item.each(function () {
        if ($target.is($(this))) {
          $(this).addClass('active');
        } else {
          $(this).removeClass('active');
        }
      });
    });
  })(jQuery);
});

/***/ }),

/***/ "./assets/src/js/modules/post-contents.js":
/*!************************************************!*\
  !*** ./assets/src/js/modules/post-contents.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var postAside = document.querySelector('.content-single__aside');
  if (!postAside) return;
  var text = document.querySelector('.content-single__main-content');
  var contents = postAside.querySelector('.content-single__contents');
  var headlines = text.querySelectorAll('h2, h3');
  if (headlines.length === 0) return;
  contents.style.display = 'block';
  var determineContents = function determineContents() {
    headlines.forEach(function (headline, i) {
      var title;
      var smallTitle = headline.querySelector('.small-title');
      if (smallTitle) {
        title = smallTitle.innerText;
      } else {
        title = headline.innerText;
      }
      if (title.length !== 0) {
        var id = "headline-".concat(i);
        headline.id = id;
        // title = title.replace(/(^\d+\.)/, '');
        // title = title.replace(/(^\s+)/, '');
        var linkTag = "<p class=\"content-single__contents-item content-single__contents-".concat(headline.tagName.toLowerCase(), "\"><a href=\"#").concat(id, "\">").concat(title, "</a></p>");
        if (headline.tagName.toLowerCase() == "h3") {
          linkTag = "<p class=\"content-single__contents-item content-single__contents-".concat(headline.tagName.toLowerCase(), "\"><ul><li><a href=\"#").concat(id, "\">").concat(title, "</a></li></ul></p>");
        }
        contents.insertAdjacentHTML('beforeend', linkTag);
      } else {
        return;
      }
    });

    // const links = contents.querySelectorAll('.content-single__contents-item a');
    // let linksIndex = 1;

    // links.forEach((link) => {
    //     console.log(link);
    //     if (link.parentElement.classList.contains('content-single__contents-h3')) {
    //         linksIndex = link.parentElement.previousElementSibling.classList.contains('content-single__contents-h2')  ? '.' : '.';
    //         link.innerText = `${linksIndex}. ${link.innerText}`;
    //     }
    // });
  };

  determineContents();
});

/***/ }),

/***/ "./assets/src/js/modules/quotes.js":
/*!*****************************************!*\
  !*** ./assets/src/js/modules/quotes.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_swiper_bundle_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/swiper-bundle.min */ "./node_modules/swiper/swiper-bundle.min.js");
/* harmony import */ var swiper_swiper_bundle_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_bundle_min__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var sliders = document.querySelectorAll('.quotes');
  if (!sliders.length) return;
  sliders.forEach(function (slider) {
    var pagination = slider.querySelector('.swiper-pagination');
    var sliderContainer = slider.querySelector('.swiper');
    var swiper = new swiper_swiper_bundle_min__WEBPACK_IMPORTED_MODULE_0___default.a(sliderContainer, {
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 700,
      loop: true,
      autoHeight: false,
      pagination: {
        el: pagination,
        type: 'bullets',
        bulletElement: 'button',
        clickable: true
      }
    });
  });
});

/***/ }),

/***/ "./assets/src/js/modules/result-slider.js":
/*!************************************************!*\
  !*** ./assets/src/js/modules/result-slider.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_swiper_bundle_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/swiper-bundle.min */ "./node_modules/swiper/swiper-bundle.min.js");
/* harmony import */ var swiper_swiper_bundle_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_bundle_min__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var holders = document.querySelectorAll('.section-results');
  holders.forEach(function (holder) {
    var sliderPrev = holder.querySelector('.swiper-prev');
    var sliderNext = holder.querySelector('.swiper-next');
    var galleryTop = new swiper_swiper_bundle_min__WEBPACK_IMPORTED_MODULE_0___default.a('.result-slider', {
      speed: 700,
      navigation: {
        nextEl: sliderNext,
        prevEl: sliderPrev
      }
    });
    var galleryBottom = new swiper_swiper_bundle_min__WEBPACK_IMPORTED_MODULE_0___default.a('.text-slider', {
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      }
    });
    galleryTop.controller.control = galleryBottom;
    galleryBottom.controller.control = galleryTop;
  });
});

/***/ }),

/***/ "./assets/src/js/modules/scrollBg.js":
/*!*******************************************!*\
  !*** ./assets/src/js/modules/scrollBg.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  $(window).on("load scroll", function () {
    var parallaxElementLarge = $(".intro__bg"),
      parallaxQuantity = parallaxElementLarge.length;
    window.requestAnimationFrame(function () {
      for (var i = 0; i < parallaxQuantity; i++) {
        var currentElement = parallaxElementLarge.eq(i),
          windowTop = $(window).scrollTop(),
          elementTop = currentElement.offset().top,
          elementHeight = currentElement.height(),
          viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
          scrolled = windowTop - elementTop + viewPortHeight;
        currentElement.css({
          transform: "translate3d(0," + scrolled * -0.1 + "px, 0)"
        });
      }
    });
    var parallaxElementLogos = $(".logos__bg"),
      parallaxQuantity = parallaxElementLogos.length;
    window.requestAnimationFrame(function () {
      for (var i = 0; i < parallaxQuantity; i++) {
        var currentElement = parallaxElementLogos.eq(i),
          windowTop = $(window).scrollTop(),
          elementTop = currentElement.offset().top,
          elementHeight = currentElement.height(),
          viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
          scrolled = windowTop - elementTop + viewPortHeight;
        currentElement.css({
          transform: "translate3d(0," + scrolled * -0.1 + "px, 0)"
        });
      }
    });
    var parallaxElementEvent = $(".event-slider__bg"),
      parallaxQuantity = parallaxElementEvent.length;
    window.requestAnimationFrame(function () {
      for (var i = 0; i < parallaxQuantity; i++) {
        var currentElement = parallaxElementEvent.eq(i),
          windowTop = $(window).scrollTop(),
          elementTop = currentElement.offset().top,
          elementHeight = currentElement.height(),
          viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
          scrolled = windowTop - elementTop + viewPortHeight;
        currentElement.css({
          transform: "translate3d(0," + scrolled * -0.1 + "px, 0)"
        });
      }
    });
    var parallaxElement = $(".content-bg-image__bg"),
      parallaxQuantity = parallaxElement.length;
    window.requestAnimationFrame(function () {
      for (var i = 0; i < parallaxQuantity; i++) {
        var currentElement = parallaxElement.eq(i),
          windowTop = $(window).scrollTop(),
          elementTop = currentElement.offset().top,
          elementHeight = currentElement.height(),
          viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
          scrolled = windowTop - elementTop + viewPortHeight;
        currentElement.css({
          transform: "translate3d(0," + scrolled * -0.1 + "px, 0)"
        });
      }
    });
    var parallaxElementSlider = $(".content-slider__img img"),
      parallaxQuantity = parallaxElementSlider.length;
    window.requestAnimationFrame(function () {
      for (var i = 0; i < parallaxQuantity; i++) {
        var currentElement = parallaxElementSlider.eq(i),
          windowTop = $(window).scrollTop(),
          elementTop = currentElement.offset().top,
          elementHeight = currentElement.height(),
          viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
          scrolled = windowTop - elementTop + viewPortHeight;
        currentElement.css({
          transform: "translate3d(0," + scrolled * -0.1 + "px, 0)"
        });
      }
    });
    var parallaxElementBg = $(".content-bg-image__bg img"),
      parallaxQuantity = parallaxElementBg.length;
    window.requestAnimationFrame(function () {
      for (var i = 0; i < parallaxQuantity; i++) {
        var currentElement = parallaxElementBg.eq(i),
          windowTop = $(window).scrollTop(),
          elementTop = currentElement.offset().top,
          elementHeight = currentElement.height(),
          viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
          scrolled = windowTop - elementTop + viewPortHeight;
        currentElement.css({
          transform: "translate3d(0," + scrolled * -0.1 + "px, 0)"
        });
      }
    });
  });
  console.log('scroll active');
});

/***/ }),

/***/ "./assets/src/js/modules/services-slider.js":
/*!**************************************************!*\
  !*** ./assets/src/js/modules/services-slider.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_swiper_bundle_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/swiper-bundle.min */ "./node_modules/swiper/swiper-bundle.min.js");
/* harmony import */ var swiper_swiper_bundle_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_bundle_min__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var servicesSection = document.querySelector('.services-section');
  if (!servicesSection) return;
  var slider = servicesSection.querySelector('.swiper');
  var pagination = servicesSection.querySelector('.swiper-pagination');
  var sliderPrev = slider.querySelector('.swiper-prev');
  var sliderNext = slider.querySelector('.swiper-next');
  var paginationArray;
  var titles = servicesSection.querySelector('.services-section__titles');
  var titlesArray = _toConsumableArray(titles.children);
  var event = new Event("click", {
    bubbles: true
  });
  titlesArray[0].classList.add('active');
  var handleActiveTitle = function handleActiveTitle(elem) {
    var activeTitle = titles.querySelector('.active');
    activeTitle.classList.remove('active');
    elem.classList.add('active');
  };
  var desktopSlider = false;
  var mobileSlider = false;
  var swiper = false;
  var media = 768;
  var initDesktopSlider = function initDesktopSlider() {
    if (!desktopSlider) {
      desktopSlider = true;
      mobileSlider = false;
      if (swiper) swiper.destroy();
      swiper = new swiper_swiper_bundle_min__WEBPACK_IMPORTED_MODULE_0___default.a(slider, {
        slidesPerView: 'auto',
        speed: 700,
        centeredSlides: true,
        pagination: {
          el: pagination,
          type: 'bullets',
          clickable: true
        },
        navigation: {
          nextEl: sliderNext,
          prevEl: sliderPrev
        },
        on: {
          init: function init() {
            paginationArray = _toConsumableArray(pagination.children);
          }
        }
      });
      swiper.on('slideChange', function () {
        var title = titlesArray[this.realIndex];
        handleActiveTitle(title);
      });
    }
  };
  var initMobileSlider = function initMobileSlider() {
    if (!mobileSlider) {
      mobileSlider = true;
      desktopSlider = false;
      if (swiper) swiper.destroy();
      swiper = new swiper_swiper_bundle_min__WEBPACK_IMPORTED_MODULE_0___default.a(slider, {
        slidesPerView: 'auto',
        speed: 700,
        loop: true,
        spaceBetween: 20,
        pagination: {
          el: pagination,
          type: 'bullets',
          clickable: true
        },
        on: {
          init: function init() {
            paginationArray = _toConsumableArray(pagination.children);
          }
        }
      });
    }
  };
  var addActiveTitleByClick = function addActiveTitleByClick() {
    titles.addEventListener('click', function (e) {
      if (e.target.className === 'services-section__titles-item') {
        var index = titlesArray.indexOf(e.target);
        var activePagination = paginationArray[index];
        handleActiveTitle(e.target);
        activePagination.dispatchEvent(event);
      }
    });
  };
  addActiveTitleByClick();
  var handleSlider = function handleSlider() {
    if (window.innerWidth >= media) {
      initDesktopSlider();
    } else {
      initMobileSlider();
    }
  };
  handleSlider();
  window.addEventListener('resize', handleSlider);
});

/***/ }),



/***/ "./assets/src/js/modules/show-all-logos.js":
/*!*************************************************!*\
  !*** ./assets/src/js/modules/show-all-logos.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var logoBtn = document.querySelectorAll('.show-all-logos');
  logoBtn.forEach(function (btn) {
    var defoultText = btn.innerHTML;
    var activeText = btn.dataset.active;
    btn.onclick = function () {
      var logoContainer = btn.parentElement.parentElement;
      if (logoContainer.classList.contains('container-logos')) {
        accordioToggle(this, logoContainer, defoultText, activeText);
      }
    };
  });
  function accordioToggle(target, container, defoultText, activeText) {
    container.classList.toggle('active');
    if (container.classList.contains('active')) {
      target.innerHTML = activeText;
    } else {
      target.innerHTML = defoultText;
    }
  }
  ;
});

/***/ }),

/***/ "./assets/src/js/modules/slider.js":
/*!*****************************************!*\
  !*** ./assets/src/js/modules/slider.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_swiper_bundle_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/swiper-bundle.min */ "./node_modules/swiper/swiper-bundle.min.js");
/* harmony import */ var swiper_swiper_bundle_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_bundle_min__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var sliders = document.querySelectorAll('.slider-section__swiper');
  if (!sliders.length) return;
  sliders.forEach(function (slider) {
    var slides = slider.querySelectorAll('.swiper-slide');
    if (slides.length === 1) {
      slider.classList.add('static');
      return;
    }
    var pagination = slider.querySelector('.swiper-pagination');
    var sliderPrev = slider.querySelector('.swiper-prev');
    var sliderNext = slider.querySelector('.swiper-next');
    var desktopSlider = false;
    var mobileSlider = false;
    var swiper = false;
    var media = 768;
    var handleStaticSlider = function handleStaticSlider() {
      if (slides.length === 3) {
        slider.classList.add('static-desktop');
      }
      if (slides.length === 2) {
        slider.classList.add('static-tablet');
      }
    };
    var initDesktopSlider = function initDesktopSlider() {
      if (!desktopSlider) {
        desktopSlider = true;
        mobileSlider = false;
        if (swiper) swiper.destroy();
        swiper = new swiper_swiper_bundle_min__WEBPACK_IMPORTED_MODULE_0___default.a(slider, {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 20,
          speed: 700,
          navigation: {
            nextEl: sliderNext,
            prevEl: sliderPrev
          },
          breakpoints: {
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 3
            },
            1200: {
              slidesPerView: 4,
              slidesPerGroup: 4
            }
          }
        });
      }
    };
    var initMobileSlider = function initMobileSlider() {
      if (!mobileSlider) {
        mobileSlider = true;
        desktopSlider = false;
        if (swiper) swiper.destroy();
        swiper = new swiper_swiper_bundle_min__WEBPACK_IMPORTED_MODULE_0___default.a(slider, {
          slidesPerView: 'auto',
          spaceBetween: 20,
          speed: 700,
          loop: true,
          pagination: {
            el: pagination,
            type: 'bullets',
            bulletElement: 'button',
            clickable: true
          }
        });
      }
    };
    var handleSlider = function handleSlider() {
      if (window.innerWidth >= media) {
        initDesktopSlider();
      } else {
        initMobileSlider();
      }
      handleStaticSlider();
    };
    handleSlider();
    handleStaticSlider();
    window.addEventListener('resize', handleSlider);
  });
});

/***/ }),

/***/ "./assets/src/js/modules/theme.js":
/*!****************************************!*\
  !*** ./assets/src/js/modules/theme.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var themeBtn = document.querySelector('.theme-switcher__input');
  if (!themeBtn) return;
  var body = document.querySelector('body');
  themeBtn.addEventListener('change', function () {
    body.classList.toggle('light-theme');
  });
});

/***/ }),

/***/ "./assets/src/js/modules/video-block.js":
/*!**********************************************!*\
  !*** ./assets/src/js/modules/video-block.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  if (document.querySelector('.video-block')) {
    var videoTitle = document.querySelector('.video-block__title').textContent;
    var videoJs = document.querySelector('.video-block .video-js');
    var videoJsTitle = document.createElement('div');
    videoJsTitle.className = "video-js-title";
    videoJsTitle.innerHTML = videoTitle;
    videoJs.append(videoJsTitle);
  }
});

/***/ }),

/***/ "./assets/src/js/script.js":
/*!*********************************!*\
  !*** ./assets/src/js/script.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ "./assets/src/js/app.js");



/***/ }),


/***/ "./node_modules/autosize/dist/autosize.min.js":
/*!****************************************************!*\
  !*** ./node_modules/autosize/dist/autosize.min.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){var e,t,n="function"==typeof Map?new Map:(e=[],t=[],{has:function(t){return e.indexOf(t)>-1},get:function(n){return t[e.indexOf(n)]},set:function(n,o){-1===e.indexOf(n)&&(e.push(n),t.push(o))},delete:function(n){var o=e.indexOf(n);o>-1&&(e.splice(o,1),t.splice(o,1))}}),o=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch(e){o=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}function r(e){var t=n.get(e);t&&t.destroy()}function i(e){var t=n.get(e);t&&t.update()}var l=null;return"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((l=function(e){return e}).destroy=function(e){return e},l.update=function(e){return e}):((l=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return function(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!n.has(e)){var t,r=null,i=null,l=null,d=function(){e.clientWidth!==i&&c()},u=function(t){window.removeEventListener("resize",d,!1),e.removeEventListener("input",c,!1),e.removeEventListener("keyup",c,!1),e.removeEventListener("autosize:destroy",u,!1),e.removeEventListener("autosize:update",c,!1),Object.keys(t).forEach(function(n){e.style[n]=t[n]}),n.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",u,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",c,!1),window.addEventListener("resize",d,!1),e.addEventListener("input",c,!1),e.addEventListener("autosize:update",c,!1),e.style.overflowX="hidden",e.style.wordWrap="break-word",n.set(e,{destroy:u,update:c}),"vertical"===(t=window.getComputedStyle(e,null)).resize?e.style.resize="none":"both"===t.resize&&(e.style.resize="horizontal"),r="content-box"===t.boxSizing?-(parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)):parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),isNaN(r)&&(r=0),c()}function a(t){var n=e.style.width;e.style.width="0px",e.style.width=n,e.style.overflowY=t}function s(){if(0!==e.scrollHeight){var t=function(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}(e),n=document.documentElement&&document.documentElement.scrollTop;e.style.height="",e.style.height=e.scrollHeight+r+"px",i=e.clientWidth,t.forEach(function(e){e.node.scrollTop=e.scrollTop}),n&&(document.documentElement.scrollTop=n)}}function c(){s();var t=Math.round(parseFloat(e.style.height)),n=window.getComputedStyle(e,null),r="content-box"===n.boxSizing?Math.round(parseFloat(n.height)):e.offsetHeight;if(r<t?"hidden"===n.overflowY&&(a("scroll"),s(),r="content-box"===n.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight):"hidden"!==n.overflowY&&(a("hidden"),s(),r="content-box"===n.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight),l!==r){l=r;var i=o("autosize:resized");try{e.dispatchEvent(i)}catch(e){}}}}(e)}),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],r),e},l.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],i),e}),l});


/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(/*! ./../defaults */ "./node_modules/axios/lib/defaults.js");
var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js":
/*!**************************************************************************!*\
  !*** ./node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * ScrollMagic v2.0.8 (2020-08-14)
 * The javascript library for magical scroll interactions.
 * (c) 2020 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 * 
 * @version 2.0.8
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file ScrollMagic main library.
 */
/**
 * @namespace ScrollMagic
 */
(function (root, factory) {
	if (true) {
		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}(this, function () {
	"use strict";

	var ScrollMagic = function () {
		_util.log(2, '(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use \'new ScrollMagic.Controller()\' to create a new controller instance. Use \'new ScrollMagic.Scene()\' to instance a scene.');
	};

	ScrollMagic.version = "2.0.8";

	// TODO: temporary workaround for chrome's scroll jitter bug
	if (typeof (window) !== 'undefined') {
		window.addEventListener("mousewheel", void(0));
	}

	// global const
	var PIN_SPACER_ATTRIBUTE = "data-scrollmagic-pin-spacer";

	/**
	 * The main class that is needed once per scroll container.
	 *
	 * @class
	 *
	 * @example
	 * // basic initialization
	 * var controller = new ScrollMagic.Controller();
	 *
	 * // passing options
	 * var controller = new ScrollMagic.Controller({container: "#myContainer", loglevel: 3});
	 *
	 * @param {object} [options] - An object containing one or more options for the controller.
	 * @param {(string|object)} [options.container=window] - A selector, DOM object that references the main container for scrolling.
	 * @param {boolean} [options.vertical=true] - Sets the scroll mode to vertical (`true`) or horizontal (`false`) scrolling.
	 * @param {object} [options.globalSceneOptions={}] - These options will be passed to every Scene that is added to the controller using the addScene method. For more information on Scene options see {@link ScrollMagic.Scene}.
	 * @param {number} [options.loglevel=2] Loglevel for debugging. Note that logging is disabled in the minified version of ScrollMagic.
											 ** `0` => silent
											 ** `1` => errors
											 ** `2` => errors, warnings
											 ** `3` => errors, warnings, debuginfo
	 * @param {boolean} [options.refreshInterval=100] - Some changes don't call events by default, like changing the container size or moving a scene trigger element.  
	 																										 This interval polls these parameters to fire the necessary events.  
	 																										 If you don't use custom containers, trigger elements or have static layouts, where the positions of the trigger elements don't change, you can set this to 0 disable interval checking and improve performance.
	 *
	 */
	ScrollMagic.Controller = function (options) {
		/*
		 * ----------------------------------------------------------------
		 * settings
		 * ----------------------------------------------------------------
		 */
		var
			NAMESPACE = 'ScrollMagic.Controller',
			SCROLL_DIRECTION_FORWARD = 'FORWARD',
			SCROLL_DIRECTION_REVERSE = 'REVERSE',
			SCROLL_DIRECTION_PAUSED = 'PAUSED',
			DEFAULT_OPTIONS = CONTROLLER_OPTIONS.defaults;

		/*
		 * ----------------------------------------------------------------
		 * private vars
		 * ----------------------------------------------------------------
		 */
		var
			Controller = this,
			_options = _util.extend({}, DEFAULT_OPTIONS, options),
			_sceneObjects = [],
			_updateScenesOnNextCycle = false, // can be boolean (true => all scenes) or an array of scenes to be updated
			_scrollPos = 0,
			_scrollDirection = SCROLL_DIRECTION_PAUSED,
			_isDocument = true,
			_viewPortSize = 0,
			_enabled = true,
			_updateTimeout,
			_refreshTimeout;

		/*
		 * ----------------------------------------------------------------
		 * private functions
		 * ----------------------------------------------------------------
		 */

		/**
		 * Internal constructor function of the ScrollMagic Controller
		 * @private
		 */
		var construct = function () {
			for (var key in _options) {
				if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
					log(2, "WARNING: Unknown option \"" + key + "\"");
					delete _options[key];
				}
			}
			_options.container = _util.get.elements(_options.container)[0];
			// check ScrollContainer
			if (!_options.container) {
				log(1, "ERROR creating object " + NAMESPACE + ": No valid scroll container supplied");
				throw NAMESPACE + " init failed."; // cancel
			}
			_isDocument = _options.container === window || _options.container === document.body || !document.body.contains(_options.container);
			// normalize to window
			if (_isDocument) {
				_options.container = window;
			}
			// update container size immediately
			_viewPortSize = getViewportSize();
			// set event handlers
			_options.container.addEventListener("resize", onChange);
			_options.container.addEventListener("scroll", onChange);

			var ri = parseInt(_options.refreshInterval, 10);
			_options.refreshInterval = _util.type.Number(ri) ? ri : DEFAULT_OPTIONS.refreshInterval;
			scheduleRefresh();

			log(3, "added new " + NAMESPACE + " controller (v" + ScrollMagic.version + ")");
		};

		/**
		 * Schedule the next execution of the refresh function
		 * @private
		 */
		var scheduleRefresh = function () {
			if (_options.refreshInterval > 0) {
				_refreshTimeout = window.setTimeout(refresh, _options.refreshInterval);
			}
		};

		/**
		 * Default function to get scroll pos - overwriteable using `Controller.scrollPos(newFunction)`
		 * @private
		 */
		var getScrollPos = function () {
			return _options.vertical ? _util.get.scrollTop(_options.container) : _util.get.scrollLeft(_options.container);
		};

		/**
		 * Returns the current viewport Size (width vor horizontal, height for vertical)
		 * @private
		 */
		var getViewportSize = function () {
			return _options.vertical ? _util.get.height(_options.container) : _util.get.width(_options.container);
		};

		/**
		 * Default function to set scroll pos - overwriteable using `Controller.scrollTo(newFunction)`
		 * Make available publicly for pinned mousewheel workaround.
		 * @private
		 */
		var setScrollPos = this._setScrollPos = function (pos) {
			if (_options.vertical) {
				if (_isDocument) {
					window.scrollTo(_util.get.scrollLeft(), pos);
				} else {
					_options.container.scrollTop = pos;
				}
			} else {
				if (_isDocument) {
					window.scrollTo(pos, _util.get.scrollTop());
				} else {
					_options.container.scrollLeft = pos;
				}
			}
		};

		/**
		 * Handle updates in cycles instead of on scroll (performance)
		 * @private
		 */
		var updateScenes = function () {
			if (_enabled && _updateScenesOnNextCycle) {
				// determine scenes to update
				var scenesToUpdate = _util.type.Array(_updateScenesOnNextCycle) ? _updateScenesOnNextCycle : _sceneObjects.slice(0);
				// reset scenes
				_updateScenesOnNextCycle = false;
				var oldScrollPos = _scrollPos;
				// update scroll pos now instead of onChange, as it might have changed since scheduling (i.e. in-browser smooth scroll)
				_scrollPos = Controller.scrollPos();
				var deltaScroll = _scrollPos - oldScrollPos;
				if (deltaScroll !== 0) { // scroll position changed?
					_scrollDirection = (deltaScroll > 0) ? SCROLL_DIRECTION_FORWARD : SCROLL_DIRECTION_REVERSE;
				}
				// reverse order of scenes if scrolling reverse
				if (_scrollDirection === SCROLL_DIRECTION_REVERSE) {
					scenesToUpdate.reverse();
				}
				// update scenes
				scenesToUpdate.forEach(function (scene, index) {
					log(3, "updating Scene " + (index + 1) + "/" + scenesToUpdate.length + " (" + _sceneObjects.length + " total)");
					scene.update(true);
				});
				if (scenesToUpdate.length === 0 && _options.loglevel >= 3) {
					log(3, "updating 0 Scenes (nothing added to controller)");
				}
			}
		};

		/**
		 * Initializes rAF callback
		 * @private
		 */
		var debounceUpdate = function () {
			_updateTimeout = _util.rAF(updateScenes);
		};

		/**
		 * Handles Container changes
		 * @private
		 */
		var onChange = function (e) {
			log(3, "event fired causing an update:", e.type);
			if (e.type == "resize") {
				// resize
				_viewPortSize = getViewportSize();
				_scrollDirection = SCROLL_DIRECTION_PAUSED;
			}
			// schedule update
			if (_updateScenesOnNextCycle !== true) {
				_updateScenesOnNextCycle = true;
				debounceUpdate();
			}
		};

		var refresh = function () {
			if (!_isDocument) {
				// simulate resize event. Only works for viewport relevant param (performance)
				if (_viewPortSize != getViewportSize()) {
					var resizeEvent;
					try {
						resizeEvent = new Event('resize', {
							bubbles: false,
							cancelable: false
						});
					} catch (e) { // stupid IE
						resizeEvent = document.createEvent("Event");
						resizeEvent.initEvent("resize", false, false);
					}
					_options.container.dispatchEvent(resizeEvent);
				}
			}
			_sceneObjects.forEach(function (scene, index) { // refresh all scenes
				scene.refresh();
			});
			scheduleRefresh();
		};

		/**
		 * Send a debug message to the console.
		 * provided publicly with _log for plugins
		 * @private
		 *
		 * @param {number} loglevel - The loglevel required to initiate output for the message.
		 * @param {...mixed} output - One or more variables that should be passed to the console.
		 */
		var log = this._log = function (loglevel, output) {
			if (_options.loglevel >= loglevel) {
				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ") ->");
				_util.log.apply(window, arguments);
			}
		};
		// for scenes we have getters for each option, but for the controller we don't, so we need to make it available externally for plugins
		this._options = _options;

		/**
		 * Sort scenes in ascending order of their start offset.
		 * @private
		 *
		 * @param {array} ScenesArray - an array of ScrollMagic Scenes that should be sorted
		 * @return {array} The sorted array of Scenes.
		 */
		var sortScenes = function (ScenesArray) {
			if (ScenesArray.length <= 1) {
				return ScenesArray;
			} else {
				var scenes = ScenesArray.slice(0);
				scenes.sort(function (a, b) {
					return a.scrollOffset() > b.scrollOffset() ? 1 : -1;
				});
				return scenes;
			}
		};

		/**
		 * ----------------------------------------------------------------
		 * public functions
		 * ----------------------------------------------------------------
		 */

		/**
		 * Add one ore more scene(s) to the controller.  
		 * This is the equivalent to `Scene.addTo(controller)`.
		 * @public
		 * @example
		 * // with a previously defined scene
		 * controller.addScene(scene);
		 *
		 * // with a newly created scene.
		 * controller.addScene(new ScrollMagic.Scene({duration : 0}));
		 *
		 * // adding multiple scenes
		 * controller.addScene([scene, scene2, new ScrollMagic.Scene({duration : 0})]);
		 *
		 * @param {(ScrollMagic.Scene|array)} newScene - ScrollMagic Scene or Array of Scenes to be added to the controller.
		 * @return {Controller} Parent object for chaining.
		 */
		this.addScene = function (newScene) {
			if (_util.type.Array(newScene)) {
				newScene.forEach(function (scene, index) {
					Controller.addScene(scene);
				});
			} else if (newScene instanceof ScrollMagic.Scene) {
				if (newScene.controller() !== Controller) {
					newScene.addTo(Controller);
				} else if (_sceneObjects.indexOf(newScene) < 0) {
					// new scene
					_sceneObjects.push(newScene); // add to array
					_sceneObjects = sortScenes(_sceneObjects); // sort
					newScene.on("shift.controller_sort", function () { // resort whenever scene moves
						_sceneObjects = sortScenes(_sceneObjects);
					});
					// insert Global defaults.
					for (var key in _options.globalSceneOptions) {
						if (newScene[key]) {
							newScene[key].call(newScene, _options.globalSceneOptions[key]);
						}
					}
					log(3, "adding Scene (now " + _sceneObjects.length + " total)");
				}
			} else {
				log(1, "ERROR: invalid argument supplied for '.addScene()'");
			}
			return Controller;
		};

		/**
		 * Remove one ore more scene(s) from the controller.  
		 * This is the equivalent to `Scene.remove()`.
		 * @public
		 * @example
		 * // remove a scene from the controller
		 * controller.removeScene(scene);
		 *
		 * // remove multiple scenes from the controller
		 * controller.removeScene([scene, scene2, scene3]);
		 *
		 * @param {(ScrollMagic.Scene|array)} Scene - ScrollMagic Scene or Array of Scenes to be removed from the controller.
		 * @returns {Controller} Parent object for chaining.
		 */
		this.removeScene = function (Scene) {
			if (_util.type.Array(Scene)) {
				Scene.forEach(function (scene, index) {
					Controller.removeScene(scene);
				});
			} else {
				var index = _sceneObjects.indexOf(Scene);
				if (index > -1) {
					Scene.off("shift.controller_sort");
					_sceneObjects.splice(index, 1);
					log(3, "removing Scene (now " + _sceneObjects.length + " left)");
					Scene.remove();
				}
			}
			return Controller;
		};

		/**
	 * Update one ore more scene(s) according to the scroll position of the container.  
	 * This is the equivalent to `Scene.update()`.  
	 * The update method calculates the scene's start and end position (based on the trigger element, trigger hook, duration and offset) and checks it against the current scroll position of the container.  
	 * It then updates the current scene state accordingly (or does nothing, if the state is already correct) – Pins will be set to their correct position and tweens will be updated to their correct progress.  
	 * _**Note:** This method gets called constantly whenever Controller detects a change. The only application for you is if you change something outside of the realm of ScrollMagic, like moving the trigger or changing tween parameters._
	 * @public
	 * @example
	 * // update a specific scene on next cycle
 	 * controller.updateScene(scene);
 	 *
	 * // update a specific scene immediately
	 * controller.updateScene(scene, true);
 	 *
	 * // update multiple scenes scene on next cycle
	 * controller.updateScene([scene1, scene2, scene3]);
	 *
	 * @param {ScrollMagic.Scene} Scene - ScrollMagic Scene or Array of Scenes that is/are supposed to be updated.
	 * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle.  
	 										  This is useful when changing multiple properties of the scene - this way it will only be updated once all new properties are set (updateScenes).
	 * @return {Controller} Parent object for chaining.
	 */
		this.updateScene = function (Scene, immediately) {
			if (_util.type.Array(Scene)) {
				Scene.forEach(function (scene, index) {
					Controller.updateScene(scene, immediately);
				});
			} else {
				if (immediately) {
					Scene.update(true);
				} else if (_updateScenesOnNextCycle !== true && Scene instanceof ScrollMagic.Scene) { // if _updateScenesOnNextCycle is true, all connected scenes are already scheduled for update
					// prep array for next update cycle
					_updateScenesOnNextCycle = _updateScenesOnNextCycle || [];
					if (_updateScenesOnNextCycle.indexOf(Scene) == -1) {
						_updateScenesOnNextCycle.push(Scene);
					}
					_updateScenesOnNextCycle = sortScenes(_updateScenesOnNextCycle); // sort
					debounceUpdate();
				}
			}
			return Controller;
		};

		/**
		 * Updates the controller params and calls updateScene on every scene, that is attached to the controller.  
		 * See `Controller.updateScene()` for more information about what this means.  
		 * In most cases you will not need this function, as it is called constantly, whenever ScrollMagic detects a state change event, like resize or scroll.  
		 * The only application for this method is when ScrollMagic fails to detect these events.  
		 * One application is with some external scroll libraries (like iScroll) that move an internal container to a negative offset instead of actually scrolling. In this case the update on the controller needs to be called whenever the child container's position changes.
		 * For this case there will also be the need to provide a custom function to calculate the correct scroll position. See `Controller.scrollPos()` for details.
		 * @public
		 * @example
		 * // update the controller on next cycle (saves performance due to elimination of redundant updates)
		 * controller.update();
		 *
		 * // update the controller immediately
		 * controller.update(true);
		 *
		 * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle (better performance)
		 * @return {Controller} Parent object for chaining.
		 */
		this.update = function (immediately) {
			onChange({
				type: "resize"
			}); // will update size and set _updateScenesOnNextCycle to true
			if (immediately) {
				updateScenes();
			}
			return Controller;
		};

		/**
		 * Scroll to a numeric scroll offset, a DOM element, the start of a scene or provide an alternate method for scrolling.  
		 * For vertical controllers it will change the top scroll offset and for horizontal applications it will change the left offset.
		 * @public
		 *
		 * @since 1.1.0
		 * @example
		 * // scroll to an offset of 100
		 * controller.scrollTo(100);
		 *
		 * // scroll to a DOM element
		 * controller.scrollTo("#anchor");
		 *
		 * // scroll to the beginning of a scene
		 * var scene = new ScrollMagic.Scene({offset: 200});
		 * controller.scrollTo(scene);
		 *
		 * // define a new scroll position modification function (jQuery animate instead of jump)
		 * controller.scrollTo(function (newScrollPos) {
		 *	$("html, body").animate({scrollTop: newScrollPos});
		 * });
		 * controller.scrollTo(100); // call as usual, but the new function will be used instead
		 *
		 * // define a new scroll function with an additional parameter
		 * controller.scrollTo(function (newScrollPos, message) {
		 *  console.log(message);
		 *	$(this).animate({scrollTop: newScrollPos});
		 * });
		 * // call as usual, but supply an extra parameter to the defined custom function
		 * controller.scrollTo(100, "my message");
		 *
		 * // define a new scroll function with an additional parameter containing multiple variables
		 * controller.scrollTo(function (newScrollPos, options) {
		 *  someGlobalVar = options.a + options.b;
		 *	$(this).animate({scrollTop: newScrollPos});
		 * });
		 * // call as usual, but supply an extra parameter containing multiple options
		 * controller.scrollTo(100, {a: 1, b: 2});
		 *
		 * // define a new scroll function with a callback supplied as an additional parameter
		 * controller.scrollTo(function (newScrollPos, callback) {
		 *	$(this).animate({scrollTop: newScrollPos}, 400, "swing", callback);
		 * });
		 * // call as usual, but supply an extra parameter, which is used as a callback in the previously defined custom scroll function
		 * controller.scrollTo(100, function() {
		 *	console.log("scroll has finished.");
		 * });
		 *
		 * @param {mixed} scrollTarget - The supplied argument can be one of these types:
		 * 1. `number` -> The container will scroll to this new scroll offset.
		 * 2. `string` or `object` -> Can be a selector or a DOM object.  
		 *  The container will scroll to the position of this element.
		 * 3. `ScrollMagic Scene` -> The container will scroll to the start of this scene.
		 * 4. `function` -> This function will be used for future scroll position modifications.  
		 *  This provides a way for you to change the behaviour of scrolling and adding new behaviour like animation. The function receives the new scroll position as a parameter and a reference to the container element using `this`.  
		 *  It may also optionally receive an optional additional parameter (see below)  
		 *  _**NOTE:**  
		 *  All other options will still work as expected, using the new function to scroll._
		 * @param {mixed} [additionalParameter] - If a custom scroll function was defined (see above 4.), you may want to supply additional parameters to it, when calling it. You can do this using this parameter – see examples for details. Please note, that this parameter will have no effect, if you use the default scrolling function.
		 * @returns {Controller} Parent object for chaining.
		 */
		this.scrollTo = function (scrollTarget, additionalParameter) {
			if (_util.type.Number(scrollTarget)) { // excecute
				setScrollPos.call(_options.container, scrollTarget, additionalParameter);
			} else if (scrollTarget instanceof ScrollMagic.Scene) { // scroll to scene
				if (scrollTarget.controller() === Controller) { // check if the controller is associated with this scene
					Controller.scrollTo(scrollTarget.scrollOffset(), additionalParameter);
				} else {
					log(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", scrollTarget);
				}
			} else if (_util.type.Function(scrollTarget)) { // assign new scroll function
				setScrollPos = scrollTarget;
			} else { // scroll to element
				var elem = _util.get.elements(scrollTarget)[0];
				if (elem) {
					// if parent is pin spacer, use spacer position instead so correct start position is returned for pinned elements.
					while (elem.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
						elem = elem.parentNode;
					}

					var
						param = _options.vertical ? "top" : "left", // which param is of interest ?
						containerOffset = _util.get.offset(_options.container), // container position is needed because element offset is returned in relation to document, not in relation to container.
						elementOffset = _util.get.offset(elem);

					if (!_isDocument) { // container is not the document root, so substract scroll Position to get correct trigger element position relative to scrollcontent
						containerOffset[param] -= Controller.scrollPos();
					}

					Controller.scrollTo(elementOffset[param] - containerOffset[param], additionalParameter);
				} else {
					log(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", scrollTarget);
				}
			}
			return Controller;
		};

		/**
		 * **Get** the current scrollPosition or **Set** a new method to calculate it.  
		 * -> **GET**:
		 * When used as a getter this function will return the current scroll position.  
		 * To get a cached value use Controller.info("scrollPos"), which will be updated in the update cycle.  
		 * For vertical controllers it will return the top scroll offset and for horizontal applications it will return the left offset.
		 *
		 * -> **SET**:
		 * When used as a setter this method prodes a way to permanently overwrite the controller's scroll position calculation.  
		 * A typical usecase is when the scroll position is not reflected by the containers scrollTop or scrollLeft values, but for example by the inner offset of a child container.  
		 * Moving a child container inside a parent is a commonly used method for several scrolling frameworks, including iScroll.  
		 * By providing an alternate calculation function you can make sure ScrollMagic receives the correct scroll position.  
		 * Please also bear in mind that your function should return y values for vertical scrolls an x for horizontals.
		 *
		 * To change the current scroll position please use `Controller.scrollTo()`.
		 * @public
		 *
		 * @example
		 * // get the current scroll Position
		 * var scrollPos = controller.scrollPos();
		 *
		 * // set a new scroll position calculation method
		 * controller.scrollPos(function () {
		 *	return this.info("vertical") ? -mychildcontainer.y : -mychildcontainer.x
		 * });
		 *
		 * @param {function} [scrollPosMethod] - The function to be used for the scroll position calculation of the container.
		 * @returns {(number|Controller)} Current scroll position or parent object for chaining.
		 */
		this.scrollPos = function (scrollPosMethod) {
			if (!arguments.length) { // get
				return getScrollPos.call(Controller);
			} else { // set
				if (_util.type.Function(scrollPosMethod)) {
					getScrollPos = scrollPosMethod;
				} else {
					log(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'.");
				}
			}
			return Controller;
		};

		/**
		 * **Get** all infos or one in particular about the controller.
		 * @public
		 * @example
		 * // returns the current scroll position (number)
		 * var scrollPos = controller.info("scrollPos");
		 *
		 * // returns all infos as an object
		 * var infos = controller.info();
		 *
		 * @param {string} [about] - If passed only this info will be returned instead of an object containing all.  
		 							 Valid options are:
		 							 ** `"size"` => the current viewport size of the container
		 							 ** `"vertical"` => true if vertical scrolling, otherwise false
		 							 ** `"scrollPos"` => the current scroll position
		 							 ** `"scrollDirection"` => the last known direction of the scroll
		 							 ** `"container"` => the container element
		 							 ** `"isDocument"` => true if container element is the document.
		 * @returns {(mixed|object)} The requested info(s).
		 */
		this.info = function (about) {
			var values = {
				size: _viewPortSize, // contains height or width (in regard to orientation);
				vertical: _options.vertical,
				scrollPos: _scrollPos,
				scrollDirection: _scrollDirection,
				container: _options.container,
				isDocument: _isDocument
			};
			if (!arguments.length) { // get all as an object
				return values;
			} else if (values[about] !== undefined) {
				return values[about];
			} else {
				log(1, "ERROR: option \"" + about + "\" is not available");
				return;
			}
		};

		/**
		 * **Get** or **Set** the current loglevel option value.
		 * @public
		 *
		 * @example
		 * // get the current value
		 * var loglevel = controller.loglevel();
		 *
		 * // set a new value
		 * controller.loglevel(3);
		 *
		 * @param {number} [newLoglevel] - The new loglevel setting of the Controller. `[0-3]`
		 * @returns {(number|Controller)} Current loglevel or parent object for chaining.
		 */
		this.loglevel = function (newLoglevel) {
			if (!arguments.length) { // get
				return _options.loglevel;
			} else if (_options.loglevel != newLoglevel) { // set
				_options.loglevel = newLoglevel;
			}
			return Controller;
		};

		/**
		 * **Get** or **Set** the current enabled state of the controller.  
		 * This can be used to disable all Scenes connected to the controller without destroying or removing them.
		 * @public
		 *
		 * @example
		 * // get the current value
		 * var enabled = controller.enabled();
		 *
		 * // disable the controller
		 * controller.enabled(false);
		 *
		 * @param {boolean} [newState] - The new enabled state of the controller `true` or `false`.
		 * @returns {(boolean|Controller)} Current enabled state or parent object for chaining.
		 */
		this.enabled = function (newState) {
			if (!arguments.length) { // get
				return _enabled;
			} else if (_enabled != newState) { // set
				_enabled = !!newState;
				Controller.updateScene(_sceneObjects, true);
			}
			return Controller;
		};

		/**
		 * Destroy the Controller, all Scenes and everything.
		 * @public
		 *
		 * @example
		 * // without resetting the scenes
		 * controller = controller.destroy();
		 *
		 * // with scene reset
		 * controller = controller.destroy(true);
		 *
		 * @param {boolean} [resetScenes=false] - If `true` the pins and tweens (if existent) of all scenes will be reset.
		 * @returns {null} Null to unset handler variables.
		 */
		this.destroy = function (resetScenes) {
			window.clearTimeout(_refreshTimeout);
			var i = _sceneObjects.length;
			while (i--) {
				_sceneObjects[i].destroy(resetScenes);
			}
			_options.container.removeEventListener("resize", onChange);
			_options.container.removeEventListener("scroll", onChange);
			_util.cAF(_updateTimeout);
			log(3, "destroyed " + NAMESPACE + " (reset: " + (resetScenes ? "true" : "false") + ")");
			return null;
		};

		// INIT
		construct();
		return Controller;
	};

	// store pagewide controller options
	var CONTROLLER_OPTIONS = {
		defaults: {
			container: window,
			vertical: true,
			globalSceneOptions: {},
			loglevel: 2,
			refreshInterval: 100
		}
	};
	/*
	 * method used to add an option to ScrollMagic Scenes.
	 */
	ScrollMagic.Controller.addOption = function (name, defaultValue) {
		CONTROLLER_OPTIONS.defaults[name] = defaultValue;
	};
	// instance extension function for plugins
	ScrollMagic.Controller.extend = function (extension) {
		var oldClass = this;
		ScrollMagic.Controller = function () {
			oldClass.apply(this, arguments);
			this.$super = _util.extend({}, this); // copy parent state
			return extension.apply(this, arguments) || this;
		};
		_util.extend(ScrollMagic.Controller, oldClass); // copy properties
		ScrollMagic.Controller.prototype = oldClass.prototype; // copy prototype
		ScrollMagic.Controller.prototype.constructor = ScrollMagic.Controller; // restore constructor
	};


	/**
	 * A Scene defines where the controller should react and how.
	 *
	 * @class
	 *
	 * @example
	 * // create a standard scene and add it to a controller
	 * new ScrollMagic.Scene()
	 *		.addTo(controller);
	 *
	 * // create a scene with custom options and assign a handler to it.
	 * var scene = new ScrollMagic.Scene({
	 * 		duration: 100,
	 *		offset: 200,
	 *		triggerHook: "onEnter",
	 *		reverse: false
	 * });
	 *
	 * @param {object} [options] - Options for the Scene. The options can be updated at any time.  
	 							   Instead of setting the options for each scene individually you can also set them globally in the controller as the controllers `globalSceneOptions` option. The object accepts the same properties as the ones below.  
	 							   When a scene is added to the controller the options defined using the Scene constructor will be overwritten by those set in `globalSceneOptions`.
	 * @param {(number|string|function)} [options.duration=0] - The duration of the scene. 
	 					Please see `Scene.duration()` for details.
	 * @param {number} [options.offset=0] - Offset Value for the Trigger Position. If no triggerElement is defined this will be the scroll distance from the start of the page, after which the scene will start.
	 * @param {(string|object)} [options.triggerElement=null] - Selector or DOM object that defines the start of the scene. If undefined the scene will start right at the start of the page (unless an offset is set).
	 * @param {(number|string)} [options.triggerHook="onCenter"] - Can be a number between 0 and 1 defining the position of the trigger Hook in relation to the viewport.  
	 															  Can also be defined using a string:
	 															  ** `"onEnter"` => `1`
	 															  ** `"onCenter"` => `0.5`
	 															  ** `"onLeave"` => `0`
	 * @param {boolean} [options.reverse=true] - Should the scene reverse, when scrolling up?
	 * @param {number} [options.loglevel=2] - Loglevel for debugging. Note that logging is disabled in the minified version of ScrollMagic.
	 										  ** `0` => silent
	 										  ** `1` => errors
	 										  ** `2` => errors, warnings
	 										  ** `3` => errors, warnings, debuginfo
	 * 
	 */
	ScrollMagic.Scene = function (options) {

		/*
		 * ----------------------------------------------------------------
		 * settings
		 * ----------------------------------------------------------------
		 */

		var
			NAMESPACE = 'ScrollMagic.Scene',
			SCENE_STATE_BEFORE = 'BEFORE',
			SCENE_STATE_DURING = 'DURING',
			SCENE_STATE_AFTER = 'AFTER',
			DEFAULT_OPTIONS = SCENE_OPTIONS.defaults;

		/*
		 * ----------------------------------------------------------------
		 * private vars
		 * ----------------------------------------------------------------
		 */

		var
			Scene = this,
			_options = _util.extend({}, DEFAULT_OPTIONS, options),
			_state = SCENE_STATE_BEFORE,
			_progress = 0,
			_scrollOffset = {
				start: 0,
				end: 0
			}, // reflects the controllers's scroll position for the start and end of the scene respectively
			_triggerPos = 0,
			_enabled = true,
			_durationUpdateMethod,
			_controller;

		/**
		 * Internal constructor function of the ScrollMagic Scene
		 * @private
		 */
		var construct = function () {
			for (var key in _options) { // check supplied options
				if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
					log(2, "WARNING: Unknown option \"" + key + "\"");
					delete _options[key];
				}
			}
			// add getters/setters for all possible options
			for (var optionName in DEFAULT_OPTIONS) {
				addSceneOption(optionName);
			}
			// validate all options
			validateOption();
		};

		/*
		 * ----------------------------------------------------------------
		 * Event Management
		 * ----------------------------------------------------------------
		 */

		var _listeners = {};
		/**
		 * Scene start event.  
		 * Fires whenever the scroll position its the starting point of the scene.  
		 * It will also fire when scrolling back up going over the start position of the scene. If you want something to happen only when scrolling down/right, use the scrollDirection parameter passed to the callback.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#start
		 *
		 * @example
		 * scene.on("start", function (event) {
		 * 	console.log("Hit start point of scene.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene `"BEFORE"` or `"DURING"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene end event.  
		 * Fires whenever the scroll position its the ending point of the scene.  
		 * It will also fire when scrolling back up from after the scene and going over its end position. If you want something to happen only when scrolling down/right, use the scrollDirection parameter passed to the callback.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#end
		 *
		 * @example
		 * scene.on("end", function (event) {
		 * 	console.log("Hit end point of scene.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene `"DURING"` or `"AFTER"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene enter event.  
		 * Fires whenever the scene enters the "DURING" state.  
		 * Keep in mind that it doesn't matter if the scene plays forward or backward: This event always fires when the scene enters its active scroll timeframe, regardless of the scroll-direction.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#enter
		 *
		 * @example
		 * scene.on("enter", function (event) {
		 * 	console.log("Scene entered.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene - always `"DURING"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene leave event.  
		 * Fires whenever the scene's state goes from "DURING" to either "BEFORE" or "AFTER".  
		 * Keep in mind that it doesn't matter if the scene plays forward or backward: This event always fires when the scene leaves its active scroll timeframe, regardless of the scroll-direction.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#leave
		 *
		 * @example
		 * scene.on("leave", function (event) {
		 * 	console.log("Scene left.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene `"BEFORE"` or `"AFTER"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene update event.  
		 * Fires whenever the scene is updated (but not necessarily changes the progress).
		 *
		 * @event ScrollMagic.Scene#update
		 *
		 * @example
		 * scene.on("update", function (event) {
		 * 	console.log("Scene updated.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.startPos - The starting position of the scene (in relation to the conainer)
		 * @property {number} event.endPos - The ending position of the scene (in relation to the conainer)
		 * @property {number} event.scrollPos - The current scroll position of the container
		 */
		/**
		 * Scene progress event.  
		 * Fires whenever the progress of the scene changes.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#progress
		 *
		 * @example
		 * scene.on("progress", function (event) {
		 * 	console.log("Scene progress changed to " + event.progress);
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene `"BEFORE"`, `"DURING"` or `"AFTER"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene change event.  
		 * Fires whenvever a property of the scene is changed.
		 *
		 * @event ScrollMagic.Scene#change
		 *
		 * @example
		 * scene.on("change", function (event) {
		 * 	console.log("Scene Property \"" + event.what + "\" changed to " + event.newval);
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {string} event.what - Indicates what value has been changed
		 * @property {mixed} event.newval - The new value of the changed property
		 */
		/**
		 * Scene shift event.  
		 * Fires whenvever the start or end **scroll offset** of the scene change.
		 * This happens explicitely, when one of these values change: `offset`, `duration` or `triggerHook`.
		 * It will fire implicitly when the `triggerElement` changes, if the new element has a different position (most cases).
		 * It will also fire implicitly when the size of the container changes and the triggerHook is anything other than `onLeave`.
		 *
		 * @event ScrollMagic.Scene#shift
		 * @since 1.1.0
		 *
		 * @example
		 * scene.on("shift", function (event) {
		 * 	console.log("Scene moved, because the " + event.reason + " has changed.)");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {string} event.reason - Indicates why the scene has shifted
		 */
		/**
		 * Scene destroy event.  
		 * Fires whenvever the scene is destroyed.
		 * This can be used to tidy up custom behaviour used in events.
		 *
		 * @event ScrollMagic.Scene#destroy
		 * @since 1.1.0
		 *
		 * @example
		 * scene.on("enter", function (event) {
		 *        // add custom action
		 *        $("#my-elem").left("200");
		 *      })
		 *      .on("destroy", function (event) {
		 *        // reset my element to start position
		 *        if (event.reset) {
		 *          $("#my-elem").left("0");
		 *        }
		 *      });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {boolean} event.reset - Indicates if the destroy method was called with reset `true` or `false`.
		 */
		/**
		 * Scene add event.  
		 * Fires when the scene is added to a controller.
		 * This is mostly used by plugins to know that change might be due.
		 *
		 * @event ScrollMagic.Scene#add
		 * @since 2.0.0
		 *
		 * @example
		 * scene.on("add", function (event) {
		 * 	console.log('Scene was added to a new controller.');
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {boolean} event.controller - The controller object the scene was added to.
		 */
		/**
		 * Scene remove event.  
		 * Fires when the scene is removed from a controller.
		 * This is mostly used by plugins to know that change might be due.
		 *
		 * @event ScrollMagic.Scene#remove
		 * @since 2.0.0
		 *
		 * @example
		 * scene.on("remove", function (event) {
		 * 	console.log('Scene was removed from its controller.');
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 */

		/**
		 * Add one ore more event listener.  
		 * The callback function will be fired at the respective event, and an object containing relevant data will be passed to the callback.
		 * @method ScrollMagic.Scene#on
		 *
		 * @example
		 * function callback (event) {
		 * 		console.log("Event fired! (" + event.type + ")");
		 * }
		 * // add listeners
		 * scene.on("change update progress start end enter leave", callback);
		 *
		 * @param {string} names - The name or names of the event the callback should be attached to.
		 * @param {function} callback - A function that should be executed, when the event is dispatched. An event object will be passed to the callback.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.on = function (names, callback) {
			if (_util.type.Function(callback)) {
				names = names.trim().split(' ');
				names.forEach(function (fullname) {
					var
						nameparts = fullname.split('.'),
						eventname = nameparts[0],
						namespace = nameparts[1];
					if (eventname != "*") { // disallow wildcards
						if (!_listeners[eventname]) {
							_listeners[eventname] = [];
						}
						_listeners[eventname].push({
							namespace: namespace || '',
							callback: callback
						});
					}
				});
			} else {
				log(1, "ERROR when calling '.on()': Supplied callback for '" + names + "' is not a valid function!");
			}
			return Scene;
		};

		/**
		 * Remove one or more event listener.
		 * @method ScrollMagic.Scene#off
		 *
		 * @example
		 * function callback (event) {
		 * 		console.log("Event fired! (" + event.type + ")");
		 * }
		 * // add listeners
		 * scene.on("change update", callback);
		 * // remove listeners
		 * scene.off("change update", callback);
		 *
		 * @param {string} names - The name or names of the event that should be removed.
		 * @param {function} [callback] - A specific callback function that should be removed. If none is passed all callbacks to the event listener will be removed.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.off = function (names, callback) {
			if (!names) {
				log(1, "ERROR: Invalid event name supplied.");
				return Scene;
			}
			names = names.trim().split(' ');
			names.forEach(function (fullname, key) {
				var
					nameparts = fullname.split('.'),
					eventname = nameparts[0],
					namespace = nameparts[1] || '',
					removeList = eventname === '*' ? Object.keys(_listeners) : [eventname];
				removeList.forEach(function (remove) {
					var
						list = _listeners[remove] || [],
						i = list.length;
					while (i--) {
						var listener = list[i];
						if (listener && (namespace === listener.namespace || namespace === '*') && (!callback || callback == listener.callback)) {
							list.splice(i, 1);
						}
					}
					if (!list.length) {
						delete _listeners[remove];
					}
				});
			});
			return Scene;
		};

		/**
		 * Trigger an event.
		 * @method ScrollMagic.Scene#trigger
		 *
		 * @example
		 * this.trigger("change");
		 *
		 * @param {string} name - The name of the event that should be triggered.
		 * @param {object} [vars] - An object containing info that should be passed to the callback.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.trigger = function (name, vars) {
			if (name) {
				var
					nameparts = name.trim().split('.'),
					eventname = nameparts[0],
					namespace = nameparts[1],
					listeners = _listeners[eventname];
				log(3, 'event fired:', eventname, vars ? "->" : '', vars || '');
				if (listeners) {
					listeners.forEach(function (listener, key) {
						if (!namespace || namespace === listener.namespace) {
							listener.callback.call(Scene, new ScrollMagic.Event(eventname, listener.namespace, Scene, vars));
						}
					});
				}
			} else {
				log(1, "ERROR: Invalid event name supplied.");
			}
			return Scene;
		};

		// set event listeners
		Scene
			.on("change.internal", function (e) {
				if (e.what !== "loglevel" && e.what !== "tweenChanges") { // no need for a scene update scene with these options...
					if (e.what === "triggerElement") {
						updateTriggerElementPosition();
					} else if (e.what === "reverse") { // the only property left that may have an impact on the current scene state. Everything else is handled by the shift event.
						Scene.update();
					}
				}
			})
			.on("shift.internal", function (e) {
				updateScrollOffset();
				Scene.update(); // update scene to reflect new position
			});

		/**
		 * Send a debug message to the console.
		 * @private
		 * but provided publicly with _log for plugins
		 *
		 * @param {number} loglevel - The loglevel required to initiate output for the message.
		 * @param {...mixed} output - One or more variables that should be passed to the console.
		 */
		var log = this._log = function (loglevel, output) {
			if (_options.loglevel >= loglevel) {
				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ") ->");
				_util.log.apply(window, arguments);
			}
		};

		/**
		 * Add the scene to a controller.  
		 * This is the equivalent to `Controller.addScene(scene)`.
		 * @method ScrollMagic.Scene#addTo
		 *
		 * @example
		 * // add a scene to a ScrollMagic Controller
		 * scene.addTo(controller);
		 *
		 * @param {ScrollMagic.Controller} controller - The controller to which the scene should be added.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.addTo = function (controller) {
			if (!(controller instanceof ScrollMagic.Controller)) {
				log(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller");
			} else if (_controller != controller) {
				// new controller
				if (_controller) { // was associated to a different controller before, so remove it...
					_controller.removeScene(Scene);
				}
				_controller = controller;
				validateOption();
				updateDuration(true);
				updateTriggerElementPosition(true);
				updateScrollOffset();
				_controller.info("container").addEventListener('resize', onContainerResize);
				controller.addScene(Scene);
				Scene.trigger("add", {
					controller: _controller
				});
				log(3, "added " + NAMESPACE + " to controller");
				Scene.update();
			}
			return Scene;
		};

		/**
		 * **Get** or **Set** the current enabled state of the scene.  
		 * This can be used to disable this scene without removing or destroying it.
		 * @method ScrollMagic.Scene#enabled
		 *
		 * @example
		 * // get the current value
		 * var enabled = scene.enabled();
		 *
		 * // disable the scene
		 * scene.enabled(false);
		 *
		 * @param {boolean} [newState] - The new enabled state of the scene `true` or `false`.
		 * @returns {(boolean|Scene)} Current enabled state or parent object for chaining.
		 */
		this.enabled = function (newState) {
			if (!arguments.length) { // get
				return _enabled;
			} else if (_enabled != newState) { // set
				_enabled = !!newState;
				Scene.update(true);
			}
			return Scene;
		};

		/**
		 * Remove the scene from the controller.  
		 * This is the equivalent to `Controller.removeScene(scene)`.
		 * The scene will not be updated anymore until you readd it to a controller.
		 * To remove the pin or the tween you need to call removeTween() or removePin() respectively.
		 * @method ScrollMagic.Scene#remove
		 * @example
		 * // remove the scene from its controller
		 * scene.remove();
		 *
		 * @returns {Scene} Parent object for chaining.
		 */
		this.remove = function () {
			if (_controller) {
				_controller.info("container").removeEventListener('resize', onContainerResize);
				var tmpParent = _controller;
				_controller = undefined;
				tmpParent.removeScene(Scene);
				Scene.trigger("remove");
				log(3, "removed " + NAMESPACE + " from controller");
			}
			return Scene;
		};

		/**
		 * Destroy the scene and everything.
		 * @method ScrollMagic.Scene#destroy
		 * @example
		 * // destroy the scene without resetting the pin and tween to their initial positions
		 * scene = scene.destroy();
		 *
		 * // destroy the scene and reset the pin and tween
		 * scene = scene.destroy(true);
		 *
		 * @param {boolean} [reset=false] - If `true` the pin and tween (if existent) will be reset.
		 * @returns {null} Null to unset handler variables.
		 */
		this.destroy = function (reset) {
			Scene.trigger("destroy", {
				reset: reset
			});
			Scene.remove();
			Scene.off("*.*");
			log(3, "destroyed " + NAMESPACE + " (reset: " + (reset ? "true" : "false") + ")");
			return null;
		};


		/**
		 * Updates the Scene to reflect the current state.  
		 * This is the equivalent to `Controller.updateScene(scene, immediately)`.  
		 * The update method calculates the scene's start and end position (based on the trigger element, trigger hook, duration and offset) and checks it against the current scroll position of the container.  
		 * It then updates the current scene state accordingly (or does nothing, if the state is already correct) – Pins will be set to their correct position and tweens will be updated to their correct progress.
		 * This means an update doesn't necessarily result in a progress change. The `progress` event will be fired if the progress has indeed changed between this update and the last.  
		 * _**NOTE:** This method gets called constantly whenever ScrollMagic detects a change. The only application for you is if you change something outside of the realm of ScrollMagic, like moving the trigger or changing tween parameters._
		 * @method ScrollMagic.Scene#update
		 * @example
		 * // update the scene on next tick
		 * scene.update();
		 *
		 * // update the scene immediately
		 * scene.update(true);
		 *
		 * @fires Scene.update
		 *
		 * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle (better performance).
		 * @returns {Scene} Parent object for chaining.
		 */
		this.update = function (immediately) {
			if (_controller) {
				if (immediately) {
					if (_controller.enabled() && _enabled) {
						var
							scrollPos = _controller.info("scrollPos"),
							newProgress;

						if (_options.duration > 0) {
							newProgress = (scrollPos - _scrollOffset.start) / (_scrollOffset.end - _scrollOffset.start);
						} else {
							newProgress = scrollPos >= _scrollOffset.start ? 1 : 0;
						}

						Scene.trigger("update", {
							startPos: _scrollOffset.start,
							endPos: _scrollOffset.end,
							scrollPos: scrollPos
						});

						Scene.progress(newProgress);
					} else if (_pin && _state === SCENE_STATE_DURING) {
						updatePinState(true); // unpin in position
					}
				} else {
					_controller.updateScene(Scene, false);
				}
			}
			return Scene;
		};

		/**
		 * Updates dynamic scene variables like the trigger element position or the duration.
		 * This method is automatically called in regular intervals from the controller. See {@link ScrollMagic.Controller} option `refreshInterval`.
		 * 
		 * You can call it to minimize lag, for example when you intentionally change the position of the triggerElement.
		 * If you don't it will simply be updated in the next refresh interval of the container, which is usually sufficient.
		 *
		 * @method ScrollMagic.Scene#refresh
		 * @since 1.1.0
		 * @example
		 * scene = new ScrollMagic.Scene({triggerElement: "#trigger"});
		 * 
		 * // change the position of the trigger
		 * $("#trigger").css("top", 500);
		 * // immediately let the scene know of this change
		 * scene.refresh();
		 *
		 * @fires {@link Scene.shift}, if the trigger element position or the duration changed
		 * @fires {@link Scene.change}, if the duration changed
		 *
		 * @returns {Scene} Parent object for chaining.
		 */
		this.refresh = function () {
			updateDuration();
			updateTriggerElementPosition();
			// update trigger element position
			return Scene;
		};

		/**
		 * **Get** or **Set** the scene's progress.  
		 * Usually it shouldn't be necessary to use this as a setter, as it is set automatically by scene.update().  
		 * The order in which the events are fired depends on the duration of the scene:
		 *  1. Scenes with `duration == 0`:  
		 *  Scenes that have no duration by definition have no ending. Thus the `end` event will never be fired.  
		 *  When the trigger position of the scene is passed the events are always fired in this order:  
		 *  `enter`, `start`, `progress` when scrolling forward  
		 *  and  
		 *  `progress`, `start`, `leave` when scrolling in reverse
		 *  2. Scenes with `duration > 0`:  
		 *  Scenes with a set duration have a defined start and end point.  
		 *  When scrolling past the start position of the scene it will fire these events in this order:  
		 *  `enter`, `start`, `progress`  
		 *  When continuing to scroll and passing the end point it will fire these events:  
		 *  `progress`, `end`, `leave`  
		 *  When reversing through the end point these events are fired:  
		 *  `enter`, `end`, `progress`  
		 *  And when continuing to scroll past the start position in reverse it will fire:  
		 *  `progress`, `start`, `leave`  
		 *  In between start and end the `progress` event will be called constantly, whenever the progress changes.
		 * 
		 * In short:  
		 * `enter` events will always trigger **before** the progress update and `leave` envents will trigger **after** the progress update.  
		 * `start` and `end` will always trigger at their respective position.
		 * 
		 * Please review the event descriptions for details on the events and the event object that is passed to the callback.
		 * 
		 * @method ScrollMagic.Scene#progress
		 * @example
		 * // get the current scene progress
		 * var progress = scene.progress();
		 *
		 * // set new scene progress
		 * scene.progress(0.3);
		 *
		 * @fires {@link Scene.enter}, when used as setter
		 * @fires {@link Scene.start}, when used as setter
		 * @fires {@link Scene.progress}, when used as setter
		 * @fires {@link Scene.end}, when used as setter
		 * @fires {@link Scene.leave}, when used as setter
		 *
		 * @param {number} [progress] - The new progress value of the scene `[0-1]`.
		 * @returns {number} `get` -  Current scene progress.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */
		this.progress = function (progress) {
			if (!arguments.length) { // get
				return _progress;
			} else { // set
				var
					doUpdate = false,
					oldState = _state,
					scrollDirection = _controller ? _controller.info("scrollDirection") : 'PAUSED',
					reverseOrForward = _options.reverse || progress >= _progress;
				if (_options.duration === 0) {
					// zero duration scenes
					doUpdate = _progress != progress;
					_progress = progress < 1 && reverseOrForward ? 0 : 1;
					_state = _progress === 0 ? SCENE_STATE_BEFORE : SCENE_STATE_DURING;
				} else {
					// scenes with start and end
					if (progress < 0 && _state !== SCENE_STATE_BEFORE && reverseOrForward) {
						// go back to initial state
						_progress = 0;
						_state = SCENE_STATE_BEFORE;
						doUpdate = true;
					} else if (progress >= 0 && progress < 1 && reverseOrForward) {
						_progress = progress;
						_state = SCENE_STATE_DURING;
						doUpdate = true;
					} else if (progress >= 1 && _state !== SCENE_STATE_AFTER) {
						_progress = 1;
						_state = SCENE_STATE_AFTER;
						doUpdate = true;
					} else if (_state === SCENE_STATE_DURING && !reverseOrForward) {
						updatePinState(); // in case we scrolled backwards mid-scene and reverse is disabled => update the pin position, so it doesn't move back as well.
					}
				}
				if (doUpdate) {
					// fire events
					var
						eventVars = {
							progress: _progress,
							state: _state,
							scrollDirection: scrollDirection
						},
						stateChanged = _state != oldState;

					var trigger = function (eventName) { // tmp helper to simplify code
						Scene.trigger(eventName, eventVars);
					};

					if (stateChanged) { // enter events
						if (oldState !== SCENE_STATE_DURING) {
							trigger("enter");
							trigger(oldState === SCENE_STATE_BEFORE ? "start" : "end");
						}
					}
					trigger("progress");
					if (stateChanged) { // leave events
						if (_state !== SCENE_STATE_DURING) {
							trigger(_state === SCENE_STATE_BEFORE ? "start" : "end");
							trigger("leave");
						}
					}
				}

				return Scene;
			}
		};


		/**
		 * Update the start and end scrollOffset of the container.
		 * The positions reflect what the controller's scroll position will be at the start and end respectively.
		 * Is called, when:
		 *   - Scene event "change" is called with: offset, triggerHook, duration 
		 *   - scroll container event "resize" is called
		 *   - the position of the triggerElement changes
		 *   - the controller changes -> addTo()
		 * @private
		 */
		var updateScrollOffset = function () {
			_scrollOffset = {
				start: _triggerPos + _options.offset
			};
			if (_controller && _options.triggerElement) {
				// take away triggerHook portion to get relative to top
				_scrollOffset.start -= _controller.info("size") * _options.triggerHook;
			}
			_scrollOffset.end = _scrollOffset.start + _options.duration;
		};

		/**
		 * Updates the duration if set to a dynamic function.
		 * This method is called when the scene is added to a controller and in regular intervals from the controller through scene.refresh().
		 * 
		 * @fires {@link Scene.change}, if the duration changed
		 * @fires {@link Scene.shift}, if the duration changed
		 *
		 * @param {boolean} [suppressEvents=false] - If true the shift event will be suppressed.
		 * @private
		 */
		var updateDuration = function (suppressEvents) {
			// update duration
			if (_durationUpdateMethod) {
				var varname = "duration";
				if (changeOption(varname, _durationUpdateMethod.call(Scene)) && !suppressEvents) { // set
					Scene.trigger("change", {
						what: varname,
						newval: _options[varname]
					});
					Scene.trigger("shift", {
						reason: varname
					});
				}
			}
		};

		/**
		 * Updates the position of the triggerElement, if present.
		 * This method is called ...
		 *  - ... when the triggerElement is changed
		 *  - ... when the scene is added to a (new) controller
		 *  - ... in regular intervals from the controller through scene.refresh().
		 * 
		 * @fires {@link Scene.shift}, if the position changed
		 *
		 * @param {boolean} [suppressEvents=false] - If true the shift event will be suppressed.
		 * @private
		 */
		var updateTriggerElementPosition = function (suppressEvents) {
			var
				elementPos = 0,
				telem = _options.triggerElement;
			if (_controller && (telem || _triggerPos > 0)) { // either an element exists or was removed and the triggerPos is still > 0
				if (telem) { // there currently a triggerElement set
					if (telem.parentNode) { // check if element is still attached to DOM
						var
							controllerInfo = _controller.info(),
							containerOffset = _util.get.offset(controllerInfo.container), // container position is needed because element offset is returned in relation to document, not in relation to container.
							param = controllerInfo.vertical ? "top" : "left"; // which param is of interest ?

						// if parent is spacer, use spacer position instead so correct start position is returned for pinned elements.
						while (telem.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
							telem = telem.parentNode;
						}

						var elementOffset = _util.get.offset(telem);

						if (!controllerInfo.isDocument) { // container is not the document root, so substract scroll Position to get correct trigger element position relative to scrollcontent
							containerOffset[param] -= _controller.scrollPos();
						}

						elementPos = elementOffset[param] - containerOffset[param];

					} else { // there was an element, but it was removed from DOM
						log(2, "WARNING: triggerElement was removed from DOM and will be reset to", undefined);
						Scene.triggerElement(undefined); // unset, so a change event is triggered
					}
				}

				var changed = elementPos != _triggerPos;
				_triggerPos = elementPos;
				if (changed && !suppressEvents) {
					Scene.trigger("shift", {
						reason: "triggerElementPosition"
					});
				}
			}
		};

		/**
		 * Trigger a shift event, when the container is resized and the triggerHook is > 1.
		 * @private
		 */
		var onContainerResize = function (e) {
			if (_options.triggerHook > 0) {
				Scene.trigger("shift", {
					reason: "containerResize"
				});
			}
		};


		var _validate = _util.extend(SCENE_OPTIONS.validate, {
			// validation for duration handled internally for reference to private var _durationMethod
			duration: function (val) {
				if (_util.type.String(val) && val.match(/^(\.|\d)*\d+%$/)) {
					// percentage value
					var perc = parseFloat(val) / 100;
					val = function () {
						return _controller ? _controller.info("size") * perc : 0;
					};
				}
				if (_util.type.Function(val)) {
					// function
					_durationUpdateMethod = val;
					try {
						val = parseFloat(_durationUpdateMethod.call(Scene));
					} catch (e) {
						val = -1; // will cause error below
					}
				}
				// val has to be float
				val = parseFloat(val);
				if (!_util.type.Number(val) || val < 0) {
					if (_durationUpdateMethod) {
						_durationUpdateMethod = undefined;
						throw ["Invalid return value of supplied function for option \"duration\":", val];
					} else {
						throw ["Invalid value for option \"duration\":", val];
					}
				}
				return val;
			}
		});

		/**
		 * Checks the validity of a specific or all options and reset to default if neccessary.
		 * @private
		 */
		var validateOption = function (check) {
			check = arguments.length ? [check] : Object.keys(_validate);
			check.forEach(function (optionName, key) {
				var value;
				if (_validate[optionName]) { // there is a validation method for this option
					try { // validate value
						value = _validate[optionName](_options[optionName]);
					} catch (e) { // validation failed -> reset to default
						value = DEFAULT_OPTIONS[optionName];
						var logMSG = _util.type.String(e) ? [e] : e;
						if (_util.type.Array(logMSG)) {
							logMSG[0] = "ERROR: " + logMSG[0];
							logMSG.unshift(1); // loglevel 1 for error msg
							log.apply(this, logMSG);
						} else {
							log(1, "ERROR: Problem executing validation callback for option '" + optionName + "':", e.message);
						}
					} finally {
						_options[optionName] = value;
					}
				}
			});
		};

		/**
		 * Helper used by the setter/getters for scene options
		 * @private
		 */
		var changeOption = function (varname, newval) {
			var
				changed = false,
				oldval = _options[varname];
			if (_options[varname] != newval) {
				_options[varname] = newval;
				validateOption(varname); // resets to default if necessary
				changed = oldval != _options[varname];
			}
			return changed;
		};

		// generate getters/setters for all options
		var addSceneOption = function (optionName) {
			if (!Scene[optionName]) {
				Scene[optionName] = function (newVal) {
					if (!arguments.length) { // get
						return _options[optionName];
					} else {
						if (optionName === "duration") { // new duration is set, so any previously set function must be unset
							_durationUpdateMethod = undefined;
						}
						if (changeOption(optionName, newVal)) { // set
							Scene.trigger("change", {
								what: optionName,
								newval: _options[optionName]
							});
							if (SCENE_OPTIONS.shifts.indexOf(optionName) > -1) {
								Scene.trigger("shift", {
									reason: optionName
								});
							}
						}
					}
					return Scene;
				};
			}
		};

		/**
		 * **Get** or **Set** the duration option value.
		 *
		 * As a **setter** it accepts three types of parameters:
		 * 1. `number`: Sets the duration of the scene to exactly this amount of pixels.  
		 *   This means the scene will last for exactly this amount of pixels scrolled. Sub-Pixels are also valid.
		 *   A value of `0` means that the scene is 'open end' and no end will be triggered. Pins will never unpin and animations will play independently of scroll progress.
		 * 2. `string`: Always updates the duration relative to parent scroll container.  
		 *   For example `"100%"` will keep the duration always exactly at the inner height of the scroll container.
		 *   When scrolling vertically the width is used for reference respectively.
		 * 3. `function`: The supplied function will be called to return the scene duration.
		 *   This is useful in setups where the duration depends on other elements who might change size. By supplying a function you can return a value instead of updating potentially multiple scene durations.  
		 *   The scene can be referenced inside the callback using `this`.
		 *   _**WARNING:** This is an easy way to kill performance, as the callback will be executed every time `Scene.refresh()` is called, which happens a lot. The interval is defined by the controller (see ScrollMagic.Controller option `refreshInterval`).  
		 *   It's recomended to avoid calculations within the function and use cached variables as return values.  
		 *   This counts double if you use the same function for multiple scenes._
		 *
		 * @method ScrollMagic.Scene#duration
		 * @example
		 * // get the current duration value
		 * var duration = scene.duration();
		 *
		 * // set a new duration
		 * scene.duration(300);
		 *
		 * // set duration responsively to container size
		 * scene.duration("100%");
		 *
		 * // use a function to randomize the duration for some reason.
		 * var durationValueCache;
		 * function durationCallback () {
		 *   return durationValueCache;
		 * }
		 * function updateDuration () {
		 *   durationValueCache = Math.random() * 100;
		 * }
		 * updateDuration(); // set to initial value
		 * scene.duration(durationCallback); // set duration callback
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @fires {@link Scene.shift}, when used as setter
		 * @param {(number|string|function)} [newDuration] - The new duration setting for the scene.
		 * @returns {number} `get` -  Current scene duration.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the offset option value.
		 * @method ScrollMagic.Scene#offset
		 * @example
		 * // get the current offset
		 * var offset = scene.offset();
		 *
		 * // set a new offset
		 * scene.offset(100);
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @fires {@link Scene.shift}, when used as setter
		 * @param {number} [newOffset] - The new offset of the scene.
		 * @returns {number} `get` -  Current scene offset.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the triggerElement option value.
		 * Does **not** fire `Scene.shift`, because changing the trigger Element doesn't necessarily mean the start position changes. This will be determined in `Scene.refresh()`, which is automatically triggered.
		 * @method ScrollMagic.Scene#triggerElement
		 * @example
		 * // get the current triggerElement
		 * var triggerElement = scene.triggerElement();
		 *
		 * // set a new triggerElement using a selector
		 * scene.triggerElement("#trigger");
		 * // set a new triggerElement using a DOM object
		 * scene.triggerElement(document.getElementById("trigger"));
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @param {(string|object)} [newTriggerElement] - The new trigger element for the scene.
		 * @returns {(string|object)} `get` -  Current triggerElement.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the triggerHook option value.
		 * @method ScrollMagic.Scene#triggerHook
		 * @example
		 * // get the current triggerHook value
		 * var triggerHook = scene.triggerHook();
		 *
		 * // set a new triggerHook using a string
		 * scene.triggerHook("onLeave");
		 * // set a new triggerHook using a number
		 * scene.triggerHook(0.7);
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @fires {@link Scene.shift}, when used as setter
		 * @param {(number|string)} [newTriggerHook] - The new triggerHook of the scene. See {@link Scene} parameter description for value options.
		 * @returns {number} `get` -  Current triggerHook (ALWAYS numerical).
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the reverse option value.
		 * @method ScrollMagic.Scene#reverse
		 * @example
		 * // get the current reverse option
		 * var reverse = scene.reverse();
		 *
		 * // set new reverse option
		 * scene.reverse(false);
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @param {boolean} [newReverse] - The new reverse setting of the scene.
		 * @returns {boolean} `get` -  Current reverse option value.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the loglevel option value.
		 * @method ScrollMagic.Scene#loglevel
		 * @example
		 * // get the current loglevel
		 * var loglevel = scene.loglevel();
		 *
		 * // set new loglevel
		 * scene.loglevel(3);
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @param {number} [newLoglevel] - The new loglevel setting of the scene. `[0-3]`
		 * @returns {number} `get` -  Current loglevel.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** the associated controller.
		 * @method ScrollMagic.Scene#controller
		 * @example
		 * // get the controller of a scene
		 * var controller = scene.controller();
		 *
		 * @returns {ScrollMagic.Controller} Parent controller or `undefined`
		 */
		this.controller = function () {
			return _controller;
		};

		/**
		 * **Get** the current state.
		 * @method ScrollMagic.Scene#state
		 * @example
		 * // get the current state
		 * var state = scene.state();
		 *
		 * @returns {string} `"BEFORE"`, `"DURING"` or `"AFTER"`
		 */
		this.state = function () {
			return _state;
		};

		/**
		 * **Get** the current scroll offset for the start of the scene.  
		 * Mind, that the scrollOffset is related to the size of the container, if `triggerHook` is bigger than `0` (or `"onLeave"`).  
		 * This means, that resizing the container or changing the `triggerHook` will influence the scene's start offset.
		 * @method ScrollMagic.Scene#scrollOffset
		 * @example
		 * // get the current scroll offset for the start and end of the scene.
		 * var start = scene.scrollOffset();
		 * var end = scene.scrollOffset() + scene.duration();
		 * console.log("the scene starts at", start, "and ends at", end);
		 *
		 * @returns {number} The scroll offset (of the container) at which the scene will trigger. Y value for vertical and X value for horizontal scrolls.
		 */
		this.scrollOffset = function () {
			return _scrollOffset.start;
		};

		/**
		 * **Get** the trigger position of the scene (including the value of the `offset` option).  
		 * @method ScrollMagic.Scene#triggerPosition
		 * @example
		 * // get the scene's trigger position
		 * var triggerPosition = scene.triggerPosition();
		 *
		 * @returns {number} Start position of the scene. Top position value for vertical and left position value for horizontal scrolls.
		 */
		this.triggerPosition = function () {
			var pos = _options.offset; // the offset is the basis
			if (_controller) {
				// get the trigger position
				if (_options.triggerElement) {
					// Element as trigger
					pos += _triggerPos;
				} else {
					// return the height of the triggerHook to start at the beginning
					pos += _controller.info("size") * Scene.triggerHook();
				}
			}
			return pos;
		};


		var
			_pin,
			_pinOptions;

		Scene
			.on("shift.internal", function (e) {
				var durationChanged = e.reason === "duration";
				if ((_state === SCENE_STATE_AFTER && durationChanged) || (_state === SCENE_STATE_DURING && _options.duration === 0)) {
					// if [duration changed after a scene (inside scene progress updates pin position)] or [duration is 0, we are in pin phase and some other value changed].
					updatePinState();
				}
				if (durationChanged) {
					updatePinDimensions();
				}
			})
			.on("progress.internal", function (e) {
				updatePinState();
			})
			.on("add.internal", function (e) {
				updatePinDimensions();
			})
			.on("destroy.internal", function (e) {
				Scene.removePin(e.reset);
			});
		/**
		 * Update the pin state.
		 * @private
		 */
		var updatePinState = function (forceUnpin) {
			if (_pin && _controller) {
				var
					containerInfo = _controller.info(),
					pinTarget = _pinOptions.spacer.firstChild; // may be pin element or another spacer, if cascading pins

				if (!forceUnpin && _state === SCENE_STATE_DURING) { // during scene or if duration is 0 and we are past the trigger
					// pinned state
					if (_util.css(pinTarget, "position") != "fixed") {
						// change state before updating pin spacer (position changes due to fixed collapsing might occur.)
						_util.css(pinTarget, {
							"position": "fixed"
						});
						// update pin spacer
						updatePinDimensions();
					}

					var
						fixedPos = _util.get.offset(_pinOptions.spacer, true), // get viewport position of spacer
						scrollDistance = _options.reverse || _options.duration === 0 ?
						containerInfo.scrollPos - _scrollOffset.start // quicker
						:
						Math.round(_progress * _options.duration * 10) / 10; // if no reverse and during pin the position needs to be recalculated using the progress

					// add scrollDistance
					fixedPos[containerInfo.vertical ? "top" : "left"] += scrollDistance;

					// set new values
					_util.css(_pinOptions.spacer.firstChild, {
						top: fixedPos.top,
						left: fixedPos.left
					});
				} else {
					// unpinned state
					var
						newCSS = {
							position: _pinOptions.inFlow ? "relative" : "absolute",
							top: 0,
							left: 0
						},
						change = _util.css(pinTarget, "position") != newCSS.position;

					if (!_pinOptions.pushFollowers) {
						newCSS[containerInfo.vertical ? "top" : "left"] = _options.duration * _progress;
					} else if (_options.duration > 0) { // only concerns scenes with duration
						if (_state === SCENE_STATE_AFTER && parseFloat(_util.css(_pinOptions.spacer, "padding-top")) === 0) {
							change = true; // if in after state but havent updated spacer yet (jumped past pin)
						} else if (_state === SCENE_STATE_BEFORE && parseFloat(_util.css(_pinOptions.spacer, "padding-bottom")) === 0) { // before
							change = true; // jumped past fixed state upward direction
						}
					}
					// set new values
					_util.css(pinTarget, newCSS);
					if (change) {
						// update pin spacer if state changed
						updatePinDimensions();
					}
				}
			}
		};

		/**
		 * Update the pin spacer and/or element size.
		 * The size of the spacer needs to be updated whenever the duration of the scene changes, if it is to push down following elements.
		 * @private
		 */
		var updatePinDimensions = function () {
			if (_pin && _controller && _pinOptions.inFlow) { // no spacerresize, if original position is absolute
				var
					after = (_state === SCENE_STATE_AFTER),
					before = (_state === SCENE_STATE_BEFORE),
					during = (_state === SCENE_STATE_DURING),
					vertical = _controller.info("vertical"),
					pinTarget = _pinOptions.spacer.firstChild, // usually the pined element but can also be another spacer (cascaded pins)
					marginCollapse = _util.isMarginCollapseType(_util.css(_pinOptions.spacer, "display")),
					css = {};

				// set new size
				// if relsize: spacer -> pin | else: pin -> spacer
				if (_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) {
					if (during) {
						_util.css(_pin, {
							"width": _util.get.width(_pinOptions.spacer)
						});
					} else {
						_util.css(_pin, {
							"width": "100%"
						});
					}
				} else {
					// minwidth is needed for cascaded pins.
					css["min-width"] = _util.get.width(vertical ? _pin : pinTarget, true, true);
					css.width = during ? css["min-width"] : "auto";
				}
				if (_pinOptions.relSize.height) {
					if (during) {
						// the only padding the spacer should ever include is the duration (if pushFollowers = true), so we need to substract that.
						_util.css(_pin, {
							"height": _util.get.height(_pinOptions.spacer) - (_pinOptions.pushFollowers ? _options.duration : 0)
						});
					} else {
						_util.css(_pin, {
							"height": "100%"
						});
					}
				} else {
					// margin is only included if it's a cascaded pin to resolve an IE9 bug
					css["min-height"] = _util.get.height(vertical ? pinTarget : _pin, true, !marginCollapse); // needed for cascading pins
					css.height = during ? css["min-height"] : "auto";
				}

				// add space for duration if pushFollowers is true
				if (_pinOptions.pushFollowers) {
					css["padding" + (vertical ? "Top" : "Left")] = _options.duration * _progress;
					css["padding" + (vertical ? "Bottom" : "Right")] = _options.duration * (1 - _progress);
				}
				_util.css(_pinOptions.spacer, css);
			}
		};

		/**
		 * Updates the Pin state (in certain scenarios)
		 * If the controller container is not the document and we are mid-pin-phase scrolling or resizing the main document can result to wrong pin positions.
		 * So this function is called on resize and scroll of the document.
		 * @private
		 */
		var updatePinInContainer = function () {
			if (_controller && _pin && _state === SCENE_STATE_DURING && !_controller.info("isDocument")) {
				updatePinState();
			}
		};

		/**
		 * Updates the Pin spacer size state (in certain scenarios)
		 * If container is resized during pin and relatively sized the size of the pin might need to be updated...
		 * So this function is called on resize of the container.
		 * @private
		 */
		var updateRelativePinSpacer = function () {
			if (_controller && _pin && // well, duh
				_state === SCENE_STATE_DURING && // element in pinned state?
				( // is width or height relatively sized, but not in relation to body? then we need to recalc.
					((_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) && _util.get.width(window) != _util.get.width(_pinOptions.spacer.parentNode)) ||
					(_pinOptions.relSize.height && _util.get.height(window) != _util.get.height(_pinOptions.spacer.parentNode))
				)
			) {
				updatePinDimensions();
			}
		};

		/**
		 * Is called, when the mousewhel is used while over a pinned element inside a div container.
		 * If the scene is in fixed state scroll events would be counted towards the body. This forwards the event to the scroll container.
		 * @private
		 */
		var onMousewheelOverPin = function (e) {
			if (_controller && _pin && _state === SCENE_STATE_DURING && !_controller.info("isDocument")) { // in pin state
				e.preventDefault();
				_controller._setScrollPos(_controller.info("scrollPos") - ((e.wheelDelta || e[_controller.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || -e.detail * 30));
			}
		};

		/**
		 * Pin an element for the duration of the scene.
		 * If the scene duration is 0 the element will only be unpinned, if the user scrolls back past the start position.  
		 * Make sure only one pin is applied to an element at the same time.
		 * An element can be pinned multiple times, but only successively.
		 * _**NOTE:** The option `pushFollowers` has no effect, when the scene duration is 0._
		 * @method ScrollMagic.Scene#setPin
		 * @example
		 * // pin element and push all following elements down by the amount of the pin duration.
		 * scene.setPin("#pin");
		 *
		 * // pin element and keeping all following elements in their place. The pinned element will move past them.
		 * scene.setPin("#pin", {pushFollowers: false});
		 *
		 * @param {(string|object)} element - A Selector targeting an element or a DOM object that is supposed to be pinned.
		 * @param {object} [settings] - settings for the pin
		 * @param {boolean} [settings.pushFollowers=true] - If `true` following elements will be "pushed" down for the duration of the pin, if `false` the pinned element will just scroll past them.  
		 												   Ignored, when duration is `0`.
		 * @param {string} [settings.spacerClass="scrollmagic-pin-spacer"] - Classname of the pin spacer element, which is used to replace the element.
		 *
		 * @returns {Scene} Parent object for chaining.
		 */
		this.setPin = function (element, settings) {
			var
				defaultSettings = {
					pushFollowers: true,
					spacerClass: "scrollmagic-pin-spacer"
				};
			var pushFollowersActivelySet = settings && settings.hasOwnProperty('pushFollowers');
			settings = _util.extend({}, defaultSettings, settings);

			// validate Element
			element = _util.get.elements(element)[0];
			if (!element) {
				log(1, "ERROR calling method 'setPin()': Invalid pin element supplied.");
				return Scene; // cancel
			} else if (_util.css(element, "position") === "fixed") {
				log(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'.");
				return Scene; // cancel
			}

			if (_pin) { // preexisting pin?
				if (_pin === element) {
					// same pin we already have -> do nothing
					return Scene; // cancel
				} else {
					// kill old pin
					Scene.removePin();
				}

			}
			_pin = element;

			var
				parentDisplay = _pin.parentNode.style.display,
				boundsParams = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];

			_pin.parentNode.style.display = 'none'; // hack start to force css to return stylesheet values instead of calculated px values.
			var
				inFlow = _util.css(_pin, "position") != "absolute",
				pinCSS = _util.css(_pin, boundsParams.concat(["display"])),
				sizeCSS = _util.css(_pin, ["width", "height"]);
			_pin.parentNode.style.display = parentDisplay; // hack end.

			if (!inFlow && settings.pushFollowers) {
				log(2, "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled.");
				settings.pushFollowers = false;
			}
			window.setTimeout(function () { // wait until all finished, because with responsive duration it will only be set after scene is added to controller
				if (_pin && _options.duration === 0 && pushFollowersActivelySet && settings.pushFollowers) {
					log(2, "WARNING: pushFollowers =", true, "has no effect, when scene duration is 0.");
				}
			}, 0);

			// create spacer and insert
			var
				spacer = _pin.parentNode.insertBefore(document.createElement('div'), _pin),
				spacerCSS = _util.extend(pinCSS, {
					position: inFlow ? "relative" : "absolute",
					boxSizing: "content-box",
					mozBoxSizing: "content-box",
					webkitBoxSizing: "content-box"
				});

			if (!inFlow) { // copy size if positioned absolutely, to work for bottom/right positioned elements.
				_util.extend(spacerCSS, _util.css(_pin, ["width", "height"]));
			}

			_util.css(spacer, spacerCSS);
			spacer.setAttribute(PIN_SPACER_ATTRIBUTE, "");
			_util.addClass(spacer, settings.spacerClass);

			// set the pin Options
			_pinOptions = {
				spacer: spacer,
				relSize: { // save if size is defined using % values. if so, handle spacer resize differently...
					width: sizeCSS.width.slice(-1) === "%",
					height: sizeCSS.height.slice(-1) === "%",
					autoFullWidth: sizeCSS.width === "auto" && inFlow && _util.isMarginCollapseType(pinCSS.display)
				},
				pushFollowers: settings.pushFollowers,
				inFlow: inFlow, // stores if the element takes up space in the document flow
			};

			if (!_pin.___origStyle) {
				_pin.___origStyle = {};
				var
					pinInlineCSS = _pin.style,
					copyStyles = boundsParams.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
				copyStyles.forEach(function (val) {
					_pin.___origStyle[val] = pinInlineCSS[val] || "";
				});
			}

			// if relative size, transfer it to spacer and make pin calculate it...
			if (_pinOptions.relSize.width) {
				_util.css(spacer, {
					width: sizeCSS.width
				});
			}
			if (_pinOptions.relSize.height) {
				_util.css(spacer, {
					height: sizeCSS.height
				});
			}

			// now place the pin element inside the spacer	
			spacer.appendChild(_pin);
			// and set new css
			_util.css(_pin, {
				position: inFlow ? "relative" : "absolute",
				margin: "auto",
				top: "auto",
				left: "auto",
				bottom: "auto",
				right: "auto"
			});

			if (_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) {
				_util.css(_pin, {
					boxSizing: "border-box",
					mozBoxSizing: "border-box",
					webkitBoxSizing: "border-box"
				});
			}

			// add listener to document to update pin position in case controller is not the document.
			window.addEventListener('scroll', updatePinInContainer);
			window.addEventListener('resize', updatePinInContainer);
			window.addEventListener('resize', updateRelativePinSpacer);
			// add mousewheel listener to catch scrolls over fixed elements
			_pin.addEventListener("mousewheel", onMousewheelOverPin);
			_pin.addEventListener("DOMMouseScroll", onMousewheelOverPin);

			log(3, "added pin");

			// finally update the pin to init
			updatePinState();

			return Scene;
		};

		/**
		 * Remove the pin from the scene.
		 * @method ScrollMagic.Scene#removePin
		 * @example
		 * // remove the pin from the scene without resetting it (the spacer is not removed)
		 * scene.removePin();
		 *
		 * // remove the pin from the scene and reset the pin element to its initial position (spacer is removed)
		 * scene.removePin(true);
		 *
		 * @param {boolean} [reset=false] - If `false` the spacer will not be removed and the element's position will not be reset.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.removePin = function (reset) {
			if (_pin) {
				if (_state === SCENE_STATE_DURING) {
					updatePinState(true); // force unpin at position
				}
				if (reset || !_controller) { // if there's no controller no progress was made anyway...
					var pinTarget = _pinOptions.spacer.firstChild; // usually the pin element, but may be another spacer (cascaded pins)...
					if (pinTarget.hasAttribute(PIN_SPACER_ATTRIBUTE)) { // copy margins to child spacer
						var
							style = _pinOptions.spacer.style,
							values = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"],
							margins = {};
						values.forEach(function (val) {
							margins[val] = style[val] || "";
						});
						_util.css(pinTarget, margins);
					}
					_pinOptions.spacer.parentNode.insertBefore(pinTarget, _pinOptions.spacer);
					_pinOptions.spacer.parentNode.removeChild(_pinOptions.spacer);
					if (!_pin.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) { // if it's the last pin for this element -> restore inline styles
						// TODO: only correctly set for first pin (when cascading) - how to fix?
						_util.css(_pin, _pin.___origStyle);
						delete _pin.___origStyle;
					}
				}
				window.removeEventListener('scroll', updatePinInContainer);
				window.removeEventListener('resize', updatePinInContainer);
				window.removeEventListener('resize', updateRelativePinSpacer);
				_pin.removeEventListener("mousewheel", onMousewheelOverPin);
				_pin.removeEventListener("DOMMouseScroll", onMousewheelOverPin);
				_pin = undefined;
				log(3, "removed pin (reset: " + (reset ? "true" : "false") + ")");
			}
			return Scene;
		};


		var
			_cssClasses,
			_cssClassElems = [];

		Scene
			.on("destroy.internal", function (e) {
				Scene.removeClassToggle(e.reset);
			});
		/**
		 * Define a css class modification while the scene is active.  
		 * When the scene triggers the classes will be added to the supplied element and removed, when the scene is over.
		 * If the scene duration is 0 the classes will only be removed if the user scrolls back past the start position.
		 * @method ScrollMagic.Scene#setClassToggle
		 * @example
		 * // add the class 'myclass' to the element with the id 'my-elem' for the duration of the scene
		 * scene.setClassToggle("#my-elem", "myclass");
		 *
		 * // add multiple classes to multiple elements defined by the selector '.classChange'
		 * scene.setClassToggle(".classChange", "class1 class2 class3");
		 *
		 * @param {(string|object)} element - A Selector targeting one or more elements or a DOM object that is supposed to be modified.
		 * @param {string} classes - One or more Classnames (separated by space) that should be added to the element during the scene.
		 *
		 * @returns {Scene} Parent object for chaining.
		 */
		this.setClassToggle = function (element, classes) {
			var elems = _util.get.elements(element);
			if (elems.length === 0 || !_util.type.String(classes)) {
				log(1, "ERROR calling method 'setClassToggle()': Invalid " + (elems.length === 0 ? "element" : "classes") + " supplied.");
				return Scene;
			}
			if (_cssClassElems.length > 0) {
				// remove old ones
				Scene.removeClassToggle();
			}
			_cssClasses = classes;
			_cssClassElems = elems;
			Scene.on("enter.internal_class leave.internal_class", function (e) {
				var toggle = e.type === "enter" ? _util.addClass : _util.removeClass;
				_cssClassElems.forEach(function (elem, key) {
					toggle(elem, _cssClasses);
				});
			});
			return Scene;
		};

		/**
		 * Remove the class binding from the scene.
		 * @method ScrollMagic.Scene#removeClassToggle
		 * @example
		 * // remove class binding from the scene without reset
		 * scene.removeClassToggle();
		 *
		 * // remove class binding and remove the changes it caused
		 * scene.removeClassToggle(true);
		 *
		 * @param {boolean} [reset=false] - If `false` and the classes are currently active, they will remain on the element. If `true` they will be removed.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.removeClassToggle = function (reset) {
			if (reset) {
				_cssClassElems.forEach(function (elem, key) {
					_util.removeClass(elem, _cssClasses);
				});
			}
			Scene.off("start.internal_class end.internal_class");
			_cssClasses = undefined;
			_cssClassElems = [];
			return Scene;
		};

		// INIT
		construct();
		return Scene;
	};

	// store pagewide scene options
	var SCENE_OPTIONS = {
		defaults: {
			duration: 0,
			offset: 0,
			triggerElement: undefined,
			triggerHook: 0.5,
			reverse: true,
			loglevel: 2
		},
		validate: {
			offset: function (val) {
				val = parseFloat(val);
				if (!_util.type.Number(val)) {
					throw ["Invalid value for option \"offset\":", val];
				}
				return val;
			},
			triggerElement: function (val) {
				val = val || undefined;
				if (val) {
					var elem = _util.get.elements(val)[0];
					if (elem && elem.parentNode) {
						val = elem;
					} else {
						throw ["Element defined in option \"triggerElement\" was not found:", val];
					}
				}
				return val;
			},
			triggerHook: function (val) {
				var translate = {
					"onCenter": 0.5,
					"onEnter": 1,
					"onLeave": 0
				};
				if (_util.type.Number(val)) {
					val = Math.max(0, Math.min(parseFloat(val), 1)); //  make sure its betweeen 0 and 1
				} else if (val in translate) {
					val = translate[val];
				} else {
					throw ["Invalid value for option \"triggerHook\": ", val];
				}
				return val;
			},
			reverse: function (val) {
				return !!val; // force boolean
			},
			loglevel: function (val) {
				val = parseInt(val);
				if (!_util.type.Number(val) || val < 0 || val > 3) {
					throw ["Invalid value for option \"loglevel\":", val];
				}
				return val;
			}
		}, // holder for  validation methods. duration validation is handled in 'getters-setters.js'
		shifts: ["duration", "offset", "triggerHook"], // list of options that trigger a `shift` event
	};
	/*
	 * method used to add an option to ScrollMagic Scenes.
	 * TODO: DOC (private for dev)
	 */
	ScrollMagic.Scene.addOption = function (name, defaultValue, validationCallback, shifts) {
		if (!(name in SCENE_OPTIONS.defaults)) {
			SCENE_OPTIONS.defaults[name] = defaultValue;
			SCENE_OPTIONS.validate[name] = validationCallback;
			if (shifts) {
				SCENE_OPTIONS.shifts.push(name);
			}
		} else {
			ScrollMagic._util.log(1, "[static] ScrollMagic.Scene -> Cannot add Scene option '" + name + "', because it already exists.");
		}
	};
	// instance extension function for plugins
	// TODO: DOC (private for dev)
	ScrollMagic.Scene.extend = function (extension) {
		var oldClass = this;
		ScrollMagic.Scene = function () {
			oldClass.apply(this, arguments);
			this.$super = _util.extend({}, this); // copy parent state
			return extension.apply(this, arguments) || this;
		};
		_util.extend(ScrollMagic.Scene, oldClass); // copy properties
		ScrollMagic.Scene.prototype = oldClass.prototype; // copy prototype
		ScrollMagic.Scene.prototype.constructor = ScrollMagic.Scene; // restore constructor
	};



	/**
	 * TODO: DOCS (private for dev)
	 * @class
	 * @private
	 */

	ScrollMagic.Event = function (type, namespace, target, vars) {
		vars = vars || {};
		for (var key in vars) {
			this[key] = vars[key];
		}
		this.type = type;
		this.target = this.currentTarget = target;
		this.namespace = namespace || '';
		this.timeStamp = this.timestamp = Date.now();
		return this;
	};

	/*
	 * TODO: DOCS (private for dev)
	 */

	var _util = ScrollMagic._util = (function (window) {
		var U = {},
			i;

		/**
		 * ------------------------------
		 * internal helpers
		 * ------------------------------
		 */

		// parse float and fall back to 0.
		var floatval = function (number) {
			return parseFloat(number) || 0;
		};
		// get current style IE safe (otherwise IE would return calculated values for 'auto')
		var _getComputedStyle = function (elem) {
			return elem.currentStyle ? elem.currentStyle : window.getComputedStyle(elem);
		};

		// get element dimension (width or height)
		var _dimension = function (which, elem, outer, includeMargin) {
			elem = (elem === document) ? window : elem;
			if (elem === window) {
				includeMargin = false;
			} else if (!_type.DomElement(elem)) {
				return 0;
			}
			which = which.charAt(0).toUpperCase() + which.substr(1).toLowerCase();
			var dimension = (outer ? elem['offset' + which] || elem['outer' + which] : elem['client' + which] || elem['inner' + which]) || 0;
			if (outer && includeMargin) {
				var style = _getComputedStyle(elem);
				dimension += which === 'Height' ? floatval(style.marginTop) + floatval(style.marginBottom) : floatval(style.marginLeft) + floatval(style.marginRight);
			}
			return dimension;
		};
		// converts 'margin-top' into 'marginTop'
		var _camelCase = function (str) {
			return str.replace(/^[^a-z]+([a-z])/g, '$1').replace(/-([a-z])/g, function (g) {
				return g[1].toUpperCase();
			});
		};

		/**
		 * ------------------------------
		 * external helpers
		 * ------------------------------
		 */

		// extend obj – same as jQuery.extend({}, objA, objB)
		U.extend = function (obj) {
			obj = obj || {};
			for (i = 1; i < arguments.length; i++) {
				if (!arguments[i]) {
					continue;
				}
				for (var key in arguments[i]) {
					if (arguments[i].hasOwnProperty(key)) {
						obj[key] = arguments[i][key];
					}
				}
			}
			return obj;
		};

		// check if a css display type results in margin-collapse or not
		U.isMarginCollapseType = function (str) {
			return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(str) > -1;
		};

		// implementation of requestAnimationFrame
		// based on https://gist.github.com/paulirish/1579671
		var
			lastTime = 0,
			vendors = ['ms', 'moz', 'webkit', 'o'];
		var _requestAnimationFrame = window.requestAnimationFrame;
		var _cancelAnimationFrame = window.cancelAnimationFrame;
		// try vendor prefixes if the above doesn't work
		for (i = 0; !_requestAnimationFrame && i < vendors.length; ++i) {
			_requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
			_cancelAnimationFrame = window[vendors[i] + 'CancelAnimationFrame'] || window[vendors[i] + 'CancelRequestAnimationFrame'];
		}

		// fallbacks
		if (!_requestAnimationFrame) {
			_requestAnimationFrame = function (callback) {
				var
					currTime = new Date().getTime(),
					timeToCall = Math.max(0, 16 - (currTime - lastTime)),
					id = window.setTimeout(function () {
						callback(currTime + timeToCall);
					}, timeToCall);
				lastTime = currTime + timeToCall;
				return id;
			};
		}
		if (!_cancelAnimationFrame) {
			_cancelAnimationFrame = function (id) {
				window.clearTimeout(id);
			};
		}
		U.rAF = _requestAnimationFrame.bind(window);
		U.cAF = _cancelAnimationFrame.bind(window);

		var
			loglevels = ["error", "warn", "log"],
			console = window.console || {};

		console.log = console.log || function () {}; // no console log, well - do nothing then...
		// make sure methods for all levels exist.
		for (i = 0; i < loglevels.length; i++) {
			var method = loglevels[i];
			if (!console[method]) {
				console[method] = console.log; // prefer .log over nothing
			}
		}
		U.log = function (loglevel) {
			if (loglevel > loglevels.length || loglevel <= 0) loglevel = loglevels.length;
			var now = new Date(),
				time = ("0" + now.getHours()).slice(-2) + ":" + ("0" + now.getMinutes()).slice(-2) + ":" + ("0" + now.getSeconds()).slice(-2) + ":" + ("00" + now.getMilliseconds()).slice(-3),
				method = loglevels[loglevel - 1],
				args = Array.prototype.splice.call(arguments, 1),
				func = Function.prototype.bind.call(console[method], console);
			args.unshift(time);
			func.apply(console, args);
		};

		/**
		 * ------------------------------
		 * type testing
		 * ------------------------------
		 */

		var _type = U.type = function (v) {
			return Object.prototype.toString.call(v).replace(/^\[object (.+)\]$/, "$1").toLowerCase();
		};
		_type.String = function (v) {
			return _type(v) === 'string';
		};
		_type.Function = function (v) {
			return _type(v) === 'function';
		};
		_type.Array = function (v) {
			return Array.isArray(v);
		};
		_type.Number = function (v) {
			return !_type.Array(v) && (v - parseFloat(v) + 1) >= 0;
		};
		_type.DomElement = function (o) {
			return (
				typeof HTMLElement === "object" || typeof HTMLElement === "function" ? o instanceof HTMLElement || o instanceof SVGElement : //DOM2
				o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string"
			);
		};

		/**
		 * ------------------------------
		 * DOM Element info
		 * ------------------------------
		 */
		// always returns a list of matching DOM elements, from a selector, a DOM element or an list of elements or even an array of selectors
		var _get = U.get = {};
		_get.elements = function (selector) {
			var arr = [];
			if (_type.String(selector)) {
				try {
					selector = document.querySelectorAll(selector);
				} catch (e) { // invalid selector
					return arr;
				}
			}
			if (_type(selector) === 'nodelist' || _type.Array(selector) || selector instanceof NodeList) {
				for (var i = 0, ref = arr.length = selector.length; i < ref; i++) { // list of elements
					var elem = selector[i];
					arr[i] = _type.DomElement(elem) ? elem : _get.elements(elem); // if not an element, try to resolve recursively
				}
			} else if (_type.DomElement(selector) || selector === document || selector === window) {
				arr = [selector]; // only the element
			}
			return arr;
		};
		// get scroll top value
		_get.scrollTop = function (elem) {
			return (elem && typeof elem.scrollTop === 'number') ? elem.scrollTop : window.pageYOffset || 0;
		};
		// get scroll left value
		_get.scrollLeft = function (elem) {
			return (elem && typeof elem.scrollLeft === 'number') ? elem.scrollLeft : window.pageXOffset || 0;
		};
		// get element height
		_get.width = function (elem, outer, includeMargin) {
			return _dimension('width', elem, outer, includeMargin);
		};
		// get element width
		_get.height = function (elem, outer, includeMargin) {
			return _dimension('height', elem, outer, includeMargin);
		};

		// get element position (optionally relative to viewport)
		_get.offset = function (elem, relativeToViewport) {
			var offset = {
				top: 0,
				left: 0
			};
			if (elem && elem.getBoundingClientRect) { // check if available
				var rect = elem.getBoundingClientRect();
				offset.top = rect.top;
				offset.left = rect.left;
				if (!relativeToViewport) { // clientRect is by default relative to viewport...
					offset.top += _get.scrollTop();
					offset.left += _get.scrollLeft();
				}
			}
			return offset;
		};

		/**
		 * ------------------------------
		 * DOM Element manipulation
		 * ------------------------------
		 */

		U.addClass = function (elem, classname) {
			if (classname) {
				if (elem.classList)
					elem.classList.add(classname);
				else
					elem.className += ' ' + classname;
			}
		};
		U.removeClass = function (elem, classname) {
			if (classname) {
				if (elem.classList)
					elem.classList.remove(classname);
				else
					elem.className = elem.className.replace(new RegExp('(^|\\b)' + classname.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
			}
		};
		// if options is string -> returns css value
		// if options is array -> returns object with css value pairs
		// if options is object -> set new css values
		U.css = function (elem, options) {
			if (_type.String(options)) {
				return _getComputedStyle(elem)[_camelCase(options)];
			} else if (_type.Array(options)) {
				var
					obj = {},
					style = _getComputedStyle(elem);
				options.forEach(function (option, key) {
					obj[option] = style[_camelCase(option)];
				});
				return obj;
			} else {
				for (var option in options) {
					var val = options[option];
					if (val == parseFloat(val)) { // assume pixel for seemingly numerical values
						val += 'px';
					}
					elem.style[_camelCase(option)] = val;
				}
			}
		};

		return U;
	}(window || {}));


	ScrollMagic.Scene.prototype.addIndicators = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin \'debug.addIndicators\'. Please make sure to include plugins/debug.addIndicators.js');
		return this;
	}
	ScrollMagic.Scene.prototype.removeIndicators = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin \'debug.addIndicators\'. Please make sure to include plugins/debug.addIndicators.js');
		return this;
	}
	ScrollMagic.Scene.prototype.setTween = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin \'animation.gsap\'. Please make sure to include plugins/animation.gsap.js');
		return this;
	}
	ScrollMagic.Scene.prototype.removeTween = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin \'animation.gsap\'. Please make sure to include plugins/animation.gsap.js');
		return this;
	}
	ScrollMagic.Scene.prototype.setVelocity = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin \'animation.velocity\'. Please make sure to include plugins/animation.velocity.js');
		return this;
	}
	ScrollMagic.Scene.prototype.removeVelocity = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin \'animation.velocity\'. Please make sure to include plugins/animation.velocity.js');
		return this;
	}

	return ScrollMagic;
}));

/***/ }),

/***/ "./node_modules/swiper/swiper-bundle.min.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/swiper-bundle.min.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Swiper 7.4.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: December 24, 2021
 */

!function(e,t){ true?module.exports=t():undefined}(this,(function(){"use strict";function e(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function t(s={},a={}){Object.keys(a).forEach((i=>{void 0===s[i]?s[i]=a[i]:e(a[i])&&e(s[i])&&Object.keys(a[i]).length>0&&t(s[i],a[i])}))}const s={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function a(){const e="undefined"!=typeof document?document:{};return t(e,s),e}const i={document:s,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function r(){const e="undefined"!=typeof window?window:{};return t(e,i),e}class n extends Array{constructor(e){super(...e||[]),function(e){const t=e.__proto__;Object.defineProperty(e,"__proto__",{get:()=>t,set(e){t.__proto__=e}})}(this)}}function l(e=[]){const t=[];return e.forEach((e=>{Array.isArray(e)?t.push(...l(e)):t.push(e)})),t}function o(e,t){return Array.prototype.filter.call(e,t)}function d(e,t){const s=r(),i=a();let l=[];if(!t&&e instanceof n)return e;if(!e)return new n(l);if("string"==typeof e){const s=e.trim();if(s.indexOf("<")>=0&&s.indexOf(">")>=0){let e="div";0===s.indexOf("<li")&&(e="ul"),0===s.indexOf("<tr")&&(e="tbody"),0!==s.indexOf("<td")&&0!==s.indexOf("<th")||(e="tr"),0===s.indexOf("<tbody")&&(e="table"),0===s.indexOf("<option")&&(e="select");const t=i.createElement(e);t.innerHTML=s;for(let e=0;e<t.childNodes.length;e+=1)l.push(t.childNodes[e])}else l=function(e,t){if("string"!=typeof e)return[e];const s=[],a=t.querySelectorAll(e);for(let e=0;e<a.length;e+=1)s.push(a[e]);return s}(e.trim(),t||i)}else if(e.nodeType||e===s||e===i)l.push(e);else if(Array.isArray(e)){if(e instanceof n)return e;l=e}return new n(function(e){const t=[];for(let s=0;s<e.length;s+=1)-1===t.indexOf(e[s])&&t.push(e[s]);return t}(l))}d.fn=n.prototype;const p={addClass:function(...e){const t=l(e.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.add(...t)})),this},removeClass:function(...e){const t=l(e.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.remove(...t)})),this},hasClass:function(...e){const t=l(e.map((e=>e.split(" "))));return o(this,(e=>t.filter((t=>e.classList.contains(t))).length>0)).length>0},toggleClass:function(...e){const t=l(e.map((e=>e.split(" "))));this.forEach((e=>{t.forEach((t=>{e.classList.toggle(t)}))}))},attr:function(e,t){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(let s=0;s<this.length;s+=1)if(2===arguments.length)this[s].setAttribute(e,t);else for(const t in e)this[s][t]=e[t],this[s].setAttribute(t,e[t]);return this},removeAttr:function(e){for(let t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},transform:function(e){for(let t=0;t<this.length;t+=1)this[t].style.transform=e;return this},transition:function(e){for(let t=0;t<this.length;t+=1)this[t].style.transitionDuration="string"!=typeof e?`${e}ms`:e;return this},on:function(...e){let[t,s,a,i]=e;function r(e){const t=e.target;if(!t)return;const i=e.target.dom7EventData||[];if(i.indexOf(e)<0&&i.unshift(e),d(t).is(s))a.apply(t,i);else{const e=d(t).parents();for(let t=0;t<e.length;t+=1)d(e[t]).is(s)&&a.apply(e[t],i)}}function n(e){const t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),a.apply(this,t)}"function"==typeof e[1]&&([t,a,i]=e,s=void 0),i||(i=!1);const l=t.split(" ");let o;for(let e=0;e<this.length;e+=1){const t=this[e];if(s)for(o=0;o<l.length;o+=1){const e=l[o];t.dom7LiveListeners||(t.dom7LiveListeners={}),t.dom7LiveListeners[e]||(t.dom7LiveListeners[e]=[]),t.dom7LiveListeners[e].push({listener:a,proxyListener:r}),t.addEventListener(e,r,i)}else for(o=0;o<l.length;o+=1){const e=l[o];t.dom7Listeners||(t.dom7Listeners={}),t.dom7Listeners[e]||(t.dom7Listeners[e]=[]),t.dom7Listeners[e].push({listener:a,proxyListener:n}),t.addEventListener(e,n,i)}}return this},off:function(...e){let[t,s,a,i]=e;"function"==typeof e[1]&&([t,a,i]=e,s=void 0),i||(i=!1);const r=t.split(" ");for(let e=0;e<r.length;e+=1){const t=r[e];for(let e=0;e<this.length;e+=1){const r=this[e];let n;if(!s&&r.dom7Listeners?n=r.dom7Listeners[t]:s&&r.dom7LiveListeners&&(n=r.dom7LiveListeners[t]),n&&n.length)for(let e=n.length-1;e>=0;e-=1){const s=n[e];a&&s.listener===a||a&&s.listener&&s.listener.dom7proxy&&s.listener.dom7proxy===a?(r.removeEventListener(t,s.proxyListener,i),n.splice(e,1)):a||(r.removeEventListener(t,s.proxyListener,i),n.splice(e,1))}}}return this},trigger:function(...e){const t=r(),s=e[0].split(" "),a=e[1];for(let i=0;i<s.length;i+=1){const r=s[i];for(let s=0;s<this.length;s+=1){const i=this[s];if(t.CustomEvent){const s=new t.CustomEvent(r,{detail:a,bubbles:!0,cancelable:!0});i.dom7EventData=e.filter(((e,t)=>t>0)),i.dispatchEvent(s),i.dom7EventData=[],delete i.dom7EventData}}}return this},transitionEnd:function(e){const t=this;return e&&t.on("transitionend",(function s(a){a.target===this&&(e.call(this,a),t.off("transitionend",s))})),this},outerWidth:function(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetWidth+parseFloat(e.getPropertyValue("margin-right"))+parseFloat(e.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetHeight+parseFloat(e.getPropertyValue("margin-top"))+parseFloat(e.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},styles:function(){const e=r();return this[0]?e.getComputedStyle(this[0],null):{}},offset:function(){if(this.length>0){const e=r(),t=a(),s=this[0],i=s.getBoundingClientRect(),n=t.body,l=s.clientTop||n.clientTop||0,o=s.clientLeft||n.clientLeft||0,d=s===e?e.scrollY:s.scrollTop,p=s===e?e.scrollX:s.scrollLeft;return{top:i.top+d-l,left:i.left+p-o}}return null},css:function(e,t){const s=r();let a;if(1===arguments.length){if("string"!=typeof e){for(a=0;a<this.length;a+=1)for(const t in e)this[a].style[t]=e[t];return this}if(this[0])return s.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(a=0;a<this.length;a+=1)this[a].style[e]=t;return this}return this},each:function(e){return e?(this.forEach(((t,s)=>{e.apply(t,[t,s])})),this):this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:null;for(let t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(let t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(e){const t=r(),s=a(),i=this[0];let l,o;if(!i||void 0===e)return!1;if("string"==typeof e){if(i.matches)return i.matches(e);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(e);if(i.msMatchesSelector)return i.msMatchesSelector(e);for(l=d(e),o=0;o<l.length;o+=1)if(l[o]===i)return!0;return!1}if(e===s)return i===s;if(e===t)return i===t;if(e.nodeType||e instanceof n){for(l=e.nodeType?[e]:e,o=0;o<l.length;o+=1)if(l[o]===i)return!0;return!1}return!1},index:function(){let e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;const t=this.length;if(e>t-1)return d([]);if(e<0){const s=t+e;return d(s<0?[]:[this[s]])}return d([this[e]])},append:function(...e){let t;const s=a();for(let a=0;a<e.length;a+=1){t=e[a];for(let e=0;e<this.length;e+=1)if("string"==typeof t){const a=s.createElement("div");for(a.innerHTML=t;a.firstChild;)this[e].appendChild(a.firstChild)}else if(t instanceof n)for(let s=0;s<t.length;s+=1)this[e].appendChild(t[s]);else this[e].appendChild(t)}return this},prepend:function(e){const t=a();let s,i;for(s=0;s<this.length;s+=1)if("string"==typeof e){const a=t.createElement("div");for(a.innerHTML=e,i=a.childNodes.length-1;i>=0;i-=1)this[s].insertBefore(a.childNodes[i],this[s].childNodes[0])}else if(e instanceof n)for(i=0;i<e.length;i+=1)this[s].insertBefore(e[i],this[s].childNodes[0]);else this[s].insertBefore(e,this[s].childNodes[0]);return this},next:function(e){return this.length>0?e?this[0].nextElementSibling&&d(this[0].nextElementSibling).is(e)?d([this[0].nextElementSibling]):d([]):this[0].nextElementSibling?d([this[0].nextElementSibling]):d([]):d([])},nextAll:function(e){const t=[];let s=this[0];if(!s)return d([]);for(;s.nextElementSibling;){const a=s.nextElementSibling;e?d(a).is(e)&&t.push(a):t.push(a),s=a}return d(t)},prev:function(e){if(this.length>0){const t=this[0];return e?t.previousElementSibling&&d(t.previousElementSibling).is(e)?d([t.previousElementSibling]):d([]):t.previousElementSibling?d([t.previousElementSibling]):d([])}return d([])},prevAll:function(e){const t=[];let s=this[0];if(!s)return d([]);for(;s.previousElementSibling;){const a=s.previousElementSibling;e?d(a).is(e)&&t.push(a):t.push(a),s=a}return d(t)},parent:function(e){const t=[];for(let s=0;s<this.length;s+=1)null!==this[s].parentNode&&(e?d(this[s].parentNode).is(e)&&t.push(this[s].parentNode):t.push(this[s].parentNode));return d(t)},parents:function(e){const t=[];for(let s=0;s<this.length;s+=1){let a=this[s].parentNode;for(;a;)e?d(a).is(e)&&t.push(a):t.push(a),a=a.parentNode}return d(t)},closest:function(e){let t=this;return void 0===e?d([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){const t=[];for(let s=0;s<this.length;s+=1){const a=this[s].querySelectorAll(e);for(let e=0;e<a.length;e+=1)t.push(a[e])}return d(t)},children:function(e){const t=[];for(let s=0;s<this.length;s+=1){const a=this[s].children;for(let s=0;s<a.length;s+=1)e&&!d(a[s]).is(e)||t.push(a[s])}return d(t)},filter:function(e){return d(o(this,e))},remove:function(){for(let e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this}};function c(e,t=0){return setTimeout(e,t)}function u(){return Date.now()}function h(e,t="x"){const s=r();let a,i,n;const l=function(e){const t=r();let s;return t.getComputedStyle&&(s=t.getComputedStyle(e,null)),!s&&e.currentStyle&&(s=e.currentStyle),s||(s=e.style),s}(e);return s.WebKitCSSMatrix?(i=l.transform||l.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map((e=>e.replace(",","."))).join(", ")),n=new s.WebKitCSSMatrix("none"===i?"":i)):(n=l.MozTransform||l.OTransform||l.MsTransform||l.msTransform||l.transform||l.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),a=n.toString().split(",")),"x"===t&&(i=s.WebKitCSSMatrix?n.m41:16===a.length?parseFloat(a[12]):parseFloat(a[4])),"y"===t&&(i=s.WebKitCSSMatrix?n.m42:16===a.length?parseFloat(a[13]):parseFloat(a[5])),i||0}function m(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function f(...e){const t=Object(e[0]),s=["__proto__","constructor","prototype"];for(let i=1;i<e.length;i+=1){const r=e[i];if(null!=r&&(a=r,!("undefined"!=typeof window&&void 0!==window.HTMLElement?a instanceof HTMLElement:a&&(1===a.nodeType||11===a.nodeType)))){const e=Object.keys(Object(r)).filter((e=>s.indexOf(e)<0));for(let s=0,a=e.length;s<a;s+=1){const a=e[s],i=Object.getOwnPropertyDescriptor(r,a);void 0!==i&&i.enumerable&&(m(t[a])&&m(r[a])?r[a].__swiper__?t[a]=r[a]:f(t[a],r[a]):!m(t[a])&&m(r[a])?(t[a]={},r[a].__swiper__?t[a]=r[a]:f(t[a],r[a])):t[a]=r[a])}}}var a;return t}function g(e,t,s){e.style.setProperty(t,s)}function v({swiper:e,targetPosition:t,side:s}){const a=r(),i=-e.translate;let n,l=null;const o=e.params.speed;e.wrapperEl.style.scrollSnapType="none",a.cancelAnimationFrame(e.cssModeFrameID);const d=t>i?"next":"prev",p=(e,t)=>"next"===d&&e>=t||"prev"===d&&e<=t,c=()=>{n=(new Date).getTime(),null===l&&(l=n);const r=Math.max(Math.min((n-l)/o,1),0),d=.5-Math.cos(r*Math.PI)/2;let u=i+d*(t-i);if(p(u,t)&&(u=t),e.wrapperEl.scrollTo({[s]:u}),p(u,t))return e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout((()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[s]:u})})),void a.cancelAnimationFrame(e.cssModeFrameID);e.cssModeFrameID=a.requestAnimationFrame(c)};c()}let w,b,x;function y(){return w||(w=function(){const e=r(),t=a();return{smoothScroll:t.documentElement&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch),passiveListener:function(){let t=!1;try{const s=Object.defineProperty({},"passive",{get(){t=!0}});e.addEventListener("testPassiveListener",null,s)}catch(e){}return t}(),gestures:"ongesturestart"in e}}()),w}function E(e={}){return b||(b=function({userAgent:e}={}){const t=y(),s=r(),a=s.navigator.platform,i=e||s.navigator.userAgent,n={ios:!1,android:!1},l=s.screen.width,o=s.screen.height,d=i.match(/(Android);?[\s\/]+([\d.]+)?/);let p=i.match(/(iPad).*OS\s([\d_]+)/);const c=i.match(/(iPod)(.*OS\s([\d_]+))?/),u=!p&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),h="Win32"===a;let m="MacIntel"===a;return!p&&m&&t.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${l}x${o}`)>=0&&(p=i.match(/(Version)\/([\d.]+)/),p||(p=[0,1,"13_0_0"]),m=!1),d&&!h&&(n.os="android",n.android=!0),(p||u||c)&&(n.os="ios",n.ios=!0),n}(e)),b}function T(){return x||(x=function(){const e=r();return{isSafari:function(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}(),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}()),x}Object.keys(p).forEach((e=>{Object.defineProperty(d.fn,e,{value:p[e],writable:!0})}));var C={on(e,t,s){const a=this;if("function"!=typeof t)return a;const i=s?"unshift":"push";return e.split(" ").forEach((e=>{a.eventsListeners[e]||(a.eventsListeners[e]=[]),a.eventsListeners[e][i](t)})),a},once(e,t,s){const a=this;if("function"!=typeof t)return a;function i(...s){a.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(a,s)}return i.__emitterProxy=t,a.on(e,i,s)},onAny(e,t){const s=this;if("function"!=typeof e)return s;const a=t?"unshift":"push";return s.eventsAnyListeners.indexOf(e)<0&&s.eventsAnyListeners[a](e),s},offAny(e){const t=this;if(!t.eventsAnyListeners)return t;const s=t.eventsAnyListeners.indexOf(e);return s>=0&&t.eventsAnyListeners.splice(s,1),t},off(e,t){const s=this;return s.eventsListeners?(e.split(" ").forEach((e=>{void 0===t?s.eventsListeners[e]=[]:s.eventsListeners[e]&&s.eventsListeners[e].forEach(((a,i)=>{(a===t||a.__emitterProxy&&a.__emitterProxy===t)&&s.eventsListeners[e].splice(i,1)}))})),s):s},emit(...e){const t=this;if(!t.eventsListeners)return t;let s,a,i;"string"==typeof e[0]||Array.isArray(e[0])?(s=e[0],a=e.slice(1,e.length),i=t):(s=e[0].events,a=e[0].data,i=e[0].context||t),a.unshift(i);return(Array.isArray(s)?s:s.split(" ")).forEach((e=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach((t=>{t.apply(i,[e,...a])})),t.eventsListeners&&t.eventsListeners[e]&&t.eventsListeners[e].forEach((e=>{e.apply(i,a)}))})),t}};function $({swiper:e,runCallbacks:t,direction:s,step:a}){const{activeIndex:i,previousIndex:r}=e;let n=s;if(n||(n=i>r?"next":i<r?"prev":"reset"),e.emit(`transition${a}`),t&&i!==r){if("reset"===n)return void e.emit(`slideResetTransition${a}`);e.emit(`slideChangeTransition${a}`),"next"===n?e.emit(`slideNextTransition${a}`):e.emit(`slidePrevTransition${a}`)}}function S(e){const t=this,s=a(),i=r(),n=t.touchEventsData,{params:l,touches:o,enabled:p}=t;if(!p)return;if(t.animating&&l.preventInteractionOnTransition)return;!t.animating&&l.cssMode&&l.loop&&t.loopFix();let c=e;c.originalEvent&&(c=c.originalEvent);let h=d(c.target);if("wrapper"===l.touchEventsTarget&&!h.closest(t.wrapperEl).length)return;if(n.isTouchEvent="touchstart"===c.type,!n.isTouchEvent&&"which"in c&&3===c.which)return;if(!n.isTouchEvent&&"button"in c&&c.button>0)return;if(n.isTouched&&n.isMoved)return;!!l.noSwipingClass&&""!==l.noSwipingClass&&c.target&&c.target.shadowRoot&&e.path&&e.path[0]&&(h=d(e.path[0]));const m=l.noSwipingSelector?l.noSwipingSelector:`.${l.noSwipingClass}`,f=!(!c.target||!c.target.shadowRoot);if(l.noSwiping&&(f?function(e,t=this){return function t(s){return s&&s!==a()&&s!==r()?(s.assignedSlot&&(s=s.assignedSlot),s.closest(e)||t(s.getRootNode().host)):null}(t)}(m,c.target):h.closest(m)[0]))return void(t.allowClick=!0);if(l.swipeHandler&&!h.closest(l.swipeHandler)[0])return;o.currentX="touchstart"===c.type?c.targetTouches[0].pageX:c.pageX,o.currentY="touchstart"===c.type?c.targetTouches[0].pageY:c.pageY;const g=o.currentX,v=o.currentY,w=l.edgeSwipeDetection||l.iOSEdgeSwipeDetection,b=l.edgeSwipeThreshold||l.iOSEdgeSwipeThreshold;if(w&&(g<=b||g>=i.innerWidth-b)){if("prevent"!==w)return;e.preventDefault()}if(Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=g,o.startY=v,n.touchStartTime=u(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,l.threshold>0&&(n.allowThresholdMove=!1),"touchstart"!==c.type){let e=!0;h.is(n.focusableElements)&&(e=!1),s.activeElement&&d(s.activeElement).is(n.focusableElements)&&s.activeElement!==h[0]&&s.activeElement.blur();const a=e&&t.allowTouchMove&&l.touchStartPreventDefault;!l.touchStartForcePreventDefault&&!a||h[0].isContentEditable||c.preventDefault()}t.emit("touchStart",c)}function M(e){const t=a(),s=this,i=s.touchEventsData,{params:r,touches:n,rtlTranslate:l,enabled:o}=s;if(!o)return;let p=e;if(p.originalEvent&&(p=p.originalEvent),!i.isTouched)return void(i.startMoving&&i.isScrolling&&s.emit("touchMoveOpposite",p));if(i.isTouchEvent&&"touchmove"!==p.type)return;const c="touchmove"===p.type&&p.targetTouches&&(p.targetTouches[0]||p.changedTouches[0]),h="touchmove"===p.type?c.pageX:p.pageX,m="touchmove"===p.type?c.pageY:p.pageY;if(p.preventedByNestedSwiper)return n.startX=h,void(n.startY=m);if(!s.allowTouchMove)return s.allowClick=!1,void(i.isTouched&&(Object.assign(n,{startX:h,startY:m,currentX:h,currentY:m}),i.touchStartTime=u()));if(i.isTouchEvent&&r.touchReleaseOnEdges&&!r.loop)if(s.isVertical()){if(m<n.startY&&s.translate<=s.maxTranslate()||m>n.startY&&s.translate>=s.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(h<n.startX&&s.translate<=s.maxTranslate()||h>n.startX&&s.translate>=s.minTranslate())return;if(i.isTouchEvent&&t.activeElement&&p.target===t.activeElement&&d(p.target).is(i.focusableElements))return i.isMoved=!0,void(s.allowClick=!1);if(i.allowTouchCallbacks&&s.emit("touchMove",p),p.targetTouches&&p.targetTouches.length>1)return;n.currentX=h,n.currentY=m;const f=n.currentX-n.startX,g=n.currentY-n.startY;if(s.params.threshold&&Math.sqrt(f**2+g**2)<s.params.threshold)return;if(void 0===i.isScrolling){let e;s.isHorizontal()&&n.currentY===n.startY||s.isVertical()&&n.currentX===n.startX?i.isScrolling=!1:f*f+g*g>=25&&(e=180*Math.atan2(Math.abs(g),Math.abs(f))/Math.PI,i.isScrolling=s.isHorizontal()?e>r.touchAngle:90-e>r.touchAngle)}if(i.isScrolling&&s.emit("touchMoveOpposite",p),void 0===i.startMoving&&(n.currentX===n.startX&&n.currentY===n.startY||(i.startMoving=!0)),i.isScrolling)return void(i.isTouched=!1);if(!i.startMoving)return;s.allowClick=!1,!r.cssMode&&p.cancelable&&p.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&p.stopPropagation(),i.isMoved||(r.loop&&!r.cssMode&&s.loopFix(),i.startTranslate=s.getTranslate(),s.setTransition(0),s.animating&&s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,!r.grabCursor||!0!==s.allowSlideNext&&!0!==s.allowSlidePrev||s.setGrabCursor(!0),s.emit("sliderFirstMove",p)),s.emit("sliderMove",p),i.isMoved=!0;let v=s.isHorizontal()?f:g;n.diff=v,v*=r.touchRatio,l&&(v=-v),s.swipeDirection=v>0?"prev":"next",i.currentTranslate=v+i.startTranslate;let w=!0,b=r.resistanceRatio;if(r.touchReleaseOnEdges&&(b=0),v>0&&i.currentTranslate>s.minTranslate()?(w=!1,r.resistance&&(i.currentTranslate=s.minTranslate()-1+(-s.minTranslate()+i.startTranslate+v)**b)):v<0&&i.currentTranslate<s.maxTranslate()&&(w=!1,r.resistance&&(i.currentTranslate=s.maxTranslate()+1-(s.maxTranslate()-i.startTranslate-v)**b)),w&&(p.preventedByNestedSwiper=!0),!s.allowSlideNext&&"next"===s.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!s.allowSlidePrev&&"prev"===s.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),s.allowSlidePrev||s.allowSlideNext||(i.currentTranslate=i.startTranslate),r.threshold>0){if(!(Math.abs(v)>r.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,i.currentTranslate=i.startTranslate,void(n.diff=s.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY)}r.followFinger&&!r.cssMode&&((r.freeMode&&r.freeMode.enabled&&s.freeMode||r.watchSlidesProgress)&&(s.updateActiveIndex(),s.updateSlidesClasses()),s.params.freeMode&&r.freeMode.enabled&&s.freeMode&&s.freeMode.onTouchMove(),s.updateProgress(i.currentTranslate),s.setTranslate(i.currentTranslate))}function P(e){const t=this,s=t.touchEventsData,{params:a,touches:i,rtlTranslate:r,slidesGrid:n,enabled:l}=t;if(!l)return;let o=e;if(o.originalEvent&&(o=o.originalEvent),s.allowTouchCallbacks&&t.emit("touchEnd",o),s.allowTouchCallbacks=!1,!s.isTouched)return s.isMoved&&a.grabCursor&&t.setGrabCursor(!1),s.isMoved=!1,void(s.startMoving=!1);a.grabCursor&&s.isMoved&&s.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const d=u(),p=d-s.touchStartTime;if(t.allowClick){const e=o.path||o.composedPath&&o.composedPath();t.updateClickedSlide(e&&e[0]||o.target),t.emit("tap click",o),p<300&&d-s.lastClickTime<300&&t.emit("doubleTap doubleClick",o)}if(s.lastClickTime=u(),c((()=>{t.destroyed||(t.allowClick=!0)})),!s.isTouched||!s.isMoved||!t.swipeDirection||0===i.diff||s.currentTranslate===s.startTranslate)return s.isTouched=!1,s.isMoved=!1,void(s.startMoving=!1);let h;if(s.isTouched=!1,s.isMoved=!1,s.startMoving=!1,h=a.followFinger?r?t.translate:-t.translate:-s.currentTranslate,a.cssMode)return;if(t.params.freeMode&&a.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:h});let m=0,f=t.slidesSizesGrid[0];for(let e=0;e<n.length;e+=e<a.slidesPerGroupSkip?1:a.slidesPerGroup){const t=e<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;void 0!==n[e+t]?h>=n[e]&&h<n[e+t]&&(m=e,f=n[e+t]-n[e]):h>=n[e]&&(m=e,f=n[n.length-1]-n[n.length-2])}const g=(h-n[m])/f,v=m<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(p>a.longSwipesMs){if(!a.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(g>=a.longSwipesRatio?t.slideTo(m+v):t.slideTo(m)),"prev"===t.swipeDirection&&(g>1-a.longSwipesRatio?t.slideTo(m+v):t.slideTo(m))}else{if(!a.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(o.target===t.navigation.nextEl||o.target===t.navigation.prevEl)?o.target===t.navigation.nextEl?t.slideTo(m+v):t.slideTo(m):("next"===t.swipeDirection&&t.slideTo(m+v),"prev"===t.swipeDirection&&t.slideTo(m))}}function k(){const e=this,{params:t,el:s}=e;if(s&&0===s.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:a,allowSlidePrev:i,snapGrid:r}=e;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses(),("auto"===t.slidesPerView||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.run(),e.allowSlidePrev=i,e.allowSlideNext=a,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}function z(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function O(){const e=this,{wrapperEl:t,rtlTranslate:s,enabled:a}=e;if(!a)return;let i;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,-0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const r=e.maxTranslate()-e.minTranslate();i=0===r?0:(e.translate-e.minTranslate())/r,i!==e.progress&&e.updateProgress(s?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}let I=!1;function L(){}const A=(e,t)=>{const s=a(),{params:i,touchEvents:r,el:n,wrapperEl:l,device:o,support:d}=e,p=!!i.nested,c="on"===t?"addEventListener":"removeEventListener",u=t;if(d.touch){const t=!("touchstart"!==r.start||!d.passiveListener||!i.passiveListeners)&&{passive:!0,capture:!1};n[c](r.start,e.onTouchStart,t),n[c](r.move,e.onTouchMove,d.passiveListener?{passive:!1,capture:p}:p),n[c](r.end,e.onTouchEnd,t),r.cancel&&n[c](r.cancel,e.onTouchEnd,t)}else n[c](r.start,e.onTouchStart,!1),s[c](r.move,e.onTouchMove,p),s[c](r.end,e.onTouchEnd,!1);(i.preventClicks||i.preventClicksPropagation)&&n[c]("click",e.onClick,!0),i.cssMode&&l[c]("scroll",e.onScroll),i.updateOnWindowResize?e[u](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",k,!0):e[u]("observerUpdate",k,!0)};const D=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;var G={init:!0,direction:"horizontal",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1};function N(e,t){return function(s={}){const a=Object.keys(s)[0],i=s[a];"object"==typeof i&&null!==i?(["navigation","pagination","scrollbar"].indexOf(a)>=0&&!0===e[a]&&(e[a]={auto:!0}),a in e&&"enabled"in i?(!0===e[a]&&(e[a]={enabled:!0}),"object"!=typeof e[a]||"enabled"in e[a]||(e[a].enabled=!0),e[a]||(e[a]={enabled:!1}),f(t,s)):f(t,s)):f(t,s)}}const B={eventsEmitter:C,update:{updateSize:function(){const e=this;let t,s;const a=e.$el;t=void 0!==e.params.width&&null!==e.params.width?e.params.width:a[0].clientWidth,s=void 0!==e.params.height&&null!==e.params.height?e.params.height:a[0].clientHeight,0===t&&e.isHorizontal()||0===s&&e.isVertical()||(t=t-parseInt(a.css("padding-left")||0,10)-parseInt(a.css("padding-right")||0,10),s=s-parseInt(a.css("padding-top")||0,10)-parseInt(a.css("padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(s)&&(s=0),Object.assign(e,{width:t,height:s,size:e.isHorizontal()?t:s}))},updateSlides:function(){const e=this;function t(t){return e.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}function s(e,s){return parseFloat(e.getPropertyValue(t(s))||0)}const a=e.params,{$wrapperEl:i,size:r,rtlTranslate:n,wrongRTL:l}=e,o=e.virtual&&a.virtual.enabled,d=o?e.virtual.slides.length:e.slides.length,p=i.children(`.${e.params.slideClass}`),c=o?e.virtual.slides.length:p.length;let u=[];const h=[],m=[];let f=a.slidesOffsetBefore;"function"==typeof f&&(f=a.slidesOffsetBefore.call(e));let v=a.slidesOffsetAfter;"function"==typeof v&&(v=a.slidesOffsetAfter.call(e));const w=e.snapGrid.length,b=e.slidesGrid.length;let x=a.spaceBetween,y=-f,E=0,T=0;if(void 0===r)return;"string"==typeof x&&x.indexOf("%")>=0&&(x=parseFloat(x.replace("%",""))/100*r),e.virtualSize=-x,n?p.css({marginLeft:"",marginBottom:"",marginTop:""}):p.css({marginRight:"",marginBottom:"",marginTop:""}),a.centeredSlides&&a.cssMode&&(g(e.wrapperEl,"--swiper-centered-offset-before",""),g(e.wrapperEl,"--swiper-centered-offset-after",""));const C=a.grid&&a.grid.rows>1&&e.grid;let $;C&&e.grid.initSlides(c);const S="auto"===a.slidesPerView&&a.breakpoints&&Object.keys(a.breakpoints).filter((e=>void 0!==a.breakpoints[e].slidesPerView)).length>0;for(let i=0;i<c;i+=1){$=0;const n=p.eq(i);if(C&&e.grid.updateSlide(i,n,c,t),"none"!==n.css("display")){if("auto"===a.slidesPerView){S&&(p[i].style[t("width")]="");const r=getComputedStyle(n[0]),l=n[0].style.transform,o=n[0].style.webkitTransform;if(l&&(n[0].style.transform="none"),o&&(n[0].style.webkitTransform="none"),a.roundLengths)$=e.isHorizontal()?n.outerWidth(!0):n.outerHeight(!0);else{const e=s(r,"width"),t=s(r,"padding-left"),a=s(r,"padding-right"),i=s(r,"margin-left"),l=s(r,"margin-right"),o=r.getPropertyValue("box-sizing");if(o&&"border-box"===o)$=e+i+l;else{const{clientWidth:s,offsetWidth:r}=n[0];$=e+t+a+i+l+(r-s)}}l&&(n[0].style.transform=l),o&&(n[0].style.webkitTransform=o),a.roundLengths&&($=Math.floor($))}else $=(r-(a.slidesPerView-1)*x)/a.slidesPerView,a.roundLengths&&($=Math.floor($)),p[i]&&(p[i].style[t("width")]=`${$}px`);p[i]&&(p[i].swiperSlideSize=$),m.push($),a.centeredSlides?(y=y+$/2+E/2+x,0===E&&0!==i&&(y=y-r/2-x),0===i&&(y=y-r/2-x),Math.abs(y)<.001&&(y=0),a.roundLengths&&(y=Math.floor(y)),T%a.slidesPerGroup==0&&u.push(y),h.push(y)):(a.roundLengths&&(y=Math.floor(y)),(T-Math.min(e.params.slidesPerGroupSkip,T))%e.params.slidesPerGroup==0&&u.push(y),h.push(y),y=y+$+x),e.virtualSize+=$+x,E=$,T+=1}}if(e.virtualSize=Math.max(e.virtualSize,r)+v,n&&l&&("slide"===a.effect||"coverflow"===a.effect)&&i.css({width:`${e.virtualSize+a.spaceBetween}px`}),a.setWrapperSize&&i.css({[t("width")]:`${e.virtualSize+a.spaceBetween}px`}),C&&e.grid.updateWrapperSize($,u,t),!a.centeredSlides){const t=[];for(let s=0;s<u.length;s+=1){let i=u[s];a.roundLengths&&(i=Math.floor(i)),u[s]<=e.virtualSize-r&&t.push(i)}u=t,Math.floor(e.virtualSize-r)-Math.floor(u[u.length-1])>1&&u.push(e.virtualSize-r)}if(0===u.length&&(u=[0]),0!==a.spaceBetween){const s=e.isHorizontal()&&n?"marginLeft":t("marginRight");p.filter(((e,t)=>!a.cssMode||t!==p.length-1)).css({[s]:`${x}px`})}if(a.centeredSlides&&a.centeredSlidesBounds){let e=0;m.forEach((t=>{e+=t+(a.spaceBetween?a.spaceBetween:0)})),e-=a.spaceBetween;const t=e-r;u=u.map((e=>e<0?-f:e>t?t+v:e))}if(a.centerInsufficientSlides){let e=0;if(m.forEach((t=>{e+=t+(a.spaceBetween?a.spaceBetween:0)})),e-=a.spaceBetween,e<r){const t=(r-e)/2;u.forEach(((e,s)=>{u[s]=e-t})),h.forEach(((e,s)=>{h[s]=e+t}))}}if(Object.assign(e,{slides:p,snapGrid:u,slidesGrid:h,slidesSizesGrid:m}),a.centeredSlides&&a.cssMode&&!a.centeredSlidesBounds){g(e.wrapperEl,"--swiper-centered-offset-before",-u[0]+"px"),g(e.wrapperEl,"--swiper-centered-offset-after",e.size/2-m[m.length-1]/2+"px");const t=-e.snapGrid[0],s=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map((e=>e+t)),e.slidesGrid=e.slidesGrid.map((e=>e+s))}c!==d&&e.emit("slidesLengthChange"),u.length!==w&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),h.length!==b&&e.emit("slidesGridLengthChange"),a.watchSlidesProgress&&e.updateSlidesOffset()},updateAutoHeight:function(e){const t=this,s=[],a=t.virtual&&t.params.virtual.enabled;let i,r=0;"number"==typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const n=e=>a?t.slides.filter((t=>parseInt(t.getAttribute("data-swiper-slide-index"),10)===e))[0]:t.slides.eq(e)[0];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)t.visibleSlides.each((e=>{s.push(e)}));else for(i=0;i<Math.ceil(t.params.slidesPerView);i+=1){const e=t.activeIndex+i;if(e>t.slides.length&&!a)break;s.push(n(e))}else s.push(n(t.activeIndex));for(i=0;i<s.length;i+=1)if(void 0!==s[i]){const e=s[i].offsetHeight;r=e>r?e:r}(r||0===r)&&t.$wrapperEl.css("height",`${r}px`)},updateSlidesOffset:function(){const e=this,t=e.slides;for(let s=0;s<t.length;s+=1)t[s].swiperSlideOffset=e.isHorizontal()?t[s].offsetLeft:t[s].offsetTop},updateSlidesProgress:function(e=this&&this.translate||0){const t=this,s=t.params,{slides:a,rtlTranslate:i,snapGrid:r}=t;if(0===a.length)return;void 0===a[0].swiperSlideOffset&&t.updateSlidesOffset();let n=-e;i&&(n=e),a.removeClass(s.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(let e=0;e<a.length;e+=1){const l=a[e];let o=l.swiperSlideOffset;s.cssMode&&s.centeredSlides&&(o-=a[0].swiperSlideOffset);const d=(n+(s.centeredSlides?t.minTranslate():0)-o)/(l.swiperSlideSize+s.spaceBetween),p=(n-r[0]+(s.centeredSlides?t.minTranslate():0)-o)/(l.swiperSlideSize+s.spaceBetween),c=-(n-o),u=c+t.slidesSizesGrid[e];(c>=0&&c<t.size-1||u>1&&u<=t.size||c<=0&&u>=t.size)&&(t.visibleSlides.push(l),t.visibleSlidesIndexes.push(e),a.eq(e).addClass(s.slideVisibleClass)),l.progress=i?-d:d,l.originalProgress=i?-p:p}t.visibleSlides=d(t.visibleSlides)},updateProgress:function(e){const t=this;if(void 0===e){const s=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*s||0}const s=t.params,a=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:r,isEnd:n}=t;const l=r,o=n;0===a?(i=0,r=!0,n=!0):(i=(e-t.minTranslate())/a,r=i<=0,n=i>=1),Object.assign(t,{progress:i,isBeginning:r,isEnd:n}),(s.watchSlidesProgress||s.centeredSlides&&s.autoHeight)&&t.updateSlidesProgress(e),r&&!l&&t.emit("reachBeginning toEdge"),n&&!o&&t.emit("reachEnd toEdge"),(l&&!r||o&&!n)&&t.emit("fromEdge"),t.emit("progress",i)},updateSlidesClasses:function(){const e=this,{slides:t,params:s,$wrapperEl:a,activeIndex:i,realIndex:r}=e,n=e.virtual&&s.virtual.enabled;let l;t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`),l=n?e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`):t.eq(i),l.addClass(s.slideActiveClass),s.loop&&(l.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));let o=l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);s.loop&&0===o.length&&(o=t.eq(0),o.addClass(s.slideNextClass));let d=l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);s.loop&&0===d.length&&(d=t.eq(-1),d.addClass(s.slidePrevClass)),s.loop&&(o.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass),d.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)),e.emitSlidesClasses()},updateActiveIndex:function(e){const t=this,s=t.rtlTranslate?t.translate:-t.translate,{slidesGrid:a,snapGrid:i,params:r,activeIndex:n,realIndex:l,snapIndex:o}=t;let d,p=e;if(void 0===p){for(let e=0;e<a.length;e+=1)void 0!==a[e+1]?s>=a[e]&&s<a[e+1]-(a[e+1]-a[e])/2?p=e:s>=a[e]&&s<a[e+1]&&(p=e+1):s>=a[e]&&(p=e);r.normalizeSlideIndex&&(p<0||void 0===p)&&(p=0)}if(i.indexOf(s)>=0)d=i.indexOf(s);else{const e=Math.min(r.slidesPerGroupSkip,p);d=e+Math.floor((p-e)/r.slidesPerGroup)}if(d>=i.length&&(d=i.length-1),p===n)return void(d!==o&&(t.snapIndex=d,t.emit("snapIndexChange")));const c=parseInt(t.slides.eq(p).attr("data-swiper-slide-index")||p,10);Object.assign(t,{snapIndex:d,realIndex:c,previousIndex:n,activeIndex:p}),t.emit("activeIndexChange"),t.emit("snapIndexChange"),l!==c&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")},updateClickedSlide:function(e){const t=this,s=t.params,a=d(e).closest(`.${s.slideClass}`)[0];let i,r=!1;if(a)for(let e=0;e<t.slides.length;e+=1)if(t.slides[e]===a){r=!0,i=e;break}if(!a||!r)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=a,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(d(a).attr("data-swiper-slide-index"),10):t.clickedIndex=i,s.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}},translate:{getTranslate:function(e=(this.isHorizontal()?"x":"y")){const{params:t,rtlTranslate:s,translate:a,$wrapperEl:i}=this;if(t.virtualTranslate)return s?-a:a;if(t.cssMode)return a;let r=h(i[0],e);return s&&(r=-r),r||0},setTranslate:function(e,t){const s=this,{rtlTranslate:a,params:i,$wrapperEl:r,wrapperEl:n,progress:l}=s;let o,d=0,p=0;s.isHorizontal()?d=a?-e:e:p=e,i.roundLengths&&(d=Math.floor(d),p=Math.floor(p)),i.cssMode?n[s.isHorizontal()?"scrollLeft":"scrollTop"]=s.isHorizontal()?-d:-p:i.virtualTranslate||r.transform(`translate3d(${d}px, ${p}px, 0px)`),s.previousTranslate=s.translate,s.translate=s.isHorizontal()?d:p;const c=s.maxTranslate()-s.minTranslate();o=0===c?0:(e-s.minTranslate())/c,o!==l&&s.updateProgress(e),s.emit("setTranslate",s.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e=0,t=this.params.speed,s=!0,a=!0,i){const r=this,{params:n,wrapperEl:l}=r;if(r.animating&&n.preventInteractionOnTransition)return!1;const o=r.minTranslate(),d=r.maxTranslate();let p;if(p=a&&e>o?o:a&&e<d?d:e,r.updateProgress(p),n.cssMode){const e=r.isHorizontal();if(0===t)l[e?"scrollLeft":"scrollTop"]=-p;else{if(!r.support.smoothScroll)return v({swiper:r,targetPosition:-p,side:e?"left":"top"}),!0;l.scrollTo({[e?"left":"top"]:-p,behavior:"smooth"})}return!0}return 0===t?(r.setTransition(0),r.setTranslate(p),s&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(p),s&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,s&&r.emit("transitionEnd"))}),r.$wrapperEl[0].addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd))),!0}},transition:{setTransition:function(e,t){const s=this;s.params.cssMode||s.$wrapperEl.transition(e),s.emit("setTransition",e,t)},transitionStart:function(e=!0,t){const s=this,{params:a}=s;a.cssMode||(a.autoHeight&&s.updateAutoHeight(),$({swiper:s,runCallbacks:e,direction:t,step:"Start"}))},transitionEnd:function(e=!0,t){const s=this,{params:a}=s;s.animating=!1,a.cssMode||(s.setTransition(0),$({swiper:s,runCallbacks:e,direction:t,step:"End"}))}},slide:{slideTo:function(e=0,t=this.params.speed,s=!0,a,i){if("number"!=typeof e&&"string"!=typeof e)throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);if("string"==typeof e){const t=parseInt(e,10);if(!isFinite(t))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=t}const r=this;let n=e;n<0&&(n=0);const{params:l,snapGrid:o,slidesGrid:d,previousIndex:p,activeIndex:c,rtlTranslate:u,wrapperEl:h,enabled:m}=r;if(r.animating&&l.preventInteractionOnTransition||!m&&!a&&!i)return!1;const f=Math.min(r.params.slidesPerGroupSkip,n);let g=f+Math.floor((n-f)/r.params.slidesPerGroup);g>=o.length&&(g=o.length-1),(c||l.initialSlide||0)===(p||0)&&s&&r.emit("beforeSlideChangeStart");const w=-o[g];if(r.updateProgress(w),l.normalizeSlideIndex)for(let e=0;e<d.length;e+=1){const t=-Math.floor(100*w),s=Math.floor(100*d[e]),a=Math.floor(100*d[e+1]);void 0!==d[e+1]?t>=s&&t<a-(a-s)/2?n=e:t>=s&&t<a&&(n=e+1):t>=s&&(n=e)}if(r.initialized&&n!==c){if(!r.allowSlideNext&&w<r.translate&&w<r.minTranslate())return!1;if(!r.allowSlidePrev&&w>r.translate&&w>r.maxTranslate()&&(c||0)!==n)return!1}let b;if(b=n>c?"next":n<c?"prev":"reset",u&&-w===r.translate||!u&&w===r.translate)return r.updateActiveIndex(n),l.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==l.effect&&r.setTranslate(w),"reset"!==b&&(r.transitionStart(s,b),r.transitionEnd(s,b)),!1;if(l.cssMode){const e=r.isHorizontal(),s=u?w:-w;if(0===t){const t=r.virtual&&r.params.virtual.enabled;t&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),h[e?"scrollLeft":"scrollTop"]=s,t&&requestAnimationFrame((()=>{r.wrapperEl.style.scrollSnapType="",r._swiperImmediateVirtual=!1}))}else{if(!r.support.smoothScroll)return v({swiper:r,targetPosition:s,side:e?"left":"top"}),!0;h.scrollTo({[e?"left":"top"]:s,behavior:"smooth"})}return!0}return r.setTransition(t),r.setTranslate(w),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,a),r.transitionStart(s,b),0===t?r.transitionEnd(s,b):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(s,b))}),r.$wrapperEl[0].addEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd)),!0},slideToLoop:function(e=0,t=this.params.speed,s=!0,a){const i=this;let r=e;return i.params.loop&&(r+=i.loopedSlides),i.slideTo(r,t,s,a)},slideNext:function(e=this.params.speed,t=!0,s){const a=this,{animating:i,enabled:r,params:n}=a;if(!r)return a;let l=n.slidesPerGroup;"auto"===n.slidesPerView&&1===n.slidesPerGroup&&n.slidesPerGroupAuto&&(l=Math.max(a.slidesPerViewDynamic("current",!0),1));const o=a.activeIndex<n.slidesPerGroupSkip?1:l;if(n.loop){if(i&&n.loopPreventsSlide)return!1;a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft}return n.rewind&&a.isEnd?a.slideTo(0,e,t,s):a.slideTo(a.activeIndex+o,e,t,s)},slidePrev:function(e=this.params.speed,t=!0,s){const a=this,{params:i,animating:r,snapGrid:n,slidesGrid:l,rtlTranslate:o,enabled:d}=a;if(!d)return a;if(i.loop){if(r&&i.loopPreventsSlide)return!1;a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft}function p(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const c=p(o?a.translate:-a.translate),u=n.map((e=>p(e)));let h=n[u.indexOf(c)-1];if(void 0===h&&i.cssMode){let e;n.forEach(((t,s)=>{c>=t&&(e=s)})),void 0!==e&&(h=n[e>0?e-1:e])}let m=0;return void 0!==h&&(m=l.indexOf(h),m<0&&(m=a.activeIndex-1),"auto"===i.slidesPerView&&1===i.slidesPerGroup&&i.slidesPerGroupAuto&&(m=m-a.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),i.rewind&&a.isBeginning?a.slideTo(a.slides.length-1,e,t,s):a.slideTo(m,e,t,s)},slideReset:function(e=this.params.speed,t=!0,s){return this.slideTo(this.activeIndex,e,t,s)},slideToClosest:function(e=this.params.speed,t=!0,s,a=.5){const i=this;let r=i.activeIndex;const n=Math.min(i.params.slidesPerGroupSkip,r),l=n+Math.floor((r-n)/i.params.slidesPerGroup),o=i.rtlTranslate?i.translate:-i.translate;if(o>=i.snapGrid[l]){const e=i.snapGrid[l];o-e>(i.snapGrid[l+1]-e)*a&&(r+=i.params.slidesPerGroup)}else{const e=i.snapGrid[l-1];o-e<=(i.snapGrid[l]-e)*a&&(r-=i.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,i.slidesGrid.length-1),i.slideTo(r,e,t,s)},slideToClickedSlide:function(){const e=this,{params:t,$wrapperEl:s}=e,a="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let i,r=e.clickedIndex;if(t.loop){if(e.animating)return;i=parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"),10),t.centeredSlides?r<e.loopedSlides-a/2||r>e.slides.length-e.loopedSlides+a/2?(e.loopFix(),r=s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),c((()=>{e.slideTo(r)}))):e.slideTo(r):r>e.slides.length-a?(e.loopFix(),r=s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),c((()=>{e.slideTo(r)}))):e.slideTo(r)}else e.slideTo(r)}},loop:{loopCreate:function(){const e=this,t=a(),{params:s,$wrapperEl:i}=e,r=i.children().length>0?d(i.children()[0].parentNode):i;r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();let n=r.children(`.${s.slideClass}`);if(s.loopFillGroupWithBlank){const e=s.slidesPerGroup-n.length%s.slidesPerGroup;if(e!==s.slidesPerGroup){for(let a=0;a<e;a+=1){const e=d(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);r.append(e)}n=r.children(`.${s.slideClass}`)}}"auto"!==s.slidesPerView||s.loopedSlides||(s.loopedSlides=n.length),e.loopedSlides=Math.ceil(parseFloat(s.loopedSlides||s.slidesPerView,10)),e.loopedSlides+=s.loopAdditionalSlides,e.loopedSlides>n.length&&(e.loopedSlides=n.length);const l=[],o=[];n.each(((t,s)=>{const a=d(t);s<e.loopedSlides&&o.push(t),s<n.length&&s>=n.length-e.loopedSlides&&l.push(t),a.attr("data-swiper-slide-index",s)}));for(let e=0;e<o.length;e+=1)r.append(d(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));for(let e=l.length-1;e>=0;e-=1)r.prepend(d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass))},loopFix:function(){const e=this;e.emit("beforeLoopFix");const{activeIndex:t,slides:s,loopedSlides:a,allowSlidePrev:i,allowSlideNext:r,snapGrid:n,rtlTranslate:l}=e;let o;e.allowSlidePrev=!0,e.allowSlideNext=!0;const d=-n[t]-e.getTranslate();if(t<a){o=s.length-3*a+t,o+=a;e.slideTo(o,0,!1,!0)&&0!==d&&e.setTranslate((l?-e.translate:e.translate)-d)}else if(t>=s.length-a){o=-s.length+t+a,o+=a;e.slideTo(o,0,!1,!0)&&0!==d&&e.setTranslate((l?-e.translate:e.translate)-d)}e.allowSlidePrev=i,e.allowSlideNext=r,e.emit("loopFix")},loopDestroy:function(){const{$wrapperEl:e,params:t,slides:s}=this;e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),s.removeAttr("data-swiper-slide-index")}},grabCursor:{setGrabCursor:function(e){const t=this;if(t.support.touch||!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const s="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;s.style.cursor="move",s.style.cursor=e?"-webkit-grabbing":"-webkit-grab",s.style.cursor=e?"-moz-grabbin":"-moz-grab",s.style.cursor=e?"grabbing":"grab"},unsetGrabCursor:function(){const e=this;e.support.touch||e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="")}},events:{attachEvents:function(){const e=this,t=a(),{params:s,support:i}=e;e.onTouchStart=S.bind(e),e.onTouchMove=M.bind(e),e.onTouchEnd=P.bind(e),s.cssMode&&(e.onScroll=O.bind(e)),e.onClick=z.bind(e),i.touch&&!I&&(t.addEventListener("touchstart",L),I=!0),A(e,"on")},detachEvents:function(){A(this,"off")}},breakpoints:{setBreakpoint:function(){const e=this,{activeIndex:t,initialized:s,loopedSlides:a=0,params:i,$el:r}=e,n=i.breakpoints;if(!n||n&&0===Object.keys(n).length)return;const l=e.getBreakpoint(n,e.params.breakpointsBase,e.el);if(!l||e.currentBreakpoint===l)return;const o=(l in n?n[l]:void 0)||e.originalParams,d=D(e,i),p=D(e,o),c=i.enabled;d&&!p?(r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`),e.emitContainerClasses()):!d&&p&&(r.addClass(`${i.containerModifierClass}grid`),(o.grid.fill&&"column"===o.grid.fill||!o.grid.fill&&"column"===i.grid.fill)&&r.addClass(`${i.containerModifierClass}grid-column`),e.emitContainerClasses());const u=o.direction&&o.direction!==i.direction,h=i.loop&&(o.slidesPerView!==i.slidesPerView||u);u&&s&&e.changeDirection(),f(e.params,o);const m=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),c&&!m?e.disable():!c&&m&&e.enable(),e.currentBreakpoint=l,e.emit("_beforeBreakpoint",o),h&&s&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-a+e.loopedSlides,0,!1)),e.emit("breakpoint",o)},getBreakpoint:function(e,t="window",s){if(!e||"container"===t&&!s)return;let a=!1;const i=r(),n="window"===t?i.innerHeight:s.clientHeight,l=Object.keys(e).map((e=>{if("string"==typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1));return{value:n*t,point:e}}return{value:e,point:e}}));l.sort(((e,t)=>parseInt(e.value,10)-parseInt(t.value,10)));for(let e=0;e<l.length;e+=1){const{point:r,value:n}=l[e];"window"===t?i.matchMedia(`(min-width: ${n}px)`).matches&&(a=r):n<=s.clientWidth&&(a=r)}return a||"max"}},checkOverflow:{checkOverflow:function(){const e=this,{isLocked:t,params:s}=e,{slidesOffsetBefore:a}=s;if(a){const t=e.slides.length-1,s=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*a;e.isLocked=e.size>s}else e.isLocked=1===e.snapGrid.length;!0===s.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===s.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}},classes:{addClasses:function(){const e=this,{classNames:t,params:s,rtl:a,$el:i,device:r,support:n}=e,l=function(e,t){const s=[];return e.forEach((e=>{"object"==typeof e?Object.keys(e).forEach((a=>{e[a]&&s.push(t+a)})):"string"==typeof e&&s.push(t+e)})),s}(["initialized",s.direction,{"pointer-events":!n.touch},{"free-mode":e.params.freeMode&&s.freeMode.enabled},{autoheight:s.autoHeight},{rtl:a},{grid:s.grid&&s.grid.rows>1},{"grid-column":s.grid&&s.grid.rows>1&&"column"===s.grid.fill},{android:r.android},{ios:r.ios},{"css-mode":s.cssMode},{centered:s.cssMode&&s.centeredSlides}],s.containerModifierClass);t.push(...l),i.addClass([...t].join(" ")),e.emitContainerClasses()},removeClasses:function(){const{$el:e,classNames:t}=this;e.removeClass(t.join(" ")),this.emitContainerClasses()}},images:{loadImage:function(e,t,s,a,i,n){const l=r();let o;function p(){n&&n()}d(e).parent("picture")[0]||e.complete&&i?p():t?(o=new l.Image,o.onload=p,o.onerror=p,a&&(o.sizes=a),s&&(o.srcset=s),t&&(o.src=t)):p()},preloadImages:function(){const e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(let s=0;s<e.imagesToLoad.length;s+=1){const a=e.imagesToLoad[s];e.loadImage(a,a.currentSrc||a.getAttribute("src"),a.srcset||a.getAttribute("srcset"),a.sizes||a.getAttribute("sizes"),!0,t)}}}},X={};class H{constructor(...e){let t,s;if(1===e.length&&e[0].constructor&&"Object"===Object.prototype.toString.call(e[0]).slice(8,-1)?s=e[0]:[t,s]=e,s||(s={}),s=f({},s),t&&!s.el&&(s.el=t),s.el&&d(s.el).length>1){const e=[];return d(s.el).each((t=>{const a=f({},s,{el:t});e.push(new H(a))})),e}const a=this;a.__swiper__=!0,a.support=y(),a.device=E({userAgent:s.userAgent}),a.browser=T(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],s.modules&&Array.isArray(s.modules)&&a.modules.push(...s.modules);const i={};a.modules.forEach((e=>{e({swiper:a,extendParams:N(s,i),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})}));const r=f({},G,i);return a.params=f({},r,X,s),a.originalParams=f({},a.params),a.passedParams=f({},s),a.params&&a.params.on&&Object.keys(a.params.on).forEach((e=>{a.on(e,a.params.on[e])})),a.params&&a.params.onAny&&a.onAny(a.params.onAny),a.$=d,Object.assign(a,{enabled:a.params.enabled,el:t,classNames:[],slides:d(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===a.params.direction,isVertical:()=>"vertical"===a.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEvents:function(){const e=["touchstart","touchmove","touchend","touchcancel"],t=["pointerdown","pointermove","pointerup"];return a.touchEventsTouch={start:e[0],move:e[1],end:e[2],cancel:e[3]},a.touchEventsDesktop={start:t[0],move:t[1],end:t[2]},a.support.touch||!a.params.simulateTouch?a.touchEventsTouch:a.touchEventsDesktop}(),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:u(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit("_swiper"),a.params.init&&a.init(),a}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const s=this;e=Math.min(Math.max(e,0),1);const a=s.minTranslate(),i=(s.maxTranslate()-a)*e+a;s.translateTo(i,void 0===t?0:t),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter((t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass)));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return e.className.split(" ").filter((e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass))).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.each((s=>{const a=e.getSlideClasses(s);t.push({slideEl:s,classNames:a}),e.emit("_slideClass",s,a)})),e.emit("_slideClasses",t)}slidesPerViewDynamic(e="current",t=!1){const{params:s,slides:a,slidesGrid:i,slidesSizesGrid:r,size:n,activeIndex:l}=this;let o=1;if(s.centeredSlides){let e,t=a[l].swiperSlideSize;for(let s=l+1;s<a.length;s+=1)a[s]&&!e&&(t+=a[s].swiperSlideSize,o+=1,t>n&&(e=!0));for(let s=l-1;s>=0;s-=1)a[s]&&!e&&(t+=a[s].swiperSlideSize,o+=1,t>n&&(e=!0))}else if("current"===e)for(let e=l+1;e<a.length;e+=1){(t?i[e]+r[e]-i[l]<n:i[e]-i[l]<n)&&(o+=1)}else for(let e=l-1;e>=0;e-=1){i[l]-i[e]<n&&(o+=1)}return o}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:s}=e;function a(){const t=e.rtlTranslate?-1*e.translate:e.translate,s=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(s),e.updateActiveIndex(),e.updateSlidesClasses()}let i;s.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode&&e.params.freeMode.enabled?(a(),e.params.autoHeight&&e.updateAutoHeight()):(i=("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),i||a()),s.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t=!0){const s=this,a=s.params.direction;return e||(e="horizontal"===a?"vertical":"horizontal"),e===a||"horizontal"!==e&&"vertical"!==e||(s.$el.removeClass(`${s.params.containerModifierClass}${a}`).addClass(`${s.params.containerModifierClass}${e}`),s.emitContainerClasses(),s.params.direction=e,s.slides.each((t=>{"vertical"===e?t.style.width="":t.style.height=""})),s.emit("changeDirection"),t&&s.update()),s}mount(e){const t=this;if(t.mounted)return!0;const s=d(e||t.params.el);if(!(e=s[0]))return!1;e.swiper=t;const i=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let r=(()=>{if(e&&e.shadowRoot&&e.shadowRoot.querySelector){const t=d(e.shadowRoot.querySelector(i()));return t.children=e=>s.children(e),t}return s.children(i())})();if(0===r.length&&t.params.createElements){const e=a().createElement("div");r=d(e),e.className=t.params.wrapperClass,s.append(e),s.children(`.${t.params.slideClass}`).each((e=>{r.append(e)}))}return Object.assign(t,{$el:s,el:e,$wrapperEl:r,wrapperEl:r[0],mounted:!0,rtl:"rtl"===e.dir.toLowerCase()||"rtl"===s.css("direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===e.dir.toLowerCase()||"rtl"===s.css("direction")),wrongRTL:"-webkit-box"===r.css("display")}),!0}init(e){const t=this;if(t.initialized)return t;return!1===t.mount(e)||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.params.loop&&t.loopCreate(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.preloadImages&&t.preloadImages(),t.params.loop?t.slideTo(t.params.initialSlide+t.loopedSlides,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.attachEvents(),t.initialized=!0,t.emit("init"),t.emit("afterInit")),t}destroy(e=!0,t=!0){const s=this,{params:a,$el:i,$wrapperEl:r,slides:n}=s;return void 0===s.params||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),a.loop&&s.loopDestroy(),t&&(s.removeClasses(),i.removeAttr("style"),r.removeAttr("style"),n&&n.length&&n.removeClass([a.slideVisibleClass,a.slideActiveClass,a.slideNextClass,a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),s.emit("destroy"),Object.keys(s.eventsListeners).forEach((e=>{s.off(e)})),!1!==e&&(s.$el[0].swiper=null,function(e){const t=e;Object.keys(t).forEach((e=>{try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))}(s)),s.destroyed=!0),null}static extendDefaults(e){f(X,e)}static get extendedDefaults(){return X}static get defaults(){return G}static installModule(e){H.prototype.__modules__||(H.prototype.__modules__=[]);const t=H.prototype.__modules__;"function"==typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach((e=>H.installModule(e))),H):(H.installModule(e),H)}}function Y(e,t,s,i){const r=a();return e.params.createElements&&Object.keys(i).forEach((a=>{if(!s[a]&&!0===s.auto){let n=e.$el.children(`.${i[a]}`)[0];n||(n=r.createElement("div"),n.className=i[a],e.$el.append(n)),s[a]=n,t[a]=n}})),s}function W(e=""){return`.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function R(e){const t=this,{$wrapperEl:s,params:a}=t;if(a.loop&&t.loopDestroy(),"object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&s.append(e[t]);else s.append(e);a.loop&&t.loopCreate(),a.observer||t.update()}function j(e){const t=this,{params:s,$wrapperEl:a,activeIndex:i}=t;s.loop&&t.loopDestroy();let r=i+1;if("object"==typeof e&&"length"in e){for(let t=0;t<e.length;t+=1)e[t]&&a.prepend(e[t]);r=i+e.length}else a.prepend(e);s.loop&&t.loopCreate(),s.observer||t.update(),t.slideTo(r,0,!1)}function _(e,t){const s=this,{$wrapperEl:a,params:i,activeIndex:r}=s;let n=r;i.loop&&(n-=s.loopedSlides,s.loopDestroy(),s.slides=a.children(`.${i.slideClass}`));const l=s.slides.length;if(e<=0)return void s.prependSlide(t);if(e>=l)return void s.appendSlide(t);let o=n>e?n+1:n;const d=[];for(let t=l-1;t>=e;t-=1){const e=s.slides.eq(t);e.remove(),d.unshift(e)}if("object"==typeof t&&"length"in t){for(let e=0;e<t.length;e+=1)t[e]&&a.append(t[e]);o=n>e?n+t.length:n}else a.append(t);for(let e=0;e<d.length;e+=1)a.append(d[e]);i.loop&&s.loopCreate(),i.observer||s.update(),i.loop?s.slideTo(o+s.loopedSlides,0,!1):s.slideTo(o,0,!1)}function V(e){const t=this,{params:s,$wrapperEl:a,activeIndex:i}=t;let r=i;s.loop&&(r-=t.loopedSlides,t.loopDestroy(),t.slides=a.children(`.${s.slideClass}`));let n,l=r;if("object"==typeof e&&"length"in e){for(let s=0;s<e.length;s+=1)n=e[s],t.slides[n]&&t.slides.eq(n).remove(),n<l&&(l-=1);l=Math.max(l,0)}else n=e,t.slides[n]&&t.slides.eq(n).remove(),n<l&&(l-=1),l=Math.max(l,0);s.loop&&t.loopCreate(),s.observer||t.update(),s.loop?t.slideTo(l+t.loopedSlides,0,!1):t.slideTo(l,0,!1)}function q(){const e=this,t=[];for(let s=0;s<e.slides.length;s+=1)t.push(s);e.removeSlide(t)}function F(e){const{effect:t,swiper:s,on:a,setTranslate:i,setTransition:r,overwriteParams:n,perspective:l}=e;a("beforeInit",(()=>{if(s.params.effect!==t)return;s.classNames.push(`${s.params.containerModifierClass}${t}`),l&&l()&&s.classNames.push(`${s.params.containerModifierClass}3d`);const e=n?n():{};Object.assign(s.params,e),Object.assign(s.originalParams,e)})),a("setTranslate",(()=>{s.params.effect===t&&i()})),a("setTransition",((e,a)=>{s.params.effect===t&&r(a)}))}function U(e,t){return e.transformEl?t.find(e.transformEl).css({"backface-visibility":"hidden","-webkit-backface-visibility":"hidden"}):t}function K({swiper:e,duration:t,transformEl:s,allSlides:a}){const{slides:i,activeIndex:r,$wrapperEl:n}=e;if(e.params.virtualTranslate&&0!==t){let t,l=!1;t=a?s?i.find(s):i:s?i.eq(r).find(s):i.eq(r),t.transitionEnd((()=>{if(l)return;if(!e||e.destroyed)return;l=!0,e.animating=!1;const t=["webkitTransitionEnd","transitionend"];for(let e=0;e<t.length;e+=1)n.trigger(t[e])}))}}function Z(e,t,s){const a="swiper-slide-shadow"+(s?`-${s}`:""),i=e.transformEl?t.find(e.transformEl):t;let r=i.children(`.${a}`);return r.length||(r=d(`<div class="swiper-slide-shadow${s?`-${s}`:""}"></div>`),i.append(r)),r}Object.keys(B).forEach((e=>{Object.keys(B[e]).forEach((t=>{H.prototype[t]=B[e][t]}))})),H.use([function({swiper:e,on:t,emit:s}){const a=r();let i=null;const n=()=>{e&&!e.destroyed&&e.initialized&&(s("beforeResize"),s("resize"))},l=()=>{e&&!e.destroyed&&e.initialized&&s("orientationchange")};t("init",(()=>{e.params.resizeObserver&&void 0!==a.ResizeObserver?e&&!e.destroyed&&e.initialized&&(i=new ResizeObserver((t=>{const{width:s,height:a}=e;let i=s,r=a;t.forEach((({contentBoxSize:t,contentRect:s,target:a})=>{a&&a!==e.el||(i=s?s.width:(t[0]||t).inlineSize,r=s?s.height:(t[0]||t).blockSize)})),i===s&&r===a||n()})),i.observe(e.el)):(a.addEventListener("resize",n),a.addEventListener("orientationchange",l))})),t("destroy",(()=>{i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null),a.removeEventListener("resize",n),a.removeEventListener("orientationchange",l)}))},function({swiper:e,extendParams:t,on:s,emit:a}){const i=[],n=r(),l=(e,t={})=>{const s=new(n.MutationObserver||n.WebkitMutationObserver)((e=>{if(1===e.length)return void a("observerUpdate",e[0]);const t=function(){a("observerUpdate",e[0])};n.requestAnimationFrame?n.requestAnimationFrame(t):n.setTimeout(t,0)}));s.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),i.push(s)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),s("init",(()=>{if(e.params.observer){if(e.params.observeParents){const t=e.$el.parents();for(let e=0;e<t.length;e+=1)l(t[e])}l(e.$el[0],{childList:e.params.observeSlideChildren}),l(e.$wrapperEl[0],{attributes:!1})}})),s("destroy",(()=>{i.forEach((e=>{e.disconnect()})),i.splice(0,i.length)}))}]);const J=[function({swiper:e,extendParams:t,on:s}){let a;function i(t,s){const a=e.params.virtual;if(a.cache&&e.virtual.cache[s])return e.virtual.cache[s];const i=a.renderSlide?d(a.renderSlide.call(e,t,s)):d(`<div class="${e.params.slideClass}" data-swiper-slide-index="${s}">${t}</div>`);return i.attr("data-swiper-slide-index")||i.attr("data-swiper-slide-index",s),a.cache&&(e.virtual.cache[s]=i),i}function r(t){const{slidesPerView:s,slidesPerGroup:a,centeredSlides:r}=e.params,{addSlidesBefore:n,addSlidesAfter:l}=e.params.virtual,{from:o,to:d,slides:p,slidesGrid:c,offset:u}=e.virtual;e.params.cssMode||e.updateActiveIndex();const h=e.activeIndex||0;let m,f,g;m=e.rtlTranslate?"right":e.isHorizontal()?"left":"top",r?(f=Math.floor(s/2)+a+l,g=Math.floor(s/2)+a+n):(f=s+(a-1)+l,g=a+n);const v=Math.max((h||0)-g,0),w=Math.min((h||0)+f,p.length-1),b=(e.slidesGrid[v]||0)-(e.slidesGrid[0]||0);function x(){e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.lazy&&e.params.lazy.enabled&&e.lazy.load()}if(Object.assign(e.virtual,{from:v,to:w,offset:b,slidesGrid:e.slidesGrid}),o===v&&d===w&&!t)return e.slidesGrid!==c&&b!==u&&e.slides.css(m,`${b}px`),void e.updateProgress();if(e.params.virtual.renderExternal)return e.params.virtual.renderExternal.call(e,{offset:b,from:v,to:w,slides:function(){const e=[];for(let t=v;t<=w;t+=1)e.push(p[t]);return e}()}),void(e.params.virtual.renderExternalUpdate&&x());const y=[],E=[];if(t)e.$wrapperEl.find(`.${e.params.slideClass}`).remove();else for(let t=o;t<=d;t+=1)(t<v||t>w)&&e.$wrapperEl.find(`.${e.params.slideClass}[data-swiper-slide-index="${t}"]`).remove();for(let e=0;e<p.length;e+=1)e>=v&&e<=w&&(void 0===d||t?E.push(e):(e>d&&E.push(e),e<o&&y.push(e)));E.forEach((t=>{e.$wrapperEl.append(i(p[t],t))})),y.sort(((e,t)=>t-e)).forEach((t=>{e.$wrapperEl.prepend(i(p[t],t))})),e.$wrapperEl.children(".swiper-slide").css(m,`${b}px`),x()}t({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}}),e.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]},s("beforeInit",(()=>{e.params.virtual.enabled&&(e.virtual.slides=e.params.virtual.slides,e.classNames.push(`${e.params.containerModifierClass}virtual`),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0,e.params.initialSlide||r())})),s("setTranslate",(()=>{e.params.virtual.enabled&&(e.params.cssMode&&!e._immediateVirtual?(clearTimeout(a),a=setTimeout((()=>{r()}),100)):r())})),s("init update resize",(()=>{e.params.virtual.enabled&&e.params.cssMode&&g(e.wrapperEl,"--swiper-virtual-size",`${e.virtualSize}px`)})),Object.assign(e.virtual,{appendSlide:function(t){if("object"==typeof t&&"length"in t)for(let s=0;s<t.length;s+=1)t[s]&&e.virtual.slides.push(t[s]);else e.virtual.slides.push(t);r(!0)},prependSlide:function(t){const s=e.activeIndex;let a=s+1,i=1;if(Array.isArray(t)){for(let s=0;s<t.length;s+=1)t[s]&&e.virtual.slides.unshift(t[s]);a=s+t.length,i=t.length}else e.virtual.slides.unshift(t);if(e.params.virtual.cache){const t=e.virtual.cache,s={};Object.keys(t).forEach((e=>{const a=t[e],r=a.attr("data-swiper-slide-index");r&&a.attr("data-swiper-slide-index",parseInt(r,10)+i),s[parseInt(e,10)+i]=a})),e.virtual.cache=s}r(!0),e.slideTo(a,0)},removeSlide:function(t){if(null==t)return;let s=e.activeIndex;if(Array.isArray(t))for(let a=t.length-1;a>=0;a-=1)e.virtual.slides.splice(t[a],1),e.params.virtual.cache&&delete e.virtual.cache[t[a]],t[a]<s&&(s-=1),s=Math.max(s,0);else e.virtual.slides.splice(t,1),e.params.virtual.cache&&delete e.virtual.cache[t],t<s&&(s-=1),s=Math.max(s,0);r(!0),e.slideTo(s,0)},removeAllSlides:function(){e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),r(!0),e.slideTo(0,0)},update:r})},function({swiper:e,extendParams:t,on:s,emit:i}){const n=a(),l=r();function o(t){if(!e.enabled)return;const{rtlTranslate:s}=e;let a=t;a.originalEvent&&(a=a.originalEvent);const r=a.keyCode||a.charCode,o=e.params.keyboard.pageUpDown,d=o&&33===r,p=o&&34===r,c=37===r,u=39===r,h=38===r,m=40===r;if(!e.allowSlideNext&&(e.isHorizontal()&&u||e.isVertical()&&m||p))return!1;if(!e.allowSlidePrev&&(e.isHorizontal()&&c||e.isVertical()&&h||d))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey||n.activeElement&&n.activeElement.nodeName&&("input"===n.activeElement.nodeName.toLowerCase()||"textarea"===n.activeElement.nodeName.toLowerCase()))){if(e.params.keyboard.onlyInViewport&&(d||p||c||u||h||m)){let t=!1;if(e.$el.parents(`.${e.params.slideClass}`).length>0&&0===e.$el.parents(`.${e.params.slideActiveClass}`).length)return;const a=e.$el,i=a[0].clientWidth,r=a[0].clientHeight,n=l.innerWidth,o=l.innerHeight,d=e.$el.offset();s&&(d.left-=e.$el[0].scrollLeft);const p=[[d.left,d.top],[d.left+i,d.top],[d.left,d.top+r],[d.left+i,d.top+r]];for(let e=0;e<p.length;e+=1){const s=p[e];if(s[0]>=0&&s[0]<=n&&s[1]>=0&&s[1]<=o){if(0===s[0]&&0===s[1])continue;t=!0}}if(!t)return}e.isHorizontal()?((d||p||c||u)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),((p||u)&&!s||(d||c)&&s)&&e.slideNext(),((d||c)&&!s||(p||u)&&s)&&e.slidePrev()):((d||p||h||m)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),(p||m)&&e.slideNext(),(d||h)&&e.slidePrev()),i("keyPress",r)}}function p(){e.keyboard.enabled||(d(n).on("keydown",o),e.keyboard.enabled=!0)}function c(){e.keyboard.enabled&&(d(n).off("keydown",o),e.keyboard.enabled=!1)}e.keyboard={enabled:!1},t({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}}),s("init",(()=>{e.params.keyboard.enabled&&p()})),s("destroy",(()=>{e.keyboard.enabled&&c()})),Object.assign(e.keyboard,{enable:p,disable:c})},function({swiper:e,extendParams:t,on:s,emit:a}){const i=r();let n;t({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null}}),e.mousewheel={enabled:!1};let l,o=u();const p=[];function h(){e.enabled&&(e.mouseEntered=!0)}function m(){e.enabled&&(e.mouseEntered=!1)}function f(t){return!(e.params.mousewheel.thresholdDelta&&t.delta<e.params.mousewheel.thresholdDelta)&&(!(e.params.mousewheel.thresholdTime&&u()-o<e.params.mousewheel.thresholdTime)&&(t.delta>=6&&u()-o<60||(t.direction<0?e.isEnd&&!e.params.loop||e.animating||(e.slideNext(),a("scroll",t.raw)):e.isBeginning&&!e.params.loop||e.animating||(e.slidePrev(),a("scroll",t.raw)),o=(new i.Date).getTime(),!1)))}function g(t){let s=t,i=!0;if(!e.enabled)return;const r=e.params.mousewheel;e.params.cssMode&&s.preventDefault();let o=e.$el;if("container"!==e.params.mousewheel.eventsTarget&&(o=d(e.params.mousewheel.eventsTarget)),!e.mouseEntered&&!o[0].contains(s.target)&&!r.releaseOnEdges)return!0;s.originalEvent&&(s=s.originalEvent);let h=0;const m=e.rtlTranslate?-1:1,g=function(e){let t=0,s=0,a=0,i=0;return"detail"in e&&(s=e.detail),"wheelDelta"in e&&(s=-e.wheelDelta/120),"wheelDeltaY"in e&&(s=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=s,s=0),a=10*t,i=10*s,"deltaY"in e&&(i=e.deltaY),"deltaX"in e&&(a=e.deltaX),e.shiftKey&&!a&&(a=i,i=0),(a||i)&&e.deltaMode&&(1===e.deltaMode?(a*=40,i*=40):(a*=800,i*=800)),a&&!t&&(t=a<1?-1:1),i&&!s&&(s=i<1?-1:1),{spinX:t,spinY:s,pixelX:a,pixelY:i}}(s);if(r.forceToAxis)if(e.isHorizontal()){if(!(Math.abs(g.pixelX)>Math.abs(g.pixelY)))return!0;h=-g.pixelX*m}else{if(!(Math.abs(g.pixelY)>Math.abs(g.pixelX)))return!0;h=-g.pixelY}else h=Math.abs(g.pixelX)>Math.abs(g.pixelY)?-g.pixelX*m:-g.pixelY;if(0===h)return!0;r.invert&&(h=-h);let v=e.getTranslate()+h*r.sensitivity;if(v>=e.minTranslate()&&(v=e.minTranslate()),v<=e.maxTranslate()&&(v=e.maxTranslate()),i=!!e.params.loop||!(v===e.minTranslate()||v===e.maxTranslate()),i&&e.params.nested&&s.stopPropagation(),e.params.freeMode&&e.params.freeMode.enabled){const t={time:u(),delta:Math.abs(h),direction:Math.sign(h)},i=l&&t.time<l.time+500&&t.delta<=l.delta&&t.direction===l.direction;if(!i){l=void 0,e.params.loop&&e.loopFix();let o=e.getTranslate()+h*r.sensitivity;const d=e.isBeginning,u=e.isEnd;if(o>=e.minTranslate()&&(o=e.minTranslate()),o<=e.maxTranslate()&&(o=e.maxTranslate()),e.setTransition(0),e.setTranslate(o),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses(),(!d&&e.isBeginning||!u&&e.isEnd)&&e.updateSlidesClasses(),e.params.freeMode.sticky){clearTimeout(n),n=void 0,p.length>=15&&p.shift();const s=p.length?p[p.length-1]:void 0,a=p[0];if(p.push(t),s&&(t.delta>s.delta||t.direction!==s.direction))p.splice(0);else if(p.length>=15&&t.time-a.time<500&&a.delta-t.delta>=1&&t.delta<=6){const s=h>0?.8:.2;l=t,p.splice(0),n=c((()=>{e.slideToClosest(e.params.speed,!0,void 0,s)}),0)}n||(n=c((()=>{l=t,p.splice(0),e.slideToClosest(e.params.speed,!0,void 0,.5)}),500))}if(i||a("scroll",s),e.params.autoplay&&e.params.autoplayDisableOnInteraction&&e.autoplay.stop(),o===e.minTranslate()||o===e.maxTranslate())return!0}}else{const s={time:u(),delta:Math.abs(h),direction:Math.sign(h),raw:t};p.length>=2&&p.shift();const a=p.length?p[p.length-1]:void 0;if(p.push(s),a?(s.direction!==a.direction||s.delta>a.delta||s.time>a.time+150)&&f(s):f(s),function(t){const s=e.params.mousewheel;if(t.direction<0){if(e.isEnd&&!e.params.loop&&s.releaseOnEdges)return!0}else if(e.isBeginning&&!e.params.loop&&s.releaseOnEdges)return!0;return!1}(s))return!0}return s.preventDefault?s.preventDefault():s.returnValue=!1,!1}function v(t){let s=e.$el;"container"!==e.params.mousewheel.eventsTarget&&(s=d(e.params.mousewheel.eventsTarget)),s[t]("mouseenter",h),s[t]("mouseleave",m),s[t]("wheel",g)}function w(){return e.params.cssMode?(e.wrapperEl.removeEventListener("wheel",g),!0):!e.mousewheel.enabled&&(v("on"),e.mousewheel.enabled=!0,!0)}function b(){return e.params.cssMode?(e.wrapperEl.addEventListener(event,g),!0):!!e.mousewheel.enabled&&(v("off"),e.mousewheel.enabled=!1,!0)}s("init",(()=>{!e.params.mousewheel.enabled&&e.params.cssMode&&b(),e.params.mousewheel.enabled&&w()})),s("destroy",(()=>{e.params.cssMode&&w(),e.mousewheel.enabled&&b()})),Object.assign(e.mousewheel,{enable:w,disable:b})},function({swiper:e,extendParams:t,on:s,emit:a}){function i(t){let s;return t&&(s=d(t),e.params.uniqueNavElements&&"string"==typeof t&&s.length>1&&1===e.$el.find(t).length&&(s=e.$el.find(t))),s}function r(t,s){const a=e.params.navigation;t&&t.length>0&&(t[s?"addClass":"removeClass"](a.disabledClass),t[0]&&"BUTTON"===t[0].tagName&&(t[0].disabled=s),e.params.watchOverflow&&e.enabled&&t[e.isLocked?"addClass":"removeClass"](a.lockClass))}function n(){if(e.params.loop)return;const{$nextEl:t,$prevEl:s}=e.navigation;r(s,e.isBeginning&&!e.params.rewind),r(t,e.isEnd&&!e.params.rewind)}function l(t){t.preventDefault(),(!e.isBeginning||e.params.loop||e.params.rewind)&&e.slidePrev()}function o(t){t.preventDefault(),(!e.isEnd||e.params.loop||e.params.rewind)&&e.slideNext()}function p(){const t=e.params.navigation;if(e.params.navigation=Y(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!t.nextEl&&!t.prevEl)return;const s=i(t.nextEl),a=i(t.prevEl);s&&s.length>0&&s.on("click",o),a&&a.length>0&&a.on("click",l),Object.assign(e.navigation,{$nextEl:s,nextEl:s&&s[0],$prevEl:a,prevEl:a&&a[0]}),e.enabled||(s&&s.addClass(t.lockClass),a&&a.addClass(t.lockClass))}function c(){const{$nextEl:t,$prevEl:s}=e.navigation;t&&t.length&&(t.off("click",o),t.removeClass(e.params.navigation.disabledClass)),s&&s.length&&(s.off("click",l),s.removeClass(e.params.navigation.disabledClass))}t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}}),e.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null},s("init",(()=>{p(),n()})),s("toEdge fromEdge lock unlock",(()=>{n()})),s("destroy",(()=>{c()})),s("enable disable",(()=>{const{$nextEl:t,$prevEl:s}=e.navigation;t&&t[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass),s&&s[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass)})),s("click",((t,s)=>{const{$nextEl:i,$prevEl:r}=e.navigation,n=s.target;if(e.params.navigation.hideOnClick&&!d(n).is(r)&&!d(n).is(i)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===n||e.pagination.el.contains(n)))return;let t;i?t=i.hasClass(e.params.navigation.hiddenClass):r&&(t=r.hasClass(e.params.navigation.hiddenClass)),a(!0===t?"navigationShow":"navigationHide"),i&&i.toggleClass(e.params.navigation.hiddenClass),r&&r.toggleClass(e.params.navigation.hiddenClass)}})),Object.assign(e.navigation,{update:n,init:p,destroy:c})},function({swiper:e,extendParams:t,on:s,emit:a}){const i="swiper-pagination";let r;t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`}}),e.pagination={el:null,$el:null,bullets:[]};let n=0;function l(){return!e.params.pagination.el||!e.pagination.el||!e.pagination.$el||0===e.pagination.$el.length}function o(t,s){const{bulletActiveClass:a}=e.params.pagination;t[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`)}function p(){const t=e.rtl,s=e.params.pagination;if(l())return;const i=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,p=e.pagination.$el;let c;const u=e.params.loop?Math.ceil((i-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(c=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup),c>i-1-2*e.loopedSlides&&(c-=i-2*e.loopedSlides),c>u-1&&(c-=u),c<0&&"bullets"!==e.params.paginationType&&(c=u+c)):c=void 0!==e.snapIndex?e.snapIndex:e.activeIndex||0,"bullets"===s.type&&e.pagination.bullets&&e.pagination.bullets.length>0){const a=e.pagination.bullets;let i,l,u;if(s.dynamicBullets&&(r=a.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](!0),p.css(e.isHorizontal()?"width":"height",r*(s.dynamicMainBullets+4)+"px"),s.dynamicMainBullets>1&&void 0!==e.previousIndex&&(n+=c-(e.previousIndex-e.loopedSlides||0),n>s.dynamicMainBullets-1?n=s.dynamicMainBullets-1:n<0&&(n=0)),i=Math.max(c-n,0),l=i+(Math.min(a.length,s.dynamicMainBullets)-1),u=(l+i)/2),a.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map((e=>`${s.bulletActiveClass}${e}`)).join(" ")),p.length>1)a.each((e=>{const t=d(e),a=t.index();a===c&&t.addClass(s.bulletActiveClass),s.dynamicBullets&&(a>=i&&a<=l&&t.addClass(`${s.bulletActiveClass}-main`),a===i&&o(t,"prev"),a===l&&o(t,"next"))}));else{const t=a.eq(c),r=t.index();if(t.addClass(s.bulletActiveClass),s.dynamicBullets){const t=a.eq(i),n=a.eq(l);for(let e=i;e<=l;e+=1)a.eq(e).addClass(`${s.bulletActiveClass}-main`);if(e.params.loop)if(r>=a.length){for(let e=s.dynamicMainBullets;e>=0;e-=1)a.eq(a.length-e).addClass(`${s.bulletActiveClass}-main`);a.eq(a.length-s.dynamicMainBullets-1).addClass(`${s.bulletActiveClass}-prev`)}else o(t,"prev"),o(n,"next");else o(t,"prev"),o(n,"next")}}if(s.dynamicBullets){const i=Math.min(a.length,s.dynamicMainBullets+4),n=(r*i-r)/2-u*r,l=t?"right":"left";a.css(e.isHorizontal()?l:"top",`${n}px`)}}if("fraction"===s.type&&(p.find(W(s.currentClass)).text(s.formatFractionCurrent(c+1)),p.find(W(s.totalClass)).text(s.formatFractionTotal(u))),"progressbar"===s.type){let t;t=s.progressbarOpposite?e.isHorizontal()?"vertical":"horizontal":e.isHorizontal()?"horizontal":"vertical";const a=(c+1)/u;let i=1,r=1;"horizontal"===t?i=a:r=a,p.find(W(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${r})`).transition(e.params.speed)}"custom"===s.type&&s.renderCustom?(p.html(s.renderCustom(e,c+1,u)),a("paginationRender",p[0])):a("paginationUpdate",p[0]),e.params.watchOverflow&&e.enabled&&p[e.isLocked?"addClass":"removeClass"](s.lockClass)}function c(){const t=e.params.pagination;if(l())return;const s=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,i=e.pagination.$el;let r="";if("bullets"===t.type){let a=e.params.loop?Math.ceil((s-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&!e.params.loop&&a>s&&(a=s);for(let s=0;s<a;s+=1)t.renderBullet?r+=t.renderBullet.call(e,s,t.bulletClass):r+=`<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;i.html(r),e.pagination.bullets=i.find(W(t.bulletClass))}"fraction"===t.type&&(r=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):`<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`,i.html(r)),"progressbar"===t.type&&(r=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):`<span class="${t.progressbarFillClass}"></span>`,i.html(r)),"custom"!==t.type&&a("paginationRender",e.pagination.$el[0])}function u(){e.params.pagination=Y(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const t=e.params.pagination;if(!t.el)return;let s=d(t.el);0!==s.length&&(e.params.uniqueNavElements&&"string"==typeof t.el&&s.length>1&&(s=e.$el.find(t.el),s.length>1&&(s=s.filter((t=>d(t).parents(".swiper")[0]===e.el)))),"bullets"===t.type&&t.clickable&&s.addClass(t.clickableClass),s.addClass(t.modifierClass+t.type),s.addClass(t.modifierClass+e.params.direction),"bullets"===t.type&&t.dynamicBullets&&(s.addClass(`${t.modifierClass}${t.type}-dynamic`),n=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),"progressbar"===t.type&&t.progressbarOpposite&&s.addClass(t.progressbarOppositeClass),t.clickable&&s.on("click",W(t.bulletClass),(function(t){t.preventDefault();let s=d(this).index()*e.params.slidesPerGroup;e.params.loop&&(s+=e.loopedSlides),e.slideTo(s)})),Object.assign(e.pagination,{$el:s,el:s[0]}),e.enabled||s.addClass(t.lockClass))}function h(){const t=e.params.pagination;if(l())return;const s=e.pagination.$el;s.removeClass(t.hiddenClass),s.removeClass(t.modifierClass+t.type),s.removeClass(t.modifierClass+e.params.direction),e.pagination.bullets&&e.pagination.bullets.removeClass&&e.pagination.bullets.removeClass(t.bulletActiveClass),t.clickable&&s.off("click",W(t.bulletClass))}s("init",(()=>{u(),c(),p()})),s("activeIndexChange",(()=>{(e.params.loop||void 0===e.snapIndex)&&p()})),s("snapIndexChange",(()=>{e.params.loop||p()})),s("slidesLengthChange",(()=>{e.params.loop&&(c(),p())})),s("snapGridLengthChange",(()=>{e.params.loop||(c(),p())})),s("destroy",(()=>{h()})),s("enable disable",(()=>{const{$el:t}=e.pagination;t&&t[e.enabled?"removeClass":"addClass"](e.params.pagination.lockClass)})),s("lock unlock",(()=>{p()})),s("click",((t,s)=>{const i=s.target,{$el:r}=e.pagination;if(e.params.pagination.el&&e.params.pagination.hideOnClick&&r.length>0&&!d(i).hasClass(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&i===e.navigation.nextEl||e.navigation.prevEl&&i===e.navigation.prevEl))return;const t=r.hasClass(e.params.pagination.hiddenClass);a(!0===t?"paginationShow":"paginationHide"),r.toggleClass(e.params.pagination.hiddenClass)}})),Object.assign(e.pagination,{render:c,update:p,init:u,destroy:h})},function({swiper:e,extendParams:t,on:s,emit:i}){const r=a();let n,l,o,p,u=!1,h=null,m=null;function f(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:t,rtlTranslate:s,progress:a}=e,{$dragEl:i,$el:r}=t,n=e.params.scrollbar;let d=l,p=(o-l)*a;s?(p=-p,p>0?(d=l-p,p=0):-p+l>o&&(d=o+p)):p<0?(d=l+p,p=0):p+l>o&&(d=o-p),e.isHorizontal()?(i.transform(`translate3d(${p}px, 0, 0)`),i[0].style.width=`${d}px`):(i.transform(`translate3d(0px, ${p}px, 0)`),i[0].style.height=`${d}px`),n.hide&&(clearTimeout(h),r[0].style.opacity=1,h=setTimeout((()=>{r[0].style.opacity=0,r.transition(400)}),1e3))}function g(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:t}=e,{$dragEl:s,$el:a}=t;s[0].style.width="",s[0].style.height="",o=e.isHorizontal()?a[0].offsetWidth:a[0].offsetHeight,p=e.size/(e.virtualSize+e.params.slidesOffsetBefore-(e.params.centeredSlides?e.snapGrid[0]:0)),l="auto"===e.params.scrollbar.dragSize?o*p:parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?s[0].style.width=`${l}px`:s[0].style.height=`${l}px`,a[0].style.display=p>=1?"none":"",e.params.scrollbar.hide&&(a[0].style.opacity=0),e.params.watchOverflow&&e.enabled&&t.$el[e.isLocked?"addClass":"removeClass"](e.params.scrollbar.lockClass)}function v(t){return e.isHorizontal()?"touchstart"===t.type||"touchmove"===t.type?t.targetTouches[0].clientX:t.clientX:"touchstart"===t.type||"touchmove"===t.type?t.targetTouches[0].clientY:t.clientY}function w(t){const{scrollbar:s,rtlTranslate:a}=e,{$el:i}=s;let r;r=(v(t)-i.offset()[e.isHorizontal()?"left":"top"]-(null!==n?n:l/2))/(o-l),r=Math.max(Math.min(r,1),0),a&&(r=1-r);const d=e.minTranslate()+(e.maxTranslate()-e.minTranslate())*r;e.updateProgress(d),e.setTranslate(d),e.updateActiveIndex(),e.updateSlidesClasses()}function b(t){const s=e.params.scrollbar,{scrollbar:a,$wrapperEl:r}=e,{$el:l,$dragEl:o}=a;u=!0,n=t.target===o[0]||t.target===o?v(t)-t.target.getBoundingClientRect()[e.isHorizontal()?"left":"top"]:null,t.preventDefault(),t.stopPropagation(),r.transition(100),o.transition(100),w(t),clearTimeout(m),l.transition(0),s.hide&&l.css("opacity",1),e.params.cssMode&&e.$wrapperEl.css("scroll-snap-type","none"),i("scrollbarDragStart",t)}function x(t){const{scrollbar:s,$wrapperEl:a}=e,{$el:r,$dragEl:n}=s;u&&(t.preventDefault?t.preventDefault():t.returnValue=!1,w(t),a.transition(0),r.transition(0),n.transition(0),i("scrollbarDragMove",t))}function y(t){const s=e.params.scrollbar,{scrollbar:a,$wrapperEl:r}=e,{$el:n}=a;u&&(u=!1,e.params.cssMode&&(e.$wrapperEl.css("scroll-snap-type",""),r.transition("")),s.hide&&(clearTimeout(m),m=c((()=>{n.css("opacity",0),n.transition(400)}),1e3)),i("scrollbarDragEnd",t),s.snapOnRelease&&e.slideToClosest())}function E(t){const{scrollbar:s,touchEventsTouch:a,touchEventsDesktop:i,params:n,support:l}=e,o=s.$el[0],d=!(!l.passiveListener||!n.passiveListeners)&&{passive:!1,capture:!1},p=!(!l.passiveListener||!n.passiveListeners)&&{passive:!0,capture:!1};if(!o)return;const c="on"===t?"addEventListener":"removeEventListener";l.touch?(o[c](a.start,b,d),o[c](a.move,x,d),o[c](a.end,y,p)):(o[c](i.start,b,d),r[c](i.move,x,d),r[c](i.end,y,p))}function T(){const{scrollbar:t,$el:s}=e;e.params.scrollbar=Y(e,e.originalParams.scrollbar,e.params.scrollbar,{el:"swiper-scrollbar"});const a=e.params.scrollbar;if(!a.el)return;let i=d(a.el);e.params.uniqueNavElements&&"string"==typeof a.el&&i.length>1&&1===s.find(a.el).length&&(i=s.find(a.el));let r=i.find(`.${e.params.scrollbar.dragClass}`);0===r.length&&(r=d(`<div class="${e.params.scrollbar.dragClass}"></div>`),i.append(r)),Object.assign(t,{$el:i,el:i[0],$dragEl:r,dragEl:r[0]}),a.draggable&&e.params.scrollbar.el&&E("on"),i&&i[e.enabled?"removeClass":"addClass"](e.params.scrollbar.lockClass)}function C(){e.params.scrollbar.el&&E("off")}t({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}}),e.scrollbar={el:null,dragEl:null,$el:null,$dragEl:null},s("init",(()=>{T(),g(),f()})),s("update resize observerUpdate lock unlock",(()=>{g()})),s("setTranslate",(()=>{f()})),s("setTransition",((t,s)=>{!function(t){e.params.scrollbar.el&&e.scrollbar.el&&e.scrollbar.$dragEl.transition(t)}(s)})),s("enable disable",(()=>{const{$el:t}=e.scrollbar;t&&t[e.enabled?"removeClass":"addClass"](e.params.scrollbar.lockClass)})),s("destroy",(()=>{C()})),Object.assign(e.scrollbar,{updateSize:g,setTranslate:f,init:T,destroy:C})},function({swiper:e,extendParams:t,on:s}){t({parallax:{enabled:!1}});const a=(t,s)=>{const{rtl:a}=e,i=d(t),r=a?-1:1,n=i.attr("data-swiper-parallax")||"0";let l=i.attr("data-swiper-parallax-x"),o=i.attr("data-swiper-parallax-y");const p=i.attr("data-swiper-parallax-scale"),c=i.attr("data-swiper-parallax-opacity");if(l||o?(l=l||"0",o=o||"0"):e.isHorizontal()?(l=n,o="0"):(o=n,l="0"),l=l.indexOf("%")>=0?parseInt(l,10)*s*r+"%":l*s*r+"px",o=o.indexOf("%")>=0?parseInt(o,10)*s+"%":o*s+"px",null!=c){const e=c-(c-1)*(1-Math.abs(s));i[0].style.opacity=e}if(null==p)i.transform(`translate3d(${l}, ${o}, 0px)`);else{const e=p-(p-1)*(1-Math.abs(s));i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`)}},i=()=>{const{$el:t,slides:s,progress:i,snapGrid:r}=e;t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{a(e,i)})),s.each(((t,s)=>{let n=t.progress;e.params.slidesPerGroup>1&&"auto"!==e.params.slidesPerView&&(n+=Math.ceil(s/2)-i*(r.length-1)),n=Math.min(Math.max(n,-1),1),d(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{a(e,n)}))}))};s("beforeInit",(()=>{e.params.parallax.enabled&&(e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)})),s("init",(()=>{e.params.parallax.enabled&&i()})),s("setTranslate",(()=>{e.params.parallax.enabled&&i()})),s("setTransition",((t,s)=>{e.params.parallax.enabled&&((t=e.params.speed)=>{const{$el:s}=e;s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{const s=d(e);let a=parseInt(s.attr("data-swiper-parallax-duration"),10)||t;0===t&&(a=0),s.transition(a)}))})(s)}))},function({swiper:e,extendParams:t,on:s,emit:a}){const i=r();t({zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),e.zoom={enabled:!1};let n,l,o,p=1,c=!1;const u={$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},m={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},f={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let g=1;function v(e){if(e.targetTouches.length<2)return 1;const t=e.targetTouches[0].pageX,s=e.targetTouches[0].pageY,a=e.targetTouches[1].pageX,i=e.targetTouches[1].pageY;return Math.sqrt((a-t)**2+(i-s)**2)}function w(t){const s=e.support,a=e.params.zoom;if(l=!1,o=!1,!s.gestures){if("touchstart"!==t.type||"touchstart"===t.type&&t.targetTouches.length<2)return;l=!0,u.scaleStart=v(t)}u.$slideEl&&u.$slideEl.length||(u.$slideEl=d(t.target).closest(`.${e.params.slideClass}`),0===u.$slideEl.length&&(u.$slideEl=e.slides.eq(e.activeIndex)),u.$imageEl=u.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),u.$imageWrapEl=u.$imageEl.parent(`.${a.containerClass}`),u.maxRatio=u.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,0!==u.$imageWrapEl.length)?(u.$imageEl&&u.$imageEl.transition(0),c=!0):u.$imageEl=void 0}function b(t){const s=e.support,a=e.params.zoom,i=e.zoom;if(!s.gestures){if("touchmove"!==t.type||"touchmove"===t.type&&t.targetTouches.length<2)return;o=!0,u.scaleMove=v(t)}u.$imageEl&&0!==u.$imageEl.length?(s.gestures?i.scale=t.scale*p:i.scale=u.scaleMove/u.scaleStart*p,i.scale>u.maxRatio&&(i.scale=u.maxRatio-1+(i.scale-u.maxRatio+1)**.5),i.scale<a.minRatio&&(i.scale=a.minRatio+1-(a.minRatio-i.scale+1)**.5),u.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`)):"gesturechange"===t.type&&w(t)}function x(t){const s=e.device,a=e.support,i=e.params.zoom,r=e.zoom;if(!a.gestures){if(!l||!o)return;if("touchend"!==t.type||"touchend"===t.type&&t.changedTouches.length<2&&!s.android)return;l=!1,o=!1}u.$imageEl&&0!==u.$imageEl.length&&(r.scale=Math.max(Math.min(r.scale,u.maxRatio),i.minRatio),u.$imageEl.transition(e.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`),p=r.scale,c=!1,1===r.scale&&(u.$slideEl=void 0))}function y(t){const s=e.zoom;if(!u.$imageEl||0===u.$imageEl.length)return;if(e.allowClick=!1,!m.isTouched||!u.$slideEl)return;m.isMoved||(m.width=u.$imageEl[0].offsetWidth,m.height=u.$imageEl[0].offsetHeight,m.startX=h(u.$imageWrapEl[0],"x")||0,m.startY=h(u.$imageWrapEl[0],"y")||0,u.slideWidth=u.$slideEl[0].offsetWidth,u.slideHeight=u.$slideEl[0].offsetHeight,u.$imageWrapEl.transition(0));const a=m.width*s.scale,i=m.height*s.scale;if(!(a<u.slideWidth&&i<u.slideHeight)){if(m.minX=Math.min(u.slideWidth/2-a/2,0),m.maxX=-m.minX,m.minY=Math.min(u.slideHeight/2-i/2,0),m.maxY=-m.minY,m.touchesCurrent.x="touchmove"===t.type?t.targetTouches[0].pageX:t.pageX,m.touchesCurrent.y="touchmove"===t.type?t.targetTouches[0].pageY:t.pageY,!m.isMoved&&!c){if(e.isHorizontal()&&(Math.floor(m.minX)===Math.floor(m.startX)&&m.touchesCurrent.x<m.touchesStart.x||Math.floor(m.maxX)===Math.floor(m.startX)&&m.touchesCurrent.x>m.touchesStart.x))return void(m.isTouched=!1);if(!e.isHorizontal()&&(Math.floor(m.minY)===Math.floor(m.startY)&&m.touchesCurrent.y<m.touchesStart.y||Math.floor(m.maxY)===Math.floor(m.startY)&&m.touchesCurrent.y>m.touchesStart.y))return void(m.isTouched=!1)}t.cancelable&&t.preventDefault(),t.stopPropagation(),m.isMoved=!0,m.currentX=m.touchesCurrent.x-m.touchesStart.x+m.startX,m.currentY=m.touchesCurrent.y-m.touchesStart.y+m.startY,m.currentX<m.minX&&(m.currentX=m.minX+1-(m.minX-m.currentX+1)**.8),m.currentX>m.maxX&&(m.currentX=m.maxX-1+(m.currentX-m.maxX+1)**.8),m.currentY<m.minY&&(m.currentY=m.minY+1-(m.minY-m.currentY+1)**.8),m.currentY>m.maxY&&(m.currentY=m.maxY-1+(m.currentY-m.maxY+1)**.8),f.prevPositionX||(f.prevPositionX=m.touchesCurrent.x),f.prevPositionY||(f.prevPositionY=m.touchesCurrent.y),f.prevTime||(f.prevTime=Date.now()),f.x=(m.touchesCurrent.x-f.prevPositionX)/(Date.now()-f.prevTime)/2,f.y=(m.touchesCurrent.y-f.prevPositionY)/(Date.now()-f.prevTime)/2,Math.abs(m.touchesCurrent.x-f.prevPositionX)<2&&(f.x=0),Math.abs(m.touchesCurrent.y-f.prevPositionY)<2&&(f.y=0),f.prevPositionX=m.touchesCurrent.x,f.prevPositionY=m.touchesCurrent.y,f.prevTime=Date.now(),u.$imageWrapEl.transform(`translate3d(${m.currentX}px, ${m.currentY}px,0)`)}}function E(){const t=e.zoom;u.$slideEl&&e.previousIndex!==e.activeIndex&&(u.$imageEl&&u.$imageEl.transform("translate3d(0,0,0) scale(1)"),u.$imageWrapEl&&u.$imageWrapEl.transform("translate3d(0,0,0)"),t.scale=1,p=1,u.$slideEl=void 0,u.$imageEl=void 0,u.$imageWrapEl=void 0)}function T(t){const s=e.zoom,a=e.params.zoom;if(u.$slideEl||(t&&t.target&&(u.$slideEl=d(t.target).closest(`.${e.params.slideClass}`)),u.$slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?u.$slideEl=e.$wrapperEl.children(`.${e.params.slideActiveClass}`):u.$slideEl=e.slides.eq(e.activeIndex)),u.$imageEl=u.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),u.$imageWrapEl=u.$imageEl.parent(`.${a.containerClass}`)),!u.$imageEl||0===u.$imageEl.length||!u.$imageWrapEl||0===u.$imageWrapEl.length)return;let r,n,l,o,c,h,f,g,v,w,b,x,y,E,T,C,$,S;e.params.cssMode&&(e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.touchAction="none"),u.$slideEl.addClass(`${a.zoomedSlideClass}`),void 0===m.touchesStart.x&&t?(r="touchend"===t.type?t.changedTouches[0].pageX:t.pageX,n="touchend"===t.type?t.changedTouches[0].pageY:t.pageY):(r=m.touchesStart.x,n=m.touchesStart.y),s.scale=u.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,p=u.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,t?($=u.$slideEl[0].offsetWidth,S=u.$slideEl[0].offsetHeight,l=u.$slideEl.offset().left+i.scrollX,o=u.$slideEl.offset().top+i.scrollY,c=l+$/2-r,h=o+S/2-n,v=u.$imageEl[0].offsetWidth,w=u.$imageEl[0].offsetHeight,b=v*s.scale,x=w*s.scale,y=Math.min($/2-b/2,0),E=Math.min(S/2-x/2,0),T=-y,C=-E,f=c*s.scale,g=h*s.scale,f<y&&(f=y),f>T&&(f=T),g<E&&(g=E),g>C&&(g=C)):(f=0,g=0),u.$imageWrapEl.transition(300).transform(`translate3d(${f}px, ${g}px,0)`),u.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`)}function C(){const t=e.zoom,s=e.params.zoom;u.$slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?u.$slideEl=e.$wrapperEl.children(`.${e.params.slideActiveClass}`):u.$slideEl=e.slides.eq(e.activeIndex),u.$imageEl=u.$slideEl.find(`.${s.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),u.$imageWrapEl=u.$imageEl.parent(`.${s.containerClass}`)),u.$imageEl&&0!==u.$imageEl.length&&u.$imageWrapEl&&0!==u.$imageWrapEl.length&&(e.params.cssMode&&(e.wrapperEl.style.overflow="",e.wrapperEl.style.touchAction=""),t.scale=1,p=1,u.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),u.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),u.$slideEl.removeClass(`${s.zoomedSlideClass}`),u.$slideEl=void 0)}function $(t){const s=e.zoom;s.scale&&1!==s.scale?C():T(t)}function S(){const t=e.support;return{passiveListener:!("touchstart"!==e.touchEvents.start||!t.passiveListener||!e.params.passiveListeners)&&{passive:!0,capture:!1},activeListenerWithCapture:!t.passiveListener||{passive:!1,capture:!0}}}function M(){return`.${e.params.slideClass}`}function P(t){const{passiveListener:s}=S(),a=M();e.$wrapperEl[t]("gesturestart",a,w,s),e.$wrapperEl[t]("gesturechange",a,b,s),e.$wrapperEl[t]("gestureend",a,x,s)}function k(){n||(n=!0,P("on"))}function z(){n&&(n=!1,P("off"))}function O(){const t=e.zoom;if(t.enabled)return;t.enabled=!0;const s=e.support,{passiveListener:a,activeListenerWithCapture:i}=S(),r=M();s.gestures?(e.$wrapperEl.on(e.touchEvents.start,k,a),e.$wrapperEl.on(e.touchEvents.end,z,a)):"touchstart"===e.touchEvents.start&&(e.$wrapperEl.on(e.touchEvents.start,r,w,a),e.$wrapperEl.on(e.touchEvents.move,r,b,i),e.$wrapperEl.on(e.touchEvents.end,r,x,a),e.touchEvents.cancel&&e.$wrapperEl.on(e.touchEvents.cancel,r,x,a)),e.$wrapperEl.on(e.touchEvents.move,`.${e.params.zoom.containerClass}`,y,i)}function I(){const t=e.zoom;if(!t.enabled)return;const s=e.support;t.enabled=!1;const{passiveListener:a,activeListenerWithCapture:i}=S(),r=M();s.gestures?(e.$wrapperEl.off(e.touchEvents.start,k,a),e.$wrapperEl.off(e.touchEvents.end,z,a)):"touchstart"===e.touchEvents.start&&(e.$wrapperEl.off(e.touchEvents.start,r,w,a),e.$wrapperEl.off(e.touchEvents.move,r,b,i),e.$wrapperEl.off(e.touchEvents.end,r,x,a),e.touchEvents.cancel&&e.$wrapperEl.off(e.touchEvents.cancel,r,x,a)),e.$wrapperEl.off(e.touchEvents.move,`.${e.params.zoom.containerClass}`,y,i)}Object.defineProperty(e.zoom,"scale",{get:()=>g,set(e){if(g!==e){const t=u.$imageEl?u.$imageEl[0]:void 0,s=u.$slideEl?u.$slideEl[0]:void 0;a("zoomChange",e,t,s)}g=e}}),s("init",(()=>{e.params.zoom.enabled&&O()})),s("destroy",(()=>{I()})),s("touchStart",((t,s)=>{e.zoom.enabled&&function(t){const s=e.device;u.$imageEl&&0!==u.$imageEl.length&&(m.isTouched||(s.android&&t.cancelable&&t.preventDefault(),m.isTouched=!0,m.touchesStart.x="touchstart"===t.type?t.targetTouches[0].pageX:t.pageX,m.touchesStart.y="touchstart"===t.type?t.targetTouches[0].pageY:t.pageY))}(s)})),s("touchEnd",((t,s)=>{e.zoom.enabled&&function(){const t=e.zoom;if(!u.$imageEl||0===u.$imageEl.length)return;if(!m.isTouched||!m.isMoved)return m.isTouched=!1,void(m.isMoved=!1);m.isTouched=!1,m.isMoved=!1;let s=300,a=300;const i=f.x*s,r=m.currentX+i,n=f.y*a,l=m.currentY+n;0!==f.x&&(s=Math.abs((r-m.currentX)/f.x)),0!==f.y&&(a=Math.abs((l-m.currentY)/f.y));const o=Math.max(s,a);m.currentX=r,m.currentY=l;const d=m.width*t.scale,p=m.height*t.scale;m.minX=Math.min(u.slideWidth/2-d/2,0),m.maxX=-m.minX,m.minY=Math.min(u.slideHeight/2-p/2,0),m.maxY=-m.minY,m.currentX=Math.max(Math.min(m.currentX,m.maxX),m.minX),m.currentY=Math.max(Math.min(m.currentY,m.maxY),m.minY),u.$imageWrapEl.transition(o).transform(`translate3d(${m.currentX}px, ${m.currentY}px,0)`)}()})),s("doubleTap",((t,s)=>{!e.animating&&e.params.zoom.enabled&&e.zoom.enabled&&e.params.zoom.toggle&&$(s)})),s("transitionEnd",(()=>{e.zoom.enabled&&e.params.zoom.enabled&&E()})),s("slideChange",(()=>{e.zoom.enabled&&e.params.zoom.enabled&&e.params.cssMode&&E()})),Object.assign(e.zoom,{enable:O,disable:I,in:T,out:C,toggle:$})},function({swiper:e,extendParams:t,on:s,emit:a}){t({lazy:{checkInView:!1,enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,scrollingElement:"",elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}}),e.lazy={};let i=!1,n=!1;function l(t,s=!0){const i=e.params.lazy;if(void 0===t)return;if(0===e.slides.length)return;const r=e.virtual&&e.params.virtual.enabled?e.$wrapperEl.children(`.${e.params.slideClass}[data-swiper-slide-index="${t}"]`):e.slides.eq(t),n=r.find(`.${i.elementClass}:not(.${i.loadedClass}):not(.${i.loadingClass})`);!r.hasClass(i.elementClass)||r.hasClass(i.loadedClass)||r.hasClass(i.loadingClass)||n.push(r[0]),0!==n.length&&n.each((t=>{const n=d(t);n.addClass(i.loadingClass);const o=n.attr("data-background"),p=n.attr("data-src"),c=n.attr("data-srcset"),u=n.attr("data-sizes"),h=n.parent("picture");e.loadImage(n[0],p||o,c,u,!1,(()=>{if(null!=e&&e&&(!e||e.params)&&!e.destroyed){if(o?(n.css("background-image",`url("${o}")`),n.removeAttr("data-background")):(c&&(n.attr("srcset",c),n.removeAttr("data-srcset")),u&&(n.attr("sizes",u),n.removeAttr("data-sizes")),h.length&&h.children("source").each((e=>{const t=d(e);t.attr("data-srcset")&&(t.attr("srcset",t.attr("data-srcset")),t.removeAttr("data-srcset"))})),p&&(n.attr("src",p),n.removeAttr("data-src"))),n.addClass(i.loadedClass).removeClass(i.loadingClass),r.find(`.${i.preloaderClass}`).remove(),e.params.loop&&s){const t=r.attr("data-swiper-slide-index");if(r.hasClass(e.params.slideDuplicateClass)){l(e.$wrapperEl.children(`[data-swiper-slide-index="${t}"]:not(.${e.params.slideDuplicateClass})`).index(),!1)}else{l(e.$wrapperEl.children(`.${e.params.slideDuplicateClass}[data-swiper-slide-index="${t}"]`).index(),!1)}}a("lazyImageReady",r[0],n[0]),e.params.autoHeight&&e.updateAutoHeight()}})),a("lazyImageLoad",r[0],n[0])}))}function o(){const{$wrapperEl:t,params:s,slides:a,activeIndex:i}=e,r=e.virtual&&s.virtual.enabled,o=s.lazy;let p=s.slidesPerView;function c(e){if(r){if(t.children(`.${s.slideClass}[data-swiper-slide-index="${e}"]`).length)return!0}else if(a[e])return!0;return!1}function u(e){return r?d(e).attr("data-swiper-slide-index"):d(e).index()}if("auto"===p&&(p=0),n||(n=!0),e.params.watchSlidesProgress)t.children(`.${s.slideVisibleClass}`).each((e=>{l(r?d(e).attr("data-swiper-slide-index"):d(e).index())}));else if(p>1)for(let e=i;e<i+p;e+=1)c(e)&&l(e);else l(i);if(o.loadPrevNext)if(p>1||o.loadPrevNextAmount&&o.loadPrevNextAmount>1){const e=o.loadPrevNextAmount,t=p,s=Math.min(i+t+Math.max(e,t),a.length),r=Math.max(i-Math.max(t,e),0);for(let e=i+p;e<s;e+=1)c(e)&&l(e);for(let e=r;e<i;e+=1)c(e)&&l(e)}else{const e=t.children(`.${s.slideNextClass}`);e.length>0&&l(u(e));const a=t.children(`.${s.slidePrevClass}`);a.length>0&&l(u(a))}}function p(){const t=r();if(!e||e.destroyed)return;const s=e.params.lazy.scrollingElement?d(e.params.lazy.scrollingElement):d(t),a=s[0]===t,n=a?t.innerWidth:s[0].offsetWidth,l=a?t.innerHeight:s[0].offsetHeight,c=e.$el.offset(),{rtlTranslate:u}=e;let h=!1;u&&(c.left-=e.$el[0].scrollLeft);const m=[[c.left,c.top],[c.left+e.width,c.top],[c.left,c.top+e.height],[c.left+e.width,c.top+e.height]];for(let e=0;e<m.length;e+=1){const t=m[e];if(t[0]>=0&&t[0]<=n&&t[1]>=0&&t[1]<=l){if(0===t[0]&&0===t[1])continue;h=!0}}const f=!("touchstart"!==e.touchEvents.start||!e.support.passiveListener||!e.params.passiveListeners)&&{passive:!0,capture:!1};h?(o(),s.off("scroll",p,f)):i||(i=!0,s.on("scroll",p,f))}s("beforeInit",(()=>{e.params.lazy.enabled&&e.params.preloadImages&&(e.params.preloadImages=!1)})),s("init",(()=>{e.params.lazy.enabled&&(e.params.lazy.checkInView?p():o())})),s("scroll",(()=>{e.params.freeMode&&e.params.freeMode.enabled&&!e.params.freeMode.sticky&&o()})),s("scrollbarDragMove resize _freeModeNoMomentumRelease",(()=>{e.params.lazy.enabled&&(e.params.lazy.checkInView?p():o())})),s("transitionStart",(()=>{e.params.lazy.enabled&&(e.params.lazy.loadOnTransitionStart||!e.params.lazy.loadOnTransitionStart&&!n)&&(e.params.lazy.checkInView?p():o())})),s("transitionEnd",(()=>{e.params.lazy.enabled&&!e.params.lazy.loadOnTransitionStart&&(e.params.lazy.checkInView?p():o())})),s("slideChange",(()=>{const{lazy:t,cssMode:s,watchSlidesProgress:a,touchReleaseOnEdges:i,resistanceRatio:r}=e.params;t.enabled&&(s||a&&(i||0===r))&&o()})),Object.assign(e.lazy,{load:o,loadInSlide:l})},function({swiper:e,extendParams:t,on:s}){function a(e,t){const s=function(){let e,t,s;return(a,i)=>{for(t=-1,e=a.length;e-t>1;)s=e+t>>1,a[s]<=i?t=s:e=s;return e}}();let a,i;return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(i=s(this.x,e),a=i-1,(e-this.x[a])*(this.y[i]-this.y[a])/(this.x[i]-this.x[a])+this.y[a]):0},this}function i(){e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)}t({controller:{control:void 0,inverse:!1,by:"slide"}}),e.controller={control:void 0},s("beforeInit",(()=>{e.controller.control=e.params.controller.control})),s("update",(()=>{i()})),s("resize",(()=>{i()})),s("observerUpdate",(()=>{i()})),s("setTranslate",((t,s,a)=>{e.controller.control&&e.controller.setTranslate(s,a)})),s("setTransition",((t,s,a)=>{e.controller.control&&e.controller.setTransition(s,a)})),Object.assign(e.controller,{setTranslate:function(t,s){const i=e.controller.control;let r,n;const l=e.constructor;function o(t){const s=e.rtlTranslate?-e.translate:e.translate;"slide"===e.params.controller.by&&(!function(t){e.controller.spline||(e.controller.spline=e.params.loop?new a(e.slidesGrid,t.slidesGrid):new a(e.snapGrid,t.snapGrid))}(t),n=-e.controller.spline.interpolate(-s)),n&&"container"!==e.params.controller.by||(r=(t.maxTranslate()-t.minTranslate())/(e.maxTranslate()-e.minTranslate()),n=(s-e.minTranslate())*r+t.minTranslate()),e.params.controller.inverse&&(n=t.maxTranslate()-n),t.updateProgress(n),t.setTranslate(n,e),t.updateActiveIndex(),t.updateSlidesClasses()}if(Array.isArray(i))for(let e=0;e<i.length;e+=1)i[e]!==s&&i[e]instanceof l&&o(i[e]);else i instanceof l&&s!==i&&o(i)},setTransition:function(t,s){const a=e.constructor,i=e.controller.control;let r;function n(s){s.setTransition(t,e),0!==t&&(s.transitionStart(),s.params.autoHeight&&c((()=>{s.updateAutoHeight()})),s.$wrapperEl.transitionEnd((()=>{i&&(s.params.loop&&"slide"===e.params.controller.by&&s.loopFix(),s.transitionEnd())})))}if(Array.isArray(i))for(r=0;r<i.length;r+=1)i[r]!==s&&i[r]instanceof a&&n(i[r]);else i instanceof a&&s!==i&&n(i)}})},function({swiper:e,extendParams:t,on:s}){t({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group"}});let a=null;function i(e){const t=a;0!==t.length&&(t.html(""),t.html(e))}function r(e){e.attr("tabIndex","0")}function n(e){e.attr("tabIndex","-1")}function l(e,t){e.attr("role",t)}function o(e,t){e.attr("aria-roledescription",t)}function p(e,t){e.attr("aria-label",t)}function c(e){e.attr("aria-disabled",!0)}function u(e){e.attr("aria-disabled",!1)}function h(t){if(13!==t.keyCode&&32!==t.keyCode)return;const s=e.params.a11y,a=d(t.target);e.navigation&&e.navigation.$nextEl&&a.is(e.navigation.$nextEl)&&(e.isEnd&&!e.params.loop||e.slideNext(),e.isEnd?i(s.lastSlideMessage):i(s.nextSlideMessage)),e.navigation&&e.navigation.$prevEl&&a.is(e.navigation.$prevEl)&&(e.isBeginning&&!e.params.loop||e.slidePrev(),e.isBeginning?i(s.firstSlideMessage):i(s.prevSlideMessage)),e.pagination&&a.is(W(e.params.pagination.bulletClass))&&a[0].click()}function m(){if(e.params.loop||e.params.rewind||!e.navigation)return;const{$nextEl:t,$prevEl:s}=e.navigation;s&&s.length>0&&(e.isBeginning?(c(s),n(s)):(u(s),r(s))),t&&t.length>0&&(e.isEnd?(c(t),n(t)):(u(t),r(t)))}function f(){return e.pagination&&e.pagination.bullets&&e.pagination.bullets.length}function g(){return f()&&e.params.pagination.clickable}const v=(e,t,s)=>{r(e),"BUTTON"!==e[0].tagName&&(l(e,"button"),e.on("keydown",h)),p(e,s),function(e,t){e.attr("aria-controls",t)}(e,t)};function w(){const t=e.params.a11y;e.$el.append(a);const s=e.$el;t.containerRoleDescriptionMessage&&o(s,t.containerRoleDescriptionMessage),t.containerMessage&&p(s,t.containerMessage);const i=e.$wrapperEl,r=i.attr("id")||`swiper-wrapper-${function(e=16){return"x".repeat(e).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}(16)}`,n=e.params.autoplay&&e.params.autoplay.enabled?"off":"polite";var c;c=r,i.attr("id",c),function(e,t){e.attr("aria-live",t)}(i,n),t.itemRoleDescriptionMessage&&o(d(e.slides),t.itemRoleDescriptionMessage),l(d(e.slides),t.slideRole);const u=e.params.loop?e.slides.filter((t=>!t.classList.contains(e.params.slideDuplicateClass))).length:e.slides.length;let m,f;e.slides.each(((s,a)=>{const i=d(s),r=e.params.loop?parseInt(i.attr("data-swiper-slide-index"),10):a;p(i,t.slideLabelMessage.replace(/\{\{index\}\}/,r+1).replace(/\{\{slidesLength\}\}/,u))})),e.navigation&&e.navigation.$nextEl&&(m=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(f=e.navigation.$prevEl),m&&m.length&&v(m,r,t.nextSlideMessage),f&&f.length&&v(f,r,t.prevSlideMessage),g()&&e.pagination.$el.on("keydown",W(e.params.pagination.bulletClass),h)}s("beforeInit",(()=>{a=d(`<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)})),s("afterInit",(()=>{e.params.a11y.enabled&&(w(),m())})),s("toEdge",(()=>{e.params.a11y.enabled&&m()})),s("fromEdge",(()=>{e.params.a11y.enabled&&m()})),s("paginationUpdate",(()=>{e.params.a11y.enabled&&function(){const t=e.params.a11y;f()&&e.pagination.bullets.each((s=>{const a=d(s);e.params.pagination.clickable&&(r(a),e.params.pagination.renderBullet||(l(a,"button"),p(a,t.paginationBulletMessage.replace(/\{\{index\}\}/,a.index()+1)))),a.is(`.${e.params.pagination.bulletActiveClass}`)?a.attr("aria-current","true"):a.removeAttr("aria-current")}))}()})),s("destroy",(()=>{e.params.a11y.enabled&&function(){let t,s;a&&a.length>0&&a.remove(),e.navigation&&e.navigation.$nextEl&&(t=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(s=e.navigation.$prevEl),t&&t.off("keydown",h),s&&s.off("keydown",h),g()&&e.pagination.$el.off("keydown",W(e.params.pagination.bulletClass),h)}()}))},function({swiper:e,extendParams:t,on:s}){t({history:{enabled:!1,root:"",replaceState:!1,key:"slides"}});let a=!1,i={};const n=e=>e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),l=e=>{const t=r();let s;s=e?new URL(e):t.location;const a=s.pathname.slice(1).split("/").filter((e=>""!==e)),i=a.length;return{key:a[i-2],value:a[i-1]}},o=(t,s)=>{const i=r();if(!a||!e.params.history.enabled)return;let l;l=e.params.url?new URL(e.params.url):i.location;const o=e.slides.eq(s);let d=n(o.attr("data-history"));if(e.params.history.root.length>0){let s=e.params.history.root;"/"===s[s.length-1]&&(s=s.slice(0,s.length-1)),d=`${s}/${t}/${d}`}else l.pathname.includes(t)||(d=`${t}/${d}`);const p=i.history.state;p&&p.value===d||(e.params.history.replaceState?i.history.replaceState({value:d},null,d):i.history.pushState({value:d},null,d))},d=(t,s,a)=>{if(s)for(let i=0,r=e.slides.length;i<r;i+=1){const r=e.slides.eq(i);if(n(r.attr("data-history"))===s&&!r.hasClass(e.params.slideDuplicateClass)){const s=r.index();e.slideTo(s,t,a)}}else e.slideTo(0,t,a)},p=()=>{i=l(e.params.url),d(e.params.speed,e.paths.value,!1)};s("init",(()=>{e.params.history.enabled&&(()=>{const t=r();if(e.params.history){if(!t.history||!t.history.pushState)return e.params.history.enabled=!1,void(e.params.hashNavigation.enabled=!0);a=!0,i=l(e.params.url),(i.key||i.value)&&(d(0,i.value,e.params.runCallbacksOnInit),e.params.history.replaceState||t.addEventListener("popstate",p))}})()})),s("destroy",(()=>{e.params.history.enabled&&(()=>{const t=r();e.params.history.replaceState||t.removeEventListener("popstate",p)})()})),s("transitionEnd _freeModeNoMomentumRelease",(()=>{a&&o(e.params.history.key,e.activeIndex)})),s("slideChange",(()=>{a&&e.params.cssMode&&o(e.params.history.key,e.activeIndex)}))},function({swiper:e,extendParams:t,emit:s,on:i}){let n=!1;const l=a(),o=r();t({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}});const p=()=>{s("hashChange");const t=l.location.hash.replace("#","");if(t!==e.slides.eq(e.activeIndex).attr("data-hash")){const s=e.$wrapperEl.children(`.${e.params.slideClass}[data-hash="${t}"]`).index();if(void 0===s)return;e.slideTo(s)}},c=()=>{if(n&&e.params.hashNavigation.enabled)if(e.params.hashNavigation.replaceState&&o.history&&o.history.replaceState)o.history.replaceState(null,null,`#${e.slides.eq(e.activeIndex).attr("data-hash")}`||""),s("hashSet");else{const t=e.slides.eq(e.activeIndex),a=t.attr("data-hash")||t.attr("data-history");l.location.hash=a||"",s("hashSet")}};i("init",(()=>{e.params.hashNavigation.enabled&&(()=>{if(!e.params.hashNavigation.enabled||e.params.history&&e.params.history.enabled)return;n=!0;const t=l.location.hash.replace("#","");if(t){const s=0;for(let a=0,i=e.slides.length;a<i;a+=1){const i=e.slides.eq(a);if((i.attr("data-hash")||i.attr("data-history"))===t&&!i.hasClass(e.params.slideDuplicateClass)){const t=i.index();e.slideTo(t,s,e.params.runCallbacksOnInit,!0)}}}e.params.hashNavigation.watchState&&d(o).on("hashchange",p)})()})),i("destroy",(()=>{e.params.hashNavigation.enabled&&e.params.hashNavigation.watchState&&d(o).off("hashchange",p)})),i("transitionEnd _freeModeNoMomentumRelease",(()=>{n&&c()})),i("slideChange",(()=>{n&&e.params.cssMode&&c()}))},function({swiper:e,extendParams:t,on:s,emit:i}){let r;function n(){const t=e.slides.eq(e.activeIndex);let s=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(s=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(r),r=c((()=>{let t;e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),t=e.slidePrev(e.params.speed,!0,!0),i("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?o():(t=e.slideTo(e.slides.length-1,e.params.speed,!0,!0),i("autoplay")):(t=e.slidePrev(e.params.speed,!0,!0),i("autoplay")):e.params.loop?(e.loopFix(),t=e.slideNext(e.params.speed,!0,!0),i("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?o():(t=e.slideTo(0,e.params.speed,!0,!0),i("autoplay")):(t=e.slideNext(e.params.speed,!0,!0),i("autoplay")),(e.params.cssMode&&e.autoplay.running||!1===t)&&n()}),s)}function l(){return void 0===r&&(!e.autoplay.running&&(e.autoplay.running=!0,i("autoplayStart"),n(),!0))}function o(){return!!e.autoplay.running&&(void 0!==r&&(r&&(clearTimeout(r),r=void 0),e.autoplay.running=!1,i("autoplayStop"),!0))}function d(t){e.autoplay.running&&(e.autoplay.paused||(r&&clearTimeout(r),e.autoplay.paused=!0,0!==t&&e.params.autoplay.waitForTransition?["transitionend","webkitTransitionEnd"].forEach((t=>{e.$wrapperEl[0].addEventListener(t,u)})):(e.autoplay.paused=!1,n())))}function p(){const t=a();"hidden"===t.visibilityState&&e.autoplay.running&&d(),"visible"===t.visibilityState&&e.autoplay.paused&&(n(),e.autoplay.paused=!1)}function u(t){e&&!e.destroyed&&e.$wrapperEl&&t.target===e.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach((t=>{e.$wrapperEl[0].removeEventListener(t,u)})),e.autoplay.paused=!1,e.autoplay.running?n():o())}function h(){e.params.autoplay.disableOnInteraction?o():d(),["transitionend","webkitTransitionEnd"].forEach((t=>{e.$wrapperEl[0].removeEventListener(t,u)}))}function m(){e.params.autoplay.disableOnInteraction||(e.autoplay.paused=!1,n())}e.autoplay={running:!1,paused:!1},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}}),s("init",(()=>{if(e.params.autoplay.enabled){l();a().addEventListener("visibilitychange",p),e.params.autoplay.pauseOnMouseEnter&&(e.$el.on("mouseenter",h),e.$el.on("mouseleave",m))}})),s("beforeTransitionStart",((t,s,a)=>{e.autoplay.running&&(a||!e.params.autoplay.disableOnInteraction?e.autoplay.pause(s):o())})),s("sliderFirstMove",(()=>{e.autoplay.running&&(e.params.autoplay.disableOnInteraction?o():d())})),s("touchEnd",(()=>{e.params.cssMode&&e.autoplay.paused&&!e.params.autoplay.disableOnInteraction&&n()})),s("destroy",(()=>{e.$el.off("mouseenter",h),e.$el.off("mouseleave",m),e.autoplay.running&&o();a().removeEventListener("visibilitychange",p)})),Object.assign(e.autoplay,{pause:d,run:n,start:l,stop:o})},function({swiper:e,extendParams:t,on:s}){t({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let a=!1,i=!1;function r(){const t=e.thumbs.swiper;if(!t)return;const s=t.clickedIndex,a=t.clickedSlide;if(a&&d(a).hasClass(e.params.thumbs.slideThumbActiveClass))return;if(null==s)return;let i;if(i=t.params.loop?parseInt(d(t.clickedSlide).attr("data-swiper-slide-index"),10):s,e.params.loop){let t=e.activeIndex;e.slides.eq(t).hasClass(e.params.slideDuplicateClass)&&(e.loopFix(),e._clientLeft=e.$wrapperEl[0].clientLeft,t=e.activeIndex);const s=e.slides.eq(t).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index(),a=e.slides.eq(t).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();i=void 0===s?a:void 0===a?s:a-t<t-s?a:s}e.slideTo(i)}function n(){const{thumbs:t}=e.params;if(a)return!1;a=!0;const s=e.constructor;if(t.swiper instanceof s)e.thumbs.swiper=t.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1});else if(m(t.swiper)){const a=Object.assign({},t.swiper);Object.assign(a,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new s(a),i=!0}return e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",r),!0}function l(t){const s=e.thumbs.swiper;if(!s)return;const a="auto"===s.params.slidesPerView?s.slidesPerViewDynamic():s.params.slidesPerView,i=e.params.thumbs.autoScrollOffset,r=i&&!s.params.loop;if(e.realIndex!==s.realIndex||r){let n,l,o=s.activeIndex;if(s.params.loop){s.slides.eq(o).hasClass(s.params.slideDuplicateClass)&&(s.loopFix(),s._clientLeft=s.$wrapperEl[0].clientLeft,o=s.activeIndex);const t=s.slides.eq(o).prevAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index(),a=s.slides.eq(o).nextAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index();n=void 0===t?a:void 0===a?t:a-o==o-t?s.params.slidesPerGroup>1?a:o:a-o<o-t?a:t,l=e.activeIndex>e.previousIndex?"next":"prev"}else n=e.realIndex,l=n>e.previousIndex?"next":"prev";r&&(n+="next"===l?i:-1*i),s.visibleSlidesIndexes&&s.visibleSlidesIndexes.indexOf(n)<0&&(s.params.centeredSlides?n=n>o?n-Math.floor(a/2)+1:n+Math.floor(a/2)-1:n>o&&s.params.slidesPerGroup,s.slideTo(n,t?0:void 0))}let n=1;const l=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(n=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(n=1),n=Math.floor(n),s.slides.removeClass(l),s.params.loop||s.params.virtual&&s.params.virtual.enabled)for(let t=0;t<n;t+=1)s.$wrapperEl.children(`[data-swiper-slide-index="${e.realIndex+t}"]`).addClass(l);else for(let t=0;t<n;t+=1)s.slides.eq(e.realIndex+t).addClass(l)}e.thumbs={swiper:null},s("beforeInit",(()=>{const{thumbs:t}=e.params;t&&t.swiper&&(n(),l(!0))})),s("slideChange update resize observerUpdate",(()=>{e.thumbs.swiper&&l()})),s("setTransition",((t,s)=>{const a=e.thumbs.swiper;a&&a.setTransition(s)})),s("beforeDestroy",(()=>{const t=e.thumbs.swiper;t&&i&&t&&t.destroy()})),Object.assign(e.thumbs,{init:n,update:l})},function({swiper:e,extendParams:t,emit:s,once:a}){t({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}}),Object.assign(e,{freeMode:{onTouchMove:function(){const{touchEventsData:t,touches:s}=e;0===t.velocities.length&&t.velocities.push({position:s[e.isHorizontal()?"startX":"startY"],time:t.touchStartTime}),t.velocities.push({position:s[e.isHorizontal()?"currentX":"currentY"],time:u()})},onTouchEnd:function({currentPos:t}){const{params:i,$wrapperEl:r,rtlTranslate:n,snapGrid:l,touchEventsData:o}=e,d=u()-o.touchStartTime;if(t<-e.minTranslate())e.slideTo(e.activeIndex);else if(t>-e.maxTranslate())e.slides.length<l.length?e.slideTo(l.length-1):e.slideTo(e.slides.length-1);else{if(i.freeMode.momentum){if(o.velocities.length>1){const t=o.velocities.pop(),s=o.velocities.pop(),a=t.position-s.position,r=t.time-s.time;e.velocity=a/r,e.velocity/=2,Math.abs(e.velocity)<i.freeMode.minimumVelocity&&(e.velocity=0),(r>150||u()-t.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=i.freeMode.momentumVelocityRatio,o.velocities.length=0;let t=1e3*i.freeMode.momentumRatio;const d=e.velocity*t;let p=e.translate+d;n&&(p=-p);let c,h=!1;const m=20*Math.abs(e.velocity)*i.freeMode.momentumBounceRatio;let f;if(p<e.maxTranslate())i.freeMode.momentumBounce?(p+e.maxTranslate()<-m&&(p=e.maxTranslate()-m),c=e.maxTranslate(),h=!0,o.allowMomentumBounce=!0):p=e.maxTranslate(),i.loop&&i.centeredSlides&&(f=!0);else if(p>e.minTranslate())i.freeMode.momentumBounce?(p-e.minTranslate()>m&&(p=e.minTranslate()+m),c=e.minTranslate(),h=!0,o.allowMomentumBounce=!0):p=e.minTranslate(),i.loop&&i.centeredSlides&&(f=!0);else if(i.freeMode.sticky){let t;for(let e=0;e<l.length;e+=1)if(l[e]>-p){t=e;break}p=Math.abs(l[t]-p)<Math.abs(l[t-1]-p)||"next"===e.swipeDirection?l[t]:l[t-1],p=-p}if(f&&a("transitionEnd",(()=>{e.loopFix()})),0!==e.velocity){if(t=n?Math.abs((-p-e.translate)/e.velocity):Math.abs((p-e.translate)/e.velocity),i.freeMode.sticky){const s=Math.abs((n?-p:p)-e.translate),a=e.slidesSizesGrid[e.activeIndex];t=s<a?i.speed:s<2*a?1.5*i.speed:2.5*i.speed}}else if(i.freeMode.sticky)return void e.slideToClosest();i.freeMode.momentumBounce&&h?(e.updateProgress(c),e.setTransition(t),e.setTranslate(p),e.transitionStart(!0,e.swipeDirection),e.animating=!0,r.transitionEnd((()=>{e&&!e.destroyed&&o.allowMomentumBounce&&(s("momentumBounce"),e.setTransition(i.speed),setTimeout((()=>{e.setTranslate(c),r.transitionEnd((()=>{e&&!e.destroyed&&e.transitionEnd()}))}),0))}))):e.velocity?(s("_freeModeNoMomentumRelease"),e.updateProgress(p),e.setTransition(t),e.setTranslate(p),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,r.transitionEnd((()=>{e&&!e.destroyed&&e.transitionEnd()})))):e.updateProgress(p),e.updateActiveIndex(),e.updateSlidesClasses()}else{if(i.freeMode.sticky)return void e.slideToClosest();i.freeMode&&s("_freeModeNoMomentumRelease")}(!i.freeMode.momentum||d>=i.longSwipesMs)&&(e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}}}})},function({swiper:e,extendParams:t}){let s,a,i;t({grid:{rows:1,fill:"column"}}),e.grid={initSlides:t=>{const{slidesPerView:r}=e.params,{rows:n,fill:l}=e.params.grid;a=s/n,i=Math.floor(t/n),s=Math.floor(t/n)===t/n?t:Math.ceil(t/n)*n,"auto"!==r&&"row"===l&&(s=Math.max(s,r*n))},updateSlide:(t,r,n,l)=>{const{slidesPerGroup:o,spaceBetween:d}=e.params,{rows:p,fill:c}=e.params.grid;let u,h,m;if("row"===c&&o>1){const e=Math.floor(t/(o*p)),a=t-p*o*e,i=0===e?o:Math.min(Math.ceil((n-e*p*o)/p),o);m=Math.floor(a/i),h=a-m*i+e*o,u=h+m*s/p,r.css({"-webkit-order":u,order:u})}else"column"===c?(h=Math.floor(t/p),m=t-h*p,(h>i||h===i&&m===p-1)&&(m+=1,m>=p&&(m=0,h+=1))):(m=Math.floor(t/a),h=t-m*a);r.css(l("margin-top"),0!==m?d&&`${d}px`:"")},updateWrapperSize:(t,a,i)=>{const{spaceBetween:r,centeredSlides:n,roundLengths:l}=e.params,{rows:o}=e.params.grid;if(e.virtualSize=(t+r)*s,e.virtualSize=Math.ceil(e.virtualSize/o)-r,e.$wrapperEl.css({[i("width")]:`${e.virtualSize+r}px`}),n){a.splice(0,a.length);const t=[];for(let s=0;s<a.length;s+=1){let i=a[s];l&&(i=Math.floor(i)),a[s]<e.virtualSize+a[0]&&t.push(i)}a.push(...t)}}}},function({swiper:e}){Object.assign(e,{appendSlide:R.bind(e),prependSlide:j.bind(e),addSlide:_.bind(e),removeSlide:V.bind(e),removeAllSlides:q.bind(e)})},function({swiper:e,extendParams:t,on:s}){t({fadeEffect:{crossFade:!1,transformEl:null}}),F({effect:"fade",swiper:e,on:s,setTranslate:()=>{const{slides:t}=e,s=e.params.fadeEffect;for(let a=0;a<t.length;a+=1){const t=e.slides.eq(a);let i=-t[0].swiperSlideOffset;e.params.virtualTranslate||(i-=e.translate);let r=0;e.isHorizontal()||(r=i,i=0);const n=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(t[0].progress),0):1+Math.min(Math.max(t[0].progress,-1),0);U(s,t).css({opacity:n}).transform(`translate3d(${i}px, ${r}px, 0px)`)}},setTransition:t=>{const{transformEl:s}=e.params.fadeEffect;(s?e.slides.find(s):e.slides).transition(t),K({swiper:e,duration:t,transformEl:s,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})},function({swiper:e,extendParams:t,on:s}){t({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}}),F({effect:"cube",swiper:e,on:s,setTranslate:()=>{const{$el:t,$wrapperEl:s,slides:a,width:i,height:r,rtlTranslate:n,size:l,browser:o}=e,p=e.params.cubeEffect,c=e.isHorizontal(),u=e.virtual&&e.params.virtual.enabled;let h,m=0;p.shadow&&(c?(h=s.find(".swiper-cube-shadow"),0===h.length&&(h=d('<div class="swiper-cube-shadow"></div>'),s.append(h)),h.css({height:`${i}px`})):(h=t.find(".swiper-cube-shadow"),0===h.length&&(h=d('<div class="swiper-cube-shadow"></div>'),t.append(h))));for(let e=0;e<a.length;e+=1){const t=a.eq(e);let s=e;u&&(s=parseInt(t.attr("data-swiper-slide-index"),10));let i=90*s,r=Math.floor(i/360);n&&(i=-i,r=Math.floor(-i/360));const o=Math.max(Math.min(t[0].progress,1),-1);let h=0,f=0,g=0;s%4==0?(h=4*-r*l,g=0):(s-1)%4==0?(h=0,g=4*-r*l):(s-2)%4==0?(h=l+4*r*l,g=l):(s-3)%4==0&&(h=-l,g=3*l+4*l*r),n&&(h=-h),c||(f=h,h=0);const v=`rotateX(${c?0:-i}deg) rotateY(${c?i:0}deg) translate3d(${h}px, ${f}px, ${g}px)`;if(o<=1&&o>-1&&(m=90*s+90*o,n&&(m=90*-s-90*o)),t.transform(v),p.slideShadows){let e=c?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),s=c?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===e.length&&(e=d(`<div class="swiper-slide-shadow-${c?"left":"top"}"></div>`),t.append(e)),0===s.length&&(s=d(`<div class="swiper-slide-shadow-${c?"right":"bottom"}"></div>`),t.append(s)),e.length&&(e[0].style.opacity=Math.max(-o,0)),s.length&&(s[0].style.opacity=Math.max(o,0))}}if(s.css({"-webkit-transform-origin":`50% 50% -${l/2}px`,"transform-origin":`50% 50% -${l/2}px`}),p.shadow)if(c)h.transform(`translate3d(0px, ${i/2+p.shadowOffset}px, ${-i/2}px) rotateX(90deg) rotateZ(0deg) scale(${p.shadowScale})`);else{const e=Math.abs(m)-90*Math.floor(Math.abs(m)/90),t=1.5-(Math.sin(2*e*Math.PI/360)/2+Math.cos(2*e*Math.PI/360)/2),s=p.shadowScale,a=p.shadowScale/t,i=p.shadowOffset;h.transform(`scale3d(${s}, 1, ${a}) translate3d(0px, ${r/2+i}px, ${-r/2/a}px) rotateX(-90deg)`)}const f=o.isSafari||o.isWebView?-l/2:0;s.transform(`translate3d(0px,0,${f}px) rotateX(${e.isHorizontal()?0:m}deg) rotateY(${e.isHorizontal()?-m:0}deg)`)},setTransition:t=>{const{$el:s,slides:a}=e;a.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t),e.params.cubeEffect.shadow&&!e.isHorizontal()&&s.find(".swiper-cube-shadow").transition(t)},perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})},function({swiper:e,extendParams:t,on:s}){t({flipEffect:{slideShadows:!0,limitRotation:!0,transformEl:null}}),F({effect:"flip",swiper:e,on:s,setTranslate:()=>{const{slides:t,rtlTranslate:s}=e,a=e.params.flipEffect;for(let i=0;i<t.length;i+=1){const r=t.eq(i);let n=r[0].progress;e.params.flipEffect.limitRotation&&(n=Math.max(Math.min(r[0].progress,1),-1));const l=r[0].swiperSlideOffset;let o=-180*n,d=0,p=e.params.cssMode?-l-e.translate:-l,c=0;if(e.isHorizontal()?s&&(o=-o):(c=p,p=0,d=-o,o=0),r[0].style.zIndex=-Math.abs(Math.round(n))+t.length,a.slideShadows){let t=e.isHorizontal()?r.find(".swiper-slide-shadow-left"):r.find(".swiper-slide-shadow-top"),s=e.isHorizontal()?r.find(".swiper-slide-shadow-right"):r.find(".swiper-slide-shadow-bottom");0===t.length&&(t=Z(a,r,e.isHorizontal()?"left":"top")),0===s.length&&(s=Z(a,r,e.isHorizontal()?"right":"bottom")),t.length&&(t[0].style.opacity=Math.max(-n,0)),s.length&&(s[0].style.opacity=Math.max(n,0))}const u=`translate3d(${p}px, ${c}px, 0px) rotateX(${d}deg) rotateY(${o}deg)`;U(a,r).transform(u)}},setTransition:t=>{const{transformEl:s}=e.params.flipEffect;(s?e.slides.find(s):e.slides).transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t),K({swiper:e,duration:t,transformEl:s})},perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})},function({swiper:e,extendParams:t,on:s}){t({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0,transformEl:null}}),F({effect:"coverflow",swiper:e,on:s,setTranslate:()=>{const{width:t,height:s,slides:a,slidesSizesGrid:i}=e,r=e.params.coverflowEffect,n=e.isHorizontal(),l=e.translate,o=n?t/2-l:s/2-l,d=n?r.rotate:-r.rotate,p=r.depth;for(let e=0,t=a.length;e<t;e+=1){const t=a.eq(e),s=i[e],l=(o-t[0].swiperSlideOffset-s/2)/s*r.modifier;let c=n?d*l:0,u=n?0:d*l,h=-p*Math.abs(l),m=r.stretch;"string"==typeof m&&-1!==m.indexOf("%")&&(m=parseFloat(r.stretch)/100*s);let f=n?0:m*l,g=n?m*l:0,v=1-(1-r.scale)*Math.abs(l);Math.abs(g)<.001&&(g=0),Math.abs(f)<.001&&(f=0),Math.abs(h)<.001&&(h=0),Math.abs(c)<.001&&(c=0),Math.abs(u)<.001&&(u=0),Math.abs(v)<.001&&(v=0);const w=`translate3d(${g}px,${f}px,${h}px)  rotateX(${u}deg) rotateY(${c}deg) scale(${v})`;if(U(r,t).transform(w),t[0].style.zIndex=1-Math.abs(Math.round(l)),r.slideShadows){let e=n?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),s=n?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===e.length&&(e=Z(r,t,n?"left":"top")),0===s.length&&(s=Z(r,t,n?"right":"bottom")),e.length&&(e[0].style.opacity=l>0?l:0),s.length&&(s[0].style.opacity=-l>0?-l:0)}}},setTransition:t=>{const{transformEl:s}=e.params.coverflowEffect;(s?e.slides.find(s):e.slides).transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t)},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})},function({swiper:e,extendParams:t,on:s}){t({creativeEffect:{transformEl:null,limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const a=e=>"string"==typeof e?e:`${e}px`;F({effect:"creative",swiper:e,on:s,setTranslate:()=>{const{slides:t,$wrapperEl:s,slidesSizesGrid:i}=e,r=e.params.creativeEffect,{progressMultiplier:n}=r,l=e.params.centeredSlides;if(l){const t=i[0]/2-e.params.slidesOffsetBefore||0;s.transform(`translateX(calc(50% - ${t}px))`)}for(let s=0;s<t.length;s+=1){const i=t.eq(s),o=i[0].progress,d=Math.min(Math.max(i[0].progress,-r.limitProgress),r.limitProgress);let p=d;l||(p=Math.min(Math.max(i[0].originalProgress,-r.limitProgress),r.limitProgress));const c=i[0].swiperSlideOffset,u=[e.params.cssMode?-c-e.translate:-c,0,0],h=[0,0,0];let m=!1;e.isHorizontal()||(u[1]=u[0],u[0]=0);let f={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};d<0?(f=r.next,m=!0):d>0&&(f=r.prev,m=!0),u.forEach(((e,t)=>{u[t]=`calc(${e}px + (${a(f.translate[t])} * ${Math.abs(d*n)}))`})),h.forEach(((e,t)=>{h[t]=f.rotate[t]*Math.abs(d*n)})),i[0].style.zIndex=-Math.abs(Math.round(o))+t.length;const g=u.join(", "),v=`rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,w=p<0?`scale(${1+(1-f.scale)*p*n})`:`scale(${1-(1-f.scale)*p*n})`,b=p<0?1+(1-f.opacity)*p*n:1-(1-f.opacity)*p*n,x=`translate3d(${g}) ${v} ${w}`;if(m&&f.shadow||!m){let e=i.children(".swiper-slide-shadow");if(0===e.length&&f.shadow&&(e=Z(r,i)),e.length){const t=r.shadowPerProgress?d*(1/r.limitProgress):d;e[0].style.opacity=Math.min(Math.max(Math.abs(t),0),1)}}const y=U(r,i);y.transform(x).css({opacity:b}),f.origin&&y.css("transform-origin",f.origin)}},setTransition:t=>{const{transformEl:s}=e.params.creativeEffect;(s?e.slides.find(s):e.slides).transition(t).find(".swiper-slide-shadow").transition(t),K({swiper:e,duration:t,transformEl:s,allSlides:!0})},perspective:()=>e.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})},function({swiper:e,extendParams:t,on:s}){t({cardsEffect:{slideShadows:!0,transformEl:null}}),F({effect:"cards",swiper:e,on:s,setTranslate:()=>{const{slides:t,activeIndex:s}=e,a=e.params.cardsEffect,{startTranslate:i,isTouched:r}=e.touchEventsData,n=e.translate;for(let l=0;l<t.length;l+=1){const o=t.eq(l),d=o[0].progress,p=Math.min(Math.max(d,-4),4);let c=o[0].swiperSlideOffset;e.params.centeredSlides&&!e.params.cssMode&&e.$wrapperEl.transform(`translateX(${e.minTranslate()}px)`),e.params.centeredSlides&&e.params.cssMode&&(c-=t[0].swiperSlideOffset);let u=e.params.cssMode?-c-e.translate:-c,h=0;const m=-100*Math.abs(p);let f=1,g=-2*p,v=8-.75*Math.abs(p);const w=(l===s||l===s-1)&&p>0&&p<1&&(r||e.params.cssMode)&&n<i,b=(l===s||l===s+1)&&p<0&&p>-1&&(r||e.params.cssMode)&&n>i;if(w||b){const e=(1-Math.abs((Math.abs(p)-.5)/.5))**.5;g+=-28*p*e,f+=-.5*e,v+=96*e,h=-25*e*Math.abs(p)+"%"}if(u=p<0?`calc(${u}px + (${v*Math.abs(p)}%))`:p>0?`calc(${u}px + (-${v*Math.abs(p)}%))`:`${u}px`,!e.isHorizontal()){const e=h;h=u,u=e}const x=`\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${g}deg)\n        scale(${p<0?""+(1+(1-f)*p):""+(1-(1-f)*p)})\n      `;if(a.slideShadows){let e=o.find(".swiper-slide-shadow");0===e.length&&(e=Z(a,o)),e.length&&(e[0].style.opacity=Math.min(Math.max((Math.abs(p)-.5)/.5,0),1))}o[0].style.zIndex=-Math.abs(Math.round(d))+t.length;U(a,o).transform(x)}},setTransition:t=>{const{transformEl:s}=e.params.cardsEffect;(s?e.slides.find(s):e.slides).transition(t).find(".swiper-slide-shadow").transition(t),K({swiper:e,duration:t,transformEl:s})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}];return H.use(J),H}));
//# sourceMappingURL=swiper-bundle.min.js.map

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ });
//# sourceMappingURL=app.min.js.map