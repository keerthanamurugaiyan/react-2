import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Table() {

  const [items, setItems] = useState ([]);
  const nav= useNavigate();

  useEffect (() => {
    axios.get('https://65b77a0946324d531d54ac37.mockapi.io/Employeeregistor/users')
  .then((response)=>{setItems(response.data)})
  .catch((error)=>console.log("fetch error",error))
  })
  const deleteItem=(id)=>{
    axios.delete(`https://65b77a0946324d531d54ac37.mockapi.io/Employeeregistor/users/${id}`)
    .then(()=>{setItems(items.filter(item=>item.id !== id))})
    .catch((error)=>{console.log("delete error",error)})

  }
  const editItem=(id)=>{
nav(`/edit/${id}`)
  }

  return (
    <div className=''>
      <h1 className='text-center mt-5'>Customer View</h1>
      <table className='table mt-5 table-bordered container col-5 table-striped'>
        <thead className='text-center'>
          <tr className='col-6'>
            <th className='bg-secondary col-4'>Name</th>
            <th className='bg-secondary col-4'>Email</th>
            <th className='bg-secondary col-4'>Password</th>
            <th className='bg-secondary col-4'>Actions</th>
          </tr>
        </thead>

        <tbody className='text-center'>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.fname}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>
                <button onClick={() => deleteItem(item.id)} className='btn btn-danger'>Delete</button>
                <button onClick={() => editItem(item.id)} className='btn btn-danger'>edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className='btn btn-info' onClick={ () =>nav("/") }>Back</button>
    </div>
  );
}

export default Table
