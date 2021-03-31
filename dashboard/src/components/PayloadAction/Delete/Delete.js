import React from "react";
import { Button, Paper, Popper, Typography } from "@material-ui/core";

// styles
import useStyles from "./styles";

export default function Delete({ anchorEl, open, placement, ...props }) {
    const classes = useStyles();

    function changeVisibility(event) {
        props.deleteVisibility(event.target.value)
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

                    <Button onClick={changeVisibility} className={classes.buttonCancel}>
                        NO
                    </Button>
                    <Button className={classes.buttonContinue}>
                        YES
                    </Button>
                </Paper>
            </Popper>
        </>
    );
}
