import { useContext } from "react";
import { CounterContext } from "../context/index.jsx";

export default function Controls() {
  const { increment, decrement, reset } = useContext(CounterContext);

  return (
    <div>
      <button className="inc-btn btn" onClick={increment}>
        Increment
      </button>
      <button className="dec-btn btn" onClick={decrement}>
        Decrement
      </button>
      <button className="reset-btn btn" onClick={reset}>
        Reset
      </button>
    </div>
  );
}
