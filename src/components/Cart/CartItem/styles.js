import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    diplay: "flex",
    height: "450px",
  },
  media: {
    height: 260,
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cartActions: {
    justifyContent: "space-between",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
  },
}));
