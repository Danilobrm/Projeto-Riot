import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/index.js';

export default function PagesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
