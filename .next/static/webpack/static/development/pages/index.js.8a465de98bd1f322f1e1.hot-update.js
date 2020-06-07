webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/projectDetails.js":
/*!**************************************!*\
  !*** ./components/projectDetails.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ethereum/campaign */ \"./ethereum/campaign.js\");\n\n\n\n\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar Projectdetails = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Projectdetails, _Component);\n\n  var _super = _createSuper(Projectdetails);\n\n  function Projectdetails(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, Projectdetails);\n\n    _this = _super.call(this, props);\n    _this.state = {};\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Projectdetails, [{\n    key: \"componentDidMount\",\n    value: function () {\n      var _componentDidMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {\n        var campaign, summary;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                console.log(\"from here\" + props);\n                _context.next = 3;\n                return Object(_ethereum_campaign__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this.props.address);\n\n              case 3:\n                campaign = _context.sent;\n                _context.next = 6;\n                return campaign.methods.getSummary().call();\n\n              case 6:\n                summary = _context.sent;\n                console.log(\"ingirundhu\", summary);\n                this.setState({\n                  projectTitle: summary[5],\n                  projectDescription: summary[6],\n                  projectPromise: summary[7]\n                });\n\n              case 9:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function componentDidMount(_x) {\n        return _componentDidMount.apply(this, arguments);\n      }\n\n      return componentDidMount;\n    }()\n  }, {\n    key: \"render\",\n    value: function render() {\n      return __jsx(\"a\", {\n        href: \"/Campaigns/show/\".concat(this.props.address)\n      }, __jsx(\"div\", {\n        className: \"rounded overflow-hidden shadow-xl\"\n      }, __jsx(\"div\", {\n        className: \"p-2 m-20\"\n      }, __jsx(\"div\", {\n        className: \"font-bold text-xl mb-2\"\n      }, this.state.projectTitle), __jsx(\"p\", {\n        className: \"text-gray-700 text-base\"\n      }, this.state.projectDescription)), __jsx(\"div\", {\n        className: \"p-10\"\n      }, __jsx(\"span\", {\n        className: \"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2\"\n      }, \"#\", this.state.projectPromise))));\n    }\n  }]);\n\n  return Projectdetails;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projectdetails);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2plY3REZXRhaWxzLmpzP2U0NTciXSwibmFtZXMiOlsiUHJvamVjdGRldGFpbHMiLCJwcm9wcyIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsIkNhbXBhaWduIiwiYWRkcmVzcyIsImNhbXBhaWduIiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSIsInNldFN0YXRlIiwicHJvamVjdFRpdGxlIiwicHJvamVjdERlc2NyaXB0aW9uIiwicHJvamVjdFByb21pc2UiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUdNQSxjOzs7OztBQUNKLDBCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhLEVBQWI7QUFGaUI7QUFHbEI7Ozs7O2lPQUN1QkQsSzs7Ozs7O0FBQ3RCRSx1QkFBTyxDQUFDQyxHQUFSLENBQVksY0FBY0gsS0FBMUI7O3VCQUV1Qkksa0VBQVEsQ0FBQyxLQUFLSixLQUFMLENBQVdLLE9BQVosQzs7O0FBQXpCQyx3Qjs7dUJBQ2dCQSxRQUFRLENBQUNDLE9BQVQsQ0FBaUJDLFVBQWpCLEdBQThCQyxJQUE5QixFOzs7QUFBaEJDLHVCO0FBRU5SLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCTyxPQUExQjtBQUNBLHFCQUFLQyxRQUFMLENBQWM7QUFDWkMsOEJBQVksRUFBRUYsT0FBTyxDQUFDLENBQUQsQ0FEVDtBQUVaRyxvQ0FBa0IsRUFBRUgsT0FBTyxDQUFDLENBQUQsQ0FGZjtBQUdaSSxnQ0FBYyxFQUFFSixPQUFPLENBQUMsQ0FBRDtBQUhYLGlCQUFkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBT087QUFDUCxhQUNFO0FBQUcsWUFBSSw0QkFBdUIsS0FBS1YsS0FBTCxDQUFXSyxPQUFsQztBQUFQLFNBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQXlDLEtBQUtKLEtBQUwsQ0FBV1csWUFBcEQsQ0FERixFQUVFO0FBQUcsaUJBQVMsRUFBQztBQUFiLFNBQ0csS0FBS1gsS0FBTCxDQUFXWSxrQkFEZCxDQUZGLENBREYsRUFPRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQU0saUJBQVMsRUFBQztBQUFoQixjQUNJLEtBQUtaLEtBQUwsQ0FBV2EsY0FEZixDQURGLENBUEYsQ0FERixDQURGO0FBaUJEOzs7O0VBckMwQkMsK0M7O0FBdUNkaEIsNkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2plY3REZXRhaWxzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENhbXBhaWduIGZyb20gXCIuLi9ldGhlcmV1bS9jYW1wYWlnblwiO1xuXG5cbmNsYXNzIFByb2plY3RkZXRhaWxzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KHByb3BzKSB7XG4gICAgY29uc29sZS5sb2coXCJmcm9tIGhlcmVcIiArIHByb3BzKTtcblxuICAgIGNvbnN0IGNhbXBhaWduID0gYXdhaXQgQ2FtcGFpZ24odGhpcy5wcm9wcy5hZGRyZXNzKTtcbiAgICBjb25zdCBzdW1tYXJ5ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRTdW1tYXJ5KCkuY2FsbCgpO1xuXG4gICAgY29uc29sZS5sb2coXCJpbmdpcnVuZGh1XCIsIHN1bW1hcnkpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcHJvamVjdFRpdGxlOiBzdW1tYXJ5WzVdLFxuICAgICAgcHJvamVjdERlc2NyaXB0aW9uOiBzdW1tYXJ5WzZdLFxuICAgICAgcHJvamVjdFByb21pc2U6IHN1bW1hcnlbN10sXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxhIGhyZWYgPSB7YC9DYW1wYWlnbnMvc2hvdy8ke3RoaXMucHJvcHMuYWRkcmVzc31gfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkIG92ZXJmbG93LWhpZGRlbiBzaGFkb3cteGxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncC0yIG0tMjAnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC14bCBtYi0yXCI+e3RoaXMuc3RhdGUucHJvamVjdFRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMCB0ZXh0LWJhc2VcIj5cbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUucHJvamVjdERlc2NyaXB0aW9ufVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0xMFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIGJnLWdyYXktMjAwIHJvdW5kZWQtZnVsbCBweC0zIHB5LTEgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZ3JheS03MDAgbXItMlwiPlxuICAgICAgICAgICAgICAje3RoaXMuc3RhdGUucHJvamVjdFByb21pc2V9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hPlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RkZXRhaWxzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/projectDetails.js\n");

/***/ })

})