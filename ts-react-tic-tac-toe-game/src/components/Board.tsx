import React from "react";
import Field from "./Field";
import "./styles.css";
import { CgShapeCircle } from "react-icons/cg";
import { ImCross } from "react-icons/im";

type Props = {
  isGameStarted: boolean;
  isPlayer1Move: boolean;
  setIsPlayer1Move: React.Dispatch<React.SetStateAction<boolean>>;
  currentFilling: number[];
  setCurrentFilling: React.Dispatch<React.SetStateAction<number[]>>;
};

const Board: React.FC<Props> = ({
  isGameStarted,
  isPlayer1Move,
  setIsPlayer1Move,
  currentFilling,
  setCurrentFilling,
}) => {
  const filling: [string, JSX.Element, JSX.Element] = [
    "",
    <CgShapeCircle className="icon circle filled-circle" />,
    <ImCross className="icon cross filled-cross" />,
  ];

  return (
    <div className={`board ${isGameStarted && "visible"}`}>
      <Field
        fieldId={0}
        isGameStarted={isGameStarted}
        isPlayer1Move={isPlayer1Move}
        setIsPlayer1Move={setIsPlayer1Move}
        setCurrentFilling={setCurrentFilling}
        currentFilling={currentFilling}
        filling={filling}
      />
      <Field
        fieldId={1}
        isGameStarted={isGameStarted}
        isPlayer1Move={isPlayer1Move}
        setIsPlayer1Move={setIsPlayer1Move}
        setCurrentFilling={setCurrentFilling}
        currentFilling={currentFilling}
        filling={filling}
      />
      <Field
        fieldId={2}
        isGameStarted={isGameStarted}
        isPlayer1Move={isPlayer1Move}
        setIsPlayer1Move={setIsPlayer1Move}
        setCurrentFilling={setCurrentFilling}
        currentFilling={currentFilling}
        filling={filling}
      />
      <Field
        fieldId={3}
        isGameStarted={isGameStarted}
        isPlayer1Move={isPlayer1Move}
        setIsPlayer1Move={setIsPlayer1Move}
        setCurrentFilling={setCurrentFilling}
        currentFilling={currentFilling}
        filling={filling}
      />
      <Field
        fieldId={4}
        isGameStarted={isGameStarted}
        isPlayer1Move={isPlayer1Move}
        setIsPlayer1Move={setIsPlayer1Move}
        setCurrentFilling={setCurrentFilling}
        currentFilling={currentFilling}
        filling={filling}
      />
      <Field
        fieldId={5}
        isGameStarted={isGameStarted}
        isPlayer1Move={isPlayer1Move}
        setIsPlayer1Move={setIsPlayer1Move}
        setCurrentFilling={setCurrentFilling}
        currentFilling={currentFilling}
        filling={filling}
      />
      <Field
        fieldId={6}
        isGameStarted={isGameStarted}
        isPlayer1Move={isPlayer1Move}
        setIsPlayer1Move={setIsPlayer1Move}
        setCurrentFilling={setCurrentFilling}
        currentFilling={currentFilling}
        filling={filling}
      />
      <Field
        fieldId={7}
        isGameStarted={isGameStarted}
        isPlayer1Move={isPlayer1Move}
        setIsPlayer1Move={setIsPlayer1Move}
        setCurrentFilling={setCurrentFilling}
        currentFilling={currentFilling}
        filling={filling}
      />
      <Field
        fieldId={8}
        isGameStarted={isGameStarted}
        isPlayer1Move={isPlayer1Move}
        setIsPlayer1Move={setIsPlayer1Move}
        setCurrentFilling={setCurrentFilling}
        currentFilling={currentFilling}
        filling={filling}
      />
    </div>
  );
};

export default Board;
