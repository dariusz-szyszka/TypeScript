import React from "react";
import "./styles.css";

type Props = {
  isGameStarted: boolean;
  fieldId: number;
  isPlayer1Move: boolean;
  setIsPlayer1Move: React.Dispatch<React.SetStateAction<boolean>>;
  currentFilling: number[];
  setCurrentFilling: React.Dispatch<React.SetStateAction<number[]>>;
  filling: [string, JSX.Element, JSX.Element];
};

const Field: React.FC<Props> = ({
  isGameStarted,
  fieldId,
  isPlayer1Move,
  setIsPlayer1Move,
  currentFilling,
  setCurrentFilling,
  filling,
}) => {
  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    if (isPlayer1Move) {
      setCurrentFilling(
        currentFilling.map((field, index) =>
          index === fieldId ? (field = 1) : field
        )
      );
      setIsPlayer1Move(false);
    } else {
      setCurrentFilling(
        currentFilling.map((field, index) =>
          index === fieldId ? (field = 2) : field
        )
      );
      setIsPlayer1Move(true);
    }
    document.querySelectorAll(".field-btn")[fieldId].classList.remove("enable");
  };

  return (
    <div className="field">
      <div
        className={`field-btn ${isGameStarted && "enable"}`}
        onClick={handleMove}
      >
        {filling[currentFilling[fieldId]]}
      </div>
    </div>
  );
};

export default Field;
