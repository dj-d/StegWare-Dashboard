import React from "react";
import {
    Card as MuiCard,
    CardActionArea as MuiCardActionArea,
    CardContent as MuiCardContent,
    CardHeader as MuiCardHeader
} from "@material-ui/core";

import useStyle from "./style";

export default function Card(props) {
    const classes = useStyle();

    const {
        cardHeader = false,
        headerTitle,
        headerSubtitle,
        cardContent = false,
        cardContentContent,
        cardAction = false,
    } = props;

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

            {/* TODO: To complete */}
            {cardContent && (
                <MuiCardContent className={classes.cardContent}>
                    {cardContentContent}
                </MuiCardContent>
            )}

            {/* TODO: To complete */}
            {cardAction && (
                <MuiCardActionArea>

                </MuiCardActionArea>
            )}
        </MuiCard>
    )
}
