import React, { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = ({ children, slideIndex, changeSlideIndex }) => {
  const [startPosition, setStartPosition] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    // Обновляем длину, если изменилось количество элементов
    if (children) {
      setStartPosition(null); // Сбрасываем начальную позицию на случай изменения содержимого
    }
  }, [children]);

  const goToNextSlide = () => {
    if (slideIndex < children.length - 1) {
      changeSlideIndex((prev) => prev + 1);
    }
  };

  const goToPrevSlide = () => {
    if (slideIndex > 0) {
      changeSlideIndex((prev) => prev - 1);
    }
  };

  const handleStartMove = (e) => {
    setStartPosition(e.touches ? e.touches[0].clientX : e.clientX);
    setIsDragging(true);
  };

  const handleEndMove = (e) => {
    if (!isDragging || startPosition === null) return;

    const currentPosition = e.changedTouches
      ? e.changedTouches[0].clientX
      : e.clientX;
    const diff = startPosition - currentPosition;

    if (Math.abs(diff) > 20) {
      diff > 0 ? goToNextSlide() : goToPrevSlide();
    }

    setStartPosition(null);
    setIsDragging(false);
  };

  const handleMouseLeave = (e) => {
    // Если пользователь уходит за пределы окна
    if (isDragging) {
      handleEndMove(e);
    }
  };

  return (
    <div
      className="carousel"
      onMouseLeave={handleMouseLeave} // Завершаем перетаскивание, если курсор уходит за пределы
    >
      <div
        className="carousel__window"
        onTouchStart={handleStartMove}
        onTouchEnd={handleEndMove}
        onMouseDown={handleStartMove}
        onMouseUp={handleEndMove}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="carousel__content-container"
          style={{
            transform: `translateX(-${slideIndex * 100}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
