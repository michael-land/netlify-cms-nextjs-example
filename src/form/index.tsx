import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import Input from "./FormInput";
import Subtitle from "./FormSubtitle";
import Title from "./FormTitle";
import Submit from "./FormSubmit";
import Actions from "./FormActions";

Form.Input = Input;
Form.Subtitle = Subtitle;
Form.Title = Title;
Form.Submit = Submit;
Form.Actions = Actions;

const useStyles = makeStyles(theme => ({}));

interface Form extends React.FormHTMLAttributes<HTMLElement> {}

function Form(props: Form) {
  const classes = useStyles();
  return React.useMemo(() => <form {...props} />, [props]);
}

export default Form;
