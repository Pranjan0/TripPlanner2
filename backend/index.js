const express = require('express');

//initializing express app
const app = express();
const port = 5000;

const userRouter = require('./routers/userRouter');
const placeRouter= require('./routers/placeRouter') 
const utilRouter= require('./routers/util') 

const cors = require('cors');

// middleware - used to read request ,check its address(app.use) and send to respective router

// to parse json data into javascript object
app.use(express.json());

// for allowing frontend to access backend
app.use( cors({ origin : ['http://localhost:3000'] }) )
app.use('/user', userRouter);
app.use('/place', placeRouter);
app.use('/util', utilRouter);
app.get('/add', (req, res) => {
    res.send('Response from Express!');
});

app.get('/home', (req, res) => {
    res.send('Response from Express Home!');
});

app.use(express.static('./static/uploads'));

// starting the server
app.listen(port, () => console.log('server started'));