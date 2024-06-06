import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { deleteUser, getUser } from './Api';

function Table() {

  const [items, setItems] = useState ([]);
  const nav= useNavigate();

  useEffect (() => {
   getUser()
  .then((response)=>{setItems(response.data)})
  .catch((error)=>console.log("fetch error",error))
  })
  const deleteItem=(id)=>{
    deleteUser(id)
    .then(()=>{setItems(items.filter(item=>item.id !== id))})
    .catch((error)=>{console.log("delete error",error)})

  }
  const editItem=(id)=>{
nav(`/edit/${id}`)
  }

  return (
    <div className=''>
      <h1 className='text-center mt-5'>Customer View</h1>
      <table className='table mt-5 table-bordered container table-striped'>
        <thead className='text-center'>
          <tr className=''>
            <th className='bg-info'>Name</th>
            <th className='bg-info'>Email</th>
            <th className='bg-info'>Password</th>
            <th className='bg-info'>Actions</th>
          </tr>
        </thead>

        <tbody className='text-center'>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.fname}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td className=''>
                <button onClick={() => editItem(item.id)} className='btn btn-secondary'>edit</button>
                <button onClick={() => deleteItem(item.id)} className='btn btn-secondary mx-2'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className='btn btn-primary mt-3 mx-5' onClick={ () =>nav("/") }>Back</button>
    </div>
  );
}

export default Table
