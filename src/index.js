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
import { ForgotPassword } from './components';
import {
  AppAdmin,
  LoginAdmin,
  UsersAdmin,
  ProductsAdmin,
  ProductReviewsAdmin,
  BlogsAdmin,
  BlogReviewsAdmin,
  AnalyticsAdmin,
  CartAdmin,
} from './admin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* public routes */}
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="about" element={<WhatBK />} />
            <Route path="products/*" element={<Shop />} />
            <Route path="products/:id" element={<Product />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<Cart />} />
          </Route>
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="profile" element={<Profile />} />

          {/* protected routes */}
          <Route path="app/admin/login" element={<LoginAdmin />} />
          <Route path="app/admin" element={<AppAdmin />}>
            <Route index element={<AnalyticsAdmin />} />
            <Route path="users" element={<UsersAdmin />} />
            <Route path="products" element={<ProductsAdmin />} />
            <Route path="product-reviews" element={<ProductReviewsAdmin />} />
            <Route path="blogs" element={<BlogsAdmin />} />
            <Route path="blog-reviews" element={<BlogReviewsAdmin />} />
            <Route path="cart" element={<CartAdmin />} />
          </Route>

          {/* catch all */}
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
