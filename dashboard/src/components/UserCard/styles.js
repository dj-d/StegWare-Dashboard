import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    card: {
        display: "block",
        margin: 5,
        borderRadius: 10,
        boxShadow: theme.customShadows.widget,
        minHeight: "100%"
    },
    media: {
        width: "auto",
        height: 300,
        flexBasis: "50%"
    },
    content: {
        display: "flex",
        flexDirection: "column",
        flexBasis: "50%"
    },
    header: {
        textAlign: "center"
    },
    headerTitle: {
        textTransform: "capitalize",
        color: theme.palette.text.primary
    },
    headerSubtitle: {
        textTransform: "uppercase",
        color: theme.palette.text.secondary
    },
    cardText: {
        flex: "1 0 auto",
        marginBottom: 15
    },
    description: {
        textTransform: "uppercase",
        marginTop: theme.spacing(2)
    },
    cardLink: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    icon: {}
}));
