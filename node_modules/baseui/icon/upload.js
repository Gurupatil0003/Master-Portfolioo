"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Upload;

var React = _interopRequireWildcard(require("react"));

var _icon = _interopRequireDefault(require("./icon.js"));

var _omitDollarPrefixedKeys = _interopRequireDefault(require("./omit-dollar-prefixed-keys.js"));

var _themeProvider = require("../styles/theme-provider.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Upload(props) {
  return React.createElement(_themeProvider.ThemeContext.Consumer, null, function (theme) {
    return theme.icons && theme.icons.Upload ? React.createElement(theme.icons.Upload, _extends({
      title: "Upload",
      viewBox: "0 0 24 24"
    }, (0, _omitDollarPrefixedKeys.default)(props))) : React.createElement(_icon.default, _extends({
      title: "Upload",
      viewBox: "0 0 24 24"
    }, props), React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14.5 5C12.8755 5 11.4519 5.86084 10.6609 7.15112C10.2905 7.05249 9.90137 7 9.5 7C7.14185 7 5.20752 8.81372 5.01562 11.1221C3.28247 11.5605 2 13.1304 2 15C2 17.2092 3.79077 19 6 19H11V14.4143L9.70703 15.707C9.31665 16.0977 8.68335 16.0977 8.29297 15.707C7.90234 15.3167 7.90234 14.6833 8.29297 14.293L11.293 11.293C11.6833 10.9023 12.3167 10.9023 12.707 11.293L15.707 14.293C16.0977 14.6833 16.0977 15.3167 15.707 15.707C15.3167 16.0977 14.6833 16.0977 14.293 15.707L13 14.4143V19H17C19.7615 19 22 16.7615 22 14C22 11.9492 20.7656 10.187 18.9993 9.41577C18.9543 6.96924 16.9573 5 14.5 5Z"
    }));
  });
}