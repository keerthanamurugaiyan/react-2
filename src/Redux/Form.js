import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addItem } from './Action';

function Form({ addItem}) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem({
            id:Math.floor(Math.random() * 1000), //generate a random id for simplicity
            name,
            password
        });
        setName('');
        setPassword('');
    };


    return (
        <div className='d-flex  justify-content-center align-items-center h-100vh'>
            <form onSubmit={handleSubmit} className='bg-danger p-5 rounded mt-5 pt-5 pb-5'>
                <div>  
                    <h1 className='text-center mt-'>Customer Add</h1>
                    
                    <input 
                    type='text' 
                    value={name} 
                    onChange={(e) =>setName(e.target.value)}  
                    className='w-100 mt-5 p-2 rounded-5' placeholder='Enter Name' ></input>
                    
                    <input 
                    type='text'
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    className='mt-4 w-100 p-2 rounded-5' placeholder='Enter Password'></input>
                   
                   <div className='text-center'> 
                        <button className='mt-4 mx-5 btn btn-info btn-center'>
                        <span class="spinner-grow spinner-grow-sm mx-1"></span>
                        Add User</button>
                    </div>
                </div> 
            </form>
        </div>
    )
}

export default connect(null, { addItem })(Form);
