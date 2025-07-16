import React, { useState, useEffect, useRef } from 'react';
// 1. Importe o 'motion' e o 'AnimatePresence' do framer-motion
import { motion, AnimatePresence } from 'framer-motion';
import './Carousel.css';

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
    <div className="carousel">
      <button onClick={handlePrev} className="carousel-button prev-button">{"<"}</button>
      
      {/* 2. O AnimatePresence gerencia as animações de entrada e saída */}
      <AnimatePresence mode="wait">
        <motion.img
          // 3. A 'key' é MUITO importante. Ela diz ao React que a imagem mudou.
          key={currentIndex}
          src={images[currentIndex]}
          alt="Slide do carrossel"
          className="carousel-image"
          
          // 4. Define as animações
          initial={{ opacity: 0 }} // Estado inicial: invisível
          animate={{ opacity: 1 }} // Estado de animação: totalmente visível
          exit={{ opacity: 0 }}    // Estado de saída: invisível
          transition={{ duration: 0.8 }} // Duração da animação em segundos
        />
      </AnimatePresence>
      
      <button onClick={handleNext} className="carousel-button next-button">{">"}</button>
    </div>
  );
}

export default Carousel;