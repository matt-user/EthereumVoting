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
          }, this)]
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
                return react__WEBPACK_IMPORTED_MODULE_7__.createFactory.methods.getDeployedElections().call();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWI0NjQ1Yjk5OGI1MmJmMjFmYzUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztJQUVNUTs7Ozs7Ozs7Ozs7OztXQU1GLDJCQUFrQjtBQUFBOztBQUNkLFVBQU1DLEtBQUssR0FBRyxLQUFLQyxLQUFMLENBQVdDLFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLFVBQUFDLE9BQU8sRUFBSTtBQUM5QyxlQUFPO0FBQ0hDLFVBQUFBLE1BQU0sRUFBRUQsT0FETDtBQUVIRSxVQUFBQSxXQUFXLGVBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRlY7QUFHSEMsVUFBQUEsS0FBSyxFQUFFO0FBSEosU0FBUDtBQUtILE9BTmEsQ0FBZDtBQVFBLDBCQUFPLCtEQUFDLDBEQUFEO0FBQVksYUFBSyxFQUFFUDtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVA7QUFDSDs7O1dBRUQsa0JBQVM7QUFDTCwwQkFDSSwrREFBQyx3REFBRDtBQUFBLCtCQUNJO0FBQUEsa0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSSwrREFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUMsZ0JBQVg7QUFBQSxtQ0FDSTtBQUFBLHFDQUFHLCtEQUFDLHNEQUFEO0FBQVEsdUJBQU8sRUFBQyxPQUFoQjtBQUF3Qix1QkFBTyxFQUFDLG9CQUFoQztBQUFxRCxvQkFBSSxFQUFDLFlBQTFEO0FBQXVFLHVCQUFPO0FBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFVSDs7OztpVEE1QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDNEJQLDZFQUFBLEdBQTZDaUIsSUFBN0MsRUFENUI7O0FBQUE7QUFDVVIsZ0JBQUFBLFNBRFY7QUFBQSxpREFFVztBQUFFQSxrQkFBQUEsU0FBUyxFQUFUQTtBQUFGLGlCQUZYOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7OztFQUR3QlY7O0FBZ0M1QiwrREFBZU8sYUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBjcmVhdGVGYWN0b3J5IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDYXJkLCBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBmYWN0b3J5IGZyb20gJy4uL2V0aGVyZXVtL2ZhY3RvcnknO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuXHJcbmNsYXNzIEVsZWN0aW9uSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcclxuICAgICAgICBjb25zdCBlbGVjdGlvbnMgPSBhd2FpdCBjcmVhdGVGYWN0b3J5Lm1ldGhvZHMuZ2V0RGVwbG95ZWRFbGVjdGlvbnMoKS5jYWxsKCk7XHJcbiAgICAgICAgcmV0dXJuIHsgZWxlY3Rpb25zIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRWxlY3Rpb25zKCkge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5wcm9wcy5lbGVjdGlvbnMubWFwKGFkZHJlc3MgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBhZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IDxhPlZpZXcgRWxlY3Rpb248L2E+LFxyXG4gICAgICAgICAgICAgICAgZmx1aWQ6IHRydWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5FbGVjdGlvbnM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZWxlY3Rpb25zL25ld1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT48QnV0dG9uIGZsb2F0ZWQ9XCJyaWdodFwiIGNvbnRlbnQ9XCJDcmVhdGUgYW4gRWxlY3Rpb25cIiBpY29uPVwiYWRkIGNpcmNsZVwiIHByaW1hcnkgLz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVsZWN0aW9uSW5kZXg7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNyZWF0ZUZhY3RvcnkiLCJDYXJkIiwiQnV0dG9uIiwiTGluayIsImZhY3RvcnkiLCJMYXlvdXQiLCJFbGVjdGlvbkluZGV4IiwiaXRlbXMiLCJwcm9wcyIsImVsZWN0aW9ucyIsIm1hcCIsImFkZHJlc3MiLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwibWV0aG9kcyIsImdldERlcGxveWVkRWxlY3Rpb25zIiwiY2FsbCJdLCJzb3VyY2VSb290IjoiIn0=