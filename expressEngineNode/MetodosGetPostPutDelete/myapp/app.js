var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var produtosRouter = require('./routes/produtos');
var methodOverride = require('method-override')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); // pasta views puxar
app.set('view engine', 'ejs'); // ativar ejs

app.use(logger('dev'));
app.use(express.json()); // para o post
app.use(express.urlencoded({ extended: false })); // para o post
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride("_method")) // use do put delete


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/produtos', produtosRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

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

app.listen(3300);