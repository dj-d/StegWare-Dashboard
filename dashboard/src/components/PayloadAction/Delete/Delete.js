import React from "react";
import { Button, Paper, Typography } from "@material-ui/core";

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

                <Button autoFocus onClick={changeVisibility} className={classes.buttonCancel}>
                    NO
                </Button>
                <Button onClick={deleteAction} className={classes.buttonContinue}>
                    YES
                </Button>
            </Paper>
        </>
    );
}
