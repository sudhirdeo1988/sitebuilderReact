const express = require('express');
// User Router
const authRouter = express.Router();

const {
    checkAuth,
    getuser,
    adduser,
    updateuser
} = require('../controllers/authController');

authRouter
  .route('/user')
  .get(getuser)
  .patch(checkAuth,updateuser)
  .post(checkAuth,adduser);


module.exports = authRouter;