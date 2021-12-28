import React, { useState, createContext } from "react";

export const CalculatorContext = createContext();

const CalculatorProvider = (props) => {
  const [currentCalculation, setCurrentCalculation] = useState("3+13");
  const [secondaryField, setSecondaryField] = useState("");

  const handleAddCalculation = (input) => {
    setCurrentCalculation((prevCalculation) => prevCalculation + input);
  };

  const handleDeleteOne = () => {
    currentCalculation.length === 1
      ? setCurrentCalculation("")
      : setCurrentCalculation(
          currentCalculation.substring(0, currentCalculation.length - 1)
        );
  };

  const handleDeleteAll = () => {
    setCurrentCalculation("");
    setSecondaryField("");
  };

  const handleResult = () => {
    setSecondaryField(currentCalculation);
    let result = eval(currentCalculation);
    setCurrentCalculation(result.toString());
  };
  const handleNegative = () => {
    setSecondaryField(currentCalculation);
    let temporaryValue = parseFloat(currentCalculation);
    let result = temporaryValue * -1;
    setCurrentCalculation(result.toString());
  };
  const handlePercentage = () => {
    setSecondaryField(currentCalculation);
    let temporaryValue = parseFloat(currentCalculation);
    let result = temporaryValue * 0.01;
    setCurrentCalculation(result.toString());
  };
  const providerValue = {
    currentCalculation,
    secondaryField,
    handleAddCalculation,
    handleDeleteOne,
    handleDeleteAll,
    handleResult,
    handleNegative,
    handlePercentage,
  };
  return (
    <CalculatorContext.Provider value={providerValue}>
      {props.children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorProvider;
