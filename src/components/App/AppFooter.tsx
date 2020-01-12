import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles(theme => ({}));

interface AppFooter {}

const AppFooter = React.memo<AppFooter>(function AppFooter({ ...other }) {
  const classes = useStyles();

  return null;
});

export default AppFooter;
