const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    tests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Test' }]
}, {
    timestamps: true // Adds createdAt and updatedAt fields
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
