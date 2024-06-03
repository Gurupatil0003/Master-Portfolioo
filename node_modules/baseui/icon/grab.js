"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Grab;

var React = _interopRequireWildcard(require("react"));

var _icon = _interopRequireDefault(require("./icon.js"));

var _omitDollarPrefixedKeys = _interopRequireDefault(require("./omit-dollar-prefixed-keys.js"));

var _themeProvider = require("../styles/theme-provider.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Grab(props) {
  return React.createElement(_themeProvider.ThemeContext.Consumer, null, function (theme) {
    return theme.icons && theme.icons.Grab ? React.createElement(theme.icons.Grab, _extends({
      title: "Grab",
      viewBox: "0 0 24 24"
    }, (0, _omitDollarPrefixedKeys.default)(props))) : React.createElement(_icon.default, _extends({
      title: "Grab",
      viewBox: "0 0 24 24"
    }, props), React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M5 8C4.44775 8 4 8.44775 4 9C4 9.55225 4.44775 10 5 10H19C19.5522 10 20 9.55225 20 9C20 8.44775 19.5522 8 19 8H5ZM5 14C4.44775 14 4 14.4478 4 15C4 15.5522 4.44775 16 5 16H19C19.5522 16 20 15.5522 20 15C20 14.4478 19.5522 14 19 14H5Z"
    }));
  });
}