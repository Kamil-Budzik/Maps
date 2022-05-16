import L from 'leaflet';
import { createControlComponent } from '@react-leaflet/core';
import 'leaflet-routing-machine';
import 'lrm-graphhopper';

const createRoutineMachineLayer = () => {
  return L.Routing.control({
    // @ts-ignore
    router: L.Routing.graphHopper(process.env.REACT_APP_GRAPHHOPPERTOKEN),
    waypoints: [
      L.latLng(33.52001088075479, 36.26829385757446),
      L.latLng(33.50546582848033, 36.29547681726967),
    ],
    show: false,
    addWaypoints: false,
    routeWhileDragging: false,
    fitSelectedRoutes: true,
    showAlternatives: false,
  });
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
