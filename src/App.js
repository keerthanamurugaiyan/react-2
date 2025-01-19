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