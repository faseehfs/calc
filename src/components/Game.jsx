import * as React from "react";

export default function Game({ setScene }) {
  function goBack() {
    setScene(null);
  }

  return (
    <div>
      <h1>Game</h1>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
}
