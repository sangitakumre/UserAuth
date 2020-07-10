const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//database connection 
mongoose.connect('mongodb://localhost/UserAuth');

const app = express();

//middelware
app.use(logger('dev'));
app.use(bodyParser.json());

//routes
app.use('/user', require('./route/user'));

// create server
const port = process.env.PORT || 4000;
app.listen(port, 'localhost', ()=>{
    console.log(`server listening at ${port}`)
})



//note: for package.json in script area write below code for 
//when nodemon install perticular project
//"start-dev": "nodemon index.js"
// run command for nodemon - npm run start-dev