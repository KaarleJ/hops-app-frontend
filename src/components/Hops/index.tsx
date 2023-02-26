import Calendar from './Calendar';
import CreateForm from './CreateForm';
import { Typography, Button, Box, Modal } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState, useEffect } from 'react';
import useCourses from '../../hooks/useCourses';
import { Course } from '../../types';
import { useSelector, useDispatch } from 'react-redux';
import { Rootstate } from '../../store';
import { setCourses } from '../../reducers/coursesReducer';

const Hops = () => {
  const [year, setYear] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  const dispatch = useDispatch();
  const courses = useSelector((state: Rootstate) => state.courses);
  const [returnedCourses, loading] = useCourses(year.toString());

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCourseUpdate = (course: Course) => {
    dispatch(setCourses(courses.concat(course)));
    setOpen(false);
  };

  useEffect(() => {
    if (returnedCourses) dispatch(setCourses(returnedCourses));
  }, [returnedCourses, loading, year]);

  useEffect(() => {
    const date = new Date();
    if (date.getMonth() < 7) {
      setYear(date.getFullYear());
    } else if (date.getMonth() >= 7) {
      setYear(date.getFullYear() + 1);
    }
  }, []);

  if (!courses || loading) {
    return <div>loading</div>;
  }

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            boxShadow: 24,
          }}
        >
          <CreateForm handleCourseUpdate={handleCourseUpdate} />
        </Box>
      </Modal>
      <Box
        sx={{
          display: 'flex',
          flexdirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button variant="text" onClick={() => setYear(year - 1)}>
            <ArrowBackIosIcon />
          </Button>
          <Typography variant="h3" color="black" align="center">
            {year - 1}-{year}
          </Typography>
          <Button variant="text" onClick={() => setYear(year + 1)}>
            <ArrowForwardIosIcon />
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Button variant="contained" sx={{ margin: 2 }} onClick={handleOpen}>
          Add a new course
        </Button>
      </Box>
      <Calendar />
    </>
  );
};

export default Hops;
