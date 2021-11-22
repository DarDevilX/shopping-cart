require('dotenv').config()
const mongoose = require('mongoose');

const conn = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser : true,
            useUnifiedTopology : true
        })
        console.log("Database Connected Successfully!");
    }catch{
        console.log("Database Failed To Connect!");
    }
}

module.exports = conn