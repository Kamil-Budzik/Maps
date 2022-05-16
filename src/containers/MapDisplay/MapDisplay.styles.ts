import styled from 'styled-components';
import { MapContainer } from 'react-leaflet';

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  padding: 4em 1em;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 800px) {
    padding: 4em 2em;
    width: calc(100% - 350px);
  }

  .leaflet-bar {
    display: none;
  }
`;

export const StyledMapContainer = styled(MapContainer)`
  width: 100%;
  height: 100vh;
`;