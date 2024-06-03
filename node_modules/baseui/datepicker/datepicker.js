"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _index = _interopRequireDefault(require("date-fns/isValid/index.js"));

var _index2 = _interopRequireDefault(require("date-fns/isAfter/index.js"));

var _index3 = _interopRequireDefault(require("date-fns/isEqual/index.js"));

var _index4 = _interopRequireDefault(require("date-fns/parse/index.js"));

var _index5 = require("../input/index.js");

var _index6 = require("../popover/index.js");

var _calendar = _interopRequireDefault(require("./calendar.js"));

var _index7 = require("./utils/index.js");

var _overrides = require("../helpers/overrides.js");

var _i18nInterpolation = _interopRequireDefault(require("../helpers/i18n-interpolation.js"));

var _index8 = require("../locale/index.js");

var _styledComponents = require("./styled-components.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

var Datepicker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Datepicker, _React$Component);

  function Datepicker() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Datepicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Datepicker)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "calendar", void 0);

    _defineProperty(_assertThisInitialized(_this), "state", {
      calendarFocused: false,
      isOpen: false,
      isPseudoFocused: false,
      lastActiveElm: null,
      inputValue: _this.formatDisplayValue(_this.props.value) || '',
      isInputUsed: false
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (data) {
      var date = data.date;
      var isOpen = false;
      var isPseudoFocused = false;
      var calendarFocused = false;

      if (Array.isArray(date) && _this.props.range && date.length < 2) {
        isOpen = true;
        isPseudoFocused = true;
        calendarFocused = null;
      } else if (_this.state.lastActiveElm) {
        _this.state.lastActiveElm.focus();
      } // Time selectors previously caused the calendar popover to close.
      // The check below refrains from closing the popover if only times changed.


      var onlyTimeChanged = function onlyTimeChanged(prev, next) {
        if (!prev || !next) return false;
        var p = (0, _index7.formatDate)(prev, 'dd-MM-yyyy');
        var n = (0, _index7.formatDate)(next, 'dd-MM-yyyy');

        if (p === n) {
          return (0, _index7.getHours)(prev) !== (0, _index7.getHours)(next) || (0, _index7.getMinutes)(prev) !== (0, _index7.getMinutes)(next);
        }

        return false;
      };

      var prevValue = _this.props.value;

      if (Array.isArray(date) && Array.isArray(prevValue)) {
        if (date.some(function (d, i) {
          return onlyTimeChanged(prevValue[i], d);
        })) {
          isOpen = true;
        }
      } else if (!Array.isArray(date) && !Array.isArray(prevValue)) {
        if (onlyTimeChanged(prevValue, date)) {
          isOpen = true;
        }
      }

      _this.setState(_objectSpread({
        isOpen: isOpen,
        isPseudoFocused: isPseudoFocused
      }, calendarFocused === null ? {} : {
        calendarFocused: calendarFocused
      }, {
        inputValue: _this.formatDisplayValue(date)
      }));

      _this.props.onChange && _this.props.onChange(data);
    });

    _defineProperty(_assertThisInitialized(_this), "open", function () {
      _this.setState({
        isOpen: true,
        isPseudoFocused: true,
        calendarFocused: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "close", function () {
      var isPseudoFocused = false;

      _this.setState({
        isOpen: false,
        isPseudoFocused: isPseudoFocused,
        calendarFocused: false
      }, _this.props.onClose);
    });

    _defineProperty(_assertThisInitialized(_this), "handleEsc", function () {
      if (_this.state.lastActiveElm) {
        _this.state.lastActiveElm.focus();
      }

      _this.close();
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputBlur", function () {
      if (!_this.state.isPseudoFocused) {
        _this.close();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getMask", function () {
      var formatString = _this.props.formatString;
      var mask = '';

      if (_this.props.mask !== null) {
        mask = // using the mask provided through the top-level API
        _this.props.mask || ( // to make sure it's not a breaking change, we try calculating the input mask
        // from the formatString, if used by the developer
        // 1. mask generation from the formatstring if it's a range input
        formatString && _this.props.range ? "".concat(formatString, " \u2013 ").concat(formatString).replace(/[a-z]/gi, '9') : null) || ( // 2. mask generation from the formatstring if it is NOT a range input
        formatString ? formatString.replace(/[a-z]/gi, '9') : null) || ( // falling back to the default masks
        _this.props.range ? '9999/99/99 – 9999/99/99' : '9999/99/99');
      }

      return mask;
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputChange", function (event) {
      var inputValue = event.currentTarget.value;

      if (inputValue === _this.getMask().replace(/9/g, ' ') || inputValue.length === 0) {
        if (_this.props.range) {
          _this.props.onChange && _this.props.onChange({
            date: []
          });
        } else {
          _this.props.onChange && _this.props.onChange({
            date: null
          });
        }
      }

      _this.setState({
        inputValue: inputValue,
        isInputUsed: true
      });

      if (_this.props.range) {
        var _this$normalizeDashes = _this.normalizeDashes(inputValue).split(' – '),
            _this$normalizeDashes2 = _slicedToArray(_this$normalizeDashes, 2),
            left = _this$normalizeDashes2[0],
            right = _this$normalizeDashes2[1];

        var startDate = new Date(left);
        var endDate = new Date(right);
        var formatString = _this.props.formatString;

        if (formatString) {
          startDate = (0, _index4.default)(left, _this.normalizeDashes(formatString), new Date());
          endDate = (0, _index4.default)(right, _this.normalizeDashes(formatString), new Date());
        }

        var onChange = _this.props.onChange;

        if (onChange) {
          var datesValid = (0, _index.default)(startDate) && (0, _index.default)(endDate); // added equal case so that times within the same day can be expressed

          var rangeValid = (0, _index2.default)(endDate, startDate) || (0, _index3.default)(startDate, endDate);

          if (datesValid && rangeValid) {
            onChange({
              date: [startDate, endDate]
            });
          }
        }
      } else {
        var date = new Date(inputValue);
        (0, _index.default)(date) && _this.props.onChange && _this.props.onChange({
          date: date
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      if (!_this.state.isOpen && event.keyCode === 40) {
        _this.open();
      } else if (_this.state.isOpen && event.key === 'ArrowDown') {
        // next line prevents the page jump on the initial arrowDown
        event.preventDefault();

        _this.focusCalendar();
      } else if (_this.state.isOpen && event.keyCode === 9) {
        _this.close();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "focusCalendar", function () {
      if (typeof document !== 'undefined') {
        var lastActiveElm = document.activeElement;

        _this.setState({
          calendarFocused: true,
          lastActiveElm: lastActiveElm
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "normalizeDashes", function (inputValue) {
      // replacing both hyphens and em-dashes with en-dashs
      return inputValue.replace(/-/g, '–').replace(/—/g, '–');
    });

    return _this;
  }

  _createClass(Datepicker, [{
    key: "formatDate",
    value: function formatDate(date, formatString) {
      var _this2 = this;

      if (!date) {
        return '';
      } else if (Array.isArray(date) && !date[0] && !date[1]) {
        return '';
      } else if (Array.isArray(date)) {
        return date.map(function (day) {
          return (0, _index7.formatDate)(day, formatString, _this2.props.locale);
        }).join(' – ');
      } else {
        return (0, _index7.formatDate)(date, formatString, this.props.locale);
      }
    }
  }, {
    key: "formatDisplayValue",
    value: function formatDisplayValue(date) {
      var formatDisplayValue = this.props.formatDisplayValue || this.formatDate;
      formatDisplayValue = formatDisplayValue.bind(this);
      return formatDisplayValue(date, this.props.formatString || 'yyyy/MM/dd');
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.value !== this.props.value) {
        this.setState({
          inputValue: this.formatDisplayValue(this.props.value)
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props$overrides = this.props.overrides,
          overrides = _this$props$overrides === void 0 ? {} : _this$props$overrides;

      var _getOverrides = (0, _overrides.getOverrides)(overrides.Input, _index5.MaskedInput),
          _getOverrides2 = _slicedToArray(_getOverrides, 2),
          InputComponent = _getOverrides2[0],
          inputProps = _getOverrides2[1];

      var _getOverrides3 = (0, _overrides.getOverrides)(overrides.Popover, _index6.Popover),
          _getOverrides4 = _slicedToArray(_getOverrides3, 2),
          PopoverComponent = _getOverrides4[0],
          popoverProps = _getOverrides4[1];

      var _getOverrides5 = (0, _overrides.getOverrides)(overrides.InputWrapper, _styledComponents.StyledInputWrapper),
          _getOverrides6 = _slicedToArray(_getOverrides5, 2),
          InputWrapper = _getOverrides6[0],
          inputWrapperProps = _getOverrides6[1];

      var placeholder = this.props.placeholder || (this.props.range ? 'YYYY/MM/DD – YYYY/MM/DD' : 'YYYY/MM/DD');
      return React.createElement(_index8.LocaleContext.Consumer, null, function (locale) {
        return React.createElement(React.Fragment, null, React.createElement(PopoverComponent, _extends({
          focusLock: false,
          mountNode: _this3.props.mountNode,
          placement: _index6.PLACEMENT.bottom,
          isOpen: _this3.state.isOpen,
          onClickOutside: _this3.close,
          onEsc: _this3.handleEsc,
          content: React.createElement(_calendar.default, _extends({
            autoFocusCalendar: _this3.state.calendarFocused,
            trapTabbing: true,
            value: _this3.props.value
          }, _this3.props, {
            onChange: _this3.onChange
          }))
        }, popoverProps), React.createElement(InputWrapper, inputWrapperProps, React.createElement(InputComponent, _extends({
          "aria-disabled": _this3.props.disabled,
          "aria-label": _this3.props['aria-label'] || (_this3.props.range ? locale.datepicker.ariaLabelRange : locale.datepicker.ariaLabel),
          error: _this3.props.error,
          positive: _this3.props.positive,
          "aria-describedby": _this3.props['aria-describedby'],
          "aria-labelledby": _this3.props['aria-labelledby'],
          "aria-required": _this3.props.required || null,
          disabled: _this3.props.disabled,
          size: _this3.props.size,
          value: _this3.state.inputValue,
          onFocus: _this3.open,
          onBlur: _this3.handleInputBlur,
          onKeyDown: _this3.handleKeyDown,
          onChange: _this3.handleInputChange,
          placeholder: placeholder,
          mask: _this3.getMask(),
          required: _this3.props.required,
          clearable: _this3.props.clearable
        }, inputProps)))), React.createElement("p", {
          id: _this3.props['aria-describedby'],
          style: {
            position: 'fixed',
            width: '0px',
            height: '0px',
            border: 0,
            padding: 0,
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            clipPath: 'inset(100%)'
          }
        }, locale.datepicker.screenReaderMessageInput), React.createElement("p", {
          "aria-live": "assertive",
          style: {
            position: 'fixed',
            width: '0px',
            height: '0px',
            border: 0,
            padding: 0,
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            clipPath: 'inset(100%)'
          }
        }, // No date selected
        !_this3.props.value || Array.isArray(_this3.props.value) && !_this3.props.value.length ? '' : // Date selected in a non-range picker
        !Array.isArray(_this3.props.value) ? (0, _i18nInterpolation.default)(locale.datepicker.selectedDate, {
          date: _this3.state.inputValue || ''
        }) : // Start and end dates are selected in a range picker
        _this3.props.value.length > 1 ? (0, _i18nInterpolation.default)(locale.datepicker.selectedDateRange, {
          startDate: _this3.formatDisplayValue(_this3.props.value[0]),
          endDate: _this3.formatDisplayValue( // $FlowFixMe
          _this3.props.value[1])
        }) : // A single date selected in a range picker
        "".concat((0, _i18nInterpolation.default)(locale.datepicker.selectedDate, {
          date: _this3.formatDisplayValue(_this3.props.value[0])
        }), " ").concat(locale.datepicker.selectSecondDatePrompt)));
      });
    }
  }]);

  return Datepicker;
}(React.Component);

exports.default = Datepicker;

_defineProperty(Datepicker, "defaultProps", {
  'aria-describedby': 'datepicker--screenreader--message--input',
  value: null
});