import { gql } from "@apollo/client";

const INSECT_ADD = gql`
  mutation insectAdd($commonName: String, $estado: String) {
    insectAdd(commonName: $commonName, estado: $estado)
  }
`;

export default INSECT_ADD;
