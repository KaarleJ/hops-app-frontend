import { useState } from 'react';
import { Container, Button } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { useSelector, useDispatch } from 'react-redux';
import useRemove from '../../hooks/useRemove';
import { setCourses } from '../../reducers/coursesReducer';
import { Course } from '../../types';
import CourseInfo from './CourseInfo';
import { Rootstate } from '../../store';
import EditCourseForm from './EditCourseForm';

interface ModalProps {
  course: Course | undefined;
  close: () => void;
}

const CourseModal = ({ course, close }: ModalProps) => {
  const [edit, setEdit] = useState<boolean>(false);
  const courses = useSelector((state: Rootstate) => state.courses);
  const [remove] = useRemove();
  const dispatch = useDispatch();

  if (!course) {
    return <div>loading</div>;
  }

  const handleRemove = () => {
    remove(course.id);
    dispatch(setCourses(courses.filter((c) => c.id !== course.id)));
    close();
  };

  const handleUpdate = (editedCourse: Course) => {
    dispatch(setCourses(courses.map((c) => c = c.id === editedCourse.id ? editedCourse : c)));
    close();
  };

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column' }}>
      <Button
        size={'small'}
        onClick={close}
        sx={{
          alignSelf: 'flex-end',
        }}
      >
        <ClearIcon />
      </Button>
      {edit === false ? (
        <CourseInfo course={course} close={close} />
      ) : (
        <EditCourseForm course={course} handleUpdate={handleUpdate} />
      )}
      <Container
        sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
      >
        {edit ? (
          <Button
            onClick={() => setEdit(false)}
            sx={{
              alignSelf: 'center',
              backgroundColor: 'secondary.main',
              color: 'white',
              m: 1,
            }}
          >
            cancel edit
          </Button>
        ) : (
          <Button
            onClick={() => setEdit(true)}
            sx={{
              alignSelf: 'center',
              backgroundColor: 'secondary.main',
              color: 'white',
              m: 1,
            }}
          >
            edit
          </Button>
        )}
        <Button
          onClick={handleRemove}
          sx={{
            alignSelf: 'center',
            backgroundColor: 'error.main',
            color: 'white',
            m: 1,
          }}
        >
          delete
        </Button>
      </Container>
    </Container>
  );
};

export default CourseModal;
