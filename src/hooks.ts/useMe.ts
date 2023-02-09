import { ME } from "../queries";
import { useQuery } from "@apollo/client";

import  { useEffect, useState } from 'react';

const useMe = () => {
  const [ me, setMe] = useState();
  const { loading, error, data } = useQuery(ME);

  useEffect(() => {
    if (error) {
      console.error(error);
      return;
    }
    if (!loading && data) {
      setMe(data.me);
    }
  }, [data, error, loading]);


  return { me, loading };
};

export default useMe;