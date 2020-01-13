import { makeStyles, Button, ButtonProps } from "@material-ui/core";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles(theme => ({
  root: {}
}));

interface FormSubmit extends ButtonProps {}

const FormSubmit = React.memo<FormSubmit>(function FormSubmit({ className, ...other }) {
  const classes = useStyles();

  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      className={clsx(classes.root, className)}
      {...other}
    >
      Submit
    </Button>
  );
});

export default FormSubmit;
