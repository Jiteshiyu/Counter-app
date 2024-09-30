import { useContext } from "react";
import { CounterContext } from "../context/index.jsx";

export default function Count() {
  // Access the count value from the CounterContext
  const { count } = useContext(CounterContext);

  return (
    <div>
      {/* Display the current count in an h2 element */}
      <h2 className="count">{count}</h2>
    </div>
  );
}
