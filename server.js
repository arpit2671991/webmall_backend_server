const express = require('express');
const dotenv = require('dotenv');
const app = express();
const connectDB = require('./database/db')


const port = process.env.PORT || 5000
connectDB();
app.listen(() => console.log(`server is running on port: ${port}`))
