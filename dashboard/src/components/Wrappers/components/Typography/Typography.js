import React from "react";
import {
    Typography as MuiTypography
} from "@material-ui/core";

import useStyles from "./styles";

export default function Typography ({ children, align, color, variant, className}) {
    const classes = useStyles();

    return (
        <MuiTypography
            align={align || "inherit"}
            color={color || "initial"}
            variant={variant || "body1"}
            className={className || classes.typography}
        >
            {children}
        </MuiTypography>
    );
}
