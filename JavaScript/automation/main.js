/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/animationOnScroll.js":
/*!**************************************!*\
  !*** ./modules/animationOnScroll.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ animationOnScroll)\n/* harmony export */ });\nfunction animationOnScroll() {\r\n  const sections = document.querySelectorAll(\"[data-anime='scroll']\");\r\n  if (sections.length <= 0) return;\r\n\r\n  const windowRef = window.innerHeight * 0.6;\r\n\r\n  function animationScroll() {\r\n    sections.forEach((section) => {\r\n      const sectionTop = section.getBoundingClientRect().top;\r\n      const isSectionVisible = sectionTop - windowRef < 0;\r\n\r\n      if (isSectionVisible) {\r\n        section.classList.add(\"ativo\");\r\n      } else if (section.classList.contains(\"ativo\")) {\r\n        section.classList.remove(\"ativo\");\r\n      }\r\n    });\r\n  }\r\n\r\n  animationScroll();\r\n\r\n  window.addEventListener(\"scroll\", animationScroll);\r\n}\r\n\n\n//# sourceURL=webpack://automation/./modules/animationOnScroll.js?");

/***/ }),

/***/ "./modules/dropdownMenu.js":
/*!*********************************!*\
  !*** ./modules/dropdownMenu.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./modules/outsideClick.js\");\n\r\n\r\nfunction initDropdownMenu() {\r\n  const dropDownMenus = document.querySelectorAll(\"[data-dropdown]\");\r\n\r\n  const events = [\"click\", \"touchstart\"];\r\n\r\n  function handleClick(event) {\r\n    event.preventDefault();\r\n\r\n    this.classList.toggle(\"active\");\r\n\r\n    (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, events, () => {\r\n      this.classList.remove(\"active\");\r\n    });\r\n  }\r\n\r\n  if (dropDownMenus.length > 0) {\r\n    dropDownMenus.forEach((menu) => {\r\n      events.forEach((userEvent) => {\r\n        menu.addEventListener(userEvent, handleClick);\r\n      });\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://automation/./modules/dropdownMenu.js?");

/***/ }),

/***/ "./modules/fetchAnimals.js":
/*!*********************************!*\
  !*** ./modules/fetchAnimals.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimals)\n/* harmony export */ });\n/* harmony import */ var _numbers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./numbers.js */ \"./modules/numbers.js\");\n\r\n\r\nfunction initFetchAnimals() {\r\n  function createAnimal(animal) {\r\n    const div = document.createElement(\"div\");\r\n    div.classList.add(\"numero-animal\");\r\n\r\n    div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`;\r\n\r\n    return div;\r\n  }\r\n\r\n  async function fetchAnmails(url) {\r\n    try {\r\n      const animalsResponse = await fetch(url);\r\n      const animalsJSON = await animalsResponse.json();\r\n      const numbersGrid = document.querySelector(\".numbers-grid\");\r\n\r\n      animalsJSON.forEach((animal) => {\r\n        const divAnimal = createAnimal(animal);\r\n\r\n        numbersGrid.appendChild(divAnimal);\r\n      });\r\n\r\n      (0,_numbers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    } catch (error) {\r\n      console.warn(error);\r\n    }\r\n  }\r\n\r\n  fetchAnmails(\r\n    \"http://127.0.0.1:5500/JavaScript/fantasticAnimals/modules/animals.json\"\r\n  );\r\n}\r\n\n\n//# sourceURL=webpack://automation/./modules/fetchAnimals.js?");

/***/ }),

/***/ "./modules/fetchBitcoin.js":
/*!*********************************!*\
  !*** ./modules/fetchBitcoin.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\nfunction initFetchBitcoin() {\r\n  fetch(\"https://blockchain.info/ticker\")\r\n    .then((response) => {\r\n      if (!response.ok) {\r\n        throw new Error(defaultError);\r\n      }\r\n\r\n      return response.json();\r\n    })\r\n    .then((data) => {\r\n      const btcPrice = document.querySelector(\".btc-price\");\r\n      const realFromBitcoin = data.BRL.sell / 1000;\r\n\r\n      const value = realFromBitcoin.toLocaleString(\"pt-br\", {\r\n        style: \"currency\",\r\n        currency: \"BRL\",\r\n      });\r\n\r\n      btcPrice.innerText = value;\r\n    })\r\n    .catch((error) => {\r\n      console.warn(error);\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://automation/./modules/fetchBitcoin.js?");

/***/ }),

/***/ "./modules/initTabNav.js":
/*!*******************************!*\
  !*** ./modules/initTabNav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\nfunction initTabNav() {\r\n  const tabMenu = document.querySelectorAll('[data-tab=\"menu\"] li');\r\n  const tabContent = document.querySelectorAll('[data-tab=\"content\"] section');\r\n\r\n  if (tabMenu.length && tabContent.length) {\r\n    tabContent[0].classList.add(\"ativo\");\r\n\r\n    function activeTab(index) {\r\n      tabContent.forEach((content) => {\r\n        content.classList.remove(\"ativo\");\r\n      });\r\n\r\n      const direction = tabContent[index].dataset.anime;\r\n\r\n      tabContent[index].classList.add(\"ativo\", direction);\r\n    }\r\n\r\n    tabMenu.forEach((tab, index) =>\r\n      tab.addEventListener(\"click\", () => activeTab(index))\r\n    );\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://automation/./modules/initTabNav.js?");

/***/ }),

/***/ "./modules/initiAccordion.js":
/*!***********************************!*\
  !*** ./modules/initiAccordion.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordion)\n/* harmony export */ });\nfunction initAccordion() {\r\n  const accordionList = document.querySelectorAll(\r\n    \"[data-anime='accordion'] dt\"\r\n  );\r\n  const active = \"ativo\";\r\n\r\n  if (!accordionList.length) return;\r\n\r\n  accordionList[0].classList.toggle(active);\r\n  accordionList[0].nextElementSibling.classList.toggle(active);\r\n\r\n  function activeAccordion() {\r\n    this.classList.toggle(active);\r\n    this.nextElementSibling.classList.toggle(active);\r\n  }\r\n\r\n  accordionList.forEach((item) => {\r\n    item.addEventListener(\"click\", activeAccordion);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://automation/./modules/initiAccordion.js?");

/***/ }),

/***/ "./modules/mobileMenu.js":
/*!*******************************!*\
  !*** ./modules/mobileMenu.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMobileMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./modules/outsideClick.js\");\n\r\n\r\nfunction initMobileMenu() {\r\n  const events = [\"click\", \"touchstart\"];\r\n\r\n  const menuButton = document.querySelector('[data-menu=\"button\"]');\r\n  const menuList = document.querySelector('[data-menu=\"list\"]');\r\n\r\n  if (!menuButton && !menuList) return;\r\n\r\n  function openMenu() {\r\n    menuList.classList.add(\"active\");\r\n    menuButton.classList.add(\"active\");\r\n\r\n    (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, events, () => {\r\n      menuList.classList.remove(\"active\");\r\n      menuButton.classList.remove(\"active\");\r\n    });\r\n  }\r\n\r\n  events.forEach((userEvent) =>\r\n    menuButton.addEventListener(userEvent, openMenu)\r\n  );\r\n}\r\n\n\n//# sourceURL=webpack://automation/./modules/mobileMenu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\r\n  const buttonOpen = document.querySelector('[data-modal=\"open\"]');\r\n  const buttonClose = document.querySelector('[data-modal=\"close\"]');\r\n  const modalContainer = document.querySelector('[data-modal=\"container\"]');\r\n\r\n  function toggleModal(event) {\r\n    event.preventDefault();\r\n    modalContainer.classList.toggle(\"active\");\r\n  }\r\n\r\n  function clickOutside(event) {\r\n    if (event.target === this) {\r\n      toggleModal(event);\r\n    }\r\n  }\r\n\r\n  if (buttonOpen && buttonClose && modalContainer) {\r\n    buttonOpen.addEventListener(\"click\", toggleModal);\r\n    buttonClose.addEventListener(\"click\", toggleModal);\r\n    modalContainer.addEventListener(\"click\", clickOutside);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://automation/./modules/modal.js?");

/***/ }),

/***/ "./modules/numbers.js":
/*!****************************!*\
  !*** ./modules/numbers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initNumbers)\n/* harmony export */ });\nfunction initNumbers() {\r\n  function animaNumbers() {\r\n    const allNumbers = document.querySelectorAll(\"[data-number]\");\r\n\r\n    allNumbers.forEach((number) => {\r\n      const sun = +number.innerText;\r\n      const increment = Math.floor(sun / 100);\r\n      let start = 0;\r\n\r\n      const timer = setInterval(() => {\r\n        start += increment;\r\n\r\n        number.innerText = start;\r\n\r\n        if (start > sun) {\r\n          number.innerText = sun;\r\n          clearInterval(timer);\r\n        }\r\n      }, 25 * Math.random());\r\n    });\r\n  }\r\n\r\n  let observer = new MutationObserver(handleMutation);\r\n\r\n  function handleMutation(mutation) {\r\n    if (mutation[0].target.classList.contains(\"ativo\")) {\r\n      observer.disconnect();\r\n      animaNumbers();\r\n    }\r\n  }\r\n\r\n  const observerTarget = document.querySelector(\".numbers\");\r\n\r\n  observer.observe(observerTarget, { attributes: true });\r\n}\r\n\n\n//# sourceURL=webpack://automation/./modules/numbers.js?");

/***/ }),

/***/ "./modules/openingHours.js":
/*!*********************************!*\
  !*** ./modules/openingHours.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ openingHours)\n/* harmony export */ });\nfunction openingHours() {\r\n  const opening = document.querySelector(\"[data-week]\");\r\n\r\n  if (!opening) return;\r\n\r\n  const daysWeek = opening.dataset.week.split(\",\").map(Number);\r\n  const hourWeek = opening.dataset.hour.split(\",\").map(Number);\r\n\r\n  const dateNow = new Date();\r\n\r\n  const dayNow = dateNow.getDay();\r\n  const hourNow = dateNow.getHours();\r\n\r\n  const isWeekOpen = daysWeek.indexOf(dayNow) !== -1;\r\n\r\n  const isHourOpen = hourNow >= hourWeek[0] && hourNow < hourWeek[1];\r\n\r\n  if (isHourOpen && isWeekOpen) {\r\n    opening.classList.add(\"open\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://automation/./modules/openingHours.js?");

/***/ }),

/***/ "./modules/outsideClick.js":
/*!*********************************!*\
  !*** ./modules/outsideClick.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\r\n  const html = document.documentElement;\r\n  const outside = \"data-outside\";\r\n\r\n  if (!element.hasAttribute(outside)) {\r\n    events.forEach((userEvent) => {\r\n      setTimeout(() => {\r\n        html.addEventListener(userEvent, handleOutsideClick);\r\n      });\r\n    });\r\n\r\n    element.setAttribute(outside, \"\");\r\n  }\r\n\r\n  function handleOutsideClick(event) {\r\n    if (!element.contains(event.target)) {\r\n      element.removeAttribute(outside);\r\n\r\n      events.forEach((userEvent) => {\r\n        html.removeEventListener(userEvent, handleOutsideClick);\r\n      });\r\n\r\n      callback();\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://automation/./modules/outsideClick.js?");

/***/ }),

/***/ "./modules/scrollSuave.js":
/*!********************************!*\
  !*** ./modules/scrollSuave.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollSuave)\n/* harmony export */ });\nfunction initScrollSuave() {\r\n  const internalLinks = document.querySelectorAll(\r\n    '[data-menu=\"suave\"] a[href^=\"#\"]'\r\n  );\r\n\r\n  if (!internalLinks.length) return;\r\n\r\n  function scrollToSection(event) {\r\n    event.preventDefault();\r\n\r\n    const href = event.currentTarget.getAttribute(\"href\");\r\n    const section = document.querySelector(href);\r\n\r\n    section.scrollIntoView({\r\n      behavior: \"smooth\",\r\n      block: \"start\",\r\n    });\r\n\r\n    /* forma alternativa */\r\n    //  const offsetTop = section.offsetTop;\r\n    // window.scrollTo({\r\n    //   top: offsetTop,\r\n    //   behavior: \"smooth\",\r\n    // });\r\n  }\r\n\r\n  internalLinks.forEach((link) => {\r\n    link.addEventListener(\"click\", scrollToSection);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://automation/./modules/scrollSuave.js?");

/***/ }),

/***/ "./modules/tooltip.js":
/*!****************************!*\
  !*** ./modules/tooltip.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {\r\n  const tooltips = document.querySelectorAll(\"[data-tooltip]\");\r\n\r\n  if (tooltips.length > 0) {\r\n    function createTooltipBox(element) {\r\n      const tooltipBox = document.createElement(\"div\");\r\n      const text = element.getAttribute(\"aria-label\");\r\n\r\n      tooltipBox.classList.add(\"tooltip\");\r\n      tooltipBox.innerText = text;\r\n\r\n      document.body.appendChild(tooltipBox);\r\n\r\n      return tooltipBox;\r\n    }\r\n\r\n    const onMouseLeave = {\r\n      handleEvent() {\r\n        this.tooltipBox.remove();\r\n        this.tooltipBox.removeEventListener(\"mouseleave\", onMouseLeave);\r\n      },\r\n    };\r\n\r\n    const onMouseMove = {\r\n      handleEvent(event) {\r\n        this.tooltipBox.style.top = event.pageY + 20 + \"px\";\r\n        this.tooltipBox.style.left = event.pageX + 20 + \"px\";\r\n        this.tooltipBox.removeEventListener(\"mousemove\", onMouseMove);\r\n      },\r\n    };\r\n\r\n    function onMouseOver(event) {\r\n      const tooltipBox = createTooltipBox(this);\r\n\r\n      onMouseLeave.element = this;\r\n      onMouseLeave.tooltipBox = tooltipBox;\r\n      this.addEventListener(\"mouseleave\", onMouseLeave);\r\n\r\n      onMouseMove.tooltipBox = tooltipBox;\r\n      this.addEventListener(\"mousemove\", onMouseMove);\r\n    }\r\n\r\n    tooltips.forEach((item) => {\r\n      item.addEventListener(\"mouseover\", onMouseOver);\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://automation/./modules/tooltip.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal.js */ \"./modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./modules/tooltip.js\");\n/* harmony import */ var _modules_initTabNav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/initTabNav.js */ \"./modules/initTabNav.js\");\n/* harmony import */ var _modules_mobileMenu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mobileMenu.js */ \"./modules/mobileMenu.js\");\n/* harmony import */ var _modules_openingHours_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/openingHours.js */ \"./modules/openingHours.js\");\n/* harmony import */ var _modules_initiAccordion_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/initiAccordion.js */ \"./modules/initiAccordion.js\");\n/* harmony import */ var _modules_scrollSuave_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/scrollSuave.js */ \"./modules/scrollSuave.js\");\n/* harmony import */ var _modules_dropdownMenu_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/dropdownMenu.js */ \"./modules/dropdownMenu.js\");\n/* harmony import */ var _modules_fetchBitcoin_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/fetchBitcoin.js */ \"./modules/fetchBitcoin.js\");\n/* harmony import */ var _modules_fetchAnimals_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetchAnimals.js */ \"./modules/fetchAnimals.js\");\n/* harmony import */ var _modules_animationOnScroll_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/animationOnScroll.js */ \"./modules/animationOnScroll.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_initTabNav_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_openingHours_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_initiAccordion_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_mobileMenu_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_scrollSuave_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_dropdownMenu_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n(0,_modules_fetchBitcoin_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n(0,_modules_fetchAnimals_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\r\n(0,_modules_animationOnScroll_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\r\n\n\n//# sourceURL=webpack://automation/./script.js?");

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