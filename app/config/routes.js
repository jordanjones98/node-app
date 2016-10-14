const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const path = require('path')

// app.engine('.hbs', exphbs({
//     defaultLayout: 'main',
//     extname: '.hbs',
//     layoutsDir: path.join(__dirname, '/views/layouts')
// }))
//
// console.log(__dirname);
//
// app.set('view engine', '.hbs')
// app.set('views', path.join(__dirname, 'views'))

    app.get('/', (request, response) => {
        response.render('home', {
            name: 'Jordan'
        })
    })
    app.get('/login', (request, response) => {
        response.render('login')
    })
