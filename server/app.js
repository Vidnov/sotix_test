var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')
var indexRouter = require('./routes/index');
var registratorRouter = require('./routes/registrator');
var lessonsRouter = require('./routes/lessons');
var idLessonsRouter = require('./routes/idLessons');
var idBlocksLessonRouter = require('./routes/idBlocksLessons');
var idvideoRouter = require('./routes/idVideo');
var idtestRouter = require('./routes/idTest');
var idexamRouter = require('./routes/idExam');
var loginRouter = require('./routes/login');
var database = require('./database');
var testRouter = require('./routes/test');
var questionRoutes = require('./routes/question');
var checkAnswerRoutes = require('./routes/checkAnswer');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const withAuth = (router) => {
  return router;
}
app.use('/', indexRouter);
app.use('/registrator', registratorRouter);
app.use('/lesson', lessonsRouter);
app.use('/lesson/', idLessonsRouter);
app.use('/blockslesson/', idBlocksLessonRouter)
app.use('/lessonvideo/', idvideoRouter)
// app.use('/lessontest/',idtestRouter)
app.use('/lessontest/', withAuth(idtestRouter))
app.use('/lessonexam/', idexamRouter)
app.use('/login/', loginRouter)
app.use('/test', testRouter)
app.use('/question', questionRoutes)
app.use('/checkanswer',checkAnswerRoutes)
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
