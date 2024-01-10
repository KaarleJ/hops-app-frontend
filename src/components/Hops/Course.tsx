import { Course as CourseType } from '../../types';
import { Button, Typography, Tooltip, Box } from '@mui/material';

interface CourseProps {
  course: CourseType;
  handleItemClick: (id: string) => void;
}

const Course = ({ course, handleItemClick }: CourseProps) => {
  const gridColumn =
    course.startPeriod === course.endPeriod
      ? course.startPeriod + 1
      : `${course.startPeriod + 1} / span ${
        course.endPeriod - course.startPeriod + 1
      }`;

  return (
    <Box
      sx={{
        minWidth: '100%',
        height: 'min-content',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gridColumn,
      }}
    >
      <Tooltip
        key={course.id}
        title={'Click to inspect, edit or remove details of this course.'}
      >
        <Button
          onClick={() => handleItemClick(course.id)}
          sx={{
            backgroundColor: 'primary.main',
            width: '100%',
            px: 2,
            py: 2,
            margin: 1,
            borderRadius: 2,
            color: 'white',
            display: 'flex',
            flexDirection: 'row',
            textTransform: 'none',
            boxShadow: 6,
          }}
        >
          <Typography
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              mr: 1,
            }}
          >
            {course.name}
          </Typography>

          <Typography sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {course.ects + ' ects'}
          </Typography>
        </Button>
      </Tooltip>
    </Box>
  );
};

export default Course;
