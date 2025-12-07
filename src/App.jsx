import * as React from "react";
// In some editors, the above line might be greyed out, but it is essential.

import { createRoot } from "react-dom/client";

import Menu from "./components/Menu.jsx";
import Game from "./components/Game.jsx";

function App() {
  const [scene, setScene] = React.useState(null);
  const [gameMode, setGameMode] = React.useState(null);

  return (
    <div className="container">
      {scene === null ? (
        <Menu setScene={setScene} setGameMode={setGameMode} />
      ) : (
        <Game setScene={setScene} gameMode={gameMode} />
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
