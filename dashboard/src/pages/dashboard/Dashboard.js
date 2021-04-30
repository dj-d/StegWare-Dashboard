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

            <Grid container spacing={4}>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image={logo}
                            />
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}
