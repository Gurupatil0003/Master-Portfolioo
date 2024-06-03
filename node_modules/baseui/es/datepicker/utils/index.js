/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-disable import/extensions */
import addDays from 'date-fns/addDays';
import addWeeks from 'date-fns/addWeeks';
import addMonths from 'date-fns/addMonths';
import addYears from 'date-fns/addYears';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import differenceInCalendarMonths from 'date-fns/differenceInCalendarMonths';
import dfIsSameDay from 'date-fns/isSameDay';
import dfIsSameMonth from 'date-fns/isSameMonth';
import dfIsSameYear from 'date-fns/isSameYear';
import endOfMonth from 'date-fns/endOfMonth';
import format from 'date-fns/format';
import getDay from 'date-fns/getDay';
import getDate from 'date-fns/getDate';
import getMinutes from 'date-fns/getMinutes';
import getHours from 'date-fns/getHours';
import getMonth from 'date-fns/getMonth';
import getYear from 'date-fns/getYear';
import isAfter from 'date-fns/isAfter';
import isBefore from 'date-fns/isBefore';
import isWithinInterval from 'date-fns/isWithinInterval';
import max from 'date-fns/max';
import min from 'date-fns/min';
import setSeconds from 'date-fns/setSeconds';
import setMinutes from 'date-fns/setMinutes';
import setHours from 'date-fns/setHours';
import setMonth from 'date-fns/setMonth';
import setYear from 'date-fns/setYear';
import startOfMonth from 'date-fns/startOfMonth';
import startOfWeek from 'date-fns/startOfWeek';
import endOfWeek from 'date-fns/endOfWeek';
import set from 'date-fns/set';
import subDays from 'date-fns/subDays';
import subMonths from 'date-fns/subMonths';
import subWeeks from 'date-fns/subWeeks';
import subYears from 'date-fns/subYears';
/* eslint-enable import/extensions */

// ** Date Formatting **
// eslint-disable-next-line flowtype/no-weak-types
export function formatDate(date, formatStr, locale) {
  return format(date, formatStr, { ...(locale ? {
      locale
    } : {}),
    awareOfUnicodeTokens: true
  });
} // ** Date Setters **

export { setSeconds, setMinutes, setHours, setMonth, setYear }; // ** Date Getters **
// getDay Returns day of week, getDate returns day of month

export { getMinutes, getHours, getMonth, getYear, getDay, getDate }; // eslint-disable-next-line flowtype/no-weak-types

export function getStartOfWeek(date, locale) {
  return startOfWeek(date, {
    locale
  });
}
export function getEndOfWeek(date) {
  return endOfWeek(date);
}
export function getStartOfMonth(date) {
  return startOfMonth(date);
}
export function getEndOfMonth(date) {
  return endOfMonth(date);
} // ** Date Math **
// *** Addition ***

export { addDays, addWeeks, addMonths, addYears }; // *** Subtraction ***

export { subDays, subWeeks, subMonths, subYears }; // ** Date Comparison **

export { isBefore, isAfter };
export function isSameYear(date1, date2) {
  if (date1 && date2) {
    return dfIsSameYear(date1, date2);
  } else {
    return !date1 && !date2;
  }
}
export function isSameMonth(date1, date2) {
  if (date1 && date2) {
    return dfIsSameMonth(date1, date2);
  } else {
    return !date1 && !date2;
  }
}
export function isSameDay(date1, date2) {
  if (date1 && date2) {
    return dfIsSameDay(date1, date2);
  } else {
    return !date1 && !date2;
  }
}
export function isDayInRange(day, startDate, endDate) {
  return isWithinInterval(day, {
    start: startDate,
    end: endDate
  });
}
export function isStartOfMonth(date) {
  return isSameDay(date, getStartOfMonth(date));
}
export function isEndOfMonth(date) {
  return isSameDay(date, getEndOfMonth(date));
} // ** Date Localization **
// eslint-disable-next-line flowtype/no-weak-types

export function getWeekdayMinInLocale(date, locale) {
  return formatDate(date, 'EEEE', locale).charAt(0);
} // eslint-disable-next-line flowtype/no-weak-types

export function getWeekdayInLocale(date, locale) {
  return formatDate(date, 'EEEE', locale);
} // eslint-disable-next-line flowtype/no-weak-types

export function getMonthInLocale(month, locale) {
  return formatDate(setMonth(new Date(), month), 'LLLL', locale);
} // ** Utils for some components **

export function isDayDisabled(day, {
  minDate,
  maxDate,
  excludeDates,
  includeDates,
  filterDate
} = {}) {
  return isOutOfBounds(day, {
    minDate,
    maxDate
  }) || excludeDates && excludeDates.some(excludeDate => isSameDay(day, excludeDate)) || includeDates && !includeDates.some(includeDate => isSameDay(day, includeDate)) || filterDate && !filterDate(day) || false;
}
export function isOutOfBounds(day, {
  minDate,
  maxDate
} = {}) {
  return minDate && differenceInCalendarDays(day, minDate) < 0 || maxDate && differenceInCalendarDays(day, maxDate) > 0;
}
export function monthDisabledBefore(day, {
  minDate,
  includeDates
} = {}) {
  const previousMonth = subMonths(day, 1);
  return minDate && differenceInCalendarMonths(minDate, previousMonth) > 0 || includeDates && includeDates.every(includeDate => differenceInCalendarMonths(includeDate, previousMonth) > 0) || false;
}
export function monthDisabledAfter(day, {
  maxDate,
  includeDates
} = {}) {
  const nextMonth = addMonths(day, 1);
  return maxDate && differenceInCalendarMonths(nextMonth, maxDate) > 0 || includeDates && includeDates.every(includeDate => differenceInCalendarMonths(nextMonth, includeDate) > 0) || false;
}
export function getEffectiveMinDate({
  minDate,
  includeDates
}) {
  if (includeDates && minDate) {
    let minDates = includeDates.filter(includeDate => differenceInCalendarDays(includeDate, minDate) >= 0); // $FlowFixMe

    return min(minDates);
  } else if (includeDates && includeDates.length) {
    // $FlowFixMe
    return min(includeDates);
  } else {
    return minDate;
  }
}
export function getEffectiveMaxDate({
  maxDate,
  includeDates
}) {
  if (includeDates && maxDate) {
    let maxDates = includeDates.filter(includeDate => differenceInCalendarDays(includeDate, maxDate) <= 0); // $FlowFixMe

    return max(maxDates);
  } else if (includeDates) {
    // $FlowFixMe
    return max(includeDates);
  } else {
    return maxDate;
  }
}
export function applyTimeToDate(date, time) {
  if (!date) return time;
  return set(date, {
    hours: getHours(time),
    minutes: getMinutes(time),
    seconds: 0
  });
}
export function applyDateToTime(time, date) {
  if (!time) return date;
  return set(time, {
    year: getYear(date),
    month: getMonth(date),
    date: getDate(date)
  });
}