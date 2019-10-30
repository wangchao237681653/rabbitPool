webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/componentLayout.js":
/*!***************************************!*\
  !*** ./components/componentLayout.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/leon/work/rabbitpool/components/componentLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ComponentLayout = function ComponentLayout(props) {
  var _props$leftStyle = props.leftStyle,
      leftStyle = _props$leftStyle === void 0 ? {} : _props$leftStyle,
      _props$rightStyle = props.rightStyle,
      rightStyle = _props$rightStyle === void 0 ? {} : _props$rightStyle;
  return __jsx("div", {
    className: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "left",
    style: leftStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx("div", {
    className: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.children), __jsx("div", {
    className: "right",
    style: rightStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "\n            *{\n              margin:0;\n              padding:0;\n            }\n            .wrap{\n              display:flex;\n              flex-direction:row;\n              margin-top:20px;\n            }\n            .center {\n              width:1440px;\n              text-align:center;\n            }\n            .left,.right{\n              flex-grow: 1;\n              line-height: 30px;\n            }\n           \n        "));
};

/* harmony default export */ __webpack_exports__["default"] = (ComponentLayout);

/***/ })

})
//# sourceMappingURL=index.js.017e63b498479e1b4ac4.hot-update.js.map