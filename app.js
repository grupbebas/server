var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/groupw1', {useNewUrlParser: true});

var usersRouter = require('./routes/users');
var zomatoRouter = require('./routes/zomato')
const placeRoute = require('./routes/place')
const matrixRoute = require('./routes/matrix')
const newsRoutes = require('./routes/news');
var mealRouter = require('./routes/meal');

var app = express();

app.use(cors())

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token");
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
	next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/users', usersRouter);
app.use('/zomato', zomatoRouter)
app.use('/place', placeRoute);
app.use('/matrix/distance', matrixRoute);
app.use('/news', newsRoutes);
app.use('/meals', mealRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
