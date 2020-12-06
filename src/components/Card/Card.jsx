import s from "../../styled";
import { ErrorBoundary } from "../ErrorBoundary";

/* card : resizeable & reactive to mouse positions */
const Card = ({
  item,
  idx,
  selectedItem,
  handleClickCard,
  cardInnerWidth,
  cardMargin,
  selectedCardInnerWidth,
}) => {
  const isSelected = idx === selectedItem;
  const size = isSelected ? selectedCardInnerWidth : cardInnerWidth;

  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
};

export default Card;
