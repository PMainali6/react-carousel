import Carousel from "./components/Carousel";
import "./styles.css";

const slides = [
  "https://picsum.photos/id/1033/900/400",
  "https://picsum.photos/id/1036/900/400",
  "https://picsum.photos/id/1035/900/400"
];

export default function App() {
  return (
    <div className="container">
      <Carousel slides={slides} />
    </div>
  );
}
