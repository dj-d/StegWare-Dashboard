import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    root: {
        margin: theme.spacing(0.5),
        cursor: "pointer",
        boxShadow: theme.customShadows.widget
    },
    label: {
        textTransform: 'uppercase'
    }
}))
