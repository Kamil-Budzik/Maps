import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  handleStartingCity,
  setAppStage,
} from 'features/location/locationSlice';
import { RootState } from 'store';

import DebouncedInput from 'components/Input/debouncedInput';

import { Item, List } from './DropdownCombobox.styles';

const StartingLocationDropdown = () => {
  const { startingCity } = useSelector((state: RootState) => state.location);
  const cities = startingCity.cities;
  const dispatch = useDispatch();

  // set Starting city id, value and clear list
  const handleClick = (loc: [number, number], title: string) => {
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
        <List>
          {cities.map((city) => (
            <Item
              key={city.id}
              onClick={() =>
                handleClick([city.position.lat, city.position.lng], city.title)
              }
            >
              {city.title}
            </Item>
          ))}
        </List>
      )}
    </div>
  );
};

export default StartingLocationDropdown;