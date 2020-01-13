import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles(theme => ({}));

interface Contact {}

const Contact = React.memo<Contact>(function Contact({ ...other }) {
  const classes = useStyles();

  return null;
});

export default Contact;
