import { createSlice } from '@reduxjs/toolkit';
import { DummyData } from '../utils/DummyData';

const booksSlice = createSlice({
  name: 'books',
  initialState: DummyData,
  reducers: {
    addBook: (state, action) => {
      state.push({ id: Date.now(), ...action.payload });
    }
  }
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
