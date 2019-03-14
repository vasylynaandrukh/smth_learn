const express = require('express');
const app = express();
const path = require('path');
const expBars = require('express-handlebars');

app.use(express.static(path.join(__dirname, 'views')));

app.use(express.json());
app.use(express.urlencoded());

app.engine('.handlebars', expBars({
    extname: '.handlebars',
}));
app.set('views engine', '.handlebars');
app.set('views', path.join(__dirname, 'views'));

// let DataBase = require ('./DataBase').getInstance();
// DataBase.setModels();

app.get('/', (req, res) => {
    res.render('main')
});

app.listen(5000, () => {
    console.log('listening 5000...')
});
