import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import {
  Home,
  WhatBK,
  Shop,
  Blog,
  Contact,
  Error,
  Profile,
  Product,
  Cart,
} from './pages';
import { Login, ForgotPassword } from './components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="about" element={<WhatBK />} />
            <Route path="products" element={<Shop />} />
            <Route path="products/id" element={<Product />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<Cart />} />
          </Route>
          <Route path="forgot-password" element={<ForgotPassword />} />
          {/* <Route path="login" element={<Login />} /> */}
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
