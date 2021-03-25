import React from "react";
import {Avatar, CardActionArea, CardContent, Grid} from "@material-ui/core";

// styles
import useStyles from "./styles";

// component
import PageTitle from "../../components/PageTitle";
import {Typography} from "../../components/Wrappers";

import team_data from "../../static/moks/team"

function TeamPage() {
	let classes = useStyles();

	return (
		<>
			<PageTitle title="Team"/>

			<Grid container={true} spacing={4} justify="center" alignItems="center">
				{team_data.map(user => (
					<Grid item lg={3} md={4} sm={6} xs={12} justify="center">
						<CardActionArea>
							<CardContent>
								<Avatar alt={user.name} src={user.img} className={classes.avatar}/>
								<Typography variant="h3" align="center">
									{user.name}
								</Typography>
							</CardContent>
						</CardActionArea>
					</Grid>
				))}
			</Grid>
		</>
	);
}

export default TeamPage;
