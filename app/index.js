// require('./config/connect.js')
require('./config/routes.js')
const path = require('path')
const exphbs = require('express-handlebars')
const _ = require('lodash')
const express = require('express')
const passport = require('passport')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const app = express()
const port = 8080
var selectAll
var userID = '1'
var mysql = require('mysql')

console.log(__dirname)

// sql
con.query('SELECT * FROM user WHERE id=' + userID,function(err,rows){
  if(err) throw err;

  // SHOWS ROWS IN CONSOLE
  console.log('Data received from Db:\n');
  console.log(rows);
});

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


con.query('SELECT * FROM user',function(err, rows){
  if(err) throw err;

  console.log('Data received from Db:\n');
  console.log(rows);
  output = rows
});

app.get('/', (request, response) => {
    response.render('home', {
        name: 'Jordan',
        title: 'Home',
        output: output.firstName
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


// End Routes (Make routes before this line)
