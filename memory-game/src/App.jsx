import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  const items = ["ð", "ðĨđ", "ðĪŠ", "ðĪĒ", "ðŧ", "ð", "ðð―", "ð"];

  return (
    <div className="App">
      {items.map((emoji, i) => (
        <Card key={i} emoji={emoji} />
      ))}
    </div>
  );
}

export default App;
