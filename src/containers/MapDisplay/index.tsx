import React from 'react';
import { TileLayer } from 'react-leaflet';
import { useSelector } from 'react-redux';

import RoutingMachine from 'components/RoutingMachine';
import { RootState } from 'store';

import { StyledMapContainer, Wrapper } from './MapDisplay.styles';

const MapDisplay = () => {
  const { startingCity, destinationCity } = useSelector(
    (state: RootState) => state.location
  );

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