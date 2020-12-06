import React, { useState, useEffect, useRef } from "react";

import s from "../styled";

const Carousel = ({ vpSize, initialItems }) => {
  const [items, setItems] = useState(initialItems);
  const [selectedItem, setSelectedItem] = useState(0);

  const prevVpHeightRef = useRef();

  useEffect(() => {
    prevVpHeightRef.current = vpSize.height;
  });

  const prevVpHeight = prevVpHeightRef.current;
  const shouldAnimate = prevVpHeight ? (vpSize.height === prevVpHeight) : true;

  const cardMargin = 12;

  const cardInnerWidth = vpSize.height * 0.3;
  const cardWidth = cardInnerWidth + 2 * cardMargin;
  const selectedCardInnerWidth = vpSize.height * 0.4;
  const selectedCardWidth = selectedCardInnerWidth + 2 * cardMargin;

  const offset = -(selectedItem * cardWidth) + vpSize.width / 2 - selectedCardWidth / 2;

  const handleClickCard = (e) => setSelectedItem(parseInt(e.target.dataset.idx));

  const cards = items.map((item, idx) => {
    const isSelected = idx === selectedItem;
    const size = isSelected ? selectedCardInnerWidth : cardInnerWidth;

    return (
      <s.Card
        key={`card-${item.id}`}
        isSelected={isSelected}
        onClick={handleClickCard}
        animate={{ width: size, height: size }}
        transition={shouldAnimate ? { duration: 0.2, delay: 0.3 } : { duration: 0.2 }}
        cardMargin={cardMargin}
        cardInnerWidth={cardInnerWidth}
        data-idx={idx}
      />
    );
  });

  return (
    <s.Container>
      <s.Slider
        n={items.length}
        animate={{ x: offset }}
        transition={shouldAnimate ? { duration: 0.4 } : { duration: 0.2 }}
        cardWidth={cardWidth}
        selectedCardWidth={selectedCardWidth}
      >
        {cards}
      </s.Slider>
    </s.Container>
  );
};

export default Carousel;
