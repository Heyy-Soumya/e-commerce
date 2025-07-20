import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProductsAPI } from './productsAPI';

// Async thunk to load products
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchProductsAPI();
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const initialState = {
  items: [],
  filteredItems: [],
  searchTerm: '',
  viewMode: 'grid', // 'grid' | 'list'
  status: 'idle',   // idle | loading | succeeded | failed
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
      applyFilter(state);
    },
    setViewMode(state, action) {
      state.viewMode = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
        applyFilter(state);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Unable to load products';
      });
  },
});

function applyFilter(state) {
  const term = state.searchTerm.toLowerCase();
  state.filteredItems = state.items.filter((p) =>
    p.title.toLowerCase().includes(term)
  );
}

export const { setSearchTerm, setViewMode } = productsSlice.actions;
export default productsSlice.reducer;