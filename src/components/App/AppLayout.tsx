import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles(theme => ({}));

interface AppLayout {}

const AppLayout = React.memo<AppLayout>(function AppLayout({ ...other }) {
  const classes = useStyles();

  return null;
});

export default AppLayout;
