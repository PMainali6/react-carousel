import { useState, useEffect, useRef } from "react";

import CarouselItem from "./CarouselItem";
import Control from "./Contol";
import Indicator from "./Indicator";

export default function Carousel({ slides }) {
  const slideInterval = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  const prev = () => {
    stopSlide();
    const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    setCurrentSlide(index);
    startSlide();
  };

  const next = () => {
    stopSlide();
    const index = currentSlide >= slides.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(index);
    startSlide();
  };

  const startSlide = () => {
    stopSlide();
    slideInterval.current = setInterval(() => {
      setCurrentSlide((currentSlide) =>
        currentSlide < slides.length - 1 ? currentSlide + 1 : 0
      );
    }, 3000);
  };

  const stopSlide = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  useEffect(() => {
    startSlide();
    return () => stopSlide();
  }, []);

  return (
    <div className="carousel">
      <div
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}
        className="carousel-inner"
      >
        {slides.map((slide, key) => (
          <CarouselItem
            slide={slide}
            key={key}
            stopSlide={stopSlide}
            startSlide={startSlide}
          />
        ))}
      </div>
      <Control prev={prev} next={next} />

      <Indicator slidesLength={slides.length} />
    </div>
  );
}
