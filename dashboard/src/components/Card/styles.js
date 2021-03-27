import {makeStyles} from "@material-ui/styles";

export default makeStyles(theme => ({
	card: {
		display: "block",
		margin: 5,
		borderRadius: 10,
		boxShadow: theme.customShadows.widget,
	},
	media: {
		width: "auto",
		height: 300,
		flexBasis: "50%"
	},
	content: {
		display: "flex",
		flexDirection: "column",
		flexBasis: "50%",
		backgroundColor: "#ffffff",
	},
	cardText: {
		flex: "1 0 auto",
		marginBottom: 15,
	},
	title: {
		fontWeight: "bold",
	},
	description: {
		textTransform: "uppercase",
		marginTop: theme.spacing(2)
	},
	cardLink: {
		align: "center"
	},
	icon: {
	}
}));
