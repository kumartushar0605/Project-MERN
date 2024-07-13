import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './Component/Home';
import Emp from './Component/Emp';
import Fixed from './Component/Fixed';
import Allotinventory from './Component/Allotinventory';
import Assign from './Component/Assign';
import Assigned from './Component/Assigned';
import CheckStatus from './Component/CheckStatus';
import CheckStatus2 from './Component/CheckStatus2';
import Header from './Component/Header';
import Updateinventory from './Component/Updateinventory';
import Updateinventory2 from './Component/Updateinventory2';


function App() {
  return (
   <>
   <BrowserRouter>
   {/* <Header/> */}
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/allot' element={<Allotinventory/>}/>
    <Route path='/assign' element={<Assign/>}/>
    <Route path='assigned' element={<Assigned/>}/>
    <Route path='/check' element={<CheckStatus/>}/>
    <Route path='/check2' element={<CheckStatus2/>}/>
    <Route path='/up' element={<Updateinventory/>}/>
    <Route path='/up2' element={<Updateinventory2/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
