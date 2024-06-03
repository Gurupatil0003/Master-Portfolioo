function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { StyledLink } from '../link/index.js';
import { useStyletron } from '../styles/index.js';
import CellShell from './cell-shell.js';
import { COLUMNS } from './constants.js';

function StringFilter(props) {
  return React.createElement("div", null, "not implemented for anchor column");
}

const AnchorCell = React.forwardRef((props, ref) => {
  const [css] = useStyletron();
  return React.createElement(CellShell, {
    ref: ref,
    isMeasured: props.isMeasured,
    isSelected: props.isSelected,
    onSelect: props.onSelect
  }, React.createElement("div", {
    className: css({
      display: '-webkit-box',
      WebkitLineClamp: 1,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    })
  }, React.createElement(StyledLink, {
    $as: props.elementAs,
    href: props.value.href
  }, props.value.content)));
});
AnchorCell.displayName = 'AnchorCell';

function AnchorColumn(options) {
  return {
    kind: COLUMNS.ANCHOR,
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
      return React.createElement(AnchorCell, _extends({}, props, {
        ref: ref,
        elementAs: options.elementAs
      }));
    }),
    renderFilter: StringFilter,
    sortable: options.sortable === undefined ? true : options.sortable,
    sortFn: function (a, b) {
      return a.content.localeCompare(b.content);
    },
    title: options.title
  };
}

export default AnchorColumn;