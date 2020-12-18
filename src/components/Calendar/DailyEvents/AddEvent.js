import React, { useState } from 'react';
import storage from '../../../storage';

const AddEvent = ({ setDoRefresh, date }) => {
  const [isEditMode, setEditMode] = useState(false);
  const [event, setEvent] = useState('');

  const handleChange = (e) => {
    const value = e.currentTarget.value;
    setEvent(value);
  }

  const handleBlur = () => {
    if (!event.trim().length) return;
    storage.set(event, date);
    setDoRefresh(true)
    toggleEditMode();
  }

  const toggleEditMode = () => setEditMode(!isEditMode);
  
  return (
    <div className="h-1/6 text-right">
      {
        isEditMode && (
          <input
            type="text"
            placeholder="Task/Event..."
            className="border-b-2 border-white bg-transparent m-2 w-4/5"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        )
      }
      <button
        className="focus:outline-none text-2xl"
        onClick={toggleEditMode}
      >
        +
      </button>
    </div>
  );
};

export { AddEvent };
