import React from "react";
import { Card, CardContent, CardHeader, CardMedia, IconButton, Link } from "@material-ui/core";

// styles
import useStyles from "./styles";

// icons
import {
    GitHub as GitHubIcon,
    LinkedIn as LinkedInIcon,
    Facebook as FacebookIcon
} from "@material-ui/icons";

export default function UserCard({ user }) {
    let classes = useStyles();

    return (
        <>
            <Card className={classes.card}>
                <CardMedia image={user.image} title={user.name} className={classes.media}/>

                <CardContent className={classes.content}>
                    <CardHeader title={user.name} subheader={user.description} classes={{
                        root: classes.header,
                        title: classes.headerTitle,
                        subheader: classes.headerSubtitle
                    }}/>

                    <div className={classes.cardLink}>
                        {user.social.github.length > 0 && (
                            <Link href={user.social.github} target={'_blank'}>
                                <IconButton aria-label={"github"}>
                                    <GitHubIcon color="primary" className={classes.icon}/>
                                </IconButton>
                            </Link>
                        )}

                        {user.social.linkedin.length > 0 && (
                            <Link href={user.social.linkedin} target={'_blank'}>
                                <IconButton aria-label={"github"}>
                                    <LinkedInIcon color="primary" className={classes.icon}/>
                                </IconButton>
                            </Link>
                        )}

                        {user.social.facebook.length > 0 && (
                            <Link href={user.social.facebook} target={'_blank'}>
                                <IconButton aria-label={"github"}>
                                    <FacebookIcon color="primary" className={classes.icon}/>
                                </IconButton>
                            </Link>
                        )}
                    </div>
                </CardContent>
            </Card>
        </>
    );
}
