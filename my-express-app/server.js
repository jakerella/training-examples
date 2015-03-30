
var http = require('http'),
    path = require('path'),
    
    // express modules
    express = require('express'),
    bodyParser = require('body-parser'),
    
    // routes
    index = require('./routes/index'),
    users = require('./routes/users'),
    fib = require('./routes/fibonacci');

// Express core app and modules

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


// Routes

app.use('/', index);
app.use('/User', users);
app.use('/fibonacci', fib);


// Error handlers

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  
  if (req.xhr) {
      res.json({
        message: err.message,
        code: err.status
      });
  } else {
      res.render('error', {
        message: err.message,
        error: err
      });
  }
});


// Server initialization

var server = http.createServer(app);

if (require.main === module) {
    console.log('starting server');
    
    server.listen(
        process.env.PORT || 8686,
        function() {
            console.log('Server running...');
        }
    );
} else {
    module.exports = app;
    console.log('The application was included by require()');
}