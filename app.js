
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/authRoutes');
const verifyAuth = require('./middleware/authMiddleware');

const app = express();

const mongodbURI = 'mongodb+srv://DB_URI'

mongoose.connect(mongodbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
    .then(result => app.listen(5000))
    .catch(err => console.log('Mongo Error', err));

const corsConfig = {
    credentials: true, 
    origin: 'http://localhost:3000'
}

// middleware
app.use(cors(corsConfig));
app.use(express.json());
app.use(cookieParser());


// routes
app.get('/', (req, res) => {
    res.status(200).json({'success': 'ok', 'message': 'hello world'});
})

app.use('/auth', authRoutes);

app.get('/profile', verifyAuth, (req, res) => {

    const user = req.user;
    
    res.status(200).json({'success': 'ok', 'message': 'logged in user ' + user});
})


