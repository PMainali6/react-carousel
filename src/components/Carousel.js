import { useState, useEffect } from "react";

import CarouselItem from "./CarouselItem";
import Control from "./Contol";

export default function Carousel({ slides }) {
  const [autoSlide, setAutoSlide] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const prev = () => {
    setAutoSlide(false);

    const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    setCurrentSlide(index);

    setTimeout(() => setAutoSlide(true), 3000);
  };

  const next = () => {
    setAutoSlide(false);

    const index = currentSlide >= slides.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(index);

    setTimeout(() => setAutoSlide(true), 3000);
  };

  useEffect(() => {
    let slideInterval;
    if (autoSlide) {
      slideInterval = setInterval(() => {
        setCurrentSlide((currentSlide) =>
          currentSlide < slides.length - 1 ? currentSlide + 1 : 0
        );
      }, 3000);
    } else {
      clearInterval(slideInterval);
    }

    return () => clearInterval(slideInterval);
  }, [autoSlide, slides.length]);

  return (
    <div className="carousel">
      <div
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}
        className="carousel-inner"
      >
        {slides.map((slide, key) => (
          <CarouselItem slide={slide} key={key} />
        ))}
      </div>
      <Control prev={prev} next={next} />
    </div>
  );
}
