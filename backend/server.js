require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(morgan('dev'));


// MongoDB connection
connectDB();

// Đọc web hook trước khi đọc json
app.use('/api/payment/webhook', express.raw({ type: 'application/json' }));
app.use(bodyParser.json());


// Routes
const apiRoutes = require('./routes/index');
app.use('/api', apiRoutes);



// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});



// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
