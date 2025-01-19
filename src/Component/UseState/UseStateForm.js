import {  useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate} from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import { createUser } from '../Api/MockApi';

const UseStateForm = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [spinner,setSpinner] = useState(false);
   
    const nav = useNavigate();

    const addData =async(e) => {
        e.preventDefault();
        if(name && email && password !== '') {
            setSpinner(true);
          
        const newUser = { name, email, password };
        try {
            const response = await createUser(newUser); 
            setUsers([...users, response]);
            nav('/state/table');
            setName("");
            setEmail("")
            setPassword("")
            setSpinner(false)  }
        catch (error) {
            console.error('There was an error creating the user!', error);
            setSpinner(false);
        }

    }
}
    return (
        <>
       {spinner && <Spinner/>}

        <div className="d-flex justify-content-center align-self-center">
            <form onSubmit={addData} className='form p-4 rounded-5 mt-5'>
                <h1 className='text-center text-light'>Login</h1>

                <div className="">
                    <label htmlFor="name" className="form-label text-light fw-bold mt-3">Name:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        name="name" 
                        value={name} 
                        placeholder='Name'
                        onChange={(e) => setName(e.target.value)} 
                    />
                </div>
                <div className="">
                    <label htmlFor="email" className="form-label text-light fw-bold mt-3">Email:</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        name="email" 
                        value={email} 
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div className="">
                    <label htmlFor="password" className="form-label text-light fw-bold mt-3">Password:</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        name="password" 
                        value={password} 
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
              
                <div className="text-center mt-5">
            <button type="submit" className="btn btn-primary fw-bold">Submit</button>
          </div>
            </form>
        </div>
        </>
    );
}

export default UseStateForm;