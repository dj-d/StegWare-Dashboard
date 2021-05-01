import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    appBar: {
        position: 'relative'
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1
    },
    card: {
        display: "block",
        margin: 5,
        borderRadius: 10,
        boxShadow: theme.customShadows.widget,
        minHeight: "100%"
    },
    button: {
        cursor: "pointer",
        color: theme.palette.secondary.contrastText
    },
    header: {
        margin: theme.spacing(2)
    },
    headerTitle: {
        overflow: "hidden",
        whiteSpace: "nowrap",
        maxWidth: "12em",
        textOverflow: "ellipsis",
        textTransform: "capitalize",
        color: theme.palette.text.primary
    },
    headerSubtitle: {
        overflow: "hidden",
        whiteSpace: "nowrap",
        maxWidth: "15em",
        textOverflow: "ellipsis",
        color: theme.palette.text.secondary
    }
}))
