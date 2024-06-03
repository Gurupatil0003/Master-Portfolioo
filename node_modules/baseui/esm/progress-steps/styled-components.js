function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles/index.js';
export var StyledProgressSteps = styled('ol', function (_ref) {
  var $theme = _ref.$theme;
  return {
    backgroundColor: $theme.colors.listHeaderFill,
    display: 'inline-block',
    marginBottom: 0,
    marginTop: 0,
    paddingTop: $theme.sizing.scale300,
    paddingRight: $theme.sizing.scale500,
    paddingLeft: $theme.sizing.scale500,
    paddingBottom: $theme.sizing.scale300
  };
});
StyledProgressSteps.displayName = "StyledProgressSteps";
export var StyledStep = styled('li', function (_ref2) {
  var $theme = _ref2.$theme;
  return {
    listStyleType: 'none',
    position: 'relative',
    overflow: 'visible'
  };
});
StyledStep.displayName = "StyledStep";
export var StyledIcon = styled('div', function (_ref3) {
  var $theme = _ref3.$theme,
      $isActive = _ref3.$isActive,
      $isCompleted = _ref3.$isCompleted,
      $disabled = _ref3.$disabled;
  var currentColor = $theme.colors.mono400;
  var size = $theme.sizing.scale300;
  var marginRight = $theme.sizing.scale500;
  var marginLeft = $theme.sizing.scale100;
  var font = $theme.typography.font300;

  if ($isCompleted) {
    currentColor = $theme.colors.primary;
  } else if ($isActive) {
    font = $theme.typography.font350;
    currentColor = $theme.colors.progressStepsActiveFill;
  }

  if ($isActive) {
    size = $theme.sizing.scale600;
    marginLeft = 0;
    marginRight = $theme.sizing.scale300;
  }

  var marginTop = "calc((".concat(font.lineHeight, " - ").concat(size, ") / 2)");

  if ($theme.direction === 'rtl') {
    var _ref4 = [marginRight, marginLeft];
    marginLeft = _ref4[0];
    marginRight = _ref4[1];
  }

  return {
    marginRight: marginRight,
    marginLeft: marginLeft,
    marginTop: marginTop,
    width: size,
    height: size,
    lineHeight: size,
    borderTopLeftRadius: size,
    borderTopRightRadius: size,
    borderBottomRightRadius: size,
    borderBottomLeftRadius: size,
    backgroundColor: currentColor,
    float: $theme.direction === 'rtl' ? 'right' : 'left',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };
});
StyledIcon.displayName = "StyledIcon";
export var StyledInnerIcon = styled('div', function (_ref5) {
  var $theme = _ref5.$theme;
  return {
    width: $theme.sizing.scale100,
    height: $theme.sizing.scale100,
    lineHeight: $theme.sizing.scale100,
    borderTopLeftRadius: $theme.sizing.scale100,
    borderTopRightRadius: $theme.sizing.scale100,
    borderBottomRightRadius: $theme.sizing.scale100,
    borderBottomLeftRadius: $theme.sizing.scale100,
    backgroundColor: $theme.colors.progressStepsActiveText,
    textAlign: 'center'
  };
});
StyledInnerIcon.displayName = "StyledInnerIcon";
export var StyledContent = styled('div', function (_ref6) {
  var $theme = _ref6.$theme;
  var marginDir = $theme.direction === 'rtl' ? 'marginRight' : 'marginLeft';
  return _defineProperty({}, marginDir, $theme.sizing.scale900);
});
StyledContent.displayName = "StyledContent";
export var StyledContentTitle = styled('div', function (_ref8) {
  var $theme = _ref8.$theme,
      $isActive = _ref8.$isActive;
  var color = $theme.colors.contentSecondary;
  var font = $theme.typography.font300;

  if ($isActive) {
    color = $theme.colors.contentPrimary;
    font = $theme.typography.font350;
  }

  return _objectSpread({}, font, {
    color: color
  });
});
StyledContentTitle.displayName = "StyledContentTitle";
export var StyledContentTail = styled('div', function (_ref9) {
  var _ref10;

  var $theme = _ref9.$theme,
      $isCompleted = _ref9.$isCompleted,
      $isActive = _ref9.$isActive;
  var currentColor = $theme.colors.mono400;
  var size = $theme.sizing.scale300;
  var font = $theme.typography.font300;

  if ($isActive) {
    size = $theme.sizing.scale600;
  }

  if ($isCompleted) {
    currentColor = $theme.colors.primary;
  } else if (!$isCompleted && $isActive) {
    font = $theme.typography.font350;
  }

  var dir = $theme.direction === 'rtl' ? 'right' : 'left';
  return _ref10 = {
    position: 'absolute'
  }, _defineProperty(_ref10, dir, '7px'), _defineProperty(_ref10, "top", 0), _defineProperty(_ref10, "height", "calc(100% + ".concat($theme.sizing.scale500, ")")), _defineProperty(_ref10, "marginBottom", 0), _defineProperty(_ref10, "width", $theme.sizing.scale0), _defineProperty(_ref10, "marginTop", "calc(".concat(size, " + (").concat(font.lineHeight, " - ").concat(size, ") / 2)")), _defineProperty(_ref10, "display", 'inline-block'), _defineProperty(_ref10, "backgroundColor", currentColor), _ref10;
});
StyledContentTail.displayName = "StyledContentTail";
export var StyledContentDescription = styled('div', function (_ref11) {
  var $theme = _ref11.$theme;
  return {
    marginBottom: $theme.sizing.scale700
  };
});
StyledContentDescription.displayName = "StyledContentDescription";
export var StyledNumberStep = styled('li', function (_ref12) {
  var $theme = _ref12.$theme;
  return {
    listStyleType: 'none',
    position: 'relative',
    overflow: 'visible'
  };
});
StyledNumberStep.displayName = "StyledNumberStep";
export var StyledNumberIcon = styled('div', function (_ref13) {
  var $theme = _ref13.$theme,
      $isActive = _ref13.$isActive,
      $isCompleted = _ref13.$isCompleted,
      $disabled = _ref13.$disabled;
  var backgroundColor = $theme.colors.mono400;
  var color = $theme.colors.contentSecondary;
  var size = $theme.sizing.scale800;
  var marginRight = $theme.sizing.scale300;
  var font = $theme.typography.font250;
  var titleFont = $theme.typography.font300;

  if ($isCompleted) {
    color = $theme.colors.progressStepsCompletedText;
    backgroundColor = $theme.colors.progressStepsCompletedFill;
  } else if ($isActive) {
    titleFont = $theme.typography.font350;
    color = $theme.colors.progressStepsActiveText;
    backgroundColor = $theme.colors.progressStepsActiveFill;
  }

  var marginTop = "calc((".concat(titleFont.lineHeight, " - ").concat(size, ") / 2)");
  return _objectSpread({
    marginRight: marginRight,
    marginTop: marginTop,
    width: size,
    height: size,
    borderTopLeftRadius: size,
    borderTopRightRadius: size,
    borderBottomRightRadius: size,
    borderBottomLeftRadius: size,
    backgroundColor: backgroundColor,
    color: color,
    float: $theme.direction === 'rtl' ? 'right' : 'left',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }, font);
});
StyledNumberIcon.displayName = "StyledNumberIcon";
export var StyledNumberContentTail = styled('div', function (_ref14) {
  var $theme = _ref14.$theme,
      $isActive = _ref14.$isActive,
      $isCompleted = _ref14.$isCompleted,
      $disabled = _ref14.$disabled;
  var currentColor = $theme.colors.mono300;
  var size = $theme.sizing.scale800;
  var titleFont = $theme.typography.font300;

  if ($isCompleted) {
    currentColor = $theme.colors.primary;
  } else if ($isActive) {
    titleFont = $theme.typography.font350;
  }

  var marginTop = "calc(".concat(size, " + (").concat(titleFont.lineHeight, " - ").concat(size, ") / 2)");
  return {
    position: 'absolute',
    left: '11px',
    top: 0,
    height: "calc(100% - ".concat(size, ")"),
    paddingBottom: 0,
    marginTop: marginTop,
    width: $theme.sizing.scale0,
    paddingTop: $theme.sizing.scale800,
    backgroundColor: currentColor,
    display: 'inline-block'
  };
});
StyledNumberContentTail.displayName = "StyledNumberContentTail";