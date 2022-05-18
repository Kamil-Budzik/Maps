import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  handleDestinationCity,
  setAppStage,
} from 'features/location/locationSlice';
import { RootState } from 'store';

import DebouncedInput from 'components/Input/debouncedInput';
import CitiesList from 'components/CitiesList';

const DropdownCombobox = () => {
  const { destinationCity } = useSelector((state: RootState) => state.location);
  const dispatch = useDispatch();

  const cities = destinationCity.cities;

  // set Destination city id, value and clear list
  const handleEvent = (loc: [number, number], title: string) => {
    dispatch(setAppStage('completed'));
    dispatch(handleDestinationCity({ title, loc, cities: [] }));
  };

  return (
    <div>
      <DebouncedInput
        placeholder="Cel podróży"
        len={cities.length}
        type={'destination'}
      />
      {cities.length > 0 && (
        <CitiesList cities={cities} handleEvent={handleEvent} />
      )}
    </div>
  );
};

export default DropdownCombobox;