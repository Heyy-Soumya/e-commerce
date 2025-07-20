import { configureStore } from '@reduxjs/toolkit';
import productsReducer   from '../features/products/productsSlice';
import cartReducer       from '../features/cart/cartSlice';
import orderReducer      from '../features/orders/orderSlice';
import uiReducer         from '../features/ui/uiSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart:     cartReducer,
    orders:   orderReducer,
    ui:       uiReducer,
  },
});