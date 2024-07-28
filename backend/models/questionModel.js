const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
    text: { type: String, required: true },
    isCorrect: { type: Boolean, required: true }
});

const questionSchema = new mongoose.Schema({
    text: { type: String, required: true },
    options: [optionSchema],
    test: { type: mongoose.Schema.Types.ObjectId, ref: 'Test', required: true }
}, {
    timestamps: true // Adds createdAt and updatedAt fields
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
