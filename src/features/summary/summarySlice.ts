import { createSlice } from '@reduxjs/toolkit';

export interface summaryState {
  distance: number;
  fuelPrice: number;
  fuelUsage: number;
}

const initialState: summaryState = {
  distance: 0,
  fuelPrice: 0,
  fuelUsage: 0,
};

export const summarySlice = createSlice({
  name: 'summary',
  initialState,
  reducers: {
    setDistance: (state, action) => {
      state.distance = action.payload;
    },
    setFuel: (state, action) => {
      state.fuelPrice = action.payload.fuelPrice;
      state.fuelUsage = action.payload.fuelUsage;
    },
  },
});

export const { setDistance, setFuel } = summarySlice.actions;

export default summarySlice.reducer;