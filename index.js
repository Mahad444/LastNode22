const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const app = express();
app.use(cors());

app.listen(process.env.port || 6600 ,()=>{
    console.log("application running http://loaclhost/6600")
} )

mongoose.connect('mongodb://localhost:27017/LoanDB');