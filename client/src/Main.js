import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Checklist from './pages/Checklist.js';
import Home from './pages/Home.js';


export default function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checklist" element={<Checklist />} />
    </Routes>
  );
}
