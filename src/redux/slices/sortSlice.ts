import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface SortState {
  query: string;
  category: number;
  sortBy: SortByItem;
}

// Define the initial state using that type
const initialState: SortState = {
  query: '',
  category: 0,
  sortBy: {
    name: 'популярности',
    key: 'rating',
    order: 'desc',
  },
};

export const counterSlice = createSlice({
  name: 'sort',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    clear: (state) => {
      state.category = 0;
      state.query = '';
      state.sortBy = {
        name: 'популярности',
        key: 'rating',
        order: 'desc',
      };
    },
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setSortBy: (state, action: PayloadAction<SortByItem>) => {
      state.sortBy = action.payload;
    },
    setCategory: (state, action: PayloadAction<number>) => {
      state.category = action.payload;
    },
  },
});

export const { clear, setQuery, setSortBy, setCategory } = counterSlice.actions;

export default counterSlice.reducer;
