import React, { Fragment, useEffect, useReducer, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Reducer, { initialState } from './Reducer';
import { editUser, updateUser } from './Api';
import { getitembyid, updateItem } from './Action';
// import { createUser } from './Api';
// import { addItem, updateItem } from './Action';
import "./UseReducer.css";

function Update() {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const navigate = useNavigate();
  const [fname, setFname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {id} = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateUser(id,{ fname, email, password });
      dispatch(updateItem(response));
      navigate('/reducer/list');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    editUser(id)
        .then((response) => {dispatch(getitembyid(response))
            setFname(response.fname);
            setEmail(response.email);
            setPassword(response.password);
        })
        .catch((error) => console.log("fetch error", error));
}, [id]);

  return (
    <Fragment>
      <div className="d-flex justify-content-center align-self-center">
        <form className="form w-25 p-5 rounded-5 mt-5" onSubmit={handleSubmit}>
          <h1 className="text-center text-light">Use Reducer</h1>

          <label className="form-label text-light fw-bold mt-3">Name:</label>
          <input
            className="form-control col-6"
            type="text"
            placeholder="Enter Your Name"
            autoComplete="off"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />

          <label className="form-label text-light fw-bold mt-3">Email Address:</label>
          <input
            className="form-control"
            type="email"
            placeholder="Enter Your Email Address"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="form-label text-light fw-bold mt-3">Password:</label>
          <input
            className="form-control"
            type="password"
            placeholder="Enter Your Password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="text-center mt-5">
            <button type="submit" className="btn btn-primary fw-bold">Submit</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default Update;
