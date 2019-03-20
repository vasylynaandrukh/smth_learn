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

const DataBase = require ('./DataBase').getInstance();
DataBase.setModels();

const mainControllers = require('./controllers/main');
const loginPageControllers = require('./controllers/loginPage');
const logUser = require('./controllers/user/loginUser');
const deleteUser = require('./controllers/user/deleteUser');


app.get('/',mainControllers );
app.get('/login',loginPageControllers );

app.post('/loguser', logUser);
app.get('/delete/:id', deleteUser);

app.listen(5000, () => {
    console.log('listening 5000...')
});
