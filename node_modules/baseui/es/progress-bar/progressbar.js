function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { getOverrides } from '../helpers/overrides.js';
import { Root as StyledRoot, Bar as StyledBar, Label as StyledLabel, BarProgress as StyledBarProgress } from './styled-components.js';

class ProgressBar extends React.Component {
  render() {
    const {
      overrides = {},
      getProgressLabel,
      value,
      successValue,
      showLabel,
      infinite,
      errorMessage
    } = this.props;
    const [Root, rootProps] = getOverrides(overrides.Root, StyledRoot);
    const [Bar, barProps] = getOverrides(overrides.Bar, StyledBar);
    const [BarProgress, barProgressProps] = getOverrides(overrides.BarProgress, StyledBarProgress);
    const [Label, labelProps] = getOverrides(overrides.Label, StyledLabel);
    const sharedProps = {
      $value: value,
      $successValue: successValue,
      $infinite: infinite
    };
    return React.createElement(Root, _extends({
      "data-baseweb": "progress-bar",
      role: "progressbar",
      "aria-valuenow": infinite ? null : value,
      "aria-valuemin": infinite ? null : 0,
      "aria-valuemax": infinite ? null : 100,
      "aria-invalid": errorMessage ? true : null,
      "aria-errormessage": errorMessage
    }, sharedProps, rootProps), React.createElement(Bar, _extends({}, sharedProps, barProps), React.createElement(BarProgress, _extends({}, sharedProps, barProgressProps))), showLabel && React.createElement(Label, _extends({}, sharedProps, labelProps), getProgressLabel(value, successValue)));
  }

}

_defineProperty(ProgressBar, "defaultProps", {
  getProgressLabel: (value, successValue) => `${Math.round(value / successValue * 100)}% Loaded`,
  successValue: 100,
  value: 0,
  overrides: {},
  showLabel: false,
  infinite: false
});

export default ProgressBar;