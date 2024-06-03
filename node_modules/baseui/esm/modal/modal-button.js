function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

var overrides = {
  BaseButton: {
    style: function style(_ref) {
      var $theme = _ref.$theme;
      var marginInlineEnd = $theme.direction !== 'rtl' ? 'marginRight' : 'marginLeft';
      return {
        ':nth-last-child(n+2)': _defineProperty({}, marginInlineEnd, $theme.sizing.scale500)
      };
    }
  }
};

var ModalButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ModalButton, _React$Component);

  function ModalButton() {
    _classCallCheck(this, ModalButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(ModalButton).apply(this, arguments));
  }

  _createClass(ModalButton, [{
    key: "render",
    value: function render() {
      return React.createElement(Button, _extends({}, this.props, {
        overrides: mergeOverrides(overrides, this.props.overrides)
      }), this.props.children);
    }
  }]);

  return ModalButton;
}(React.Component);

_defineProperty(ModalButton, "defaultProps", defaultProps);

export { ModalButton as default };