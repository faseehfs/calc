import * as React from "react";
import "./Game.css";

export default function Game({ setScene, gameMode }) {
  var generateQAndA;

  if (gameMode === "times-table") {
    generateQAndA = () => {
      const num1 = Math.floor(Math.random() * 9 + 1);
      const num2 = Math.floor(Math.random() * 9 + 1);
      const question = `${num1} × ${num2}`;
      const answer = num1 * num2;
      return [question, answer];
    };
  } else if (gameMode === "addition") {
    generateQAndA = () => {
      const num1 = Math.floor(Math.random() * 90 + 1);
      const num2 = Math.floor(Math.random() * 9 + 1);
      const question = `${num1} + ${num2}`;
      const answer = num1 + num2;
      return [question, answer];
    };
  }

  const [currentQa, setCurrentQa] = React.useState(generateQAndA());
  const [typedAnswer, setTypedAnswer] = React.useState("");
  const [prevAnswer, setPrevAnswer] = React.useState("...");
  const [correct, setCorrect] = React.useState(null);
  const [noOfCorrect, setNoOfCorrect] = React.useState(0);
  const [noOfWrong, setNoOfWrong] = React.useState(0);

  function updateQa() {
    setCurrentQa(generateQAndA());
  }

  function goBack() {
    setScene("menu");
  }

  function validateAns(answer) {
    if (Number(answer) === currentQa[1]) {
      updateQa();
      return true;
    } else {
      return false;
    }
  }

  function handleKeyDown(e) {
    if (e.key >= "0" && e.key <= "9") {
      setTypedAnswer((prev) => {
        const newValue = prev + e.key;
        if (newValue.length === currentQa[1].toString().length) {
          if (validateAns(newValue)) {
            setCorrect(true);
            setNoOfCorrect((prev) => prev + 1);
          } else {
            setCorrect(false);
            setNoOfWrong((prev) => prev + 1);
          }
          setPrevAnswer(newValue);
          return "";
        } else {
          return newValue;
        }
      });
    } else if (e.key === "Backspace") {
      setTypedAnswer((prev) => prev.slice(0, -1));
    } else if (e.key === "Enter") {
      validateAns(typedAnswer);
    }
  }

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentQa, typedAnswer]);

  return (
    <div>
      {correct === true ? (
        <p className="success-color">Correct!</p>
      ) : correct === false ? (
        <p className="danger-color">Wrong!</p>
      ) : (
        <p>Type your answer</p>
      )}
      <h1>{currentQa[0]}</h1>
      <h3>{typedAnswer ? typedAnswer : "-"}</h3>
      <p>{prevAnswer}</p>
      <button onClick={goBack}>Go Back</button>

      <div className="hud">
        <p>
          Correct: <span className="success-color">{noOfCorrect}</span>
        </p>
        <p>
          Wrong: <span className="danger-color">{noOfWrong}</span>
        </p>
      </div>
    </div>
  );
}
