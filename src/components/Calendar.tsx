import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';


const rawData = [
  {
    id: "204378t9358hjg913",
    name: "Tekoälyn menetelmät",
    code: "TKO_2",
    ects: 5,
    year: 2023,
    startPeriod: 3,
    endPeriod: 3,
  },
  {
    id: "204378t9358hjg913",
    name: "Tekoälyn perusteet",
    code: "TKO_1",
    ects: 5,
    year: 2023,
    startPeriod: 2,
    endPeriod: 2,
  },
  {
    id: "204378t9358hjg913",
    name: "Tietokantojen perusteet",
    code: "TKO_42",
    ects: 5,
    year: 2023,
    startPeriod: 4,
    endPeriod: 5,
  },
  {
    id: "204378t9358hjg913",
    name: "Olio-Ohjelmoinnin jatkokurssi",
    code: "TKO_69",
    ects: 5,
    year: 2023,
    startPeriod: 4,
    endPeriod: 4,
  }
]

const Calendar = () => {
  return (
    <TableContainer sx={{
      display: 'flex ',
      height: 720,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'stretch',
      alignContent: 'center',
      backgroundColor: '#E6E6E7',
      boxShadow: 6
    }}>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell align='center'> 1st period </TableCell>
            <TableCell align='center'> 2nd period </TableCell>
            <TableCell align='center'> 3rd period </TableCell>
            <TableCell align='center'> 4th period </TableCell>
            <TableCell align='center'> summer </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rawData.map((course) => (
            <TableRow
              key={course.id}
            >
              <TableCell align='center'> {course.name} {course.code} ({course.ects} ects) </TableCell>
              <TableCell align='center'> 2nd period </TableCell>
              <TableCell align='center'> 3rd period </TableCell>
              <TableCell align='center'> 4th period </TableCell>
              <TableCell align='center'> summer </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
};

export default Calendar;