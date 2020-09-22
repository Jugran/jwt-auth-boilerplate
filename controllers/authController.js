
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const config = require('../config.json');

const handleErrors = (err) => {
    let errors = {};

    // duplicate username
    if (err.code === 11000){
        errors['username'] = 'This username already exists';
        return errors;
    }

    // login errors
    if (err.message === 'incorrect username'){
        errors['username'] = 'This username is not registered';
        return errors;
    }

    if (err.message === 'incorrect password'){
        errors['password'] = 'Password is incorrect';
        return errors;
    }

    // validation errors
    if (err.message.includes('user validation failed')){
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
};

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({id}, config.jwtSecret, { expiresIn: maxAge });
};

module.exports.signup = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.create({ username, password });
        console.log('user ', user);
        res.status(201).json({'success': 'OK', 'message': `user with username: ${user.username} created succesfully`});
        
    } catch (err) {
        console.log(err);

        res.status(400).json({'success': 'FAILED', 'message': handleErrors(err)});
    }
}

module.exports.login = async (req, res) => {
    const { username, password } = req.body;
    
    try {
        const user = await User.login(username, password);
        const jwtToken = createToken(user._id);

        res.cookie('jwtToken', jwtToken, { maxAge: maxAge * 1000 });
        res.status(200).json({ 'success': 'OK', 'message': {'user_id': user._id} });  
    } 
    catch (err) {
        res.status(401).json({'success': 'FAILED', 'message': handleErrors(err)});
    }
}

module.exports.logout = (req, res) => {
    res.cookie('jwtToken', '', { maxAge: 1} );
    res.status(200).json({ 'success': 'OK', 'message': 'User logged out' });  
}