import { makeStyles, Typography, List, ListItem } from "@material-ui/core";
import MarkdownToJSX, { MarkdownOptions } from "markdown-to-jsx";
import React from "react";
import Anchor from "../Anchor";
import classes from "*.module.css";

const useStyles = makeStyles({
  root: {
    "& p + p": {
      marginTop: 16
    }
  }
});
interface Markdown {}

const options: MarkdownOptions = {
  overrides: {
    a: { component: Anchor as any, props: { color: "secondary", underline: "always" } },
    p: { component: Typography },
    span: { component: Typography },
    h1: { component: Typography, props: { variant: "h1" } },
    h2: { component: Typography, props: { variant: "h2" } },
    h3: { component: Typography, props: { variant: "h3" } },
    h4: { component: Typography, props: { variant: "h4" } },
    h5: { component: Typography, props: { variant: "h5" } },
    h6: { component: Typography, props: { variant: "h6" } },
    ul: { component: List, props: { dense: true } },
    li: { component: ListItem },
    ol: { component: ListItem }
  }
};

const Markdown = React.memo<Markdown>(function Markdown({ children, ...other }) {
  const classes = useStyles();
  return (
    <MarkdownToJSX className={classes.root} options={options}>
      {children}
    </MarkdownToJSX>
  );
});

export default Markdown;
