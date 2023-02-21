import { ME } from "../queries";
import { Me } from '../types';
import { useQuery } from "@apollo/client";

import  { useEffect, useState } from 'react';

const useMe = (): [ Me | undefined, boolean] => {
  const [ me, setMe] = useState<Me>();
  const { loading, error, data } = useQuery(ME);
  

  useEffect(() => {
    if (error) {
      console.error(error);
      return;
    }
    if (!loading && data) {
      setMe(data.Me);
    }
  }, [data, error, loading]);
  
  return [ me, loading];
};

export default useMe;