"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Alert;

var React = _interopRequireWildcard(require("react"));

var _icon = _interopRequireDefault(require("./icon.js"));

var _omitDollarPrefixedKeys = _interopRequireDefault(require("./omit-dollar-prefixed-keys.js"));

var _themeProvider = require("../styles/theme-provider.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Alert(props) {
  return React.createElement(_themeProvider.ThemeContext.Consumer, null, function (theme) {
    return theme.icons && theme.icons.Alert ? React.createElement(theme.icons.Alert, _extends({
      title: "Alert",
      viewBox: "0 0 24 24"
    }, (0, _omitDollarPrefixedKeys.default)(props))) : React.createElement(_icon.default, _extends({
      title: "Alert",
      viewBox: "0 0 24 24"
    }, props), React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 21C16.9706 21 21 16.9706 21 12C21 7.02945 16.9706 3 12 3C7.02942 3 3 7.02945 3 12C3 16.9706 7.02942 21 12 21ZM12 6C12.5523 6 13 6.44772 13 7V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V7C11 6.44772 11.4477 6 12 6ZM13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17Z"
    }));
  });
}