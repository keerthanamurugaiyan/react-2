import React, { useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import Reducer, { initialState } from './Reducer';
import { getUser } from './Api';
import { deleteItem, getItem } from './Action';

function List() {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getUser();
        dispatch(getItem(response));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getData();
  }, []);
  console.log(state.items);

  const handleDelete = (id) => {
    try {
      dispatch(deleteItem(id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/reducer/edit/${id}`);
  };

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
          {state.items && state.items.length > 0 ? (
            state.items.map((item) => (
              <tr key={item.id}>
                <td>{item.fname}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td className=''>
                  <button onClick={() => handleEdit(item.id)} className='btn btn-secondary'>Edit</button>
                  <button onClick={() => handleDelete(item.id)} className='btn btn-secondary mx-2'>Delete</button>
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
      <button className='btn btn-primary mt-3 mx' onClick={() => navigate("/")}>Back</button>
    </div>
  );
}

export default List;
