import React from 'react';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <div>
      <header className="flex items-center justify-between bg-slate-200 p-4">
        <a href="/">
          <img src={logo} alt="Logo" className="ml-16 w-32" />
        </a>

        <div className="flex">
          <a href="/journalmaker" className="mx-8">
            Journal
          </a>
          <a href="/habit_tracker" className="mx-8">
            Habit Tracker
          </a>
          <a href="/checklist" className="ml-8 mr-20">
            Checklist
          </a>
        </div>

        <a href="/dashboard" className="mr-16">
          Profile
        </a>
      </header>
    </div>
  );
};

export default Header;
