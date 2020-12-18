import React, { Fragment } from 'react';
import { days } from '../../constants/date';

const Weekdays = () => (
  <Fragment>
    {
      days.map(day => <span key={day}>{day}</span>)
    }
  </Fragment>
);

export { Weekdays };
