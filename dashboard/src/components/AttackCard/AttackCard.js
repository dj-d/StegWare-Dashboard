import React, { useEffect, useState } from "react";
import { Button, Card, Typography } from "../Wrappers/Wrappers";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

// icons
import {
    FiberManualRecord as DotIcon,
    Info as InfoIcon,
    Delete as DeleteIcon
} from "@material-ui/icons";
import PayloadService from "../../services/PayloadService";

export default function AttackCard({ attack }) {
    const [payloadName, setPayloadName] = useState(null)

    const data = [
        "Download time: " + attack.timing.download_time,
        "Parse time: " + attack.timing.parse_time,
        "Compile time: " + attack.timing.compile_time,
        "Dynamic loading time: " + attack.timing.dynamic_loading_time,
        "Execution time: " + attack.timing.execution_time
    ];

    useEffect(() => {
        PayloadService.fetchPayload(attack.payload_id)
            .then((res) => {
                setPayloadName(res.data.name);
            })
            .catch((error) => {
                console.log("Error: " + error);
            })
    }, [attack.payload_id]);

    return (
        <>
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
