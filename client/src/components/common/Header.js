import React from 'react';

const Header = () => {
  return (
    <div>
      <header className="flex items-center justify-between bg-slate-200 p-4">
        <p className="ml-16">Logo</p>

        <div className='flex'>
          <p className='mx-8'>Journal</p>
          <p className='mx-8'>Habit Tracker</p>
          <p className='mx-8'>Todo</p>
        </div>

        <p className='mr-16'>Profile</p>
      </header>
    </div>
  );
};

export default Header;
