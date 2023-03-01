import { Box, Typography, Button } from '@mui/material';
import * as yup from 'yup';
import FormikTextInput from '../FormikTextInput';
import SelectField from '../SelectField';
import { PeriodOption, YearOption } from '../../types';

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

export const yearOptions = yearToOptions(new Date().getFullYear());
export const periodOptions: PeriodOption[] = [
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

export const validationSchema = yup.object().shape({
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (e: any) => void;
  error?: string;
  buttonLabel: string;
  header: string
}

const CourseForm = ({ onSubmit, error, buttonLabel, header }: formProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pl: 6,
        pr: 6,
        pt: 2,
        pb: 2
      }}
    >
      <Typography variant='h4' color='black' sx={{ mb: 2 }}>
        {header}
      </Typography>

      <Typography variant="h6" color="text">
        Course name
      </Typography>

      <FormikTextInput
        name="name"
        placeholder="course name here"
        sx={{ m: 1 }}
      />

      <Typography variant="h6" color="text">
        Course code
      </Typography>

      <FormikTextInput
        name="code"
        placeholder="Course code here"
        sx={{ m: 1 }}
      />

      <Typography variant="h6" color="text">
        Ects
      </Typography>

      <FormikTextInput
        name="ects"
        placeholder="Course ects here"
        sx={{ m: 1 }}
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
        sx={{ m:1, paddingLeft: 2, paddingRight: 2 }}
      >
        {buttonLabel}
      </Button>
    </Box>
  );
};

export default CourseForm;
