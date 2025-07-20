import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],          // [{id, title, price, image, quantity}]
  totalQty: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id, title, price, image } = action.payload;
      const existing = state.items.find((i) => i.id === id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ id, title, price, image, quantity: 1 });
      }
      recalcTotals(state);
    },

    removeFromCart(state, action) {
      state.items = state.items.filter((i) => i.id !== action.payload);
      recalcTotals(state);
    },

    changeQty(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) {
        item.quantity = Math.max(1, quantity);
        recalcTotals(state);
      }
    },

    clearCart(state) {
      Object.assign(state, initialState);
    },
  },
});

function recalcTotals(state) {
  state.totalQty = state.items.reduce((sum, i) => sum + i.quantity, 0);
  state.totalPrice = state.items.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );
}

export const { addToCart, removeFromCart, changeQty, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;