import { createSlice } from '@reduxjs/toolkit';

interface HistoryItem {
  distance: number;
  startingLocation: string;
  destination: string;
}

export interface historyState {
  items: HistoryItem[];
}

const initialState: historyState = {
  items: [],
};

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addNewItem: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addNewItem } = historySlice.actions;

export default historySlice.reducer;