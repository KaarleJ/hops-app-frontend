import { Box, Typography, Modal } from '@mui/material';
import CalendarFooter from './CalendarFooter';
import { useSelector } from 'react-redux';
import { Rootstate } from '../../store';
import { useState } from 'react';
import CourseModal from './CourseModal';
import Course from './Course';

const Calendar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [targetId, setTargetId] = useState<string>();
  let courses = useSelector((state: Rootstate) => state.courses);
  // We order the courses so that the course that span multiple periods are first in the array.
  courses = [...courses].sort((a, b) => {
    if (a.endPeriod - a.startPeriod > b.endPeriod - b.startPeriod) {
      return -1;
    } else if (b.endPeriod - b.startPeriod > a.endPeriod - a.startPeriod) {
      return 1;
    } else {
      return 0;
    }
  });

  const handleItemClick = (id: string) => {
    setOpen(true);
    setTargetId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        backgroundColor: '#f2f2f2',
        boxShadow: 6,
        height: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        mb: 2,
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gridAutoFlow: 'row dense',
          gap: '10px',
          overflow: 'auto',
          padding: '10px',
        }}
      >
        <Box
          sx={{
            gridColumn: '1 / 7',
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            height: 'min-content',
            py: 2,
            borderBottom: '1px solid #e0e0e0',
          }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Typography>summer</Typography>
          </Box>
          <Box sx={{ extAlign: 'center' }}>
            <Typography>1st period</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography>2nd period</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography>3rd period</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography>4th period</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography>summer</Typography>
          </Box>
        </Box>

        {courses.map((course) => (
          <Course
            course={course}
            handleItemClick={handleItemClick}
            key={course.id}
          />
        ))}

        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'white',
              boxShadow: 24,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <CourseModal
              close={handleClose}
              course={courses.find((course) => course.id === targetId)}
            />
          </Box>
        </Modal>
      </Box>
      <Box>
        <CalendarFooter />
      </Box>
    </Box>
  );
};

export default Calendar;
