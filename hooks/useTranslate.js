import { useContext } from "react";

import { store } from "../store";

export default function useTranslate() {
  const {
    state: { t, lang },
    dispatch,
  } = useContext(store);

  function languageSwitch(lang) {
    dispatch({ type: "langChange", lang });
  }

  return {
    t,
    lang,
    languageSwitch,
  };
}
