import { useContext } from "react";
import { CounterContext } from "../context/index.jsx";

export default function Controls() {
  const { increment, decrement, reset } = useContext(CounterContext);

  return (
    <div>
      {/* Button to increment the counter */}
      <button className="inc-btn btn" onClick={increment}>
        Increment
      </button>
      {/* Button to decrement the counter */}
      <button className="dec-btn btn" onClick={decrement}>
        Decrement
      </button>
      {/* Button to reset the counter */}
      <button className="reset-btn btn" onClick={reset}>
        Reset
      </button>
    </div>
  );
}
