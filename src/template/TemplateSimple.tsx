import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { GenericProps } from "@/type";

const useStyles = makeStyles(theme => ({
  root: {}
}));

interface TemplateSimple extends GenericProps {}

function TemplateSimple({ className, children, ...other }: TemplateSimple) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...other}>
      {children}
    </div>
  );
}

export default TemplateSimple;
