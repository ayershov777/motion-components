import React from 'react';

import initialItems from '../utils/initialItems';

import Carousel from './Carousel';

const CarouselDemoPage = ({ vpSize }) => (
    <div style={{ overflowY: 'hidden' }}>
        <Carousel initialItems={initialItems} vpSize={vpSize} />
    </div>
);

export default CarouselDemoPage;
