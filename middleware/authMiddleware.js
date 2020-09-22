const jwt = require('jsonwebtoken');

const config = require('../config.json');
const User = require('../models/User');

const verifyAuth = (req, res, next) => {
    const token = req.cookies.jwtToken;

    if (token){
        // verify token 
        jwt.verify(token, config.jwtSecret, async (err, decodedToken) => {
            if (err){
                // console.log('Auth error ', err);
                return res.status(403).json({ 'success': 'FAILED', 'message' : 'invalid or expired token'});
            }
            const user = await User.findById(decodedToken.id);
            req.user = user.username;
            // user is authenticated
            // res.locals.token = decodedToken;
            // console.log(decodedToken);
            next();
        });
    }
    else{
        res.status(401).json({ 'success': 'FAILED', 'message' : 'user not authenticated'});
    }
    
}

module.exports = verifyAuth;