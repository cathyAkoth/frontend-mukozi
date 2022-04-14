import React, { useState } from "react";
import { FieldConfig, useField } from "formik";

import {
  FormControl,
  InputLabel,
  OutlinedInput,
  Checkbox,
  ListItemText,
  Select as MuiSelect,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const countries = ["Saudi Arabia", "Kuwait", "Dubai", "UAE"];

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const Select = ({ label, ...props }) => {
  const [countryName, setCountryName] = useState([]);
  const [field, meta] = useField(props);
  const { id = "", name = "", options } = props;

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCountryName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    // <FormControl fullWidth size="small" variant="outlined">
    //   <InputLabel>{label}</InputLabel>
    //   <MuiSelect
    //     label={label}
    //     {...field}
    //     {...props}
    //     error={meta.touched && Boolean(meta.error)}
    //     helperText={meta.touched && meta.error}
    //   >
    //     <MenuItem value="">None</MenuItem>
    //     {options.map((item, index) => (
    //       <MenuItem value={item} key={index}>
    //         {item}
    //       </MenuItem>
    //     ))}
    //   </MuiSelect>
    // </FormControl>

    <FormControl fullWidth size="small" variant="outlined">
      <InputLabel>{label}</InputLabel>
      <MuiSelect
        label={label}
        {...field}
        {...props}
        // input={<OutlinedInput label="Tag" />}
        onChange={handleChange}
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
      >
        {options.map((country, index) => {
          return (
            <MenuItem key={index} value={country}>
              <Checkbox checked={countryName.indexOf(country) > -1} />
              <ListItemText primary={country} />
            </MenuItem>
          );
        })}
      </MuiSelect>
    </FormControl>

    // <FormControl fullWidth size="small" variant="outlined">
    //     <InputLabel>{label}</InputLabel>
    //     <Select
    //       multiple
    //       label={label}
    //       {...field}
    //       {...props}
    //       input={<OutlinedInput label="Tag" />}
    //       error={meta.touched && Boolean(meta.error)}
    //     helperText={meta.touched && meta.error}
    //       renderValue={(selected) => selected.join(', ')}
    //       MenuProps={MenuProps}
    //     >
    //       {options.map((item, index) => (
    //         <MenuItem key={index} value={item}>
    //           <Checkbox checked={personName.indexOf(name) > -1} />
    //           <ListItemText primary={name} />
    //         </MenuItem>
    //       ))}
    //     </Select>
    //   </FormControl>
  );
};

export default Select;
