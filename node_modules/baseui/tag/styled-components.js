"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.customOnRamp = customOnRamp;
exports.Root = exports.Text = exports.ActionIcon = exports.Action = void 0;

var _darken = _interopRequireDefault(require("polished/lib/color/darken.js"));

var _lighten = _interopRequireDefault(require("polished/lib/color/lighten.js"));

var _index = require("../styles/index.js");

var _constants = require("./constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function customOnRamp(color, unit) {
  switch (unit) {
    case '50':
      return (0, _lighten.default)(0.4, color);

    case '100':
      return (0, _lighten.default)(0.32, color);

    case '200':
      return (0, _lighten.default)(0.2, color);

    case '300':
      return (0, _lighten.default)(0.12, color);

    case '500':
      return (0, _darken.default)(0.24, color);

    case '600':
      return (0, _darken.default)(0.3, color);

    case '700':
      return (0, _darken.default)(0.4, color);

    case '400':
    default:
      return color;
  }
}

function fontColor(props, isHovered, isActionText) {
  if (props.$disabled) {
    switch (props.$kind) {
      case _constants.KIND.neutral:
        return props.$theme.colors.tagNeutralFontDisabled;

      case _constants.KIND.accent:
        return props.$theme.colors.tagAccentFontDisabled;

      case _constants.KIND.positive:
        return props.$theme.colors.tagPositiveFontDisabled;

      case _constants.KIND.warning:
        return props.$theme.colors.tagWarningFontDisabled;

      case _constants.KIND.negative:
        return props.$theme.colors.tagNegativeFontDisabled;

      case _constants.KIND.custom:
        return customOnRamp(props.$color, props.$theme.colors.tagFontDisabledRampUnit);

      case _constants.KIND.primary:
      default:
        return props.$theme.colors.tagPrimaryFontDisabled;
    }
  }

  switch (props.$variant) {
    case _constants.VARIANT.solid:
      switch (props.$kind) {
        case _constants.KIND.neutral:
          if (!isHovered) return props.$theme.colors.tagNeutralSolidFont;
          return props.$theme.colors.tagNeutralSolidFontHover;

        case _constants.KIND.accent:
          if (!isHovered) return props.$theme.colors.tagAccentSolidFont;
          return props.$theme.colors.tagAccentSolidFontHover;

        case _constants.KIND.positive:
          if (!isHovered) return props.$theme.colors.tagPositiveSolidFont;
          return props.$theme.colors.tagPositiveSolidFontHover;

        case _constants.KIND.warning:
          if (!isHovered) return props.$theme.colors.tagWarningSolidFont;
          return props.$theme.colors.tagWarningSolidFontHover;

        case _constants.KIND.negative:
          if (!isHovered) return props.$theme.colors.tagNegativeSolidFont;
          return props.$theme.colors.tagNegativeSolidFontHover;

        case _constants.KIND.custom:
          if (!isHovered) return customOnRamp(props.$color, props.$theme.colors.tagSolidFontRampUnit);
          return customOnRamp(props.$color, props.$theme.colors.tagSolidFontHoverRampUnit);

        case _constants.KIND.primary:
        default:
          if (!isHovered) return props.$theme.colors.tagPrimarySolidFont;
          return props.$theme.colors.tagPrimarySolidFontHover;
      }

    case _constants.VARIANT.outlined:
      switch (props.$kind) {
        case _constants.KIND.neutral:
          if (!isHovered || !isActionText) {
            return props.$theme.colors.tagNeutralOutlinedFont;
          }

          return props.$theme.colors.tagNeutralOutlinedFontHover;

        case _constants.KIND.accent:
          if (!isHovered || !isActionText) {
            return props.$theme.colors.tagAccentOutlinedFont;
          }

          return props.$theme.colors.tagAccentOutlinedFontHover;

        case _constants.KIND.positive:
          if (!isHovered || !isActionText) {
            return props.$theme.colors.tagPositiveOutlinedFont;
          }

          return props.$theme.colors.tagPositiveOutlinedFontHover;

        case _constants.KIND.warning:
          if (!isHovered || !isActionText) {
            return props.$theme.colors.tagWarningOutlinedFont;
          }

          return props.$theme.colors.tagWarningOutlinedFontHover;

        case _constants.KIND.negative:
          if (!isHovered || !isActionText) {
            return props.$theme.colors.tagNegativeOutlinedFont;
          }

          return props.$theme.colors.tagNegativeOutlinedFontHover;

        case _constants.KIND.custom:
          if (!isHovered || !isActionText) {
            return customOnRamp(props.$color, props.$theme.colors.tagOutlinedFontRampUnit);
          }

          return customOnRamp(props.$color, props.$theme.colors.tagOutlinedFontHoverRampUnit);

        case _constants.KIND.primary:
        default:
          if (!isHovered || !isActionText) {
            return props.$theme.colors.tagPrimaryOutlinedFont;
          }

          return props.$theme.colors.tagPrimaryOutlinedFontHover;
      }

    case _constants.VARIANT.light:
    default:
      switch (props.$kind) {
        case _constants.KIND.neutral:
          if (!isHovered) return props.$theme.colors.tagNeutralLightFont;
          return props.$theme.colors.tagNeutralLightFontHover;

        case _constants.KIND.accent:
          if (!isHovered) return props.$theme.colors.tagAccentLightFont;
          return props.$theme.colors.tagAccentLightFontHover;

        case _constants.KIND.positive:
          if (!isHovered) return props.$theme.colors.tagPositiveLightFont;
          return props.$theme.colors.tagPositiveLightFontHover;

        case _constants.KIND.warning:
          if (!isHovered) return props.$theme.colors.tagWarningLightFont;
          return props.$theme.colors.tagWarningLightFontHover;

        case _constants.KIND.negative:
          if (!isHovered) return props.$theme.colors.tagNegativeLightFont;
          return props.$theme.colors.tagNegativeLightFontHover;

        case _constants.KIND.custom:
          if (!isHovered) return customOnRamp(props.$color, props.$theme.colors.tagLightFontRampUnit);
          return customOnRamp(props.$color, props.$theme.colors.tagLightFontHoverRampUnit);

        case _constants.KIND.primary:
        default:
          if (!isHovered) return props.$theme.colors.tagPrimaryLightFont;
          return props.$theme.colors.tagPrimaryLightFontHover;
      }

  }
} // $FlowFixMe https://github.com/facebook/flow/issues/7745


var Action = (0, _index.styled)('span', function (props) {
  var _ref;

  var $disabled = props.$disabled,
      $variant = props.$variant,
      $theme = props.$theme;

  function backgroundColor(isHovered, isActive) {
    if (props.$disabled || !isHovered) return 'transparent';

    switch (props.$variant) {
      case _constants.VARIANT.solid:
        switch (props.$kind) {
          case _constants.KIND.neutral:
            return props.$theme.colors.tagNeutralSolidActive;

          case _constants.KIND.accent:
            return props.$theme.colors.tagAccentSolidActive;

          case _constants.KIND.positive:
            return props.$theme.colors.tagPositiveSolidActive;

          case _constants.KIND.warning:
            return props.$theme.colors.tagWarningSolidActive;

          case _constants.KIND.negative:
            return props.$theme.colors.tagNegativeSolidActive;

          case _constants.KIND.custom:
            return customOnRamp(props.$color, props.$theme.colors.tagSolidActiveRampUnit);

          case _constants.KIND.primary:
          default:
            return props.$theme.colors.tagPrimarySolidActive;
        }

      case _constants.VARIANT.outlined:
        switch (props.$kind) {
          case _constants.KIND.neutral:
            if (!isActive) return props.$theme.colors.tagNeutralOutlinedHover;
            return props.$theme.colors.tagNeutralOutlinedActive;

          case _constants.KIND.accent:
            if (!isActive) return props.$theme.colors.tagAccentOutlinedHover;
            return props.$theme.colors.tagAccentOutlinedActive;

          case _constants.KIND.positive:
            if (!isActive) return props.$theme.colors.tagPositiveOutlinedHover;
            return props.$theme.colors.tagPositiveOutlinedActive;

          case _constants.KIND.warning:
            if (!isActive) return props.$theme.colors.tagWarningOutlinedHover;
            return props.$theme.colors.tagWarningOutlinedActive;

          case _constants.KIND.negative:
            if (!isActive) return props.$theme.colors.tagNegativeOutlinedHover;
            return props.$theme.colors.tagNegativeOutlinedActive;

          case _constants.KIND.custom:
            if (!isActive) return customOnRamp(props.$color, props.$theme.colors.tagOutlinedHoverRampUnit);
            return customOnRamp(props.$color, props.$theme.colors.tagOutlinedActiveRampUnit);

          case _constants.KIND.primary:
          default:
            if (!isActive) return props.$theme.colors.tagPrimaryOutlinedHover;
            return props.$theme.colors.tagPrimaryOutlinedActive;
        }

      case _constants.VARIANT.light:
      default:
        switch (props.$kind) {
          case _constants.KIND.neutral:
            return props.$theme.colors.tagNeutralLightActive;

          case _constants.KIND.accent:
            return props.$theme.colors.tagAccentLightActive;

          case _constants.KIND.positive:
            return props.$theme.colors.tagPositiveLightActive;

          case _constants.KIND.warning:
            return props.$theme.colors.tagWarningLightActive;

          case _constants.KIND.negative:
            return props.$theme.colors.tagNegativeLightActive;

          case _constants.KIND.custom:
            return customOnRamp(props.$color, props.$theme.colors.tagLightActiveRampUnit);

          case _constants.KIND.primary:
          default:
            return props.$theme.colors.tagPrimaryLightActive;
        }

    }
  }

  var bottomRadiusDir = $theme.direction === 'rtl' ? 'borderBottomLeftRadius' : 'borderBottomRightRadius';
  var topRadiusDir = $theme.direction === 'rtl' ? 'borderTopLeftRadius' : 'borderTopRightRadius';
  var marginDir = $theme.direction === 'rtl' ? 'marginRight' : 'marginLeft';
  return _ref = {
    alignItems: 'center'
  }, _defineProperty(_ref, bottomRadiusDir, $theme.borders.useRoundedCorners ? $theme.borders.radius400 : 0), _defineProperty(_ref, topRadiusDir, $theme.borders.useRoundedCorners ? $theme.borders.radius400 : 0), _defineProperty(_ref, "cursor", $disabled ? 'not-allowed' : 'pointer'), _defineProperty(_ref, "display", 'flex'), _defineProperty(_ref, marginDir, '8px'), _defineProperty(_ref, "outline", 'none'), _defineProperty(_ref, "paddingTop", $variant === _constants.VARIANT.outlined ? '5px' : '7px'), _defineProperty(_ref, "paddingBottom", $variant === _constants.VARIANT.outlined ? '5px' : '7px'), _defineProperty(_ref, "paddingLeft", '8px'), _defineProperty(_ref, "paddingRight", '8px'), _defineProperty(_ref, "transitionProperty", 'all'), _defineProperty(_ref, "transitionDuration", 'background-color'), _defineProperty(_ref, "transitionTimingFunction", $theme.animation.easeOutCurve), _defineProperty(_ref, ':hover', {
    backgroundColor: backgroundColor(true, false),
    color: fontColor(props, true, true)
  }), _ref;
});
exports.Action = Action;
Action.displayName = "Action";
var ActionIcon = (0, _index.styled)('svg', {}); // $FlowFixMe https://github.com/facebook/flow/issues/7745

exports.ActionIcon = ActionIcon;
ActionIcon.displayName = "ActionIcon";
var Text = (0, _index.styled)('span', function (props) {
  return {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    maxWidth: props.$theme.sizing.scale3200
  };
}); // $FlowFixMe https://github.com/facebook/flow/issues/7745

exports.Text = Text;
Text.displayName = "Text";
var Root = (0, _index.styled)('span', function (props) {
  var _objectSpread2;

  var $disabled = props.$disabled,
      $theme = props.$theme,
      $closeable = props.$closeable,
      $clickable = props.$clickable,
      $kind = props.$kind,
      $variant = props.$variant;
  var _$theme$sizing = $theme.sizing,
      scale0 = _$theme$sizing.scale0,
      scale800 = _$theme$sizing.scale800,
      scale500 = _$theme$sizing.scale500,
      font150 = $theme.typography.font150;

  function backgroundColor(isHovered, isActive) {
    if (props.$variant === _constants.VARIANT.outlined) {
      return 'transparent';
    }

    switch ($variant) {
      case _constants.VARIANT.solid:
        switch ($kind) {
          case _constants.KIND.neutral:
            if ($disabled) {
              return props.$theme.colors.tagNeutralSolidDisabled;
            }

            if (isActive) {
              return props.$theme.colors.tagNeutralSolidActive;
            }

            if (isHovered) {
              return props.$theme.colors.tagNeutralSolidHover;
            }

            return props.$theme.colors.tagNeutralSolidBackground;

          case _constants.KIND.accent:
            if ($disabled) {
              return props.$theme.colors.tagAccentSolidDisabled;
            }

            if (isActive) {
              return props.$theme.colors.tagAccentSolidActive;
            }

            if (isHovered) {
              return props.$theme.colors.tagAccentSolidHover;
            }

            return props.$theme.colors.tagAccentSolidBackground;

          case _constants.KIND.positive:
            if ($disabled) {
              return props.$theme.colors.tagPositiveSolidDisabled;
            }

            if (isActive) {
              return props.$theme.colors.tagPositiveSolidActive;
            }

            if (isHovered) {
              return props.$theme.colors.tagPositiveSolidHover;
            }

            return props.$theme.colors.tagPositiveSolidBackground;

          case _constants.KIND.warning:
            if ($disabled) {
              return props.$theme.colors.tagWarningSolidDisabled;
            }

            if (isActive) {
              return props.$theme.colors.tagWarningSolidActive;
            }

            if (isHovered) {
              return props.$theme.colors.tagWarningSolidHover;
            }

            return props.$theme.colors.tagWarningSolidBackground;

          case _constants.KIND.negative:
            if ($disabled) {
              return props.$theme.colors.tagNegativeSolidDisabled;
            }

            if (isActive) {
              return props.$theme.colors.tagNegativeSolidActive;
            }

            if (isHovered) {
              return props.$theme.colors.tagNegativeSolidHover;
            }

            return props.$theme.colors.tagNegativeSolidBackground;

          case _constants.KIND.custom:
            if ($disabled) {
              return customOnRamp(props.$color, props.$theme.colors.tagSolidDisabledRampUnit);
            }

            if (isActive) {
              return customOnRamp(props.$color, props.$theme.colors.tagSolidActiveRampUnit);
            }

            if (isHovered) {
              return customOnRamp(props.$color, props.$theme.colors.tagSolidHoverRampUnit);
            }

            return customOnRamp(props.$color, props.$theme.colors.tagSolidRampUnit);

          case _constants.KIND.primary:
          default:
            if ($disabled) {
              return props.$theme.colors.tagPrimarySolidDisabled;
            }

            if (isActive) {
              return props.$theme.colors.tagPrimarySolidActive;
            }

            if (isHovered) {
              return props.$theme.colors.tagPrimarySolidHover;
            }

            return props.$theme.colors.tagPrimarySolidBackground;
        }

      case _constants.VARIANT.light:
      default:
        switch ($kind) {
          case _constants.KIND.neutral:
            if ($disabled) {
              return props.$theme.colors.tagNeutralLightDisabled;
            }

            if (isActive) {
              return props.$theme.colors.tagNeutralLightActive;
            }

            if (isHovered) {
              return props.$theme.colors.tagNeutralLightHover;
            }

            return props.$theme.colors.tagNeutralLightBackground;

          case _constants.KIND.accent:
            if ($disabled) {
              return props.$theme.colors.tagAccentLightDisabled;
            }

            if (isActive) {
              return props.$theme.colors.tagAccentLightActive;
            }

            if (isHovered) {
              return props.$theme.colors.tagAccentLightHover;
            }

            return props.$theme.colors.tagAccentLightBackground;

          case _constants.KIND.positive:
            if ($disabled) {
              return props.$theme.colors.tagPositiveLightDisabled;
            }

            if (isActive) {
              return props.$theme.colors.tagPositiveLightActive;
            }

            if (isHovered) {
              return props.$theme.colors.tagPositiveLightHover;
            }

            return props.$theme.colors.tagPositiveLightBackground;

          case _constants.KIND.warning:
            if ($disabled) {
              return props.$theme.colors.tagWarningLightDisabled;
            }

            if (isActive) {
              return props.$theme.colors.tagWarningLightActive;
            }

            if (isHovered) {
              return props.$theme.colors.tagWarningLightHover;
            }

            return props.$theme.colors.tagWarningLightBackground;

          case _constants.KIND.negative:
            if ($disabled) {
              return props.$theme.colors.tagNegativeLightDisabled;
            }

            if (isActive) {
              return props.$theme.colors.tagNegativeLightActive;
            }

            if (isHovered) {
              return props.$theme.colors.tagNegativeLightHover;
            }

            return props.$theme.colors.tagNegativeLightBackground;

          case _constants.KIND.custom:
            if ($disabled) {
              return customOnRamp(props.$color, props.$theme.colors.tagLightRampUnit);
            }

            if (isActive) {
              return customOnRamp(props.$color, props.$theme.colors.tagLightActiveRampUnit);
            }

            if (isHovered) {
              return customOnRamp(props.$color, props.$theme.colors.tagLightHoverRampUnit);
            }

            return customOnRamp(props.$color, props.$theme.colors.tagLightRampUnit);

          case _constants.KIND.primary:
          default:
            if ($disabled) {
              return props.$theme.colors.tagPrimaryLightDisabled;
            }

            if (isActive) {
              return props.$theme.colors.tagPrimaryLightActive;
            }

            if (isHovered) {
              return props.$theme.colors.tagPrimaryLightHover;
            }

            return props.$theme.colors.tagPrimaryLightBackground;
        }

    }
  }

  function borderColor(isHovered, isActive) {
    if (props.$variant !== _constants.VARIANT.outlined) {
      return null;
    }

    switch (props.$kind) {
      case _constants.KIND.neutral:
        if ($disabled) {
          return props.$theme.colors.tagNeutralOutlinedDisabled;
        }

        if (isActive) {
          return props.$theme.colors.tagNeutralOutlinedActive;
        }

        if (isHovered) {
          return props.$theme.colors.tagNeutralOutlinedHover;
        }

        return props.$theme.colors.tagNeutralOutlinedBackground;

      case _constants.KIND.accent:
        if ($disabled) {
          return props.$theme.colors.tagAccentOutlinedDisabled;
        }

        if (isActive) {
          return props.$theme.colors.tagAccentOutlinedActive;
        }

        if (isHovered) {
          return props.$theme.colors.tagAccentOutlinedHover;
        }

        return props.$theme.colors.tagAccentOutlinedBackground;

      case _constants.KIND.positive:
        if ($disabled) {
          return props.$theme.colors.tagPositiveOutlinedDisabled;
        }

        if (isActive) {
          return props.$theme.colors.tagPositiveOutlinedActive;
        }

        if (isHovered) {
          return props.$theme.colors.tagPositiveOutlinedHover;
        }

        return props.$theme.colors.tagPositiveOutlinedBackground;

      case _constants.KIND.warning:
        if ($disabled) {
          return props.$theme.colors.tagWarningOutlinedDisabled;
        }

        if (isActive) {
          return props.$theme.colors.tagWarningOutlinedActive;
        }

        if (isHovered) {
          return props.$theme.colors.tagWarningOutlinedHover;
        }

        return props.$theme.colors.tagWarningOutlinedBackground;

      case _constants.KIND.negative:
        if ($disabled) {
          return props.$theme.colors.tagNegativeOutlinedDisabled;
        }

        if (isActive) {
          return props.$theme.colors.tagNegativeOutlinedActive;
        }

        if (isHovered) {
          return props.$theme.colors.tagNegativeOutlinedHover;
        }

        return props.$theme.colors.tagNegativeOutlinedBackground;

      case _constants.KIND.custom:
        if ($disabled) {
          return customOnRamp(props.$color, props.$theme.colors.tagOutlinedRampUnit);
        }

        if (isActive) {
          return customOnRamp(props.$color, props.$theme.colors.tagOutlinedActiveRampUnit);
        }

        if (isHovered) {
          return customOnRamp(props.$color, props.$theme.colors.tagOutlinedHoverRampUnit);
        }

        return customOnRamp(props.$color, props.$theme.colors.tagOutlinedRampUnit);

      case _constants.KIND.primary:
      default:
        if ($disabled) {
          return props.$theme.colors.tagPrimaryOutlinedDisabled;
        }

        if (isActive) {
          return props.$theme.colors.tagPrimaryOutlinedActive;
        }

        if (isHovered) {
          return props.$theme.colors.tagPrimaryOutlinedHover;
        }

        return props.$theme.colors.tagPrimaryOutlinedBackground;
    }
  }

  var borderRadius = $theme.borders.useRoundedCorners ? $theme.borders.radius400 : 0;
  var paddingStartDir = $theme.direction === 'rtl' ? 'paddingRight' : 'paddingLeft';
  var paddingEndDir = $theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight';
  return _objectSpread({}, font150, (_objectSpread2 = {
    alignItems: 'center',
    backgroundColor: backgroundColor(false, false),
    borderColor: borderColor(false, false),
    borderStyle: 'solid',
    borderWidth: $variant === _constants.VARIANT.outlined ? '2px' : 0,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    boxSizing: 'border-box',
    color: fontColor(props, false, false),
    cursor: $disabled ? 'not-allowed' : $clickable ? 'pointer' : 'default',
    display: 'inline-flex',
    height: scale800,
    justifyContent: 'space-between',
    marginTop: '5px',
    marginBottom: '5px',
    marginLeft: '5px',
    marginRight: '5px',
    paddingTop: scale0,
    paddingBottom: scale0
  }, _defineProperty(_objectSpread2, paddingStartDir, scale500), _defineProperty(_objectSpread2, paddingEndDir, $closeable ? null : scale500), _defineProperty(_objectSpread2, "outline", 'none'), _defineProperty(_objectSpread2, ':hover', $disabled || !$clickable ? {} : {
    backgroundColor: backgroundColor(true, false),
    borderColor: borderColor(true, false),
    color: fontColor(props, true, false)
  }), _defineProperty(_objectSpread2, ':focus', $disabled || !$clickable && !$closeable ? {} : {
    boxShadow: props.$isFocusVisible ? "0 0 0 3px ".concat(props.$kind === _constants.KIND.accent ? $theme.colors.primaryA : $theme.colors.accent) : 'none'
  }), _objectSpread2));
});
exports.Root = Root;
Root.displayName = "Root";