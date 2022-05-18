import React from 'react';
import { useSelector } from 'react-redux';

import Title from 'components/Title';
import Button from 'components/Button';
import FuelForms from 'containers/FuelForms';

import { List, Subtitle, Wrapper } from './Sidebar.styles';

import { RootState } from 'store';

const Sidebar = () => {
  const { distance, fuelPrice, fuelUsage } = useSelector(
    (state: RootState) => state.summary
  );

  const km = distance / 1000;
  const price = fuelUsage * fuelPrice * (km / 100) * 1.1;
  const days = Number((km / 800).toFixed());

  return (
    <Wrapper>
      <div className="container">
        <Title />
        <section>
          <Subtitle>Koszty</Subtitle>
          <FuelForms />
        </section>
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
              'Wpisz danę w lubryczki koszty'
            )}
          </List>
        </section>
        <Button isPdf>
          <a href="" download>
            Dowload PDF
          </a>
        </Button>
      </div>
    </Wrapper>
  );
};

export default Sidebar;