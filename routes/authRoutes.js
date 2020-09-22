
const { Router } = require('express');

const authController = require('../controllers/authController'); 
const auth = Router();

auth.post('/signup', authController.signup);
auth.post('/login', authController.login);
auth.post('/logout', authController.logout);


module.exports = auth;