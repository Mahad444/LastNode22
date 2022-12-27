const user = require('../Model/user')
require('dotenv').config();

module.exports = {
    register:async(req,res)=>{
        user.create()
        res.status(200)
            "Added successfully"
    },
    add:async(req,res)=>{
        res.send("successfully ")
    }
}