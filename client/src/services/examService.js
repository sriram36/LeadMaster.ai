import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:5000/api/exam';

const getQuestions = () => {
    return axios.get(`${API_URL}/questions`, { headers: authHeader() }).then((response) => {
        return response.data;
    });
};

const submitExam = (answers) => {
    return axios.post(`${API_URL}/submit`, answers, { headers: authHeader() }).then((response) => {
        return response.data;
    });
};

const examService = {
    getQuestions,
    submitExam,
};

export default examService;