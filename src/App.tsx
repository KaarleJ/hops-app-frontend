import Menu from './components/Menu';
import Home from './components/Home';
import Login from './components/Login';
import Hops from './components/Hops';
import About from './components/About';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Page from './components/Page';
import theme from './theme';
import { Rootstate } from './store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './reducers/userReducer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

const App = () => {
  const user = useSelector((state: Rootstate) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user !== window.localStorage.getItem('user-token')) {
      dispatch(setUser(window.localStorage.getItem('user-token')));
    }
  }, [window.localStorage.getItem('user-token'), user]);

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <ThemeProvider theme={theme}>
        <Router>
          <Menu />
          <Page>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hops" element={<Hops />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/about" element={<About />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Page>
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;

