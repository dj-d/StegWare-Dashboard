import React, {useState} from "react";
import {AppBar, Toolbar, IconButton, InputBase, Menu, MenuItem} from "@material-ui/core";
import {
	Menu as MenuIcon,
	NotificationsNone as NotificationsIcon,
	Person as AccountIcon,
	Search as SearchIcon,
	ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";
import classNames from "classnames";

// styles
import useStyles from "./styles";

// components
import {Badge, Typography} from "../Wrappers";
import Notification from "../Notification/Notification";

// context
import {useLayoutState, useLayoutDispatch, toggleSidebar} from "../../context/LayoutContext";
import {useUserDispatch, signOut} from "../../context/UserContext";


const notifications = [
	{
		id: 0,
		color: "warning",
		message: "Check out this awesome ticket"
	},
	{
		id: 1,
		color: "success",
		type: "info",
		message: "What is the best way to get ...",
	},
	{
		id: 2,
		color: "secondary",
		type: "notification",
		message: "This is just a simple notification",
	},
	{
		id: 3,
		color: "primary",
		type: "e-commerce",
		message: "12 new orders has arrived today",
	},
];

export default function Header(props) {
	let classes = useStyles();

	// global
	let layoutState = useLayoutState();
	let layoutDispatch = useLayoutDispatch();
	let userDispatch = useUserDispatch();

	// local
	let [notificationsMenu, setNotificationsMenu] = useState(null);
	let [isNotificationsUnread, setIsNotificationsUnread] = useState(true);
	let [profileMenu, setProfileMenu] = useState(null);
	let [isSearchOpen, setSearchOpen] = useState(false);

	return (
		<AppBar position="fixed" className={classes.appBar}>
			<Toolbar className={classes.toolbar}>
				<IconButton
					color="inherit"
					onClick={() => toggleSidebar(layoutDispatch)}
					className={classNames(
						classes.headerMenuButtonSandwich,
						classes.headerMenuButtonCollapse,
					)}
				>
					{layoutState.isSidebarOpened ? (
						<ArrowBackIcon
							classes={{
								root: classNames(
									classes.headerIcon,
									classes.headerIconCollapse,
								),
							}}
						/>
					) : (
						<MenuIcon
							classes={{
								root: classNames(
									classes.headerIcon,
									classes.headerIconCollapse,
								),
							}}
						/>
					)}
				</IconButton>
				<Typography variant="h6" weight="medium" className={classes.logotype}>
					StegWare - Dashboard
				</Typography>
				<div className={classes.grow}/>
				<div className={classNames(classes.search, {[classes.searchFocused]: isSearchOpen,})}>
					<div className={classNames(classes.searchIcon, {[classes.searchIconOpened]: isSearchOpen,})} onClick={() => setSearchOpen(!isSearchOpen)}>
						<SearchIcon classes={{root: classes.headerIcon}}/>
					</div>
					<InputBase
						placeholder="Search…"
						classes={{
							root: classes.inputRoot,
							input: classes.inputInput,
						}}
					/>
				</div>
				<IconButton color="inherit" aria-haspopup="true" aria-controls="mail-menu" onClick={e => {
					setNotificationsMenu(e.currentTarget);
					setIsNotificationsUnread(false);
				}} className={classes.headerMenuButton}>
					<Badge badgeContent={isNotificationsUnread ? notifications.length : null} color="warning">
						<NotificationsIcon classes={{root: classes.headerIcon}}/>
					</Badge>
				</IconButton>
				<IconButton aria-haspopup="true" color="inherit" className={classes.headerMenuButton} aria-controls="profile-menu" onClick={e => setProfileMenu(e.currentTarget)}>
					<AccountIcon classes={{root: classes.headerIcon}}/>
				</IconButton>
				<Menu id="notifications-menu" open={Boolean(notificationsMenu)} anchorEl={notificationsMenu} onClose={() => setNotificationsMenu(null)}
					  className={classes.headerMenu} disableAutoFocusItem>
					{notifications.map(notification => (
						<MenuItem key={notification.id} onClick={() => setNotificationsMenu(null)} className={classes.headerMenuItem}>
							<Notification {...notification} typographyVariant="inherit"/>
						</MenuItem>
					))}
				</Menu>
				<Menu id="profile-menu" open={Boolean(profileMenu)} anchorEl={profileMenu} onClose={() => setProfileMenu(null)}
					  className={classes.headerMenu} classes={{paper: classes.profileMenu}} disableAutoFocusItem>
					<div className={classes.profileMenuUser}>
						<Typography variant="h4" weight="medium">
							Daniele Albanese
						</Typography>
					</div>
					<MenuItem className={classNames(classes.profileMenuItem, classes.headerMenuItem,)}>
						<AccountIcon className={classes.profileMenuIcon}/> Profile
					</MenuItem>
					<div className={classes.profileMenuUser}>
						<Typography className={classes.profileMenuLink} color="primary" onClick={() => signOut(userDispatch, props.history)}>
							Sign Out
						</Typography>
					</div>
				</Menu>
			</Toolbar>
		</AppBar>
	);
}
