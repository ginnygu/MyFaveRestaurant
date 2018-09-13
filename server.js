//requiring all the dependencies
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');

// set up the routers
const restRouter = require('./routes/restaurantRoutes');


//create a port
const PORT = process.env.PORT || 3000;

// start up express
const app = express();

// set up morgan to nodemon with morgan
app.use(logger('dev'));

//set up ejs
app.set('view engine', 'ejs');

//using body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//using method-override to make UPDATE and DELETE work
app.use(methodOverride('_method'));

//use path for styling purpose
app.use(express.static(__dirname + '/public'));

//creating routes
app.use('/restaurants', restRouter);


//create a welcome page
app.get('/', (req, res) => {
    res.render('/restaurants');
});

//using nodemon and begin the server
app.listen(PORT, () => {
    console.log(`Everything is working, listening to ${PORT}, in ${app.get('env')} mode`)
})

module.exports = { app };