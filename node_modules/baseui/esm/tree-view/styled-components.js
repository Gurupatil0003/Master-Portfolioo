function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles/index.js';
export var StyledTreeItemList = styled('ul', function (_ref) {
  var $theme = _ref.$theme,
      $indentGuides = _ref.$indentGuides,
      $isChildNode = _ref.$isChildNode,
      _ref$$expanded = _ref.$expanded,
      $expanded = _ref$$expanded === void 0 ? true : _ref$$expanded;
  return {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: $isChildNode ? $theme.sizing.scale550 : 0,
    marginRight: 0,
    overflow: 'auto',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: $isChildNode ? $theme.sizing.scale200 : 0,
    paddingRight: 0,
    position: 'relative',
    outline: 'none',
    display: $expanded ? 'block' : 'none',
    borderLeft: $indentGuides && $isChildNode ? "1px solid ".concat($theme.colors.borderOpaque) : 'none'
  };
});
StyledTreeItemList.displayName = "StyledTreeItemList";
export var StyledTreeItem = styled('li', function (_ref2) {
  var $theme = _ref2.$theme,
      $isLeafNode = _ref2.$isLeafNode;
  return {
    cursor: $isLeafNode ? 'auto' : 'pointer',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    overflow: 'auto',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    position: 'relative',
    outline: 'none'
  };
});
StyledTreeItem.displayName = "StyledTreeItem";
export var StyledItemContent = styled('div', function (_ref3) {
  var $theme = _ref3.$theme,
      $isSelected = _ref3.$isSelected,
      $isFocusVisible = _ref3.$isFocusVisible;
  return _objectSpread({}, $theme.typography.font300, {
    alignItems: 'center',
    boxSizing: 'border-box',
    color: $theme.colors.primary,
    display: 'flex',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: $theme.sizing.scale200,
    paddingRight: $theme.sizing.scale200,
    paddingTop: $theme.sizing.scale100,
    paddingBottom: $theme.sizing.scale100,
    outline: $isSelected && $isFocusVisible ? "3px solid ".concat($theme.colors.accent) : 'none',
    outlineOffset: '-3px',
    ':hover': {
      backgroundColor: $theme.colors.mono300
    }
  });
});
StyledItemContent.displayName = "StyledItemContent";
export var StyledIconContainer = styled('div', function (_ref4) {
  var $theme = _ref4.$theme;
  return {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: $theme.sizing.scale200
  };
});
StyledIconContainer.displayName = "StyledIconContainer";
export var StyledNoIconContainer = styled('div', function (_ref5) {
  var $theme = _ref5.$theme;
  return {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: $theme.sizing.scale500,
    width: 0,
    height: '1em'
  };
});
StyledNoIconContainer.displayName = "StyledNoIconContainer";