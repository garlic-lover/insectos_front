import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import styled from "styled-components";

const geoJson = require("../../public/GeoJSONs/mx_states.json");

export default function Map() {
  return (
    <Wrapper>
      <MapContainer
        center={[50, 10]}
        zoom={6}
        maxZoom={10}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        <GeoJSON
          data={geoJson}
          style={() => ({
            color: "#4a83ec",
            weight: 0.5,
            fillColor: "#1a1d62",
            fillOpacity: 1,
          })}
        />
        <Marker position={[50, 10]}>
          <Popup>Popup for any custom information.</Popup>
        </Marker>
      </MapContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 200px;
`;
