import React, { useState, useEffect } from "react";

import s from "../styled";
import { Card } from "./Card";

const Carousel = ({ vpSize, initialItems }) => {
  const [items, setItems] = useState(initialItems);
  const [selectedItem, setSelectedItem] = useState(0);

  const cardMargin = 12;

  const cardInnerWidth = vpSize.height * 0.3;
  const cardWidth = cardInnerWidth + 2 * cardMargin;
  const selectedCardInnerWidth = vpSize.height * 0.4;
  const selectedCardWidth = selectedCardInnerWidth + 2 * cardMargin;

  const offset =
    -(selectedItem * cardWidth) + vpSize.width / 2 - selectedCardWidth / 2;

  const handleClickCard = (e) =>
    setSelectedItem(parseInt(e.target.dataset.idx));

  const downHandler = (e) => {
    switch (e.keyCode) {
      case 37:
        if (selectedItem > 0) {
          setSelectedItem(selectedItem - 1);
        } else {
          setSelectedItem(0);
        }

        break;
      case 39:
        if (selectedItem < items.length || selectedItem !== items.length) {
          setSelectedItem(selectedItem + 1);
        } else {
          setSelectedItem(selectedItem);
        }

        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  }, [selectedItem]);

  const cards = items.map((item, idx) => {
    const isSelected = idx === selectedItem;
    const size = isSelected ? selectedCardInnerWidth : cardInnerWidth;

    return (
      <s.Card
        key={`card-${item.id}`}
        isSelected={isSelected}
        onClick={handleClickCard}
        animate={{ width: size, height: size }}
        transition={{ duration: 0.2, delay: 0.3 }}
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
        transition={{ duration: 0.4 }}
        cardWidth={cardWidth}
        selectedCardWidth={selectedCardWidth}
      >
        {items.map((item, idx) => (
          <Card
            item={items}
            cardInnerWidth={cardInnerWidth}
            cardMargin={cardMargin}
            handleClickCard={handleClickCard}
            idx={idx}
            image={item.img}
            selectedCardInnerWidth={selectedCardInnerWidth}
            selectedItem={selectedItem}
          />
        ))}
      </s.Slider>
    </s.Container>
  );
};

export default Carousel;
