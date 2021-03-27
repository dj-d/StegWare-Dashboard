import React from "react";
import { Box, Button, Card, CardActions, CardHeader, Divider } from "@material-ui/core";

// icons
import {
    Info as InfoIcon,
    Delete as DeleteIcon
} from "@material-ui/icons";

// styles
import useStyles from "./styles";

export default function PayloadCard({ payload }) {
    let classes = useStyles();

    return (
        <>
            <Card className={classes.card}>
                <CardHeader
                    title={payload.name}
                    subheader={payload.description}
                    classes={{
                        root: classes.header,
                        title: classes.headerTitle,
                        subheader: classes.headerSubtitle
                    }}
                />

                <Divider variant="middle" />

                <CardActions className={classes.action}>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<InfoIcon/>}
                        className={classes.button}
                    >
                        More
                    </Button>
                    <Box m={2}>
                    </Box>
                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<DeleteIcon/>}
                        className={classes.button}
                    >
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}
