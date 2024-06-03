function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { defaultProps } from '../button/default-props.js';
import { Button } from '../button/index.js';
import { mergeOverrides } from '../helpers/overrides.js'; // ModalButtons should have some margin pre-applied

const overrides = {
  BaseButton: {
    style: ({
      $theme
    }) => {
      const marginInlineEnd = $theme.direction !== 'rtl' ? 'marginRight' : 'marginLeft';
      return {
        ':nth-last-child(n+2)': {
          [marginInlineEnd]: $theme.sizing.scale500
        }
      };
    }
  }
};
export default class ModalButton extends React.Component {
  render() {
    return React.createElement(Button, _extends({}, this.props, {
      overrides: mergeOverrides(overrides, this.props.overrides)
    }), this.props.children);
  }

}

_defineProperty(ModalButton, "defaultProps", defaultProps);