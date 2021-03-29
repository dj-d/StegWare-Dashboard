import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    paper: {
        display: "block",
        borderRadius: 10,
        boxShadow: theme.customShadows.widget,
        minHeight: "100%",
        margin: theme.spacing(2)
    },
    title: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(2),
        fontWeight: "bold"
    },
    buttonCancel: {
        cursor: "pointer",
        margin: theme.spacing(2),
        color: theme.palette.warning.main
    },
    buttonContinue: {
        cursor: "pointer",
        margin: theme.spacing(2),
        color: theme.palette.success.main
    }
}))
