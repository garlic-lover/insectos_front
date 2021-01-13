import { useEffect } from "react";
import { GeoJSON, Marker, Popup, useMap } from "react-leaflet";

import mexGeo from "../../public/GeoJSONs/mx_states.json";
import worldGeo from "../../public/GeoJSONs/world.json";

export default function MapContent({
  worldScope,
  currentState,
  currentStateChange,
  overredState,
  overredStateChange,
}) {
  const map = useMap();

  useEffect(() => {
    if (worldScope) {
      map.setView([45, 10], 2);
    } else {
      map.setView([23.634501, -102.552784], 5);
    }
  }, [worldScope]);

  const handleClick = (ev) => {
    let { state_name, state_code } = ev.target.feature.properties;
    if (state_name !== currentState.state_name) {
      currentStateChange({ state_name, state_code });
    }
  };

  const handleOver = (ev) => {
    let { state_name } = ev.target.feature.properties;
    if (state_name !== overredState) {
      overredStateChange(state_name);
    }
  };

  const handleOut = (ev) => {};

  function onEachFeature(feature, layer) {
    layer.on("click", handleClick);
    layer.on("mouseover", handleOver);
    layer.on("mouseout", handleOver);
  }

  /*  function mapStyler(feature) {
    return {
      color: "#4a83ec",
      weight: 0.5,
      fillColor: feature.properties.hasInsects ? "green" : "#1a1d62",
      fillOpacity: 1,
    };
  } */

  function mapStyler(feature) {
    return {
      color: "#a35638",
      weight: 0.5,
      fillColor: feature.properties.hasInsects ? "green" : "#d7c79e",
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
            A pretty CSS3 popup. <br />
          </Popup>
        </Marker> */}
    </>
  );
}
