import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import Nav from './Component/Navigate/Nav';

// Formik
import ForForm from './Component/Formik/ForForm';
import ForTable from './Component/Formik/ForTable';
import ForEdit from './Component/Formik/ForEdit';

// import Spinner from './Component/Formik/ForSpinner';


// useState............
// import Form from './useState/Form';
// import Table from './useState/Table';
// import Edit from './useState/Edit';



// useReducer..........
// import Create from './UseReducer/Create';
// import { useReducer, useState } from 'react';
// import List from './UseReducer/List';
// import Update from './UseReducer/Update';


// import Spinner from './useState/Spinner';
// import { Spinner } from 'react-bootstrap';

// import Form from './useState/Form';
// src/index.js or src/index.tsx
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      
      <BrowserRouter>
      {/* <Nav/> */}
      <Routes>

        {/* Formik */}
        <Route path='/forform' element = {<ForForm />} ></Route>
        <Route path='/fortable' element = {<ForTable/>} ></Route>
        <Route path='/foredit/:id' element = {<ForEdit/>} ></Route>
        {/* <Route path='/spinne' element = {<ForSpinner/>} ></Route> */}

        {/* UseState */}
        {/* <Route path='/state' element = {<Form/>} ></Route>
        <Route path='/edit/:id' element = {<Edit/>} ></Route>
        <Route path='/view' element = {<Table/>} ></Route>  */}
        {/* <Route path='/spinner' element = {<Spinner/>} ></Route> */}

       
       {/* UseReducer */}
        {/* <Route path='/' element = {<Create/>} ></Route>
        <Route path='/reducer/list' element = {<List/>} ></Route>
        <Route path = '/reducer/edit/:id' element = {<Update/>} ></Route> */}
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
