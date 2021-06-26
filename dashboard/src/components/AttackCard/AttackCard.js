import React, { useEffect, useState } from "react";
import { Button, Card, Typography } from "../Wrappers/Wrappers";
import { Popper} from "@material-ui/core";

// icons
import { Delete as DeleteIcon, Info as InfoIcon } from "@material-ui/icons";
import PayloadService from "../../services/PayloadService";
import Delete from "../Action/Delete/Delete";

export default function AttackCard({ attack }) {
    const [payloadName, setPayloadName] = useState(null);
    const [attackDate, setAttackDate] = useState(null);

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

    function timeConverter(){
        let a = new Date(attack.timestamp * 1000);

        let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        let year = a.getFullYear();
        let month = months[a.getMonth()];
        let date = a.getDate();
        let hour = a.getHours();
        let min = a.getMinutes();
        let sec = a.getSeconds();

        setAttackDate(date + ' ' + month + ' ' + year + ' - ' + hour + ':' + min + ':' + sec);
    }

    useEffect(() => {
        PayloadService.fetchPayload(attack.payloadId)
            .then((res) => {
                setPayloadName(res.data.name);
            })
            .catch((error) => {
                console.log("Error: " + error);
            })

        timeConverter()
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
                            <b>API</b>: {attack.device.api}
                        </Typography>
                        <Typography>
                            <b>Payload</b>: {payloadName}
                        </Typography>
                        <Typography>
                            <b>Date</b>: {attackDate}
                        </Typography>
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
