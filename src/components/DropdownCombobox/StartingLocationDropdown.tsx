import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  handleStartingCity,
  setAppStage,
} from 'features/location/locationSlice';
import { RootState } from 'store';

import DebouncedInput from 'components/Input/debouncedInput';
import CitiesList from 'components/CitiesList';

const StartingLocationDropdown = () => {
  const { startingCity } = useSelector((state: RootState) => state.location);
  const cities = startingCity.cities;
  const dispatch = useDispatch();

  const handleEvent = (loc: [number, number], title: string) => {
    dispatch(handleStartingCity({ loc, title, cities: [] }));
    dispatch(setAppStage('destination'));
  };

  return (
    <div>
      <DebouncedInput
        placeholder="Początkowa lokalizacja"
        len={cities.length}
        type="starting-location"
      />
      {cities.length > 0 && (
        <CitiesList cities={cities} handleEvent={handleEvent} />
      )}
    </div>
  );
};

export default StartingLocationDropdown;