import React from "react";
import { makeStyles, TextField, InputAdornment } from "@material-ui/core";
import "./TextFieldComponent.css";

export const TextFieldComponent = (props) => {
  const useStyles = makeStyles({
    p10: {
      "& input": {
        padding: 12,
        fontFamily: "Open Sans",
        fontSize: "14px",
      },
    },
    colorPrimary: {
      color: "white",
    },
  });

  const muiStyles = useStyles();

  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "10px " }}>
      <span className="textFieldLabel">{props.label}</span>
      <TextField
        classes={{ root: muiStyles.p10 }}
        error={props.error}
        variant="outlined"
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
        onChange={(event) => props.onChange(event)}
        name={props.name}
      />
    </div>
  );
};
