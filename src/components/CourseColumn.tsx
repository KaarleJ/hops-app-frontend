import { List, ListItem, ListItemText } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Course } from '../types';

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
          width: '100%',
          margin: 1,
          height: 50,
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
              <ListItemText>
                {course.name} ({course.ects} ects)
              </ListItemText>
            }
        </ListItem>
      ))}
    </List>
  )
}

export default CourseColumn