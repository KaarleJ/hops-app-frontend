import { AppBar, Container, Toolbar, Box, Typography, Tooltip, IconButton, Menu as Bar, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'
import { useState, MouseEvent, useEffect} from 'react';

const Menu = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [ user, setUser ] = useState<string | null>();

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogOut = () => {
    localStorage.clear();
    setAnchorElUser(null);
  }

  useEffect(() => (
    setUser(window.localStorage.getItem('user-token'))
  ), [window.localStorage.getItem('user-token')]);

  return (
    <AppBar position='static' color='primary' sx={{width: '90%'}}>
      <Container fixed={true} maxWidth='md' disableGutters>
        <Toolbar sx={{display: 'flex', color: 'secondary'}}>

            <Box sx={{ flexGrow: 1, flexShrink: 1, display: { md: 'flex' } }}>
              <Link to={'/'} style={{ textDecoration: 'none' }}>
                {
                  <Typography color='white' variant='h5'>
                    Home
                  </Typography>
                }
              </Link>
            </Box>

            <Box sx={{ flexGrow: 1, flexShrink: 1, display: { md: 'flex' } }}>
              <Link to={'/hops'} style={{ textDecoration: 'none' }}>
                {
                  <Typography color='white' variant='h5'>
                    hops
                  </Typography>
                }
              </Link>
            </Box>

            <Box sx={{ flexGrow: 1, flexShrink: 1, display: { md: 'flex' } }}>
              <Link to={'/about'} style={{ textDecoration: 'none' }}>
                {
                  <Typography color='white' variant='h5'>
                    about
                  </Typography>
                }
              </Link>
            </Box>

            
            {user? 
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <MenuIcon sx={{color: 'white'}}/>
                </IconButton>
              </Tooltip>
              <Bar
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Link to={'/profile'} style={{ textDecoration: 'none' }}>
                    {
                      <Typography textAlign='center' variant='h6' color='secondary'>
                        Profile
                      </Typography>
                    }
                  </Link>
                </MenuItem>

                <MenuItem onClick={handleLogOut}>
                  <Link to={'/'} style={{ textDecoration: 'none' }}>
                    {
                      <Typography textAlign='center' variant='h6' color='secondary'>
                        Logout
                      </Typography>
                    }
                  </Link>
                </MenuItem>
              </Bar>
          </Box>
          :
          <Box sx={{ flexGrow: 0, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexBasis: 120}}>
            <Link to={'/login'} style={{ textDecoration: 'none' }}>
              {
                <Typography textAlign='center' variant='subtitle1' fontWeight='bold' color='white'>
                  Login
                </Typography>
              }
            </Link>

            <Link to={'/signup'} style={{ textDecoration: 'none' }}>
              {
                <Typography textAlign='center' variant='subtitle1' fontWeight='bold' color='white'>
                  Signup
                </Typography>
              }
            </Link>
          </Box>
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Menu;