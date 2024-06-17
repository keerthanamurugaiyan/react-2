import React from 'react'
// import './UseReducer/Style.css';

function Update() {
    return (
        <>

<div className="d-flex justify-content-center align-self-center">
                <form className="form w-25 p-4 rounded-5 mt-5" >
                    <h1 className="text-center text-light">Edit User</h1>

                    <label className="form-label text-light fw-bold mt-3" htmlFor="fname">Name:</label>
                    <input
                        className="form-control col-6"
                        type="text"
                        placeholder="Enter Your Name"
                        autoComplete="off"
                        id="fname"
                        name="fname"
                        // value={formik.values.fname}
                        // onBlur={formik.handleBlur}
                        // onChange={formik.handleChange}
                    />
                    {/* {formik.touched.fname && formik.errors.fname ? (
                        <div className="text-danger">{formik.errors.fname}</div>
                    ) : null} */}

                    <label className="form-label text-light fw-bold mt-3" htmlFor="email">Email Address:</label>
                    <input
                        className="form-control"
                        type="email"
                        placeholder="Enter Your Email Address"
                        autoComplete="off"
                        id="email"
                        name="email"
                        // value={formik.values.email}
                        // onBlur={formik.handleBlur}
                        // onChange={formik.handleChange}
                    />
                    {/* {formik.touched.email && formik.errors.email ? (
                        <div className="text-danger">{formik.errors.email}</div>
                    ) : null} */}

                    <label className="form-label text-light fw-bold mt-3" htmlFor="password">Password:</label>
                    <input
                        className="form-control"
                        type="password"
                        placeholder="Enter Your Password"
                        autoComplete="off"
                        id="password"
                        name="password"
                        // value={formik.values.password}
                        // onBlur={formik.handleBlur}
                        // onChange={formik.handleChange}
                    />
                    {/* {formik.touched.password && formik.errors.password ? (
                        <div className="text-danger">{formik.errors.password}</div>
                    ) : null} */}

                    <div className="text-center mt-4">
                        <button type="submit" className="btn btn-primary fw-bold">Update</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Update
