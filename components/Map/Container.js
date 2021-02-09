import { useEffect, useState } from "react";
import { MapContainer } from "react-leaflet";
import { useQuery } from "@apollo/client";
import styled from "styled-components";

import ESTADOS from "../../GraphQl/Queries/ESTADOS";

import MapContent from "./MapContent";
import EstadoDetail from "./EstadoDetail";
import Switch from "../DS/Switch";
import Loader from "../DS/Loader";

import useWindowSize from "@hooks/useWindowSize";
import useAppContext from "@hooks/useAppContext";

export default function Map() {
  const [worldScope, worldScopeChange] = useState(false);
  const [overredState, overredStateChange] = useState(null);
  const [currentState, currentStateChange] = useState({
    name: "",
    state_code: null,
  });

  const {
    state: { theScroll },
  } = useAppContext();

  const { width } = useWindowSize();

  const { loading, error, data } = useQuery(ESTADOS);

  useEffect(() => {
    if (data) {
      theScroll.destroy();
      theScroll.init();
    }
  }, [data]);

  if (error) {
    console.log(error);
    return null;
  }
  if (loading) {
    return <Loader />;
  }

  return (
    <Wrapper>
      <SwitchWrapper>
        <Switch value={worldScope} valueChange={worldScopeChange} />
      </SwitchWrapper>
      <MapContainer
        center={[23.634501, -102.552784]}
        scrollWheelZoom={false}
        style={{
          width: width > 680 ? "60%" : "100%",
          height: width > 680 ? "500px" : "300px" /* , minWidth: 760 */,
          zIndex: 1,
        }}
      >
        <MapContent
          worldScope={worldScope}
          currentState={currentState}
          currentStateChange={currentStateChange}
          overredState={overredState}
          overredStateChange={overredStateChange}
          estados={data.estados}
          width={width}
        />
        <OveredState>{overredState}</OveredState>
      </MapContainer>
      <EstadoDetail currentState={currentState} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: 30px;
  @media (max-width: 680px) {
    flex-direction: column;
    margin-top: 30px;
  }
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
  z-index: 6;
  bottom: 10px;
  left: 20px;
  @media (max-width: 680px) {
    top: 20px;
    left: inherit;
    right: 20px;
  }
`;

/*  <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> */
