import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    appBar: {
        position: 'relative'
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1
    },
    textFiled: {
        color: "#FFFFFF"
    },
    card: {
        display: "block",
        margin: 5,
        borderRadius: 10,
        boxShadow: theme.customShadows.widget,
        minHeight: "100%"
    },
    cardContent: {
        margin: 5,
        marginLeft: theme.spacing(2)
    },
    button: {
        boxShadow: "0px 3px 3px -2px #000000"
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
