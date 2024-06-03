/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles/index.js';
export function getSvgStyles(_ref) {
  var $theme = _ref.$theme,
      $size = _ref.$size,
      $color = _ref.$color;

  if ($size) {
    if ($theme.sizing[$size]) {
      $size = $theme.sizing[$size];
    } else if (typeof $size === 'number') {
      $size = "".concat($size, "px");
    }
  } else {
    $size = $theme.sizing.scale600;
  }

  if ($color && $theme.colors[$color]) {
    $color = $theme.colors[$color];
  }

  return {
    display: 'inline-block',
    fill: $color || 'currentColor',
    color: $color || 'currentColor',
    height: $size,
    width: $size
  };
}
export var Svg = styled('svg', getSvgStyles);
Svg.displayName = "Svg";