/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Equipo.jsx":
/*!*******************************!*\
  !*** ./components/Equipo.jsx ***!
  \*******************************/
/***/ (function(module) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Home\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/Layout */ \"./components/layout/Layout.jsx\");\n/* harmony import */ var _components_Carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Carousel */ \"./components/Carousel.jsx\");\n/* harmony import */ var _components_Servicios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Servicios */ \"./components/Servicios.jsx\");\n/* harmony import */ var _components_Equipo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Equipo */ \"./components/Equipo.jsx\");\n/* harmony import */ var _components_Equipo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_Equipo__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Contactenos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Contactenos */ \"./components/Contactenos.jsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\nvar Home = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"carousel\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Carousel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    name: \"Carousel\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\greiv\\\\Documents\\\\GitHub\\\\listica\\\\pages\\\\index.js\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\greiv\\\\Documents\\\\GitHub\\\\listica\\\\pages\\\\index.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"Servicios\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Servicios__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\greiv\\\\Documents\\\\GitHub\\\\listica\\\\pages\\\\index.js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\greiv\\\\Documents\\\\GitHub\\\\listica\\\\pages\\\\index.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"Equipo\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_Equipo__WEBPACK_IMPORTED_MODULE_5___default()), {\n                    name: \"Equipo\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\greiv\\\\Documents\\\\GitHub\\\\listica\\\\pages\\\\index.js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\greiv\\\\Documents\\\\GitHub\\\\listica\\\\pages\\\\index.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"Contactenos\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Contactenos__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\greiv\\\\Documents\\\\GitHub\\\\listica\\\\pages\\\\index.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\greiv\\\\Documents\\\\GitHub\\\\listica\\\\pages\\\\index.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\greiv\\\\Documents\\\\GitHub\\\\listica\\\\pages\\\\index.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, _this);\n};\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUF5QjtBQUN1QjtBQUNIO0FBQ0U7QUFDTjtBQUNVO0FBRTVDLElBQU1NLElBQUksR0FBRyxXQUFNO0lBQ3hCLHFCQUNFLDhEQUFDTCxpRUFBTTs7MEJBQ0wsOERBQUNNLFNBQU87Z0JBQUNDLEVBQUUsRUFBQyxVQUFVOzBCQUNwQiw0RUFBQ04sNERBQVE7b0JBQUNPLElBQUksRUFBRSxVQUFVOzs7Ozt5QkFBRTs7Ozs7cUJBQ3BCOzBCQUVWLDhEQUFDRixTQUFPO2dCQUFDQyxFQUFFLEVBQUMsV0FBVzswQkFDckIsNEVBQUNMLDZEQUFTOzs7O3lCQUFFOzs7OztxQkFDSjswQkFFViw4REFBQ0ksU0FBTztnQkFBQ0MsRUFBRSxFQUFDLFFBQVE7MEJBQ2xCLDRFQUFDSiwyREFBTTtvQkFBQ0ssSUFBSSxFQUFDLFFBQVE7Ozs7O3lCQUFFOzs7OztxQkFDZjswQkFFViw4REFBQ0YsU0FBTztnQkFBQ0MsRUFBRSxFQUFDLGFBQWE7MEJBQ3ZCLDRFQUFDSCwrREFBVzs7Ozt5QkFBRTs7Ozs7cUJBQ047Ozs7OzthQUNILENBQ1Y7Q0FDRjtBQXBCWUMsS0FBQUEsSUFBSTtBQXNCakIsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0J1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJvdXNlbCdcclxuaW1wb3J0IFNlcnZpY2lvcyBmcm9tICcuLi9jb21wb25lbnRzL1NlcnZpY2lvcydcclxuaW1wb3J0IEVxdWlwbyBmcm9tICcuLi9jb21wb25lbnRzL0VxdWlwbydcclxuaW1wb3J0IENvbnRhY3Rlbm9zIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGFjdGVub3MnXHJcblxyXG5leHBvcnQgY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPHNlY3Rpb24gaWQ9J2Nhcm91c2VsJz5cclxuICAgICAgICA8Q2Fyb3VzZWwgbmFtZT0gJ0Nhcm91c2VsJy8+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgIDxzZWN0aW9uIGlkPSdTZXJ2aWNpb3MnPlxyXG4gICAgICAgIDxTZXJ2aWNpb3MvPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICA8c2VjdGlvbiBpZD0nRXF1aXBvJz5cclxuICAgICAgICA8RXF1aXBvIG5hbWU9J0VxdWlwbycvPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICA8c2VjdGlvbiBpZD0nQ29udGFjdGVub3MnPlxyXG4gICAgICAgIDxDb250YWN0ZW5vcy8+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZSJdLCJuYW1lcyI6WyJSZWFjdCIsIkxheW91dCIsIkNhcm91c2VsIiwiU2VydmljaW9zIiwiRXF1aXBvIiwiQ29udGFjdGVub3MiLCJIb21lIiwic2VjdGlvbiIsImlkIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});