import { makeStyles, Typography, TypographyProps, Theme } from "@material-ui/core";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles(theme => ({
  root: {
    overflow: "hidden",
    textOverflow: "hidden",
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": (props: Ellipsis) => props.lines,
    lineHeight: (props: Ellipsis) => getLineHeight(props.variant, theme),
    maxHeight: (props: Ellipsis) => getLineHeight(props.variant, theme) * (props.lines || 1) + "em",
    minHeight: (props: Ellipsis) => getLineHeight(props.variant, theme) * (props.lines || 1) + "em"
  }
}));

interface Ellipsis extends TypographyProps {
  lines?: number;
}

const Ellipsis = React.memo<Ellipsis>(function Ellipsis({ className, ...other }) {
  const classes = useStyles(other);
  const cls = clsx(className, classes.root);
  return <Typography className={cls} {...other} />;
});

export default Ellipsis;

function getLineHeight(variant: TypographyProps["variant"] = "body2", theme: Theme): number {
  if (variant in theme.typography) {
    return Number((theme.typography as any)[variant].lineHeight);
  } else {
    return Number(theme.typography.body2.lineHeight);
  }
}
