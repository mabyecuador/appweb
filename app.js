var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var bodyParser = require('body-parser')

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'views')));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/views', express.static(path.resolve(__dirname, 'views')));
app.use('/public', express.static(path.resolve(__dirname, 'public')));



//Estáticos
app.use('/empleados/public/javascripts',express.static(path.join(__dirname, 'public/javascripts')));
app.use('/empleados/public/stylesheets',express.static(path.join(__dirname, 'public/stylesheets')));


//Estáticos empleados/eliminar
app.use('/empleados/eliminar/public/javascripts',express.static(path.join(__dirname, 'public/javascripts')));
app.use('/empleados/eliminar/public/stylesheets',express.static(path.join(__dirname, 'public/stylesheets')));

//Estáticos empleados/buscar
app.use('/empleados/buscar/public/javascripts',express.static(path.join(__dirname, 'public/javascripts')));
app.use('/empleados/buscar/public/stylesheets',express.static(path.join(__dirname, 'public/stylesheets')));



//Estáticos tareas/eliminar
app.use('/tareas/eliminar/public/javascripts',express.static(path.join(__dirname, 'public/javascripts')));
app.use('/tareas/eliminar/public/stylesheets',express.static(path.join(__dirname, 'public/stylesheets')));

//Estáticos tareas/buscar
app.use('/tareas/buscar/public/javascripts',express.static(path.join(__dirname, 'public/javascripts')));
app.use('/tareas/buscar/public/stylesheets',express.static(path.join(__dirname, 'public/stylesheets')));





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

app.listen(8080, function () {
  console.log('Servidor listo');
});


module.exports = app;
