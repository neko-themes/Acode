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

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nconst plugin=__webpack_require__(/*! ../plugin.json */ \"./plugin.json\");const style=__webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");const settings=acode.require('settings');const{editor}=editorManager;const themeName=\"neko-dracula\";ace.define(`ace/theme/${themeName}.css`,[\"require\",\"exports\",\"module\"],function(require,exports,module){module.exports=style;}),ace.define(`ace/theme/${themeName}`,[\"require\",\"exports\",\"module\",`ace/theme/${themeName}.css`,\"ace/lib/dom\"],function(require,exports,module){exports.isDark=!0,exports.cssClass=`ace-${themeName}`,exports.cssText=require(`./${themeName}.css`);const dom=require(\"../lib/dom\");dom.importCssString(exports.cssText,exports.cssClass,!1);});(function(){window.require([\"ace/theme/\"+themeName],function(m){if( true&&module){module.exports=m;}});})();class AcodePlugin{async init(){ace.require(\"ace/ext/themelist\").themes.push({caption:themeName.split(\"-\").map(name=>name[0].toUpperCase()+name.slice(1)).join(\" \"),theme:\"ace/theme/\"+themeName,isDark:true});const currentTheme=settings.get(\"editorTheme\");if(currentTheme===themeName)editor.setTheme(\"ace/theme/\"+themeName);settings.on(\"update\",this.onThemeChange);}async destroy(){settings.off(\"update\",this.onThemeChange);}onThemeChange(value){if(value===\"ace/theme/\"+themeName){editor.setTheme(\"ace/theme/\"+themeName);settings.update({editorTheme:themeName});}}}if(window.acode){const acodePlugin=new AcodePlugin();acode.setPluginInit(plugin.id,(baseUrl,$page,_ref)=>{let{cacheFileUrl,cacheFile}=_ref;if(!baseUrl.endsWith('/')){baseUrl+='/';}acodePlugin.baseUrl=baseUrl;acodePlugin.init($page,cacheFile,cacheFileUrl);});acode.setPluginUnmount(plugin.id,()=>{acodePlugin.destroy();});}\n\n//# sourceURL=webpack://acode-editorTheme-template/./src/main.js?");

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"/**\\n* This theme was based on the acode-editorTheme-template template so all due credits to @legend Sabbir.\\n*/\\n.ace-neko-dracula {\\n  color: #ddd;\\n  background-color: #39293e;\\n  /**\\n   * keywords\\n   * for example if else \\n   * ID in css\\n   */\\n  /**\\n   * Don't change indent guide \\n   */\\n  /**\\n   * All the highlight rules bellow require extra syntax highlight plugin\\n  **/\\n}\\n.ace-neko-dracula .ace_gutter {\\n  color: #909194;\\n}\\n.ace-neko-dracula .ace_gutter-active-line {\\n  color: #ddd;\\n}\\n.ace-neko-dracula .ace_print-margin {\\n  width: 1px;\\n  background: #39293e;\\n}\\n.ace-neko-dracula .ace_cursor {\\n  color: #efae31;\\n}\\n.ace-neko-dracula .ace_marker-layer .ace_selection {\\n  background: #6a04ca;\\n  border-radius: 0;\\n}\\n.ace-neko-dracula .ace_multiselect .ace_selection.ace_start {\\n  box-shadow: 0 0 3px black;\\n}\\n.ace-neko-dracula .ace_marker-layer .ace_step {\\n  background: #c6dbae;\\n}\\n.ace-neko-dracula .ace_marker-layer .ace_bracket {\\n  margin: -1px 0 0 -1px;\\n  border: 1px solid #F8F8F0;\\n}\\n.ace-neko-dracula .ace_marker-layer .ace_active-line {\\n  border: 1px solid #3a424a;\\n  box-sizing: border-box;\\n}\\n.ace-neko-dracula .ace_marker-layer .ace_selected-word {\\n  background-color: rgba(125, 81, 64, 0.8);\\n}\\n.ace-neko-dracula .ace_invisible {\\n  color: #52524d;\\n}\\n.ace-neko-dracula .hljs-keyword,\\n.ace-neko-dracula .ace_keyword {\\n  color: #f472b6;\\n}\\n.ace-neko-dracula .ace_keyword.ace_operator {\\n  color: #ddd;\\n}\\n.ace-neko-dracula .ace_constant.ace_language {\\n  color: #bd93f9;\\n}\\n.ace-neko-dracula .ace_constant.ace_numeric {\\n  color: #c3e8d1;\\n}\\n.ace-neko-dracula .ace_constant.ace_character {\\n  color: #bd93f9;\\n}\\n.ace-neko-dracula .ace_constant.ace_character.ace_escape {\\n  color: #ff79c6;\\n}\\n.ace-neko-dracula .ace_constant.ace_other {\\n  color: #bd93f9;\\n}\\n.ace-neko-dracula .hljs-title,\\n.ace-neko-dracula .ace_identifier {\\n  color: #aef1ff;\\n}\\n.ace-neko-dracula .ace_support.ace_function {\\n  color: #fff8d3;\\n}\\n.ace-neko-dracula .ace_support.ace_function.ace_dom {\\n  color: #fff8d3;\\n}\\n.ace-neko-dracula .ace_support.ace_constant {\\n  color: #ce9178;\\n}\\n.ace-neko-dracula .ace_class {\\n  color: #1edac1;\\n}\\n.ace-neko-dracula .ace_variable.ace_language {\\n  color: #aef1ff;\\n}\\n.ace-neko-dracula .ace_support.ace_type {\\n  color: #aef1ff;\\n}\\n.ace-neko-dracula .ace_meta.ace_tag {\\n  color: #57afff;\\n}\\n.ace-neko-dracula .ace_storage,\\n.ace-neko-dracula .ace_storage.ace_type {\\n  color: #57afff;\\n}\\n.ace-neko-dracula .ace_invalid {\\n  color: #F8F8F0;\\n  background-color: #ff79c6;\\n}\\n.ace-neko-dracula .ace_invalid.ace_deprecated {\\n  color: #F8F8F0;\\n  background-color: #bd93f9;\\n}\\n.ace-neko-dracula .ace_string {\\n  color: #ce9178;\\n}\\n.ace-neko-dracula .ace_comment {\\n  color: #6A9955;\\n}\\n.ace-neko-dracula .ace_variable {\\n  color: #d7ba7d;\\n}\\n.ace-neko-dracula .ace_constant {\\n  color: #d7ba7d;\\n}\\n.ace-neko-dracula .hljs-params,\\n.ace-neko-dracula .ace_variable.ace_parameter {\\n  color: #aef1ff;\\n}\\n.ace-neko-dracula .ace_entity.ace_other.ace_attribute-name {\\n  color: #aef1ff;\\n}\\n.ace-neko-dracula .ace_xml-pe.ace_xml,\\n.ace-neko-dracula .ace_punctuation.ace_tag {\\n  color: #999;\\n}\\n.ace-neko-dracula .ace_tag-name.ace_tag,\\n.ace-neko-dracula .ace_entity.ace_name.ace_tag {\\n  color: #57afff;\\n}\\n.ace-neko-dracula .ace_paren {\\n  color: gold;\\n}\\n.ace-neko-dracula .ace_indent-guide {\\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ09NrYAgMjP4PAAtGAwchHMyAAAAAAElFTkSuQmCC) right repeat-y;\\n}\\n.ace-neko-dracula .ace_indent-guide-active {\\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;\\n}\\n.ace-neko-dracula .ace_support.ace_constant.ace_js {\\n  color: #A6FFBD;\\n}\\n.ace-neko-dracula .ace_entity.ace_name.ace_function {\\n  color: #fff8d3;\\n}\\n.ace-neko-dracula .ace_support.ace_constant.ace_css-in-js {\\n  color: #2FC7B6;\\n}\");\n\n//# sourceURL=webpack://acode-editorTheme-template/./src/styles.scss?");

/***/ }),

/***/ "./plugin.json":
/*!*********************!*\
  !*** ./plugin.json ***!
  \*********************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('{\"id\":\"acode.plugin.nekoTheme\",\"name\":\"Neko Dracula\",\"main\":\"dist/main.js\",\"version\":\"1.0.0\",\"minVersionCode\":270,\"readme\":\"readme.md\",\"icon\":\"icon.png\",\"files\":[],\"author\":{\"name\":\"Neko\",\"email\":\"ciccabr9@gmail.com\",\"github\":\"neko-themes\"}}');\n\n//# sourceURL=webpack://acode-editorTheme-template/./plugin.json?");

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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;