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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    --white: #ffffff;\n    --light-grey: #D9D9D9;\n    --dark-grey: #454545;\n    --black: #000000;\n    --black-tint: rgba(0, 0, 0, 0.50);\n    --blue: #0085FF;\n    --blue-light: #badcfc;\n    --orange: #FF9900;\n    --orange-light: #FAE7CC;\n    --red: #FF0000;\n    --red-light: #FCCECE;\n    --green: #33C500;\n    --light-green: #D7FFC9;\n    --github-img-size: 32px;\n}\n\nbody {\n    display: flex;\n    margin: 0px;\n    /* Temp */\n    width: 100vw;\n    height: 100vh;\n}\n\n/* Aside  */\naside {\n    flex: 1;\n    padding: 8px;\n    background-color: var(--dark-grey);\n\n    display: flex;\n    flex-direction: column;\n}\n\naside p {\n    font-size: 1.25em;\n    margin: 0px;\n}\n\naside .home-container, aside .project-container {\n    display: flex;\n    flex-direction: column;\n}\n\naside button {\n    display: flex;\n    align-items: center;\n\n    cursor: pointer;\n    background: none;\n    border: none;\n    color: var(--white);\n    font-size: 1.25em;\n}\n\naside button:hover {\n    font-weight: bold;\n    /* background-color: var(--light-grey); */\n}\n\naside button.title {\n    border-bottom: var(--white) solid 5px;\n}\n\naside .home-container .default-projects {\n    display: flex;\n    flex-direction: column;\n}\n\naside div.project-div {\n    display: flex;\n}\n\naside img { \n    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(248deg) brightness(106%) contrast(106%);\n}\n\naside button.current-project {\n    font-weight: bold;\n}\n\n/* Main */\ndiv.main {\n    flex: 4;\n\n    display: flex;\n    flex-direction: column;\n}\n\ndiv.main header {\n    flex: 1;\n    padding: 8px;\n    /* Temp */\n    background-color: var(--light-grey);\n\n    display: grid;\n    grid-template-columns: auto 1fr;\n    align-items: center; \n}\n\ndiv.main header button.menu {\n    background: none;\n    border: none;\n    cursor: pointer;\n}\n\ndiv.main header h1.title {\n    padding-right: auto;\n    justify-self: center;\n    font-weight: bold;\n    font-size: 3em;\n}\n\ndiv.main div.content {\n    flex: 4;\n    padding: 16px 64px;\n    background-color: var(--white);\n}\n\ndiv.main div.content .add-task-container {\n    display: flex;\n    flex-direction: column;\n}\n\ndiv.main div.content .add-task-container .add-task-btn {\n    width: 135px;\n\n    display: flex;\n    column-gap: 4px;\n    align-self: center;\n}\n\ndiv.main div.content .add-task-container .add-task-btn p {\n    font-size: 1.5em;\n    font-weight: bold;\n    cursor: pointer;\n}\n\ndiv.main div.content .add-task-container .add-task-btn img {\n    width: 24px;\n}\n\ndiv.main div.content .add-task-container .input-container {\n    display: flex;\n    flex-direction: column;\n    row-gap: 4px;\n\n    background-color: var(--light-grey);\n    padding: 16px 24px;\n    border-radius: 4px;\n    border-right: var(--blue) solid 4px;\n    border-left: var(--blue) solid 4px;\n}\n\ndiv.main div.content .add-task-container .input-container p {\n    margin: 0px;\n    font-weight: bold;\n}\n\ndiv.main div.content .add-task-container .input-container input.title {\n    border-radius: 8px;\n    padding-left: 4px;\n}\n\ndiv.main div.content .add-task-container .input-container textarea {\n    height: 150px;\n    border-radius: 8px;\n    padding-left: 4px;\n}\n\ndiv.main div.content .add-task-container .input-container div.date-project {\n    display: flex;\n    column-gap: 16px;\n}\n\ndiv.main div.content .add-task-container .input-container div.due-date {\n    display: flex;\n    column-gap: 4px;\n    justify-content: center;\n    align-items: center;\n\n    font-weight: bold;\n}\n\ndiv.main div.content .add-task-container .input-container div.project {\n    display: flex;\n    column-gap: 4px;\n    justify-content: center;\n    align-items: center;\n\n    font-weight: bold;\n}\n\ndiv.main div.content .add-task-container .input-container .priority-add-cancel {\n    display: flex;\n    row-gap: 4px;\n    column-gap: 24px;\n    align-items: center;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities {\n    display: flex;\n    column-gap: 4px;\n    align-items: center;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .priority {\n    width: 100px;\n    border-radius: 4px;\n    padding: 4px 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .low {\n    background-color: var(--blue-light);\n    color: var(--blue);\n    border-left: var(--blue) solid 4px;\n    border-right: var(--blue) solid 4px;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .low:hover {\n    cursor: pointer;\n    background-color: var(--blue);\n    color: var(--blue-light);\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .medium {\n    background-color: var(--orange-light);\n    color: var(--orange);\n    border-left: var(--orange) solid 4px;\n    border-right: var(--orange) solid 4px;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .medium:hover {\n    cursor: pointer;\n    background-color: var(--orange);\n    color: var(--orange-light);\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .high {\n    background-color: var(--red-light);\n    color: var(--red);\n    border-left: var(--red) solid 4px;\n    border-right: var(--red) solid 4px;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .high:hover {\n    cursor: pointer;\n    background-color: var(--red);\n    color: var(--red-light);\n}\n\ndiv.main div.content .add-task-container .input-container .add-cancel {\n    display: flex;\n    justify-self: right;\n    column-gap: 4px;\n    margin-left: auto;\n}\n\ndiv.main div.content .add-task-container .input-container .add {\n    width: 100px;\n    border-radius: 4px;\n    padding: 4px 0px;\n\n    background-color: var(--light-green);\n    color: var(--green);\n    border-left: var(--green) solid 4px;\n    border-right: var(--green) solid 4px;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\ndiv.main div.content .add-task-container .input-container .add:hover {\n    cursor: pointer;\n    background-color: var(--green);\n    color: var(--light-green);\n}\n\ndiv.main div.content .add-task-container .input-container .cancel {\n    width: 100px;\n    border-radius: 4px;\n    padding: 4px 0px;\n    background-color: var(--red-light);\n    color: var(--red);\n    border-left: var(--red) solid 4px;\n    border-right: var(--red) solid 4px;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\ndiv.main div.content .add-task-container .input-container .cancel:hover {\n    cursor: pointer;\n    background-color: var(--red);\n    color: var(--red-light);\n}\n\ndiv.main footer {\n    flex: 1;\n    padding: 8px;\n    background-color: var(--light-grey);\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    column-gap: 16px;\n}\n\ndiv.main footer p.text {\n    font-size: 1.25em;\n    font-weight: bold;\n}\n\ndiv.main footer a {\n    border: 3px solid var(--black);\n    border-radius: 100%;\n    width: var(--github-img-size);\n    height: var(--github-img-size);\n    background-color: var(--white);\n    padding: 6px;\n}\n\ndiv.main footer a:hover {\n    background-color: var(--black);\n}\n\ndiv.main footer a:hover img {\n    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(248deg) brightness(106%) contrast(106%);\n}\n\ndiv.main footer a img {\n    width: var(--github-img-size);\n    height: var(--github-img-size);\n}\n", "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    --white: #ffffff;\n    --light-grey: #D9D9D9;\n    --dark-grey: #454545;\n    --black: #000000;\n    --black-tint: rgba(0, 0, 0, 0.50);\n    --blue: #0085FF;\n    --blue-light: #badcfc;\n    --orange: #FF9900;\n    --orange-light: #FAE7CC;\n    --red: #FF0000;\n    --red-light: #FCCECE;\n    --green: #33C500;\n    --light-green: #D7FFC9;\n    --github-img-size: 32px;\n}\n\nbody {\n    display: flex;\n    margin: 0px;\n    /* Temp */\n    width: 100vw;\n    height: 100vh;\n}\n\n/* Aside  */\naside {\n    flex: 1;\n    padding: 8px;\n    background-color: var(--dark-grey);\n\n    display: flex;\n    flex-direction: column;\n}\n\naside p {\n    font-size: 1.25em;\n    margin: 0px;\n}\n\naside .home-container, aside .project-container {\n    display: flex;\n    flex-direction: column;\n}\n\naside button {\n    display: flex;\n    align-items: center;\n\n    cursor: pointer;\n    background: none;\n    border: none;\n    color: var(--white);\n    font-size: 1.25em;\n}\n\naside button:hover {\n    font-weight: bold;\n    /* background-color: var(--light-grey); */\n}\n\naside button.title {\n    border-bottom: var(--white) solid 5px;\n}\n\naside .home-container .default-projects {\n    display: flex;\n    flex-direction: column;\n}\n\naside div.project-div {\n    display: flex;\n}\n\naside img { \n    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(248deg) brightness(106%) contrast(106%);\n}\n\naside button.current-project {\n    font-weight: bold;\n}\n\n/* Main */\ndiv.main {\n    flex: 4;\n\n    display: flex;\n    flex-direction: column;\n}\n\ndiv.main header {\n    flex: 1;\n    padding: 8px;\n    /* Temp */\n    background-color: var(--light-grey);\n\n    display: grid;\n    grid-template-columns: auto 1fr;\n    align-items: center; \n}\n\ndiv.main header button.menu {\n    background: none;\n    border: none;\n    cursor: pointer;\n}\n\ndiv.main header h1.title {\n    padding-right: auto;\n    justify-self: center;\n    font-weight: bold;\n    font-size: 3em;\n}\n\ndiv.main div.content {\n    flex: 4;\n    padding: 16px 64px;\n    background-color: var(--white);\n}\n\ndiv.main div.content .add-task-container {\n    display: flex;\n    flex-direction: column;\n}\n\ndiv.main div.content .add-task-container .add-task-btn {\n    width: 135px;\n\n    display: flex;\n    column-gap: 4px;\n    align-self: center;\n}\n\ndiv.main div.content .add-task-container .add-task-btn p {\n    font-size: 1.5em;\n    font-weight: bold;\n    cursor: pointer;\n}\n\ndiv.main div.content .add-task-container .add-task-btn img {\n    width: 24px;\n}\n\ndiv.main div.content .add-task-container .input-container {\n    display: flex;\n    flex-direction: column;\n    row-gap: 4px;\n\n    background-color: var(--light-grey);\n    padding: 16px 24px;\n    border-radius: 4px;\n    border-right: var(--blue) solid 4px;\n    border-left: var(--blue) solid 4px;\n}\n\ndiv.main div.content .add-task-container .input-container p {\n    margin: 0px;\n    font-weight: bold;\n}\n\ndiv.main div.content .add-task-container .input-container input.title {\n    border-radius: 8px;\n    padding-left: 4px;\n}\n\ndiv.main div.content .add-task-container .input-container textarea {\n    height: 150px;\n    border-radius: 8px;\n    padding-left: 4px;\n}\n\ndiv.main div.content .add-task-container .input-container div.date-project {\n    display: flex;\n    column-gap: 16px;\n}\n\ndiv.main div.content .add-task-container .input-container div.due-date {\n    display: flex;\n    column-gap: 4px;\n    justify-content: center;\n    align-items: center;\n\n    font-weight: bold;\n}\n\ndiv.main div.content .add-task-container .input-container div.project {\n    display: flex;\n    column-gap: 4px;\n    justify-content: center;\n    align-items: center;\n\n    font-weight: bold;\n}\n\ndiv.main div.content .add-task-container .input-container .priority-add-cancel {\n    display: flex;\n    row-gap: 4px;\n    column-gap: 24px;\n    align-items: center;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities {\n    display: flex;\n    column-gap: 4px;\n    align-items: center;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .priority {\n    width: 100px;\n    border-radius: 4px;\n    padding: 4px 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .low {\n    background-color: var(--blue-light);\n    color: var(--blue);\n    border-left: var(--blue) solid 4px;\n    border-right: var(--blue) solid 4px;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .low:hover {\n    cursor: pointer;\n    background-color: var(--blue);\n    color: var(--blue-light);\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .medium {\n    background-color: var(--orange-light);\n    color: var(--orange);\n    border-left: var(--orange) solid 4px;\n    border-right: var(--orange) solid 4px;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .medium:hover {\n    cursor: pointer;\n    background-color: var(--orange);\n    color: var(--orange-light);\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .high {\n    background-color: var(--red-light);\n    color: var(--red);\n    border-left: var(--red) solid 4px;\n    border-right: var(--red) solid 4px;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .high:hover {\n    cursor: pointer;\n    background-color: var(--red);\n    color: var(--red-light);\n}\n\ndiv.main div.content .add-task-container .input-container .add-cancel {\n    display: flex;\n    justify-self: right;\n    column-gap: 4px;\n    margin-left: auto;\n}\n\ndiv.main div.content .add-task-container .input-container .add {\n    width: 100px;\n    border-radius: 4px;\n    padding: 4px 0px;\n\n    background-color: var(--light-green);\n    color: var(--green);\n    border-left: var(--green) solid 4px;\n    border-right: var(--green) solid 4px;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\ndiv.main div.content .add-task-container .input-container .add:hover {\n    cursor: pointer;\n    background-color: var(--green);\n    color: var(--light-green);\n}\n\ndiv.main div.content .add-task-container .input-container .cancel {\n    width: 100px;\n    border-radius: 4px;\n    padding: 4px 0px;\n    background-color: var(--red-light);\n    color: var(--red);\n    border-left: var(--red) solid 4px;\n    border-right: var(--red) solid 4px;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\ndiv.main div.content .add-task-container .input-container .cancel:hover {\n    cursor: pointer;\n    background-color: var(--red);\n    color: var(--red-light);\n}\n\ndiv.main footer {\n    flex: 1;\n    padding: 8px;\n    background-color: var(--light-grey);\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    column-gap: 16px;\n}\n\ndiv.main footer p.text {\n    font-size: 1.25em;\n    font-weight: bold;\n}\n\ndiv.main footer a {\n    border: 3px solid var(--black);\n    border-radius: 100%;\n    width: var(--github-img-size);\n    height: var(--github-img-size);\n    background-color: var(--white);\n    padding: 6px;\n}\n\ndiv.main footer a:hover {\n    background-color: var(--black);\n}\n\ndiv.main footer a:hover img {\n    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(248deg) brightness(106%) contrast(106%);\n}\n\ndiv.main footer a img {\n    width: var(--github-img-size);\n    height: var(--github-img-size);\n}\n"],"sourceRoot":""}]);
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

    const createProject = (name) => {
        const lowName = name.toLowerCase();
        const newProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__.project)(lowName);
        state.createdProjects.push(newProject);
        return newProject;
    };

    return Object.assign(
        state,
        {createProject}
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

    // Create Task
    const createTask = (title, details, priority, dueDate, project) => {
        (0,_task__WEBPACK_IMPORTED_MODULE_0__.task)(title, details, priority, dueDate, project);
    }

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
        {createTask},
        {addTask},
        {deleteTask}
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

    const updateAddTaskInput = () => {
        // Add Task Container
        const addTaskContainer = state.content.querySelector('div.add-task-container');
        console.log(addTaskContainer);
        // Add Task Btn
        const addTaskBtn = state.content.querySelector('div.add-task-btn');
        console.log(addTaskBtn);
        // Add Task Input Container
        const addTaskInputContainer = state.content.querySelector('div.add-task-container div.input-container');
        console.log(addTaskInputContainer);
        // Priority btns
        const priorityBtns = addTaskInputContainer.querySelectorAll('.priority');
        console.log(priorityBtns);
        // Add btn
        const addBtn = addTaskInputContainer.querySelector('.add');
        console.log(addBtn);
        // Cancel btn
        const cancelBtn = addTaskInputContainer.querySelector('.cancel');
        console.log(cancelBtn);

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
        console.log(_directory__WEBPACK_IMPORTED_MODULE_2__.directory.currentProject.name);
        // Div Task Container
        const taskContainer = createElement('div', content, 'task-container');
        // // List of Tasks
        for(let i = 0; i < _directory__WEBPACK_IMPORTED_MODULE_2__.directory.currentProject.tasks.length; i++) {
            console.log(_directory__WEBPACK_IMPORTED_MODULE_2__.directory.currentProject.name);
            // renderTask(project.tasks[i]);
        }
    }

    const renderTask = (t) => {
        const task = createElement('div', state.content, 'content');

        return task;
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
                    const lowPriorityDiv = createElement('div', priorityDiv, ['low', 'priority']);
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
        // Inbox
        const inboxOption = createElement('option', selector);
        inboxOption.textContent = 'Inbox';
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
const task = (title, details, priority, dueDate, project) => {
    const state = {
        title,
        details,
        priority,
        dueDate,
        project,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7OztBQ0FvQztBQUNNO0FBQ2Q7O0FBRTVCLFVBQVUsbURBQUk7O0FBRWQsVUFBVSx5REFBSTtBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL2luZGV4LmNzcz82MzQ5Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvZGlyZWN0b3J5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvcmVuZGVyUGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIC0td2hpdGU6ICNmZmZmZmY7XFxuICAgIC0tbGlnaHQtZ3JleTogI0Q5RDlEOTtcXG4gICAgLS1kYXJrLWdyZXk6ICM0NTQ1NDU7XFxuICAgIC0tYmxhY2s6ICMwMDAwMDA7XFxuICAgIC0tYmxhY2stdGludDogcmdiYSgwLCAwLCAwLCAwLjUwKTtcXG4gICAgLS1ibHVlOiAjMDA4NUZGO1xcbiAgICAtLWJsdWUtbGlnaHQ6ICNiYWRjZmM7XFxuICAgIC0tb3JhbmdlOiAjRkY5OTAwO1xcbiAgICAtLW9yYW5nZS1saWdodDogI0ZBRTdDQztcXG4gICAgLS1yZWQ6ICNGRjAwMDA7XFxuICAgIC0tcmVkLWxpZ2h0OiAjRkNDRUNFO1xcbiAgICAtLWdyZWVuOiAjMzNDNTAwO1xcbiAgICAtLWxpZ2h0LWdyZWVuOiAjRDdGRkM5O1xcbiAgICAtLWdpdGh1Yi1pbWctc2l6ZTogMzJweDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICAvKiBUZW1wICovXFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyogQXNpZGUgICovXFxuYXNpZGUge1xcbiAgICBmbGV4OiAxO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmFzaWRlIHAge1xcbiAgICBmb250LXNpemU6IDEuMjVlbTtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbmFzaWRlIC5ob21lLWNvbnRhaW5lciwgYXNpZGUgLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuYXNpZGUgYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xcbn1cXG5cXG5hc2lkZSBidXR0b246aG92ZXIge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7ICovXFxufVxcblxcbmFzaWRlIGJ1dHRvbi50aXRsZSB7XFxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLXdoaXRlKSBzb2xpZCA1cHg7XFxufVxcblxcbmFzaWRlIC5ob21lLWNvbnRhaW5lciAuZGVmYXVsdC1wcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmFzaWRlIGRpdi5wcm9qZWN0LWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmFzaWRlIGltZyB7IFxcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgxMDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgyNDhkZWcpIGJyaWdodG5lc3MoMTA2JSkgY29udHJhc3QoMTA2JSk7XFxufVxcblxcbmFzaWRlIGJ1dHRvbi5jdXJyZW50LXByb2plY3Qge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLyogTWFpbiAqL1xcbmRpdi5tYWluIHtcXG4gICAgZmxleDogNDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuZGl2Lm1haW4gaGVhZGVyIHtcXG4gICAgZmxleDogMTtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICAvKiBUZW1wICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcXG59XFxuXFxuZGl2Lm1haW4gaGVhZGVyIGJ1dHRvbi5tZW51IHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmRpdi5tYWluIGhlYWRlciBoMS50aXRsZSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IGF1dG87XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAzZW07XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IHtcXG4gICAgZmxleDogNDtcXG4gICAgcGFkZGluZzogMTZweCA2NHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5hZGQtdGFzay1idG4ge1xcbiAgICB3aWR0aDogMTM1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbHVtbi1nYXA6IDRweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5hZGQtdGFzay1idG4gcCB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmFkZC10YXNrLWJ0biBpbWcge1xcbiAgICB3aWR0aDogMjRweDtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcm93LWdhcDogNHB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcXG4gICAgcGFkZGluZzogMTZweCAyNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlci1yaWdodDogdmFyKC0tYmx1ZSkgc29saWQgNHB4O1xcbiAgICBib3JkZXItbGVmdDogdmFyKC0tYmx1ZSkgc29saWQgNHB4O1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgcCB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIGlucHV0LnRpdGxlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIHRleHRhcmVhIHtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIGRpdi5kYXRlLXByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2x1bW4tZ2FwOiAxNnB4O1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgZGl2LmR1ZS1kYXRlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sdW1uLWdhcDogNHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciBkaXYucHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbHVtbi1nYXA6IDRweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLnByaW9yaXR5LWFkZC1jYW5jZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICByb3ctZ2FwOiA0cHg7XFxuICAgIGNvbHVtbi1nYXA6IDI0cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciAucHJpb3JpdGllcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbHVtbi1nYXA6IDRweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIC5wcmlvcml0aWVzIC5wcmlvcml0eSB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBwYWRkaW5nOiA0cHggMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIC5wcmlvcml0aWVzIC5sb3cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWxpZ2h0KTtcXG4gICAgY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICBib3JkZXItbGVmdDogdmFyKC0tYmx1ZSkgc29saWQgNHB4O1xcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLWJsdWUpIHNvbGlkIDRweDtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIC5wcmlvcml0aWVzIC5sb3c6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICBjb2xvcjogdmFyKC0tYmx1ZS1saWdodCk7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciAucHJpb3JpdGllcyAubWVkaXVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlLWxpZ2h0KTtcXG4gICAgY29sb3I6IHZhcigtLW9yYW5nZSk7XFxuICAgIGJvcmRlci1sZWZ0OiB2YXIoLS1vcmFuZ2UpIHNvbGlkIDRweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1vcmFuZ2UpIHNvbGlkIDRweDtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIC5wcmlvcml0aWVzIC5tZWRpdW06aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1vcmFuZ2UtbGlnaHQpO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLnByaW9yaXRpZXMgLmhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtbGlnaHQpO1xcbiAgICBjb2xvcjogdmFyKC0tcmVkKTtcXG4gICAgYm9yZGVyLWxlZnQ6IHZhcigtLXJlZCkgc29saWQgNHB4O1xcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLXJlZCkgc29saWQgNHB4O1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLnByaW9yaXRpZXMgLmhpZ2g6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQtbGlnaHQpO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLmFkZC1jYW5jZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbiAgICBjb2x1bW4tZ2FwOiA0cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLmFkZCB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBwYWRkaW5nOiA0cHggMHB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmVlbik7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIGJvcmRlci1sZWZ0OiB2YXIoLS1ncmVlbikgc29saWQgNHB4O1xcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLWdyZWVuKSBzb2xpZCA0cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLmFkZDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JlZW4pO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLmNhbmNlbCB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBwYWRkaW5nOiA0cHggMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtbGlnaHQpO1xcbiAgICBjb2xvcjogdmFyKC0tcmVkKTtcXG4gICAgYm9yZGVyLWxlZnQ6IHZhcigtLXJlZCkgc29saWQgNHB4O1xcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLXJlZCkgc29saWQgNHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIC5jYW5jZWw6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQtbGlnaHQpO1xcbn1cXG5cXG5kaXYubWFpbiBmb290ZXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sdW1uLWdhcDogMTZweDtcXG59XFxuXFxuZGl2Lm1haW4gZm9vdGVyIHAudGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuZGl2Lm1haW4gZm9vdGVyIGEge1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIHdpZHRoOiB2YXIoLS1naXRodWItaW1nLXNpemUpO1xcbiAgICBoZWlnaHQ6IHZhcigtLWdpdGh1Yi1pbWctc2l6ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgcGFkZGluZzogNnB4O1xcbn1cXG5cXG5kaXYubWFpbiBmb290ZXIgYTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG59XFxuXFxuZGl2Lm1haW4gZm9vdGVyIGE6aG92ZXIgaW1nIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMTAwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMjQ4ZGVnKSBicmlnaHRuZXNzKDEwNiUpIGNvbnRyYXN0KDEwNiUpO1xcbn1cXG5cXG5kaXYubWFpbiBmb290ZXIgYSBpbWcge1xcbiAgICB3aWR0aDogdmFyKC0tZ2l0aHViLWltZy1zaXplKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1naXRodWItaW1nLXNpemUpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdJQUF3STtJQUN4SSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxTQUFTO0lBQ1QsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUEsV0FBVztBQUNYO0lBQ0ksT0FBTztJQUNQLFlBQVk7SUFDWixrQ0FBa0M7O0lBRWxDLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7O0lBRW5CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0kscUNBQXFDO0FBQ3pDOztB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Q2pDLGtDQUFrQzs7SUFFbEMsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsNEJBQTRCO0lBQzVCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLE9BQU87SUFDUCxZQUFZO0lBQ1osbUNBQW1DOztJQUVuQyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZ0dBQWdHO0FBQ3BHOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLDhCQUE4QjtBQUNsQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIC0td2hpdGU6ICNmZmZmZmY7XFxuICAgIC0tbGlnaHQtZ3JleTogI0Q5RDlEOTtcXG4gICAgLS1kYXJrLWdyZXk6ICM0NTQ1NDU7XFxuICAgIC0tYmxhY2s6ICMwMDAwMDA7XFxuICAgIC0tYmxhY2stdGludDogcmdiYSgwLCAwLCAwLCAwLjUwKTtcXG4gICAgLS1ibHVlOiAjMDA4NUZGO1xcbiAgICAtLWJsdWUtbGlnaHQ6ICNiYWRjZmM7XFxuICAgIC0tb3JhbmdlOiAjRkY5OTAwO1xcbiAgICAtLW9yYW5nZS1saWdodDogI0ZBRTdDQztcXG4gICAgLS1yZWQ6ICNGRjAwMDA7XFxuICAgIC0tcmVkLWxpZ2h0OiAjRkNDRUNFO1xcbiAgICAtLWdyZWVuOiAjMzNDNTAwO1xcbiAgICAtLWxpZ2h0LWdyZWVuOiAjRDdGRkM5O1xcbiAgICAtLWdpdGh1Yi1pbWctc2l6ZTogMzJweDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICAvKiBUZW1wICovXFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyogQXNpZGUgICovXFxuYXNpZGUge1xcbiAgICBmbGV4OiAxO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmFzaWRlIHAge1xcbiAgICBmb250LXNpemU6IDEuMjVlbTtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbmFzaWRlIC5ob21lLWNvbnRhaW5lciwgYXNpZGUgLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuYXNpZGUgYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xcbn1cXG5cXG5hc2lkZSBidXR0b246aG92ZXIge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7ICovXFxufVxcblxcbmFzaWRlIGJ1dHRvbi50aXRsZSB7XFxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLXdoaXRlKSBzb2xpZCA1cHg7XFxufVxcblxcbmFzaWRlIC5ob21lLWNvbnRhaW5lciAuZGVmYXVsdC1wcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmFzaWRlIGRpdi5wcm9qZWN0LWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmFzaWRlIGltZyB7IFxcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgxMDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgyNDhkZWcpIGJyaWdodG5lc3MoMTA2JSkgY29udHJhc3QoMTA2JSk7XFxufVxcblxcbmFzaWRlIGJ1dHRvbi5jdXJyZW50LXByb2plY3Qge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLyogTWFpbiAqL1xcbmRpdi5tYWluIHtcXG4gICAgZmxleDogNDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuZGl2Lm1haW4gaGVhZGVyIHtcXG4gICAgZmxleDogMTtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICAvKiBUZW1wICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcXG59XFxuXFxuZGl2Lm1haW4gaGVhZGVyIGJ1dHRvbi5tZW51IHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmRpdi5tYWluIGhlYWRlciBoMS50aXRsZSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IGF1dG87XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAzZW07XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IHtcXG4gICAgZmxleDogNDtcXG4gICAgcGFkZGluZzogMTZweCA2NHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5hZGQtdGFzay1idG4ge1xcbiAgICB3aWR0aDogMTM1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbHVtbi1nYXA6IDRweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5hZGQtdGFzay1idG4gcCB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmFkZC10YXNrLWJ0biBpbWcge1xcbiAgICB3aWR0aDogMjRweDtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcm93LWdhcDogNHB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcXG4gICAgcGFkZGluZzogMTZweCAyNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlci1yaWdodDogdmFyKC0tYmx1ZSkgc29saWQgNHB4O1xcbiAgICBib3JkZXItbGVmdDogdmFyKC0tYmx1ZSkgc29saWQgNHB4O1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgcCB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIGlucHV0LnRpdGxlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIHRleHRhcmVhIHtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIGRpdi5kYXRlLXByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2x1bW4tZ2FwOiAxNnB4O1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgZGl2LmR1ZS1kYXRlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sdW1uLWdhcDogNHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciBkaXYucHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbHVtbi1nYXA6IDRweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLnByaW9yaXR5LWFkZC1jYW5jZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICByb3ctZ2FwOiA0cHg7XFxuICAgIGNvbHVtbi1nYXA6IDI0cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciAucHJpb3JpdGllcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbHVtbi1nYXA6IDRweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIC5wcmlvcml0aWVzIC5wcmlvcml0eSB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBwYWRkaW5nOiA0cHggMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIC5wcmlvcml0aWVzIC5sb3cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWxpZ2h0KTtcXG4gICAgY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICBib3JkZXItbGVmdDogdmFyKC0tYmx1ZSkgc29saWQgNHB4O1xcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLWJsdWUpIHNvbGlkIDRweDtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIC5wcmlvcml0aWVzIC5sb3c6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICBjb2xvcjogdmFyKC0tYmx1ZS1saWdodCk7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciAucHJpb3JpdGllcyAubWVkaXVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlLWxpZ2h0KTtcXG4gICAgY29sb3I6IHZhcigtLW9yYW5nZSk7XFxuICAgIGJvcmRlci1sZWZ0OiB2YXIoLS1vcmFuZ2UpIHNvbGlkIDRweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1vcmFuZ2UpIHNvbGlkIDRweDtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIC5wcmlvcml0aWVzIC5tZWRpdW06aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1vcmFuZ2UtbGlnaHQpO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLnByaW9yaXRpZXMgLmhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtbGlnaHQpO1xcbiAgICBjb2xvcjogdmFyKC0tcmVkKTtcXG4gICAgYm9yZGVyLWxlZnQ6IHZhcigtLXJlZCkgc29saWQgNHB4O1xcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLXJlZCkgc29saWQgNHB4O1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLnByaW9yaXRpZXMgLmhpZ2g6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQtbGlnaHQpO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLmFkZC1jYW5jZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbiAgICBjb2x1bW4tZ2FwOiA0cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLmFkZCB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBwYWRkaW5nOiA0cHggMHB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmVlbik7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIGJvcmRlci1sZWZ0OiB2YXIoLS1ncmVlbikgc29saWQgNHB4O1xcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLWdyZWVuKSBzb2xpZCA0cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLmFkZDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JlZW4pO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLmNhbmNlbCB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBwYWRkaW5nOiA0cHggMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtbGlnaHQpO1xcbiAgICBjb2xvcjogdmFyKC0tcmVkKTtcXG4gICAgYm9yZGVyLWxlZnQ6IHZhcigtLXJlZCkgc29saWQgNHB4O1xcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLXJlZCkgc29saWQgNHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIC5jYW5jZWw6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQtbGlnaHQpO1xcbn1cXG5cXG5kaXYubWFpbiBmb290ZXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sdW1uLWdhcDogMTZweDtcXG59XFxuXFxuZGl2Lm1haW4gZm9vdGVyIHAudGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuZGl2Lm1haW4gZm9vdGVyIGEge1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIHdpZHRoOiB2YXIoLS1naXRodWItaW1nLXNpemUpO1xcbiAgICBoZWlnaHQ6IHZhcigtLWdpdGh1Yi1pbWctc2l6ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgcGFkZGluZzogNnB4O1xcbn1cXG5cXG5kaXYubWFpbiBmb290ZXIgYTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG59XFxuXFxuZGl2Lm1haW4gZm9vdGVyIGE6aG92ZXIgaW1nIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMTAwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMjQ4ZGVnKSBicmlnaHRuZXNzKDEwNiUpIGNvbnRyYXN0KDEwNiUpO1xcbn1cXG5cXG5kaXYubWFpbiBmb290ZXIgYSBpbWcge1xcbiAgICB3aWR0aDogdmFyKC0tZ2l0aHViLWltZy1zaXplKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1naXRodWItaW1nLXNpemUpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7cHJvamVjdH0gZnJvbSAnLi9wcm9qZWN0JztcblxuLy8gbW9kdWxlIHRoYXQgc3RvcmVzIGFsbCBwcm9qZWN0c1xuLy8gZGVmYXVsdCBwcm9qZWN0cyA6IEluYm94LCBUb2RheSwgVXBjb21pbmdcbi8vIGNyZWF0ZWQgcHJvamVjdHNcblxuZXhwb3J0IGNvbnN0IGRpcmVjdG9yeSA9ICgoKSA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICAgIGRlZmF1bHRQcm9qZWN0czogW1xuICAgICAgICAgICAgcHJvamVjdCgnaW5ib3gnKSxcbiAgICAgICAgICAgIHByb2plY3QoJ3RvZGF5JyksXG4gICAgICAgICAgICBwcm9qZWN0KCd1cGNvbWluZycpLFxuICAgICAgICBdLFxuICAgICAgICBjcmVhdGVkUHJvamVjdHM6IFtcbiAgICAgICAgICAgIHByb2plY3QoJ3RlbXAxJyksIFxuICAgICAgICAgICAgcHJvamVjdCgndGVtcDInKSxcbiAgICAgICAgXSxcbiAgICAgICAgY3VycmVudFByb2plY3Q6IG51bGwsXG4gICAgfTtcblxuICAgIHN0YXRlLmN1cnJlbnRQcm9qZWN0ID0gc3RhdGUuZGVmYXVsdFByb2plY3RzWzBdO1xuXG4gICAgY29uc3QgY3JlYXRlUHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGxvd05hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0KGxvd05hbWUpO1xuICAgICAgICBzdGF0ZS5jcmVhdGVkUHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgcmV0dXJuIG5ld1Byb2plY3Q7XG4gICAgfTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgICAgICBzdGF0ZSxcbiAgICAgICAge2NyZWF0ZVByb2plY3R9XG4gICAgKTtcbn0pKCk7IiwiaW1wb3J0IHsgdGFzayB9IGZyb20gXCIuL3Rhc2tcIjtcblxuLy8gSW4gPiBPdXQgOiBTdHJpbmcgTGlzdC1vZi1UYXNrcyA+IE9iamVjdFxuZXhwb3J0IGNvbnN0IHByb2plY3QgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0ge1xuICAgICAgICBuYW1lLFxuICAgICAgICB0YXNrczogW10sXG4gICAgfTtcblxuICAgIC8vIEdldCBwcm9wZXJ0eVxuICAgIGNvbnN0IGdldCA9IChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICBpZihzdGF0ZS5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVtwcm9wZXJ0eV0gXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBUaGUgcHJvcGVydHkgJHtwcm9wZXJ0eX0gZG9lcyBub3QgZXhpc3RgKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBTZXQgcHJvcGVydHlcbiAgICBjb25zdCBzZXQgPSAocHJvcGVydHksIHZhbHVlKSA9PiB7XG4gICAgICAgIGlmKHN0YXRlLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICAgICAgc3RhdGVbcHJvcGVydHldID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBUaGUgcHJvcGVydHkgJHtwcm9wZXJ0eX0gZG9lcyBub3QgZXhpc3RgKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBDcmVhdGUgVGFza1xuICAgIGNvbnN0IGNyZWF0ZVRhc2sgPSAodGl0bGUsIGRldGFpbHMsIHByaW9yaXR5LCBkdWVEYXRlLCBwcm9qZWN0KSA9PiB7XG4gICAgICAgIHRhc2sodGl0bGUsIGRldGFpbHMsIHByaW9yaXR5LCBkdWVEYXRlLCBwcm9qZWN0KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgVGFza1xuICAgIGNvbnN0IGFkZFRhc2sgPSAodGFzaykgPT4ge1xuICAgICAgICBnZXQoJ3Rhc2tzJykucHVzaCh0YXNrKTtcbiAgICB9XG5cbiAgICAvLyBHZXQgVGFza1xuICAgIGNvbnN0IGdldFRhc2sgPSAodGl0bGUpID0+IHtcbiAgICAgICAgZ2V0KCd0YXNrcycpLmZpbHRlcih0YXNrID0+IHRhc2sudGl0bGUgPT09IHRpdGxlKTtcbiAgICB9XG5cbiAgICAvLyBEZWxldGUgVGFza1xuICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSAodGFzaykgPT4ge1xuICAgICAgICB0YXNrcy5maWx0ZXIoeCA9PiB7XG4gICAgICAgICAgICB4LmlkID09PSB0YXNrLmlkOyBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHN0YXRlLFxuICAgICAgICB7Y3JlYXRlVGFza30sXG4gICAgICAgIHthZGRUYXNrfSxcbiAgICAgICAge2RlbGV0ZVRhc2t9XG4gICAgKTtcbn07IiwiaW1wb3J0IG1lbnVTdmcgZnJvbSAnLi4vaWNvbnMvbWVudS5zdmcnO1xuaW1wb3J0IGdpdGh1YlN2ZyBmcm9tICcuLi9pY29ucy9naXRodWIuc3ZnJztcbmltcG9ydCB7ZGlyZWN0b3J5fSBmcm9tICcuL2RpcmVjdG9yeSc7XG5pbXBvcnQgYXJyb3dTdmcgZnJvbSAnLi4vaWNvbnMvYXJyb3cuc3ZnJztcbmltcG9ydCBpbmJveFN2ZyBmcm9tICcuLi9pY29ucy9pbmJveC5zdmcnO1xuaW1wb3J0IHRvZGF5U3ZnIGZyb20gJy4uL2ljb25zL3N0YXIuc3ZnJztcbmltcG9ydCB1cGNvbWluZ1N2ZyBmcm9tICcuLi9pY29ucy9jYWxlbmRhci5zdmcnO1xuaW1wb3J0IGNpcmxjZVBsdXNTdmcgZnJvbSAnLi4vaWNvbnMvY2lyY2xlUGx1cy5zdmcnO1xuaW1wb3J0IGRlbGV0ZVN2ZyBmcm9tICcuLi9pY29ucy90cmFzaC5zdmcnO1xuaW1wb3J0IGVkaXRTdmcgZnJvbSAnLi4vaWNvbnMvZWRpdC5zdmcnO1xuXG5leHBvcnQgY29uc3QgcGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgICAgc2lkZUJhcjogbnVsbCxcbiAgICAgICAgbWFpbjogbnVsbCxcbiAgICAgICAgaGVhZGVyOiBudWxsLFxuICAgICAgICBjb250ZW50OiBudWxsLFxuICAgICAgICBmb290ZXI6IG51bGwsXG4gICAgfTtcblxuICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgY2xlYXIoKTtcbiAgICAgICAgc3RhdGUuc2lkZUJhciA9IHJlbmRlclNpZGVCYXIoKTtcbiAgICAgICAgc3RhdGUubWFpbiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIGRvY3VtZW50LmJvZHksICdtYWluJyk7XG4gICAgICAgIHN0YXRlLmhlYWRlciA9IHJlbmRlckhlYWRlcigpO1xuICAgICAgICBzdGF0ZS5jb250ZW50ID0gcmVuZGVyQ29udGVudCgpO1xuICAgICAgICBzdGF0ZS5mb290ZXIgPSByZW5kZXJGb290ZXIoKTtcblxuICAgICAgICBzZXRDdXJyZW50UHJvamVjdCgpO1xuICAgICAgICB1cGRhdGUoKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0Q3VycmVudFByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gc3RhdGUuc2lkZUJhci5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24ucHJvamVjdCcpO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKHByb2plY3RzW2ldLnF1ZXJ5U2VsZWN0b3IoJ3AnKS50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpID09IGRpcmVjdG9yeS5jdXJyZW50UHJvamVjdC5uYW1lKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdHNbaV0uY2xhc3NMaXN0LmFkZCgnY3VycmVudC1wcm9qZWN0JykgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2xlYXIgPSAoKSA9PiB7XG4gICAgICAgIHdoaWxlKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbWVudUJ0biA9IHN0YXRlLmhlYWRlci5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBzdGF0ZS5zaWRlQmFyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbi5wcm9qZWN0Jyk7XG4gICAgICAgIGNvbnN0IGFkZFByb2plY3QgPSBzdGF0ZS5zaWRlQmFyLnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpO1xuICAgICAgICBjb25zdCBhZGRQcm9qZWN0QnRuID0gc3RhdGUuc2lkZUJhci5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QgYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tDb250YWluZXIgPSBzdGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgYWRkVGFza0J0biA9IHN0YXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ0bicpO1xuXG4gICAgICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBJZiBkaXYuYWRkLXByb2plY3QgaGFzIGFjdGl2ZSBjbGFzc1xuICAgICAgICAgICAgaWYoYWRkVGFza0J0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgLy8gZGVsZXRlIGlucHV0QWRkUHJvamVjdFxuICAgICAgICAgICAgICAgIGFkZFRhc2tDb250YWluZXIucmVtb3ZlQ2hpbGQoc3RhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtY29udGFpbmVyJykpO1xuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBhY3RpdmUgY2xhc3NcbiAgICAgICAgICAgICAgICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gcmVuZGVyIGlucHV0XG4gICAgICAgICAgICAgICAgcmVuZGVyQWRkVGFza0lucHV0KHN0YXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWNvbnRhaW5lcicpKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVBZGRUYXNrSW5wdXQoKTtcbiAgICAgICAgICAgICAgICAvLyBhZGQgYWN0aXZlIGNsYXNzXG4gICAgICAgICAgICAgICAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0gICAgXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdEVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcHJvamVjdFN0YXRlO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkaXJlY3RvcnkuZGVmYXVsdFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGRpcmVjdG9yeS5kZWZhdWx0UHJvamVjdHNbaV0ubmFtZSA9PSBwcm9qZWN0RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdwJykudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFN0YXRlID0gZGlyZWN0b3J5LmRlZmF1bHRQcm9qZWN0c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZGlyZWN0b3J5LmNyZWF0ZWRQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZihkaXJlY3RvcnkuY3JlYXRlZFByb2plY3RzW2ldLm5hbWUgPT0gcHJvamVjdEVsZW1lbnQucXVlcnlTZWxlY3RvcigncCcpLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RTdGF0ZSA9IGRpcmVjdG9yeS5jcmVhdGVkUHJvamVjdHNbaV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGlyZWN0b3J5LmN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdFN0YXRlO1xuICAgICAgICAgICAgICAgIHJlbmRlcigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhc2lkZSA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignYXNpZGUnKTtcbiAgICAgICAgICAgIGlmKGFzaWRlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyKCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhc2lkZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBJZiBkaXYuYWRkLXByb2plY3QgaGFzIGFjdGl2ZSBjbGFzc1xuICAgICAgICAgICAgaWYoYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgLy8gZGVsZXRlIGlucHV0QWRkUHJvamVjdFxuICAgICAgICAgICAgICAgIGFkZFByb2plY3QucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWNvbnRhaW5lcicpKTtcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgYWN0aXZlIGNsYXNzXG4gICAgICAgICAgICAgICAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHJlbmRlciBpbnB1dEFkZFByb2plY3RcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dEFkZFByb2plY3QgPSByZW5kZXJJbnB1dEFkZFByb2plY3QoYWRkUHJvamVjdCk7XG4gICAgICAgICAgICAgICAgLy8gYWRkIGFjdGl2ZSBjbGFzc1xuICAgICAgICAgICAgICAgIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICAvLyBBZGRCdG4gRXZlbnQgTGlzdG5lclxuICAgICAgICAgICAgICAgIGNvbnN0IGFkZEJ0biA9IGlucHV0QWRkUHJvamVjdC5xdWVyeVNlbGVjdG9yKCcuYWRkJyk7XG4gICAgICAgICAgICAgICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9IGlucHV0QWRkUHJvamVjdC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYoaW5wdXQudmFsdWUgIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0b3J5LmNyZWF0ZVByb2plY3QoaW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAvLyBkZWxldGUgaW5wdXRBZGRQcm9qZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRQcm9qZWN0LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1jb250YWluZXInKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgYWN0aXZlIGNsYXNzXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVuZGVyIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gQ2FuY2VsQnRuIEV2ZW50IExpc3RuZXJcbiAgICAgICAgICAgICAgICBjb25zdCBjYW5jZWxCdG4gPSBpbnB1dEFkZFByb2plY3QucXVlcnlTZWxlY3RvcignLmNhbmNlbCcpO1xuICAgICAgICAgICAgICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZGVsZXRlIGlucHV0QWRkUHJvamVjdFxuICAgICAgICAgICAgICAgICAgICBhZGRQcm9qZWN0LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1jb250YWluZXInKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBhY3RpdmUgY2xhc3NcbiAgICAgICAgICAgICAgICAgICAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVBZGRUYXNrSW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIC8vIEFkZCBUYXNrIENvbnRhaW5lclxuICAgICAgICBjb25zdCBhZGRUYXNrQ29udGFpbmVyID0gc3RhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yKCdkaXYuYWRkLXRhc2stY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFkZFRhc2tDb250YWluZXIpO1xuICAgICAgICAvLyBBZGQgVGFzayBCdG5cbiAgICAgICAgY29uc3QgYWRkVGFza0J0biA9IHN0YXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvcignZGl2LmFkZC10YXNrLWJ0bicpO1xuICAgICAgICBjb25zb2xlLmxvZyhhZGRUYXNrQnRuKTtcbiAgICAgICAgLy8gQWRkIFRhc2sgSW5wdXQgQ29udGFpbmVyXG4gICAgICAgIGNvbnN0IGFkZFRhc2tJbnB1dENvbnRhaW5lciA9IHN0YXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvcignZGl2LmFkZC10YXNrLWNvbnRhaW5lciBkaXYuaW5wdXQtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFkZFRhc2tJbnB1dENvbnRhaW5lcik7XG4gICAgICAgIC8vIFByaW9yaXR5IGJ0bnNcbiAgICAgICAgY29uc3QgcHJpb3JpdHlCdG5zID0gYWRkVGFza0lucHV0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmlvcml0eScpO1xuICAgICAgICBjb25zb2xlLmxvZyhwcmlvcml0eUJ0bnMpO1xuICAgICAgICAvLyBBZGQgYnRuXG4gICAgICAgIGNvbnN0IGFkZEJ0biA9IGFkZFRhc2tJbnB1dENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuYWRkJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFkZEJ0bik7XG4gICAgICAgIC8vIENhbmNlbCBidG5cbiAgICAgICAgY29uc3QgY2FuY2VsQnRuID0gYWRkVGFza0lucHV0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwnKTtcbiAgICAgICAgY29uc29sZS5sb2coY2FuY2VsQnRuKTtcblxuICAgICAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBkZWxldGUgaW5wdXRBZGRQcm9qZWN0XG4gICAgICAgICAgICBhZGRUYXNrQ29udGFpbmVyLnJlbW92ZUNoaWxkKGFkZFRhc2tJbnB1dENvbnRhaW5lcik7XG4gICAgICAgICAgICAvLyByZW1vdmUgYWN0aXZlIGNsYXNzXG4gICAgICAgICAgICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpOyBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gSW4gPiBPdXQ6IFN0cmluZywgT2JqZWN0LCBTdHJpbmcsIFN0cmluZ1xuICAgIC8vIEluID4gT3V0OiBjaGlsZCwgcGFyZW50LCBjbGFzcywgaWRcbiAgICBjb25zdCBjcmVhdGVFbGVtZW50ID0gKGNoaWxkLCBwYXJlbnQsIGNsc3M9bnVsbCwgaWQ9bnVsbCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChjaGlsZCk7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgaWYoY2xzcyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYoQXJyYXkuaXNBcnJheShjbHNzKSkge1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjbHNzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbHNzW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKGlkICE9PSBudWxsKSB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gICAgICAgIH0gXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH07XG5cbiAgICAvLyBBZGQgZWxlbWVudHMgdGhhdCBnbyBpbnRvIHRoZSBoZWFkZXJcbiAgICBjb25zdCByZW5kZXJIZWFkZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicsIHN0YXRlLm1haW4pO1xuICAgICAgICAvLyBzaWRlYmFyIG1lbnUsIGlmIHNpZGUgYmFyIGlzIG5vdCBkaXNwbGF5ZWRcbiAgICAgICAgLy8gc2l0ZSBuYW1lIHRpdGxlIDogVG9Eb2xpc3RcbiAgICAgICAgICAgIGNvbnN0IG1lbnVCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCBoZWFkZXIsICdtZW51Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgYnRuSW1nID0gY3JlYXRlRWxlbWVudCgnaW1nJywgbWVudUJ0bik7XG4gICAgICAgICAgICAgICAgYnRuSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgbWVudVN2Zyk7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZW1lbnQoJ2gxJywgaGVhZGVyLCAndGl0bGUnKTtcbiAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJUb2RvIExpc3RcIjtcbiAgICAgICAgcmV0dXJuIGhlYWRlcjtcbiAgICB9O1xuXG4gICAgLy8gUmVuZGVyIEVsZW1lbnRzIG9mIHNpZGViYXJcbiAgICBjb25zdCByZW5kZXJTaWRlQmFyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzaWRlQmFyID0gY3JlYXRlRWxlbWVudCgnYXNpZGUnLCBkb2N1bWVudC5ib2R5KTtcblxuICAgICAgICAgICAgLy8gRGl2IEhvbWVDb250YWluZXJcbiAgICAgICAgICAgIGNvbnN0IGhvbWVDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBzaWRlQmFyLCAnaG9tZS1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICAvLyBCdG4gOiBeIEhvbWVcbiAgICAgICAgICAgICAgICBjb25zdCBob21lQnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgaG9tZUNvbnRhaW5lciwgJ3RpdGxlJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIEltZ1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBob21lQXJyb3cgPSBjcmVhdGVFbGVtZW50KCdpbWcnLCBob21lQnRuLCAnYXJyb3cnKTtcbiAgICAgICAgICAgICAgICAgICAgaG9tZUFycm93LnNldEF0dHJpYnV0ZSgnc3JjJywgYXJyb3dTdmcpO1xuICAgICAgICAgICAgICAgICAgICAvLyBQYXJhXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhvbWVUZXh0ID0gY3JlYXRlRWxlbWVudCgncCcsIGhvbWVCdG4sICd0ZXh0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGhvbWVUZXh0LnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gICAgICAgICAgICAgICAgLy8gRGl2IDogRGVmYXVsdCBQcm9qZWN0c1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0cyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIGhvbWVDb250YWluZXIsICdkZWZhdWx0LXByb2plY3RzJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIExvb3AgdGhyb3cgZGlyZWN0b3J5LmNyZWF0ZVByb2plY3RzIFxuICAgICAgICAgICAgICAgICAgICAvLyBSZW5kZXIgZWFjaCBQcm9qZWN0IGFzIGEgYnRuXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkaXJlY3RvcnkuZGVmYXVsdFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBkaXJlY3RvcnkuZGVmYXVsdFByb2plY3RzW2ldLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBCdG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCBkZWZhdWx0UHJvamVjdHMsIFtcInByb2plY3RcIiwgcHJvamVjdE5hbWVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWcgPSBjcmVhdGVFbGVtZW50KCdpbWcnLCBwcm9qZWN0QnRuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihwcm9qZWN0TmFtZSA9PT0gJ2luYm94Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBpbmJveFN2Zyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYocHJvamVjdE5hbWUgPT09ICd0b2RheScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgdG9kYXlTdmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHByb2plY3ROYW1lID09PSAndXBjb21pbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHVwY29taW5nU3ZnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGFyYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBjcmVhdGVFbGVtZW50KCdwJywgcHJvamVjdEJ0bik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lLnNsaWNlKDAsMSkudG9VcHBlckNhc2UoKSArIHByb2plY3ROYW1lLnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBEaXYgUHJvamVjdHNcbiAgICAgICAgICAgICAgICAvLyBEaXZzIDogTGlzdC1vZi1Qcm9qZWN0c1xuICAgICAgICAgICAgICAgIC8vIERpdiA6IEFkZCBQcm9qZWN0XG4gICAgICAgICAgICAgICAgICAgIC8vIElucHV0XG4gICAgICAgICAgICAgICAgICAgIC8vIERpdlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQnRuIDogQWRkXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBCdG4gOiBDYW5jZWxcbiAgICAgICAgICAgIC8vIERpdiBQcm9qZWN0c1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBzaWRlQmFyLCAncHJvamVjdC1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICAvLyBCdG4gOiBeIHByb2plY3RcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0QnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgcHJvamVjdHNDb250YWluZXIsICd0aXRsZScpO1xuICAgICAgICAgICAgICAgICAgICAvLyBJbWdcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdEFycm93ID0gY3JlYXRlRWxlbWVudCgnaW1nJywgcHJvamVjdEJ0biwgJ2Fycm93Jyk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RBcnJvdy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGFycm93U3ZnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gUGFyYVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0VGV4dCA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCBwcm9qZWN0QnRuLCAndGV4dCcpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGV4dC50ZXh0Q29udGVudCA9IFwiUHJvamVjdFwiO1xuICAgICAgICAgICAgICAgIC8vIERpdiA6IENyZWF0ZWQgUHJvamVjdHNcbiAgICAgICAgICAgICAgICBjb25zdCBjcmVhdGVkUHJvamVjdHMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBwcm9qZWN0c0NvbnRhaW5lciwgJ2NyZWF0ZWQtcHJvamVjdHMnKVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbmRlciBjcmVhdGVkIHByb2plY3RzIGluIGRpcmVjdG9yeVxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZGlyZWN0b3J5LmNyZWF0ZWRQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb2plY3ROYW1lID0gZGlyZWN0b3J5LmNyZWF0ZWRQcm9qZWN0c1tpXS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGl2IDogZGl2UHJvamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGl2UHJvamVjdCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIGNyZWF0ZWRQcm9qZWN0cywgJ3Byb2plY3QtZGl2JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBCdG4gOiBQcm9qZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdEJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIGRpdlByb2plY3QsIFtcInByb2plY3RcIiwgcHJvamVjdE5hbWVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9JbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGFyYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qVGV4dCA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCBwcm9qZWN0QnRuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvalRleHQudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZS5zbGljZSgwLDEpLnRvVXBwZXJDYXNlKCkgKyBwcm9qZWN0TmFtZS5zbGljZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBCdG4gOiBFZGl0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWRpdEJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIGRpdlByb2plY3QsICdlZGl0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vSW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRJbWcgPSBjcmVhdGVFbGVtZW50KCdpbWcnLCBlZGl0QnRuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdEltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGVkaXRTdmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJ0biA6IERlbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIGRpdlByb2plY3QsICdkZWxldGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUltZyA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsIGRlbGV0ZUJ0bik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGRlbGV0ZVN2Zyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBSZW5kZXIgQ3JlYXRlIE5ldyBQcm9qZWN0IEZvcm1cbiAgICAgICAgICAgICAgICBjb25zdCBhZGRQcm9qZWN0c0NvbnRhaW5lciA9IGFkZFByb2plY3RFbGVtZW50KHByb2plY3RzQ29udGFpbmVyKTtcbiAgICAgICAgcmV0dXJuIHNpZGVCYXI7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZFByb2plY3RFbGVtZW50ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgLy8gRGl2IDogY3JlYXRlUHJvamVjdENvbnRhaW5lclxuICAgICAgICBjb25zdCBhZGRQcm9qZWN0c0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHByb2plY3QsICdhZGQtcHJvamVjdC1jb250YWluZXInKTtcbiAgICAgICAgICAgIC8vIERpdiA6IFRpdGxlLUNvbnRhaW5lclxuICAgICAgICAgICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBhZGRQcm9qZWN0c0NvbnRhaW5lciwgJ2FkZC1wcm9qZWN0Jyk7XG4gICAgICAgICAgICAgICAgLy8gQnRuIDogYWRkUHJvamVjdEJ0blxuICAgICAgICAgICAgICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCB0aXRsZUNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgICAgIC8vIEltZyA6IFBsdXMgaW4gQ2lyY2xlXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZyA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsIGFkZFByb2plY3RCdG4pO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBjaXJsY2VQbHVzU3ZnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gUGFyYSA6IEFkZCBQcm9qZWN0XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlRWxlbWVudCgncCcsIGFkZFByb2plY3RCdG4pO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdBZGQgUHJvamVjdCc7XG4gICAgICAgIHJldHVybiBhZGRQcm9qZWN0c0NvbnRhaW5lcjsgICAgICAgIFxuICAgIH07XG5cbiAgICBjb25zdCByZW5kZXJJbnB1dEFkZFByb2plY3QgPSAocGFyZW50KSA9PiB7XG4gICAgICAgICAvLyBEaXYgOiBJbnB1dCBDb250YWluZXJcbiAgICAgICAgY29uc3QgaW5wdXRDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBwYXJlbnQsICdpbnB1dC1jb250YWluZXInKTtcbiAgICAgICAgICAgIC8vIElucHV0IFxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIGlucHV0Q29udGFpbmVyKTtcbiAgICAgICAgICAgIC8vIERpdiA6IEJ0biBDb250YWluZXJcbiAgICAgICAgICAgIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIGlucHV0Q29udGFpbmVyLCAnYnV0dG9ucycpO1xuICAgICAgICAgICAgICAgIC8vIEJ0biA6IEFkZFxuICAgICAgICAgICAgICAgIGNvbnN0IGFkZEJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIGJ0bkNvbnRhaW5lciwgJ2FkZCcpO1xuICAgICAgICAgICAgICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG4gICAgICAgICAgICAgICAgLy8gQnRuIDogQ2FuY2VsIFxuICAgICAgICAgICAgICAgIGNvbnN0IGNhbmNsZUJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIGJ0bkNvbnRhaW5lciwgJ2NhbmNlbCcpO1xuICAgICAgICAgICAgICAgIGNhbmNsZUJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgICAgIHJldHVybiBpbnB1dENvbnRhaW5lcjtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVuZGVyQ29udGVudCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHN0YXRlLm1haW4sICdjb250ZW50Jyk7XG4gICAgICAgIC8vIHRhc2tcbiAgICAgICAgcmVuZGVyVGFza3MoY29udGVudCk7XG4gICAgICAgIFxuICAgICAgICAvL0FkZCBUYXNrXG4gICAgICAgIHJlbmRlckFkZFRhc2soY29udGVudCk7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH07XG5cbiAgICBjb25zdCByZW5kZXJUYXNrcyA9IChjb250ZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRpcmVjdG9yeS5jdXJyZW50UHJvamVjdC5uYW1lKTtcbiAgICAgICAgLy8gRGl2IFRhc2sgQ29udGFpbmVyXG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBjb250ZW50LCAndGFzay1jb250YWluZXInKTtcbiAgICAgICAgLy8gLy8gTGlzdCBvZiBUYXNrc1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZGlyZWN0b3J5LmN1cnJlbnRQcm9qZWN0LnRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkaXJlY3RvcnkuY3VycmVudFByb2plY3QubmFtZSk7XG4gICAgICAgICAgICAvLyByZW5kZXJUYXNrKHByb2plY3QudGFza3NbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyVGFzayA9ICh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBzdGF0ZS5jb250ZW50LCAnY29udGVudCcpO1xuXG4gICAgICAgIHJldHVybiB0YXNrO1xuICAgIH07XG5cbiAgICBjb25zdCByZW5kZXJBZGRUYXNrID0gKGNvbnRlbnQpID0+IHtcbiAgICAgICAgLy8gRGl2IFxuICAgICAgICBjb25zdCBkaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBjb250ZW50LCAnYWRkLXRhc2stY29udGFpbmVyJyk7XG4gICAgICAgICAgICAvLyBEaXYgOiBBZGQgVGFza1xuICAgICAgICAgICAgY29uc3QgYWRkVGFza0RpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIGRpdiwgJ2FkZC10YXNrLWJ0bicpO1xuICAgICAgICAgICAgICAgIC8vIEltZyA6IGNpcmNsZVBsdXNcbiAgICAgICAgICAgICAgICBjb25zdCBjaXJjbGVQbHVzSW1nID0gY3JlYXRlRWxlbWVudCgnaW1nJywgYWRkVGFza0Rpdik7XG4gICAgICAgICAgICAgICAgY2lyY2xlUGx1c0ltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGNpcmxjZVBsdXNTdmcpO1xuICAgICAgICAgICAgICAgIC8vIFAgOiBBZGQgVGFza1xuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBjcmVhdGVFbGVtZW50KCdwJywgYWRkVGFza0RpdiwgJ3RleHQnKTtcbiAgICAgICAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuICAgIH07XG5cbiAgICBjb25zdCByZW5kZXJBZGRUYXNrSW5wdXQgPSAocGFyZW50KSA9PiB7XG4gICAgICAgIC8vIERpdiBcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgcGFyZW50LCAnaW5wdXQtY29udGFpbmVyJyk7XG4gICAgICAgICAgICAvLyBJbnB1dCA6IFRpdGxlXG4gICAgICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCBjb250YWluZXIsICd0aXRsZScpO1xuICAgICAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1RpdGxlJyk7XG4gICAgICAgICAgICAvLyBJbnB1dCA6IERldGFpbHNcbiAgICAgICAgICAgIGNvbnN0IGRldGFpbFRleHRBcmVhID0gY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnLCBjb250YWluZXIpO1xuICAgICAgICAgICAgZGV0YWlsVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdEZXRhaWxzJyk7XG4gICAgICAgICAgICAvLyBEaXYgOiBEYXRlLVByb2plY3RcbiAgICAgICAgICAgIGNvbnN0IGRhdGVQcm9qZWN0RGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgY29udGFpbmVyLCAnZGF0ZS1wcm9qZWN0Jyk7XG4gICAgICAgICAgICAgICAgLy8gRGl2IDogRHVlIERhdGVcbiAgICAgICAgICAgICAgICBjb25zdCBkdWVEYXRlRGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgZGF0ZVByb2plY3REaXYsICdkdWUtZGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICAvLyBQXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGR1ZURhdGVQYXJhID0gY3JlYXRlRWxlbWVudCgncCcsIGR1ZURhdGVEaXYpO1xuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlUGFyYS50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZTonO1xuICAgICAgICAgICAgICAgICAgICAvLyBJbnB1dCBUeXBlIERhdGVcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCBkdWVEYXRlRGl2KTtcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgICAgICAgICAgICAgLy8gRGl2IDogUHJvamVjdFxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3REaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBkYXRlUHJvamVjdERpdiwgJ3Byb2plY3QnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gUCA6IFByb2plY3RcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFBhcmEgPSBjcmVhdGVFbGVtZW50KCdwJywgcHJvamVjdERpdik7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RQYXJhLnRleHRDb250ZW50ID0gJ1Byb2plY3Q6JztcbiAgICAgICAgICAgICAgICAgICAgLy8gU2VsZWN0b3IgOiBkaXJlY3RvcnkgbGlzdCBvZiBjcmVhdGVkcHJvamVjdHNcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFNlbGVjdG9yID0gY3JlYXRlRWxlbWVudCgnc2VsZWN0JywgcHJvamVjdERpdik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUZW1wXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJQcm9qZWN0T3B0aW9ucyhwcm9qZWN0U2VsZWN0b3IpO1xuICAgICAgICAgICAgLy8gRGl2IDogUHJpb3JpdHktQWRkLUNhbmNlbFxuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlBZGRDYW5jZWxEaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBjb250YWluZXIsICdwcmlvcml0eS1hZGQtY2FuY2VsJyk7XG4gICAgICAgICAgICAgICAgLy8gRGl2IDogUHJpb3JpdHlcbiAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eURpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHByaW9yaXR5QWRkQ2FuY2VsRGl2LCAncHJpb3JpdGllcycpO1xuICAgICAgICAgICAgICAgICAgICAvLyBEaXYgOiBQcmlvcml0eSBUZXh0IGNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eVBhcmFEaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBwcmlvcml0eURpdiwgJ3RleHQtZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQIDogUHJpb3J0aXR5OlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlQYXJhID0gY3JlYXRlRWxlbWVudCgncCcsIHByaW9yaXR5UGFyYURpdik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eVBhcmEudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBcIlxuICAgICAgICAgICAgICAgICAgICAvLyBEaXYgOiBMb3dcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbG93UHJpb3JpdHlEaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBwcmlvcml0eURpdiwgWydsb3cnLCAncHJpb3JpdHknXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQIDogTG93XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsb3dQYXJhID0gY3JlYXRlRWxlbWVudCgncCcsIGxvd1ByaW9yaXR5RGl2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd1BhcmEudGV4dENvbnRlbnQgPSAnTG93JztcbiAgICAgICAgICAgICAgICAgICAgLy8gRGl2IDogTWVkaXVtXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lZGl1bVByaW9yaXR5RGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgcHJpb3JpdHlEaXYsIFsnbWVkaXVtJywgJ3ByaW9yaXR5J10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUCA6IE1lZGl1bVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVkaXVtUGFyYSA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCBtZWRpdW1Qcmlvcml0eURpdik7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZWRpdW1QYXJhLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG4gICAgICAgICAgICAgICAgICAgIC8vIERpdiA6IEhpZ2hcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGlnaFByaW9yaXR5RGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgcHJpb3JpdHlEaXYsIFsnaGlnaCcsICdwcmlvcml0eSddKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFAgOiBIaWdoXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoaWdoUGFyYSA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCBoaWdoUHJpb3JpdHlEaXYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGlnaFBhcmEudGV4dENvbnRlbnQgPSAnSGlnaCc7XG4gICAgICAgICAgICAgICAgLy8gRGl2IDogQWRkLUNhbmNlbFxuICAgICAgICAgICAgICAgIGNvbnN0IGFkZENhbmNlbERpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHByaW9yaXR5QWRkQ2FuY2VsRGl2LCAnYWRkLWNhbmNlbCcpO1xuICAgICAgICAgICAgICAgICAgICAvLyBEaXYgOiBBZGRcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWRkRGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgYWRkQ2FuY2VsRGl2LCAnYWRkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQIDogQWRkXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZGRQYXJhID0gY3JlYXRlRWxlbWVudCgncCcsIGFkZERpdik7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRQYXJhLnRleHRDb250ZW50ID0gXCJBZGRcIjtcbiAgICAgICAgICAgICAgICAgICAgLy8gRGl2IDogQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbmNlbERpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIGFkZENhbmNlbERpdiwgJ2NhbmNlbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUCA6IENhbmNlbFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FuY2VsUGFyYSA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCBjYW5jZWxEaXYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsUGFyYS50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgfTtcblxuICAgIC8vXG4gICAgY29uc3QgcmVuZGVyUHJvamVjdE9wdGlvbnMgPSAoc2VsZWN0b3IpID0+IHtcbiAgICAgICAgLy8gSW5ib3hcbiAgICAgICAgY29uc3QgaW5ib3hPcHRpb24gPSBjcmVhdGVFbGVtZW50KCdvcHRpb24nLCBzZWxlY3Rvcik7XG4gICAgICAgIGluYm94T3B0aW9uLnRleHRDb250ZW50ID0gJ0luYm94JztcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGRpcmVjdG9yeS5jcmVhdGVkUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkaXJlY3RvcnkuY3JlYXRlZFByb2plY3RzW2ldLm5hbWU7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSBjcmVhdGVFbGVtZW50KCdvcHRpb24nLCBzZWxlY3Rvcik7XG4gICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBuYW1lLnNsaWNlKDAsMSkudG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoMSkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbmRlciBFbGVtZW50IG9mIEZvb3RlclxuICAgIGNvbnN0IHJlbmRlckZvb3RlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZm9vdGVyID0gY3JlYXRlRWxlbWVudCgnZm9vdGVyJywgc3RhdGUubWFpbik7XG4gICAgICAgICAgICAvLyBQYXJhIDogQ29weSBSaWdodFxuICAgICAgICAgICAgY29uc3QgY29weVJpZ2h0VGV4dCA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCBmb290ZXIsICd0ZXh0Jyk7XG4gICAgICAgICAgICBjb3B5UmlnaHRUZXh0LmlubmVySFRNTCA9IFwiJiMxNjk7IEphcidaZW5vIEphcnJldHRcIjtcbiAgICAgICAgICAgIC8vIEEgOiBHaXRodWIgbGlua1xuICAgICAgICAgICAgICAgIGNvbnN0IGdpdGh1YkxpbmsgPSBjcmVhdGVFbGVtZW50KCdhJywgZm9vdGVyLCAnZ2l0aHViLWxpbmsnKTtcbiAgICAgICAgICAgICAgICBnaXRodWJMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL2dpdGh1Yi5jb20vQmFudGNoZWUnKTtcbiAgICAgICAgICAgICAgICBnaXRodWJMaW5rLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuICAgICAgICAgICAgICAgIC8vIEltZyA6IEdpdGh1YlxuICAgICAgICAgICAgICAgIGNvbnN0IGdpdGh1YkltZyA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsIGdpdGh1YkxpbmspO1xuICAgICAgICAgICAgICAgIGdpdGh1YkltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGdpdGh1YlN2Zyk7XG4gICAgICAgIHJldHVybiBmb290ZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHN0YXRlLCBcbiAgICAgICAge3JlbmRlcn0sXG4gICAgICAgIHt1cGRhdGV9LFxuICAgICk7XG59OyIsIi8vIFByaW9yaXR5IDpcbiAgICAvLyAxLiBTdHJpbmcgPiBcIkxvd1wiXG4gICAgLy8gMi4gU3RyaW5nID4gXCJNZWRpdW1cIlxuICAgIC8vIDMuIFN0cmluZyA+IFwiSGlnaFwiXG5cbi8vIEluID4gT3V0IDogU3RyaW5nIFN0cmluZyBQcmlvcml0eSBEYXRlIFByb2plY3QgPiBPYmplY3RcbmV4cG9ydCBjb25zdCB0YXNrID0gKHRpdGxlLCBkZXRhaWxzLCBwcmlvcml0eSwgZHVlRGF0ZSwgcHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGV0YWlscyxcbiAgICAgICAgcHJpb3JpdHksXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHByb2plY3QsXG4gICAgICAgIGlkOiBudWxsLFxuICAgIH1cblxuICAgIC8vIENSVUQgOiBDcmVhdGUsIFJlYWQsIFVwZGF0ZSwgRGVsZXRlXG5cbiAgICBjb25zdCBnZW5SYW5kb21JZCA9ICgpID0+IE1hdGgucmFuZG9tKCk7XG5cbiAgICBjb25zdCBnZXQgPSAocHJvcGVydHkpID0+IHtcbiAgICAgICAgaWYoc3RhdGUuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVbcHJvcGVydHldIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgVGhlIHByb3BlcnR5ICR7cHJvcGVydHl9IGRvZXMgbm90IGV4aXN0YCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0ID0gKHByb3BlcnR5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBpZihzdGF0ZS5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgIHN0YXRlW3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgVGhlIHByb3BlcnR5ICR7cHJvcGVydHl9IGRvZXMgbm90IGV4aXN0YCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gQ2hhbmdlIFByb2plY3RcbiAgICAvLyBEZWxldGUgVGFza1xuXG4gICAgc3RhdGUuaWQgPSBnZW5SYW5kb21JZCgpO1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHN0YXRlLFxuICAgICAgICB7Z2V0fSxcbiAgICAgICAge3NldH1cbiAgICApO1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHt0YXNrfSBmcm9tICcuL3NjcmlwdHMvdGFzayc7XG5pbXBvcnQge3BhZ2V9IGZyb20gJy4vc2NyaXB0cy9yZW5kZXJQYWdlJztcbmltcG9ydCAnLi9zdHlsZXMvaW5kZXguY3NzJztcblxuY29uc3QgdCA9IHRhc2soJ1dhc2ggQ2xvdGhlcycsICdQdXQgY2xvdGhlcyBpbiB0aGUgd2FzaGluZyBtYWNoaW5lJywgJ2hpZ2gnLCAnbm93JywgJ0Nob3VycycpO1xuXG5jb25zdCBwID0gcGFnZSgpO1xucC5yZW5kZXIoKTtcblxuLy8gU3RhdGVcbiAgICAvLyBkaXJlY3RvcnkuanMgbW9kdWxlXG4gICAgICAgIC8vIHByb2plY3QuanMgZmFjdG9yeVxuICAgICAgICAgICAgLy8gdGFzay5qcyBmYWN0b3J5XG4vLyBET00gUmVuZGVyaW5nXG4gICAgLy8gUmVuZGVyIFN0YXRpYyBwYWdlLCBJbmNsdWRpbmcgU2lkZWJhciBtZW51XG4gICAgICAgIC8vIERpdiNDb250ZW50IER5bmFtaWNseSByZW5kZXJlZCwgY2hhbmdlcyB3aGVuIGNsaWNraW5nIG9uIHByb2plY3QgaW4gc2lkZWJhciBtZW51Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9