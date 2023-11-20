import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import KeyButton from "../components/buttton";
import { themecolor, themecolor3, white } from "../config";

function Calculator() {
    const [value, setValue] = useState("");

    function clickNumber(symbol) {
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
        case "C":
            setValue("");
            break;
        }
    }

    function clickClacultion(symbol){

    }

    return (
        <Box
        sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
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
            }}
            >
            <Typography variant="h4" color={white} textAlign={"right"}>
                {value}
            </Typography>
            </Box>
            <Box sx={{ width: "fit-content", display: "flex" }}>
            <KeyButton symbol={"C"} handleClick={() => clickNumber("C")} />
            <KeyButton symbol={"%"} />
            <KeyButton symbol={"^"} />
            <KeyButton symbol={"/"} />
            </Box>
            <Box sx={{ width: "fit-content", display: "flex" }}>
            <KeyButton symbol={"7"} handleClick={() => clickNumber(7)} />
            <KeyButton symbol={"8"} handleClick={() => clickNumber(8)} />
            <KeyButton symbol={"9"} handleClick={() => clickNumber(9)} />
            <KeyButton symbol={"*"} />
            </Box>
            <Box sx={{ width: "fit-content", display: "flex" }}>
            <KeyButton symbol={"4"} handleClick={() => clickNumber(4)} />
            <KeyButton symbol={"5"} handleClick={() => clickNumber(5)} />
            <KeyButton symbol={"6"} handleClick={() => clickNumber(6)} />
            <KeyButton symbol={"-"} />
            </Box>
            <Box sx={{ width: "fit-content", display: "flex" }}>
            <KeyButton symbol={"1"} handleClick={() => clickNumber(1)} />
            <KeyButton symbol={"2"} handleClick={() => clickNumber(2)} />
            <KeyButton symbol={"3"} handleClick={() => clickNumber(3)} />
            <KeyButton symbol={"+"} />
            </Box>
            <Box sx={{ width: "fit-content", display: "flex" }}>
            <KeyButton symbol={"."} />
            <KeyButton symbol={"0"} handleClick={() => clickNumber(0)} />
            <KeyButton symbol={"De"} />
            <KeyButton symbol={"="} />
            </Box>
        </Box>
        </Box>
    );
}

export default Calculator;
