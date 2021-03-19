import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { useContext } from "react";
import { UserContext } from "../context/userContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const userContext = useContext(UserContext);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Booking.com
          </Typography>
          {userContext.isAuthenticated() ? (
            <>
              <Button component={Link} to="/" color="inherit">
                Home
              </Button>
              <Button component={Link} to="/Booking" color="inherit">
                Booking
              </Button>
              <Button component={Link} to="/Address" color="inherit">
                Address
              </Button>
              <Button component={Link} to="/Details" color="inherit">
                Details
              </Button>
              <Button color="inherit" onClick={userContext.logout}>
                logout
              </Button>
            </>
          ) : (
            <>
              <Button component={Link} to="/login" color="inherit">
                Login
              </Button>
              <Button component={Link} to="/signup" color="inherit">
                Signup
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
