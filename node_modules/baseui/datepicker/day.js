"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = require("./styled-components.js");

var _index = require("./utils/index.js");

var _overrides = require("../helpers/overrides.js");

var _index2 = require("../locale/index.js");

var _focusVisible = require("../utils/focusVisible.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Day =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Day, _React$Component);

  function Day() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Day);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Day)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "dayElm", void 0);

    _defineProperty(_assertThisInitialized(_this), "state", {
      isHovered: false,
      isFocusVisible: false
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      var _this$props = _this.props,
          highlighted = _this$props.highlighted,
          date = _this$props.date,
          disabled = _this$props.disabled;

      if (event.key === 'Enter' && highlighted && !disabled) {
        event.preventDefault();

        _this.onSelect(date);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onClick", function (event) {
      var _this$props2 = _this.props,
          date = _this$props2.date,
          disabled = _this$props2.disabled;

      if (!disabled) {
        _this.props.onClick({
          event: event,
          date: date
        });

        _this.onSelect(date);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function (event) {
      if ((0, _focusVisible.isFocusVisible)(event)) {
        _this.setState({
          isFocusVisible: true
        });
      }

      _this.props.onFocus({
        event: event,
        date: _this.props.date
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onBlur", function (event) {
      if (_this.state.isFocusVisible !== false) {
        _this.setState({
          isFocusVisible: false
        });
      }

      _this.props.onBlur({
        event: event,
        date: _this.props.date
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseOver", function (event) {
      _this.setState({
        isHovered: true
      });

      _this.props.onMouseOver({
        event: event,
        date: _this.props.date
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseLeave", function (event) {
      _this.setState({
        isHovered: false
      });

      _this.props.onMouseLeave({
        event: event,
        date: _this.props.date
      });
    });

    _defineProperty(_assertThisInitialized(_this), "isWeekend", function () {
      var weekday = (0, _index.getDay)(_this.props.date);
      return weekday === 0 || weekday === 6;
    });

    _defineProperty(_assertThisInitialized(_this), "isOutsideMonth", function () {
      return _this.props.month !== undefined && _this.props.month !== (0, _index.getMonth)(_this.props.date);
    });

    return _this;
  }

  _createClass(Day, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.dayElm && this.props.focusedCalendar) {
        if (this.props.highlighted || !this.props.highlightedDate && this.isSelected()) {
          this.dayElm.focus();
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.dayElm && this.props.focusedCalendar) {
        if (this.props.highlighted || !this.props.highlightedDate && this.isSelected()) {
          this.dayElm.focus();
        }
      }
    }
  }, {
    key: "onSelect",
    value: function onSelect(selectedDate) {
      var _this$props3 = this.props,
          range = _this$props3.range,
          value = _this$props3.value;
      var date;

      if (Array.isArray(value) && range) {
        if (!value.length || value.length > 1) {
          date = [selectedDate];
        } else if ((0, _index.isAfter)(selectedDate, value[0])) {
          date = [value[0], selectedDate];
        } else {
          date = [selectedDate, value[0]];
        }
      } else {
        date = selectedDate;
      }

      this.props.onSelect({
        date: date
      });
    }
  }, {
    key: "isSelected",
    value: function isSelected() {
      var _this$props4 = this.props,
          value = _this$props4.value,
          date = _this$props4.date;

      if (Array.isArray(value)) {
        return (0, _index.isSameDay)(date, value[0]) || (0, _index.isSameDay)(date, value[1]);
      } else {
        return (0, _index.isSameDay)(date, value);
      }
    } // calculated for range case only

  }, {
    key: "isPseudoSelected",
    value: function isPseudoSelected() {
      var _this$props5 = this.props,
          date = _this$props5.date,
          value = _this$props5.value;

      if (Array.isArray(value) && !value[0] && !value[1]) {
        return false;
      } // fix flow by passing a specific arg type and remove 'Array.isArray(value)'


      if (Array.isArray(value) && value.length > 1) {
        return (0, _index.isDayInRange)(date, value[0], value[1]);
      }
    } // calculated for range case only

  }, {
    key: "isPseudoHighlighted",
    value: function isPseudoHighlighted() {
      var _this$props6 = this.props,
          date = _this$props6.date,
          value = _this$props6.value,
          highlightedDate = _this$props6.highlightedDate;

      if (Array.isArray(value) && !value[0] && !value[1]) {
        return false;
      } // fix flow by passing a specific arg type and remove 'Array.isArray(value)'


      if (Array.isArray(value) && highlightedDate && value[0] && !value[1]) {
        if ((0, _index.isAfter)(highlightedDate, value[0])) {
          return (0, _index.isDayInRange)(date, value[0], highlightedDate);
        } else {
          return (0, _index.isDayInRange)(date, highlightedDate, value[0]);
        }
      }
    }
  }, {
    key: "getSharedProps",
    value: function getSharedProps() {
      var _this$props7 = this.props,
          date = _this$props7.date,
          value = _this$props7.value,
          highlightedDate = _this$props7.highlightedDate,
          range = _this$props7.range,
          highlighted = _this$props7.highlighted;
      var $isHighlighted = highlighted;
      var $selected = this.isSelected();
      var $hasRangeHighlighted = !!(Array.isArray(value) && range && value.length === 1 && highlightedDate && !(0, _index.isSameDay)(value[0], highlightedDate));
      return {
        $date: date,
        $disabled: this.props.disabled,
        $endDate: Array.isArray(value) && this.props.range && $selected && (0, _index.isSameDay)(date, value[1]) || false,
        $hasRangeHighlighted: $hasRangeHighlighted,
        $hasRangeOnRight: Array.isArray(value) && $hasRangeHighlighted && highlightedDate && value[0] && (0, _index.isAfter)(highlightedDate, value[0]),
        $hasRangeSelected: Array.isArray(value) ? value.length === 2 : false,
        $highlightedDate: highlightedDate,
        $isHighlighted: $isHighlighted,
        $isHovered: this.state.isHovered,
        $isFocusVisible: this.state.isFocusVisible,
        $startOfMonth: (0, _index.isStartOfMonth)(date),
        $endOfMonth: (0, _index.isEndOfMonth)(date),
        $outsideMonth: this.isOutsideMonth(),
        $peekNextMonth: this.props.peekNextMonth,
        $pseudoHighlighted: this.props.range && !$isHighlighted && !$selected ? this.isPseudoHighlighted() : false,
        $pseudoSelected: this.props.range && !$selected ? this.isPseudoSelected() : false,
        $range: this.props.range,
        $selected: $selected,
        $startDate: Array.isArray(this.props.value) && this.props.value.length > 1 && this.props.range && $selected ? (0, _index.isSameDay)(date, this.props.value[0]) : false
      };
    }
  }, {
    key: "getAriaLabel",
    value: function getAriaLabel(sharedProps, localeContext) {
      var _this$props8 = this.props,
          date = _this$props8.date,
          locale = _this$props8.locale;
      return "".concat(sharedProps.$selected ? sharedProps.$range ? sharedProps.$endDate ? localeContext.datepicker.selectedEndDateLabel : localeContext.datepicker.selectedStartDateLabel : localeContext.datepicker.selectedLabel : sharedProps.$disabled ? localeContext.datepicker.dateNotAvailableLabel : localeContext.datepicker.chooseLabel, " ").concat((0, _index.formatDate)(date, 'EEEE, MMMM do yyyy', locale), ". ").concat(!sharedProps.$disabled ? localeContext.datepicker.dateAvailableLabel : '');
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props9 = this.props,
          date = _this$props9.date,
          peekNextMonth = _this$props9.peekNextMonth,
          _this$props9$override = _this$props9.overrides,
          overrides = _this$props9$override === void 0 ? {} : _this$props9$override;
      var sharedProps = this.getSharedProps();

      var _getOverrides = (0, _overrides.getOverrides)(overrides.Day, _styledComponents.StyledDay),
          _getOverrides2 = _slicedToArray(_getOverrides, 2),
          Day = _getOverrides2[0],
          dayProps = _getOverrides2[1];

      return !peekNextMonth && sharedProps.$outsideMonth ? React.createElement(Day, _extends({
        role: "gridcell"
      }, sharedProps, dayProps, {
        onFocus: this.onFocus,
        onBlur: this.onBlur
      })) : // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
      React.createElement(_index2.LocaleContext.Consumer, null, function (locale) {
        return React.createElement(Day, _extends({
          "aria-label": _this2.getAriaLabel(sharedProps, locale),
          ref: function ref(dayElm) {
            _this2.dayElm = dayElm;
          },
          role: "gridcell",
          "aria-roledescription": "button",
          tabIndex: _this2.props.highlighted || !_this2.props.highlightedDate && _this2.isSelected() ? 0 : -1
        }, sharedProps, dayProps, {
          // Adding event handlers after customers overrides in order to
          // make sure the components functions as expected
          // We can extract the handlers from props overrides
          // and call it along with internal handlers by creating an inline handler
          onFocus: _this2.onFocus,
          onBlur: _this2.onBlur,
          onClick: _this2.onClick,
          onKeyDown: _this2.onKeyDown,
          onMouseOver: _this2.onMouseOver,
          onMouseLeave: _this2.onMouseLeave
        }), (0, _index.getDate)(date));
      });
    }
  }]);

  return Day;
}(React.Component);

exports.default = Day;

_defineProperty(Day, "defaultProps", {
  disabled: false,
  date: new Date(),
  highlighted: false,
  range: false,
  month: new Date().getMonth(),
  onClick: function onClick() {},
  onSelect: function onSelect() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onMouseOver: function onMouseOver() {},
  onMouseLeave: function onMouseLeave() {},
  overrides: {},
  peekNextMonth: true,
  value: null
});