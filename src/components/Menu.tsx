import { Link, AppBar, Container, Toolbar, Box, Typography } from "@mui/material";

const pages = ['hops', 'signin', 'signup', 'about']

const Menu = () => {
  return (
    <AppBar position='static' color='primary' sx={{width: '60%'}}>
      <Container fixed={true} maxWidth='md' disableGutters>
        <Toolbar sx={{display: 'flex', color: 'secondary'}}>

            <Box sx={{ flexGrow: 1, flexShrink: 1, display: { xs: 'none', md: 'flex' } }}>
              <Link href={'/'}>
                {
                  <Typography color='white' variant='h5'>
                    Home
                  </Typography>
                }
              </Link>
            </Box>

            {pages.map((page) => (
              <Box sx={{ flexGrow: 1, flexShrink: 1, display: { xs: 'none', md: 'flex' } }} key={page}>
                <Link href={`/${page}`}>
                  {
                    <Typography color='white' variant='h5'>
                      {page}
                    </Typography>
                  }
                </Link>
              </Box>
            ))}

            <Box sx={{ flexGrow: 0 }}>
              <Link href={'/profile'}>
                {
                  <Typography color='white' variant='h5'>
                    profile
                  </Typography>
                  }
              </Link>

            </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Menu;