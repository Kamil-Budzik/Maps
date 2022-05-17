import L from 'leaflet';
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

import 'leaflet-routing-machine';
import 'lrm-graphhopper';

interface Props {
  startingLoc: [number, number];
  destinationLoc: [number, number];
}

export default function Routing({ startingLoc, destinationLoc }: Props) {
  const map = useMap();
  // @ts-ignore
  useEffect(() => {
    const routingControl = L.Routing.control({
      // @ts-ignore
      router: new L.Routing.graphHopper(process.env.REACT_APP_GRAPHHOPPERTOKEN),
      waypoints: [
        L.latLng(startingLoc[0], startingLoc[1]),
        L.latLng(destinationLoc[0], destinationLoc[1]),
      ],
      routeWhileDragging: false,
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [map, destinationLoc, startingLoc]);

  return null;
}

