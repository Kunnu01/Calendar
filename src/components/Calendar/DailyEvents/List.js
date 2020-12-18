import React, { useEffect, useState } from 'react';
import storage from '../../../storage';

const EventList = ({ date, doRefresh, setDoRefresh }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const tasksByDate = storage.get(date) || [];
    setTasks(tasksByDate);
    setDoRefresh(false);
  }, [date, doRefresh, setDoRefresh]);

  return (
    <ul className="my-4 h-3/6">
      {
        tasks.map(({ event, time }) => (
          <li key={`${time}-${event}`} className="text-gray-400">
            <div className="m-3">
              <p>{event}</p>
              <span>{time}</span>
            </div>
          </li>
        ))
      }
    </ul>
  )
}

export { EventList };
