"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = exports.getInputStyles = exports.InputContainer = exports.getInputContainerStyles = exports.InputEnhancer = exports.Root = exports.StyledClearIcon = exports.StyledClearIconContainer = exports.StyledMaskToggleButton = void 0;

var _index = require("../styles/index.js");

var _constants = require("./constants.js");

var _deleteAlt = _interopRequireDefault(require("../icon/delete-alt.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StyledMaskToggleButton = (0, _index.styled)('button', function (_ref) {
  var _SIZE$mini$SIZE$compa;

  var $theme = _ref.$theme,
      $size = _ref.$size,
      $isFocusVisible = _ref.$isFocusVisible;
  var pad = (_SIZE$mini$SIZE$compa = {}, _defineProperty(_SIZE$mini$SIZE$compa, _constants.SIZE.mini, $theme.sizing.scale300), _defineProperty(_SIZE$mini$SIZE$compa, _constants.SIZE.compact, $theme.sizing.scale400), _defineProperty(_SIZE$mini$SIZE$compa, _constants.SIZE.default, $theme.sizing.scale500), _defineProperty(_SIZE$mini$SIZE$compa, _constants.SIZE.large, $theme.sizing.scale600), _SIZE$mini$SIZE$compa)[$size];
  return {
    display: 'flex',
    alignItems: 'center',
    borderTop: 'none',
    borderBottom: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    background: 'none',
    paddingLeft: pad,
    paddingRight: pad,
    outline: $isFocusVisible ? "solid 3px ".concat($theme.colors.accent) : 'none',
    color: $theme.colors.contentPrimary
  };
});
exports.StyledMaskToggleButton = StyledMaskToggleButton;
StyledMaskToggleButton.displayName = "StyledMaskToggleButton";
var StyledClearIconContainer = (0, _index.styled)('div', function (_ref2) {
  var _ref3;

  var _ref2$$alignTop = _ref2.$alignTop,
      $alignTop = _ref2$$alignTop === void 0 ? false : _ref2$$alignTop,
      $theme = _ref2.$theme;
  var paddingDir = $theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight';
  return _ref3 = {
    display: 'flex',
    alignItems: $alignTop ? 'flex-start' : 'center'
  }, _defineProperty(_ref3, paddingDir, $theme.sizing.scale500), _defineProperty(_ref3, "paddingTop", $alignTop ? $theme.sizing.scale500 : '0px'), _defineProperty(_ref3, "color", $theme.colors.contentPrimary), _ref3;
});
exports.StyledClearIconContainer = StyledClearIconContainer;
StyledClearIconContainer.displayName = "StyledClearIconContainer";
var StyledClearIcon = (0, _index.styled)(_deleteAlt.default, function (_ref4) {
  var $theme = _ref4.$theme,
      $isFocusVisible = _ref4.$isFocusVisible;
  return {
    cursor: 'pointer',
    outline: $isFocusVisible ? "solid 3px ".concat($theme.colors.accent) : 'none'
  };
});
exports.StyledClearIcon = StyledClearIcon;
StyledClearIcon.displayName = "StyledClearIcon";

function getInputPadding(size, sizing) {
  var _SIZE$mini$SIZE$compa2;

  return (_SIZE$mini$SIZE$compa2 = {}, _defineProperty(_SIZE$mini$SIZE$compa2, _constants.SIZE.mini, {
    paddingTop: sizing.scale100,
    paddingBottom: sizing.scale100,
    paddingLeft: sizing.scale200,
    paddingRight: sizing.scale200
  }), _defineProperty(_SIZE$mini$SIZE$compa2, _constants.SIZE.compact, {
    paddingTop: sizing.scale200,
    paddingBottom: sizing.scale200,
    paddingLeft: sizing.scale400,
    paddingRight: sizing.scale400
  }), _defineProperty(_SIZE$mini$SIZE$compa2, _constants.SIZE.default, {
    paddingTop: sizing.scale400,
    paddingBottom: sizing.scale400,
    paddingLeft: sizing.scale550,
    paddingRight: sizing.scale550
  }), _defineProperty(_SIZE$mini$SIZE$compa2, _constants.SIZE.large, {
    paddingTop: sizing.scale550,
    paddingBottom: sizing.scale550,
    paddingLeft: sizing.scale650,
    paddingRight: sizing.scale650
  }), _SIZE$mini$SIZE$compa2)[size];
}

function getFont(size, typography) {
  var _SIZE$mini$SIZE$compa3;

  return (_SIZE$mini$SIZE$compa3 = {}, _defineProperty(_SIZE$mini$SIZE$compa3, _constants.SIZE.mini, typography.font100), _defineProperty(_SIZE$mini$SIZE$compa3, _constants.SIZE.compact, typography.font200), _defineProperty(_SIZE$mini$SIZE$compa3, _constants.SIZE.default, typography.font300), _defineProperty(_SIZE$mini$SIZE$compa3, _constants.SIZE.large, typography.font400), _SIZE$mini$SIZE$compa3)[size];
}

var Root = (0, _index.styled)('div', function (props) {
  var $size = props.$size,
      _props$$theme = props.$theme,
      colors = _props$$theme.colors,
      typography = _props$$theme.typography;
  return _objectSpread({}, getFont($size, typography), {
    color: colors.contentPrimary,
    display: 'flex',
    width: '100%'
  });
}); // InputEnhancer

exports.Root = Root;
Root.displayName = "Root";

function getInputEnhancerBorderRadius(position, radius) {
  var _ENHANCER_POSITION$st;

  return (_ENHANCER_POSITION$st = {}, _defineProperty(_ENHANCER_POSITION$st, _constants.ENHANCER_POSITION.start, {
    borderTopLeftRadius: radius,
    borderBottomLeftRadius: radius,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  }), _defineProperty(_ENHANCER_POSITION$st, _constants.ENHANCER_POSITION.end, {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: radius,
    borderBottomRightRadius: radius
  }), _ENHANCER_POSITION$st)[position];
}

function getInputEnhancerPadding($size, sizing) {
  var _SIZE$mini$SIZE$compa4;

  return (_SIZE$mini$SIZE$compa4 = {}, _defineProperty(_SIZE$mini$SIZE$compa4, _constants.SIZE.mini, {
    paddingRight: sizing.scale200,
    paddingLeft: sizing.scale200
  }), _defineProperty(_SIZE$mini$SIZE$compa4, _constants.SIZE.compact, {
    paddingRight: sizing.scale400,
    paddingLeft: sizing.scale400
  }), _defineProperty(_SIZE$mini$SIZE$compa4, _constants.SIZE.default, {
    paddingRight: sizing.scale600,
    paddingLeft: sizing.scale600
  }), _defineProperty(_SIZE$mini$SIZE$compa4, _constants.SIZE.large, {
    paddingRight: sizing.scale650,
    paddingLeft: sizing.scale650
  }), _SIZE$mini$SIZE$compa4)[$size];
}

function getInputEnhancerColors($disabled, $isFocused, $error, $positive, colors) {
  if ($disabled) {
    return {
      color: colors.inputEnhancerTextDisabled,
      backgroundColor: colors.inputEnhancerFillDisabled
    };
  }

  if ($isFocused) {
    return {
      color: colors.contentInversePrimary,
      backgroundColor: colors.borderFocus
    };
  }

  if ($error) {
    return {
      color: colors.contentPrimary,
      backgroundColor: colors.inputBorderError
    };
  }

  if ($positive) {
    return {
      color: colors.contentPrimary,
      backgroundColor: colors.inputBorderPositive
    };
  }

  return {
    color: colors.contentPrimary,
    backgroundColor: colors.inputEnhancerFill
  };
}

var InputEnhancer = (0, _index.styled)('div', function (props) {
  var $position = props.$position,
      $size = props.$size,
      $disabled = props.$disabled,
      $isFocused = props.$isFocused,
      $error = props.$error,
      $positive = props.$positive,
      _props$$theme2 = props.$theme,
      borders = _props$$theme2.borders,
      colors = _props$$theme2.colors,
      sizing = _props$$theme2.sizing,
      typography = _props$$theme2.typography,
      animation = _props$$theme2.animation;
  return _objectSpread({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transitionProperty: 'color, background-color',
    transitionDuration: animation.timing100,
    transitionTimingFunction: animation.easeOutCurve
  }, getInputEnhancerBorderRadius($position, borders.inputBorderRadius), {}, getFont($size, typography), {}, getInputEnhancerPadding($size, sizing), {}, getInputEnhancerColors($disabled, $isFocused, $error, $positive, colors));
}); // InputContainer

exports.InputEnhancer = InputEnhancer;
InputEnhancer.displayName = "InputEnhancer";

function getInputContainerBorderRadius(adjoined, radius) {
  var _ADJOINED$none$ADJOIN;

  return (_ADJOINED$none$ADJOIN = {}, _defineProperty(_ADJOINED$none$ADJOIN, _constants.ADJOINED.none, {
    borderTopLeftRadius: radius,
    borderBottomLeftRadius: radius,
    borderTopRightRadius: radius,
    borderBottomRightRadius: radius
  }), _defineProperty(_ADJOINED$none$ADJOIN, _constants.ADJOINED.left, {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: radius,
    borderBottomRightRadius: radius
  }), _defineProperty(_ADJOINED$none$ADJOIN, _constants.ADJOINED.right, {
    borderTopLeftRadius: radius,
    borderBottomLeftRadius: radius,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  }), _defineProperty(_ADJOINED$none$ADJOIN, _constants.ADJOINED.both, {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  }), _ADJOINED$none$ADJOIN)[adjoined];
}

function getInputContainerColors($disabled, $isFocused, $error, $positive, colors) {
  if ($disabled) {
    return {
      color: colors.inputTextDisabled,
      borderColor: colors.inputFillDisabled,
      backgroundColor: colors.inputFillDisabled
    };
  }

  if ($isFocused) {
    return {
      color: colors.contentPrimary,
      borderColor: colors.borderFocus,
      backgroundColor: colors.inputFillActive
    };
  }

  if ($error) {
    return {
      color: colors.contentPrimary,
      borderColor: colors.inputBorderError,
      backgroundColor: colors.inputFillError
    };
  }

  if ($positive) {
    return {
      color: colors.contentPrimary,
      borderColor: colors.inputBorderPositive,
      backgroundColor: colors.inputFillPositive
    };
  }

  return {
    color: colors.contentPrimary,
    borderColor: colors.inputBorder,
    backgroundColor: colors.inputFill
  };
}

var getInputContainerStyles = function getInputContainerStyles(props) {
  var $isFocused = props.$isFocused,
      $adjoined = props.$adjoined,
      $error = props.$error,
      $disabled = props.$disabled,
      $positive = props.$positive,
      $size = props.$size,
      _props$$theme3 = props.$theme,
      borders = _props$$theme3.borders,
      colors = _props$$theme3.colors,
      typography = _props$$theme3.typography,
      animation = _props$$theme3.animation;
  return _objectSpread({
    boxSizing: 'border-box',
    display: 'flex',
    width: '100%',
    borderWidth: '2px',
    borderStyle: 'solid',
    transitionProperty: 'border, background-color',
    transitionDuration: animation.timing100,
    transitionTimingFunction: animation.easeOutCurve
  }, getInputContainerBorderRadius($adjoined, borders.inputBorderRadius), {}, getFont($size, typography), {}, getInputContainerColors($disabled, $isFocused, $error, $positive, colors));
};

exports.getInputContainerStyles = getInputContainerStyles;
var InputContainer = (0, _index.styled)('div', getInputContainerStyles);
exports.InputContainer = InputContainer;
InputContainer.displayName = "InputContainer";

function getInputColors($disabled, $isFocused, $error, colors) {
  if ($disabled) {
    return {
      color: colors.contentSecondary,
      caretColor: colors.contentPrimary,
      '::placeholder': {
        color: colors.inputPlaceholderDisabled
      }
    };
  }

  return {
    color: colors.contentPrimary,
    caretColor: colors.contentPrimary,
    '::placeholder': {
      color: colors.inputPlaceholder
    }
  };
}

var getInputStyles = function getInputStyles(props) {
  var $disabled = props.$disabled,
      $isFocused = props.$isFocused,
      $error = props.$error,
      $size = props.$size,
      _props$$theme4 = props.$theme,
      colors = _props$$theme4.colors,
      sizing = _props$$theme4.sizing,
      typography = _props$$theme4.typography;
  return _objectSpread({
    boxSizing: 'border-box',
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderStyle: 'none',
    outline: 'none',
    width: '100%',
    maxWidth: '100%',
    cursor: $disabled ? 'not-allowed' : 'text',
    margin: '0',
    paddingTop: '0',
    paddingBottom: '0',
    paddingLeft: '0',
    paddingRight: '0'
  }, getFont($size, typography), {}, getInputPadding($size, sizing), {}, getInputColors($disabled, $isFocused, $error, colors));
};

exports.getInputStyles = getInputStyles;
var Input = (0, _index.styled)('input', getInputStyles);
exports.Input = Input;
Input.displayName = "Input";