import React from "react";
import { TextField } from "@material-ui/core";

export default function Input({ id, name, label, value, disabled, defaultValue, variant, error = null, onChange }) {
    return (
        <TextField
            id={id}
            label={label}
            name={name}
            value={value}
            disabled={disabled}
            defaultValue={defaultValue}
            variant={variant || "outlined"}
            onChange={onChange}
            {...(error && { error: true, helperText: error })}
        />
    )
}
