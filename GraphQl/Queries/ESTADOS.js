import { gql } from "@apollo/client";

const ESTADOS = gql`
  query estados {
    estados {
      name
      state_code
      insects {
        commonNames
      }
    }
  }
`;

export default ESTADOS;
