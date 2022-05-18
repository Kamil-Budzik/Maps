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
      <Subtitle>Dane przejazdu</Subtitle>
      <List>
        {price ? (
          <>
            <li>Ilość km: {km.toFixed(1)}</li>
            <li>Ilość potrzebnych dni: {days + 1}</li>
            <li>Koszt paliwa: {price.toFixed(1)}zł</li>
            <li>Całkowity koszt: {(price + days * 1000).toFixed(1)}zł</li>
          </>
        ) : (
          'Wypełnij powyższe dane'
        )}
      </List>
    </section>
  );
};

export default TripSummary;