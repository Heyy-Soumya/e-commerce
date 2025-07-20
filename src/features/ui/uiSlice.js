import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  toastQueue: [],          // [{ id, type, message }]
  showLoader: false,
};

let toastId = 0;

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    addToast(state, action) {
      const { type = 'info', message } = action.payload;
      state.toastQueue.push({ id: ++toastId, type, message });
    },
    removeToast(state, action) {
      state.toastQueue = state.toastQueue.filter(
        (t) => t.id !== action.payload
      );
    },
    setLoader(state, action) {
      state.showLoader = action.payload;
    },
  },
});

export const { addToast, removeToast, setLoader } = uiSlice.actions;
export default uiSlice.reducer;