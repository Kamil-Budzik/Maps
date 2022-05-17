import React from 'react';
import { TileLayer } from 'react-leaflet';
import { useSelector } from 'react-redux';

import RoutingMachine from 'components/RoutingMachine';
import { RootState } from 'store';

import { StyledMapContainer, Wrapper } from './MapDisplay.styles';

const MapDisplay = () => {
  const { startingCityLoc, destinationCityLoc } = useSelector(
    (state: RootState) => state.location
  );

  return (
    <Wrapper>
      <StyledMapContainer
        center={[startingCityLoc[0], startingCityLoc[1]]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <RoutingMachine
          startingLoc={startingCityLoc}
          destinationLoc={destinationCityLoc}
        />
      </StyledMapContainer>
    </Wrapper>
  );
};

export default MapDisplay;