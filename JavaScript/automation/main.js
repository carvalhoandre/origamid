/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/animationOnScroll.js":
/*!**************************************!*\
  !*** ./modules/animationOnScroll.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ animationOnScroll)\n/* harmony export */ });\nfunction animationOnScroll() {\n  var sections = document.querySelectorAll(\"[data-anime='scroll']\");\n  if (sections.length <= 0) return;\n  var windowRef = window.innerHeight * 0.6;\n  function animationScroll() {\n    sections.forEach(function (section) {\n      var sectionTop = section.getBoundingClientRect().top;\n      var isSectionVisible = sectionTop - windowRef < 0;\n      if (isSectionVisible) {\n        section.classList.add(\"ativo\");\n      } else if (section.classList.contains(\"ativo\")) {\n        section.classList.remove(\"ativo\");\n      }\n    });\n  }\n  animationScroll();\n  window.addEventListener(\"scroll\", animationScroll);\n}\n\n//# sourceURL=webpack://automation/./modules/animationOnScroll.js?");

/***/ }),

/***/ "./modules/dropdownMenu.js":
/*!*********************************!*\
  !*** ./modules/dropdownMenu.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./modules/outsideClick.js\");\n\nfunction initDropdownMenu() {\n  var dropDownMenus = document.querySelectorAll(\"[data-dropdown]\");\n  var events = [\"click\", \"touchstart\"];\n  function handleClick(event) {\n    var _this = this;\n    event.preventDefault();\n    this.classList.toggle(\"active\");\n    (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, events, function () {\n      _this.classList.remove(\"active\");\n    });\n  }\n  if (dropDownMenus.length > 0) {\n    dropDownMenus.forEach(function (menu) {\n      events.forEach(function (userEvent) {\n        menu.addEventListener(userEvent, handleClick);\n      });\n    });\n  }\n}\n\n//# sourceURL=webpack://automation/./modules/dropdownMenu.js?");

/***/ }),

/***/ "./modules/fetchAnimals.js":
/*!*********************************!*\
  !*** ./modules/fetchAnimals.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimals)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _numbers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./numbers.js */ \"./modules/numbers.js\");\n\n\n\nfunction initFetchAnimals() {\n  function createAnimal(animal) {\n    var div = document.createElement(\"div\");\n    div.classList.add(\"numero-animal\");\n    div.innerHTML = \"<h3>\".concat(animal.specie, \"</h3><span data-number>\").concat(animal.total, \"</span>\");\n    return div;\n  }\n  function fetchAnmails(_x) {\n    return _fetchAnmails.apply(this, arguments);\n  }\n  function _fetchAnmails() {\n    _fetchAnmails = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(url) {\n      var animalsResponse, animalsJSON, numbersGrid;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return fetch(url);\n          case 3:\n            animalsResponse = _context.sent;\n            _context.next = 6;\n            return animalsResponse.json();\n          case 6:\n            animalsJSON = _context.sent;\n            numbersGrid = document.querySelector(\".numbers-grid\");\n            animalsJSON.forEach(function (animal) {\n              var divAnimal = createAnimal(animal);\n              numbersGrid.appendChild(divAnimal);\n            });\n            (0,_numbers_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n            _context.next = 15;\n            break;\n          case 12:\n            _context.prev = 12;\n            _context.t0 = _context[\"catch\"](0);\n            console.warn(_context.t0);\n          case 15:\n          case \"end\":\n            return _context.stop();\n        }\n      }, _callee, null, [[0, 12]]);\n    }));\n    return _fetchAnmails.apply(this, arguments);\n  }\n  fetchAnmails(\"http://127.0.0.1:5500/JavaScript/fantasticAnimals/modules/animals.json\");\n}\n\n//# sourceURL=webpack://automation/./modules/fetchAnimals.js?");

/***/ }),

/***/ "./modules/fetchBitcoin.js":
/*!*********************************!*\
  !*** ./modules/fetchBitcoin.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\nfunction initFetchBitcoin() {\n  fetch(\"https://blockchain.info/ticker\").then(function (response) {\n    if (!response.ok) {\n      throw new Error(defaultError);\n    }\n    return response.json();\n  }).then(function (data) {\n    var btcPrice = document.querySelector(\".btc-price\");\n    var realFromBitcoin = data.BRL.sell / 1000;\n    var value = realFromBitcoin.toLocaleString(\"pt-br\", {\n      style: \"currency\",\n      currency: \"BRL\"\n    });\n    btcPrice.innerText = value;\n  })[\"catch\"](function (error) {\n    console.warn(error);\n  });\n}\n\n//# sourceURL=webpack://automation/./modules/fetchBitcoin.js?");

/***/ }),

/***/ "./modules/initTabNav.js":
/*!*******************************!*\
  !*** ./modules/initTabNav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\nfunction initTabNav() {\n  var tabMenu = document.querySelectorAll('[data-tab=\"menu\"] li');\n  var tabContent = document.querySelectorAll('[data-tab=\"content\"] section');\n  if (tabMenu.length && tabContent.length) {\n    var activeTab = function activeTab(index) {\n      tabContent.forEach(function (content) {\n        content.classList.remove(\"ativo\");\n      });\n      var direction = tabContent[index].dataset.anime;\n      tabContent[index].classList.add(\"ativo\", direction);\n    };\n    tabContent[0].classList.add(\"ativo\");\n    tabMenu.forEach(function (tab, index) {\n      return tab.addEventListener(\"click\", function () {\n        return activeTab(index);\n      });\n    });\n  }\n}\n\n//# sourceURL=webpack://automation/./modules/initTabNav.js?");

/***/ }),

/***/ "./modules/initiAccordion.js":
/*!***********************************!*\
  !*** ./modules/initiAccordion.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordion)\n/* harmony export */ });\nfunction initAccordion() {\n  var accordionList = document.querySelectorAll(\"[data-anime='accordion'] dt\");\n  var active = \"ativo\";\n  if (!accordionList.length) return;\n  accordionList[0].classList.toggle(active);\n  accordionList[0].nextElementSibling.classList.toggle(active);\n  function activeAccordion() {\n    this.classList.toggle(active);\n    this.nextElementSibling.classList.toggle(active);\n  }\n  accordionList.forEach(function (item) {\n    item.addEventListener(\"click\", activeAccordion);\n  });\n}\n\n//# sourceURL=webpack://automation/./modules/initiAccordion.js?");

/***/ }),

/***/ "./modules/mobileMenu.js":
/*!*******************************!*\
  !*** ./modules/mobileMenu.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMobileMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./modules/outsideClick.js\");\n\nfunction initMobileMenu() {\n  var events = [\"click\", \"touchstart\"];\n  var menuButton = document.querySelector('[data-menu=\"button\"]');\n  var menuList = document.querySelector('[data-menu=\"list\"]');\n  if (!menuButton && !menuList) return;\n  function openMenu() {\n    menuList.classList.add(\"active\");\n    menuButton.classList.add(\"active\");\n    (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, events, function () {\n      menuList.classList.remove(\"active\");\n      menuButton.classList.remove(\"active\");\n    });\n  }\n  events.forEach(function (userEvent) {\n    return menuButton.addEventListener(userEvent, openMenu);\n  });\n}\n\n//# sourceURL=webpack://automation/./modules/mobileMenu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\n  var buttonOpen = document.querySelector('[data-modal=\"open\"]');\n  var buttonClose = document.querySelector('[data-modal=\"close\"]');\n  var modalContainer = document.querySelector('[data-modal=\"container\"]');\n  function toggleModal(event) {\n    event.preventDefault();\n    modalContainer.classList.toggle(\"active\");\n  }\n  function clickOutside(event) {\n    if (event.target === this) {\n      toggleModal(event);\n    }\n  }\n  if (buttonOpen && buttonClose && modalContainer) {\n    buttonOpen.addEventListener(\"click\", toggleModal);\n    buttonClose.addEventListener(\"click\", toggleModal);\n    modalContainer.addEventListener(\"click\", clickOutside);\n  }\n}\n\n//# sourceURL=webpack://automation/./modules/modal.js?");

/***/ }),

/***/ "./modules/numbers.js":
/*!****************************!*\
  !*** ./modules/numbers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initNumbers)\n/* harmony export */ });\nfunction initNumbers() {\n  function animaNumbers() {\n    var allNumbers = document.querySelectorAll(\"[data-number]\");\n    allNumbers.forEach(function (number) {\n      var sun = +number.innerText;\n      var increment = Math.floor(sun / 100);\n      var start = 0;\n      var timer = setInterval(function () {\n        start += increment;\n        number.innerText = start;\n        if (start > sun) {\n          number.innerText = sun;\n          clearInterval(timer);\n        }\n      }, 25 * Math.random());\n    });\n  }\n  var observer = new MutationObserver(handleMutation);\n  function handleMutation(mutation) {\n    if (mutation[0].target.classList.contains(\"ativo\")) {\n      observer.disconnect();\n      animaNumbers();\n    }\n  }\n  var observerTarget = document.querySelector(\".numbers\");\n  observer.observe(observerTarget, {\n    attributes: true\n  });\n}\n\n//# sourceURL=webpack://automation/./modules/numbers.js?");

/***/ }),

/***/ "./modules/openingHours.js":
/*!*********************************!*\
  !*** ./modules/openingHours.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ openingHours)\n/* harmony export */ });\nfunction openingHours() {\n  var opening = document.querySelector(\"[data-week]\");\n  if (!opening) return;\n  var daysWeek = opening.dataset.week.split(\",\").map(Number);\n  var hourWeek = opening.dataset.hour.split(\",\").map(Number);\n  var dateNow = new Date();\n  var dayNow = dateNow.getDay();\n  var hourNow = dateNow.getHours();\n  var isWeekOpen = daysWeek.indexOf(dayNow) !== -1;\n  var isHourOpen = hourNow >= hourWeek[0] && hourNow < hourWeek[1];\n  if (isHourOpen && isWeekOpen) {\n    opening.classList.add(\"open\");\n  }\n}\n\n//# sourceURL=webpack://automation/./modules/openingHours.js?");

/***/ }),

/***/ "./modules/outsideClick.js":
/*!*********************************!*\
  !*** ./modules/outsideClick.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\n  var html = document.documentElement;\n  var outside = \"data-outside\";\n  if (!element.hasAttribute(outside)) {\n    events.forEach(function (userEvent) {\n      setTimeout(function () {\n        html.addEventListener(userEvent, handleOutsideClick);\n      });\n    });\n    element.setAttribute(outside, \"\");\n  }\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      events.forEach(function (userEvent) {\n        html.removeEventListener(userEvent, handleOutsideClick);\n      });\n      callback();\n    }\n  }\n}\n\n//# sourceURL=webpack://automation/./modules/outsideClick.js?");

/***/ }),

/***/ "./modules/scrollSuave.js":
/*!********************************!*\
  !*** ./modules/scrollSuave.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollSuave)\n/* harmony export */ });\nfunction initScrollSuave() {\n  var internalLinks = document.querySelectorAll('[data-menu=\"suave\"] a[href^=\"#\"]');\n  if (!internalLinks.length) return;\n  function scrollToSection(event) {\n    event.preventDefault();\n    var href = event.currentTarget.getAttribute(\"href\");\n    var section = document.querySelector(href);\n    section.scrollIntoView({\n      behavior: \"smooth\",\n      block: \"start\"\n    });\n\n    /* forma alternativa */\n    //  const offsetTop = section.offsetTop;\n    // window.scrollTo({\n    //   top: offsetTop,\n    //   behavior: \"smooth\",\n    // });\n  }\n  internalLinks.forEach(function (link) {\n    link.addEventListener(\"click\", scrollToSection);\n  });\n}\n\n//# sourceURL=webpack://automation/./modules/scrollSuave.js?");

/***/ }),

/***/ "./modules/tooltip.js":
/*!****************************!*\
  !*** ./modules/tooltip.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {\n  var tooltips = document.querySelectorAll(\"[data-tooltip]\");\n  if (tooltips.length > 0) {\n    var createTooltipBox = function createTooltipBox(element) {\n      var tooltipBox = document.createElement(\"div\");\n      var text = element.getAttribute(\"aria-label\");\n      tooltipBox.classList.add(\"tooltip\");\n      tooltipBox.innerText = text;\n      document.body.appendChild(tooltipBox);\n      return tooltipBox;\n    };\n    var onMouseOver = function onMouseOver(event) {\n      var tooltipBox = createTooltipBox(this);\n      onMouseLeave.element = this;\n      onMouseLeave.tooltipBox = tooltipBox;\n      this.addEventListener(\"mouseleave\", onMouseLeave);\n      onMouseMove.tooltipBox = tooltipBox;\n      this.addEventListener(\"mousemove\", onMouseMove);\n    };\n    var onMouseLeave = {\n      handleEvent: function handleEvent() {\n        this.tooltipBox.remove();\n        this.tooltipBox.removeEventListener(\"mouseleave\", onMouseLeave);\n      }\n    };\n    var onMouseMove = {\n      handleEvent: function handleEvent(event) {\n        this.tooltipBox.style.top = event.pageY + 20 + \"px\";\n        this.tooltipBox.style.left = event.pageX + 20 + \"px\";\n        this.tooltipBox.removeEventListener(\"mousemove\", onMouseMove);\n      }\n    };\n    tooltips.forEach(function (item) {\n      item.addEventListener(\"mouseover\", onMouseOver);\n    });\n  }\n}\n\n//# sourceURL=webpack://automation/./modules/tooltip.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal.js */ \"./modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./modules/tooltip.js\");\n/* harmony import */ var _modules_initTabNav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/initTabNav.js */ \"./modules/initTabNav.js\");\n/* harmony import */ var _modules_mobileMenu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mobileMenu.js */ \"./modules/mobileMenu.js\");\n/* harmony import */ var _modules_openingHours_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/openingHours.js */ \"./modules/openingHours.js\");\n/* harmony import */ var _modules_initiAccordion_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/initiAccordion.js */ \"./modules/initiAccordion.js\");\n/* harmony import */ var _modules_scrollSuave_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/scrollSuave.js */ \"./modules/scrollSuave.js\");\n/* harmony import */ var _modules_dropdownMenu_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/dropdownMenu.js */ \"./modules/dropdownMenu.js\");\n/* harmony import */ var _modules_fetchBitcoin_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/fetchBitcoin.js */ \"./modules/fetchBitcoin.js\");\n/* harmony import */ var _modules_fetchAnimals_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetchAnimals.js */ \"./modules/fetchAnimals.js\");\n/* harmony import */ var _modules_animationOnScroll_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/animationOnScroll.js */ \"./modules/animationOnScroll.js\");\n\n\n\n\n\n\n\n\n\n\n\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_initTabNav_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_openingHours_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_initiAccordion_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_mobileMenu_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_scrollSuave_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_modules_dropdownMenu_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_modules_fetchBitcoin_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_modules_fetchAnimals_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n(0,_modules_animationOnScroll_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n\n//# sourceURL=webpack://automation/./script.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var _typeof = (__webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/typeof.js\")[\"default\"]);\nfunction _regeneratorRuntime() {\n  \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */\n  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {\n    return e;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n  var t,\n    e = {},\n    r = Object.prototype,\n    n = r.hasOwnProperty,\n    o = Object.defineProperty || function (t, e, r) {\n      t[e] = r.value;\n    },\n    i = \"function\" == typeof Symbol ? Symbol : {},\n    a = i.iterator || \"@@iterator\",\n    c = i.asyncIterator || \"@@asyncIterator\",\n    u = i.toStringTag || \"@@toStringTag\";\n  function define(t, e, r) {\n    return Object.defineProperty(t, e, {\n      value: r,\n      enumerable: !0,\n      configurable: !0,\n      writable: !0\n    }), t[e];\n  }\n  try {\n    define({}, \"\");\n  } catch (t) {\n    define = function define(t, e, r) {\n      return t[e] = r;\n    };\n  }\n  function wrap(t, e, r, n) {\n    var i = e && e.prototype instanceof Generator ? e : Generator,\n      a = Object.create(i.prototype),\n      c = new Context(n || []);\n    return o(a, \"_invoke\", {\n      value: makeInvokeMethod(t, r, c)\n    }), a;\n  }\n  function tryCatch(t, e, r) {\n    try {\n      return {\n        type: \"normal\",\n        arg: t.call(e, r)\n      };\n    } catch (t) {\n      return {\n        type: \"throw\",\n        arg: t\n      };\n    }\n  }\n  e.wrap = wrap;\n  var h = \"suspendedStart\",\n    l = \"suspendedYield\",\n    f = \"executing\",\n    s = \"completed\",\n    y = {};\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n  var p = {};\n  define(p, a, function () {\n    return this;\n  });\n  var d = Object.getPrototypeOf,\n    v = d && d(d(values([])));\n  v && v !== r && n.call(v, a) && (p = v);\n  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);\n  function defineIteratorMethods(t) {\n    [\"next\", \"throw\", \"return\"].forEach(function (e) {\n      define(t, e, function (t) {\n        return this._invoke(e, t);\n      });\n    });\n  }\n  function AsyncIterator(t, e) {\n    function invoke(r, o, i, a) {\n      var c = tryCatch(t[r], t, o);\n      if (\"throw\" !== c.type) {\n        var u = c.arg,\n          h = u.value;\n        return h && \"object\" == _typeof(h) && n.call(h, \"__await\") ? e.resolve(h.__await).then(function (t) {\n          invoke(\"next\", t, i, a);\n        }, function (t) {\n          invoke(\"throw\", t, i, a);\n        }) : e.resolve(h).then(function (t) {\n          u.value = t, i(u);\n        }, function (t) {\n          return invoke(\"throw\", t, i, a);\n        });\n      }\n      a(c.arg);\n    }\n    var r;\n    o(this, \"_invoke\", {\n      value: function value(t, n) {\n        function callInvokeWithMethodAndArg() {\n          return new e(function (e, r) {\n            invoke(t, n, e, r);\n          });\n        }\n        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();\n      }\n    });\n  }\n  function makeInvokeMethod(e, r, n) {\n    var o = h;\n    return function (i, a) {\n      if (o === f) throw Error(\"Generator is already running\");\n      if (o === s) {\n        if (\"throw\" === i) throw a;\n        return {\n          value: t,\n          done: !0\n        };\n      }\n      for (n.method = i, n.arg = a;;) {\n        var c = n.delegate;\n        if (c) {\n          var u = maybeInvokeDelegate(c, n);\n          if (u) {\n            if (u === y) continue;\n            return u;\n          }\n        }\n        if (\"next\" === n.method) n.sent = n._sent = n.arg;else if (\"throw\" === n.method) {\n          if (o === h) throw o = s, n.arg;\n          n.dispatchException(n.arg);\n        } else \"return\" === n.method && n.abrupt(\"return\", n.arg);\n        o = f;\n        var p = tryCatch(e, r, n);\n        if (\"normal\" === p.type) {\n          if (o = n.done ? s : l, p.arg === y) continue;\n          return {\n            value: p.arg,\n            done: n.done\n          };\n        }\n        \"throw\" === p.type && (o = s, n.method = \"throw\", n.arg = p.arg);\n      }\n    };\n  }\n  function maybeInvokeDelegate(e, r) {\n    var n = r.method,\n      o = e.iterator[n];\n    if (o === t) return r.delegate = null, \"throw\" === n && e.iterator[\"return\"] && (r.method = \"return\", r.arg = t, maybeInvokeDelegate(e, r), \"throw\" === r.method) || \"return\" !== n && (r.method = \"throw\", r.arg = new TypeError(\"The iterator does not provide a '\" + n + \"' method\")), y;\n    var i = tryCatch(o, e.iterator, r.arg);\n    if (\"throw\" === i.type) return r.method = \"throw\", r.arg = i.arg, r.delegate = null, y;\n    var a = i.arg;\n    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, \"return\" !== r.method && (r.method = \"next\", r.arg = t), r.delegate = null, y) : a : (r.method = \"throw\", r.arg = new TypeError(\"iterator result is not an object\"), r.delegate = null, y);\n  }\n  function pushTryEntry(t) {\n    var e = {\n      tryLoc: t[0]\n    };\n    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);\n  }\n  function resetTryEntry(t) {\n    var e = t.completion || {};\n    e.type = \"normal\", delete e.arg, t.completion = e;\n  }\n  function Context(t) {\n    this.tryEntries = [{\n      tryLoc: \"root\"\n    }], t.forEach(pushTryEntry, this), this.reset(!0);\n  }\n  function values(e) {\n    if (e || \"\" === e) {\n      var r = e[a];\n      if (r) return r.call(e);\n      if (\"function\" == typeof e.next) return e;\n      if (!isNaN(e.length)) {\n        var o = -1,\n          i = function next() {\n            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;\n            return next.value = t, next.done = !0, next;\n          };\n        return i.next = i;\n      }\n    }\n    throw new TypeError(_typeof(e) + \" is not iterable\");\n  }\n  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, \"constructor\", {\n    value: GeneratorFunctionPrototype,\n    configurable: !0\n  }), o(GeneratorFunctionPrototype, \"constructor\", {\n    value: GeneratorFunction,\n    configurable: !0\n  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, \"GeneratorFunction\"), e.isGeneratorFunction = function (t) {\n    var e = \"function\" == typeof t && t.constructor;\n    return !!e && (e === GeneratorFunction || \"GeneratorFunction\" === (e.displayName || e.name));\n  }, e.mark = function (t) {\n    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, \"GeneratorFunction\")), t.prototype = Object.create(g), t;\n  }, e.awrap = function (t) {\n    return {\n      __await: t\n    };\n  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {\n    return this;\n  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {\n    void 0 === i && (i = Promise);\n    var a = new AsyncIterator(wrap(t, r, n, o), i);\n    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {\n      return t.done ? t.value : a.next();\n    });\n  }, defineIteratorMethods(g), define(g, u, \"Generator\"), define(g, a, function () {\n    return this;\n  }), define(g, \"toString\", function () {\n    return \"[object Generator]\";\n  }), e.keys = function (t) {\n    var e = Object(t),\n      r = [];\n    for (var n in e) r.push(n);\n    return r.reverse(), function next() {\n      for (; r.length;) {\n        var t = r.pop();\n        if (t in e) return next.value = t, next.done = !1, next;\n      }\n      return next.done = !0, next;\n    };\n  }, e.values = values, Context.prototype = {\n    constructor: Context,\n    reset: function reset(e) {\n      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) \"t\" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);\n    },\n    stop: function stop() {\n      this.done = !0;\n      var t = this.tryEntries[0].completion;\n      if (\"throw\" === t.type) throw t.arg;\n      return this.rval;\n    },\n    dispatchException: function dispatchException(e) {\n      if (this.done) throw e;\n      var r = this;\n      function handle(n, o) {\n        return a.type = \"throw\", a.arg = e, r.next = n, o && (r.method = \"next\", r.arg = t), !!o;\n      }\n      for (var o = this.tryEntries.length - 1; o >= 0; --o) {\n        var i = this.tryEntries[o],\n          a = i.completion;\n        if (\"root\" === i.tryLoc) return handle(\"end\");\n        if (i.tryLoc <= this.prev) {\n          var c = n.call(i, \"catchLoc\"),\n            u = n.call(i, \"finallyLoc\");\n          if (c && u) {\n            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);\n            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);\n          } else if (c) {\n            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);\n          } else {\n            if (!u) throw Error(\"try statement without catch or finally\");\n            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);\n          }\n        }\n      }\n    },\n    abrupt: function abrupt(t, e) {\n      for (var r = this.tryEntries.length - 1; r >= 0; --r) {\n        var o = this.tryEntries[r];\n        if (o.tryLoc <= this.prev && n.call(o, \"finallyLoc\") && this.prev < o.finallyLoc) {\n          var i = o;\n          break;\n        }\n      }\n      i && (\"break\" === t || \"continue\" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);\n      var a = i ? i.completion : {};\n      return a.type = t, a.arg = e, i ? (this.method = \"next\", this.next = i.finallyLoc, y) : this.complete(a);\n    },\n    complete: function complete(t, e) {\n      if (\"throw\" === t.type) throw t.arg;\n      return \"break\" === t.type || \"continue\" === t.type ? this.next = t.arg : \"return\" === t.type ? (this.rval = this.arg = t.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === t.type && e && (this.next = e), y;\n    },\n    finish: function finish(t) {\n      for (var e = this.tryEntries.length - 1; e >= 0; --e) {\n        var r = this.tryEntries[e];\n        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;\n      }\n    },\n    \"catch\": function _catch(t) {\n      for (var e = this.tryEntries.length - 1; e >= 0; --e) {\n        var r = this.tryEntries[e];\n        if (r.tryLoc === t) {\n          var n = r.completion;\n          if (\"throw\" === n.type) {\n            var o = n.arg;\n            resetTryEntry(r);\n          }\n          return o;\n        }\n      }\n      throw Error(\"illegal catch attempt\");\n    },\n    delegateYield: function delegateYield(e, r, n) {\n      return this.delegate = {\n        iterator: values(e),\n        resultName: r,\n        nextLoc: n\n      }, \"next\" === this.method && (this.arg = t), y;\n    }\n  }, e;\n}\nmodule.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://automation/./node_modules/@babel/runtime/helpers/regeneratorRuntime.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("function _typeof(o) {\n  \"@babel/helpers - typeof\";\n\n  return module.exports = _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) {\n    return typeof o;\n  } : function (o) {\n    return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports, _typeof(o);\n}\nmodule.exports = _typeof, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://automation/./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// TODO(Babel 8): Remove this file.\n\nvar runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ \"./node_modules/@babel/runtime/helpers/regeneratorRuntime.js\")();\nmodule.exports = runtime;\n\n// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  if (typeof globalThis === \"object\") {\n    globalThis.regeneratorRuntime = runtime;\n  } else {\n    Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n  }\n}\n\n\n//# sourceURL=webpack://automation/./node_modules/@babel/runtime/regenerator/index.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _asyncToGenerator)\n/* harmony export */ });\nfunction asyncGeneratorStep(n, t, e, r, o, a, c) {\n  try {\n    var i = n[a](c),\n      u = i.value;\n  } catch (n) {\n    return void e(n);\n  }\n  i.done ? t(u) : Promise.resolve(u).then(r, o);\n}\nfunction _asyncToGenerator(n) {\n  return function () {\n    var t = this,\n      e = arguments;\n    return new Promise(function (r, o) {\n      var a = n.apply(t, e);\n      function _next(n) {\n        asyncGeneratorStep(a, r, o, _next, _throw, \"next\", n);\n      }\n      function _throw(n) {\n        asyncGeneratorStep(a, r, o, _next, _throw, \"throw\", n);\n      }\n      _next(void 0);\n    });\n  };\n}\n\n\n//# sourceURL=webpack://automation/./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./script.js");
/******/ 	
/******/ })()
;