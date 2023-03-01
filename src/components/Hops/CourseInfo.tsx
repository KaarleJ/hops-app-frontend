import { Typography } from '@mui/material';
import { Course } from '../../types';

interface CourseInfoProps {
  course: Course;
  close: () => void;
}

const CourseInfo = ({ course }: CourseInfoProps) => {
  return (
    <>
      <Typography variant="h5">
        {course.name}
      </Typography>
      <Typography> Code: {course.code} </Typography>
      <Typography> Year: {course.year}</Typography>
      <Typography> Startperiod: {course.startPeriod} </Typography>
      <Typography> EndingPeriod: {course.endPeriod} </Typography>
      <Typography> Ects: {course.ects} </Typography>
    </>
  );
};

export default CourseInfo;
