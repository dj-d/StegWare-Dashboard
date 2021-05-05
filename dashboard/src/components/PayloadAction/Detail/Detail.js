import React, { useState } from "react";
import {
    AppBar,
    Button,
    Card,
    CardContent,
    CardHeader, FormControl,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemText,
    MenuItem,
    Select,
    TextField,
    Toolbar,
    Typography
} from "@material-ui/core";

import Editor from "@monaco-editor/react"

// icons
import {
    Edit as EditIcon,
    Save as SaveIcon,
    Close as CloseIcon
} from "@material-ui/icons";

// styles
import useStyles from "./styles";

export default function Detail({ payload, ...props }) {
    const classes = useStyles();

    const [returnType, setReturnType] = useState(payload.resultType)

    const handleChangeReturnType = (event) => {
        setReturnType(event.target.value);
    }

    const [isEditMode, setEditMode] = useState(false);

    function changeEditMode() {
        setEditMode(!isEditMode);
    }

    const editorOptions = {
        readOnly: !isEditMode,
        theme: "vs",
        loading: "Loading..."
    }

    const data = [
        {
            title: "Description",
            subheader:
                <TextField
                    disabled={!isEditMode}
                    id="Description"
                    defaultValue={payload.description}
                    variant="outlined"
                />
        },
        {
            title: "Permissions", // TODO: Add edit mode
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
            subheader:
                <FormControl variant="outlined">
                    <Select
                        disabled={!isEditMode}
                        value={returnType}
                        onChange={handleChangeReturnType}
                    >
                        <MenuItem value="String">String</MenuItem>
                        <MenuItem value="JSON">JSON</MenuItem>
                        <MenuItem value="Image">Image</MenuItem>
                        <MenuItem value="Sound">Sound</MenuItem>
                    </Select>
                </FormControl>
        },
        {
            title: "Executed",
            subheader: <TextField
                disabled={!isEditMode}
                id="Executed"
                defaultValue="()"
                variant="outlined"
            />
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

                    <TextField // TODO: Fix text color
                        disabled={!isEditMode}
                        id="title"
                        defaultValue={payload.name}
                        variant="outlined"
                        className={classes.title}
                        inputProps={{
                            className: classes.textFiled
                        }}
                    />

                    {!isEditMode ?
                        <Button
                            variant="contained"
                            color="secondary"
                            startIcon={<EditIcon/>}
                            className={classes.button}
                            onClick={changeEditMode}
                        >
                            Edit
                        </Button>
                        :
                        <Button
                            variant="contained"
                            color="primary" // TODO: Change color
                            startIcon={<SaveIcon/>}
                            className={classes.button}
                            onClick={changeEditMode}
                        >
                            Save
                        </Button>}

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
                        {isEditMode && ( // TODO: To improve
                            <CardContent className={classes.cardContent}>
                                <Typography variant="h6">Be careful:</Typography>
                                <Typography>- Please use only /* Block comment */</Typography>
                                <Typography>- Please don't use nested class</Typography>
                                <Typography>- You can call another class in this code only using dynamic loading and
                                    reflection</Typography>
                            </CardContent>
                        )}

                        <Editor
                            height="50vh" // TODO: To fix
                            language="java"
                            options={editorOptions}
                            value={payload.content}
                        />

                    </Card>
                </Grid>
            </Grid>
        </>
    )
}
