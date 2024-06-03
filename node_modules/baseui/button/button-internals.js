"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ButtonInternals;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = require("./styled-components.js");

var _utils = require("./utils.js");

var _overrides = require("../helpers/overrides.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ButtonInternals(props) {
  var children = props.children,
      _props$overrides = props.overrides,
      overrides = _props$overrides === void 0 ? {} : _props$overrides,
      startEnhancer = props.startEnhancer,
      endEnhancer = props.endEnhancer;

  var _getOverrides = (0, _overrides.getOverrides)(overrides.StartEnhancer, _styledComponents.StartEnhancer),
      _getOverrides2 = _slicedToArray(_getOverrides, 2),
      StartEnhancer = _getOverrides2[0],
      startEnhancerProps = _getOverrides2[1];

  var _getOverrides3 = (0, _overrides.getOverrides)(overrides.EndEnhancer, _styledComponents.EndEnhancer),
      _getOverrides4 = _slicedToArray(_getOverrides3, 2),
      EndEnhancer = _getOverrides4[0],
      endEnhancerProps = _getOverrides4[1];

  var sharedProps = (0, _utils.getSharedProps)(props);
  return React.createElement(React.Fragment, null, startEnhancer && React.createElement(StartEnhancer, _extends({}, sharedProps, startEnhancerProps), typeof startEnhancer === 'function' ? startEnhancer(sharedProps) : startEnhancer), children, endEnhancer && React.createElement(EndEnhancer, _extends({}, sharedProps, endEnhancerProps), typeof endEnhancer === 'function' ? endEnhancer(sharedProps) : endEnhancer));
}