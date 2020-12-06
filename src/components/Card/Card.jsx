import s from "../../styled";
import { ErrorBoundary } from "../ErrorBoundary";
import React, { useEffect, useRef, useState } from "react";
import image from "../../img/_lego.jpeg";

/**
 * Card component with parallax animation
 * @param item
 * @param idx
 * @param selectedItem
 * @param handleClickCard
 * @param cardInnerWidth
 * @param cardMargin
 * @param selectedCardInnerWidth
 * @returns {JSX.Element}
 * @constructor
 */
const Card = ({
  item,
  idx,
  selectedItem,
  handleClickCard,
  cardInnerWidth,
  cardMargin,
  selectedCardInnerWidth,
}) => {
  let mouseLeaveDelay;
  const isSelected = idx === selectedItem;
  const size = isSelected ? selectedCardInnerWidth : cardInnerWidth;

  /* dom references */
  const cardRef = useRef(null);

  const cardBgRef = useRef(null);

  /* mouse X & Y positions */
  const [mouse, setMouseXY] = useState({ X: 0, Y: 0 });

  /* width & height of dom elements */
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  /* angles */
  const [angle, setAngle] = useState({ X: 0, Y: 0 });

  /* position X & position Y */

  const [position, setPosition] = useState({ X: 0, Y: 0 });

  /* get current height and width of card */
  useEffect(() => {
    setDimensions({
      width: cardRef.current.clientWidth,
      height: cardRef.current.clientHeight,
    });
  }, [cardRef]);

  /* mouse out event */
  const mouseOut = () => {
    setPosition({ X: 0, Y: 0 });
    setAngle({ X: 0, Y: 0 });
  };

  /* mouse move event */
  const mouseMove = (e) => {
    const xValue = e.pageX - cardRef.current.clientWidth - dimensions.width / 2;
    const yValue =
      e.pageY - cardRef.current.clientHeight - dimensions.height / 2;
    setMouseXY({ X: xValue, Y: yValue });

    // parallax angle in card
    const xAngle = (mouse.X / dimensions.width) * 30;
    const yAngle = (mouse.Y / dimensions.height) * -30;
    setAngle({ X: xAngle, Y: yAngle });

    // parallax position of background in card
    const xPos = (mouse.x / dimensions.width) * -40;
    const yPos = (mouse.y / dimensions.height) * -40;
    setPosition({ X: xPos, Y: yPos });
  };

  /* return card to  fla =t position */
  const mouseLeave = () => {
    mouseLeaveDelay = setTimeout(() => mouseOut(), 1000);
  };

  const mouseEnter = () => {
    clearTimeout(mouseLeaveDelay);
  };

  /* translation of angle */
  const translate = (X, Y) => `translateX(${X}px) translateY(${Y}px)`;

  /* transform of position */
  const rotation = (X, Y) => `rotateY(${X}deg) rotateX(${Y}deg)`;

  /* card unique id */
  const key = (id) => `card-${id}`;

  return (
    <ErrorBoundary>
      <s.CardWrap onMouseLeave={mouseLeave} onMouseEnter={mouseEnter}>
        <s.Card
          key={key(item.id)}
          ref={cardRef}
          data-idx={idx}
          isSelected={isSelected}
          animate={{ width: size, height: size }}
          transition={{ duration: 0.2, delay: 0.3 }}
          cardMargin={cardMargin}
          cardInnerWidth={cardInnerWidth}
          onClick={handleClickCard}
          onMouseMove={mouseMove}
          onMouseLeave={mouseLeave}
          onMouseEnter={mouseEnter}
          style={{ transform: rotation(angle.X, angle.Y) }}
        >
          <s.CardBg
            ref={cardBgRef}
            onMouseMove={mouseMove}
            onMouseLeave={mouseLeave}
            onMouseEnter={mouseEnter}
            style={{
              backgroundImage: `url(${image})`,
              transform: translate(position.X, position.Y),
            }}
          />
          <s.CardInfo>
            <h3 className="cardTitle">Mathematics</h3>
            <p>A subject which .... Well Maths!</p>
          </s.CardInfo>
        </s.Card>
      </s.CardWrap>
    </ErrorBoundary>
  );
};

export default Card;
