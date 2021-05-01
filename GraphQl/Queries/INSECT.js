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
        _id{
          _id
          authors
          date
          name
          journal
          volume
          number
          editorial
          pages{
            from
            to
          }
        }
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
