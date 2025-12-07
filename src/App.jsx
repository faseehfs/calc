import * as React from "react";
// In some editors, the above line might be greyed out, but it is essential.

import { createRoot } from "react-dom/client";

import Menu from "./components/Menu.jsx";

function App() {
  return (
    <div className="container">
      <h1 style={{ margin: "0 0 2rem 0" }}>Let's Start Training!</h1>
      <Menu />
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
