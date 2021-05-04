import React from "react";
import { Grid, Card, CardMedia, CardActionArea } from "@material-ui/core";

// components
import PageTitle from "../../components/PageTitle";

// styles
import useStyles from "./styles";

// images
import logo from "../../static/images/StegWare_logo.png"

export default function Dashboard() {
    let classes = useStyles();

    return (
        <>
            <PageTitle title="Dashboard"/>

            <Grid container spacing={4} justify="center">
                <Grid item sm={4} xs={6}>
                    <Card>
                        <CardMedia
                            component="img"
                            image={logo}
                        />
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}
