import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Introduction = () => {
  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <Typography variant='h4' color='black' p={5}>
        Welcome To HOPSapp!!!
      </Typography>
      <Typography variant='h6'>
        A small app for designing your university studies.
      </Typography>
      <Typography variant='h6'>
        Start by <Link to='/signup' style={{ textDecoration: 'none'}} > signin up</Link>. Or click <Link to='/login' style={{ textDecoration: 'none'}} > here </Link> if already a user.
      </Typography>
    </Container>
  )
}

export default Introduction;