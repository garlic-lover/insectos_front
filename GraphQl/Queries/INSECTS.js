import { gql } from "@apollo/client";

const INSECTS = gql`
  query insects($filter: FilterInput) {
    insects(filter: $filter) {
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
