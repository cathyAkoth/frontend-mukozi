import MomentUtils from "@date-io/moment";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { FieldConfig, useField } from "formik";

import DateFnsUtils from "@date-io/date-fns";

interface Props extends FieldConfig {
  label: String;
}

const DatePicker = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);
  const { name, value, onChange } = props;

  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        inputVariant="outlined"
        label={label}
        format="MMM/dd/yyyy"
        name={name}
        value={value}
        {...field}
        {...props}
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
        onChange={(date) => onChange(convertToDefEventPara(name, date))}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
