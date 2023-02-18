import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box } from '@mui/material';
import { useState, useEffect } from 'react';

import { Course } from '../types';
import useMe from '../hooks.ts/useMe';
import CourseColumn from './CourseColumn';

const Calendar = () => {
  const [ courses, setCourses ] = useState<Array<Course>>();
  const [ me, loading ] = useMe();

  useEffect(() => {
    if (me)
    setCourses(me.courses)
  }, [me, loading])

  if (!courses) {
    return <div>loading</div>
  }

  return (
    <Box sx={{
      backgroundColor: '#f2f2f2',
      boxShadow: 6,
      height: '100%'
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
          <TableBody>
            <TableRow>
              <TableCell sx={{ width: '16%'}}>
                <CourseColumn courses={courses.filter((course) => course.startPeriod === 0)}/>
              </TableCell>
              <TableCell sx={{ width: '16%'}}>
                <CourseColumn courses={courses.filter((course) => course.startPeriod === 1)}/>
              </TableCell>
              <TableCell sx={{ width: '16%'}}>
                <CourseColumn courses={courses.filter((course) => course.startPeriod === 2)}/>
              </TableCell>
              <TableCell sx={{ width: '16%'}}>
                <CourseColumn courses={courses.filter((course) => course.startPeriod === 3)}/>
              </TableCell>
              <TableCell sx={{ width: '16%'}}>
                <CourseColumn courses={courses.filter((course) => course.startPeriod === 4)}/>
              </TableCell>
              <TableCell sx={{ width: '16%'}}>
                <CourseColumn courses={courses.filter((course) => course.startPeriod === 5)}/>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
};

export default Calendar;