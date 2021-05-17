import React from "react";
import {
    Card as MuiCard,
    CardActionArea as MuiCardActionArea,
    CardContent as MuiCardContent,
    CardHeader as MuiCardHeader
} from "@material-ui/core";

import useStyle from "./style";

export default function Card({ cardHeader = false, headerTitle, headerSubtitle, cardContent = false, cardContentContent, cardAction = false, other }) {
    const classes = useStyle();

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

            {other}
        </MuiCard>
    )
}
