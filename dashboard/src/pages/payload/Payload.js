import React, { useEffect, useState } from "react";
import { Button, Grid } from "@material-ui/core";
import Skeleton from '@material-ui/lab/Skeleton';

// component
import PageTitle from "../../components/PageTitle";
import PayloadCard from "../../components/PayloadCard/PayloadCard";

// service
import PayloadService from "../../services/PayloadService";

import {
    Add as AddIcon
} from "@material-ui/icons";

import useStyles from "./styles";

export default function Payload() {
    let classes = useStyles();

    const [errorPayload, setErrorPayload] = useState(null);
    const [isLoadedPayload, setIsLoadedPayload] = useState(false);
    const [payloads, setPayloads] = useState([]);

    const value = ["", "", "", "", "", "", "", ""];

    useEffect(() => {
        setIsLoadedPayload(true);

        PayloadService.fetchPayloads()
            .then((res) => {
                    setIsLoadedPayload(false);
                    setPayloads(res.data);
                }
            )
            .catch((error) => {
                setIsLoadedPayload(false);
                setErrorPayload(error);
            })
    }, []);

    // TODO: To improve error and isLoaded
    if (errorPayload) {
        return <div>Error: {errorPayload.message}</div>;
    } else if (isLoadedPayload) {
        return (
            <>
                <PageTitle title="Payloads"/>

                <Grid container spacing={4}>
                    {value.map((item, index) => (
                        <Grid key={index} item lg={3} md={4} sm={6} xs={12}>
                            <Skeleton
                                variant="rect"
                                animation="wave"
                                width={350}
                                height={200}/>
                        </Grid>
                    ))}
                </Grid>
            </>
        )
    } else {
        return (
            <>
                <PageTitle
                    title="Payloads"
                    button={
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<AddIcon/>}
                            className={classes.button}
                        >
                            CREATE NEW
                        </Button>
                    }/>

                <Grid container spacing={4}>
                    {payloads.map(payload => (
                        <Grid key={payload.name} item lg={3} md={4} sm={6} xs={12}>
                            <PayloadCard payload={payload}/>
                        </Grid>
                    ))}
                </Grid>
            </>
        );
    }
}
