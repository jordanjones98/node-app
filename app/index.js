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
        title: 'Home',
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
