const mongoose = require('mongoose')
const Schema = mongoose.Schema

//create schema - schema is fields for database
const UserSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        minlength:8,
        maxlength:15
    }
});

//create a  model
const User = mongoose.model('user', UserSchema);

//export model
module.exports = User