function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

class Tag extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      isFocusVisible: false
    });

    _defineProperty(this, "handleFocus", event => {
      if (isFocusVisible(event)) {
        this.setState({
          isFocusVisible: true
        });
      }
    });

    _defineProperty(this, "handleBlur", event => {
      if (this.state.isFocusVisible !== false) {
        this.setState({
          isFocusVisible: false
        });
      }
    });

    _defineProperty(this, "handleKeyDown", event => {
      if (event.currentTarget !== event.target) {
        return;
      }

      const {
        onClick,
        onKeyDown,
        closeable,
        onActionClick,
        onActionKeyDown
      } = this.props;
      const key = event.key;

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
  }

  render() {
    const {
      children,
      closeable,
      color,
      disabled,
      isFocused,
      isHovered,
      kind,
      title,
      onActionClick,
      onClick,
      overrides = {},
      variant
    } = this.props;
    const [Root, rootProps] = getOverrides(overrides.Root, StyledRoot);
    const [Action, actionProps] = getOverrides(overrides.Action, StyledAction);
    const [ActionIcon, actionIconProps] = getOverrides(overrides.ActionIcon, StyledActionIcon);
    const [Text, textProps] = getOverrides(overrides.Text, StyledText);
    const clickable = typeof onClick === 'function';
    const rootHandlers = disabled ? {} : {
      onClick: onClick,
      onKeyDown: this.handleKeyDown
    };
    const actionHandlers = disabled ? {} : {
      onClick: event => {
        // we don't want onClick to be called when the close icon is clicked
        event.stopPropagation();
        onActionClick(event);
      }
    };
    const sharedProps = {
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
    const titleText = title || getTextFromChildren(children);
    const isButton = (clickable || closeable) && !disabled;
    return React.createElement(Root, _extends({
      "data-baseweb": "tag",
      "aria-label": isButton && closeable ? `${typeof children === 'string' ? `${children}, ` : ''}close by backspace` : null,
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

}

_defineProperty(Tag, "defaultProps", {
  closeable: true,
  disabled: false,
  isFocused: false,
  isHovered: false,
  onActionClick: () => {},
  onActionKeyDown: () => {},
  onClick: null,
  onKeyDown: null,
  overrides: {},
  kind: KIND.primary,
  variant: VARIANT.light
});

export default Tag;