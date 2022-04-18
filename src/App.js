import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home, WhatBK, Shop, Blog, Contact } from './pages';
import { Login } from './components';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<WhatBK />} />
      <Route path="products" element={<Shop />} />
      <Route path="blogs" element={<Blog />} />
      <Route path="contact" element={<Contact />} />

      <Route path="login" element={<Login />} />
    </Routes>
  );
}
