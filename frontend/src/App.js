import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import QuizDetail from './components/Quiz/QuizDetail';
import AllQuestions from './components/Quiz/AllQuestions';
import QuizResult from './components/Quiz/QuizResult';
import HomePage from './pages/HomePage';
import Profile from './components/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import Quizzes from './components/Quiz/Quizzes';
import ProtectedRoute from './components/ProtectedRoute';
import EmailConfirmation from './components/Auth/EmailConfirmation';
import { Container } from 'react-bootstrap';

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
                    </Route>
                </Routes>
            </Container>
            <Footer />
            <ScrollToTopButton />
        </>
    );
};

export default App;
