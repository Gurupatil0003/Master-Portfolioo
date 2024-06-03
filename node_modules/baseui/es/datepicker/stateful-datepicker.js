/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import StatefulContainer from './stateful-container.js';
import Datepicker from './datepicker.js';

function StatefulComponent(props) {
  return React.createElement(StatefulContainer, props, extendedProps => React.createElement(Datepicker, extendedProps));
}

StatefulComponent.defaultProps = {
  initialState: {},
  stateReducer: (type, nextState) => nextState,
  onChange: () => {}
};
export default StatefulComponent;