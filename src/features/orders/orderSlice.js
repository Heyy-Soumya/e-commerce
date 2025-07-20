import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createPaymentIntentAPI } from '../payment/stripeAPI';

// Thunk to create Stripe PaymentIntent (returns clientSecret)
export const createPaymentIntent = createAsyncThunk(
  'order/createPaymentIntent',
  async ({ amount, currency = 'usd' }, { rejectWithValue }) => {
    try {
      const { clientSecret } = await createPaymentIntentAPI(amount, currency);
      return clientSecret;
    } catch (err) {
      return rejectWithValue(err.message || 'Payment setup failed');
    }
  }
);

const initialState = {
  shippingAddress: {
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  },
  paymentIntentId: null,
  clientSecret: null,
  orderId: null,
  status: 'idle', // idle | loading | succeeded | failed
  error: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setShippingAddress(state, action) {
      state.shippingAddress = { ...state.shippingAddress, ...action.payload };
    },
    resetOrder(state) {
      Object.assign(state, initialState);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPaymentIntent.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(createPaymentIntent.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.clientSecret = action.payload;
      })
      .addCase(createPaymentIntent.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { setShippingAddress, resetOrder } = orderSlice.actions;
export default orderSlice.reducer;