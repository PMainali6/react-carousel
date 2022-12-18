export default function CarouselItem({ slide, stopSlide, startSlide }) {
  return (
    <div
      className="carousel-item"
      onMouseEnter={stopSlide}
      onMouseLeave={startSlide}
    >
      <img src={slide} alt="some-pic" />
    </div>
  );
}
