import {
  FormControl,
  MenuItem,
  makeStyles,
  TextField,
  InputLabel,
} from "@material-ui/core";
import { FieldConfig, useField } from "formik";

const useStyle = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      // width: "80%",
      // margin: theme.spacing(1),
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red !important",
      },
      "&:hover fieldset": {
        borderColor: "yellow",
      },
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
    },
  },
}));

interface Props extends FieldConfig {
  label: String;
}

const InputField = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);
  return (
    <TextField
      fullWidth
      variant="outlined"
      size="small"
      label={label}
      {...field}
      {...props}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    />
  );
};

export default InputField;
