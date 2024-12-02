import React, { useState } from "react";

import Button from "../ui/Button/Button.jsx";
import Title from "../ui/Title/Title.jsx";
import Subtitle from "../ui/Subtitle/Subtitle.jsx";
import Popup from "../Popup/Popup.jsx";
import Mosaic from "../ui/Mosaic/Mosaic.jsx";

import getTotalPage from "../../utils/pages";
import { ITEMS_ON_PAGE, featuresData } from "../../utils/constants";

import calendar from "../../images/calendar.png";
import plate from "../../images/plate.png";
import plus from "../../images/plus.svg";
import bottle from "../../images/bottle.png";
import bubble1 from "../../images/bubble1.png";
import bubble2 from "../../images/bubble2.png";
import bubble3 from "../../images/bubble3.png";
import bubble4 from "../../images/bubble4.png";
import bubble5 from "../../images/bubble5.png";
import bubble6 from "../../images/bubble6.png";
import bubble7 from "../../images/bubble7.png";
import bubble8 from "../../images/bubble8.png";

import "./Features.css";

const bubblesData = [
  { id: 1, file: bubble1 },
  { id: 2, file: bubble2 },
  { id: 3, file: bubble3 },
  { id: 4, file: bubble4 },
  { id: 5, file: bubble5 },
  { id: 6, file: bubble6 },
  { id: 7, file: bubble7 },
  { id: 8, file: bubble8 },
];

const Features = () => {
  const [page, setPage] = useState(1);
  const [popup, setPopup] = useState(false);
  const pagesArray = [];
  const totalPages = getTotalPage(featuresData.length, ITEMS_ON_PAGE);

  for (let i = 0; i < totalPages; i += 1) {
    pagesArray.push(i + 1);
  }

  const goToNextPage = () => {
    if (featuresData.length > page * ITEMS_ON_PAGE) {
      setPage((prevState) => prevState + 1);
    }
  };

  const goToPrevPage = () => {
    if (page !== 1) {
      setPage((prevState) => prevState - 1);
    }
  };

  const openPopup = () => setPopup(true);
  const closePopup = () => setPopup(false);

  return (
    <section className="features">
      <div className="features__container">
        <Subtitle mod="features__subtitle">Ключевое сообщение</Subtitle>
        <Title mod="features__title">
          Brend<span>xy</span>
        </Title>
        <div className="features__mosaics">
          <Mosaic isStreched>
            Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus vestibulum
            lorem sed risus ultricies
            <img className="mosaic__image " src={plate} alt="Тарелка" />
          </Mosaic>
          <div className="features__column">
            <Mosaic>
              A arcu cursus vitae
              <img className="mosaic__image" src={calendar} alt="Календарь" />
            </Mosaic>
            <Button handler={openPopup} icon={plus}>
              Подробнее
            </Button>
          </div>
        </div>
        <Popup
          next={goToNextPage}
          prev={goToPrevPage}
          popup={popup}
          page={page}
          pagesArray={pagesArray}
          closePopup={closePopup}
        />
        <img className="features__bottle" src={bottle} alt="Флакон" />
        {bubblesData.map((bubble) => (
          <img
            className={`features__bubble features__bubble_type_${bubble.id}`}
            key={bubble.id}
            src={bubble.file}
            alt="Пузырь"
          />
        ))}
      </div>
      <div
        className={`features__overlay ${
          popup ? "features__overlay_type_visible" : ""
        }`}
      ></div>
    </section>
  );
};

export default Features;
