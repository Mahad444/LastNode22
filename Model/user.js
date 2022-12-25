const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name:{type : String , required : true ["Name is a must"] },
    email: {type:String , required : true ["Email is a must"], unique : true},
    password: {type:String , required : true ["Password is a must"]}
})

module.exports = mongoose.model('user', UserSchema);
