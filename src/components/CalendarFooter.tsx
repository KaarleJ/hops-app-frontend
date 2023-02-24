import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { Rootstate } from "../store";

interface SumUpProps {
  period: number
}

const CalendarFooter = () => {
  const courses = useSelector((state: Rootstate) => state.courses);

  const SumUp = ({ period }:SumUpProps ) => {
    return (
    <Box sx={{ width: '16.6%', mt: 2}}>
      <Typography sx={{
        textAlign: 'left',
        ml: 5
      }}>
        Courses: {courses.filter((course) => (
          (course.startPeriod <= period && period <= course.endPeriod)
        )).length}
      </Typography>
      <Typography sx={{
        textAlign: 'left',
        ml: 5
      }}>
        Ects: {courses.filter((course) => (
          (course.startPeriod <= period && period <= course.endPeriod)
        )).reduce((total, course) => total + course.ects, 0)}
      </Typography>
    </Box>
    )
  }

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row'
    }}>
      <SumUp period={0}/>
      <SumUp period={1}/>
      <SumUp period={2}/>
      <SumUp period={3}/>
      <SumUp period={4}/>
      <SumUp period={5}/>
    </Box>
  )
}

export default CalendarFooter;