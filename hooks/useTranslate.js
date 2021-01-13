import { useContext } from "react";

import { store } from "../store";

export default function useTranslate() {
  const {
    state: { t, lang, languageSwitchOpened },
    dispatch,
  } = useContext(store);

  function languageSwitch(lang) {
    dispatch({ type: "langChange", lang });
  }

  function languageSwitchOpenedChange(isOpened) {
    dispatch({
      type: "languageSwitchOpenedChange",
      languageSwitchOpened: isOpened,
    });
  }

  return {
    t,
    lang,
    languageSwitch,
    languageSwitchOpened,
    languageSwitchOpenedChange,
  };
}
