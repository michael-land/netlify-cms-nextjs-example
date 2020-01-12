import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles(theme => ({}));

interface AppContent {}

const AppContent = React.memo<AppContent>(function AppContent({ ...other }) {
  const classes = useStyles();

  return null;
});

export default AppContent;
