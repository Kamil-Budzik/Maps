import { createSlice } from '@reduxjs/toolkit';

import { City } from './CityInterface';

export interface LocationState {
  //starting city
  startingCities: City[];
  startingCityLoc: [number, number];
  startingCity: string;
  //destination
  destinationCities: City[];
  destinationCity: string;
  destinationCityLoc: [number, number];
  //app-stage
  stage: 'start' | 'destination' | 'completed';
}

const initialState: LocationState = {
  //starting city
  startingCities: [],
  startingCity: '',
  startingCityLoc: [0, 0],
  //destination
  destinationCities: [],
  destinationCity: '',
  destinationCityLoc: [0, 0],
  //app-stage
  stage: 'start',
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    //starting city
    setStartingCities: (state, action) => {
      state.startingCities = action.payload;
    },
    setStartingCity: (state, action) => {
      state.startingCity = action.payload;
    },
    setStartingCityLoc: (state, action) => {
      state.startingCityLoc = action.payload;
    },
    //destination
    setDestinationCities: (state, action) => {
      state.destinationCities = action.payload;
    },
    setDestinationCity: (state, action) => {
      state.destinationCity = action.payload;
    },
    setDestinationCityLoc: (state, action) => {
      state.destinationCityLoc = action.payload;
    },
    //app=stage
    setAppStage: (state, action) => {
      state.stage = action.payload;
    },
  },
});

export const {
  setStartingCities,
  setStartingCity,
  setStartingCityLoc,
  setDestinationCity,
  setDestinationCities,
  setDestinationCityLoc,
  setAppStage,
} = locationSlice.actions;

export default locationSlice.reducer;