import React from "react";

// styles
import useStyles from "./styles";

// component
import { Typography } from "../Wrappers/Wrappers";

export default function PageTitle(props) {
	let classes = useStyles();

	return (
		<div className={ classes.pageTitleContainer }>
			<Typography className={ classes.typo } variant="h1" size="sm">
				{ props.title }
			</Typography>

			{ props.button && props.button }
		</div>
	);
}
