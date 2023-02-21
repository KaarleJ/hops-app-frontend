import { Field, FieldProps } from "formik";
import { InputLabel, Select, MenuItem } from '@mui/material';
import { PeriodOption, YearOption } from "../types";

type SelectFieldProps = {
  name: string;
  label: string;
  options: PeriodOption[] | YearOption[];
};

const FormikSelect = ({ field, ...props }: FieldProps) => <Select {...field} {...props} />;

const SelectField = ({ name, label, options }: SelectFieldProps) => (
  <>
    <InputLabel>{label}</InputLabel>
    <Field
      fullWidth
      style={{ marginBottom: "0.5em" }}
      label={label}
      component={FormikSelect}
      name={name}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Field>
  </>
);

export default SelectField;