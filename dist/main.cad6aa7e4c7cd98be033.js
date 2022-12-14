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

/***/ "./src/app/createTicket.js":
/*!*********************************!*\
  !*** ./src/app/createTicket.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTicket\": () => (/* binding */ createTicket)\n/* harmony export */ });\nfunction createTicket(obj1, obj2) {\r\n  document.querySelector('.content').insertAdjacentHTML('beforeend', \r\n  `\r\n  <div class=\"ticket\">\r\n    <div class=\"ticket__price\">\r\n      <h3>${obj1.price}</h3>\r\n      <img src=\"http://pics.avs.io/99/36/${obj1.carrier}.png\" alt=\"carrier\">  \r\n    </div>\r\n    <div class=\"ticket__info\">\r\n      <h3 class=\"info\">\r\n        ${obj1.origin} - ${obj1.destination}<br>\r\n        <span>\r\n        ${new Date(obj1.startDate).getHours().toString().length == 1 ? \r\n            '0' + new Date(obj1.startDate).getHours() :\r\n            new Date(obj1.startDate).getHours()}:${new Date(obj1.startDate).getMinutes().toString().length == 1 ? \r\n            '0' + new Date(obj1.startDate).getMinutes() :\r\n            new Date(obj1.startDate).getMinutes()} -\r\n        ${new Date(obj1.endDate()).getHours().toString().length == 1 ?\r\n            '0' + new Date(obj1.endDate()).getHours() :\r\n            new Date(obj1.endDate()).getHours()}:${new Date(obj1.endDate()).getMinutes().toString().length == 1 ?\r\n            '0' + new Date(obj1.endDate()).getMinutes() :\r\n            new Date(obj1.endDate()).getMinutes()}\r\n        </span>\r\n      </h3>\r\n      <h3 class=\"info\">\r\n        В ПУТИ<br>\r\n        <span>${obj1.timeWay()[0]}ч ${obj1.timeWay()[1].slice(0, 2)}м</span>\r\n      </h3>\r\n      <h3 class=\"info\">\r\n        ${obj1.conutStops ? obj1.conutStops : 'БЕЗ'} \r\n        ${obj1.conutStops == 1 ? 'ПЕРЕСАДКА' : obj1.conutStops == 2 || obj1.conutStops == 3 ? 'ПЕРЕСАДКИ' : 'ПЕРЕСАДОК'}\r\n        <br>\r\n        <span>${obj1.conutStops ? obj1.stopPoints : ''}</span>\r\n      </h3>\r\n    </div>\r\n    <div class=\"ticket__info\">\r\n      <h3 class=\"info\">\r\n        ${obj2.origin} - ${obj2.destination}<br>\r\n        <span></span>\r\n      </h3>\r\n      <h3 class=\"info\">\r\n        В ПУТИ<br>\r\n        <span>${obj2.timeWay()[0]}ч ${obj2.timeWay()[1].slice(0, 2)}м</span>\r\n      </h3>\r\n      <h3 class=\"info\">\r\n        ${obj2.conutStops ? obj2.conutStops : 'БЕЗ'} \r\n        ${obj2.conutStops == 1 ? 'ПЕРЕСАДКА' : obj2.conutStops == 2 || obj2.conutStops == 3 ? 'ПЕРЕСАДКИ' : 'ПЕРЕСАДОК'}\r\n        <br>\r\n        <span>${obj2.conutStops ? obj2.stopPoints : ''}</span>\r\n     </h3>\r\n    </div>\r\n  </div>\r\n  `)  \r\n}\r\n\n\n//# sourceURL=webpack://test-project-aviasales/./src/app/createTicket.js?");

/***/ }),

/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _createTicket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTicket */ \"./src/app/createTicket.js\");\n\r\n\r\n\r\nconst btnCheapTikets = document.querySelector('.btn_cheap-tickets');\r\nconst btnFastTikets = document.querySelector('.btn_fast-tickets'); \r\n\r\nbtnCheapTikets.addEventListener('click', () => {\r\n  changeActiveBtn(btnCheapTikets, btnFastTikets)\r\n})\r\n\r\nbtnFastTikets.addEventListener('click', () => {\r\n    changeActiveBtn(btnFastTikets, btnCheapTikets)\r\n  })\r\n\r\nfunction changeActiveBtn(btn1, btn2) {\r\n  btn1.classList.add('btn_active');\r\n  if (btn2.classList.contains('btn_active')) {\r\n    btn2.classList.remove('btn_active');\r\n  }\r\n}\r\n\r\n// const options = {\r\n//   all: false,\r\n//   with1: false,\r\n//   with2: false,\r\n//   with3: false,\r\n//   forFast: false,\r\n// }\r\n\r\n\r\n// function getOptions() {\r\n//   const param = document.querySelectorAll('.checkbox_hid')\r\n//     if (param[0].checked) options[all] = true;\r\n//     if (param[1].checked) options[with1] = true;\r\n//     if (param[2].checked) options[with2] = true;\r\n//     if (param[3].checked) options[with3] = true;\r\n// }\r\n\r\n\r\nasync function getTickets(url) {\r\n  const response = await fetch(url);\r\n  const data = await response.json();\r\n  // return data;\r\n  console.log(data)\r\n\r\n  if (data) { \r\n    const tickets = data.sort((a, b) => a.price - b.price).slice(0, 5);\r\n    console.log(tickets)\r\n\r\n    for (let key in tickets) {\r\n      const ticket1 = {\r\n        timeWay: () => {\r\n          const time = (tickets[key].segments[0].duration / 60).toString().split('.')\r\n          let hours = time[0];\r\n          let minutes = time[1].slice(0, 2)\r\n          if (minutes > 59) {\r\n            let newHours = (minutes / 60).toString().split('.');\r\n            hours = +hours + +newHours[0];\r\n            minutes = newHours[1].slice(0, 2)\r\n            time.splice(0, 2, hours, minutes);\r\n          }\r\n          return time;\r\n        },\r\n        price: tickets[key].price.toString().slice(0, 2) +' '+ tickets[key].price.toString().slice(2) + ' P',\r\n        carrier: tickets[key].carrier,\r\n        origin: tickets[key].segments[0].origin,\r\n        destination: tickets[key].segments[0].destination,\r\n        conutStops: tickets[key].segments[0].stops.length,\r\n        stopPoints: tickets[key].segments[0].stops.join(','),\r\n        startDate: tickets[key].segments[0].date,\r\n        endDate: function() {\r\n          const hourPerMil = 3600000;\r\n          const minPerMil = 60000;\r\n          const way = this.timeWay()[0] * hourPerMil + this.timeWay()[1].slice(0, 2) * minPerMil;\r\n          return +Date.parse(this.startDate) + way;\r\n        }\r\n      }\r\n      const ticket2 = {\r\n        timeWay: () => {\r\n          const time = (tickets[key].segments[1].duration / 60).toString().split('.')\r\n          let hours = time[0];\r\n          let minutes = time[1].slice(0, 2)\r\n          if (minutes > 59) {\r\n            let newHours = (minutes / 60).toString().split('.');\r\n            hours = +hours + +newHours[0];\r\n            minutes = newHours[1].slice(0, 2)\r\n            time.splice(0, 2, hours, minutes);\r\n          }\r\n          return time;\r\n        },\r\n        origin: tickets[key].segments[1].origin,\r\n        destination: tickets[key].segments[1].destination,\r\n        conutStops: tickets[key].segments[1].stops.length,\r\n        stopPoints: tickets[key].segments[1].stops.join(',')\r\n      }\r\n      ;(0,_createTicket__WEBPACK_IMPORTED_MODULE_1__.createTicket)(ticket1, ticket2);\r\n      // document.querySelector('.content').insertAdjacentHTML('beforeend', \r\n      //   `\r\n      //   <div class=\"ticket\">\r\n      //     <div class=\"ticket__price\">\r\n      //       <h3>${ticket1.price}</h3>\r\n      //       <img src=\"http://pics.avs.io/99/36/${ticket1.carrier}.png\" alt=\"carrier\">  \r\n      //     </div>\r\n      //     <div class=\"ticket__info\">\r\n      //       <h3 class=\"info\">\r\n      //         ${ticket1.origin} - ${ticket1.destination}<br>\r\n      //         <span>\r\n      //         ${new Date(ticket1.startDate).getHours().toString().length == 1 ? \r\n      //             '0' + new Date(ticket1.startDate).getHours() :\r\n      //             new Date(ticket1.startDate).getHours()}:${new Date(ticket1.startDate).getMinutes().toString().length == 1 ? \r\n      //             '0' + new Date(ticket1.startDate).getMinutes() :\r\n      //             new Date(ticket1.startDate).getMinutes()} -\r\n      //         ${new Date(ticket1.endDate()).getHours().toString().length == 1 ?\r\n      //             '0' + new Date(ticket1.endDate()).getHours() :\r\n      //             new Date(ticket1.endDate()).getHours()}:${new Date(ticket1.endDate()).getMinutes().toString().length == 1 ?\r\n      //             '0' + new Date(ticket1.endDate()).getMinutes() :\r\n      //             new Date(ticket1.endDate()).getMinutes()}\r\n      //         </span>\r\n      //       </h3>\r\n      //       <h3 class=\"info\">\r\n      //         В ПУТИ<br>\r\n      //         <span>${ticket1.timeWay()[0]}ч ${ticket1.timeWay()[1].slice(0, 2)}м</span>\r\n      //       </h3>\r\n      //       <h3 class=\"info\">\r\n      //         ${ticket1.conutStops ? ticket1.conutStops : 'БЕЗ'} \r\n      //         ${ticket1.conutStops == 1 ? 'ПЕРЕСАДКА' : ticket1.conutStops == 2 || ticket1.conutStops == 3 ? 'ПЕРЕСАДКИ' : 'ПЕРЕСАДОК'}\r\n      //         <br>\r\n      //         <span>${ticket1.conutStops ? ticket1.stopPoints : ''}</span>\r\n      //       </h3>\r\n      //     </div>\r\n      //     <div class=\"ticket__info\">\r\n      //       <h3 class=\"info\">\r\n      //         ${ticket2.origin} - ${ticket2.destination}<br>\r\n      //         <span></span>\r\n      //       </h3>\r\n      //       <h3 class=\"info\">\r\n      //         В ПУТИ<br>\r\n      //         <span>${ticket2.timeWay()[0]}ч ${ticket2.timeWay()[1].slice(0, 2)}м</span>\r\n      //       </h3>\r\n      //       <h3 class=\"info\">\r\n      //         ${ticket2.conutStops ? ticket2.conutStops : 'БЕЗ'} \r\n      //         ${ticket2.conutStops == 1 ? 'ПЕРЕСАДКА' : ticket2.conutStops == 2 || ticket2.conutStops == 3 ? 'ПЕРЕСАДКИ' : 'ПЕРЕСАДОК'}\r\n      //         <br>\r\n      //         <span>${ticket2.conutStops ? ticket2.stopPoints : ''}</span>\r\n      //      </h3>\r\n      //     </div>\r\n      //   </div>\r\n      // `)  \r\n    }\r\n  }\r\n}\r\n\r\ngetTickets('http://localhost:3000/tickets')\r\n\r\n\r\n\n\n//# sourceURL=webpack://test-project-aviasales/./src/app/index.js?");

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