import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setNewCities,
  setStartingCity,
  setStartingCityId,
} from 'features/location/locationSlice';
import { RootState } from 'store';

import DebouncedInput from 'components/Input/debouncedInput';

import { Item, List } from './DropdownCombobox.styles';

const StartingLocationDropdown = () => {
  const { cities } = useSelector((state: RootState) => state.location);
  const dispatch = useDispatch();

  // set Starting city id, value and clear list
  const handleClick = (id: string, title: string) => {
    dispatch(setStartingCityId(id));
    dispatch(setStartingCity(title));
    dispatch(setNewCities([]));
  };

  return (
    <>
      <DebouncedInput
        placeholder="Początkowa lokalizacja"
        len={cities.length}
      />
      {cities.length > 0 && (
        <List>
          {cities.map((city) => (
            <Item
              key={city.id}
              onClick={() => handleClick(city.id, city.title)}
            >
              {city.title}
            </Item>
          ))}
        </List>
      )}
    </>
  );
};

export default StartingLocationDropdown;