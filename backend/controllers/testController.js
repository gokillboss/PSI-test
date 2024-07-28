const Test = require('../models/testModel');
const Question = require('../models/questionModel'); 

exports.getTests = async (req, res) => {
  try {
    const tests = await Test.find();
    res.json(tests);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getTestById = async (req, res) => {
    try {
      const test = await Test.findById(req.params.id).populate('questions');
      if (!test) {
        return res.status(404).json({ msg: 'Test not found' });
      }
      res.json(test);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };

exports.createTest = async (req, res) => {
  const { title, description, questions } = req.body;
  try {
    const newTest = new Test({
      title,
      description,
      questions
    });

    const test = await newTest.save();
    res.json(test);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.submitTest = async (req, res) => {
    const { answers } = req.body;
    try {
      const test = await Test.findById(req.params.id).populate('questions');
      if (!test) {
        return res.status(404).json({ msg: 'Test not found' });
      }
  
      let score = 0;
      const results = test.questions.map(question => {
        const userAnswer = answers.find(answer => answer.questionId === question._id.toString());
        const isCorrect = userAnswer && question.options.find(option => option.text === userAnswer.selectedOption && option.isCorrect);
  
        if (isCorrect) {
          score += 1;
        }
  
        return {
          questionId: question._id,
          questionText: question.text,
          selectedOption: userAnswer ? userAnswer.selectedOption : null,
          correctOption: question.options.find(option => option.isCorrect).text,
          isCorrect: !!isCorrect
        };
      });
  
      res.json({ score, totalQuestions: test.questions.length, results });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };