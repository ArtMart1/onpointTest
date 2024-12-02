import React, { memo } from "react";

import Button from "../ui/Button/Button.jsx";

import sphereImage from "../../images/sphere.png";
import thornSphereImage from "../../images/virus.png";
import largeSphereImage from "../../images/sphere-big.png";
import spermImage from "../../images/pink-sperm.png";
import arrowIcon from "../../images/right-arrow.svg";

import "./Home.css";

const Home = ({ goToSecondSlide }) => (
  <section className="home-page">
    <div className="home-page__content">
      <p className="home-page__intro-text">Привет,</p>
      <h1 className="home-page__title">
        Это <span>не</span>
        <br />
        коммерческое
        <br /> задание
      </h1>
      <img className="home-page__sperm-img" src={spermImage} alt="Pink sperm" />
      <Button handler={goToSecondSlide} icon={arrowIcon} isAbsolute>
        Что дальше?
      </Button>
    </div>
    <img
      className="home-page__sphere home-page__sphere_bottom"
      src={sphereImage}
      alt="Blue sphere"
    />
    <img
      className="home-page__sphere home-page__sphere_top"
      src={sphereImage}
      alt="Blue sphere"
    />
    <img
      className="home-page__thorn-sphere"
      src={thornSphereImage}
      alt="Virus"
    />
    <img
      className="home-page__large-sphere"
      src={largeSphereImage}
      alt="Large sphere"
    />
  </section>
);

export default memo(Home);
