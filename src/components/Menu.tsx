import {
  AppBar,
  Container,
  Toolbar,
  Box,
  Typography,
  Tooltip,
  IconButton,
  Menu as Bar,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useState, MouseEvent } from 'react';
import { Rootstate } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../reducers/userReducer';
import { setCourses } from '../reducers/coursesReducer';
import { useNotify } from './Notification';

const Menu = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const dispatch = useDispatch();
  const [notify] = useNotify();
  const user = useSelector((state: Rootstate) => state.user);

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogOut = () => {
    localStorage.clear();
    dispatch(setUser(null));
    dispatch(setCourses([]));
    notify('Succesfully logged out');
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color="primary" sx={{ width: '90%' }}>
      <Container fixed={true} maxWidth="md" disableGutters>
        <Toolbar sx={{ display: 'flex', color: 'secondary' }}>
          <Box sx={{ flexGrow: 1, flexShrink: 1, display: { md: 'flex' } }}>
            <Tooltip title={'Home page of the app'}>
              <Link to={'/'} style={{ textDecoration: 'none' }}>
                {
                  <Typography color="white" variant="h5">
                    Home
                  </Typography>
                }
              </Link>
            </Tooltip>
          </Box>

          <Box sx={{ flexGrow: 1, flexShrink: 1, display: { md: 'flex' } }}>
            <Tooltip title={'The calendar for your studies'}>
              <Link id='hops-link' to={'/hops'} style={{ textDecoration: 'none' }}>
                {
                  <Typography color="white" variant="h5">
                    HOPS
                  </Typography>
                }
              </Link>
            </Tooltip>
          </Box>

          <Box sx={{ flexGrow: 1, flexShrink: 1, display: { md: 'flex' } }}>
            <Tooltip title={'Information of this app as a project'}>
              <Link id='about-link' to={'/about'} style={{ textDecoration: 'none' }}>
                {
                  <Typography color="white" variant="h5">
                    about
                  </Typography>
                }
              </Link>
            </Tooltip>
          </Box>

          {user ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Options">
                <IconButton id='menu' data-cy='menu' onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <MenuIcon sx={{ color: 'white' }} />
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
                      <Typography
                        textAlign="center"
                        variant="h6"
                        color="text.primary"
                      >
                        Profile
                      </Typography>
                    }
                  </Link>
                </MenuItem>

                <MenuItem onClick={handleLogOut}>
                  <Link id='logout' to={'/'} style={{ textDecoration: 'none' }}>
                    {
                      <Typography
                        textAlign="center"
                        variant="h6"
                        color="text.primary"
                      >
                        Logout
                      </Typography>
                    }
                  </Link>
                </MenuItem>
              </Bar>
            </Box>
          ) : (
            <Box
              sx={{
                flexGrow: 0,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                flexBasis: 120,
              }}
            >
              <Tooltip title={'Go to login page'}>
                <Link id='login-link' to={'/login'} style={{ textDecoration: 'none' }}>
                  {
                    <Typography
                      textAlign="center"
                      variant="subtitle1"
                      fontWeight="bold"
                      color="white"
                    >
                      Login
                    </Typography>
                  }
                </Link>
              </Tooltip>

              <Tooltip title={'Signup to the app'}>
                <Link id='signup-link' to={'/signup'} style={{ textDecoration: 'none' }}>
                  {
                    <Typography
                      textAlign="center"
                      variant="subtitle1"
                      fontWeight="bold"
                      color="white"
                    >
                      Signup
                    </Typography>
                  }
                </Link>
              </Tooltip>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Menu;
