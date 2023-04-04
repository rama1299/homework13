import axios from 'axios';
import { API_URL } from '../constants/path';

const intance = axios.create({baseURL: API_URL})

intance.interceptors.request.use((config)=> {
    const token = localStorage.getItem('token');
    if(token) {
        config.headers.Authorization = 'Bearer ' + token;
    }
    return config
})

export {intance}