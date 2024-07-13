import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Profile from './Components/Profile';
import Inventory from './Components/Inventory';
import Report from './Components/Report';
import Register from './Components/Register';
import Login from './Components/Login';
import Logout from './Components/Logout';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {Toaster} from 'react-hot-toast';
import { useContext, useEffect } from "react";
import { Context } from "./index";
import Status from './Components/Status'
import { AuthContext } from './Components/AuthContext';

import axios from "axios";
import "./Styles/app.scss"
import Inventoryy from './Components/Inventoryy';
import Home2 from './Components/Home2';
function App() {



  
  const {setUserr,setIsAuthenticated,setLoading}=useContext(Context);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await axios.get(`http://localhost:5000/usersme`, {
  //         withCredentials: true,
  //       });
  //       setUserr(response.data.user);
  //       setIsAuthenticated(true);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching user data:', error);
  //       setUserr({});
  //       setIsAuthenticated(false);
  //       setLoading(false);
  //     }
      
  //   };

    // fetchData();
  // }, [setUserr, setIsAuthenticated, setLoading]);
  return (
  
    
    <BrowserRouter> 
    {/* <Header/> */}
    <Routes>
    <Route path='/h2' element={<><Header /><Home /><Footer /></>} />
        <Route path='/about' element={<><Header /><About /><Footer /></>} />
        <Route path='/contact' element={<><Header /><Contact /><Footer /></>} />
        <Route path='/profile' element={<><Header /><Profile /><Footer /></>} />
        <Route path='/in' element={<><Header /><Inventory /><Footer /></>} />
        <Route path='/inn' element={<><Header /><Inventoryy /><Footer /></>} />
        <Route path='/report' element={<><Header /><Report /><Footer /></>} />
        <Route path='/status' element={<><Header/><Status/></>}/>
        {/* <Route path='/register' element={<><Header /><Register /><Footer /></>} /> */}
        {/* <Route path='/login' element={<><Header /><Login /><Footer /></>} /> */}
        {/* <Route path='/logout' element={<><Header /><Logout /><Footer /></>} /> */}
        <Route path='/' element={<Home2/>}/>
    </Routes>
    {/* <Footer/> */}
    <Toaster/>
    </BrowserRouter>
    
    
  );
}

export default App;
