import React from "react";
import { Button, Paper, Typography } from "@material-ui/core";

import Wrappers from "../../Wrappers/Wrappers";

// service
import PayloadService from "../../../services/PayloadService";

// styles
import useStyles from "./styles";

export default function Delete({ ...props }) {
    const classes = useStyles();

    function changeVisibility(event) {
        props.changeVisibility(event.target.value);
    }

    function deleteAction() {
        PayloadService.deletePayload(props.payloadID)
            .then()
            .catch()
            .finally()
    }

    return (
        <>
            <Paper className={classes.paper}>
                <Typography className={classes.title}>Are you sure?</Typography>

                <Wrappers.Button
                    text="No"
                    size="small"
                    onClick={changeVisibility}
                    className={classes.button}
                />

                <Wrappers.Button
                    text="Yes"
                    size="small"
                    color="secondary"
                    onClick={deleteAction}
                    className={classes.button}
                />

            </Paper>
        </>
    );
}
