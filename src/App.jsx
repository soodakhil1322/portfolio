import {HashRouter ,Routes,Route} from 'react-router-dom';
import Home from './Pages/home/home';



function App() {
 
  return (
    
       <HashRouter>
      
        <Routes>
            <Route path='/' element={<Home/>}>

            </Route>
        </Routes>
       
      </HashRouter>
   
  );
}

export default App;
