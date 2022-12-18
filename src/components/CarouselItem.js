export default function CarouselItem({ slide }) {
  return (
    <div className="carousel-item">
      <img src={slide} alt="some-pic" />
    </div>
  );
}
