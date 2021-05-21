import React, { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Box, FormControl, Grid, MenuItem, Paper, Select } from "@material-ui/core";
import PayloadService from "../../services/PayloadService";

import { Button } from "../../components/Wrappers/Wrappers";

import useStyles from "./styles";

import ImageUploader from "react-images-upload"

export default function Steganography({ ...props }) {
    let classes = useStyles();

    const [selectedPayload, setSelectedPayload] = useState("")
    const handleChangeSelectedPayload = (event) => {
        if (selectedPayload === "") {
            setIsImageEncoded(false);
        }

        setSelectedPayload(event.target.value);
    }

    const [pictures, setPictures] = useState([]);
    const onDrop = picture => {
        setPictures([...pictures, picture])
    }

    const [isImgEncoded, setIsImageEncoded] = useState(false);
    function changeIsImgEncoded() {
        setIsImageEncoded(!isImgEncoded);
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

                <Box clone pt={2} pr={1} pb={1} pl={2}>
                    <Paper elevation={0}>
                        <Grid container direction="column" spacing={2} alignItems="center" wrap="nowrap">
                            <Grid item>
                                <ImageUploader
                                    {...props}
                                    withIcon={true}
                                    withLabel={false}
                                    withPreview={true}
                                    singleImage={true}
                                    onChange={onDrop}
                                    imgExtension={[".jpg", ".png"]}
                                />
                            </Grid>

                            <Grid item>
                                {pictures.length !== 0 && (
                                    <FormControl variant="outlined">
                                        <Select
                                            labelId="Payload select"
                                            id="Payload select"
                                            value={selectedPayload}
                                            onChange={handleChangeSelectedPayload}
                                        >
                                            <MenuItem value="">
                                                None
                                            </MenuItem>

                                            {payload.map((item) => (
                                                <MenuItem value={item.content}>{item.name}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                )}
                            </Grid>

                            <Grid item>
                                {pictures.length !== 0 && selectedPayload !== "" && (
                                    <Button onClick={changeIsImgEncoded}>
                                        Encode
                                    </Button>
                                )}
                            </Grid>

                            <Grid item>
                                {pictures.length !== 0 && selectedPayload !== "" && isImgEncoded && (
                                    <Button>
                                        Download
                                    </Button>
                                )}
                            </Grid>
                        </Grid>
                    </Paper>
                </Box>
            </>
        );
    }
}
