import React from "react";
import { Button as MuiButton } from "@material-ui/core";

import useStyles from "./styles";

export default function Button({ children, size, color, variant, onClick, startIcon, ...other }) {
    const classes = useStyles();

    return (
        <MuiButton
            variant={variant || "contained"}
            size={size || "large"}
            color={color || "primary"}
            onClick={onClick}
            startIcon={startIcon}
            {...other}
            classes={{
                root: classes.root,
                label: classes.label
            }}
        >
            {children}
        </MuiButton>
    )
}
