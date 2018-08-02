//requiring all the dependencies
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('body-parser');
const passport = require('body-parser');
const path = require('path');

// set up the routers
const restRouter = require('./routes/restaurantRoutes');
const authRouter = require('./routes/auth');


//create a port
const PORT = process.env.PORT || 3000;

// start up express
const app = express();

// set up morgan to nodemon with morgan
app.use(logger('dev'));

//set up ejs
app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

//using body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//using passport
// app.use(passport.initialize());
// app.use(passport.session());

//creating routes
app.use('/restaurants', restRouter);
// app.use('/auth', authRouter);

//create a welcome page
app.get('/', (req, res) => {
    res.send(`Welcome to My Favorite Restaurant`);
});

//using nodemon and begin the server
app.listen(PORT, () => {
    console.log(`Everything is working, listening to ${PORT}, in ${app.get('env')} mode`)
})

module.exports = { app };