import React from 'react';
import { useSelector } from 'react-redux';

import { List, Subtitle } from 'containers/Sidebar/Sidebar.styles';

import { RootState } from 'store';

const TripSummary = () => {
  const { distance, fuelPrice, fuelUsage } = useSelector(
    (state: RootState) => state.summary
  );

  const km = distance / 1000;
  const price = fuelUsage * fuelPrice * (km / 100) * 1.1;
  const days = Number((km / 800).toFixed());

  return (
    <section>
      <Subtitle>Trip Summary</Subtitle>
      <List>
        {price ? (
          <>
            <li>Number of km: {km.toFixed(1)}</li>
            <li>Number of days needed: {days + 1}</li>
            <li>Fuel price: {price.toFixed(1)}zł</li>
            <li>Total cost: {(price + days * 1000).toFixed(1)}zł</li>
          </>
        ) : (
          <li>Fill in the above data</li>
        )}
      </List>
    </section>
  );
};

export default TripSummary;