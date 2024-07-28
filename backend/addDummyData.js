const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const Category = require('./models/categoryModel');
const Test = require('./models/testModel');
const Question = require('./models/questionModel');

const connectDB = require('./config/database');
connectDB();

const addDummyData = async () => {
  try {
    // Clear existing data
    await Category.deleteMany({});
    await Test.deleteMany({});
    await Question.deleteMany({});

    // Create categories
    const categories = [
      { name: 'Math', description: 'Math quizzes' },
      { name: 'Physics', description: 'Physics quizzes' },
      { name: 'Chemistry', description: 'Chemistry quizzes' }
    ];

    const createdCategories = await Category.insertMany(categories);

    // Create tests for each category
    const tests = [
      {
        title: 'Math Test 1',
        description: 'Basic Math Test',
        category: createdCategories[0]._id
      },
      {
        title: 'Physics Test 1',
        description: 'Basic Physics Test',
        category: createdCategories[1]._id
      },
      {
        title: 'Chemistry Test 1',
        description: 'Basic Chemistry Test',
        category: createdCategories[2]._id
      }
    ];

    const createdTests = await Test.insertMany(tests);

    // Link tests to categories
    await Category.findByIdAndUpdate(createdCategories[0]._id, { $set: { tests: createdTests.filter(test => test.category.toString() === createdCategories[0]._id.toString()).map(test => test._id) } });
    await Category.findByIdAndUpdate(createdCategories[1]._id, { $set: { tests: createdTests.filter(test => test.category.toString() === createdCategories[1]._id.toString()).map(test => test._id) } });
    await Category.findByIdAndUpdate(createdCategories[2]._id, { $set: { tests: createdTests.filter(test => test.category.toString() === createdCategories[2]._id.toString()).map(test => test._id) } });

    // Create questions for each test
    const mathQuestions = [
      { text: 'What is 2 + 2?', options: [ { text: '3', isCorrect: false }, { text: '4', isCorrect: true }, { text: '5', isCorrect: false }, { text: '6', isCorrect: false } ], test: createdTests[0]._id },
      { text: 'What is 10 / 2?', options: [ { text: '2', isCorrect: false }, { text: '5', isCorrect: true }, { text: '10', isCorrect: false }, { text: '20', isCorrect: false } ], test: createdTests[0]._id },
      { text: 'What is 5 * 3?', options: [ { text: '15', isCorrect: true }, { text: '20', isCorrect: false }, { text: '10', isCorrect: false }, { text: '25', isCorrect: false } ], test: createdTests[0]._id },
      // Add more math questions as needed...
    ];

    const physicsQuestions = [
      { text: 'What is the speed of light?', options: [ { text: '300,000 km/s', isCorrect: true }, { text: '150,000 km/s', isCorrect: false }, { text: '450,000 km/s', isCorrect: false }, { text: '600,000 km/s', isCorrect: false } ], test: createdTests[1]._id },
      { text: 'Who developed the theory of relativity?', options: [ { text: 'Isaac Newton', isCorrect: false }, { text: 'Albert Einstein', isCorrect: true }, { text: 'Galileo Galilei', isCorrect: false }, { text: 'Nikola Tesla', isCorrect: false } ], test: createdTests[1]._id },
      { text: 'What is the unit of force?', options: [ { text: 'Newton', isCorrect: true }, { text: 'Joule', isCorrect: false }, { text: 'Watt', isCorrect: false }, { text: 'Pascal', isCorrect: false } ], test: createdTests[1]._id },
      // Add more physics questions as needed...
    ];

    const chemistryQuestions = [
      { text: 'What is the chemical symbol for water?', options: [ { text: 'O2', isCorrect: false }, { text: 'H2O', isCorrect: true }, { text: 'CO2', isCorrect: false }, { text: 'HO2', isCorrect: false } ], test: createdTests[2]._id },
      { text: 'What is the pH of pure water?', options: [ { text: '7', isCorrect: true }, { text: '6', isCorrect: false }, { text: '8', isCorrect: false }, { text: '5', isCorrect: false } ], test: createdTests[2]._id },
      { text: 'What is the chemical symbol for gold?', options: [ { text: 'Au', isCorrect: true }, { text: 'Ag', isCorrect: false }, { text: 'Pb', isCorrect: false }, { text: 'Pt', isCorrect: false } ], test: createdTests[2]._id },
      // Add more chemistry questions as needed...
    ];

    // Insert questions and link them to tests
    const insertedMathQuestions = await Question.insertMany(mathQuestions);
    const insertedPhysicsQuestions = await Question.insertMany(physicsQuestions);
    const insertedChemistryQuestions = await Question.insertMany(chemistryQuestions);

    // Link questions to tests
    await Test.findByIdAndUpdate(createdTests[0]._id, { $set: { questions: insertedMathQuestions.map(q => q._id) } });
    await Test.findByIdAndUpdate(createdTests[1]._id, { $set: { questions: insertedPhysicsQuestions.map(q => q._id) } });
    await Test.findByIdAndUpdate(createdTests[2]._id, { $set: { questions: insertedChemistryQuestions.map(q => q._id) } });

    console.log('Dummy data inserted successfully');
    process.exit();
  } catch (error) {
    console.error('Error inserting dummy data', error);
    process.exit(1);
  }
};

addDummyData();
