"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/PageBanner.jsx":
/*!***************************************!*\
  !*** ./src/components/PageBanner.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {\n        }));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nvar ModalVideo = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(function() {\n    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! react-modal-video */ \"./node_modules/react-modal-video/lib/index.js\"));\n}, {\n    loadableGenerated: {\n        webpack: function() {\n            return [\n                /*require.resolve*/(/*! react-modal-video */ \"./node_modules/react-modal-video/lib/index.js\")\n            ];\n        },\n        modules: [\n            \"../components/PageBanner.jsx -> \" + \"react-modal-video\"\n        ]\n    },\n    ssr: false\n});\n_c = ModalVideo;\nvar MainBanner = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    _inherits(MainBanner, Component);\n    var _super = _createSuper(MainBanner);\n    function MainBanner() {\n        _classCallCheck(this, MainBanner);\n        var _this;\n        _this = _super.apply(this, arguments);\n        _defineProperty(_assertThisInitialized(_this), \"state\", {\n            isOpen: false\n        });\n        _defineProperty(_assertThisInitialized(_this), \"openModal\", function() {\n            _this.setState({\n                isOpen: true\n            });\n        });\n        return _this;\n    }\n    _createClass(MainBanner, [\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"header\", {\n                            className: \"pages-header circle-bg valign\",\n                            __source: {\n                                fileName: \"/Users/sarveshkarki/Documents/Rumsan Projects/Citopia-Website/src/components/PageBanner.jsx\",\n                                lineNumber: 20,\n                                columnNumber: 17\n                            },\n                            __self: this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                    className: \"container\",\n                                    __source: {\n                                        fileName: \"/Users/sarveshkarki/Documents/Rumsan Projects/Citopia-Website/src/components/PageBanner.jsx\",\n                                        lineNumber: 21,\n                                        columnNumber: 7\n                                    },\n                                    __self: this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                        className: \"row justify-content-center\",\n                                        __source: {\n                                            fileName: \"/Users/sarveshkarki/Documents/Rumsan Projects/Citopia-Website/src/components/PageBanner.jsx\",\n                                            lineNumber: 22,\n                                            columnNumber: 9\n                                        },\n                                        __self: this,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                                className: \"col-lg-10\",\n                                                __source: {\n                                                    fileName: \"/Users/sarveshkarki/Documents/Rumsan Projects/Citopia-Website/src/components/PageBanner.jsx\",\n                                                    lineNumber: 23,\n                                                    columnNumber: 11\n                                                },\n                                                __self: this,\n                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                                    className: \"cont mt-100 mb-50 text-center\",\n                                                    __source: {\n                                                        fileName: \"/Users/sarveshkarki/Documents/Rumsan Projects/Citopia-Website/src/components/PageBanner.jsx\",\n                                                        lineNumber: 24,\n                                                        columnNumber: 13\n                                                    },\n                                                    __self: this,\n                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                                                        className: \"color-font fw-700\",\n                                                        __source: {\n                                                            fileName: \"/Users/sarveshkarki/Documents/Rumsan Projects/Citopia-Website/src/components/PageBanner.jsx\",\n                                                            lineNumber: 25,\n                                                            columnNumber: 15\n                                                        },\n                                                        __self: this,\n                                                        children: \"Our dedicated team of creatives is bursting with talent, experience and passion for what we do.\"\n                                                    })\n                                                })\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                                className: \"col-lg-10\",\n                                                __source: {\n                                                    fileName: \"/Users/sarveshkarki/Documents/Rumsan Projects/Citopia-Website/src/components/PageBanner.jsx\",\n                                                    lineNumber: 31,\n                                                    columnNumber: 11\n                                                },\n                                                __self: this,\n                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                                    className: \"img\",\n                                                    __source: {\n                                                        fileName: \"/Users/sarveshkarki/Documents/Rumsan Projects/Citopia-Website/src/components/PageBanner.jsx\",\n                                                        lineNumber: 32,\n                                                        columnNumber: 13\n                                                    },\n                                                    __self: this,\n                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                                        src: \"/img/slid/about.jpg\",\n                                                        alt: \"\",\n                                                        __source: {\n                                                            fileName: \"/Users/sarveshkarki/Documents/Rumsan Projects/Citopia-Website/src/components/PageBanner.jsx\",\n                                                            lineNumber: 33,\n                                                            columnNumber: 15\n                                                        },\n                                                        __self: this\n                                                    })\n                                                })\n                                            })\n                                        ]\n                                    })\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                    className: \"half sub-bg\",\n                                    __source: {\n                                        fileName: \"/Users/sarveshkarki/Documents/Rumsan Projects/Citopia-Website/src/components/PageBanner.jsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 7\n                                    },\n                                    __self: this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                        className: \"circle-color\",\n                                        __source: {\n                                            fileName: \"/Users/sarveshkarki/Documents/Rumsan Projects/Citopia-Website/src/components/PageBanner.jsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 9\n                                        },\n                                        __self: this,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                                className: \"gradient-circle\",\n                                                __source: {\n                                                    fileName: \"/Users/sarveshkarki/Documents/Rumsan Projects/Citopia-Website/src/components/PageBanner.jsx\",\n                                                    lineNumber: 40,\n                                                    columnNumber: 11\n                                                },\n                                                __self: this\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                                className: \"gradient-circle two\",\n                                                __source: {\n                                                    fileName: \"/Users/sarveshkarki/Documents/Rumsan Projects/Citopia-Website/src/components/PageBanner.jsx\",\n                                                    lineNumber: 41,\n                                                    columnNumber: 11\n                                                },\n                                                __self: this\n                                            })\n                                        ]\n                                    })\n                                })\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ModalVideo, {\n                            channel: \"youtube\",\n                            isOpen: this.state.isOpen,\n                            videoId: \"_ysd-zHamjk\",\n                            onClose: function() {\n                                return _this.setState({\n                                    isOpen: false\n                                });\n                            },\n                            __source: {\n                                fileName: \"/Users/sarveshkarki/Documents/Rumsan Projects/Citopia-Website/src/components/PageBanner.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 17\n                            },\n                            __self: this\n                        })\n                    ]\n                }));\n            }\n        }\n    ]);\n    return MainBanner;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainBanner);\nvar _c;\n$RefreshReg$(_c, \"ModalVideo\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QYWdlQmFubmVyLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF3QztBQUNaO0FBQ007Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNsQyxHQUFLLENBQUNJLFVBQVUsR0FBR0QsbURBQU8sQ0FBQyxRQUFRO0lBQUZFLE1BQU0sQ0FBTkEsOEpBQTBCOzs7Ozs7Ozs7Ozs7SUFDdkRDLEdBQUcsRUFBRSxLQUFLOztLQURSRixVQUFVO0lBSVZHLFVBQVUsaUJBQWhCLFFBQVE7O2NBQUZBLFVBQVU7OEJBQVZBLFVBQVU7YUFBVkEsVUFBVTs4QkFBVkEsVUFBVTs7O3VEQUVaQyxDQUFLLFFBQUcsQ0FBQztZQUNMQyxNQUFNLEVBQUUsS0FBSztRQUNqQixDQUFDO3VEQUNEQyxDQUFTLFlBQUcsUUFDaEIsR0FEc0IsQ0FBQztrQkFDVkMsUUFBUSxDQUFDLENBQUNGO2dCQUFBQSxNQUFNLEVBQUUsSUFBSTtZQUFBLENBQUM7UUFDaEMsQ0FBQzs7O2lCQVBDRixVQUFVOztZQVNaSyxHQUFNLEVBQU5BLENBQU07bUJBQU5BLFFBQVEsQ0FBUkEsTUFBTSxHQUFHLENBQUM7O2dCQUNOLE1BQU07OzhGQUVHQyxDQUFNOzRCQUFDQyxTQUFTLEVBQUMsQ0FBK0I7Ozs7Ozs7O3FHQUMxREMsQ0FBRztvQ0FBQ0QsU0FBUyxFQUFDLENBQVc7Ozs7Ozs7b0hBQ3ZCQyxDQUFHO3dDQUFDRCxTQUFTLEVBQUMsQ0FBNEI7Ozs7Ozs7O2lIQUN4Q0MsQ0FBRztnREFBQ0QsU0FBUyxFQUFDLENBQVc7Ozs7Ozs7K0hBQ3ZCQyxDQUFHO29EQUFDRCxTQUFTLEVBQUMsQ0FBK0I7Ozs7Ozs7bUlBQzNDRSxDQUFFO3dEQUFDRixTQUFTLEVBQUMsQ0FBbUI7Ozs7Ozs7a0VBQUMsQ0FHbEM7Ozs7aUhBR0hDLENBQUc7Z0RBQUNELFNBQVMsRUFBQyxDQUFXOzs7Ozs7OytIQUN2QkMsQ0FBRztvREFBQ0QsU0FBUyxFQUFDLENBQUs7Ozs7Ozs7bUlBQ2pCRyxDQUFHO3dEQUFDQyxHQUFHLEVBQUMsQ0FBcUI7d0RBQUNDLEdBQUcsRUFBQyxDQUFFOzs7Ozs7Ozs7Ozs7O3FHQUs1Q0osQ0FBRztvQ0FBQ0QsU0FBUyxFQUFDLENBQWE7Ozs7Ozs7b0hBQ3pCQyxDQUFHO3dDQUFDRCxTQUFTLEVBQUMsQ0FBYzs7Ozs7Ozs7aUhBQzFCQyxDQUFHO2dEQUFDRCxTQUFTLEVBQUMsQ0FBaUI7Ozs7Ozs7O2lIQUMvQkMsQ0FBRztnREFBQ0QsU0FBUyxFQUFDLENBQXFCOzs7Ozs7Ozs7Ozs7OzZGQU03QlYsVUFBVTs0QkFDUGdCLE9BQU8sRUFBQyxDQUFTOzRCQUNqQlgsTUFBTSxFQUFFLElBQUksQ0FBQ0QsS0FBSyxDQUFDQyxNQUFNOzRCQUN6QlksT0FBTyxFQUFDLENBQWE7NEJBQ3JCQyxPQUFPLEVBQUUsUUFBUTtnQ0FBRixNQUFNLE9BQURYLFFBQVEsQ0FBQyxDQUFDRjtvQ0FBQUEsTUFBTSxFQUFFLEtBQUs7Z0NBQUEsQ0FBQzs7Ozs7Ozs7Ozs7WUFJNUQsQ0FBQzs7O1dBL0NDRixVQUFVO0VBQVNOLDRDQUFTO0FBa0RsQywrREFBZU0sVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BhZ2VCYW5uZXIuanN4Pzk0ZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuY29uc3QgTW9kYWxWaWRlbyA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdyZWFjdC1tb2RhbC12aWRlbycpLCB7XG4gICAgc3NyOiBmYWxzZVxufSk7XG5cbmNsYXNzIE1haW5CYW5uZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgfVxuICAgIG9wZW5Nb2RhbCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNPcGVuOiB0cnVlfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwicGFnZXMtaGVhZGVyIGNpcmNsZS1iZyB2YWxpZ25cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250IG10LTEwMCBtYi01MCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY29sb3ItZm9udCBmdy03MDBcIj5cbiAgICAgICAgICAgICAgICBPdXIgZGVkaWNhdGVkIHRlYW0gb2YgY3JlYXRpdmVzIGlzIGJ1cnN0aW5nIHdpdGggdGFsZW50LFxuICAgICAgICAgICAgICAgIGV4cGVyaWVuY2UgYW5kIHBhc3Npb24gZm9yIHdoYXQgd2UgZG8uXG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL3NsaWQvYWJvdXQuanBnXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmIHN1Yi1iZ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZS1jb2xvclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JhZGllbnQtY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmFkaWVudC1jaXJjbGUgdHdvXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG5cbiAgICAgICAgICAgICAgICB7LyogSWYgeW91IHdhbnQgdG8gY2hhbmdlIHRoZSB2aWRlbyBuZWVkIHRvIHVwZGF0ZSBiZWxvdyB2aWRlb0lEICovfVxuICAgICAgICAgICAgICAgIDxNb2RhbFZpZGVvIFxuICAgICAgICAgICAgICAgICAgICBjaGFubmVsPSd5b3V0dWJlJyBcbiAgICAgICAgICAgICAgICAgICAgaXNPcGVuPXt0aGlzLnN0YXRlLmlzT3Blbn0gXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvSWQ9J195c2QtekhhbWprJyBcbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7aXNPcGVuOiBmYWxzZX0pfSBcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluQmFubmVyOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxpbmsiLCJkeW5hbWljIiwiTW9kYWxWaWRlbyIsImltcG9ydCIsInNzciIsIk1haW5CYW5uZXIiLCJzdGF0ZSIsImlzT3BlbiIsIm9wZW5Nb2RhbCIsInNldFN0YXRlIiwicmVuZGVyIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDEiLCJpbWciLCJzcmMiLCJhbHQiLCJjaGFubmVsIiwidmlkZW9JZCIsIm9uQ2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/PageBanner.jsx\n");

/***/ })

});