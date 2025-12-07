import * as React from "react";
// In some editors, the above line might be greyed out, but it is essential.

import { createRoot } from "react-dom/client";

import Menu from "./components/Menu.jsx";
import Game from "./components/Game.jsx";

function App() {
  const [scene, setScene] = React.useState("menu");
  const [gameMode, setGameMode] = React.useState(null);

  const scenes = {
    menu: <Menu setScene={setScene} setGameMode={setGameMode} />,
    game: <Game setScene={setScene} gameMode={gameMode} />,
  };

  return <div className="container">{scenes[scene]}</div>;
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
