import { useEffect, useState } from 'react';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { editUser, updateUser } from '../Api/MockApi';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Spinner from '../Spinner/Spinner';
import "./Formik.css"

function ForEdit() {
    const nav = useNavigate();
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [spinner, setSpinner] = useState(false);

    const validationSchema = Yup.object({
        fname: Yup.string().required('Name is required!'),
        email: Yup.string().email('Invalid email address!').required('Email is required!'),
        password: Yup.string().required('Password is required!')
    });

    const formik = useFormik({
        initialValues: {
            fname: '',
            email: '',
            password: ''
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            setSpinner(true);
            try {
                await updateUser(id, values);
                nav('/formik/list');
                resetForm();
                setSpinner(false);
            } catch (error) {
                console.error(error);
                alert("Failed to update user. Please try again.");
            } finally {
                setSpinner(false);
            }
        }
    });

    useEffect(() => {
        setLoading(true);
        editUser(id)
            .then((response) => {
                formik.setValues({
                    fname: response.fname,
                    email: response.email,
                    password: response.password,
                });
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching user:", error);
                alert("Failed to load user data.");
                setLoading(false);
            });
    }, [id]);

    return (
        <>
            {spinner && <Spinner />}
            {loading ? (
                <Spinner />
            ) : (
                <div className="d-flex justify-content-center align-self-center mt-5 p-4">
                    <form className="form p-5 rounded-5 mt-4" onSubmit={formik.handleSubmit}>
                        <h1 className="text-center text-light">Edit User</h1>

                        <label className="form-label text-light fw-bold mt-3" htmlFor="fname">Name:</label>
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

                        <label className="form-label text-light fw-bold mt-3" htmlFor="email">Email Address:</label>
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

                        <label className="form-label text-light fw-bold mt-3" htmlFor="password">Password:</label>
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

                        <div className="text-center mt-4">
                            <button type="submit" className="btn btn-primary fw-bold">Update</button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
}

export default ForEdit;
