"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _cellShell = _interopRequireDefault(require("./cell-shell.js"));

var _constants = require("./constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
function CustomColumn(options) {
  return {
    kind: _constants.COLUMNS.CUSTOM,
    buildFilter: options.buildFilter || function () {
      return function () {
        return true;
      };
    },
    filterable: Boolean(options.filterable) && Boolean(options.renderFilter) && Boolean(options.buildFilter),
    mapDataToValue: options.mapDataToValue,
    maxWidth: options.maxWidth,
    minWidth: options.minWidth,
    renderCell: React.forwardRef(function (props, ref) {
      var ProvidedCell = options.renderCell;
      return React.createElement(_cellShell.default, {
        ref: ref,
        isMeasured: props.isMeasured,
        isSelected: props.isSelected,
        onSelect: props.onSelect
      }, React.createElement(ProvidedCell, {
        value: props.value
      }));
    }),
    renderFilter: options.renderFilter || function () {
      return null;
    },
    sortable: Boolean(options.sortable) && Boolean(options.sortFn),
    sortFn: options.sortFn || function () {
      return 0;
    },
    title: options.title
  };
}

var _default = CustomColumn;
exports.default = _default;