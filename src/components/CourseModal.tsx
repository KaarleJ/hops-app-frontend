import { Course } from "../types"
import useRemove from "../hooks/useRemove"
import { setCourses } from "../reducers/coursesReducer";
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Button } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';
import { Rootstate } from "../store";

interface ModalProps {
  course: Course | undefined
  close: () => void
}

const CourseModal = ({ course, close }: ModalProps) => {
  const courses = useSelector((state: Rootstate) => state.courses);
  const [ remove ] = useRemove();
  const dispatch = useDispatch();

  if (!course) {
    return <div>loading</div>
  }

  const handleRemove = () => {
    remove(course.id);
    dispatch(setCourses(courses.filter((c) => c.id != course.id)));
    close();
  }

  return (
    <>
      <Button onClick={close} sx={{
        alignSelf: 'flex-end'
      }}>
        <ClearIcon />
      </Button>
      <Typography variant='h5' noWrap={false} sx={{ alignSelf: 'center', pr: 6}}> {course.name} </Typography>
      <Typography> Code: {course.code} </Typography>
      <Typography> Year: {course.year}</Typography>
      <Typography> Startperiod: {course.startPeriod} </Typography>
      <Typography> EndingPeriod: {course.endPeriod} </Typography>
      <Typography> Ects: {course.ects} </Typography>
      <Button onClick={handleRemove} sx={{
        alignSelf: 'center',
        backgroundColor: 'error.main',
        color: 'white'
      }}>
        Delete
      </Button>
    </>
  )
}

export default CourseModal;