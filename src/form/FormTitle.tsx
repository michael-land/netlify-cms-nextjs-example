import { makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 24,
    paddingBottom: 24
  }
}));

interface FormTitle {}

const FormTitle = React.memo<FormTitle>(function FormTitle(props) {
  const classes = useStyles();

  return <Typography variant="h5" className={classes.root} {...props} />;
});

export default FormTitle;
