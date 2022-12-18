export default function Control({ prev, next }) {
  return (
    <div>
      <button onClick={prev} className="button left">
        Prev
      </button>
      <button onClick={next} className="button right">
        Next
      </button>
    </div>
  );
}
