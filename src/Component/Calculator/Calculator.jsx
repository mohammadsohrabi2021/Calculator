import React, { useState } from "react";
import dataValueButtonNumber from "../../Data/DataValueButton/DataValueButton";
import { evaluate } from "mathjs";
import "./Calculator.css";
const Calculator = () => {
  const [result, setResult] = useState("");
  const [hasDot, setHasDot] = useState(false);
  const checkInput = (text) => {
    if (text === "÷") return "/";
    if (text === "×") return "*";
    return text;
  };

  const clickHandler = (e) => {
    const input = checkInput(e.target.innerText);

    if (input === ".") {
      if (hasDot === true) return;
      else setHasDot(true);
    }
    if (input === "+" || input === "-" || input === "*" || input === "/")
      setHasDot(false);
    setResult(result + input);
  };

  const clearHandler = () => {
    setResult("");
    setHasDot(false)
  };

  const delteItemHandler = () => {
    setResult(result.slice(0, -1));
    if (result.endsWith('.')) {
      setHasDot(false)
    }
  };

  const equalHandler = () => {
    setResult(evaluate(result).toString());
    setHasDot(false)
  };

  return (
    <div className="container">
      <div className="screen">{result}</div>
      <div className="buttons">
        {dataValueButtonNumber.map((item) =>
          item.id === 13 ||
          item.id === 19 ||
          item.id === 14 ||
          item.id === 16 ||
          item.id === 15 ||
          item.id === 17 ||
          item.id === 18 ? (
            <button
              onClick={
                (item.id === 13 && clearHandler) ||
                (item.id === 14 && delteItemHandler) ||
                (item.id === 19 && equalHandler) ||
                (item.id === 15 && clickHandler) ||
                (item.id === 16 && clickHandler) ||
                (item.id === 17 && clickHandler) ||
                (item.id === 18 && clickHandler)
              }
              className={
                item.id === 14 ||
                item.id === 16 ||
                item.id === 15 ||
                item.id === 17 ||
                item.id === 18
                  ? "button color "
                  : "button color twoCol"
              }
            >
              {item.valueNumber}
            </button>
          ) : (
            <button onClick={clickHandler} className="button ">
              {item.valueNumber}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Calculator;
