import Menu from "./components/Menu";
import theme from "./theme";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';

const App = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundImage: `url(${process.env.PUBLIC_URL + '/hops_background.png'})`}}>
      <ThemeProvider theme={theme}>
        <Router>
          <Menu/>
          <Routes>
            <Route path='/' element={<div>Hello World!</div>}/>
            <Route path='/hops' element={<div>Hops here</div>}/>
            <Route path='/signin' element={<div>signin here</div>}/>
            <Route path='/signup' element={<div>signup here</div>}/>
            <Route path='/about' element={<div>about here</div>}/>
            <Route path='/profile' element={<div>profile here</div>} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
