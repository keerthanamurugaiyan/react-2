import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './useState/Form';
import Table from './useState/Table';
import Edit from './useState/Edit';
// import Form from './useState/Form';
// src/index.js or src/index.tsx
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>

        <Route path='/' element = {<Form/>} ></Route>
        <Route path='/edit/:id' element = {<Edit/>} ></Route>
        <Route path='/view'element = {<Table/>} ></Route>

      </Routes>
      </BrowserRouter>

    </>
  )

}

// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// // import Form from './Redux/Form';
// import Table from './Redux/Table';

// function App() {
//   return (
//     <BrowserRouter>
//     <Routes>
//      <Route path='/'  element={<Form/>}    ></Route>
//      <Route path='/reduxtable'  element={<Table/>}    ></Route>


//     </Routes>
    
//     </BrowserRouter>
//   );
// }

export default App;
