import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Cập nhật URL này theo môi trường production nếu cần

const api = axios.create({
  baseURL: API_URL,
});

// Thêm interceptor để đính kèm token vào mọi request
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['x-auth-token'] = token;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

// Auth
export const register = (userData) => api.post('/auth/signup', userData);
export const confirmEmail = (token) => api.get(`/auth/confirm/${token}`);
export const login = (userData) => api.post('/auth/login', userData);
export const findPassword = (email) => api.post('/auth/findPassword', email);
export const resetPassword = (token, passwordData) => api.post(`/auth/resetPassword/${token}`, passwordData);



// User
export const getUserProfile = () => api.get('/user/profile');
export const updateUserProfile = (formData) => api.post('/user/profile', formData);

// Quiz
export const getQuizzes = () => api.get('/test');
export const getQuiz = (id) => api.get(`/test/${id}`);
export const submitQuiz = (id, answers) => api.post(`/test/${id}/submit`, { answers });

// Results
export const getUserResults = (userId) => api.get(`/result/user/${userId}`);
export const getAllQuestions = () => api.get('/test/questions/all');



export default api;
