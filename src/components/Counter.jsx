import Count from "./Count.jsx";
import Controls from "./Controls.jsx";
import CounterState from "../context/index.jsx";

export default function Counter() {
  return (
    <CounterState>
      <Count />
      <Controls />
    </CounterState>
  );
}
