import React, { useState } from 'react';
import Modal from 'react-modal';
import useUser from '../hooks/useUser';

import { Header, Footer, LoginButton } from '../components/index.js';
import { AddHabitForm, HabitInfo, HabitVisualization } from '../components/index.js';

Modal.setAppElement('#root');

const HabitTracker = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useUser();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Header />

      <div>
        {user ? (
          <div>
            <div className="flex justify-between items-center px-12 py-4 bg-slate-100">
              <p className="text-xl">Welcome to HabitTracker, {user.name}</p>
              <div>
                <button className=" bg-white p-4 mr-4 border-2" onClick={handleOpenModal}>
                  Add Habit
                </button>
              </div>
            </div>

            <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
              <AddHabitForm onClose={handleCloseModal} />
            </Modal>
            
            <div className="flex">
              <div className="w-1/2">
                <HabitInfo />
              </div>
              <div className="w-1/2">
                <HabitVisualization />
              </div>
            </div>
            
          </div>
        ) : (
          <LoginButton />
        )}
      </div>

      <Footer />
    </div>
  );
};

export default HabitTracker;
