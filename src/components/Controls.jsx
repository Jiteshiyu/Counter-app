import { useContext } from "react";
import { CounterContext } from "../context/index.jsx";

export default function Controls() {
  const { increment, decrement, reset, square } = useContext(CounterContext);

  return (
    <div>
      {/* Button to increment the counter */}
      <button className="inc-btn btn" onClick={increment}>
        Up
      </button>
      {/* Button to decrement the counter */}
      <button className="dec-btn btn" onClick={decrement}>
        Down
      </button>
      {/* Button to reset the counter */}
      <button className="reset-btn btn" onClick={reset}>
        Reset
      </button>
    </div>
    <div>
      <button className="sq-btn btn" onClick={square}>
        Get Square
      </button>
    </div>
  );
}
