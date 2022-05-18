import React from 'react';

import Title from 'components/Title';
import Input from 'components/Input';
import Button from 'components/Button';

import { Label, List, Subtitle, Wrapper } from './Sidebar.styles';

const Sidebar = () => {
  return (
    <Wrapper>
      <div className="container">
        <Title />
        <section>
          <Subtitle>Koszty</Subtitle>
          <div>
            <div className="inputWrapper">
              <Label htmlFor="fuelUsage">Spalanie paliwa na 100km</Label>
              <Input id="fuelUsage" type="number" />
            </div>
            <div className="inputWrapper">
              <Label htmlFor="fuelPrice">Cena za 1 litr paliwa</Label>
              <Input id="fuelPrice" type="number" />
            </div>
          </div>
        </section>
        <section>
          <Subtitle>Dane przejazdu</Subtitle>
          <List>
            <li>Ilość km: 2250</li>
            <li>Ilość potrzebnych dni: 3</li>
            <li>Koszt paliwa: 450zł</li>
            <li>Całkowity koszt: 3450zł</li>
          </List>
        </section>
        <Button isPdf>Dowload PDF</Button>
      </div>
    </Wrapper>
  );
};

export default Sidebar;