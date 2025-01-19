import axios from 'axios';

const Api= 'https://65b77a0946324d531d54ac37.mockapi.io/Employeeregistor/users';

// post
export const createUser = async(newData) =>{

    try{

        const response = await  axios.post(Api,newData); 
        return response.data;
    } 
    catch (error){ 
        console.log(error);
    }
};

// gettable
export const getUser = async () => {
    try {
        const response = await axios.get(Api);
        return response;
    } catch (error) {
        throw error; // Throw the error to be caught by the caller
    }
}

// delete
export const deleteUser = async(id) =>{
    try{
        await axios.delete(`${Api}/${id}`)
    }
    catch (error){
        console.log(error)
    }
}

// Edit
export const editUser = async(id) =>{
    try{
        const response=await axios.get(`${Api}/${id}`)
        return response.data;
    }
    catch (error){
        console.log(error)
    }
}

// update
export const updateUser = async (id, newData) => {
    try {
        const response = await axios.put(`${Api}/${id}`, newData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};


