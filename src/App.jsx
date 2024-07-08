import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/home/home';
import { useState } from 'react';
import Loader from './Components/Loader';
function App() {
  const [showloading,setshowloading]=useState(true);
  return (
    
       <BrowserRouter>
      
        <Routes>
            <Route path='/' element={<Home/>}>

            </Route>
        </Routes>
      </BrowserRouter>
   
  );
}

export default App;
