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
  const [css, theme] = useStyletron();
  return React.createElement("form", {
    className: css({
      backgroundColor: theme.colors.backgroundPrimary,
      paddingTop: theme.sizing.scale600,
      paddingRight: theme.sizing.scale600,
      paddingBottom: theme.sizing.scale600,
      paddingLeft: theme.sizing.scale600,
      width: '320px'
    }),
    onSubmit: event => {
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