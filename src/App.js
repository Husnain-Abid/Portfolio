import logo from './logo.svg';
import './App.css';
import Home from './page/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Contact from './page/Contact/Contact';
import Profile from './page/Profile/Profile';
import Work from './page/Work/Work';
import CV from './page/CV/CV';



function App() {
  return (
    <>
      <Routes>
        
        <Route path='/' element={<Home />}> </Route>
        <Route path='/contact' element={<Contact />}> </Route>
        <Route path='/about' element={<Profile/>}> </Route>
        <Route path='/work' element={<Work/>}> </Route>
        <Route path='/cv' element={<CV/>}> </Route>

      </Routes>
    </>
  );
}

export default App;
