import React, {useState, useEffect} from "react";
import {Drawer, IconButton, List} from "@material-ui/core";
import {
	Home as HomeIcon,
	ArrowBack as ArrowBackIcon,
	Apps as PayloadsIcon,
	Flag as AttacksIcon,
	PhoneAndroid as InfectedDevicesIcon,
	SupervisorAccount as TeamIcon
} from "@material-ui/icons";
import {useTheme} from "@material-ui/styles";
import {withRouter} from "react-router-dom";
import classNames from "classnames";

// styles
import useStyles from "./styles";

// components
import SidebarLink from "./components/SidebarLink/SidebarLink";

// context
import {useLayoutState, useLayoutDispatch, toggleSidebar,} from "../../context/LayoutContext";

const structure = [
	{
		id: 0,
		label: "Dashboard",
		link: "/app/dashboard",
		icon: <HomeIcon/>
	},
	{
		id: 1,
		label: "Payloads",
		link: "/app/payload",
		icon: <PayloadsIcon/>
	},
	{
		id: 2,
		label: "Attacks",
		link: "/app/attack",
		icon: <AttacksIcon/>
		},
	{
		id: 3,
		label: "Infected devices",
		link: "/app/infectedDevice",
		icon: <InfectedDevicesIcon/>
	},
	{
		id: 4,
		label: "Team",
		link: "/app/team",
		icon: <TeamIcon/>
	},
	{
		id: 5,
		type: "divider"
	}
];

function Sidebar({location}) {
	let classes = useStyles();
	let theme = useTheme();

	// global
	let {isSidebarOpened} = useLayoutState();
	let layoutDispatch = useLayoutDispatch();

	// local
	let [isPermanent, setPermanent] = useState(true);

	useEffect(function () {
		window.addEventListener("resize", handleWindowWidthChange);
		handleWindowWidthChange();
		return function cleanup() {
			window.removeEventListener("resize", handleWindowWidthChange);
		};
	});

	return (
		<Drawer
			variant={isPermanent ? "permanent" : "temporary"}
			className={classNames(classes.drawer, {
				[classes.drawerOpen]: isSidebarOpened,
				[classes.drawerClose]: !isSidebarOpened,
			})}
			classes={{
				paper: classNames({
					[classes.drawerOpen]: isSidebarOpened,
					[classes.drawerClose]: !isSidebarOpened,
				}),
			}}
			open={isSidebarOpened}
		>
			<div className={classes.toolbar}/>
			<div className={classes.mobileBackButton}>
				<IconButton onClick={() => toggleSidebar(layoutDispatch)}>
					<ArrowBackIcon classes={{root: classNames(classes.headerIcon, classes.headerIconCollapse)}}/>
				</IconButton>
			</div>
			<List className={classes.sidebarList}>
				{structure.map(link => (<SidebarLink key={link.id} location={location} isSidebarOpened={isSidebarOpened}{...link}/>))}
			</List>
		</Drawer>
	);

	// ##################################################################
	function handleWindowWidthChange() {
		let windowWidth = window.innerWidth;
		let breakpointWidth = theme.breakpoints.values.md;
		let isSmallScreen = windowWidth < breakpointWidth;

		if (isSmallScreen && isPermanent) {
			setPermanent(false);
		} else if (!isSmallScreen && !isPermanent) {
			setPermanent(true);
		}
	}
}

export default withRouter(Sidebar);
