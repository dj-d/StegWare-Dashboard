import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    button: {
        cursor: "pointer",
        boxShadow: theme.customShadows.widget,
        color: theme.palette.secondary.contrastText
    }
}));
