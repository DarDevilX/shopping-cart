require('dotenv').config()

const connectDb = require('./config/db');
const express = require('express');
const app = express();

connectDb()
const PORT = process.env.PORT || 3000

app.listen(PORT,() => (console.log("Server Run On http://localhost:"+PORT)))