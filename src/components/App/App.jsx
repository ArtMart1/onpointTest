import React, { useState, useCallback } from "react";

import Carousel from "../Carousel/Carousel.jsx";
import Home from "../Home/Home.jsx";
import Description from "../Description/Description.jsx";
import Features from "../Features/Features.jsx";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";

import "./App.css";

const App = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Возвращение на главный экран
  const navigateToHome = useCallback(() => {
    if (activeSlide !== 0) {
      setActiveSlide(0);
    }
  }, [activeSlide]);

  // Переход на второй экран
  const switchToSecondSlide = useCallback(() => {
    setActiveSlide(1);
  }, []);

  return (
    <div className="application-container">
      <Header goHome={navigateToHome} />
      <main>
        <Carousel slideIndex={activeSlide} changeSlideIndex={setActiveSlide}>
          <Home goToSecondSlide={switchToSecondSlide} />
          <Description slideIndex={activeSlide} />
          <Features />
        </Carousel>
      </main>
      <Footer />
    </div>
  );
};

export default App;
