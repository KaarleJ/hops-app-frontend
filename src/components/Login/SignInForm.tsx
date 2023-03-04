import { Formik } from 'formik';
import useLogin from '../../hooks/useLogin';
import { useNavigate } from 'react-router-dom';
import { Signin } from '../../types';
import * as yup from 'yup';
import { Box, Button, Typography } from '@mui/material';
import FormikTextInput from '../FormikTextInput';
import { useState } from 'react';
import { useNotify } from '../Notification';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup.string().required('username missing'),
  password: yup.string().required('password missing'),
});

interface formProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (e: any) => void;
  error?: string;
}

const SignInForm = ({ onSubmit, error }: formProps) => {
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Typography variant="h4" sx={{ padding: 5, color: 'black' }}>
        Log in to HOPS app
      </Typography>

      <Typography variant="h6" color="text">
        Username
      </Typography>

      <FormikTextInput
        id='username-input'
        name="username"
        placeholder="username"
        sx={{ mb: 2, mt: 4 }}
      />

      <Typography variant="h6" color="text">
        Password
      </Typography>

      <FormikTextInput
        id='password-input'
        name="password"
        placeholder="password"
        type="password"
        sx={{ mb: 2, mt: 2 }}
      />

      {error ? <Typography color="error">{error}</Typography> : null}

      <Button
        id='submit'
        onClick={onSubmit}
        variant="contained"
        color="primary"
        sx={{ mt: 2, paddingLeft: 2, paddingRight: 2 }}
      >
        login
      </Button>
    </Box>
  );
};

const SignIn = () => {
  const [error, setError] = useState<string>('');
  const [notify] = useNotify();
  const navigate = useNavigate();
  const { login } = useLogin();

  const onSubmit = async (values: Signin) => {
    const { username, password } = values;

    try {
      await login({ username, password });
      navigate('/');
      notify(`Succesfully logged in as ${username}`);
    } catch (e) {
      console.error(e);
      if (e instanceof Error) {
        setError(e.message);
      }
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <SignInForm onSubmit={handleSubmit} error={error} />
      )}
    </Formik>
  );
};

export default SignIn;
