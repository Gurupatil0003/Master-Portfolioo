/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { Label2, Paragraph2, Paragraph3 } from '../typography/index.js';

function ListItemLabel(props) {
  if (props.sublist) {
    return React.createElement(Paragraph2, null, props.children);
  }

  return React.createElement("div", null, React.createElement(Label2, null, props.children), props.description && React.createElement(Paragraph3, {
    $style: {
      marginTop: 0,
      marginBottom: 0
    }
  }, props.description));
}

export default ListItemLabel;