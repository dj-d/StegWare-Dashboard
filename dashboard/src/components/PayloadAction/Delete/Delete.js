import React from "react";
import { Button, Paper, Popper, Typography } from "@material-ui/core";

// styles
import useStyles from "./styles";

export default function Delete({ anchorEl, open, placement }) {
    const classes = useStyles();

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

                    <Button className={classes.buttonCancel}>
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
