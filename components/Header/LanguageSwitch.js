import { useEffect } from "react";
import styled from "styled-components";

import useTranslate from "../../hooks/useTranslate";

const theLanguages = { fr: "Français", en: "English", es: "Español" };

export default function LanguageSwitch() {
  const {
    lang,
    languageSwitch,
    languageSwitchOpened,
    languageSwitchOpenedChange,
  } = useTranslate();

  const handleLeave = () => {
    languageSwitchOpenedChange(false);
  };

  useEffect(() => {
    let el = document.getElementById("languageSwitch");
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <Wrapper id="languageSwitch">
      <p
        onClick={() => {
          languageSwitchOpenedChange(!languageSwitchOpened);
        }}
      >
        {theLanguages[lang]}
        <img src="/svg/chevron.svg" alt="language switch icon" />
      </p>
      {languageSwitchOpened && (
        <ul>
          {Object.keys(theLanguages).map((theLang, index) => {
            if (lang === theLang) {
              return null;
            }
            return (
              <li
                key={index}
                onClick={() => {
                  languageSwitch(theLang);
                }}
              >
                {theLanguages[theLang]}
              </li>
            );
          })}
        </ul>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin-left: 6px;
  font-size: 18px;
  position: relative;
  user-select: none;
  & p {
    cursor: pointer;
  }
  & img {
    margin-left: 6px;
    height: 10px;
    width: auto;
    filter: brightness(0) saturate(100%) invert(33%) sepia(69%) saturate(473%)
      hue-rotate(332deg) brightness(100%) contrast(88%);
  }
  & ul {
    position: absolute;
    bottom: 0px;
    left: 6px;
    transform: translateY(100%);
  }
  & li {
    margin-top: 10px;
    cursor: pointer;
  }
`;
