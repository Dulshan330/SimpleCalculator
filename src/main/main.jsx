import { Box, Typography } from "@mui/material";
import React from "react";
import KeyButton from "../components/buttton";
import { themecolor, themecolor3, white } from "../config";

function Calculator() {
    return (
        <Box
        sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
        }}
        >
        <Box sx={{border:`solid 2px ${themecolor}`, borderRadius:"4px"}}>
            <Box
            sx={{
                background: themecolor3,
                margin: "1px",
                padding: "20px 10px",
                borderRadius:"5px"
            }}
            >
            <Typography variant="h4" color={white} textAlign={"right"} >
                0
            </Typography>
            </Box>
            <Box sx={{ width: "fit-content", display: "flex" }}>
            <KeyButton symbol={"C"} />
            <KeyButton symbol={"%"} />
            <KeyButton symbol={""} />
            <KeyButton symbol={"/"} />
            </Box>
            <Box sx={{ width: "fit-content", display: "flex" }}>
            <KeyButton symbol={"7"} />
            <KeyButton symbol={"8"} />
            <KeyButton symbol={"9"} />
            <KeyButton symbol={"*"} />
            </Box>
            <Box sx={{ width: "fit-content", display: "flex" }}>
            <KeyButton symbol={"4"} />
            <KeyButton symbol={"5"} />
            <KeyButton symbol={"6"} />
            <KeyButton symbol={"-"} />
            </Box>
            <Box sx={{ width: "fit-content", display: "flex" }}>
            <KeyButton symbol={"1"} />
            <KeyButton symbol={"2"} />
            <KeyButton symbol={"3"} />
            <KeyButton symbol={"+"} />
            </Box>
            <Box sx={{ width: "fit-content", display: "flex" }}>
            <KeyButton symbol={"."} />
            <KeyButton symbol={"0"} />
            <KeyButton symbol={"^"} />
            <KeyButton symbol={"="} />
            </Box>
        </Box>
        </Box>
    );
}

export default Calculator;
