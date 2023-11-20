import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { font, themecolor, themecolor2, white } from "../config";

function KeyButton(props) {
    const { symbol, width } = props;

    const style = {
        width: "4rem",
        height: "4rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: themecolor,
        margin: "1px",
        '&:hover': {
            backgroundColor: themecolor2,
        },
    };

    return (
        <Button sx={style}>
            <Typography
            variant="h4"
            color="initial"
            sx={{ fontFamily: font, color: white }}
            >
            {symbol}
            </Typography>
        </Button>
    );
}

export default KeyButton;
