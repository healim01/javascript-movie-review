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

/***/ "./node_modules/css-loader/dist/cjs.js!./templates/common.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./templates/common.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./search_button.png */ \"./templates/search_button.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box !important;\\n}\\n\\nbody {\\n  font-size: 14px;\\n  background-color: #222222;\\n  color: #fff;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\nbutton {\\n  cursor: pointer;\\n}\\n\\n#app {\\n  padding-bottom: 48px;\\n}\\n\\n*:focus {\\n  outline: none;\\n}\\n.item-view,\\n.skeleton-view .item-test {\\n  width: 100%;\\n}\\n\\n.item-view,\\n.skeleton-view {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  width: 1200px;\\n  margin: 0 auto;\\n}\\n\\n.item-view h2,\\n.skeleton-view h2 {\\n  font-size: 2rem;\\n  font-weight: bold;\\n  user-select: none;\\n}\\n\\n/* https://andrew.hedges.name/experiments/aspect_ratio/ */\\n\\n.item-list {\\n  display: grid;\\n  margin: 48px 0;\\n  grid-template-columns: repeat(4, 180px);\\n  grid-column-gap: 160px;\\n  grid-row-gap: 48px;\\n}\\n.item-list.no-item-list {\\n  display: block;\\n  li {\\n    font-size: 24px;\\n    text-align: center;\\n  }\\n}\\n.item-card {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.item-thumbnail {\\n  border-radius: 8px;\\n  width: 180px;\\n  height: 270px;\\n  background-size: contain;\\n}\\n\\n.item-title {\\n  margin-top: 16px;\\n  font-size: 1.2rem;\\n  font-weight: bold;\\n}\\n\\n.item-score {\\n  margin-top: 16px;\\n  font-size: 1.2rem;\\n}\\n\\n.item-score::after {\\n  margin-left: 8px;\\n}\\n.full-width {\\n  width: 100%;\\n}\\n\\n.last-item {\\n  margin-top: 48px;\\n}\\n\\nbutton.btn {\\n  border: 0;\\n  border-radius: 8px;\\n  height: 30px;\\n  color: #fff;\\n}\\n\\nbutton.primary {\\n  background: #f33f3f;\\n}\\n\\n.more-button {\\n  display: none;\\n}\\n\\n.more-button.open {\\n  display: block;\\n  margin: 0 auto;\\n}\\n/*skeleton*/\\n.skeleton-view {\\n  display: none;\\n}\\n\\n.skeleton-view.on {\\n  display: grid;\\n}\\n.item-card .skeleton {\\n  background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);\\n  background-size: 400%;\\n  animation: skeleton-animation 5s infinite ease-out;\\n  border-radius: 8px;\\n}\\n\\n.item-title.skeleton::after,\\n.item-score.skeleton::after {\\n  font-size: 0;\\n  content: \\\"loading\\\";\\n}\\n\\n.error-view {\\n  display: none;\\n}\\n.error-view.on {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100%;\\n  height: 100vh;\\n  font-size: 1.2rem;\\n  font-weight: bold;\\n}\\n\\n@keyframes skeleton-animation {\\n  0% {\\n    background-position: 0% 50%;\\n  }\\n  50% {\\n    background-position: 100% 50%;\\n  }\\n  100% {\\n    background-position: 0% 50%;\\n  }\\n}\\nheader {\\n  width: 100%;\\n  min-width: 1200px;\\n  height: 72px;\\n  background-color: #222;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 0 20px;\\n  border-bottom: 1px solid white;\\n  margin-bottom: 48px;\\n}\\n\\nheader h1 {\\n  cursor: pointer;\\n  user-select: none;\\n  font-size: 2rem;\\n  font-weight: bold;\\n  letter-spacing: -0.1rem;\\n  color: #f33f3f;\\n}\\n\\nheader > .search-box {\\n  background: #fff;\\n  padding: 8px;\\n  border-radius: 4px;\\n}\\n\\nheader .search-box > input {\\n  border: 0;\\n}\\n\\nheader .search-box > .search-button {\\n  width: 14px;\\n  border: 0;\\n  text-indent: -1000rem;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") transparent no-repeat 0 1px;\\n  background-size: contain;\\n}\\n\\n#no-item {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-movie-review/./templates/common.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./templates/reset.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./templates/reset.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* http://meyerweb.com/eric/tools/css/reset/\\n   v2.0 | 20110126\\n   License: none (public domain)\\n*/\\n\\nhtml,\\nbody,\\ndiv,\\nspan,\\napplet,\\nobject,\\niframe,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nblockquote,\\npre,\\na,\\nabbr,\\nacronym,\\naddress,\\nbig,\\ncite,\\ncode,\\ndel,\\ndfn,\\nem,\\nimg,\\nins,\\nkbd,\\nq,\\ns,\\nsamp,\\nsmall,\\nstrike,\\nstrong,\\nsub,\\nsup,\\ntt,\\nvar,\\nb,\\nu,\\ni,\\ncenter,\\ndl,\\ndt,\\ndd,\\nol,\\nul,\\nli,\\nfieldset,\\nform,\\nlabel,\\nlegend,\\ntable,\\ncaption,\\ntbody,\\ntfoot,\\nthead,\\ntr,\\nth,\\ntd,\\narticle,\\naside,\\ncanvas,\\ndetails,\\nembed,\\nfigure,\\nfigcaption,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\noutput,\\nruby,\\nsection,\\nsummary,\\ntime,\\nmark,\\naudio,\\nvideo {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n}\\n/* HTML5 display-role reset for older browsers */\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\nsection {\\n  display: block;\\n}\\nbody {\\n  line-height: 1;\\n}\\nol,\\nul {\\n  list-style: none;\\n}\\nblockquote,\\nq {\\n  quotes: none;\\n}\\nblockquote:before,\\nblockquote:after,\\nq:before,\\nq:after {\\n  content: \\\"\\\";\\n  content: none;\\n}\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-movie-review/./templates/reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./templates/common.css":
/*!******************************!*\
  !*** ./templates/common.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./common.css */ \"./node_modules/css-loader/dist/cjs.js!./templates/common.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-movie-review/./templates/common.css?");

/***/ }),

/***/ "./templates/reset.css":
/*!*****************************!*\
  !*** ./templates/reset.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./templates/reset.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-movie-review/./templates/reset.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_ErrorView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ErrorView */ \"./src/components/ErrorView.ts\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header */ \"./src/components/Header.ts\");\n/* harmony import */ var _components_ItemView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ItemView */ \"./src/components/ItemView.ts\");\n/* harmony import */ var _components_SkeletonList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/SkeletonList */ \"./src/components/SkeletonList.ts\");\n/* harmony import */ var _model_DataStateStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/DataStateStore */ \"./src/model/DataStateStore.ts\");\n/* harmony import */ var _service_handleSkeletonAndAPI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/handleSkeletonAndAPI */ \"./src/service/handleSkeletonAndAPI.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\n\nfunction App() {\n    return __awaiter(this, void 0, void 0, function* () {\n        const $app = document.querySelector(\"#app\");\n        $app === null || $app === void 0 ? void 0 : $app.prepend((0,_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n        (0,_components_SkeletonList__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n        (0,_components_ErrorView__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        yield (0,_service_handleSkeletonAndAPI__WEBPACK_IMPORTED_MODULE_5__.handleGetPopularMovieData)();\n        (0,_components_ItemView__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"지금 인기 있는 영화\", _model_DataStateStore__WEBPACK_IMPORTED_MODULE_4__[\"default\"].movieData.movieList, \"popular\");\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/app.ts?");

/***/ }),

/***/ "./src/components/ErrorView.ts":
/*!*************************************!*\
  !*** ./src/components/ErrorView.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ErrorView = () => {\n    const $main = document.querySelector(\"main\");\n    const $errorDiv = document.createElement(\"div\");\n    $errorDiv.classList.add(\"error-view\");\n    $errorDiv.textContent = \"서버와의 연결이 불안정합니다. 다시 시도해주세요.\";\n    $main === null || $main === void 0 ? void 0 : $main.appendChild($errorDiv);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorView);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/ErrorView.ts?");

/***/ }),

/***/ "./src/components/Header.ts":
/*!**********************************!*\
  !*** ./src/components/Header.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _templates_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../templates/logo.png */ \"./templates/logo.png\");\n/* harmony import */ var _movieList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movieList */ \"./src/movieList.ts\");\n/* harmony import */ var _utils_createElementWithAttribute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/createElementWithAttribute */ \"./src/utils/createElementWithAttribute.ts\");\n/* harmony import */ var _ItemView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ItemView */ \"./src/components/ItemView.ts\");\n/* harmony import */ var _SearchBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SearchBox */ \"./src/components/SearchBox.ts\");\n\n\n\n\n\nconst handleClickToRefresh = () => {\n    const $itemView = document.querySelector(\".item-view\");\n    $itemView === null || $itemView === void 0 ? void 0 : $itemView.remove();\n    (0,_ItemView__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"지금 인기 있는 영화\", _movieList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \"popular\");\n};\nconst Logo = () => {\n    const logoImgAttribute = {\n        src: _templates_logo_png__WEBPACK_IMPORTED_MODULE_0__,\n        alt: \"MovieList 로고\",\n    };\n    const $logo = (0,_utils_createElementWithAttribute__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"img\", logoImgAttribute);\n    $logo.addEventListener(\"click\", handleClickToRefresh);\n    return $logo;\n};\nconst Header = () => {\n    const $header = document.createElement(\"header\");\n    const $h1 = document.createElement(\"h1\");\n    const $logo = Logo();\n    $h1.appendChild($logo);\n    $header.appendChild($h1);\n    $header.appendChild((0,_SearchBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n    return $header;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/Header.ts?");

/***/ }),

/***/ "./src/components/ItemCard.ts":
/*!************************************!*\
  !*** ./src/components/ItemCard.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _templates_star_filled_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../templates/star_filled.png */ \"./templates/star_filled.png\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./src/config.ts\");\n/* harmony import */ var _utils_createElementWithAttribute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/createElementWithAttribute */ \"./src/utils/createElementWithAttribute.ts\");\n\n\n\nconst posterSize = \"w500\";\nconst MovieImg = (movie) => (0,_utils_createElementWithAttribute__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"img\", {\n    class: \"item-thumbnail\",\n    src: _config__WEBPACK_IMPORTED_MODULE_1__.IMAGE_URL + posterSize + movie.poster_path,\n    loading: \"lazy\",\n    alt: movie.title,\n});\nconst MovieTitle = (movie) => {\n    const $title = (0,_utils_createElementWithAttribute__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"p\", { class: \"item-title\" });\n    $title.textContent = movie.title;\n    return $title;\n};\nconst Score = (movie) => {\n    const $score = (0,_utils_createElementWithAttribute__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"p\", { class: \"item-score\" });\n    const $star = (0,_utils_createElementWithAttribute__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"img\", {\n        src: _templates_star_filled_png__WEBPACK_IMPORTED_MODULE_0__,\n        alt: \"별점\",\n    });\n    $score.appendChild($star);\n    $score.appendChild(document.createTextNode(movie.vote_average.toString()));\n    return $score;\n};\nconst Card = (movie) => {\n    const $card = (0,_utils_createElementWithAttribute__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"div\", { class: \"item-card\" });\n    const $img = MovieImg(movie);\n    const $title = MovieTitle(movie);\n    const $score = Score(movie);\n    $card.appendChild($img);\n    $card.appendChild($title);\n    $card.appendChild($score);\n    return $card;\n};\nconst ItemCard = (movie) => {\n    const $li = document.createElement(\"li\");\n    const $a = document.createElement(\"a\");\n    const $card = Card(movie);\n    $a.appendChild($card);\n    $li.appendChild($a);\n    return $li;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemCard);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/ItemCard.ts?");

/***/ }),

/***/ "./src/components/ItemList.ts":
/*!************************************!*\
  !*** ./src/components/ItemList.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_createElementWithAttribute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElementWithAttribute */ \"./src/utils/createElementWithAttribute.ts\");\n/* harmony import */ var _ItemCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemCard */ \"./src/components/ItemCard.ts\");\n\n\nconst NoItem = () => {\n    const $noItem = document.createElement(\"li\");\n    $noItem.textContent = \"검색 결과가 없습니다.\";\n    return $noItem;\n};\nconst ItemList = (movieList) => {\n    const $ul = (0,_utils_createElementWithAttribute__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"ul\", {\n        class: \"item-list\",\n    });\n    if (!movieList || movieList.length === 0) {\n        $ul.classList.add(\"no-item-list\");\n        $ul.appendChild(NoItem());\n    }\n    else\n        movieList.map((movie) => $ul.appendChild((0,_ItemCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(movie)));\n    return $ul;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemList);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/ItemList.ts?");

/***/ }),

/***/ "./src/components/ItemView.ts":
/*!************************************!*\
  !*** ./src/components/ItemView.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_createElementWithAttribute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElementWithAttribute */ \"./src/utils/createElementWithAttribute.ts\");\n/* harmony import */ var _ItemList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemList */ \"./src/components/ItemList.ts\");\n/* harmony import */ var _MoreButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MoreButton */ \"./src/components/MoreButton.ts\");\n/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Title */ \"./src/components/Title.ts\");\n\n\n\n\nconst makeSection = (titleText, movieList) => {\n    const $section = (0,_utils_createElementWithAttribute__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"section\", {\n        class: \"item-view\",\n    });\n    $section.appendChild((0,_Title__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(titleText));\n    $section.appendChild((0,_ItemList__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(movieList));\n    return $section;\n};\nconst ItemView = (titleText, movieList, listType) => {\n    const $main = document.querySelector(\"main\");\n    const $section = makeSection(titleText, movieList);\n    $main === null || $main === void 0 ? void 0 : $main.appendChild($section);\n    (0,_MoreButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(listType);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemView);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/ItemView.ts?");

/***/ }),

/***/ "./src/components/MoreButton.ts":
/*!**************************************!*\
  !*** ./src/components/MoreButton.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _model_DataStateStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/DataStateStore */ \"./src/model/DataStateStore.ts\");\n/* harmony import */ var _service_handleSkeletonAndAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/handleSkeletonAndAPI */ \"./src/service/handleSkeletonAndAPI.ts\");\n/* harmony import */ var _utils_createElementWithAttribute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/createElementWithAttribute */ \"./src/utils/createElementWithAttribute.ts\");\n/* harmony import */ var _utils_debouneFunc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/debouneFunc */ \"./src/utils/debouneFunc.ts\");\n/* harmony import */ var _utils_preventXSS__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/preventXSS */ \"./src/utils/preventXSS.ts\");\n/* harmony import */ var _ItemList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ItemList */ \"./src/components/ItemList.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\n\nconst changeMoreButtonState = (event, isShowMoreButton) => {\n    const { target } = event;\n    if (target instanceof HTMLButtonElement) {\n        target.classList.toggle(\"open\", isShowMoreButton);\n    }\n};\nconst addItemsToMovieList = (totalMovieList) => {\n    var _a;\n    const $itemList = document.querySelector(\".item-view .item-list\");\n    if (!$itemList)\n        return;\n    const $newItemList = (0,_ItemList__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(totalMovieList);\n    (_a = $itemList.parentElement) === null || _a === void 0 ? void 0 : _a.replaceChild($newItemList, $itemList);\n};\nconst getSearchInputValue = () => {\n    const $searcInput = document.querySelector(\"#search-input\");\n    if (!($searcInput instanceof HTMLInputElement)) {\n        return undefined;\n    }\n    return (0,_utils_preventXSS__WEBPACK_IMPORTED_MODULE_4__[\"default\"])($searcInput.value);\n};\nconst getSearchMovieData = () => __awaiter(void 0, void 0, void 0, function* () {\n    const title = getSearchInputValue();\n    if (!title)\n        return;\n    yield (0,_service_handleSkeletonAndAPI__WEBPACK_IMPORTED_MODULE_1__.handleGetSearchMovieData)(false, title);\n});\nconst hanldeMovieData = (event, listType) => __awaiter(void 0, void 0, void 0, function* () {\n    if (listType === \"popular\") {\n        yield (0,_service_handleSkeletonAndAPI__WEBPACK_IMPORTED_MODULE_1__.handleGetPopularMovieData)();\n    }\n    else {\n        yield getSearchMovieData();\n    }\n    const previousScrollPosition = window.scrollY;\n    const { movieList, isShowMoreButton } = _model_DataStateStore__WEBPACK_IMPORTED_MODULE_0__[\"default\"].movieData;\n    addItemsToMovieList(movieList);\n    changeMoreButtonState(event, isShowMoreButton);\n    window.scrollTo(0, previousScrollPosition);\n});\nconst handleClickMoreButton = (event, listType) => __awaiter(void 0, void 0, void 0, function* () {\n    event.stopPropagation();\n    (0,_utils_debouneFunc__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(() => hanldeMovieData(event, listType));\n});\nconst MoreButton = (listType) => {\n    var _a;\n    const $moreButton = (0,_utils_createElementWithAttribute__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"button\", {\n        id: \"more-button\",\n        class: \"btn primary full-width more-button open\",\n    });\n    $moreButton.textContent = \"더 보기\";\n    (_a = document.querySelector(\".item-view\")) === null || _a === void 0 ? void 0 : _a.appendChild($moreButton);\n    $moreButton.addEventListener(\"click\", (event) => handleClickMoreButton(event, listType));\n    return $moreButton;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoreButton);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MoreButton.ts?");

/***/ }),

/***/ "./src/components/SearchBox.ts":
/*!*************************************!*\
  !*** ./src/components/SearchBox.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _model_DataStateStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/DataStateStore */ \"./src/model/DataStateStore.ts\");\n/* harmony import */ var _service_handleSkeletonAndAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/handleSkeletonAndAPI */ \"./src/service/handleSkeletonAndAPI.ts\");\n/* harmony import */ var _utils_createElementWithAttribute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/createElementWithAttribute */ \"./src/utils/createElementWithAttribute.ts\");\n/* harmony import */ var _utils_debouneFunc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/debouneFunc */ \"./src/utils/debouneFunc.ts\");\n/* harmony import */ var _utils_preventXSS__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/preventXSS */ \"./src/utils/preventXSS.ts\");\n/* harmony import */ var _ItemView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ItemView */ \"./src/components/ItemView.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\n\nconst searchMovie = () => __awaiter(void 0, void 0, void 0, function* () {\n    const $searchInput = document.querySelector(\"#search-input\");\n    if (!($searchInput instanceof HTMLInputElement))\n        return;\n    const title = (0,_utils_preventXSS__WEBPACK_IMPORTED_MODULE_4__[\"default\"])($searchInput.value);\n    yield (0,_service_handleSkeletonAndAPI__WEBPACK_IMPORTED_MODULE_1__.handleGetSearchMovieData)(true, title);\n    const $itemView = document.querySelector(\".item-view\");\n    $itemView === null || $itemView === void 0 ? void 0 : $itemView.remove();\n    (0,_ItemView__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(`\"${title}\" 검색 결과`, _model_DataStateStore__WEBPACK_IMPORTED_MODULE_0__[\"default\"].movieData.movieList, \"search\");\n});\nconst handleInputKeydown = (event) => {\n    const keyCode = event.keyCode || event.which;\n    const { target } = event;\n    if (!(target instanceof HTMLInputElement))\n        return;\n    if (keyCode === 13) {\n        (0,_utils_debouneFunc__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(() => searchMovie());\n    }\n};\nconst Input = () => {\n    const $input = (0,_utils_createElementWithAttribute__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"input\", {\n        id: \"search-input\",\n        type: \"text\",\n        placeholder: \"검색\",\n    });\n    if ($input instanceof HTMLInputElement) {\n        $input.addEventListener(\"keydown\", handleInputKeydown);\n    }\n    return $input;\n};\nconst Button = () => {\n    const $button = (0,_utils_createElementWithAttribute__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"button\", {\n        class: \"search-button\",\n    });\n    $button.textContent = \"검색\";\n    $button.addEventListener(\"click\", (event) => {\n        event.stopPropagation();\n        (0,_utils_debouneFunc__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(() => searchMovie());\n    });\n    return $button;\n};\nconst SearchBox = () => {\n    const $searchBox = (0,_utils_createElementWithAttribute__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"div\", {\n        class: \"search-box\",\n    });\n    $searchBox.appendChild(Input());\n    $searchBox.appendChild(Button());\n    return $searchBox;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBox);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/SearchBox.ts?");

/***/ }),

/***/ "./src/components/SkeletonList.ts":
/*!****************************************!*\
  !*** ./src/components/SkeletonList.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_createElementWithAttribute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElementWithAttribute */ \"./src/utils/createElementWithAttribute.ts\");\n\nconst SkeletonCard = () => {\n    const $card = (0,_utils_createElementWithAttribute__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", { class: \"item-card\" });\n    $card.appendChild((0,_utils_createElementWithAttribute__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", {\n        class: \"item-thumbnail skeleton\",\n    }));\n    $card.appendChild((0,_utils_createElementWithAttribute__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", {\n        class: \"item-title skeleton\",\n    }));\n    $card.appendChild((0,_utils_createElementWithAttribute__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", {\n        class: \"item-score skeleton\",\n    }));\n    return $card;\n};\nconst Skeleton = () => {\n    const $skeleton = document.createElement(\"li\");\n    const $card = SkeletonCard();\n    $skeleton.appendChild($card);\n    return $skeleton;\n};\nconst SkeletonList = () => {\n    const $main = document.querySelector(\"main\");\n    const $section = (0,_utils_createElementWithAttribute__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"section\", {\n        class: \"skeleton-view\",\n    });\n    const $title = document.createElement(\"h2\");\n    $title.textContent = \"Loading...\";\n    const $ul = (0,_utils_createElementWithAttribute__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"ul\", {\n        class: \"item-list skeleton-list\",\n    });\n    Array.from({ length: 8 }).forEach(() => {\n        $ul.appendChild(Skeleton());\n    });\n    $section.appendChild($title);\n    $section.appendChild($ul);\n    $main === null || $main === void 0 ? void 0 : $main.appendChild($section);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkeletonList);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/SkeletonList.ts?");

/***/ }),

/***/ "./src/components/Title.ts":
/*!*********************************!*\
  !*** ./src/components/Title.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Title = (text) => {\n    const $title = document.createElement(\"h2\");\n    $title.textContent = text;\n    return $title;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/Title.ts?");

/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ACCESS_TOKEN\": () => (/* binding */ ACCESS_TOKEN),\n/* harmony export */   \"API_KEY\": () => (/* binding */ API_KEY),\n/* harmony export */   \"BASE_URL\": () => (/* binding */ BASE_URL),\n/* harmony export */   \"IMAGE_URL\": () => (/* binding */ IMAGE_URL),\n/* harmony export */   \"endpoint\": () => (/* binding */ endpoint),\n/* harmony export */   \"options\": () => (/* binding */ options)\n/* harmony export */ });\nconst API_KEY = \"aa74e05b52531d082b5fbdff12e609ef\";\nconst ACCESS_TOKEN = \"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTc0ZTA1YjUyNTMxZDA4MmI1ZmJkZmYxMmU2MDllZiIsInN1YiI6IjY1ZjcwODY3NTkwN2RlMDE3Y2U2ZTdjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eNcDSIvNHHZJPmbhf3G9QXiqQAsmlaZBL0_xSZWWNFk\";\nconst BASE_URL = \"https://api.themoviedb.org/3\";\nconst IMAGE_URL = \"https://image.tmdb.org/t/p/\";\nconst options = {\n    method: \"GET\",\n    headers: {\n        accept: \"application/json\",\n        Authorization: `Bearer ${ACCESS_TOKEN}`,\n    },\n};\nconst endpoint = {\n    popularMoive: (page) => `movie/popular?language=ko&page=${page}`,\n    searchMovie: (title, page) => `search/movie?query=${title}}&include_adult=false&language=ko&page=${page}`,\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/config.ts?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _templates_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/reset.css */ \"./templates/reset.css\");\n/* harmony import */ var _templates_common_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/common.css */ \"./templates/common.css\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ \"./src/app.ts\");\n\n\n\n(0,_app__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/index.js?");

/***/ }),

/***/ "./src/model/APIClient.ts":
/*!********************************!*\
  !*** ./src/model/APIClient.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/config.ts\");\n/* harmony import */ var _DataStateStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataStateStore */ \"./src/model/DataStateStore.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\n};\nvar __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar _APIClient_currentPage;\n\n\nclass APIClient {\n    constructor() {\n        _APIClient_currentPage.set(this, 1);\n    }\n    getPopularMovieData(isResetCurrentPage) {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (isResetCurrentPage)\n                __classPrivateFieldSet(this, _APIClient_currentPage, 1, \"f\");\n            else\n                __classPrivateFieldSet(this, _APIClient_currentPage, __classPrivateFieldGet(this, _APIClient_currentPage, \"f\") + 1, \"f\");\n            const data = yield this.fetchPopuplarMovie();\n            const isShowMoreButton = data.page < data.total_pages;\n            _DataStateStore__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTotalMovieData({ movieData: data.results, isShowMoreButton }, isResetCurrentPage);\n        });\n    }\n    fetchPopuplarMovie() {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const response = yield fetch(`${_config__WEBPACK_IMPORTED_MODULE_0__.BASE_URL}/${_config__WEBPACK_IMPORTED_MODULE_0__.endpoint.popularMoive(__classPrivateFieldGet(this, _APIClient_currentPage, \"f\"))}`, _config__WEBPACK_IMPORTED_MODULE_0__.options);\n                return yield response.json();\n            }\n            catch (error) {\n                console.error(\"Error fetching data:\", error);\n                return error;\n            }\n        });\n    }\n    getSearchMovieData(isResetCurrentPage, title) {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (isResetCurrentPage)\n                __classPrivateFieldSet(this, _APIClient_currentPage, 1, \"f\");\n            else\n                __classPrivateFieldSet(this, _APIClient_currentPage, __classPrivateFieldGet(this, _APIClient_currentPage, \"f\") + 1, \"f\");\n            const data = yield this.fetchSearchMovie(title);\n            const isShowMoreButton = data.page < data.total_pages;\n            _DataStateStore__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTotalMovieData({ movieData: data.results, isShowMoreButton }, isResetCurrentPage);\n        });\n    }\n    fetchSearchMovie(title) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const response = yield fetch(`${_config__WEBPACK_IMPORTED_MODULE_0__.BASE_URL}/${_config__WEBPACK_IMPORTED_MODULE_0__.endpoint.searchMovie(title, __classPrivateFieldGet(this, _APIClient_currentPage, \"f\"))}`, _config__WEBPACK_IMPORTED_MODULE_0__.options);\n                return yield response.json();\n            }\n            catch (error) {\n                console.error(\"Error fetching data:\", error);\n                return error;\n            }\n        });\n    }\n}\n_APIClient_currentPage = new WeakMap();\nconst apiClient = new APIClient();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiClient);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/model/APIClient.ts?");

/***/ }),

/***/ "./src/model/DataStateStore.ts":
/*!*************************************!*\
  !*** ./src/model/DataStateStore.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\n};\nvar _DataStateStore_movieList, _DataStateStore_isShowMorButton;\nclass DataStateStore {\n    constructor() {\n        _DataStateStore_movieList.set(this, void 0);\n        _DataStateStore_isShowMorButton.set(this, true);\n    }\n    getTotalMovieData({ movieData, isShowMoreButton }, resetMovieList) {\n        if (!__classPrivateFieldGet(this, _DataStateStore_movieList, \"f\") || resetMovieList)\n            __classPrivateFieldSet(this, _DataStateStore_movieList, movieData, \"f\");\n        else\n            __classPrivateFieldSet(this, _DataStateStore_movieList, __classPrivateFieldGet(this, _DataStateStore_movieList, \"f\").concat(movieData), \"f\");\n        __classPrivateFieldSet(this, _DataStateStore_isShowMorButton, isShowMoreButton, \"f\");\n    }\n    get movieData() {\n        return {\n            movieList: JSON.parse(JSON.stringify(__classPrivateFieldGet(this, _DataStateStore_movieList, \"f\"))),\n            isShowMoreButton: __classPrivateFieldGet(this, _DataStateStore_isShowMorButton, \"f\"),\n        };\n    }\n}\n_DataStateStore_movieList = new WeakMap(), _DataStateStore_isShowMorButton = new WeakMap();\nconst dataStateStore = new DataStateStore();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataStateStore);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/model/DataStateStore.ts?");

/***/ }),

/***/ "./src/movieList.ts":
/*!**************************!*\
  !*** ./src/movieList.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dummyMovieList = [\n    {\n        adult: false,\n        backdrop_path: \"/deLWkOLZmBNkm8p16igfapQyqeq.jpg\",\n        genre_ids: [14, 12, 28],\n        id: 763215,\n        original_language: \"en\",\n        original_title: \"Damsel\",\n        overview: \"매력적인 왕자와 결혼하게 된 젊은 여성. 그런데 신부가 아니라 불을 내뿜는 용에게 바칠 제물이 되면서, 꿈꿔왔던 결혼이 순식간에 치열한 생존 싸움으로 변한다.\",\n        popularity: 3001.85,\n        poster_path: \"/1Ku5QqFIsn9UQaD72hdlJVeIC57.jpg\",\n        release_date: \"2024-03-08\",\n        title: \"총총\",\n        video: false,\n        vote_average: 7.266,\n        vote_count: 858,\n    },\n    {\n        adult: false,\n        backdrop_path: \"/gJL5kp5FMopB2sN4WZYnNT5uO0u.jpg\",\n        genre_ids: [28, 12, 16, 35, 10751],\n        id: 1011985,\n        original_language: \"en\",\n        original_title: \"Kung Fu Panda 4\",\n        overview: \"마침내 내면의 평화… 냉면의 평화…가 찾아왔다고 믿는 용의 전사 ‘포’ 이젠 평화의 계곡의 영적 지도자가 되고, 자신을 대신할 후계자를 찾아야만 한다. “이제 용의 전사는 그만둬야 해요?” 용의 전사로의 모습이 익숙해지고 새로운 성장을 하기보다 지금 이대로가 좋은 ‘포’ 하지만 모든 쿵푸 마스터들의 능력을 그대로 복제하는 강력한 빌런 ‘카멜레온’이 나타나고 그녀를 막기 위해 정체를 알 수 없는 쿵푸 고수 ‘젠’과 함께 모험을 떠나게 되는데… 포는 가장 강력한 빌런과 자기 자신마저 뛰어넘고 진정한 변화를 할 수 있을까?\",\n        popularity: 3781.812,\n        poster_path: \"/1ZNOOMmILNUzVYbzG1j7GYb5bEV.jpg\",\n        release_date: \"2024-03-02\",\n        title: \"쿵푸팬더 4\",\n        video: false,\n        vote_average: 6.911,\n        vote_count: 157,\n    },\n    {\n        adult: false,\n        backdrop_path: \"/xvk5AhfhgQcTuaCQyq3XqAnhEma.jpg\",\n        genre_ids: [28, 12, 35],\n        id: 848538,\n        original_language: \"en\",\n        original_title: \"Argylle\",\n        overview: \"소설 내용이 현실 속 악당 스파이 조직의 활동을 그대로 묘사하자, 소심한 첩보 소설가 엘리 콘웨이와 반려 고양이는 그 무엇도, 그 누구도 믿을 수 없는 현실 스파이의 세계에 휘말리게 된다.\",\n        popularity: 1674.191,\n        poster_path: \"/hItxa5VfoMaMNFFUpmoipr0blAf.jpg\",\n        release_date: \"2024-01-31\",\n        title: \"아가일\",\n        video: false,\n        vote_average: 6.142,\n        vote_count: 604,\n    },\n    {\n        adult: false,\n        backdrop_path: \"/mDeUmPe4MF35WWlAqj4QFX5UauJ.jpg\",\n        genre_ids: [28, 27, 53],\n        id: 1096197,\n        original_language: \"pt\",\n        original_title: \"No Way Up\",\n        overview: \"\",\n        popularity: 1709.062,\n        poster_path: \"/ktxq0LYgl41I2DUn49TYIaS9dZR.jpg\",\n        release_date: \"2024-01-18\",\n        title: \"No Way Up\",\n        video: false,\n        vote_average: 6.073,\n        vote_count: 239,\n    },\n    {\n        adult: false,\n        backdrop_path: \"/cu5Qk2QHxOyyMrD3Bq93DxgmJer.jpg\",\n        genre_ids: [28, 80],\n        id: 1046090,\n        original_language: \"zh\",\n        original_title: \"周處除三害\",\n        overview: \"자신이 대만의 3대 지명 수배자 중 세 번째라는 사실을 알게 된 야심 가득한 범죄자. 도피 행각을 벌이던 그가 첫 번째와 두 번째 수배자를 제거하고자 한다.\",\n        popularity: 1407.442,\n        poster_path: \"/eNvuf4PHepy0nlXfludjGCJGG59.jpg\",\n        release_date: \"2023-10-06\",\n        title: \"돼지와 뱀과 비둘기\",\n        video: false,\n        vote_average: 7.557,\n        vote_count: 87,\n    },\n    {\n        adult: false,\n        backdrop_path: \"/oFAukXiMPrwLpbulGmB5suEZlrm.jpg\",\n        genre_ids: [28, 12, 878, 14, 18],\n        id: 624091,\n        original_language: \"id\",\n        original_title: \"Sri Asih\",\n        overview: \"화산 폭발로 인해 태어나자마자 친부모와 헤어진 알라나는 분노를 주체할 수 없다. 그녀를 입양한 부잣집 여인은 그녀를 보통 사람으로 키우려고 하지만 그녀는 성장할수록 자신이 보통 사람이 아님을 알게 된다. 그녀가 분노를 주체할 수 없는 순간 그녀는 인류에게 축복이 될 수도 재앙이 될 수도 있는 존재였던 것이다.\",\n        popularity: 1704.084,\n        poster_path: \"/lMZWF6Bm8MkFHjL9PHgUzHuuYfi.jpg\",\n        release_date: \"2022-11-17\",\n        title: \"스리 아시\",\n        video: false,\n        vote_average: 6.3,\n        vote_count: 26,\n    },\n    {\n        adult: false,\n        backdrop_path: \"/47olX0FCvUCfAqlp8cK0O5fKLav.jpg\",\n        genre_ids: [16, 35, 878],\n        id: 1239251,\n        original_language: \"en\",\n        original_title: \"Megamind vs. the Doom Syndicate\",\n        overview: \"\",\n        popularity: 1275.225,\n        poster_path: \"/yRZfiG1QpRkBc7fAmxfcR7Md5EC.jpg\",\n        release_date: \"2024-03-01\",\n        title: \"Megamind vs. the Doom Syndicate\",\n        video: false,\n        vote_average: 5.736,\n        vote_count: 121,\n    },\n    {\n        adult: false,\n        backdrop_path: \"/o6e8Y0Q7RZIWi4qcJq4s5OYOVJs.jpg\",\n        genre_ids: [878, 10749, 35],\n        id: 792307,\n        original_language: \"en\",\n        original_title: \"Poor Things\",\n        overview: \"대학에서 해부학을 가르치고 있는 교수인 고드윈 벡스터는 젊고 아름다운 여성 벨라와 함께 살고 있다. 어린 아기의 지능을 가지고 있는 벨라를 고드윈은 마치 자신의 딸처럼 아끼며 그녀에게 말과 행동을 가르친다. 한편 고드윈의 제자이자 평소 그를 존경해 왔던 맥스는 고드윈 교수와 가까이 지내게 되면서 벨라를 만나게 된다. 벨라의 이상 행동에 관심을 갖기 시작하는 맥스, 고드윈 박사로부터 벨라는 얼마 전에 자살한 여자를 자신이 의학적으로 되살린 것이라는 충격적인 말을 듣게 된다. 하지만 이미 벨라에게 마음을 뺏긴 맥스는 고드윈 박사의 제안에 따라 그녀와 약혼하기로 결심하는데...\",\n        popularity: 1077.325,\n        poster_path: \"/4VMekvKYG2FVIfKPG076rf625G7.jpg\",\n        release_date: \"2023-12-07\",\n        title: \"가여운 것들\",\n        video: false,\n        vote_average: 7.868,\n        vote_count: 2390,\n    },\n    {\n        adult: false,\n        backdrop_path: \"/8uVKfOJUhmybNsVh089EqLHUYEG.jpg\",\n        genre_ids: [878, 12],\n        id: 693134,\n        original_language: \"en\",\n        original_title: \"Dune: Part Two\",\n        overview: \"황제의 모략으로 멸문한 가문의 유일한 후계자 폴. 어머니 레이디 제시카와 간신히 목숨만 부지한 채 사막으로 도망친다. 그곳에서 만난 반란군들과 숨어 지내다 그들과 함께 황제의 모든 것을 파괴할 전투를 준비한다. 한편 반란군들의 기세가 높아질수록 불안해진 황제와 귀족 가문은 잔혹한 암살자 페이드 로타를 보내 반란군을 몰살하려 하는데…\",\n        popularity: 1180.358,\n        poster_path: \"/8uUU2pxm6IYZw8UgnKJyx7Dqwu9.jpg\",\n        release_date: \"2024-02-27\",\n        title: \"듄: 파트 2\",\n        video: false,\n        vote_average: 8.406,\n        vote_count: 1786,\n    },\n    {\n        adult: false,\n        backdrop_path: \"/ekRp1sEA8pnuzVHQkUESTgNSKdW.jpg\",\n        genre_ids: [878, 28, 80],\n        id: 932420,\n        original_language: \"en\",\n        original_title: \"Code 8 Part II\",\n        overview: \"초능력자들이 감시당하고 탄압받는 도시. 한 전과자가 부패 경찰로부터 10대 소녀를 지키려 하는데. 그러려면 경멸해 마지않는 마약왕과 손을 잡아야만 한다.\",\n        popularity: 1146.099,\n        poster_path: \"/5Xj0Lr8f4HdOozi7ZdAhh5R0Uh3.jpg\",\n        release_date: \"2024-02-27\",\n        title: \"코드 8: 파트 2\",\n        video: false,\n        vote_average: 6.608,\n        vote_count: 297,\n    },\n    {\n        adult: false,\n        backdrop_path: \"/oBIQDKcqNxKckjugtmzpIIOgoc4.jpg\",\n        genre_ids: [28, 53, 10752],\n        id: 969492,\n        original_language: \"en\",\n        original_title: \"Land of Bad\",\n        overview: \"라스베이거스 공군 기지의 베테랑 드론 조종사 리퍼(러셀 크로우)는 델타포스 티어-원 부대의 CIA 요원 구출작전 지원임무를 맡게 된다. 슈가(마일로 벤티밀리아), 아벨(루크 헴스워스)이 이끄는 티어-원 부대는 CIA 요원이 사라진 필리핀 남서부, 미스터리한 지형의 홀로 섬 정찰에 나서고, 이 위험천만한 작전을 위해 JTAC 신입요원 키니(리암 헴스워스)와 실전 경험이 많은 군인 비숍(리키 휘틀)까지 합류한다. 그러나 도망칠 곳도 숨을 곳도 없는 섬에서 이들은 곧 적에게 노출되고 피할 수 없는 전면전이 펼쳐지며 상황은 급반전을 맞이한다. 무기도, 통신장비도 없는 정글에 홀로 갇힌 키니, 동료를 구하고 작전을 성공시켜야 할 그에게 남은 건, 눈과 귀가 되어주는 드론 조종사 리퍼뿐! 누구도 포기하지 않는다, 끝까지 살아남는다!\",\n        popularity: 1067.477,\n        poster_path: \"/6yrDUJyl1naOn3zfOhFPE9ZGsfP.jpg\",\n        release_date: \"2024-01-25\",\n        title: \"랜드 오브 배드\",\n        video: false,\n        vote_average: 6.994,\n        vote_count: 348,\n    },\n    {\n        adult: false,\n        backdrop_path: \"/gklkxY0veMajdCiGe6ggsh07VG2.jpg\",\n        genre_ids: [16, 28, 12, 35, 10751],\n        id: 940551,\n        original_language: \"en\",\n        original_title: \"Migration\",\n        overview: \"가족을 과잉보호하는 아빠 ‘맥’ 때문에 평생을 작은 연못에서 안전하게 살아온 말러드 가족. 하지만 호기심 가득한 남매 ‘댁스’와 ‘그웬’을 위해 새로운 세상을 모험하고 싶은 엄마 ‘팸’의 설득으로 가족들은 항상 꿈꿔온 자메이카로 생애 첫 가족 모험을 떠나기로 한다! 설렘 넘치는 시작과 달리 태풍을 만나 길을 잃고, 낯선 친구들을 만나고, 위험 가득한 뉴욕에 불시착하게 된다. 인생 처음으로 모든 계획이 틀어지고 위기에 빠진 말러드 가족은 서툴지만 서로를 의지하며 모험을 계속한다. 새로운 세상, 함께라면 두려울 것 없어!\",\n        popularity: 903.985,\n        poster_path: \"/2xE3NI6zElWhwN9WJ92fqbZKmzZ.jpg\",\n        release_date: \"2023-12-06\",\n        title: \"인투 더 월드\",\n        video: false,\n        vote_average: 7.565,\n        vote_count: 945,\n    },\n    {\n        adult: false,\n        backdrop_path: \"/yyFc8Iclt2jxPmLztbP617xXllT.jpg\",\n        genre_ids: [35, 10751, 14],\n        id: 787699,\n        original_language: \"en\",\n        original_title: \"Wonka\",\n        overview: \"마법사이자 초콜릿 메이커 ‘윌리 웡카’의 꿈은 디저트의 성지, ‘달콤 백화점’에 자신만의 초콜릿 가게를 여는 것. 가진 것이라고는 낡은 모자 가득한 꿈과 단돈 12소베른 뿐이지만 특별한 마법의 초콜릿으로 사람들을 사로잡을 자신이 있다. 하지만 먹을 것도, 잠잘 곳도, 의지할 사람도 없는 상황 속에서 낡은 여인숙에 머물게 된 ‘웡카’는 ‘스크러빗 부인’과 ‘블리처’의 계략에 빠져 눈더미처럼 불어난 숙박비로 인해 순식간에 빚더미에 오른다. 게다가 밤마다 초콜릿을 훔쳐가는 작은 도둑 ‘움파 룸파’의 등장과 ‘달콤 백화점’을 독점한 초콜릿 카르텔의 강력한 견제까지. 세계 최고의 초콜릿 메이커가 되는 길은 험난하기만 한데…\",\n        popularity: 802.821,\n        poster_path: \"/g5mGMbiZLvgEf628D60GQrPHFJC.jpg\",\n        release_date: \"2023-12-06\",\n        title: \"웡카\",\n        video: false,\n        vote_average: 7.202,\n        vote_count: 2556,\n    },\n    {\n        adult: false,\n        backdrop_path: \"/4Ep2KivIBUZbkS7kHjW7Qywnhhj.jpg\",\n        genre_ids: [28],\n        id: 1049948,\n        original_language: \"en\",\n        original_title: \"Vikings: Battle of Heirs\",\n        overview: \"\",\n        popularity: 1050.14,\n        poster_path: \"/87goLbbqrJqAxqDS5cBsik1zKT.jpg\",\n        release_date: \"2023-04-28\",\n        title: \"Vikings: Battle of Heirs\",\n        video: false,\n        vote_average: 7,\n        vote_count: 3,\n    },\n    {\n        adult: false,\n        backdrop_path: \"/nb3xI8XI3w4pMVZ38VijbsyBqP4.jpg\",\n        genre_ids: [18, 36],\n        id: 872585,\n        original_language: \"en\",\n        original_title: \"Oppenheimer\",\n        overview: \"세상을 구하기 위해 세상을 파괴할 지도 모르는 선택을 해야 하는 천재 과학자의 핵개발 프로젝트.\",\n        popularity: 806.344,\n        poster_path: \"/jpD6z9fgNe7OqsHoDeAWQWoULde.jpg\",\n        release_date: \"2023-07-19\",\n        title: \"오펜하이머\",\n        video: false,\n        vote_average: 8.113,\n        vote_count: 7217,\n    },\n    {\n        adult: false,\n        backdrop_path: \"/nTPFkLUARmo1bYHfkfdNpRKgEOs.jpg\",\n        genre_ids: [35, 10749],\n        id: 1072790,\n        original_language: \"en\",\n        original_title: \"Anyone But You\",\n        overview: \"\",\n        popularity: 836.569,\n        poster_path: \"/5qHoazZiaLe7oFBok7XlUhg96f2.jpg\",\n        release_date: \"2023-12-21\",\n        title: \"페이크 러브\",\n        video: false,\n        vote_average: 7.048,\n        vote_count: 1016,\n    },\n    {\n        adult: false,\n        backdrop_path: \"/wqmemsQb8xcLVQkwt8WTYnMIYms.jpg\",\n        genre_ids: [28, 35],\n        id: 1217409,\n        original_language: \"es\",\n        original_title: \"Jaque Mate\",\n        overview: \"\",\n        popularity: 679.967,\n        poster_path: \"/umRkEsTwKU5nVbLVNw22cYB2fjm.jpg\",\n        release_date: \"2024-01-25\",\n        title: \"Jaque Mate\",\n        video: false,\n        vote_average: 4.6,\n        vote_count: 6,\n    },\n    {\n        adult: false,\n        backdrop_path: \"/lzWHmYdfeFiMIY4JaMmtR7GEli3.jpg\",\n        genre_ids: [878, 12],\n        id: 438631,\n        original_language: \"en\",\n        original_title: \"Dune\",\n        overview: \"10191년, 아트레이데스 가문의 후계자인 폴은 시간과 공간을 초월해 과거와 미래를 모두 볼 수 있고, 더 나은 미래를 만들 유일한 구원자인 예지된 자의 운명을 타고났다. 그리고 어떤 계시처럼 매일 꿈에서 아라키스의 행성에 있는 한 여인을 만난다. 귀족들이 지지하는 아트레이데스 가문에 대한 황제의 질투는 폴과 그 일족들을 죽음이 기다리는 아라키스로 이끄는데...\",\n        popularity: 663.721,\n        poster_path: \"/7zV8FTYofAORGm0Umgh1mNNCym8.jpg\",\n        release_date: \"2021-09-15\",\n        title: \"듄\",\n        video: false,\n        vote_average: 7.788,\n        vote_count: 10804,\n    },\n    {\n        adult: false,\n        backdrop_path: \"/pwGmXVKUgKN13psUjlhC9zBcq1o.jpg\",\n        genre_ids: [28, 14],\n        id: 634492,\n        original_language: \"en\",\n        original_title: \"Madame Web\",\n        overview: \"우연한 사고로 미래를 볼 수 있게 된 구급대원 '캐시 웹'이 거미줄처럼 엮인 운명을 마주하며, 같은 예지 능력을 가진 적 '심스'에 맞서 세상을 구할 히어로 '마담 웹'으로 거듭나게 되는 과정을 그린 마블의 NEW 히어로 드라마\",\n        popularity: 595.689,\n        poster_path: \"/eqEzpQNusV9XSdnA9HAvlLMeuPs.jpg\",\n        release_date: \"2024-02-14\",\n        title: \"마담 웹\",\n        video: false,\n        vote_average: 5.356,\n        vote_count: 477,\n    },\n    {\n        adult: false,\n        backdrop_path: \"/6SLyu9ygASsrOqkCpjAwtyG9PWW.jpg\",\n        genre_ids: [10751, 878, 28, 35],\n        id: 1094556,\n        original_language: \"en\",\n        original_title: \"The Thundermans Return\",\n        overview: \"\",\n        popularity: 583.77,\n        poster_path: \"/rz98XwP0VJq6e1jnWDCxn6EDLfP.jpg\",\n        release_date: \"2024-03-07\",\n        title: \"The Thundermans Return\",\n        video: false,\n        vote_average: 7.767,\n        vote_count: 43,\n    },\n];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dummyMovieList);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/movieList.ts?");

/***/ }),

/***/ "./src/service/handleSkeletonAndAPI.ts":
/*!*********************************************!*\
  !*** ./src/service/handleSkeletonAndAPI.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleGetPopularMovieData\": () => (/* binding */ handleGetPopularMovieData),\n/* harmony export */   \"handleGetSearchMovieData\": () => (/* binding */ handleGetSearchMovieData)\n/* harmony export */ });\n/* harmony import */ var _model_APIClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/APIClient */ \"./src/model/APIClient.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\nconst toggleErrorView = (isShow) => {\n    if (isShow) {\n        const $itemView = document.querySelector(\".item-view\");\n        $itemView === null || $itemView === void 0 ? void 0 : $itemView.remove();\n    }\n    const $errorView = document.querySelector(\".error-view\");\n    $errorView === null || $errorView === void 0 ? void 0 : $errorView.classList.toggle(\"on\", isShow);\n};\nconst handleGetSearchMovieData = (isResetCurrentPage, title) => __awaiter(void 0, void 0, void 0, function* () {\n    const $skeletonView = document.querySelector(\".skeleton-view\");\n    setTimeout(() => toggleErrorView(false), 1000);\n    try {\n        $skeletonView === null || $skeletonView === void 0 ? void 0 : $skeletonView.classList.add(\"on\");\n        yield _model_APIClient__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getSearchMovieData(isResetCurrentPage, title);\n        toggleErrorView(false);\n    }\n    catch (error) {\n        toggleErrorView(true);\n    }\n    setTimeout(() => {\n        $skeletonView === null || $skeletonView === void 0 ? void 0 : $skeletonView.classList.remove(\"on\");\n    }, 500);\n});\nconst handleGetPopularMovieData = () => __awaiter(void 0, void 0, void 0, function* () {\n    const $skeletonView = document.querySelector(\".skeleton-view\");\n    try {\n        $skeletonView === null || $skeletonView === void 0 ? void 0 : $skeletonView.classList.add(\"on\");\n        yield _model_APIClient__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getPopularMovieData(false);\n        toggleErrorView(false);\n    }\n    catch (error) {\n        toggleErrorView(true);\n    }\n    setTimeout(() => {\n        $skeletonView === null || $skeletonView === void 0 ? void 0 : $skeletonView.classList.remove(\"on\");\n    }, 500);\n});\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/service/handleSkeletonAndAPI.ts?");

/***/ }),

/***/ "./src/utils/createElementWithAttribute.ts":
/*!*************************************************!*\
  !*** ./src/utils/createElementWithAttribute.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createElementWithAttribute = (elementTag, attribute) => {\n    const $element = document.createElement(elementTag);\n    Object.entries(attribute).forEach(([key, value]) => {\n        $element.setAttribute(key, value);\n    });\n    return $element;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElementWithAttribute);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/utils/createElementWithAttribute.ts?");

/***/ }),

/***/ "./src/utils/debouneFunc.ts":
/*!**********************************!*\
  !*** ./src/utils/debouneFunc.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet debounce;\nconst debouceFunc = (func) => {\n    if (debounce) {\n        clearTimeout(debounce);\n    }\n    debounce = setTimeout(func, 500);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (debouceFunc);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/utils/debouneFunc.ts?");

/***/ }),

/***/ "./src/utils/preventXSS.ts":
/*!*********************************!*\
  !*** ./src/utils/preventXSS.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst preventXSS = (text) => {\n    const changedText = text\n        .replace(/&/g, \"&amp;\")\n        .replace(/</g, \"&lt;\")\n        .replace(/>/g, \"&gt;\")\n        .replace(/\"/g, \"&quot;\")\n        .replace(/'/g, \"&#039;\");\n    return changedText;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (preventXSS);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/utils/preventXSS.ts?");

/***/ }),

/***/ "./templates/logo.png":
/*!****************************!*\
  !*** ./templates/logo.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2e162b4fefb34cd7ed8d.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./templates/logo.png?");

/***/ }),

/***/ "./templates/search_button.png":
/*!*************************************!*\
  !*** ./templates/search_button.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f1bd4269f4446ceae306.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./templates/search_button.png?");

/***/ }),

/***/ "./templates/star_filled.png":
/*!***********************************!*\
  !*** ./templates/star_filled.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6328741810b732410eec.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./templates/star_filled.png?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;