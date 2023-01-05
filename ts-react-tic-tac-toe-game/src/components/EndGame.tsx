import React from "react";
import "./styles.css";

type Props = {
  isGameEnded: boolean;
  handleStartGame: () => void;
};

const EndGame: React.FC<Props> = ({ isGameEnded, handleStartGame }) => {
  return (
    <div className={`end-wrapper ${isGameEnded && "visible"}`}>
      <button className="end-btn" onClick={handleStartGame}>
        Press to play again
      </button>
    </div>
  );
};

export default EndGame;
