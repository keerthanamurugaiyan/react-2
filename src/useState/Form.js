import axios from 'axios';
import { useState } from 'react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Form() {

    const [items, setItems] = useState ([]);
    const [fname, setFname] = useState ('');
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState('');
    const nav=useNavigate()
   
    // submit
    const adddata = (e)=>{
        e.preventDefault();

        // Validation

        const newData ={fname, email, password};
        axios.post('https://65b77a0946324d531d54ac37.mockapi.io/Employeeregistor/users', newData)
        .then((response)=>{
        setItems([...items, response.data])
        nav("/view")
        setFname('')
        setEmail('')
        setPassword('')
        })
        .catch((error)=>{
            console.log("post error",error);
        })
    
    
    }

    return (
        <>

        <div className='d-flex justify-content-center align-self-center'>
            <form className='form w-25 p-4 rounded-5 bg-info mt-5 pt-'>

                <h1 className='text-center'>Use State</h1>

                <label className='form-label fw-bold mt-3'>Name :</label>
                <input className='form-control col-6'
                 type='text'
                 placeholder='Enter Your Name' 
                 value={fname} 
                 onChange={ (e) => setFname (e.target.value) }
                 />

                <label className='form-label fw-bold mt-3'>Email Address :</label>
                <input className='form-control'
                type='email' 
                placeholder='Enter Your Email Address' 
                value={email} 
                onChange={ (e) => setEmail (e.target.value) }
                />

                <label className='form-label fw-bold mt-3'>Password :</label>
                <input className='form-control'
                type='password' 
                placeholder='Enter Your Password'
                value={password} 
                onChange={ (e) => setPassword (e.target.value) }
                />

                <div className='text-end mt-5'>
                    <button type='submit' className='btn btn-secondary fw-bold' onClick={ adddata }>Submit</button>
                </div>
                
            </form>
        </div>

        </>
    )
}

export default Form
