const mongoose = require('mongoose');
const connectDB = require('./config/database');
const User = require('./models/userModel');
const Quiz = require('./models/quizModel');
const Question = require('./models/questionModel');
const bcrypt = require('bcryptjs');

const createDummyData = async () => {
    try {
        // Connect to the database
        await connectDB();

        // Clear existing data
        await User.deleteMany({});
        await Quiz.deleteMany({});
        await Question.deleteMany({});

        // Create dummy users
        const hashedPassword = await bcrypt.hash('password', 10);
        const users = await User.insertMany([
            {
                firstName: 'John',
                lastName: 'Doe',
                email: 'john@example.com',
                password: hashedPassword,
                phoneNumber: '1234567890'
            },
            {
                firstName: 'Jane',
                lastName: 'Smith',
                email: 'jane@example.com',
                password: hashedPassword,
                phoneNumber: '0987654321'
            }
        ]);

        console.log('Dummy users created:', users);

        // Create dummy questions for Math
        const mathQuestions = await Question.insertMany([
            {
                questionText: 'What is 2 + 2?',
                options: [
                    { text: '3', isCorrect: false },
                    { text: '4', isCorrect: true }
                ]
            },
            {
                questionText: 'What is the square root of 16?',
                options: [
                    { text: '3', isCorrect: false },
                    { text: '4', isCorrect: true }
                ]
            }
        ]);

        // Create dummy questions for Chemistry
        const chemistryQuestions = await Question.insertMany([
            {
                questionText: 'What is the chemical symbol for water?',
                options: [
                    { text: 'H2O', isCorrect: true },
                    { text: 'O2', isCorrect: false }
                ]
            },
            {
                questionText: 'What is the atomic number of carbon?',
                options: [
                    { text: '6', isCorrect: true },
                    { text: '12', isCorrect: false }
                ]
            }
        ]);

        // Create dummy questions for Physics
        const physicsQuestions = await Question.insertMany([
            {
                questionText: 'What is the speed of light?',
                options: [
                    { text: '300,000 km/s', isCorrect: true },
                    { text: '150,000 km/s', isCorrect: false }
                ]
            },
            {
                questionText: 'What is the force that keeps us on the ground?',
                options: [
                    { text: 'Magnetism', isCorrect: false },
                    { text: 'Gravity', isCorrect: true }
                ]
            }
        ]);

        // Create dummy quizzes
        const quizzes = await Quiz.insertMany([
            {
                title: 'Math Quiz',
                description: 'A simple math quiz',
                isPaid: false,
                questions: mathQuestions.map(q => q._id)
            },
            {
                title: 'Chemistry Quiz',
                description: 'A basic chemistry quiz',
                isPaid: false,
                questions: chemistryQuestions.map(q => q._id)
            },
            {
                title: 'Physics Quiz',
                description: 'A basic physics quiz',
                isPaid: false,
                questions: physicsQuestions.map(q => q._id)
            }
        ]);

        console.log('Dummy quizzes created:', quizzes);

        // Disconnect from the database
        await mongoose.disconnect();
        console.log('Database disconnected');
    } catch (err) {
        console.error('Error creating dummy data:', err);
        await mongoose.disconnect();
    }
};

createDummyData();
