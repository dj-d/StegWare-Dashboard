import React, { forwardRef, useEffect, useState } from "react";
import { Dialog, Grid, Slide } from "@material-ui/core";
import Skeleton from '@material-ui/lab/Skeleton';

import { Button } from "../../components/Wrappers/Wrappers";

import defaultPayload from "../../static/mocks/defaultPayload";

// component
import PageTitle from "../../components/PageTitle/PageTitle";
import PayloadCard from "../../components/PayloadCard/PayloadCard";

// service
import PayloadService from "../../services/PayloadService";

import {
    Add as AddIcon
} from "@material-ui/icons";
import Detail from "./subPage/Detail/Detail";

const TransitionDialog = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
})

export default function Payload() {
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

    const [openCreate, setOpenCreate] = useState(false);

    const handleClickCreate = () => {
        setOpenCreate(!openCreate);
    }

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
                <Dialog fullScreen open={openCreate} onClose={handleClickCreate} TransitionComponent={TransitionDialog}>
                    <Detail payload={defaultPayload} createMode={true} changeVisibility={handleClickCreate} />
                </Dialog>

                <PageTitle
                    title="Payloads"
                    button={
                        <Button
                            startIcon={<AddIcon/>}
                            onClick={handleClickCreate}
                        >
                            Create new
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
