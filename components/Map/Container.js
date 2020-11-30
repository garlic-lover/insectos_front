import { useState } from "react";
import { MapContainer } from "react-leaflet";
import { useQuery } from "@apollo/client";
import styled from "styled-components";

import ESTADOS from "../../GraphQl/Queries/ESTADOS";

import MapContent from "./MapContent";
import EstadoDetail from "./EstadoDetail";
import Switch from "../DS/Switch";

export default function Map() {
  const [worldScope, worldScopeChange] = useState(false);
  const [currentState, currentStateChange] = useState({
    name: "",
    state_code: null,
  });

  const { error, data } = useQuery(ESTADOS);

  if (error) {
    console.log(error);
    return null;
  }

  return (
    <Wrapper>
      <SwitchWrapper>
        <Switch value={worldScope} valueChange={worldScopeChange} />
      </SwitchWrapper>
      <MapContainer
        center={[23.634501, -102.552784]}
        zoom={5}
        scrollWheelZoom={false}
        style={{ width: "60%", height: "700px", minWidth: 740 }}
      >
        <MapContent
          worldScope={worldScope}
          currentState={currentState}
          currentStateChange={currentStateChange}
        />
      </MapContainer>
      <EstadoDetail currentState={currentState} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const SwitchWrapper = styled.div`
  margin-bottom: 12px;
  position: absolute;
  z-index: 200;
  top: 20px;
  right: 20px;
`;

/*  <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> */
