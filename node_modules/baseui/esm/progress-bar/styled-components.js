function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled, hexToRgb } from '../styles/index.js';
export var Root = styled('div', function (props) {
  return {
    width: '100%'
  };
});
Root.displayName = "Root";
export var Bar = styled('div', function (props) {
  var $theme = props.$theme;
  var colors = $theme.colors,
      sizing = $theme.sizing,
      borders = $theme.borders;
  var borderRadius = borders.useRoundedCorners ? sizing.scale0 : 0;
  return {
    marginLeft: sizing.scale500,
    marginRight: sizing.scale500,
    marginTop: sizing.scale500,
    marginBottom: sizing.scale500,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    backgroundColor: hexToRgb(colors.progressbarTrackFill, '0.16'),
    height: '4px',
    position: 'relative',
    overflow: 'hidden'
  };
});
Bar.displayName = "Bar";
export var BarProgress = styled('div', function (props) {
  var $theme = props.$theme,
      $value = props.$value,
      $successValue = props.$successValue,
      $infinite = props.$infinite;
  var colors = $theme.colors,
      sizing = $theme.sizing,
      borders = $theme.borders;
  var width = "".concat($value / $successValue * 100, "%");
  var borderRadius = borders.useRoundedCorners ? sizing.scale0 : 0;
  var animationStyles = $infinite ? {
    width: '100%',
    position: 'absolute',
    animationDuration: '2.1s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'cubic-bezier(0.65, 0.815, 0.735, 0.395)',
    animationName: {
      '0%': {
        left: '-200%',
        right: '100%'
      },
      '60%': {
        left: '107%',
        right: '-8%'
      },
      '100%': {
        left: '107%',
        right: '-8%'
      }
    }
  } : {
    width: width,
    transition: 'width 0.5s'
  };
  return _objectSpread({
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    backgroundColor: colors.accent,
    height: '100%'
  }, animationStyles);
});
BarProgress.displayName = "BarProgress";
export var Label = styled('div', function (props) {
  return _objectSpread({
    textAlign: 'center'
  }, props.$theme.typography.font150, {
    color: props.$theme.colors.mono700
  });
});
Label.displayName = "Label";