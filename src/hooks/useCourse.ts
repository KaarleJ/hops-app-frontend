import { ADD_COURSE } from '../mutations';
import { NewCourse, Course } from '../types';

import { useMutation } from '@apollo/client';

const useCourse = (): [ ({ name, code, ects, year, startPeriod, endPeriod }: NewCourse) => Promise<Course> ] => {
  const [ addCourse ] = useMutation(ADD_COURSE);

  const create = async ({ name, code, ects, year, startPeriod, endPeriod }: NewCourse) => {
    
    const { data } = await addCourse({
      variables: {
        name,
        code,
        ects,
        year,
        startPeriod,
        endPeriod
      }
    })
    return data.addCourse as Course;
  }
  
  return [ create ];
};

export default useCourse;