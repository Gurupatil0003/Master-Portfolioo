function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { getOverrides } from '../helpers/overrides.js';
import { StyledCell as DefaultStyledCell } from './styled-components.js';
export default function Cell({
  align,
  children,
  gridColumns,
  gridGaps,
  gridGutters,
  gridUnit,
  order,
  skip,
  span,
  overrides = {}
}) {
  const [StyledCell, overrideProps] = getOverrides(overrides.Cell, DefaultStyledCell);
  return React.createElement(StyledCell, _extends({
    $align: align,
    $gridColumns: gridColumns,
    $gridGaps: gridGaps,
    $gridGutters: gridGutters,
    $gridUnit: gridUnit,
    $order: order,
    $skip: skip,
    $span: span
  }, overrideProps), children);
}