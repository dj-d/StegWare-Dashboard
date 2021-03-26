import React from "react";
import {Card, CardContent, CardMedia, Grid, IconButton, Link, Typography} from "@material-ui/core";

// component
import PageTitle from "../../components/PageTitle";

// icons
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

// styles
import useStyles from "./styles";

import team_data from "../../static/mocks/team";

function TeamPage() {
	let classes = useStyles();

	return (
		<>
			<PageTitle title="Team"/>

			<Grid container={true} spacing={4} justify="center">
				{team_data.map(user => (
					<Grid item lg={3} md={4} sm={6} xs={12}>
						<Card className={classes.card}>
							<CardMedia image={user.img} title={user.name} className={classes.media}/>

							<CardContent className={classes.content}>
								<div className={classes.cardText}>
									<Typography align="center" className={classes.title}>
										{user.name}
									</Typography>
								</div>

								<div align="center" className={classes.cardLink}>
									{user.github.length > 0 && (
										<Link href={user.github} target={'_blank'}>
											<IconButton aria-label={"github"}>
												<GitHubIcon color="primary" className={classes.icon}/>
											</IconButton>
										</Link>
									)}

									{user.linkedin.length > 0 && (
										<Link href={user.linkedin} target={'_blank'}>
											<IconButton aria-label={"github"}>
												<LinkedInIcon color="primary" className={classes.icon}/>
											</IconButton>
										</Link>
									)}

									{user.facebook.length > 0 && (
										<Link href={user.facebook} target={'_blank'}>
											<IconButton aria-label={"github"}>
												<FacebookIcon color="primary" className={classes.icon}/>
											</IconButton>
										</Link>
									)}
								</div>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</>
	);
}

export default TeamPage;
