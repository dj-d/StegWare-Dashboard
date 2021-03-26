import {makeStyles} from "@material-ui/styles";

export default makeStyles({
	card: {
		display: "block",
		margin: 5,
		borderRadius: 10,
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
	cardLink: {
		align: "center"
	},
	icon: {
	}
});
