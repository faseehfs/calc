import * as React from "react";

export default function Game({ setScene, gameMode }) {
  function goBack() {
    setScene(null);
  }

  return (
    <div>
      <h1>Game Mode: {gameMode}</h1>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
}
