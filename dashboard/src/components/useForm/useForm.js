import React, { useState } from "react";

import useStyles from "./styles"

function useForm(initialFValues, validateOnChange = false, validate) {
    const [values, setValues] = useState(initialFValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        })

        if (validateOnChange) {
            validate({ [name]: value })
        }

    }

    const resetForm = () => {
        setValues(initialFValues);
        setErrors({})
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    }
}

function Form({ children, ...other }) {
    const classes = useStyles();

    return (
        <form className={classes.root} autoComplete="off" {...other}>
            {children}
        </form>
    )
}

export { useForm, Form }
