import * as React from "react";

export default function Menu() {
  return (
    <div className="vbox" style={{ maxWidth: "28rem" }}>
      <h1 style={{ margin: "0 0 2rem 0" }}>Let's Start Training!</h1>
      <div className={`vbox`} style={{ maxWidth: "16rem" }}>
        <button>Times Table</button>
        <button>Addition</button>
        <button>Both</button>
      </div>
    </div>
  );
}
