const Category = require('../models/categoryModel');
const Test = require('../models/testModel');

const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id).populate({
            path: 'tests',
            populate: { path: 'questions' }
        });
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json(category);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getAllCategories, getCategoryById };
