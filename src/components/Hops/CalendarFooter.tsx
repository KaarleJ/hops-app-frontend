import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { Rootstate } from '../../store';

interface SumUpProps {
  period: number;
}

const CalendarFooter = () => {
  const courses = useSelector((state: Rootstate) => state.courses);

  const SumUp = ({ period }: SumUpProps) => {
    return (
      <Box sx={{ py: 2, borderTop: '1px solid #e0e0e0' }}>
        <Typography
          sx={{
            textAlign: 'center',
          }}
        >
          Courses:
          {' ' +
            courses.filter(
              (course) =>
                course.startPeriod <= period && period <= course.endPeriod
            ).length}
        </Typography>
        <Typography
          sx={{
            textAlign: 'center',
          }}
        >
          Ects:
          {' ' +
            courses
              .filter(
                (course) =>
                  course.startPeriod <= period && period <= course.endPeriod
              )
              .reduce((total, course) => {
                if (course.startPeriod === course.endPeriod) {
                  return total + course.ects;
                } else {
                  return course.ects / (course.endPeriod - course.startPeriod + 1);
                }
              }, 0)}
        </Typography>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
      }}
    >
      <SumUp period={0} />
      <SumUp period={1} />
      <SumUp period={2} />
      <SumUp period={3} />
      <SumUp period={4} />
      <SumUp period={5} />
    </Box>
  );
};

export default CalendarFooter;
