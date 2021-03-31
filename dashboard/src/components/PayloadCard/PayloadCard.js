import React, { useState } from "react";
import { Box, Button, Card, CardActions, CardHeader, Divider } from "@material-ui/core";

import Delete from "../PayloadAction/Delete/Delete";

// icons
import {
    Info as InfoIcon,
    Delete as DeleteIcon
} from "@material-ui/icons";

// styles
import useStyles from "./styles";

export default function PayloadCard({ payload }) {
    let classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState();

    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    }

    function changeDeleteVisibility (newValue) {
        setOpen(newValue);
    }

    return (
        <>
            <Delete anchorEl={anchorEl} open={open} placement={placement} deleteVisibility={changeDeleteVisibility} />

            <Card className={classes.card}>
                <CardHeader
                    title={payload.name}
                    subheader={payload.description}
                    classes={{
                        root: classes.header,
                        title: classes.headerTitle,
                        subheader: classes.headerSubtitle
                    }}
                />

                <Divider variant="middle"/>

                <CardActions className={classes.action}>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<InfoIcon/>}
                        className={classes.button}
                    >
                        More
                    </Button>
                    <Box m={2}>
                    </Box>
                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<DeleteIcon/>}
                        onClick={handleClick('bottom')}
                        className={classes.button}
                    >
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}
