require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());


// MongoDB connection
connectDB();


// Routes
const apiRoutes = require('./routes/index');
app.use('/api', apiRoutes);


// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
