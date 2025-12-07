import * as React from "react";
// In some editors, the above line might be greyed out, but it is essential.

import { createRoot } from "react-dom/client";

import Menu from "./components/Menu.jsx";
import Game from "./components/Game.jsx";

function App() {
  const [scene, setScene] = React.useState(null);

  return (
    <div className="container">
      {scene === null ? (
        <Menu setScene={setScene} />
      ) : (
        <Game setScene={setScene} />
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
