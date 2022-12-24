const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const app = express();
const router = require('./Controller/api')
app.use(router);
app.use(cors());

app.listen(5500 ,()=>{
    console.log("application running http://loaclhost/5500/")
} )

mongoose.connect('mongodb://localhost:27017/LoanDB');