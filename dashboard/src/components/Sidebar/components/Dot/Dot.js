import React from "react";
import { useTheme } from "@material-ui/styles";
import classnames from "classnames";

// styles
import useStyles from "./styles"

function Dot({ size, color }) {
	let classes = useStyles();
	let theme = useTheme();

	return (
		<div
			className={classnames(classes.dotBase, {
				[classes.dotLarge]: size === "large",
				[classes.dotSmall]: size === "small",
			})}
			style={{
				backgroundColor:
					color && theme.palette[color] && theme.palette[color].main,
			}}
		/>
	);
}

export default Dot
