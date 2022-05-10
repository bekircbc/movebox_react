import { useState } from "react";
import "./App.scss";

function App() {
  const [xPosition, setXPosition] = useState("XCenter");
  const [yPosition, setYPosition] = useState("YCenter");
  return (
    <div className="App">
      <h2>Move an element left, right, center when button is pressed</h2>
      <div className="controls">
        <div className="row">
          <button className="up" onClick={() => setYPosition("Up")}>
            Up
          </button>
        </div>
        <div className="row">
          <button className="left" onClick={() => setXPosition("Left")}>
            Left
          </button>
          <button
            className="center"
            onClick={() => {
              setXPosition("XCenter");
              setYPosition("YCenter");
            }}
          >
            Center
          </button>
          <button className="right" onClick={() => setXPosition("Right")}>
            Right
          </button>
        </div>
        <div className="row">
          <button className="down" onClick={() => setYPosition("Down")}>
            Down
          </button>
        </div>

        <div className={`gameArea gameArea${xPosition} gameArea${yPosition}`}>
          <div className="box"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
