webpackHotUpdate("static/development/pages/Campaigns/request.js",{

/***/ "./components/Requestrow.js":
/*!**********************************!*\
  !*** ./components/Requestrow.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ethereum/campaign */ \"./ethereum/campaign.js\");\n\n\n\n\n\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar Requestrow = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Requestrow, _Component);\n\n  var _super = _createSuper(Requestrow);\n\n  function Requestrow(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, Requestrow);\n\n    _this = _super.call(this, props);\n    _this.approveHandler = _this.approveHandler.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Requestrow, [{\n    key: \"approveHandler\",\n    value: function () {\n      var _approveHandler = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var campaign, accounts;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                campaign = Object(_ethereum_campaign__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(this.props.address);\n                _context.next = 3;\n                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].eth.getAccounts();\n\n              case 3:\n                accounts = _context.sent;\n                _context.prev = 4;\n                _context.next = 7;\n                return campaign.methods.approveRequest(this.props.id - 1).send({\n                  from: accounts[0]\n                });\n\n              case 7:\n                _context.next = 11;\n                break;\n\n              case 9:\n                _context.prev = 9;\n                _context.t0 = _context[\"catch\"](4);\n\n              case 11:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this, [[4, 9]]);\n      }));\n\n      function approveHandler() {\n        return _approveHandler.apply(this, arguments);\n      }\n\n      return approveHandler;\n    }()\n  }, {\n    key: \"render\",\n    value: function render() {\n      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Table\"].Body, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Table\"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Table\"].Cell, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Label\"], null, this.props.id)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Table\"].Cell, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Label\"], null, this.props.request.description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Table\"].Cell, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Label\"], null, this.props.request.value)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Table\"].Cell, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Label\"], null, this.props.request.recipient)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Table\"].Cell, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Label\"], null, this.props.request.approvalCount, \"/\", this.props.approversCount)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Table\"].Cell, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Label\"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Button\"], {\n        size: \"small\",\n        color: \"teal\",\n        onClick: this.approveHandler\n      }, \"Yes\"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Table\"].Cell, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Label\"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Button\"], {\n        size: \"small\",\n        color: \"green\"\n      }, \"Yes\")))));\n    }\n  }]);\n\n  return Requestrow;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Requestrow);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1JlcXVlc3Ryb3cuanM/MWVhOSJdLCJuYW1lcyI6WyJSZXF1ZXN0cm93IiwicHJvcHMiLCJhcHByb3ZlSGFuZGxlciIsImJpbmQiLCJjYW1wYWlnbiIsIkNhbXBhaWduIiwiYWRkcmVzcyIsIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImFwcHJvdmVSZXF1ZXN0IiwiaWQiLCJzZW5kIiwiZnJvbSIsInJlcXVlc3QiLCJkZXNjcmlwdGlvbiIsInZhbHVlIiwicmVjaXBpZW50IiwiYXBwcm92YWxDb3VudCIsImFwcHJvdmVyc0NvdW50IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUNNQSxVOzs7OztBQUNGLHNCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2QsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JDLElBQXBCLHlHQUF0QjtBQUZjO0FBR2pCOzs7Ozs7Ozs7OztBQUVTQyx3QixHQUFXQyxtRUFBUSxDQUFDLEtBQUtKLEtBQUwsQ0FBV0ssT0FBWixDOzt1QkFDRkMsdURBQUksQ0FBQ0MsR0FBTCxDQUFTQyxXQUFULEU7OztBQUFqQkMsd0I7Ozt1QkFFSU4sUUFBUSxDQUFDTyxPQUFULENBQWlCQyxjQUFqQixDQUFnQyxLQUFLWCxLQUFMLENBQVdZLEVBQVgsR0FBZ0IsQ0FBaEQsRUFBbURDLElBQW5ELENBQXdEO0FBQzFEQyxzQkFBSSxFQUFFTCxRQUFRLENBQUMsQ0FBRDtBQUQ0QyxpQkFBeEQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBUU47QUFDSixhQUNJLE1BQUMsdURBQUQsQ0FBTyxJQUFQLFFBQ0ksTUFBQyx1REFBRCxDQUFPLEdBQVAsUUFDQSxNQUFDLHVEQUFELENBQU8sSUFBUCxRQUNDLE1BQUMsdURBQUQsUUFBUSxLQUFLVCxLQUFMLENBQVdZLEVBQW5CLENBREQsQ0FEQSxFQUlBLE1BQUMsdURBQUQsQ0FBTyxJQUFQLFFBQ0MsTUFBQyx1REFBRCxRQUFRLEtBQUtaLEtBQUwsQ0FBV2UsT0FBWCxDQUFtQkMsV0FBM0IsQ0FERCxDQUpBLEVBT0EsTUFBQyx1REFBRCxDQUFPLElBQVAsUUFDQyxNQUFDLHVEQUFELFFBQVEsS0FBS2hCLEtBQUwsQ0FBV2UsT0FBWCxDQUFtQkUsS0FBM0IsQ0FERCxDQVBBLEVBVUEsTUFBQyx1REFBRCxDQUFPLElBQVAsUUFDQyxNQUFDLHVEQUFELFFBQVEsS0FBS2pCLEtBQUwsQ0FBV2UsT0FBWCxDQUFtQkcsU0FBM0IsQ0FERCxDQVZBLEVBYUEsTUFBQyx1REFBRCxDQUFPLElBQVAsUUFDUixNQUFDLHVEQUFELFFBQVEsS0FBS2xCLEtBQUwsQ0FBV2UsT0FBWCxDQUFtQkksYUFBM0IsT0FBMkMsS0FBS25CLEtBQUwsQ0FBV29CLGNBQXRELENBRFEsQ0FiQSxFQWdCQSxNQUFDLHVEQUFELENBQU8sSUFBUCxRQUNDLE1BQUMsdURBQUQsUUFBTyxNQUFDLHdEQUFEO0FBQVEsWUFBSSxFQUFHLE9BQWY7QUFBdUIsYUFBSyxFQUFHLE1BQS9CO0FBQXNDLGVBQU8sRUFBSSxLQUFLbkI7QUFBdEQsZUFBUCxDQURELENBaEJBLEVBbUJBLE1BQUMsdURBQUQsQ0FBTyxJQUFQLFFBQ0MsTUFBQyx1REFBRCxRQUFPLE1BQUMsd0RBQUQ7QUFBUSxZQUFJLEVBQUcsT0FBZjtBQUF1QixhQUFLLEVBQUc7QUFBL0IsZUFBUCxDQURELENBbkJBLENBREosQ0FESjtBQTJCSDs7OztFQTdDb0JvQiwrQzs7QUErQ1Z0Qix5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUmVxdWVzdHJvdy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1RhYmxlLCBMYWJlbCAsIEJ1dHRvbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2ViMyc7XG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSAnLi4vZXRoZXJldW0vY2FtcGFpZ24nO1xuY2xhc3MgUmVxdWVzdHJvdyBleHRlbmRzIENvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5hcHByb3ZlSGFuZGxlciA9IHRoaXMuYXBwcm92ZUhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgYXN5bmMgYXBwcm92ZUhhbmRsZXIoKXtcbiAgICAgICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbih0aGlzLnByb3BzLmFkZHJlc3MpO1xuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmFwcHJvdmVSZXF1ZXN0KHRoaXMucHJvcHMuaWQgLSAxKS5zZW5kKHtcbiAgICAgICAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxUYWJsZS5Cb2R5PlxuICAgICAgICAgICAgICAgIDxUYWJsZS5Sb3c+XG4gICAgICAgICAgICAgICAgPFRhYmxlLkNlbGw+XG4gICAgICAgICAgICAgICAgIDxMYWJlbD57dGhpcy5wcm9wcy5pZH08L0xhYmVsPlxuICAgICAgICAgICAgICAgIDwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGUuQ2VsbD5cbiAgICAgICAgICAgICAgICAgPExhYmVsPnt0aGlzLnByb3BzLnJlcXVlc3QuZGVzY3JpcHRpb259PC9MYWJlbD5cbiAgICAgICAgICAgICAgICA8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICAgICAgPFRhYmxlLkNlbGw+XG4gICAgICAgICAgICAgICAgIDxMYWJlbD57dGhpcy5wcm9wcy5yZXF1ZXN0LnZhbHVlfTwvTGFiZWw+XG4gICAgICAgICAgICAgICAgPC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZS5DZWxsPlxuICAgICAgICAgICAgICAgICA8TGFiZWw+e3RoaXMucHJvcHMucmVxdWVzdC5yZWNpcGllbnR9PC9MYWJlbD5cbiAgICAgICAgICAgICAgICA8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICAgICAgPFRhYmxlLkNlbGw+XG4gICAgICAgIDxMYWJlbD57dGhpcy5wcm9wcy5yZXF1ZXN0LmFwcHJvdmFsQ291bnR9L3t0aGlzLnByb3BzLmFwcHJvdmVyc0NvdW50fTwvTGFiZWw+XG4gICAgICAgICAgICAgICAgPC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZS5DZWxsPlxuICAgICAgICAgICAgICAgICA8TGFiZWw+PEJ1dHRvbiBzaXplID0gJ3NtYWxsJyBjb2xvciA9ICd0ZWFsJyBvbkNsaWNrID0ge3RoaXMuYXBwcm92ZUhhbmRsZXJ9PlllczwvQnV0dG9uPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgPC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZS5DZWxsPlxuICAgICAgICAgICAgICAgICA8TGFiZWw+PEJ1dHRvbiBzaXplID0gJ3NtYWxsJyBjb2xvciA9ICdncmVlbic+WWVzPC9CdXR0b24+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICA8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICA8L1RhYmxlLlJvdz5cbiAgICAgICAgICAgIDwvVGFibGUuQm9keT4gICBcbiAgICAgICAgKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0cm93OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Requestrow.js\n");

/***/ })

})