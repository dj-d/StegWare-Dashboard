import React, { useState } from "react";

// icons
import {
    Close as CloseIcon,
    ArrowRight as ArrowRightIcon,
    Delete as DeleteIcon
} from "@material-ui/icons";

// styles
import useStyles from "./styles";
import {
    AppBar,
    Dialog, DialogActions, DialogTitle,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar
} from "@material-ui/core";
import { Button, Card, Typography } from "../../../../components/Wrappers/Wrappers";
import AttackService from "../../../../services/AttackService";

export default function Result({ attack, ...props }) {
    const classes = useStyles();

    const [openDelete, setOpenDelete] = useState(false);

    const handleClickOpenDelete = () => {
        setOpenDelete(!openDelete)
    }

    function changeVisibility() {
        props.changeVisibility();
    }

    function deleteAction() {
        AttackService.deleteAttack(attack._id)
            .then()
            .catch()
            .finally(() => {
                    window.location.reload();
                }
            )
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
            <Dialog
                open={openDelete}
                onClose={handleClickOpenDelete}
            >
                <DialogTitle
                    className={classes.dialog}
                >
                    Are you sure?
                </DialogTitle>
                <DialogActions>
                    <Button
                        color="secondary"
                        onClick={handleClickOpenDelete}
                        className={classes.button}
                    >
                        No
                    </Button>

                    <Button
                        onClick={deleteAction}
                        className={classes.button}
                    >
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>

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

                    <Button
                        color="secondary"
                        startIcon={<DeleteIcon/>}
                        onClick={handleClickOpenDelete}
                        className={classes.button}
                    >
                        Delete
                    </Button>
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
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Card
                        cardHeader={true}
                        headerTitle={"Result"}
                        headerSubtitle={"Result type: " + attack.resultType}
                        cardContent={true}
                        cardContentContent={attack.result}
                    />
                </Grid>
            </Grid>
        </>
    )
}
