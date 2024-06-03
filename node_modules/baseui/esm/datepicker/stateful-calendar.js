/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import StatefulContainer from './stateful-container.js';
import Calendar from './calendar.js';

function StatefulComponent(props) {
  return React.createElement(StatefulContainer, props, function (extendedProps) {
    return React.createElement(Calendar, extendedProps);
  });
}

StatefulComponent.defaultProps = {
  initialState: {},
  stateReducer: function stateReducer(type, nextState) {
    return nextState;
  },
  onSelect: function onSelect() {}
};
export default StatefulComponent;