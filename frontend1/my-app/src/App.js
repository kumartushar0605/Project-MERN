import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Profile from './Components/Profile';
import Report from './Components/Report';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {Toaster} from 'react-hot-toast';
import { useContext, useEffect } from "react";
import { Context } from "./index";
import Status from './Components/Status'
import { AuthContext } from './Components/AuthContext';

import axios from "axios";
import "./Styles/app.scss"
import Home2 from './Components/Home2';
function App() {
  
  return (
  
    
    <BrowserRouter> 
    {/* <Header/> */}
    <Routes>
    <Route path='/h2' element={<><Header /><Home /></>} />
        <Route path='/about' element={<><Header /><About /></>} />
        <Route path='/contact' element={<><Header /><Contact /></>} />
        <Route path='/profile' element={<><Header /><Profile /></>} />
        <Route path='/report' element={<><Header /><Report /></>} />
        <Route path='/status' element={<><Header/><Status/></>}/>
        <Route path='/' element={<Home2/>}/>
    </Routes>
    {/* <Footer/> */}
    <Toaster/>
    </BrowserRouter>
    
    
  );
}

export default App;
