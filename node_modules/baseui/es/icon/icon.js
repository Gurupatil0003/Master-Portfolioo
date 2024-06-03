function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { getOverrides } from '../helpers/overrides.js';
import { Svg as StyledSvg } from './styled-components.js';
export default function Icon(props) {
  const {
    children,
    title,
    overrides = {},
    size,
    color,
    ...restProps
  } = props;
  const sharedProps = {
    $size: size,
    $color: color
  };
  const [Svg, overrideProps] = getOverrides(overrides.Svg, StyledSvg);
  return React.createElement(Svg, _extends({
    "data-baseweb": "icon"
  }, restProps, sharedProps, overrideProps), title ? React.createElement("title", null, title) : null, children);
}