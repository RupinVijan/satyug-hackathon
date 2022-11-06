/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/dhyana";
exports.ids = ["pages/dhyana"];
exports.modules = {

/***/ "./assets/cssModules/dhyana.module.css":
/*!*********************************************!*\
  !*** ./assets/cssModules/dhyana.module.css ***!
  \*********************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"dhyana_container__VxKd5\",\n\t\"vidStyles\": \"dhyana_vidStyles__WDRS2\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvY3NzTW9kdWxlcy9kaHlhbmEubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2F0eXVnLW5leHQvLi9hc3NldHMvY3NzTW9kdWxlcy9kaHlhbmEubW9kdWxlLmNzcz82OGFmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcImRoeWFuYV9jb250YWluZXJfX1Z4S2Q1XCIsXG5cdFwidmlkU3R5bGVzXCI6IFwiZGh5YW5hX3ZpZFN0eWxlc19fV0RSUzJcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/cssModules/dhyana.module.css\n");

/***/ }),

/***/ "./pages/dhyana.js":
/*!*************************!*\
  !*** ./pages/dhyana.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_cssModules_dhyana_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/cssModules/dhyana.module.css */ \"./assets/cssModules/dhyana.module.css\");\n/* harmony import */ var _assets_cssModules_dhyana_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_cssModules_dhyana_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _react_hook_window_size__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-hook/window-size */ \"@react-hook/window-size\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_react_hook_window_size__WEBPACK_IMPORTED_MODULE_3__]);\n_react_hook_window_size__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst Dhyana = ()=>{\n    const navigate = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().push;\n    // function getWindowDimensions() {\n    //     const { innerWidth: width, innerHeight: height } = window;\n    //     return {\n    //       width,\n    //       height\n    //     };\n    // }\n    // let screenWidth = getWindowDimensions().width;\n    let screenWidth = (0,_react_hook_window_size__WEBPACK_IMPORTED_MODULE_3__.useWindowWidth)();\n    const v = screenWidth > 600 ? \"https://res.cloudinary.com/dde6glimb/video/upload/v1665916476/Dhyana_Video_1_gybggg.mp4\" : \"https://res.cloudinary.com/dde6glimb/video/upload/v1666419487/M-2_-_Compressed_with_FlexClip_ud6vfg.mp4\";\n    // const v =\"https://res.cloudinary.com/dde6glimb/video/upload/v1665916476/Dhyana_Video_1_gybggg.mp4\"\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_assets_cssModules_dhyana_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                    src: v,\n                    playsInline: true,\n                    className: (_assets_cssModules_dhyana_module_css__WEBPACK_IMPORTED_MODULE_4___default().vidStyles),\n                    onEnded: ()=>navigate(\"/dhyanaToken\"),\n                    autoPlay: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\avira\\\\OneDrive\\\\Desktop\\\\cs\\\\gdsc\\\\satyug-hackathon\\\\pages\\\\dhyana.js\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\avira\\\\OneDrive\\\\Desktop\\\\cs\\\\gdsc\\\\satyug-hackathon\\\\pages\\\\dhyana.js\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"SkipButtonUniversal\",\n                onClick: ()=>navigate(\"/dhyanaToken\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"SkipButtonUniversalContainer\",\n                    children: [\n                        \"Skip\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            width: \"16\",\n                            height: \"16\",\n                            fill: \"currentColor\",\n                            className: \"bi bi-skip-forward\",\n                            viewBox: \"0 0 16 16\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                d: \"M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8.752l-6.267 3.636c-.52.302-1.233-.043-1.233-.696v-2.94l-6.267 3.636C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696L7.5 7.248v-2.94c0-.653.713-.998 1.233-.696L15 7.248V4a.5.5 0 0 1 .5-.5zM1 4.633v6.734L6.804 8 1 4.633zm7.5 0v6.734L14.304 8 8.5 4.633z\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\avira\\\\OneDrive\\\\Desktop\\\\cs\\\\gdsc\\\\satyug-hackathon\\\\pages\\\\dhyana.js\",\n                                lineNumber: 33,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\avira\\\\OneDrive\\\\Desktop\\\\cs\\\\gdsc\\\\satyug-hackathon\\\\pages\\\\dhyana.js\",\n                            lineNumber: 32,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\avira\\\\OneDrive\\\\Desktop\\\\cs\\\\gdsc\\\\satyug-hackathon\\\\pages\\\\dhyana.js\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\avira\\\\OneDrive\\\\Desktop\\\\cs\\\\gdsc\\\\satyug-hackathon\\\\pages\\\\dhyana.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\avira\\\\OneDrive\\\\Desktop\\\\cs\\\\gdsc\\\\satyug-hackathon\\\\pages\\\\dhyana.js\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dhyana);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kaHlhbmEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTREO0FBQ25DO0FBQ2U7QUFHTjtBQUVsQyxNQUFNSSxNQUFNLEdBQUcsSUFBTTtJQUNqQixNQUFNQyxRQUFRLEdBQUdILHNEQUFTLEVBQUUsQ0FBQ0ksSUFBSTtJQUNqQyxtQ0FBbUM7SUFDbkMsaUVBQWlFO0lBQ2pFLGVBQWU7SUFDZixlQUFlO0lBQ2YsZUFBZTtJQUNmLFNBQVM7SUFDVCxJQUFJO0lBQ0osaURBQWlEO0lBQ2pELElBQUlDLFdBQVcsR0FBR0osdUVBQWMsRUFBRTtJQUNsQyxNQUFNSyxDQUFDLEdBQUdELFdBQVcsR0FBQyxHQUFHLEdBQUMseUZBQXlGLEdBQUMseUdBQXlHO0lBQzdOLHFHQUFxRztJQUlyRyxxQkFDSSw4REFBQ0UsS0FBRztRQUFDQyxTQUFTLEVBQUMsS0FBSzs7MEJBQ2hCLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUVWLHVGQUFpQjswQkFDN0IsNEVBQUNZLE9BQUs7b0JBQUNDLEdBQUcsRUFBRUwsQ0FBQztvQkFBRU0sV0FBVztvQkFBQ0osU0FBUyxFQUFFVix1RkFBaUI7b0JBQUVnQixPQUFPLEVBQUUsSUFBSVgsUUFBUSxDQUFDLGNBQWMsQ0FBQztvQkFBRVksUUFBUTs7Ozs7NkJBQUU7Ozs7O3lCQUN4RzswQkFDTiw4REFBQ0MsUUFBTTtnQkFBQ1IsU0FBUyxFQUFDLHFCQUFxQjtnQkFBQ1MsT0FBTyxFQUFFLElBQUlkLFFBQVEsQ0FBQyxjQUFjLENBQUM7MEJBQ3pFLDRFQUFDSSxLQUFHO29CQUFDQyxTQUFTLEVBQUMsOEJBQThCOzt3QkFBQyxNQUU5QztzQ0FBQSw4REFBQ1UsS0FBRzs0QkFBQ0MsS0FBSyxFQUFDLDRCQUE0Qjs0QkFBQ0MsS0FBSyxFQUFDLElBQUk7NEJBQUNDLE1BQU0sRUFBQyxJQUFJOzRCQUFDQyxJQUFJLEVBQUMsY0FBYzs0QkFBQ2QsU0FBUyxFQUFDLG9CQUFvQjs0QkFBQ2UsT0FBTyxFQUFDLFdBQVc7c0NBQ2pJLDRFQUFDQyxNQUFJO2dDQUFDQyxDQUFDLEVBQUMsc1RBQXNUOzs7Ozt5Q0FBRTs7Ozs7cUNBQzlUOzs7Ozs7NkJBQ0E7Ozs7O3lCQUNEOzs7Ozs7aUJBQ1AsQ0FDVDtBQUNMLENBQUM7QUFFRCxpRUFBZXZCLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYXR5dWctbmV4dC8uL3BhZ2VzL2RoeWFuYS5qcz9jNTM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc2VzIGZyb20gXCIuLi9hc3NldHMvY3NzTW9kdWxlcy9kaHlhbmEubW9kdWxlLmNzc1wiXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHtcclxuICAgIHVzZVdpbmRvd1dpZHRoLFxyXG4gIH0gZnJvbSAnQHJlYWN0LWhvb2svd2luZG93LXNpemUnXHJcblxyXG5jb25zdCBEaHlhbmEgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZVJvdXRlcigpLnB1c2g7XHJcbiAgICAvLyBmdW5jdGlvbiBnZXRXaW5kb3dEaW1lbnNpb25zKCkge1xyXG4gICAgLy8gICAgIGNvbnN0IHsgaW5uZXJXaWR0aDogd2lkdGgsIGlubmVySGVpZ2h0OiBoZWlnaHQgfSA9IHdpbmRvdztcclxuICAgIC8vICAgICByZXR1cm4ge1xyXG4gICAgLy8gICAgICAgd2lkdGgsXHJcbiAgICAvLyAgICAgICBoZWlnaHRcclxuICAgIC8vICAgICB9O1xyXG4gICAgLy8gfVxyXG4gICAgLy8gbGV0IHNjcmVlbldpZHRoID0gZ2V0V2luZG93RGltZW5zaW9ucygpLndpZHRoO1xyXG4gICAgbGV0IHNjcmVlbldpZHRoID0gdXNlV2luZG93V2lkdGgoKTtcclxuICAgIGNvbnN0IHYgPSBzY3JlZW5XaWR0aD42MDA/XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZGU2Z2xpbWIvdmlkZW8vdXBsb2FkL3YxNjY1OTE2NDc2L0RoeWFuYV9WaWRlb18xX2d5YmdnZy5tcDRcIjpcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RkZTZnbGltYi92aWRlby91cGxvYWQvdjE2NjY0MTk0ODcvTS0yXy1fQ29tcHJlc3NlZF93aXRoX0ZsZXhDbGlwX3VkNnZmZy5tcDRcIjtcclxuICAgIC8vIGNvbnN0IHYgPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGRlNmdsaW1iL3ZpZGVvL3VwbG9hZC92MTY2NTkxNjQ3Ni9EaHlhbmFfVmlkZW9fMV9neWJnZ2cubXA0XCJcclxuXHJcbiAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfSA+XHJcbiAgICAgICAgICAgICAgICA8dmlkZW8gc3JjPXt2fSBwbGF5c0lubGluZSBjbGFzc05hbWU9e2NsYXNzZXMudmlkU3R5bGVzfSBvbkVuZGVkPXsoKT0+bmF2aWdhdGUoXCIvZGh5YW5hVG9rZW5cIil9IGF1dG9QbGF5Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiU2tpcEJ1dHRvblVuaXZlcnNhbFwiIG9uQ2xpY2s9eygpPT5uYXZpZ2F0ZShcIi9kaHlhbmFUb2tlblwiKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNraXBCdXR0b25Vbml2ZXJzYWxDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIFNraXBcclxuICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzc05hbWU9XCJiaSBiaS1za2lwLWZvcndhcmRcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNS41IDMuNWEuNS41IDAgMCAxIC41LjV2OGEuNS41IDAgMCAxLTEgMFY4Ljc1MmwtNi4yNjcgMy42MzZjLS41Mi4zMDItMS4yMzMtLjA0My0xLjIzMy0uNjk2di0yLjk0bC02LjI2NyAzLjYzNkMuNzEzIDEyLjY5IDAgMTIuMzQ1IDAgMTEuNjkyVjQuMzA4YzAtLjY1My43MTMtLjk5OCAxLjIzMy0uNjk2TDcuNSA3LjI0OHYtMi45NGMwLS42NTMuNzEzLS45OTggMS4yMzMtLjY5NkwxNSA3LjI0OFY0YS41LjUgMCAwIDEgLjUtLjV6TTEgNC42MzN2Ni43MzRMNi44MDQgOCAxIDQuNjMzem03LjUgMHY2LjczNEwxNC4zMDQgOCA4LjUgNC42MzN6XCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERoeWFuYVxyXG4iXSwibmFtZXMiOlsiY2xhc3NlcyIsIlJlYWN0IiwidXNlUm91dGVyIiwidXNlV2luZG93V2lkdGgiLCJEaHlhbmEiLCJuYXZpZ2F0ZSIsInB1c2giLCJzY3JlZW5XaWR0aCIsInYiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ2aWRlbyIsInNyYyIsInBsYXlzSW5saW5lIiwidmlkU3R5bGVzIiwib25FbmRlZCIsImF1dG9QbGF5IiwiYnV0dG9uIiwib25DbGljayIsInN2ZyIsInhtbG5zIiwid2lkdGgiLCJoZWlnaHQiLCJmaWxsIiwidmlld0JveCIsInBhdGgiLCJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/dhyana.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@react-hook/window-size":
/*!******************************************!*\
  !*** external "@react-hook/window-size" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@react-hook/window-size");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/dhyana.js"));
module.exports = __webpack_exports__;

})();