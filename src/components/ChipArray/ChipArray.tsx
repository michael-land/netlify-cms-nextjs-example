import { GenericProps } from "@/type";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles(theme => ({
  root: {
    margin: -4,
    "& > *": {
      margin: 4
    }
  }
}));

interface ChipArray extends GenericProps {}

const ChipArray = React.memo<ChipArray>(function ChipArray({
  className,
  children,
  style,
  ...other
}) {
  const classes = useStyles();

  return (
    <div className={clsx(className, classes.root)} style={style}>
      {React.Children.map(
        children,
        child => React.isValidElement(child) && React.cloneElement(child, other)
      )}
    </div>
  );
});

export default ChipArray;
