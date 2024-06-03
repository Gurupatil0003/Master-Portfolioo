function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles/index.js';
import { ARTWORK_SIZES } from './constants.js';
export var StyledRoot = styled('li', function (_ref) {
  var $theme = _ref.$theme;
  return {
    alignItems: 'center',
    backgroundColor: $theme.colors.backgroundPrimary,
    display: 'flex',
    listStyleType: 'none',
    width: '100%'
  };
});
StyledRoot.displayName = "StyledRoot";
export var StyledContent = styled('div', function (_ref2) {
  var $mLeft = _ref2.$mLeft,
      $sublist = _ref2.$sublist,
      $theme = _ref2.$theme;
  return _objectSpread({}, $theme.borders.border100, {
    alignItems: 'center',
    borderTop: 'none',
    borderRight: 'none',
    borderLeft: 'none',
    display: 'flex',
    flexGrow: 1,
    height: $sublist ? '48px' : '72px',
    justifyContent: 'space-between',
    paddingRight: $theme.sizing.scale500,
    marginLeft: $mLeft ? $theme.sizing.scale500 : null
  });
});
StyledContent.displayName = "StyledContent";
export var StyledEndEnhancerContainer = styled('div', {
  alignItems: 'center',
  display: 'flex'
});
StyledEndEnhancerContainer.displayName = "StyledEndEnhancerContainer";
export var StyledArtworkContainer = styled('div', function (_ref3) {
  var $artworkSize = _ref3.$artworkSize,
      $theme = _ref3.$theme;
  var padding = null;

  switch ($artworkSize) {
    case ARTWORK_SIZES.SMALL:
      padding = $theme.sizing.scale800;
      break;

    case ARTWORK_SIZES.LARGE:
      padding = $theme.sizing.scale600;
      break;

    case ARTWORK_SIZES.MEDIUM:
    default:
      padding = $theme.sizing.scale700;
  }

  return {
    alignItems: 'center',
    display: 'flex',
    paddingLeft: padding,
    paddingRight: padding
  };
});
StyledArtworkContainer.displayName = "StyledArtworkContainer";