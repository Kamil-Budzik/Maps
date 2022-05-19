import React, { useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useDispatch, useSelector } from 'react-redux';

import Sidebar from 'containers/Sidebar';
import MapDisplay from 'containers/MapDisplay';

import { addNewItem } from 'features/history/historySlice';
import { RootState } from 'store';

import { Wrapper } from './Map.styles';

//TODO there is a problem with react-to-print and react-leaflet.
// If you have enough time be sure to check it. U might even have to use different tool like 'https://www.youtube.com/watch?v=1Vw-e_ex2S0'

const Map = () => {
  const componentToPrint = useRef(null);
  const { startingCity, destinationCity } = useSelector(
    (state: RootState) => state.location
  );
  const { distance } = useSelector((state: RootState) => state.summary);
  const dispatch = useDispatch();

  const handlePrint = useReactToPrint({
    content: () => componentToPrint.current,
  });

  useEffect(() => {
    if (distance > 0) {
      dispatch(
        addNewItem({
          distance: (distance / 1000).toFixed(1),
          startingLocation: startingCity.title,
          destination: destinationCity.title,
        })
      );
    }
  }, [dispatch, distance, startingCity.title, destinationCity.title]);

  return (
    <Wrapper ref={componentToPrint}>
      <Sidebar handlePrint={handlePrint} />
      <MapDisplay />
    </Wrapper>
  );
};


export default Map;