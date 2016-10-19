// require('./config/connect.js')
const path = require('path')
const exphbs = require('express-handlebars')
const _ = require('lodash')
const express = require('express')
const passport = require('passport')
const app = express()
const port = 80

console.log(__dirname)

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened')
    }

    console.log('server is listening on ', port)
})

// HTML
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

// Routes

app.get('/', (request, response) => {
    response.render('home', {
        name: 'Jordan',
        title: 'Home'
    })
})
app.get('/login', (request, response) => {
    response.render('login', {
        title: 'Login'
    })
})
app.get('/register', (request, response) => {
    response.render('register', {
        title: 'Register Now'
    })
})
app.get('/about', (request, response) => {
    response.render('about', {
        title: 'About Us'
    })
})
app.get('/home',(request, response) => {
    response.render('welcome', {
        title: 'Welcome'
    })
})


// End Routes (Make routes before this line)

// auth
app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/home/' + req.user.username);
  });

  app.post('/login',
   passport.authenticate('local', { successRedirect: '/',
                                    failureRedirect: '/login',
                                    failureFlash: true })
 );

  LocalStrategy = require('passport-local').Strategy;

  passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function(err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    }
  ));
