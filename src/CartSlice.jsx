// 📁 CartSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const exists = state.items.find(item => item.id === action.payload.id);
      if (!exists) {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    increment: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) item.quantity++;
    },
    decrement: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity--;
    },
  },
});

export const { addItem, removeItem, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;