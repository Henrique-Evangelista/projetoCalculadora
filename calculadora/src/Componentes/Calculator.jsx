import React, { useState } from "react";
import Buttons from "./Buttons";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import "./calculator.css";

function Calculator() {
  const [calc, setCalc] = useState("");
  const [oldCalc, setOldCalc] = useState("");
  const [operator, setOperator] = useState("");

  function handleOldCalc(event) {
    const cont = event.target.value;
    if (operator) {
      setOperator(cont);
    } else if (calc) {
      setOldCalc(calc);
      setOperator(cont);
      setCalc("");
    }
  }
 function handleCont() {
    if (parseFloat(calc) && operator && parseFloat(oldCalc)) {
        setCalc(
            operator === "x" ? parseFloat(oldCalc) * parseFloat(calc) :
            operator === "-" ? parseFloat(oldCalc) - parseFloat(calc) :
            operator === "+" ? parseFloat(oldCalc) + parseFloat(calc) :
            operator === "/" ? parseFloat(oldCalc) / parseFloat(calc) :
            (() => {
                setCalc("Erro");
                setTimeout(() => {
                    handleClear();
                }, 3000);
            })()
        );
        setOldCalc("");
        setOperator("");
    } else if (calc !== "") {
        setCalc("Erro");
        setTimeout(() => {
            handleClear();
        }, 3000);
    }
}


  function handleSign() {
    if (calc > 0) {
      setCalc(-calc);
    } else {
      setCalc(Math.abs(calc));
    }
  }

  function handlePorcent() {
    setCalc(calc / 100);
  }

  function handleNumber(event) {
    const number = event.target.value;
    if (calc === 0) {
      setCalc(number);
    } else {
      setCalc(calc + number);
    }
  }

  function handleClear() {
    setCalc("");
    setOldCalc("");
    setOperator("");
  }

  return (
    <div>
      <Box m={5} />
      <Container maxWidth="xs">
        <div className="calc">
          <h1>Calculadora</h1>
          <Box m={8} />
          <h2 className="result">
            {oldCalc}
            {operator}
            {calc}
          </h2>
          <Buttons
            handleOldCalc={handleOldCalc}
            handleClear={handleClear}
            handleNumber={handleNumber}
            handlePorcent={handlePorcent}
            handleSign={handleSign}
            handleCont={handleCont}
          ></Buttons>
        </div>
      </Container>
    </div>
  );
}

export default Calculator;
