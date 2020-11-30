import { gql } from "@apollo/client";

const INSECTS = gql`
  query insects {
    insects {
      commonNames
    }
  }
`;

export default INSECTS;
