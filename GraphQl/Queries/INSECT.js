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
    }
  }
`;

export default INSECT;
