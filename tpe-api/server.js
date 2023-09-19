const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const indexRouter = require('./routes/index')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const db = require('./config').mongoURI
const app = express()
const port = process.env.PORT || 3000;
const mongodbpasswordcloud = 'qs5OKrUSIrlPT1JY';
const mongodbusernamecloud = 'smsapp';

const cors = require('cors')

app.use(cors())

// Connexion à MongoDB
mongoose
  .connect('mongodb+srv://smsapp:qs5OKrUSIrlPT1JY@cluster0.b1emc8l.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));
  
// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(function(req, res, next){
	setTimeout(next, Math.floor( ( Math.random() * 2000 ) + 100 ) )
});

app.use('/', indexRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message
	res.locals.error = req.app.get('env') === 'development' ? err : {}

	// render the error page
	res.status(err.status || 500)
	res.render('error')
})
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app
