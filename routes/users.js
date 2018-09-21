const express = require('express');

const router = express.Router();

const {
  login, forgotPassword, register, getUserByEmail, putUser,
} = require('../controllers/users.controllers');

/* GET users listing. */


router
  .post('/login', login)

  .post('/register', register)

  .post('/forgotPassword', forgotPassword)

  .post('/find', getUserByEmail)
  .post('/update', putUser);

module.exports = router;
