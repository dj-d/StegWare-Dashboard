import React, { useEffect, useState } from "react";
import { Button, Card, Typography } from "../Wrappers/Wrappers";
import { List, ListItem, ListItemIcon, ListItemText, Popper } from "@material-ui/core";

// icons
import {
    FiberManualRecord as DotIcon,
    Info as InfoIcon,
    Delete as DeleteIcon
} from "@material-ui/icons";
import PayloadService from "../../services/PayloadService";
import Delete from "../Action/Delete/Delete";

export default function AttackCard({ attack }) {
    const [payloadName, setPayloadName] = useState(null)

    const [anchorEl, setAnchorEl] = useState(null);
    const [placement, setPlacement] = useState();
    const [openDelete, setOpenDelete] = useState(false);

    const [openResult, setOpenResult] = useState(false);

    const handleClickResult = () => {
        setOpenResult(!openResult);
    }

    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpenDelete((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    }

    function changeDeleteVisibility(newValue) {
        setOpenDelete(newValue);
    }

    const data = [
        "Parse time: " + attack.timing.parseTime,
        "Compile time: " + attack.timing.compileTime,
        "Dynamic loading time: " + attack.timing.dynamicLoadingTime,
        "Execution time: " + attack.timing.executionTime
    ];

    useEffect(() => {
        PayloadService.fetchPayload(attack.payloadId)
            .then((res) => {
                setPayloadName(res.data.name);
            })
            .catch((error) => {
                console.log("Error: " + error);
            })
    }, [attack.payload_id]);

    return (
        <>
            <Popper open={openDelete} anchorEl={anchorEl} placement={placement} disablePortal={true}>
                <Delete changeVisibility={changeDeleteVisibility} attackId={attack._id} collection="attack"/>
            </Popper>

            <Card
                cardHeader={true}
                headerTitle={attack.device.model}
                headerSubtitle={
                    <>
                        <Typography>
                            API: {attack.device.api}
                        </Typography>
                        <Typography>
                            Payload: {payloadName}
                        </Typography>
                    </>
                }
                cardContent={true}
                cardContentContent={
                    <>
                        <List component="nav" aria-label="timing">
                            {data.map(item => (
                                <ListItem>
                                    <ListItemIcon>
                                        <DotIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary={item}/>
                                </ListItem>
                            ))}
                        </List>
                    </>
                }
                cardAction={true}
                cardActionChild={
                    <>
                        <Button
                            color="primary"
                            startIcon={<InfoIcon/>}
                        >
                            Results
                        </Button>
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
