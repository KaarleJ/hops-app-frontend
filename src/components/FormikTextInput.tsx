import { useField } from 'formik';
import { TextField, TextFieldProps, Typography } from '@mui/material';


const FormikTextInput = ({ name, ...props }: TextFieldProps) => {
  const [ field, meta ] = useField(name as string);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextField 
        {...field}
        variant='filled'
        {...props}
      />
      {showError && <Typography color='error'>{meta.error}</Typography>}
    </>
  );
}

export default FormikTextInput;