import { gql } from "@apollo/client";

const INSECTS = gql`
  query insects {
    insects {
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
    }
  }
`;

export default INSECTS;
