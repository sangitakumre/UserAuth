const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const passport = require('passport');
const Schema = mongoose.Schema

//create schema - schema is fields for database
const UserSchema = new Schema({
    method: {
        type: String,
        enum : ['local', 'google'],
        required : true
    },
    local: {
        email:{
            type:String,
            lowercase:true
        },
        password:{
            type:String,
            minlength:8,
            maxlength:15
        }
    },
    google: {
        id: {
            type: String
        },
        email: {
            type: String,
            lowercase: true
        }

    }
    
});

//create password encrypt format so before creating user in database so use pre fun
UserSchema.pre('save', async function(next){
    try{

        if(this.method !== 'local'){
            next();
        }
       //generate salt
       const salt = await bcrypt.genSalt(10);

       //generate password hash
       const passwordHash = await bcrypt.hash(this.local.password, salt);

       //assign the hash value to original password
       this.local.password = passwordHash;
       next();

        //    console.log('salt', salt)
        //    console.log('this password', this.password)
        //    console.log('haspwd', passwordHash)

    }catch(error){
      next(error);
    }
});

UserSchema.methods.isValidPassword = async function(newPassword){
    try{
      return await bcrypt.compare(newPassword, this.local.password)
    }catch(error){
        throw new Error(error)
    }
}



//create a  model
const User = mongoose.model('user', UserSchema);

//export model
module.exports = User