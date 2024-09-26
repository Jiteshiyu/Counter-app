import { useContext } from "react";
import { CounterContext } from "../context/index.jsx";

export default function Count() {
  const { count } = useContext(CounterContext);

  return (
    <div>
      <h2 className="count">Current Count: {count}</h2>
    </div>
  );
}
