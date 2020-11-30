import { gql } from "@apollo/client";

const ESTADO = gql`
  query estado($state_code: String) {
    estado(state_code: $state_code) {
      _id
      insects {
        commonNames
      }
    }
  }
`;

export default ESTADO;
