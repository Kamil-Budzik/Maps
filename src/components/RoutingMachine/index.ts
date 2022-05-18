import L from 'leaflet';
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { useDispatch } from 'react-redux';

import 'leaflet-routing-machine';
import 'lrm-graphhopper';
import { setDistance } from '../../features/summary/summarySlice';

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
      routeWhileDragging: false,
    }).addTo(map);
    routingControl.on('routesfound', (e) => {
      const routes = e.routes;
      // console.log(routes[0].summary);
      dispatch(setDistance(routes[0].summary.totalDistance));
    });
    return () => {
      map.removeControl(routingControl);
    };
  }, [map, destinationLoc, startingLoc, dispatch]);

  return null;
}

