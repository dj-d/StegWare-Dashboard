import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  card: {
    display: "block",
    borderRadius: 10,
    boxShadow: theme.customShadows.widget,
    minHeight: "100%"
  },

  cardMedia: {
    display: "flex",
    justifyContent: "center",
    marginTop: 20,
    maxWidth: "50%",
    maxHeight: "50%"
  }
}));
