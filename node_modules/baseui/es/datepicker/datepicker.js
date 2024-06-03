function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import isValid from 'date-fns/isValid/index.js';
import isAfter from 'date-fns/isAfter/index.js';
import isEqual from 'date-fns/isEqual/index.js';
import parse from 'date-fns/parse/index.js';
import { MaskedInput } from '../input/index.js';
import { Popover, PLACEMENT } from '../popover/index.js';
import Calendar from './calendar.js';
import { formatDate, getHours, getMinutes } from './utils/index.js';
import { getOverrides } from '../helpers/overrides.js';
import getInterpolatedString from '../helpers/i18n-interpolation.js';
import { LocaleContext } from '../locale/index.js';
import { StyledInputWrapper } from './styled-components.js';
export default class Datepicker extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "calendar", void 0);

    _defineProperty(this, "state", {
      calendarFocused: false,
      isOpen: false,
      isPseudoFocused: false,
      lastActiveElm: null,
      inputValue: this.formatDisplayValue(this.props.value) || '',
      isInputUsed: false
    });

    _defineProperty(this, "onChange", data => {
      const {
        date
      } = data;
      let isOpen = false;
      let isPseudoFocused = false;
      let calendarFocused = false;

      if (Array.isArray(date) && this.props.range && date.length < 2) {
        isOpen = true;
        isPseudoFocused = true;
        calendarFocused = null;
      } else if (this.state.lastActiveElm) {
        this.state.lastActiveElm.focus();
      } // Time selectors previously caused the calendar popover to close.
      // The check below refrains from closing the popover if only times changed.


      const onlyTimeChanged = (prev, next) => {
        if (!prev || !next) return false;
        const p = formatDate(prev, 'dd-MM-yyyy');
        const n = formatDate(next, 'dd-MM-yyyy');

        if (p === n) {
          return getHours(prev) !== getHours(next) || getMinutes(prev) !== getMinutes(next);
        }

        return false;
      };

      const prevValue = this.props.value;

      if (Array.isArray(date) && Array.isArray(prevValue)) {
        if (date.some((d, i) => onlyTimeChanged(prevValue[i], d))) {
          isOpen = true;
        }
      } else if (!Array.isArray(date) && !Array.isArray(prevValue)) {
        if (onlyTimeChanged(prevValue, date)) {
          isOpen = true;
        }
      }

      this.setState({
        isOpen,
        isPseudoFocused,
        ...(calendarFocused === null ? {} : {
          calendarFocused
        }),
        inputValue: this.formatDisplayValue(date)
      });
      this.props.onChange && this.props.onChange(data);
    });

    _defineProperty(this, "open", () => {
      this.setState({
        isOpen: true,
        isPseudoFocused: true,
        calendarFocused: false
      });
    });

    _defineProperty(this, "close", () => {
      const isPseudoFocused = false;
      this.setState({
        isOpen: false,
        isPseudoFocused,
        calendarFocused: false
      }, this.props.onClose);
    });

    _defineProperty(this, "handleEsc", () => {
      if (this.state.lastActiveElm) {
        this.state.lastActiveElm.focus();
      }

      this.close();
    });

    _defineProperty(this, "handleInputBlur", () => {
      if (!this.state.isPseudoFocused) {
        this.close();
      }
    });

    _defineProperty(this, "getMask", () => {
      const {
        formatString
      } = this.props;
      let mask = '';

      if (this.props.mask !== null) {
        mask = // using the mask provided through the top-level API
        this.props.mask || ( // to make sure it's not a breaking change, we try calculating the input mask
        // from the formatString, if used by the developer
        // 1. mask generation from the formatstring if it's a range input
        formatString && this.props.range ? `${formatString} – ${formatString}`.replace(/[a-z]/gi, '9') : null) || ( // 2. mask generation from the formatstring if it is NOT a range input
        formatString ? formatString.replace(/[a-z]/gi, '9') : null) || ( // falling back to the default masks
        this.props.range ? '9999/99/99 – 9999/99/99' : '9999/99/99');
      }

      return mask;
    });

    _defineProperty(this, "handleInputChange", event => {
      const inputValue = event.currentTarget.value;

      if (inputValue === this.getMask().replace(/9/g, ' ') || inputValue.length === 0) {
        if (this.props.range) {
          this.props.onChange && this.props.onChange({
            date: []
          });
        } else {
          this.props.onChange && this.props.onChange({
            date: null
          });
        }
      }

      this.setState({
        inputValue,
        isInputUsed: true
      });

      if (this.props.range) {
        const [left, right] = this.normalizeDashes(inputValue).split(' – ');
        let startDate = new Date(left);
        let endDate = new Date(right);
        const formatString = this.props.formatString;

        if (formatString) {
          startDate = parse(left, this.normalizeDashes(formatString), new Date());
          endDate = parse(right, this.normalizeDashes(formatString), new Date());
        }

        const onChange = this.props.onChange;

        if (onChange) {
          const datesValid = isValid(startDate) && isValid(endDate); // added equal case so that times within the same day can be expressed

          const rangeValid = isAfter(endDate, startDate) || isEqual(startDate, endDate);

          if (datesValid && rangeValid) {
            onChange({
              date: [startDate, endDate]
            });
          }
        }
      } else {
        const date = new Date(inputValue);
        isValid(date) && this.props.onChange && this.props.onChange({
          date
        });
      }
    });

    _defineProperty(this, "handleKeyDown", event => {
      if (!this.state.isOpen && event.keyCode === 40) {
        this.open();
      } else if (this.state.isOpen && event.key === 'ArrowDown') {
        // next line prevents the page jump on the initial arrowDown
        event.preventDefault();
        this.focusCalendar();
      } else if (this.state.isOpen && event.keyCode === 9) {
        this.close();
      }
    });

    _defineProperty(this, "focusCalendar", () => {
      if (typeof document !== 'undefined') {
        const lastActiveElm = document.activeElement;
        this.setState({
          calendarFocused: true,
          lastActiveElm
        });
      }
    });

    _defineProperty(this, "normalizeDashes", inputValue => {
      // replacing both hyphens and em-dashes with en-dashs
      return inputValue.replace(/-/g, '–').replace(/—/g, '–');
    });
  }

  formatDate(date, formatString) {
    if (!date) {
      return '';
    } else if (Array.isArray(date) && !date[0] && !date[1]) {
      return '';
    } else if (Array.isArray(date)) {
      return date.map(day => formatDate(day, formatString, this.props.locale)).join(' – ');
    } else {
      return formatDate(date, formatString, this.props.locale);
    }
  }

  formatDisplayValue(date) {
    let formatDisplayValue = this.props.formatDisplayValue || this.formatDate;
    formatDisplayValue = formatDisplayValue.bind(this);
    return formatDisplayValue(date, this.props.formatString || 'yyyy/MM/dd');
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({
        inputValue: this.formatDisplayValue(this.props.value)
      });
    }
  }

  render() {
    const {
      overrides = {}
    } = this.props;
    const [InputComponent, inputProps] = getOverrides(overrides.Input, MaskedInput);
    const [PopoverComponent, popoverProps] = getOverrides(overrides.Popover, Popover);
    const [InputWrapper, inputWrapperProps] = getOverrides(overrides.InputWrapper, StyledInputWrapper);
    const placeholder = this.props.placeholder || (this.props.range ? 'YYYY/MM/DD – YYYY/MM/DD' : 'YYYY/MM/DD');
    return React.createElement(LocaleContext.Consumer, null, locale => React.createElement(React.Fragment, null, React.createElement(PopoverComponent, _extends({
      focusLock: false,
      mountNode: this.props.mountNode,
      placement: PLACEMENT.bottom,
      isOpen: this.state.isOpen,
      onClickOutside: this.close,
      onEsc: this.handleEsc,
      content: React.createElement(Calendar, _extends({
        autoFocusCalendar: this.state.calendarFocused,
        trapTabbing: true,
        value: this.props.value
      }, this.props, {
        onChange: this.onChange
      }))
    }, popoverProps), React.createElement(InputWrapper, inputWrapperProps, React.createElement(InputComponent, _extends({
      "aria-disabled": this.props.disabled,
      "aria-label": this.props['aria-label'] || (this.props.range ? locale.datepicker.ariaLabelRange : locale.datepicker.ariaLabel),
      error: this.props.error,
      positive: this.props.positive,
      "aria-describedby": this.props['aria-describedby'],
      "aria-labelledby": this.props['aria-labelledby'],
      "aria-required": this.props.required || null,
      disabled: this.props.disabled,
      size: this.props.size,
      value: this.state.inputValue,
      onFocus: this.open,
      onBlur: this.handleInputBlur,
      onKeyDown: this.handleKeyDown,
      onChange: this.handleInputChange,
      placeholder: placeholder,
      mask: this.getMask(),
      required: this.props.required,
      clearable: this.props.clearable
    }, inputProps)))), React.createElement("p", {
      id: this.props['aria-describedby'],
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
    !this.props.value || Array.isArray(this.props.value) && !this.props.value.length ? '' : // Date selected in a non-range picker
    !Array.isArray(this.props.value) ? getInterpolatedString(locale.datepicker.selectedDate, {
      date: this.state.inputValue || ''
    }) : // Start and end dates are selected in a range picker
    this.props.value.length > 1 ? getInterpolatedString(locale.datepicker.selectedDateRange, {
      startDate: this.formatDisplayValue(this.props.value[0]),
      endDate: this.formatDisplayValue( // $FlowFixMe
      this.props.value[1])
    }) : // A single date selected in a range picker
    `${getInterpolatedString(locale.datepicker.selectedDate, {
      date: this.formatDisplayValue(this.props.value[0])
    })} ${locale.datepicker.selectSecondDatePrompt}`)));
  }

}

_defineProperty(Datepicker, "defaultProps", {
  'aria-describedby': 'datepicker--screenreader--message--input',
  value: null
});