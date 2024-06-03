"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Search;

var React = _interopRequireWildcard(require("react"));

var _icon = _interopRequireDefault(require("./icon.js"));

var _omitDollarPrefixedKeys = _interopRequireDefault(require("./omit-dollar-prefixed-keys.js"));

var _themeProvider = require("../styles/theme-provider.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Search(props) {
  return React.createElement(_themeProvider.ThemeContext.Consumer, null, function (theme) {
    return theme.icons && theme.icons.Search ? React.createElement(theme.icons.Search, _extends({
      title: "Search",
      viewBox: "0 0 24 24"
    }, (0, _omitDollarPrefixedKeys.default)(props))) : React.createElement(_icon.default, _extends({
      title: "Search",
      viewBox: "0 0 24 24"
    }, props), React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11 6C8.79086 6 7 7.79086 7 10C7 12.2091 8.79086 14 11 14C13.2091 14 15 12.2091 15 10C15 7.79086 13.2091 6 11 6ZM5 10C5 6.68629 7.68629 4 11 4C14.3137 4 17 6.68629 17 10C17 11.2958 16.5892 12.4957 15.8907 13.4765L19.7071 17.2929C20.0976 17.6834 20.0976 18.3166 19.7071 18.7071C19.3166 19.0976 18.6834 19.0976 18.2929 18.7071L14.4765 14.8907C13.4957 15.5892 12.2958 16 11 16C7.68629 16 5 13.3137 5 10Z"
    }));
  });
}