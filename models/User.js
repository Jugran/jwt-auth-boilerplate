
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'name is required'],
        lowercase: true,
    },
    username: {
        type: String,
        required: [true, 'username is required'],
        unique: true,
        lowercase: true,
        minlength: [8, 'username should be atleast 8 characters long']
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        minlength: [8, 'password should be atleast 8 characters long']
    }
});


// hash password before it is saved in db
userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// login static method
userSchema.statics.login = async function(username, password){
    const user = await this.findOne({ username });

    if (user){
        const verified = await bcrypt.compare(password, user.password);
        
        if (verified){
            return user;    
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect username');
}

const User = mongoose.model('user', userSchema);

module.exports = User;