import React from 'react';
import { connect } from 'react-redux';
import { deleteItem } from './Action';

function Table({ items, deleteItem }) {
  return (
    <div className=''>
      <h1 className='text-center mt-5'>Customer View</h1>
      <table className='table mt-5 table-bordered container col-5 table-striped'>
        <thead className='text-center'>
          <tr className='col-8'>
            <th className='bg-secondary col-4'>Name</th>
            <th className='bg-secondary col-4'>Password</th>
            <th className='bg-secondary col-4'>Actions</th>
          </tr>
        </thead>

        <tbody className='text-center'>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.password}</td>
              <td>
                <button onClick={() => deleteItem(item.id)} className='btn btn-danger'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => ({
  items: state.items
});

export default connect(mapStateToProps, { deleteItem })(Table);
