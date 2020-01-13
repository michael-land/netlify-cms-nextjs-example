import { makeStyles, Typography, TypographyProps } from "@material-ui/core";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles(theme => ({
  root: {
    textTransform: "uppercase",
    marginBottom: 48,
    marginTop: 48
  }
}));

interface PageTitle extends TypographyProps {}

const PageTitle = React.memo<PageTitle>(function PageTitle({ className, ...other }) {
  const classes = useStyles();

  return <Typography variant="h4" className={clsx(classes.root, className)} {...other} />;
});

export default PageTitle;
