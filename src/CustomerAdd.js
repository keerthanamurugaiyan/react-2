import React, { useState } from "react";

export default function CustomerAdd() {
    const [input, setInput] = useState("");
    const [customers, setCustomers] = useState([]);

    function addCustomer() {
        if (input) {
            setCustomers((previousState) => [...previousState, input])
            console.log(customers)
        }
    }


    return <>
         <div>
            <h3>Add New Customer</h3>
            <input type="text" onChange={(e) => setInput(e.target.value)} />
            <button onClick={addCustomer}>Add</button>
        </div>
        <CustomerView customers={customers} /> 
    </> 
    
}