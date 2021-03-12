import React from "react";
import TextField from "@material-ui/core/TextField";

function Input(props) {
  const { id, variant, label, size, className, fullWidth = false } = props;
  return (
    <TextField
      id={id}
      variant={variant}
      label={label}
      size={size}
      className={className}
      fullWidth={fullWidth}
    />
  );
}

export default Input;
