import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { ReactComponent as Logo } from "../assets/images/pizza.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "fixed",
    zIndex: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const DarkAppBar = withStyles({
  root: {
    backgroundColor: "#252525",
    color: "#87c9ff",
  },
})(AppBar);

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <DarkAppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            style={{ height: "60px" }}
          >
            <Logo style={{ width: "40px" }} />
          </IconButton>
          <Typography color="primary" variant="h5" className={classes.title}>
            <a
              href="#Home"
              style={{ textDecoration: "none", color: "#87C9FF" }}
            >
              Pizzote
            </a>
          </Typography>
          <Button color="inherit" href="#Home">
            Home
          </Button>
          <Button color="inherit" href="#Data">
            Data
          </Button>
          <Button color="inherit" href="#Schemes">
            Schemes
          </Button>
        </Toolbar>
      </DarkAppBar>
    </div>
  );
}
