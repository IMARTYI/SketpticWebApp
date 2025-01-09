import axios from "axios";

const API_BASE_URL = 'http://127.0.0.1:5000';

async function name(params) {
    const response = await axios.get(`${API_BASE_URL}/api/hello`);
    return response.data;
    
}