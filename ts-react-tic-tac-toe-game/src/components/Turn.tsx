import React from "react";
import "./styles.css";
import { CgShapeCircle } from "react-icons/cg";
import { ImCross } from "react-icons/im";

type Props = {
  isGameStarted: boolean;
  isPlayer1Move: boolean;
  isGameEnded: boolean;
};

const Turn: React.FC<Props> = ({
  isGameStarted,
  isPlayer1Move,
  isGameEnded,
}) => {
  return isGameEnded ? (
    <div className={`the-end ${isGameStarted && "visible"}`}>
      <h3 className="header-3">The End</h3>
    </div>
  ) : isPlayer1Move ? (
    <div className={`turn ${isGameStarted && "visible"}`}>
      <div className="icon-wrapper">
        <CgShapeCircle className="icon circle" />
      </div>
      <h3 className="header-3">Player 1 turn</h3>
    </div>
  ) : (
    <div className={`turn ${isGameStarted && "visible"}`}>
      <div className="icon-wrapper">
        <ImCross className="icon cross" />
      </div>
      <h3 className="header-3">Player 2 turn</h3>
    </div>
  );
};

export default Turn;
