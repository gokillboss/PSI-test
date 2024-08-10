const mongoose = require('mongoose');
const connectDB = require('./config/database');
const Question = require('./models/questionModel');
const Quiz = require('./models/quizModel');

const addQuestions = async () => {
    try {
        // Connect to the database
        await connectDB();

        // Clear existing data (optional)
        await Quiz.deleteMany({});
        await Question.deleteMany({});

        // Create quizzes first
        const mathQuiz = await Quiz.create({ title: 'Math Quiz', description: 'A math quiz', isPaid: false });
        const chemistryQuiz = await Quiz.create({ title: 'Chemistry Quiz', description: 'A chemistry quiz', isPaid: false });
        const physicsQuiz = await Quiz.create({ title: 'Physics Quiz', description: 'A physics quiz', isPaid: false });
        const biologyQuiz = await Quiz.create({ title: 'Biology Quiz', description: 'A biology quiz', isPaid: false });

        // Create 5 questions for each category and assign the correct quizId
        const questions = [
            // Math (1)
            {
                questionText: 'What is 5 + 3?',
                options: [
                    { text: '7', isCorrect: false },
                    { text: '8', isCorrect: true }
                ],
                category: 1,
                quizId: mathQuiz._id
            },
            {
                questionText: 'What is 9 - 6?',
                options: [
                    { text: '2', isCorrect: false },
                    { text: '3', isCorrect: true }
                ],
                category: 1,
                quizId: mathQuiz._id
            },
            {
                questionText: 'What is 7 * 2?',
                options: [
                    { text: '14', isCorrect: true },
                    { text: '12', isCorrect: false }
                ],
                category: 1,
                quizId: mathQuiz._id
            },
            {
                questionText: 'What is 16 / 4?',
                options: [
                    { text: '4', isCorrect: true },
                    { text: '3', isCorrect: false }
                ],
                category: 1,
                quizId: mathQuiz._id
            },
            {
                questionText: 'What is the square root of 81?',
                options: [
                    { text: '8', isCorrect: false },
                    { text: '9', isCorrect: true }
                ],
                category: 1,
                quizId: mathQuiz._id
            },
            // Chemistry (2)
            {
                questionText: 'What is the chemical symbol for gold?',
                options: [
                    { text: 'Au', isCorrect: true },
                    { text: 'Ag', isCorrect: false }
                ],
                category: 2,
                quizId: chemistryQuiz._id
            },
            {
                questionText: 'What is the chemical formula for methane?',
                options: [
                    { text: 'CH4', isCorrect: true },
                    { text: 'C2H6', isCorrect: false }
                ],
                category: 2,
                quizId: chemistryQuiz._id
            },
            {
                questionText: 'What is the atomic number of helium?',
                options: [
                    { text: '2', isCorrect: true },
                    { text: '4', isCorrect: false }
                ],
                category: 2,
                quizId: chemistryQuiz._id
            },
            {
                questionText: 'What is the pH of pure water?',
                options: [
                    { text: '7', isCorrect: true },
                    { text: '6', isCorrect: false }
                ],
                category: 2,
                quizId: chemistryQuiz._id
            },
            {
                questionText: 'What is the chemical name for table salt?',
                options: [
                    { text: 'Sodium chloride', isCorrect: true },
                    { text: 'Potassium chloride', isCorrect: false }
                ],
                category: 2,
                quizId: chemistryQuiz._id
            },
            // Physics (3)
            {
                questionText: 'What is the unit of force?',
                options: [
                    { text: 'Newton', isCorrect: true },
                    { text: 'Pascal', isCorrect: false }
                ],
                category: 3,
                quizId: physicsQuiz._id
            },
            {
                questionText: 'What is the acceleration due to gravity on Earth?',
                options: [
                    { text: '9.8 m/s²', isCorrect: true },
                    { text: '8.9 m/s²', isCorrect: false }
                ],
                category: 3,
                quizId: physicsQuiz._id
            },
            {
                questionText: 'Who is known as the father of modern physics?',
                options: [
                    { text: 'Isaac Newton', isCorrect: true },
                    { text: 'Albert Einstein', isCorrect: false }
                ],
                category: 3,
                quizId: physicsQuiz._id
            },
            {
                questionText: 'What is the speed of sound in air?',
                options: [
                    { text: '343 m/s', isCorrect: true },
                    { text: '300 m/s', isCorrect: false }
                ],
                category: 3,
                quizId: physicsQuiz._id
            },
            {
                questionText: 'What law states that for every action, there is an equal and opposite reaction?',
                options: [
                    { text: 'Newton’s Third Law', isCorrect: true },
                    { text: 'Newton’s First Law', isCorrect: false }
                ],
                category: 3,
                quizId: physicsQuiz._id
            },
            // Biology (4)
            {
                questionText: 'What is the powerhouse of the cell?',
                options: [
                    { text: 'Mitochondria', isCorrect: true },
                    { text: 'Nucleus', isCorrect: false }
                ],
                category: 4,
                quizId: biologyQuiz._id
            },
            {
                questionText: 'What is the basic unit of life?',
                options: [
                    { text: 'Cell', isCorrect: true },
                    { text: 'Molecule', isCorrect: false }
                ],
                category: 4,
                quizId: biologyQuiz._id
            },
            {
                questionText: 'Which organ is responsible for pumping blood throughout the body?',
                options: [
                    { text: 'Heart', isCorrect: true },
                    { text: 'Lungs', isCorrect: false }
                ],
                category: 4,
                quizId: biologyQuiz._id
            },
            {
                questionText: 'What is the process by which plants make their food?',
                options: [
                    { text: 'Photosynthesis', isCorrect: true },
                    { text: 'Respiration', isCorrect: false }
                ],
                category: 4,
                quizId: biologyQuiz._id
            },
            {
                questionText: 'Which part of the cell contains genetic material?',
                options: [
                    { text: 'Nucleus', isCorrect: true },
                    { text: 'Cytoplasm', isCorrect: false }
                ],
                category: 4,
                quizId: biologyQuiz._id
            }
        ];

        // Insert all questions into the database
        const insertedQuestions = await Question.insertMany(questions);
        console.log('Inserted questions:', insertedQuestions);

        // Update the quizzes to include the inserted question IDs
        const updateQuiz = async (quizId, questionIds) => {
            await Quiz.findByIdAndUpdate(quizId, { $push: { questions: { $each: questionIds } } });
        };

        await updateQuiz(mathQuiz._id, insertedQuestions.filter(q => q.quizId.equals(mathQuiz._id)).map(q => q._id));
        await updateQuiz(chemistryQuiz._id, insertedQuestions.filter(q => q.quizId.equals(chemistryQuiz._id)).map(q => q._id));
        await updateQuiz(physicsQuiz._id, insertedQuestions.filter(q => q.quizId.equals(physicsQuiz._id)).map(q => q._id));
        await updateQuiz(biologyQuiz._id, insertedQuestions.filter(q => q.quizId.equals(biologyQuiz._id)).map(q => q._id));

        console.log('Quizzes updated with questions.');

        // Disconnect from the database
        await mongoose.disconnect();
        console.log('Database disconnected');
    } catch (err) {
        console.error('Error adding questions:', err);
        await mongoose.disconnect();
    }
};

addQuestions();
