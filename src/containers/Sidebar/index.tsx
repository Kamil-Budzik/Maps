import React from 'react';

import Title from 'components/Title';
import Input from 'components/Input';

import { Label, Subtitle, Wrapper } from './Sidebar.styles';

const Sidebar = () => {
  return (
    <Wrapper>
      <Title />
      <div>
        <Subtitle>Koszty</Subtitle>
        <div>
          <div className="inputWrapper">
            <Label htmlFor="fuelUsage">Spalanie paliwa na 100km</Label>
            <Input id="fuelUsage" />
          </div>
          <div className="inputWrapper">
            <Label htmlFor="fuelPrice">Cena za 1 litr paliwa</Label>
            <Input id="fuelPrice" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Sidebar;