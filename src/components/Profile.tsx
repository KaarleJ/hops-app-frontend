import { Typography, Container } from "@mui/material";
import useMe from "../hooks/useMe";

const Profile= () => {
  const [ me, loading ] = useMe();
  const date = new Date();
  const period =  {
    label: 'summer (pre-year)',
    value: 0
  }

  switch (date.getMonth()) {
    case 7 :
      period.value = 0;
      period.label= 'summer (pre-year)';
      break;
    case 8 || 9 :
      period.value = 1;
      period.label= '1';
      break;
    case 10 || 11 || 12:
      period.value = 2;
      period.label= '2';
      break;
    case 1 || 2:
      period.value = 3;
      period.label= '3';
      break;
    case 3 || 4 || 5 :
      period.value = 4;
      period.label= '4';
      break;
    case 6:
      period.value = 5;
      period.label= 'summer (post-year)';
      break;
    default:
      break;
  }

  if (!me || loading) {
    return <div>loading</div>
  }

  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      width: 500,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      height: '50%'
    }}>
      <Typography mb={1} mt={2}>Signed in as {me.username}</Typography>
      <Typography mb={4} variant='h4' color='black'>{me.name}</Typography>
      <Typography variant='h6'>
        Courses completed: {me.courses.filter((course) => (course.year <= date.getFullYear() && course.endPeriod < period.value)).length}
      </Typography>
      <Typography variant='h6'>
        Ects achieved: {me.courses.filter((course) => (course.year <= date.getFullYear() && course.endPeriod < period.value)).reduce((total, course) => total +course.ects, 0)}
      </Typography>
      <Typography variant='h6'>
        Ects to Bachelor: {180-me.courses.filter((course) => (course.year <= date.getFullYear() && course.endPeriod < period.value)).reduce((total, course) => total +course.ects, 0)}
      </Typography>
      <Typography variant='h6'>
        Ects to Master: {300-me.courses.filter((course) => (course.year <= date.getFullYear() && course.endPeriod < period.value)).reduce((total, course) => total +course.ects, 0)}
      </Typography>
      <Typography variant='h6'>
        Courses total: {me.courses.length}
      </Typography>
      <Typography variant='h6'>
        Ects total: {me.courses.reduce((total, course) => total + course.ects, 0)}
      </Typography>
    </Container>
  );
};

export default Profile;