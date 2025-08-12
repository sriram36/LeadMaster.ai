const mongoose = require('mongoose');
require('dotenv').config();

// For MongoDB Compass, use local connection string from .env
const mongoURI = 'mongodb://localhost:27017/leadmasters-exam';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (err) => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
});
db.once('open', () => {
    console.log('MongoDB connected');
});

module.exports = mongoose;
