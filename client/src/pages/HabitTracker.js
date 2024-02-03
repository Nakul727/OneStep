import React from 'react';

import { Header, Footer } from '../components/index.js';
import { HabitInfo, HabitVisualization } from '../components/index.js';

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

const HabitTracker = () => {
  return (
    <div>
      <Header />

      <div className="flex justify-between items-center px-12 py-4 bg-slate-100">
        <p className="text-xl">HabitTracker</p>
        <div>
          <button className=" bg-slate-100 p-4 mr-4 ">Modify Habit</button>
          <button className=" bg-slate-100 p-4 ">Add Habbit</button>
        </div>
      </div>

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
