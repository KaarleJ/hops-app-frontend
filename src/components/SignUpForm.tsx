import { Formik } from "formik"
import useSignUp from "../hooks/useSignUp";
import { useNavigate } from "react-router-dom";
import { Signup } from "../types";
import * as yup from 'yup';
import { Box, Button, Typography } from "@mui/material";
import FormikTextInput from "./FormikTextInput";
import { useState } from "react";

const initialValues = {
  username: '',
  name: '',
  password: ''
}

const validationSchema = yup.object().shape({
  username: yup
  .string()
  .min(3, 'Minimum length is 3 characters')
  .max(10, 'Maximum length is 10 characters')
  .required('username missing'),
  name: yup
  .string()
  .min(5, 'Minimum length is 5 characters')
  .max(40, 'Maximum length is 40 characters')
  .required('name missing'),
  password: yup
  .string()
  .max(30, 'Maximum length is 30 characters')
  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
  )
  .required('password missing')
})

interface formProps {
  onSubmit: (e: any) => void,
  error?: string
}

const SignUpForm = ({ onSubmit, error }: formProps) => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      <Typography variant='h4' sx={{ padding: 5, color: 'black' }}> Signup to HOPS app </Typography>

      <Typography variant='h6' color='text'> Username </Typography>

      <FormikTextInput name='username' placeholder='username' sx={{ mb: 2, mt: 2}}/>

      <Typography variant='h6' color='text'> Full name </Typography>

      <FormikTextInput name='name' placeholder='name' sx={{ mb: 2, mt: 2}}/>

      <Typography variant='h6' color='text'> Password </Typography>

      <FormikTextInput name='password' placeholder='password' type='password' sx={{ mb: 2, mt: 2}}/>

      {error?
        <Typography color='error'>{error}</Typography>
      :
        null
      }

      <Button onClick={onSubmit} variant='contained' color='primary' sx={{mt: 2, paddingLeft: 2, paddingRight: 2}}>
        signup
      </Button>
    </Box>
  )
};

const SignUp = () => {
  const [ error, setError ] = useState<string>('');
  const navigate = useNavigate();
  const { signUp } = useSignUp();

  const onSubmit = async (values: Signup) => {

    const { username, name, password } = values;

    try {
      await signUp({ username, name, password});
      navigate('/');
    } catch(e) {
      console.error(e)
      if (e instanceof Error) {
        setError(e.message)
      }
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({handleSubmit}) => <SignUpForm onSubmit={handleSubmit} error={error}/>}
    </Formik>
  );
};

export default SignUp;