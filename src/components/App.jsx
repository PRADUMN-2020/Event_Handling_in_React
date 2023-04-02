import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  function changeHeading() {
    setHeadingText("Submitted");
  }

  const [isMouseOver, setMouseOver] = useState(false);
  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={changeHeading}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
