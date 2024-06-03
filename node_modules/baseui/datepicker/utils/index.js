"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDate = formatDate;
exports.getStartOfWeek = getStartOfWeek;
exports.getEndOfWeek = getEndOfWeek;
exports.getStartOfMonth = getStartOfMonth;
exports.getEndOfMonth = getEndOfMonth;
exports.isSameYear = isSameYear;
exports.isSameMonth = isSameMonth;
exports.isSameDay = isSameDay;
exports.isDayInRange = isDayInRange;
exports.isStartOfMonth = isStartOfMonth;
exports.isEndOfMonth = isEndOfMonth;
exports.getWeekdayMinInLocale = getWeekdayMinInLocale;
exports.getWeekdayInLocale = getWeekdayInLocale;
exports.getMonthInLocale = getMonthInLocale;
exports.isDayDisabled = isDayDisabled;
exports.isOutOfBounds = isOutOfBounds;
exports.monthDisabledBefore = monthDisabledBefore;
exports.monthDisabledAfter = monthDisabledAfter;
exports.getEffectiveMinDate = getEffectiveMinDate;
exports.getEffectiveMaxDate = getEffectiveMaxDate;
exports.applyTimeToDate = applyTimeToDate;
exports.applyDateToTime = applyDateToTime;
Object.defineProperty(exports, "addDays", {
  enumerable: true,
  get: function get() {
    return _addDays.default;
  }
});
Object.defineProperty(exports, "addWeeks", {
  enumerable: true,
  get: function get() {
    return _addWeeks.default;
  }
});
Object.defineProperty(exports, "addMonths", {
  enumerable: true,
  get: function get() {
    return _addMonths.default;
  }
});
Object.defineProperty(exports, "addYears", {
  enumerable: true,
  get: function get() {
    return _addYears.default;
  }
});
Object.defineProperty(exports, "getDay", {
  enumerable: true,
  get: function get() {
    return _getDay.default;
  }
});
Object.defineProperty(exports, "getDate", {
  enumerable: true,
  get: function get() {
    return _getDate.default;
  }
});
Object.defineProperty(exports, "getMinutes", {
  enumerable: true,
  get: function get() {
    return _getMinutes.default;
  }
});
Object.defineProperty(exports, "getHours", {
  enumerable: true,
  get: function get() {
    return _getHours.default;
  }
});
Object.defineProperty(exports, "getMonth", {
  enumerable: true,
  get: function get() {
    return _getMonth.default;
  }
});
Object.defineProperty(exports, "getYear", {
  enumerable: true,
  get: function get() {
    return _getYear.default;
  }
});
Object.defineProperty(exports, "isAfter", {
  enumerable: true,
  get: function get() {
    return _isAfter.default;
  }
});
Object.defineProperty(exports, "isBefore", {
  enumerable: true,
  get: function get() {
    return _isBefore.default;
  }
});
Object.defineProperty(exports, "setSeconds", {
  enumerable: true,
  get: function get() {
    return _setSeconds.default;
  }
});
Object.defineProperty(exports, "setMinutes", {
  enumerable: true,
  get: function get() {
    return _setMinutes.default;
  }
});
Object.defineProperty(exports, "setHours", {
  enumerable: true,
  get: function get() {
    return _setHours.default;
  }
});
Object.defineProperty(exports, "setMonth", {
  enumerable: true,
  get: function get() {
    return _setMonth.default;
  }
});
Object.defineProperty(exports, "setYear", {
  enumerable: true,
  get: function get() {
    return _setYear.default;
  }
});
Object.defineProperty(exports, "subDays", {
  enumerable: true,
  get: function get() {
    return _subDays.default;
  }
});
Object.defineProperty(exports, "subMonths", {
  enumerable: true,
  get: function get() {
    return _subMonths.default;
  }
});
Object.defineProperty(exports, "subWeeks", {
  enumerable: true,
  get: function get() {
    return _subWeeks.default;
  }
});
Object.defineProperty(exports, "subYears", {
  enumerable: true,
  get: function get() {
    return _subYears.default;
  }
});

var _addDays = _interopRequireDefault(require("date-fns/addDays"));

var _addWeeks = _interopRequireDefault(require("date-fns/addWeeks"));

var _addMonths = _interopRequireDefault(require("date-fns/addMonths"));

var _addYears = _interopRequireDefault(require("date-fns/addYears"));

var _differenceInCalendarDays = _interopRequireDefault(require("date-fns/differenceInCalendarDays"));

var _differenceInCalendarMonths = _interopRequireDefault(require("date-fns/differenceInCalendarMonths"));

var _isSameDay = _interopRequireDefault(require("date-fns/isSameDay"));

var _isSameMonth = _interopRequireDefault(require("date-fns/isSameMonth"));

var _isSameYear = _interopRequireDefault(require("date-fns/isSameYear"));

var _endOfMonth = _interopRequireDefault(require("date-fns/endOfMonth"));

var _format = _interopRequireDefault(require("date-fns/format"));

var _getDay = _interopRequireDefault(require("date-fns/getDay"));

var _getDate = _interopRequireDefault(require("date-fns/getDate"));

var _getMinutes = _interopRequireDefault(require("date-fns/getMinutes"));

var _getHours = _interopRequireDefault(require("date-fns/getHours"));

var _getMonth = _interopRequireDefault(require("date-fns/getMonth"));

var _getYear = _interopRequireDefault(require("date-fns/getYear"));

var _isAfter = _interopRequireDefault(require("date-fns/isAfter"));

var _isBefore = _interopRequireDefault(require("date-fns/isBefore"));

var _isWithinInterval = _interopRequireDefault(require("date-fns/isWithinInterval"));

var _max = _interopRequireDefault(require("date-fns/max"));

var _min = _interopRequireDefault(require("date-fns/min"));

var _setSeconds = _interopRequireDefault(require("date-fns/setSeconds"));

var _setMinutes = _interopRequireDefault(require("date-fns/setMinutes"));

var _setHours = _interopRequireDefault(require("date-fns/setHours"));

var _setMonth = _interopRequireDefault(require("date-fns/setMonth"));

var _setYear = _interopRequireDefault(require("date-fns/setYear"));

var _startOfMonth = _interopRequireDefault(require("date-fns/startOfMonth"));

var _startOfWeek = _interopRequireDefault(require("date-fns/startOfWeek"));

var _endOfWeek = _interopRequireDefault(require("date-fns/endOfWeek"));

var _set = _interopRequireDefault(require("date-fns/set"));

var _subDays = _interopRequireDefault(require("date-fns/subDays"));

var _subMonths = _interopRequireDefault(require("date-fns/subMonths"));

var _subWeeks = _interopRequireDefault(require("date-fns/subWeeks"));

var _subYears = _interopRequireDefault(require("date-fns/subYears"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ** Date Formatting **
// eslint-disable-next-line flowtype/no-weak-types
function formatDate(date, formatStr, locale) {
  return (0, _format.default)(date, formatStr, _objectSpread({}, locale ? {
    locale: locale
  } : {}, {
    awareOfUnicodeTokens: true
  }));
} // ** Date Setters **


// eslint-disable-next-line flowtype/no-weak-types
function getStartOfWeek(date, locale) {
  return (0, _startOfWeek.default)(date, {
    locale: locale
  });
}

function getEndOfWeek(date) {
  return (0, _endOfWeek.default)(date);
}

function getStartOfMonth(date) {
  return (0, _startOfMonth.default)(date);
}

function getEndOfMonth(date) {
  return (0, _endOfMonth.default)(date);
} // ** Date Math **
// *** Addition ***


function isSameYear(date1, date2) {
  if (date1 && date2) {
    return (0, _isSameYear.default)(date1, date2);
  } else {
    return !date1 && !date2;
  }
}

function isSameMonth(date1, date2) {
  if (date1 && date2) {
    return (0, _isSameMonth.default)(date1, date2);
  } else {
    return !date1 && !date2;
  }
}

function isSameDay(date1, date2) {
  if (date1 && date2) {
    return (0, _isSameDay.default)(date1, date2);
  } else {
    return !date1 && !date2;
  }
}

function isDayInRange(day, startDate, endDate) {
  return (0, _isWithinInterval.default)(day, {
    start: startDate,
    end: endDate
  });
}

function isStartOfMonth(date) {
  return isSameDay(date, getStartOfMonth(date));
}

function isEndOfMonth(date) {
  return isSameDay(date, getEndOfMonth(date));
} // ** Date Localization **
// eslint-disable-next-line flowtype/no-weak-types


function getWeekdayMinInLocale(date, locale) {
  return formatDate(date, 'EEEE', locale).charAt(0);
} // eslint-disable-next-line flowtype/no-weak-types


function getWeekdayInLocale(date, locale) {
  return formatDate(date, 'EEEE', locale);
} // eslint-disable-next-line flowtype/no-weak-types


function getMonthInLocale(month, locale) {
  return formatDate((0, _setMonth.default)(new Date(), month), 'LLLL', locale);
} // ** Utils for some components **


function isDayDisabled(day) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      excludeDates = _ref.excludeDates,
      includeDates = _ref.includeDates,
      filterDate = _ref.filterDate;

  return isOutOfBounds(day, {
    minDate: minDate,
    maxDate: maxDate
  }) || excludeDates && excludeDates.some(function (excludeDate) {
    return isSameDay(day, excludeDate);
  }) || includeDates && !includeDates.some(function (includeDate) {
    return isSameDay(day, includeDate);
  }) || filterDate && !filterDate(day) || false;
}

function isOutOfBounds(day) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      minDate = _ref2.minDate,
      maxDate = _ref2.maxDate;

  return minDate && (0, _differenceInCalendarDays.default)(day, minDate) < 0 || maxDate && (0, _differenceInCalendarDays.default)(day, maxDate) > 0;
}

function monthDisabledBefore(day) {
  var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      minDate = _ref3.minDate,
      includeDates = _ref3.includeDates;

  var previousMonth = (0, _subMonths.default)(day, 1);
  return minDate && (0, _differenceInCalendarMonths.default)(minDate, previousMonth) > 0 || includeDates && includeDates.every(function (includeDate) {
    return (0, _differenceInCalendarMonths.default)(includeDate, previousMonth) > 0;
  }) || false;
}

function monthDisabledAfter(day) {
  var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      maxDate = _ref4.maxDate,
      includeDates = _ref4.includeDates;

  var nextMonth = (0, _addMonths.default)(day, 1);
  return maxDate && (0, _differenceInCalendarMonths.default)(nextMonth, maxDate) > 0 || includeDates && includeDates.every(function (includeDate) {
    return (0, _differenceInCalendarMonths.default)(nextMonth, includeDate) > 0;
  }) || false;
}

function getEffectiveMinDate(_ref5) {
  var minDate = _ref5.minDate,
      includeDates = _ref5.includeDates;

  if (includeDates && minDate) {
    var minDates = includeDates.filter(function (includeDate) {
      return (0, _differenceInCalendarDays.default)(includeDate, minDate) >= 0;
    }); // $FlowFixMe

    return (0, _min.default)(minDates);
  } else if (includeDates && includeDates.length) {
    // $FlowFixMe
    return (0, _min.default)(includeDates);
  } else {
    return minDate;
  }
}

function getEffectiveMaxDate(_ref6) {
  var maxDate = _ref6.maxDate,
      includeDates = _ref6.includeDates;

  if (includeDates && maxDate) {
    var maxDates = includeDates.filter(function (includeDate) {
      return (0, _differenceInCalendarDays.default)(includeDate, maxDate) <= 0;
    }); // $FlowFixMe

    return (0, _max.default)(maxDates);
  } else if (includeDates) {
    // $FlowFixMe
    return (0, _max.default)(includeDates);
  } else {
    return maxDate;
  }
}

function applyTimeToDate(date, time) {
  if (!date) return time;
  return (0, _set.default)(date, {
    hours: (0, _getHours.default)(time),
    minutes: (0, _getMinutes.default)(time),
    seconds: 0
  });
}

function applyDateToTime(time, date) {
  if (!time) return date;
  return (0, _set.default)(time, {
    year: (0, _getYear.default)(date),
    month: (0, _getMonth.default)(date),
    date: (0, _getDate.default)(date)
  });
}