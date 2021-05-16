import React from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import classnames from "classnames";
import {Box, IconButton, Link} from '@material-ui/core'
import Icon from '@mdi/react'

// icons
import {
	mdiGithub as GithubIcon
} from '@mdi/js'

// styles
import useStyles from "./styles";

// components
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

// pages
import Dashboard from "../../pages/dashboard/Dashboard";
import Steganography from "../../pages/steganography/Steganography";
import Payload from "../../pages/payload/Payload";
import Attack from "../../pages/attack/Attack";
import InfectedDevice from "../../pages/infectedDevice/InfectedDevice"
import Team from "../../pages/team/Team";

// context
import {useLayoutState} from "../../context/LayoutContext";

function Layout(props) {
	let classes = useStyles();

	// global
	let layoutState = useLayoutState();

	return (
		<div className={classes.root}>
			<>
				<Header history={props.history}/>
				<Sidebar/>
				<div className={classnames(classes.content, {[classes.contentShift]: layoutState.isSidebarOpened,})}>
					<div className={classes.fakeToolbar}/>
					<Switch>
						<Route path="/app/dashboard" component={Dashboard}/>
						<Route path="/app/steganography" component={Steganography}/>
						<Route path="/app/payload" component={Payload}/>
						<Route path="/app/attack" component={Attack}/>
						<Route path="/app/infectedDevice" component={InfectedDevice}/>
						<Route path="/app/team" component={Team}/>
					</Switch>
					<Box mt={5} width={"100%"} display={"flex"} alignItems={"center"} justifyContent="space-between" className={classes.footer}>
						<div>
							<Link color={'primary'} href={'https://github.com/dj-d'} target={'_blank'} className={classes.link}>
								GitHub Profile
							</Link>
						</div>
						<div>
							<Link href={'https://github.com/dj-d'} target={'_blank'}>
								<IconButton aria-label="github" style={{marginRight: -12}}>
									<Icon path={GithubIcon} size={1} color="#6E6E6E99"/>
								</IconButton>
							</Link>
						</div>
					</Box>
				</div>
			</>
		</div>
	);
}

export default withRouter(Layout);
