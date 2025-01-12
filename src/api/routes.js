import axios from "axios";

const API_BASE_URL = 'http://127.0.0.1:5000';

 export const getHello = async () =>{
    const response = await axios.get(`${API_BASE_URL}/api/hello`);
    return response.data;    
    }

    
    export const sendUsername = async (username) =>{
        try {
            const response = await axios.post(`${API_BASE_URL}/test`,{
                username: username
            });
            return response.data
        } catch (error) {
            console.error("There was an error sending the username:", error);
            return null;
        }
    }



