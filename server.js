require('dotenv').config();

const express = require('express');
const path = require('path');
const connectDB = require('./server/config/db.js');

const app = express();
const PORT = 3000;

//Connect to DB
connectDB();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Default route for serving index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});