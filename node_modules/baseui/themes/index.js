"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createTheme", {
  enumerable: true,
  get: function get() {
    return _creator.default;
  }
});
Object.defineProperty(exports, "LightTheme", {
  enumerable: true,
  get: function get() {
    return _lightTheme.LightTheme;
  }
});
Object.defineProperty(exports, "LightThemeMove", {
  enumerable: true,
  get: function get() {
    return _lightThemeWithMove.LightThemeMove;
  }
});
Object.defineProperty(exports, "DarkTheme", {
  enumerable: true,
  get: function get() {
    return _darkTheme.DarkTheme;
  }
});
Object.defineProperty(exports, "darkThemeOverrides", {
  enumerable: true,
  get: function get() {
    return _darkTheme.DarkTheme;
  }
});
Object.defineProperty(exports, "DarkThemeMove", {
  enumerable: true,
  get: function get() {
    return _darkThemeWithMove.DarkThemeMove;
  }
});
exports.darkThemePrimitives = exports.lightThemePrimitives = void 0;

var _creator = _interopRequireDefault(require("./creator.js"));

var _lightTheme = require("./light-theme/light-theme.js");

var _lightThemeWithMove = require("./move-theme/light-theme-with-move.js");

var _colorTokens = _interopRequireDefault(require("./light-theme/color-tokens.js"));

var _typography = require("./shared/typography.js");

var _darkTheme = require("./dark-theme/dark-theme.js");

var _darkThemeWithMove = require("./move-theme/dark-theme-with-move.js");

var _colorTokens2 = _interopRequireDefault(require("./dark-theme/color-tokens.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var lightThemePrimitives = _objectSpread({}, _colorTokens.default, {}, _typography.fontTokens);

exports.lightThemePrimitives = lightThemePrimitives;

var darkThemePrimitives = _objectSpread({}, _colorTokens2.default, {}, _typography.fontTokens);

exports.darkThemePrimitives = darkThemePrimitives;