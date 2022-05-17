import { createSlice } from '@reduxjs/toolkit';

export interface City {
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

export interface LocationState {
  cities: City[];
  startingCityId: string;
  startingCity: string;
}

const initialState: LocationState = {
  cities: [],
  startingCity: '',
  startingCityId: '',
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setNewCities: (state, action) => {
      state.cities = action.payload;
    },
    setStartingCity: (state, action) => {
      state.startingCity = action.payload;
    },
    setStartingCityId: (state, action) => {
      state.startingCityId = action.payload;
    },
  },
});

export const { setNewCities, setStartingCity, setStartingCityId } =
  locationSlice.actions;

export default locationSlice.reducer;