import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import removeLastElement from "../functions/removeLastElement.js";

export default function Calculator() {
  const [userInput, setUserInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [arithmaticOperatorCount, setArithmaticOperatorCount] = useState(0);
  const [operatorsInExpression, setOperatorsInExpression] = useState({ "+": false, "-": false, "*": false, "/": false, "%": false, error: "" });

  const arr = ["AC", "%", "=", "/", 7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", "00", 0, ".", "<--"];

  const calculateAnswer = (expressionArray) => {
    // while (arithmaticOperatorCount) {
      if (operatorsInExpression["/"]) {
        const positionOfOperator = expressionArray.indexOf("/");
        console.log(`/ : ${positionOfOperator}`);
        setArithmaticOperatorCount( pre => pre -1);
      }
      if (operatorsInExpression["*"]) {
        const positionOfOperator = expressionArray.indexOf("*");
        console.log(`* : ${positionOfOperator}`);
        setArithmaticOperatorCount( pre => pre -1);
      }
      if (operatorsInExpression["+"]) {
        const positionOfOperator = expressionArray.indexOf("+");
        setArithmaticOperatorCount( pre => pre -1);
        console.log(`+ : ${positionOfOperator}`);
      }
      if (operatorsInExpression["-"]) {
        const positionOfOperator = expressionArray.indexOf("-");
        console.log(`- : ${positionOfOperator}`);
        setArithmaticOperatorCount( pre => pre -1);
      }
      if (operatorsInExpression["%"]) {
        const positionOfOperator = expressionArray.indexOf("%");
        console.log(`% : ${positionOfOperator}`);
        setArithmaticOperatorCount( pre => pre -1);
      }
      console.log(`countExpression : ${arithmaticOperatorCount}`);
    // }
  };


  const setOperatorsPresence = (userInput) => {
    if (!isNaN(userInput[0]) && !isNaN(userInput[userInput.length - 1])) {
      setOperatorsInExpression((pre) => ({ ...pre, ["error"]: "" }));
      const expressionArray = userInput.split(/([-/*+%])/);
      const expectedSigns = ["+", "-", "*", "/", "%"];

      expectedSigns?.forEach((value) => {
        expressionArray.includes(value)
          ? setOperatorsInExpression((pre) => ({ ...pre, [`${value}`]: true }))
          : setOperatorsInExpression((pre) => ({ ...pre, [`${value}`]: false }));
      });

      calculateAnswer(expressionArray);
      
    } else {
      setOperatorsInExpression((pre) => ({ ...pre, ["error"]: "Invalid Expression" }));
    }
  };

  const handleChange = (e) => {
    switch (e.target.innerText) {
      case "AC":
        setUserInput("");
        break;

      case "=":
        setOperatorsPresence(userInput);
        break;

      case "<--":
        isNaN(userInput[userInput.length - 1])
          ? (setUserInput(removeLastElement(userInput)),
            arithmaticOperatorCount ? setArithmaticOperatorCount((pre) => pre - 1) : console.log(arithmaticOperatorCount))
          : setUserInput(removeLastElement(userInput));
        break;

      default:
        if (userInput.length && isNaN(userInput[userInput.length - 1]) && isNaN(e.target.innerText)) {
          const replaceSign = removeLastElement(userInput) + e.target.innerText;
          setUserInput((pre) => replaceSign);
        } else {
          isNaN(e.target.innerText)
            ? (setUserInput((pre) => pre + e.target.innerText), setArithmaticOperatorCount((pre) => pre + 1))
            : setUserInput((pre) => pre + e.target.innerText);
        }
        break;
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        width: "45%",
        padding: "3%",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        boxShadow: "0 0 7px #888",
      }}
    >
      <Box sx={{ width: "95%" }}>
        <TextField label="Result" id="outlined-basic" disabled variant="outlined" sx={{ width: "100%" }} value={answer} />
      </Box>
      <Box sx={{ width: "95%" }}>
        <TextField label="Expression" id="outlined-basic" disabled variant="outlined" sx={{ width: "100%" }} value={userInput} />
        <Typography variant="h6" sx={{ fontSize: ".8rem", color: "red" }}>
          {operatorsInExpression.error}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexWrap: "wrap", width: "95%", gap: "15px", justifyContent: "center" }}>
        {arr?.map((value) => (
          <Button
            variant="contained"
            sx={{ display: "flex", flex: "1 0 21%", justifyContent: "center", alignItems: "center" }}
            onClick={handleChange}
          >
            {value}
          </Button>
        ))}
      </Box>
    </Box>
  );
}
