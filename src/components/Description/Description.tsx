import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { GenericProps } from "@/type";

const useStyles = makeStyles(theme => ({
  root: {},

  dense: {
    padding: theme.spacing(0.5, 1)
  },

  paddingTop: {
    paddingTop: theme.spacing(1)
  },
  paddingBottom: {
    paddingBottom: theme.spacing(1)
  },

  colon: {
    "dt &:after": {
      content: "' :'"
    }
  },

  dlBordered: {
    border: "1px solid #bdc8ca"
  },

  dt: {
    fontWeight: 500,
    float: "left",
    width: "25%"
  },

  dtBordered: {
    padding: 8
  },

  dd: {
    marginLeft: "25%",
    "&:after": {
      content: "",
      display: "block",
      clear: "both"
    }
  },

  ddBordered: {
    padding: 8,
    borderLeft: `1px solid ${theme.palette.divider}`,
    "& ~ dt": {
      borderTop: `1px solid ${theme.palette.divider}`
    },
    "& ~ dd": {
      borderTop: `1px solid ${theme.palette.divider}`
    }
  }
}));

interface Description extends GenericProps {
  dense?: boolean;
  border?: boolean;
  data: { term: string; value: number | number[] | string | string[] }[];
}

function Description({ className, data, border, dense, ...other }: Description) {
  const classes = useStyles();

  return (
    <dl className={clsx(classes.root, className, { [classes.dlBordered]: border })} {...other}>
      {data.map(item => {
        const items = Array.isArray(item.value) ? item.value : [item.value];
        const data = items.map((child, index) => (
          <dd
            className={clsx(classes.dd, {
              [classes.ddBordered]: border,
              [classes.paddingTop]: !border && index === 0,
              [classes.paddingBottom]: !border && index === items.length - 1
            })}
          >
            {child}
          </dd>
        ));

        const term = (
          <dt
            className={clsx(classes.dt, {
              [classes.colon]: !border,
              [classes.paddingTop]: !border,
              [classes.dtBordered]: border,
              [classes.dense]: dense
            })}
          >
            {item.term}
          </dt>
        );

        return (
          <React.Fragment>
            {term}
            {data}
          </React.Fragment>
        );
      })}
    </dl>
  );
}

export default Description;
