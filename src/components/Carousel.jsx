import React, { useState, useEffect } from 'react';

import s from '../styled';
import cardWidth from '../utils/cardWidth';

const Carousel = ({ initialItems, vpWidth }) => {
    const [items, setItems] = useState(initialItems);
    const [selectedItem, setSelectedItem] = useState(0);

    const offset = -(selectedItem * cardWidth) + vpWidth/2 - cardWidth/2;

    const handleClickCard = (e) => setSelectedItem(parseInt(e.target.dataset.idx));

    const cards = items.map((item, idx) => {
        const isSelected = idx === selectedItem;

        return (
            <s.Card
                key={`card-${item.id}`}
                isSelected={isSelected}
                onClick={handleClickCard}
                data-idx={idx}
                animate={{
                    width: isSelected ? 600 : 500,
                    height: isSelected ? 600 : 500
                }}
                transition={{
                    duration: 0.2,
                    delay: 0.3
                }}
            />
        );
    });

    return (
        <s.Container>
            <s.Slider
                n={items.length}
                animate={{ x: offset }}
                transition={{ duration: 0.4 }}
            >
                {cards}
            </s.Slider>
        </s.Container>
    );
};

export default Carousel;
