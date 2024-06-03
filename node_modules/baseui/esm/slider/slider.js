function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

var limitValue = function limitValue(value) {
  if (value.length > 2 || value.length === 0) {
    throw new Error('the value prop represents positions of thumbs, so its length can be only one or two');
  }

  return value;
};

var ThumbLabel = function ThumbLabel(_ref) {
  var index = _ref.index,
      values = _ref.values,
      rangeRef = _ref.rangeRef,
      Component = _ref.Component,
      props = _objectWithoutProperties(_ref, ["index", "values", "rangeRef", "Component"]);

  var step = props.$step;

  var _useThumbOverlap = useThumbOverlap(rangeRef, values, index, step),
      _useThumbOverlap2 = _slicedToArray(_useThumbOverlap, 2),
      labelValue = _useThumbOverlap2[0],
      style = _useThumbOverlap2[1];

  return React.createElement(Component, _extends({}, props, {
    style: style
  }), labelValue);
};

var Slider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Slider, _React$Component);

  function Slider() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Slider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Slider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isFocusVisible: false,
      focusedThumbIndex: -1
    });

    _defineProperty(_assertThisInitialized(_this), "rangeRef", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (event) {
      if (isFocusVisible(event)) {
        _this.setState({
          isFocusVisible: true
        });
      }

      var index = // eslint-disable-next-line flowtype/no-weak-types
      event.target.parentNode.firstChild === event.target ? 0 : 1;

      _this.setState({
        focusedThumbIndex: index
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event) {
      if (_this.state.isFocusVisible !== false) {
        _this.setState({
          isFocusVisible: false
        });
      }

      _this.setState({
        focusedThumbIndex: -1
      });
    });

    return _this;
  }

  _createClass(Slider, [{
    key: "getSharedProps",
    value: function getSharedProps() {
      var _this$props = this.props,
          disabled = _this$props.disabled,
          step = _this$props.step,
          min = _this$props.min,
          max = _this$props.max,
          value = _this$props.value;
      return {
        $disabled: disabled,
        $step: step,
        $min: min,
        $max: max,
        $value: limitValue(value),
        $isFocusVisible: this.state.isFocusVisible
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          _this$props2$override = _this$props2.overrides,
          overrides = _this$props2$override === void 0 ? {} : _this$props2$override,
          min = _this$props2.min,
          max = _this$props2.max,
          step = _this$props2.step,
          _onChange = _this$props2.onChange,
          _onFinalChange = _this$props2.onFinalChange,
          disabled = _this$props2.disabled;
      var value = limitValue(this.props.value);

      var _getOverrides = getOverrides(overrides.Root, StyledRoot),
          _getOverrides2 = _slicedToArray(_getOverrides, 2),
          Root = _getOverrides2[0],
          rootProps = _getOverrides2[1];

      var _getOverrides3 = getOverrides(overrides.Track, StyledTrack),
          _getOverrides4 = _slicedToArray(_getOverrides3, 2),
          Track = _getOverrides4[0],
          trackProps = _getOverrides4[1];

      var _getOverrides5 = getOverrides(overrides.InnerTrack, StyledInnerTrack),
          _getOverrides6 = _slicedToArray(_getOverrides5, 2),
          InnerTrack = _getOverrides6[0],
          innerTrackProps = _getOverrides6[1];

      var _getOverrides7 = getOverrides(overrides.Thumb, StyledThumb),
          _getOverrides8 = _slicedToArray(_getOverrides7, 2),
          Thumb = _getOverrides8[0],
          thumbProps = _getOverrides8[1];

      var _getOverrides9 = getOverrides(overrides.InnerThumb, StyledInnerThumb),
          _getOverrides10 = _slicedToArray(_getOverrides9, 2),
          InnerThumb = _getOverrides10[0],
          innerThumbProps = _getOverrides10[1];

      var _getOverrides11 = getOverrides(overrides.ThumbValue, StyledThumbValue),
          _getOverrides12 = _slicedToArray(_getOverrides11, 2),
          ThumbValue = _getOverrides12[0],
          thumbValueProps = _getOverrides12[1];

      var _getOverrides13 = getOverrides(overrides.Tick, StyledTick),
          _getOverrides14 = _slicedToArray(_getOverrides13, 2),
          Tick = _getOverrides14[0],
          tickProps = _getOverrides14[1];

      var _getOverrides15 = getOverrides(overrides.TickBar, StyledTickBar),
          _getOverrides16 = _slicedToArray(_getOverrides15, 2),
          TickBar = _getOverrides16[0],
          tickBarProps = _getOverrides16[1];

      var sharedProps = this.getSharedProps();
      return React.createElement(ThemeContext.Consumer, null, function (theme) {
        return React.createElement(Root, _extends({
          "data-baseweb": "slider"
        }, sharedProps, rootProps, {
          onFocus: forkFocus(rootProps, _this2.handleFocus),
          onBlur: forkBlur(rootProps, _this2.handleBlur)
        }), React.createElement(Range, {
          step: step,
          min: min,
          max: max,
          values: value,
          disabled: disabled,
          onChange: function onChange(value) {
            return _onChange({
              value: value
            });
          },
          onFinalChange: function onFinalChange(value) {
            return _onFinalChange({
              value: value
            });
          },
          ref: _this2.rangeRef,
          rtl: theme.direction === 'rtl',
          renderTrack: function renderTrack(_ref2) {
            var props = _ref2.props,
                children = _ref2.children,
                isDragged = _ref2.isDragged;
            return React.createElement(Track, _extends({
              onMouseDown: props.onMouseDown,
              onTouchStart: props.onTouchStart,
              $isDragged: isDragged
            }, sharedProps, trackProps), React.createElement(InnerTrack, _extends({
              $isDragged: isDragged,
              ref: props.ref
            }, sharedProps, innerTrackProps), children));
          },
          renderThumb: function renderThumb(_ref3) {
            var props = _ref3.props,
                index = _ref3.index,
                isDragged = _ref3.isDragged;
            return React.createElement(Thumb, _extends({}, props, {
              $thumbIndex: index,
              $isDragged: isDragged,
              style: _objectSpread({}, props.style)
            }, sharedProps, thumbProps, {
              $isFocusVisible: _this2.state.isFocusVisible && _this2.state.focusedThumbIndex === index
            }), React.createElement(ThumbLabel, _extends({
              Component: ThumbValue,
              values: value,
              index: index,
              rangeRef: _this2.rangeRef.current,
              $thumbIndex: index,
              $isDragged: isDragged
            }, sharedProps, thumbValueProps)), React.createElement(InnerThumb, _extends({
              $thumbIndex: index,
              $isDragged: isDragged
            }, sharedProps, innerThumbProps)));
          }
        }), React.createElement(TickBar, _extends({}, sharedProps, tickBarProps), React.createElement(Tick, _extends({}, sharedProps, tickProps), min), React.createElement(Tick, _extends({}, sharedProps, tickProps), max)));
      });
    }
  }]);

  return Slider;
}(React.Component);

_defineProperty(Slider, "defaultProps", {
  overrides: {},
  disabled: false,
  onChange: function onChange() {},
  onFinalChange: function onFinalChange() {},
  min: 0,
  max: 100,
  step: 1
});

export default Slider;