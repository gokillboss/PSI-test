import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Update this URL for the production environment if needed

const api = axios.create({
  baseURL: API_URL,
});

// Add an interceptor to attach the token to every request
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
export const updatePassword = (passwordData) => api.post('/user/updatePassword', passwordData);

// Quiz
export const getQuizzes = () => api.get('/test');
export const getQuiz = (id) => api.get(`/test/${id}`);
export const submitQuiz = (id, answers) => api.post(`/test/${id}/submit`, { answers });

// Results
export const getUserResults = (userId) => api.get(`/result/user/${userId}`);
export const getAllQuestions = () => api.get('/test/questions/all');


//Payment
export const checkQuizPurchase = async (quizId) => {
    try {
        const response = await api.get(`/payment/check-purchase?quizId=${quizId}`);
        return response.data;
    } catch (error) {
        console.error('Error checking quiz purchase:', error);
        throw error;
    }
};

export const createCheckoutSession = async (quizId) => {
    try {
        const response = await api.post('/payment/create-checkout-session', { quizId });
        console.log('createCheckoutSession response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating checkout session:', error);
        throw error;
    }
};

export default api;
