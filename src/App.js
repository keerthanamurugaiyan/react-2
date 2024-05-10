
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './Redux/Form';
import Table from './Redux/Table';

function App() {
  return (
    <BrowserRouter>
    <Routes>

     <Route path='/reduxform'  element={<Form/>}    ></Route>
     <Route path='/reduxtable'  element={<Table/>}    ></Route>


    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
