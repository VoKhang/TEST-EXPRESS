require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes')
const connectDatabase = require('./config/database');

//Connect database
connectDatabase();

// Use routes
routes(app)

//Use to read request body (post method)
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(express.static('resources'))   //Use to plug in others folders

//View engine
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'resources/views'));


app.listen(8080, 
	() => console.log(`Listening at http://localhost:8080`)
);
