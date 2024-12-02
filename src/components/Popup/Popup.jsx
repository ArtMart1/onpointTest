import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import PageNav from '../ui/PageNav/PageNav.jsx';
import Feature from '../ui/Feature/Feature.jsx';
import Subtitle from '../ui/Subtitle/Subtitle.jsx';
import Title from '../ui/Title/Title.jsx';

import { ITEMS_ON_PAGE, featuresData } from '../../utils/constants';

import closeBtn from '../../images/close-btn.svg';

import './Popup.css';

const Popup = ({
  next,
  prev,
  popup,
  page,
  pagesArray,
  closePopup,
}) => (
  <div className={`popup ${popup ? 'popup_visible' : ''}`}>
    <PageNav
      next={next}
      prev={prev}
      currentPage={page}
      pagesArray={pagesArray}
    />
    <img className="popup__close" src={closeBtn} alt="Крестик" onClick={closePopup}/>
    <Subtitle mod="popup__subtitle">Преимущества</Subtitle>
    <Title mod="popup__title">Brend<span>xy</span></Title>
    <ul className="popup__features">
      <TransitionGroup>
        {featuresData
          .filter(
            (_, index) => index > (page - 1) * ITEMS_ON_PAGE - 1
            && index < page * ITEMS_ON_PAGE,
          )
          .map((feature) => (
            <CSSTransition
              key={feature.id}
              timeout={500}
              classNames="feature"
            >
              <Feature number={feature.id} content={feature.text} />
            </CSSTransition>
          ))}
      </TransitionGroup>
    </ul>
  </div>
);

export default Popup;
