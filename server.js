const {
    request,
    response
} = require('express');
const express = require('express');
const path = require('path');
const app = express();
const funcion = require('./app'); //importo  las funciones
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
const port = 3000;

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, './View/Menu.html'));
});
app.get('/Rmedicine', (request, response) => {
    response.sendFile(path.join(__dirname, './View/RegisterMedicine.html'));
});
app.get('/Menu', (request, response) => {
    response.sendFile(path.join(__dirname, './View/Menu.html'));
});
app.listen(port, () => {
    console.log('puerto listo');
})