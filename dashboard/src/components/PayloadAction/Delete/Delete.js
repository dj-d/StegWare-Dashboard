import React, { useState } from "react";
import { Button, Paper, Popper, Typography } from "@material-ui/core";

// styles
import useStyles from "./styles";
import PayloadService from "../../../services/PayloadService";

export default function Delete({ anchorEl, open, placement, ...props }) {
    const classes = useStyles();

    let [errorToastID, setErrorToastID] = useState(null);

    function changeVisibility(event) {
        props.deleteVisibility(event.target.value)
    }

    function deleteAction() {
        PayloadService.deletePayload(props.payloadID)
            .then()
            .catch()
            .finally()
    }

    function handleNotification(notificationType) {
        let componentProps;

        if (errorToastID && notificationType === "error")
            return;

        componentProps = {

        }
    }

    return (
        <>
            <Popper
                open={open}
                anchorEl={anchorEl}
                placement={placement}
                transition
                disablePortal={true}
            >
                <Paper className={classes.paper}>
                    <Typography className={classes.title}>Are you sure?</Typography>

                    <Button autoFocus onClick={changeVisibility} className={classes.buttonCancel}>
                        NO
                    </Button>
                    <Button onClick={deleteAction} className={classes.buttonContinue}>
                        YES
                    </Button>
                </Paper>
            </Popper>
        </>
    );
}
