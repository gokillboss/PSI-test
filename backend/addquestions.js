const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const Question = require('./models/questionModel');

const connectDB = require('./config/database');
connectDB();

const addDummyQuestions = async () => {
  try {
    // Clear existing data
    await Question.deleteMany({});

    // Create questions for Math
    const mathQuestions = [
      { text: 'What is 2 + 2?', options: [ { text: '3', isCorrect: false }, { text: '4', isCorrect: true }, { text: '5', isCorrect: false }, { text: '6', isCorrect: false } ] },
      { text: 'What is 10 / 2?', options: [ { text: '2', isCorrect: false }, { text: '5', isCorrect: true }, { text: '10', isCorrect: false }, { text: '20', isCorrect: false } ] },
      { text: 'What is 5 * 3?', options: [ { text: '15', isCorrect: true }, { text: '20', isCorrect: false }, { text: '10', isCorrect: false }, { text: '25', isCorrect: false } ] },
      { text: 'What is the square root of 16?', options: [ { text: '2', isCorrect: false }, { text: '4', isCorrect: true }, { text: '8', isCorrect: false }, { text: '6', isCorrect: false } ] },
      { text: 'What is 7 - 3?', options: [ { text: '2', isCorrect: false }, { text: '4', isCorrect: true }, { text: '5', isCorrect: false }, { text: '3', isCorrect: false } ] },
      { text: 'What is 9 + 10?', options: [ { text: '19', isCorrect: true }, { text: '20', isCorrect: false }, { text: '21', isCorrect: false }, { text: '18', isCorrect: false } ] },
      { text: 'What is 12 - 4?', options: [ { text: '6', isCorrect: false }, { text: '8', isCorrect: true }, { text: '10', isCorrect: false }, { text: '4', isCorrect: false } ] },
      { text: 'What is 3 * 7?', options: [ { text: '20', isCorrect: false }, { text: '21', isCorrect: true }, { text: '18', isCorrect: false }, { text: '24', isCorrect: false } ] },
      { text: 'What is 8 / 2?', options: [ { text: '2', isCorrect: false }, { text: '4', isCorrect: true }, { text: '6', isCorrect: false }, { text: '3', isCorrect: false } ] },
      { text: 'What is 6 + 6?', options: [ { text: '12', isCorrect: true }, { text: '11', isCorrect: false }, { text: '13', isCorrect: false }, { text: '10', isCorrect: false } ] },
      { text: 'What is 15 - 7?', options: [ { text: '8', isCorrect: true }, { text: '7', isCorrect: false }, { text: '9', isCorrect: false }, { text: '6', isCorrect: false } ] },
      { text: 'What is 4 * 4?', options: [ { text: '12', isCorrect: false }, { text: '16', isCorrect: true }, { text: '18', isCorrect: false }, { text: '14', isCorrect: false } ] },
      { text: 'What is 20 / 4?', options: [ { text: '4', isCorrect: true }, { text: '5', isCorrect: false }, { text: '6', isCorrect: false }, { text: '3', isCorrect: false } ] },
      { text: 'What is 11 + 9?', options: [ { text: '20', isCorrect: true }, { text: '19', isCorrect: false }, { text: '21', isCorrect: false }, { text: '18', isCorrect: false } ] },
      { text: 'What is 18 - 9?', options: [ { text: '8', isCorrect: false }, { text: '9', isCorrect: true }, { text: '10', isCorrect: false }, { text: '11', isCorrect: false } ] },
      { text: 'What is 5 * 5?', options: [ { text: '20', isCorrect: false }, { text: '25', isCorrect: true }, { text: '30', isCorrect: false }, { text: '35', isCorrect: false } ] },
      { text: 'What is the square root of 64?', options: [ { text: '6', isCorrect: false }, { text: '8', isCorrect: true }, { text: '7', isCorrect: false }, { text: '9', isCorrect: false } ] },
      { text: 'What is 14 - 5?', options: [ { text: '9', isCorrect: true }, { text: '10', isCorrect: false }, { text: '8', isCorrect: false }, { text: '7', isCorrect: false } ] },
      { text: 'What is 7 + 8?', options: [ { text: '14', isCorrect: false }, { text: '15', isCorrect: true }, { text: '16', isCorrect: false }, { text: '17', isCorrect: false } ] },
      { text: 'What is 10 + 10?', options: [ { text: '20', isCorrect: true }, { text: '21', isCorrect: false }, { text: '22', isCorrect: false }, { text: '23', isCorrect: false } ] }
    ];

    // Create questions for Physics
    const physicsQuestions = [
      { text: 'What is the speed of light?', options: [ { text: '300,000 km/s', isCorrect: true }, { text: '150,000 km/s', isCorrect: false }, { text: '450,000 km/s', isCorrect: false }, { text: '600,000 km/s', isCorrect: false } ] },
      { text: 'Who developed the theory of relativity?', options: [ { text: 'Isaac Newton', isCorrect: false }, { text: 'Albert Einstein', isCorrect: true }, { text: 'Galileo Galilei', isCorrect: false }, { text: 'Nikola Tesla', isCorrect: false } ] },
      { text: 'What is the unit of force?', options: [ { text: 'Newton', isCorrect: true }, { text: 'Joule', isCorrect: false }, { text: 'Watt', isCorrect: false }, { text: 'Pascal', isCorrect: false } ] },
      { text: 'What is the acceleration due to gravity on Earth?', options: [ { text: '9.8 m/s²', isCorrect: true }, { text: '9.8 km/s²', isCorrect: false }, { text: '9.8 m/s', isCorrect: false }, { text: '9.8 km/s', isCorrect: false } ] },
      { text: 'Who is known as the father of modern physics?', options: [ { text: 'Isaac Newton', isCorrect: true }, { text: 'Albert Einstein', isCorrect: false }, { text: 'Galileo Galilei', isCorrect: false }, { text: 'Nikola Tesla', isCorrect: false } ] },
      { text: 'What is the symbol for power in physics?', options: [ { text: 'P', isCorrect: true }, { text: 'F', isCorrect: false }, { text: 'E', isCorrect: false }, { text: 'W', isCorrect: false } ] },
      { text: 'What is the unit of electric current?', options: [ { text: 'Ampere', isCorrect: true }, { text: 'Volt', isCorrect: false }, { text: 'Ohm', isCorrect: false }, { text: 'Watt', isCorrect: false } ] },
      { text: 'What is the speed of sound in air?', options: [ { text: '343 m/s', isCorrect: true }, { text: '300 m/s', isCorrect: false }, { text: '330 m/s', isCorrect: false }, { text: '350 m/s', isCorrect: false } ] },
      { text: 'Who discovered the law of motion?', options: [ { text: 'Isaac Newton', isCorrect: true }, { text: 'Albert Einstein', isCorrect: false }, { text: 'Galileo Galilei', isCorrect: false }, { text: 'Nikola Tesla', isCorrect: false } ] },
      { text: 'What is the unit of energy?', options: [ { text: 'Joule', isCorrect: true }, { text: 'Newton', isCorrect: false }, { text: 'Watt', isCorrect: false }, { text: 'Pascal', isCorrect: false } ] },
      { text: 'What is the unit of pressure?', options: [ { text: 'Pascal', isCorrect: true }, { text: 'Newton', isCorrect: false }, { text: 'Joule', isCorrect: false }, { text: 'Watt', isCorrect: false } ] },
      { text: 'Who discovered the electron?', options: [ { text: 'J.J. Thomson', isCorrect: true }, { text: 'Isaac Newton', isCorrect: false }, { text: 'Albert Einstein', isCorrect: false }, { text: 'Galileo Galilei', isCorrect: false } ] },
      { text: 'What is the formula for kinetic energy?', options: [ { text: '1/2 mv²', isCorrect: true }, { text: 'mv²', isCorrect: false }, { text: '1/2 mv', isCorrect: false }, { text: 'mv', isCorrect: false } ] },
      { text: 'What is the unit of frequency?', options: [ { text: 'Hertz', isCorrect: true }, { text: 'Watt', isCorrect: false }, { text: 'Newton', isCorrect: false }, { text: 'Pascal', isCorrect: false } ] },
      { text: 'What is the formula for potential energy?', options: [ { text: 'mgh', isCorrect: true }, { text: 'mg', isCorrect: false }, { text: 'mgh²', isCorrect: false }, { text: 'mh', isCorrect: false } ] },
      { text: 'What is the unit of magnetic field?', options: [ { text: 'Tesla', isCorrect: true }, { text: 'Newton', isCorrect: false }, { text: 'Joule', isCorrect: false }, { text: 'Watt', isCorrect: false } ] },
      { text: 'What is the unit of electric charge?', options: [ { text: 'Coulomb', isCorrect: true }, { text: 'Newton', isCorrect: false }, { text: 'Joule', isCorrect: false }, { text: 'Watt', isCorrect: false } ] },
      { text: 'What is the symbol for wavelength?', options: [ { text: 'λ', isCorrect: true }, { text: 'μ', isCorrect: false }, { text: 'ν', isCorrect: false }, { text: 'σ', isCorrect: false } ] },
      { text: 'What is the unit of work?', options: [ { text: 'Joule', isCorrect: true }, { text: 'Newton', isCorrect: false }, { text: 'Watt', isCorrect: false }, { text: 'Pascal', isCorrect: false } ] },
      { text: 'Who discovered the law of gravitation?', options: [ { text: 'Isaac Newton', isCorrect: true }, { text: 'Albert Einstein', isCorrect: false }, { text: 'Galileo Galilei', isCorrect: false }, { text: 'Nikola Tesla', isCorrect: false } ] }
    ];

    // Create questions for Chemistry
    const chemistryQuestions = [
      { text: 'What is the chemical symbol for water?', options: [ { text: 'O2', isCorrect: false }, { text: 'H2O', isCorrect: true }, { text: 'CO2', isCorrect: false }, { text: 'HO2', isCorrect: false } ] },
      { text: 'What is the pH of pure water?', options: [ { text: '7', isCorrect: true }, { text: '6', isCorrect: false }, { text: '8', isCorrect: false }, { text: '5', isCorrect: false } ] },
      { text: 'What is the chemical symbol for gold?', options: [ { text: 'Au', isCorrect: true }, { text: 'Ag', isCorrect: false }, { text: 'Pb', isCorrect: false }, { text: 'Pt', isCorrect: false } ] },
      { text: 'What is the chemical formula for table salt?', options: [ { text: 'NaCl', isCorrect: true }, { text: 'KCl', isCorrect: false }, { text: 'CaCl2', isCorrect: false }, { text: 'MgCl2', isCorrect: false } ] },
      { text: 'What is the atomic number of carbon?', options: [ { text: '6', isCorrect: true }, { text: '8', isCorrect: false }, { text: '12', isCorrect: false }, { text: '14', isCorrect: false } ] },
      { text: 'What is the chemical symbol for sodium?', options: [ { text: 'Na', isCorrect: true }, { text: 'K', isCorrect: false }, { text: 'Ca', isCorrect: false }, { text: 'Mg', isCorrect: false } ] },
      { text: 'What is the chemical formula for ammonia?', options: [ { text: 'NH3', isCorrect: true }, { text: 'H2O', isCorrect: false }, { text: 'CO2', isCorrect: false }, { text: 'O2', isCorrect: false } ] },
      { text: 'What is the atomic number of hydrogen?', options: [ { text: '1', isCorrect: true }, { text: '2', isCorrect: false }, { text: '3', isCorrect: false }, { text: '4', isCorrect: false } ] },
      { text: 'What is the chemical symbol for iron?', options: [ { text: 'Fe', isCorrect: true }, { text: 'Cu', isCorrect: false }, { text: 'Zn', isCorrect: false }, { text: 'Pb', isCorrect: false } ] },
      { text: 'What is the chemical formula for methane?', options: [ { text: 'CH4', isCorrect: true }, { text: 'CO2', isCorrect: false }, { text: 'H2O', isCorrect: false }, { text: 'O2', isCorrect: false } ] },
      { text: 'What is the atomic number of oxygen?', options: [ { text: '8', isCorrect: true }, { text: '6', isCorrect: false }, { text: '10', isCorrect: false }, { text: '12', isCorrect: false } ] },
      { text: 'What is the chemical symbol for chlorine?', options: [ { text: 'Cl', isCorrect: true }, { text: 'C', isCorrect: false }, { text: 'O', isCorrect: false }, { text: 'H', isCorrect: false } ] },
      { text: 'What is the chemical formula for carbon dioxide?', options: [ { text: 'CO2', isCorrect: true }, { text: 'CH4', isCorrect: false }, { text: 'H2O', isCorrect: false }, { text: 'O2', isCorrect: false } ] },
      { text: 'What is the atomic number of nitrogen?', options: [ { text: '7', isCorrect: true }, { text: '8', isCorrect: false }, { text: '6', isCorrect: false }, { text: '10', isCorrect: false } ] },
      { text: 'What is the chemical symbol for potassium?', options: [ { text: 'K', isCorrect: true }, { text: 'Na', isCorrect: false }, { text: 'Ca', isCorrect: false }, { text: 'Mg', isCorrect: false } ] },
      { text: 'What is the chemical formula for sulfuric acid?', options: [ { text: 'H2SO4', isCorrect: true }, { text: 'HCl', isCorrect: false }, { text: 'HNO3', isCorrect: false }, { text: 'H2O', isCorrect: false } ] },
      { text: 'What is the atomic number of helium?', options: [ { text: '2', isCorrect: true }, { text: '4', isCorrect: false }, { text: '6', isCorrect: false }, { text: '8', isCorrect: false } ] },
      { text: 'What is the chemical symbol for magnesium?', options: [ { text: 'Mg', isCorrect: true }, { text: 'Mn', isCorrect: false }, { text: 'Fe', isCorrect: false }, { text: 'Cu', isCorrect: false } ] },
      { text: 'What is the chemical formula for ethanol?', options: [ { text: 'C2H5OH', isCorrect: true }, { text: 'CH3OH', isCorrect: false }, { text: 'C2H6', isCorrect: false }, { text: 'C2H4', isCorrect: false } ] },
      { text: 'What is the atomic number of aluminum?', options: [ { text: '13', isCorrect: true }, { text: '14', isCorrect: false }, { text: '15', isCorrect: false }, { text: '16', isCorrect: false } ] }
    ];

    // Insert questions
    await Question.insertMany(mathQuestions);
    await Question.insertMany(physicsQuestions);
    await Question.insertMany(chemistryQuestions);

    console.log('Dummy questions inserted successfully');
    process.exit();
  } catch (error) {
    console.error('Error inserting dummy questions', error);
    process.exit(1);
  }
};

addDummyQuestions();
