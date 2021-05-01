import React from "react";
import {
    AppBar,
    Button,
    Card,
    CardHeader,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Toolbar, Typography
} from "@material-ui/core";

import Editor from "@monaco-editor/react"

// icons
import {
    Edit as EditIcon,
    Close as CloseIcon
} from "@material-ui/icons";

// styles
import useStyles from "./styles";

export default function Detail({ payload, ...props }) {
    const classes = useStyles();

    const data = [
        {
            title: "Description",
            subheader: payload.description
        },
        {
            title: "Permissions",
            subheader:
                <List>
                    {payload.vulnerabilities.map(item => (
                        <ListItem>
                            <ListItemText primary={item}/>
                        </ListItem>
                    ))}
                </List>
        },
        {
            title: "Return",
            subheader: payload.resultType
        },
        {
            title: "Executed",
            subheader: "()"
        }
    ];

    function changeVisibility() {
        props.changeVisibility();
    }

    return (
        <>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={changeVisibility} aria-label="Close">
                        <CloseIcon/>
                    </IconButton>

                    <Typography variant="h6" className={classes.title}>
                        {payload.name}
                    </Typography>

                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<EditIcon/>}
                        className={classes.button}
                    >
                        Edit
                    </Button>
                </Toolbar>
            </AppBar>

            <Grid container spacing={4}>
                {data.map(item => (
                    <Grid key={payload.title} item lg={3} md={4} sm={6} xs={12}>
                        <Card className={classes.card}>
                            <CardHeader
                                title={item.title}
                                subheader={item.subheader}
                                classes={{
                                    root: classes.header,
                                    title: classes.headerTitle,
                                    subheader: classes.headerSubtitle
                                }}
                            />
                        </Card>
                    </Grid>
                ))}

                <Grid item xs={12}>
                    <Card className={classes.card}>
                        <CardHeader
                            title="Code"
                            classes={{
                                root: classes.header,
                                title: classes.headerTitle,
                                subheader: classes.headerSubtitle
                            }}
                        />

                        <Editor
                            height="50vh" // TODO: To fix
                            language="java"
                            theme='vs'
                            value={payload.content}
                            loading={"Loading..."}
                        />

                    </Card>
                </Grid>
            </Grid>
        </>
    )
}
