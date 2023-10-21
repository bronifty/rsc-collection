"use strict";
(globalThis["webpackChunkrsc_example_1"] = globalThis["webpackChunkrsc_example_1"] || []).push([["client5"],{

/***/ 621:
/*!*********************************************!*\
  !*** ./src/components/animate-on-mount.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlashOnMount: () => (/* binding */ FlashOnMount)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ 893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 294);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ 804);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme */ 713);
"use client";




function FlashOnMount({ children, ...props }) {
    const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
    }, []);
    const animation = "timestamp-entry-animation";
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InlineStyle, { css: `
          @keyframes ${animation} {
            0% {
              opacity: 1;
              box-shadow: 0 0 8px rgba(255, 255, 255, 100);
              background-color: rgba(255, 255, 255, 100);
            }
            100% {
              opacity: 0.5;
              box-shadow: 0 0 8px rgba(255, 255, 255, 0);
              background-color: rgba(255, 255, 255, 0);
            }
          }
        ` }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common__WEBPACK_IMPORTED_MODULE_2__.Text, { as: "small", style: {
                    color: _theme__WEBPACK_IMPORTED_MODULE_3__.colorSets.server.color,
                    animationName: animation,
                    animationDuration: "700ms",
                    animationFillMode: "both",
                    animationPlayState: isMounted ? "running" : "paused",
                }, ...props, children: children })] }));
}
function InlineStyle({ css }) {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("style", { dangerouslySetInnerHTML: { __html: css } });
}


/***/ }),

/***/ 804:
/*!***********************************!*\
  !*** ./src/components/common.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Card: () => (/* binding */ Card),
/* harmony export */   Stack: () => (/* binding */ Stack),
/* harmony export */   Text: () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ 893);

function Text({ as: AsComponent = "div", children, color, fontWeight, style, }) {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AsComponent, { style: {
            ...style,
            lineHeight: "1.5",
            fontFamily: "sans-serif",
            color,
            fontWeight,
        }, children: children }));
}
function Card({ children, color, borderColor = "lightgrey", backgroundColor = "unset", borderStyle = "solid", }) {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
            padding: "16px",
            borderRadius: "8px",
            border: `2px ${borderStyle}`,
            color,
            borderColor,
            backgroundColor,
        }, children: children }));
}
function Stack({ children, spacing = "16px", direction = "column", }) {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
            display: "flex",
            flexDirection: direction,
            gap: spacing,
            alignItems: "stretch",
        }, children: children }));
}


/***/ }),

/***/ 713:
/*!*********************************!*\
  !*** ./src/components/theme.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   colorSets: () => (/* binding */ colorSets),
/* harmony export */   colors: () => (/* binding */ colors),
/* harmony export */   themeVariables: () => (/* binding */ themeVariables)
/* harmony export */ });
const themeVariables = {
    "--color-text-client": "#2b6374",
    "--color-border-client": "#a6dfec",
    "--color-bg-client": "#d3f5f8",
    "--color-text-server": "#80755c",
    "--color-border-server": "#f2d694",
    "--color-bg-server": "#fffadd",
    "--color-text-loading": "#989898",
    "--color-border-loading": "#cdcdcd",
    "--color-bg-loading": "#dedede",
};
const colors = {
    textServer: "var(--color-text-server)",
    borderServer: "var(--color-border-server)",
    bgServer: "var(--color-bg-server)",
    textClient: "var(--color-text-client)",
    borderClient: "var(--color-border-client)",
    bgClient: "var(--color-bg-client)",
    textLoading: "var(--color-text-loading)",
    borderLoading: "var(--color-border-loading)",
    bgLoading: "var(--color-bg-loading)",
};
const colorSets = {
    server: {
        color: colors.textServer,
        borderColor: colors.borderServer,
        backgroundColor: colors.bgServer,
    },
    client: {
        color: colors.textClient,
        borderColor: colors.borderClient,
        backgroundColor: colors.bgClient,
    },
    loading: {
        color: colors.textLoading,
        borderColor: colors.borderLoading,
        backgroundColor: colors.bgLoading,
    },
};


/***/ })

}]);
//# sourceMappingURL=client5.61f67a290c0903e4693a.js.map