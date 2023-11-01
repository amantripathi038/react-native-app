import axios from "axios";

const API = 'http://localhost:3000/api/v1'

const userLogin = async (email, password, userType) => {
    const data = await axios.post(`${API}/${userType}/auth/login`, { email, password });
    console.debug(data.data);
}