import React from "react";
import { Grid } from "@material-ui/core";

// component
import PageTitle from "../../components/PageTitle";
import UserCard from "../../components/UserCard/UserCard";

import team_data from "../../static/mocks/team";

export default function TeamPage() {
    return (
        <>
            <PageTitle title="Team"/>

            <Grid container={true} spacing={4} justify="center">
                {team_data.map(user => (
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <UserCard user={user}/>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}
