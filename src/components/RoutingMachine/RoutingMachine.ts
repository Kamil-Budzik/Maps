import L from 'leaflet';
import { createControlComponent } from '@react-leaflet/core';
import 'leaflet-routing-machine';
import 'lrm-graphhopper';

const createRoutineMachineLayer = () => {
  return L.Routing.control({
    // @ts-ignore
    router: L.Routing.graphHopper(process.env.REACT_APP_GRAPHHOPPERTOKEN),
    waypoints: [L.latLng(52.229675, 21.01223), L.latLng(48.856613, 2.352222)],
    show: false,
    addWaypoints: false,
    routeWhileDragging: false,
    fitSelectedRoutes: true,
    showAlternatives: false,
  });
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
