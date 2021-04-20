import React, {useState} from "react";
import {AppBar, Toolbar, IconButton, InputBase, Menu, MenuItem} from "@material-ui/core";

// components
import {Typography} from "../Wrappers";

// icons
import {
	Menu as MenuIcon,
	Person as AccountIcon,
	Search as SearchIcon,
	ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";
import classNames from "classnames";

// context
import {useLayoutState, useLayoutDispatch, toggleSidebar} from "../../context/LayoutContext";
import {useUserDispatch, signOut} from "../../context/UserContext";

// styles
import useStyles from "./styles";

// TODO: To change
const data = {
	title: "StegWare - Dashboard",
	profile: {
		name: "Daniele Albanese"
	}
}

export default function Header(props) {
	let classes = useStyles();

	// global
	let layoutState = useLayoutState();
	let layoutDispatch = useLayoutDispatch();
	let userDispatch = useUserDispatch();

	// local
	let [profileMenu, setProfileMenu] = useState(null);
	let [isSearchOpen, setSearchOpen] = useState(false);

	return (
		<AppBar position="fixed" className={classes.appBar}>
			<Toolbar className={classes.toolbar}>

				{/* Menu */}
				<IconButton color="inherit" onClick={() => toggleSidebar(layoutDispatch)} className={classNames(classes.headerMenuButtonSandwich, classes.headerMenuButtonCollapse)}>
					{layoutState.isSidebarOpened ? (
						<ArrowBackIcon classes={{root: classNames(classes.headerIcon, classes.headerIconCollapse)}}/>
					) : (
						<MenuIcon classes={{root: classNames(classes.headerIcon, classes.headerIconCollapse)}}/>
					)}
				</IconButton>

				{/* Title */}
				<Typography variant="h6" weight="medium" className={classes.logotype}>
					{data.title}
				</Typography>

				<div className={classes.grow} />

				{/* Search */}
				<div className={classNames(classes.search, {[classes.searchFocused]: isSearchOpen,})}>
					<div className={classNames(classes.searchIcon, {[classes.searchIconOpened]: isSearchOpen,})} onClick={() => setSearchOpen(!isSearchOpen)}>
						<SearchIcon classes={{root: classes.headerIcon}}/>
					</div>

					<InputBase placeholder="Search…" classes={{root: classes.inputRoot, input: classes.inputInput}} />
				</div>

				{/* Profile */}
				<IconButton aria-haspopup="true" color="inherit" className={classes.headerMenuButton} aria-controls="profile-menu" onClick={e => setProfileMenu(e.currentTarget)}>
					<AccountIcon classes={{root: classes.headerIcon}}/>
				</IconButton>

				{/* Profile - Menu items */}
				<Menu id="profile-menu" open={Boolean(profileMenu)} anchorEl={profileMenu} onClose={() => setProfileMenu(null)} className={classes.headerMenu} classes={{paper: classes.profileMenu}} disableAutoFocusItem>
					<div className={classes.profileMenuUser}>
						<Typography variant="h4" weight="medium">
							{data.profile.name}
						</Typography>
					</div>

					<MenuItem className={classNames(classes.profileMenuItem, classes.headerMenuItem,)}>
						<AccountIcon className={classes.profileMenuIcon} />
						Profile
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
