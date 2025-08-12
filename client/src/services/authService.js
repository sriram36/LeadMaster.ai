import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

const register = (name, email, password) => {
    return axios.post(`${API_URL}/register`, { name, email, password });
};

const login = (email, password) => {
    return axios.post(`${API_URL}/login`, { email, password }).then((response) => {
        if (response.data.token) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    });
};

const logout = () => {
    localStorage.removeItem('user');
};

const isAuthenticated = () => {
    return localStorage.getItem('user') !== null;
};

const authService = {
    register,
    login,
    logout,
    isAuthenticated,
};

export default authService;