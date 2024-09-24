const mongoose = require("mongoose");
const Quiz = require("../models/quizModel"); // Adjust the path as necessary
const Question = require("../models/questionModel"); // Adjust the path as necessary

// Dummy data for quizzes
const quizzes = [
  {
    title: "Math Quiz",
    description: "Test your math skills",
    price: 0,
    questions: [
      {
        questionText: "What is 2 + 2?",
        options: [
          { text: "3", isCorrect: false },
          { text: "4", isCorrect: true },
          { text: "5", isCorrect: false },
          { text: "6", isCorrect: false },
        ],
        category: 1,
      },
      {
        questionText: "What is the square root of 9?",
        options: [
          { text: "2", isCorrect: false },
          { text: "3", isCorrect: true },
          { text: "4", isCorrect: false },
          { text: "5", isCorrect: false },
        ],
        category: 1,
      },
    ],
  },
  {
    title: "Physics Quiz",
    description: "Test your physics knowledge",
    price: 0,
    questions: [
      {
        questionText: "What is the speed of light?",
        options: [
          { text: "3x10^8 m/s", isCorrect: true },
          { text: "3x10^6 m/s", isCorrect: false },
          { text: "3x10^10 m/s", isCorrect: false },
          { text: "3x10^12 m/s", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "What is the unit of force?",
        options: [
          { text: "Newton", isCorrect: true },
          { text: "Joule", isCorrect: false },
          { text: "Watt", isCorrect: false },
          { text: "Pascal", isCorrect: false },
        ],
        category: 2,
      },
    ],
  },
  {
    title: "Biology Quiz",
    description: "Test your biology knowledge",
    price: 0,
    questions: [
      {
        questionText: "What is the powerhouse of the cell?",
        options: [
          { text: "Nucleus", isCorrect: false },
          { text: "Mitochondria", isCorrect: true },
          { text: "Ribosome", isCorrect: false },
          { text: "Golgi apparatus", isCorrect: false },
        ],
        category: 3,
      },
      {
        questionText: "What is the process of cell division?",
        options: [
          { text: "Mitosis", isCorrect: true },
          { text: "Meiosis", isCorrect: true },
          { text: "Binary fission", isCorrect: false },
          { text: "Budding", isCorrect: false },
        ],
        category: 3,
      },
    ],
  },
];

// Function to create quizzes and their questions
const seedData = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/PSI_test", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected.");

    // Clear existing data
    await Quiz.deleteMany({});
    await Question.deleteMany({});

    for (const quizData of quizzes) {
      const quiz = new Quiz({
        title: quizData.title,
        description: quizData.description,
        price: quizData.price,
      });

      // Save the quiz first to get the quiz ID
      const savedQuiz = await quiz.save();

      // Now add the questions with the saved quiz ID
      for (const questionData of quizData.questions) {
        const question = new Question({
          quizId: savedQuiz._id,
          questionText: questionData.questionText,
          options: questionData.options,
          category: questionData.category,
        });

        const savedQuestion = await question.save();
        // Add the question to the quiz's questions array
        savedQuiz.questions.push(savedQuestion._id);
      }

      // Save the quiz again with all the questions added
      await savedQuiz.save();
    }

    console.log("Dummy data added successfully!");
    mongoose.connection.close();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    mongoose.connection.close();
  }
};

// Run the script
seedData();
