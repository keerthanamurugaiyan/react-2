import React, { Fragment, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReReducer, { initialState } from './ReReducer';
import { createUser } from '../../Api/MockApi';
import { addItem } from './ReAction';
import Spinner from '../../Spinner/Spinner';

function ReForm() {
  const [state, dispatch] = useReducer(ReReducer, initialState);
  const navigate = useNavigate();
  const [fname, setFname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  
  const [loader, setLoder] = useState(false)

  const validateForm = () => {
    const newErrors = {};
    if (!fname) newErrors.fname = 'Name is required';
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoder(true)
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try { 
      const response = await createUser({ fname, email, password });
      setLoder(false);
      dispatch(addItem(response));
    } catch (error) {
      setLoder(false);
      console.log(error);
    }
   navigate('/reducer/table');
  
  };

  return (
    
    <Fragment>

    {loader && <Spinner/>}

      <div className="d-flex justify-content-center align-self-center">
        <form className="form p-4 rounded-5 mt-5" onSubmit={handleSubmit}>
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
          {errors.fname && <div className="text-danger">{errors.fname}</div>}

          <label className="form-label text-light fw-bold mt-3">Email Address:</label>
          <input
            className="form-control"
            type="email"
            placeholder="Enter Your Email Address"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}

          <label className="form-label text-light fw-bold mt-3">Password:</label>
          <input
            className="form-control"
            type="password"
            placeholder="Enter Your Password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <div className="text-danger">{errors.password}</div>}

          <div className="text-center mt-5">
            <button type="submit" className="btn btn-primary fw-bold">Submit</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default ReForm;
