function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { getTrackBackground } from 'react-range';
import { styled } from '../styles/index.js';
export var Root = styled('div', {
  position: 'relative',
  width: '100%'
});
Root.displayName = "Root";
Root.displayName = 'StyledRoot';
export var Track = styled('div', function (props) {
  var $theme = props.$theme,
      _props$$value = props.$value,
      $value = _props$$value === void 0 ? [] : _props$$value,
      $disabled = props.$disabled,
      $isDragged = props.$isDragged;
  var sizing = $theme.sizing;
  var cursor = 'inherit';

  if ($disabled) {
    cursor = 'not-allowed';
  } else if ($isDragged) {
    cursor = 'grabbing';
  } else if ($value.length === 1) {
    cursor = 'pointer';
  }

  return {
    paddingTop: sizing.scale1000,
    paddingBottom: sizing.scale600,
    paddingRight: sizing.scale600,
    paddingLeft: sizing.scale600,
    display: 'flex',
    cursor: cursor
  };
});
Track.displayName = "Track";
Track.displayName = 'StyledTrack';
export var InnerTrack = styled('div', function (props) {
  var $theme = props.$theme,
      _props$$value2 = props.$value,
      $value = _props$$value2 === void 0 ? [] : _props$$value2,
      $min = props.$min,
      $max = props.$max,
      $disabled = props.$disabled;
  var colors = $theme.colors,
      borders = $theme.borders,
      sizing = $theme.sizing,
      direction = $theme.direction;
  var borderRadius = $theme.borders.useRoundedCorners ? borders.radius100 : 0;
  return {
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    background: getTrackBackground({
      values: $value,
      colors: $value.length === 1 ? [colors.primary, colors.mono400] : [colors.mono400, colors.primary, colors.mono400],
      min: $min || 0,
      max: $max || 0,
      rtl: direction === 'rtl'
    }),
    height: sizing.scale100,
    width: '100%',
    alignSelf: 'center',
    cursor: $disabled ? 'not-allowed' : 'inherit'
  };
});
InnerTrack.displayName = "InnerTrack";
InnerTrack.displayName = 'StyledInnerTrack';
export var Tick = styled('div', function (props) {
  return _objectSpread({}, props.$theme.typography.font200);
});
Tick.displayName = "Tick";
Tick.displayName = 'StyledTick';
export var TickBar = styled('div', function (props) {
  var $theme = props.$theme;
  var sizing = $theme.sizing;
  return {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: sizing.scale600,
    paddingLeft: sizing.scale600,
    paddingBottom: sizing.scale400
  };
});
TickBar.displayName = "TickBar";
TickBar.displayName = 'StyledTickBar';
export var Thumb = styled('div', function (props) {
  var $theme = props.$theme,
      _props$$value3 = props.$value,
      $value = _props$$value3 === void 0 ? [] : _props$$value3,
      $thumbIndex = props.$thumbIndex,
      $disabled = props.$disabled;
  var isLeft = $value.length === 2 && $thumbIndex === 0;
  var isRight = $value.length === 2 && $thumbIndex === 1;

  if ($theme.direction === 'rtl' && (isRight || isLeft)) {
    isLeft = !isLeft;
    isRight = !isRight;
  }

  return {
    height: '24px',
    width: isLeft || isRight ? '12px' : '24px',
    borderTopLeftRadius: isRight ? '1px' : '4px',
    borderTopRightRadius: isLeft ? '1px' : '4px',
    borderBottomLeftRadius: isRight ? '1px' : '4px',
    borderBottomRightRadius: isLeft ? '1px' : '4px',
    backgroundColor: $theme.colors.mono100,
    display: 'flex',
    outline: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: $theme.colors.mono400,
    boxShadow: props.$isFocusVisible ? "0 0 0 3px ".concat($theme.colors.accent) : '0 1px 4px rgba(0, 0, 0, 0.12)',
    cursor: $disabled ? 'not-allowed' : 'inherit'
  };
});
Thumb.displayName = "Thumb";
Thumb.displayName = 'StyledThumb';
export var InnerThumb = styled('div', function (props) {
  var $theme = props.$theme,
      $isDragged = props.$isDragged;
  return {
    height: '8px',
    width: '2px',
    borderTopLeftRadius: '2px',
    borderTopRightRadius: '2px',
    borderBottomRightRadius: '2px',
    borderBottomLeftRadius: '2px',
    backgroundColor: $isDragged ? $theme.colors.primary : $theme.colors.mono600
  };
});
InnerThumb.displayName = "InnerThumb";
InnerThumb.displayName = 'StyledInnerThumb';
export var ThumbValue = styled('div', function (props) {
  var $theme = props.$theme;
  return _objectSpread({
    position: 'absolute',
    top: "-".concat($theme.sizing.scale800)
  }, $theme.typography.font200, {
    backgroundColor: 'transparent',
    whiteSpace: 'nowrap'
  });
});
ThumbValue.displayName = "ThumbValue";
ThumbValue.displayName = 'StyledThumbValue';