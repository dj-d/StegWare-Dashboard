import React from "react";

// icons
import {
    Close as CloseIcon,
    ArrowRight as ArrowRightIcon
} from "@material-ui/icons";

// styles
import useStyles from "./styles";
import { AppBar, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar } from "@material-ui/core";
import { Card, Typography } from "../../../../components/Wrappers/Wrappers";

export default function Result({ attack, ...props }) {
    const classes = useStyles();

    function changeVisibility() {
        props.changeVisibility();
    }

    const timing = [
        {
            title: "Parse Time",
            data: attack.timing.parseTime
        },
        {
            title: "Compile Time",
            data: attack.timing.compileTime
        },
        {
            title: "Dynamic Time",
            data: attack.timing.dynamicLoadingTime
        },
        {
            title: "Execution Time",
            data: attack.timing.executionTime
        }
    ]

    return (
        <>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={changeVisibility} aria-label="Close">
                        <CloseIcon/>
                    </IconButton>

                    <Typography
                        className={classes.title}
                    >
                        Attack Result
                    </Typography>
                </Toolbar>
            </AppBar>

            <Grid container spacing={4}>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Card
                        cardHeader={true}
                        headerTitle="Device information"
                        cardContent={true}
                        cardContentContent={
                            <>
                                <Typography>
                                    <Typography>
                                        <b>Model</b>: {attack.device.model}
                                    </Typography>
                                    <b>API</b>: {attack.device.api}
                                </Typography>

                                <Typography>
                                    <b>Permissions</b>:
                                </Typography>

                                <List component="nav" aria-label="permission">
                                    {attack.device.permissions.map(permission => (
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowRightIcon/>
                                            </ListItemIcon>
                                            <ListItemText secondary={permission.substring(19,)}/>
                                        </ListItem>
                                    ))}
                                </List>
                            </>
                        }
                    />
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Card
                        cardHeader={true}
                        headerTitle="Timing"
                        cardContent={true}
                        cardContentContent={
                            <List component="nav" aria-label="timing">
                                {timing.map(item => (
                                    <ListItem>
                                        <ListItemIcon>
                                            <ArrowRightIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary={item.title} secondary={item.data + " ms"}/>
                                    </ListItem>
                                ))}
                            </List>
                        }
                    />
                </Grid>
            </Grid>
        </>
    )
}
