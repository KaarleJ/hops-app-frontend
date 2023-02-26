import { SIGNUP } from '../services/mutations';
import { Signup, CreatedUser } from '../types';
import useLogin from './useLogin';

import { useMutation } from '@apollo/client';

const useSignUp = () => {
  const [createUser] = useMutation(SIGNUP);
  const { login } = useLogin();

  const signUp = async ({ username, name, password }: Signup) => {
    const { data } = await createUser({
      variables: { username, name, password },
    });
    const returnedUser = data.createUser as CreatedUser;
    await login({ username: returnedUser.username, password });
  };

  return { signUp };
};

export default useSignUp;
