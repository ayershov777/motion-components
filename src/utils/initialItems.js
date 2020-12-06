import { v4 as uuid } from "uuid";

import ghost from "../img/_ghost.jpg";
import lego from "../img/_lego.jpeg";
import spiderman from "../img/_spiderman.jpg";
import uncharted from "../img/_uncharted.jpg";
import squad from "../img/_squad.jpg";
import jedi from "../img/_jedi.jpg";
import jedi_01 from "../img/_jedi_01.jpeg";
import gta from "../img/_gta.jpg";
import horizon from "../img/_horizon.jpg";

const IMAGES = [
  ghost,
  gta,
  horizon,
  jedi,
  jedi_01,
  lego,
  spiderman,
  squad,
  uncharted,
];
const NUMBER_OF_ITEMS = 9;

const items = [];

for (let i = 0; i < NUMBER_OF_ITEMS; i++) {
  items.push({ id: uuid(), img: IMAGES[i] });
}

export default items;
