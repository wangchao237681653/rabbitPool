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
  var _props$data = props.data,
      mainCoin = _props$data.mainCoin,
      mainTitle = _props$data.mainTitle,
      summary = _props$data.summary,
      style = _props$data.style;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: "wi-reg",
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("img", {
    className: "wi-coin",
    src: mainCoin,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx("div", {
    className: "wi-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, mainTitle), __jsx("div", {
    className: "wi-summary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, summary)), __jsx("div", {
    className: "guide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("img", {
    src: "/icon/guide.svg",
    alt: "guide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "\n        body {\n          margin: 0;\n        }\n        .wi-coin {\n          width:80px;\n          height:80px;\n          margin: 0 auto;\n          display: block;\n        }\n        .wi-reg {\n          height:155px;\n          width:235px;\n        }\n        .wi-title {\n          height:25px;\n          font-size:18px;\n          font-family:PingFangSC-Medium,PingFang SC;\n          font-weight:500;\n          color:rgba(51,51,51,1);\n          padding-top:20px;\n          text-align:center;\n        }\n        .wi-summary {\n          height:20px;\n          font-size:14px;\n          font-family:PingFangSC-Regular,PingFang SC;\n          font-weight:400;\n          color:rgba(153,153,153,1);\n          padding-top:10px;\n          text-align:center;\n        }\n        .guide {\n          float:left;\n          width:\n        }\n      "));
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
/* harmony import */ var _guide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guide */ "./components/guide.js");
var _jsxFileName = "/Users/leon/work/rabbitpool/components/hostingFall.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var colorStyle = {
  color: "rgba(96,90,254,1)"
};
var workStepData = [{
  mainCoin: "/icon/workfall1.svg",
  mainTitle: "购买矿机",
  summary: "选择矿机的托管服务",
  style: {
    "float": "left"
  }
}, {
  mainCoin: "/icon/workfall2.svg",
  mainTitle: "等待发货",
  summary: "等待矿机运到矿场",
  style: {
    "float": "left"
  }
}, {
  mainCoin: "/icon/workfall3.svg",
  mainTitle: "矿机到货",
  summary: "由技术人员部署矿机托管上架",
  style: {
    "float": "left"
  }
}, {
  mainCoin: "/icon/workfall4.svg",
  mainTitle: "开始挖矿",
  summary: "获得矿机挖矿收益",
  style: {
    "float": "left"
  }
}];

var Hosting = function Hosting() {
  return __jsx("hosting", {
    className: "jsx-228778141",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-228778141",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-228778141",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
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
      lineNumber: 43
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-228778141" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, workStepData.map(function (d, i) {
    return __jsx(_WorkFallItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: d,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    });
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "228778141",
    __self: this
  }, "hosting.jsx-228778141{width:1440px;height:477px;background:rgba(246,249,252,1);box-shadow:0px -1px 0px 0px rgba(0,0,0,0.04);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZW9uL3dvcmsvcmFiYml0cG9vbC9jb21wb25lbnRzL2hvc3RpbmdGYWxsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZEZ0IsQUFHcUIsYUFDQSxhQUNrQiwrQkFDYyw2Q0FDOUMiLCJmaWxlIjoiL1VzZXJzL2xlb24vd29yay9yYWJiaXRwb29sL2NvbXBvbmVudHMvaG9zdGluZ0ZhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgVGl0bGVDb21wIGZyb20gJy4vdGl0bGVDb21wJztcbmltcG9ydCBXb3JrRmFsbEl0ZW0gZnJvbSAnLi9Xb3JrRmFsbEl0ZW0nO1xuaW1wb3J0IEd1aWRlIGZyb20gJy4vZ3VpZGUnO1xuXG5jb25zdCBjb2xvclN0eWxlID0ge1xuICBjb2xvcjogXCJyZ2JhKDk2LDkwLDI1NCwxKVwiXG59XG5jb25zdCB3b3JrU3RlcERhdGEgPSBbe1xuICBtYWluQ29pbjpcIi9pY29uL3dvcmtmYWxsMS5zdmdcIixcbiAgbWFpblRpdGxlOlwi6LSt5Lmw55+/5py6XCIsXG4gIHN1bW1hcnk6XCLpgInmi6nnn7/mnLrnmoTmiZjnrqHmnI3liqFcIixcbiAgc3R5bGU6e1xuICAgIGZsb2F0OlwibGVmdFwiXG4gIH1cbn0se1xuICBtYWluQ29pbjpcIi9pY29uL3dvcmtmYWxsMi5zdmdcIixcbiAgbWFpblRpdGxlOlwi562J5b6F5Y+R6LSnXCIsXG4gIHN1bW1hcnk6XCLnrYnlvoXnn7/mnLrov5DliLDnn7/lnLpcIixcbiAgc3R5bGU6e1xuICAgIGZsb2F0OlwibGVmdFwiXG4gIH1cbn0se1xuICBtYWluQ29pbjpcIi9pY29uL3dvcmtmYWxsMy5zdmdcIixcbiAgbWFpblRpdGxlOlwi55+/5py65Yiw6LSnXCIsXG4gIHN1bW1hcnk6XCLnlLHmioDmnK/kurrlkZjpg6jnvbLnn7/mnLrmiZjnrqHkuIrmnrZcIixcbiAgc3R5bGU6e1xuICAgIGZsb2F0OlwibGVmdFwiXG4gIH1cbn0se1xuICBtYWluQ29pbjpcIi9pY29uL3dvcmtmYWxsNC5zdmdcIixcbiAgbWFpblRpdGxlOlwi5byA5aeL5oyW55+/XCIsXG4gIHN1bW1hcnk6XCLojrflvpfnn7/mnLrmjJbnn7/mlLbnm4pcIixcbiAgc3R5bGU6e1xuICAgIGZsb2F0OlwibGVmdFwiXG4gIH1cbn1dO1xuXG5jb25zdCBIb3N0aW5nID0gKCkgPT4gKFxuICA8aG9zdGluZz5cbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxUaXRsZUNvbXBcbiAgICAgICAgICAgIGxlZnRDb2luPXtcIi8xLXJpZ2h0LnBuZ1wifVxuICAgICAgICAgICAgcmlnaHRDb2luPXtcIjEtbGVmdC5wbmdcIn1cbiAgICAgICAgICAgIHRpdGxlPXtcIuefv+acuuaJmOeuoea1geeoi1wifVxuICAgICAgICAgICAgc3VtbWFyeT17XCLnroDljZXlm5vmraXvvIzovbvmnb7miZjnrqHnn7/mnLpcIn1cbiAgICAgICAgICAgIHRpdGxlQ29sPXtjb2xvclN0eWxlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY29udGVudFwifT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgd29ya1N0ZXBEYXRhLm1hcCgoZCxpKSA9PntcbiAgICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgPFdvcmtGYWxsSXRlbSBkYXRhPXtkfSAvPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGhvc3Rpbmcge1xuICAgICAgICB3aWR0aDoxNDQwcHg7XG4gICAgICAgIGhlaWdodDo0NzdweDtcbiAgICAgICAgYmFja2dyb3VuZDpyZ2JhKDI0NiwyNDksMjUyLDEpO1xuICAgICAgICBib3gtc2hhZG93OjBweCAtMXB4IDBweCAwcHggcmdiYSgwLDAsMCwwLjA0KTtcbiAgICAgIH1cbiAgICAgXG4gICAgYH08L3N0eWxlPlxuICA8L2hvc3Rpbmc+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhvc3Rpbmc7XG4iXX0= */\n/*@ sourceURL=/Users/leon/work/rabbitpool/components/hostingFall.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Hosting);

/***/ })

})
//# sourceMappingURL=hosting.js.1b5d6b7825bc3a0b0a13.hot-update.js.map