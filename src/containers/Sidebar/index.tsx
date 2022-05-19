import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Title from 'components/Title';
import Button from 'components/Button';
import FuelForms from 'containers/FuelForms';
import TripSummary from 'components/TripSummary';

import { RootState } from 'store';
import { clearState } from 'features/location/locationSlice';
import { clearSummaryState } from 'features/summary/summarySlice';

import { Arrow, Row, Subtitle, Wrapper } from './Sidebar.styles';

interface Props {
  handlePrint: () => void;
}

const Sidebar = ({ handlePrint }: Props) => {
  const { fuelPrice, fuelUsage } = useSelector(
    (state: RootState) => state.summary
  );
  const { isError } = useSelector((state: RootState) => state.error);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearState());
    dispatch(clearSummaryState());
  };

  return (
    <Wrapper>
      <section className="container">
        <Row>
          <Link to="/" onClick={handleClick}>
            <Arrow>{'<-'}</Arrow>
          </Link>
          <Title />
        </Row>
        <section>
          <Subtitle>Koszty</Subtitle>
          <FuelForms />
        </section>
        <TripSummary />
        {fuelUsage && fuelPrice && !isError ? (
          <Button isPdf onClick={handlePrint}>
            Dowload PDF
          </Button>
        ) : null}
      </section>
    </Wrapper>
  );
};

export default Sidebar;