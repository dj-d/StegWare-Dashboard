import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

// component
import PageTitle from "../../components/PageTitle/PageTitle";
import AttackCard from "../../components/AttackCard/AttackCard";

// service
import AttackService from "../../services/AttackService";

export default function Attack() {
    const [errorAttack, setErrorAttack]         = useState(null);
    const [isLoadedAttack, setIsLoadedAttack]   = useState(false);
    const [attacks, setAttacks]                 = useState([]);

    const value = ["", "", "", "", "", "", "", ""];

    useEffect(() => {
        setIsLoadedAttack(true);

        AttackService.fetchAttacks()
            .then((res) => {
                setIsLoadedAttack(false);
                setAttacks(res.data);
            })
            .catch((error) => {
                setIsLoadedAttack(false);
                setErrorAttack(error);
            })
    }, []);

    if (errorAttack) {
        return <div>Error: {errorAttack.message}</div>;
    } else if (isLoadedAttack) {
        return (
            <>
                <PageTitle title="Attacks"/>

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
                <PageTitle title="Attacks"/>

                <Grid container spacing={4}>
                    {attacks.map(attack => (
                        <Grid key={attack._id} item lg={3} md={4} sm={6} xs={12}>
                            <AttackCard attack={attack}/>
                        </Grid>
                    ))}
                </Grid>
            </>
        );
    }
}
