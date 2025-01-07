import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

// Add token to headers
API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) req.headers.Authorization = `Bearer ${token}`;
    return req;
});

export const register = (formData) => API.post('/users/register', formData);
export const login = (formData) => API.post('/users/login', formData);
export const fetchUsers = () => API.get('/users');
export const updateUser = (id, formData) => API.put(`/users/${id}`, formData);
export const deleteUser = (id) => API.delete(`/users/${id}`);
