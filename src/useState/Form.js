import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from './Api';
import Spinner from './Spinner';

function Form() {
    const navigate = useNavigate();
    const [spinner, setSpinner] =useState(false)

    const validationSchema = Yup.object({
        fname: Yup.string().required('Name is required !'),
        email: Yup.string().email('Invalid email address !').required('Email is required !'),
        password: Yup.string().required('Password is required !')
    });

    const formik = useFormik({
        initialValues: {
            fname: '',
            email: '',
            password: ''
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            setSpinner(true)
            try {
                await createUser(values);
                navigate('/view');
                resetForm();
                setSpinner(false)
            } catch (error) {
                console.error(error);
                setSpinner(false)
            }
        }
    });


    return (
        <>

        {spinner && <Spinner/> }
        
        <div className="d-flex justify-content-center align-self-center mt-5 p-">
            <form className="form w-25 p-4 rounded-5 mt-5" onSubmit={formik.handleSubmit}>
                <h1 className="text-center text-light">Use State</h1>

                <label className="form-label text-light fw-bold mt-3" htmlFor="fname">Name:</label>
                <input
                    className="form-control col-6"
                    type="text"
                    placeholder="Enter Your Name"
                    autoComplete="off"
                    id="fname"
                    name="fname"
                    value={formik.values.fname}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                />
                {formik.touched.fname && formik.errors.fname ? (
                    <div className="text-danger">{formik.errors.fname}</div>
                ) : null}

                <label className="form-label text-light fw-bold mt-3" htmlFor="email">Email Address:</label>
                <input
                    className="form-control"
                    type="email"
                    placeholder="Enter Your Email Address"
                    autoComplete="off"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div className="text-danger">{formik.errors.email}</div>
                ) : null}

                <label className="form-label text-light fw-bold mt-3" htmlFor="password">Password:</label>
                <input
                    className="form-control"
                    type="password"
                    placeholder="Enter Your Password"
                    autoComplete="off"
                    id="password"
                    name="password"
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                />
                {formik.touched.password && formik.errors.password ? (
                    <div className="text-danger">{formik.errors.password}</div>
                ) : null}

                <div className="text-center mt-5">
                    <button type="submit" className="btn btn-primary fw-bold">Submit</button>
                </div>
            </form>
        </div>
        </>
    );
}

export default Form;
