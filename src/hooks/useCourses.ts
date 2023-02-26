import { COURSES } from '../services/queries';
import { Course } from '../types';
import { useQuery } from '@apollo/client';

import { useEffect, useState } from 'react';

const useCourses = (year: string): [[Course] | undefined, boolean] => {
  const [courses, setCourses] = useState<[Course]>();
  const { loading, error, data } = useQuery(COURSES, {
    fetchPolicy: 'network-only',
    variables: {
      year,
    },
  });

  useEffect(() => {
    if (error) {
      console.error(error);
      return;
    }
    if (!loading && data) {
      setCourses(data.courses);
    }
  }, [data, error, loading]);

  return [courses, loading];
};

export default useCourses;
