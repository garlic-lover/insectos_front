import { useEffect, useState } from "react";
import styled from "styled-components";

import useTranslate from "../../hooks/useTranslate";

const theLanguages = { es: "ES", fr: "FR" };

export default function LanguageSwitch() {
  const [languageSwitchOpened, languageSwitchOpenedChange] = useState(false);
  const { lang, languageSwitch } = useTranslate();

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
                  languageSwitchOpenedChange(false);
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
  font-size: 16px;
  letter-spacing: 2px;
  position: relative;
  user-select: none;
  & p {
    cursor: pointer;
  }
  & img {
    margin-left: 6px;
    height: 10px;
    width: auto;
    fill: ${(props) => props.theme.background};
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
  @media (max-width: 1096px) {
    margin-left: 0px;
    font-size: 20px;
    & img {
      filter: brightness(0) saturate(100%) invert(85%) sepia(19%) saturate(407%)
        hue-rotate(5deg) brightness(91%) contrast(92%);
    }
    & ul {
      left: 0;
    }
    & li {
      margin-top: 18px;
    }
  }
`;
