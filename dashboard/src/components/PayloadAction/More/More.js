import React from "react";

import {Dialog, DialogActions, DialogContentText, DialogTitle, useTheme} from "@material-ui/core";

import useMediaQuery from '@material-ui/core/useMediaQuery';

// styles
import useStyles from "./styles";
import {Button} from "../../Wrappers";

export default function More(...props) {
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<div>
			<Dialog open={props.toggle} fullScreen={fullScreen} aria-labelledby="responsive-dialog-title">
				<DialogTitle id="responsive-dialog-title">{"Cancellation confirmation"}</DialogTitle>
				<DialogContentText>
					Are you sure you want to delete the selected payload?
				</DialogContentText>

				<DialogActions>
					<Button autofocus>
						Cancel
					</Button>
					<Button>
						Confirm
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
