import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles(theme => ({}));

interface AppHeader {}

const AppHeader = React.memo<AppHeader>(function AppHeader({ ...other }) {
  const classes = useStyles();

  return null;
});

export default AppHeader;
