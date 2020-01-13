import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { GenericProps } from "@/type";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "flex-end",
    "& > *:not(:first-child)": {
      marginLeft: 12
    },
    "& > *:not(:alst-child)": {
      marginRight: 12
    }
  }
}));

interface FormActions extends GenericProps {}

function FormActions({ className, children, ...other }: FormActions) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...other}>
      {children}
    </div>
  );
}

export default FormActions;
