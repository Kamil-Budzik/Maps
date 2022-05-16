import React from 'react';

import { Wrapper } from './Map.styles';
import Sidebar from 'containers/Sidebar';
import MapDisplay from 'containers/MapDisplay';

const Map = () => {
  return (
    <Wrapper>
      <Sidebar />
      <MapDisplay />
    </Wrapper>
  );
};

export default Map;