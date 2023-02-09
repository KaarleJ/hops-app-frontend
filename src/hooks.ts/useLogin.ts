import { LOGIN } from '../mutations';
import { Signin } from '../types';

import { useApolloClient, useMutation } from '@apollo/client';

export const useSignIn = () => {
  const [ authenticate, result] = useMutation(LOGIN);
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }: Signin) => {
    const { data } = await authenticate({ variables: { username, password }})
    window.localStorage.setItem('user-token', data.authenticate.value)
    apolloClient.resetStore()
  }
  
  return [ signIn, result];
};