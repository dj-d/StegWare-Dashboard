import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme)  => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}))
