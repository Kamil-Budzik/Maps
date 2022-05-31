import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'store';

import { Item, List } from './History.styles';

const HistoryList = () => {
  const { items } = useSelector((state: RootState) => state.history);

  return (
    <List>
      {items.length ? (
        items.map((item, index) => (
          <Item key={index}>
            <div>
              {item.startingLocation} {'->'} {item.destination}
            </div>
            <div>{item.distance}km</div>
          </Item>
        ))
      ) : (
        <li>Your history is empty</li>
      )}
    </List>
  );
};

export default HistoryList;