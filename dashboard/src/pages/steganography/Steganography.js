import React, { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Box, Grid, Paper } from "@material-ui/core";
import PayloadService from "../../services/PayloadService";

import { Button, Select } from "../../components/Wrappers/Wrappers";
import { useForm, Form } from "../../components/useForm/useForm";

import { DropzoneArea } from 'material-ui-dropzone'

import defaultSteganography from "../../static/mocks/defaultSteganography";

export default function Steganography() {

    const { values, handleInputChange } = useForm(defaultSteganography);
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(values);
    }

    const handleImageUploaderChange = picture => {
        values.image = picture;
    }

    const handleFileSelected = (event) => {
        console.log(event.target.files[0]);
    }

    const [errorPayload, setErrorPayload] = useState(null);
    const [isLoadedPayload, setIsLoadedPayload] = useState(false);
    const [payload, setPayload] = useState([]);

    useEffect(() => {
        setIsLoadedPayload(true);

        PayloadService.fetchPayloads()
            .then((res) => {
                setIsLoadedPayload(false);
                setPayload(res.data);
            })
            .catch((error) => {
                setIsLoadedPayload(false)
                setErrorPayload(error)
            })
    }, []);

    if (errorPayload) {
        return <div>Error: {errorPayload.message}</div>
    } else if (isLoadedPayload) {
        return <div>Is Loading</div>
    } else {
        return (
            <>
                <PageTitle title="Steganography"/>

                <Form onSubmit={handleSubmit}>
                    <Box clone pt={2} pr={1} pb={1} pl={2}>
                        <Paper elevation={0}>
                            <Grid container direction="column" spacing={2} alignItems="center" wrap="nowrap">
                                <Grid item>
                                    <DropzoneArea
                                        acceptedFiles={['image/*']}
                                        filesLimit={1}
                                        dropzoneText="Drag and drop and image here or click"
                                        onChange={handleImageUploaderChange}
                                    />
                                </Grid>

                                <Grid item>
                                    <Select
                                        name="payload"
                                        value={values.payload}
                                        onChange={handleInputChange}
                                        options={payload}
                                    />
                                </Grid>

                                <Grid item>
                                    <Button onClick={handleSubmit}>
                                        Encode
                                    </Button>
                                </Grid>

                                <Grid item>
                                    <Button>
                                        Download
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Box>
                </Form>
            </>
        );
    }
}
