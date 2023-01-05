import React from "react";
import "./styles.css";

type Props = {
  handleStartGame: () => void;
};

const StartGame: React.FC<Props> = ({ handleStartGame }) => {
  return (
    <div>
      <h2 className="header-2">Welcome to the game</h2>
      <div className="start-wrapper visible">
        <button className="start-btn" onClick={handleStartGame}>
          Press to start
        </button>
      </div>
    </div>
  );
};

export default StartGame;
