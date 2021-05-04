import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  card: {
    display: "block",
    borderRadius: 10,
    boxShadow: theme.customShadows.widget,
    minHeight: "100%"
  }
}));
