import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import Sidebar from 'containers/Sidebar';
import MapDisplay from 'containers/MapDisplay';

import { Wrapper } from './Map.styles';

//TODO there is a problem with react-to-print and react-leaflet.
// If you have enough time be sure to check it. U might even have to use different tool like 'https://www.youtube.com/watch?v=1Vw-e_ex2S0'

const Map = () => {
  const componentToPrint = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentToPrint.current,
  });

  return (
    <Wrapper ref={componentToPrint}>
      <Sidebar handlePrint={handlePrint} />
      <MapDisplay />
    </Wrapper>
  );
};

export default Map;