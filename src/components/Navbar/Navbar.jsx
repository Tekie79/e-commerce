import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/shoppers.png";
import useStyles from "./styles";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h4"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="Shoeppers.com"
              height="25px"
              className={classes.image}
            />
            Shoeppers.com
          </Typography>

          <div className={classes.grow} />
          {location.pathname==='/' && (
          <div className={classes.button}>
            <IconButton
              component={Link}
              to="/cart"
              aria-label="Show cart items"
              color="inherit"
            >
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>)}
        </Toolbar>
        <Typography className={classes.tag}>Your Online Shoe Store</Typography>
      </AppBar>
    </>
  );
};

export default Navbar;
