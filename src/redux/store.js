import { configureStore } from '@reduxjs/toolkit';

// client
import loginReducer from '../components/Login/loginSlice';
import usersReducer from '../components/Profile/profileSlice';
import productsReducer from '../components/Product/productSlice';
import productReviewsReducer from '../components/Product/productReviewSlice';

// admin
import adminNavbarReducer from '../admin_components/Navbar/navbarSlice';
import adminLoginReducer from '../admin_components/Login/loginSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    users: usersReducer,
    products: productsReducer,
    productReviews: productReviewsReducer,

    adminNavbar: adminNavbarReducer,
    adminLogin: adminLoginReducer,
  },
});
