import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteUser, getUser } from './ForApi';
import "./Formik.css";


function ForTable() {
  const [items, setItems] = useState([]);
  // const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

 useEffect(() => {
  getUser()
    .then((response) => {
      console.log("Response data:", response.data);
      setItems(response.data || []);
      // setLoading(false);
    })
    .catch((error) => {
      console.error("fetch error", error);
      // setLoading(false);
    });
}, []);

  

  const deleteItem = (id) => {
    deleteUser(id)
      .then(() => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error("delete error", error);
      });
  };

  const editItem = (id) => {
    navigate(`/edit/${id}`);
  };

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className=''>
      <h1 className='text-center text-light mt-5'>Data View</h1>
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
          {items.length > 0 ? (
            items.map((item) => (
              <tr key={item.id}>
                <td>{item.fname}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td className=''>
                  <button onClick={() => editItem(item.id)} className='btn btn-secondary'>Edit</button>
                  <button onClick={() => deleteItem(item.id)} className='btn btn-secondary mx-2'>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
      <button className='btn btn-primary mt-3 mx-5 px-4' onClick={() => navigate("/forform")}>Back</button>
    </div>
  );
}

export default ForTable;