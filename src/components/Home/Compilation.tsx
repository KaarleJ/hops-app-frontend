import { Typography, Container, List, ListItemText } from '@mui/material';
import useMe from '../../hooks/useMe';

const Compilation = () => {
  const [me, loading] = useMe();
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

  const chooseYear = () => {
    const year = new Date().getFullYear();
    if (month >= 7) {
      return year + 1;
    } else {
      return year;
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
        justifyContent: 'space-around',
      }}
    >
      <Typography
        variant="h4"
        color="black"
        sx={{
          alignSelf: 'center',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          pt: 5,
        }}
      >
        Welcome back {me.name}
      </Typography>
      <Typography variant="h6">Ongoing period: {period.label}</Typography>
      <Typography
        variant="h6"
        sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
      >
        You have{' '}
        {
          me.courses.filter(
            (course) =>
              course.year === chooseYear() &&
              course.startPeriod <= period.value &&
              period.value <= course.endPeriod
          ).length
        }{' '}
        courses for the current ongoing period:
      </Typography>
      <List
        sx={{
          textAlign: 'left',
          mb: 1,
        }}
      >
        {me.courses
          .filter(
            (course) =>
              course.year === chooseYear() &&
              course.startPeriod <= period.value &&
              period.value <= course.endPeriod
          )
          .map((course) => (
            <ListItemText key={course.id}>
              {course.name} ({course.ects} ects)
            </ListItemText>
          ))}
      </List>
      <Typography variant="h6">
        You have {me.courses.length} courses registered total
      </Typography>
      <Typography variant="h6">
        Your courses correspond to{' '}
        {me.courses.reduce((total, course) => total + course.ects, 0)} ects
      </Typography>
    </Container>
  );
};

export default Compilation;
