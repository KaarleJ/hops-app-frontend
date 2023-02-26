import { List, ListItemButton, ListItemText, Modal, Box } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Rootstate } from '../../store';
import CourseModal from './CourseModal';

interface ColumnProps {
  period: 0 | 1 | 2 | 3 | 4 | 5;
}

const CourseColumn = ({ period }: ColumnProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [targetId, setTargetId] = useState<string>();

  const allCourses = useSelector((state: Rootstate) => state.courses);
  const courses = allCourses.filter(
    (course) => course.startPeriod <= period && period <= course.endPeriod
  );

  courses.sort((a, b) => {
    if (
      Math.abs(a.startPeriod - a.endPeriod) >
      Math.abs(b.startPeriod - b.endPeriod)
    ) {
      return -1;
    } else if (
      Math.abs(a.startPeriod - a.endPeriod) <
      Math.abs(b.startPeriod - b.endPeriod)
    ) {
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
    <div>
      <List>
        {courses.map((course) => (
          <ListItemButton
            onClick={() => handleItemClick(course.id)}
            key={course.id}
            sx={{
              backgroundColor: 'primary.main',
              width: 'auto',
              mt: 1,
              mb: 1,
              ml: 0.25,
              mr: 0.25,
              height: 60,
              borderRadius: 2,
              color: 'white',
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <ListItemText
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                mr: 1,
              }}
            >
              {course.name}
            </ListItemText>

            {course.endPeriod !== course.startPeriod &&
            period < course.endPeriod ? (
                <ArrowRightAltIcon />
              ) : (
                <ListItemText
                  sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                >
                  {course.ects + ' ects'}
                </ListItemText>
              )}
          </ListItemButton>
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
              pb: 2,
              pl: 6,
            }}
          >
            <CourseModal
              close={handleClose}
              course={courses.find((course) => course.id === targetId)}
            />
          </Box>
        </Modal>
      </List>
    </div>
  );
};

export default CourseColumn;
