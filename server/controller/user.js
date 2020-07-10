const User = require('../model/user')
const JWT = require('jsonwebtoken')
const { JWT_SECRETE } = require('../configurationToken')

//create token for user
signToken = user =>{
    return JWT.sign({
        iss:'userauth',
        sub:user.id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 1) // current time + 1 ahead
    }, JWT_SECRETE);
}

module.exports = {
    signUp: async (req, res, next) =>{
        //console.log('req.value.body', req.body)

         // data coming from input
        const { email, password } = req.body 

        //check email is already in use or not- here also put just email ES6
        const foundUser = await User.findOne({ email }) // await - take few second 
        if(foundUser){
            return res.status(403).json({ error: 'Email already in use' })
        }
        
        // check db fields with input fields both are same so write single fields-ES6
        const newUser = new User({ email, password })

        //after match both fields save data to the database - (await- data takes time for save)
        await newUser.save();

        //generate token
        const token = signToken(newUser)

        //respond with token
        res.status(200).json({ token })

        //check data saved or not using json format
        res.json({ user: 'created' })
    },

    signIn: async(req, res, next) =>{

        const token = signToken(req.user)
        res.status(200).json({ token });       
        //console.log('req.user', req.user)
        //console.log('successful login')
    },

    secrets: async(req, res, next) =>{
        console.log('managed all token')
        res.json({message:'send '})
    }
}