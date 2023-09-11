const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const indexRouter = require('./routes/index')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const db = require('./config').mongoURI
const app = express()
const port = process.env.PORT || 3000;

const cors = require('cors')

app.use(cors())

// Connexion à MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Schéma MongoDB pour les utilisateurs
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Clé secrète pour signer les tokens JWT (gardez ceci secret en production)
const secretKey = 'TpeApp2023';
// Route de connexion utilisateur
app.post('/login', async (req, res) => {
	try {
	  const { username, password } = req.body;
  
	  // Recherche de l'utilisateur dans la base de données
	  const user = await User.findOne({ username });
  
	  if (!user) {
		return res.status(401).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect' });
	  }
  
	  // Vérification du mot de passe
	  const isPasswordValid = await bcrypt.compare(password, user.password);
  
	  if (!isPasswordValid) {
		return res.status(401).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect' });
	  }
  
	  // Création d'un token JWT
	  const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
  
	  res.json({ token });
	} catch (error) {
	  console.error(error);
	  res.status(500).json({ message: 'Erreur lors de la connexion' });
	}
  });
  
  // Middleware pour vérifier l'authentification JWT
  function verifyToken(req, res, next) {
	const token = req.headers.authorization;
  
	if (!token) {
	  return res.status(403).json({ message: 'Token manquant' });
	}
  
	// Vérifie le token JWT
	jwt.verify(token, secretKey, (err, decoded) => {
	  if (err) {
		return res.status(401).json({ message: 'Token invalide' });
	  }
  
	  req.username = decoded.username;
	  next();
	});
  }
  
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
