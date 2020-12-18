import moment from 'moment';
import React, { useEffect, useState, Fragment } from 'react';
import {
  getPreviousMonthDates,
  getCurrentMonthDates,
  getNextMonthDates,
} from '../../utils/date';

const Dates = ({ date, setDate }) => {
  const [dates, setDates] = useState([])

  useEffect(() => {
    const previousMonthDates = getPreviousMonthDates(date);
    const nextMonthDates = getNextMonthDates(date);
    const currentMonthDates = getCurrentMonthDates(date);
    setDates([
      ...previousMonthDates,
      ...currentMonthDates,
      ...nextMonthDates,
    ]);
  }, [date])

  const handleClick = (month, selectedDate) => () => {
    const year = date.year();
    setDate(moment().set({
      month,
      date: selectedDate,
      year,
    }))
  }

  const now = moment();
  const isToday = (selectedDate, month) => now.date() === selectedDate
    && now.month() === month
    && now.year() === date.year();

  const selectedDate = {
    date: date.date(),
    month: date.month(),
  };

  return (
    <Fragment>
      {
        dates.map(({ isCurrentMonth, date, month }) => {
          const isDateToday = isToday(date, month);
          const isSelectedDate = date === selectedDate.date
            && month === selectedDate.month
          const classes = `my-2 cursor-pointer 
            ${!isCurrentMonth && 'text-gray-400'} 
            ${isSelectedDate && 'bg-gray-200 rounded-full'}
            ${isDateToday && 'bg-light-green rounded-full'}
          `
          return <span
            key={`${month}-${date}`}
            className={classes}
            onClick={handleClick(month, date)}
          >
            {date}
          </span>
        })
      }
    </Fragment>
  );
};

export { Dates };
