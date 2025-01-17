import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../Api/MockApi';
import Spinner from './ForSpinner';

function ForForm() {
    const navigate = useNavigate();
    const [spinner, setSpinner] = useState(false);

    const validationSchema = Yup.object({
        fname: Yup.string()
            .min(3, 'Name must be at least 3 characters long !') 
            .max(20, 'Name cannot exceed 20 characters !') 
            .required('Name is required !'),
    
        email: Yup.string()
            .email('Invalid email address format !') 
            .required('Email is required !'),
    
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters long !') 
            .matches(/[A-Z]/, 'Password must contain at least one uppercase letter !') 
            .matches(/[a-z]/, 'Password must contain at least one lowercase letter !') 
            .matches(/\d/, 'Password must contain at least one number !') 
            .matches(/[@$!%*?&]/, 'Password must contain at least one special character !')
            .required('Password is required !'), 
    });
    

    const formik = useFormik({
        initialValues: {
            fname: '',
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            setSpinner(true);
            try {
                await createUser(values);
                navigate('/fortable');
                resetForm();
                setSpinner(false);
            } catch (error) {
                console.error(error);
                setSpinner(false);
            }
        },
    });

    return (
        <>
            {spinner && <Spinner />}

            <div className="d-flex justify-content-center align-self-center mt-5">
                <form className="form p-4 rounded-5 mt-4" onSubmit={formik.handleSubmit}>
                    <h1 className="text-center text-light">Formik</h1>

                    {/* Name Field */}
                    <label className="form-label text-light fw-bold mt-3" htmlFor="fname">
                        Name:
                    </label>
                    <input
                        className={`form-control col-6 ${
                            formik.touched.fname && formik.errors.fname ? 'border-danger border-2' : ''
                        }`}
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

                    {/* Email Field */}
                    <label className="form-label text-light fw-bold mt-3" htmlFor="email">
                        Email Address:
                    </label>
                    <input
                        className={`form-control ${
                            formik.touched.email && formik.errors.email ? 'border-danger border-2' : ''
                        }`}
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

                    {/* Password Field */}
                    <label className="form-label text-light fw-bold mt-3" htmlFor="password">
                        Password:
                    </label>
                    <input
                        className={`form-control ${
                            formik.touched.password && formik.errors.password ? 'border-danger border-2' : ''
                        }`}
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

                    {/* Submit Button */}
                    <div className="text-center mt-5">
                        <button type="submit" className="btn btn-primary fw-bold">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default ForForm;
