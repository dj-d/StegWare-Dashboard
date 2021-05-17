import React from "react";
import { TextField } from "@material-ui/core";

export default function Input(props) {
    const { name, label, value, disable, defaultValue, error = null, onChange } = props;

    return (
        <TextField
            variant="outlined"
            label={label}
            name={name}
            value={value}
            disable={disable}
            defaultValue={defaultValue}
            onChange={onChange}
            {...(error && { error: true, helperText: error })}
        />
    )
}
