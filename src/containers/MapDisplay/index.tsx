import React from 'react';
import { TileLayer } from 'react-leaflet';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import RoutingMachine from 'components/RoutingMachine';
import Button from 'components/Button';

import { RootState } from 'store';

import {
  ButtonContainer,
  ErrorContainer,
  StyledMapContainer,
  Wrapper,
} from './MapDisplay.styles';

const MapDisplay = () => {
  const { startingCity, destinationCity } = useSelector(
    (state: RootState) => state.location
  );

  const { isError, error } = useSelector((state: RootState) => state.error);

  if (!startingCity.title && !destinationCity.title) {
    return (
      <ButtonContainer>
        <Link to="/">
          <Button isPdf>Wybierz lokalizację</Button>
        </Link>
      </ButtonContainer>
    );
  }

  if (isError) {
    return (
      <ErrorContainer>
        <h2>{error}</h2>
      </ErrorContainer>
    );
  }

  return (
    <Wrapper>
      <StyledMapContainer zoom={6} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <RoutingMachine
          startingLoc={startingCity.loc}
          destinationLoc={destinationCity.loc}
        />
      </StyledMapContainer>
    </Wrapper>
  );
};

export default MapDisplay;