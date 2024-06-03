function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles/index.js';
export var StyledFileDragAndDrop = styled('div', function (props) {
  return {
    alignItems: 'center',
    backgroundColor: props.$isDragActive ? props.$theme.colors.fileUploaderBackgroundColorActive : props.$theme.colors.fileUploaderBackgroundColor,
    borderColor: props.$isDragActive ? props.$theme.colors.fileUploaderBorderColorActive : props.$theme.colors.fileUploaderBorderColorDefault,
    borderStyle: props.$afterFileDrop ? 'none' : 'dashed',
    borderWidth: props.$theme.sizing.scale0,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    outline: 'none',
    paddingTop: props.$theme.sizing.scale900,
    paddingRight: props.$theme.sizing.scale800,
    paddingBottom: props.$afterFileDrop ? props.$theme.sizing.scale300 : props.$theme.sizing.scale900,
    paddingLeft: props.$theme.sizing.scale800,
    width: '100%'
  };
});
StyledFileDragAndDrop.displayName = "StyledFileDragAndDrop";
export var StyledContentMessage = styled('div', function (props) {
  return _objectSpread({}, props.$theme.typography.font300, {
    color: props.$afterFileDrop ? props.$theme.colors.fileUploaderMessageColor : null,
    marginBottom: props.$afterFileDrop ? props.$theme.sizing.scale600 : null
  });
});
StyledContentMessage.displayName = "StyledContentMessage";
export var StyledContentSeparator = StyledContentMessage;
export var StyledErrorMessage = styled('div', function (props) {
  return _objectSpread({}, props.$theme.typography.font300, {
    color: props.$theme.colors.negative,
    marginBottom: props.$afterFileDrop ? props.$theme.sizing.scale600 : null
  });
});
StyledErrorMessage.displayName = "StyledErrorMessage";
export var StyledRoot = styled('div', function (props) {
  return _objectSpread({}, props.$theme.typography.font300, {
    color: props.$theme.colors.fileUploaderMessageColor
  });
});
StyledRoot.displayName = "StyledRoot";
export var StyledHiddenInput = styled('input', {});
StyledHiddenInput.displayName = "StyledHiddenInput";