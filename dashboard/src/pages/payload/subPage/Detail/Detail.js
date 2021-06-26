import React, { useState } from "react";
import {
    AppBar,
    Chip,
    Grid,
    IconButton,
    Input as MuiInput,
    Toolbar
} from "@material-ui/core";

import Editor from "@monaco-editor/react"
import { useForm, Form } from "../../../../components/useForm/useForm";
import { Button, Card, Input, Select, Typography } from "../../../../components/Wrappers/Wrappers";

// icons
import {
    Edit as EditIcon,
    Save as SaveIcon,
    Close as CloseIcon
} from "@material-ui/icons";

// styles
import useStyles from "./styles";
import PayloadService from "../../../../services/PayloadService";

import permissions from "../../../../static/mocks/permissions";

const resultTypeOptions = [
    { id: "String", title: "String" },
    { id: "JSON", title: "JSON" },
    { id: "Image", title: "Image" },
    { id: "Sound", title: "Sound" },
]

export default function Detail({ payload, createMode = false, ...props }) {
    const classes = useStyles();

    const [isEditMode, setEditMode] = useState(false);

    function changeEditMode() {
        setEditMode(!isEditMode);
    }

    const editorOptions = {
        readOnly: !isEditMode,
        theme: "vs",
        loading: "Loading..."
    }

    function handleEditorChange(value) {
        values.content = value;
    }

    function changeVisibility() {
        props.changeVisibility();
    }

    // TODO: To complete
    function addPayload(payload) {
        PayloadService.createPayload(payload)
            .then()
            .catch()
            .finally(() => {
                // Refresh page
                window.location.reload();
            })
    }

    // TODO: To complete
    function updatePayload(payloadID, payloadData) {
        PayloadService.editPayload(payloadID, payloadData)
            .then()
            .catch()
            .finally(() => {
                // Refresh page
                window.location.reload();
            })
    }

    const { values, errors, handleInputChange } = useForm(payload);
    const handleSubmit = (e) => { // TODO: To complete
        e.preventDefault();

        console.log("MODIFICATO");
        console.log(values)

        if (createMode) {
            addPayload(values)
        } else {
            updatePayload(payload._id, values);
        }
    }

    const data = [
        {
            title: "Description",
            subheader:
                <Input
                    name="description"
                    value={values.description}
                    onChange={handleInputChange}
                    error={errors.description}
                    disabled={!isEditMode}
                />
        },
        {
            title: "Permissions", // TODO: Add edit mode
            subheader:
                <Select
                    name="vulnerabilities"
                    value={values.vulnerabilities}
                    disabled={!isEditMode}
                    input={<MuiInput id="select-multiple-chip" />}
                    onChange={handleInputChange}
                    options={permissions}
                    multiple={true}
                    renderValue={(selected) => (
                        <div className={classes.chips}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} className={classes.chip} />
                            ))}
                        </div>
                    )}
                />
        },
        {
            title: "Return",
            subheader:
                <Select
                    name="resultType"
                    value={values.resultType}
                    disabled={!isEditMode}
                    onChange={handleInputChange}
                    options={resultTypeOptions}
                />
        },
        {
            title: "Executed",
            subheader:
                <Input
                    name="executed"
                    value="()"
                    onChange={handleInputChange}
                    error={errors.executed}
                    disabled={!isEditMode}
                />
        }
    ];

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={changeVisibility} aria-label="Close">
                            <CloseIcon/>
                        </IconButton>

                        <Input // TODO: Fix color when edit mode is off
                            name="name"
                            value={values.name}
                            onChange={handleInputChange}
                            error={errors.name}
                            disabled={!isEditMode}
                            className={classes.title}
                            inputProps={{
                                className: classes.textFiled
                            }}
                        />

                        {!isEditMode ?
                            <Button
                                type="submit"
                                color="secondary"
                                startIcon={<EditIcon/>}
                                onClick={changeEditMode}
                                className={classes.button}
                            >
                                Edit
                            </Button>
                            :
                            <Button
                                startIcon={<SaveIcon/>}
                                onClick={changeEditMode}
                                className={classes.button}
                            >
                                Save
                            </Button>
                        }

                    </Toolbar>
                </AppBar>

                <Grid container spacing={4}>
                    {data.map(item => (
                        <Grid key={payload.title} item lg={3} md={4} sm={6} xs={12}>
                            <Card
                                cardHeader={true}
                                headerTitle={item.title}
                                cardContent={true}
                                cardContentContent={item.subheader}
                            />
                        </Grid>
                    ))}

                    <Grid item xs={12}>
                        <Card
                            cardHeader={true}
                            headerTitle="Code"
                            cardContent={isEditMode}
                            cardContentContent={
                                <>
                                    <Typography variant="h6">Be careful:</Typography>
                                    <Typography>- Please use only /* Block comment */</Typography>
                                    <Typography>- Please don't use nested class</Typography>
                                    <Typography>- You can call another class in this code only using dynamic loading and
                                        reflection</Typography>
                                </>
                            }
                            other={
                                <Editor
                                    height="50vh" // TODO: To fix
                                    language="java"
                                    options={editorOptions}
                                    value={values.content}
                                    onChange={handleEditorChange}
                                />
                            }
                        />
                    </Grid>
                </Grid>
            </Form>
        </>
    )
}
