import { useQuery } from "@apollo/client";
import INSECTS from "@GraphQl/Queries/INSECTS";

export default function useDBManage() {
  const { loading, error, data } = useQuery(INSECTS);

  return { loading, error, insects: data?.insects };
}
