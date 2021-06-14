import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Calender = (props) => {
  return (
    <DatePicker
      maxDate={new Date()}
      selected={props.selected}
      onChange={props.onChange}
      dateFormat={"dd/MM/yyyy"}
    />
  );
};
