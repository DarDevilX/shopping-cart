const express = require('express');
const route = express.Router()

// import From Product Controller
const {getAllProduct,getProductById} = require('../controller/produtcsController')


route.get('/',getAllProduct)
route.get('/:id',getProductById)

module.exports = route