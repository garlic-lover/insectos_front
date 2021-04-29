import { useQuery, gql } from "@apollo/client";
import INSECTS from "@GraphQl/Queries/INSECTS";
import { useState } from "react";

const orderOptions = [
  { name: "Archaeognatha" },
  { name: "Blattodea" },
  { name: "Coleoptera" },
  { name: "Dermaptera" },
  { name: "Diptera" },
  { name: "Embioptera" },
  { name: "Ephemeroptera" },
  { name: "Grylloblattodea" },
  { name: "Hemiptera" },
  { name: "Hymenoptera" },
  { name: "Lepidoptera" },
  { name: "Mantophasmatodea" },
  { name: "Mantodea" },
  { name: "Mecoptera" },
  { name: "Megaloptera" },
  { name: "Neuroptera" },
  { name: "Odonata" },
  { name: "Orthoptera" },
  { name: "Phasmatodea" },
  { name: "Phthiraptera" },
  { name: "Plecoptera" },
  { name: "Psocoptera" },
  { name: "Raphidioptera" },
  { name: "Siphonaptera" },
  { name: "Strepsiptera" },
  { name: "Thysanoptera" },
  { name: "Thysanura" },
  { name: "Trichoptera" },
  { name: "Zoraptera" },
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

  function filtersInit() {
    orderChange("-");
    estadoChange("-");
  }

  return { loading, error, insects: data?.insects, filters, filtersInit };
}
