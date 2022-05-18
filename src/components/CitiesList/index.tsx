import React from 'react';
import { City } from 'features/location/CityInterface';

import { Item, List } from './CitiesList.styles';

interface Props {
  cities: City[];
  handleEvent: (a: [number, number], b: string) => void;
}
 
const CitiesList = ({ cities, handleEvent }: Props) => {
  return (
    <List>
      {cities.map((city) => (
        <Item
          tabIndex={0}
          key={city.id}
          onClick={() =>
            handleEvent([city.position.lat, city.position.lng], city.title)
          }
          onKeyDown={(event: React.KeyboardEvent) => {
            if (event.key === 'Enter') {
              handleEvent([city.position.lat, city.position.lng], city.title);
            }
          }}
        >
          {city.title}
        </Item>
      ))}
    </List>
  );
};

export default CitiesList;