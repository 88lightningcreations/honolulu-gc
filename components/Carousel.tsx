"use client";

import { useState } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './Carousel.module.css';

interface CarouselProps {
  items: {
    src: string;
    alt: string;
    title: string;
  }[];
}

const Carousel = ({ items }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === items.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className={styles.carouselContainer}>
      <button onClick={goToPrevious} className={`${styles.arrow} ${styles.leftArrow}`} aria-label="Previous Slide">
        <FaChevronLeft />
      </button>
      <div className={styles.slide}>
        <Image
          src={items[currentIndex].src}
          alt={items[currentIndex].alt}
          fill={true}
          style={{objectFit: 'cover'}}
          className={styles.image}
        />
        <div className={styles.caption}>
          <h3>{items[currentIndex].title}</h3>
        </div>
      </div>
      <button onClick={goToNext} className={`${styles.arrow} ${styles.rightArrow}`} aria-label="Next Slide">
        <FaChevronRight />
      </button>
      <div className={styles.dotsContainer}>
        {items.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${currentIndex === index ? styles.activeDot : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
