webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/projectDetails.js":
/*!**************************************!*\
  !*** ./components/projectDetails.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ethereum/campaign */ \"./ethereum/campaign.js\");\n\n\n\n\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar Projectdetails = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Projectdetails, _Component);\n\n  var _super = _createSuper(Projectdetails);\n\n  function Projectdetails(props) {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, Projectdetails);\n\n    return _super.call(this, props);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Projectdetails, [{\n    key: \"componentDidMount\",\n    value: function () {\n      var _componentDidMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {\n        var campaign, summary;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                console.log(\"from here\" + props);\n                _context.next = 3;\n                return Object(_ethereum_campaign__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this.props.address);\n\n              case 3:\n                campaign = _context.sent;\n                _context.next = 6;\n                return campaign.methods.getSummary().call();\n\n              case 6:\n                summary = _context.sent;\n                console.log(\"ingirundhu\", summary);\n                state = {\n                  title: summary[5]\n                };\n                return _context.abrupt(\"return\", {\n                  address: this.props.address,\n                  projectTitle: summary[5],\n                  projectDescription: summary[6],\n                  projectPromise: summary[7]\n                });\n\n              case 10:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function componentDidMount(_x) {\n        return _componentDidMount.apply(this, arguments);\n      }\n\n      return componentDidMount;\n    }()\n  }, {\n    key: \"render\",\n    value: function render() {\n      console.log('inside', this.state);\n      return __jsx(\"h1\", null, this.props.projectTitle);\n    }\n  }]);\n\n  return Projectdetails;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projectdetails);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2plY3REZXRhaWxzLmpzP2U0NTciXSwibmFtZXMiOlsiUHJvamVjdGRldGFpbHMiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJDYW1wYWlnbiIsImFkZHJlc3MiLCJjYW1wYWlnbiIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInN1bW1hcnkiLCJzdGF0ZSIsInRpdGxlIiwicHJvamVjdFRpdGxlIiwicHJvamVjdERlc2NyaXB0aW9uIiwicHJvamVjdFByb21pc2UiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUVNQSxjOzs7OztBQUNKLDBCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsNkJBQ1JBLEtBRFE7QUFFakI7Ozs7O2lPQUN1QkEsSzs7Ozs7O0FBQ3RCQyx1QkFBTyxDQUFDQyxHQUFSLENBQVksY0FBY0YsS0FBMUI7O3VCQUV1Qkcsa0VBQVEsQ0FBQyxLQUFLSCxLQUFMLENBQVdJLE9BQVosQzs7O0FBQXpCQyx3Qjs7dUJBQ2dCQSxRQUFRLENBQUNDLE9BQVQsQ0FBaUJDLFVBQWpCLEdBQThCQyxJQUE5QixFOzs7QUFBaEJDLHVCO0FBRU5SLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTJCTyxPQUEzQjtBQUNBQyxxQkFBSyxHQUFHO0FBQ0pDLHVCQUFLLEVBQUdGLE9BQU8sQ0FBQyxDQUFEO0FBRFgsaUJBQVI7aURBR087QUFDSEwseUJBQU8sRUFBRyxLQUFLSixLQUFMLENBQVdJLE9BRGxCO0FBRUhRLDhCQUFZLEVBQUdILE9BQU8sQ0FBQyxDQUFELENBRm5CO0FBR0hJLG9DQUFrQixFQUFHSixPQUFPLENBQUMsQ0FBRCxDQUh6QjtBQUlISyxnQ0FBYyxFQUFHTCxPQUFPLENBQUMsQ0FBRDtBQUpyQixpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQVFBO0FBRVBSLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBdUIsS0FBS1EsS0FBNUI7QUFDQSxhQUFPLGtCQUFLLEtBQUtWLEtBQUwsQ0FBV1ksWUFBaEIsQ0FBUDtBQUNEOzs7O0VBMUIwQkcsK0M7O0FBNEJkaEIsNkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2plY3REZXRhaWxzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENhbXBhaWduIGZyb20gXCIuLi9ldGhlcmV1bS9jYW1wYWlnblwiO1xuXG5jbGFzcyBQcm9qZWN0ZGV0YWlscyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICBhc3luYyBjb21wb25lbnREaWRNb3VudChwcm9wcykge1xuICAgIGNvbnNvbGUubG9nKFwiZnJvbSBoZXJlXCIgKyBwcm9wcyk7XG5cbiAgICBjb25zdCBjYW1wYWlnbiA9IGF3YWl0IENhbXBhaWduKHRoaXMucHJvcHMuYWRkcmVzcyk7XG4gICAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZ2V0U3VtbWFyeSgpLmNhbGwoKTtcblxuICAgIGNvbnNvbGUubG9nKFwiaW5naXJ1bmRodVwiICwgc3VtbWFyeSk7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIHRpdGxlIDogc3VtbWFyeVs1XVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRyZXNzIDogdGhpcy5wcm9wcy5hZGRyZXNzLFxuICAgICAgICBwcm9qZWN0VGl0bGUgOiBzdW1tYXJ5WzVdLFxuICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb24gOiBzdW1tYXJ5WzZdLFxuICAgICAgICBwcm9qZWN0UHJvbWlzZSA6IHN1bW1hcnlbN10sXG4gICAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgY29uc29sZS5sb2coJ2luc2lkZScgLCB0aGlzLnN0YXRlKTtcbiAgICByZXR1cm4gPGgxPnt0aGlzLnByb3BzLnByb2plY3RUaXRsZX08L2gxPjtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdGRldGFpbHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/projectDetails.js\n");

/***/ })

})