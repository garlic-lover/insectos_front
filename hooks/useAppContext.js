import { useContext } from "react";
import { store } from "../store";

export default function useAppContext() {
  const { state, dispatch } = useContext(store);

  return { state, dispatch };
}
