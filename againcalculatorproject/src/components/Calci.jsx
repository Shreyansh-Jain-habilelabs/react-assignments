import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import removeLastElement from "../functions/removeLastElement.js";

export default function Calculator() {
  const [answer, setAnswer] = useState("");
  const [userInput, setUserInput] = useState("");
  const [arithmaticOperatorCount, setArithmaticOperatorCount] = useState({});
  const arr = ["AC", "%", "=", "/", 7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", "00", 0, ".", "<--"];

  const handleChange = (e) => {
    switch (e.target.innerText) {
      case "AC":
        setUserInput("");
        break;

      case "=":
        console.log(`yess`);
        break;

      case "<--":
        isNaN(userInput[userInput.length - 1])
          ? (setUserInput(removeLastElement(userInput)),
            arithmaticOperatorCount
              ? setArithmaticOperatorCount((pre) => ({ ...pre, [e.target.innerText]: arithmaticOperatorCount[e.target.innerText] - 1 }))
              : console.log(arithmaticOperatorCount))
          : setUserInput(removeLastElement(userInput));
        break;

      default:
        if (userInput.length && isNaN(userInput[userInput.length - 1]) && isNaN(e.target.innerText)) {
          const replaceSign = removeLastElement(userInput) + e.target.innerText;
          setUserInput((pre) => replaceSign);
        } else {
          isNaN(e.target.innerText)
            ? (setUserInput((pre) => pre + e.target.innerText),
              setArithmaticOperatorCount((pre) => ({ ...pre, [e.target.innerText]: arithmaticOperatorCount[e.target.innerText] + 1 })))
            : setUserInput((pre) => pre + e.target.innerText);
        }
        break;
    }
  };

  console.log(arithmaticOperatorCount);

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
