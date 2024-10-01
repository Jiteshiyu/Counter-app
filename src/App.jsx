import "./App.css";
import Counter from "./components/Counter.jsx";

export default function App() {
  return (
    // Counter App
    <div className="app">
      {/* App heading */}
      <h1 className="app-heading">Tallytide</h1>
      {/* Rendering the Counter component */}
      <Counter />
    </div>
  );
}
