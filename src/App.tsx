import Menu from "./components/Menu";
import Home from './components/Home';
import Login from "./components/Login";
import Hops from "./components/Hops";
import About from "./components/About";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import theme from "./theme";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';

const App = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <ThemeProvider theme={theme}>
        <Router>
          <Menu/>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/hops' element={<Hops />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
