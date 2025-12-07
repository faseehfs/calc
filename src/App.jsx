import * as React from "react";
import { createRoot } from "react-dom/client";

function Menu() {
  return (
    <div className="vbox" style={{ width: "16rem" }}>
      <button>Times Table</button>
      <button>Addition</button>
      <button>Both</button>
    </div>
  );
}

function App() {
  return (
    <>
      <h1 style={{ margin: "0 0 2rem 0" }}>Let's Start Training!</h1>
      <Menu></Menu>
    </>
  );
}

const root = createRoot(document.body);
root.render(<App />);
