import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Dashboard from './pages/Dashboard.js';

import HabitTracker from './pages/HabitTracker.js';
import Checklist from './pages/Checklist.js';

export default function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path='/dashboard' element={<Dashboard />} />

      <Route path='/habit_tracker' element={<HabitTracker />} />
      <Route path="/checklist" element={<Checklist />} />
    </Routes>
  );
}
