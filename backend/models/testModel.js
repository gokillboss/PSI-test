const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }]
}, {
    timestamps: true // Adds createdAt and updatedAt fields
});

const Test = mongoose.model('Test', testSchema);

module.exports = Test;
