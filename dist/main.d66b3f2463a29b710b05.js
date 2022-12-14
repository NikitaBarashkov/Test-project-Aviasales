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

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://test-project-aviasales/./src/styles/style.scss?");

/***/ }),

/***/ "./src/app/countTransfers.js":
/*!***********************************!*\
  !*** ./src/app/countTransfers.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filterTickets\": () => (/* binding */ filterTickets),\n/* harmony export */   \"getOptions\": () => (/* binding */ getOptions)\n/* harmony export */ });\nfunction getOptions() {\r\n  const options = document.querySelectorAll('.checkbox_hid');\r\n  \r\n  return {\r\n    allTickets: options[0].checked,\r\n    withoutTransfers: options[1].checked,\r\n    oneTransfer: options[2].checked,\r\n    twoTransfres: options[3].checked,\r\n    treeTransfers: options[4].checked\r\n  }\r\n}\r\n\r\nfunction filterTickets(array, object) {\r\n  if (object.allTickets) return array;\r\n  const arr = [];\r\n  if (object.withoutTransfers) {\r\n    let selectedTicets = array.filter(elem => elem.segments[0].stops.length == 0 && elem.segments[1].stops.length == 0);\r\n    arr.push(selectedTicets);\r\n  }\r\n  if (object.oneTransfer) {\r\n    let selectedTicets = array.filter(elem => elem.segments[0].stops.length == 1 && elem.segments[1].stops.length == 1);\r\n    arr.push(selectedTicets);\r\n  }\r\n  if (object.twoTransfres) {\r\n    let selectedTicets = array.filter(elem => elem.segments[0].stops.length == 2 && elem.segments[1].stops.length == 2);\r\n    arr.push(selectedTicets);\r\n  }\r\n  if (object.treeTransfers) {\r\n    let selectedTicets = array.filter(elem => elem.segments[0].stops.length == 3 && elem.segments[1].stops.length == 3);\r\n    arr.push(selectedTicets);\r\n  }\r\n  return arr.flat();\r\n}\r\n\r\n\n\n//# sourceURL=webpack://test-project-aviasales/./src/app/countTransfers.js?");

/***/ }),

/***/ "./src/app/createTicket.js":
/*!*********************************!*\
  !*** ./src/app/createTicket.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTicket\": () => (/* binding */ createTicket)\n/* harmony export */ });\nfunction createTicket(obj) {\r\n  document.querySelector('.content').insertAdjacentHTML('beforeend', \r\n  `\r\n  <div class=\"ticket\">\r\n    <div class=\"ticket__price\">\r\n      <h3>${obj.firstHalf.price}</h3>\r\n      <img src=\"http://pics.avs.io/99/36/${obj.firstHalf.carrier}.png\" alt=\"carrier\">  \r\n    </div>\r\n    <div class=\"ticket__info\">\r\n      <h3 class=\"info\">\r\n        ${obj.firstHalf.origin} - ${obj.firstHalf.destination}<br>\r\n        <span>\r\n          ${new Date(obj.firstHalf.startDate).getHours().toString().length == 1 ? \r\n              '0' + new Date(obj.firstHalf.startDate).getHours() :\r\n              new Date(obj.firstHalf.startDate).getHours()}:${new Date(obj.firstHalf.startDate).getMinutes().toString().length == 1 ? \r\n              '0' + new Date(obj.firstHalf.startDate).getMinutes() :\r\n              new Date(obj.firstHalf.startDate).getMinutes()} -\r\n          ${new Date(obj.firstHalf.endDate()).getHours().toString().length == 1 ?\r\n              '0' + new Date(obj.firstHalf.endDate()).getHours() :\r\n              new Date(obj.firstHalf.endDate()).getHours()}:${new Date(obj.firstHalf.endDate()).getMinutes().toString().length == 1 ?\r\n              '0' + new Date(obj.firstHalf.endDate()).getMinutes() :\r\n              new Date(obj.firstHalf.endDate()).getMinutes()}\r\n        </span>\r\n      </h3>\r\n      <h3 class=\"info\">\r\n        В ПУТИ<br>\r\n        <span>${obj.firstHalf.timeWay()[0]}ч ${obj.firstHalf.timeWay()[1].slice(0, 2)}м</span>\r\n      </h3>\r\n      <h3 class=\"info\">\r\n        ${obj.firstHalf.conutStops ? obj.firstHalf.conutStops : 'БЕЗ'} \r\n        ${obj.firstHalf.conutStops == 1 ? 'ПЕРЕСАДКА' : obj.firstHalf.conutStops == 2 || obj.firstHalf.conutStops == 3 ? 'ПЕРЕСАДКИ' : 'ПЕРЕСАДОК'}\r\n        <br>\r\n        <span>${obj.firstHalf.conutStops ? obj.firstHalf.stopPoints : ''}</span>\r\n      </h3>\r\n    </div>\r\n    <div class=\"ticket__info\">\r\n      <h3 class=\"info\">\r\n        ${obj.secondHalf.origin} - ${obj.secondHalf.destination}<br>\r\n        <span>\r\n        ${new Date(obj.secondHalf.startDate).getHours().toString().length == 1 ? \r\n          '0' + new Date(obj.secondHalf.startDate).getHours() :\r\n          new Date(obj.secondHalf.startDate).getHours()}:${new Date(obj.secondHalf.startDate).getMinutes().toString().length == 1 ? \r\n          '0' + new Date(obj.secondHalf.startDate).getMinutes() :\r\n          new Date(obj.secondHalf.startDate).getMinutes()} -\r\n      ${new Date(obj.secondHalf.endDate()).getHours().toString().length == 1 ?\r\n          '0' + new Date(obj.secondHalf.endDate()).getHours() :\r\n          new Date(obj.secondHalf.endDate()).getHours()}:${new Date(obj.secondHalf.endDate()).getMinutes().toString().length == 1 ?\r\n          '0' + new Date(obj.secondHalf.endDate()).getMinutes() :\r\n          new Date(obj.secondHalf.endDate()).getMinutes()}\r\n        </span>\r\n      </h3>\r\n      <h3 class=\"info\">\r\n        В ПУТИ<br>\r\n        <span>${obj.secondHalf.timeWay()[0]}ч ${obj.secondHalf.timeWay()[1].slice(0, 2)}м</span>\r\n      </h3>\r\n      <h3 class=\"info\">\r\n        ${obj.secondHalf.conutStops ? obj.secondHalf.conutStops : 'БЕЗ'} \r\n        ${obj.secondHalf.conutStops == 1 ? 'ПЕРЕСАДКА' : obj.secondHalf.conutStops == 2 || obj.secondHalf.conutStops == 3 ? 'ПЕРЕСАДКИ' : 'ПЕРЕСАДОК'}\r\n        <br>\r\n        <span>${obj.secondHalf.conutStops ? obj.secondHalf.stopPoints : ''}</span>\r\n     </h3>\r\n    </div>\r\n  </div>\r\n  `)  \r\n}\r\n\n\n//# sourceURL=webpack://test-project-aviasales/./src/app/createTicket.js?");

/***/ }),

/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _createTicket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTicket */ \"./src/app/createTicket.js\");\n/* harmony import */ var _countTransfers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./countTransfers */ \"./src/app/countTransfers.js\");\n/* harmony import */ var _sortTickets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sortTickets */ \"./src/app/sortTickets.js\");\n/* harmony import */ var _propertiesTicket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./propertiesTicket */ \"./src/app/propertiesTicket.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst btnCheapTikets = document.querySelector('.btn_cheap-tickets');\r\nconst btnFastTikets = document.querySelector('.btn_fast-tickets'); \r\n\r\nwindow.addEventListener('load', () => {\r\n  getTickets();\r\n})\r\n\r\ndocument.querySelector('.btn-block')\r\n  .addEventListener('click', (event) => {\r\n    if (!event.target.classList.contains('btn_active')) {\r\n      btnCheapTikets.classList.toggle('btn_active');\r\n      btnFastTikets.classList.toggle('btn_active');\r\n      getTickets();\r\n    }\r\n  })\r\n\r\ndocument.querySelectorAll('.checkbox_hid')\r\n  .forEach(option => {\r\n    option.addEventListener('change', getTickets);\r\n})\r\n\r\n// function changeActiveBtn(btn1, btn2) {\r\n//   btn1.classList.add('btn_active');\r\n//   if (btn2.classList.contains('btn_active')) {\r\n//     btn2.classList.remove('btn_active');\r\n//   }\r\n// }\r\n\r\nasync function getTickets() {\r\n  const outputTikects = document.querySelectorAll('.ticket');\r\n  if (outputTikects) {\r\n    outputTikects.forEach(ticket => ticket.remove())\r\n  } \r\n\r\n  const response = await fetch('http://localhost:3000/tickets');\r\n  const data = await response.json();\r\n\r\n  if (data) { \r\n    const optionsTransfer = (0,_countTransfers__WEBPACK_IMPORTED_MODULE_2__.getOptions)();\r\n    const response = (0,_countTransfers__WEBPACK_IMPORTED_MODULE_2__.filterTickets)(data, optionsTransfer);\r\n    // const tickets = filterTickets(data, optionsTransfer);\r\n    if (document.querySelector('.btn_cheap-tickets').classList.contains('btn_active')) {\r\n      response.sort(_sortTickets__WEBPACK_IMPORTED_MODULE_3__.sortByPrice);\r\n    } else {\r\n      response.sort(_sortTickets__WEBPACK_IMPORTED_MODULE_3__.sortByTime);\r\n    }\r\n    const tickets = response.slice(0, 5);\r\n    console.log(tickets)\r\n    for (let key in tickets) {\r\n      const ticket = (0,_propertiesTicket__WEBPACK_IMPORTED_MODULE_4__.propertiesTicket)(tickets[key]); \r\n      (0,_createTicket__WEBPACK_IMPORTED_MODULE_1__.createTicket)(ticket);\r\n    }\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://test-project-aviasales/./src/app/index.js?");

/***/ }),

/***/ "./src/app/propertiesTicket.js":
/*!*************************************!*\
  !*** ./src/app/propertiesTicket.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"propertiesTicket\": () => (/* binding */ propertiesTicket)\n/* harmony export */ });\nfunction propertiesTicket(ticket) {\r\n  return {\r\n    firstHalf: {\r\n      timeWay: () => {\r\n        const time = (ticket.segments[0].duration / 60).toString().split('.')\r\n        let hours = time[0];\r\n        let minutes = time[1].slice(0, 2)\r\n        if (minutes > 59) {\r\n          let newHours = (minutes / 60).toString().split('.');\r\n          hours = +hours + +newHours[0];\r\n          minutes = newHours[1].slice(0, 2)\r\n          time.splice(0, 2, hours, minutes);\r\n        }\r\n        return time;\r\n      },\r\n      price: ticket.price.toString().slice(0, 2) +' '+ ticket.price.toString().slice(2) + ' P',\r\n      carrier: ticket.carrier,\r\n      origin: ticket.segments[0].origin,\r\n      destination: ticket.segments[0].destination,\r\n      conutStops: ticket.segments[0].stops.length,\r\n      stopPoints: ticket.segments[0].stops.join(','),\r\n      startDate: ticket.segments[0].date,\r\n      endDate: function() {\r\n        const hourPerMil = 3600000;\r\n        const minPerMil = 60000;\r\n        const way = this.timeWay()[0] * hourPerMil + this.timeWay()[1].slice(0, 2) * minPerMil;\r\n        return +Date.parse(this.startDate) + way;\r\n      }\r\n    },\r\n    secondHalf: {\r\n      timeWay: () => {\r\n        const time = (ticket.segments[1].duration / 60).toString().split('.')\r\n        let hours = time[0];\r\n        let minutes = time[1].slice(0, 2)\r\n        if (minutes > 59) {\r\n          let newHours = (minutes / 60).toString().split('.');\r\n          hours = +hours + +newHours[0];\r\n          minutes = newHours[1].slice(0, 2)\r\n          time.splice(0, 2, hours, minutes);\r\n        }\r\n        return time;\r\n        },\r\n      origin: ticket.segments[1].origin,\r\n      destination: ticket.segments[1].destination,\r\n      conutStops: ticket.segments[1].stops.length,\r\n      stopPoints: ticket.segments[1].stops.join(','),\r\n      startDate: ticket.segments[1].date,\r\n      endDate: function() {\r\n          const hourPerMil = 3600000;\r\n          const minPerMil = 60000;\r\n          const way = this.timeWay()[0] * hourPerMil + this.timeWay()[1].slice(0, 2) * minPerMil;\r\n          return +Date.parse(this.startDate) + way;\r\n      }\r\n    }\r\n  }    \r\n}\r\n\r\n// const ticket1 = {\r\n//     timeWay: () => {\r\n//       const time = (tickets[key].segments[0].duration / 60).toString().split('.')\r\n//       let hours = time[0];\r\n//       let minutes = time[1].slice(0, 2)\r\n//       if (minutes > 59) {\r\n//         let newHours = (minutes / 60).toString().split('.');\r\n//         hours = +hours + +newHours[0];\r\n//         minutes = newHours[1].slice(0, 2)\r\n//         time.splice(0, 2, hours, minutes);\r\n//       }\r\n//       return time;\r\n//     },\r\n//     price: tickets[key].price.toString().slice(0, 2) +' '+ tickets[key].price.toString().slice(2) + ' P',\r\n//     carrier: tickets[key].carrier,\r\n//     origin: tickets[key].segments[0].origin,\r\n//     destination: tickets[key].segments[0].destination,\r\n//     conutStops: tickets[key].segments[0].stops.length,\r\n//     stopPoints: tickets[key].segments[0].stops.join(','),\r\n//     startDate: tickets[key].segments[0].date,\r\n//     endDate: function() {\r\n//       const hourPerMil = 3600000;\r\n//       const minPerMil = 60000;\r\n//       const way = this.timeWay()[0] * hourPerMil + this.timeWay()[1].slice(0, 2) * minPerMil;\r\n//       return +Date.parse(this.startDate) + way;\r\n//     }\r\n//   }\r\n\r\n// const ticket2 = {\r\n//     timeWay: () => {\r\n//       const time = (tickets[key].segments[1].duration / 60).toString().split('.')\r\n//       let hours = time[0];\r\n//       let minutes = time[1].slice(0, 2)\r\n//       if (minutes > 59) {\r\n//         let newHours = (minutes / 60).toString().split('.');\r\n//         hours = +hours + +newHours[0];\r\n//         minutes = newHours[1].slice(0, 2)\r\n//         time.splice(0, 2, hours, minutes);\r\n//       }\r\n//       return time;\r\n//     },\r\n//     origin: tickets[key].segments[1].origin,\r\n//     destination: tickets[key].segments[1].destination,\r\n//     conutStops: tickets[key].segments[1].stops.length,\r\n//     stopPoints: tickets[key].segments[1].stops.join(',')\r\n//   }\n\n//# sourceURL=webpack://test-project-aviasales/./src/app/propertiesTicket.js?");

/***/ }),

/***/ "./src/app/sortTickets.js":
/*!********************************!*\
  !*** ./src/app/sortTickets.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sortByPrice\": () => (/* binding */ sortByPrice),\n/* harmony export */   \"sortByTime\": () => (/* binding */ sortByTime)\n/* harmony export */ });\nfunction sortByPrice(currentTicket, nextTicket) {\r\n   return currentTicket.price < nextTicket.price ? -1 : currentTicket.price > nextTicket.price ? 1 : 0;\r\n}\r\n\r\nfunction sortByTime(currentTicket, nextTicket) {\r\n  if ((currentTicket.segments[0].duration + currentTicket.segments[1].duration) / 2 < \r\n      (nextTicket.segments[0].duration +  nextTicket.segments[1].duration) / 2) {\r\n    return -1;\r\n  }\r\n  if ((currentTicket.segments[0].duration + currentTicket.segments[1].duration) / 2 > \r\n      (nextTicket.segments[0].duration +  nextTicket.segments[1].duration) / 2) {\r\n    return 1;\r\n  }\r\n  return 0;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://test-project-aviasales/./src/app/sortTickets.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app/index.js");
/******/ 	
/******/ })()
;