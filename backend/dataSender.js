require('dotenv').config()

const db = require('./config/db');
const productData = require('./data/products')
const product = require('./models/product')

db()

const importData = async()=>{
    try{
        await product.deleteMany({})
        await product.insertMany(productData)
        console.log("Import Data Succeed!");
        process.exit()
    }catch{
        console.log("Error Importing Data");
        process.exit(1)
    }
}

importData()