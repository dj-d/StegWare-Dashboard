import React, { forwardRef, useState } from "react";
import {
    Box,
    Dialog,
    Popper,
    Slide
} from "@material-ui/core";

import Detail from "../PayloadAction/Detail/Detail";
import Delete from "../PayloadAction/Delete/Delete";

import { Button, Card } from "../../components/Wrappers/Wrappers";

// icons
import {
    Info as InfoIcon,
    Delete as DeleteIcon
} from "@material-ui/icons";

const TransitionDialog = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
})

export default function PayloadCard({ payload }) {
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

            <Card
                cardHeader={true}
                headerTitle={payload.name}
                headerSubtitle={payload.description}
                cardAction={true}
                cardActionChild={
                    <>
                        <Button
                            onClick={handleClickDetail}
                            startIcon={<InfoIcon/>}
                        >
                            Detail
                        </Button>

                        <Box m={2}>
                        </Box>

                        <Button
                            color="secondary"
                            onClick={handleClick('bottom')}
                            startIcon={<DeleteIcon/>}
                        >
                            Delete
                        </Button>
                    </>
                }
            />
        </>
    )
}
