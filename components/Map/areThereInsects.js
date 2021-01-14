export default function areThereInsects(mexGeo, estados) {
  for (const estado of mexGeo.features) {
    // Find index
    let theIndex = estados.findIndex(
      (e) => e.name === estado.properties.state_name
    );
    if (theIndex !== -1) {
      if (estados[theIndex].insects.length > 0) {
        estado.properties.hasInsects = true;
      }
    }
  }
  return mexGeo;
}
