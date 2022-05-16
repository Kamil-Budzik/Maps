import React from 'react';

import { Wrapper } from './Map.styles';
import Sidebar from 'containers/Sidebar';

const Map = () => {
  return (
    <Wrapper>
      <Sidebar />
      <p>Map display</p>
    </Wrapper>
  );
};

export default Map;