import React from "react";
import {
    FormControl,
    InputLabel,
    Select as MuiSelect,
    MenuItem,
    FormHelperText
} from "@material-ui/core";

export default function Select({ name, label, value, multiple, input, renderValue, error = null, disabled, onChange, options }) {
    return (
        <FormControl
            variant="outlined"
            {...(error && { error: true })}
        >
            <InputLabel>
                {label}
            </InputLabel>

            <MuiSelect
                label={label}
                name={name}
                value={value}
                multiple={multiple}
                input={input}
                disabled={disabled}
                renderValue={renderValue}
                onChange={onChange}
            >
                {/*<MenuItem value=""> None </MenuItem>*/}

                {options.map((item) => (
                        <MenuItem
                            key={item.id || item._id}
                            value={item.id || item.content}
                        >
                            {item.title || item.name}
                        </MenuItem>
                    )
                )}
            </MuiSelect>

            {error &&
            <FormHelperText>
                {error}
            </FormHelperText>
            }
        </FormControl>
    )
}
