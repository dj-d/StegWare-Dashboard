import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
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
    cardContent: {
        margin: 5,
        marginLeft: theme.spacing(2),
        minWidth: "100%"
    },
    cardAction: {
        display: "flex",
        justifyContent: "center",
        marginBottom: theme.spacing(2)
    }
}))
