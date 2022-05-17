import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setDestinationCities,
  setDestinationCity,
  setDestinationCityId,
} from 'features/location/locationSlice';
import { RootState } from 'store';

import DebouncedInput from 'components/Input/debouncedInput';

import { Item, List } from './DropdownCombobox.styles';

const DropdownCombobox = () => {
  const { destinationCities } = useSelector(
    (state: RootState) => state.location
  );
  const dispatch = useDispatch();

  // set Destination city id, value and clear list
  const handleClick = (id: string, title: string) => {
    dispatch(setDestinationCityId(id));
    dispatch(setDestinationCity(title));
    dispatch(setDestinationCities([]));
  };

  return (
    <div>
      <DebouncedInput
        placeholder="Cel podróży"
        len={destinationCities.length}
        type={'destination'}
      />
      {destinationCities.length > 0 && (
        <List>
          {destinationCities.map((city) => (
            <Item
              key={city.id}
              onClick={() => handleClick(city.id, city.title)}
            >
              {city.title}
            </Item>
          ))}
        </List>
      )}
    </div>
  );
};

export default DropdownCombobox;