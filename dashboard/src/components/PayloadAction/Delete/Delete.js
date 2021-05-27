import React from "react";
import { Paper, Typography } from "@material-ui/core";

import { Button } from "../../Wrappers/Wrappers";

// service
import PayloadService from "../../../services/PayloadService";

// styles
import useStyles from "./styles";

export default function Delete({ ...props }) {
    const classes = useStyles();

    function changeVisibility(event) {
        props.changeVisibility(event.target.value);
    }

    // TODO: To complete
    function deleteAction() {
        PayloadService.deletePayload(props.payloadID)
            .then()
            .catch()
            .finally(() => {
                // Refresh page
                window.location.reload();
        })
    }

    return (
        <>
            <Paper className={classes.paper}>
                <Typography className={classes.title}>Are you sure?</Typography>

                <Button
                    size="small"
                    onClick={changeVisibility}
                    className={classes.button}
                >
                    No
                </Button>

                <Button

                    size="small"
                    color="secondary"
                    onClick={deleteAction}
                    className={classes.button}
                >
                    Yes
                </Button>

            </Paper>
        </>
    );
}
