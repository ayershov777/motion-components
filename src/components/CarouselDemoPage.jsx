import React from 'react';

import initialItems from '../utils/initialItems';

import Carousel from './Carousel';

const CarouselDemoPage = ({ vpWidth }) => (
    <div style={{ overflowY: 'hidden' }}>
        <Carousel initialItems={initialItems} vpWidth={vpWidth} />
    </div>
);

export default CarouselDemoPage;
