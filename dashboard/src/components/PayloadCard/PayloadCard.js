import React, { forwardRef, useState } from "react";
import {
    Box,
    Button,
    Card,
    CardActions,
    CardHeader,
    Dialog,
    Divider,
    Popper,
    Slide
} from "@material-ui/core";

import Detail from "../PayloadAction/Detail/Detail";
import Delete from "../PayloadAction/Delete/Delete";

// icons
import {
    Info as InfoIcon,
    Delete as DeleteIcon
} from "@material-ui/icons";

// styles
import useStyles from "./styles";

const TransitionDialog = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
})

export default function PayloadCard({ payload }) {
    let classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);
    const [placement, setPlacement] = useState();
    const [openDelete, setOpenDelete] = useState(false);

    const [openDetail, setOpenDetail] = useState(false);

    const handleClickDetail = () => {
        setOpenDetail(!openDetail);
    }

    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpenDelete((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    }

    function changeDeleteVisibility(newValue) {
        setOpenDelete(newValue);
    }

    return (
        <>
            <Dialog fullScreen open={openDetail} onClose={handleClickDetail} TransitionComponent={TransitionDialog}>
                <Detail payload={payload} changeVisibility={handleClickDetail}/>
            </Dialog>

            <Popper open={openDelete} anchorEl={anchorEl} placement={placement} disablePortal={true}>
                <Delete changeVisibility={changeDeleteVisibility} payloadID={payload._id}/>
            </Popper>

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
                        onClick={handleClickDetail}
                        className={classes.button}
                    >
                        Detail
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
