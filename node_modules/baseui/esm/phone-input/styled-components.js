function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { SIZE } from './constants.js';
import { styled, withStyle, withWrapper } from '../styles/index.js';
import { StyledList } from '../menu/index.js';
import { StyledDropdownListItem, StyledRoot as SelectStyledRoot } from '../select/index.js';
import defaultProps from '../select/default-props.js';
// The root element of the PhoneInputNext
export var StyledPhoneInputRoot = styled('div', {
  display: 'flex'
});
StyledPhoneInputRoot.displayName = "StyledPhoneInputRoot";
export var StyledFlagContainer = styled('span', function (_ref) {
  var _sizeToFont;

  var _ref$$size = _ref.$size,
      $size = _ref$$size === void 0 ? SIZE.default : _ref$$size,
      sizing = _ref.$theme.sizing;
  var sizeToFont = (_sizeToFont = {}, _defineProperty(_sizeToFont, SIZE.mini, sizing.scale700), _defineProperty(_sizeToFont, SIZE.compact, sizing.scale800), _defineProperty(_sizeToFont, SIZE.default, sizing.scale900), _defineProperty(_sizeToFont, SIZE.large, sizing.scale1000), _sizeToFont);
  return {
    fontSize: sizeToFont[$size]
  };
}); // An override component for the Select's Root styled element

StyledFlagContainer.displayName = "StyledFlagContainer";
export var StyledRoot = withStyle(SelectStyledRoot, function (props) {
  var _sizeToWidth;

  // hard coded widths for the flag dropdown anchor
  var sizeToWidth = (_sizeToWidth = {}, _defineProperty(_sizeToWidth, SIZE.mini, '50px'), _defineProperty(_sizeToWidth, SIZE.compact, '60px'), _defineProperty(_sizeToWidth, SIZE.default, '70px'), _defineProperty(_sizeToWidth, SIZE.large, '80px'), _sizeToWidth);
  return {
    width: sizeToWidth[props.$size || SIZE.default],
    display: 'inline-block'
  };
});
StyledRoot.displayName = "StyledRoot";
export var StyledDialCode = styled('div', function (_ref2) {
  var sizing = _ref2.$theme.sizing;
  return {
    marginLeft: sizing.scale100,
    display: 'flex',
    alignItems: 'center'
  };
});
StyledDialCode.displayName = "StyledDialCode";
export var StyledCountrySelectContainer = styled('div', {
  display: 'flex',
  alignItems: 'center'
});
StyledCountrySelectContainer.displayName = "StyledCountrySelectContainer";
export var StyledCountrySelectDropdownContainer = withStyle(StyledList, function (props) {
  var _props$$height = props.$height,
      $height = _props$$height === void 0 ? defaultProps.maxDropdownHeight : _props$$height;
  return {
    height: $height,
    paddingTop: 0,
    paddingBottom: 0
  };
});
StyledCountrySelectDropdownContainer.displayName = "StyledCountrySelectDropdownContainer";
export var StyledCountrySelectDropdownListItemElement = withStyle(StyledDropdownListItem, {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  display: 'flex',
  alignItems: 'center',
  height: '42px'
});
StyledCountrySelectDropdownListItemElement.displayName = "StyledCountrySelectDropdownListItemElement";
export var StyledCountrySelectDropdownListItem = withWrapper(StyledCountrySelectDropdownListItemElement, function (Styled) {
  return function StyledCountrySelectDropdownListItem(_ref3) {
    var item = _ref3.item,
        restProps = _objectWithoutProperties(_ref3, ["item"]);

    return React.createElement(Styled, restProps);
  };
});
export var StyledCountrySelectDropdownFlagColumn = styled('div', function (_ref4) {
  var sizing = _ref4.$theme.sizing;
  return {
    paddingLeft: sizing.scale600,
    display: 'flex',
    alignItems: 'center'
  };
});
StyledCountrySelectDropdownFlagColumn.displayName = "StyledCountrySelectDropdownFlagColumn";
export var StyledCountrySelectDropdownNameColumn = styled('div', function (_ref5) {
  var sizing = _ref5.$theme.sizing;
  return {
    paddingLeft: sizing.scale600
  };
});
StyledCountrySelectDropdownNameColumn.displayName = "StyledCountrySelectDropdownNameColumn";
export var StyledCountrySelectDropdownDialcodeColumn = styled('div', function (_ref6) {
  var sizing = _ref6.$theme.sizing;
  return {
    paddingRight: sizing.scale600,
    marginLeft: 'auto'
  };
});
StyledCountrySelectDropdownDialcodeColumn.displayName = "StyledCountrySelectDropdownDialcodeColumn";