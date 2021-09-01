"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mnt_c_Users_mdaue_src_blockchain_Voting_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _mnt_c_Users_mdaue_src_blockchain_Voting_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _mnt_c_Users_mdaue_src_blockchain_Voting_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _mnt_c_Users_mdaue_src_blockchain_Voting_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _mnt_c_Users_mdaue_src_blockchain_Voting_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _mnt_c_Users_mdaue_src_blockchain_Voting_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _mnt_c_Users_mdaue_src_blockchain_Voting_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _mnt_c_Users_mdaue_src_blockchain_Voting_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mnt_c_Users_mdaue_src_blockchain_Voting_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ethereum/factory */ "./ethereum/factory.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "/mnt/c/Users/mdaue/src/blockchain/Voting/pages/index.js";


function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_mnt_c_Users_mdaue_src_blockchain_Voting_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_mnt_c_Users_mdaue_src_blockchain_Voting_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_mnt_c_Users_mdaue_src_blockchain_Voting_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }








var ElectionIndex = /*#__PURE__*/function (_Component) {
  (0,_mnt_c_Users_mdaue_src_blockchain_Voting_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(ElectionIndex, _Component);

  var _super = _createSuper(ElectionIndex);

  function ElectionIndex() {
    (0,_mnt_c_Users_mdaue_src_blockchain_Voting_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, ElectionIndex);

    return _super.apply(this, arguments);
  }

  (0,_mnt_c_Users_mdaue_src_blockchain_Voting_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(ElectionIndex, [{
    key: "renderElections",
    value: function renderElections() {
      var _this = this;

      var items = this.props.elections.map(function (address) {
        return {
          header: address,
          description: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("a", {
            children: "View Election"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 30
          }, _this),
          fluid: true
        };
      });
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Card.Group, {
        items: items
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 16
      }, this);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_10__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("h3", {
            children: "Elections"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
            href: "/elections/new",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("a", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Button, {
                floated: "right",
                content: "Create an Election",
                icon: "add circle",
                primary: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 28
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 21
          }, this), this.renderElections()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }, this);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = (0,_mnt_c_Users_mdaue_src_blockchain_Voting_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_mnt_c_Users_mdaue_src_blockchain_Voting_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee() {
        var elections;
        return _mnt_c_Users_mdaue_src_blockchain_Voting_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_9__.default.methods.getDeployedElections().call();

              case 2:
                elections = _context.sent;
                return _context.abrupt("return", {
                  elections: elections
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return ElectionIndex;
}(react__WEBPACK_IMPORTED_MODULE_7__.Component);

/* harmony default export */ __webpack_exports__["default"] = (ElectionIndex);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjg5ODZjYzA1YTI1ODkyZjJkMDIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztJQUVNUTs7Ozs7Ozs7Ozs7OztXQU1GLDJCQUFrQjtBQUFBOztBQUNkLFVBQU1DLEtBQUssR0FBRyxLQUFLQyxLQUFMLENBQVdDLFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLFVBQUFDLE9BQU8sRUFBSTtBQUM5QyxlQUFPO0FBQ0hDLFVBQUFBLE1BQU0sRUFBRUQsT0FETDtBQUVIRSxVQUFBQSxXQUFXLGVBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRlY7QUFHSEMsVUFBQUEsS0FBSyxFQUFFO0FBSEosU0FBUDtBQUtILE9BTmEsQ0FBZDtBQVFBLDBCQUFPLCtEQUFDLDBEQUFEO0FBQVksYUFBSyxFQUFFUDtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVA7QUFDSDs7O1dBRUQsa0JBQVM7QUFDTCwwQkFDSSwrREFBQyx3REFBRDtBQUFBLCtCQUNJO0FBQUEsa0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSSwrREFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUMsZ0JBQVg7QUFBQSxtQ0FDSTtBQUFBLHFDQUFHLCtEQUFDLHNEQUFEO0FBQVEsdUJBQU8sRUFBQyxPQUFoQjtBQUF3Qix1QkFBTyxFQUFDLG9CQUFoQztBQUFxRCxvQkFBSSxFQUFDLFlBQTFEO0FBQXVFLHVCQUFPO0FBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixFQUtLLEtBQUtRLGVBQUwsRUFMTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFXSDs7OztpVEE3QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDNEJYLG1GQUFBLEdBQXVDYyxJQUF2QyxFQUQ1Qjs7QUFBQTtBQUNVVCxnQkFBQUEsU0FEVjtBQUFBLGlEQUVXO0FBQUVBLGtCQUFBQSxTQUFTLEVBQVRBO0FBQUYsaUJBRlg7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0VBRHdCVjs7QUFpQzVCLCtEQUFlTyxhQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIGNyZWF0ZUZhY3RvcnkgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENhcmQsIEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGZhY3RvcnkgZnJvbSAnLi4vZXRoZXJldW0vZmFjdG9yeSc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5cclxuY2xhc3MgRWxlY3Rpb25JbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xyXG4gICAgICAgIGNvbnN0IGVsZWN0aW9ucyA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5nZXREZXBsb3llZEVsZWN0aW9ucygpLmNhbGwoKTtcclxuICAgICAgICByZXR1cm4geyBlbGVjdGlvbnMgfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJFbGVjdGlvbnMoKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLnByb3BzLmVsZWN0aW9ucy5tYXAoYWRkcmVzcyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IGFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogPGE+VmlldyBFbGVjdGlvbjwvYT4sXHJcbiAgICAgICAgICAgICAgICBmbHVpZDogdHJ1ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfSAvPjtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkVsZWN0aW9uczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9lbGVjdGlvbnMvbmV3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPjxCdXR0b24gZmxvYXRlZD1cInJpZ2h0XCIgY29udGVudD1cIkNyZWF0ZSBhbiBFbGVjdGlvblwiIGljb249XCJhZGQgY2lyY2xlXCIgcHJpbWFyeSAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyRWxlY3Rpb25zKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWxlY3Rpb25JbmRleDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY3JlYXRlRmFjdG9yeSIsIkNhcmQiLCJCdXR0b24iLCJMaW5rIiwiZmFjdG9yeSIsIkxheW91dCIsIkVsZWN0aW9uSW5kZXgiLCJpdGVtcyIsInByb3BzIiwiZWxlY3Rpb25zIiwibWFwIiwiYWRkcmVzcyIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJyZW5kZXJFbGVjdGlvbnMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRFbGVjdGlvbnMiLCJjYWxsIl0sInNvdXJjZVJvb3QiOiIifQ==