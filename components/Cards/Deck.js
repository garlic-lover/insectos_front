import { useState } from "react";
import { useSprings } from "react-spring";
import styled from "styled-components";

import { useDrag } from "react-use-gesture";

import { to, from } from "./positionFunctions";

import SimpleCard from "./SimpleCard";

const backgroundColors = [
  "rgba(121, 147, 82)",
  "#d7c79e",
  "#9dab86",
  "#a35638",
];

const langageRanges = {
  es: { start: 1, end: 2 },
  fr: { start: 3, end: 4 },
  en: { start: 5, end: 6 },
};

export default function Deck({ facts, t, lang }) {
  const [currentCard, currentCardChange] = useState(facts.length - 1);
  const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out

  const [cards, set] = useSprings(facts.length, (index) => ({
    ...to(index),
    from: from(index),
    // config: { friction: 1 },
  }));

  const bind = useDrag(
    ({ args: [index], down, delta: [xDelta], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2; // If you flick hard enough it should trigger the card to fly out
      const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
      if (!down && trigger) {
        gone.add(index);
        currentCardChange(index - 1);
      } // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      const isGone = gone.has(index);
      set((i) => {
        if (index !== i) return; // We're only interested in changing spring-data for the current spring
        const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
        const scale = down ? 1.1 : 1; // Active cards lift up a bit
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!down && gone.size === cards.length) {
        setTimeout(() => gone.clear() || set((i) => to(i)), 600);
        currentCardChange(facts.length - 1);
      }
    }
  );

  return (
    <Wrapper>
      {cards.map((props, i) => {
        return (
          <SimpleCard
            key={i}
            i={i}
            isTop={currentCard === i}
            style={props}
            title={facts[i][langageRanges[lang].start]}
            subTitle={facts[i][langageRanges[lang].end]}
            source={facts[i][0]}
            backColor={backgroundColors[i % 4]}
            color={
              backgroundColors[i % 4] === "#a35638" ? "#d7c79e" : "#a35638"
            }
            bind={bind}
            t={t}
          />
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 500px;
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;
