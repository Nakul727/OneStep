import React from 'react';

const Header = () => {
  return (
    <div>
      <header className="flex items-center justify-between bg-slate-200 p-4">
        <p className="ml-16">Logo</p>

        <div className="flex">
          <a href="/journalmaker" className="mx-8">
            Journal
          </a>
          <a href="/habit_tracker" className="mx-8">
            Habit Tracker
          </a>
          <a href="/checklist" className="mx-8">
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
