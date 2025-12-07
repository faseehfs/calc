import * as React from "react";

export default function Menu({ setScene, setGameMode }) {
  function timesTable() {
    setGameMode("times-table");
    setScene("game");
  }

  function addition() {
    setGameMode("addition");
    setScene("game");
  }

  return (
    <div className="vbox" style={{ maxWidth: "28rem" }}>
      <h1 style={{ margin: "0 0 2rem 0" }}>Let's Start Training!</h1>
      <div className={`vbox`} style={{ maxWidth: "16rem" }}>
        <button onClick={timesTable}>Times Table</button>
        <button onClick={addition}>Addition</button>
      </div>
    </div>
  );
}
