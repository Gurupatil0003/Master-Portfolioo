function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { getOverrides } from '../helpers/overrides.js';
import { Action as StyledAction, Root as StyledRoot, ActionIcon as StyledActionIcon, Text as StyledText } from './styled-components.js';
import { KIND, VARIANT } from './constants.js';
import { getTextFromChildren } from './utils.js';
import { isFocusVisible, forkFocus, forkBlur } from '../utils/focusVisible.js';

var Tag =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tag, _React$Component);

  function Tag() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Tag);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tag)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isFocusVisible: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (event) {
      if (isFocusVisible(event)) {
        _this.setState({
          isFocusVisible: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event) {
      if (_this.state.isFocusVisible !== false) {
        _this.setState({
          isFocusVisible: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      if (event.currentTarget !== event.target) {
        return;
      }

      var _this$props = _this.props,
          onClick = _this$props.onClick,
          onKeyDown = _this$props.onKeyDown,
          closeable = _this$props.closeable,
          onActionClick = _this$props.onActionClick,
          onActionKeyDown = _this$props.onActionKeyDown;
      var key = event.key;

      if (onClick && key === 'Enter') {
        onClick(event);
      }

      if (closeable && (key === 'Backspace' || key === 'Delete')) {
        onActionClick(event);
        onActionKeyDown(event);
      }

      if (onKeyDown) {
        onKeyDown(event);
      }
    });

    return _this;
  }

  _createClass(Tag, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          closeable = _this$props2.closeable,
          color = _this$props2.color,
          disabled = _this$props2.disabled,
          isFocused = _this$props2.isFocused,
          isHovered = _this$props2.isHovered,
          kind = _this$props2.kind,
          title = _this$props2.title,
          onActionClick = _this$props2.onActionClick,
          onClick = _this$props2.onClick,
          _this$props2$override = _this$props2.overrides,
          overrides = _this$props2$override === void 0 ? {} : _this$props2$override,
          variant = _this$props2.variant;

      var _getOverrides = getOverrides(overrides.Root, StyledRoot),
          _getOverrides2 = _slicedToArray(_getOverrides, 2),
          Root = _getOverrides2[0],
          rootProps = _getOverrides2[1];

      var _getOverrides3 = getOverrides(overrides.Action, StyledAction),
          _getOverrides4 = _slicedToArray(_getOverrides3, 2),
          Action = _getOverrides4[0],
          actionProps = _getOverrides4[1];

      var _getOverrides5 = getOverrides(overrides.ActionIcon, StyledActionIcon),
          _getOverrides6 = _slicedToArray(_getOverrides5, 2),
          ActionIcon = _getOverrides6[0],
          actionIconProps = _getOverrides6[1];

      var _getOverrides7 = getOverrides(overrides.Text, StyledText),
          _getOverrides8 = _slicedToArray(_getOverrides7, 2),
          Text = _getOverrides8[0],
          textProps = _getOverrides8[1];

      var clickable = typeof onClick === 'function';
      var rootHandlers = disabled ? {} : {
        onClick: onClick,
        onKeyDown: this.handleKeyDown
      };
      var actionHandlers = disabled ? {} : {
        onClick: function onClick(event) {
          // we don't want onClick to be called when the close icon is clicked
          event.stopPropagation();
          onActionClick(event);
        }
      };
      var sharedProps = {
        $clickable: clickable,
        $closeable: closeable,
        $color: color,
        $disabled: disabled,
        $isFocused: isFocused,
        $isHovered: isHovered,
        $kind: kind,
        $variant: variant,
        $isFocusVisible: this.state.isFocusVisible
      };
      var titleText = title || getTextFromChildren(children);
      var isButton = (clickable || closeable) && !disabled;
      return React.createElement(Root, _extends({
        "data-baseweb": "tag",
        "aria-label": isButton && closeable ? "".concat(typeof children === 'string' ? "".concat(children, ", ") : '', "close by backspace") : null,
        "aria-disabled": disabled ? true : null,
        role: isButton ? 'button' : null,
        tabIndex: isButton ? 0 : null
      }, rootHandlers, sharedProps, rootProps, {
        onFocus: forkFocus(rootProps, this.handleFocus),
        onBlur: forkBlur(rootProps, this.handleBlur)
      }), React.createElement(Text, _extends({
        title: titleText
      }, textProps), children), closeable ? React.createElement(Action, _extends({
        "aria-hidden": true,
        role: "presentation"
      }, actionHandlers, sharedProps, actionProps), React.createElement(ActionIcon, _extends({
        width: '10',
        height: '10',
        viewBox: '0 0 8 8',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg'
      }, actionIconProps), React.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M0.861278 0.862254C1.12163 0.601905 1.54374 0.601905 1.80409 0.862254L3.99935 3.05752L6.19461 0.862254C6.45496 0.601905 6.87707 0.601905 7.13742 0.862254C7.39777 1.1226 7.39777 1.54471 7.13742 1.80506L4.94216 4.00033L7.13742 6.19559C7.39777 6.45594 7.39777 6.87805 7.13742 7.1384C6.87707 7.39875 6.45496 7.39875 6.19461 7.1384L3.99935 4.94313L1.80409 7.1384C1.54374 7.39875 1.12163 7.39875 0.861278 7.1384C0.600928 6.87805 0.600928 6.45594 0.861278 6.19559L3.05654 4.00033L0.861278 1.80506C0.600928 1.54471 0.600928 1.1226 0.861278 0.862254Z",
        fill: "currentColor"
      }))) : null);
    }
  }]);

  return Tag;
}(React.Component);

_defineProperty(Tag, "defaultProps", {
  closeable: true,
  disabled: false,
  isFocused: false,
  isHovered: false,
  onActionClick: function onActionClick() {},
  onActionKeyDown: function onActionKeyDown() {},
  onClick: null,
  onKeyDown: null,
  overrides: {},
  kind: KIND.primary,
  variant: VARIANT.light
});

export default Tag;