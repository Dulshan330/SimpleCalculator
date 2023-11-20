import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import KeyButton from "../components/buttton";
import { themecolor, themecolor3, white } from "../config";

function Calculator() {
    const [value, setValue] = useState("");

    function handleClick(symbol) {
        try {
        switch (symbol) {
            case 1:
            setValue((preValue) => preValue + "1");
            break;
            case 2:
            setValue((preValue) => preValue + "2");
            break;
            case 3:
            setValue((preValue) => preValue + "3");
            break;
            case 4:
            setValue((preValue) => preValue + "4");
            break;
            case 5:
            setValue((preValue) => preValue + "5");
            break;
            case 6:
            setValue((preValue) => preValue + "6");
            break;
            case 7:
            setValue((preValue) => preValue + "7");
            break;
            case 8:
            setValue((preValue) => preValue + "8");
            break;
            case 9:
            setValue((preValue) => preValue + "9");
            break;
            case 0:
            setValue((preValue) => preValue + "0");
            break;
            case "+":
            setValue((preValue) => preValue + "+");
            break;
            case "-":
            setValue((preValue) => preValue + "-");
            break;
            case "*":
            setValue((preValue) => preValue + "*");
            break;
            case "/":
            setValue((preValue) => preValue + "/");
            break;
            case "^":
            setValue((preValue) => preValue + "**");
            break;
            case "%":
            setValue((preValue) => preValue + "%");
            break;
            case ".":
            setValue((preValue) => preValue + ".");
            break;
            case "C":
            setValue("");
            break;
            case "DE":
            setValue((preValue) => preValue.slice(0, -1));
            break;
            case "=":
            setValue((preValue) => {
                let limitedValue = eval(preValue);
                return limitedValue.toString().slice(0, 12);
            });
            break;
        }
        } catch (error) {
        setValue("Error");
        }
    }

    return (
        <Box
        sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            background: themecolor,
        }}
        >
        <Box sx={{ borderRadius: "4px", background: "#C0C0C0", padding: "1rem" }}>
            <Box
            sx={{
                background: themecolor3,
                margin: "1px",
                padding: "0px 10px",
                height: "80px",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "right",
                alignItems: "center",
                maxWidth: "243px",
            }}
            >
            <Typography variant="h4" color={white} textAlign={"right"}>
                {value}
            </Typography>
            </Box>
            <Box sx={{ width: "fit-content", display: "flex" }}>
            <KeyButton symbol={"C"} handleClick={() => handleClick("C")} />
            <KeyButton symbol={"%"} handleClick={() => handleClick("%")} />
            <KeyButton symbol={"^"} handleClick={() => handleClick("^")} />
            <KeyButton symbol={"/"} handleClick={() => handleClick("/")} />
            </Box>
            <Box sx={{ width: "fit-content", display: "flex" }}>
            <KeyButton symbol={"7"} handleClick={() => handleClick(7)} />
            <KeyButton symbol={"8"} handleClick={() => handleClick(8)} />
            <KeyButton symbol={"9"} handleClick={() => handleClick(9)} />
            <KeyButton symbol={"*"} handleClick={() => handleClick("*")} />
            </Box>
            <Box sx={{ width: "fit-content", display: "flex" }}>
            <KeyButton symbol={"4"} handleClick={() => handleClick(4)} />
            <KeyButton symbol={"5"} handleClick={() => handleClick(5)} />
            <KeyButton symbol={"6"} handleClick={() => handleClick(6)} />
            <KeyButton symbol={"-"} handleClick={() => handleClick("-")} />
            </Box>
            <Box sx={{ width: "fit-content", display: "flex" }}>
            <KeyButton symbol={"1"} handleClick={() => handleClick(1)} />
            <KeyButton symbol={"2"} handleClick={() => handleClick(2)} />
            <KeyButton symbol={"3"} handleClick={() => handleClick(3)} />
            <KeyButton symbol={"+"} handleClick={() => handleClick("+")} />
            </Box>
            <Box sx={{ width: "fit-content", display: "flex" }}>
            <KeyButton symbol={"."} handleClick={() => handleClick(".")} />
            <KeyButton symbol={"0"} handleClick={() => handleClick(0)} />
            <KeyButton symbol={"De"} handleClick={() => handleClick("DE")} />
            <KeyButton symbol={"="} handleClick={() => handleClick("=")} />
            </Box>
        </Box>
        </Box>
    );
}

export default Calculator;
