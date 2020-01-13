import { BaseTextFieldProps, makeStyles, TextField } from "@material-ui/core";
import React from "react";
import { Controller } from "react-hook-form";
import { capitalCase } from "change-case";

const useStyles = makeStyles(theme => ({
  root: {
    "&:not(:last-child)": {
      marginBottom: 16
    }
  }
}));

interface FormInput extends BaseTextFieldProps {
  control: any;
  name: string;
}

const FormInput = React.memo<FormInput>(function FormInput({ control, name, ...other }) {
  const label = name;
  const classes = useStyles();

  return (
    <Controller
      as={
        <TextField
          className={classes.root}
          fullWidth
          variant="outlined"
          {...(other as any)}
          label={capitalCase(name)}
        />
      }
      control={control}
      name={name}
    />
  );
});

export default FormInput;
