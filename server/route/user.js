const express = require('express')
const router = require('express-promise-router')();
//const router = express.Router  // we can use this also used for routes with promises code
const passport = require ('passport');
const passportConf = require('../passport')

const Usercontroller = require('../controller/user')
const { validateBody, schemas } = require('../validate/validate')
const passportSignIn = passport.authenticate('local', {session:false})
const passportJWT = passport.authenticate('jwt', {session:false})

router.route('/signup')
  .post(validateBody(schemas.authSchema), Usercontroller.signUp);

router.route('/signin')
  .post(validateBody(schemas.authSchema), passportSignIn, Usercontroller.signIn);

router.route('/secrets')
  .get(passportJWT, Usercontroller.secrets);


module.exports = router;  