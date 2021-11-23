//  Required Environment
require('dotenv').config()
const connectDb = require('./config/db');
const express = require('express');
const productRoute = require('./routes/productRoutes')

// Declaring App
const app = express();

//  Using Environment
app.use('/product', productRoute)
app.use(express.json())

connectDb()
const PORT = process.env.PORT || 3000

app.listen(PORT,() => (console.log("Server Run On http://localhost:"+PORT)))