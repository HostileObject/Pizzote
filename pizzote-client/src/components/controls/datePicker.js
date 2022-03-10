import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

export default function DatePicker(props) {
  const { name, label, value, onChange } = props;

  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value: value.toISOString().slice(0, 10),
    },
  });

  return (
    // <MuiPickersUtilsProvider utils={DateFnsUtils}>
    //     <KeyboardDatePicker
    //         disableToolbar
    //         variant="inline"
    //         inputVariant="outlined"
    //         label={label}
    //         format="dd/MM/yy"
    //         name={name}
    //         value={value}
    //         onChange={(date) => onChange(convertToDefEventPara(name, date))}
    //     />
    // </MuiPickersUtilsProvider>
    <div></div>
  );
}
