import { createSlice } from '@reduxjs/toolkit';

interface City {
  address: {
    city: string;
    countryName: string;
    county: string;
    label: string;
    postalCode: string;
    state: string;
  };
  id: string;
  localityType: string;
  position: {
    lat: number;
    lng: number;
  };
  title: string;
}

export interface CounterState {
  cities: City[];
}

const initialState: CounterState = {
  cities: [],
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setNewCities: (state, action) => {
      state.cities = action.payload;
    },
  },
});

export const { setNewCities } = locationSlice.actions;

export default locationSlice.reducer;