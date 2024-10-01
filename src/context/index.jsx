import { createContext, useState } from "react";

 // Create a context for the counter
export const CounterContext = createContext(null);

export default function CounterState({ children }) {
  // State to hold the count value
  const [count, setCount] = useState(0);

  // Functions to modify the count
  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const square = () => setCount((prevCount) => prevCount ** 2);
  const reset = () => setCount(0);

  return (
    <CounterContext.Provider value={{ count, increment, decrement, reset, square }}>
      {children} {/* Return state context */}
    </CounterContext.Provider>
  );
}
