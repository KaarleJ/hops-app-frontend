import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Course } from '../types';
import { fontSize } from "@mui/system";

interface ColumnProps {
  courses: Course[]
  period: 0 | 1 | 2 | 3 | 4 | 5
}

const CourseColumn = ({ courses, period }: ColumnProps) => {
  return (
    <List>
      {courses.map((course) => (
        <ListItem key={course.id} sx={{
          backgroundColor: 'primary.main',
          width: 'auto',
          mt: 1,
          mb: 1,
          ml: 0.25,
          mr: 0.25,
          height: 60,
          borderRadius: 2,
          color: 'white',
          
          }}>
          {(course.endPeriod !== course.startPeriod && period < course.endPeriod) ?
              <>
                <ListItemText>
                  {course.name}
                </ListItemText>
                <ArrowRightAltIcon />
              </>
              :
              <>
                <ListItemText>
                  {course.name} ({course.ects} ects)
                </ListItemText>
                <IconButton sx={{
                  backgroundColor: 'white',
                  color: 'text.main',
                  width: 15,
                  height: 15
                }}>
                  <ClearIcon fontSize='small' />
                </IconButton>
              </>
            }
        </ListItem>
      ))}
    </List>
  )
}

export default CourseColumn