import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    card: {
        display: "block",
        margin: 5,
        borderRadius: 10,
        boxShadow: theme.customShadows.widget,
        minHeight: "100%"
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
    },
    action: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: theme.spacing(2)
    },
    button: {
        cursor: "pointer",
        boxShadow: theme.customShadows.widget,
        color: theme.palette.secondary.contrastText
    }
}))
