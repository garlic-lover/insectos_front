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
  const [overredState, overredStateChange] = useState(null);
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
      <MapContainer
        center={[23.634501, -102.552784]}
        zoom={5}
        scrollWheelZoom={false}
        style={{ width: "60%", height: "600px", minWidth: 740, zIndex: 1 }}
      >
        <MapContent
          worldScope={worldScope}
          currentState={currentState}
          currentStateChange={currentStateChange}
          overredState={overredState}
          overredStateChange={overredStateChange}
        />
        <OveredState>{overredState}</OveredState>
        <SwitchWrapper>
          <Switch value={worldScope} valueChange={worldScopeChange} />
        </SwitchWrapper>
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

const OveredState = styled.div`
  margin-bottom: 12px;
  position: absolute;
  z-index: 200;
  top: 20px;
  right: 20px;
`;

const SwitchWrapper = styled.div`
  margin-bottom: 12px;
  position: absolute;
  z-index: 200;
  top: 45px;
  right: 20px;
`;

/*  <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> */
