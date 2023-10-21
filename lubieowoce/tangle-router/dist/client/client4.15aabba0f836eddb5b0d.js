"use strict";
(globalThis["webpackChunkrsc_example_1"] = globalThis["webpackChunkrsc_example_1"] || []).push([["client4"],{

/***/ 248:
/*!***************************************!*\
  !*** ./src/components/navigation.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FadeOnPendingNavigation: () => (/* binding */ FadeOnPendingNavigation),
/* harmony export */   RefreshButton: () => (/* binding */ RefreshButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ 893);
/* harmony import */ var _owoce_tangle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @owoce/tangle */ 404);
"use client";


const RefreshButton = () => {
    const { refresh, isNavigating } = (0,_owoce_tangle__WEBPACK_IMPORTED_MODULE_1__.useNavigationContext)();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", { onClick: () => {
            console.log("refreshing");
            refresh();
        }, children: ["Refresh", isNavigating ? " (loading...)" : null] }));
};
const FadeOnPendingNavigation = ({ children, }) => {
    const { isNavigating } = (0,_owoce_tangle__WEBPACK_IMPORTED_MODULE_1__.useNavigationContext)();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: isNavigating ? { opacity: "0.5" } : undefined, children: children }));
};


/***/ })

}]);
//# sourceMappingURL=client4.15aabba0f836eddb5b0d.js.map