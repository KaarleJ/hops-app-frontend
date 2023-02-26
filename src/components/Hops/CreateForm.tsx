import { Formik } from 'formik';
import useCourse from '../../hooks/useCourse';
import * as yup from 'yup';
import {
  Course,
  NewCourse,
  Period,
  PeriodOption,
  YearOption,
} from '../../types';
import SelectField from '../SelectField';
import { Box, Button, Typography } from '@mui/material';
import FormikTextInput from '../FormikTextInput';
import { useState } from 'react';

interface CreateFormProps {
  handleCourseUpdate: (course: Course) => void;
}

const initialValues = {
  name: '',
  code: '',
  ects: 0,
  year: new Date().getFullYear(),
  startPeriod: 1 as Period,
  endPeriod: 1 as Period,
};

const yearToOptions = (year: number): YearOption[] => {
  const options = [year];
  for (let i = 1; i < 6; i++) {
    options.push(year - i);
    options.push(year + i);
  }
  options.sort();
  return options.map((option) => ({
    value: option,
    label: (option - 1).toString() + '-' + option.toString(),
  }));
};

const yearOptions = yearToOptions(new Date().getFullYear());
const periodOptions: PeriodOption[] = [
  {
    value: 0,
    label: 'summer(pre-year)',
  },
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: 'summer(post-year)',
  },
];

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(5, 'Minimum length is 5 characters')
    .max(50, 'Maximum 50 characters')
    .required('name missing'),
  code: yup
    .string()
    .min(2, 'Minimum length is 2 characters')
    .max(10, 'Maximum 10 characters')
    .required('code missing'),
  ects: yup.string().required('ects missing'),
  year: yup.string().required('year missing'),
  startPeriod: yup.string().required('Startperiod missing'),
  endPeriod: yup.string().required('Endperiod missing'),
});

interface formProps {
  onSubmit: (e: any) => void;
  error?: string;
}

const CourseForm = ({ onSubmit, error }: formProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 5,
      }}
    >
      <Typography variant="h4" sx={{ padding: 5, color: 'black' }}>
        Add a course
      </Typography>

      <Typography variant="h6" color="text">
        Course name
      </Typography>

      <FormikTextInput
        name="name"
        placeholder="course name here"
        sx={{ mb: 2, mt: 4 }}
      />

      <Typography variant="h6" color="text">
        Course code
      </Typography>

      <FormikTextInput
        name="code"
        placeholder="Course code here"
        sx={{ mb: 2, mt: 2 }}
      />

      <Typography variant="h6" color="text">
        Ects
      </Typography>

      <FormikTextInput
        name="ects"
        placeholder="Course ects here"
        sx={{ mb: 2, mt: 2 }}
      />

      <SelectField label="year" name="year" options={yearOptions} />

      <SelectField
        label="startperiod"
        name="startPeriod"
        options={periodOptions}
      />

      <SelectField label="endperiod" name="endPeriod" options={periodOptions} />

      {error ? <Typography color="error">{error}</Typography> : null}

      <Button
        onClick={onSubmit}
        variant="contained"
        color="primary"
        sx={{ mt: 2, paddingLeft: 2, paddingRight: 2 }}
      >
        create
      </Button>
    </Box>
  );
};

const CreateForm = ({ handleCourseUpdate }: CreateFormProps) => {
  const [error, setError] = useState<string>('');
  const [create] = useCourse();

  const onSubmit = async (values: NewCourse) => {
    const { name, code, ects, year, startPeriod, endPeriod } = values;
    //There's currently a bug, that the type of ects is string so  I change it into a Integer here. Cleaner solution is soon to follow.
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
        <CourseForm onSubmit={handleSubmit} error={error} />
      )}
    </Formik>
  );
};

export default CreateForm;
