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
const port = 3005;

app.get('/', (request, response) => { //el servidor recibe la ruta ver  
    response.sendFile(path.join(__dirname, './View/Menu.html'));
});
app.get('/RegisterMedicine', (request, response) => {
    response.sendFile(path.join(__dirname, './forms/RegisterMedicine.html'));
});
app.post('/RegisterMedicine', (request,response) => {
    console.log('llego un post Añadir');
    funcion.RegisterMedicine(request.body);
    response.redirect('/RegisterMedicine')
});
app.get('/Menu', (request, response) => {
    response.sendFile(path.join(__dirname, './View/Menu.html'));
    
});
app.get('/SeeMedicine', (request, response) => {//para obtener la vista de SeeMedicine.html
    response.sendFile(path.join(__dirname, './View/SeeMedicine.html'));
});
app.get('/SeeMedicineV', (request, response) => {
    var listMedicine = funcion.SeeMedicine();
    response.send(listMedicine);
});

app.listen(port, () => {
    console.log('puerto listo');
})