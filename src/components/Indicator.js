export default function Indicator({ slidesLength }) {
  function generateIndicator(slidesLength) {
    let item = [];

    for (let i = 0; i < slidesLength; i++) {
      item.push(<button className="indicator-item"></button>);
    }

    return item;
  }
  return <div className="indicator">{generateIndicator(slidesLength)}</div>;
}
