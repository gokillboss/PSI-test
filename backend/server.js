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

// Serve static files for avatars
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/payment/webhook', express.raw({ type: 'application/json' }));
app.use(bodyParser.json());
const apiRoutes = require('./routes/index');
app.use('/api', apiRoutes);



// Home Route for testing
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


//app.use('/payment/webhook', express.raw({ type: 'application/json' }));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
