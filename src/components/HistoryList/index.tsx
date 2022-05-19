import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'store';

import { Item, List } from './History.styles';

const HistoryList = () => {
  const { items } = useSelector((state: RootState) => state.history);

  return (
    <List>
      {items.length ? (
        items.map((item) => (
          <Item key={item.startingLocation + item.destination}>
            <div>
              {item.startingLocation} {'->'} {item.destination}
            </div>
            <div>{item.distance}km</div>
          </Item>
        ))
      ) : (
        <li>Twoja historia jest pusta</li>
      )}
    </List>
  );
};

export default HistoryList;