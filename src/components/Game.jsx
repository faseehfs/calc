import * as React from "react";

export default function Game({ setScene, gameMode }) {
  var generateQAndA;

  if (gameMode === "times-table") {
    generateQAndA = () => {
      const num1 = Math.floor(Math.random() * 10);
      const num2 = Math.floor(Math.random() * 10);
      const question = `${num1} × ${num2}`;
      const answer = num1 * num2;
      return [question, answer];
    };
  } else if (gameMode === "addition") {
    generateQAndA = () => {
      const num1 = Math.floor(Math.random() * 91);
      const num2 = Math.floor(Math.random() * 10);
      const question = `${num1} + ${num2}`;
      const answer = num1 + num2;
      return [question, answer];
    };
  }

  var [currentQa, setCurrentQa] = React.useState(generateQAndA());

  function updateQa() {
    setCurrentQa(generateQAndA());
  }

  function goBack() {
    setScene("menu");
  }

  return (
    <div>
      <h1>{currentQa[0]}</h1>
      <button onClick={updateQa}>New</button>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
}
