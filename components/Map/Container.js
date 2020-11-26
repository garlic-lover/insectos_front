import { useState, useEffect } from "react";
import { MapContainer, GeoJSON, Marker, Popup, useMap } from "react-leaflet";
import styled from "styled-components";

import mexGeo from "../../public/GeoJSONs/mx_states.json";
import worldGeo from "../../public/GeoJSONs/world.json";

import Switch from "../DS/Switch";

function MapContent({ worldScope, currentState, currentStateChange }) {
  const map = useMap();

  useEffect(() => {
    if (worldScope) {
      map.setView([45, 10], 2);
    } else {
      map.setView([23.634501, -102.552784], 5);
    }
  }, [worldScope]);

  const handleClick = (ev) => {
    alert(ev.target.feature.properties.state_name);
  };

  const handleOver = (ev) => {
    let state = ev.target.feature.properties.state_name;
    if (state !== currentState) {
      currentStateChange(state);
    }
  };

  const handleOut = (ev) => {};

  function onEachFeature(feature, layer) {
    layer.on("click", handleClick);
    layer.on("mouseover", handleOver);
    layer.on("mouseout", handleOver);
  }

  function mapStyler(feature) {
    return {
      color: "#4a83ec",
      weight: 0.5,
      fillColor: feature.properties.hasInsects ? "green" : "#1a1d62",
      fillOpacity: 1,
    };
  }

  return (
    <>
      <GeoJSON
        key={worldScope ? "world scope geojson" : "mex scope geojson"}
        data={worldScope ? worldGeo : mexGeo}
        style={mapStyler}
        onEachFeature={onEachFeature.bind(this)}
      />
      {/* <Marker position={[19.432608, -99.133208]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
    </>
  );
}

export default function Map() {
  const [worldScope, worldScopeChange] = useState(false);
  const [currentState, currentStateChange] = useState("");

  return (
    <Wrapper>
      <SwitchWrapper>
        <Switch value={worldScope} valueChange={worldScopeChange} />
      </SwitchWrapper>
      <CurrentStateWrapper>
        {currentState === "" ? "No state" : currentState}
      </CurrentStateWrapper>
      <MapContainer
        center={[23.634501, -102.552784]}
        zoom={5}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "700px" }}
      >
        <MapContent
          worldScope={worldScope}
          currentState={currentState}
          currentStateChange={currentStateChange}
        />
      </MapContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const SwitchWrapper = styled.div`
  margin-bottom: 12px;
  position: absolute;
  z-index: 100;
  top: 20px;
  right: 20px;
`;

const CurrentStateWrapper = styled.div`
  position: absolute;
  z-index: 100;
  top: 44px;
  right: 20px;
`;

/*  <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> */
