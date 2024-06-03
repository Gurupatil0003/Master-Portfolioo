function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { useStyletron } from '../styles/index.js';
import CellShell from './cell-shell.js';
import { COLUMNS } from './constants.js';
import { HighlightCellText } from './text-search.js';

function StringFilter(props) {
  return React.createElement("div", null, "not implemented for string column");
}

const StringCell = React.forwardRef((props, ref) => {
  const [css] = useStyletron();
  return React.createElement(CellShell, {
    ref: ref,
    isMeasured: props.isMeasured,
    isSelected: props.isSelected,
    onSelect: props.onSelect
  }, React.createElement("div", {
    className: css({
      display: '-webkit-box',
      WebkitLineClamp: props.lineClamp || 1,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    })
  }, props.textQuery ? React.createElement(HighlightCellText, {
    text: props.value,
    query: props.textQuery
  }) : props.value));
});
StringCell.displayName = 'StringCell';

function StringColumn(options) {
  return {
    kind: COLUMNS.STRING,
    buildFilter: function (params) {
      return function (data) {
        return true;
      };
    },
    filterable: false,
    mapDataToValue: options.mapDataToValue,
    maxWidth: options.maxWidth,
    minWidth: options.minWidth,
    renderCell: React.forwardRef((props, ref) => {
      return React.createElement(StringCell, _extends({}, props, {
        ref: ref,
        lineClamp: options.lineClamp
      }));
    }),
    renderFilter: StringFilter,
    sortable: options.sortable === undefined ? true : options.sortable,
    sortFn: function (a, b) {
      return a.localeCompare(b);
    },
    title: options.title
  };
}

export default StringColumn;