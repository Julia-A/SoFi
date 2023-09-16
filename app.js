const express = require ('express');
const app = express();
require('dotenv').config();
const PORT = 3000 || 8000;
const connectDB = require('./config/connectDB');
connectDB();
const mongoose = require('mongoose');

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/users', require('./routes/userRoute'));


mongoose.connection.once('open', () => {
    console.log('Database connection successful.');
    app.listen(PORT, () => {
        console.log(`Server running on PORT ${PORT}`);
    });
});