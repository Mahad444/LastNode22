const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const app = express();
const router = require('./Controller/api')
app.use(router);
app.use(cors());

// const PORT = process.env.PORT || 3500

app.listen(3500, ()=>{
    console.log(`application running http://localhost:3500`);
} )

mongoose.connect('mongodb://localhost:27017/LoanDB');