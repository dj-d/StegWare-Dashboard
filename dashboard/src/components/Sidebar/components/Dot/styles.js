import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
	dotBase: {
		width: 8,
		height: 8,
		backgroundColor: theme.palette.text.hint,
		borderRadius: "50%",
		transition: theme.transitions.create("background-color"),
	},
	dotSmall: {
		width: 5,
		height: 5
	},
	dotLarge: {
		width: 11,
		height: 11,
	},
}))
