import React from "react";
import Button from "@material-ui/core/Button";

function AppButton(props) {
  return (
    <Button
      href={props.href}
      variant={props.variant}
      size={props.size}
      startIcon={props.startIcon}
      color={props.color}
      className={props.className}
      startIcon={props.startIcon}
      endIcon={props.endIcon}
    >
      {props.label || props.children}
    </Button>
  );
}

export default AppButton;
