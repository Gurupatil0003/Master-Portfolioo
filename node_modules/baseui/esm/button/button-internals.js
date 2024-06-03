function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { StartEnhancer as StyledStartEnhancer, EndEnhancer as StyledEndEnhancer } from './styled-components.js';
import { getSharedProps } from './utils.js';
import { getOverrides } from '../helpers/overrides.js';
export default function ButtonInternals(props) {
  var children = props.children,
      _props$overrides = props.overrides,
      overrides = _props$overrides === void 0 ? {} : _props$overrides,
      startEnhancer = props.startEnhancer,
      endEnhancer = props.endEnhancer;

  var _getOverrides = getOverrides(overrides.StartEnhancer, StyledStartEnhancer),
      _getOverrides2 = _slicedToArray(_getOverrides, 2),
      StartEnhancer = _getOverrides2[0],
      startEnhancerProps = _getOverrides2[1];

  var _getOverrides3 = getOverrides(overrides.EndEnhancer, StyledEndEnhancer),
      _getOverrides4 = _slicedToArray(_getOverrides3, 2),
      EndEnhancer = _getOverrides4[0],
      endEnhancerProps = _getOverrides4[1];

  var sharedProps = getSharedProps(props);
  return React.createElement(React.Fragment, null, startEnhancer && React.createElement(StartEnhancer, _extends({}, sharedProps, startEnhancerProps), typeof startEnhancer === 'function' ? startEnhancer(sharedProps) : startEnhancer), children, endEnhancer && React.createElement(EndEnhancer, _extends({}, sharedProps, endEnhancerProps), typeof endEnhancer === 'function' ? endEnhancer(sharedProps) : endEnhancer));
}