const express = require('express');
const router = express.Router()

const UserController = require('./logic');

router.post('/register',UserController.register)


module.exports= router;