import { createSlice } from '@reduxjs/toolkit';

import { City } from './CityInterface';

interface CityState {
  title: string;
  loc: [number, number];
  cities: City[];
}

export interface LocationState {
  startingCity: CityState;
  destinationCity: CityState;
  stage: 'start' | 'destination' | 'completed';
}

const initialState: LocationState = {
  startingCity: { title: '', loc: [0, 0], cities: [] },
  destinationCity: { title: '', loc: [0, 0], cities: [] },
  stage: 'start',
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    handleStartingCity: (state, action) => {
      state.startingCity.title = action.payload.title;
      state.startingCity.loc = action.payload.loc;
      state.startingCity.cities = action.payload.cities;
    },
    handleDestinationCity: (state, action) => {
      state.destinationCity.title = action.payload.title;
      state.destinationCity.loc = action.payload.loc;
      state.destinationCity.cities = action.payload.cities;
    },
    setAppStage: (state, action) => {
      state.stage = action.payload;
    },
    clearState: (state) => {
      state.stage = 'start';
      state.startingCity = { title: '', loc: [0, 0], cities: [] };
      state.destinationCity = { title: '', loc: [0, 0], cities: [] };
    },
  },
});

export const {
  handleDestinationCity,
  handleStartingCity,
  setAppStage,
  clearState,
} = locationSlice.actions;

export default locationSlice.reducer;