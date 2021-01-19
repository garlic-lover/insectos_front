import { useState } from "react";
import { useSprings, animated, interpolate } from "react-spring";
import styled from "styled-components";

import { useDrag } from "react-use-gesture";

import { to, from } from "./positionFunctions";

import SimpleCard from "./SimpleCard";

const testCards = [
  {
    title: "Fact 3",
    subTitle: "Insects contain a complete/whole protein",
    color: "#aee6e6",
  },
  { title: "Fact 2", subTitle: "They contain dietary fibre", color: "#ffda77" },
  {
    title: "Fact 1",
    subTitle: "Insects provide unsaturated fat and low-fat content",
    color: "#ffa45b",
  },
];

export default function Deck() {
  const [currentCard, currentCardChange] = useState(testCards.length - 1);
  const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out

  const [cards, set] = useSprings(testCards.length, (index) => ({
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
        currentCardChange(testCards.length - 1);
      }
    }
  );

  return (
    <Wrapper>
      {cards.map((props, i) => {
        const { title, subTitle, color } = testCards[i];
        return (
          <SimpleCard
            key={i}
            i={i}
            isTop={currentCard === i}
            style={props}
            title={title}
            subTitle={subTitle}
            color={color}
            bind={bind}
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
