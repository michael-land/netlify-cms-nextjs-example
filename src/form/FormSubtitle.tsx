import { makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 24,
    paddingBottom: 24
  }
}));

interface FormSubtitle {}

const FormSubtitle = React.memo<FormSubtitle>(function FormSubtitle(props) {
  const classes = useStyles();

  return <Typography variant="h6" className={classes.root} {...props} />;
});

export default FormSubtitle;
