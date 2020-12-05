import { v4 as uuid } from 'uuid';

const NUMBER_OF_ITEMS = 6;

const items = [];

for(let i=0; i<NUMBER_OF_ITEMS; i++) {
    items.push({ id: uuid() });
}

export default items;
