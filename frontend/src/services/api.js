import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['x-auth-token'] = token;
  }
  return config;
});

export const register = (userData) => api.post('/auth/signup', userData);
export const login = (userData) => api.post('/auth/login', userData);
export const getUserProfile = () => api.get('/users/profile');
export const updateUserProfile = (formData) => api.post('/users/profile', formData);
export const getQuizzes = () => api.get('/tests');
export const getQuiz = (id) => api.get(`/tests/${id}`);
export const submitQuiz = (id, answers) => api.post(`/tests/${id}/submit`, { answers });
export const getUserResults = (userId) => api.get(`/results/user/${userId}`);
export const getAllQuestions = () => api.get('/tests/questions/all');
export const getCategories = () => api.get('/categories');
export const getCategoryById = (id) => api.get(`/categories/${id}`); // Ensure this is correct

export default api;
