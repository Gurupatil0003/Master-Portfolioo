/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import CellShell from './cell-shell.js';
import { COLUMNS } from './constants.js';

function CustomColumn(options) {
  return {
    kind: COLUMNS.CUSTOM,
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
      return React.createElement(CellShell, {
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

export default CustomColumn;