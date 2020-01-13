import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import PageTitle from "./PageTitle";
const useStyles = makeStyles(theme => ({}));

Page.Title = PageTitle;

interface Page {}

function Page(props: Page) {
  const classes = useStyles();

  return React.useMemo(() => <div {...props} />, [props]);
}

export default Page;
