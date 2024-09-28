import "./App.css";
import Counter from "./components/Counter.jsx";

export default function App() {
  return (
    <div className="app">
      {/* Main heading for the Counter App */}
      <h1 className="app-heading">Counter App with Context API</h1>
      {/* Rendering the Counter component */}
      <Counter />
    </div>
  );
}
