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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "./dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _queEsCore = __webpack_require__(1);

var _queEsCore2 = _interopRequireDefault(_queEsCore);

var _makeVideo = __webpack_require__(2);

var _makeVideo2 = _interopRequireDefault(_makeVideo);

var _renderToDom = __webpack_require__(3);

var _renderToDom2 = _interopRequireDefault(_renderToDom);

var _family = __webpack_require__(4);

var _family2 = _interopRequireDefault(_family);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(5);
// import platziImg from '../img/platzi.png';
// import makeImage from "./make-image.js";
// import { firstMessage, delayedMessage } from "./message.js";


// document.write(`Este es un mensaje desde: ${firstMessage}`);
document.write('Este es un mensaje desde: Hola Mundo');
// delayedMessage();
console.log("Hola Mundo desde webpack external");
console.log(_family2.default);

// makeImage(platziImg);
(0, _makeVideo2.default)(_queEsCore2.default);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '\u0000' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function makeVideo(vido) {
    var video = document.createElement('video');
    video.setAttribute('src', vido);
    video.setAttribute('width', 480);
    video.setAttribute('autoplay', true);
    video.setAttribute('controls', true);
    video.setAttribute('class', 'm-10');
    document.body.append(video);
}

exports.default = makeVideo;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function renderToDom(element) {
    document.body.append(element);
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = {"family":[{"name":"Isabel","lastname":"Jiménez"},{"name":"Sandra","lastname":"Jiménez"},{"name":"Sender","lastname":"Jiménez"},{"name":"Johana","lastname":"Jiménez"},{"name":"Heilyn","lastname":"Jiménez"},{"name":"Valentina","lastname":"Restrepo"},{"name":"Kevin","lastname":"Restrepo"},{"name":"Arnold","lastname":"Restrepo"}]}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);