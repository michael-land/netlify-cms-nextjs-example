import { makeStyles } from "@material-ui/core";
import React from "react";
import Anchor from "../Anchor";

const useStyles = makeStyles(theme => ({
  image: {
    maxHeight: 40,
    [theme.breakpoints.down("md")]: {
      maxHeight: 30
    },
    top: 13,
    width: "auto",
    position: "absolute",
    left: 0,
    right: 0
  }
}));

interface Logo {}

const Logo = React.memo<Logo>(function Logo({ ...other }) {
  const classes = useStyles();

  return (
    <Anchor href="/">
      <img className={classes.image} src="/static/uploads/logo-3.jpg" alt="xiangshang-lot-logo" />
    </Anchor>
  );
});

export default Logo;
