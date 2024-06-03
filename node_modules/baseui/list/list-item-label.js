"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("../typography/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
function ListItemLabel(props) {
  if (props.sublist) {
    return _react.default.createElement(_index.Paragraph2, null, props.children);
  }

  return _react.default.createElement("div", null, _react.default.createElement(_index.Label2, null, props.children), props.description && _react.default.createElement(_index.Paragraph3, {
    $style: {
      marginTop: 0,
      marginBottom: 0
    }
  }, props.description));
}

var _default = ListItemLabel;
exports.default = _default;