import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import productReducer from '../features/products/productSlice';

export default configureStore({
  reducer: {
    products: productReducer,
  },
});
