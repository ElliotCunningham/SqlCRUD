/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("__webpack_require__(1);\nmodule.exports = __webpack_require__(2);\n\n\n/*****************\n ** WEBPACK FOOTER\n ** multi node\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///multi_node?");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("module.exports = require(\"babel-polyfill\");\n\n/*****************\n ** WEBPACK FOOTER\n ** external \"babel-polyfill\"\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar MainServer = function MainServer() {\n\tvar _this = this;\n\n\t_classCallCheck(this, MainServer);\n\n\tthis._init = function () {\n\t\tif (!_this.init) {\n\t\t\tconsole.log('initialisation de app_server');\n\t\t} else {\n\t\t\tconsole.log('app is Already init');\n\t\t}\n\t};\n\n\tthis.init = false;\n\tthis._init();\n};\n\nexports.default = new MainServer();\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/Main_server.js\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/Main_server.js?");

/***/ }
/******/ ]);