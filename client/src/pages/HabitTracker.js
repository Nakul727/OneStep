import React from 'react';

import { Header, Footer } from '../components/index.js';

const HabitTracker = () => {


    return (
    <div>
      <Header />


      <div className='flex justify-between items-center my-12 px-12 py-4 bg-slate-200'>      
        <p className='text-xl'>HabitTracker</p>
        <button>Add Habbit</button>
      </div>

      <div>

      </div>


    
      <Footer />
    </div>      
    )
}

export default HabitTracker;