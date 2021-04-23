const INSECT = `
  query insect($specie : String) {
    insect (specie:$specie) {
      order {
        main
        sub
      }
      family
      specie
      commonNames
      estados {
        name
      }
      references {
        clave
        _id
      }
      notes
      eatableStates
      isSold
      isAutoConsummed
      isComestible
      isMedicinal
      isTradicional
    }
  }
`;

export default INSECT;
