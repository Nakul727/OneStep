import React, { useState } from 'react';
import Modal from 'react-modal';

import { Header, Footer } from '../components/index.js';
import { AddHabitForm, HabitInfo, HabitVisualization } from '../components/index.js';

Modal.setAppElement('#root');

const HabitTracker = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Header />

      <div className="flex justify-between items-center px-12 py-4 bg-slate-100">
        <p className="text-xl">HabitTracker</p>
        <div>
          <button className=" bg-white p-4 mr-4 border-2" onClick={handleOpenModal}>
            Add Habit
          </button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
        <AddHabitForm onClose={handleCloseModal} />
      </Modal>

      <div className="columns-2">
        <div>
          <HabitInfo />
        </div>
        <div>
          <HabitVisualization />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HabitTracker;

// users can create a habit with a habit_name, durataion
// each day the habit completiton is reset, if its between the duration of the habit existance
// table has: user_id, habit_name, duration, completed
// user_id comes from the authentication state
// habit name and duration are manually added by user in the popup
// completed is updated each day

// Display:
// for each different day:
// all the habits for the user are retrieved from the database using fetch
// valid habits for that day are the ones which lie in duration
// each habit is displayed with a checbox as complete status
// on each checkbox chnage the completeing is changed to true
// on save changes, update is request is made to change the relevant stuff
