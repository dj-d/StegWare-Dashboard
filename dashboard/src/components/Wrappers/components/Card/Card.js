import React from "react";
import {
    Card as MuiCard,
    CardActionArea as MuiCardActionArea,
    CardContent as MuiCardContent,
    CardHeader as MuiCardHeader
} from "@material-ui/core";

import useStyles from "./styles";

export default function Card({ cardHeader = false, headerTitle, headerSubtitle, cardContent = false, cardContentContent, cardAction = false, cardActionChild, other }) {
    const classes = useStyles();

    return (
        <MuiCard className={classes.card}>
            {cardHeader && (
                <MuiCardHeader
                    title={headerTitle}
                    subheader={headerSubtitle}
                    classes={{
                        root: classes.header,
                        title: classes.headerTitle,
                        subheader: classes.headerSubtitle
                    }}
                />
            )}

            {cardContent && (
                <MuiCardContent className={classes.cardContent}>
                    {cardContentContent}
                </MuiCardContent>
            )}

            {cardAction && (
                <MuiCardActionArea className={classes.cardAction}>
                    {cardActionChild}
                </MuiCardActionArea>
            )}

            {other}
        </MuiCard>
    )
}
