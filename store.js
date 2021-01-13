import { createContext, useReducer } from "react";

import FR from "./translations/fr.json";
import EN from "./translations/en.json";
import ES from "./translations/es.json";

const translations = {
  en: EN,
  fr: FR,
  es: ES,
};

const getTranslate = (myLanguage) => (key) => {
  return translations[myLanguage][key];
};

const initialState = {
  connectedStatus: null,
  token: "",
  personalData: {},
  t: getTranslate("fr"),
  lang: "fr",
  languageSwitchOpened: false,
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "setUserData":
        return {
          ...state,
          token: action.token,
          personalData: action.user,
          connectedStatus: action.token ? true : false,
        };
      case "langChange":
        return {
          ...state,
          lang: action.lang,
          t: getTranslate(action.lang),
        };
      case "languageSwitchOpenedChange":
        return {
          ...state,
          languageSwitchOpened: action.languageSwitchOpened,
        };
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
