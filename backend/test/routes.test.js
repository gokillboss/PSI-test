const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('../config/database');
const User = require('../models/userModel');
const Quiz = require('../models/quizModel');
const Question = require('../models/questionModel');
const authRoutes = require('../routes/authRoute');
const quizRoutes = require('../routes/quizRoute');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/quizzes', quizRoutes);

let token;

describe('API Tests', () => {
    beforeAll(async () => {
        await connectDB();
    });

    beforeEach(async () => {
        await User.deleteMany({});
        await Quiz.deleteMany({});
        await Question.deleteMany({});

        const hashedPassword = await bcrypt.hash('123456', 10);
        const user = await User.create({
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@example.com',
            password: hashedPassword
        });

        const res = await request(app)
            .post('/api/auth/login')
            .send({
                email: 'john@example.com',
                password: '123456'
            });

        token = res.body.token;
    });

    afterAll(async () => {
        await mongoose.disconnect();
    });

    it('should log in a user', async () => {
        expect(token).toBeDefined();
    });

    it('should get all quizzes', async () => {
        await Quiz.create({
            title: 'Sample Quiz',
            description: 'A test quiz',
            questions: []
        });

        const res = await request(app)
            .get('/api/quizzes')
            .set('Authorization', `Bearer ${token}`);

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveLength(1);
    });

    it('should get quiz by ID', async () => {
        const quiz = await Quiz.create({
            title: 'Sample Quiz',
            description: 'A test quiz',
            questions: []
        });

        const res = await request(app)
            .get(`/api/quizzes/${quiz._id}`)
            .set('Authorization', `Bearer ${token}`);

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('title', 'Sample Quiz');
    });

    it('should submit quiz results', async () => {
        const quiz = await Quiz.create({
            title: 'Math Quiz',
            description: 'Basic Math Quiz',
            questions: []
        });

        const question = await Question.create({
            quizId: quiz._id,  // Ensure quizId is populated
            questionText: 'What is 2 + 2?',
            options: [
                { text: '3', isCorrect: false },
                { text: '4', isCorrect: true }
            ]
        });

        quiz.questions.push(question._id);
        await quiz.save();

        const res = await request(app)
            .post(`/api/quizzes/${quiz._id}/submit`)
            .set('Authorization', `Bearer ${token}`)
            .send({
                answers: [{ questionId: question._id.toString(), selectedOption: '4' }]
            });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('score', 1);
        expect(res.body).toHaveProperty('totalQuestions', 1);
    });
});
