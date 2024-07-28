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
export const getUserProfile = () => api.get('/user/profile');
export const updateUserProfile = (formData) => api.post('/user/profile', formData);
export const getQuizzes = () => api.get('/test'); // Ensure this matches the backend route
export const getQuiz = (id) => api.get(`/test/${id}`);
export const submitQuiz = (id, answers) => api.post(`/test/${id}/submit`, { answers });
export const getUserResults = (userId) => api.get(`/result/user/${userId}`);
export const getAllQuestions = () => api.get('/test/questions/all');

export default api;
