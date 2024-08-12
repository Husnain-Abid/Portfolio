import './App.css';
import Home from './page/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './page/Contact/Contact';
import Profile from './page/Profile/Profile';
import Work from './page/Work/Work';
import CV from './page/CV/CV';
import Login from './page/Login/Login';
import { useSelector } from 'react-redux';
import PrivateRoute from './component/ProtectedRoute';


function App() {
  const isAuthenticated = useSelector((state) => state.pin.isAuthenticated);
  console.log(isAuthenticated);

  return (
    <>
      <Router>
        <Routes>

          <Route path='/' element={<Home />}> </Route>
          <Route path='/contact' element={<Contact />}> </Route>
          {/* <Route path='/profile' element={<Profile />}> </Route> */}
          <Route path='/profile' element={<PrivateRoute element={<Profile />} />} />

          <Route path='/work' element={<Work />}> </Route>
          <Route path='/cv' element={<CV />}> </Route>
          <Route path='/pin' element={<Login/>}> </Route>
        </Routes>

      </Router>
    </>
  );
}

export default App;
