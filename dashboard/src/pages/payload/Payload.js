import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Skeleton from '@material-ui/lab/Skeleton';

// component
import PageTitle from "../../components/PageTitle";
import PayloadCard from "../../components/PayloadCard/PayloadCard";

// service
import PayloadService from "../../services/PayloadService";

function PayloadPage() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [payloads, setPayloads] = useState([]);

    const value = ["", "", "", "", "", "", "", ""];

    useEffect(() => {
        setIsLoaded(true);

        PayloadService.fetchPayloads()
            .then((res) => {
                    setIsLoaded(false);
                    setPayloads(res.data);
                }
            )
            .catch((error) => {
                setIsLoaded(false);
                setError(error);
            })
    }, []);

    // TODO: To improve error and isLoaded
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (isLoaded) {
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
                <PageTitle title="Payloads"/>

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

export default PayloadPage;
