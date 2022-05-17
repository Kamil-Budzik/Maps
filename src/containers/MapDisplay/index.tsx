import React from 'react';
import { TileLayer } from 'react-leaflet';

import RoutingMachine from 'components/RoutingMachine';

import { StyledMapContainer, Wrapper } from './MapDisplay.styles';

const MapDisplay = () => {

  return (
    <Wrapper>
      <StyledMapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <RoutingMachine />
      </StyledMapContainer>
    </Wrapper>
  );
};

export default MapDisplay;