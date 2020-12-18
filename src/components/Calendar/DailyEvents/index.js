import moment from 'moment';
import React, { useState } from 'react';
import { AddEvent } from './AddEvent';
import { EventList } from './List';

const DailyEvents = ({ date }) => {
  const [doRefresh, setDoRefresh] = useState(false);
  
  const currentDate = moment(date);
  const formattedDate = currentDate.format('D');
  const day = currentDate.format('dddd').toUpperCase();
  return (
    <div className="w-1/3 p-2 h-full flex flex-col text-white m-auto bg-greyish-blue">
        <AddEvent date={date} setDoRefresh={setDoRefresh} />
        <div className="h-2/6 text-center">
          <span className="text-8xl">{formattedDate}</span>
          <br />
          <span className="text-3xl font-light">{day}</span>
        </div>
        <div className="h-3/6 px-2 overflow-auto">
          <EventList
            doRefresh={doRefresh}
            setDoRefresh={setDoRefresh}
            date={date}
          />
        </div>
    </div>
  );
};

export { DailyEvents }
