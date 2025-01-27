import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import authReducer from "./auth/authSlice";
import productsReducer from "./products/productSlice";
import CartReducer from "./cart/cartSlice"
const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
  products: productsReducer,
  cart:CartReducer,
});
export default rootReducer;
