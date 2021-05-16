import React from "react";
import { Button as MuiButton } from "@material-ui/core";

import useStyle from "./style";

export default function Button(props) {
    const classes = useStyle();

    const { text, size, color, variant, onClick, ...other } = props;

    return (
        <MuiButton
            variant={variant || "contained"}
            size={size || "medium"}
            color={color || "primary"}
            onClick={onClick}
            {...other}
            classes={{
                root: classes.root,
                label: classes.label
            }}
        >
            {text}
        </MuiButton>
    )
}
