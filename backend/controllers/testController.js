const Test = require('../models/testModel');
const Question = require('../models/questionModel');

const getAllTests = async (req, res) => {
    try {
        const tests = await Test.find().populate('questions');
        res.json(tests);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getTestById = async (req, res) => {
    try {
        const test = await Test.findById(req.params.id).populate('questions');
        if (!test) {
            return res.status(404).json({ message: 'Test not found' });
        }
        res.json(test);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const submitTestResults = async (req, res) => {
    // Placeholder logic for submitting test results
    try {
        const { answers } = req.body;
        // Process the answers and calculate the score
        // For now, we just return a success message
        res.json({ message: 'Test results submitted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getAllTests, getTestById, submitTestResults };
