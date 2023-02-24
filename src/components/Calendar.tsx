import { Table, TableCell, TableContainer, TableHead, TableRow, Box } from '@mui/material';
import CourseColumn from './CourseColumn';
import CalendarFooter from "./CalendarFooter";

const Calendar = () => {
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
        flexDirection: 'row',
        height: 'calc(85% - 48px)',
        overflow: 'auto',
        ml: 2
      }}>
        <Box sx={{ width: '16.6%' }}>
          <CourseColumn period={0}/>
        </Box>
        <Box sx={{ width: '16.6%' }}>
          <CourseColumn period={1}/>
        </Box>
        <Box sx={{ width: '16.6%' }}>
          <CourseColumn period={2}/>
        </Box>
        <Box sx={{ width: '16.6%' }}>
          <CourseColumn period={3}/>
        </Box>
        <Box sx={{ width: '16.6%' }}>
          <CourseColumn period={4}/>
        </Box>
        <Box sx={{ width: '16.6%' }}>
          <CourseColumn period={5}/>
        </Box>
      </Box>
      <CalendarFooter />
    </Box>
  )
};

export default Calendar;