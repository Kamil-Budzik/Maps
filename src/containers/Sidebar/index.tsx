import React from 'react';
import { useSelector } from 'react-redux';

import Title from 'components/Title';
import Button from 'components/Button';
import FuelForms from 'containers/FuelForms';
import TripSummary from 'components/TripSummary';

import { RootState } from 'store';

import { Subtitle, Wrapper } from './Sidebar.styles';

interface Props {
  handlePrint: () => void;
}

const Sidebar = ({ handlePrint }: Props) => {
  const { fuelPrice, fuelUsage } = useSelector(
    (state: RootState) => state.summary
  );

  return (
    <Wrapper>
      <div className="container">
        <Title />
        <section>
          <Subtitle>Koszty</Subtitle>
          <FuelForms />
        </section>
        <TripSummary />
        {fuelUsage && fuelPrice ? (
          <Button isPdf onClick={handlePrint}>
            Dowload PDF
          </Button>
        ) : null}
      </div>
    </Wrapper>
  );
};

export default Sidebar;