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
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _express = __webpack_require__(3);\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _routes = __webpack_require__(4);\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar port = 3000;\n\nvar MainServer = function MainServer() {\n\tvar _this = this;\n\n\t_classCallCheck(this, MainServer);\n\n\tthis._init = function () {\n\t\tvar app = (0, _express2.default)();\n\t\tapp.set('view engine', 'html');\n\t\tapp.use('/', _routes2.default);\n\t\tapp.use(_express2.default.static('public'));\n\n\t\t_this.server = app.listen(port, function () {\n\t\t\tconsole.log('server is running @ localhost:', _this.server.address().port);\n\t\t\t_this.init = true;\n\t\t});\n\t};\n\n\tthis.server = false;\n\tthis.init = false;\n\tthis._init();\n};\n\nexports.default = new MainServer();\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/Main_server.js\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/Main_server.js?");

/***/ },
/* 3 */
/***/ function(module, exports) {

	eval("module.exports = require(\"express\");\n\n/*****************\n ** WEBPACK FOOTER\n ** external \"express\"\n ** module id = 3\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%22express%22?");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _express = __webpack_require__(3);\n\nvar _express2 = _interopRequireDefault(_express);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = _express2.default.Router({ mergeParams: true });\n\nvar onGetConnectFunction = function onGetConnectFunction(req, res, next) {\n\tconsole.log('connect to client');\n\tres.statue(200);\n\tres.json('true');\n};\n\napp.route('/connect').all(function (req, res, next) {\n\tconsole.log('call connect');\n}).get(onGetConnectFunction);\n\nexports.default = app;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/node/routes.js\n ** module id = 4\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/node/routes.js?");

/***/ }
/******/ ]);