import { Table, TableCell, TableContainer, TableHead, TableRow, Box } from '@mui/material';

import { Course } from '../types';
import CourseColumn from './CourseColumn';

interface CalendarProps {
  courses: Course[]
}

const Calendar = ({ courses } : CalendarProps) => {
  return (
    <Box sx={{
      backgroundColor: '#f2f2f2',
      boxShadow: 6,
      height: '85%'
    }}>
      <TableContainer sx={{
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'stretch',
        alignContent: 'center',
      }}>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell align='center'> summer </TableCell>
              <TableCell align='center'> 1st period </TableCell>
              <TableCell align='center'> 2nd period </TableCell>
              <TableCell align='center'> 3rd period </TableCell>
              <TableCell align='center'> 4th period </TableCell>
              <TableCell align='center'> summer </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row'
      }}>
        <Box sx={{ width: '16.6%' }}>
          <CourseColumn period={0} courses={courses.filter((course) => (course.startPeriod <= 0 && 0 <= course.endPeriod))}/>
        </Box>
        <Box sx={{ width: '16.6%' }}>
          <CourseColumn period={1} courses={courses.filter((course) => (course.startPeriod <= 1 && 1 <= course.endPeriod))}/>
        </Box>
        <Box sx={{ width: '16.6%' }}>
          <CourseColumn period={2} courses={courses.filter((course) => (course.startPeriod <= 2 && 2 <= course.endPeriod))}/>
        </Box>
        <Box sx={{ width: '16.6%' }}>
          <CourseColumn period={3} courses={courses.filter((course) => (course.startPeriod <= 3 && 3 <= course.endPeriod))}/>
        </Box>
        <Box sx={{ width: '16.6%' }}>
          <CourseColumn period={4} courses={courses.filter((course) => (course.startPeriod <= 4 && 4 <= course.endPeriod))}/>
        </Box>
        <Box sx={{ width: '16.6%' }}>
          <CourseColumn period={5} courses={courses.filter((course) => (course.startPeriod <= 5 && 5 <= course.endPeriod))}/>
        </Box>
      </Box>
    </Box>
  )
};

export default Calendar;