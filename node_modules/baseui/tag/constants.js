"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KIND = exports.VARIANT = void 0;

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
var VARIANT = Object.freeze({
  solid: 'solid',
  light: 'light',
  outlined: 'outlined'
});
exports.VARIANT = VARIANT;
var KIND = {
  neutral: 'neutral',
  primary: 'primary',
  accent: 'accent',
  positive: 'positive',
  warning: 'warning',
  negative: 'negative',
  custom: 'custom'
};
exports.KIND = KIND;