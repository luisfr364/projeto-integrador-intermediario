import React, { useState, useEffect, useRef } from 'react';
import styles from './carousel.module.css';

import imagem1 from '/images/masculinos/perfume1.png';
import imagem2 from '/images/masculinos/perfume2.png';
import imagem3 from '/images/masculinos/perfume3.png';

const images = [imagem1, imagem2, imagem3];
const delay = 4000;

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const handlePrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className={styles.carousel}>
      <button
        onClick={handlePrev}
        className={`${styles.carouselButton} ${styles.prevButton}`}
      >
        ‹
      </button>
      <img
        key={currentIndex}
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className={styles.carouselImage}
        style={{ opacity: 0, transform: 'translateX(100px)' }}
        animate={{ opacity: 1, transform: 'translateX(0px)' }}
        exit={{ opacity: 0, transform: 'translateX(-100px)' }}
        transition={{ duration: 0.5 }}
      />
      <button
        onClick={handleNext}
        className={`${styles.carouselButton} ${styles.nextButton}`}
      >
        ›
      </button>
    </div>
  );
}

export default Carousel;
