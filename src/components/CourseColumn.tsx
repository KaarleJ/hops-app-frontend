import { List, ListItem, ListItemText } from "@mui/material";
import { Course } from '../types';

interface ColumnProps {
  courses: Course[]
}

const CourseColumn = ({ courses }: ColumnProps) => {
  console.log(courses);
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
          <ListItemText>
            {course.name}
          </ListItemText>
        </ListItem>
      ))}
    </List>
  )
}

export default CourseColumn