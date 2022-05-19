import React from 'react';
import { TileLayer } from 'react-leaflet';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import RoutingMachine from 'components/RoutingMachine';
import Button from 'components/Button';

import { RootState } from 'store';

import {
  ButtonContainer,
  StyledMapContainer,
  Wrapper,
} from './MapDisplay.styles';

const MapDisplay = () => {
  const { startingCity, destinationCity } = useSelector(
    (state: RootState) => state.location
  );

  if (!startingCity.title && !destinationCity.title) {
    return (
      <ButtonContainer>
        <Link to="/">
          <Button isPdf>Wybierz lokalizację</Button>
        </Link>
      </ButtonContainer>
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