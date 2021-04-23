import { useQuery, gql } from "@apollo/client";
import INSECTS from "@GraphQl/Queries/INSECTS";
import { useState } from "react";

const orderOptions = [
  { name: "Coleoptera" },
  { name: "Hymenoptera" },
  { name: "Orthoptera" },
];

const ESTADOS = gql`
  query estados {
    estados {
      _id
      name
    }
  }
`;

export default function useDBManage() {
  const [order, orderChange] = useState("-");
  const [estado, estadoChange] = useState("-");

  const { data: estadosData } = useQuery(ESTADOS);

  const { loading, error, data } = useQuery(INSECTS, {
    variables: { filter: { order, estado } },
  });

  const filters = [
    {
      value: order,
      change: orderChange,
      label: "Order",
      options: orderOptions,
    },
    {
      value: estado,
      change: estadoChange,
      label: "Estado",
      options: estadosData ? estadosData.estados : [{ name: "", _id: "-" }],
    },
  ];

  return { loading, error, insects: data?.insects, filters };
}
