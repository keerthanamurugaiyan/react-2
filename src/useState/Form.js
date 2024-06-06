// import axios from 'axios';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { createUser } from './Api';

function Form() {

    const [items, setItems] = useState ([]);
    const [fname, setFname] = useState ('');
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState('');
    const nav=useNavigate()
   
    // submit
    const onSubmit = async (e)=>{
        e.preventDefault();

        const newData ={fname, email, password};
        try {const response= createUser (newData)
        
        setItems([fname, email, password, items, response.data])
        nav("/view")
        setFname('')
        setEmail('')
        setPassword('')
        }
        catch(error){
            console.log("post error",error);
        }
    }

    const formik = useFormik({
        initialValues:{
            fname :'',
        },
       
        // validationSchema : {
        //     fname: Yup.string().required('name is requird')
        // },

        onSubmit 

    }) 

    const validationSchema = Yup.object().shape({
        fname: Yup.string().required('Name is required')
        // age: Yup.number().required('Age is required').positive().integer(),
        // onSubmit
    });


    return (
        <>

        <div className='d-flex justify-content-center align-self-center'>
            <form className='form w-25 p-4 rounded-5  mt-5 pt-' onSubmit={formik.handleSubmit}>

                <h1 className='text-center text-light'>Use State</h1>

                <label className='form-label text-light fw-bold mt-3'>Name :</label>
                <input className='form-control col-6'
                 type='text'
                 placeholder='Enter Your Name' 
                 autoComplete='off'
                 id='fname'
                 name='fname'
                 value={formik.values.fname} 
                //  onBlur={handleBlur}
                 onChange={formik.handleChange}
                 />

                <label className='form-label text-light fw-bold mt-3'>Email Address :</label>
                <input className='form-control'
                type='email' 
                placeholder='Enter Your Email Address'
                autoComplete='off' 
                // value={values.email} 
                // onBlur={handleBlur}
                onChange={ (e) => setEmail (e.target.value) }
                />

                <label className='form-label text-light fw-bold mt-3'>Password :</label>
                <input className='form-control'
                type='password' 
                placeholder='Enter Your Password'
                autoComplete='off'
                value={password} 
                onChange={ (e) => setPassword (e.target.value) }
                />

                <div className='text-end mt-5'>
                    <button type='submit' className='btn btn-secondary fw-bold' >Submit</button>
                </div>
                
            </form>
        </div>

        </>
    )
}

export default Form
