/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/index.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    --white: #ffffff;\n    --light-grey: #D9D9D9;\n    --dark-grey: #454545;\n    --black: #000000;\n    --black-tint: rgba(0, 0, 0, 0.50);\n    --blue: #0085FF;\n    --blue-light: #badcfc;\n    --orange: #FF9900;\n    --orange-light: #FAE7CC;\n    --red: #FF0000;\n    --red-light: #FCCECE;\n    --green: #33C500;\n    --light-green: #D7FFC9;\n    --github-img-size: 32px;\n}\n\n:root p {\n    margin: 0px;\n}\n\nbody {\n    display: flex;\n    margin: 0px;\n    /* Temp */\n    width: 100vw;\n    height: 100vh;\n}\n\n/* Aside  */\naside {\n    flex: 1;\n    padding: 8px;\n    background-color: var(--dark-grey);\n\n    display: flex;\n    flex-direction: column;\n}\n\naside p {\n    font-size: 1.25em;\n    margin: 0px;\n}\n\naside .home-container, aside .project-container {\n    display: flex;\n    flex-direction: column;\n}\n\naside button {\n    display: flex;\n    align-items: center;\n\n    cursor: pointer;\n    background: none;\n    border: none;\n    color: var(--white);\n    font-size: 1.25em;\n}\n\naside button:hover {\n    font-weight: bold;\n    /* background-color: var(--light-grey); */\n}\n\naside button.title {\n    border-bottom: var(--white) solid 5px;\n}\n\naside .home-container .default-projects {\n    display: flex;\n    flex-direction: column;\n}\n\naside div.project-div {\n    display: flex;\n}\n\naside img { \n    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(248deg) brightness(106%) contrast(106%);\n}\n\naside button.current-project {\n    font-weight: bold;\n}\n\n/* Main */\ndiv.main {\n    flex: 4;\n\n    display: flex;\n    flex-direction: column;\n}\n\ndiv.main header {\n    flex: 1;\n    padding: 8px;\n    /* Temp */\n    background-color: var(--light-grey);\n\n    display: grid;\n    grid-template-columns: auto 1fr;\n    align-items: center; \n}\n\ndiv.main header button.menu {\n    background: none;\n    border: none;\n    cursor: pointer;\n}\n\ndiv.main header h1.title {\n    padding-right: auto;\n    justify-self: center;\n    font-weight: bold;\n    font-size: 3em;\n}\n\ndiv.main div.content {\n    flex: 4;\n    padding: 16px 64px;\n    background-color: var(--white);\n}\n\n/* Task Styling */\n\ndiv.main div.content div.task-container {\n    display: flex;\n    flex-direction: column;\n    row-gap: 8px; \n}\n\ndiv.main div.content div.task {\n    display: flex;\n    flex-direction: column;\n\n    background-color: var(--light-grey);\n    border-radius: 4px;\n\n    padding: 8px;\n}\n\ndiv.main div.content div.task-content {\n    display: flex;\n}\n\ndiv.main div.content div.low-task {\n    border-right: var(--blue) solid 4px;\n    border-left: var(--blue) solid 4px;\n}\n\ndiv.main div.content div.medium-task {\n    border-right: var(--orange) solid 4px;\n    border-left: var(--orange) solid 4px;\n}\n\ndiv.main div.content div.high-task {\n    border-right: var(--red) solid 4px;\n    border-left: var(--red) solid 4px;\n}\n\ndiv.main div.content div.left-side {\n    grid-area: left;\n\n    display: flex;\n    align-items: center;\n    column-gap: 4px;\n}\n\ndiv.main div.content div.left-side input {\n    margin: 0px;\n}\n\ndiv.main div.content div.right-side {\n    grid-area: right;\n\n    display: flex;\n    margin-left: auto;\n    align-items: center;\n    column-gap: 4px;\n}\n\ndiv.main div.content div.details-container {\n    margin: auto;\n}\n\ndiv.main div.content .add-task-container {\n    display: flex;\n    flex-direction: column;\n}\n\ndiv.main div.content .add-task-container .add-task-btn {\n    width: 135px;\n\n    display: flex;\n    column-gap: 4px;\n    align-self: center;\n}\n\ndiv.main div.content .add-task-container .add-task-btn p {\n    font-size: 1.5em;\n    font-weight: bold;\n    cursor: pointer;\n}\n\ndiv.main div.content .add-task-container .add-task-btn img {\n    width: 24px;\n}\n\ndiv.main div.content .add-task-container .input-container {\n    display: flex;\n    flex-direction: column;\n    row-gap: 4px;\n\n    background-color: var(--light-grey);\n    padding: 16px 24px;\n    border-radius: 4px;\n    border-right: var(--blue) solid 4px;\n    border-left: var(--blue) solid 4px;\n}\n\ndiv.main div.content .add-task-container .input-container p {\n    margin: 0px;\n    font-weight: bold;\n}\n\ndiv.main div.content .add-task-container .input-container input.title {\n    border-radius: 8px;\n    padding-left: 4px;\n}\n\ndiv.main div.content .add-task-container .input-container textarea {\n    height: 150px;\n    border-radius: 8px;\n    padding-left: 4px;\n}\n\ndiv.main div.content .add-task-container .input-container div.date-project {\n    display: flex;\n    column-gap: 16px;\n}\n\ndiv.main div.content .add-task-container .input-container div.due-date {\n    display: flex;\n    column-gap: 4px;\n    justify-content: center;\n    align-items: center;\n\n    font-weight: bold;\n}\n\ndiv.main div.content .add-task-container .input-container div.project {\n    display: flex;\n    column-gap: 4px;\n    justify-content: center;\n    align-items: center;\n\n    font-weight: bold;\n}\n\ndiv.main div.content .add-task-container .input-container .priority-add-cancel {\n    display: flex;\n    row-gap: 4px;\n    column-gap: 24px;\n    align-items: center;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities {\n    display: flex;\n    column-gap: 4px;\n    align-items: center;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .priority {\n    width: 100px;\n    border-radius: 4px;\n    padding: 4px 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .low {\n    background-color: var(--blue-light);\n    color: var(--blue);\n    border-left: var(--blue) solid 4px;\n    border-right: var(--blue) solid 4px;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .low:hover {\n    cursor: pointer;\n    background-color: var(--blue);\n    color: var(--blue-light);\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .active-low {\n    background-color: var(--blue);\n    color: var(--blue-light);\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .medium {\n    background-color: var(--orange-light);\n    color: var(--orange);\n    border-left: var(--orange) solid 4px;\n    border-right: var(--orange) solid 4px;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .medium:hover {\n    cursor: pointer;\n    background-color: var(--orange);\n    color: var(--orange-light);\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .active-medium {\n    background-color: var(--orange);\n    color: var(--orange-light);\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .high {\n    background-color: var(--red-light);\n    color: var(--red);\n    border-left: var(--red) solid 4px;\n    border-right: var(--red) solid 4px;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .high:hover {\n    cursor: pointer;\n    background-color: var(--red);\n    color: var(--red-light);\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .active-high {\n    background-color: var(--red);\n    color: var(--red-light);\n}\n\ndiv.main div.content .add-task-container .input-container .add-cancel {\n    display: flex;\n    justify-self: right;\n    column-gap: 4px;\n    margin-left: auto;\n}\n\ndiv.main div.content .add-task-container .input-container .add {\n    width: 100px;\n    border-radius: 4px;\n    padding: 4px 0px;\n\n    background-color: var(--light-green);\n    color: var(--green);\n    border-left: var(--green) solid 4px;\n    border-right: var(--green) solid 4px;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\ndiv.main div.content .add-task-container .input-container .add:hover {\n    cursor: pointer;\n    background-color: var(--green);\n    color: var(--light-green);\n}\n\ndiv.main div.content .add-task-container .input-container .cancel {\n    width: 100px;\n    border-radius: 4px;\n    padding: 4px 0px;\n    background-color: var(--red-light);\n    color: var(--red);\n    border-left: var(--red) solid 4px;\n    border-right: var(--red) solid 4px;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\ndiv.main div.content .add-task-container .input-container .cancel:hover {\n    cursor: pointer;\n    background-color: var(--red);\n    color: var(--red-light);\n}\n\ndiv.main footer {\n    flex: 1;\n    padding: 8px;\n    background-color: var(--light-grey);\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    column-gap: 16px;\n}\n\ndiv.main footer p.text {\n    font-size: 1.25em;\n    font-weight: bold;\n}\n\ndiv.main footer a {\n    border: 3px solid var(--black);\n    border-radius: 100%;\n    width: var(--github-img-size);\n    height: var(--github-img-size);\n    background-color: var(--white);\n    padding: 6px;\n}\n\ndiv.main footer a:hover {\n    background-color: var(--black);\n}\n\ndiv.main footer a:hover img {\n    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(248deg) brightness(106%) contrast(106%);\n}\n\ndiv.main footer a img {\n    width: var(--github-img-size);\n    height: var(--github-img-size);\n}\n", "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    --white: #ffffff;\n    --light-grey: #D9D9D9;\n    --dark-grey: #454545;\n    --black: #000000;\n    --black-tint: rgba(0, 0, 0, 0.50);\n    --blue: #0085FF;\n    --blue-light: #badcfc;\n    --orange: #FF9900;\n    --orange-light: #FAE7CC;\n    --red: #FF0000;\n    --red-light: #FCCECE;\n    --green: #33C500;\n    --light-green: #D7FFC9;\n    --github-img-size: 32px;\n}\n\n:root p {\n    margin: 0px;\n}\n\nbody {\n    display: flex;\n    margin: 0px;\n    /* Temp */\n    width: 100vw;\n    height: 100vh;\n}\n\n/* Aside  */\naside {\n    flex: 1;\n    padding: 8px;\n    background-color: var(--dark-grey);\n\n    display: flex;\n    flex-direction: column;\n}\n\naside p {\n    font-size: 1.25em;\n    margin: 0px;\n}\n\naside .home-container, aside .project-container {\n    display: flex;\n    flex-direction: column;\n}\n\naside button {\n    display: flex;\n    align-items: center;\n\n    cursor: pointer;\n    background: none;\n    border: none;\n    color: var(--white);\n    font-size: 1.25em;\n}\n\naside button:hover {\n    font-weight: bold;\n    /* background-color: var(--light-grey); */\n}\n\naside button.title {\n    border-bottom: var(--white) solid 5px;\n}\n\naside .home-container .default-projects {\n    display: flex;\n    flex-direction: column;\n}\n\naside div.project-div {\n    display: flex;\n}\n\naside img { \n    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(248deg) brightness(106%) contrast(106%);\n}\n\naside button.current-project {\n    font-weight: bold;\n}\n\n/* Main */\ndiv.main {\n    flex: 4;\n\n    display: flex;\n    flex-direction: column;\n}\n\ndiv.main header {\n    flex: 1;\n    padding: 8px;\n    /* Temp */\n    background-color: var(--light-grey);\n\n    display: grid;\n    grid-template-columns: auto 1fr;\n    align-items: center; \n}\n\ndiv.main header button.menu {\n    background: none;\n    border: none;\n    cursor: pointer;\n}\n\ndiv.main header h1.title {\n    padding-right: auto;\n    justify-self: center;\n    font-weight: bold;\n    font-size: 3em;\n}\n\ndiv.main div.content {\n    flex: 4;\n    padding: 16px 64px;\n    background-color: var(--white);\n}\n\n/* Task Styling */\n\ndiv.main div.content div.task-container {\n    display: flex;\n    flex-direction: column;\n    row-gap: 8px; \n}\n\ndiv.main div.content div.task {\n    display: flex;\n    flex-direction: column;\n\n    background-color: var(--light-grey);\n    border-radius: 4px;\n\n    padding: 8px;\n}\n\ndiv.main div.content div.task-content {\n    display: flex;\n}\n\ndiv.main div.content div.low-task {\n    border-right: var(--blue) solid 4px;\n    border-left: var(--blue) solid 4px;\n}\n\ndiv.main div.content div.medium-task {\n    border-right: var(--orange) solid 4px;\n    border-left: var(--orange) solid 4px;\n}\n\ndiv.main div.content div.high-task {\n    border-right: var(--red) solid 4px;\n    border-left: var(--red) solid 4px;\n}\n\ndiv.main div.content div.left-side {\n    grid-area: left;\n\n    display: flex;\n    align-items: center;\n    column-gap: 4px;\n}\n\ndiv.main div.content div.left-side input {\n    margin: 0px;\n}\n\ndiv.main div.content div.right-side {\n    grid-area: right;\n\n    display: flex;\n    margin-left: auto;\n    align-items: center;\n    column-gap: 4px;\n}\n\ndiv.main div.content div.details-container {\n    margin: auto;\n}\n\ndiv.main div.content .add-task-container {\n    display: flex;\n    flex-direction: column;\n}\n\ndiv.main div.content .add-task-container .add-task-btn {\n    width: 135px;\n\n    display: flex;\n    column-gap: 4px;\n    align-self: center;\n}\n\ndiv.main div.content .add-task-container .add-task-btn p {\n    font-size: 1.5em;\n    font-weight: bold;\n    cursor: pointer;\n}\n\ndiv.main div.content .add-task-container .add-task-btn img {\n    width: 24px;\n}\n\ndiv.main div.content .add-task-container .input-container {\n    display: flex;\n    flex-direction: column;\n    row-gap: 4px;\n\n    background-color: var(--light-grey);\n    padding: 16px 24px;\n    border-radius: 4px;\n    border-right: var(--blue) solid 4px;\n    border-left: var(--blue) solid 4px;\n}\n\ndiv.main div.content .add-task-container .input-container p {\n    margin: 0px;\n    font-weight: bold;\n}\n\ndiv.main div.content .add-task-container .input-container input.title {\n    border-radius: 8px;\n    padding-left: 4px;\n}\n\ndiv.main div.content .add-task-container .input-container textarea {\n    height: 150px;\n    border-radius: 8px;\n    padding-left: 4px;\n}\n\ndiv.main div.content .add-task-container .input-container div.date-project {\n    display: flex;\n    column-gap: 16px;\n}\n\ndiv.main div.content .add-task-container .input-container div.due-date {\n    display: flex;\n    column-gap: 4px;\n    justify-content: center;\n    align-items: center;\n\n    font-weight: bold;\n}\n\ndiv.main div.content .add-task-container .input-container div.project {\n    display: flex;\n    column-gap: 4px;\n    justify-content: center;\n    align-items: center;\n\n    font-weight: bold;\n}\n\ndiv.main div.content .add-task-container .input-container .priority-add-cancel {\n    display: flex;\n    row-gap: 4px;\n    column-gap: 24px;\n    align-items: center;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities {\n    display: flex;\n    column-gap: 4px;\n    align-items: center;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .priority {\n    width: 100px;\n    border-radius: 4px;\n    padding: 4px 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .low {\n    background-color: var(--blue-light);\n    color: var(--blue);\n    border-left: var(--blue) solid 4px;\n    border-right: var(--blue) solid 4px;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .low:hover {\n    cursor: pointer;\n    background-color: var(--blue);\n    color: var(--blue-light);\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .active-low {\n    background-color: var(--blue);\n    color: var(--blue-light);\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .medium {\n    background-color: var(--orange-light);\n    color: var(--orange);\n    border-left: var(--orange) solid 4px;\n    border-right: var(--orange) solid 4px;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .medium:hover {\n    cursor: pointer;\n    background-color: var(--orange);\n    color: var(--orange-light);\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .active-medium {\n    background-color: var(--orange);\n    color: var(--orange-light);\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .high {\n    background-color: var(--red-light);\n    color: var(--red);\n    border-left: var(--red) solid 4px;\n    border-right: var(--red) solid 4px;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .high:hover {\n    cursor: pointer;\n    background-color: var(--red);\n    color: var(--red-light);\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .active-high {\n    background-color: var(--red);\n    color: var(--red-light);\n}\n\ndiv.main div.content .add-task-container .input-container .add-cancel {\n    display: flex;\n    justify-self: right;\n    column-gap: 4px;\n    margin-left: auto;\n}\n\ndiv.main div.content .add-task-container .input-container .add {\n    width: 100px;\n    border-radius: 4px;\n    padding: 4px 0px;\n\n    background-color: var(--light-green);\n    color: var(--green);\n    border-left: var(--green) solid 4px;\n    border-right: var(--green) solid 4px;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\ndiv.main div.content .add-task-container .input-container .add:hover {\n    cursor: pointer;\n    background-color: var(--green);\n    color: var(--light-green);\n}\n\ndiv.main div.content .add-task-container .input-container .cancel {\n    width: 100px;\n    border-radius: 4px;\n    padding: 4px 0px;\n    background-color: var(--red-light);\n    color: var(--red);\n    border-left: var(--red) solid 4px;\n    border-right: var(--red) solid 4px;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\ndiv.main div.content .add-task-container .input-container .cancel:hover {\n    cursor: pointer;\n    background-color: var(--red);\n    color: var(--red-light);\n}\n\ndiv.main footer {\n    flex: 1;\n    padding: 8px;\n    background-color: var(--light-grey);\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    column-gap: 16px;\n}\n\ndiv.main footer p.text {\n    font-size: 1.25em;\n    font-weight: bold;\n}\n\ndiv.main footer a {\n    border: 3px solid var(--black);\n    border-radius: 100%;\n    width: var(--github-img-size);\n    height: var(--github-img-size);\n    background-color: var(--white);\n    padding: 6px;\n}\n\ndiv.main footer a:hover {\n    background-color: var(--black);\n}\n\ndiv.main footer a:hover img {\n    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(248deg) brightness(106%) contrast(106%);\n}\n\ndiv.main footer a img {\n    width: var(--github-img-size);\n    height: var(--github-img-size);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scripts/directory.js":
/*!**********************************!*\
  !*** ./src/scripts/directory.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "directory": () => (/* binding */ directory)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/scripts/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/scripts/task.js");

// Temp


// module that stores all projects
// default projects : Inbox, Today, Upcoming
// created projects

const directory = (() => {
    const state = {
        defaultProjects: [
            (0,_project__WEBPACK_IMPORTED_MODULE_0__.project)('inbox'),
            (0,_project__WEBPACK_IMPORTED_MODULE_0__.project)('today'),
            (0,_project__WEBPACK_IMPORTED_MODULE_0__.project)('upcoming'),
        ],
        createdProjects: [
            (0,_project__WEBPACK_IMPORTED_MODULE_0__.project)('temp1'), 
            (0,_project__WEBPACK_IMPORTED_MODULE_0__.project)('temp2'),
        ],
        currentProject: null,
    };

    state.currentProject = state.defaultProjects[0];

    // Temp
    const lowTask = (0,_task__WEBPACK_IMPORTED_MODULE_1__.task)("Low Task Title", "Cool Stuff to do", "low", '10-17-2022', 'temp1');
    const mediuemTask = (0,_task__WEBPACK_IMPORTED_MODULE_1__.task)("Medium Task Title", "Cool Stuff to do", "medium", '10-17-2022', 'temp1');
    const highTask = (0,_task__WEBPACK_IMPORTED_MODULE_1__.task)("High Task Title", "Cool Stuff to do", "high", '10-17-2022', 'temp1');
    state.createdProjects[0].addTask(lowTask);
    state.createdProjects[0].addTask(mediuemTask);
    state.createdProjects[0].addTask(highTask);

    const createProject = (name) => {
        const lowName = name.toLowerCase();
        const newProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__.project)(lowName);
        state.createdProjects.push(newProject);
        return newProject;
    };

    const getProject = (name) => {
        if(name === 'inbox') {
            return state.defaultProjects[0];
        }
        else {
            for(let i = 0; i < state.createdProjects.length; i++) {
                if(name === state.createdProjects[i].name) {
                    return state.createdProjects[i];
                }
            }
        }
        // else 
            // loop through createProjects
                // if project.name == name
                    // return project
    };

    return Object.assign(
        state,
        {createProject},
        {getProject}
    );
})();

/***/ }),

/***/ "./src/scripts/project.js":
/*!********************************!*\
  !*** ./src/scripts/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "project": () => (/* binding */ project)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/scripts/task.js");


// In > Out : String List-of-Tasks > Object
const project = (name) => {
    const state = {
        name,
        tasks: [],
    };

    // Get property
    const get = (property) => {
        if(state.hasOwnProperty(property)) {
            return state[property] 
        } else {
            console.error(`The property ${property} does not exist`);
        }
    };

    // Set property
    const set = (property, value) => {
        if(state.hasOwnProperty(property)) {
            state[property] = value;
        } else {
            console.error(`The property ${property} does not exist`);
        }
    };

    // Add Task
    const addTask = (task) => {
        get('tasks').push(task);
    }

    // Get Task
    const getTask = (title) => {
        get('tasks').filter(task => task.title === title);
    }

    // Delete Task
    const deleteTask = (task) => {
        tasks.filter(x => {
            x.id === task.id; 
        });
    }

    return Object.assign(
        state,
        {addTask},
        {deleteTask},
        {getTask},
    );
};

/***/ }),

/***/ "./src/scripts/renderPage.js":
/*!***********************************!*\
  !*** ./src/scripts/renderPage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "page": () => (/* binding */ page)
/* harmony export */ });
/* harmony import */ var _icons_menu_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icons/menu.svg */ "./src/icons/menu.svg");
/* harmony import */ var _icons_github_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/github.svg */ "./src/icons/github.svg");
/* harmony import */ var _directory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directory */ "./src/scripts/directory.js");
/* harmony import */ var _icons_arrow_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/arrow.svg */ "./src/icons/arrow.svg");
/* harmony import */ var _icons_inbox_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/inbox.svg */ "./src/icons/inbox.svg");
/* harmony import */ var _icons_star_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/star.svg */ "./src/icons/star.svg");
/* harmony import */ var _icons_calendar_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons/calendar.svg */ "./src/icons/calendar.svg");
/* harmony import */ var _icons_circlePlus_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../icons/circlePlus.svg */ "./src/icons/circlePlus.svg");
/* harmony import */ var _icons_trash_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icons/trash.svg */ "./src/icons/trash.svg");
/* harmony import */ var _icons_edit_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../icons/edit.svg */ "./src/icons/edit.svg");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./task */ "./src/scripts/task.js");












const page = () => {
    const state = {
        sideBar: null,
        main: null,
        header: null,
        content: null,
        footer: null,
    };

    const render = () => {
        clear();
        state.sideBar = renderSideBar();
        state.main = createElement('div', document.body, 'main');
        state.header = renderHeader();
        state.content = renderContent();
        state.footer = renderFooter();

        setCurrentProject();
        update();
    };

    // adds the current-project class to current rendered project
    const setCurrentProject = () => {
        const projects = state.sideBar.querySelectorAll('button.project');
        for(let i = 0; i < projects.length; i++) {
            if(projects[i].querySelector('p').textContent.toLowerCase() == _directory__WEBPACK_IMPORTED_MODULE_2__.directory.currentProject.name) {
                projects[i].classList.add('current-project') ;
            }
        }
    }

    const clear = () => {
        while(document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    };

    const update = () => {
        const menuBtn = state.header.querySelector('button');
        const projects = state.sideBar.querySelectorAll('button.project');
        const addProject = state.sideBar.querySelector('.add-project');
        const addProjectBtn = state.sideBar.querySelector('.add-project button');
        const addTaskContainer = state.content.querySelector('.add-task-container');
        const addTaskBtn = state.content.querySelector('.add-task-btn');

        updateTask();

        addTaskBtn.addEventListener('click', () => {
            // If div.add-project has active class
            if(addTaskBtn.classList.contains('active')) {
                // delete inputAddProject
                addTaskContainer.removeChild(state.content.querySelector('.input-container'));
                // remove active class
                addTaskBtn.classList.remove('active');
            }
            else {
                // render input
                renderAddTaskInput(state.content.querySelector('.add-task-container'));
                updateAddTaskInput();
                // add active class
                addTaskBtn.classList.add('active');
            }    
        });
        
        projects.forEach((projectElement, index) => {
            projectElement.addEventListener('click', () => {
                let projectState;
                for(let i = 0; i < _directory__WEBPACK_IMPORTED_MODULE_2__.directory.defaultProjects.length; i++) {
                    if(_directory__WEBPACK_IMPORTED_MODULE_2__.directory.defaultProjects[i].name == projectElement.querySelector('p').textContent.toLowerCase()) {
                        projectState = _directory__WEBPACK_IMPORTED_MODULE_2__.directory.defaultProjects[i];
                    }
                }
                for(let i = 0; i < _directory__WEBPACK_IMPORTED_MODULE_2__.directory.createdProjects.length; i++) {
                    if(_directory__WEBPACK_IMPORTED_MODULE_2__.directory.createdProjects[i].name == projectElement.querySelector('p').textContent.toLowerCase()) {
                        projectState = _directory__WEBPACK_IMPORTED_MODULE_2__.directory.createdProjects[i];
                    }
                }
                _directory__WEBPACK_IMPORTED_MODULE_2__.directory.currentProject = projectState;
                render();
            });
        });

        menuBtn.addEventListener('click', () => {
            const aside = document.body.querySelector('aside');
            if(aside === null) {
                render();

            } else {
                document.body.removeChild(aside);
            }
        });

        addProjectBtn.addEventListener('click', () => {
            // If div.add-project has active class
            if(addProjectBtn.classList.contains('active')) {
                // delete inputAddProject
                addProject.removeChild(document.querySelector('.input-container'));
                // remove active class
                addProjectBtn.classList.remove('active');
            }
            else {
                // render inputAddProject
                const inputAddProject = renderInputAddProject(addProject);
                // add active class
                addProjectBtn.classList.add('active');

                // AddBtn Event Listner
                const addBtn = inputAddProject.querySelector('.add');
                addBtn.addEventListener('click', () => {
                    const input = inputAddProject.querySelector('input');
                    
                    if(input.value !== "") {
                       _directory__WEBPACK_IMPORTED_MODULE_2__.directory.createProject(input.value);
                       // delete inputAddProject
                        addProject.removeChild(document.querySelector('.input-container'));
                        // remove active class
                        addProjectBtn.classList.remove('active');
                        // render page
                        render();
                    }
                    
                });

                // CancelBtn Event Listner
                const cancelBtn = inputAddProject.querySelector('.cancel');
                cancelBtn.addEventListener('click', () => {
                    // delete inputAddProject
                    addProject.removeChild(document.querySelector('.input-container'));
                    // remove active class
                    addProjectBtn.classList.remove('active');
                });
            }  
                
        });
    }

    const updateTask = () => {
        const tasks = state.content.querySelectorAll('.task');
        tasks.forEach((task, index) => {
            const detailsBtn = task.querySelector('.details');
            detailsBtn.addEventListener('click', () => {
                let detailsContainer = task.querySelector('.details-container');

                if(detailsContainer) {
                    task.removeChild(detailsContainer);
                }
                else {
                    // Div : Details Container
                    detailsContainer = createElement('div', task, 'details-container');
                        // P : Details
                        const detailsPara = createElement('p', detailsContainer);
                        detailsPara.textContent = _directory__WEBPACK_IMPORTED_MODULE_2__.directory.currentProject.tasks[index].details;
                }
            });
        });
    };

    const updateAddTaskInput = () => {
        const addTaskContainer = state.content.querySelector('div.add-task-container');
        const addTaskBtn = state.content.querySelector('div.add-task-btn');
        const addTaskInputContainer = state.content.querySelector('div.add-task-container div.input-container');
        
        // Priority btns
        const priorityBtns = addTaskInputContainer.querySelectorAll('.priority');
        
        priorityBtns.forEach((priority, index) => {
            priority.addEventListener('click', () => {
                // if priority is low, set background to blue
                if(priority.classList.contains('low')) {
                    priority.classList.add('active-low');
                    // others
                    priorityBtns[1].classList.remove('active-medium');
                    priorityBtns[2].classList.remove('active-high');
                }
                // if priority is medium, set background to orange
                else if(priority.classList.contains('medium')) {
                    priority.classList.add('active-medium');
                    // others
                    priorityBtns[0].classList.remove('active-low');
                    priorityBtns[2].classList.remove('active-high');
                }
                // if priority is low, set background to red
                else if(priority.classList.contains('high')) {
                    priority.classList.add('active-high');
                    // others
                    priorityBtns[0].classList.remove('active-low');
                    priorityBtns[1].classList.remove('active-medium');
                }
            });
        });

        // Add btn
        const addBtn = addTaskInputContainer.querySelector('.add');
        addBtn.addEventListener('click', () => {
            // Add Task Input Container
            // Get Title value 
            let titleValue = addTaskInputContainer.querySelector('.title').value;
            // Get Details Value
            let detailsValue = addTaskInputContainer.querySelector('textarea').value;
            // Get Priority
            let priorityValue;
            priorityBtns.forEach((priority,) => {
                if(priority.classList.contains('active-low')) {
                    priorityValue = 'low';
                }
                else if(priority.classList.contains('active-medium')) {
                    priorityValue = 'medium';
                } 
                else if(priority.classList.contains('active-high')) {
                    priorityValue = 'high';
                }
            });
            // Get Due Date Value
            let dueDateValue = addTaskInputContainer.querySelector('div.due-date input').value;
            // Get Project
            let projectValue = addTaskInputContainer.querySelector('div.project select').value;

            // create Task
            const newTask = (0,_task__WEBPACK_IMPORTED_MODULE_10__.task)(titleValue, detailsValue, priorityValue, dueDateValue, projectValue.slice(0,1).toLowerCase() + projectValue.slice(1));

            // Get project from directory
            const project = _directory__WEBPACK_IMPORTED_MODULE_2__.directory.getProject(projectValue.slice(0,1).toLowerCase() + projectValue.slice(1));

            // add task to project
            project.addTask(newTask);

            render();
        });

        // Cancel btn
        const cancelBtn = addTaskInputContainer.querySelector('.cancel');

        cancelBtn.addEventListener('click', () => {
            // delete inputAddProject
            addTaskContainer.removeChild(addTaskInputContainer);
            // remove active class
            addTaskBtn.classList.remove('active'); 
        });
    }

    // In > Out: String, Object, String, String
    // In > Out: child, parent, class, id
    const createElement = (child, parent, clss=null, id=null) => {
        const element = document.createElement(child);
        parent.appendChild(element);
        if(clss !== null) {
            if(Array.isArray(clss)) {
                for(let i = 0; i < clss.length; i++) {
                    element.classList.add(clss[i]);
                }
            } 
            else {
                element.classList.add(clss);
            }
        }
        if(id !== null) {
            element.setAttribute('id', id);
        } 
        return element;
    };

    // Add elements that go into the header
    const renderHeader = () => {
        const header = createElement('header', state.main);
        // sidebar menu, if side bar is not displayed
        // site name title : ToDolist
            const menuBtn = createElement('button', header, 'menu');
                const btnImg = createElement('img', menuBtn);
                btnImg.setAttribute('src', _icons_menu_svg__WEBPACK_IMPORTED_MODULE_0__);
            const title = createElement('h1', header, 'title');
            title.textContent = "Todo List";
        return header;
    };

    // Render Elements of sidebar
    const renderSideBar = () => {
        const sideBar = createElement('aside', document.body);

            // Div HomeContainer
            const homeContainer = createElement('div', sideBar, 'home-container');
                // Btn : ^ Home
                const homeBtn = createElement('button', homeContainer, 'title');
                    // Img
                    const homeArrow = createElement('img', homeBtn, 'arrow');
                    homeArrow.setAttribute('src', _icons_arrow_svg__WEBPACK_IMPORTED_MODULE_3__);
                    // Para
                    const homeText = createElement('p', homeBtn, 'text');
                    homeText.textContent = "Home";
                // Div : Default Projects
                const defaultProjects = createElement('div', homeContainer, 'default-projects');
                    // Loop throw directory.createProjects 
                    // Render each Project as a btn
                    for(let i = 0; i < _directory__WEBPACK_IMPORTED_MODULE_2__.directory.defaultProjects.length; i++) {
                        let projectName = _directory__WEBPACK_IMPORTED_MODULE_2__.directory.defaultProjects[i].name;
                        // Btn
                        const projectBtn = createElement('button', defaultProjects, ["project", projectName]);
                            // Img
                            const img = createElement('img', projectBtn);
                            if(projectName === 'inbox') {
                                img.setAttribute('src', _icons_inbox_svg__WEBPACK_IMPORTED_MODULE_4__);
                            }
                            else if(projectName === 'today') {
                                img.setAttribute('src', _icons_star_svg__WEBPACK_IMPORTED_MODULE_5__);
                            }
                            else if(projectName === 'upcoming') {
                                img.setAttribute('src', _icons_calendar_svg__WEBPACK_IMPORTED_MODULE_6__);
                            }
                            // Para
                            const text = createElement('p', projectBtn);
                            text.textContent = projectName.slice(0,1).toUpperCase() + projectName.slice(1);
                    }
            // Div Projects
                // Divs : List-of-Projects
                // Div : Add Project
                    // Input
                    // Div
                        // Btn : Add
                        // Btn : Cancel
            // Div Projects
            const projectsContainer = createElement('div', sideBar, 'project-container');
                // Btn : ^ project
                const projectBtn = createElement('button', projectsContainer, 'title');
                    // Img
                    const projectArrow = createElement('img', projectBtn, 'arrow');
                    projectArrow.setAttribute('src', _icons_arrow_svg__WEBPACK_IMPORTED_MODULE_3__);
                    // Para
                    const projectText = createElement('p', projectBtn, 'text');
                    projectText.textContent = "Project";
                // Div : Created Projects
                const createdProjects = createElement('div', projectsContainer, 'created-projects')

                    // render created projects in directory
                    for(let i = 0; i < _directory__WEBPACK_IMPORTED_MODULE_2__.directory.createdProjects.length; i++) {
                        let projectName = _directory__WEBPACK_IMPORTED_MODULE_2__.directory.createdProjects[i].name;
                        // Div : divProject
                        const divProject = createElement('div', createdProjects, 'project-div')
                            // Btn : Project
                            const projectBtn = createElement('button', divProject, ["project", projectName]);
                                //Img
                                // Para
                                const projText = createElement('p', projectBtn);
                                projText.textContent = projectName.slice(0,1).toUpperCase() + projectName.slice(1);
                            // Btn : Edit
                            const editBtn = createElement('button', divProject, 'edit');
                                //Img
                                const editImg = createElement('img', editBtn);
                                editImg.setAttribute('src', _icons_edit_svg__WEBPACK_IMPORTED_MODULE_9__);
                            // Btn : Delete
                            const deleteBtn = createElement('button', divProject, 'delete');
                                // Img
                                const deleteImg = createElement('img', deleteBtn);
                                deleteImg.setAttribute('src', _icons_trash_svg__WEBPACK_IMPORTED_MODULE_8__);
                    }
                // Render Create New Project Form
                const addProjectsContainer = addProjectElement(projectsContainer);
        return sideBar;
    };

    const addProjectElement = (project) => {
        // Div : createProjectContainer
        const addProjectsContainer = createElement('div', project, 'add-project-container');
            // Div : Title-Container
            const titleContainer = createElement('div', addProjectsContainer, 'add-project');
                // Btn : addProjectBtn
                const addProjectBtn = createElement('button', titleContainer);
                    // Img : Plus in Circle
                    const img = createElement('img', addProjectBtn);
                    img.setAttribute('src', _icons_circlePlus_svg__WEBPACK_IMPORTED_MODULE_7__);
                    // Para : Add Project
                    const title = createElement('p', addProjectBtn);
                    title.textContent = 'Add Project';
        return addProjectsContainer;        
    };

    const renderInputAddProject = (parent) => {
         // Div : Input Container
        const inputContainer = createElement('div', parent, 'input-container');
            // Input 
            const input = createElement('input', inputContainer);
            // Div : Btn Container
            const btnContainer = createElement('div', inputContainer, 'buttons');
                // Btn : Add
                const addBtn = createElement('button', btnContainer, 'add');
                addBtn.textContent = "Add";
                // Btn : Cancel 
                const cancleBtn = createElement('button', btnContainer, 'cancel');
                cancleBtn.textContent = "Cancel";
        return inputContainer;
    };

    const renderContent = () => {
        const content = createElement('div', state.main, 'content');
        // task
        renderTasks(content);
        
        //Add Task
        renderAddTask(content);
        return content;
    };

    const renderTasks = (content) => {
        const project = _directory__WEBPACK_IMPORTED_MODULE_2__.directory.currentProject;

        // Div Task Container
        const taskContainer = createElement('div', content, 'task-container');
        // // List of Tasks
        for(let i = 0; i < project.tasks.length; i++) {
            renderTask(project.tasks[i], taskContainer);
        }
    }

    const renderTask = (taskObject, taskContainer) => {
        // Div : Tasks
        const taskDiv = createElement('div', taskContainer, 'task');
        taskDiv.classList.add(taskObject.priority + '-task');
            // Div : Content
            const content = createElement('div', taskDiv, 'task-content');
                // Div : Left Side
                const leftDiv = createElement('div', content, 'left-side');
                    // Input : Checkbox
                    const checkBox = createElement('input', leftDiv, 'checkbox');
                    checkBox.setAttribute('type', 'checkbox');
                    // Para : Title
                    const para = createElement('p', leftDiv, 'title');
                    para.textContent = taskObject.title;
                // Div : Right Side
                const rightDiv = createElement('div', content, 'right-side');
                    // Btn : Details
                    const detailsBtn = createElement('button', rightDiv, 'details');
                        // Para
                        const detailsPara = createElement('p', detailsBtn);
                        detailsPara.textContent = "Details";
                    // Para : Due Date
                    const dueDatePara = createElement('p', rightDiv, 'due-date');
                    dueDatePara.textContent = taskObject.dueDate;
                    // Btn : Edit Btn
                    const editBtn = createElement('button', rightDiv, 'edit');
                        // Img : Edit
                        const editImg = createElement('img', editBtn);
                        editImg.setAttribute('src', _icons_edit_svg__WEBPACK_IMPORTED_MODULE_9__);
                    // Btn : Delete Btn
                    const deleteBtn = createElement('button', rightDiv, 'delete');
                        // Img : Delete
                        const deleteImg = createElement('img', deleteBtn);
                        deleteImg.setAttribute('src', _icons_trash_svg__WEBPACK_IMPORTED_MODULE_8__);

        return _task__WEBPACK_IMPORTED_MODULE_10__.task;
    };

    const renderAddTask = (content) => {
        // Div 
        const div = createElement('div', content, 'add-task-container');
            // Div : Add Task
            const addTaskDiv = createElement('div', div, 'add-task-btn');
                // Img : circlePlus
                const circlePlusImg = createElement('img', addTaskDiv);
                circlePlusImg.setAttribute('src', _icons_circlePlus_svg__WEBPACK_IMPORTED_MODULE_7__);
                // P : Add Task
                const text = createElement('p', addTaskDiv, 'text');
                text.textContent = "Add Task";
    };

    const renderAddTaskInput = (parent) => {
        // Div 
        const container = createElement('div', parent, 'input-container');
            // Input : Title
            const titleInput = createElement('input', container, 'title');
            titleInput.setAttribute('placeholder', 'Title');
            // Input : Details
            const detailTextArea = createElement('textarea', container);
            detailTextArea.setAttribute('placeholder', 'Details');
            // Div : Date-Project
            const dateProjectDiv = createElement('div', container, 'date-project');
                // Div : Due Date
                const dueDateDiv = createElement('div', dateProjectDiv, 'due-date');
                    // P
                    const dueDatePara = createElement('p', dueDateDiv);
                    dueDatePara.textContent = 'Due Date:';
                    // Input Type Date
                    const dueDateInput = createElement('input', dueDateDiv);
                    dueDateInput.setAttribute('type', 'date');
                // Div : Project
                const projectDiv = createElement('div', dateProjectDiv, 'project');
                    // P : Project
                    const projectPara = createElement('p', projectDiv);
                    projectPara.textContent = 'Project:';
                    // Selector : directory list of createdprojects
                    const projectSelector = createElement('select', projectDiv);
                        // Temp
                        renderProjectOptions(projectSelector);
            // Div : Priority-Add-Cancel
            const priorityAddCancelDiv = createElement('div', container, 'priority-add-cancel');
                // Div : Priority
                const priorityDiv = createElement('div', priorityAddCancelDiv, 'priorities');
                    // Div : Priority Text container
                    const priorityParaDiv = createElement('div', priorityDiv, 'text-div');
                        // P : Priortity:
                        const priorityPara = createElement('p', priorityParaDiv);
                        priorityPara.textContent = "Priority: "
                    // Div : Low
                    const lowPriorityDiv = createElement('div', priorityDiv, ['low', 'priority', 'active-low']);
                        // P : Low
                        const lowPara = createElement('p', lowPriorityDiv);
                        lowPara.textContent = 'Low';
                    // Div : Medium
                    const mediumPriorityDiv = createElement('div', priorityDiv, ['medium', 'priority']);
                        // P : Medium
                        const mediumPara = createElement('p', mediumPriorityDiv);
                        mediumPara.textContent = 'Medium';
                    // Div : High
                    const highPriorityDiv = createElement('div', priorityDiv, ['high', 'priority']);
                        // P : High
                        const highPara = createElement('p', highPriorityDiv);
                        highPara.textContent = 'High';
                // Div : Add-Cancel
                const addCancelDiv = createElement('div', priorityAddCancelDiv, 'add-cancel');
                    // Div : Add
                    const addDiv = createElement('div', addCancelDiv, 'add');
                        // P : Add
                        const addPara = createElement('p', addDiv);
                        addPara.textContent = "Add";
                    // Div : Cancel
                    const cancelDiv = createElement('div', addCancelDiv, 'cancel');
                        // P : Cancel
                        const cancelPara = createElement('p', cancelDiv);
                        cancelPara.textContent = "Cancel";
    };

    //
    const renderProjectOptions = (selector) => {
        for(let i = 0; i < _directory__WEBPACK_IMPORTED_MODULE_2__.directory.createdProjects.length; i++) {
            const name = _directory__WEBPACK_IMPORTED_MODULE_2__.directory.createdProjects[i].name;
            const option = createElement('option', selector);
            option.textContent = name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase();
        }
    }

    // Render Element of Footer
    const renderFooter = () => {
        const footer = createElement('footer', state.main);
            // Para : Copy Right
            const copyRightText = createElement('p', footer, 'text');
            copyRightText.innerHTML = "&#169; Jar'Zeno Jarrett";
            // A : Github link
                const githubLink = createElement('a', footer, 'github-link');
                githubLink.setAttribute('href', 'https://github.com/Bantchee');
                githubLink.setAttribute('target', '_blank');
                // Img : Github
                const githubImg = createElement('img', githubLink);
                githubImg.setAttribute('src', _icons_github_svg__WEBPACK_IMPORTED_MODULE_1__);
        return footer;
    }

    return Object.assign(
        state, 
        {render},
        {update},
    );
};

/***/ }),

/***/ "./src/scripts/task.js":
/*!*****************************!*\
  !*** ./src/scripts/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "task": () => (/* binding */ task)
/* harmony export */ });
// Priority :
    // 1. String > "Low"
    // 2. String > "Medium"
    // 3. String > "High"

// In > Out : String String Priority Date Project > Object
const task = (title, details, priority, dueDate, projectName) => {
    const state = {
        title,
        details,
        priority,
        dueDate,
        projectName,
        id: null,
    }

    // CRUD : Create, Read, Update, Delete

    const genRandomId = () => Math.random();

    const get = (property) => {
        if(state.hasOwnProperty(property)) {
            return state[property] 
        } else {
            console.error(`The property ${property} does not exist`);
        }
    };

    const set = (property, value) => {
        if(state.hasOwnProperty(property)) {
            state[property] = value;
        } else {
            console.error(`The property ${property} does not exist`);
        }
    };

    // Change Project
    // Delete Task

    state.id = genRandomId();

    return Object.assign(
        state,
        {get},
        {set}
    );
};

/***/ }),

/***/ "./src/icons/arrow.svg":
/*!*****************************!*\
  !*** ./src/icons/arrow.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "45a1a7112bf6255f362b.svg";

/***/ }),

/***/ "./src/icons/calendar.svg":
/*!********************************!*\
  !*** ./src/icons/calendar.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0aa970cf2052f800fc7a.svg";

/***/ }),

/***/ "./src/icons/circlePlus.svg":
/*!**********************************!*\
  !*** ./src/icons/circlePlus.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "27855bd509cac94bdbba.svg";

/***/ }),

/***/ "./src/icons/edit.svg":
/*!****************************!*\
  !*** ./src/icons/edit.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f9a985514490b0533545.svg";

/***/ }),

/***/ "./src/icons/github.svg":
/*!******************************!*\
  !*** ./src/icons/github.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e7ab8675a2cbadea548c.svg";

/***/ }),

/***/ "./src/icons/inbox.svg":
/*!*****************************!*\
  !*** ./src/icons/inbox.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ecc13d6312bef146aef0.svg";

/***/ }),

/***/ "./src/icons/menu.svg":
/*!****************************!*\
  !*** ./src/icons/menu.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "644fa295fdd5f662e642.svg";

/***/ }),

/***/ "./src/icons/star.svg":
/*!****************************!*\
  !*** ./src/icons/star.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8070f2335a60a0172b4c.svg";

/***/ }),

/***/ "./src/icons/trash.svg":
/*!*****************************!*\
  !*** ./src/icons/trash.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a864b6b6ee9ef0386c78.svg";

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/task */ "./src/scripts/task.js");
/* harmony import */ var _scripts_renderPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/renderPage */ "./src/scripts/renderPage.js");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");




const t = (0,_scripts_task__WEBPACK_IMPORTED_MODULE_0__.task)('Wash Clothes', 'Put clothes in the washing machine', 'high', 'now', 'Chours');

const p = (0,_scripts_renderPage__WEBPACK_IMPORTED_MODULE_1__.page)();
p.render();

// State
    // directory.js module
        // project.js factory
            // task.js factory
// DOM Rendering
    // Render Static page, Including Sidebar menu
        // Div#Content Dynamicly rendered, changes when clicking on project in sidebar menu
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxLQUFLLFlBQVksT0FBTyxVQUFVLEtBQUssV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxhQUFhLGFBQWEsY0FBYyxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGNBQWMsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksY0FBYyxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEs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QSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7O0FDQW9DO0FBQ007QUFDZDs7QUFFNUIsVUFBVSxtREFBSTs7QUFFZCxVQUFVLHlEQUFJO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvaW5kZXguY3NzPzYzNDkiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9kaXJlY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9yZW5kZXJQYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgLS13aGl0ZTogI2ZmZmZmZjtcXG4gICAgLS1saWdodC1ncmV5OiAjRDlEOUQ5O1xcbiAgICAtLWRhcmstZ3JleTogIzQ1NDU0NTtcXG4gICAgLS1ibGFjazogIzAwMDAwMDtcXG4gICAgLS1ibGFjay10aW50OiByZ2JhKDAsIDAsIDAsIDAuNTApO1xcbiAgICAtLWJsdWU6ICMwMDg1RkY7XFxuICAgIC0tYmx1ZS1saWdodDogI2JhZGNmYztcXG4gICAgLS1vcmFuZ2U6ICNGRjk5MDA7XFxuICAgIC0tb3JhbmdlLWxpZ2h0OiAjRkFFN0NDO1xcbiAgICAtLXJlZDogI0ZGMDAwMDtcXG4gICAgLS1yZWQtbGlnaHQ6ICNGQ0NFQ0U7XFxuICAgIC0tZ3JlZW46ICMzM0M1MDA7XFxuICAgIC0tbGlnaHQtZ3JlZW46ICNEN0ZGQzk7XFxuICAgIC0tZ2l0aHViLWltZy1zaXplOiAzMnB4O1xcbn1cXG5cXG46cm9vdCBwIHtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgLyogVGVtcCAqL1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi8qIEFzaWRlICAqL1xcbmFzaWRlIHtcXG4gICAgZmxleDogMTtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5hc2lkZSBwIHtcXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG5hc2lkZSAuaG9tZS1jb250YWluZXIsIGFzaWRlIC5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmFzaWRlIGJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBmb250LXNpemU6IDEuMjVlbTtcXG59XFxuXFxuYXNpZGUgYnV0dG9uOmhvdmVyIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpOyAqL1xcbn1cXG5cXG5hc2lkZSBidXR0b24udGl0bGUge1xcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS13aGl0ZSkgc29saWQgNXB4O1xcbn1cXG5cXG5hc2lkZSAuaG9tZS1jb250YWluZXIgLmRlZmF1bHQtcHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5hc2lkZSBkaXYucHJvamVjdC1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5hc2lkZSBpbWcgeyBcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMTAwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMjQ4ZGVnKSBicmlnaHRuZXNzKDEwNiUpIGNvbnRyYXN0KDEwNiUpO1xcbn1cXG5cXG5hc2lkZSBidXR0b24uY3VycmVudC1wcm9qZWN0IHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qIE1haW4gKi9cXG5kaXYubWFpbiB7XFxuICAgIGZsZXg6IDQ7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmRpdi5tYWluIGhlYWRlciB7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgLyogVGVtcCAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXFxufVxcblxcbmRpdi5tYWluIGhlYWRlciBidXR0b24ubWVudSB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5kaXYubWFpbiBoZWFkZXIgaDEudGl0bGUge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiBhdXRvO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogM2VtO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCB7XFxuICAgIGZsZXg6IDQ7XFxuICAgIHBhZGRpbmc6IDE2cHggNjRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4vKiBUYXNrIFN0eWxpbmcgKi9cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCBkaXYudGFzay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICByb3ctZ2FwOiA4cHg7IFxcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCBkaXYudGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuXFxuICAgIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgZGl2LnRhc2stY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IGRpdi5sb3ctdGFzayB7XFxuICAgIGJvcmRlci1yaWdodDogdmFyKC0tYmx1ZSkgc29saWQgNHB4O1xcbiAgICBib3JkZXItbGVmdDogdmFyKC0tYmx1ZSkgc29saWQgNHB4O1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCBkaXYubWVkaXVtLXRhc2sge1xcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLW9yYW5nZSkgc29saWQgNHB4O1xcbiAgICBib3JkZXItbGVmdDogdmFyKC0tb3JhbmdlKSBzb2xpZCA0cHg7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IGRpdi5oaWdoLXRhc2sge1xcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLXJlZCkgc29saWQgNHB4O1xcbiAgICBib3JkZXItbGVmdDogdmFyKC0tcmVkKSBzb2xpZCA0cHg7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IGRpdi5sZWZ0LXNpZGUge1xcbiAgICBncmlkLWFyZWE6IGxlZnQ7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbHVtbi1nYXA6IDRweDtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgZGl2LmxlZnQtc2lkZSBpbnB1dCB7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCBkaXYucmlnaHQtc2lkZSB7XFxuICAgIGdyaWQtYXJlYTogcmlnaHQ7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2x1bW4tZ2FwOiA0cHg7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IGRpdi5kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmFkZC10YXNrLWJ0biB7XFxuICAgIHdpZHRoOiAxMzVweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sdW1uLWdhcDogNHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmFkZC10YXNrLWJ0biBwIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuYWRkLXRhc2stYnRuIGltZyB7XFxuICAgIHdpZHRoOiAyNHB4O1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICByb3ctZ2FwOiA0cHg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcbiAgICBwYWRkaW5nOiAxNnB4IDI0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1ibHVlKSBzb2xpZCA0cHg7XFxuICAgIGJvcmRlci1sZWZ0OiB2YXIoLS1ibHVlKSBzb2xpZCA0cHg7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciBwIHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgaW5wdXQudGl0bGUge1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmctbGVmdDogNHB4O1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgdGV4dGFyZWEge1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmctbGVmdDogNHB4O1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgZGl2LmRhdGUtcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbHVtbi1nYXA6IDE2cHg7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciBkaXYuZHVlLWRhdGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2x1bW4tZ2FwOiA0cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIGRpdi5wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sdW1uLWdhcDogNHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciAucHJpb3JpdHktYWRkLWNhbmNlbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHJvdy1nYXA6IDRweDtcXG4gICAgY29sdW1uLWdhcDogMjRweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIC5wcmlvcml0aWVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sdW1uLWdhcDogNHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLnByaW9yaXRpZXMgLnByaW9yaXR5IHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHBhZGRpbmc6IDRweCAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLnByaW9yaXRpZXMgLmxvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtbGlnaHQpO1xcbiAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIGJvcmRlci1sZWZ0OiB2YXIoLS1ibHVlKSBzb2xpZCA0cHg7XFxuICAgIGJvcmRlci1yaWdodDogdmFyKC0tYmx1ZSkgc29saWQgNHB4O1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLnByaW9yaXRpZXMgLmxvdzpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1ibHVlLWxpZ2h0KTtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIC5wcmlvcml0aWVzIC5hY3RpdmUtbG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1ibHVlLWxpZ2h0KTtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIC5wcmlvcml0aWVzIC5tZWRpdW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UtbGlnaHQpO1xcbiAgICBjb2xvcjogdmFyKC0tb3JhbmdlKTtcXG4gICAgYm9yZGVyLWxlZnQ6IHZhcigtLW9yYW5nZSkgc29saWQgNHB4O1xcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLW9yYW5nZSkgc29saWQgNHB4O1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLnByaW9yaXRpZXMgLm1lZGl1bTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcXG4gICAgY29sb3I6IHZhcigtLW9yYW5nZS1saWdodCk7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciAucHJpb3JpdGllcyAuYWN0aXZlLW1lZGl1bSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1vcmFuZ2UtbGlnaHQpO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLnByaW9yaXRpZXMgLmhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtbGlnaHQpO1xcbiAgICBjb2xvcjogdmFyKC0tcmVkKTtcXG4gICAgYm9yZGVyLWxlZnQ6IHZhcigtLXJlZCkgc29saWQgNHB4O1xcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLXJlZCkgc29saWQgNHB4O1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLnByaW9yaXRpZXMgLmhpZ2g6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQtbGlnaHQpO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLnByaW9yaXRpZXMgLmFjdGl2ZS1oaWdoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXG4gICAgY29sb3I6IHZhcigtLXJlZC1saWdodCk7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciAuYWRkLWNhbmNlbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxuICAgIGNvbHVtbi1nYXA6IDRweDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciAuYWRkIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHBhZGRpbmc6IDRweCAwcHg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZWVuKTtcXG4gICAgY29sb3I6IHZhcigtLWdyZWVuKTtcXG4gICAgYm9yZGVyLWxlZnQ6IHZhcigtLWdyZWVuKSBzb2xpZCA0cHg7XFxuICAgIGJvcmRlci1yaWdodDogdmFyKC0tZ3JlZW4pIHNvbGlkIDRweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciAuYWRkOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1ncmVlbik7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciAuY2FuY2VsIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHBhZGRpbmc6IDRweCAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1saWdodCk7XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgICBib3JkZXItbGVmdDogdmFyKC0tcmVkKSBzb2xpZCA0cHg7XFxuICAgIGJvcmRlci1yaWdodDogdmFyKC0tcmVkKSBzb2xpZCA0cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLmNhbmNlbDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXG4gICAgY29sb3I6IHZhcigtLXJlZC1saWdodCk7XFxufVxcblxcbmRpdi5tYWluIGZvb3RlciB7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjb2x1bW4tZ2FwOiAxNnB4O1xcbn1cXG5cXG5kaXYubWFpbiBmb290ZXIgcC50ZXh0IHtcXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5kaXYubWFpbiBmb290ZXIgYSB7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgd2lkdGg6IHZhcigtLWdpdGh1Yi1pbWctc2l6ZSk7XFxuICAgIGhlaWdodDogdmFyKC0tZ2l0aHViLWltZy1zaXplKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBwYWRkaW5nOiA2cHg7XFxufVxcblxcbmRpdi5tYWluIGZvb3RlciBhOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbn1cXG5cXG5kaXYubWFpbiBmb290ZXIgYTpob3ZlciBpbWcge1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgxMDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgyNDhkZWcpIGJyaWdodG5lc3MoMTA2JSkgY29udHJhc3QoMTA2JSk7XFxufVxcblxcbmRpdi5tYWluIGZvb3RlciBhIGltZyB7XFxuICAgIHdpZHRoOiB2YXIoLS1naXRodWItaW1nLXNpemUpO1xcbiAgICBoZWlnaHQ6IHZhcigtLWdpdGh1Yi1pbWctc2l6ZSk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksd0lBQXdJO0lBQ3hJLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFNBQVM7SUFDVCxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQSxXQUFXO0FBQ1g7SUFDSSxPQUFPO0lBQ1AsWUFBWTtJQUNaLGtDQUFrQzs7SUFFbEMsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjs7SUFFbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osbUJB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Qiw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZ0dBQWdHO0FBQ3BHOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLDhCQUE4QjtBQUNsQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIC0td2hpdGU6ICNmZmZmZmY7XFxuICAgIC0tbGlnaHQtZ3JleTogI0Q5RDlEOTtcXG4gICAgLS1kYXJrLWdyZXk6ICM0NTQ1NDU7XFxuICAgIC0tYmxhY2s6ICMwMDAwMDA7XFxuICAgIC0tYmxhY2stdGludDogcmdiYSgwLCAwLCAwLCAwLjUwKTtcXG4gICAgLS1ibHVlOiAjMDA4NUZGO1xcbiAgICAtLWJsdWUtbGlnaHQ6ICNiYWRjZmM7XFxuICAgIC0tb3JhbmdlOiAjRkY5OTAwO1xcbiAgICAtLW9yYW5nZS1saWdodDogI0ZBRTdDQztcXG4gICAgLS1yZWQ6ICNGRjAwMDA7XFxuICAgIC0tcmVkLWxpZ2h0OiAjRkNDRUNFO1xcbiAgICAtLWdyZWVuOiAjMzNDNTAwO1xcbiAgICAtLWxpZ2h0LWdyZWVuOiAjRDdGRkM5O1xcbiAgICAtLWdpdGh1Yi1pbWctc2l6ZTogMzJweDtcXG59XFxuXFxuOnJvb3QgcCB7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIC8qIFRlbXAgKi9cXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4vKiBBc2lkZSAgKi9cXG5hc2lkZSB7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuYXNpZGUgcCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuYXNpZGUgLmhvbWUtY29udGFpbmVyLCBhc2lkZSAucHJvamVjdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5hc2lkZSBidXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XFxufVxcblxcbmFzaWRlIGJ1dHRvbjpob3ZlciB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTsgKi9cXG59XFxuXFxuYXNpZGUgYnV0dG9uLnRpdGxlIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0td2hpdGUpIHNvbGlkIDVweDtcXG59XFxuXFxuYXNpZGUgLmhvbWUtY29udGFpbmVyIC5kZWZhdWx0LXByb2plY3RzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuYXNpZGUgZGl2LnByb2plY3QtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuYXNpZGUgaW1nIHsgXFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDEwMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDI0OGRlZykgYnJpZ2h0bmVzcygxMDYlKSBjb250cmFzdCgxMDYlKTtcXG59XFxuXFxuYXNpZGUgYnV0dG9uLmN1cnJlbnQtcHJvamVjdCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKiBNYWluICovXFxuZGl2Lm1haW4ge1xcbiAgICBmbGV4OiA0O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5kaXYubWFpbiBoZWFkZXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIC8qIFRlbXAgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxcbn1cXG5cXG5kaXYubWFpbiBoZWFkZXIgYnV0dG9uLm1lbnUge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuZGl2Lm1haW4gaGVhZGVyIGgxLnRpdGxlIHtcXG4gICAgcGFkZGluZy1yaWdodDogYXV0bztcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDNlbTtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQge1xcbiAgICBmbGV4OiA0O1xcbiAgICBwYWRkaW5nOiAxNnB4IDY0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLyogVGFzayBTdHlsaW5nICovXFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgZGl2LnRhc2stY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcm93LWdhcDogOHB4OyBcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgZGl2LnRhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcblxcbiAgICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IGRpdi50YXNrLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCBkaXYubG93LXRhc2sge1xcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLWJsdWUpIHNvbGlkIDRweDtcXG4gICAgYm9yZGVyLWxlZnQ6IHZhcigtLWJsdWUpIHNvbGlkIDRweDtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgZGl2Lm1lZGl1bS10YXNrIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1vcmFuZ2UpIHNvbGlkIDRweDtcXG4gICAgYm9yZGVyLWxlZnQ6IHZhcigtLW9yYW5nZSkgc29saWQgNHB4O1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCBkaXYuaGlnaC10YXNrIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1yZWQpIHNvbGlkIDRweDtcXG4gICAgYm9yZGVyLWxlZnQ6IHZhcigtLXJlZCkgc29saWQgNHB4O1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCBkaXYubGVmdC1zaWRlIHtcXG4gICAgZ3JpZC1hcmVhOiBsZWZ0O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2x1bW4tZ2FwOiA0cHg7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IGRpdi5sZWZ0LXNpZGUgaW5wdXQge1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgZGl2LnJpZ2h0LXNpZGUge1xcbiAgICBncmlkLWFyZWE6IHJpZ2h0O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sdW1uLWdhcDogNHB4O1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCBkaXYuZGV0YWlscy1jb250YWluZXIge1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5hZGQtdGFzay1idG4ge1xcbiAgICB3aWR0aDogMTM1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbHVtbi1nYXA6IDRweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5hZGQtdGFzay1idG4gcCB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmFkZC10YXNrLWJ0biBpbWcge1xcbiAgICB3aWR0aDogMjRweDtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcm93LWdhcDogNHB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcXG4gICAgcGFkZGluZzogMTZweCAyNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlci1yaWdodDogdmFyKC0tYmx1ZSkgc29saWQgNHB4O1xcbiAgICBib3JkZXItbGVmdDogdmFyKC0tYmx1ZSkgc29saWQgNHB4O1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgcCB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIGlucHV0LnRpdGxlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIHRleHRhcmVhIHtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIGRpdi5kYXRlLXByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2x1bW4tZ2FwOiAxNnB4O1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgZGl2LmR1ZS1kYXRlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sdW1uLWdhcDogNHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciBkaXYucHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbHVtbi1nYXA6IDRweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLnByaW9yaXR5LWFkZC1jYW5jZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICByb3ctZ2FwOiA0cHg7XFxuICAgIGNvbHVtbi1nYXA6IDI0cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciAucHJpb3JpdGllcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbHVtbi1nYXA6IDRweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIC5wcmlvcml0aWVzIC5wcmlvcml0eSB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBwYWRkaW5nOiA0cHggMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIC5wcmlvcml0aWVzIC5sb3cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWxpZ2h0KTtcXG4gICAgY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICBib3JkZXItbGVmdDogdmFyKC0tYmx1ZSkgc29saWQgNHB4O1xcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLWJsdWUpIHNvbGlkIDRweDtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIC5wcmlvcml0aWVzIC5sb3c6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICBjb2xvcjogdmFyKC0tYmx1ZS1saWdodCk7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciAucHJpb3JpdGllcyAuYWN0aXZlLWxvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICBjb2xvcjogdmFyKC0tYmx1ZS1saWdodCk7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciAucHJpb3JpdGllcyAubWVkaXVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlLWxpZ2h0KTtcXG4gICAgY29sb3I6IHZhcigtLW9yYW5nZSk7XFxuICAgIGJvcmRlci1sZWZ0OiB2YXIoLS1vcmFuZ2UpIHNvbGlkIDRweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1vcmFuZ2UpIHNvbGlkIDRweDtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIC5wcmlvcml0aWVzIC5tZWRpdW06aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1vcmFuZ2UtbGlnaHQpO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLnByaW9yaXRpZXMgLmFjdGl2ZS1tZWRpdW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcbiAgICBjb2xvcjogdmFyKC0tb3JhbmdlLWxpZ2h0KTtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIC5wcmlvcml0aWVzIC5oaWdoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLWxpZ2h0KTtcXG4gICAgY29sb3I6IHZhcigtLXJlZCk7XFxuICAgIGJvcmRlci1sZWZ0OiB2YXIoLS1yZWQpIHNvbGlkIDRweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1yZWQpIHNvbGlkIDRweDtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIC5wcmlvcml0aWVzIC5oaWdoOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgICBjb2xvcjogdmFyKC0tcmVkLWxpZ2h0KTtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIC5wcmlvcml0aWVzIC5hY3RpdmUtaGlnaCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQtbGlnaHQpO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLmFkZC1jYW5jZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbiAgICBjb2x1bW4tZ2FwOiA0cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLmFkZCB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBwYWRkaW5nOiA0cHggMHB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmVlbik7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIGJvcmRlci1sZWZ0OiB2YXIoLS1ncmVlbikgc29saWQgNHB4O1xcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLWdyZWVuKSBzb2xpZCA0cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLmFkZDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JlZW4pO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLmNhbmNlbCB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBwYWRkaW5nOiA0cHggMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtbGlnaHQpO1xcbiAgICBjb2xvcjogdmFyKC0tcmVkKTtcXG4gICAgYm9yZGVyLWxlZnQ6IHZhcigtLXJlZCkgc29saWQgNHB4O1xcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLXJlZCkgc29saWQgNHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIC5jYW5jZWw6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQtbGlnaHQpO1xcbn1cXG5cXG5kaXYubWFpbiBmb290ZXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sdW1uLWdhcDogMTZweDtcXG59XFxuXFxuZGl2Lm1haW4gZm9vdGVyIHAudGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuZGl2Lm1haW4gZm9vdGVyIGEge1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIHdpZHRoOiB2YXIoLS1naXRodWItaW1nLXNpemUpO1xcbiAgICBoZWlnaHQ6IHZhcigtLWdpdGh1Yi1pbWctc2l6ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgcGFkZGluZzogNnB4O1xcbn1cXG5cXG5kaXYubWFpbiBmb290ZXIgYTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG59XFxuXFxuZGl2Lm1haW4gZm9vdGVyIGE6aG92ZXIgaW1nIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMTAwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMjQ4ZGVnKSBicmlnaHRuZXNzKDEwNiUpIGNvbnRyYXN0KDEwNiUpO1xcbn1cXG5cXG5kaXYubWFpbiBmb290ZXIgYSBpbWcge1xcbiAgICB3aWR0aDogdmFyKC0tZ2l0aHViLWltZy1zaXplKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1naXRodWItaW1nLXNpemUpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7cHJvamVjdH0gZnJvbSAnLi9wcm9qZWN0Jztcbi8vIFRlbXBcbmltcG9ydCB7dGFza30gZnJvbSAnLi90YXNrJztcblxuLy8gbW9kdWxlIHRoYXQgc3RvcmVzIGFsbCBwcm9qZWN0c1xuLy8gZGVmYXVsdCBwcm9qZWN0cyA6IEluYm94LCBUb2RheSwgVXBjb21pbmdcbi8vIGNyZWF0ZWQgcHJvamVjdHNcblxuZXhwb3J0IGNvbnN0IGRpcmVjdG9yeSA9ICgoKSA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICAgIGRlZmF1bHRQcm9qZWN0czogW1xuICAgICAgICAgICAgcHJvamVjdCgnaW5ib3gnKSxcbiAgICAgICAgICAgIHByb2plY3QoJ3RvZGF5JyksXG4gICAgICAgICAgICBwcm9qZWN0KCd1cGNvbWluZycpLFxuICAgICAgICBdLFxuICAgICAgICBjcmVhdGVkUHJvamVjdHM6IFtcbiAgICAgICAgICAgIHByb2plY3QoJ3RlbXAxJyksIFxuICAgICAgICAgICAgcHJvamVjdCgndGVtcDInKSxcbiAgICAgICAgXSxcbiAgICAgICAgY3VycmVudFByb2plY3Q6IG51bGwsXG4gICAgfTtcblxuICAgIHN0YXRlLmN1cnJlbnRQcm9qZWN0ID0gc3RhdGUuZGVmYXVsdFByb2plY3RzWzBdO1xuXG4gICAgLy8gVGVtcFxuICAgIGNvbnN0IGxvd1Rhc2sgPSB0YXNrKFwiTG93IFRhc2sgVGl0bGVcIiwgXCJDb29sIFN0dWZmIHRvIGRvXCIsIFwibG93XCIsICcxMC0xNy0yMDIyJywgJ3RlbXAxJyk7XG4gICAgY29uc3QgbWVkaXVlbVRhc2sgPSB0YXNrKFwiTWVkaXVtIFRhc2sgVGl0bGVcIiwgXCJDb29sIFN0dWZmIHRvIGRvXCIsIFwibWVkaXVtXCIsICcxMC0xNy0yMDIyJywgJ3RlbXAxJyk7XG4gICAgY29uc3QgaGlnaFRhc2sgPSB0YXNrKFwiSGlnaCBUYXNrIFRpdGxlXCIsIFwiQ29vbCBTdHVmZiB0byBkb1wiLCBcImhpZ2hcIiwgJzEwLTE3LTIwMjInLCAndGVtcDEnKTtcbiAgICBzdGF0ZS5jcmVhdGVkUHJvamVjdHNbMF0uYWRkVGFzayhsb3dUYXNrKTtcbiAgICBzdGF0ZS5jcmVhdGVkUHJvamVjdHNbMF0uYWRkVGFzayhtZWRpdWVtVGFzayk7XG4gICAgc3RhdGUuY3JlYXRlZFByb2plY3RzWzBdLmFkZFRhc2soaGlnaFRhc2spO1xuXG4gICAgY29uc3QgY3JlYXRlUHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGxvd05hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0KGxvd05hbWUpO1xuICAgICAgICBzdGF0ZS5jcmVhdGVkUHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgcmV0dXJuIG5ld1Byb2plY3Q7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFByb2plY3QgPSAobmFtZSkgPT4ge1xuICAgICAgICBpZihuYW1lID09PSAnaW5ib3gnKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUuZGVmYXVsdFByb2plY3RzWzBdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHN0YXRlLmNyZWF0ZWRQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmKG5hbWUgPT09IHN0YXRlLmNyZWF0ZWRQcm9qZWN0c1tpXS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZS5jcmVhdGVkUHJvamVjdHNbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGVsc2UgXG4gICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggY3JlYXRlUHJvamVjdHNcbiAgICAgICAgICAgICAgICAvLyBpZiBwcm9qZWN0Lm5hbWUgPT0gbmFtZVxuICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gcHJvamVjdFxuICAgIH07XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIHtjcmVhdGVQcm9qZWN0fSxcbiAgICAgICAge2dldFByb2plY3R9XG4gICAgKTtcbn0pKCk7IiwiaW1wb3J0IHsgdGFzayB9IGZyb20gXCIuL3Rhc2tcIjtcblxuLy8gSW4gPiBPdXQgOiBTdHJpbmcgTGlzdC1vZi1UYXNrcyA+IE9iamVjdFxuZXhwb3J0IGNvbnN0IHByb2plY3QgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0ge1xuICAgICAgICBuYW1lLFxuICAgICAgICB0YXNrczogW10sXG4gICAgfTtcblxuICAgIC8vIEdldCBwcm9wZXJ0eVxuICAgIGNvbnN0IGdldCA9IChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICBpZihzdGF0ZS5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVtwcm9wZXJ0eV0gXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBUaGUgcHJvcGVydHkgJHtwcm9wZXJ0eX0gZG9lcyBub3QgZXhpc3RgKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBTZXQgcHJvcGVydHlcbiAgICBjb25zdCBzZXQgPSAocHJvcGVydHksIHZhbHVlKSA9PiB7XG4gICAgICAgIGlmKHN0YXRlLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICAgICAgc3RhdGVbcHJvcGVydHldID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBUaGUgcHJvcGVydHkgJHtwcm9wZXJ0eX0gZG9lcyBub3QgZXhpc3RgKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBBZGQgVGFza1xuICAgIGNvbnN0IGFkZFRhc2sgPSAodGFzaykgPT4ge1xuICAgICAgICBnZXQoJ3Rhc2tzJykucHVzaCh0YXNrKTtcbiAgICB9XG5cbiAgICAvLyBHZXQgVGFza1xuICAgIGNvbnN0IGdldFRhc2sgPSAodGl0bGUpID0+IHtcbiAgICAgICAgZ2V0KCd0YXNrcycpLmZpbHRlcih0YXNrID0+IHRhc2sudGl0bGUgPT09IHRpdGxlKTtcbiAgICB9XG5cbiAgICAvLyBEZWxldGUgVGFza1xuICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSAodGFzaykgPT4ge1xuICAgICAgICB0YXNrcy5maWx0ZXIoeCA9PiB7XG4gICAgICAgICAgICB4LmlkID09PSB0YXNrLmlkOyBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHN0YXRlLFxuICAgICAgICB7YWRkVGFza30sXG4gICAgICAgIHtkZWxldGVUYXNrfSxcbiAgICAgICAge2dldFRhc2t9LFxuICAgICk7XG59OyIsImltcG9ydCBtZW51U3ZnIGZyb20gJy4uL2ljb25zL21lbnUuc3ZnJztcbmltcG9ydCBnaXRodWJTdmcgZnJvbSAnLi4vaWNvbnMvZ2l0aHViLnN2Zyc7XG5pbXBvcnQge2RpcmVjdG9yeX0gZnJvbSAnLi9kaXJlY3RvcnknO1xuaW1wb3J0IGFycm93U3ZnIGZyb20gJy4uL2ljb25zL2Fycm93LnN2Zyc7XG5pbXBvcnQgaW5ib3hTdmcgZnJvbSAnLi4vaWNvbnMvaW5ib3guc3ZnJztcbmltcG9ydCB0b2RheVN2ZyBmcm9tICcuLi9pY29ucy9zdGFyLnN2Zyc7XG5pbXBvcnQgdXBjb21pbmdTdmcgZnJvbSAnLi4vaWNvbnMvY2FsZW5kYXIuc3ZnJztcbmltcG9ydCBjaXJsY2VQbHVzU3ZnIGZyb20gJy4uL2ljb25zL2NpcmNsZVBsdXMuc3ZnJztcbmltcG9ydCBkZWxldGVTdmcgZnJvbSAnLi4vaWNvbnMvdHJhc2guc3ZnJztcbmltcG9ydCBlZGl0U3ZnIGZyb20gJy4uL2ljb25zL2VkaXQuc3ZnJztcbmltcG9ydCB7dGFza30gZnJvbSAnLi90YXNrJztcblxuZXhwb3J0IGNvbnN0IHBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICAgIHNpZGVCYXI6IG51bGwsXG4gICAgICAgIG1haW46IG51bGwsXG4gICAgICAgIGhlYWRlcjogbnVsbCxcbiAgICAgICAgY29udGVudDogbnVsbCxcbiAgICAgICAgZm9vdGVyOiBudWxsLFxuICAgIH07XG5cbiAgICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgIGNsZWFyKCk7XG4gICAgICAgIHN0YXRlLnNpZGVCYXIgPSByZW5kZXJTaWRlQmFyKCk7XG4gICAgICAgIHN0YXRlLm1haW4gPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBkb2N1bWVudC5ib2R5LCAnbWFpbicpO1xuICAgICAgICBzdGF0ZS5oZWFkZXIgPSByZW5kZXJIZWFkZXIoKTtcbiAgICAgICAgc3RhdGUuY29udGVudCA9IHJlbmRlckNvbnRlbnQoKTtcbiAgICAgICAgc3RhdGUuZm9vdGVyID0gcmVuZGVyRm9vdGVyKCk7XG5cbiAgICAgICAgc2V0Q3VycmVudFByb2plY3QoKTtcbiAgICAgICAgdXBkYXRlKCk7XG4gICAgfTtcblxuICAgIC8vIGFkZHMgdGhlIGN1cnJlbnQtcHJvamVjdCBjbGFzcyB0byBjdXJyZW50IHJlbmRlcmVkIHByb2plY3RcbiAgICBjb25zdCBzZXRDdXJyZW50UHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBzdGF0ZS5zaWRlQmFyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbi5wcm9qZWN0Jyk7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYocHJvamVjdHNbaV0ucXVlcnlTZWxlY3RvcigncCcpLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCkgPT0gZGlyZWN0b3J5LmN1cnJlbnRQcm9qZWN0Lm5hbWUpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0c1tpXS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LXByb2plY3QnKSA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjbGVhciA9ICgpID0+IHtcbiAgICAgICAgd2hpbGUoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgdXBkYXRlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBtZW51QnRuID0gc3RhdGUuaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IHN0YXRlLnNpZGVCYXIucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uLnByb2plY3QnKTtcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdCA9IHN0YXRlLnNpZGVCYXIucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0Jyk7XG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBzdGF0ZS5zaWRlQmFyLnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCBidXR0b24nKTtcbiAgICAgICAgY29uc3QgYWRkVGFza0NvbnRhaW5lciA9IHN0YXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBhZGRUYXNrQnRuID0gc3RhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnRuJyk7XG5cbiAgICAgICAgdXBkYXRlVGFzaygpO1xuXG4gICAgICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBJZiBkaXYuYWRkLXByb2plY3QgaGFzIGFjdGl2ZSBjbGFzc1xuICAgICAgICAgICAgaWYoYWRkVGFza0J0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgLy8gZGVsZXRlIGlucHV0QWRkUHJvamVjdFxuICAgICAgICAgICAgICAgIGFkZFRhc2tDb250YWluZXIucmVtb3ZlQ2hpbGQoc3RhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtY29udGFpbmVyJykpO1xuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBhY3RpdmUgY2xhc3NcbiAgICAgICAgICAgICAgICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gcmVuZGVyIGlucHV0XG4gICAgICAgICAgICAgICAgcmVuZGVyQWRkVGFza0lucHV0KHN0YXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWNvbnRhaW5lcicpKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVBZGRUYXNrSW5wdXQoKTtcbiAgICAgICAgICAgICAgICAvLyBhZGQgYWN0aXZlIGNsYXNzXG4gICAgICAgICAgICAgICAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0gICAgXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdEVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcHJvamVjdFN0YXRlO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkaXJlY3RvcnkuZGVmYXVsdFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGRpcmVjdG9yeS5kZWZhdWx0UHJvamVjdHNbaV0ubmFtZSA9PSBwcm9qZWN0RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdwJykudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFN0YXRlID0gZGlyZWN0b3J5LmRlZmF1bHRQcm9qZWN0c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZGlyZWN0b3J5LmNyZWF0ZWRQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZihkaXJlY3RvcnkuY3JlYXRlZFByb2plY3RzW2ldLm5hbWUgPT0gcHJvamVjdEVsZW1lbnQucXVlcnlTZWxlY3RvcigncCcpLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RTdGF0ZSA9IGRpcmVjdG9yeS5jcmVhdGVkUHJvamVjdHNbaV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGlyZWN0b3J5LmN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdFN0YXRlO1xuICAgICAgICAgICAgICAgIHJlbmRlcigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhc2lkZSA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignYXNpZGUnKTtcbiAgICAgICAgICAgIGlmKGFzaWRlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyKCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhc2lkZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBJZiBkaXYuYWRkLXByb2plY3QgaGFzIGFjdGl2ZSBjbGFzc1xuICAgICAgICAgICAgaWYoYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgLy8gZGVsZXRlIGlucHV0QWRkUHJvamVjdFxuICAgICAgICAgICAgICAgIGFkZFByb2plY3QucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWNvbnRhaW5lcicpKTtcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgYWN0aXZlIGNsYXNzXG4gICAgICAgICAgICAgICAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHJlbmRlciBpbnB1dEFkZFByb2plY3RcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dEFkZFByb2plY3QgPSByZW5kZXJJbnB1dEFkZFByb2plY3QoYWRkUHJvamVjdCk7XG4gICAgICAgICAgICAgICAgLy8gYWRkIGFjdGl2ZSBjbGFzc1xuICAgICAgICAgICAgICAgIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICAvLyBBZGRCdG4gRXZlbnQgTGlzdG5lclxuICAgICAgICAgICAgICAgIGNvbnN0IGFkZEJ0biA9IGlucHV0QWRkUHJvamVjdC5xdWVyeVNlbGVjdG9yKCcuYWRkJyk7XG4gICAgICAgICAgICAgICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9IGlucHV0QWRkUHJvamVjdC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYoaW5wdXQudmFsdWUgIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0b3J5LmNyZWF0ZVByb2plY3QoaW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAvLyBkZWxldGUgaW5wdXRBZGRQcm9qZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRQcm9qZWN0LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1jb250YWluZXInKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgYWN0aXZlIGNsYXNzXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVuZGVyIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gQ2FuY2VsQnRuIEV2ZW50IExpc3RuZXJcbiAgICAgICAgICAgICAgICBjb25zdCBjYW5jZWxCdG4gPSBpbnB1dEFkZFByb2plY3QucXVlcnlTZWxlY3RvcignLmNhbmNlbCcpO1xuICAgICAgICAgICAgICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZGVsZXRlIGlucHV0QWRkUHJvamVjdFxuICAgICAgICAgICAgICAgICAgICBhZGRQcm9qZWN0LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1jb250YWluZXInKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBhY3RpdmUgY2xhc3NcbiAgICAgICAgICAgICAgICAgICAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVUYXNrID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrcyA9IHN0YXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKTtcbiAgICAgICAgdGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRldGFpbHNCdG4gPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzJyk7XG4gICAgICAgICAgICBkZXRhaWxzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBkZXRhaWxzQ29udGFpbmVyID0gdGFzay5xdWVyeVNlbGVjdG9yKCcuZGV0YWlscy1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgIGlmKGRldGFpbHNDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFzay5yZW1vdmVDaGlsZChkZXRhaWxzQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIERpdiA6IERldGFpbHMgQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbHNDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB0YXNrLCAnZGV0YWlscy1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFAgOiBEZXRhaWxzXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXRhaWxzUGFyYSA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCBkZXRhaWxzQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbHNQYXJhLnRleHRDb250ZW50ID0gZGlyZWN0b3J5LmN1cnJlbnRQcm9qZWN0LnRhc2tzW2luZGV4XS5kZXRhaWxzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgdXBkYXRlQWRkVGFza0lucHV0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhZGRUYXNrQ29udGFpbmVyID0gc3RhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yKCdkaXYuYWRkLXRhc2stY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBzdGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5hZGQtdGFzay1idG4nKTtcbiAgICAgICAgY29uc3QgYWRkVGFza0lucHV0Q29udGFpbmVyID0gc3RhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yKCdkaXYuYWRkLXRhc2stY29udGFpbmVyIGRpdi5pbnB1dC1jb250YWluZXInKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFByaW9yaXR5IGJ0bnNcbiAgICAgICAgY29uc3QgcHJpb3JpdHlCdG5zID0gYWRkVGFza0lucHV0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmlvcml0eScpO1xuICAgICAgICBcbiAgICAgICAgcHJpb3JpdHlCdG5zLmZvckVhY2goKHByaW9yaXR5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gaWYgcHJpb3JpdHkgaXMgbG93LCBzZXQgYmFja2dyb3VuZCB0byBibHVlXG4gICAgICAgICAgICAgICAgaWYocHJpb3JpdHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdsb3cnKSkge1xuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtbG93Jyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIG90aGVyc1xuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUJ0bnNbMV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLW1lZGl1bScpO1xuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUJ0bnNbMl0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLWhpZ2gnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gaWYgcHJpb3JpdHkgaXMgbWVkaXVtLCBzZXQgYmFja2dyb3VuZCB0byBvcmFuZ2VcbiAgICAgICAgICAgICAgICBlbHNlIGlmKHByaW9yaXR5LmNsYXNzTGlzdC5jb250YWlucygnbWVkaXVtJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLW1lZGl1bScpO1xuICAgICAgICAgICAgICAgICAgICAvLyBvdGhlcnNcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlCdG5zWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1sb3cnKTtcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlCdG5zWzJdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1oaWdoJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGlmIHByaW9yaXR5IGlzIGxvdywgc2V0IGJhY2tncm91bmQgdG8gcmVkXG4gICAgICAgICAgICAgICAgZWxzZSBpZihwcmlvcml0eS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZ2gnKSkge1xuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtaGlnaCcpO1xuICAgICAgICAgICAgICAgICAgICAvLyBvdGhlcnNcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlCdG5zWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1sb3cnKTtcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlCdG5zWzFdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1tZWRpdW0nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIGJ0blxuICAgICAgICBjb25zdCBhZGRCdG4gPSBhZGRUYXNrSW5wdXRDb250YWluZXIucXVlcnlTZWxlY3RvcignLmFkZCcpO1xuICAgICAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBBZGQgVGFzayBJbnB1dCBDb250YWluZXJcbiAgICAgICAgICAgIC8vIEdldCBUaXRsZSB2YWx1ZSBcbiAgICAgICAgICAgIGxldCB0aXRsZVZhbHVlID0gYWRkVGFza0lucHV0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpLnZhbHVlO1xuICAgICAgICAgICAgLy8gR2V0IERldGFpbHMgVmFsdWVcbiAgICAgICAgICAgIGxldCBkZXRhaWxzVmFsdWUgPSBhZGRUYXNrSW5wdXRDb250YWluZXIucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKS52YWx1ZTtcbiAgICAgICAgICAgIC8vIEdldCBQcmlvcml0eVxuICAgICAgICAgICAgbGV0IHByaW9yaXR5VmFsdWU7XG4gICAgICAgICAgICBwcmlvcml0eUJ0bnMuZm9yRWFjaCgocHJpb3JpdHksKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYocHJpb3JpdHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUtbG93JykpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlWYWx1ZSA9ICdsb3cnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKHByaW9yaXR5LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlLW1lZGl1bScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5VmFsdWUgPSAnbWVkaXVtJztcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIGVsc2UgaWYocHJpb3JpdHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUtaGlnaCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5VmFsdWUgPSAnaGlnaCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBHZXQgRHVlIERhdGUgVmFsdWVcbiAgICAgICAgICAgIGxldCBkdWVEYXRlVmFsdWUgPSBhZGRUYXNrSW5wdXRDb250YWluZXIucXVlcnlTZWxlY3RvcignZGl2LmR1ZS1kYXRlIGlucHV0JykudmFsdWU7XG4gICAgICAgICAgICAvLyBHZXQgUHJvamVjdFxuICAgICAgICAgICAgbGV0IHByb2plY3RWYWx1ZSA9IGFkZFRhc2tJbnB1dENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdkaXYucHJvamVjdCBzZWxlY3QnKS52YWx1ZTtcblxuICAgICAgICAgICAgLy8gY3JlYXRlIFRhc2tcbiAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2sgPSB0YXNrKHRpdGxlVmFsdWUsIGRldGFpbHNWYWx1ZSwgcHJpb3JpdHlWYWx1ZSwgZHVlRGF0ZVZhbHVlLCBwcm9qZWN0VmFsdWUuc2xpY2UoMCwxKS50b0xvd2VyQ2FzZSgpICsgcHJvamVjdFZhbHVlLnNsaWNlKDEpKTtcblxuICAgICAgICAgICAgLy8gR2V0IHByb2plY3QgZnJvbSBkaXJlY3RvcnlcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBkaXJlY3RvcnkuZ2V0UHJvamVjdChwcm9qZWN0VmFsdWUuc2xpY2UoMCwxKS50b0xvd2VyQ2FzZSgpICsgcHJvamVjdFZhbHVlLnNsaWNlKDEpKTtcblxuICAgICAgICAgICAgLy8gYWRkIHRhc2sgdG8gcHJvamVjdFxuICAgICAgICAgICAgcHJvamVjdC5hZGRUYXNrKG5ld1Rhc2spO1xuXG4gICAgICAgICAgICByZW5kZXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ2FuY2VsIGJ0blxuICAgICAgICBjb25zdCBjYW5jZWxCdG4gPSBhZGRUYXNrSW5wdXRDb250YWluZXIucXVlcnlTZWxlY3RvcignLmNhbmNlbCcpO1xuXG4gICAgICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIC8vIGRlbGV0ZSBpbnB1dEFkZFByb2plY3RcbiAgICAgICAgICAgIGFkZFRhc2tDb250YWluZXIucmVtb3ZlQ2hpbGQoYWRkVGFza0lucHV0Q29udGFpbmVyKTtcbiAgICAgICAgICAgIC8vIHJlbW92ZSBhY3RpdmUgY2xhc3NcbiAgICAgICAgICAgIGFkZFRhc2tCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7IFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBJbiA+IE91dDogU3RyaW5nLCBPYmplY3QsIFN0cmluZywgU3RyaW5nXG4gICAgLy8gSW4gPiBPdXQ6IGNoaWxkLCBwYXJlbnQsIGNsYXNzLCBpZFxuICAgIGNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAoY2hpbGQsIHBhcmVudCwgY2xzcz1udWxsLCBpZD1udWxsKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGNoaWxkKTtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICBpZihjbHNzICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZihBcnJheS5pc0FycmF5KGNsc3MpKSB7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNsc3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsc3NbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoaWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgICAgICAgfSBcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfTtcblxuICAgIC8vIEFkZCBlbGVtZW50cyB0aGF0IGdvIGludG8gdGhlIGhlYWRlclxuICAgIGNvbnN0IHJlbmRlckhlYWRlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gY3JlYXRlRWxlbWVudCgnaGVhZGVyJywgc3RhdGUubWFpbik7XG4gICAgICAgIC8vIHNpZGViYXIgbWVudSwgaWYgc2lkZSBiYXIgaXMgbm90IGRpc3BsYXllZFxuICAgICAgICAvLyBzaXRlIG5hbWUgdGl0bGUgOiBUb0RvbGlzdFxuICAgICAgICAgICAgY29uc3QgbWVudUJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIGhlYWRlciwgJ21lbnUnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBidG5JbWcgPSBjcmVhdGVFbGVtZW50KCdpbWcnLCBtZW51QnRuKTtcbiAgICAgICAgICAgICAgICBidG5JbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBtZW51U3ZnKTtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlRWxlbWVudCgnaDEnLCBoZWFkZXIsICd0aXRsZScpO1xuICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlRvZG8gTGlzdFwiO1xuICAgICAgICByZXR1cm4gaGVhZGVyO1xuICAgIH07XG5cbiAgICAvLyBSZW5kZXIgRWxlbWVudHMgb2Ygc2lkZWJhclxuICAgIGNvbnN0IHJlbmRlclNpZGVCYXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNpZGVCYXIgPSBjcmVhdGVFbGVtZW50KCdhc2lkZScsIGRvY3VtZW50LmJvZHkpO1xuXG4gICAgICAgICAgICAvLyBEaXYgSG9tZUNvbnRhaW5lclxuICAgICAgICAgICAgY29uc3QgaG9tZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHNpZGVCYXIsICdob21lLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIC8vIEJ0biA6IF4gSG9tZVxuICAgICAgICAgICAgICAgIGNvbnN0IGhvbWVCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCBob21lQ29udGFpbmVyLCAndGl0bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gSW1nXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhvbWVBcnJvdyA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsIGhvbWVCdG4sICdhcnJvdycpO1xuICAgICAgICAgICAgICAgICAgICBob21lQXJyb3cuc2V0QXR0cmlidXRlKCdzcmMnLCBhcnJvd1N2Zyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFBhcmFcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaG9tZVRleHQgPSBjcmVhdGVFbGVtZW50KCdwJywgaG9tZUJ0biwgJ3RleHQnKTtcbiAgICAgICAgICAgICAgICAgICAgaG9tZVRleHQudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgICAgICAgICAgICAgICAvLyBEaXYgOiBEZWZhdWx0IFByb2plY3RzXG4gICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdFByb2plY3RzID0gY3JlYXRlRWxlbWVudCgnZGl2JywgaG9tZUNvbnRhaW5lciwgJ2RlZmF1bHQtcHJvamVjdHMnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gTG9vcCB0aHJvdyBkaXJlY3RvcnkuY3JlYXRlUHJvamVjdHMgXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbmRlciBlYWNoIFByb2plY3QgYXMgYSBidG5cbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGRpcmVjdG9yeS5kZWZhdWx0UHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IGRpcmVjdG9yeS5kZWZhdWx0UHJvamVjdHNbaV0ubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJ0blxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdEJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIGRlZmF1bHRQcm9qZWN0cywgW1wicHJvamVjdFwiLCBwcm9qZWN0TmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZyA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsIHByb2plY3RCdG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHByb2plY3ROYW1lID09PSAnaW5ib3gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGluYm94U3ZnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihwcm9qZWN0TmFtZSA9PT0gJ3RvZGF5Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCB0b2RheVN2Zyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYocHJvamVjdE5hbWUgPT09ICd1cGNvbWluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgdXBjb21pbmdTdmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQYXJhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCBwcm9qZWN0QnRuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gcHJvamVjdE5hbWUuc2xpY2UoMCwxKS50b1VwcGVyQ2FzZSgpICsgcHJvamVjdE5hbWUuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERpdiBQcm9qZWN0c1xuICAgICAgICAgICAgICAgIC8vIERpdnMgOiBMaXN0LW9mLVByb2plY3RzXG4gICAgICAgICAgICAgICAgLy8gRGl2IDogQWRkIFByb2plY3RcbiAgICAgICAgICAgICAgICAgICAgLy8gSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgLy8gRGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBCdG4gOiBBZGRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJ0biA6IENhbmNlbFxuICAgICAgICAgICAgLy8gRGl2IFByb2plY3RzXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHNpZGVCYXIsICdwcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIC8vIEJ0biA6IF4gcHJvamVjdFxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCBwcm9qZWN0c0NvbnRhaW5lciwgJ3RpdGxlJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIEltZ1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0QXJyb3cgPSBjcmVhdGVFbGVtZW50KCdpbWcnLCBwcm9qZWN0QnRuLCAnYXJyb3cnKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdEFycm93LnNldEF0dHJpYnV0ZSgnc3JjJywgYXJyb3dTdmcpO1xuICAgICAgICAgICAgICAgICAgICAvLyBQYXJhXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RUZXh0ID0gY3JlYXRlRWxlbWVudCgncCcsIHByb2plY3RCdG4sICd0ZXh0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUZXh0LnRleHRDb250ZW50ID0gXCJQcm9qZWN0XCI7XG4gICAgICAgICAgICAgICAgLy8gRGl2IDogQ3JlYXRlZCBQcm9qZWN0c1xuICAgICAgICAgICAgICAgIGNvbnN0IGNyZWF0ZWRQcm9qZWN0cyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHByb2plY3RzQ29udGFpbmVyLCAnY3JlYXRlZC1wcm9qZWN0cycpXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gcmVuZGVyIGNyZWF0ZWQgcHJvamVjdHMgaW4gZGlyZWN0b3J5XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkaXJlY3RvcnkuY3JlYXRlZFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBkaXJlY3RvcnkuY3JlYXRlZFByb2plY3RzW2ldLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEaXYgOiBkaXZQcm9qZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXZQcm9qZWN0ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgY3JlYXRlZFByb2plY3RzLCAncHJvamVjdC1kaXYnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJ0biA6IFByb2plY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0QnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgZGl2UHJvamVjdCwgW1wicHJvamVjdFwiLCBwcm9qZWN0TmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0ltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQYXJhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2pUZXh0ID0gY3JlYXRlRWxlbWVudCgncCcsIHByb2plY3RCdG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qVGV4dC50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lLnNsaWNlKDAsMSkudG9VcHBlckNhc2UoKSArIHByb2plY3ROYW1lLnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJ0biA6IEVkaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlZGl0QnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgZGl2UHJvamVjdCwgJ2VkaXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9JbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWRpdEltZyA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsIGVkaXRCdG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0SW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgZWRpdFN2Zyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQnRuIDogRGVsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgZGl2UHJvamVjdCwgJ2RlbGV0ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlSW1nID0gY3JlYXRlRWxlbWVudCgnaW1nJywgZGVsZXRlQnRuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgZGVsZXRlU3ZnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFJlbmRlciBDcmVhdGUgTmV3IFByb2plY3QgRm9ybVxuICAgICAgICAgICAgICAgIGNvbnN0IGFkZFByb2plY3RzQ29udGFpbmVyID0gYWRkUHJvamVjdEVsZW1lbnQocHJvamVjdHNDb250YWluZXIpO1xuICAgICAgICByZXR1cm4gc2lkZUJhcjtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkUHJvamVjdEVsZW1lbnQgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICAvLyBEaXYgOiBjcmVhdGVQcm9qZWN0Q29udGFpbmVyXG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RzQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgcHJvamVjdCwgJ2FkZC1wcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgLy8gRGl2IDogVGl0bGUtQ29udGFpbmVyXG4gICAgICAgICAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIGFkZFByb2plY3RzQ29udGFpbmVyLCAnYWRkLXByb2plY3QnKTtcbiAgICAgICAgICAgICAgICAvLyBCdG4gOiBhZGRQcm9qZWN0QnRuXG4gICAgICAgICAgICAgICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHRpdGxlQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gSW1nIDogUGx1cyBpbiBDaXJjbGVcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nID0gY3JlYXRlRWxlbWVudCgnaW1nJywgYWRkUHJvamVjdEJ0bik7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGNpcmxjZVBsdXNTdmcpO1xuICAgICAgICAgICAgICAgICAgICAvLyBQYXJhIDogQWRkIFByb2plY3RcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50KCdwJywgYWRkUHJvamVjdEJ0bik7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ0FkZCBQcm9qZWN0JztcbiAgICAgICAgcmV0dXJuIGFkZFByb2plY3RzQ29udGFpbmVyOyAgICAgICAgXG4gICAgfTtcblxuICAgIGNvbnN0IHJlbmRlcklucHV0QWRkUHJvamVjdCA9IChwYXJlbnQpID0+IHtcbiAgICAgICAgIC8vIERpdiA6IElucHV0IENvbnRhaW5lclxuICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHBhcmVudCwgJ2lucHV0LWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgLy8gSW5wdXQgXG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgaW5wdXRDb250YWluZXIpO1xuICAgICAgICAgICAgLy8gRGl2IDogQnRuIENvbnRhaW5lclxuICAgICAgICAgICAgY29uc3QgYnRuQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgaW5wdXRDb250YWluZXIsICdidXR0b25zJyk7XG4gICAgICAgICAgICAgICAgLy8gQnRuIDogQWRkXG4gICAgICAgICAgICAgICAgY29uc3QgYWRkQnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgYnRuQ29udGFpbmVyLCAnYWRkJyk7XG4gICAgICAgICAgICAgICAgYWRkQnRuLnRleHRDb250ZW50ID0gXCJBZGRcIjtcbiAgICAgICAgICAgICAgICAvLyBCdG4gOiBDYW5jZWwgXG4gICAgICAgICAgICAgICAgY29uc3QgY2FuY2xlQnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgYnRuQ29udGFpbmVyLCAnY2FuY2VsJyk7XG4gICAgICAgICAgICAgICAgY2FuY2xlQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICAgICAgcmV0dXJuIGlucHV0Q29udGFpbmVyO1xuICAgIH07XG5cbiAgICBjb25zdCByZW5kZXJDb250ZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywgc3RhdGUubWFpbiwgJ2NvbnRlbnQnKTtcbiAgICAgICAgLy8gdGFza1xuICAgICAgICByZW5kZXJUYXNrcyhjb250ZW50KTtcbiAgICAgICAgXG4gICAgICAgIC8vQWRkIFRhc2tcbiAgICAgICAgcmVuZGVyQWRkVGFzayhjb250ZW50KTtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbmRlclRhc2tzID0gKGNvbnRlbnQpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRpcmVjdG9yeS5jdXJyZW50UHJvamVjdDtcblxuICAgICAgICAvLyBEaXYgVGFzayBDb250YWluZXJcbiAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIGNvbnRlbnQsICd0YXNrLWNvbnRhaW5lcicpO1xuICAgICAgICAvLyAvLyBMaXN0IG9mIFRhc2tzXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LnRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZW5kZXJUYXNrKHByb2plY3QudGFza3NbaV0sIHRhc2tDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyVGFzayA9ICh0YXNrT2JqZWN0LCB0YXNrQ29udGFpbmVyKSA9PiB7XG4gICAgICAgIC8vIERpdiA6IFRhc2tzXG4gICAgICAgIGNvbnN0IHRhc2tEaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB0YXNrQ29udGFpbmVyLCAndGFzaycpO1xuICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQodGFza09iamVjdC5wcmlvcml0eSArICctdGFzaycpO1xuICAgICAgICAgICAgLy8gRGl2IDogQ29udGVudFxuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHRhc2tEaXYsICd0YXNrLWNvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICAvLyBEaXYgOiBMZWZ0IFNpZGVcbiAgICAgICAgICAgICAgICBjb25zdCBsZWZ0RGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgY29udGVudCwgJ2xlZnQtc2lkZScpO1xuICAgICAgICAgICAgICAgICAgICAvLyBJbnB1dCA6IENoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrQm94ID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCBsZWZ0RGl2LCAnY2hlY2tib3gnKTtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tCb3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFBhcmEgOiBUaXRsZVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJhID0gY3JlYXRlRWxlbWVudCgncCcsIGxlZnREaXYsICd0aXRsZScpO1xuICAgICAgICAgICAgICAgICAgICBwYXJhLnRleHRDb250ZW50ID0gdGFza09iamVjdC50aXRsZTtcbiAgICAgICAgICAgICAgICAvLyBEaXYgOiBSaWdodCBTaWRlXG4gICAgICAgICAgICAgICAgY29uc3QgcmlnaHREaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBjb250ZW50LCAncmlnaHQtc2lkZScpO1xuICAgICAgICAgICAgICAgICAgICAvLyBCdG4gOiBEZXRhaWxzXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRldGFpbHNCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCByaWdodERpdiwgJ2RldGFpbHMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBhcmFcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRldGFpbHNQYXJhID0gY3JlYXRlRWxlbWVudCgncCcsIGRldGFpbHNCdG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsc1BhcmEudGV4dENvbnRlbnQgPSBcIkRldGFpbHNcIjtcbiAgICAgICAgICAgICAgICAgICAgLy8gUGFyYSA6IER1ZSBEYXRlXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGR1ZURhdGVQYXJhID0gY3JlYXRlRWxlbWVudCgncCcsIHJpZ2h0RGl2LCAnZHVlLWRhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZVBhcmEudGV4dENvbnRlbnQgPSB0YXNrT2JqZWN0LmR1ZURhdGU7XG4gICAgICAgICAgICAgICAgICAgIC8vIEJ0biA6IEVkaXQgQnRuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCByaWdodERpdiwgJ2VkaXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEltZyA6IEVkaXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRJbWcgPSBjcmVhdGVFbGVtZW50KCdpbWcnLCBlZGl0QnRuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBlZGl0U3ZnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQnRuIDogRGVsZXRlIEJ0blxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCByaWdodERpdiwgJ2RlbGV0ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSW1nIDogRGVsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWxldGVJbWcgPSBjcmVhdGVFbGVtZW50KCdpbWcnLCBkZWxldGVCdG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgZGVsZXRlU3ZnKTtcblxuICAgICAgICByZXR1cm4gdGFzaztcbiAgICB9O1xuXG4gICAgY29uc3QgcmVuZGVyQWRkVGFzayA9IChjb250ZW50KSA9PiB7XG4gICAgICAgIC8vIERpdiBcbiAgICAgICAgY29uc3QgZGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgY29udGVudCwgJ2FkZC10YXNrLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgLy8gRGl2IDogQWRkIFRhc2tcbiAgICAgICAgICAgIGNvbnN0IGFkZFRhc2tEaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBkaXYsICdhZGQtdGFzay1idG4nKTtcbiAgICAgICAgICAgICAgICAvLyBJbWcgOiBjaXJjbGVQbHVzXG4gICAgICAgICAgICAgICAgY29uc3QgY2lyY2xlUGx1c0ltZyA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsIGFkZFRhc2tEaXYpO1xuICAgICAgICAgICAgICAgIGNpcmNsZVBsdXNJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBjaXJsY2VQbHVzU3ZnKTtcbiAgICAgICAgICAgICAgICAvLyBQIDogQWRkIFRhc2tcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gY3JlYXRlRWxlbWVudCgncCcsIGFkZFRhc2tEaXYsICd0ZXh0Jyk7XG4gICAgICAgICAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2tcIjtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVuZGVyQWRkVGFza0lucHV0ID0gKHBhcmVudCkgPT4ge1xuICAgICAgICAvLyBEaXYgXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHBhcmVudCwgJ2lucHV0LWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgLy8gSW5wdXQgOiBUaXRsZVxuICAgICAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgY29udGFpbmVyLCAndGl0bGUnKTtcbiAgICAgICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUaXRsZScpO1xuICAgICAgICAgICAgLy8gSW5wdXQgOiBEZXRhaWxzXG4gICAgICAgICAgICBjb25zdCBkZXRhaWxUZXh0QXJlYSA9IGNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJywgY29udGFpbmVyKTtcbiAgICAgICAgICAgIGRldGFpbFRleHRBcmVhLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRGV0YWlscycpO1xuICAgICAgICAgICAgLy8gRGl2IDogRGF0ZS1Qcm9qZWN0XG4gICAgICAgICAgICBjb25zdCBkYXRlUHJvamVjdERpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIGNvbnRhaW5lciwgJ2RhdGUtcHJvamVjdCcpO1xuICAgICAgICAgICAgICAgIC8vIERpdiA6IER1ZSBEYXRlXG4gICAgICAgICAgICAgICAgY29uc3QgZHVlRGF0ZURpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIGRhdGVQcm9qZWN0RGl2LCAnZHVlLWRhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gUFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkdWVEYXRlUGFyYSA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCBkdWVEYXRlRGl2KTtcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZVBhcmEudGV4dENvbnRlbnQgPSAnRHVlIERhdGU6JztcbiAgICAgICAgICAgICAgICAgICAgLy8gSW5wdXQgVHlwZSBEYXRlXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgZHVlRGF0ZURpdik7XG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgICAgICAgICAgICAgIC8vIERpdiA6IFByb2plY3RcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgZGF0ZVByb2plY3REaXYsICdwcm9qZWN0Jyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFAgOiBQcm9qZWN0XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RQYXJhID0gY3JlYXRlRWxlbWVudCgncCcsIHByb2plY3REaXYpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UGFyYS50ZXh0Q29udGVudCA9ICdQcm9qZWN0Oic7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNlbGVjdG9yIDogZGlyZWN0b3J5IGxpc3Qgb2YgY3JlYXRlZHByb2plY3RzXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RTZWxlY3RvciA9IGNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcsIHByb2plY3REaXYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGVtcFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyUHJvamVjdE9wdGlvbnMocHJvamVjdFNlbGVjdG9yKTtcbiAgICAgICAgICAgIC8vIERpdiA6IFByaW9yaXR5LUFkZC1DYW5jZWxcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5QWRkQ2FuY2VsRGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgY29udGFpbmVyLCAncHJpb3JpdHktYWRkLWNhbmNlbCcpO1xuICAgICAgICAgICAgICAgIC8vIERpdiA6IFByaW9yaXR5XG4gICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlEaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBwcmlvcml0eUFkZENhbmNlbERpdiwgJ3ByaW9yaXRpZXMnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gRGl2IDogUHJpb3JpdHkgVGV4dCBjb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlQYXJhRGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgcHJpb3JpdHlEaXYsICd0ZXh0LWRpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUCA6IFByaW9ydGl0eTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5UGFyYSA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCBwcmlvcml0eVBhcmFEaXYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlQYXJhLnRleHRDb250ZW50ID0gXCJQcmlvcml0eTogXCJcbiAgICAgICAgICAgICAgICAgICAgLy8gRGl2IDogTG93XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvd1ByaW9yaXR5RGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgcHJpb3JpdHlEaXYsIFsnbG93JywgJ3ByaW9yaXR5JywgJ2FjdGl2ZS1sb3cnXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQIDogTG93XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsb3dQYXJhID0gY3JlYXRlRWxlbWVudCgncCcsIGxvd1ByaW9yaXR5RGl2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd1BhcmEudGV4dENvbnRlbnQgPSAnTG93JztcbiAgICAgICAgICAgICAgICAgICAgLy8gRGl2IDogTWVkaXVtXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lZGl1bVByaW9yaXR5RGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgcHJpb3JpdHlEaXYsIFsnbWVkaXVtJywgJ3ByaW9yaXR5J10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUCA6IE1lZGl1bVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVkaXVtUGFyYSA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCBtZWRpdW1Qcmlvcml0eURpdik7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZWRpdW1QYXJhLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG4gICAgICAgICAgICAgICAgICAgIC8vIERpdiA6IEhpZ2hcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGlnaFByaW9yaXR5RGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgcHJpb3JpdHlEaXYsIFsnaGlnaCcsICdwcmlvcml0eSddKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFAgOiBIaWdoXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoaWdoUGFyYSA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCBoaWdoUHJpb3JpdHlEaXYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGlnaFBhcmEudGV4dENvbnRlbnQgPSAnSGlnaCc7XG4gICAgICAgICAgICAgICAgLy8gRGl2IDogQWRkLUNhbmNlbFxuICAgICAgICAgICAgICAgIGNvbnN0IGFkZENhbmNlbERpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHByaW9yaXR5QWRkQ2FuY2VsRGl2LCAnYWRkLWNhbmNlbCcpO1xuICAgICAgICAgICAgICAgICAgICAvLyBEaXYgOiBBZGRcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWRkRGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgYWRkQ2FuY2VsRGl2LCAnYWRkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQIDogQWRkXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZGRQYXJhID0gY3JlYXRlRWxlbWVudCgncCcsIGFkZERpdik7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRQYXJhLnRleHRDb250ZW50ID0gXCJBZGRcIjtcbiAgICAgICAgICAgICAgICAgICAgLy8gRGl2IDogQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbmNlbERpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIGFkZENhbmNlbERpdiwgJ2NhbmNlbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUCA6IENhbmNlbFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FuY2VsUGFyYSA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCBjYW5jZWxEaXYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsUGFyYS50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgfTtcblxuICAgIC8vXG4gICAgY29uc3QgcmVuZGVyUHJvamVjdE9wdGlvbnMgPSAoc2VsZWN0b3IpID0+IHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGRpcmVjdG9yeS5jcmVhdGVkUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkaXJlY3RvcnkuY3JlYXRlZFByb2plY3RzW2ldLm5hbWU7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSBjcmVhdGVFbGVtZW50KCdvcHRpb24nLCBzZWxlY3Rvcik7XG4gICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBuYW1lLnNsaWNlKDAsMSkudG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoMSkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbmRlciBFbGVtZW50IG9mIEZvb3RlclxuICAgIGNvbnN0IHJlbmRlckZvb3RlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZm9vdGVyID0gY3JlYXRlRWxlbWVudCgnZm9vdGVyJywgc3RhdGUubWFpbik7XG4gICAgICAgICAgICAvLyBQYXJhIDogQ29weSBSaWdodFxuICAgICAgICAgICAgY29uc3QgY29weVJpZ2h0VGV4dCA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCBmb290ZXIsICd0ZXh0Jyk7XG4gICAgICAgICAgICBjb3B5UmlnaHRUZXh0LmlubmVySFRNTCA9IFwiJiMxNjk7IEphcidaZW5vIEphcnJldHRcIjtcbiAgICAgICAgICAgIC8vIEEgOiBHaXRodWIgbGlua1xuICAgICAgICAgICAgICAgIGNvbnN0IGdpdGh1YkxpbmsgPSBjcmVhdGVFbGVtZW50KCdhJywgZm9vdGVyLCAnZ2l0aHViLWxpbmsnKTtcbiAgICAgICAgICAgICAgICBnaXRodWJMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL2dpdGh1Yi5jb20vQmFudGNoZWUnKTtcbiAgICAgICAgICAgICAgICBnaXRodWJMaW5rLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuICAgICAgICAgICAgICAgIC8vIEltZyA6IEdpdGh1YlxuICAgICAgICAgICAgICAgIGNvbnN0IGdpdGh1YkltZyA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsIGdpdGh1YkxpbmspO1xuICAgICAgICAgICAgICAgIGdpdGh1YkltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGdpdGh1YlN2Zyk7XG4gICAgICAgIHJldHVybiBmb290ZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHN0YXRlLCBcbiAgICAgICAge3JlbmRlcn0sXG4gICAgICAgIHt1cGRhdGV9LFxuICAgICk7XG59OyIsIi8vIFByaW9yaXR5IDpcbiAgICAvLyAxLiBTdHJpbmcgPiBcIkxvd1wiXG4gICAgLy8gMi4gU3RyaW5nID4gXCJNZWRpdW1cIlxuICAgIC8vIDMuIFN0cmluZyA+IFwiSGlnaFwiXG5cbi8vIEluID4gT3V0IDogU3RyaW5nIFN0cmluZyBQcmlvcml0eSBEYXRlIFByb2plY3QgPiBPYmplY3RcbmV4cG9ydCBjb25zdCB0YXNrID0gKHRpdGxlLCBkZXRhaWxzLCBwcmlvcml0eSwgZHVlRGF0ZSwgcHJvamVjdE5hbWUpID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRldGFpbHMsXG4gICAgICAgIHByaW9yaXR5LFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBwcm9qZWN0TmFtZSxcbiAgICAgICAgaWQ6IG51bGwsXG4gICAgfVxuXG4gICAgLy8gQ1JVRCA6IENyZWF0ZSwgUmVhZCwgVXBkYXRlLCBEZWxldGVcblxuICAgIGNvbnN0IGdlblJhbmRvbUlkID0gKCkgPT4gTWF0aC5yYW5kb20oKTtcblxuICAgIGNvbnN0IGdldCA9IChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICBpZihzdGF0ZS5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVtwcm9wZXJ0eV0gXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBUaGUgcHJvcGVydHkgJHtwcm9wZXJ0eX0gZG9lcyBub3QgZXhpc3RgKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBzZXQgPSAocHJvcGVydHksIHZhbHVlKSA9PiB7XG4gICAgICAgIGlmKHN0YXRlLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICAgICAgc3RhdGVbcHJvcGVydHldID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBUaGUgcHJvcGVydHkgJHtwcm9wZXJ0eX0gZG9lcyBub3QgZXhpc3RgKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBDaGFuZ2UgUHJvamVjdFxuICAgIC8vIERlbGV0ZSBUYXNrXG5cbiAgICBzdGF0ZS5pZCA9IGdlblJhbmRvbUlkKCk7XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIHtnZXR9LFxuICAgICAgICB7c2V0fVxuICAgICk7XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge3Rhc2t9IGZyb20gJy4vc2NyaXB0cy90YXNrJztcbmltcG9ydCB7cGFnZX0gZnJvbSAnLi9zY3JpcHRzL3JlbmRlclBhZ2UnO1xuaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5jc3MnO1xuXG5jb25zdCB0ID0gdGFzaygnV2FzaCBDbG90aGVzJywgJ1B1dCBjbG90aGVzIGluIHRoZSB3YXNoaW5nIG1hY2hpbmUnLCAnaGlnaCcsICdub3cnLCAnQ2hvdXJzJyk7XG5cbmNvbnN0IHAgPSBwYWdlKCk7XG5wLnJlbmRlcigpO1xuXG4vLyBTdGF0ZVxuICAgIC8vIGRpcmVjdG9yeS5qcyBtb2R1bGVcbiAgICAgICAgLy8gcHJvamVjdC5qcyBmYWN0b3J5XG4gICAgICAgICAgICAvLyB0YXNrLmpzIGZhY3Rvcnlcbi8vIERPTSBSZW5kZXJpbmdcbiAgICAvLyBSZW5kZXIgU3RhdGljIHBhZ2UsIEluY2x1ZGluZyBTaWRlYmFyIG1lbnVcbiAgICAgICAgLy8gRGl2I0NvbnRlbnQgRHluYW1pY2x5IHJlbmRlcmVkLCBjaGFuZ2VzIHdoZW4gY2xpY2tpbmcgb24gcHJvamVjdCBpbiBzaWRlYmFyIG1lbnUiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=