var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var socketio = require("socket.io");  // importing socket.io 
var redis = require('redis');
const { default: Axios } = require('axios');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var app = express();

// Step 2 of Socket IO would come here
// Create the http server 
const server = require('http').createServer(app); 

// Create the Socket IO server on  
// the top of http server 
const io = socketio(server); 

//Connecting to Redis Server thru the client tool
const redisClient = redis.createClient({
  host: '127.0.0.1',
  port: 6379
});

redisClient.on("error", function(error) {
  console.error(error);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/chat', function(req, res){
  // server setup 
  res.sendFile(__dirname + '/views/index.html');
});

// Todo: Work with redis cache middleware setup
app.use('/accounts', cache, function(req, res){
  
  redisClient.set('totalAccounts', 1000);

  redisClient.get('totalAccounts', (err, count) =>{
    res.send('Total Accounts: ' + count);
  });  
});

io.on('connection', (socket) => { //establishing connection with the socket io client
  let userName;
  console.log('a user connected');
  // working on to capture the emitted event set_nick_name
  socket.on("set_nick_name", (_nickname) => {
    // This console.log would appear in server console. 
    // During the session I was looking for it in browser console
    userName = _nickname;
    io.emit('get_nick_name', userName);
  });
  
  socket.on('open_chat_session', (msg) => {  // receives data thru custom event emitted by socket.io client    
    io.emit('chatting', userName + ": " + msg);  // emitting a msg from the socket io server to all the socket io clients
  });
});

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

module.exports = { app: app, server: server }; 
