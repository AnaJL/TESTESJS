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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/lib.js":
/*!*******************!*\
  !*** ./js/lib.js ***!
  \*******************/
/*! exports provided: showdata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showdata\", function() { return showdata; });\nfunction showdata(elements){\r\n    let result = ``\r\n    let cor = ''\r\n    let item = document.querySelector('.characters')\r\n    let text = document.querySelector('input[id = \"search-input\"]')\r\n    let botao = document.getElementsByClassName('.botaok')\r\n    let list = elements[\"results\"]\r\n      for(let i = 0; i<=11;i++){\r\n      if (list[i].status == 'Alive'){\r\n        cor = 'rgb(0, 197, 16);'\r\n      }\r\n      if (list[i].status == 'Dead'){\r\n        cor = 'rgb(221, 0, 0);'\r\n      }\r\n      if (list[i].status == 'unknown'){\r\n        cor = 'whitesmoke;'\r\n      }\r\n        let element =`\r\n        <div class=\"item\"  style = \"text-align: center;\"><img src=\"${list[i].image}\" alt=\"${list[i].name}\">\r\n        <p style = \"text-align: center;\">${list[i].name}</p>\r\n        <p style = \"color: ${cor};\" style = \"text-align: center;\">${list[i].status}</p>\r\n        </div>\r\n        `\r\n        result+= element\r\n    }\r\n    item.innerHTML = result\r\n    text.addEventListener('change', function(){\r\n      result = ''\r\n      for(let i = 0; i<=11;i++){\r\n        if (list[i].name.includes(text.value)){\r\n          if (list[i].status == 'Alive'){\r\n            cor = 'rgb(0, 197, 16);'\r\n          }\r\n          if (list[i].status == 'Dead'){\r\n            cor = 'rgb(221, 0, 0);'\r\n          }\r\n          if (list[i].status == 'unknown'){\r\n            cor = 'whitesmoke;'\r\n          }\r\n          let element =`\r\n          <div class=\"item\"  style = \"text-align: center;\"><img src=\"${list[i].image}\" alt=\"${list[i].name}\">\r\n          <p style = \"text-align: center;\">${list[i].name}</p>\r\n          <p style = \"color: ${cor};\" style = \"text-align: center;\">${list[i].status}</p>\r\n          </div>\r\n          `\r\n          result+= element\r\n        }}\r\n    if (result == ''){\r\n        result = '<h1>Não foi encontrado</h1>'\r\n    }\r\n     item.innerHTML = result\r\n    })}\r\n\r\n\n\n//# sourceURL=webpack:///./js/lib.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib.js */ \"./js/lib.js\");\n\r\n//API DOS PERSONAGENS\r\nlet er = ''\r\nlet item = document.querySelector('.characters')\r\nlet text = document.querySelector('input[id = \"search-input\"]')\r\nlet botao = document.getElementsByClassName('.botaok')\r\nfunction getC(link){\r\n  fetch(link)\r\n  .then(response => response.json())\r\n  .then(elements => Object(_lib_js__WEBPACK_IMPORTED_MODULE_0__[\"showdata\"])(elements))\r\n}\r\n\r\ngetC('https://rickandmortyapi.com/api/character/')\r\n\r\n\r\nlet button = document.querySelector('.but')\r\nlet form = document.querySelector('fieldset')\r\nlet nome = document.querySelector('#nome')\r\nlet email = document.querySelector('input[id = \"email\"]')\r\n\r\n\r\nfunction is_email(email){\r\n  er = /^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/; \r\n  if(!email.match(er))\r\n  {\r\n      \r\n      alert('Email Inválido')\r\n}\r\nelse{\r\n  form.innerHTML = `<br><br><br>\r\n  <h1>Obrigado(a) , ${nome.value}</h1>`\r\n}\r\n}\r\n\r\nbutton.addEventListener('click', function(){\r\n  is_email(email.value)\r\n})\r\n\r\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ })

/******/ });
