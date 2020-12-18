import moment from 'moment'
import React, { Fragment } from 'react';

const SelectMonth = ({ date, setDate }) => {
  const month = date.format('MMMM').toUpperCase()

  const handleChange = (operation) => () => {
    const operations = {
      inc: '+1',
      dec: '-1',
    }
    const currentMonth = date.month();
    const value = currentMonth + Number(operations[operation]);
    setDate(moment(date).set('month', value));
  }
  
  const buttonClass = 'focus:outline-none mx-10'
  
  return (
    <Fragment>
      <button
        onClick={handleChange('dec')}
        className={buttonClass}
      >
        &#8249;
      </button>
      <span className="text-xl">{month}</span>
      <button
        onClick={handleChange('inc')}
        className={buttonClass}
      >
        &#8250;
      </button>
    </Fragment>
  )
};

export { SelectMonth };
