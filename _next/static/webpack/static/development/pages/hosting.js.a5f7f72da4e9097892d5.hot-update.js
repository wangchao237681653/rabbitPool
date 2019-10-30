webpackHotUpdate("static/development/pages/hosting.js",{

/***/ "./components/WorkFallItem.js":
/*!************************************!*\
  !*** ./components/WorkFallItem.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/leon/work/rabbitpool/components/WorkFallItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var WorkFallItem = function WorkFallItem(props) {
  var coin = props.coin,
      rightCoin = props.rightCoin,
      titleCol = props.titleCol,
      title = props.title;
  return __jsx("div", {
    className: "t-reg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("img", {
    className: "t-leftCoin",
    src: leftCoin,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx("span", {
    className: "t-title",
    style: titleCol,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, title), __jsx("img", {
    className: "t-rightCoin",
    src: rightCoin,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx("div", {
    className: 't-summary',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.summary), __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "\n        body {\n          margin: 0;\n        }\n        .t-leftCoin {\n           height:23px;\n           width:29px;\n        }\n         .t-rightCoin {\n           height:22px;\n           width:27px;\n        }\n        .t-reg {\n           width:293px;\n           height:82px;\n           display: block;\n           margin:0 auto;\n        }\n        .t-title {\n          height:50px;\n          font-size:36px;\n          font-family:PingFangSC-Medium,PingFang SC;\n          font-weight:500;\n          line-height:50px;\n          letter-spacing:1px;\n        }\n        .t-summary {\n            height:22px;\n            font-size:16px;\n            font-family:PingFangSC-Regular,PingFang SC;\n            font-weight:400;\n            color:rgba(153,153,153,1);\n            line-height:22px;\n            padding-top:10px;\n            text-align:center;\n        }\n      "));
};

/* harmony default export */ __webpack_exports__["default"] = (WorkFallItem);

/***/ }),

/***/ "./components/hostingFall.js":
/*!***********************************!*\
  !*** ./components/hostingFall.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _titleComp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./titleComp */ "./components/titleComp.js");
/* harmony import */ var _WorkFallItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WorkFallItem */ "./components/WorkFallItem.js");
var _jsxFileName = "/Users/leon/work/rabbitpool/components/hostingFall.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var colorStyle = {
  color: "rgba(96,90,254,1)"
};

var Hosting = function Hosting() {
  return __jsx("hosting", {
    className: "jsx-865259144",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-865259144",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-865259144",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(_titleComp__WEBPACK_IMPORTED_MODULE_2__["default"], {
    leftCoin: "/1-right.png",
    rightCoin: "1-left.png",
    title: "矿机托管流程",
    summary: "简单四步，轻松托管矿机",
    titleCol: colorStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "865259144",
    __self: this
  }, "hosting.jsx-865259144{width:1440px;height:477px;background:rgba(246,249,252,1);box-shadow:0px -1px 0px 0px rgba(0,0,0,0.04);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZW9uL3dvcmsvcmFiYml0cG9vbC9jb21wb25lbnRzL2hvc3RpbmdGYWxsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CZ0IsQUFHcUIsYUFDQSxhQUNrQiwrQkFDYyw2Q0FDOUMiLCJmaWxlIjoiL1VzZXJzL2xlb24vd29yay9yYWJiaXRwb29sL2NvbXBvbmVudHMvaG9zdGluZ0ZhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgVGl0bGVDb21wIGZyb20gJy4vdGl0bGVDb21wJztcbmltcG9ydCBXb3JrRmFsbEl0ZW0gZnJvbSAnLi9Xb3JrRmFsbEl0ZW0nO1xuY29uc3QgY29sb3JTdHlsZSA9IHtcbiAgY29sb3I6IFwicmdiYSg5Niw5MCwyNTQsMSlcIlxufVxuY29uc3QgSG9zdGluZyA9ICgpID0+IChcbiAgPGhvc3Rpbmc+XG4gICAgPGRpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8VGl0bGVDb21wXG4gICAgICAgICAgICBsZWZ0Q29pbj17XCIvMS1yaWdodC5wbmdcIn1cbiAgICAgICAgICAgIHJpZ2h0Q29pbj17XCIxLWxlZnQucG5nXCJ9XG4gICAgICAgICAgICB0aXRsZT17XCLnn7/mnLrmiZjnrqHmtYHnqItcIn1cbiAgICAgICAgICAgIHN1bW1hcnk9e1wi566A5Y2V5Zub5q2l77yM6L275p2+5omY566h55+/5py6XCJ9XG4gICAgICAgICAgICB0aXRsZUNvbD17Y29sb3JTdHlsZX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGhvc3Rpbmcge1xuICAgICAgICB3aWR0aDoxNDQwcHg7XG4gICAgICAgIGhlaWdodDo0NzdweDtcbiAgICAgICAgYmFja2dyb3VuZDpyZ2JhKDI0NiwyNDksMjUyLDEpO1xuICAgICAgICBib3gtc2hhZG93OjBweCAtMXB4IDBweCAwcHggcmdiYSgwLDAsMCwwLjA0KTtcbiAgICAgIH1cbiAgICAgIFxuICAgIGB9PC9zdHlsZT5cbiAgPC9ob3N0aW5nPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBIb3N0aW5nO1xuIl19 */\n/*@ sourceURL=/Users/leon/work/rabbitpool/components/hostingFall.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Hosting);

/***/ })

})
//# sourceMappingURL=hosting.js.a5f7f72da4e9097892d5.hot-update.js.map