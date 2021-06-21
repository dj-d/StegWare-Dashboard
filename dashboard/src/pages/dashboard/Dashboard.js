import React from "react";
import { Grid, Card, CardMedia, CardContent } from "@material-ui/core";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import { Typography } from "../../components/Wrappers/Wrappers";

// styles
import useStyles from "./styles";

// images
import logo from "../../static/images/StegWare_logo.png";
import androidLogo from "../../static/images/dashboard/android_logo.png";
import dynamicCompiling from "../../static/images/dashboard/dynamic_compiling.png";
import dynamicLoading from "../../static/images/dashboard/dynamic_loading.png";
import reflection from "../../static/images/dashboard/reflection.png";

export default function Dashboard() {
    let classes = useStyles();

    const data = [
        {
            text: "Android Malware",
            image: androidLogo
        },
        {
            text: "Dynamic Compiling",
            image: dynamicCompiling
        },
        {
            text: "Dynamic Loading",
            image: dynamicLoading
        },
        {
            text: "Reflection",
            image: reflection
        }
    ]

    return (
        <>
            <PageTitle title="Dashboard"/>

            <Grid container spacing={4} justify="center">
                <Grid item sm={3} xs={4}>
                    <Card className={classes.card}>
                        <CardMedia
                            component="img"
                            image={logo}
                        />
                    </Card>
                </Grid>

                <Grid item container spacing={4} justify="center">
                    {data.map(item => (
                        <Grid item sm={2} xs={3}>
                            <Card className={classes.card}>
                                <div align="center">
                                    <CardMedia
                                        className={classes.cardMedia}
                                        component="img"
                                        image={item.image}
                                    />
                                </div>

                                <CardContent>
                                    <Typography align="center" variant="h4">
                                        {item.text}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </>
    );
}
