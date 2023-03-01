import { EDIT_COURSE } from '../services/mutations';
import {  Course } from '../types';

import { useMutation } from '@apollo/client';

const useCourseUpdate = (): [
  ({
    id,
    name,
    code,
    ects,
    year,
    startPeriod,
    endPeriod,
  }: Course) => Promise<Course>
] => {
  const [ editCourse ] = useMutation(EDIT_COURSE);

  const edit = async ({
    id,
    name,
    code,
    ects,
    year,
    startPeriod,
    endPeriod,
  }: Course) => {
    const { data } = await editCourse({
      variables: {
        editCourseId: id,
        name,
        code,
        ects,
        year,
        startPeriod,
        endPeriod,
      },
    });
    return data.editCourse as Course;
  };

  return [edit];
};

export default useCourseUpdate;