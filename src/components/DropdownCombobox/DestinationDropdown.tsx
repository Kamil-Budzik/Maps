import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setAppStage,
  setDestinationCities,
  setDestinationCity,
  setDestinationCityLoc,
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
  const handleClick = (loc: [number, number], title: string) => {
    dispatch(setDestinationCityLoc(loc));
    dispatch(setDestinationCity(title));
    dispatch(setDestinationCities([]));
    dispatch(setAppStage('completed'));
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

export default DropdownCombobox;