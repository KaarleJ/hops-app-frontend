import { Formik } from 'formik';
import useCourse from '../../hooks/useCourse';
import CourseForm, { validationSchema } from './CourseForm';
import { Course, FormCourse, Period } from '../../types';
import { useState } from 'react';
import { useNotify } from '../Notification';

interface CreateFormProps {
  handleCourseUpdate: (course: Course) => void;
}

const chooseYear = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  if (month >= 7) {
    return year + 1;
  } else {
    return year;
  }
};

const initialValues = {
  name: '',
  code: '',
  ects: '',
  year: chooseYear(),
  startPeriod: 1 as Period,
  endPeriod: 1 as Period,
};

const CreateForm = ({ handleCourseUpdate }: CreateFormProps) => {
  const [error, setError] = useState<string>('');
  const [create] = useCourse();
  const [notify] = useNotify();

  const onSubmit = async (values: FormCourse) => {
    const { name, code, ects, year, startPeriod, endPeriod } = values;
    try {
      const course = await create({
        name,
        code,
        ects: Number(ects),
        year,
        startPeriod,
        endPeriod,
      });
      if (course) {
        handleCourseUpdate(course);
        notify(`Succesfully added the course ${course.name}`);
      }
    } catch (e) {
      console.error(e);
      if (e instanceof Error) {
        setError(e.message);
      }
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <CourseForm
          onSubmit={handleSubmit}
          error={error}
          buttonLabel={'create'}
          header={'Add a new course'}
        />
      )}
    </Formik>
  );
};

export default CreateForm;
