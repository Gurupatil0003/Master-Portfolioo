function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import deepMerge from '../utils/deep-merge.js';
import colorTokens from './light-theme/color-tokens.js';
import getSemanticColors from './light-theme/color-semantic-tokens.js';
import getColorComponentTokens from './light-theme/color-component-tokens.js';
import getDeprecatedSemanticColors from './light-theme/color-deprecated-semantic-tokens.js';
import lighting from './shared/lighting.js';
import borders from './shared/borders.js';
import getTypography from './shared/typography.js';
import animation from './shared/animation.js';
import breakpoints from './shared/breakpoints.js';
import grid from './shared/grid.js';
import mediaQuery from './shared/media-query.js';
import sizing from './shared/sizing.js';
export default function createTheme( // overrides for colorTokens + primatyFontFamily
themeBuildingPrimitives, overrides) {
  // extract font-family from the themeBuildingPrimitives
  var primaryFontFamily = themeBuildingPrimitives.primaryFontFamily,
      colors = _objectWithoutProperties(themeBuildingPrimitives, ["primaryFontFamily"]); // color keys in the themeBuildingPrimitives are the same as
  // the colorTokens so we just extend it with overrides
  // passed as an argument


  var colorTokensWithOverrides = _objectSpread({}, colorTokens, {}, colors);

  var theme = {
    colors: _objectSpread({}, colorTokensWithOverrides, {}, getColorComponentTokens(colorTokensWithOverrides), {}, getDeprecatedSemanticColors(colorTokensWithOverrides), {}, getSemanticColors(colorTokensWithOverrides)),
    animation: animation,
    breakpoints: breakpoints,
    borders: borders,
    direction: 'auto',
    grid: grid,
    lighting: lighting,
    mediaQuery: mediaQuery,
    sizing: sizing,
    typography: primaryFontFamily ? // have to check if primaryFontFamily override is passed in
    // and use it to build the typography theme value
    // otherwise the default primaryFontFamily value is used
    getTypography({
      primaryFontFamily: primaryFontFamily
    }) : getTypography(),
    // TODO(#2318) Remove in v10, the next major version.
    // Do not use.
    zIndex: {
      modal: 2000
    }
  };
  return deepMerge(theme, overrides);
}