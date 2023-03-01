import { useState } from 'react';
import { Course, FormCourse } from '../../types';
import CourseForm, { validationSchema } from './CourseForm';
import useCourseUpdate from '../../hooks/useCourseUpdate';
import { Formik } from 'formik';

interface FormProps {
  course: Course;
  handleUpdate: (course: Course) => void;
}

const EditCourseForm = ({ course, handleUpdate }: FormProps) => {
  const [ error, setError ] = useState<string>('');
  const [ edit ] = useCourseUpdate();

  const onSubmit = async (values: FormCourse) => {
    const { name, code, ects, year, startPeriod, endPeriod } = values;
    try {
      const newCourse = await edit({
        id: course.id,
        name,
        code,
        ects: Number(ects),
        year,
        startPeriod,
        endPeriod
      });
      if (newCourse) {
        handleUpdate(newCourse);
      }
    } catch (e) {
      console.error(e);
      if (e instanceof Error) {
        setError(e.message);
      }
    }
  };
  const initialValues = {
    name: course.name,
    code: course.code,
    ects: course.ects.toString(),
    year: course.year,
    startPeriod: course.startPeriod,
    endPeriod: course.endPeriod
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <CourseForm onSubmit={handleSubmit} error={error} buttonLabel={'submit'} header={'Edit Course'}/>
      )}
    </Formik>
  );
};



export default EditCourseForm;
