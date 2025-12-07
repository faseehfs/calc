import * as React from "react";

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
      const num1 = Math.floor(Math.random() * 91);
      const num2 = Math.floor(Math.random() * 10);
      const question = `${num1} + ${num2}`;
      const answer = num1 + num2;
      return [question, answer];
    };
  }

  const [currentQa, setCurrentQa] = React.useState(generateQAndA());
  const [typedAnswer, setTypedAnswer] = React.useState("");
  const [prevAnswer, setPrevAnswer] = React.useState("");

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
          if (!validateAns(newValue)) {
            alert("Wrong!");
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
      <h1>{currentQa[0]}</h1>
      <h3>{typedAnswer ? typedAnswer : "-"}</h3>
      <p>{prevAnswer}</p>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
}
