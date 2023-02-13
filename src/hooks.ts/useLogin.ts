import { LOGIN } from '../mutations';
import { Signin } from '../types';

import { useApolloClient, useMutation } from '@apollo/client';

const useLogin = () => {
  const [ authenticate ] = useMutation(LOGIN);
  const apolloClient = useApolloClient();

  const login = async ({ username, password }: Signin) => {
    const { data } = await authenticate({ variables: { username, password }})
    console.log(data)
    window.localStorage.setItem('user-token', data.authenticate.value)
    apolloClient.resetStore()
  }
  
  return { login };
};

export default useLogin;