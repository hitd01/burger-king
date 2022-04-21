import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home, WhatBK, Shop, Blog, Contact, Error, Profile } from './pages';
import { Login, ForgotPassword } from './components';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="/about" element={<WhatBK />} />
      <Route path="/products" element={<Shop />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/profile/1" element={<Profile />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
