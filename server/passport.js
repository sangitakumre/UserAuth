const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy
const GooglePlusTokenStrategy = require('passport-google-plus-token')
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


//Google strategy 
passport.use("googleToken", new GooglePlusTokenStrategy({
    clientID:'546256481688-21pkfu7ee5ud8k7eu976dmvi9hcbp6bh.apps.googleusercontent.com',
    clientSecret:'u5vZEM3V7r5AEi0Lyyv6ywxm'
}, async(accessToken, refreshToken, profile, done) => {
    try{

        console.log('accessToken', accessToken)
        console.log('refreshToken', refreshToken)
        console.log('profile', profile)
    
        //check whether this current user exist in our DB
        const existingUser = await User.findOne({ "google.id": profile.id });
    
        if(existingUser){
            console.log('user already exist')
            return done(null, existingUser)
        }

        console.log('user dose not exist we creating new user')
    
        // if new user 
        const newUser = new User({
            method: 'google',
            google: {
                id: profile.id,
                email: profile.emails[0].value
            }
        });
    
        await newUser.save();
        done(null, newUser);

    }catch(error){
        done(error, false, error.message)
    }
    
}));

// LOCAL STRATEGY FOR SIGNIN
passport.use(new LocalStrategy({
    usernameField:'email'
}, async (email, password, done)=>{
   
    try{
        //find user given email
        const user = await User.findOne({ "local.email": email });

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