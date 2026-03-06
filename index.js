const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index')

})

app.listen(port, () => {
    console.log(`Servidor inicializado en puerto ${port}`);
});

