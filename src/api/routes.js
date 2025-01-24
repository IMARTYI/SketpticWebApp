import axios from "axios";

const API_BASE_URL = 'http://127.0.0.1:5000';

export const getHello = async () =>{
const response = await axios.get(`${API_BASE_URL}/api/hello`);
return response.data;    
}

export const sendUsername = async ({email,password}) =>{
    try {
        const response = await axios.post(`${API_BASE_URL}/register`,{
            email: email,
            password: password,
        });
        return response.data
    } catch (error) {
        console.error("There was an error sending the username:", error);
        return null;
    }
}



