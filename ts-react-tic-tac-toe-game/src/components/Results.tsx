import React, { useEffect } from "react";
import "./styles.css";

type Props = {
  isGameEnded: boolean;
  currentFilling: number[];
  winner: number;
  setWinner: React.Dispatch<React.SetStateAction<number>>;
};

const Results: React.FC<Props> = ({ isGameEnded, currentFilling, winner, setWinner }) => {

  useEffect(() => {
    const checkWinner = (playerNumber: number) => {
      const winConditions: boolean[] = [
        (currentFilling[0] === playerNumber && currentFilling[1] === playerNumber && currentFilling[2] === playerNumber) ||
        (currentFilling[3] === playerNumber && currentFilling[4] === playerNumber && currentFilling[5] === playerNumber) ||
        (currentFilling[6] === playerNumber && currentFilling[7] === playerNumber && currentFilling[8] === playerNumber) ||
        (currentFilling[0] === playerNumber && currentFilling[3] === playerNumber && currentFilling[6] === playerNumber) ||
        (currentFilling[1] === playerNumber && currentFilling[4] === playerNumber && currentFilling[7] === playerNumber) ||
        (currentFilling[2] === playerNumber && currentFilling[5] === playerNumber && currentFilling[8] === playerNumber) ||
        (currentFilling[0] === playerNumber && currentFilling[4] === playerNumber && currentFilling[8] === playerNumber) ||
        (currentFilling[2] === playerNumber && currentFilling[4] === playerNumber && currentFilling[6] === playerNumber)
      ];
      winConditions.map(condition => condition === true && winner === 0 && setWinner(playerNumber))
    }
    checkWinner(1)
    checkWinner(2)
  }, [currentFilling, winner, setWinner])

  return (
    <div className={`results ${isGameEnded && "visible"}`}>
      <h4 className="header-4">{winner !== 0 ? `Player ${winner} won!` : "Draw"}</h4>
    </div>
  );
};

export default Results;
