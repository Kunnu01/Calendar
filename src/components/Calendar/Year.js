import moment from 'moment';
import React, { useState } from 'react';
import { getYearOptions } from '../../utils/date';

const SelectYear = ({ date, setDate }) => {
  const [isEditMode, setEditMode] = useState(false);

  const toggleEditMode = () => setEditMode(!isEditMode);

  const handleChange = (e) => {
    const value = e.target.value;
    setDate(moment(date).set('year', value))
    toggleEditMode()
  }

  const year = date.format('YYYY')
  
  return (
    <div className="h-1/5 text-right">
      {
        isEditMode && (
          <select
            autoFocus
            size={10}
            className="w-2/12 max-h-2/6 focus:outline-none"
            onBlur={toggleEditMode}
            value={year}
            onChange={handleChange}
          >
            {
              getYearOptions().map(year => (
                <option key={year.value} value={year.value}>{year.label}</option>
              ))
            }
          </select>
        )
      }
      {
        !isEditMode && (
          <button
            className="focus:outline-none text-4xl"
            onClick={toggleEditMode}
          >
            {year}
          </button>
        )
      }
    </div>
  )
};

export { SelectYear };
