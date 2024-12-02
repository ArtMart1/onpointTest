import React from 'react';

import arrow from '../../../images/arrow.svg';

import './PageNav.css';

const PageNav = ({
  next,
  prev,
  currentPage,
  pagesArray,
}) => (
  <div className="page-nav">
    <img
      className="page-nav__arrow page-nav__arrow_type_left"
      onClick={prev}
      src={arrow}
      alt="Левая стрелка"
    />
    {pagesArray.map((item) => (
      <div
        className={`page-nav__dot ${item === currentPage ? 'page-nav__dot_active' : ''}`}
        key={item} />
    ))}
    <img
      className="page-nav__arrow page-nav__arrow_type_right"
      onClick={next}
      src={arrow}
      alt="Правая стрелка"
    />
  </div>
);

export default PageNav;
