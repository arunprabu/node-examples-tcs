var createError = require('http-errors'); 
var express = require('express'); 
var path = require('path'); 
var cookieParser = require('cookie-parser'); 
var logger = require('morgan'); 
var socketio = require("socket.io"); 
var app = express(); 
  
var indexRouter = require('./routes/index'); 
var usersRouter = require('./routes/users'); 
  
// Create the http server 
const server = require('http').createServer(app); 
  
// Create the Socket IO server on  
// the top of http server 
const io = socketio(server); 
  
// View engine setup 
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'hbs'); 
  
app.use(logger('dev')); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 
app.use(cookieParser()); 
app.use(express.static(path.join(__dirname, 'public'))); 
  
app.use('/', indexRouter); 
app.use('/chat', function(req, res){
  res.sendFile(__dirname + '/views/index.html');
}); 

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});
  
// Catch 404 and forward to error handler 
app.use(function (req, res, next) { 
    next(createError(404)); 
}); 
  
// Error handler 
app.use(function (err, req, res, next) { 
  
    // Set locals, only providing error 
    // in development 
    res.locals.message = err.message; 
    res.locals.error = req.app.get('env')  
            === 'development' ? err : {}; 
  
    // render the error page 
    res.status(err.status || 500); 
    res.render('error'); 
}); 
  
module.exports = { app: app, server: server }; 