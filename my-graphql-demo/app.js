var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser-graphql');
const { graphqlHTTP } = require("express-graphql");  // for Graph QL Setup

const graphql = require('graphql');

const {GraphQLSchema, GraphQLObjectType, GraphQLString } = graphql;

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name:'Hello',
    fields: () => ({
      info: {
        type: GraphQLString,
        resolve: () => 'Hello GraphQL Learners'
      }
    })
  })
});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.graphql());

app.use('/', indexRouter);
app.use('/users', usersRouter);
//setting up an end point for graphql 


app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

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
