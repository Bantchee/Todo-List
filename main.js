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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    --white: #ffffff;\n    --light-grey: #D9D9D9;\n    --dark-grey: #454545;\n    --black: #000000;\n    --black-tint: rgba(0, 0, 0, 0.50);\n    --blue: #0085FF;\n    --blue-light: #badcfc;\n    --orange: #FF9900;\n    --orange-light: #FAE7CC;\n    --red: #FF0000;\n    --red-light: #FCCECE;\n    --green: #33C500;\n    --light-green: #D7FFC9;\n    --github-img-size: 32px;\n}\n\nbody {\n    display: flex;\n    margin: 0px;\n    /* Temp */\n    width: 100vw;\n    height: 100vh;\n}\n\n/* Aside  */\naside {\n    flex: 1;\n    padding: 8px;\n    background-color: var(--dark-grey);\n\n    display: flex;\n    flex-direction: column;\n}\n\naside p {\n    font-size: 1.25em;\n    margin: 0px;\n}\n\naside .home-container, aside .project-container {\n    display: flex;\n    flex-direction: column;\n}\n\naside button {\n    display: flex;\n    align-items: center;\n\n    cursor: pointer;\n    background: none;\n    border: none;\n    color: var(--white);\n    font-size: 1.25em;\n}\n\naside button:hover {\n    font-weight: bold;\n    /* background-color: var(--light-grey); */\n}\n\naside button.title {\n    border-bottom: var(--white) solid 5px;\n}\n\naside .home-container .default-projects {\n    display: flex;\n    flex-direction: column;\n}\n\naside div.project-div {\n    display: flex;\n}\n\naside img { \n    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(248deg) brightness(106%) contrast(106%);\n}\n\naside button.current-project {\n    font-weight: bold;\n}\n\n/* Main */\ndiv.main {\n    flex: 4;\n\n    display: flex;\n    flex-direction: column;\n}\n\ndiv.main header {\n    flex: 1;\n    padding: 8px;\n    /* Temp */\n    background-color: var(--light-grey);\n\n    display: grid;\n    grid-template-columns: auto 1fr;\n    align-items: center; \n}\n\ndiv.main header button.menu {\n    background: none;\n    border: none;\n    cursor: pointer;\n}\n\ndiv.main header h1.title {\n    padding-right: auto;\n    justify-self: center;\n    font-weight: bold;\n    font-size: 3em;\n}\n\ndiv.main div.content {\n    flex: 4;\n    padding: 16px 64px;\n    background-color: var(--white);\n}\n\ndiv.main div.content .add-task-container {\n    display: flex;\n    flex-direction: column;\n}\n\ndiv.main div.content .add-task-container .add-task-btn {\n    width: 135px;\n\n    display: flex;\n    column-gap: 4px;\n    align-self: center;\n}\n\ndiv.main div.content .add-task-container .add-task-btn p {\n    font-size: 1.5em;\n    font-weight: bold;\n    cursor: pointer;\n}\n\ndiv.main div.content .add-task-container .add-task-btn img {\n    width: 24px;\n}\n\ndiv.main div.content .add-task-container .input-container {\n    display: flex;\n    flex-direction: column;\n    row-gap: 4px;\n\n    background-color: var(--light-grey);\n    padding: 16px 24px;\n    border-radius: 4px;\n    border-right: var(--blue) solid 4px;\n    border-left: var(--blue) solid 4px;\n}\n\ndiv.main div.content .add-task-container .input-container p {\n    margin: 0px;\n    font-weight: bold;\n}\n\ndiv.main div.content .add-task-container .input-container input.title {\n    border-radius: 8px;\n    padding-left: 4px;\n}\n\ndiv.main div.content .add-task-container .input-container textarea {\n    height: 150px;\n    border-radius: 8px;\n    padding-left: 4px;\n}\n\ndiv.main div.content .add-task-container .input-container div.date-project {\n    display: flex;\n    column-gap: 16px;\n}\n\ndiv.main div.content .add-task-container .input-container div.due-date {\n    display: flex;\n    column-gap: 4px;\n    justify-content: center;\n    align-items: center;\n\n    font-weight: bold;\n}\n\ndiv.main div.content .add-task-container .input-container div.project {\n    display: flex;\n    column-gap: 4px;\n    justify-content: center;\n    align-items: center;\n\n    font-weight: bold;\n}\n\ndiv.main div.content .add-task-container .input-container .priority-add-cancel {\n    display: flex;\n    row-gap: 4px;\n    column-gap: 24px;\n    align-items: center;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities {\n    display: flex;\n    column-gap: 4px;\n    align-items: center;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .priority {\n    width: 100px;\n    border-radius: 4px;\n    padding: 4px 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .low {\n    background-color: var(--blue-light);\n    color: var(--blue);\n    border-left: var(--blue) solid 4px;\n    border-right: var(--blue) solid 4px;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .low:hover {\n    cursor: pointer;\n    background-color: var(--blue);\n    color: var(--blue-light);\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .active-low {\n    background-color: var(--blue);\n    color: var(--blue-light);\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .medium {\n    background-color: var(--orange-light);\n    color: var(--orange);\n    border-left: var(--orange) solid 4px;\n    border-right: var(--orange) solid 4px;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .medium:hover {\n    cursor: pointer;\n    background-color: var(--orange);\n    color: var(--orange-light);\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .active-medium {\n    background-color: var(--orange);\n    color: var(--orange-light);\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .high {\n    background-color: var(--red-light);\n    color: var(--red);\n    border-left: var(--red) solid 4px;\n    border-right: var(--red) solid 4px;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .high:hover {\n    cursor: pointer;\n    background-color: var(--red);\n    color: var(--red-light);\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .active-high {\n    background-color: var(--red);\n    color: var(--red-light);\n}\n\ndiv.main div.content .add-task-container .input-container .add-cancel {\n    display: flex;\n    justify-self: right;\n    column-gap: 4px;\n    margin-left: auto;\n}\n\ndiv.main div.content .add-task-container .input-container .add {\n    width: 100px;\n    border-radius: 4px;\n    padding: 4px 0px;\n\n    background-color: var(--light-green);\n    color: var(--green);\n    border-left: var(--green) solid 4px;\n    border-right: var(--green) solid 4px;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\ndiv.main div.content .add-task-container .input-container .add:hover {\n    cursor: pointer;\n    background-color: var(--green);\n    color: var(--light-green);\n}\n\ndiv.main div.content .add-task-container .input-container .cancel {\n    width: 100px;\n    border-radius: 4px;\n    padding: 4px 0px;\n    background-color: var(--red-light);\n    color: var(--red);\n    border-left: var(--red) solid 4px;\n    border-right: var(--red) solid 4px;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\ndiv.main div.content .add-task-container .input-container .cancel:hover {\n    cursor: pointer;\n    background-color: var(--red);\n    color: var(--red-light);\n}\n\ndiv.main footer {\n    flex: 1;\n    padding: 8px;\n    background-color: var(--light-grey);\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    column-gap: 16px;\n}\n\ndiv.main footer p.text {\n    font-size: 1.25em;\n    font-weight: bold;\n}\n\ndiv.main footer a {\n    border: 3px solid var(--black);\n    border-radius: 100%;\n    width: var(--github-img-size);\n    height: var(--github-img-size);\n    background-color: var(--white);\n    padding: 6px;\n}\n\ndiv.main footer a:hover {\n    background-color: var(--black);\n}\n\ndiv.main footer a:hover img {\n    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(248deg) brightness(106%) contrast(106%);\n}\n\ndiv.main footer a img {\n    width: var(--github-img-size);\n    height: var(--github-img-size);\n}\n", "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    --white: #ffffff;\n    --light-grey: #D9D9D9;\n    --dark-grey: #454545;\n    --black: #000000;\n    --black-tint: rgba(0, 0, 0, 0.50);\n    --blue: #0085FF;\n    --blue-light: #badcfc;\n    --orange: #FF9900;\n    --orange-light: #FAE7CC;\n    --red: #FF0000;\n    --red-light: #FCCECE;\n    --green: #33C500;\n    --light-green: #D7FFC9;\n    --github-img-size: 32px;\n}\n\nbody {\n    display: flex;\n    margin: 0px;\n    /* Temp */\n    width: 100vw;\n    height: 100vh;\n}\n\n/* Aside  */\naside {\n    flex: 1;\n    padding: 8px;\n    background-color: var(--dark-grey);\n\n    display: flex;\n    flex-direction: column;\n}\n\naside p {\n    font-size: 1.25em;\n    margin: 0px;\n}\n\naside .home-container, aside .project-container {\n    display: flex;\n    flex-direction: column;\n}\n\naside button {\n    display: flex;\n    align-items: center;\n\n    cursor: pointer;\n    background: none;\n    border: none;\n    color: var(--white);\n    font-size: 1.25em;\n}\n\naside button:hover {\n    font-weight: bold;\n    /* background-color: var(--light-grey); */\n}\n\naside button.title {\n    border-bottom: var(--white) solid 5px;\n}\n\naside .home-container .default-projects {\n    display: flex;\n    flex-direction: column;\n}\n\naside div.project-div {\n    display: flex;\n}\n\naside img { \n    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(248deg) brightness(106%) contrast(106%);\n}\n\naside button.current-project {\n    font-weight: bold;\n}\n\n/* Main */\ndiv.main {\n    flex: 4;\n\n    display: flex;\n    flex-direction: column;\n}\n\ndiv.main header {\n    flex: 1;\n    padding: 8px;\n    /* Temp */\n    background-color: var(--light-grey);\n\n    display: grid;\n    grid-template-columns: auto 1fr;\n    align-items: center; \n}\n\ndiv.main header button.menu {\n    background: none;\n    border: none;\n    cursor: pointer;\n}\n\ndiv.main header h1.title {\n    padding-right: auto;\n    justify-self: center;\n    font-weight: bold;\n    font-size: 3em;\n}\n\ndiv.main div.content {\n    flex: 4;\n    padding: 16px 64px;\n    background-color: var(--white);\n}\n\ndiv.main div.content .add-task-container {\n    display: flex;\n    flex-direction: column;\n}\n\ndiv.main div.content .add-task-container .add-task-btn {\n    width: 135px;\n\n    display: flex;\n    column-gap: 4px;\n    align-self: center;\n}\n\ndiv.main div.content .add-task-container .add-task-btn p {\n    font-size: 1.5em;\n    font-weight: bold;\n    cursor: pointer;\n}\n\ndiv.main div.content .add-task-container .add-task-btn img {\n    width: 24px;\n}\n\ndiv.main div.content .add-task-container .input-container {\n    display: flex;\n    flex-direction: column;\n    row-gap: 4px;\n\n    background-color: var(--light-grey);\n    padding: 16px 24px;\n    border-radius: 4px;\n    border-right: var(--blue) solid 4px;\n    border-left: var(--blue) solid 4px;\n}\n\ndiv.main div.content .add-task-container .input-container p {\n    margin: 0px;\n    font-weight: bold;\n}\n\ndiv.main div.content .add-task-container .input-container input.title {\n    border-radius: 8px;\n    padding-left: 4px;\n}\n\ndiv.main div.content .add-task-container .input-container textarea {\n    height: 150px;\n    border-radius: 8px;\n    padding-left: 4px;\n}\n\ndiv.main div.content .add-task-container .input-container div.date-project {\n    display: flex;\n    column-gap: 16px;\n}\n\ndiv.main div.content .add-task-container .input-container div.due-date {\n    display: flex;\n    column-gap: 4px;\n    justify-content: center;\n    align-items: center;\n\n    font-weight: bold;\n}\n\ndiv.main div.content .add-task-container .input-container div.project {\n    display: flex;\n    column-gap: 4px;\n    justify-content: center;\n    align-items: center;\n\n    font-weight: bold;\n}\n\ndiv.main div.content .add-task-container .input-container .priority-add-cancel {\n    display: flex;\n    row-gap: 4px;\n    column-gap: 24px;\n    align-items: center;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities {\n    display: flex;\n    column-gap: 4px;\n    align-items: center;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .priority {\n    width: 100px;\n    border-radius: 4px;\n    padding: 4px 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .low {\n    background-color: var(--blue-light);\n    color: var(--blue);\n    border-left: var(--blue) solid 4px;\n    border-right: var(--blue) solid 4px;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .low:hover {\n    cursor: pointer;\n    background-color: var(--blue);\n    color: var(--blue-light);\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .active-low {\n    background-color: var(--blue);\n    color: var(--blue-light);\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .medium {\n    background-color: var(--orange-light);\n    color: var(--orange);\n    border-left: var(--orange) solid 4px;\n    border-right: var(--orange) solid 4px;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .medium:hover {\n    cursor: pointer;\n    background-color: var(--orange);\n    color: var(--orange-light);\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .active-medium {\n    background-color: var(--orange);\n    color: var(--orange-light);\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .high {\n    background-color: var(--red-light);\n    color: var(--red);\n    border-left: var(--red) solid 4px;\n    border-right: var(--red) solid 4px;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .high:hover {\n    cursor: pointer;\n    background-color: var(--red);\n    color: var(--red-light);\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .active-high {\n    background-color: var(--red);\n    color: var(--red-light);\n}\n\ndiv.main div.content .add-task-container .input-container .add-cancel {\n    display: flex;\n    justify-self: right;\n    column-gap: 4px;\n    margin-left: auto;\n}\n\ndiv.main div.content .add-task-container .input-container .add {\n    width: 100px;\n    border-radius: 4px;\n    padding: 4px 0px;\n\n    background-color: var(--light-green);\n    color: var(--green);\n    border-left: var(--green) solid 4px;\n    border-right: var(--green) solid 4px;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\ndiv.main div.content .add-task-container .input-container .add:hover {\n    cursor: pointer;\n    background-color: var(--green);\n    color: var(--light-green);\n}\n\ndiv.main div.content .add-task-container .input-container .cancel {\n    width: 100px;\n    border-radius: 4px;\n    padding: 4px 0px;\n    background-color: var(--red-light);\n    color: var(--red);\n    border-left: var(--red) solid 4px;\n    border-right: var(--red) solid 4px;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\ndiv.main div.content .add-task-container .input-container .cancel:hover {\n    cursor: pointer;\n    background-color: var(--red);\n    color: var(--red-light);\n}\n\ndiv.main footer {\n    flex: 1;\n    padding: 8px;\n    background-color: var(--light-grey);\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    column-gap: 16px;\n}\n\ndiv.main footer p.text {\n    font-size: 1.25em;\n    font-weight: bold;\n}\n\ndiv.main footer a {\n    border: 3px solid var(--black);\n    border-radius: 100%;\n    width: var(--github-img-size);\n    height: var(--github-img-size);\n    background-color: var(--white);\n    padding: 6px;\n}\n\ndiv.main footer a:hover {\n    background-color: var(--black);\n}\n\ndiv.main footer a:hover img {\n    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(248deg) brightness(106%) contrast(106%);\n}\n\ndiv.main footer a img {\n    width: var(--github-img-size);\n    height: var(--github-img-size);\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDViwwQ0FBMEMsVUFBVTtBQUNwRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVMsSUFBSTtBQUNiLFNBQVM7QUFDVDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7O0FDQW9DO0FBQ007QUFDZDs7QUFFNUIsVUFBVSxtREFBSTs7QUFFZCxVQUFVLHlEQUFJO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvaW5kZXguY3NzPzYzNDkiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9kaXJlY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9yZW5kZXJQYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgLS13aGl0ZTogI2ZmZmZmZjtcXG4gICAgLS1saWdodC1ncmV5OiAjRDlEOUQ5O1xcbiAgICAtLWRhcmstZ3JleTogIzQ1NDU0NTtcXG4gICAgLS1ibGFjazogIzAwMDAwMDtcXG4gICAgLS1ibGFjay10aW50OiByZ2JhKDAsIDAsIDAsIDAuNTApO1xcbiAgICAtLWJsdWU6ICMwMDg1RkY7XFxuICAgIC0tYmx1ZS1saWdodDogI2JhZGNmYztcXG4gICAgLS1vcmFuZ2U6ICNGRjk5MDA7XFxuICAgIC0tb3JhbmdlLWxpZ2h0OiAjRkFFN0NDO1xcbiAgICAtLXJlZDogI0ZGMDAwMDtcXG4gICAgLS1yZWQtbGlnaHQ6ICNGQ0NFQ0U7XFxuICAgIC0tZ3JlZW46ICMzM0M1MDA7XFxuICAgIC0tbGlnaHQtZ3JlZW46ICNEN0ZGQzk7XFxuICAgIC0tZ2l0aHViLWltZy1zaXplOiAzMnB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIC8qIFRlbXAgKi9cXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4vKiBBc2lkZSAgKi9cXG5hc2lkZSB7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuYXNpZGUgcCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuYXNpZGUgLmhvbWUtY29udGFpbmVyLCBhc2lkZSAucHJvamVjdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5hc2lkZSBidXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XFxufVxcblxcbmFzaWRlIGJ1dHRvbjpob3ZlciB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTsgKi9cXG59XFxuXFxuYXNpZGUgYnV0dG9uLnRpdGxlIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0td2hpdGUpIHNvbGlkIDVweDtcXG59XFxuXFxuYXNpZGUgLmhvbWUtY29udGFpbmVyIC5kZWZhdWx0LXByb2plY3RzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuYXNpZGUgZGl2LnByb2plY3QtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuYXNpZGUgaW1nIHsgXFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDEwMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDI0OGRlZykgYnJpZ2h0bmVzcygxMDYlKSBjb250cmFzdCgxMDYlKTtcXG59XFxuXFxuYXNpZGUgYnV0dG9uLmN1cnJlbnQtcHJvamVjdCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKiBNYWluICovXFxuZGl2Lm1haW4ge1xcbiAgICBmbGV4OiA0O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5kaXYubWFpbiBoZWFkZXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIC8qIFRlbXAgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxcbn1cXG5cXG5kaXYubWFpbiBoZWFkZXIgYnV0dG9uLm1lbnUge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuZGl2Lm1haW4gaGVhZGVyIGgxLnRpdGxlIHtcXG4gICAgcGFkZGluZy1yaWdodDogYXV0bztcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDNlbTtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQge1xcbiAgICBmbGV4OiA0O1xcbiAgICBwYWRkaW5nOiAxNnB4IDY0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmFkZC10YXNrLWJ0biB7XFxuICAgIHdpZHRoOiAxMzVweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sdW1uLWdhcDogNHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmFkZC10YXNrLWJ0biBwIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuYWRkLXRhc2stYnRuIGltZyB7XFxuICAgIHdpZHRoOiAyNHB4O1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICByb3ctZ2FwOiA0cHg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcbiAgICBwYWRkaW5nOiAxNnB4IDI0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1ibHVlKSBzb2xpZCA0cHg7XFxuICAgIGJvcmRlci1sZWZ0OiB2YXIoLS1ibHVlKSBzb2xpZCA0cHg7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciBwIHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgaW5wdXQudGl0bGUge1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmctbGVmdDogNHB4O1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgdGV4dGFyZWEge1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmctbGVmdDogNHB4O1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgZGl2LmRhdGUtcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbHVtbi1nYXA6IDE2cHg7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciBkaXYuZHVlLWRhdGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2x1bW4tZ2FwOiA0cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIGRpdi5wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sdW1uLWdhcDogNHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciAucHJpb3JpdHktYWRkLWNhbmNlbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHJvdy1nYXA6IDRweDtcXG4gICAgY29sdW1uLWdhcDogMjRweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIC5wcmlvcml0aWVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sdW1uLWdhcDogNHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLnByaW9yaXRpZXMgLnByaW9yaXR5IHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHBhZGRpbmc6IDRweCAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLnByaW9yaXRpZXMgLmxvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtbGlnaHQpO1xcbiAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIGJvcmRlci1sZWZ0OiB2YXIoLS1ibHVlKSBzb2xpZCA0cHg7XFxuICAgIGJvcmRlci1yaWdodDogdmFyKC0tYmx1ZSkgc29saWQgNHB4O1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLnByaW9yaXRpZXMgLmxvdzpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1ibHVlLWxpZ2h0KTtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIC5wcmlvcml0aWVzIC5hY3RpdmUtbG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1ibHVlLWxpZ2h0KTtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIC5wcmlvcml0aWVzIC5tZWRpdW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UtbGlnaHQpO1xcbiAgICBjb2xvcjogdmFyKC0tb3JhbmdlKTtcXG4gICAgYm9yZGVyLWxlZnQ6IHZhcigtLW9yYW5nZSkgc29saWQgNHB4O1xcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLW9yYW5nZSkgc29saWQgNHB4O1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLnByaW9yaXRpZXMgLm1lZGl1bTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcXG4gICAgY29sb3I6IHZhcigtLW9yYW5nZS1saWdodCk7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciAucHJpb3JpdGllcyAuYWN0aXZlLW1lZGl1bSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1vcmFuZ2UtbGlnaHQpO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLnByaW9yaXRpZXMgLmhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtbGlnaHQpO1xcbiAgICBjb2xvcjogdmFyKC0tcmVkKTtcXG4gICAgYm9yZGVyLWxlZnQ6IHZhcigtLXJlZCkgc29saWQgNHB4O1xcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLXJlZCkgc29saWQgNHB4O1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLnByaW9yaXRpZXMgLmhpZ2g6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQtbGlnaHQpO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLnByaW9yaXRpZXMgLmFjdGl2ZS1oaWdoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXG4gICAgY29sb3I6IHZhcigtLXJlZC1saWdodCk7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciAuYWRkLWNhbmNlbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxuICAgIGNvbHVtbi1nYXA6IDRweDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciAuYWRkIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHBhZGRpbmc6IDRweCAwcHg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZWVuKTtcXG4gICAgY29sb3I6IHZhcigtLWdyZWVuKTtcXG4gICAgYm9yZGVyLWxlZnQ6IHZhcigtLWdyZWVuKSBzb2xpZCA0cHg7XFxuICAgIGJvcmRlci1yaWdodDogdmFyKC0tZ3JlZW4pIHNvbGlkIDRweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciAuYWRkOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1ncmVlbik7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciAuY2FuY2VsIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHBhZGRpbmc6IDRweCAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1saWdodCk7XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgICBib3JkZXItbGVmdDogdmFyKC0tcmVkKSBzb2xpZCA0cHg7XFxuICAgIGJvcmRlci1yaWdodDogdmFyKC0tcmVkKSBzb2xpZCA0cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLmNhbmNlbDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXG4gICAgY29sb3I6IHZhcigtLXJlZC1saWdodCk7XFxufVxcblxcbmRpdi5tYWluIGZvb3RlciB7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjb2x1bW4tZ2FwOiAxNnB4O1xcbn1cXG5cXG5kaXYubWFpbiBmb290ZXIgcC50ZXh0IHtcXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5kaXYubWFpbiBmb290ZXIgYSB7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgd2lkdGg6IHZhcigtLWdpdGh1Yi1pbWctc2l6ZSk7XFxuICAgIGhlaWdodDogdmFyKC0tZ2l0aHViLWltZy1zaXplKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBwYWRkaW5nOiA2cHg7XFxufVxcblxcbmRpdi5tYWluIGZvb3RlciBhOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbn1cXG5cXG5kaXYubWFpbiBmb290ZXIgYTpob3ZlciBpbWcge1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgxMDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgyNDhkZWcpIGJyaWdodG5lc3MoMTA2JSkgY29udHJhc3QoMTA2JSk7XFxufVxcblxcbmRpdi5tYWluIGZvb3RlciBhIGltZyB7XFxuICAgIHdpZHRoOiB2YXIoLS1naXRodWItaW1nLXNpemUpO1xcbiAgICBoZWlnaHQ6IHZhcigtLWdpdGh1Yi1pbWctc2l6ZSk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksd0lBQXdJO0lBQ3hJLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFNBQVM7SUFDVCxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQSxXQUFXO0FBQ1g7SUFDSSxPQUFPO0lBQ1AsWUFBWTtJQUNaLGtDQUFrQzs7SUFFbEMsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7O0FB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QW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjs7SUFFaEIsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixtQ0FBbUM7SUFDbkMsb0NBQW9DOztJQUVwQyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLGlCQUFpQjtJQUNqQixpQ0FBaUM7SUFDakMsa0NBQWtDOztJQUVsQyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw0QkFBNEI7SUFDNUIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksT0FBTztJQUNQLFlBQVk7SUFDWixtQ0FBbUM7O0lBRW5DLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIsOEJBQThCO0lBQzlCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnR0FBZ0c7QUFDcEc7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsOEJBQThCO0FBQ2xDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgLS13aGl0ZTogI2ZmZmZmZjtcXG4gICAgLS1saWdodC1ncmV5OiAjRDlEOUQ5O1xcbiAgICAtLWRhcmstZ3JleTogIzQ1NDU0NTtcXG4gICAgLS1ibGFjazogIzAwMDAwMDtcXG4gICAgLS1ibGFjay10aW50OiByZ2JhKDAsIDAsIDAsIDAuNTApO1xcbiAgICAtLWJsdWU6ICMwMDg1RkY7XFxuICAgIC0tYmx1ZS1saWdodDogI2JhZGNmYztcXG4gICAgLS1vcmFuZ2U6ICNGRjk5MDA7XFxuICAgIC0tb3JhbmdlLWxpZ2h0OiAjRkFFN0NDO1xcbiAgICAtLXJlZDogI0ZGMDAwMDtcXG4gICAgLS1yZWQtbGlnaHQ6ICNGQ0NFQ0U7XFxuICAgIC0tZ3JlZW46ICMzM0M1MDA7XFxuICAgIC0tbGlnaHQtZ3JlZW46ICNEN0ZGQzk7XFxuICAgIC0tZ2l0aHViLWltZy1zaXplOiAzMnB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIC8qIFRlbXAgKi9cXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4vKiBBc2lkZSAgKi9cXG5hc2lkZSB7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuYXNpZGUgcCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuYXNpZGUgLmhvbWUtY29udGFpbmVyLCBhc2lkZSAucHJvamVjdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5hc2lkZSBidXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XFxufVxcblxcbmFzaWRlIGJ1dHRvbjpob3ZlciB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTsgKi9cXG59XFxuXFxuYXNpZGUgYnV0dG9uLnRpdGxlIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0td2hpdGUpIHNvbGlkIDVweDtcXG59XFxuXFxuYXNpZGUgLmhvbWUtY29udGFpbmVyIC5kZWZhdWx0LXByb2plY3RzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuYXNpZGUgZGl2LnByb2plY3QtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuYXNpZGUgaW1nIHsgXFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDEwMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDI0OGRlZykgYnJpZ2h0bmVzcygxMDYlKSBjb250cmFzdCgxMDYlKTtcXG59XFxuXFxuYXNpZGUgYnV0dG9uLmN1cnJlbnQtcHJvamVjdCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKiBNYWluICovXFxuZGl2Lm1haW4ge1xcbiAgICBmbGV4OiA0O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5kaXYubWFpbiBoZWFkZXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIC8qIFRlbXAgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxcbn1cXG5cXG5kaXYubWFpbiBoZWFkZXIgYnV0dG9uLm1lbnUge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuZGl2Lm1haW4gaGVhZGVyIGgxLnRpdGxlIHtcXG4gICAgcGFkZGluZy1yaWdodDogYXV0bztcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDNlbTtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQge1xcbiAgICBmbGV4OiA0O1xcbiAgICBwYWRkaW5nOiAxNnB4IDY0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmFkZC10YXNrLWJ0biB7XFxuICAgIHdpZHRoOiAxMzVweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sdW1uLWdhcDogNHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmFkZC10YXNrLWJ0biBwIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuYWRkLXRhc2stYnRuIGltZyB7XFxuICAgIHdpZHRoOiAyNHB4O1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICByb3ctZ2FwOiA0cHg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcbiAgICBwYWRkaW5nOiAxNnB4IDI0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1ibHVlKSBzb2xpZCA0cHg7XFxuICAgIGJvcmRlci1sZWZ0OiB2YXIoLS1ibHVlKSBzb2xpZCA0cHg7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciBwIHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgaW5wdXQudGl0bGUge1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmctbGVmdDogNHB4O1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgdGV4dGFyZWEge1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmctbGVmdDogNHB4O1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgZGl2LmRhdGUtcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbHVtbi1nYXA6IDE2cHg7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciBkaXYuZHVlLWRhdGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2x1bW4tZ2FwOiA0cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIGRpdi5wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sdW1uLWdhcDogNHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciAucHJpb3JpdHktYWRkLWNhbmNlbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHJvdy1nYXA6IDRweDtcXG4gICAgY29sdW1uLWdhcDogMjRweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIC5wcmlvcml0aWVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sdW1uLWdhcDogNHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLnByaW9yaXRpZXMgLnByaW9yaXR5IHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHBhZGRpbmc6IDRweCAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLnByaW9yaXRpZXMgLmxvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtbGlnaHQpO1xcbiAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIGJvcmRlci1sZWZ0OiB2YXIoLS1ibHVlKSBzb2xpZCA0cHg7XFxuICAgIGJvcmRlci1yaWdodDogdmFyKC0tYmx1ZSkgc29saWQgNHB4O1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLnByaW9yaXRpZXMgLmxvdzpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1ibHVlLWxpZ2h0KTtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIC5wcmlvcml0aWVzIC5hY3RpdmUtbG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1ibHVlLWxpZ2h0KTtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIC5wcmlvcml0aWVzIC5tZWRpdW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UtbGlnaHQpO1xcbiAgICBjb2xvcjogdmFyKC0tb3JhbmdlKTtcXG4gICAgYm9yZGVyLWxlZnQ6IHZhcigtLW9yYW5nZSkgc29saWQgNHB4O1xcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLW9yYW5nZSkgc29saWQgNHB4O1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLnByaW9yaXRpZXMgLm1lZGl1bTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcXG4gICAgY29sb3I6IHZhcigtLW9yYW5nZS1saWdodCk7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciAucHJpb3JpdGllcyAuYWN0aXZlLW1lZGl1bSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1vcmFuZ2UtbGlnaHQpO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLnByaW9yaXRpZXMgLmhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtbGlnaHQpO1xcbiAgICBjb2xvcjogdmFyKC0tcmVkKTtcXG4gICAgYm9yZGVyLWxlZnQ6IHZhcigtLXJlZCkgc29saWQgNHB4O1xcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLXJlZCkgc29saWQgNHB4O1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLnByaW9yaXRpZXMgLmhpZ2g6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQtbGlnaHQpO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLnByaW9yaXRpZXMgLmFjdGl2ZS1oaWdoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXG4gICAgY29sb3I6IHZhcigtLXJlZC1saWdodCk7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciAuYWRkLWNhbmNlbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxuICAgIGNvbHVtbi1nYXA6IDRweDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciAuYWRkIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHBhZGRpbmc6IDRweCAwcHg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZWVuKTtcXG4gICAgY29sb3I6IHZhcigtLWdyZWVuKTtcXG4gICAgYm9yZGVyLWxlZnQ6IHZhcigtLWdyZWVuKSBzb2xpZCA0cHg7XFxuICAgIGJvcmRlci1yaWdodDogdmFyKC0tZ3JlZW4pIHNvbGlkIDRweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciAuYWRkOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1ncmVlbik7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciAuY2FuY2VsIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHBhZGRpbmc6IDRweCAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1saWdodCk7XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgICBib3JkZXItbGVmdDogdmFyKC0tcmVkKSBzb2xpZCA0cHg7XFxuICAgIGJvcmRlci1yaWdodDogdmFyKC0tcmVkKSBzb2xpZCA0cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLmNhbmNlbDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXG4gICAgY29sb3I6IHZhcigtLXJlZC1saWdodCk7XFxufVxcblxcbmRpdi5tYWluIGZvb3RlciB7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjb2x1bW4tZ2FwOiAxNnB4O1xcbn1cXG5cXG5kaXYubWFpbiBmb290ZXIgcC50ZXh0IHtcXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5kaXYubWFpbiBmb290ZXIgYSB7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgd2lkdGg6IHZhcigtLWdpdGh1Yi1pbWctc2l6ZSk7XFxuICAgIGhlaWdodDogdmFyKC0tZ2l0aHViLWltZy1zaXplKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBwYWRkaW5nOiA2cHg7XFxufVxcblxcbmRpdi5tYWluIGZvb3RlciBhOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbn1cXG5cXG5kaXYubWFpbiBmb290ZXIgYTpob3ZlciBpbWcge1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgxMDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgyNDhkZWcpIGJyaWdodG5lc3MoMTA2JSkgY29udHJhc3QoMTA2JSk7XFxufVxcblxcbmRpdi5tYWluIGZvb3RlciBhIGltZyB7XFxuICAgIHdpZHRoOiB2YXIoLS1naXRodWItaW1nLXNpemUpO1xcbiAgICBoZWlnaHQ6IHZhcigtLWdpdGh1Yi1pbWctc2l6ZSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtwcm9qZWN0fSBmcm9tICcuL3Byb2plY3QnO1xuXG4vLyBtb2R1bGUgdGhhdCBzdG9yZXMgYWxsIHByb2plY3RzXG4vLyBkZWZhdWx0IHByb2plY3RzIDogSW5ib3gsIFRvZGF5LCBVcGNvbWluZ1xuLy8gY3JlYXRlZCBwcm9qZWN0c1xuXG5leHBvcnQgY29uc3QgZGlyZWN0b3J5ID0gKCgpID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgICAgZGVmYXVsdFByb2plY3RzOiBbXG4gICAgICAgICAgICBwcm9qZWN0KCdpbmJveCcpLFxuICAgICAgICAgICAgcHJvamVjdCgndG9kYXknKSxcbiAgICAgICAgICAgIHByb2plY3QoJ3VwY29taW5nJyksXG4gICAgICAgIF0sXG4gICAgICAgIGNyZWF0ZWRQcm9qZWN0czogW1xuICAgICAgICAgICAgcHJvamVjdCgndGVtcDEnKSwgXG4gICAgICAgICAgICBwcm9qZWN0KCd0ZW1wMicpLFxuICAgICAgICBdLFxuICAgICAgICBjdXJyZW50UHJvamVjdDogbnVsbCxcbiAgICB9O1xuXG4gICAgc3RhdGUuY3VycmVudFByb2plY3QgPSBzdGF0ZS5kZWZhdWx0UHJvamVjdHNbMF07XG5cbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgbG93TmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3QobG93TmFtZSk7XG4gICAgICAgIHN0YXRlLmNyZWF0ZWRQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgICByZXR1cm4gbmV3UHJvamVjdDtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgICAgIGlmKG5hbWUgPT09ICdpbmJveCcpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5kZWZhdWx0UHJvamVjdHNbMF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3RhdGUuY3JlYXRlZFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYobmFtZSA9PT0gc3RhdGUuY3JlYXRlZFByb2plY3RzW2ldLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlLmNyZWF0ZWRQcm9qZWN0c1tpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gZWxzZSBcbiAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCBjcmVhdGVQcm9qZWN0c1xuICAgICAgICAgICAgICAgIC8vIGlmIHByb2plY3QubmFtZSA9PSBuYW1lXG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiBwcm9qZWN0XG4gICAgfTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgICAgICBzdGF0ZSxcbiAgICAgICAge2NyZWF0ZVByb2plY3R9LFxuICAgICAgICB7Z2V0UHJvamVjdH1cbiAgICApO1xufSkoKTsiLCJpbXBvcnQgeyB0YXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuXG4vLyBJbiA+IE91dCA6IFN0cmluZyBMaXN0LW9mLVRhc2tzID4gT2JqZWN0XG5leHBvcnQgY29uc3QgcHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHRhc2tzOiBbXSxcbiAgICB9O1xuXG4gICAgLy8gR2V0IHByb3BlcnR5XG4gICAgY29uc3QgZ2V0ID0gKHByb3BlcnR5KSA9PiB7XG4gICAgICAgIGlmKHN0YXRlLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlW3Byb3BlcnR5XSBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFRoZSBwcm9wZXJ0eSAke3Byb3BlcnR5fSBkb2VzIG5vdCBleGlzdGApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIFNldCBwcm9wZXJ0eVxuICAgIGNvbnN0IHNldCA9IChwcm9wZXJ0eSwgdmFsdWUpID0+IHtcbiAgICAgICAgaWYoc3RhdGUuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgICAgICBzdGF0ZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFRoZSBwcm9wZXJ0eSAke3Byb3BlcnR5fSBkb2VzIG5vdCBleGlzdGApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIEFkZCBUYXNrXG4gICAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgICAgIGdldCgndGFza3MnKS5wdXNoKHRhc2spO1xuICAgIH1cblxuICAgIC8vIEdldCBUYXNrXG4gICAgY29uc3QgZ2V0VGFzayA9ICh0aXRsZSkgPT4ge1xuICAgICAgICBnZXQoJ3Rhc2tzJykuZmlsdGVyKHRhc2sgPT4gdGFzay50aXRsZSA9PT0gdGl0bGUpO1xuICAgIH1cblxuICAgIC8vIERlbGV0ZSBUYXNrXG4gICAgY29uc3QgZGVsZXRlVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgICAgIHRhc2tzLmZpbHRlcih4ID0+IHtcbiAgICAgICAgICAgIHguaWQgPT09IHRhc2suaWQ7IFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIHthZGRUYXNrfSxcbiAgICAgICAge2RlbGV0ZVRhc2t9XG4gICAgKTtcbn07IiwiaW1wb3J0IG1lbnVTdmcgZnJvbSAnLi4vaWNvbnMvbWVudS5zdmcnO1xuaW1wb3J0IGdpdGh1YlN2ZyBmcm9tICcuLi9pY29ucy9naXRodWIuc3ZnJztcbmltcG9ydCB7ZGlyZWN0b3J5fSBmcm9tICcuL2RpcmVjdG9yeSc7XG5pbXBvcnQgYXJyb3dTdmcgZnJvbSAnLi4vaWNvbnMvYXJyb3cuc3ZnJztcbmltcG9ydCBpbmJveFN2ZyBmcm9tICcuLi9pY29ucy9pbmJveC5zdmcnO1xuaW1wb3J0IHRvZGF5U3ZnIGZyb20gJy4uL2ljb25zL3N0YXIuc3ZnJztcbmltcG9ydCB1cGNvbWluZ1N2ZyBmcm9tICcuLi9pY29ucy9jYWxlbmRhci5zdmcnO1xuaW1wb3J0IGNpcmxjZVBsdXNTdmcgZnJvbSAnLi4vaWNvbnMvY2lyY2xlUGx1cy5zdmcnO1xuaW1wb3J0IGRlbGV0ZVN2ZyBmcm9tICcuLi9pY29ucy90cmFzaC5zdmcnO1xuaW1wb3J0IGVkaXRTdmcgZnJvbSAnLi4vaWNvbnMvZWRpdC5zdmcnO1xuaW1wb3J0IHt0YXNrfSBmcm9tICcuL3Rhc2snO1xuXG5leHBvcnQgY29uc3QgcGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgICAgc2lkZUJhcjogbnVsbCxcbiAgICAgICAgbWFpbjogbnVsbCxcbiAgICAgICAgaGVhZGVyOiBudWxsLFxuICAgICAgICBjb250ZW50OiBudWxsLFxuICAgICAgICBmb290ZXI6IG51bGwsXG4gICAgfTtcblxuICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgY2xlYXIoKTtcbiAgICAgICAgc3RhdGUuc2lkZUJhciA9IHJlbmRlclNpZGVCYXIoKTtcbiAgICAgICAgc3RhdGUubWFpbiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIGRvY3VtZW50LmJvZHksICdtYWluJyk7XG4gICAgICAgIHN0YXRlLmhlYWRlciA9IHJlbmRlckhlYWRlcigpO1xuICAgICAgICBzdGF0ZS5jb250ZW50ID0gcmVuZGVyQ29udGVudCgpO1xuICAgICAgICBzdGF0ZS5mb290ZXIgPSByZW5kZXJGb290ZXIoKTtcblxuICAgICAgICBzZXRDdXJyZW50UHJvamVjdCgpO1xuICAgICAgICB1cGRhdGUoKTtcbiAgICB9O1xuXG4gICAgLy8gYWRkcyB0aGUgY3VycmVudC1wcm9qZWN0IGNsYXNzIHRvIGN1cnJlbnQgcmVuZGVyZWQgcHJvamVjdFxuICAgIGNvbnN0IHNldEN1cnJlbnRQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IHN0YXRlLnNpZGVCYXIucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uLnByb2plY3QnKTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihwcm9qZWN0c1tpXS5xdWVyeVNlbGVjdG9yKCdwJykudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKSA9PSBkaXJlY3RvcnkuY3VycmVudFByb2plY3QubmFtZSkge1xuICAgICAgICAgICAgICAgIHByb2plY3RzW2ldLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtcHJvamVjdCcpIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNsZWFyID0gKCkgPT4ge1xuICAgICAgICB3aGlsZShkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB1cGRhdGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1lbnVCdG4gPSBzdGF0ZS5oZWFkZXIucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gc3RhdGUuc2lkZUJhci5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24ucHJvamVjdCcpO1xuICAgICAgICBjb25zdCBhZGRQcm9qZWN0ID0gc3RhdGUuc2lkZUJhci5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QnKTtcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IHN0YXRlLnNpZGVCYXIucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0IGJ1dHRvbicpO1xuICAgICAgICBjb25zdCBhZGRUYXNrQ29udGFpbmVyID0gc3RhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBzdGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idG4nKTtcblxuICAgICAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gSWYgZGl2LmFkZC1wcm9qZWN0IGhhcyBhY3RpdmUgY2xhc3NcbiAgICAgICAgICAgIGlmKGFkZFRhc2tCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgIC8vIGRlbGV0ZSBpbnB1dEFkZFByb2plY3RcbiAgICAgICAgICAgICAgICBhZGRUYXNrQ29udGFpbmVyLnJlbW92ZUNoaWxkKHN0YXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWNvbnRhaW5lcicpKTtcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgYWN0aXZlIGNsYXNzXG4gICAgICAgICAgICAgICAgYWRkVGFza0J0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHJlbmRlciBpbnB1dFxuICAgICAgICAgICAgICAgIHJlbmRlckFkZFRhc2tJbnB1dChzdGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1jb250YWluZXInKSk7XG4gICAgICAgICAgICAgICAgdXBkYXRlQWRkVGFza0lucHV0KCk7XG4gICAgICAgICAgICAgICAgLy8gYWRkIGFjdGl2ZSBjbGFzc1xuICAgICAgICAgICAgICAgIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9ICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3RFbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3RTdGF0ZTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZGlyZWN0b3J5LmRlZmF1bHRQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZihkaXJlY3RvcnkuZGVmYXVsdFByb2plY3RzW2ldLm5hbWUgPT0gcHJvamVjdEVsZW1lbnQucXVlcnlTZWxlY3RvcigncCcpLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RTdGF0ZSA9IGRpcmVjdG9yeS5kZWZhdWx0UHJvamVjdHNbaV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGRpcmVjdG9yeS5jcmVhdGVkUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZGlyZWN0b3J5LmNyZWF0ZWRQcm9qZWN0c1tpXS5uYW1lID09IHByb2plY3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3AnKS50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0U3RhdGUgPSBkaXJlY3RvcnkuY3JlYXRlZFByb2plY3RzW2ldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRpcmVjdG9yeS5jdXJyZW50UHJvamVjdCA9IHByb2plY3RTdGF0ZTtcbiAgICAgICAgICAgICAgICByZW5kZXIoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXNpZGUgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJ2FzaWRlJyk7XG4gICAgICAgICAgICBpZihhc2lkZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJlbmRlcigpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYXNpZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gSWYgZGl2LmFkZC1wcm9qZWN0IGhhcyBhY3RpdmUgY2xhc3NcbiAgICAgICAgICAgIGlmKGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgIC8vIGRlbGV0ZSBpbnB1dEFkZFByb2plY3RcbiAgICAgICAgICAgICAgICBhZGRQcm9qZWN0LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1jb250YWluZXInKSk7XG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGFjdGl2ZSBjbGFzc1xuICAgICAgICAgICAgICAgIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyByZW5kZXIgaW5wdXRBZGRQcm9qZWN0XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXRBZGRQcm9qZWN0ID0gcmVuZGVySW5wdXRBZGRQcm9qZWN0KGFkZFByb2plY3QpO1xuICAgICAgICAgICAgICAgIC8vIGFkZCBhY3RpdmUgY2xhc3NcbiAgICAgICAgICAgICAgICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgLy8gQWRkQnRuIEV2ZW50IExpc3RuZXJcbiAgICAgICAgICAgICAgICBjb25zdCBhZGRCdG4gPSBpbnB1dEFkZFByb2plY3QucXVlcnlTZWxlY3RvcignLmFkZCcpO1xuICAgICAgICAgICAgICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBpbnB1dEFkZFByb2plY3QucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKGlucHV0LnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdG9yeS5jcmVhdGVQcm9qZWN0KGlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVsZXRlIGlucHV0QWRkUHJvamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkUHJvamVjdC5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtY29udGFpbmVyJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGFjdGl2ZSBjbGFzc1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbmRlciBwYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIENhbmNlbEJ0biBFdmVudCBMaXN0bmVyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FuY2VsQnRuID0gaW5wdXRBZGRQcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwnKTtcbiAgICAgICAgICAgICAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRlbGV0ZSBpbnB1dEFkZFByb2plY3RcbiAgICAgICAgICAgICAgICAgICAgYWRkUHJvamVjdC5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtY29udGFpbmVyJykpO1xuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgYWN0aXZlIGNsYXNzXG4gICAgICAgICAgICAgICAgICAgIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlQWRkVGFza0lucHV0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhZGRUYXNrQ29udGFpbmVyID0gc3RhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yKCdkaXYuYWRkLXRhc2stY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBzdGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5hZGQtdGFzay1idG4nKTtcbiAgICAgICAgY29uc3QgYWRkVGFza0lucHV0Q29udGFpbmVyID0gc3RhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yKCdkaXYuYWRkLXRhc2stY29udGFpbmVyIGRpdi5pbnB1dC1jb250YWluZXInKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFByaW9yaXR5IGJ0bnNcbiAgICAgICAgY29uc3QgcHJpb3JpdHlCdG5zID0gYWRkVGFza0lucHV0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmlvcml0eScpO1xuICAgICAgICBcbiAgICAgICAgcHJpb3JpdHlCdG5zLmZvckVhY2goKHByaW9yaXR5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gaWYgcHJpb3JpdHkgaXMgbG93LCBzZXQgYmFja2dyb3VuZCB0byBibHVlXG4gICAgICAgICAgICAgICAgaWYocHJpb3JpdHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdsb3cnKSkge1xuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtbG93Jyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIG90aGVyc1xuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUJ0bnNbMV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLW1lZGl1bScpO1xuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUJ0bnNbMl0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLWhpZ2gnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gaWYgcHJpb3JpdHkgaXMgbWVkaXVtLCBzZXQgYmFja2dyb3VuZCB0byBvcmFuZ2VcbiAgICAgICAgICAgICAgICBlbHNlIGlmKHByaW9yaXR5LmNsYXNzTGlzdC5jb250YWlucygnbWVkaXVtJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLW1lZGl1bScpO1xuICAgICAgICAgICAgICAgICAgICAvLyBvdGhlcnNcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlCdG5zWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1sb3cnKTtcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlCdG5zWzJdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1oaWdoJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGlmIHByaW9yaXR5IGlzIGxvdywgc2V0IGJhY2tncm91bmQgdG8gcmVkXG4gICAgICAgICAgICAgICAgZWxzZSBpZihwcmlvcml0eS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZ2gnKSkge1xuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtaGlnaCcpO1xuICAgICAgICAgICAgICAgICAgICAvLyBvdGhlcnNcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlCdG5zWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1sb3cnKTtcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlCdG5zWzFdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1tZWRpdW0nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIGJ0blxuICAgICAgICBjb25zdCBhZGRCdG4gPSBhZGRUYXNrSW5wdXRDb250YWluZXIucXVlcnlTZWxlY3RvcignLmFkZCcpO1xuICAgICAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBBZGQgVGFzayBJbnB1dCBDb250YWluZXJcbiAgICAgICAgICAgIC8vIEdldCBUaXRsZSB2YWx1ZSBcbiAgICAgICAgICAgIGxldCB0aXRsZVZhbHVlID0gYWRkVGFza0lucHV0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpLnZhbHVlO1xuICAgICAgICAgICAgLy8gR2V0IERldGFpbHMgVmFsdWVcbiAgICAgICAgICAgIGxldCBkZXRhaWxzVmFsdWUgPSBhZGRUYXNrSW5wdXRDb250YWluZXIucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKS52YWx1ZTtcbiAgICAgICAgICAgIC8vIEdldCBQcmlvcml0eVxuICAgICAgICAgICAgbGV0IHByaW9yaXR5VmFsdWU7XG4gICAgICAgICAgICBwcmlvcml0eUJ0bnMuZm9yRWFjaCgocHJpb3JpdHksKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYocHJpb3JpdHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUtbG93JykpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlWYWx1ZSA9ICdsb3cnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKHByaW9yaXR5LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlLW1lZGl1bScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5VmFsdWUgPSAnbWVkaXVtJztcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIGVsc2UgaWYocHJpb3JpdHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUtaGlnaCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5VmFsdWUgPSAnaGlnaCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBHZXQgRHVlIERhdGUgVmFsdWVcbiAgICAgICAgICAgIGxldCBkdWVEYXRlVmFsdWUgPSBhZGRUYXNrSW5wdXRDb250YWluZXIucXVlcnlTZWxlY3RvcignZGl2LmR1ZS1kYXRlIGlucHV0JykudmFsdWU7XG4gICAgICAgICAgICAvLyBHZXQgUHJvamVjdFxuICAgICAgICAgICAgbGV0IHByb2plY3RWYWx1ZSA9IGFkZFRhc2tJbnB1dENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdkaXYucHJvamVjdCBzZWxlY3QnKS52YWx1ZTtcblxuICAgICAgICAgICAgLy8gY3JlYXRlIFRhc2tcbiAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2sgPSB0YXNrKHRpdGxlVmFsdWUsIGRldGFpbHNWYWx1ZSwgcHJpb3JpdHlWYWx1ZSwgZHVlRGF0ZVZhbHVlLCBwcm9qZWN0VmFsdWUuc2xpY2UoMCwxKS50b0xvd2VyQ2FzZSgpICsgcHJvamVjdFZhbHVlLnNsaWNlKDEpKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gR2V0IHByb2plY3QgZnJvbSBkaXJlY3RvcnlcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBkaXJlY3RvcnkuZ2V0UHJvamVjdChwcm9qZWN0VmFsdWUuc2xpY2UoMCwxKS50b0xvd2VyQ2FzZSgpICsgcHJvamVjdFZhbHVlLnNsaWNlKDEpKTtcblxuICAgICAgICAgICAgLy8gYWRkIHRhc2sgdG8gcHJvamVjdFxuICAgICAgICAgICAgcHJvamVjdC5hZGRUYXNrKG5ld1Rhc2spO1xuXG4gICAgICAgICAgICByZW5kZXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ2FuY2VsIGJ0blxuICAgICAgICBjb25zdCBjYW5jZWxCdG4gPSBhZGRUYXNrSW5wdXRDb250YWluZXIucXVlcnlTZWxlY3RvcignLmNhbmNlbCcpO1xuXG4gICAgICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIC8vIGRlbGV0ZSBpbnB1dEFkZFByb2plY3RcbiAgICAgICAgICAgIGFkZFRhc2tDb250YWluZXIucmVtb3ZlQ2hpbGQoYWRkVGFza0lucHV0Q29udGFpbmVyKTtcbiAgICAgICAgICAgIC8vIHJlbW92ZSBhY3RpdmUgY2xhc3NcbiAgICAgICAgICAgIGFkZFRhc2tCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7IFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBJbiA+IE91dDogU3RyaW5nLCBPYmplY3QsIFN0cmluZywgU3RyaW5nXG4gICAgLy8gSW4gPiBPdXQ6IGNoaWxkLCBwYXJlbnQsIGNsYXNzLCBpZFxuICAgIGNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAoY2hpbGQsIHBhcmVudCwgY2xzcz1udWxsLCBpZD1udWxsKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGNoaWxkKTtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICBpZihjbHNzICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZihBcnJheS5pc0FycmF5KGNsc3MpKSB7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNsc3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsc3NbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoaWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgICAgICAgfSBcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfTtcblxuICAgIC8vIEFkZCBlbGVtZW50cyB0aGF0IGdvIGludG8gdGhlIGhlYWRlclxuICAgIGNvbnN0IHJlbmRlckhlYWRlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gY3JlYXRlRWxlbWVudCgnaGVhZGVyJywgc3RhdGUubWFpbik7XG4gICAgICAgIC8vIHNpZGViYXIgbWVudSwgaWYgc2lkZSBiYXIgaXMgbm90IGRpc3BsYXllZFxuICAgICAgICAvLyBzaXRlIG5hbWUgdGl0bGUgOiBUb0RvbGlzdFxuICAgICAgICAgICAgY29uc3QgbWVudUJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIGhlYWRlciwgJ21lbnUnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBidG5JbWcgPSBjcmVhdGVFbGVtZW50KCdpbWcnLCBtZW51QnRuKTtcbiAgICAgICAgICAgICAgICBidG5JbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBtZW51U3ZnKTtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlRWxlbWVudCgnaDEnLCBoZWFkZXIsICd0aXRsZScpO1xuICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlRvZG8gTGlzdFwiO1xuICAgICAgICByZXR1cm4gaGVhZGVyO1xuICAgIH07XG5cbiAgICAvLyBSZW5kZXIgRWxlbWVudHMgb2Ygc2lkZWJhclxuICAgIGNvbnN0IHJlbmRlclNpZGVCYXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNpZGVCYXIgPSBjcmVhdGVFbGVtZW50KCdhc2lkZScsIGRvY3VtZW50LmJvZHkpO1xuXG4gICAgICAgICAgICAvLyBEaXYgSG9tZUNvbnRhaW5lclxuICAgICAgICAgICAgY29uc3QgaG9tZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHNpZGVCYXIsICdob21lLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIC8vIEJ0biA6IF4gSG9tZVxuICAgICAgICAgICAgICAgIGNvbnN0IGhvbWVCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCBob21lQ29udGFpbmVyLCAndGl0bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gSW1nXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhvbWVBcnJvdyA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsIGhvbWVCdG4sICdhcnJvdycpO1xuICAgICAgICAgICAgICAgICAgICBob21lQXJyb3cuc2V0QXR0cmlidXRlKCdzcmMnLCBhcnJvd1N2Zyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFBhcmFcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaG9tZVRleHQgPSBjcmVhdGVFbGVtZW50KCdwJywgaG9tZUJ0biwgJ3RleHQnKTtcbiAgICAgICAgICAgICAgICAgICAgaG9tZVRleHQudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgICAgICAgICAgICAgICAvLyBEaXYgOiBEZWZhdWx0IFByb2plY3RzXG4gICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdFByb2plY3RzID0gY3JlYXRlRWxlbWVudCgnZGl2JywgaG9tZUNvbnRhaW5lciwgJ2RlZmF1bHQtcHJvamVjdHMnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gTG9vcCB0aHJvdyBkaXJlY3RvcnkuY3JlYXRlUHJvamVjdHMgXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbmRlciBlYWNoIFByb2plY3QgYXMgYSBidG5cbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGRpcmVjdG9yeS5kZWZhdWx0UHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IGRpcmVjdG9yeS5kZWZhdWx0UHJvamVjdHNbaV0ubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJ0blxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdEJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIGRlZmF1bHRQcm9qZWN0cywgW1wicHJvamVjdFwiLCBwcm9qZWN0TmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZyA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsIHByb2plY3RCdG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHByb2plY3ROYW1lID09PSAnaW5ib3gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGluYm94U3ZnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihwcm9qZWN0TmFtZSA9PT0gJ3RvZGF5Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCB0b2RheVN2Zyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYocHJvamVjdE5hbWUgPT09ICd1cGNvbWluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgdXBjb21pbmdTdmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQYXJhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCBwcm9qZWN0QnRuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gcHJvamVjdE5hbWUuc2xpY2UoMCwxKS50b1VwcGVyQ2FzZSgpICsgcHJvamVjdE5hbWUuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERpdiBQcm9qZWN0c1xuICAgICAgICAgICAgICAgIC8vIERpdnMgOiBMaXN0LW9mLVByb2plY3RzXG4gICAgICAgICAgICAgICAgLy8gRGl2IDogQWRkIFByb2plY3RcbiAgICAgICAgICAgICAgICAgICAgLy8gSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgLy8gRGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBCdG4gOiBBZGRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJ0biA6IENhbmNlbFxuICAgICAgICAgICAgLy8gRGl2IFByb2plY3RzXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHNpZGVCYXIsICdwcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIC8vIEJ0biA6IF4gcHJvamVjdFxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCBwcm9qZWN0c0NvbnRhaW5lciwgJ3RpdGxlJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIEltZ1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0QXJyb3cgPSBjcmVhdGVFbGVtZW50KCdpbWcnLCBwcm9qZWN0QnRuLCAnYXJyb3cnKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdEFycm93LnNldEF0dHJpYnV0ZSgnc3JjJywgYXJyb3dTdmcpO1xuICAgICAgICAgICAgICAgICAgICAvLyBQYXJhXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RUZXh0ID0gY3JlYXRlRWxlbWVudCgncCcsIHByb2plY3RCdG4sICd0ZXh0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUZXh0LnRleHRDb250ZW50ID0gXCJQcm9qZWN0XCI7XG4gICAgICAgICAgICAgICAgLy8gRGl2IDogQ3JlYXRlZCBQcm9qZWN0c1xuICAgICAgICAgICAgICAgIGNvbnN0IGNyZWF0ZWRQcm9qZWN0cyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHByb2plY3RzQ29udGFpbmVyLCAnY3JlYXRlZC1wcm9qZWN0cycpXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gcmVuZGVyIGNyZWF0ZWQgcHJvamVjdHMgaW4gZGlyZWN0b3J5XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkaXJlY3RvcnkuY3JlYXRlZFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBkaXJlY3RvcnkuY3JlYXRlZFByb2plY3RzW2ldLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEaXYgOiBkaXZQcm9qZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXZQcm9qZWN0ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgY3JlYXRlZFByb2plY3RzLCAncHJvamVjdC1kaXYnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJ0biA6IFByb2plY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0QnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgZGl2UHJvamVjdCwgW1wicHJvamVjdFwiLCBwcm9qZWN0TmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0ltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQYXJhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2pUZXh0ID0gY3JlYXRlRWxlbWVudCgncCcsIHByb2plY3RCdG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qVGV4dC50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lLnNsaWNlKDAsMSkudG9VcHBlckNhc2UoKSArIHByb2plY3ROYW1lLnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJ0biA6IEVkaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlZGl0QnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgZGl2UHJvamVjdCwgJ2VkaXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9JbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWRpdEltZyA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsIGVkaXRCdG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0SW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgZWRpdFN2Zyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQnRuIDogRGVsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgZGl2UHJvamVjdCwgJ2RlbGV0ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlSW1nID0gY3JlYXRlRWxlbWVudCgnaW1nJywgZGVsZXRlQnRuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgZGVsZXRlU3ZnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFJlbmRlciBDcmVhdGUgTmV3IFByb2plY3QgRm9ybVxuICAgICAgICAgICAgICAgIGNvbnN0IGFkZFByb2plY3RzQ29udGFpbmVyID0gYWRkUHJvamVjdEVsZW1lbnQocHJvamVjdHNDb250YWluZXIpO1xuICAgICAgICByZXR1cm4gc2lkZUJhcjtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkUHJvamVjdEVsZW1lbnQgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICAvLyBEaXYgOiBjcmVhdGVQcm9qZWN0Q29udGFpbmVyXG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RzQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgcHJvamVjdCwgJ2FkZC1wcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgLy8gRGl2IDogVGl0bGUtQ29udGFpbmVyXG4gICAgICAgICAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIGFkZFByb2plY3RzQ29udGFpbmVyLCAnYWRkLXByb2plY3QnKTtcbiAgICAgICAgICAgICAgICAvLyBCdG4gOiBhZGRQcm9qZWN0QnRuXG4gICAgICAgICAgICAgICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHRpdGxlQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gSW1nIDogUGx1cyBpbiBDaXJjbGVcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nID0gY3JlYXRlRWxlbWVudCgnaW1nJywgYWRkUHJvamVjdEJ0bik7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGNpcmxjZVBsdXNTdmcpO1xuICAgICAgICAgICAgICAgICAgICAvLyBQYXJhIDogQWRkIFByb2plY3RcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50KCdwJywgYWRkUHJvamVjdEJ0bik7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ0FkZCBQcm9qZWN0JztcbiAgICAgICAgcmV0dXJuIGFkZFByb2plY3RzQ29udGFpbmVyOyAgICAgICAgXG4gICAgfTtcblxuICAgIGNvbnN0IHJlbmRlcklucHV0QWRkUHJvamVjdCA9IChwYXJlbnQpID0+IHtcbiAgICAgICAgIC8vIERpdiA6IElucHV0IENvbnRhaW5lclxuICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHBhcmVudCwgJ2lucHV0LWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgLy8gSW5wdXQgXG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgaW5wdXRDb250YWluZXIpO1xuICAgICAgICAgICAgLy8gRGl2IDogQnRuIENvbnRhaW5lclxuICAgICAgICAgICAgY29uc3QgYnRuQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgaW5wdXRDb250YWluZXIsICdidXR0b25zJyk7XG4gICAgICAgICAgICAgICAgLy8gQnRuIDogQWRkXG4gICAgICAgICAgICAgICAgY29uc3QgYWRkQnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgYnRuQ29udGFpbmVyLCAnYWRkJyk7XG4gICAgICAgICAgICAgICAgYWRkQnRuLnRleHRDb250ZW50ID0gXCJBZGRcIjtcbiAgICAgICAgICAgICAgICAvLyBCdG4gOiBDYW5jZWwgXG4gICAgICAgICAgICAgICAgY29uc3QgY2FuY2xlQnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgYnRuQ29udGFpbmVyLCAnY2FuY2VsJyk7XG4gICAgICAgICAgICAgICAgY2FuY2xlQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICAgICAgcmV0dXJuIGlucHV0Q29udGFpbmVyO1xuICAgIH07XG5cbiAgICBjb25zdCByZW5kZXJDb250ZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywgc3RhdGUubWFpbiwgJ2NvbnRlbnQnKTtcbiAgICAgICAgLy8gdGFza1xuICAgICAgICByZW5kZXJUYXNrcyhjb250ZW50KTtcbiAgICAgICAgXG4gICAgICAgIC8vQWRkIFRhc2tcbiAgICAgICAgcmVuZGVyQWRkVGFzayhjb250ZW50KTtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbmRlclRhc2tzID0gKGNvbnRlbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGlyZWN0b3J5LmN1cnJlbnRQcm9qZWN0Lm5hbWUpO1xuICAgICAgICAvLyBEaXYgVGFzayBDb250YWluZXJcbiAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIGNvbnRlbnQsICd0YXNrLWNvbnRhaW5lcicpO1xuICAgICAgICAvLyAvLyBMaXN0IG9mIFRhc2tzXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkaXJlY3RvcnkuY3VycmVudFByb2plY3QudGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRpcmVjdG9yeS5jdXJyZW50UHJvamVjdC5uYW1lKTtcbiAgICAgICAgICAgIC8vIHJlbmRlclRhc2socHJvamVjdC50YXNrc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJUYXNrID0gKHQpID0+IHtcbiAgICAgICAgY29uc3QgdGFzayA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHN0YXRlLmNvbnRlbnQsICdjb250ZW50Jyk7XG5cbiAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbmRlckFkZFRhc2sgPSAoY29udGVudCkgPT4ge1xuICAgICAgICAvLyBEaXYgXG4gICAgICAgIGNvbnN0IGRpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIGNvbnRlbnQsICdhZGQtdGFzay1jb250YWluZXInKTtcbiAgICAgICAgICAgIC8vIERpdiA6IEFkZCBUYXNrXG4gICAgICAgICAgICBjb25zdCBhZGRUYXNrRGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgZGl2LCAnYWRkLXRhc2stYnRuJyk7XG4gICAgICAgICAgICAgICAgLy8gSW1nIDogY2lyY2xlUGx1c1xuICAgICAgICAgICAgICAgIGNvbnN0IGNpcmNsZVBsdXNJbWcgPSBjcmVhdGVFbGVtZW50KCdpbWcnLCBhZGRUYXNrRGl2KTtcbiAgICAgICAgICAgICAgICBjaXJjbGVQbHVzSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgY2lybGNlUGx1c1N2Zyk7XG4gICAgICAgICAgICAgICAgLy8gUCA6IEFkZCBUYXNrXG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCBhZGRUYXNrRGl2LCAndGV4dCcpO1xuICAgICAgICAgICAgICAgIHRleHQudGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbmRlckFkZFRhc2tJbnB1dCA9IChwYXJlbnQpID0+IHtcbiAgICAgICAgLy8gRGl2IFxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBwYXJlbnQsICdpbnB1dC1jb250YWluZXInKTtcbiAgICAgICAgICAgIC8vIElucHV0IDogVGl0bGVcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIGNvbnRhaW5lciwgJ3RpdGxlJyk7XG4gICAgICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGl0bGUnKTtcbiAgICAgICAgICAgIC8vIElucHV0IDogRGV0YWlsc1xuICAgICAgICAgICAgY29uc3QgZGV0YWlsVGV4dEFyZWEgPSBjcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScsIGNvbnRhaW5lcik7XG4gICAgICAgICAgICBkZXRhaWxUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0RldGFpbHMnKTtcbiAgICAgICAgICAgIC8vIERpdiA6IERhdGUtUHJvamVjdFxuICAgICAgICAgICAgY29uc3QgZGF0ZVByb2plY3REaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBjb250YWluZXIsICdkYXRlLXByb2plY3QnKTtcbiAgICAgICAgICAgICAgICAvLyBEaXYgOiBEdWUgRGF0ZVxuICAgICAgICAgICAgICAgIGNvbnN0IGR1ZURhdGVEaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBkYXRlUHJvamVjdERpdiwgJ2R1ZS1kYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZHVlRGF0ZVBhcmEgPSBjcmVhdGVFbGVtZW50KCdwJywgZHVlRGF0ZURpdik7XG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGVQYXJhLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlOic7XG4gICAgICAgICAgICAgICAgICAgIC8vIElucHV0IFR5cGUgRGF0ZVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIGR1ZURhdGVEaXYpO1xuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICAgICAgICAgICAgICAvLyBEaXYgOiBQcm9qZWN0XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdERpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIGRhdGVQcm9qZWN0RGl2LCAncHJvamVjdCcpO1xuICAgICAgICAgICAgICAgICAgICAvLyBQIDogUHJvamVjdFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0UGFyYSA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCBwcm9qZWN0RGl2KTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFBhcmEudGV4dENvbnRlbnQgPSAnUHJvamVjdDonO1xuICAgICAgICAgICAgICAgICAgICAvLyBTZWxlY3RvciA6IGRpcmVjdG9yeSBsaXN0IG9mIGNyZWF0ZWRwcm9qZWN0c1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0U2VsZWN0b3IgPSBjcmVhdGVFbGVtZW50KCdzZWxlY3QnLCBwcm9qZWN0RGl2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRlbXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlclByb2plY3RPcHRpb25zKHByb2plY3RTZWxlY3Rvcik7XG4gICAgICAgICAgICAvLyBEaXYgOiBQcmlvcml0eS1BZGQtQ2FuY2VsXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eUFkZENhbmNlbERpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIGNvbnRhaW5lciwgJ3ByaW9yaXR5LWFkZC1jYW5jZWwnKTtcbiAgICAgICAgICAgICAgICAvLyBEaXYgOiBQcmlvcml0eVxuICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5RGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgcHJpb3JpdHlBZGRDYW5jZWxEaXYsICdwcmlvcml0aWVzJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIERpdiA6IFByaW9yaXR5IFRleHQgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5UGFyYURpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHByaW9yaXR5RGl2LCAndGV4dC1kaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFAgOiBQcmlvcnRpdHk6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eVBhcmEgPSBjcmVhdGVFbGVtZW50KCdwJywgcHJpb3JpdHlQYXJhRGl2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5UGFyYS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiXG4gICAgICAgICAgICAgICAgICAgIC8vIERpdiA6IExvd1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsb3dQcmlvcml0eURpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHByaW9yaXR5RGl2LCBbJ2xvdycsICdwcmlvcml0eScsICdhY3RpdmUtbG93J10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUCA6IExvd1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbG93UGFyYSA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCBsb3dQcmlvcml0eURpdik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dQYXJhLnRleHRDb250ZW50ID0gJ0xvdyc7XG4gICAgICAgICAgICAgICAgICAgIC8vIERpdiA6IE1lZGl1bVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZWRpdW1Qcmlvcml0eURpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHByaW9yaXR5RGl2LCBbJ21lZGl1bScsICdwcmlvcml0eSddKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFAgOiBNZWRpdW1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lZGl1bVBhcmEgPSBjcmVhdGVFbGVtZW50KCdwJywgbWVkaXVtUHJpb3JpdHlEaXYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVkaXVtUGFyYS50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuICAgICAgICAgICAgICAgICAgICAvLyBEaXYgOiBIaWdoXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhpZ2hQcmlvcml0eURpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHByaW9yaXR5RGl2LCBbJ2hpZ2gnLCAncHJpb3JpdHknXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQIDogSGlnaFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGlnaFBhcmEgPSBjcmVhdGVFbGVtZW50KCdwJywgaGlnaFByaW9yaXR5RGl2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hQYXJhLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuICAgICAgICAgICAgICAgIC8vIERpdiA6IEFkZC1DYW5jZWxcbiAgICAgICAgICAgICAgICBjb25zdCBhZGRDYW5jZWxEaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBwcmlvcml0eUFkZENhbmNlbERpdiwgJ2FkZC1jYW5jZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gRGl2IDogQWRkXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkZERpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIGFkZENhbmNlbERpdiwgJ2FkZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUCA6IEFkZFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWRkUGFyYSA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCBhZGREaXYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkUGFyYS50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG4gICAgICAgICAgICAgICAgICAgIC8vIERpdiA6IENhbmNlbFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYW5jZWxEaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBhZGRDYW5jZWxEaXYsICdjYW5jZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFAgOiBDYW5jZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbmNlbFBhcmEgPSBjcmVhdGVFbGVtZW50KCdwJywgY2FuY2VsRGl2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbFBhcmEudGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgIH07XG5cbiAgICAvL1xuICAgIGNvbnN0IHJlbmRlclByb2plY3RPcHRpb25zID0gKHNlbGVjdG9yKSA9PiB7XG4gICAgICAgIC8vIEluYm94XG4gICAgICAgIGNvbnN0IGluYm94T3B0aW9uID0gY3JlYXRlRWxlbWVudCgnb3B0aW9uJywgc2VsZWN0b3IpO1xuICAgICAgICBpbmJveE9wdGlvbi50ZXh0Q29udGVudCA9ICdJbmJveCc7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkaXJlY3RvcnkuY3JlYXRlZFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gZGlyZWN0b3J5LmNyZWF0ZWRQcm9qZWN0c1tpXS5uYW1lO1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gY3JlYXRlRWxlbWVudCgnb3B0aW9uJywgc2VsZWN0b3IpO1xuICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gbmFtZS5zbGljZSgwLDEpLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZW5kZXIgRWxlbWVudCBvZiBGb290ZXJcbiAgICBjb25zdCByZW5kZXJGb290ZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvb3RlciA9IGNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicsIHN0YXRlLm1haW4pO1xuICAgICAgICAgICAgLy8gUGFyYSA6IENvcHkgUmlnaHRcbiAgICAgICAgICAgIGNvbnN0IGNvcHlSaWdodFRleHQgPSBjcmVhdGVFbGVtZW50KCdwJywgZm9vdGVyLCAndGV4dCcpO1xuICAgICAgICAgICAgY29weVJpZ2h0VGV4dC5pbm5lckhUTUwgPSBcIiYjMTY5OyBKYXInWmVubyBKYXJyZXR0XCI7XG4gICAgICAgICAgICAvLyBBIDogR2l0aHViIGxpbmtcbiAgICAgICAgICAgICAgICBjb25zdCBnaXRodWJMaW5rID0gY3JlYXRlRWxlbWVudCgnYScsIGZvb3RlciwgJ2dpdGh1Yi1saW5rJyk7XG4gICAgICAgICAgICAgICAgZ2l0aHViTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly9naXRodWIuY29tL0JhbnRjaGVlJyk7XG4gICAgICAgICAgICAgICAgZ2l0aHViTGluay5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcbiAgICAgICAgICAgICAgICAvLyBJbWcgOiBHaXRodWJcbiAgICAgICAgICAgICAgICBjb25zdCBnaXRodWJJbWcgPSBjcmVhdGVFbGVtZW50KCdpbWcnLCBnaXRodWJMaW5rKTtcbiAgICAgICAgICAgICAgICBnaXRodWJJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBnaXRodWJTdmcpO1xuICAgICAgICByZXR1cm4gZm9vdGVyO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgICAgICBzdGF0ZSwgXG4gICAgICAgIHtyZW5kZXJ9LFxuICAgICAgICB7dXBkYXRlfSxcbiAgICApO1xufTsiLCIvLyBQcmlvcml0eSA6XG4gICAgLy8gMS4gU3RyaW5nID4gXCJMb3dcIlxuICAgIC8vIDIuIFN0cmluZyA+IFwiTWVkaXVtXCJcbiAgICAvLyAzLiBTdHJpbmcgPiBcIkhpZ2hcIlxuXG4vLyBJbiA+IE91dCA6IFN0cmluZyBTdHJpbmcgUHJpb3JpdHkgRGF0ZSBQcm9qZWN0ID4gT2JqZWN0XG5leHBvcnQgY29uc3QgdGFzayA9ICh0aXRsZSwgZGV0YWlscywgcHJpb3JpdHksIGR1ZURhdGUsIHByb2plY3ROYW1lKSA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXRhaWxzLFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgcHJvamVjdE5hbWUsXG4gICAgICAgIGlkOiBudWxsLFxuICAgIH1cblxuICAgIC8vIENSVUQgOiBDcmVhdGUsIFJlYWQsIFVwZGF0ZSwgRGVsZXRlXG5cbiAgICBjb25zdCBnZW5SYW5kb21JZCA9ICgpID0+IE1hdGgucmFuZG9tKCk7XG5cbiAgICBjb25zdCBnZXQgPSAocHJvcGVydHkpID0+IHtcbiAgICAgICAgaWYoc3RhdGUuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVbcHJvcGVydHldIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgVGhlIHByb3BlcnR5ICR7cHJvcGVydHl9IGRvZXMgbm90IGV4aXN0YCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0ID0gKHByb3BlcnR5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBpZihzdGF0ZS5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgIHN0YXRlW3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgVGhlIHByb3BlcnR5ICR7cHJvcGVydHl9IGRvZXMgbm90IGV4aXN0YCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gQ2hhbmdlIFByb2plY3RcbiAgICAvLyBEZWxldGUgVGFza1xuXG4gICAgc3RhdGUuaWQgPSBnZW5SYW5kb21JZCgpO1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHN0YXRlLFxuICAgICAgICB7Z2V0fSxcbiAgICAgICAge3NldH1cbiAgICApO1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHt0YXNrfSBmcm9tICcuL3NjcmlwdHMvdGFzayc7XG5pbXBvcnQge3BhZ2V9IGZyb20gJy4vc2NyaXB0cy9yZW5kZXJQYWdlJztcbmltcG9ydCAnLi9zdHlsZXMvaW5kZXguY3NzJztcblxuY29uc3QgdCA9IHRhc2soJ1dhc2ggQ2xvdGhlcycsICdQdXQgY2xvdGhlcyBpbiB0aGUgd2FzaGluZyBtYWNoaW5lJywgJ2hpZ2gnLCAnbm93JywgJ0Nob3VycycpO1xuXG5jb25zdCBwID0gcGFnZSgpO1xucC5yZW5kZXIoKTtcblxuLy8gU3RhdGVcbiAgICAvLyBkaXJlY3RvcnkuanMgbW9kdWxlXG4gICAgICAgIC8vIHByb2plY3QuanMgZmFjdG9yeVxuICAgICAgICAgICAgLy8gdGFzay5qcyBmYWN0b3J5XG4vLyBET00gUmVuZGVyaW5nXG4gICAgLy8gUmVuZGVyIFN0YXRpYyBwYWdlLCBJbmNsdWRpbmcgU2lkZWJhciBtZW51XG4gICAgICAgIC8vIERpdiNDb250ZW50IER5bmFtaWNseSByZW5kZXJlZCwgY2hhbmdlcyB3aGVuIGNsaWNraW5nIG9uIHByb2plY3QgaW4gc2lkZWJhciBtZW51Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9