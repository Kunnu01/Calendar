import moment from 'moment';
import React, { Fragment, useState } from 'react';
import {
  DailyEvents,
  SelectYear,
  SelectMonth,
  Weekdays,
  Dates,
} from '../../components/Calendar'


const Calendar = () => {
  const [date, setDate] = useState(moment());
  return (
    <Fragment>
      <DailyEvents date={date} />
      <div className="w-2/3 flex flex-col bg-white p-6">
        <SelectYear setDate={setDate} date={date}/>
        <div className="h-4/5 text-center">
          <SelectMonth date={date} setDate={setDate} />
          <div className="grid grid-row grid-cols-7 gap-x-8 m-8">
            <Weekdays />
            <Dates date={date} setDate={setDate}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export { Calendar };
