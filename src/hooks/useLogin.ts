import { LOGIN } from '../services/mutations';
import { Signin } from '../types';
import { setUser } from '../reducers/userReducer';

import { useApolloClient, useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux';

const useLogin = () => {
  const [authenticate] = useMutation(LOGIN);
  const apolloClient = useApolloClient();
  const dispatch = useDispatch();

  const login = async ({ username, password }: Signin) => {
    const { data } = await authenticate({ variables: { username, password } });
    dispatch(setUser(data.authenticate.value));
    window.localStorage.setItem('user-token', data.authenticate.value);
    apolloClient.resetStore();
  };

  return { login };
};

export default useLogin;
