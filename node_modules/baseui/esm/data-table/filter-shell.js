function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { Button, SIZE as BUTTON_SIZE } from '../button/index.js';
import { Checkbox, STYLE_TYPE } from '../checkbox/index.js';
import { useStyletron } from '../styles/index.js';

function FilterShell(props) {
  var _useStyletron = useStyletron(),
      _useStyletron2 = _slicedToArray(_useStyletron, 2),
      css = _useStyletron2[0],
      theme = _useStyletron2[1];

  return React.createElement("form", {
    className: css({
      backgroundColor: theme.colors.backgroundPrimary,
      paddingTop: theme.sizing.scale600,
      paddingRight: theme.sizing.scale600,
      paddingBottom: theme.sizing.scale600,
      paddingLeft: theme.sizing.scale600,
      width: '320px'
    }),
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      props.onApply();
    }
  }, props.children, React.createElement("div", {
    className: css({
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: theme.sizing.scale600
    })
  }, React.createElement(Checkbox, {
    checked: props.exclude,
    onChange: props.onExcludeChange,
    checkmarkType: STYLE_TYPE.toggle_round,
    labelPlacement: "right"
  }, "Exclude"), React.createElement(Button, {
    size: BUTTON_SIZE.compact,
    type: "submit"
  }, "Apply")));
}

export default FilterShell;