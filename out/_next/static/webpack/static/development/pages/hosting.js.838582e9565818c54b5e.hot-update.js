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


var showGuide = function showGuide(show) {
  if (show) {
    return __jsx("div", {
      className: "guide",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, __jsx("img", {
      src: "/icon/guide.svg",
      alt: "guide",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }));
  }
};

var WorkFallItem = function WorkFallItem(props) {
  var _props$data = props.data,
      mainCoin = _props$data.mainCoin,
      mainTitle = _props$data.mainTitle,
      summary = _props$data.summary,
      style = _props$data.style,
      isShowGuide = _props$data.isShowGuide;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    className: "wi-reg",
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("img", {
    className: "wi-coin",
    src: mainCoin,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx("div", {
    className: "wi-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, mainTitle), __jsx("div", {
    className: "wi-summary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, summary)), showGuide(isShowGuide), __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "\n        body {\n          margin: 0;\n        }\n        .wi-coin {\n          width:80px;\n          height:80px;\n          margin: 0 auto;\n          display: block;\n        }\n        .wi-reg {\n          height:155px;\n          width:235px;\n        }\n        .wi-title {\n          height:25px;\n          font-size:18px;\n          font-family:PingFangSC-Medium,PingFang SC;\n          font-weight:500;\n          color:rgba(51,51,51,1);\n          padding-top:20px;\n          text-align:center;\n        }\n        .wi-summary {\n          height:20px;\n          font-size:14px;\n          font-family:PingFangSC-Regular,PingFang SC;\n          font-weight:400;\n          color:rgba(153,153,153,1);\n          padding-top:10px;\n          text-align:center;\n        }\n        .guide {\n          float:left;\n          width:60px;\n          height:155px;\n        }\n        .guide img{\n          width:60px;\n          height:60px;\n          text-align: center;\n          vertical-align:middle;\n        }\n      "));
};

/* harmony default export */ __webpack_exports__["default"] = (WorkFallItem);

/***/ })

})
//# sourceMappingURL=hosting.js.838582e9565818c54b5e.hot-update.js.map