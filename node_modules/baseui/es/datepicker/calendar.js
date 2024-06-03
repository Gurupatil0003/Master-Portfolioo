function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { FormControl } from '../form-control/index.js';
import { LocaleContext } from '../locale/index.js';
import { Select } from '../select/index.js';
import CalendarHeader from './calendar-header.js';
import Month from './month.js';
import TimePicker from '../timepicker/timepicker.js';
import { StyledCalendarContainer, StyledMonthContainer, StyledRoot, StyledSelectorContainer } from './styled-components.js';
import { applyDateToTime, applyTimeToDate, addDays, addMonths, addWeeks, getEffectiveMinDate, getEffectiveMaxDate, getEndOfWeek, getMonth, getStartOfWeek, getStartOfMonth, isAfter, isBefore, isSameDay, isSameMonth, isSameYear, subDays, subWeeks, subMonths, subYears } from './utils/index.js';
import { getOverrides, mergeOverrides } from '../helpers/overrides.js';
import { ORIENTATION } from './constants.js';
export default class Calendar extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "calendar", void 0);

    _defineProperty(this, "getDateInView", () => {
      const {
        highlightedDate,
        value
      } = this.props;
      const minDate = getEffectiveMinDate(this.props);
      const maxDate = getEffectiveMaxDate(this.props);
      const current = new Date();
      const initialDate = this.getSingleDate(value) || highlightedDate;

      if (initialDate) {
        return initialDate;
      } else {
        if (minDate && isBefore(current, minDate)) {
          return minDate;
        } else if (maxDate && isAfter(current, maxDate)) {
          return maxDate;
        }
      }

      return current;
    });

    _defineProperty(this, "handleMonthChange", date => {
      this.setHighlightedDate(getStartOfMonth(date));

      if (this.props.onMonthChange) {
        this.props.onMonthChange({
          date
        });
      }
    });

    _defineProperty(this, "handleYearChange", date => {
      this.setHighlightedDate(date);

      if (this.props.onYearChange) {
        this.props.onYearChange({
          date
        });
      }
    });

    _defineProperty(this, "changeMonth", ({
      date
    }) => {
      this.setState({
        date: date
      }, () => this.handleMonthChange(this.state.date));
    });

    _defineProperty(this, "changeYear", ({
      date
    }) => {
      this.setState({
        date: date
      }, () => this.handleYearChange(this.state.date));
    });

    _defineProperty(this, "renderCalendarHeader", (date = this.state.date, order) => {
      return React.createElement(CalendarHeader, _extends({}, this.props, {
        key: `month-header-${order}`,
        date: date,
        order: order,
        onMonthChange: this.changeMonth,
        onYearChange: this.changeYear
      }));
    });

    _defineProperty(this, "onKeyDown", event => {
      switch (event.key) {
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'ArrowRight':
        case 'Home':
        case 'End':
        case 'PageUp':
        case 'PageDown':
          this.handleArrowKey(event.key);
          event.preventDefault();
          event.stopPropagation();
          break;
      }
    });

    _defineProperty(this, "handleArrowKey", key => {
      const {
        highlightedDate: oldDate
      } = this.state;
      let highlightedDate = oldDate;

      switch (key) {
        case 'ArrowLeft':
          // adding `new Date()` as the last option to satisfy Flow
          highlightedDate = subDays(highlightedDate ? highlightedDate : new Date(), 1);
          break;

        case 'ArrowRight':
          highlightedDate = addDays( // adding `new Date()` as the last option to satisfy Flow
          highlightedDate ? highlightedDate : new Date(), 1);
          break;

        case 'ArrowUp':
          highlightedDate = subWeeks( // adding `new Date()` as the last option to satisfy Flow
          highlightedDate ? highlightedDate : new Date(), 1);
          break;

        case 'ArrowDown':
          highlightedDate = addWeeks( // adding `new Date()` as the last option to satisfy Flow
          highlightedDate ? highlightedDate : new Date(), 1);
          break;

        case 'Home':
          highlightedDate = getStartOfWeek( // adding `new Date()` as the last option to satisfy Flow
          highlightedDate ? highlightedDate : new Date());
          break;

        case 'End':
          highlightedDate = getEndOfWeek( // adding `new Date()` as the last option to satisfy Flow
          highlightedDate ? highlightedDate : new Date());
          break;

        case 'PageUp':
          highlightedDate = subMonths( // adding `new Date()` as the last option to satisfy Flow
          highlightedDate ? highlightedDate : new Date(), 1);
          break;

        case 'PageDown':
          highlightedDate = addMonths( // adding `new Date()` as the last option to satisfy Flow
          highlightedDate ? highlightedDate : new Date(), 1);
          break;
      }

      this.setState({
        highlightedDate,
        date: highlightedDate
      });
    });

    _defineProperty(this, "focusCalendar", () => {
      if (!this.state.focused) {
        this.setState({
          focused: true
        });
      }
    });

    _defineProperty(this, "blurCalendar", () => {
      if (typeof document !== 'undefined') {
        const activeElm = document.activeElement;

        if (this.calendar && !this.calendar.contains(activeElm)) {
          this.setState({
            focused: false
          });
        }
      }
    });

    _defineProperty(this, "handleTabbing", event => {
      if (typeof document !== 'undefined') {
        if (event.keyCode === 9) {
          const activeElm = document.activeElement; // need to look for any tabindex >= 0 and ideally for not disabled
          // focusable by default elements like input, button, etc.

          const focusable = this.state.rootElement ? this.state.rootElement.querySelectorAll('[tabindex="0"]') : null;
          const length = focusable ? focusable.length : 0;

          if (event.shiftKey) {
            if (focusable && activeElm === focusable[0]) {
              event.preventDefault();
              focusable[length - 1].focus();
            }
          } else {
            if (focusable && activeElm === focusable[length - 1]) {
              event.preventDefault();
              focusable[0].focus();
            }
          }
        }
      }
    });

    _defineProperty(this, "onDayFocus", data => {
      const {
        date
      } = data;
      this.setState({
        highlightedDate: date
      });
      this.focusCalendar();
      this.props.onDayFocus && this.props.onDayFocus(data);
    });

    _defineProperty(this, "onDayMouseOver", data => {
      const {
        date
      } = data;
      this.setState({
        highlightedDate: date
      });
      this.props.onDayMouseOver && this.props.onDayMouseOver(data);
    });

    _defineProperty(this, "onDayMouseLeave", data => {
      const {
        date
      } = data;
      this.setHighlightedDate(date);
      this.props.onDayMouseLeave && this.props.onDayMouseLeave(data);
    });

    _defineProperty(this, "handleDateChange", data => {
      const {
        onChange = params => {}
      } = this.props;

      if (Array.isArray(data.date)) {
        const dates = data.date.map((date, index) => {
          const values = [].concat(this.props.value);
          return applyDateToTime(values[index], date);
        });
        onChange({
          date: dates
        });
      } else if (!Array.isArray(this.props.value) && data.date) {
        const nextDate = applyDateToTime(this.props.value, data.date);
        onChange({
          date: nextDate
        });
      } else {
        onChange({
          date: data.date
        });
      }
    });

    _defineProperty(this, "handleTimeChange", (time, index) => {
      const {
        onChange = params => {}
      } = this.props;

      if (Array.isArray(this.props.value)) {
        const dates = this.props.value.map((date, i) => {
          if (index === i) {
            return applyTimeToDate(date, time);
          }

          return date;
        });
        onChange({
          date: dates
        });
      } else {
        const date = applyTimeToDate(this.props.value, time);
        onChange({
          date
        });
      }
    });

    _defineProperty(this, "renderMonths", translations => {
      const {
        overrides = {}
      } = this.props;
      const monthList = [];
      const [CalendarContainer, calendarContainerProps] = getOverrides(overrides.CalendarContainer, StyledCalendarContainer);
      const [MonthContainer, monthContainerProps] = getOverrides(overrides.MonthContainer, StyledMonthContainer);

      for (let i = 0; i < (this.props.monthsShown || 1); ++i) {
        const monthSubComponents = [];
        const monthDate = addMonths(this.state.date, i);
        const monthKey = `month-${i}`;
        monthSubComponents.push(this.renderCalendarHeader(monthDate, i));
        monthSubComponents.push(React.createElement(CalendarContainer, _extends({
          key: monthKey,
          ref: calendar => {
            this.calendar = calendar;
          },
          role: "grid",
          "aria-roledescription": translations.ariaRoleDescCalMonth,
          "aria-multiselectable": this.props.range || null,
          onKeyDown: this.onKeyDown
        }, calendarContainerProps), React.createElement(Month, {
          date: monthDate,
          excludeDates: this.props.excludeDates,
          filterDate: this.props.filterDate,
          highlightedDate: this.state.highlightedDate,
          includeDates: this.props.includeDates,
          focusedCalendar: this.state.focused,
          range: this.props.range,
          locale: this.props.locale,
          maxDate: this.props.maxDate,
          minDate: this.props.minDate,
          month: getMonth(this.state.date),
          onDayBlur: this.blurCalendar,
          onDayFocus: this.onDayFocus,
          onDayClick: this.props.onDayClick,
          onDayMouseOver: this.onDayMouseOver,
          onDayMouseLeave: this.onDayMouseLeave,
          onChange: this.handleDateChange,
          overrides: overrides,
          value: this.props.value,
          peekNextMonth: this.props.peekNextMonth
        })));
        monthList.push(React.createElement("div", {
          key: `month-component-${i}`
        }, monthSubComponents));
      }

      return React.createElement(MonthContainer, monthContainerProps, monthList);
    });

    _defineProperty(this, "renderTimeSelect", (value, onChange, label) => {
      const {
        overrides = {}
      } = this.props;
      const [TimeSelectContainer, timeSelectContainerProps] = getOverrides(overrides.TimeSelectContainer, StyledSelectorContainer);
      const [TimeSelectFormControl, timeSelectFormControlProps] = getOverrides(overrides.TimeSelectFormControl, FormControl);
      const [TimeSelect, timeSelectProps] = getOverrides(overrides.TimeSelect, TimePicker);
      return React.createElement(TimeSelectContainer, timeSelectContainerProps, React.createElement(TimeSelectFormControl, _extends({
        label: label
      }, timeSelectFormControlProps), React.createElement(TimeSelect, _extends({
        value: value ? new Date(value) : value,
        onChange: onChange
      }, timeSelectProps))));
    });

    _defineProperty(this, "renderQuickSelect", () => {
      const {
        overrides = {}
      } = this.props;
      const [QuickSelectContainer, quickSelectContainerProps] = getOverrides(overrides.QuickSelectContainer, StyledSelectorContainer);
      const [QuickSelectFormControl, quickSelectFormControlProps] = getOverrides(overrides.QuickSelectFormControl, FormControl);
      const [QuickSelect, // $FlowFixMe
      {
        overrides: quickSelectOverrides,
        ...restQuickSelectProps
      }] = getOverrides( //
      overrides.QuickSelect, Select);

      if (!this.props.quickSelect) {
        return null;
      }

      const NOW = new Date();
      NOW.setHours(12, 0, 0);
      return React.createElement(LocaleContext.Consumer, null, locale => React.createElement(QuickSelectContainer, quickSelectContainerProps, React.createElement(QuickSelectFormControl, _extends({
        label: locale.datepicker.quickSelectLabel
      }, quickSelectFormControlProps), React.createElement(QuickSelect, _extends({
        "aria-label": locale.datepicker.quickSelectAriaLabel,
        labelKey: "id",
        onChange: params => {
          if (!params.option) {
            this.setState({
              quickSelectId: null
            });
            this.props.onChange && this.props.onChange({
              date: []
            });
          } else {
            this.setState({
              quickSelectId: params.option.id
            });

            if (this.props.onChange) {
              if (this.props.range) {
                this.props.onChange({
                  date: [params.option.beginDate, params.option.endDate || NOW]
                });
              } else {
                this.props.onChange({
                  date: params.option.beginDate
                });
              }
            }
          }
        },
        options: this.props.quickSelectOptions || [{
          id: locale.datepicker.pastWeek,
          beginDate: subWeeks(NOW, 1)
        }, {
          id: locale.datepicker.pastMonth,
          beginDate: subMonths(NOW, 1)
        }, {
          id: locale.datepicker.pastThreeMonths,
          beginDate: subMonths(NOW, 3)
        }, {
          id: locale.datepicker.pastSixMonths,
          beginDate: subMonths(NOW, 6)
        }, {
          id: locale.datepicker.pastYear,
          beginDate: subYears(NOW, 1)
        }, {
          id: locale.datepicker.pastTwoYears,
          beginDate: subYears(NOW, 2)
        }],
        placeholder: locale.datepicker.quickSelectPlaceholder,
        value: this.state.quickSelectId && [{
          id: this.state.quickSelectId
        }],
        overrides: mergeOverrides({
          Dropdown: {
            style: {
              textAlign: 'start'
            }
          }
        }, quickSelectOverrides)
      }, restQuickSelectProps)))));
    });

    const dateInView = this.getDateInView();
    const {
      highlightedDate: _highlightedDate,
      value: _value
    } = this.props;
    this.state = {
      highlightedDate: _highlightedDate && isSameMonth(dateInView, _highlightedDate) ? _highlightedDate : this.getSingleDate(_value) || new Date(),
      focused: false,
      date: dateInView,
      quickSelectId: null,
      rootElement: null
    };
  }

  componentDidMount() {
    if (this.props.autoFocusCalendar) {
      this.focusCalendar();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.highlightedDate && !isSameDay(this.props.highlightedDate, prevProps.highlightedDate)) {
      this.setState({
        date: this.props.highlightedDate
      });
    }

    if (this.props.autoFocusCalendar && this.props.autoFocusCalendar !== prevProps.autoFocusCalendar) {
      this.focusCalendar();
    }

    if (prevProps.value !== this.props.value) {
      const nextDate = this.getDateInView();

      if (!this.isInView(nextDate)) {
        this.setState({
          date: nextDate
        });
      }
    }
  }

  isInView(date) {
    // we calculate the month delta between the date arg and the date in the state.
    const currentDate = this.state.date; // First we get the year delta

    const yearDelta = date.getFullYear() - currentDate.getFullYear(); // then we convert it to months. Then we simply add the date-without-year month delta back in.

    const monthDelta = yearDelta * 12 + date.getMonth() - currentDate.getMonth(); // we just check that the delta is between the range given by "this month" (i.e. 0) and "the last month" (i.e. monthsShown)

    return monthDelta >= 0 && monthDelta < (this.props.monthsShown || 1);
  }

  getSingleDate(value) {
    // need to check this.props.range but flow would complain
    // at the return value in the else clause
    if (Array.isArray(value)) {
      return value[0] || null;
    }

    return value;
  }

  setHighlightedDate(date) {
    const {
      value
    } = this.props;
    const selected = this.getSingleDate(value);
    let nextState;

    if (selected && isSameMonth(selected, date) && isSameYear(selected, date)) {
      nextState = {
        highlightedDate: selected
      };
    } else {
      nextState = {
        highlightedDate: date
      };
    }

    this.setState(nextState);
  }

  render() {
    const {
      overrides = {}
    } = this.props;
    const [Root, rootProps] = getOverrides(overrides.Root, StyledRoot);
    const [startDate, endDate] = [].concat(this.props.value);
    return React.createElement(LocaleContext.Consumer, null, locale => React.createElement(Root, _extends({
      "data-baseweb": "calendar",
      ref: root => {
        if (root && root instanceof HTMLElement && !this.state.rootElement) {
          this.setState({
            rootElement: root
          });
        }
      },
      "aria-label": locale.datepicker.ariaLabelCalendar,
      onKeyDown: this.props.trapTabbing ? this.handleTabbing : null
    }, rootProps), this.renderMonths({
      ariaRoleDescCalMonth: locale.datepicker.ariaRoleDescriptionCalendarMonth
    }), this.props.timeSelectStart && this.renderTimeSelect(startDate, time => this.handleTimeChange(time, 0), locale.datepicker.timeSelectStartLabel), this.props.timeSelectEnd && this.props.range && this.renderTimeSelect(endDate, time => this.handleTimeChange(time, 1), locale.datepicker.timeSelectEndLabel), this.renderQuickSelect()));
  }

}

_defineProperty(Calendar, "defaultProps", {
  autoFocusCalendar: false,
  excludeDates: null,
  filterDate: null,
  highlightedDate: null,
  includeDates: null,
  range: false,
  locale: null,
  maxDate: null,
  minDate: null,
  onDayClick: () => {},
  onDayFocus: () => {},
  onDayMouseOver: () => {},
  onDayMouseLeave: () => {},
  onMonthChange: () => {},
  onYearChange: () => {},
  onChange: () => {},
  orientation: ORIENTATION.vertical,
  overrides: {},
  peekNextMonth: false,
  value: null,
  trapTabbing: false
});