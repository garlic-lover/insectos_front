import { useEffect } from "react";
import { GeoJSON, Marker, Popup, useMap } from "react-leaflet";

import mexGeo from "../../public/GeoJSONs/mx_states.json";
import worldGeo from "../../public/GeoJSONs/world.json";

import areThereInsects from "./areThereInsects";

export default function MapContent({
  worldScope,
  currentState,
  currentStateChange,
  overredState,
  overredStateChange,
  estados,
  width,
}) {
  const map = useMap();

  useEffect(() => {
    if (worldScope) {
      map.setView([45, 10], width > 680 ? 2 : 1);
    } else {
      map.setView([23.634501, -101.9], width > 680 ? 5 : 4);
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

  function mapStyler(feature) {
    return {
      color: "#a35638",
      weight: 0.5,
      fillColor: feature.properties.hasInsects
        ? "rgba(121, 147, 82, 0.4)"
        : "#d7c79e",
      fillOpacity: 1,
    };
  }

  return (
    <>
      <GeoJSON
        key={worldScope ? "world scope geojson" : "mex scope geojson"}
        data={worldScope ? worldGeo : areThereInsects(mexGeo, estados)}
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
