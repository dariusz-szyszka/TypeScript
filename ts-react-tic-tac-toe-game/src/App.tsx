import React, { useEffect, useState } from "react";
import "./App.css";
import Board from "./components/Board";
import EndGame from "./components/EndGame";
import Results from "./components/Results";
import StartGame from "./components/StartGame";
import Turn from "./components/Turn";

const App: React.FC = () => {
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);
  const [isPlayer1Move, setIsPlayer1Move] = useState<boolean>(true);
  const [isGameEnded, setIsGameEnded] = useState<boolean>(false);
  const [currentFilling, setCurrentFilling] = useState<number[]>([
    0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [winner, setWinner] = useState<number>(0);

  const handleStartGame = () => {
    setWinner(0);
    setCurrentFilling([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    setIsPlayer1Move(true);
    setIsGameEnded(false);
    setIsGameStarted(true);
    document.querySelector(".board")?.classList.add("visible");
    document.querySelector(".start-btn")?.classList.add("disable");
    document.querySelectorAll(".field-btn").forEach((field) => {
      field.classList.add("enable");
    });
    document.querySelector(".the-end")?.classList.remove("visible");
    document.querySelector(".turn")?.classList.remove("visible");
    document.querySelector(".results")?.classList.remove("visible");
  };

  useEffect(() => {
    if (!currentFilling.includes(0) || winner !== 0) {
      setIsGameEnded(true);
      document.querySelectorAll(".field-btn").forEach((field) => {
        field.classList.remove("enable");
      });
      document.querySelector(".board")?.classList.remove("visible");
    }
  }, [currentFilling, winner]);

  return (
    <div className="App">
      <h1 className="title">Tic Tac Toe</h1>
      <Board
        isGameStarted={isGameStarted}
        isPlayer1Move={isPlayer1Move}
        setIsPlayer1Move={setIsPlayer1Move}
        currentFilling={currentFilling}
        setCurrentFilling={setCurrentFilling}
      />
      <StartGame handleStartGame={handleStartGame} />
      <Turn
        isGameStarted={isGameStarted}
        isPlayer1Move={isPlayer1Move}
        isGameEnded={isGameEnded}
      />
      <Results
        isGameEnded={isGameEnded}
        currentFilling={currentFilling}
        winner={winner}
        setWinner={setWinner}
      />
      <EndGame isGameEnded={isGameEnded} handleStartGame={handleStartGame} />
    </div>
  );
};

export default App;
