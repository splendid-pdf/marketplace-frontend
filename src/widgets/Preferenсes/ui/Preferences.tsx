import Box from "@mui/material/Box";
import "./style.css";
import { Card } from "shared/ui/ProductCard/Card";

import pref1 from "../../../shared/images/preferences/pref1.png";
import pref2 from "../../../shared/images/preferences/pref2.png";
import pref3 from "../../../shared/images/preferences/pref3.png";
import pref4 from "../../../shared/images/preferences/pref4.png";
import pref5 from "../../../shared/images/preferences/pref5.png";
import pref6 from "../../../shared/images/preferences/pref6.png";
import pref7 from "../../../shared/images/preferences/pref7.png";
import pref8 from "../../../shared/images/preferences/pref8.png";
import pref9 from "../../../shared/images/preferences/pref9.png";
import pref10 from "../../../shared/images/preferences/pref10.png";
import pref11 from "../../../shared/images/preferences/pref11.png";
import pref12 from "../../../shared/images/preferences/pref12.png";

import "../../../shared/fonts/Manrope/static/Manrope-Bold.ttf";

const test = [
  {
    image: pref1,
    price: "17260",
    title: "Le Klint / Настольная лампа LED",
  },
  {
    image: pref2,
    price: "98500",
    title: "Ecco Moco / Прямой диван Грин",
  },
  {
    image: pref3,
    price: "59990",
    title: "Ecco Moco / Модульный диван Элемент",
  },
  {
    image: pref4,
    price: "20130",
    title:
      "ЭкоСтайлИт / Стул из натурального светлого дерева с мягким сидением",
  },
];

const test2 = [
  {
    image: pref5,
    price: "17260",
    title: "Le Klint / Настольная лампа LED",
  },
  {
    image: pref6,
    price: "98500",
    title: "Ecco Moco / Прямой диван Грин",
  },
  {
    image: pref7,
    price: "59990",
    title: "Ecco Moco / Модульный диван Элемент",
  },
  {
    image: pref8,
    price: "20130",
    title:
      "ЭкоСтайлИт / Стул из натурального светлого дерева с мягким сидением",
  },
];

const test3 = [
  {
    image: pref9,
    price: "17260",
    title: "Le Klint / Настольная лампа LED",
  },
  {
    image: pref10,
    price: "98500",
    title: "Ecco Moco / Прямой диван Грин",
  },
  {
    image: pref11,
    price: "59990",
    title: "Ecco Moco / Модульный диван Элемент",
  },
  {
    image: pref12,
    price: "20130",
    title:
      "ЭкоСтайлИт / Стул из натурального светлого дерева с мягким сидением",
  },
];

export const Preferences = () => {
  return (
    <div className={"content" + " " + "container"}>
      <div className="preferences-container">
        <div className="titles">
          <h1>Вам может понравиться</h1>
          <a className="watch-all" href="#">
            Смотреть всё
          </a>
        </div>
        <Box sx={{ width: 1 }}>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3.75}>
            <Box gridColumn="span 12">
              <div className="card-wrapper">
                {test.map((item, index) => (
                  <Card obj={item} key={index} />
                ))}
              </div>
            </Box>
            <Box gridColumn="span 12">
              <div className="card-wrapper">
                {test2.map((item, index) => (
                  <Card obj={item} key={index} />
                ))}
              </div>
            </Box>
            <Box gridColumn="span 12">
              <div className="card-wrapper">
                {test3.map((item, index) => (
                  <Card obj={item} key={index} />
                ))}
              </div>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};
