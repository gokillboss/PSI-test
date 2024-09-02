const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('../config/database');
const User = require('../models/userModel');
const Test = require('../models/testModel');
const Question = require('../models/questionModel');
const authRoutes = require('../routes/authRoute');
const testRoutes = require('../routes/testRoute');
const resultRoutes = require('../routes/resultRoute');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/tests', testRoutes);
app.use('/api/results', resultRoutes);

beforeAll(async () => {
    await connectDB();
    await User.deleteMany({});
    await Test.deleteMany({});
    await Question.deleteMany({});

    // Add dummy user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = 'password';
    const user = new User({
        firstName: "testuser",
        lastName: "Ho",
        email: 'testuser@example.com',
        password: hashedPassword,
        role: 'user'
    });
    await user.save();

    // Add dummy test data
    const testDataPath = path.join(__dirname, 'data', 'testData.json');
    const testData = JSON.parse(fs.readFileSync(testDataPath, 'utf-8'));
    const questions = await Question.insertMany(testData.questions.map(q => ({
        text: q.text,
        options: q.options
    })));

    const test = new Test({
        title: testData.title,
        description: testData.description,
        questions: questions.map(q => q._id),
        createdBy: user._id
    });
    await test.save();
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('API Tests', () => {
    let token;
    let userId;
    let testId;
    let questions;

    it('should log in a user', async () => {
        const res = await request(app)
            .post('/api/auth/login')
            .send({
                email: 'testuser@example.com',
                password: 'password'
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('token');
        token = res.body.token;
        const decoded = jwt.decode(token);
        userId = decoded.user.id;
    });

    it('should get all tests', async () => {
        const res = await request(app).get('/api/tests');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toBeGreaterThan(0);
        testId = res.body[0]._id;  // Lấy ID của bài thi đầu tiên
        questions = res.body[0].questions;
    });

    it('should get test by ID', async () => {
        const res = await request(app).get(`/api/tests/${testId}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('_id', testId);
    });

    it('should submit test results', async () => {
        const answers = questions.map((question, index) => ({
            questionId: question._id,
            selectedOption: question.options.find(option => option.isCorrect).text  // Chọn đáp án đúng cho mỗi câu hỏi
        }));

        const res = await request(app)
            .post(`/api/tests/${testId}/submit`)
            .set('x-auth-token', token)
            .send({ answers });

        if (res.statusCode !== 200) {
            console.error('Submit test results response:', res.body);
        }

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('_id');
        expect(res.body).toHaveProperty('score', answers.length);  // Kiểm tra điểm số
    });

    it('should get user results', async () => {
        const res = await request(app)
            .get(`/api/results/user/${userId}`)
            .set('x-auth-token', token);
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});
