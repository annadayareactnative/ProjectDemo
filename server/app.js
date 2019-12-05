var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var bodyParser= require('body-parser');
// var MongoClient = require('mongodb').MongoClient;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require("./routes/authServer");

var testAPIRouter = require("./routes/testAPI");
var transactionRouter = require("./routes/transactionsAPI");
var usermngtRouter = require("./routes/usersmngtAPI");
var hospitalRouter = require("./routes/hospitalsAPI");
var terminalRouter = require("./routes/terminalsAPI");
var profileRouter = require("./routes/profileAPI");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// app.use('./connection.js');

//mongodb connection
// var db
// var dbcon = MongoClient.connect('mongodb+srv://testadmin:testadmin@cluster0-u2pmb.mongodb.net/test?retryWrites=true&w=majority', (err, client) => {
//     if (err) return console.log(err)
//     db = client.db('tvsdb') // database name
//     app.listen(3000, () => {
//       console.log('listening on 9000 with successful mongodb connection')
//     })
// })

// app.set("dbcon", dbcon);
// const mongoClient = require('../connection');

// mongoClient.connectToServer(function( err, client ) {
//   if (err) console.log(err);
//   // start the rest of your app here
// })

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/authServer', authRouter);

app.use("/testAPI", testAPIRouter);
app.use("/transactionsAPI", transactionRouter);
app.use("/usersmngtAPI", usermngtRouter);
app.use("/hospitalsAPI", hospitalRouter);
app.use("/terminalsAPI", terminalRouter);
app.use("/profileAPI", profileRouter);

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