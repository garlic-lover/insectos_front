import { gql } from "@apollo/client";

const INSECT_ADD = gql`
  mutation insectAdd($insect: InsectInput) {
    insectAdd(insect: $insect)
  }
`;

export default INSECT_ADD;
