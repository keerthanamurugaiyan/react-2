import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';


// useState............
import Form from './useState/Form';
import Table from './useState/Table';
import Edit from './useState/Edit';

// import Nav from './useState/Nav';



// useReducer..........
import Create from './UseReducer/Create';
// import { useReducer, useState } from 'react';
// import Loader from './UseReducer/Loader';

import List from './UseReducer/List';
import Update from './UseReducer/Update';


// import Spinner from './useState/Spinner';
// import { Spinner } from 'react-bootstrap';

// import Form from './useState/Form';
// src/index.js or src/index.tsx
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      
      <BrowserRouter>
      <Routes>
        {/* <Route path='/nav' element = {<Nav/>} ></Route> */}
        <Route path='/state' element = {<Form/>} ></Route>
        <Route path='/edit/:id' element = {<Edit/>} ></Route>
        <Route path='/view' element = {<Table/>} ></Route> 
        {/* <Route path='/spinner' element = {<Spinner/>} ></Route> */}

        <Route path='/' element = {<Create/>} ></Route>
        <Route path='/reducer/list' element = {<List/>} ></Route>
        <Route path = '/reducer/edit/:id' element = {<Update/>} ></Route>
        {/* <Route path='/loader' element = {<Loader/>} ></Route>  */}

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
