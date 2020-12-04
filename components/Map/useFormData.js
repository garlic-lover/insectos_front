import { useState } from "react";

import ordersList from "../../public/diverse/insectOrdersList.json";

export default function useFormData(_id) {
  const [order, orderChange] = useState("-");
  const [family, familyChange] = useState("");
  const [genus, genusChange] = useState("");
  const [specie, specieChange] = useState("");
  const [commonName, commonNameChange] = useState("");

  const selectField = {
    name: "Order",
    key: order,
    change: orderChange,
    options: ordersList,
  };

  const inputFields = [
    {
      name: "Familia",
      key: family,
      change: familyChange,
      description: "Familia del insecto",
    },
    {
      name: "Genus",
      key: genus,
      change: genusChange,
      description: "Familia del insecto",
    },
    {
      name: "Especie",
      key: specie,
      change: specieChange,
      description: "Familia del insecto",
    },
    {
      name: "Nombre comuno",
      key: commonName,
      change: commonNameChange,
      description: "Pueden entrar el nombre mas comuno de este insecto",
    },
  ];

  const toSend = {
    order,
    family,
    genus,
    specie,
    commonNames: [commonName],
    estados: [_id],
  };

  return { inputFields, selectField, toSend };
}
