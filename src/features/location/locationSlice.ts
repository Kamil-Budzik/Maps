import { createSlice } from '@reduxjs/toolkit';

import { City } from './CityInterface';

export interface LocationState {
  //starting city
  startingCities: City[];
  startingCityId: string;
  startingCity: string;
  //destination
  destinationCities: City[];
  destinationCity: string;
  destinationCityId: string;
}

const initialState: LocationState = {
  //starting city
  startingCities: [],
  startingCity: '',
  startingCityId: '',
  //destination
  destinationCities: [],
  destinationCity: '',
  destinationCityId: '',
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
    setStartingCityId: (state, action) => {
      state.startingCityId = action.payload;
    },
    //destination
    setDestinationCities: (state, action) => {
      state.destinationCities = action.payload;
    },
    setDestinationCity: (state, action) => {
      state.destinationCity = action.payload;
    },
    setDestinationCityId: (state, action) => {
      state.destinationCityId = action.payload;
    },
  },
});

export const {
  setStartingCities,
  setStartingCity,
  setStartingCityId,
  setDestinationCity,
  setDestinationCityId,
  setDestinationCities,
} = locationSlice.actions;

export default locationSlice.reducer;