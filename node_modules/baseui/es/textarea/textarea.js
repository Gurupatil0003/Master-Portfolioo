function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { mergeOverrides } from '../helpers/overrides.js';
import { BaseInput, SIZE, CUSTOM_INPUT_TYPE } from '../input/index.js';
import { StyledTextarea, StyledTextareaContainer } from './styled-components.js';

class Textarea extends React.Component {
  render() {
    const overrides = mergeOverrides({
      Input: {
        component: StyledTextarea
      },
      InputContainer: {
        component: StyledTextareaContainer
      }
    }, this.props.overrides);
    return (//$FlowFixMe
      React.createElement(BaseInput, _extends({
        "data-baseweb": "textarea"
      }, this.props, {
        type: CUSTOM_INPUT_TYPE.textarea,
        overrides: overrides
      }))
    );
  }

}

_defineProperty(Textarea, "defaultProps", {
  autoFocus: false,
  disabled: false,
  error: false,
  name: '',
  onBlur: () => {},
  onChange: () => {},
  onKeyDown: () => {},
  onKeyPress: () => {},
  onKeyUp: () => {},
  onFocus: () => {},
  overrides: {},
  placeholder: '',
  required: false,
  rows: 3,
  size: SIZE.default,
  value: ''
});

export default Textarea;