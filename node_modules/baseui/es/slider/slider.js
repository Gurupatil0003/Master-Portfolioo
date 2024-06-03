function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { Range, useThumbOverlap } from 'react-range';
import { isFocusVisible, forkFocus, forkBlur } from '../utils/focusVisible.js';
import { Root as StyledRoot, Track as StyledTrack, InnerTrack as StyledInnerTrack, Tick as StyledTick, TickBar as StyledTickBar, Thumb as StyledThumb, InnerThumb as StyledInnerThumb, ThumbValue as StyledThumbValue } from './styled-components.js';
import { getOverrides } from '../helpers/overrides.js';
import { ThemeContext } from '../styles/theme-provider.js'; // value.length should not be bigger than two
// because our design doesn't support more than
// two thumbs

const limitValue = value => {
  if (value.length > 2 || value.length === 0) {
    throw new Error('the value prop represents positions of thumbs, so its length can be only one or two');
  }

  return value;
};

const ThumbLabel = ({
  index,
  values,
  rangeRef,
  Component,
  ...props
}) => {
  const {
    $step: step
  } = props;
  const [labelValue, style] = useThumbOverlap(rangeRef, values, index, step);
  return React.createElement(Component, _extends({}, props, {
    style: style
  }), labelValue);
};

class Slider extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      isFocusVisible: false,
      focusedThumbIndex: -1
    });

    _defineProperty(this, "rangeRef", React.createRef());

    _defineProperty(this, "handleFocus", event => {
      if (isFocusVisible(event)) {
        this.setState({
          isFocusVisible: true
        });
      }

      const index = // eslint-disable-next-line flowtype/no-weak-types
      event.target.parentNode.firstChild === event.target ? 0 : 1;
      this.setState({
        focusedThumbIndex: index
      });
    });

    _defineProperty(this, "handleBlur", event => {
      if (this.state.isFocusVisible !== false) {
        this.setState({
          isFocusVisible: false
        });
      }

      this.setState({
        focusedThumbIndex: -1
      });
    });
  }

  getSharedProps() {
    const {
      disabled,
      step,
      min,
      max,
      value
    } = this.props;
    return {
      $disabled: disabled,
      $step: step,
      $min: min,
      $max: max,
      $value: limitValue(value),
      $isFocusVisible: this.state.isFocusVisible
    };
  }

  render() {
    const {
      overrides = {},
      min,
      max,
      step,
      onChange,
      onFinalChange,
      disabled
    } = this.props;
    const value = limitValue(this.props.value);
    const [Root, rootProps] = getOverrides(overrides.Root, StyledRoot);
    const [Track, trackProps] = getOverrides(overrides.Track, StyledTrack);
    const [InnerTrack, innerTrackProps] = getOverrides(overrides.InnerTrack, StyledInnerTrack);
    const [Thumb, thumbProps] = getOverrides(overrides.Thumb, StyledThumb);
    const [InnerThumb, innerThumbProps] = getOverrides(overrides.InnerThumb, StyledInnerThumb);
    const [ThumbValue, thumbValueProps] = getOverrides(overrides.ThumbValue, StyledThumbValue);
    const [Tick, tickProps] = getOverrides(overrides.Tick, StyledTick);
    const [TickBar, tickBarProps] = getOverrides(overrides.TickBar, StyledTickBar);
    const sharedProps = this.getSharedProps();
    return React.createElement(ThemeContext.Consumer, null, theme => React.createElement(Root, _extends({
      "data-baseweb": "slider"
    }, sharedProps, rootProps, {
      onFocus: forkFocus(rootProps, this.handleFocus),
      onBlur: forkBlur(rootProps, this.handleBlur)
    }), React.createElement(Range, {
      step: step,
      min: min,
      max: max,
      values: value,
      disabled: disabled,
      onChange: value => onChange({
        value
      }),
      onFinalChange: value => onFinalChange({
        value
      }),
      ref: this.rangeRef,
      rtl: theme.direction === 'rtl',
      renderTrack: ({
        props,
        children,
        isDragged
      }) => React.createElement(Track, _extends({
        onMouseDown: props.onMouseDown,
        onTouchStart: props.onTouchStart,
        $isDragged: isDragged
      }, sharedProps, trackProps), React.createElement(InnerTrack, _extends({
        $isDragged: isDragged,
        ref: props.ref
      }, sharedProps, innerTrackProps), children)),
      renderThumb: ({
        props,
        index,
        isDragged
      }) => React.createElement(Thumb, _extends({}, props, {
        $thumbIndex: index,
        $isDragged: isDragged,
        style: { ...props.style
        }
      }, sharedProps, thumbProps, {
        $isFocusVisible: this.state.isFocusVisible && this.state.focusedThumbIndex === index
      }), React.createElement(ThumbLabel, _extends({
        Component: ThumbValue,
        values: value,
        index: index,
        rangeRef: this.rangeRef.current,
        $thumbIndex: index,
        $isDragged: isDragged
      }, sharedProps, thumbValueProps)), React.createElement(InnerThumb, _extends({
        $thumbIndex: index,
        $isDragged: isDragged
      }, sharedProps, innerThumbProps)))
    }), React.createElement(TickBar, _extends({}, sharedProps, tickBarProps), React.createElement(Tick, _extends({}, sharedProps, tickProps), min), React.createElement(Tick, _extends({}, sharedProps, tickProps), max))));
  }

}

_defineProperty(Slider, "defaultProps", {
  overrides: {},
  disabled: false,
  onChange: () => {},
  onFinalChange: () => {},
  min: 0,
  max: 100,
  step: 1
});

export default Slider;