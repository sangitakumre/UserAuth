const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy
const { JWT_SECRETE } = require('./configurationToken')
const User = require('./model/user')

//JSON WEB TOKEN STRATEGY
passport.use(new JwtStrategy({
 jwtFromRequest: ExtractJwt.fromHeader('authorization'), // check location of data comes from
 secretOrKey: JWT_SECRETE
}, async (payload, done) =>{
    try{
        //find the user specified in token
        const user = await User.findById(payload.sub)

        //if user doesn't exists handle it
        if(!user){
            return done(null, false);
        } 

        //other
        done(null, user)
        
    }catch(error){
        done(error,false)
    }
}));

// LOCAL STRATEGY FOR SIGNIN
passport.use(new LocalStrategy({
    usernameField:'email'
}, async (email, password, done)=>{
   
    try{
        //find user given email
        const user = await User.findOne({ email });

        //if not handle it
        if(!user){
            return done(null, false)
        }

        //check if password is correct
        const isMatch = await user.isValidPassword(password)
    
        //if not handle it
        if(!isMatch){
            return done(null, false)
        }

        //otherwise return user
        done(null, user)

    }catch(error){
        done(error,false)
    }
    
}))