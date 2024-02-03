import React, { useState } from 'react';

const AddHabitForm = ({ onClose }) => {
  const [habitName, setHabitName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const habit = {
      habit_name: habitName,
      start_date: startDate,
      end_date: endDate,
    };

    const backendApi = process.env.REACT_APP_BACKEND;
    const response = await fetch(`${backendApi}/api/habits/add_habit`, {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(habit),
    });

    if (response.ok) {
      console.log('Habit added successfully');
    } else {
      console.error('Error adding habit');
    }

    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        placeholder="Habit Name"
        required
        className="p-2 border rounded"
      />
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        placeholder="Start Date"
        required
        className="p-2 border rounded"
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        placeholder="End Date"
        required
        className="p-2 border rounded"
      />
      <button type="submit" className="p-2 bg-slate-200 text-black rounded">
        Submit
      </button>
      <button type="button" onClick={onClose} className="p-2 bg-slate-200 text-black rounded">
        Close
      </button>
    </form>
  );
};

export default AddHabitForm;
