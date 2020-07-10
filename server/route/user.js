const express = require('express')
const router = require('express-promise-router')();
//const router = express.Router  // we can use this also used for routes with promises code

const Usercontroller = require('../controller/user')
const { validateBody, schemas } = require('../validate/validate')

router.route('/signup')
  .post(validateBody(schemas.authSchema), Usercontroller.signUp);

router.route('/signin')
  .post(Usercontroller.signIn);

router.route('/secrets')
  .get(Usercontroller.secrets);


module.exports = router;