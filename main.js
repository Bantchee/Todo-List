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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    --white: #ffffff;\n    --light-grey: #D9D9D9;\n    --dark-grey: #454545;\n    --black: #000000;\n    --black-tint: rgba(0, 0, 0, 0.50);\n    --blue: #0085FF;\n    --blue-light: #badcfc;\n    --orange: #FF9900;\n    --orange-light: #FAE7CC;\n    --red: #FF0000;\n    --red-light: #FCCECE;\n    --green: #33C500;\n    --light-green: #D7FFC9;\n    --github-img-size: 32px;\n}\n\n:root p {\n    margin: 0px;\n}\n\nbody {\n    display: flex;\n    margin: 0px;\n    /* Temp */\n    width: 100vw;\n    height: 100vh;\n}\n\n/* Aside  */\naside {\n    flex: 1;\n    padding: 8px;\n    background-color: var(--dark-grey);\n\n    display: flex;\n    flex-direction: column;\n}\n\naside p {\n    font-size: 1.25em;\n    margin: 0px;\n}\n\naside .home-container, aside .project-container {\n    display: flex;\n    flex-direction: column;\n}\n\n/* Align Edit and Delete Buttons to the right side */\naside button.project {\n    margin-right: auto;\n}\n\naside button.project, button.title {\n    display: flex;\n    align-items: center;\n\n    cursor: pointer;\n    background: none;\n    border: none;\n    color: var(--white);\n    font-size: 1.25em;\n}\n\naside button.project:hover, button.title:hover {\n    font-weight: bold;\n    /* background-color: var(--light-grey); */\n}\n\naside div.add-project button {\n    display: flex;\n    align-items: center;\n\n    cursor: pointer;\n    background: none;\n    border: none;\n    color: var(--white);\n    font-size: 1.25em;\n}\n\naside div.add-project button:hover {\n    font-weight: bold;\n}\n\naside button.title {\n    border-bottom: var(--white) solid 5px;\n}\n\naside .home-container .default-projects {\n    display: flex;\n    flex-direction: column;\n}\n\naside div.project-div {\n    display: flex;\n}\n\naside img { \n    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(248deg) brightness(106%) contrast(106%);\n}\n\naside button.current-project {\n    font-weight: bold;\n}\n\n/* Main */\ndiv.main {\n    flex: 4;\n\n    display: flex;\n    flex-direction: column;\n}\n\ndiv.main header {\n    flex: 1;\n    padding: 8px;\n    /* Temp */\n    background-color: var(--light-grey);\n\n    display: grid;\n    grid-template-columns: auto 1fr;\n    align-items: center; \n}\n\ndiv.main header button.menu {\n    background: none;\n    border: none;\n    cursor: pointer;\n}\n\ndiv.main header h1.title {\n    padding-right: auto;\n    justify-self: center;\n    font-weight: bold;\n    font-size: 3em;\n}\n\ndiv.main div.content {\n    flex: 4;\n    padding: 16px 64px;\n    background-color: var(--white);\n}\n\n/* Task Styling */\n\ndiv.main div.content div.task-container {\n    display: flex;\n    flex-direction: column;\n    row-gap: 8px; \n}\n\ndiv.main div.content div.task {\n    display: flex;\n    flex-direction: column;\n\n    background-color: var(--light-grey);\n    border-radius: 4px;\n\n    padding: 8px;\n}\n\ndiv.main div.content div.task-content {\n    display: flex;\n}\n\ndiv.main div.content div.low-task {\n    border-right: var(--blue) solid 4px;\n    border-left: var(--blue) solid 4px;\n}\n\ndiv.main div.content div.medium-task {\n    border-right: var(--orange) solid 4px;\n    border-left: var(--orange) solid 4px;\n}\n\ndiv.main div.content div.high-task {\n    border-right: var(--red) solid 4px;\n    border-left: var(--red) solid 4px;\n}\n\ndiv.main div.content div.left-side {\n    grid-area: left;\n\n    display: flex;\n    align-items: center;\n    column-gap: 4px;\n}\n\ndiv.main div.content div.left-side input {\n    margin: 0px;\n}\n\ndiv.main div.content div.right-side {\n    grid-area: right;\n\n    display: flex;\n    margin-left: auto;\n    align-items: center;\n    column-gap: 4px;\n}\n\ndiv.main div.content div.details-container {\n    margin: auto;\n}\n\ndiv.main div.content .add-task-container {\n    display: flex;\n    flex-direction: column;\n}\n\ndiv.main div.content .add-task-container .add-task-btn {\n    width: 135px;\n\n    display: flex;\n    column-gap: 4px;\n    align-self: center;\n}\n\ndiv.main div.content .add-task-container .add-task-btn p {\n    font-size: 1.5em;\n    font-weight: bold;\n    cursor: pointer;\n}\n\ndiv.main div.content .add-task-container .add-task-btn img {\n    width: 24px;\n}\n\ndiv.main div.content .add-task-container .input-container {\n    display: flex;\n    flex-direction: column;\n    row-gap: 4px;\n\n    background-color: var(--light-grey);\n    padding: 16px 24px;\n    border-radius: 4px;\n    border-right: var(--blue) solid 4px;\n    border-left: var(--blue) solid 4px;\n}\n\ndiv.main div.content .add-task-container .input-container p {\n    margin: 0px;\n    font-weight: bold;\n}\n\ndiv.main div.content .add-task-container .input-container input.title {\n    border-radius: 8px;\n    padding-left: 4px;\n}\n\ndiv.main div.content .add-task-container .input-container textarea {\n    height: 150px;\n    border-radius: 8px;\n    padding-left: 4px;\n}\n\ndiv.main div.content .add-task-container .input-container div.date-project {\n    display: flex;\n    column-gap: 16px;\n}\n\ndiv.main div.content .add-task-container .input-container div.due-date {\n    display: flex;\n    column-gap: 4px;\n    justify-content: center;\n    align-items: center;\n\n    font-weight: bold;\n}\n\ndiv.main div.content .add-task-container .input-container div.project {\n    display: flex;\n    column-gap: 4px;\n    justify-content: center;\n    align-items: center;\n\n    font-weight: bold;\n}\n\ndiv.main div.content .add-task-container .input-container .priority-add-cancel {\n    display: flex;\n    row-gap: 4px;\n    column-gap: 24px;\n    align-items: center;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities {\n    display: flex;\n    column-gap: 4px;\n    align-items: center;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .priority {\n    width: 100px;\n    border-radius: 4px;\n    padding: 4px 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .low {\n    background-color: var(--blue-light);\n    color: var(--blue);\n    border-left: var(--blue) solid 4px;\n    border-right: var(--blue) solid 4px;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .low:hover {\n    cursor: pointer;\n    background-color: var(--blue);\n    color: var(--blue-light);\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .active-low {\n    background-color: var(--blue);\n    color: var(--blue-light);\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .medium {\n    background-color: var(--orange-light);\n    color: var(--orange);\n    border-left: var(--orange) solid 4px;\n    border-right: var(--orange) solid 4px;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .medium:hover {\n    cursor: pointer;\n    background-color: var(--orange);\n    color: var(--orange-light);\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .active-medium {\n    background-color: var(--orange);\n    color: var(--orange-light);\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .high {\n    background-color: var(--red-light);\n    color: var(--red);\n    border-left: var(--red) solid 4px;\n    border-right: var(--red) solid 4px;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .high:hover {\n    cursor: pointer;\n    background-color: var(--red);\n    color: var(--red-light);\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .active-high {\n    background-color: var(--red);\n    color: var(--red-light);\n}\n\ndiv.main div.content .add-task-container .input-container .add-cancel {\n    display: flex;\n    justify-self: right;\n    column-gap: 4px;\n    margin-left: auto;\n}\n\ndiv.main div.content .add-task-container .input-container .add {\n    width: 100px;\n    border-radius: 4px;\n    padding: 4px 0px;\n\n    background-color: var(--light-green);\n    color: var(--green);\n    border-left: var(--green) solid 4px;\n    border-right: var(--green) solid 4px;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\ndiv.main div.content .add-task-container .input-container .add:hover {\n    cursor: pointer;\n    background-color: var(--green);\n    color: var(--light-green);\n}\n\ndiv.main div.content .add-task-container .input-container .cancel {\n    width: 100px;\n    border-radius: 4px;\n    padding: 4px 0px;\n    background-color: var(--red-light);\n    color: var(--red);\n    border-left: var(--red) solid 4px;\n    border-right: var(--red) solid 4px;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\ndiv.main div.content .add-task-container .input-container .cancel:hover {\n    cursor: pointer;\n    background-color: var(--red);\n    color: var(--red-light);\n}\n\ndiv.main footer {\n    flex: 1;\n    padding: 8px;\n    background-color: var(--light-grey);\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    column-gap: 16px;\n}\n\ndiv.main footer p.text {\n    font-size: 1.25em;\n    font-weight: bold;\n}\n\ndiv.main footer a {\n    border: 3px solid var(--black);\n    border-radius: 100%;\n    width: var(--github-img-size);\n    height: var(--github-img-size);\n    background-color: var(--white);\n    padding: 6px;\n}\n\ndiv.main footer a:hover {\n    background-color: var(--black);\n}\n\ndiv.main footer a:hover img {\n    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(248deg) brightness(106%) contrast(106%);\n}\n\ndiv.main footer a img {\n    width: var(--github-img-size);\n    height: var(--github-img-size);\n}\n", "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"AAAA;IACI,wIAAwI;IACxI,gBAAgB;IAChB,qBAAqB;IACrB,oBAAoB;IACpB,gBAAgB;IAChB,iCAAiC;IACjC,eAAe;IACf,qBAAqB;IACrB,iBAAiB;IACjB,uBAAuB;IACvB,cAAc;IACd,oBAAoB;IACpB,gBAAgB;IAChB,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,WAAW;IACX,SAAS;IACT,YAAY;IACZ,aAAa;AACjB;;AAEA,WAAW;AACX;IACI,OAAO;IACP,YAAY;IACZ,kCAAkC;;IAElC,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA,oDAAoD;AACpD;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;;IAEnB,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,yCAAyC;AAC7C;;AAEA;IACI,aAAa;IACb,mBAAmB;;IAEnB,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gGAAgG;AACpG;;AAEA;IACI,iBAAiB;AACrB;;AAEA,SAAS;AACT;IACI,OAAO;;IAEP,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,OAAO;IACP,YAAY;IACZ,SAAS;IACT,mCAAmC;;IAEnC,aAAa;IACb,+BAA+B;IAC/B,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,oBAAoB;IACpB,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,OAAO;IACP,kBAAkB;IAClB,8BAA8B;AAClC;;AAEA,iBAAiB;;AAEjB;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;;IAEtB,mCAAmC;IACnC,kBAAkB;;IAElB,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,mCAAmC;IACnC,kCAAkC;AACtC;;AAEA;IACI,qCAAqC;IACrC,oCAAoC;AACxC;;AAEA;IACI,kCAAkC;IAClC,iCAAiC;AACrC;;AAEA;IACI,eAAe;;IAEf,aAAa;IACb,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,gBAAgB;;IAEhB,aAAa;IACb,iBAAiB;IACjB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,YAAY;;IAEZ,aAAa;IACb,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;;IAEZ,mCAAmC;IACnC,kBAAkB;IAClB,kBAAkB;IAClB,mCAAmC;IACnC,kCAAkC;AACtC;;AAEA;IACI,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,mBAAmB;;IAEnB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,mBAAmB;;IAEnB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,mCAAmC;IACnC,kBAAkB;IAClB,kCAAkC;IAClC,mCAAmC;AACvC;;AAEA;IACI,eAAe;IACf,6BAA6B;IAC7B,wBAAwB;AAC5B;;AAEA;IACI,6BAA6B;IAC7B,wBAAwB;AAC5B;;AAEA;IACI,qCAAqC;IACrC,oBAAoB;IACpB,oCAAoC;IACpC,qCAAqC;AACzC;;AAEA;IACI,eAAe;IACf,+BAA+B;IAC/B,0BAA0B;AAC9B;;AAEA;IACI,+BAA+B;IAC/B,0BAA0B;AAC9B;;AAEA;IACI,kCAAkC;IAClC,iBAAiB;IACjB,iCAAiC;IACjC,kCAAkC;AACtC;;AAEA;IACI,eAAe;IACf,4BAA4B;IAC5B,uBAAuB;AAC3B;;AAEA;IACI,4BAA4B;IAC5B,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;;IAEhB,oCAAoC;IACpC,mBAAmB;IACnB,mCAAmC;IACnC,oCAAoC;;IAEpC,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,8BAA8B;IAC9B,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,kCAAkC;IAClC,iBAAiB;IACjB,iCAAiC;IACjC,kCAAkC;;IAElC,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,4BAA4B;IAC5B,uBAAuB;AAC3B;;AAEA;IACI,OAAO;IACP,YAAY;IACZ,mCAAmC;;IAEnC,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,8BAA8B;IAC9B,mBAAmB;IACnB,6BAA6B;IAC7B,8BAA8B;IAC9B,8BAA8B;IAC9B,YAAY;AAChB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,gGAAgG;AACpG;;AAEA;IACI,6BAA6B;IAC7B,8BAA8B;AAClC","sourcesContent":[":root {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    --white: #ffffff;\n    --light-grey: #D9D9D9;\n    --dark-grey: #454545;\n    --black: #000000;\n    --black-tint: rgba(0, 0, 0, 0.50);\n    --blue: #0085FF;\n    --blue-light: #badcfc;\n    --orange: #FF9900;\n    --orange-light: #FAE7CC;\n    --red: #FF0000;\n    --red-light: #FCCECE;\n    --green: #33C500;\n    --light-green: #D7FFC9;\n    --github-img-size: 32px;\n}\n\n:root p {\n    margin: 0px;\n}\n\nbody {\n    display: flex;\n    margin: 0px;\n    /* Temp */\n    width: 100vw;\n    height: 100vh;\n}\n\n/* Aside  */\naside {\n    flex: 1;\n    padding: 8px;\n    background-color: var(--dark-grey);\n\n    display: flex;\n    flex-direction: column;\n}\n\naside p {\n    font-size: 1.25em;\n    margin: 0px;\n}\n\naside .home-container, aside .project-container {\n    display: flex;\n    flex-direction: column;\n}\n\n/* Align Edit and Delete Buttons to the right side */\naside button.project {\n    margin-right: auto;\n}\n\naside button.project, button.title {\n    display: flex;\n    align-items: center;\n\n    cursor: pointer;\n    background: none;\n    border: none;\n    color: var(--white);\n    font-size: 1.25em;\n}\n\naside button.project:hover, button.title:hover {\n    font-weight: bold;\n    /* background-color: var(--light-grey); */\n}\n\naside div.add-project button {\n    display: flex;\n    align-items: center;\n\n    cursor: pointer;\n    background: none;\n    border: none;\n    color: var(--white);\n    font-size: 1.25em;\n}\n\naside div.add-project button:hover {\n    font-weight: bold;\n}\n\naside button.title {\n    border-bottom: var(--white) solid 5px;\n}\n\naside .home-container .default-projects {\n    display: flex;\n    flex-direction: column;\n}\n\naside div.project-div {\n    display: flex;\n}\n\naside img { \n    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(248deg) brightness(106%) contrast(106%);\n}\n\naside button.current-project {\n    font-weight: bold;\n}\n\n/* Main */\ndiv.main {\n    flex: 4;\n\n    display: flex;\n    flex-direction: column;\n}\n\ndiv.main header {\n    flex: 1;\n    padding: 8px;\n    /* Temp */\n    background-color: var(--light-grey);\n\n    display: grid;\n    grid-template-columns: auto 1fr;\n    align-items: center; \n}\n\ndiv.main header button.menu {\n    background: none;\n    border: none;\n    cursor: pointer;\n}\n\ndiv.main header h1.title {\n    padding-right: auto;\n    justify-self: center;\n    font-weight: bold;\n    font-size: 3em;\n}\n\ndiv.main div.content {\n    flex: 4;\n    padding: 16px 64px;\n    background-color: var(--white);\n}\n\n/* Task Styling */\n\ndiv.main div.content div.task-container {\n    display: flex;\n    flex-direction: column;\n    row-gap: 8px; \n}\n\ndiv.main div.content div.task {\n    display: flex;\n    flex-direction: column;\n\n    background-color: var(--light-grey);\n    border-radius: 4px;\n\n    padding: 8px;\n}\n\ndiv.main div.content div.task-content {\n    display: flex;\n}\n\ndiv.main div.content div.low-task {\n    border-right: var(--blue) solid 4px;\n    border-left: var(--blue) solid 4px;\n}\n\ndiv.main div.content div.medium-task {\n    border-right: var(--orange) solid 4px;\n    border-left: var(--orange) solid 4px;\n}\n\ndiv.main div.content div.high-task {\n    border-right: var(--red) solid 4px;\n    border-left: var(--red) solid 4px;\n}\n\ndiv.main div.content div.left-side {\n    grid-area: left;\n\n    display: flex;\n    align-items: center;\n    column-gap: 4px;\n}\n\ndiv.main div.content div.left-side input {\n    margin: 0px;\n}\n\ndiv.main div.content div.right-side {\n    grid-area: right;\n\n    display: flex;\n    margin-left: auto;\n    align-items: center;\n    column-gap: 4px;\n}\n\ndiv.main div.content div.details-container {\n    margin: auto;\n}\n\ndiv.main div.content .add-task-container {\n    display: flex;\n    flex-direction: column;\n}\n\ndiv.main div.content .add-task-container .add-task-btn {\n    width: 135px;\n\n    display: flex;\n    column-gap: 4px;\n    align-self: center;\n}\n\ndiv.main div.content .add-task-container .add-task-btn p {\n    font-size: 1.5em;\n    font-weight: bold;\n    cursor: pointer;\n}\n\ndiv.main div.content .add-task-container .add-task-btn img {\n    width: 24px;\n}\n\ndiv.main div.content .add-task-container .input-container {\n    display: flex;\n    flex-direction: column;\n    row-gap: 4px;\n\n    background-color: var(--light-grey);\n    padding: 16px 24px;\n    border-radius: 4px;\n    border-right: var(--blue) solid 4px;\n    border-left: var(--blue) solid 4px;\n}\n\ndiv.main div.content .add-task-container .input-container p {\n    margin: 0px;\n    font-weight: bold;\n}\n\ndiv.main div.content .add-task-container .input-container input.title {\n    border-radius: 8px;\n    padding-left: 4px;\n}\n\ndiv.main div.content .add-task-container .input-container textarea {\n    height: 150px;\n    border-radius: 8px;\n    padding-left: 4px;\n}\n\ndiv.main div.content .add-task-container .input-container div.date-project {\n    display: flex;\n    column-gap: 16px;\n}\n\ndiv.main div.content .add-task-container .input-container div.due-date {\n    display: flex;\n    column-gap: 4px;\n    justify-content: center;\n    align-items: center;\n\n    font-weight: bold;\n}\n\ndiv.main div.content .add-task-container .input-container div.project {\n    display: flex;\n    column-gap: 4px;\n    justify-content: center;\n    align-items: center;\n\n    font-weight: bold;\n}\n\ndiv.main div.content .add-task-container .input-container .priority-add-cancel {\n    display: flex;\n    row-gap: 4px;\n    column-gap: 24px;\n    align-items: center;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities {\n    display: flex;\n    column-gap: 4px;\n    align-items: center;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .priority {\n    width: 100px;\n    border-radius: 4px;\n    padding: 4px 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .low {\n    background-color: var(--blue-light);\n    color: var(--blue);\n    border-left: var(--blue) solid 4px;\n    border-right: var(--blue) solid 4px;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .low:hover {\n    cursor: pointer;\n    background-color: var(--blue);\n    color: var(--blue-light);\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .active-low {\n    background-color: var(--blue);\n    color: var(--blue-light);\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .medium {\n    background-color: var(--orange-light);\n    color: var(--orange);\n    border-left: var(--orange) solid 4px;\n    border-right: var(--orange) solid 4px;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .medium:hover {\n    cursor: pointer;\n    background-color: var(--orange);\n    color: var(--orange-light);\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .active-medium {\n    background-color: var(--orange);\n    color: var(--orange-light);\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .high {\n    background-color: var(--red-light);\n    color: var(--red);\n    border-left: var(--red) solid 4px;\n    border-right: var(--red) solid 4px;\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .high:hover {\n    cursor: pointer;\n    background-color: var(--red);\n    color: var(--red-light);\n}\n\ndiv.main div.content .add-task-container .input-container .priorities .active-high {\n    background-color: var(--red);\n    color: var(--red-light);\n}\n\ndiv.main div.content .add-task-container .input-container .add-cancel {\n    display: flex;\n    justify-self: right;\n    column-gap: 4px;\n    margin-left: auto;\n}\n\ndiv.main div.content .add-task-container .input-container .add {\n    width: 100px;\n    border-radius: 4px;\n    padding: 4px 0px;\n\n    background-color: var(--light-green);\n    color: var(--green);\n    border-left: var(--green) solid 4px;\n    border-right: var(--green) solid 4px;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\ndiv.main div.content .add-task-container .input-container .add:hover {\n    cursor: pointer;\n    background-color: var(--green);\n    color: var(--light-green);\n}\n\ndiv.main div.content .add-task-container .input-container .cancel {\n    width: 100px;\n    border-radius: 4px;\n    padding: 4px 0px;\n    background-color: var(--red-light);\n    color: var(--red);\n    border-left: var(--red) solid 4px;\n    border-right: var(--red) solid 4px;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\ndiv.main div.content .add-task-container .input-container .cancel:hover {\n    cursor: pointer;\n    background-color: var(--red);\n    color: var(--red-light);\n}\n\ndiv.main footer {\n    flex: 1;\n    padding: 8px;\n    background-color: var(--light-grey);\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    column-gap: 16px;\n}\n\ndiv.main footer p.text {\n    font-size: 1.25em;\n    font-weight: bold;\n}\n\ndiv.main footer a {\n    border: 3px solid var(--black);\n    border-radius: 100%;\n    width: var(--github-img-size);\n    height: var(--github-img-size);\n    background-color: var(--white);\n    padding: 6px;\n}\n\ndiv.main footer a:hover {\n    background-color: var(--black);\n}\n\ndiv.main footer a:hover img {\n    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(248deg) brightness(106%) contrast(106%);\n}\n\ndiv.main footer a img {\n    width: var(--github-img-size);\n    height: var(--github-img-size);\n}\n"],"sourceRoot":""}]);
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
    const deleteTask = (index) => {
        state.tasks.splice(index, 1);
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

        // Bind functionality to tasks
        tasks.forEach((task, index) => {
            // Bind functionality to details buttons
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

            // Bind functionality to edit buttons
        
            // Bind functionality to delete buttons
            const deleteBtn = task.querySelector('.delete');
            deleteBtn.addEventListener('click', () => {
                console.log(_directory__WEBPACK_IMPORTED_MODULE_2__.directory.currentProject.tasks);
                _directory__WEBPACK_IMPORTED_MODULE_2__.directory.currentProject.deleteTask(index);
                console.log(_directory__WEBPACK_IMPORTED_MODULE_2__.directory.currentProject.tasks);
                render();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLGFBQWEsYUFBYSxjQUFjLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksY0FBYyxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxjQUFjLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZ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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7OztBQ0FvQztBQUNNO0FBQ2Q7O0FBRTVCLFVBQVUsbURBQUk7O0FBRWQsVUFBVSx5REFBSTtBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL2luZGV4LmNzcz82MzQ5Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvZGlyZWN0b3J5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvcmVuZGVyUGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIC0td2hpdGU6ICNmZmZmZmY7XFxuICAgIC0tbGlnaHQtZ3JleTogI0Q5RDlEOTtcXG4gICAgLS1kYXJrLWdyZXk6ICM0NTQ1NDU7XFxuICAgIC0tYmxhY2s6ICMwMDAwMDA7XFxuICAgIC0tYmxhY2stdGludDogcmdiYSgwLCAwLCAwLCAwLjUwKTtcXG4gICAgLS1ibHVlOiAjMDA4NUZGO1xcbiAgICAtLWJsdWUtbGlnaHQ6ICNiYWRjZmM7XFxuICAgIC0tb3JhbmdlOiAjRkY5OTAwO1xcbiAgICAtLW9yYW5nZS1saWdodDogI0ZBRTdDQztcXG4gICAgLS1yZWQ6ICNGRjAwMDA7XFxuICAgIC0tcmVkLWxpZ2h0OiAjRkNDRUNFO1xcbiAgICAtLWdyZWVuOiAjMzNDNTAwO1xcbiAgICAtLWxpZ2h0LWdyZWVuOiAjRDdGRkM5O1xcbiAgICAtLWdpdGh1Yi1pbWctc2l6ZTogMzJweDtcXG59XFxuXFxuOnJvb3QgcCB7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIC8qIFRlbXAgKi9cXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4vKiBBc2lkZSAgKi9cXG5hc2lkZSB7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuYXNpZGUgcCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuYXNpZGUgLmhvbWUtY29udGFpbmVyLCBhc2lkZSAucHJvamVjdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4vKiBBbGlnbiBFZGl0IGFuZCBEZWxldGUgQnV0dG9ucyB0byB0aGUgcmlnaHQgc2lkZSAqL1xcbmFzaWRlIGJ1dHRvbi5wcm9qZWN0IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG5hc2lkZSBidXR0b24ucHJvamVjdCwgYnV0dG9uLnRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xcbn1cXG5cXG5hc2lkZSBidXR0b24ucHJvamVjdDpob3ZlciwgYnV0dG9uLnRpdGxlOmhvdmVyIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpOyAqL1xcbn1cXG5cXG5hc2lkZSBkaXYuYWRkLXByb2plY3QgYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xcbn1cXG5cXG5hc2lkZSBkaXYuYWRkLXByb2plY3QgYnV0dG9uOmhvdmVyIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmFzaWRlIGJ1dHRvbi50aXRsZSB7XFxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLXdoaXRlKSBzb2xpZCA1cHg7XFxufVxcblxcbmFzaWRlIC5ob21lLWNvbnRhaW5lciAuZGVmYXVsdC1wcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmFzaWRlIGRpdi5wcm9qZWN0LWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmFzaWRlIGltZyB7IFxcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgxMDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgyNDhkZWcpIGJyaWdodG5lc3MoMTA2JSkgY29udHJhc3QoMTA2JSk7XFxufVxcblxcbmFzaWRlIGJ1dHRvbi5jdXJyZW50LXByb2plY3Qge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLyogTWFpbiAqL1xcbmRpdi5tYWluIHtcXG4gICAgZmxleDogNDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuZGl2Lm1haW4gaGVhZGVyIHtcXG4gICAgZmxleDogMTtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICAvKiBUZW1wICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcXG59XFxuXFxuZGl2Lm1haW4gaGVhZGVyIGJ1dHRvbi5tZW51IHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmRpdi5tYWluIGhlYWRlciBoMS50aXRsZSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IGF1dG87XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAzZW07XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IHtcXG4gICAgZmxleDogNDtcXG4gICAgcGFkZGluZzogMTZweCA2NHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi8qIFRhc2sgU3R5bGluZyAqL1xcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IGRpdi50YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHJvdy1nYXA6IDhweDsgXFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IGRpdi50YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXG4gICAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCBkaXYudGFzay1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgZGl2Lmxvdy10YXNrIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1ibHVlKSBzb2xpZCA0cHg7XFxuICAgIGJvcmRlci1sZWZ0OiB2YXIoLS1ibHVlKSBzb2xpZCA0cHg7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IGRpdi5tZWRpdW0tdGFzayB7XFxuICAgIGJvcmRlci1yaWdodDogdmFyKC0tb3JhbmdlKSBzb2xpZCA0cHg7XFxuICAgIGJvcmRlci1sZWZ0OiB2YXIoLS1vcmFuZ2UpIHNvbGlkIDRweDtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgZGl2LmhpZ2gtdGFzayB7XFxuICAgIGJvcmRlci1yaWdodDogdmFyKC0tcmVkKSBzb2xpZCA0cHg7XFxuICAgIGJvcmRlci1sZWZ0OiB2YXIoLS1yZWQpIHNvbGlkIDRweDtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgZGl2LmxlZnQtc2lkZSB7XFxuICAgIGdyaWQtYXJlYTogbGVmdDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sdW1uLWdhcDogNHB4O1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCBkaXYubGVmdC1zaWRlIGlucHV0IHtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IGRpdi5yaWdodC1zaWRlIHtcXG4gICAgZ3JpZC1hcmVhOiByaWdodDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbHVtbi1nYXA6IDRweDtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgZGl2LmRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuYWRkLXRhc2stYnRuIHtcXG4gICAgd2lkdGg6IDEzNXB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2x1bW4tZ2FwOiA0cHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuYWRkLXRhc2stYnRuIHAge1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5hZGQtdGFzay1idG4gaW1nIHtcXG4gICAgd2lkdGg6IDI0cHg7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHJvdy1nYXA6IDRweDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XFxuICAgIHBhZGRpbmc6IDE2cHggMjRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLWJsdWUpIHNvbGlkIDRweDtcXG4gICAgYm9yZGVyLWxlZnQ6IHZhcigtLWJsdWUpIHNvbGlkIDRweDtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIHAge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciBpbnB1dC50aXRsZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYSB7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciBkaXYuZGF0ZS1wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sdW1uLWdhcDogMTZweDtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIGRpdi5kdWUtZGF0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbHVtbi1nYXA6IDRweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgZGl2LnByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2x1bW4tZ2FwOiA0cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIC5wcmlvcml0eS1hZGQtY2FuY2VsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcm93LWdhcDogNHB4O1xcbiAgICBjb2x1bW4tZ2FwOiAyNHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLnByaW9yaXRpZXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2x1bW4tZ2FwOiA0cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciAucHJpb3JpdGllcyAucHJpb3JpdHkge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgcGFkZGluZzogNHB4IDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciAucHJpb3JpdGllcyAubG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1saWdodCk7XFxuICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgYm9yZGVyLWxlZnQ6IHZhcigtLWJsdWUpIHNvbGlkIDRweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1ibHVlKSBzb2xpZCA0cHg7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciAucHJpb3JpdGllcyAubG93OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgY29sb3I6IHZhcigtLWJsdWUtbGlnaHQpO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLnByaW9yaXRpZXMgLmFjdGl2ZS1sb3cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgY29sb3I6IHZhcigtLWJsdWUtbGlnaHQpO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLnByaW9yaXRpZXMgLm1lZGl1bSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZS1saWdodCk7XFxuICAgIGNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcbiAgICBib3JkZXItbGVmdDogdmFyKC0tb3JhbmdlKSBzb2xpZCA0cHg7XFxuICAgIGJvcmRlci1yaWdodDogdmFyKC0tb3JhbmdlKSBzb2xpZCA0cHg7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciAucHJpb3JpdGllcyAubWVkaXVtOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcbiAgICBjb2xvcjogdmFyKC0tb3JhbmdlLWxpZ2h0KTtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIC5wcmlvcml0aWVzIC5hY3RpdmUtbWVkaXVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcXG4gICAgY29sb3I6IHZhcigtLW9yYW5nZS1saWdodCk7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciAucHJpb3JpdGllcyAuaGlnaCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1saWdodCk7XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgICBib3JkZXItbGVmdDogdmFyKC0tcmVkKSBzb2xpZCA0cHg7XFxuICAgIGJvcmRlci1yaWdodDogdmFyKC0tcmVkKSBzb2xpZCA0cHg7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciAucHJpb3JpdGllcyAuaGlnaDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXG4gICAgY29sb3I6IHZhcigtLXJlZC1saWdodCk7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciAucHJpb3JpdGllcyAuYWN0aXZlLWhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgICBjb2xvcjogdmFyKC0tcmVkLWxpZ2h0KTtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIC5hZGQtY2FuY2VsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gICAgY29sdW1uLWdhcDogNHB4O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIC5hZGQge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgcGFkZGluZzogNHB4IDBweDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JlZW4pO1xcbiAgICBjb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgICBib3JkZXItbGVmdDogdmFyKC0tZ3JlZW4pIHNvbGlkIDRweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1ncmVlbikgc29saWQgNHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIC5hZGQ6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWdyZWVuKTtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIC5jYW5jZWwge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgcGFkZGluZzogNHB4IDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLWxpZ2h0KTtcXG4gICAgY29sb3I6IHZhcigtLXJlZCk7XFxuICAgIGJvcmRlci1sZWZ0OiB2YXIoLS1yZWQpIHNvbGlkIDRweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1yZWQpIHNvbGlkIDRweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciAuY2FuY2VsOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgICBjb2xvcjogdmFyKC0tcmVkLWxpZ2h0KTtcXG59XFxuXFxuZGl2Lm1haW4gZm9vdGVyIHtcXG4gICAgZmxleDogMTtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbHVtbi1nYXA6IDE2cHg7XFxufVxcblxcbmRpdi5tYWluIGZvb3RlciBwLnRleHQge1xcbiAgICBmb250LXNpemU6IDEuMjVlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmRpdi5tYWluIGZvb3RlciBhIHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tYmxhY2spO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICB3aWR0aDogdmFyKC0tZ2l0aHViLWltZy1zaXplKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1naXRodWItaW1nLXNpemUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIHBhZGRpbmc6IDZweDtcXG59XFxuXFxuZGl2Lm1haW4gZm9vdGVyIGE6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxufVxcblxcbmRpdi5tYWluIGZvb3RlciBhOmhvdmVyIGltZyB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDEwMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDI0OGRlZykgYnJpZ2h0bmVzcygxMDYlKSBjb250cmFzdCgxMDYlKTtcXG59XFxuXFxuZGl2Lm1haW4gZm9vdGVyIGEgaW1nIHtcXG4gICAgd2lkdGg6IHZhcigtLWdpdGh1Yi1pbWctc2l6ZSk7XFxuICAgIGhlaWdodDogdmFyKC0tZ2l0aHViLWltZy1zaXplKTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3SUFBd0k7SUFDeEksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGlDQUFpQztJQUNqQyxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsU0FBUztJQUNULFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBLFdBQVc7QUFDWDtJQUNJLE9BQU87SUFDUCxZQUFZO0lBQ1osa0NBQWtDOztJQUVsQyxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUEsb0RBQW9EO0FBQ3BEO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjs7SUFFbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxhQUFhO0lBQ2Is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Qjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLDhCQUE4QjtJQUM5Qiw4QkFBOEI7SUFDOUIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGdHQUFnRztBQUNwRzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qiw4QkFBOEI7QUFDbENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICAtLXdoaXRlOiAjZmZmZmZmO1xcbiAgICAtLWxpZ2h0LWdyZXk6ICNEOUQ5RDk7XFxuICAgIC0tZGFyay1ncmV5OiAjNDU0NTQ1O1xcbiAgICAtLWJsYWNrOiAjMDAwMDAwO1xcbiAgICAtLWJsYWNrLXRpbnQ6IHJnYmEoMCwgMCwgMCwgMC41MCk7XFxuICAgIC0tYmx1ZTogIzAwODVGRjtcXG4gICAgLS1ibHVlLWxpZ2h0OiAjYmFkY2ZjO1xcbiAgICAtLW9yYW5nZTogI0ZGOTkwMDtcXG4gICAgLS1vcmFuZ2UtbGlnaHQ6ICNGQUU3Q0M7XFxuICAgIC0tcmVkOiAjRkYwMDAwO1xcbiAgICAtLXJlZC1saWdodDogI0ZDQ0VDRTtcXG4gICAgLS1ncmVlbjogIzMzQzUwMDtcXG4gICAgLS1saWdodC1ncmVlbjogI0Q3RkZDOTtcXG4gICAgLS1naXRodWItaW1nLXNpemU6IDMycHg7XFxufVxcblxcbjpyb290IHAge1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICAvKiBUZW1wICovXFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyogQXNpZGUgICovXFxuYXNpZGUge1xcbiAgICBmbGV4OiAxO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmFzaWRlIHAge1xcbiAgICBmb250LXNpemU6IDEuMjVlbTtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbmFzaWRlIC5ob21lLWNvbnRhaW5lciwgYXNpZGUgLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLyogQWxpZ24gRWRpdCBhbmQgRGVsZXRlIEJ1dHRvbnMgdG8gdGhlIHJpZ2h0IHNpZGUgKi9cXG5hc2lkZSBidXR0b24ucHJvamVjdCB7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuYXNpZGUgYnV0dG9uLnByb2plY3QsIGJ1dHRvbi50aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBmb250LXNpemU6IDEuMjVlbTtcXG59XFxuXFxuYXNpZGUgYnV0dG9uLnByb2plY3Q6aG92ZXIsIGJ1dHRvbi50aXRsZTpob3ZlciB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTsgKi9cXG59XFxuXFxuYXNpZGUgZGl2LmFkZC1wcm9qZWN0IGJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBmb250LXNpemU6IDEuMjVlbTtcXG59XFxuXFxuYXNpZGUgZGl2LmFkZC1wcm9qZWN0IGJ1dHRvbjpob3ZlciB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5hc2lkZSBidXR0b24udGl0bGUge1xcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS13aGl0ZSkgc29saWQgNXB4O1xcbn1cXG5cXG5hc2lkZSAuaG9tZS1jb250YWluZXIgLmRlZmF1bHQtcHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5hc2lkZSBkaXYucHJvamVjdC1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5hc2lkZSBpbWcgeyBcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMTAwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMjQ4ZGVnKSBicmlnaHRuZXNzKDEwNiUpIGNvbnRyYXN0KDEwNiUpO1xcbn1cXG5cXG5hc2lkZSBidXR0b24uY3VycmVudC1wcm9qZWN0IHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qIE1haW4gKi9cXG5kaXYubWFpbiB7XFxuICAgIGZsZXg6IDQ7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmRpdi5tYWluIGhlYWRlciB7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgLyogVGVtcCAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXFxufVxcblxcbmRpdi5tYWluIGhlYWRlciBidXR0b24ubWVudSB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5kaXYubWFpbiBoZWFkZXIgaDEudGl0bGUge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiBhdXRvO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogM2VtO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCB7XFxuICAgIGZsZXg6IDQ7XFxuICAgIHBhZGRpbmc6IDE2cHggNjRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4vKiBUYXNrIFN0eWxpbmcgKi9cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCBkaXYudGFzay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICByb3ctZ2FwOiA4cHg7IFxcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCBkaXYudGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuXFxuICAgIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgZGl2LnRhc2stY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IGRpdi5sb3ctdGFzayB7XFxuICAgIGJvcmRlci1yaWdodDogdmFyKC0tYmx1ZSkgc29saWQgNHB4O1xcbiAgICBib3JkZXItbGVmdDogdmFyKC0tYmx1ZSkgc29saWQgNHB4O1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCBkaXYubWVkaXVtLXRhc2sge1xcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLW9yYW5nZSkgc29saWQgNHB4O1xcbiAgICBib3JkZXItbGVmdDogdmFyKC0tb3JhbmdlKSBzb2xpZCA0cHg7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IGRpdi5oaWdoLXRhc2sge1xcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLXJlZCkgc29saWQgNHB4O1xcbiAgICBib3JkZXItbGVmdDogdmFyKC0tcmVkKSBzb2xpZCA0cHg7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IGRpdi5sZWZ0LXNpZGUge1xcbiAgICBncmlkLWFyZWE6IGxlZnQ7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbHVtbi1nYXA6IDRweDtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgZGl2LmxlZnQtc2lkZSBpbnB1dCB7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCBkaXYucmlnaHQtc2lkZSB7XFxuICAgIGdyaWQtYXJlYTogcmlnaHQ7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2x1bW4tZ2FwOiA0cHg7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IGRpdi5kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmFkZC10YXNrLWJ0biB7XFxuICAgIHdpZHRoOiAxMzVweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sdW1uLWdhcDogNHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmFkZC10YXNrLWJ0biBwIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuYWRkLXRhc2stYnRuIGltZyB7XFxuICAgIHdpZHRoOiAyNHB4O1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICByb3ctZ2FwOiA0cHg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcbiAgICBwYWRkaW5nOiAxNnB4IDI0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1ibHVlKSBzb2xpZCA0cHg7XFxuICAgIGJvcmRlci1sZWZ0OiB2YXIoLS1ibHVlKSBzb2xpZCA0cHg7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciBwIHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgaW5wdXQudGl0bGUge1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmctbGVmdDogNHB4O1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgdGV4dGFyZWEge1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmctbGVmdDogNHB4O1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgZGl2LmRhdGUtcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbHVtbi1nYXA6IDE2cHg7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciBkaXYuZHVlLWRhdGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2x1bW4tZ2FwOiA0cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIGRpdi5wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sdW1uLWdhcDogNHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciAucHJpb3JpdHktYWRkLWNhbmNlbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHJvdy1nYXA6IDRweDtcXG4gICAgY29sdW1uLWdhcDogMjRweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIC5wcmlvcml0aWVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sdW1uLWdhcDogNHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLnByaW9yaXRpZXMgLnByaW9yaXR5IHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHBhZGRpbmc6IDRweCAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLnByaW9yaXRpZXMgLmxvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtbGlnaHQpO1xcbiAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIGJvcmRlci1sZWZ0OiB2YXIoLS1ibHVlKSBzb2xpZCA0cHg7XFxuICAgIGJvcmRlci1yaWdodDogdmFyKC0tYmx1ZSkgc29saWQgNHB4O1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLnByaW9yaXRpZXMgLmxvdzpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1ibHVlLWxpZ2h0KTtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIC5wcmlvcml0aWVzIC5hY3RpdmUtbG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1ibHVlLWxpZ2h0KTtcXG59XFxuXFxuZGl2Lm1haW4gZGl2LmNvbnRlbnQgLmFkZC10YXNrLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIC5wcmlvcml0aWVzIC5tZWRpdW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UtbGlnaHQpO1xcbiAgICBjb2xvcjogdmFyKC0tb3JhbmdlKTtcXG4gICAgYm9yZGVyLWxlZnQ6IHZhcigtLW9yYW5nZSkgc29saWQgNHB4O1xcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLW9yYW5nZSkgc29saWQgNHB4O1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLnByaW9yaXRpZXMgLm1lZGl1bTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcXG4gICAgY29sb3I6IHZhcigtLW9yYW5nZS1saWdodCk7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciAucHJpb3JpdGllcyAuYWN0aXZlLW1lZGl1bSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1vcmFuZ2UtbGlnaHQpO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLnByaW9yaXRpZXMgLmhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtbGlnaHQpO1xcbiAgICBjb2xvcjogdmFyKC0tcmVkKTtcXG4gICAgYm9yZGVyLWxlZnQ6IHZhcigtLXJlZCkgc29saWQgNHB4O1xcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLXJlZCkgc29saWQgNHB4O1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLnByaW9yaXRpZXMgLmhpZ2g6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQtbGlnaHQpO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLnByaW9yaXRpZXMgLmFjdGl2ZS1oaWdoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXG4gICAgY29sb3I6IHZhcigtLXJlZC1saWdodCk7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciAuYWRkLWNhbmNlbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxuICAgIGNvbHVtbi1nYXA6IDRweDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciAuYWRkIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHBhZGRpbmc6IDRweCAwcHg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZWVuKTtcXG4gICAgY29sb3I6IHZhcigtLWdyZWVuKTtcXG4gICAgYm9yZGVyLWxlZnQ6IHZhcigtLWdyZWVuKSBzb2xpZCA0cHg7XFxuICAgIGJvcmRlci1yaWdodDogdmFyKC0tZ3JlZW4pIHNvbGlkIDRweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciAuYWRkOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1ncmVlbik7XFxufVxcblxcbmRpdi5tYWluIGRpdi5jb250ZW50IC5hZGQtdGFzay1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciAuY2FuY2VsIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHBhZGRpbmc6IDRweCAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1saWdodCk7XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgICBib3JkZXItbGVmdDogdmFyKC0tcmVkKSBzb2xpZCA0cHg7XFxuICAgIGJvcmRlci1yaWdodDogdmFyKC0tcmVkKSBzb2xpZCA0cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5kaXYubWFpbiBkaXYuY29udGVudCAuYWRkLXRhc2stY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLmNhbmNlbDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXG4gICAgY29sb3I6IHZhcigtLXJlZC1saWdodCk7XFxufVxcblxcbmRpdi5tYWluIGZvb3RlciB7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjb2x1bW4tZ2FwOiAxNnB4O1xcbn1cXG5cXG5kaXYubWFpbiBmb290ZXIgcC50ZXh0IHtcXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5kaXYubWFpbiBmb290ZXIgYSB7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgd2lkdGg6IHZhcigtLWdpdGh1Yi1pbWctc2l6ZSk7XFxuICAgIGhlaWdodDogdmFyKC0tZ2l0aHViLWltZy1zaXplKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBwYWRkaW5nOiA2cHg7XFxufVxcblxcbmRpdi5tYWluIGZvb3RlciBhOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbn1cXG5cXG5kaXYubWFpbiBmb290ZXIgYTpob3ZlciBpbWcge1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgxMDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgyNDhkZWcpIGJyaWdodG5lc3MoMTA2JSkgY29udHJhc3QoMTA2JSk7XFxufVxcblxcbmRpdi5tYWluIGZvb3RlciBhIGltZyB7XFxuICAgIHdpZHRoOiB2YXIoLS1naXRodWItaW1nLXNpemUpO1xcbiAgICBoZWlnaHQ6IHZhcigtLWdpdGh1Yi1pbWctc2l6ZSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtwcm9qZWN0fSBmcm9tICcuL3Byb2plY3QnO1xuLy8gVGVtcFxuaW1wb3J0IHt0YXNrfSBmcm9tICcuL3Rhc2snO1xuXG4vLyBtb2R1bGUgdGhhdCBzdG9yZXMgYWxsIHByb2plY3RzXG4vLyBkZWZhdWx0IHByb2plY3RzIDogSW5ib3gsIFRvZGF5LCBVcGNvbWluZ1xuLy8gY3JlYXRlZCBwcm9qZWN0c1xuXG5leHBvcnQgY29uc3QgZGlyZWN0b3J5ID0gKCgpID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgICAgZGVmYXVsdFByb2plY3RzOiBbXG4gICAgICAgICAgICBwcm9qZWN0KCdpbmJveCcpLFxuICAgICAgICAgICAgcHJvamVjdCgndG9kYXknKSxcbiAgICAgICAgICAgIHByb2plY3QoJ3VwY29taW5nJyksXG4gICAgICAgIF0sXG4gICAgICAgIGNyZWF0ZWRQcm9qZWN0czogW1xuICAgICAgICAgICAgcHJvamVjdCgndGVtcDEnKSwgXG4gICAgICAgICAgICBwcm9qZWN0KCd0ZW1wMicpLFxuICAgICAgICBdLFxuICAgICAgICBjdXJyZW50UHJvamVjdDogbnVsbCxcbiAgICB9O1xuXG4gICAgc3RhdGUuY3VycmVudFByb2plY3QgPSBzdGF0ZS5kZWZhdWx0UHJvamVjdHNbMF07XG5cbiAgICAvLyBUZW1wXG4gICAgY29uc3QgbG93VGFzayA9IHRhc2soXCJMb3cgVGFzayBUaXRsZVwiLCBcIkNvb2wgU3R1ZmYgdG8gZG9cIiwgXCJsb3dcIiwgJzEwLTE3LTIwMjInLCAndGVtcDEnKTtcbiAgICBjb25zdCBtZWRpdWVtVGFzayA9IHRhc2soXCJNZWRpdW0gVGFzayBUaXRsZVwiLCBcIkNvb2wgU3R1ZmYgdG8gZG9cIiwgXCJtZWRpdW1cIiwgJzEwLTE3LTIwMjInLCAndGVtcDEnKTtcbiAgICBjb25zdCBoaWdoVGFzayA9IHRhc2soXCJIaWdoIFRhc2sgVGl0bGVcIiwgXCJDb29sIFN0dWZmIHRvIGRvXCIsIFwiaGlnaFwiLCAnMTAtMTctMjAyMicsICd0ZW1wMScpO1xuICAgIHN0YXRlLmNyZWF0ZWRQcm9qZWN0c1swXS5hZGRUYXNrKGxvd1Rhc2spO1xuICAgIHN0YXRlLmNyZWF0ZWRQcm9qZWN0c1swXS5hZGRUYXNrKG1lZGl1ZW1UYXNrKTtcbiAgICBzdGF0ZS5jcmVhdGVkUHJvamVjdHNbMF0uYWRkVGFzayhoaWdoVGFzayk7XG5cbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgbG93TmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3QobG93TmFtZSk7XG4gICAgICAgIHN0YXRlLmNyZWF0ZWRQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgICByZXR1cm4gbmV3UHJvamVjdDtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgICAgIGlmKG5hbWUgPT09ICdpbmJveCcpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5kZWZhdWx0UHJvamVjdHNbMF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3RhdGUuY3JlYXRlZFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYobmFtZSA9PT0gc3RhdGUuY3JlYXRlZFByb2plY3RzW2ldLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlLmNyZWF0ZWRQcm9qZWN0c1tpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gZWxzZSBcbiAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCBjcmVhdGVQcm9qZWN0c1xuICAgICAgICAgICAgICAgIC8vIGlmIHByb2plY3QubmFtZSA9PSBuYW1lXG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiBwcm9qZWN0XG4gICAgfTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgICAgICBzdGF0ZSxcbiAgICAgICAge2NyZWF0ZVByb2plY3R9LFxuICAgICAgICB7Z2V0UHJvamVjdH1cbiAgICApO1xufSkoKTsiLCJpbXBvcnQgeyB0YXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuXG4vLyBJbiA+IE91dCA6IFN0cmluZyBMaXN0LW9mLVRhc2tzID4gT2JqZWN0XG5leHBvcnQgY29uc3QgcHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHRhc2tzOiBbXSxcbiAgICB9O1xuXG4gICAgLy8gR2V0IHByb3BlcnR5XG4gICAgY29uc3QgZ2V0ID0gKHByb3BlcnR5KSA9PiB7XG4gICAgICAgIGlmKHN0YXRlLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlW3Byb3BlcnR5XSBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFRoZSBwcm9wZXJ0eSAke3Byb3BlcnR5fSBkb2VzIG5vdCBleGlzdGApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIFNldCBwcm9wZXJ0eVxuICAgIGNvbnN0IHNldCA9IChwcm9wZXJ0eSwgdmFsdWUpID0+IHtcbiAgICAgICAgaWYoc3RhdGUuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgICAgICBzdGF0ZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFRoZSBwcm9wZXJ0eSAke3Byb3BlcnR5fSBkb2VzIG5vdCBleGlzdGApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIEFkZCBUYXNrXG4gICAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgICAgIGdldCgndGFza3MnKS5wdXNoKHRhc2spO1xuICAgIH1cblxuICAgIC8vIEdldCBUYXNrXG4gICAgY29uc3QgZ2V0VGFzayA9ICh0aXRsZSkgPT4ge1xuICAgICAgICBnZXQoJ3Rhc2tzJykuZmlsdGVyKHRhc2sgPT4gdGFzay50aXRsZSA9PT0gdGl0bGUpO1xuICAgIH1cblxuICAgIC8vIERlbGV0ZSBUYXNrXG4gICAgY29uc3QgZGVsZXRlVGFzayA9IChpbmRleCkgPT4ge1xuICAgICAgICBzdGF0ZS50YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgICAgICBzdGF0ZSxcbiAgICAgICAge2FkZFRhc2t9LFxuICAgICAgICB7ZGVsZXRlVGFza30sXG4gICAgICAgIHtnZXRUYXNrfSxcbiAgICApO1xufTsiLCJpbXBvcnQgbWVudVN2ZyBmcm9tICcuLi9pY29ucy9tZW51LnN2Zyc7XG5pbXBvcnQgZ2l0aHViU3ZnIGZyb20gJy4uL2ljb25zL2dpdGh1Yi5zdmcnO1xuaW1wb3J0IHtkaXJlY3Rvcnl9IGZyb20gJy4vZGlyZWN0b3J5JztcbmltcG9ydCBhcnJvd1N2ZyBmcm9tICcuLi9pY29ucy9hcnJvdy5zdmcnO1xuaW1wb3J0IGluYm94U3ZnIGZyb20gJy4uL2ljb25zL2luYm94LnN2Zyc7XG5pbXBvcnQgdG9kYXlTdmcgZnJvbSAnLi4vaWNvbnMvc3Rhci5zdmcnO1xuaW1wb3J0IHVwY29taW5nU3ZnIGZyb20gJy4uL2ljb25zL2NhbGVuZGFyLnN2Zyc7XG5pbXBvcnQgY2lybGNlUGx1c1N2ZyBmcm9tICcuLi9pY29ucy9jaXJjbGVQbHVzLnN2Zyc7XG5pbXBvcnQgZGVsZXRlU3ZnIGZyb20gJy4uL2ljb25zL3RyYXNoLnN2Zyc7XG5pbXBvcnQgZWRpdFN2ZyBmcm9tICcuLi9pY29ucy9lZGl0LnN2Zyc7XG5pbXBvcnQge3Rhc2t9IGZyb20gJy4vdGFzayc7XG5cbmV4cG9ydCBjb25zdCBwYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0ge1xuICAgICAgICBzaWRlQmFyOiBudWxsLFxuICAgICAgICBtYWluOiBudWxsLFxuICAgICAgICBoZWFkZXI6IG51bGwsXG4gICAgICAgIGNvbnRlbnQ6IG51bGwsXG4gICAgICAgIGZvb3RlcjogbnVsbCxcbiAgICB9O1xuXG4gICAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgICAgICBjbGVhcigpO1xuICAgICAgICBzdGF0ZS5zaWRlQmFyID0gcmVuZGVyU2lkZUJhcigpO1xuICAgICAgICBzdGF0ZS5tYWluID0gY3JlYXRlRWxlbWVudCgnZGl2JywgZG9jdW1lbnQuYm9keSwgJ21haW4nKTtcbiAgICAgICAgc3RhdGUuaGVhZGVyID0gcmVuZGVySGVhZGVyKCk7XG4gICAgICAgIHN0YXRlLmNvbnRlbnQgPSByZW5kZXJDb250ZW50KCk7XG4gICAgICAgIHN0YXRlLmZvb3RlciA9IHJlbmRlckZvb3RlcigpO1xuXG4gICAgICAgIHNldEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgICAgIHVwZGF0ZSgpO1xuICAgIH07XG5cbiAgICAvLyBhZGRzIHRoZSBjdXJyZW50LXByb2plY3QgY2xhc3MgdG8gY3VycmVudCByZW5kZXJlZCBwcm9qZWN0XG4gICAgY29uc3Qgc2V0Q3VycmVudFByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gc3RhdGUuc2lkZUJhci5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24ucHJvamVjdCcpO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKHByb2plY3RzW2ldLnF1ZXJ5U2VsZWN0b3IoJ3AnKS50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpID09IGRpcmVjdG9yeS5jdXJyZW50UHJvamVjdC5uYW1lKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdHNbaV0uY2xhc3NMaXN0LmFkZCgnY3VycmVudC1wcm9qZWN0JykgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2xlYXIgPSAoKSA9PiB7XG4gICAgICAgIHdoaWxlKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbWVudUJ0biA9IHN0YXRlLmhlYWRlci5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBzdGF0ZS5zaWRlQmFyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbi5wcm9qZWN0Jyk7XG4gICAgICAgIGNvbnN0IGFkZFByb2plY3QgPSBzdGF0ZS5zaWRlQmFyLnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpO1xuICAgICAgICBjb25zdCBhZGRQcm9qZWN0QnRuID0gc3RhdGUuc2lkZUJhci5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QgYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tDb250YWluZXIgPSBzdGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgYWRkVGFza0J0biA9IHN0YXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ0bicpO1xuXG4gICAgICAgIHVwZGF0ZVRhc2soKTtcblxuICAgICAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gSWYgZGl2LmFkZC1wcm9qZWN0IGhhcyBhY3RpdmUgY2xhc3NcbiAgICAgICAgICAgIGlmKGFkZFRhc2tCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgIC8vIGRlbGV0ZSBpbnB1dEFkZFByb2plY3RcbiAgICAgICAgICAgICAgICBhZGRUYXNrQ29udGFpbmVyLnJlbW92ZUNoaWxkKHN0YXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWNvbnRhaW5lcicpKTtcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgYWN0aXZlIGNsYXNzXG4gICAgICAgICAgICAgICAgYWRkVGFza0J0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHJlbmRlciBpbnB1dFxuICAgICAgICAgICAgICAgIHJlbmRlckFkZFRhc2tJbnB1dChzdGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1jb250YWluZXInKSk7XG4gICAgICAgICAgICAgICAgdXBkYXRlQWRkVGFza0lucHV0KCk7XG4gICAgICAgICAgICAgICAgLy8gYWRkIGFjdGl2ZSBjbGFzc1xuICAgICAgICAgICAgICAgIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9ICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3RFbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3RTdGF0ZTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZGlyZWN0b3J5LmRlZmF1bHRQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZihkaXJlY3RvcnkuZGVmYXVsdFByb2plY3RzW2ldLm5hbWUgPT0gcHJvamVjdEVsZW1lbnQucXVlcnlTZWxlY3RvcigncCcpLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RTdGF0ZSA9IGRpcmVjdG9yeS5kZWZhdWx0UHJvamVjdHNbaV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGRpcmVjdG9yeS5jcmVhdGVkUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZGlyZWN0b3J5LmNyZWF0ZWRQcm9qZWN0c1tpXS5uYW1lID09IHByb2plY3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3AnKS50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0U3RhdGUgPSBkaXJlY3RvcnkuY3JlYXRlZFByb2plY3RzW2ldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRpcmVjdG9yeS5jdXJyZW50UHJvamVjdCA9IHByb2plY3RTdGF0ZTtcbiAgICAgICAgICAgICAgICByZW5kZXIoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXNpZGUgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJ2FzaWRlJyk7XG4gICAgICAgICAgICBpZihhc2lkZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJlbmRlcigpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYXNpZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gSWYgZGl2LmFkZC1wcm9qZWN0IGhhcyBhY3RpdmUgY2xhc3NcbiAgICAgICAgICAgIGlmKGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgIC8vIGRlbGV0ZSBpbnB1dEFkZFByb2plY3RcbiAgICAgICAgICAgICAgICBhZGRQcm9qZWN0LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1jb250YWluZXInKSk7XG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGFjdGl2ZSBjbGFzc1xuICAgICAgICAgICAgICAgIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyByZW5kZXIgaW5wdXRBZGRQcm9qZWN0XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXRBZGRQcm9qZWN0ID0gcmVuZGVySW5wdXRBZGRQcm9qZWN0KGFkZFByb2plY3QpO1xuICAgICAgICAgICAgICAgIC8vIGFkZCBhY3RpdmUgY2xhc3NcbiAgICAgICAgICAgICAgICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgLy8gQWRkQnRuIEV2ZW50IExpc3RuZXJcbiAgICAgICAgICAgICAgICBjb25zdCBhZGRCdG4gPSBpbnB1dEFkZFByb2plY3QucXVlcnlTZWxlY3RvcignLmFkZCcpO1xuICAgICAgICAgICAgICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBpbnB1dEFkZFByb2plY3QucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKGlucHV0LnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdG9yeS5jcmVhdGVQcm9qZWN0KGlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVsZXRlIGlucHV0QWRkUHJvamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkUHJvamVjdC5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtY29udGFpbmVyJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGFjdGl2ZSBjbGFzc1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbmRlciBwYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIENhbmNlbEJ0biBFdmVudCBMaXN0bmVyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FuY2VsQnRuID0gaW5wdXRBZGRQcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwnKTtcbiAgICAgICAgICAgICAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRlbGV0ZSBpbnB1dEFkZFByb2plY3RcbiAgICAgICAgICAgICAgICAgICAgYWRkUHJvamVjdC5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtY29udGFpbmVyJykpO1xuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgYWN0aXZlIGNsYXNzXG4gICAgICAgICAgICAgICAgICAgIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlVGFzayA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGFza3MgPSBzdGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJyk7XG5cbiAgICAgICAgLy8gQmluZCBmdW5jdGlvbmFsaXR5IHRvIHRhc2tzXG4gICAgICAgIHRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAvLyBCaW5kIGZ1bmN0aW9uYWxpdHkgdG8gZGV0YWlscyBidXR0b25zXG4gICAgICAgICAgICBjb25zdCBkZXRhaWxzQnRuID0gdGFzay5xdWVyeVNlbGVjdG9yKCcuZGV0YWlscycpO1xuICAgICAgICAgICAgZGV0YWlsc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZGV0YWlsc0NvbnRhaW5lciA9IHRhc2sucXVlcnlTZWxlY3RvcignLmRldGFpbHMtY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICBpZihkZXRhaWxzQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2sucmVtb3ZlQ2hpbGQoZGV0YWlsc0NvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBEaXYgOiBEZXRhaWxzIENvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxzQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgdGFzaywgJ2RldGFpbHMtY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQIDogRGV0YWlsc1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGV0YWlsc1BhcmEgPSBjcmVhdGVFbGVtZW50KCdwJywgZGV0YWlsc0NvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxzUGFyYS50ZXh0Q29udGVudCA9IGRpcmVjdG9yeS5jdXJyZW50UHJvamVjdC50YXNrc1tpbmRleF0uZGV0YWlscztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gQmluZCBmdW5jdGlvbmFsaXR5IHRvIGVkaXQgYnV0dG9uc1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIEJpbmQgZnVuY3Rpb25hbGl0eSB0byBkZWxldGUgYnV0dG9uc1xuICAgICAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gdGFzay5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlJyk7XG4gICAgICAgICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGlyZWN0b3J5LmN1cnJlbnRQcm9qZWN0LnRhc2tzKTtcbiAgICAgICAgICAgICAgICBkaXJlY3RvcnkuY3VycmVudFByb2plY3QuZGVsZXRlVGFzayhpbmRleCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGlyZWN0b3J5LmN1cnJlbnRQcm9qZWN0LnRhc2tzKTtcbiAgICAgICAgICAgICAgICByZW5kZXIoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuXG4gICAgfTtcblxuICAgIGNvbnN0IHVwZGF0ZUFkZFRhc2tJbnB1dCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWRkVGFza0NvbnRhaW5lciA9IHN0YXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvcignZGl2LmFkZC10YXNrLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBhZGRUYXNrQnRuID0gc3RhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yKCdkaXYuYWRkLXRhc2stYnRuJyk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tJbnB1dENvbnRhaW5lciA9IHN0YXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvcignZGl2LmFkZC10YXNrLWNvbnRhaW5lciBkaXYuaW5wdXQtY29udGFpbmVyJyk7XG4gICAgICAgIFxuICAgICAgICAvLyBQcmlvcml0eSBidG5zXG4gICAgICAgIGNvbnN0IHByaW9yaXR5QnRucyA9IGFkZFRhc2tJbnB1dENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcucHJpb3JpdHknKTtcbiAgICAgICAgXG4gICAgICAgIHByaW9yaXR5QnRucy5mb3JFYWNoKChwcmlvcml0eSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGlmIHByaW9yaXR5IGlzIGxvdywgc2V0IGJhY2tncm91bmQgdG8gYmx1ZVxuICAgICAgICAgICAgICAgIGlmKHByaW9yaXR5LmNsYXNzTGlzdC5jb250YWlucygnbG93JykpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWxvdycpO1xuICAgICAgICAgICAgICAgICAgICAvLyBvdGhlcnNcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlCdG5zWzFdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1tZWRpdW0nKTtcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlCdG5zWzJdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1oaWdoJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGlmIHByaW9yaXR5IGlzIG1lZGl1bSwgc2V0IGJhY2tncm91bmQgdG8gb3JhbmdlXG4gICAgICAgICAgICAgICAgZWxzZSBpZihwcmlvcml0eS5jbGFzc0xpc3QuY29udGFpbnMoJ21lZGl1bScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1tZWRpdW0nKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gb3RoZXJzXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5QnRuc1swXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtbG93Jyk7XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5QnRuc1syXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtaGlnaCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBpZiBwcmlvcml0eSBpcyBsb3csIHNldCBiYWNrZ3JvdW5kIHRvIHJlZFxuICAgICAgICAgICAgICAgIGVsc2UgaWYocHJpb3JpdHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWdoJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWhpZ2gnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gb3RoZXJzXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5QnRuc1swXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtbG93Jyk7XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5QnRuc1sxXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtbWVkaXVtJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFkZCBidG5cbiAgICAgICAgY29uc3QgYWRkQnRuID0gYWRkVGFza0lucHV0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5hZGQnKTtcbiAgICAgICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gQWRkIFRhc2sgSW5wdXQgQ29udGFpbmVyXG4gICAgICAgICAgICAvLyBHZXQgVGl0bGUgdmFsdWUgXG4gICAgICAgICAgICBsZXQgdGl0bGVWYWx1ZSA9IGFkZFRhc2tJbnB1dENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKS52YWx1ZTtcbiAgICAgICAgICAgIC8vIEdldCBEZXRhaWxzIFZhbHVlXG4gICAgICAgICAgICBsZXQgZGV0YWlsc1ZhbHVlID0gYWRkVGFza0lucHV0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJykudmFsdWU7XG4gICAgICAgICAgICAvLyBHZXQgUHJpb3JpdHlcbiAgICAgICAgICAgIGxldCBwcmlvcml0eVZhbHVlO1xuICAgICAgICAgICAgcHJpb3JpdHlCdG5zLmZvckVhY2goKHByaW9yaXR5LCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHByaW9yaXR5LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlLWxvdycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5VmFsdWUgPSAnbG93JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZihwcmlvcml0eS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZS1tZWRpdW0nKSkge1xuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eVZhbHVlID0gJ21lZGl1bSc7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBlbHNlIGlmKHByaW9yaXR5LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlLWhpZ2gnKSkge1xuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eVZhbHVlID0gJ2hpZ2gnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gR2V0IER1ZSBEYXRlIFZhbHVlXG4gICAgICAgICAgICBsZXQgZHVlRGF0ZVZhbHVlID0gYWRkVGFza0lucHV0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5kdWUtZGF0ZSBpbnB1dCcpLnZhbHVlO1xuICAgICAgICAgICAgLy8gR2V0IFByb2plY3RcbiAgICAgICAgICAgIGxldCBwcm9qZWN0VmFsdWUgPSBhZGRUYXNrSW5wdXRDb250YWluZXIucXVlcnlTZWxlY3RvcignZGl2LnByb2plY3Qgc2VsZWN0JykudmFsdWU7XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSBUYXNrXG4gICAgICAgICAgICBjb25zdCBuZXdUYXNrID0gdGFzayh0aXRsZVZhbHVlLCBkZXRhaWxzVmFsdWUsIHByaW9yaXR5VmFsdWUsIGR1ZURhdGVWYWx1ZSwgcHJvamVjdFZhbHVlLnNsaWNlKDAsMSkudG9Mb3dlckNhc2UoKSArIHByb2plY3RWYWx1ZS5zbGljZSgxKSk7XG5cbiAgICAgICAgICAgIC8vIEdldCBwcm9qZWN0IGZyb20gZGlyZWN0b3J5XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gZGlyZWN0b3J5LmdldFByb2plY3QocHJvamVjdFZhbHVlLnNsaWNlKDAsMSkudG9Mb3dlckNhc2UoKSArIHByb2plY3RWYWx1ZS5zbGljZSgxKSk7XG5cbiAgICAgICAgICAgIC8vIGFkZCB0YXNrIHRvIHByb2plY3RcbiAgICAgICAgICAgIHByb2plY3QuYWRkVGFzayhuZXdUYXNrKTtcblxuICAgICAgICAgICAgcmVuZGVyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENhbmNlbCBidG5cbiAgICAgICAgY29uc3QgY2FuY2VsQnRuID0gYWRkVGFza0lucHV0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwnKTtcblxuICAgICAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBkZWxldGUgaW5wdXRBZGRQcm9qZWN0XG4gICAgICAgICAgICBhZGRUYXNrQ29udGFpbmVyLnJlbW92ZUNoaWxkKGFkZFRhc2tJbnB1dENvbnRhaW5lcik7XG4gICAgICAgICAgICAvLyByZW1vdmUgYWN0aXZlIGNsYXNzXG4gICAgICAgICAgICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpOyBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gSW4gPiBPdXQ6IFN0cmluZywgT2JqZWN0LCBTdHJpbmcsIFN0cmluZ1xuICAgIC8vIEluID4gT3V0OiBjaGlsZCwgcGFyZW50LCBjbGFzcywgaWRcbiAgICBjb25zdCBjcmVhdGVFbGVtZW50ID0gKGNoaWxkLCBwYXJlbnQsIGNsc3M9bnVsbCwgaWQ9bnVsbCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChjaGlsZCk7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgaWYoY2xzcyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYoQXJyYXkuaXNBcnJheShjbHNzKSkge1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjbHNzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbHNzW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKGlkICE9PSBudWxsKSB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gICAgICAgIH0gXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH07XG5cbiAgICAvLyBBZGQgZWxlbWVudHMgdGhhdCBnbyBpbnRvIHRoZSBoZWFkZXJcbiAgICBjb25zdCByZW5kZXJIZWFkZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicsIHN0YXRlLm1haW4pO1xuICAgICAgICAvLyBzaWRlYmFyIG1lbnUsIGlmIHNpZGUgYmFyIGlzIG5vdCBkaXNwbGF5ZWRcbiAgICAgICAgLy8gc2l0ZSBuYW1lIHRpdGxlIDogVG9Eb2xpc3RcbiAgICAgICAgICAgIGNvbnN0IG1lbnVCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCBoZWFkZXIsICdtZW51Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgYnRuSW1nID0gY3JlYXRlRWxlbWVudCgnaW1nJywgbWVudUJ0bik7XG4gICAgICAgICAgICAgICAgYnRuSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgbWVudVN2Zyk7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZW1lbnQoJ2gxJywgaGVhZGVyLCAndGl0bGUnKTtcbiAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJUb2RvIExpc3RcIjtcbiAgICAgICAgcmV0dXJuIGhlYWRlcjtcbiAgICB9O1xuXG4gICAgLy8gUmVuZGVyIEVsZW1lbnRzIG9mIHNpZGViYXJcbiAgICBjb25zdCByZW5kZXJTaWRlQmFyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzaWRlQmFyID0gY3JlYXRlRWxlbWVudCgnYXNpZGUnLCBkb2N1bWVudC5ib2R5KTtcblxuICAgICAgICAgICAgLy8gRGl2IEhvbWVDb250YWluZXJcbiAgICAgICAgICAgIGNvbnN0IGhvbWVDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBzaWRlQmFyLCAnaG9tZS1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICAvLyBCdG4gOiBeIEhvbWVcbiAgICAgICAgICAgICAgICBjb25zdCBob21lQnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgaG9tZUNvbnRhaW5lciwgJ3RpdGxlJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIEltZ1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBob21lQXJyb3cgPSBjcmVhdGVFbGVtZW50KCdpbWcnLCBob21lQnRuLCAnYXJyb3cnKTtcbiAgICAgICAgICAgICAgICAgICAgaG9tZUFycm93LnNldEF0dHJpYnV0ZSgnc3JjJywgYXJyb3dTdmcpO1xuICAgICAgICAgICAgICAgICAgICAvLyBQYXJhXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhvbWVUZXh0ID0gY3JlYXRlRWxlbWVudCgncCcsIGhvbWVCdG4sICd0ZXh0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGhvbWVUZXh0LnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gICAgICAgICAgICAgICAgLy8gRGl2IDogRGVmYXVsdCBQcm9qZWN0c1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0cyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIGhvbWVDb250YWluZXIsICdkZWZhdWx0LXByb2plY3RzJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIExvb3AgdGhyb3cgZGlyZWN0b3J5LmNyZWF0ZVByb2plY3RzIFxuICAgICAgICAgICAgICAgICAgICAvLyBSZW5kZXIgZWFjaCBQcm9qZWN0IGFzIGEgYnRuXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkaXJlY3RvcnkuZGVmYXVsdFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBkaXJlY3RvcnkuZGVmYXVsdFByb2plY3RzW2ldLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBCdG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCBkZWZhdWx0UHJvamVjdHMsIFtcInByb2plY3RcIiwgcHJvamVjdE5hbWVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWcgPSBjcmVhdGVFbGVtZW50KCdpbWcnLCBwcm9qZWN0QnRuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihwcm9qZWN0TmFtZSA9PT0gJ2luYm94Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBpbmJveFN2Zyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYocHJvamVjdE5hbWUgPT09ICd0b2RheScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgdG9kYXlTdmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHByb2plY3ROYW1lID09PSAndXBjb21pbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHVwY29taW5nU3ZnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGFyYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBjcmVhdGVFbGVtZW50KCdwJywgcHJvamVjdEJ0bik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lLnNsaWNlKDAsMSkudG9VcHBlckNhc2UoKSArIHByb2plY3ROYW1lLnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBEaXYgUHJvamVjdHNcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywgc2lkZUJhciwgJ3Byb2plY3QtY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgLy8gQnRuIDogXiBwcm9qZWN0XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdEJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHByb2plY3RzQ29udGFpbmVyLCAndGl0bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gSW1nXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RBcnJvdyA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsIHByb2plY3RCdG4sICdhcnJvdycpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0QXJyb3cuc2V0QXR0cmlidXRlKCdzcmMnLCBhcnJvd1N2Zyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFBhcmFcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFRleHQgPSBjcmVhdGVFbGVtZW50KCdwJywgcHJvamVjdEJ0biwgJ3RleHQnKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRleHQudGV4dENvbnRlbnQgPSBcIlByb2plY3RcIjtcbiAgICAgICAgICAgICAgICAvLyBEaXYgOiBDcmVhdGVkIFByb2plY3RzXG4gICAgICAgICAgICAgICAgY29uc3QgY3JlYXRlZFByb2plY3RzID0gY3JlYXRlRWxlbWVudCgnZGl2JywgcHJvamVjdHNDb250YWluZXIsICdjcmVhdGVkLXByb2plY3RzJylcblxuICAgICAgICAgICAgICAgICAgICAvLyByZW5kZXIgY3JlYXRlZCBwcm9qZWN0cyBpbiBkaXJlY3RvcnlcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGRpcmVjdG9yeS5jcmVhdGVkUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IGRpcmVjdG9yeS5jcmVhdGVkUHJvamVjdHNbaV0ubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpdiA6IGRpdlByb2plY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpdlByb2plY3QgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBjcmVhdGVkUHJvamVjdHMsICdwcm9qZWN0LWRpdicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQnRuIDogUHJvamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCBkaXZQcm9qZWN0LCBbXCJwcm9qZWN0XCIsIHByb2plY3ROYW1lXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBhcmFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvalRleHQgPSBjcmVhdGVFbGVtZW50KCdwJywgcHJvamVjdEJ0bik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2pUZXh0LnRleHRDb250ZW50ID0gcHJvamVjdE5hbWUuc2xpY2UoMCwxKS50b1VwcGVyQ2FzZSgpICsgcHJvamVjdE5hbWUuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQnRuIDogRWRpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCBkaXZQcm9qZWN0LCAnZWRpdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0ltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlZGl0SW1nID0gY3JlYXRlRWxlbWVudCgnaW1nJywgZWRpdEJ0bik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBlZGl0U3ZnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBCdG4gOiBEZWxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCBkaXZQcm9qZWN0LCAnZGVsZXRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWxldGVJbWcgPSBjcmVhdGVFbGVtZW50KCdpbWcnLCBkZWxldGVCdG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBkZWxldGVTdmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gUmVuZGVyIENyZWF0ZSBOZXcgUHJvamVjdCBGb3JtXG4gICAgICAgICAgICAgICAgY29uc3QgYWRkUHJvamVjdHNDb250YWluZXIgPSBhZGRQcm9qZWN0RWxlbWVudChwcm9qZWN0c0NvbnRhaW5lcik7XG4gICAgICAgIHJldHVybiBzaWRlQmFyO1xuICAgIH07XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0RWxlbWVudCA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIC8vIERpdiA6IGNyZWF0ZVByb2plY3RDb250YWluZXJcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdHNDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBwcm9qZWN0LCAnYWRkLXByb2plY3QtY29udGFpbmVyJyk7XG4gICAgICAgICAgICAvLyBEaXYgOiBUaXRsZS1Db250YWluZXJcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgYWRkUHJvamVjdHNDb250YWluZXIsICdhZGQtcHJvamVjdCcpO1xuICAgICAgICAgICAgICAgIC8vIEJ0biA6IGFkZFByb2plY3RCdG5cbiAgICAgICAgICAgICAgICBjb25zdCBhZGRQcm9qZWN0QnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgdGl0bGVDb250YWluZXIpO1xuICAgICAgICAgICAgICAgICAgICAvLyBJbWcgOiBQbHVzIGluIENpcmNsZVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWcgPSBjcmVhdGVFbGVtZW50KCdpbWcnLCBhZGRQcm9qZWN0QnRuKTtcbiAgICAgICAgICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgY2lybGNlUGx1c1N2Zyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFBhcmEgOiBBZGQgUHJvamVjdFxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCBhZGRQcm9qZWN0QnRuKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnO1xuICAgICAgICByZXR1cm4gYWRkUHJvamVjdHNDb250YWluZXI7ICAgICAgICBcbiAgICB9O1xuXG4gICAgY29uc3QgcmVuZGVySW5wdXRBZGRQcm9qZWN0ID0gKHBhcmVudCkgPT4ge1xuICAgICAgICAgLy8gRGl2IDogSW5wdXQgQ29udGFpbmVyXG4gICAgICAgIGNvbnN0IGlucHV0Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgcGFyZW50LCAnaW5wdXQtY29udGFpbmVyJyk7XG4gICAgICAgICAgICAvLyBJbnB1dCBcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCBpbnB1dENvbnRhaW5lcik7XG4gICAgICAgICAgICAvLyBEaXYgOiBCdG4gQ29udGFpbmVyXG4gICAgICAgICAgICBjb25zdCBidG5Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBpbnB1dENvbnRhaW5lciwgJ2J1dHRvbnMnKTtcbiAgICAgICAgICAgICAgICAvLyBCdG4gOiBBZGRcbiAgICAgICAgICAgICAgICBjb25zdCBhZGRCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCBidG5Db250YWluZXIsICdhZGQnKTtcbiAgICAgICAgICAgICAgICBhZGRCdG4udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuICAgICAgICAgICAgICAgIC8vIEJ0biA6IENhbmNlbCBcbiAgICAgICAgICAgICAgICBjb25zdCBjYW5jbGVCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCBidG5Db250YWluZXIsICdjYW5jZWwnKTtcbiAgICAgICAgICAgICAgICBjYW5jbGVCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgICAgICByZXR1cm4gaW5wdXRDb250YWluZXI7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbmRlckNvbnRlbnQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBzdGF0ZS5tYWluLCAnY29udGVudCcpO1xuICAgICAgICAvLyB0YXNrXG4gICAgICAgIHJlbmRlclRhc2tzKGNvbnRlbnQpO1xuICAgICAgICBcbiAgICAgICAgLy9BZGQgVGFza1xuICAgICAgICByZW5kZXJBZGRUYXNrKGNvbnRlbnQpO1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVuZGVyVGFza3MgPSAoY29udGVudCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZGlyZWN0b3J5LmN1cnJlbnRQcm9qZWN0O1xuXG4gICAgICAgIC8vIERpdiBUYXNrIENvbnRhaW5lclxuICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgY29udGVudCwgJ3Rhc2stY29udGFpbmVyJyk7XG4gICAgICAgIC8vIC8vIExpc3Qgb2YgVGFza3NcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3QudGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJlbmRlclRhc2socHJvamVjdC50YXNrc1tpXSwgdGFza0NvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJUYXNrID0gKHRhc2tPYmplY3QsIHRhc2tDb250YWluZXIpID0+IHtcbiAgICAgICAgLy8gRGl2IDogVGFza3NcbiAgICAgICAgY29uc3QgdGFza0RpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHRhc2tDb250YWluZXIsICd0YXNrJyk7XG4gICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCh0YXNrT2JqZWN0LnByaW9yaXR5ICsgJy10YXNrJyk7XG4gICAgICAgICAgICAvLyBEaXYgOiBDb250ZW50XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgdGFza0RpdiwgJ3Rhc2stY29udGVudCcpO1xuICAgICAgICAgICAgICAgIC8vIERpdiA6IExlZnQgU2lkZVxuICAgICAgICAgICAgICAgIGNvbnN0IGxlZnREaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBjb250ZW50LCAnbGVmdC1zaWRlJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIElucHV0IDogQ2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hlY2tCb3ggPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIGxlZnREaXYsICdjaGVja2JveCcpO1xuICAgICAgICAgICAgICAgICAgICBjaGVja0JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gUGFyYSA6IFRpdGxlXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmEgPSBjcmVhdGVFbGVtZW50KCdwJywgbGVmdERpdiwgJ3RpdGxlJyk7XG4gICAgICAgICAgICAgICAgICAgIHBhcmEudGV4dENvbnRlbnQgPSB0YXNrT2JqZWN0LnRpdGxlO1xuICAgICAgICAgICAgICAgIC8vIERpdiA6IFJpZ2h0IFNpZGVcbiAgICAgICAgICAgICAgICBjb25zdCByaWdodERpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIGNvbnRlbnQsICdyaWdodC1zaWRlJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIEJ0biA6IERldGFpbHNcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGV0YWlsc0J0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHJpZ2h0RGl2LCAnZGV0YWlscycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGFyYVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGV0YWlsc1BhcmEgPSBjcmVhdGVFbGVtZW50KCdwJywgZGV0YWlsc0J0bik7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxzUGFyYS50ZXh0Q29udGVudCA9IFwiRGV0YWlsc1wiO1xuICAgICAgICAgICAgICAgICAgICAvLyBQYXJhIDogRHVlIERhdGVcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZHVlRGF0ZVBhcmEgPSBjcmVhdGVFbGVtZW50KCdwJywgcmlnaHREaXYsICdkdWUtZGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlUGFyYS50ZXh0Q29udGVudCA9IHRhc2tPYmplY3QuZHVlRGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQnRuIDogRWRpdCBCdG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWRpdEJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHJpZ2h0RGl2LCAnZWRpdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSW1nIDogRWRpdFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWRpdEltZyA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsIGVkaXRCdG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWRpdEltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGVkaXRTdmcpO1xuICAgICAgICAgICAgICAgICAgICAvLyBCdG4gOiBEZWxldGUgQnRuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHJpZ2h0RGl2LCAnZGVsZXRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJbWcgOiBEZWxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUltZyA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsIGRlbGV0ZUJ0bik7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBkZWxldGVTdmcpO1xuXG4gICAgICAgIHJldHVybiB0YXNrO1xuICAgIH07XG5cbiAgICBjb25zdCByZW5kZXJBZGRUYXNrID0gKGNvbnRlbnQpID0+IHtcbiAgICAgICAgLy8gRGl2IFxuICAgICAgICBjb25zdCBkaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBjb250ZW50LCAnYWRkLXRhc2stY29udGFpbmVyJyk7XG4gICAgICAgICAgICAvLyBEaXYgOiBBZGQgVGFza1xuICAgICAgICAgICAgY29uc3QgYWRkVGFza0RpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIGRpdiwgJ2FkZC10YXNrLWJ0bicpO1xuICAgICAgICAgICAgICAgIC8vIEltZyA6IGNpcmNsZVBsdXNcbiAgICAgICAgICAgICAgICBjb25zdCBjaXJjbGVQbHVzSW1nID0gY3JlYXRlRWxlbWVudCgnaW1nJywgYWRkVGFza0Rpdik7XG4gICAgICAgICAgICAgICAgY2lyY2xlUGx1c0ltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGNpcmxjZVBsdXNTdmcpO1xuICAgICAgICAgICAgICAgIC8vIFAgOiBBZGQgVGFza1xuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBjcmVhdGVFbGVtZW50KCdwJywgYWRkVGFza0RpdiwgJ3RleHQnKTtcbiAgICAgICAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuICAgIH07XG5cbiAgICBjb25zdCByZW5kZXJBZGRUYXNrSW5wdXQgPSAocGFyZW50KSA9PiB7XG4gICAgICAgIC8vIERpdiBcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgcGFyZW50LCAnaW5wdXQtY29udGFpbmVyJyk7XG4gICAgICAgICAgICAvLyBJbnB1dCA6IFRpdGxlXG4gICAgICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCBjb250YWluZXIsICd0aXRsZScpO1xuICAgICAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1RpdGxlJyk7XG4gICAgICAgICAgICAvLyBJbnB1dCA6IERldGFpbHNcbiAgICAgICAgICAgIGNvbnN0IGRldGFpbFRleHRBcmVhID0gY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnLCBjb250YWluZXIpO1xuICAgICAgICAgICAgZGV0YWlsVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdEZXRhaWxzJyk7XG4gICAgICAgICAgICAvLyBEaXYgOiBEYXRlLVByb2plY3RcbiAgICAgICAgICAgIGNvbnN0IGRhdGVQcm9qZWN0RGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgY29udGFpbmVyLCAnZGF0ZS1wcm9qZWN0Jyk7XG4gICAgICAgICAgICAgICAgLy8gRGl2IDogRHVlIERhdGVcbiAgICAgICAgICAgICAgICBjb25zdCBkdWVEYXRlRGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgZGF0ZVByb2plY3REaXYsICdkdWUtZGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICAvLyBQXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGR1ZURhdGVQYXJhID0gY3JlYXRlRWxlbWVudCgncCcsIGR1ZURhdGVEaXYpO1xuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlUGFyYS50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZTonO1xuICAgICAgICAgICAgICAgICAgICAvLyBJbnB1dCBUeXBlIERhdGVcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCBkdWVEYXRlRGl2KTtcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgICAgICAgICAgICAgLy8gRGl2IDogUHJvamVjdFxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3REaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBkYXRlUHJvamVjdERpdiwgJ3Byb2plY3QnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gUCA6IFByb2plY3RcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFBhcmEgPSBjcmVhdGVFbGVtZW50KCdwJywgcHJvamVjdERpdik7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RQYXJhLnRleHRDb250ZW50ID0gJ1Byb2plY3Q6JztcbiAgICAgICAgICAgICAgICAgICAgLy8gU2VsZWN0b3IgOiBkaXJlY3RvcnkgbGlzdCBvZiBjcmVhdGVkcHJvamVjdHNcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFNlbGVjdG9yID0gY3JlYXRlRWxlbWVudCgnc2VsZWN0JywgcHJvamVjdERpdik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUZW1wXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJQcm9qZWN0T3B0aW9ucyhwcm9qZWN0U2VsZWN0b3IpO1xuICAgICAgICAgICAgLy8gRGl2IDogUHJpb3JpdHktQWRkLUNhbmNlbFxuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlBZGRDYW5jZWxEaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBjb250YWluZXIsICdwcmlvcml0eS1hZGQtY2FuY2VsJyk7XG4gICAgICAgICAgICAgICAgLy8gRGl2IDogUHJpb3JpdHlcbiAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eURpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHByaW9yaXR5QWRkQ2FuY2VsRGl2LCAncHJpb3JpdGllcycpO1xuICAgICAgICAgICAgICAgICAgICAvLyBEaXYgOiBQcmlvcml0eSBUZXh0IGNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eVBhcmFEaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBwcmlvcml0eURpdiwgJ3RleHQtZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQIDogUHJpb3J0aXR5OlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlQYXJhID0gY3JlYXRlRWxlbWVudCgncCcsIHByaW9yaXR5UGFyYURpdik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eVBhcmEudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBcIlxuICAgICAgICAgICAgICAgICAgICAvLyBEaXYgOiBMb3dcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbG93UHJpb3JpdHlEaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBwcmlvcml0eURpdiwgWydsb3cnLCAncHJpb3JpdHknLCAnYWN0aXZlLWxvdyddKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFAgOiBMb3dcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvd1BhcmEgPSBjcmVhdGVFbGVtZW50KCdwJywgbG93UHJpb3JpdHlEaXYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG93UGFyYS50ZXh0Q29udGVudCA9ICdMb3cnO1xuICAgICAgICAgICAgICAgICAgICAvLyBEaXYgOiBNZWRpdW1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVkaXVtUHJpb3JpdHlEaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBwcmlvcml0eURpdiwgWydtZWRpdW0nLCAncHJpb3JpdHknXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQIDogTWVkaXVtXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtZWRpdW1QYXJhID0gY3JlYXRlRWxlbWVudCgncCcsIG1lZGl1bVByaW9yaXR5RGl2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lZGl1bVBhcmEudGV4dENvbnRlbnQgPSAnTWVkaXVtJztcbiAgICAgICAgICAgICAgICAgICAgLy8gRGl2IDogSGlnaFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBoaWdoUHJpb3JpdHlEaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBwcmlvcml0eURpdiwgWydoaWdoJywgJ3ByaW9yaXR5J10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUCA6IEhpZ2hcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhpZ2hQYXJhID0gY3JlYXRlRWxlbWVudCgncCcsIGhpZ2hQcmlvcml0eURpdik7XG4gICAgICAgICAgICAgICAgICAgICAgICBoaWdoUGFyYS50ZXh0Q29udGVudCA9ICdIaWdoJztcbiAgICAgICAgICAgICAgICAvLyBEaXYgOiBBZGQtQ2FuY2VsXG4gICAgICAgICAgICAgICAgY29uc3QgYWRkQ2FuY2VsRGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgcHJpb3JpdHlBZGRDYW5jZWxEaXYsICdhZGQtY2FuY2VsJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIERpdiA6IEFkZFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhZGREaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBhZGRDYW5jZWxEaXYsICdhZGQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFAgOiBBZGRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkZFBhcmEgPSBjcmVhdGVFbGVtZW50KCdwJywgYWRkRGl2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFBhcmEudGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuICAgICAgICAgICAgICAgICAgICAvLyBEaXYgOiBDYW5jZWxcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FuY2VsRGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgYWRkQ2FuY2VsRGl2LCAnY2FuY2VsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQIDogQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYW5jZWxQYXJhID0gY3JlYXRlRWxlbWVudCgncCcsIGNhbmNlbERpdik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxQYXJhLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICB9O1xuXG4gICAgLy9cbiAgICBjb25zdCByZW5kZXJQcm9qZWN0T3B0aW9ucyA9IChzZWxlY3RvcikgPT4ge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZGlyZWN0b3J5LmNyZWF0ZWRQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGRpcmVjdG9yeS5jcmVhdGVkUHJvamVjdHNbaV0ubmFtZTtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHNlbGVjdG9yKTtcbiAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IG5hbWUuc2xpY2UoMCwxKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSgxKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVuZGVyIEVsZW1lbnQgb2YgRm9vdGVyXG4gICAgY29uc3QgcmVuZGVyRm9vdGVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBmb290ZXIgPSBjcmVhdGVFbGVtZW50KCdmb290ZXInLCBzdGF0ZS5tYWluKTtcbiAgICAgICAgICAgIC8vIFBhcmEgOiBDb3B5IFJpZ2h0XG4gICAgICAgICAgICBjb25zdCBjb3B5UmlnaHRUZXh0ID0gY3JlYXRlRWxlbWVudCgncCcsIGZvb3RlciwgJ3RleHQnKTtcbiAgICAgICAgICAgIGNvcHlSaWdodFRleHQuaW5uZXJIVE1MID0gXCImIzE2OTsgSmFyJ1plbm8gSmFycmV0dFwiO1xuICAgICAgICAgICAgLy8gQSA6IEdpdGh1YiBsaW5rXG4gICAgICAgICAgICAgICAgY29uc3QgZ2l0aHViTGluayA9IGNyZWF0ZUVsZW1lbnQoJ2EnLCBmb290ZXIsICdnaXRodWItbGluaycpO1xuICAgICAgICAgICAgICAgIGdpdGh1Ykxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9CYW50Y2hlZScpO1xuICAgICAgICAgICAgICAgIGdpdGh1Ykxpbmsuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG4gICAgICAgICAgICAgICAgLy8gSW1nIDogR2l0aHViXG4gICAgICAgICAgICAgICAgY29uc3QgZ2l0aHViSW1nID0gY3JlYXRlRWxlbWVudCgnaW1nJywgZ2l0aHViTGluayk7XG4gICAgICAgICAgICAgICAgZ2l0aHViSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgZ2l0aHViU3ZnKTtcbiAgICAgICAgcmV0dXJuIGZvb3RlcjtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgc3RhdGUsIFxuICAgICAgICB7cmVuZGVyfSxcbiAgICAgICAge3VwZGF0ZX0sXG4gICAgKTtcbn07IiwiLy8gUHJpb3JpdHkgOlxuICAgIC8vIDEuIFN0cmluZyA+IFwiTG93XCJcbiAgICAvLyAyLiBTdHJpbmcgPiBcIk1lZGl1bVwiXG4gICAgLy8gMy4gU3RyaW5nID4gXCJIaWdoXCJcblxuLy8gSW4gPiBPdXQgOiBTdHJpbmcgU3RyaW5nIFByaW9yaXR5IERhdGUgUHJvamVjdCA+IE9iamVjdFxuZXhwb3J0IGNvbnN0IHRhc2sgPSAodGl0bGUsIGRldGFpbHMsIHByaW9yaXR5LCBkdWVEYXRlLCBwcm9qZWN0TmFtZSkgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGV0YWlscyxcbiAgICAgICAgcHJpb3JpdHksXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHByb2plY3ROYW1lLFxuICAgICAgICBpZDogbnVsbCxcbiAgICB9XG5cbiAgICAvLyBDUlVEIDogQ3JlYXRlLCBSZWFkLCBVcGRhdGUsIERlbGV0ZVxuXG4gICAgY29uc3QgZ2VuUmFuZG9tSWQgPSAoKSA9PiBNYXRoLnJhbmRvbSgpO1xuXG4gICAgY29uc3QgZ2V0ID0gKHByb3BlcnR5KSA9PiB7XG4gICAgICAgIGlmKHN0YXRlLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlW3Byb3BlcnR5XSBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFRoZSBwcm9wZXJ0eSAke3Byb3BlcnR5fSBkb2VzIG5vdCBleGlzdGApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHNldCA9IChwcm9wZXJ0eSwgdmFsdWUpID0+IHtcbiAgICAgICAgaWYoc3RhdGUuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgICAgICBzdGF0ZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFRoZSBwcm9wZXJ0eSAke3Byb3BlcnR5fSBkb2VzIG5vdCBleGlzdGApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIENoYW5nZSBQcm9qZWN0XG4gICAgLy8gRGVsZXRlIFRhc2tcblxuICAgIHN0YXRlLmlkID0gZ2VuUmFuZG9tSWQoKTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgICAgICBzdGF0ZSxcbiAgICAgICAge2dldH0sXG4gICAgICAgIHtzZXR9XG4gICAgKTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7dGFza30gZnJvbSAnLi9zY3JpcHRzL3Rhc2snO1xuaW1wb3J0IHtwYWdlfSBmcm9tICcuL3NjcmlwdHMvcmVuZGVyUGFnZSc7XG5pbXBvcnQgJy4vc3R5bGVzL2luZGV4LmNzcyc7XG5cbmNvbnN0IHQgPSB0YXNrKCdXYXNoIENsb3RoZXMnLCAnUHV0IGNsb3RoZXMgaW4gdGhlIHdhc2hpbmcgbWFjaGluZScsICdoaWdoJywgJ25vdycsICdDaG91cnMnKTtcblxuY29uc3QgcCA9IHBhZ2UoKTtcbnAucmVuZGVyKCk7XG5cbi8vIFN0YXRlXG4gICAgLy8gZGlyZWN0b3J5LmpzIG1vZHVsZVxuICAgICAgICAvLyBwcm9qZWN0LmpzIGZhY3RvcnlcbiAgICAgICAgICAgIC8vIHRhc2suanMgZmFjdG9yeVxuLy8gRE9NIFJlbmRlcmluZ1xuICAgIC8vIFJlbmRlciBTdGF0aWMgcGFnZSwgSW5jbHVkaW5nIFNpZGViYXIgbWVudVxuICAgICAgICAvLyBEaXYjQ29udGVudCBEeW5hbWljbHkgcmVuZGVyZWQsIGNoYW5nZXMgd2hlbiBjbGlja2luZyBvbiBwcm9qZWN0IGluIHNpZGViYXIgbWVudSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==