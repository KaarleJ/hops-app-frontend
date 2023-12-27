import { Typography, Container } from '@mui/material';
import useMe from '../hooks/useMe';
import { Course } from '../types';

const Profile = () => {
  const [me, loading] = useMe();
  const date = new Date();
  const month = new Date().getMonth() + 1;
  const period = {
    label: 'summer (pre-year)',
    value: 0,
  };

  switch (month) {
    case 7:
      period.value = 0;
      period.label = 'summer (pre-year)';
      break;
    case 8:
    case 9:
      period.value = 1;
      period.label = '1';
      break;
    case 10:
    case 11:
    case 12:
      period.value = 2;
      period.label = '2';
      break;
    case 1:
    case 2:
      period.value = 3;
      period.label = '3';
      break;
    case 3:
    case 4:
    case 5:
      period.value = 4;
      period.label = '4';
      break;
    case 6:
      period.value = 5;
      period.label = 'summer (post-year)';
      break;
    default:
      period.value = 0;
      period.label = 'summer (pre-year)';
      break;
  }

  const filterCourse = (course: Course) => {
    let year = new Date().getFullYear();
    if (month >= 7) {
      year += 1;
    }
    if (course.year < year) {
      return true;
    } else if (course.year === year && course.endPeriod < period.value) {
      return true;
    } else {
      return false;
    }
  };

  if (!me || loading) {
    return <div>loading</div>;
  }

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: 500,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        height: '50%',
      }}
    >
      <Typography mb={1} mt={2}>
        Signed in as {me.username}
      </Typography>
      <Typography mb={4} variant="h4" color="black">
        {me.name}
      </Typography>
      <Typography variant="h6">
        Courses completed:{' '}
        {me.courses.filter((course) => filterCourse(course)).length}
      </Typography>
      <Typography variant="h6">
        Ects achieved:{' '}
        {me.courses
          .filter((course) => filterCourse(course))
          .reduce((total, course) => total + course.ects, 0)}
      </Typography>
      <Typography variant="h6">
        Ects to Bachelor:{' '}
        {180 -
          me.courses
            .filter((course) => filterCourse(course))
            .reduce((total, course) => total + course.ects, 0)}
      </Typography>
      <Typography variant="h6">
        Ects to Master:{' '}
        {300 -
          me.courses
            .filter((course) => filterCourse(course))
            .reduce((total, course) => total + course.ects, 0)}
      </Typography>
      <Typography variant="h6">Courses total: {me.courses.length}</Typography>
      <Typography variant="h6">
        Ects total:{' '}
        {me.courses.reduce((total, course) => total + course.ects, 0)}
      </Typography>
    </Container>
  );
};

export default Profile;
