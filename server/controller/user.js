const User = require('../model/user')

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

        //check data saved or not using json format
        res.json({ user: 'created' })
    },

    signIn: async(req, res, next) =>{
        console.log('usercontroller signin')
    },

    secrets: async(req, res, next) =>{
        console.log('usercontroller secretes')
    }
}