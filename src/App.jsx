import { useState } from "react";
import "./App.scss";

function App() {
  const [position, setPosition] = useState("Center");
  return (
    <div className="App">
      <h2>Move an element left, right, center when button is pressed</h2>
      <div className="controls">
        <button className="left" onClick={() => setPosition("Left")}>
          Left
        </button>
        <button className="center" onClick={() => setPosition("Center")}>
          Center
        </button>
        <button className="right" onClick={() => setPosition("Right")}>
          Right
        </button>
        <div className={`gameArea gameArea${position}`}>
          <div className="box"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
