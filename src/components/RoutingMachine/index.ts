import L from 'leaflet';
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { useDispatch } from 'react-redux';

import { setDistance } from 'features/summary/summarySlice';
import { addError, clearError } from 'features/error/errorSlice';

import 'leaflet-routing-machine';
import 'lrm-graphhopper';

interface Props {
  startingLoc: [number, number];
  destinationLoc: [number, number];
}

export default function Routing({ startingLoc, destinationLoc }: Props) {
  const map = useMap();
  const dispatch = useDispatch();

  useEffect(() => {
    // There is a problem with graphhopper types declaration. The quickest way of solving it, is to use ts-ignore
    const routingControl = L.Routing.control({
      // @ts-ignore
      router: new L.Routing.graphHopper(process.env.REACT_APP_GRAPHHOPPERTOKEN),
      waypoints: [
        L.latLng(startingLoc[0], startingLoc[1]),
        L.latLng(destinationLoc[0], destinationLoc[1]),
      ],
      defaultErrorHandler: () => null,
      routeWhileDragging: false,
    }).addTo(map);

    routingControl
      .on('routesfound', (e) => {
        const routes = e.routes;
        dispatch(setDistance(routes[0].summary.totalDistance));
        dispatch(clearError());
      })
      .on('routingerror', () => {
        dispatch(
          addError(
            `Sorry, but we were unable to find the correct path at this time. Please try again or contact our support: maps.app.help@gmail.com`
          )
        );
      });

    return () => {
      map.removeControl(routingControl);
    };
  }, [map, destinationLoc, startingLoc, dispatch]);

  return null;
}  

