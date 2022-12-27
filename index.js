const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const app = express();
const router = require('./Controller/api')
app.use(router);
app.use(cors());

const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{
    console.log(`application running http://localhost:${PORT}`);
} )

mongoose.connect('mongodb://localhost:27017/LoanDB');