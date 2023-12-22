const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Cristian Umanzor',
        titulo: 'Tutorial de Node'
    });
});

app.use('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Cristian Umanzor',
        titulo: 'Tutorial de Node'
    });
});

app.use('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Cristian Umanzor',
        titulo: 'Tutorial de Node'
    });
});

app.get('*', (req, res) => {
    res.render('404');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});