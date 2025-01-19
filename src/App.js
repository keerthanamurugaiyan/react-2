// import { BrowserRouter, Route, Routes } from 'react-router-dom';

// // import Nav from './Component/Navigate/Nav';

// // Formik.............
// import ForForm from './Component/Formik/ForForm';
// import ForTable from './Component/Formik/ForTable';
// import ForEdit from './Component/Formik/ForEdit';
// // import Spinner from './Component/Formik/ForSpinner';


// // useState............
// // import Form from './useState/Form';
// // import Table from './useState/Table';
// // import Edit from './useState/Edit';


// // useReducer...........
// import ReForm from './Component/UseReducer/WithApi/ReForm';
// import ReTable from './Component/UseReducer/WithApi/ReTable';
// import ReEdit from './Component/UseReducer/WithApi/ReEdit';
// // import { useReducer, useState } from 'react';
// // import List from './UseReducer/List';
// // import Update from './UseReducer/Update';


// // import Spinner from './useState/Spinner';
// // import { Spinner } from 'react-bootstrap';

// // import Form from './useState/Form';
// // src/index.js or src/index.tsx
// // import 'bootstrap/dist/css/bootstrap.min.css';


// function App() {

//   return (
//     <>
      
//       <BrowserRouter>
//       {/* <Nav/> */}
//       <Routes>

//         {/* Formik */}
//         <Route path='/forform' element = {<ForForm />} ></Route>
//         <Route path='/fortable' element = {<ForTable/>} ></Route>
//         <Route path='/foredit/:id' element = {<ForEdit/>} ></Route>
//         {/* <Route path='/spinne' element = {<ForSpinner/>} ></Route> */}


//         {/* UseState */}
//         {/* <Route path='/state' element = {<Form/>} ></Route>
//         <Route path='/edit/:id' element = {<Edit/>} ></Route>
//         <Route path='/view' element = {<Table/>} ></Route>  */}
//         {/* <Route path='/spinner' element = {<Spinner/>} ></Route> */}

       
//        {/* UseReducer */}
//         <Route path='/' element = {<ReForm/>} ></Route>
//         <Route path='/reducer/table' element = {<ReTable/>} ></Route>
//         <Route path = '/reducer/edit/:id' element = {<ReEdit/>} ></Route> 
//         {/* <Route path='/loader' element = {<Loader/>} ></Route>  */}

//       </Routes>
//       </BrowserRouter>

//     </>
//   )

// }



// // import { BrowserRouter, Route, Routes } from 'react-router-dom';
// // // import Form from './Redux/Form';
// // import Table from './Redux/Table';

// // function App() {
// //   return (
// //     <BrowserRouter>
// //     <Routes>
// //      <Route path='/'  element={<Form/>}    ></Route>
// //      <Route path='/reduxtable'  element={<Table/>}    ></Route>


// //     </Routes>
    
// //     </BrowserRouter>
// //   );
// // }

// export default App;




import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Component/Layout/Layout';
import Home from './Component/Home/Home';
import ForForm from './Component/Formik/ForForm';
import ForEdit from './Component/Formik/ForEdit';
import ForTable from './Component/Formik/ForTable';
import UseStateForm from './Component/UseState/UseStateForm';
import UseStateEdit from './Component/UseState/UseStateEdit';
import { UseStateList } from './Component/UseState/UseStateList';
import ReForm from './Component/UseReducer/WithApi/ReForm';
import ReTable from './Component/UseReducer/WithApi/ReTable';
import ReEdit from './Component/UseReducer/WithApi/ReEdit';
import { ContextForm } from './Component/UseContext/ContextForm';
import ContextList from './Component/UseContext/ContextList';
import ContextEdit from './Component/UseContext/ContextEdit';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          {/* Formik */}
          <Route path="/formik/form" element={<ForForm />} />
          <Route path="/formik/edit/:id" element={<ForEdit />} />
          <Route path="/formik/list" element={<ForTable />} />

          {/* useState */}
          <Route path="/state/form" element={<UseStateForm/>}/>
          <Route path="/state/table" element={<UseStateList/>}/>
          <Route path="/state/edit/:id" element={<UseStateEdit/>}/>

          {/* Reducer */}
          <Route path="/reducer/form" element={<ReForm />} />
          <Route path="'/reducer/table'" element={<ReTable />} />
          <Route path="/reducer/edit/:id" element={<ReEdit />} />

          {/* Context */}
          <Route path="/context/form" element={<ContextForm/>}/>
          <Route path="/context/table" element={<ContextList/>}/>
          <Route path="/context/edit/:id" element={<ContextEdit/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;