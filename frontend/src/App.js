import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import QuizDetail from './components/Quiz/QuizDetail';
import AllQuestions from './components/Quiz/AllQuestions';
import QuizResult from './components/Quiz/QuizResult';
import HomePage from './pages/HomePage';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import Quizzes from './pages/Quizzes';
import ProtectedRoute from './components/ProtectedRoute';
import EmailConfirmation from './pages/Auth/EmailConfirmation';
import FindPassword from './pages/Auth/FindPassword';
import { Container } from 'react-bootstrap';
import PaymentSuccessPage from './pages/PaymentSuccessPage';
import ResetPassword from './pages/Auth/ResetPassword';


const App = () => {
    return (
        <>
            <Header />
            <Container className="flex-grow-1 mt-3">
                <Routes>

                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/confirm/:token" element={<EmailConfirmation />} />
                    <Route element={<ProtectedRoute />}>
                        <Route path="/quizzes" element={<Quizzes />} />
                        <Route path="/quizzes/:id" element={<QuizDetail />} />
                        <Route path="/questions" element={<AllQuestions />} />
                        <Route path="/results/:id" element={<QuizResult />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/payment/success" element={<PaymentSuccessPage />} />
                    </Route>
                    <Route path='/findPassword' element={<FindPassword />} />
                    <Route path='/resetPassword/:token' element={<ResetPassword />} />
                </Routes>
            </Container>
            <Footer />
            <ScrollToTopButton />
        </>
    );

};

export default App;
