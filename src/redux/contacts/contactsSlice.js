import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { filter } = filterSlice.actions;
