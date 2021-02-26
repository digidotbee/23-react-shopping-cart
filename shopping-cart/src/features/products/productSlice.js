import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'products',
//   deals with props V
  initialState: {
    products: [],
    cart:[],
    total: 0,
    totalPrice:0,
    cartVisibility: false,
  },

  reducers: {
    load: (state, action) => {
      state.products= action.payload
    },
    addCartItem: (state, action) => {
      state.products.push(action.payload)
    },
    removeFromCart: (state, action) => {  
      const removeProduct = action.payload;
      console.log(removeProduct);
      state.products = state.products.filter((item) => item.id != removeProduct.id);
    },
    // decrement: state => {
    // state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

export const { load, addCartItem, removeFromCart } = productSlice.actions;



export const fetchProducts = () => dispatch => {
    fetch("http://localhost:3001/products")
    .then((resp) => resp.json())
    .then((data) => {
      dispatch(load(data))
})
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectProduct = state => state.products.products
export const cartItems = state => state.products.cart
export const selectTotal = state => state.total.total
export const selectTotalPrice = state => state.totalP.totalPrice
export default productSlice.reducer;
