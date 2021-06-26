import { makeStyles } from "@material-ui/styles";
import themes from "../../../../themes";

export default makeStyles((theme) => ({
    appBar: {
        position: 'relative'
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1
    },
    dialog: {
        alignContent: "center"
    },
    button: {
        boxShadow: "0px 3px 3px -2px #000000"
    },
    dialogButton: {
        boxShadow: "0px 3px 3px -2px #000000",
        cursor: "pointer",
        margin: theme.spacing(2)
    }
}))
