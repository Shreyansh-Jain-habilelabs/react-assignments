import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import removeLastElement from "../functions/removeLastElement.js";

export default function Calculator() {
  const [userInput, setUserInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [expressionArray, setExpressionArray] = useState([]);
  const [arithmaticOperatorCount, setArithmaticOperatorCount] = useState({ "+": 0, "-": 0, "*": 0, "/": 0, "%": 0, error: "" });

  const arr = ["AC", "%", "=", "/", 7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", "00", 0, ".", "<--"];
  const calculateAnswer = () => {
    if (!!expressionArray && expressionArray.length) {
      let divideCount = arithmaticOperatorCount["/"];
      let multiplyCount = arithmaticOperatorCount["*"];
      let additionCount = arithmaticOperatorCount["+"];
      let subtractCount = arithmaticOperatorCount["-"];
      let modulasCount = arithmaticOperatorCount["%"];
      const totalOperatorCount = Math.max(divideCount, multiplyCount, additionCount, subtractCount, modulasCount);

      for (let i = 0; i < totalOperatorCount; i++) {
        if (divideCount !== 0) {
          const positionOfOperator = expressionArray.indexOf("/");
          const answer = +expressionArray[positionOfOperator - 1] / +expressionArray[positionOfOperator + 1];
          expressionArray.splice(positionOfOperator - 1, 3);
          expressionArray.splice(positionOfOperator - 1, 0, answer);
          divideCount--;
        }
        if (multiplyCount !== 0) {
          const positionOfOperator = expressionArray.indexOf("*");
          const answer = +expressionArray[positionOfOperator - 1] * +expressionArray[positionOfOperator + 1];
          expressionArray.splice(positionOfOperator - 1, 3);
          expressionArray.splice(positionOfOperator - 1, 0, answer);
          multiplyCount--;
        }
        if (additionCount !== 0) {
          const positionOfOperator = expressionArray.indexOf("+");
          const answer = +expressionArray[positionOfOperator - 1] + +expressionArray[positionOfOperator + 1];
          expressionArray.splice(positionOfOperator - 1, 3);
          expressionArray.splice(positionOfOperator - 1, 0, answer);
          additionCount--;
        }
        if (subtractCount !== 0) {
          const positionOfOperator = expressionArray.indexOf("-");
          const answer = +expressionArray[positionOfOperator - 1] - +expressionArray[positionOfOperator + 1];
          expressionArray.splice(positionOfOperator - 1, 3);
          expressionArray.splice(positionOfOperator - 1, 0, answer);
          subtractCount--;
        }
        if (modulasCount !== 0) {
          const positionOfOperator = expressionArray.indexOf("%");
          const answer = +expressionArray[positionOfOperator - 1] % +expressionArray[positionOfOperator + 1];
          expressionArray.splice(positionOfOperator - 1, 3);
          expressionArray.splice(positionOfOperator - 1, 0, answer);
          modulasCount--;
        }
      }
    }
    setAnswer(expressionArray[0]);
    setExpressionArray([]);
  };

  useEffect(() => {
    if (!isNaN(userInput[0]) && !isNaN(userInput[userInput.length - 1])) {
      setArithmaticOperatorCount((pre) => ({ ...pre, ["error"]: "" }));
      setExpressionArray(userInput.split(/([-/*+%])/));
    } else {
      setArithmaticOperatorCount((pre) => ({ ...pre, ["error"]: "Invalid Expression" }));
    }
  }, [userInput]);

  const handleChange = (e) => {
    const htmlTagText = e.target.innerText;

    if (htmlTagText === "AC") {
      setUserInput("");
      setAnswer("");
      setExpressionArray([]);
    } else if (htmlTagText === "=") {
      return calculateAnswer();
    } else if (htmlTagText === "<--") {
      isNaN(userInput[userInput.length - 1])
        ? (setUserInput(removeLastElement(userInput)),
          setArithmaticOperatorCount((pre) => ({
            ...pre,
            [userInput[userInput.length - 1]]: arithmaticOperatorCount[userInput[userInput.length - 1]] - 1,
          })))
        : setUserInput(removeLastElement(userInput));
    } else {
      if (userInput.length && isNaN(userInput[userInput.length - 1]) && isNaN(htmlTagText)) {
        const replaceSign = removeLastElement(userInput) + htmlTagText;
        setUserInput((pre) => replaceSign);
      } else {
        isNaN(htmlTagText)
          ? (setUserInput((pre) => pre + htmlTagText),
            setArithmaticOperatorCount((pre) => ({ ...pre, [htmlTagText]: arithmaticOperatorCount[htmlTagText] + 1 })))
          : setUserInput((pre) => pre + htmlTagText);
      }
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
        <TextField id="outlined-basic" disabled variant="outlined" sx={{ width: "100%" }} value={answer} />
      </Box>
      <Box sx={{ width: "95%" }}>
        <TextField label="Expression" id="outlined-basic" disabled variant="outlined" sx={{ width: "100%" }} value={userInput} />
        <Typography variant="h6" sx={{ fontSize: ".8rem", color: "red" }}>
          {arithmaticOperatorCount.error}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexWrap: "wrap", width: "95%", gap: "15px", justifyContent: "center" }}>
        {arr?.map((value) => (
          <Button
            variant="contained"
            sx={{ display: "flex", flex: "1 0 21%", justifyContent: "center", alignItems: "center" }}
            onClick={handleChange}
            // disabled={value === "=" && !expressionArray.length>1}
          >
            {value}
          </Button>
        ))}
      </Box>
    </Box>
  );
}
