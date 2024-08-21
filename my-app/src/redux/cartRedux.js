import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const existingProduct = state.products.find(
        (product) =>
          product.id === action.payload.id &&
          product.color === action.payload.color &&
          product.size === action.payload.size
      );

      if (existingProduct) {
        // If the product already exists, increase its quantity
        existingProduct.quantity += action.payload.quantity;
      } else {
        // If the product doesn't exist, add it to the cart
        state.products.push(action.payload);
        state.quantity += 1;
      }

      // Update the total price
      state.total += action.payload.price * action.payload.quantity;
    },
    updateProductQuantity: (state, action) => {
      const product = state.products.find(
        (p) =>
          p.id === action.payload.id &&
          p.color === action.payload.color &&
          p.size === action.payload.size
      );
      console.log(product);
      if (product) {
        const quantityDifference = action.payload.quantity - product.quantity;
        product.quantity = action.payload.quantity;
        state.total += product.price * quantityDifference;
      }
    },
    resetCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, updateProductQuantity, resetCart } =
  cartSlice.actions;
export default cartSlice.reducer;
